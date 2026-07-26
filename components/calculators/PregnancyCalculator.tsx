"use client";

import {
  Activity,
  ArrowRight,
  Baby,
  CalendarDays,
  CalendarRange,
  CheckCircle2,
  CircleAlert,
  ClipboardList,
  Clock3,
  Droplets,
  HeartPulse,
  Info,
  MoonStar,
  RotateCcw,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Target,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";

type CalculationMethod = "last-period" | "conception" | "due-date";

type PregnancyResult = {
  pregnancyStartDate: Date;
  conceptionDate: Date;
  dueDate: Date;
  currentDate: Date;
  pregnancyWeek: number;
  pregnancyDay: number;
  completedWeeks: number;
  displayWeek: number;
  totalPassedDays: number;
  remainingDays: number;
  remainingWeeks: number;
  remainingExtraDays: number;
  trimester: string;
  trimesterNumber: 1 | 2 | 3;
  pregnancyMonth: number;
  progress: number;
  currentWeekStart: Date;
  currentWeekEnd: Date;
  secondTrimesterDate: Date;
  thirdTrimesterDate: Date;
  fullTermStartDate: Date;
};

type WeekGuide = {
  badge: string;
  title: string;
  babyDevelopment: string;
  motherChanges: string;
  focus: string;
  appointment: string;
};

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const DEFAULT_CYCLE_LENGTH = 28;
const PREGNANCY_LENGTH_DAYS = 280;
const MINIMUM_CYCLE_LENGTH = 20;
const MAXIMUM_CYCLE_LENGTH = 45;

const calculationMethods: Array<{
  id: CalculationMethod;
  title: string;
  shortTitle: string;
  description: string;
}> = [
  {
    id: "last-period",
    title: "Son adet tarihine göre",
    shortTitle: "Son adet",
    description:
      "Son adet tarihinizin ilk gününü ve ortalama döngü uzunluğunuzu kullanır.",
  },
  {
    id: "conception",
    title: "Döllenme tarihine göre",
    shortTitle: "Döllenme",
    description:
      "Tahmini döllenme tarihini biliyorsanız gebelik başlangıcını hesaplar.",
  },
  {
    id: "due-date",
    title: "Doğum tarihine göre",
    shortTitle: "Doğum tarihi",
    description:
      "Doktorunuzun belirttiği tahmini doğum tarihinden gebelik haftasını bulur.",
  },
];

const cyclePresets = [24, 26, 28, 30, 32, 35];

function createLocalDate(dateValue: string) {
  if (!dateValue) {
    return null;
  }

  const [year, month, day] = dateValue.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  const date = new Date(year, month - 1, day);
  date.setHours(0, 0, 0, 0);

  return date;
}

function createToday() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return today;
}

function addDays(date: Date, numberOfDays: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + numberOfDays);
  result.setHours(0, 0, 0, 0);

  return result;
}

function differenceInCalendarDays(laterDate: Date, earlierDate: Date) {
  const laterUtc = Date.UTC(
    laterDate.getFullYear(),
    laterDate.getMonth(),
    laterDate.getDate(),
  );

  const earlierUtc = Date.UTC(
    earlierDate.getFullYear(),
    earlierDate.getMonth(),
    earlierDate.getDate(),
  );

  return Math.floor((laterUtc - earlierUtc) / DAY_IN_MILLISECONDS);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function formatInputDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function getTrimester(
  completedWeeks: number,
): {
  title: string;
  number: 1 | 2 | 3;
} {
  if (completedWeeks <= 13) {
    return {
      title: "1. trimester",
      number: 1,
    };
  }

  if (completedWeeks <= 27) {
    return {
      title: "2. trimester",
      number: 2,
    };
  }

  return {
    title: "3. trimester",
    number: 3,
  };
}

function getPregnancyMonth(totalPassedDays: number) {
  const approximateMonth = Math.floor(totalPassedDays / 30.44) + 1;

  return clamp(approximateMonth, 1, 10);
}

function getWeekGuide(displayWeek: number): WeekGuide {
  if (displayWeek <= 4) {
    return {
      badge: "Başlangıç dönemi",
      title: "Gebeliğin ilk haftaları",
      babyDevelopment:
        "Bu dönem gebelik takviminin başlangıç kısmıdır. Gebeliğin oluşumu ve rahme yerleşme süreci bu zaman aralığıyla ilişkilendirilir.",
      motherChanges:
        "Adet gecikmesi, yorgunluk veya göğüs hassasiyeti gibi erken belirtiler görülebilir; ancak belirtiler kişiden kişiye değişebilir.",
      focus:
        "Gebelik şüphesi varsa test sonucu ve sağlık uzmanı değerlendirmesiyle doğrulama yapılması önemlidir.",
      appointment:
        "Pozitif gebelik testi sonrasında ilk kontrol zamanını sağlık uzmanınızla planlayabilirsiniz.",
    };
  }

  if (displayWeek <= 8) {
    return {
      badge: "Erken gebelik",
      title: "Hızlı değişim dönemi",
      babyDevelopment:
        "Embriyonik gelişimin hızlı ilerlediği erken gebelik dönemidir. Organ ve sistemlerin temel gelişim süreci devam eder.",
      motherChanges:
        "Bulantı, koku hassasiyeti, uyku ihtiyacında artış ve sık idrara çıkma gibi değişiklikler yaşanabilir.",
      focus:
        "Düzenli beslenme, yeterli sıvı tüketimi ve doktor tarafından önerilen desteklerin kullanılması önemlidir.",
      appointment:
        "İlk gebelik değerlendirmesi ve ultrason planlaması bu haftalarda yapılabilir.",
    };
  }

  if (displayWeek <= 13) {
    return {
      badge: "Birinci trimester",
      title: "İlk trimesterin son bölümü",
      babyDevelopment:
        "Birinci trimester tamamlanmaya yaklaşırken bebeğin temel gelişim süreçleri devam eder.",
      motherChanges:
        "Bazı kişilerde bulantı ve yorgunluk azalırken bazı kişilerde belirtiler devam edebilir.",
      focus:
        "Kontrol takvimine uyulması, dengeli beslenme ve riskli belirtilerin takip edilmesi önemlidir.",
      appointment:
        "Doktorunuz gerekli gördüğünde trimester taramaları ve rutin kontroller planlanabilir.",
    };
  }

  if (displayWeek <= 17) {
    return {
      badge: "İkinci trimester",
      title: "Daha dengeli hissedilen dönem",
      babyDevelopment:
        "Bebeğin büyümesi ve hareket sisteminin gelişimi devam eder. Gelişim değerlendirmeleri ultrasonla takip edilebilir.",
      motherChanges:
        "Enerji artışı hissedilebilir ve karın bölgesindeki değişimler daha belirgin hâle gelebilir.",
      focus:
        "Uygun egzersiz, dengeli kilo takibi ve günlük sıvı ihtiyacının karşılanması önemlidir.",
      appointment:
        "Rutin gebelik kontrolleri ve doktorunuzun önerdiği taramalar sürdürülmelidir.",
    };
  }

  if (displayWeek <= 21) {
    return {
      badge: "Gebeliğin ortası",
      title: "Hareketlerin hissedilebildiği dönem",
      babyDevelopment:
        "Bebeğin büyümesi devam eder ve bazı anne adayları ilk hareketleri bu dönemde fark etmeye başlayabilir.",
      motherChanges:
        "Karın büyümesi, cilt değişiklikleri ve iştah farklılıkları daha belirgin olabilir.",
      focus:
        "Uyku pozisyonu, doğru duruş ve yeterli dinlenme konusunda özen gösterilebilir.",
      appointment:
        "Doktorunuz ayrıntılı ultrason ve gelişim değerlendirmesi için uygun zamanı belirleyebilir.",
    };
  }

  if (displayWeek <= 27) {
    return {
      badge: "İkinci trimester sonu",
      title: "Büyümenin hızlandığı dönem",
      babyDevelopment:
        "Bebeğin büyümesi ve çeşitli sistemlerinin olgunlaşması devam eder.",
      motherChanges:
        "Bel ağrısı, mide yanması veya bacak krampları gibi gebeliğe bağlı yakınmalar ortaya çıkabilir.",
      focus:
        "Düzenli dinlenme, uygun hareket ve doktor önerilerine göre beslenme düzeninin sürdürülmesi önemlidir.",
      appointment:
        "Rutin takiplerin yanı sıra doktorunuz gerekli test ve değerlendirmeleri planlayabilir.",
    };
  }

  if (displayWeek <= 31) {
    return {
      badge: "Üçüncü trimester",
      title: "Doğuma hazırlık dönemi",
      babyDevelopment:
        "Bebek büyümeye ve doğum sonrası yaşama hazırlanacak şekilde gelişimini sürdürmeye devam eder.",
      motherChanges:
        "Nefes darlığı, uyku güçlüğü veya daha sık dinlenme ihtiyacı hissedilebilir.",
      focus:
        "Doğum planı, hastane hazırlığı ve günlük hareket düzeni gözden geçirilebilir.",
      appointment:
        "Üçüncü trimester kontrolleri doktorun belirlediği sıklıkta sürdürülmelidir.",
    };
  }

  if (displayWeek <= 35) {
    return {
      badge: "Doğuma yaklaşırken",
      title: "Hazırlıkların yoğunlaştığı dönem",
      babyDevelopment:
        "Bebeğin kilo kazanımı ve olgunlaşma süreci devam eder. Pozisyonu kontrollerde değerlendirilebilir.",
      motherChanges:
        "Pelvik baskı, sık idrara çıkma ve uyku düzeninde değişiklikler yaşanabilir.",
      focus:
        "Doğum çantası, ulaşım planı ve sağlık kuruluşuyla iletişim bilgileri hazır tutulabilir.",
      appointment:
        "Doktor kontrollerinin sıklığı gebeliğin gidişine göre artırılabilir.",
    };
  }

  if (displayWeek <= 37) {
    return {
      badge: "Geç gebelik",
      title: "Doğuma çok az kaldı",
      babyDevelopment:
        "Bebek doğuma hazırlık sürecini sürdürür. Gelişim ve pozisyon kontrollerle takip edilir.",
      motherChanges:
        "Yalancı kasılmalar, pelvik baskı ve hareketlerde yavaşlama hissedilebilir.",
      focus:
        "Doğum belirtileri hakkında doktorunuzdan bilgi alın ve size verilen takip planını uygulayın.",
      appointment:
        "Kontroller daha sık hâle gelebilir ve doğum planı ayrıntılandırılabilir.",
    };
  }

  if (displayWeek <= 40) {
    return {
      badge: "Term dönem",
      title: "Doğum her an başlayabilir",
      babyDevelopment:
        "Gebelik term dönemindedir. Doğum zamanı kişiden kişiye değişebilir.",
      motherChanges:
        "Kasılmalar, su gelmesi veya doğumun diğer belirtileri açısından dikkatli olunmalıdır.",
      focus:
        "Doktorunuzun verdiği doğum belirtileri ve hastaneye başvuru talimatlarını esas alın.",
      appointment:
        "Kontroller doktorunuzun belirlediği yakın takip programına göre yapılmalıdır.",
    };
  }

  return {
    badge: "Tahmini tarih sonrası",
    title: "Doktor takibi önemlidir",
    babyDevelopment:
      "Tahmini doğum tarihinin geçmesi doğumun mutlaka geciktiği anlamına gelmez; tarihler yaklaşık olarak hesaplanır.",
    motherChanges:
      "Gebeliğin bu döneminde takip sıklığı ve değerlendirmeler sağlık uzmanı tarafından belirlenmelidir.",
    focus:
      "Kendi başınıza bekleme kararı vermek yerine doktorunuzun takip planını uygulayın.",
    appointment:
      "Tahmini doğum tarihi geçtiyse sağlık uzmanınızla iletişimde kalmanız önemlidir.",
  };
}

function getMethodLabel(method: CalculationMethod) {
  return (
    calculationMethods.find((item) => item.id === method)?.title ??
    "Gebelik hesaplama"
  );
}

function buildPregnancyResult({
  pregnancyStartDate,
  conceptionDate,
  dueDate,
  currentDate,
}: {
  pregnancyStartDate: Date;
  conceptionDate: Date;
  dueDate: Date;
  currentDate: Date;
}): PregnancyResult {
  const rawPassedDays = differenceInCalendarDays(
    currentDate,
    pregnancyStartDate,
  );

  const totalPassedDays = Math.max(0, rawPassedDays);
  const completedWeeks = Math.floor(totalPassedDays / 7);
  const pregnancyDay = totalPassedDays % 7;
  const displayWeek = Math.max(1, completedWeeks + 1);

  const rawRemainingDays = differenceInCalendarDays(dueDate, currentDate);
  const remainingDays = Math.max(0, rawRemainingDays);
  const remainingWeeks = Math.floor(remainingDays / 7);
  const remainingExtraDays = remainingDays % 7;

  const trimester = getTrimester(completedWeeks);
  const progress = clamp(
    (totalPassedDays / PREGNANCY_LENGTH_DAYS) * 100,
    0,
    100,
  );

  return {
    pregnancyStartDate,
    conceptionDate,
    dueDate,
    currentDate,
    pregnancyWeek: completedWeeks,
    pregnancyDay,
    completedWeeks,
    displayWeek,
    totalPassedDays,
    remainingDays,
    remainingWeeks,
    remainingExtraDays,
    trimester: trimester.title,
    trimesterNumber: trimester.number,
    pregnancyMonth: getPregnancyMonth(totalPassedDays),
    progress,
    currentWeekStart: addDays(pregnancyStartDate, completedWeeks * 7),
    currentWeekEnd: addDays(pregnancyStartDate, completedWeeks * 7 + 6),
    secondTrimesterDate: addDays(pregnancyStartDate, 14 * 7),
    thirdTrimesterDate: addDays(pregnancyStartDate, 28 * 7),
    fullTermStartDate: addDays(pregnancyStartDate, 37 * 7),
  };
}

export default function PregnancyCalculator() {
  const [calculationMethod, setCalculationMethod] =
    useState<CalculationMethod>("last-period");

  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [conceptionDateInput, setConceptionDateInput] = useState("");
  const [dueDateInput, setDueDateInput] = useState("");
  const [currentDateInput, setCurrentDateInput] = useState(() =>
    formatInputDate(createToday()),
  );
  const [cycleLength, setCycleLength] = useState("28");

  const [result, setResult] = useState<PregnancyResult | null>(null);
  const [error, setError] = useState("");

  const today = useMemo(() => createToday(), []);
  const todayValue = useMemo(() => formatInputDate(today), [today]);

  const selectedMethod = useMemo(
    () =>
      calculationMethods.find((method) => method.id === calculationMethod) ??
      calculationMethods[0],
    [calculationMethod],
  );

  const weekGuide = useMemo(() => {
    if (!result) {
      return null;
    }

    return getWeekGuide(result.displayWeek);
  }, [result]);

  const clearFeedback = () => {
    setResult(null);
    setError("");
  };

  const changeMethod = (method: CalculationMethod) => {
    setCalculationMethod(method);
    clearFeedback();
  };

  const calculatePregnancy = () => {
    setError("");
    setResult(null);

    const currentDate = createLocalDate(currentDateInput);

    if (!currentDate) {
      setError("Lütfen hesaplama tarihini seçin.");
      return;
    }

    if (currentDate > today) {
      setError("Hesaplama tarihi bugünden ileri bir tarih olamaz.");
      return;
    }

    let pregnancyStartDate: Date;
    let conceptionDate: Date;
    let dueDate: Date;

    if (calculationMethod === "last-period") {
      const parsedLastPeriodDate = createLocalDate(lastPeriodDate);
      const parsedCycleLength = Number(cycleLength);

      if (!parsedLastPeriodDate) {
        setError("Lütfen son adet tarihinizin ilk gününü seçin.");
        return;
      }

      if (parsedLastPeriodDate > currentDate) {
        setError(
          "Son adet tarihi, seçilen hesaplama tarihinden ileri olamaz.",
        );
        return;
      }

      if (
        !Number.isFinite(parsedCycleLength) ||
        parsedCycleLength < MINIMUM_CYCLE_LENGTH ||
        parsedCycleLength > MAXIMUM_CYCLE_LENGTH
      ) {
        setError(
          `Adet döngüsü uzunluğunu ${MINIMUM_CYCLE_LENGTH} ile ${MAXIMUM_CYCLE_LENGTH} gün arasında girin.`,
        );
        return;
      }

      const cycleAdjustment =
        parsedCycleLength - DEFAULT_CYCLE_LENGTH;

      pregnancyStartDate = parsedLastPeriodDate;
      conceptionDate = addDays(
        pregnancyStartDate,
        14 + cycleAdjustment,
      );
      dueDate = addDays(
        pregnancyStartDate,
        PREGNANCY_LENGTH_DAYS + cycleAdjustment,
      );
    } else if (calculationMethod === "conception") {
      const parsedConceptionDate =
        createLocalDate(conceptionDateInput);

      if (!parsedConceptionDate) {
        setError("Lütfen tahmini döllenme tarihini seçin.");
        return;
      }

      if (parsedConceptionDate > currentDate) {
        setError(
          "Döllenme tarihi, seçilen hesaplama tarihinden ileri olamaz.",
        );
        return;
      }

      conceptionDate = parsedConceptionDate;
      pregnancyStartDate = addDays(conceptionDate, -14);
      dueDate = addDays(conceptionDate, 266);
    } else {
      const parsedDueDate = createLocalDate(dueDateInput);

      if (!parsedDueDate) {
        setError("Lütfen tahmini doğum tarihini seçin.");
        return;
      }

      pregnancyStartDate = addDays(
        parsedDueDate,
        -PREGNANCY_LENGTH_DAYS,
      );
      conceptionDate = addDays(pregnancyStartDate, 14);
      dueDate = parsedDueDate;

      if (
        differenceInCalendarDays(
          currentDate,
          pregnancyStartDate,
        ) < 0
      ) {
        setError(
          "Seçilen doğum tarihi ve hesaplama tarihi henüz başlamamış bir gebelik gösteriyor.",
        );
        return;
      }
    }

    const totalPassedDays = differenceInCalendarDays(
      currentDate,
      pregnancyStartDate,
    );

    if (totalPassedDays > 315) {
      setError(
        "Girilen tarihler 45 haftadan daha uzun bir gebelik süresi gösteriyor. Bilgileri kontrol edin.",
      );
      return;
    }

    setResult(
      buildPregnancyResult({
        pregnancyStartDate,
        conceptionDate,
        dueDate,
        currentDate,
      }),
    );
  };

  const resetCalculator = () => {
    setCalculationMethod("last-period");
    setLastPeriodDate("");
    setConceptionDateInput("");
    setDueDateInput("");
    setCurrentDateInput(todayValue);
    setCycleLength("28");
    setResult(null);
    setError("");
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-pink-100 bg-gradient-to-br from-pink-50 via-white to-fuchsia-50 px-5 py-7 sm:px-7 md:px-9 md:py-9">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-fuchsia-200/30 blur-3xl" />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white shadow-lg shadow-pink-200">
            <Baby size={31} strokeWidth={2.2} />
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-pink-700 shadow-sm backdrop-blur">
              <Sparkles size={14} />
              Gelişmiş gebelik takvimi
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl md:text-4xl">
              Gebelik haftanızı ve tahmini doğum tarihinizi hesaplayın
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Son adet tarihi, tahmini döllenme tarihi veya doktorunuzun
              belirlediği tahmini doğum tarihini kullanarak gebelik
              takviminizi görüntüleyin.
            </p>
          </div>
        </div>

        <div className="relative mt-7 grid gap-3 sm:grid-cols-3">
          {calculationMethods.map((method) => {
            const isActive = calculationMethod === method.id;

            return (
              <button
                key={method.id}
                type="button"
                onClick={() => changeMethod(method.id)}
                className={`rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? "border-pink-400 bg-white shadow-lg shadow-pink-100"
                    : "border-white/80 bg-white/60 hover:border-pink-200 hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`text-sm font-bold ${
                      isActive ? "text-pink-700" : "text-slate-800"
                    }`}
                  >
                    {method.shortTitle}
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${
                      isActive
                        ? "bg-pink-600 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                  >
                    {isActive ? (
                      <CheckCircle2 size={15} />
                    ) : (
                      <ArrowRight size={14} />
                    )}
                  </span>
                </div>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {method.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
        <section className="border-b border-slate-200 p-5 sm:p-7 md:p-9 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-pink-100 text-pink-700">
              <ClipboardList size={20} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-pink-600">
                Hesaplama bilgileri
              </p>
              <h3 className="text-lg font-black text-slate-900">
                {selectedMethod.title}
              </h3>
            </div>
          </div>

          <div className="mt-7 space-y-6">
            {calculationMethod === "last-period" && (
              <>
                <div>
                  <label
                    htmlFor="last-period-date"
                    className="mb-2.5 block text-sm font-bold text-slate-800"
                  >
                    Son adet tarihinin ilk günü
                  </label>

                  <div className="relative">
                    <CalendarDays
                      size={20}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="last-period-date"
                      type="date"
                      value={lastPeriodDate}
                      max={currentDateInput || todayValue}
                      onChange={(event) => {
                        setLastPeriodDate(event.target.value);
                        clearFeedback();
                      }}
                      className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2.5 flex items-center justify-between gap-3">
                    <label
                      htmlFor="cycle-length"
                      className="block text-sm font-bold text-slate-800"
                    >
                      Ortalama adet döngüsü
                    </label>

                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">
                      20–45 gün
                    </span>
                  </div>

                  <div className="relative">
                    <input
                      id="cycle-length"
                      type="number"
                      min={MINIMUM_CYCLE_LENGTH}
                      max={MAXIMUM_CYCLE_LENGTH}
                      inputMode="numeric"
                      value={cycleLength}
                      onChange={(event) => {
                        setCycleLength(event.target.value);
                        clearFeedback();
                      }}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 pr-16 text-sm font-semibold text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                      gün
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {cyclePresets.map((preset) => {
                      const isSelected =
                        Number(cycleLength) === preset;

                      return (
                        <button
                          key={preset}
                          type="button"
                          onClick={() => {
                            setCycleLength(String(preset));
                            clearFeedback();
                          }}
                          className={`rounded-xl border px-3 py-2 text-xs font-bold transition ${
                            isSelected
                              ? "border-pink-500 bg-pink-50 text-pink-700"
                              : "border-slate-200 bg-white text-slate-600 hover:border-pink-300 hover:text-pink-700"
                          }`}
                        >
                          {preset} gün
                        </button>
                      );
                    })}
                  </div>

                  <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
                    <Info
                      size={15}
                      className="mt-0.5 shrink-0 text-slate-400"
                    />
                    Döngünüz düzenli değilse hesaplanan tarih daha fazla
                    değişkenlik gösterebilir.
                  </p>
                </div>
              </>
            )}

            {calculationMethod === "conception" && (
              <div>
                <label
                  htmlFor="conception-date"
                  className="mb-2.5 block text-sm font-bold text-slate-800"
                >
                  Tahmini döllenme tarihi
                </label>

                <div className="relative">
                  <Target
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="conception-date"
                    type="date"
                    value={conceptionDateInput}
                    max={currentDateInput || todayValue}
                    onChange={(event) => {
                      setConceptionDateInput(event.target.value);
                      clearFeedback();
                    }}
                    className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />
                    <p className="text-xs leading-6 text-blue-800">
                      Döllenme günü çoğu zaman kesin olarak bilinemez. Bu
                      seçeneği yalnızca yaklaşık tarihi bildiğinizde
                      kullanın.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {calculationMethod === "due-date" && (
              <div>
                <label
                  htmlFor="due-date"
                  className="mb-2.5 block text-sm font-bold text-slate-800"
                >
                  Tahmini doğum tarihi
                </label>

                <div className="relative">
                  <CalendarRange
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="due-date"
                    type="date"
                    value={dueDateInput}
                    onChange={(event) => {
                      setDueDateInput(event.target.value);
                      clearFeedback();
                    }}
                    className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                  />
                </div>

                <div className="mt-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
                  <div className="flex items-start gap-3">
                    <Stethoscope
                      size={19}
                      className="mt-0.5 shrink-0 text-violet-600"
                    />
                    <p className="text-xs leading-6 text-violet-800">
                      Bu alanı doktorunuz veya ultrason değerlendirmesi
                      sonucunda verilen tahmini doğum tarihini biliyorsanız
                      kullanabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="current-date"
                className="mb-2.5 block text-sm font-bold text-slate-800"
              >
                Hesaplama tarihi
              </label>

              <div className="relative">
                <Clock3
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="current-date"
                  type="date"
                  value={currentDateInput}
                  max={todayValue}
                  onChange={(event) => {
                    setCurrentDateInput(event.target.value);
                    clearFeedback();
                  }}
                  className="w-full rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-sm font-semibold text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
                />
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Bugünkü haftanızı hesaplamak için bu alanı değiştirmeden
                bırakabilirsiniz.
              </p>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800"
            >
              <CircleAlert
                className="mt-0.5 shrink-0 text-red-600"
                size={20}
              />
              <p className="text-sm font-semibold leading-6">
                {error}
              </p>
            </div>
          )}

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={calculatePregnancy}
              className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 px-6 py-4 text-sm font-black text-white shadow-lg shadow-pink-200 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-pink-200 focus:outline-none focus:ring-4 focus:ring-pink-200"
            >
              <Sparkles size={20} />
              Gebeliği hesapla
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-black text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
            >
              <RotateCcw size={19} />
              Tümünü temizle
            </button>
          </div>

          <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <div className="flex items-start gap-3">
              <ShieldAlert
                size={20}
                className="mt-0.5 shrink-0 text-amber-600"
              />

              <div>
                <p className="text-sm font-bold text-amber-900">
                  Tıbbi değerlendirme değildir
                </p>
                <p className="mt-1 text-xs leading-6 text-amber-800">
                  Hesaplanan tarihler yaklaşık sonuçlardır. Gebelik
                  haftası ve doğum tarihi için doktor muayenesi ile
                  ultrason değerlendirmesini esas alın.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950 p-5 text-white sm:p-7 md:p-9">
          {result && weekGuide ? (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-500/15 px-3.5 py-2 text-xs font-bold text-pink-200">
                  <CheckCircle2 size={15} />
                  Hesaplama tamamlandı
                </span>

                <span className="text-xs font-semibold text-slate-400">
                  {getMethodLabel(calculationMethod)}
                </span>
              </div>

              <div className="mt-7 grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/20 via-white/[0.07] to-fuchsia-500/10 p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-pink-200">
                    Tahmini gebelik süresi
                  </p>

                  <div className="mt-4 flex flex-wrap items-end gap-x-4 gap-y-2">
                    <p className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                      {result.pregnancyWeek}
                    </p>

                    <p className="pb-1 text-lg font-bold text-slate-200">
                      hafta
                    </p>

                    <p className="pb-1 text-lg font-black text-pink-300">
                      {result.pregnancyDay} gün
                    </p>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    Gebeliğin yaklaşık{" "}
                    <strong className="text-white">
                      {result.displayWeek}. haftasındasınız
                    </strong>
                    .
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                    Tahmini doğum tarihi
                  </p>

                  <p className="mt-4 text-2xl font-black leading-tight text-white">
                    {formatDate(result.dueDate)}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-emerald-300">
                    <Clock3 size={17} />
                    {result.remainingDays > 0
                      ? `${result.remainingWeeks} hafta ${result.remainingExtraDays} gün kaldı`
                      : "Tahmini tarih gelmiş veya geçmiş olabilir"}
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.05] p-5 sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">
                      40 haftalık gebelik ilerlemesi
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Toplam {result.totalPassedDays} gün tamamlandı
                    </p>
                  </div>

                  <span className="rounded-full bg-pink-500/15 px-3 py-1.5 text-sm font-black text-pink-300">
                    %{result.progress.toFixed(1)}
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 transition-all duration-700"
                    style={{ width: `${result.progress}%` }}
                  />
                </div>

                <div className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-wide text-slate-500">
                  <span>Başlangıç</span>
                  <span>14. hafta</span>
                  <span>28. hafta</span>
                  <span>40. hafta</span>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                <ResultStat
                  label="Trimester"
                  value={result.trimester}
                  icon={<HeartPulse size={19} />}
                />

                <ResultStat
                  label="Gebelik ayı"
                  value={`${result.pregnancyMonth}. ay`}
                  icon={<CalendarRange size={19} />}
                />

                <ResultStat
                  label="Mevcut hafta"
                  value={`${result.displayWeek}. hafta`}
                  icon={<Activity size={19} />}
                />

                <ResultStat
                  label="Doğuma kalan"
                  value={`${result.remainingDays} gün`}
                  icon={<Clock3 size={19} />}
                />
              </div>

              <div className="mt-5 rounded-3xl border border-pink-400/20 bg-gradient-to-br from-pink-500/15 to-fuchsia-500/5 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-pink-500/20 text-pink-200">
                    <Baby size={25} />
                  </div>

                  <div>
                    <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-pink-200">
                      {weekGuide.badge}
                    </span>

                    <h3 className="mt-3 text-xl font-black text-white">
                      {weekGuide.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {weekGuide.babyDevelopment}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <GuideCard
                  icon={<HeartPulse size={20} />}
                  title="Anne adayındaki değişimler"
                  text={weekGuide.motherChanges}
                  tone="pink"
                />

                <GuideCard
                  icon={<Target size={20} />}
                  title="Bu haftanın odağı"
                  text={weekGuide.focus}
                  tone="violet"
                />

                <GuideCard
                  icon={<Stethoscope size={20} />}
                  title="Kontrol hatırlatması"
                  text={weekGuide.appointment}
                  tone="blue"
                />

                <GuideCard
                  icon={<CalendarDays size={20} />}
                  title="Hafta aralığı"
                  text={`${formatShortDate(
                    result.currentWeekStart,
                  )} – ${formatShortDate(result.currentWeekEnd)}`}
                  tone="emerald"
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <TimelineCard
                  label="2. trimester başlangıcı"
                  date={result.secondTrimesterDate}
                  active={result.trimesterNumber >= 2}
                />

                <TimelineCard
                  label="3. trimester başlangıcı"
                  date={result.thirdTrimesterDate}
                  active={result.trimesterNumber >= 3}
                />

                <TimelineCard
                  label="37. hafta başlangıcı"
                  date={result.fullTermStartDate}
                  active={result.completedWeeks >= 37}
                />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <MiniRecommendation
                  icon={<Droplets size={19} />}
                  title="Sıvı tüketimi"
                  text="Günlük sıvı ihtiyacınızı doktorunuzun önerileri doğrultusunda karşılayın."
                />

                <MiniRecommendation
                  icon={<Utensils size={19} />}
                  title="Dengeli beslenme"
                  text="Besin çeşitliliğine ve düzenli öğünlere özen gösterin."
                />

                <MiniRecommendation
                  icon={<MoonStar size={19} />}
                  title="Dinlenme"
                  text="Uyku düzeninizi koruyun ve yorulduğunuzda dinlenin."
                />
              </div>

              <div className="mt-5 rounded-3xl border border-amber-300/20 bg-amber-400/10 p-5">
                <div className="flex items-start gap-3">
                  <ShieldAlert
                    size={20}
                    className="mt-0.5 shrink-0 text-amber-300"
                  />

                  <div>
                    <p className="text-sm font-bold text-amber-100">
                      Sonucu nasıl değerlendirmelisiniz?
                    </p>

                    <p className="mt-2 text-xs leading-6 text-amber-100/80">
                      Son adet tarihi ve döngü bilgisine dayalı sonuçlar
                      tahminidir. Özellikle düzensiz döngü, geç yumurtlama
                      veya tarihlerin kesin bilinmemesi durumunda doktor
                      değerlendirmesiyle farklılık görülebilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex min-h-[720px] flex-col items-center justify-center text-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-[2rem] bg-pink-500/20 blur-2xl" />

                <div className="relative flex h-24 w-24 items-center justify-center rounded-[2rem] border border-pink-400/20 bg-pink-500/10 text-pink-300">
                  <Baby size={47} />
                </div>
              </div>

              <span className="mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-bold text-slate-300">
                Henüz hesaplama yapılmadı
              </span>

              <h3 className="mt-4 text-2xl font-black text-white sm:text-3xl">
                Gebelik takviminiz burada görünecek
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                Hesaplama yöntemini seçin, tarih bilgilerinizi girin ve
                gebelik haftası, trimester, doğum tarihi ve önemli
                dönemleri görüntüleyin.
              </p>

              <div className="mt-8 grid w-full max-w-lg gap-3 sm:grid-cols-3">
                <EmptyFeature
                  icon={<CalendarDays size={19} />}
                  label="Hafta ve gün"
                />

                <EmptyFeature
                  icon={<HeartPulse size={19} />}
                  label="Trimester"
                />

                <EmptyFeature
                  icon={<CalendarRange size={19} />}
                  label="Doğum tarihi"
                />
              </div>

              <div className="mt-8 w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex items-start gap-3 text-left">
                  <Info
                    size={18}
                    className="mt-0.5 shrink-0 text-pink-300"
                  />

                  <p className="text-xs leading-6 text-slate-400">
                    En yaygın hesaplama yöntemi son adet tarihinin ilk
                    gününü kullanmaktır. Ortalama döngünüz 28 günden
                    farklıysa gerçek süreyi girebilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function ResultStat({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/15 text-pink-300">
        {icon}
      </div>

      <p className="mt-4 text-xs font-semibold text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-lg font-black text-white">
        {value}
      </p>
    </div>
  );
}

function GuideCard({
  icon,
  title,
  text,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  tone: "pink" | "violet" | "blue" | "emerald";
}) {
  const toneClasses = {
    pink: "bg-pink-500/15 text-pink-300",
    violet: "bg-violet-500/15 text-violet-300",
    blue: "bg-blue-500/15 text-blue-300",
    emerald: "bg-emerald-500/15 text-emerald-300",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${toneClasses[tone]}`}
      >
        {icon}
      </div>

      <h4 className="mt-4 text-sm font-black text-white">
        {title}
      </h4>

      <p className="mt-2 text-xs leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function TimelineCard({
  label,
  date,
  active,
}: {
  label: string;
  date: Date;
  active: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        active
          ? "border-emerald-400/20 bg-emerald-500/10"
          : "border-white/10 bg-white/[0.04]"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <CalendarDays
          size={18}
          className={active ? "text-emerald-300" : "text-slate-500"}
        />

        {active && (
          <CheckCircle2 size={17} className="text-emerald-300" />
        )}
      </div>

      <p className="mt-3 text-xs font-semibold leading-5 text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-black text-white">
        {formatShortDate(date)}
      </p>
    </div>
  );
}

function MiniRecommendation({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center gap-2 text-pink-300">
        {icon}
        <p className="text-sm font-black text-white">{title}</p>
      </div>

      <p className="mt-2 text-xs leading-5 text-slate-400">
        {text}
      </p>
    </div>
  );
}

function EmptyFeature({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-pink-500/10 text-pink-300">
        {icon}
      </div>

      <p className="mt-3 text-xs font-bold text-slate-300">
        {label}
      </p>
    </div>
  );
}