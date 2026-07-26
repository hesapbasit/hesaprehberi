"use client";

import {
  Activity,
  AlertCircle,
  Calculator,
  Check,
  CircleGauge,
  Dumbbell,
  Info,
  RotateCcw,
  Ruler,
  Scale,
  Sparkles,
  Target,
  UserRound,
  Weight,
} from "lucide-react";
import {
  useMemo,
  useState,
  type ChangeEvent,
} from "react";

type Gender = "male" | "female";

type BodyFatCategory =
  | "very-low"
  | "athletic"
  | "fitness"
  | "average"
  | "high"
  | "invalid";

type CalculatorResult = {
  valid: boolean;
  bodyFatPercentage: number;
  category: BodyFatCategory;
  categoryTitle: string;
  categoryDescription: string;
  fatMass: number | null;
  leanBodyMass: number | null;
  currentWeight: number | null;
  scalePosition: number;
  minimumReference: number;
  maximumReference: number;
  referenceText: string;
  calculationText: string;
};

type ValidationErrors = {
  height?: string;
  neck?: string;
  waist?: string;
  hip?: string;
  weight?: string;
  general?: string;
};

type QuickExample = {
  label: string;
  gender: Gender;
  height: string;
  neck: string;
  waist: string;
  hip: string;
  weight: string;
  description: string;
};

type CategoryTheme = {
  gradient: string;
  solid: string;
  soft: string;
  border: string;
  text: string;
  badge: string;
  icon: string;
};

const MIN_HEIGHT = 120;
const MAX_HEIGHT = 230;
const MIN_NECK = 20;
const MAX_NECK = 70;
const MIN_WAIST = 40;
const MAX_WAIST = 250;
const MIN_HIP = 50;
const MAX_HIP = 250;
const MIN_WEIGHT = 30;
const MAX_WEIGHT = 350;

const quickExamples: QuickExample[] = [
  {
    label: "Erkek örneği",
    gender: "male",
    height: "178",
    neck: "39",
    waist: "87",
    hip: "",
    weight: "78",
    description: "178 cm · 78 kg",
  },
  {
    label: "Kadın örneği",
    gender: "female",
    height: "165",
    neck: "33",
    waist: "72",
    hip: "98",
    weight: "62",
    description: "165 cm · 62 kg",
  },
  {
    label: "Aktif yaşam",
    gender: "male",
    height: "182",
    neck: "40",
    waist: "82",
    hip: "",
    weight: "80",
    description: "182 cm · 80 kg",
  },
];

const maleRanges = [
  {
    key: "very-low",
    title: "Çok düşük",
    range: "%0–5,9",
    min: 0,
    max: 5.9,
  },
  {
    key: "athletic",
    title: "Atletik",
    range: "%6–13",
    min: 6,
    max: 13,
  },
  {
    key: "fitness",
    title: "Formda",
    range: "%13,1–17",
    min: 13.1,
    max: 17,
  },
  {
    key: "average",
    title: "Ortalama",
    range: "%17,1–24",
    min: 17.1,
    max: 24,
  },
  {
    key: "high",
    title: "Yüksek",
    range: "%24 üzeri",
    min: 24.1,
    max: 50,
  },
] as const;

const femaleRanges = [
  {
    key: "very-low",
    title: "Çok düşük",
    range: "%0–13,9",
    min: 0,
    max: 13.9,
  },
  {
    key: "athletic",
    title: "Atletik",
    range: "%14–20",
    min: 14,
    max: 20,
  },
  {
    key: "fitness",
    title: "Formda",
    range: "%20,1–24",
    min: 20.1,
    max: 24,
  },
  {
    key: "average",
    title: "Ortalama",
    range: "%24,1–31",
    min: 24.1,
    max: 31,
  },
  {
    key: "high",
    title: "Yüksek",
    range: "%31 üzeri",
    min: 31.1,
    max: 55,
  },
] as const;

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

function parseNumber(value: string) {
  if (!value.trim()) {
    return Number.NaN;
  }

  return Number(value.replace(",", "."));
}

function formatNumber(value: number) {
  return numberFormatter.format(value);
}

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function getCategory(
  gender: Gender,
  percentage: number,
): BodyFatCategory {
  if (!Number.isFinite(percentage)) {
    return "invalid";
  }

  if (gender === "male") {
    if (percentage < 6) return "very-low";
    if (percentage <= 13) return "athletic";
    if (percentage <= 17) return "fitness";
    if (percentage <= 24) return "average";
    return "high";
  }

  if (percentage < 14) return "very-low";
  if (percentage <= 20) return "athletic";
  if (percentage <= 24) return "fitness";
  if (percentage <= 31) return "average";
  return "high";
}

function getCategoryContent(
  gender: Gender,
  category: BodyFatCategory,
) {
  switch (category) {
    case "very-low":
      return {
        title: "Çok düşük yağ oranı",
        description:
          "Tahmini oran genel yetişkin referanslarının alt bölümünde. Çok düşük yağ oranları hormonal ve metabolik işlevler açısından ayrıca değerlendirilmelidir.",
        minimumReference: gender === "male" ? 6 : 14,
        maximumReference: gender === "male" ? 13 : 20,
        referenceText:
          gender === "male"
            ? "Erkekler için atletik genel referans: %6–13"
            : "Kadınlar için atletik genel referans: %14–20",
      };

    case "athletic":
      return {
        title: "Atletik aralık",
        description:
          "Tahmini yağ oranınız atletik olarak sınıflandırılan genel referans aralığında bulunuyor. Bu aralık herkes için gerekli veya sürdürülebilir bir hedef değildir.",
        minimumReference: gender === "male" ? 6 : 14,
        maximumReference: gender === "male" ? 13 : 20,
        referenceText:
          gender === "male"
            ? "Erkekler için atletik aralık: %6–13"
            : "Kadınlar için atletik aralık: %14–20",
      };

    case "fitness":
      return {
        title: "Formda aralık",
        description:
          "Tahmini yağ oranınız aktif yaşam ve fitness düzeyiyle ilişkilendirilen genel referans aralığında bulunuyor.",
        minimumReference: gender === "male" ? 14 : 21,
        maximumReference: gender === "male" ? 17 : 24,
        referenceText:
          gender === "male"
            ? "Erkekler için formda aralık: %14–17"
            : "Kadınlar için formda aralık: %21–24",
      };

    case "average":
      return {
        title: "Ortalama aralık",
        description:
          "Tahmini yağ oranınız yetişkinlerde yaygın görülen genel referans aralığında bulunuyor. Sonucu diğer sağlık göstergeleriyle birlikte değerlendirin.",
        minimumReference: gender === "male" ? 18 : 25,
        maximumReference: gender === "male" ? 24 : 31,
        referenceText:
          gender === "male"
            ? "Erkekler için ortalama aralık: %18–24"
            : "Kadınlar için ortalama aralık: %25–31",
      };

    case "high":
      return {
        title: "Yüksek yağ oranı",
        description:
          "Tahmini oran genel referansların üst bölümünde. Kişisel sağlık hedefleri belirlenirken bel çevresi, yaşam tarzı ve sağlık geçmişi birlikte değerlendirilmelidir.",
        minimumReference: gender === "male" ? 18 : 25,
        maximumReference: gender === "male" ? 24 : 31,
        referenceText:
          gender === "male"
            ? "Erkekler için ortalama genel referans: %18–24"
            : "Kadınlar için ortalama genel referans: %25–31",
      };

    default:
      return {
        title: "Sonuç hesaplanamadı",
        description:
          "Ölçülerinizi kontrol ederek geçerli değerler girin.",
        minimumReference: 0,
        maximumReference: 0,
        referenceText: "Geçerli ölçüler bekleniyor",
      };
  }
}

function getTheme(category: BodyFatCategory): CategoryTheme {
  switch (category) {
    case "very-low":
      return {
        gradient: "from-sky-600 via-cyan-600 to-blue-700",
        solid: "bg-sky-600",
        soft: "bg-sky-50",
        border: "border-sky-200",
        text: "text-sky-700",
        badge: "bg-sky-100 text-sky-700",
        icon: "↓",
      };

    case "athletic":
      return {
        gradient: "from-cyan-600 via-sky-600 to-blue-700",
        solid: "bg-cyan-600",
        soft: "bg-cyan-50",
        border: "border-cyan-200",
        text: "text-cyan-700",
        badge: "bg-cyan-100 text-cyan-700",
        icon: "A",
      };

    case "fitness":
      return {
        gradient: "from-emerald-600 via-teal-600 to-cyan-700",
        solid: "bg-emerald-600",
        soft: "bg-emerald-50",
        border: "border-emerald-200",
        text: "text-emerald-700",
        badge: "bg-emerald-100 text-emerald-700",
        icon: "✓",
      };

    case "average":
      return {
        gradient: "from-amber-500 via-orange-500 to-amber-700",
        solid: "bg-amber-500",
        soft: "bg-amber-50",
        border: "border-amber-200",
        text: "text-amber-800",
        badge: "bg-amber-100 text-amber-800",
        icon: "i",
      };

    case "high":
      return {
        gradient: "from-orange-600 via-rose-600 to-red-700",
        solid: "bg-rose-600",
        soft: "bg-rose-50",
        border: "border-rose-200",
        text: "text-rose-700",
        badge: "bg-rose-100 text-rose-700",
        icon: "!",
      };

    default:
      return {
        gradient: "from-slate-700 via-slate-800 to-slate-950",
        solid: "bg-slate-700",
        soft: "bg-slate-50",
        border: "border-slate-200",
        text: "text-slate-700",
        badge: "bg-slate-100 text-slate-700",
        icon: "?",
      };
  }
}

function calculateScalePosition(
  gender: Gender,
  percentage: number,
) {
  const maximum = gender === "male" ? 40 : 50;

  return clamp((percentage / maximum) * 100, 2, 98);
}

function validateInputs({
  gender,
  height,
  neck,
  waist,
  hip,
  weight,
}: {
  gender: Gender;
  height: string;
  neck: string;
  waist: string;
  hip: string;
  weight: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};

  const heightValue = parseNumber(height);
  const neckValue = parseNumber(neck);
  const waistValue = parseNumber(waist);
  const hipValue = parseNumber(hip);
  const weightValue = parseNumber(weight);

  if (
    !Number.isFinite(heightValue) ||
    heightValue < MIN_HEIGHT ||
    heightValue > MAX_HEIGHT
  ) {
    errors.height = `Boy değeri ${MIN_HEIGHT} ile ${MAX_HEIGHT} cm arasında olmalıdır.`;
  }

  if (
    !Number.isFinite(neckValue) ||
    neckValue < MIN_NECK ||
    neckValue > MAX_NECK
  ) {
    errors.neck = `Boyun çevresi ${MIN_NECK} ile ${MAX_NECK} cm arasında olmalıdır.`;
  }

  if (
    !Number.isFinite(waistValue) ||
    waistValue < MIN_WAIST ||
    waistValue > MAX_WAIST
  ) {
    errors.waist = `Bel çevresi ${MIN_WAIST} ile ${MAX_WAIST} cm arasında olmalıdır.`;
  }

  if (
    Number.isFinite(waistValue) &&
    Number.isFinite(neckValue) &&
    waistValue <= neckValue
  ) {
    errors.waist =
      "Bel çevresi, boyun çevresinden büyük olmalıdır.";
  }

  if (gender === "female") {
    if (
      !Number.isFinite(hipValue) ||
      hipValue < MIN_HIP ||
      hipValue > MAX_HIP
    ) {
      errors.hip = `Kalça çevresi ${MIN_HIP} ile ${MAX_HIP} cm arasında olmalıdır.`;
    }

    if (
      Number.isFinite(waistValue) &&
      Number.isFinite(hipValue) &&
      Number.isFinite(neckValue) &&
      waistValue + hipValue <= neckValue
    ) {
      errors.hip = "Bel, kalça ve boyun ölçülerinizi kontrol edin.";
    }
  }

  if (
    weight.trim() &&
    (!Number.isFinite(weightValue) ||
      weightValue < MIN_WEIGHT ||
      weightValue > MAX_WEIGHT)
  ) {
    errors.weight = `Kilo değeri ${MIN_WEIGHT} ile ${MAX_WEIGHT} kg arasında olmalıdır.`;
  }

  return errors;
}

function calculateBodyFat({
  gender,
  height,
  neck,
  waist,
  hip,
  weight,
}: {
  gender: Gender;
  height: string;
  neck: string;
  waist: string;
  hip: string;
  weight: string;
}): CalculatorResult | null {
  const errors = validateInputs({
    gender,
    height,
    neck,
    waist,
    hip,
    weight,
  });

  if (Object.keys(errors).length > 0) {
    return null;
  }

  const heightValue = parseNumber(height);
  const neckValue = parseNumber(neck);
  const waistValue = parseNumber(waist);
  const hipValue = parseNumber(hip);
  const weightValue = weight.trim() ? parseNumber(weight) : null;

  const centimetersToInches = 0.3937007874;

  const heightInches = heightValue * centimetersToInches;
  const neckInches = neckValue * centimetersToInches;
  const waistInches = waistValue * centimetersToInches;
  const hipInches = hipValue * centimetersToInches;

  let bodyFatPercentage: number;
  let calculationText: string;

  if (gender === "male") {
    bodyFatPercentage =
      86.01 * Math.log10(waistInches - neckInches) -
      70.041 * Math.log10(heightInches) +
      36.76;

    calculationText =
      "86,01 × log10(Bel − Boyun) − 70,041 × log10(Boy) + 36,76";
  } else {
    bodyFatPercentage =
      163.205 *
        Math.log10(waistInches + hipInches - neckInches) -
      97.684 * Math.log10(heightInches) -
      78.387;

    calculationText =
      "163,205 × log10(Bel + Kalça − Boyun) − 97,684 × log10(Boy) − 78,387";
  }

  if (
    !Number.isFinite(bodyFatPercentage) ||
    bodyFatPercentage <= 0 ||
    bodyFatPercentage > 75
  ) {
    return null;
  }

  const category = getCategory(gender, bodyFatPercentage);
  const categoryContent = getCategoryContent(gender, category);

  const fatMass =
    weightValue !== null
      ? weightValue * (bodyFatPercentage / 100)
      : null;

  const leanBodyMass =
    weightValue !== null && fatMass !== null
      ? weightValue - fatMass
      : null;

  return {
    valid: true,
    bodyFatPercentage,
    category,
    categoryTitle: categoryContent.title,
    categoryDescription: categoryContent.description,
    fatMass,
    leanBodyMass,
    currentWeight: weightValue,
    scalePosition: calculateScalePosition(
      gender,
      bodyFatPercentage,
    ),
    minimumReference: categoryContent.minimumReference,
    maximumReference: categoryContent.maximumReference,
    referenceText: categoryContent.referenceText,
    calculationText,
  };
}

function InputField({
  id,
  label,
  description,
  value,
  placeholder,
  unit,
  minimum,
  maximum,
  error,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  value: string;
  placeholder: string;
  unit: string;
  minimum: number;
  maximum: number;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;

  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <label
            htmlFor={id}
            className="block text-sm font-black text-slate-900"
          >
            {label}
          </label>

          <p
            id={descriptionId}
            className="mt-1 text-xs leading-5 text-slate-500"
          >
            {description}
          </p>
        </div>

        <span className="shrink-0 text-xs font-semibold text-slate-400">
          {minimum}–{maximum} {unit}
        </span>
      </div>

      <div className="relative mt-3">
        <Ruler
          aria-hidden="true"
          size={20}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={`${descriptionId} ${errorId}`}
          className={`h-16 w-full rounded-2xl border bg-white pl-12 pr-20 text-lg font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
              : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
          }`}
        />

        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
          {unit}
        </span>
      </div>

      <div className="mt-2 min-h-5">
        {error ? (
          <p
            id={errorId}
            className="text-xs font-semibold leading-5 text-rose-600"
          >
            {error}
          </p>
        ) : (
          <p
            id={errorId}
            className="text-xs leading-5 text-slate-400"
          >
            Ondalıklı değer için virgül veya nokta kullanabilirsiniz.
          </p>
        )}
      </div>
    </div>
  );
}

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("178");
  const [neck, setNeck] = useState("39");
  const [waist, setWaist] = useState("87");
  const [hip, setHip] = useState("");
  const [weight, setWeight] = useState("78");
  const [hasInteracted, setHasInteracted] = useState(false);

  const validationErrors = useMemo(
    () =>
      validateInputs({
        gender,
        height,
        neck,
        waist,
        hip,
        weight,
      }),
    [gender, height, neck, waist, hip, weight],
  );

  const result = useMemo(
    () =>
      calculateBodyFat({
        gender,
        height,
        neck,
        waist,
        hip,
        weight,
      }),
    [gender, height, neck, waist, hip, weight],
  );

  const theme = getTheme(
    result?.category ?? "invalid",
  );

  const visibleErrors = hasInteracted
    ? validationErrors
    : {};

  const activeRanges =
    gender === "male" ? maleRanges : femaleRanges;

  function updateField(
    setter: (value: string) => void,
    value: string,
  ) {
    setter(value);
    setHasInteracted(true);
  }

  function selectGender(selectedGender: Gender) {
    setGender(selectedGender);
    setHasInteracted(true);

    if (selectedGender === "male") {
      setHip("");
    } else if (!hip) {
      setHip("98");
    }
  }

  function applyExample(example: QuickExample) {
    setGender(example.gender);
    setHeight(example.height);
    setNeck(example.neck);
    setWaist(example.waist);
    setHip(example.hip);
    setWeight(example.weight);
    setHasInteracted(true);
  }

  function resetCalculator() {
    setGender("male");
    setHeight("");
    setNeck("");
    setWaist("");
    setHip("");
    setWeight("");
    setHasInteracted(false);
  }

  function restoreDefaults() {
    setGender("male");
    setHeight("178");
    setNeck("39");
    setWaist("87");
    setHip("");
    setWeight("78");
    setHasInteracted(true);
  }

  const hasValidResult =
    result !== null &&
    Object.keys(validationErrors).length === 0;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)]">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <section
          aria-labelledby="body-fat-input-heading"
          className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                <Sparkles size={14} />
                Kişisel ölçümler
              </div>

              <h3
                id="body-fat-input-heading"
                className="mt-4 text-2xl font-black tracking-tight text-slate-950"
              >
                Vücut ölçülerinizi girin
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                Mezurayla aldığınız ölçüler ABD Donanması
                yöntemine göre anlık olarak değerlendirilir.
              </p>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
            >
              <RotateCcw size={16} />
              Temizle
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-900">
                  Cinsiyet
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Hesaplama formülü seçime göre değişir.
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Zorunlu alan
              </span>
            </div>

            <div
              role="group"
              aria-label="Cinsiyet seçimi"
              className="mt-3 grid grid-cols-2 gap-3"
            >
              <button
                type="button"
                aria-pressed={gender === "male"}
                onClick={() => selectGender("male")}
                className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                  gender === "male"
                    ? "border-emerald-500 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      gender === "male"
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-500"
                    }`}
                  >
                    <UserRound size={21} />
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      gender === "male"
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-slate-300 bg-white text-transparent"
                    }`}
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                </div>

                <p className="mt-4 font-black text-slate-950">
                  Erkek
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Boy, boyun ve bel ölçüsü kullanılır.
                </p>
              </button>

              <button
                type="button"
                aria-pressed={gender === "female"}
                onClick={() => selectGender("female")}
                className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                  gender === "female"
                    ? "border-emerald-500 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      gender === "female"
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-500"
                    }`}
                  >
                    <UserRound size={21} />
                  </span>

                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                      gender === "female"
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-slate-300 bg-white text-transparent"
                    }`}
                  >
                    <Check size={14} strokeWidth={3} />
                  </span>
                </div>

                <p className="mt-4 font-black text-slate-950">
                  Kadın
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Boy, boyun, bel ve kalça ölçüsü kullanılır.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <InputField
              id="body-fat-height"
              label="Boy"
              description="Ayakkabısız boy uzunluğunuz"
              value={height}
              placeholder="Örn. 178"
              unit="cm"
              minimum={MIN_HEIGHT}
              maximum={MAX_HEIGHT}
              error={visibleErrors.height}
              onChange={(event) =>
                updateField(setHeight, event.target.value)
              }
            />

            <InputField
              id="body-fat-neck"
              label="Boyun çevresi"
              description="Gırtlağın hemen altından"
              value={neck}
              placeholder="Örn. 39"
              unit="cm"
              minimum={MIN_NECK}
              maximum={MAX_NECK}
              error={visibleErrors.neck}
              onChange={(event) =>
                updateField(setNeck, event.target.value)
              }
            />

            <InputField
              id="body-fat-waist"
              label="Bel çevresi"
              description={
                gender === "male"
                  ? "Göbek deliği hizasına yakın bölümden"
                  : "Doğal bel hattından"
              }
              value={waist}
              placeholder="Örn. 87"
              unit="cm"
              minimum={MIN_WAIST}
              maximum={MAX_WAIST}
              error={visibleErrors.waist}
              onChange={(event) =>
                updateField(setWaist, event.target.value)
              }
            />

            {gender === "female" && (
              <InputField
                id="body-fat-hip"
                label="Kalça çevresi"
                description="Kalçanın en geniş bölümünden"
                value={hip}
                placeholder="Örn. 98"
                unit="cm"
                minimum={MIN_HIP}
                maximum={MAX_HIP}
                error={visibleErrors.hip}
                onChange={(event) =>
                  updateField(setHip, event.target.value)
                }
              />
            )}

            <div
              className={
                gender === "male" ? "sm:col-span-2" : ""
              }
            >
              <div className="flex items-end justify-between gap-3">
                <div>
                  <label
                    htmlFor="body-fat-weight"
                    className="block text-sm font-black text-slate-900"
                  >
                    Kilo
                  </label>

                  <p
                    id="body-fat-weight-description"
                    className="mt-1 text-xs leading-5 text-slate-500"
                  >
                    Yağ ve yağsız kütleyi hesaplamak için
                    isteğe bağlı
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  30–350 kg
                </span>
              </div>

              <div className="relative mt-3">
                <Weight
                  aria-hidden="true"
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="body-fat-weight"
                  type="text"
                  inputMode="decimal"
                  autoComplete="off"
                  value={weight}
                  onChange={(event) =>
                    updateField(setWeight, event.target.value)
                  }
                  placeholder="Örn. 78"
                  aria-invalid={Boolean(visibleErrors.weight)}
                  aria-describedby="body-fat-weight-description body-fat-weight-error"
                  className={`h-16 w-full rounded-2xl border bg-white pl-12 pr-20 text-lg font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
                    visibleErrors.weight
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
                  kg
                </span>
              </div>

              <div className="mt-2 min-h-5">
                {visibleErrors.weight ? (
                  <p
                    id="body-fat-weight-error"
                    className="text-xs font-semibold text-rose-600"
                  >
                    {visibleErrors.weight}
                  </p>
                ) : (
                  <p
                    id="body-fat-weight-error"
                    className="text-xs text-slate-400"
                  >
                    Alanı boş bırakırsanız yalnızca yağ yüzdesi
                    hesaplanır.
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black text-slate-900">
                Hızlı örnekler
              </p>

              <button
                type="button"
                onClick={restoreDefaults}
                className="text-xs font-black text-emerald-700 transition hover:text-emerald-900"
              >
                Varsayılan değerler
              </button>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {quickExamples.map((example) => {
                const isActive =
                  gender === example.gender &&
                  height === example.height &&
                  neck === example.neck &&
                  waist === example.waist &&
                  hip === example.hip &&
                  weight === example.weight;

                return (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => applyExample(example)}
                    className={`rounded-2xl border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                      isActive
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/60"
                    }`}
                  >
                    <span
                      className={`block text-xs font-black ${
                        isActive
                          ? "text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {example.label}
                    </span>

                    <span className="mt-1 block text-[11px] font-semibold leading-5 text-slate-500">
                      {example.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-sm">
                <Info size={20} />
              </div>

              <div>
                <p className="font-black text-sky-950">
                  Ölçüm tekniği sonucu etkiler
                </p>

                <p className="mt-2 text-sm leading-7 text-sky-800">
                  Mezurayı yere paralel tutun, cildi
                  sıkıştırmayın ve ölçüm sırasında karnınızı içeri
                  çekmeyin. Takip ölçümlerini benzer koşullarda
                  yapın.
                </p>
              </div>
            </div>
          </div>

          {hasInteracted &&
            Object.keys(validationErrors).length > 0 && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4"
              >
                <AlertCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-rose-600"
                />

                <div>
                  <p className="font-black text-rose-800">
                    Bazı ölçüleri kontrol edin
                  </p>

                  <p className="mt-1 text-sm leading-6 text-rose-700">
                    Geçerli sonuç oluşturabilmek için kırmızıyla
                    işaretlenen alanları düzeltin.
                  </p>
                </div>
              </div>
            )}
        </section>

        <section
          aria-labelledby="body-fat-result-heading"
          aria-live="polite"
          className={`relative overflow-hidden bg-gradient-to-br p-5 text-white sm:p-7 lg:p-8 ${
            hasValidResult
              ? theme.gradient
              : "from-slate-800 via-slate-900 to-slate-950"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-black/20 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/65">
                  Vücut kompozisyonu sonucu
                </p>

                <h3
                  id="body-fat-result-heading"
                  className="mt-2 text-2xl font-black tracking-tight"
                >
                  Tahmini yağ oranı analizi
                </h3>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black backdrop-blur-sm">
                <CircleGauge size={15} />
                Anlık hesaplama
              </span>
            </div>

            {hasValidResult && result ? (
              <>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-white/70">
                    Tahmini vücut yağ oranınız
                  </p>

                  <div className="mt-2 flex items-end gap-3">
                    <p className="text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                      %{formatNumber(result.bodyFatPercentage)}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-sm">
                      {result.categoryTitle}
                    </span>

                    <span className="text-sm font-semibold text-white/75">
                      {gender === "male" ? "Erkek" : "Kadın"} · ABD
                      Donanması yöntemi
                    </span>
                  </div>
                </div>

                <article className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                        Yağ oranı skalası
                      </p>

                      <p className="mt-2 text-sm font-semibold text-white/80">
                        Sonucunuz genel referans aralıkları
                        üzerinde gösterilir.
                      </p>
                    </div>

                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black">
                      {result.referenceText}
                    </span>
                  </div>

                  <div className="relative mt-10">
                    <div
                      className="absolute -top-8 z-10 -translate-x-1/2"
                      style={{
                        left: `${result.scalePosition}%`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <span className="rounded-lg bg-white px-2 py-1 text-[10px] font-black text-slate-950 shadow-lg">
                          %{formatNumber(result.bodyFatPercentage)}
                        </span>

                        <span className="h-3 w-0.5 bg-white" />

                        <span className="h-3 w-3 rounded-full border-2 border-white bg-slate-950 shadow-lg" />
                      </div>
                    </div>

                    <div className="flex h-4 overflow-hidden rounded-full ring-4 ring-white/10">
                      <div className="w-[16%] bg-sky-400" />
                      <div className="w-[18%] bg-cyan-400" />
                      <div className="w-[17%] bg-emerald-400" />
                      <div className="w-[24%] bg-amber-400" />
                      <div className="flex-1 bg-rose-500" />
                    </div>

                    <div className="mt-4 grid grid-cols-5 gap-1 text-center text-[9px] font-black text-white/65 sm:text-[10px]">
                      <span>Çok düşük</span>
                      <span>Atletik</span>
                      <span>Formda</span>
                      <span>Ortalama</span>
                      <span>Yüksek</span>
                    </div>
                  </div>
                </article>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                          Tahmini yağ kütlesi
                        </p>

                        <p className="mt-3 text-3xl font-black">
                          {result.fatMass !== null
                            ? `${formatNumber(result.fatMass)} kg`
                            : "Kilo girilmedi"}
                        </p>
                      </div>

                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                        <Scale size={21} />
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Toplam ağırlığın yağ dokusundan oluşan
                      tahmini kısmı.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                          Yağsız vücut kütlesi
                        </p>

                        <p className="mt-3 text-3xl font-black">
                          {result.leanBodyMass !== null
                            ? `${formatNumber(
                                result.leanBodyMass,
                              )} kg`
                            : "Kilo girilmedi"}
                        </p>
                      </div>

                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                        <Dumbbell size={21} />
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Kas, kemik, su, organ ve diğer yağ dışı
                      dokuların toplamı.
                    </p>
                  </article>
                </div>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white p-5 text-slate-950 shadow-xl sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white ${theme.solid}`}
                    >
                      {theme.icon}
                    </div>

                    <div className="min-w-0">
                      <p className={`text-lg font-black ${theme.text}`}>
                        {result.categoryTitle}
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                        {result.categoryDescription}
                      </p>

                      <div
                        className={`mt-4 rounded-2xl border p-4 ${theme.border} ${theme.soft}`}
                      >
                        <p className="text-xs font-black uppercase tracking-[0.13em] text-slate-500">
                          Genel referans
                        </p>

                        <p className={`mt-2 font-black ${theme.text}`}>
                          {result.referenceText}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="mt-5 rounded-3xl border border-white/15 bg-slate-950/15 p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Calculator size={20} />
                    </span>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                        Kullanılan matematiksel yöntem
                      </p>

                      <p className="mt-3 font-mono text-xs font-bold leading-7 text-white/85">
                        {result.calculationText}
                      </p>

                      <p className="mt-3 text-xs leading-6 text-white/60">
                        Çevre ölçüleri hesaplama sırasında inç
                        birimine çevrilerek formüle uygulanır.
                      </p>
                    </div>
                  </div>
                </article>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <Target size={21} className="text-white/80" />

                    <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Ölçüm amacı
                    </p>

                    <p className="mt-2 font-black">
                      Genel değişim takibi
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <Activity size={21} className="text-white/80" />

                    <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Sonuç türü
                    </p>

                    <p className="mt-2 font-black">
                      Matematiksel tahmin
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <Ruler size={21} className="text-white/80" />

                    <p className="mt-4 text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Ölçüm sistemi
                    </p>

                    <p className="mt-2 font-black">
                      Vücut çevreleri
                    </p>
                  </article>
                </div>
              </>
            ) : (
              <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm sm:p-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10">
                  <Calculator size={34} />
                </div>

                <p className="mt-6 text-3xl font-black">
                  Sonuç bekleniyor
                </p>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/70">
                  Geçerli çevre ölçüleri girdiğinizde tahmini yağ
                  oranınız, kategori analiziniz ve vücut
                  kompozisyonu sonuçlarınız burada görünecek.
                </p>

                <button
                  type="button"
                  onClick={restoreDefaults}
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <Sparkles size={17} />
                  Örnek değerlerle göster
                </button>

                <div className="mt-8 grid gap-3 text-left sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-black">
                      Yağ yüzdesi
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Yaklaşık toplam oran
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-black">
                      Kategori
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Genel referans yorumu
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-black">
                      Kütle analizi
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/60">
                      Yağ ve yağsız kütle
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/15 bg-slate-950/15 p-4 text-white/80 backdrop-blur-sm">
              <AlertCircle
                size={18}
                className="mt-0.5 shrink-0"
              />

              <p className="text-xs leading-6">
                Bu sonuç çevre ölçümlerinden elde edilen yaklaşık
                bir tahmindir. Ölçüm tekniği, kas kütlesi, yaş,
                sıvı durumu ve kişisel vücut yapısı sonucu
                etkileyebilir. Tıbbi değerlendirme yerine geçmez.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600">
              Genel referans aralıkları
            </p>

            <h4 className="mt-2 text-xl font-black text-slate-950">
              {gender === "male"
                ? "Erkekler için yağ oranı sınıflandırması"
                : "Kadınlar için yağ oranı sınıflandırması"}
            </h4>

            <p className="mt-2 text-sm leading-7 text-slate-600">
              Bu aralıklar yaş ve sağlık durumuna göre değişebilir.
              Atletik düzeyler herkes için gerekli hedefler
              değildir.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-black text-slate-600 shadow-sm">
            <Info size={15} />
            Yetişkin genel referansı
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {activeRanges.map((range) => {
            const isActive =
              result?.category === range.key;

            return (
              <article
                key={range.key}
                className={`rounded-2xl border p-4 transition ${
                  isActive
                    ? "border-emerald-500 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      range.key === "very-low"
                        ? "bg-sky-500"
                        : range.key === "athletic"
                          ? "bg-cyan-500"
                          : range.key === "fitness"
                            ? "bg-emerald-500"
                            : range.key === "average"
                              ? "bg-amber-500"
                              : "bg-rose-500"
                    }`}
                  />

                  {isActive && (
                    <span className="rounded-full bg-emerald-600 px-2 py-1 text-[9px] font-black uppercase tracking-wide text-white">
                      Sonucunuz
                    </span>
                  )}
                </div>

                <p className="mt-4 font-black text-slate-950">
                  {range.title}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-600">
                  {range.range}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}