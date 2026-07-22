import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Baby,
  BadgeCheck,
  Calendar,
  CalendarClock,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  HeartPulse,
  Info,
  ListChecks,
  Microscope,
  ScanLine,
  Sparkles,
  Stethoscope,
  TimerReset,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/gebelik-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/gebelik-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Gebelik hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

type FaqItem = {
  question: string;
  answer: string;
};

type TocItem = {
  id: string;
  title: string;
};

type TrimesterRow = {
  period: string;
  weeks: string;
  summary: string;
};

type MonthWeekRow = {
  month: string;
  approximateWeeks: string;
  note: string;
};

type MilestoneRow = {
  week: string;
  development: string;
  clinicalNote: string;
};

type ExampleRow = {
  method: string;
  input: string;
  calculation: string;
  result: string;
};

const pageTitle =
  "Gebelik Hesaplama Rehberi: Gebelik Haftası ve Tahmini Doğum Tarihi";

const pageDescription =
  "Son adet tarihine göre gebelik haftası ve tahmini doğum tarihi nasıl hesaplanır, Naegele kuralı, trimesterler, ultrason ve IVF tarihlemeleri nasıl yorumlanır öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Gebelik haftası nasıl hesaplanır?",
    answer:
      "Gebelik haftası genellikle son adet tarihinin ilk gününden itibaren geçen süreye göre hesaplanır.",
  },
  {
    question: "Tahmini doğum tarihi nasıl bulunur?",
    answer:
      "Son adet tarihinin ilk gününe 280 gün veya 40 hafta eklenerek yaklaşık tahmini doğum tarihi bulunabilir.",
  },
  {
    question: "Naegele kuralı nedir?",
    answer:
      "Naegele kuralı son adet tarihinin ilk gününe bir yıl ekleyip üç ay çıkararak ve yedi gün ekleyerek tahmini doğum tarihini hesaplayan klasik yöntemdir.",
  },
  {
    question: "Gebelik neden son adet tarihinden hesaplanır?",
    answer:
      "Döllenme günü çoğu zaman kesin bilinmediği için klinik gebelik yaşı son adet tarihinin ilk gününden başlatılır.",
  },
  {
    question: "Gebelik gerçekte kaç hafta sürer?",
    answer:
      "Tahmini gebelik süresi son adet tarihinden itibaren yaklaşık 40 hafta kabul edilir; doğumun kesin günü kişiden kişiye değişir.",
  },
  {
    question: "Gebelikte 1 ay kaç haftadır?",
    answer:
      "Takvim ayları eşit uzunlukta olmadığı için gebelik ayları haftalara tam olarak çevrilemez. Klinik takipte hafta ve gün kullanılması daha doğrudur.",
  },
  {
    question: "İlk trimester kaçıncı haftada biter?",
    answer:
      "Sınıflandırma kaynağa göre küçük farklılık gösterebilir; yaygın kullanımda ilk trimester yaklaşık 13. haftanın sonuna kadar kabul edilir.",
  },
  {
    question: "İkinci trimester hangi haftaları kapsar?",
    answer:
      "Yaygın klinik sınıflandırmada ikinci trimester yaklaşık 14. haftadan 27. haftanın sonuna kadar sürer.",
  },
  {
    question: "Üçüncü trimester ne zaman başlar?",
    answer:
      "Üçüncü trimester çoğunlukla 28. gebelik haftasıyla başlatılır.",
  },
  {
    question: "Düzensiz adetlerde son adet tarihi hesabı güvenilir mi?",
    answer:
      "Düzensiz döngülerde son adet tarihine dayalı hesaplama daha az güvenilir olabilir ve erken ultrason tarihlemeye yardımcı olabilir.",
  },
  {
    question: "Ultrason gebelik tarihini değiştirir mi?",
    answer:
      "Erken ultrason ile son adet tarihine göre hesap arasında anlamlı fark varsa sağlık profesyoneli tahmini doğum tarihini yeniden değerlendirebilir.",
  },
  {
    question: "İlk trimester ultrasonu neden önemlidir?",
    answer:
      "Erken gebelikte embriyo ölçümleri gebelik yaşını belirlemede sonraki dönemlere göre daha güvenilir olabilir.",
  },
  {
    question: "Gebelik kesesi görülünce gebelik haftası kesinleşir mi?",
    answer:
      "Tek bir bulgu kesin tarih vermeyebilir. Klinik öykü, seri değerlendirme ve ultrason ölçümleri birlikte yorumlanır.",
  },
  {
    question: "Embriyo transferine göre doğum tarihi nasıl hesaplanır?",
    answer:
      "IVF gebeliklerinde embriyo transfer tarihi ve embriyonun transfer günündeki yaşı kullanılarak tahmini doğum tarihi hesaplanabilir.",
  },
  {
    question: "5. gün embriyo transferinde gebelik haftası nasıl hesaplanır?",
    answer:
      "Transfer günü klinik olarak yaklaşık 2 hafta 5 günlük gebelik yaşı kabul edilir.",
  },
  {
    question: "3. gün embriyo transferinde gebelik haftası nasıl hesaplanır?",
    answer:
      "Transfer günü klinik olarak yaklaşık 2 hafta 3 günlük gebelik yaşı kabul edilir.",
  },
  {
    question: "Tahmini doğum tarihinde doğum kesin olur mu?",
    answer:
      "Hayır. Tahmini doğum tarihi bir referanstır ve doğum daha erken veya daha geç gerçekleşebilir.",
  },
  {
    question: "Çoğul gebelikte hesaplama farklı mı?",
    answer:
      "Gebelik yaşı aynı yöntemle tarihlenir ancak çoğul gebeliklerde takip, risk değerlendirmesi ve doğum zamanlaması farklı olabilir.",
  },
  {
    question: "Gebelik haftası ile fetal yaş aynı mı?",
    answer:
      "Hayır. Klinik gebelik yaşı son adet tarihinden başlar; fetal yaş döllenmeden itibaren hesaplandığı için genellikle yaklaşık iki hafta daha küçüktür.",
  },
  {
    question: "Gebelik hesaplama aracı tıbbi tanı koyar mı?",
    answer:
      "Hayır. Araç yalnızca genel bir tarih tahmini sunar; kesin gebelik tarihini ve takibini sağlık profesyoneli belirlemelidir.",
  },
];

const tocItems: TocItem[] = [
  {
    id: "gebelik-hesaplama-nedir",
    title: "Gebelik hesaplama nedir?",
  },
  {
    id: "son-adet-tarihi",
    title: "Son adet tarihine göre hesaplama",
  },
  {
    id: "naegele-kurali",
    title: "Naegele kuralı",
  },
  {
    id: "gebelik-haftasi",
    title: "Gebelik haftası nasıl bulunur?",
  },
  {
    id: "trimesterler",
    title: "Gebelik trimesterleri",
  },
  {
    id: "ay-hafta-tablosu",
    title: "Ay ve hafta tablosu",
  },
  {
    id: "hafta-hafta-gelisim",
    title: "Hafta hafta gelişim",
  },
  {
    id: "ultrason-tarihleme",
    title: "Ultrasonla tarih belirleme",
  },
  {
    id: "ivf-hesaplama",
    title: "IVF gebelik hesaplama",
  },
  {
    id: "duzensiz-adet",
    title: "Düzensiz adetlerde hesaplama",
  },
  {
    id: "cogul-gebelik",
    title: "Çoğul gebelik",
  },
  {
    id: "ornekler",
    title: "Örnek hesaplamalar",
  },
  {
    id: "sik-hatalar",
    title: "Sık yapılan hatalar",
  },
  {
    id: "sss",
    title: "Sık sorulan sorular",
  },
];

const trimesterRows: TrimesterRow[] = [
  {
    period: "Birinci trimester",
    weeks: "0 hafta 0 gün – 13 hafta 6 gün",
    summary:
      "Erken gelişim, organ oluşumunun başlaması ve gebeliğin ilk klinik değerlendirmeleri",
  },
  {
    period: "İkinci trimester",
    weeks: "14 hafta 0 gün – 27 hafta 6 gün",
    summary:
      "Büyümenin hızlanması, ayrıntılı değerlendirmeler ve hareketlerin hissedilmeye başlanması",
  },
  {
    period: "Üçüncü trimester",
    weeks: "28 hafta 0 gün – doğum",
    summary:
      "Büyüme, olgunlaşma ve doğuma hazırlık dönemi",
  },
];

const monthWeekRows: MonthWeekRow[] = [
  {
    month: "1. ay",
    approximateWeeks: "1–4. haftalar",
    note: "Takvim ayı ve gebelik haftası birebir eşleşmez.",
  },
  {
    month: "2. ay",
    approximateWeeks: "5–8. haftalar",
    note: "Erken gebelik dönemi",
  },
  {
    month: "3. ay",
    approximateWeeks: "9–13. haftalar",
    note: "Birinci trimesterin sonuna yaklaşılır.",
  },
  {
    month: "4. ay",
    approximateWeeks: "14–17. haftalar",
    note: "İkinci trimester başlangıcı",
  },
  {
    month: "5. ay",
    approximateWeeks: "18–22. haftalar",
    note: "Gelişim değerlendirmelerinin sık yapıldığı dönem",
  },
  {
    month: "6. ay",
    approximateWeeks: "23–27. haftalar",
    note: "İkinci trimesterin son bölümü",
  },
  {
    month: "7. ay",
    approximateWeeks: "28–31. haftalar",
    note: "Üçüncü trimester başlangıcı",
  },
  {
    month: "8. ay",
    approximateWeeks: "32–35. haftalar",
    note: "Büyüme ve olgunlaşma dönemi",
  },
  {
    month: "9. ay",
    approximateWeeks: "36–40. haftalar",
    note: "Doğuma yaklaşım",
  },
];

const milestoneRows: MilestoneRow[] = [
  {
    week: "4–5. hafta",
    development:
      "Erken embriyonik gelişim ve gebelik kesesinin değerlendirilme dönemi",
    clinicalNote:
      "Görüntüleme bulguları kişiye ve tarihlendirmeye göre değişebilir.",
  },
  {
    week: "6–8. hafta",
    development:
      "Embriyo ölçümlerinin ve erken gelişimin değerlendirildiği dönem",
    clinicalNote:
      "Erken ultrason gebelik yaşının belirlenmesine yardımcı olabilir.",
  },
  {
    week: "11–14. hafta",
    development:
      "Birinci trimester sonu ve erken tarama dönemlerinden biri",
    clinicalNote:
      "Takip planı kişisel risklere göre düzenlenir.",
  },
  {
    week: "18–22. hafta",
    development:
      "Fetal anatomik yapıların ayrıntılı değerlendirilebildiği dönem",
    clinicalNote:
      "Muayene ve görüntüleme zamanlaması hekime göre planlanır.",
  },
  {
    week: "24–28. hafta",
    development:
      "Büyüme ve bazı gebelik taramalarının yapıldığı dönem",
    clinicalNote:
      "Takip içeriği bireysel sağlık durumuna bağlıdır.",
  },
  {
    week: "28–32. hafta",
    development:
      "Üçüncü trimester büyüme ve gelişim dönemi",
    clinicalNote:
      "Fetal hareket ve anne sağlığı düzenli izlenir.",
  },
  {
    week: "36–40. hafta",
    development:
      "Doğuma hazırlık ve yakın takip dönemi",
    clinicalNote:
      "Doğum planı klinik bulgulara göre şekillenir.",
  },
];

const exampleRows: ExampleRow[] = [
  {
    method: "Son adet tarihi",
    input: "SAT: 1 Ocak 2026",
    calculation: "+280 gün",
    result: "Yaklaşık 8 Ekim 2026",
  },
  {
    method: "Naegele kuralı",
    input: "SAT: 15 Mart 2026",
    calculation: "+1 yıl −3 ay +7 gün",
    result: "Yaklaşık 22 Aralık 2026",
  },
  {
    method: "Gebelik haftası",
    input: "SAT üzerinden 70 gün geçti",
    calculation: "70 ÷ 7",
    result: "10 hafta 0 gün",
  },
  {
    method: "5. gün embriyo transferi",
    input: "Transfer: 10 Nisan 2026",
    calculation: "Transfer tarihine 261 gün eklenir",
    result: "Yaklaşık 27 Aralık 2026",
  },
  {
    method: "3. gün embriyo transferi",
    input: "Transfer: 10 Nisan 2026",
    calculation: "Transfer tarihine 263 gün eklenir",
    result: "Yaklaşık 29 Aralık 2026",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "tr-TR",
      mainEntityOfPage:
        `https://www.https://hesaprehberionline.com${canonicalPath}`,
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      author: {
        "@type": "Organization",
        name: "HesapRehberi",
      },
      publisher: {
        "@type": "Organization",
        name: "HesapRehberi",
        logo: {
          "@type": "ImageObject",
          url: "https://www.https://hesaprehberionline.com/logo.jpg",
        },
      },
      image:
        "https://www.https://hesaprehberionline.com/og/gebelik-hesaplama-rehberi.jpg",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function Lead({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-lg font-semibold leading-8 text-slate-800">
      {children}
    </p>
  );
}

function FormulaBox({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-950/10">
      <div className="border-b border-white/10 px-6 py-5">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-rose-300">
          {title}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="font-mono text-base font-black text-white sm:text-xl">
            {formula}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Activity;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
        <Icon
          className="h-6 w-6"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-5 text-lg font-black text-slate-950">
        {title}
      </h3>

      <div className="mt-3 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

export default function GebelikHesaplamaRehberiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <CalculatorLayout
        calculator={calculator}
        showShareButtons={false}
      >
        <section className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-rose-500/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-2 text-sm font-bold text-rose-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Gebelik haftası ve tahmini doğum tarihi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Gebelik hesaplama:
                <span className="block bg-gradient-to-r from-rose-300 via-pink-200 to-violet-200 bg-clip-text text-transparent">
                  Kaç haftalık ve doğum ne zaman?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Son adet tarihine göre gebelik haftasını ve tahmini
                doğum tarihini hesaplayın; trimester, ultrason ve IVF
                tarihlemelerinin nasıl yorumlandığını öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/gebelik-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-rose-600 px-6 py-3.5 font-black text-white transition hover:bg-rose-500"
                >
                  Gebelik tarihini hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#trimesterler"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Trimester tablosunu gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Son adet tarihi",
                  "Naegele kuralı",
                  "Ultrason tarihçesi",
                  "IVF hesaplama",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-rose-300"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="self-center">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-3xl bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-600">
                        Örnek hesaplama
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        SAT: 1 Ocak 2026
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                      <CalendarClock
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Son adet tarihi + 280 gün
                    </p>
                    <p className="mt-2 text-3xl font-black text-rose-700">
                      ≈ 8 Ekim 2026
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Bu tarih yaklaşık bir referanstır; klinik tarih
                    ultrason ve hekim değerlendirmesiyle netleştirilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="İçindekiler"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
            >
              <div className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white">
                <div className="flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-rose-300" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Rehber
                    </p>
                    <h2 className="mt-1 text-lg font-black">
                      İçindekiler
                    </h2>
                  </div>
                </div>
              </div>

              <ol className="space-y-1 p-3">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-rose-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-rose-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-rose-700">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection
              id="gebelik-hesaplama-nedir"
              title="Gebelik hesaplama nedir?"
            >
              <Lead>
                Gebelik hesaplama, gebelik yaşını hafta ve gün olarak
                tahmin etmek ve yaklaşık doğum tarihini belirlemek için
                kullanılan tarihlemeyi ifade eder.
              </Lead>

              <p>
                Klinik gebelik yaşı genellikle son adet tarihinin ilk
                gününden itibaren hesaplanır. Bu nedenle gebeliğin ilk
                iki haftası, döllenme henüz gerçekleşmemiş olsa bile
                tarihlemeye dahil edilir.
              </p>

              <p>
                Tahmini doğum tarihi kesin bir doğum günü değildir.
                Amaç takiplerin, testlerin ve büyüme değerlendirmelerinin
                uygun zamanda planlanmasına yardımcı olmaktır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Calendar}
                  title="Gebelik haftası"
                >
                  <p>
                    Son adet tarihinden bugüne geçen süre hafta ve gün
                    olarak hesaplanır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarClock}
                  title="Tahmini doğum"
                >
                  <p>
                    Son adet tarihine yaklaşık 280 gün eklenir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={ScanLine}
                  title="Klinik doğrulama"
                >
                  <p>
                    Ultrason ve tıbbi değerlendirme tarihlemeyi
                    destekler.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="son-adet-tarihi"
              title="Son adet tarihine göre gebelik hesaplama"
            >
              <Lead>
                Standart hesaplamada başlangıç tarihi son adet
                kanamasının ilk günüdür.
              </Lead>

              <FormulaBox
                title="Gebelik haftası"
                formula="Geçen gün sayısı ÷ 7 = Tam hafta + kalan gün"
                description="Son adet tarihinin ilk günü ile hesaplama tarihi arasındaki fark kullanılır."
              />

              <p>
                Örneğin son adet tarihinden itibaren 73 gün geçtiyse
                73 ÷ 7 işlemi 10 hafta ve 3 gün sonucunu verir.
                Gebelik yaşı 10 hafta 3 gün olarak ifade edilir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Son adet tarihi kesin bilinmiyorsa veya döngüler
                    düzensizse erken ultrason tarihlemeye daha fazla
                    katkı sağlayabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="naegele-kurali"
              title="Naegele kuralı ile tahmini doğum tarihi"
            >
              <Lead>
                Naegele kuralı, 28 günlük düzenli adet döngüsü varsayımı
                üzerinden tahmini doğum tarihini hesaplayan klasik
                yöntemdir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Gün cinsinden"
                  formula="Tahmini doğum = Son adet tarihi + 280 gün"
                  description="280 gün yaklaşık 40 haftaya karşılık gelir."
                />

                <FormulaBox
                  title="Takvim yöntemi"
                  formula="SAT + 1 yıl − 3 ay + 7 gün"
                  description="Ay uzunlukları nedeniyle hesaplama takvim üzerinde dikkatli yapılmalıdır."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Örnek
              </h3>

              <p>
                Son adet tarihinin ilk günü 15 Mart 2026 ise bir yıl
                eklenir, üç ay çıkarılır ve yedi gün eklenir.
                Yaklaşık tahmini doğum tarihi 22 Aralık 2026 olur.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Döngü 28 günden belirgin biçimde kısa veya uzunsa
                    klasik Naegele hesabı gerçek tarihlemeyle daha fazla
                    fark gösterebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="gebelik-haftasi"
              title="Gebelik haftası ve günü nasıl bulunur?"
            >
              <Lead>
                Gebelik süresi yalnızca hafta olarak değil, tamamlanan
                hafta ve kalan gün birlikte yazılır.
              </Lead>

              <ol className="space-y-4">
                {[
                  "Son adet tarihinin ilk gününü belirleyin.",
                  "Bu tarihten hesaplama gününe kadar geçen toplam günü bulun.",
                  "Toplam gün sayısını 7'ye bölün.",
                  "Bölüm tamamlanan gebelik haftasını verir.",
                  "Kalan sayı gebelik gününü gösterir.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-rose-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>

              <h3 className="text-2xl font-black text-slate-950">
                12 hafta 4 gün ne demektir?
              </h3>

              <p>
                On iki tam hafta tamamlanmış ve on üçüncü haftanın
                beşinci gününe girilmiş demektir. Klinik kayıtlarda
                genellikle “12+4” biçiminde yazılabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="trimesterler"
              title="Gebelik trimesterleri hangi haftaları kapsar?"
            >
              <Lead>
                Gebelik üç ana döneme ayrılır; sınırlar kaynaklar
                arasında küçük farklılık gösterebilir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Dönem
                      </th>
                      <th className="px-5 py-4">
                        Hafta aralığı
                      </th>
                      <th className="px-5 py-4">
                        Genel özet
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {trimesterRows.map((row) => (
                      <tr key={row.period}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.period}
                        </td>
                        <td className="px-5 py-4 font-black text-rose-700">
                          {row.weeks}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.summary}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Takip planı yalnızca trimester adına göre değil, kesin
                gebelik haftası ve kişisel klinik duruma göre yapılır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ay-hafta-tablosu"
              title="Gebelik ayı ve hafta karşılaştırma tablosu"
            >
              <Lead>
                Gebeliği ayla ifade etmek günlük kullanımda kolay olsa
                da tıbbi takipte hafta ve gün daha hassastır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[820px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Yaklaşık ay
                      </th>
                      <th className="px-5 py-4">
                        Gebelik haftaları
                      </th>
                      <th className="px-5 py-4">
                        Açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {monthWeekRows.map((row) => (
                      <tr key={row.month}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.month}
                        </td>
                        <td className="px-5 py-4 font-black text-rose-700">
                          {row.approximateWeeks}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Dört hafta tam bir takvim ayı değildir. Bu nedenle
                “9 ay” ifadesiyle 40 haftalık klinik gebelik süresi
                birebir aynı matematiksel dönüşüm değildir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hafta-hafta-gelisim"
              title="Hafta hafta gebelik gelişimi özeti"
            >
              <Lead>
                Aşağıdaki dönemler genel bir zaman çizelgesidir; her
                gebeliğin gelişimi ve takip planı kişiseldir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Dönem
                      </th>
                      <th className="px-5 py-4">
                        Genel gelişim
                      </th>
                      <th className="px-5 py-4">
                        Takip notu
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {milestoneRows.map((row) => (
                      <tr key={row.week}>
                        <td className="px-5 py-4 font-black text-rose-700">
                          {row.week}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.development}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.clinicalNote}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <HeartPulse
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Ağrı, kanama, sıvı gelmesi, belirgin hareket azalması
                    veya ciddi yakınmalarda hesaplama aracına güvenmek
                    yerine sağlık kuruluşuna başvurulmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ultrason-tarihleme"
              title="Ultrason ile gebelik tarihi nasıl belirlenir?"
            >
              <Lead>
                Erken ultrason, özellikle son adet tarihi belirsiz veya
                döngüler düzensiz olduğunda gebelik yaşının
                değerlendirilmesine yardımcı olabilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={ScanLine}
                  title="Erken ölçüm"
                >
                  <p>
                    İlk trimesterde embriyo ölçümleri tarihlemeye
                    yardımcı olabilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarClock}
                  title="Tarih farkı"
                >
                  <p>
                    Son adet hesabıyla anlamlı fark varsa klinik tarih
                    yeniden değerlendirilebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Stethoscope}
                  title="Hekim kararı"
                >
                  <p>
                    Tahmini doğum tarihindeki değişiklik tıbbi kayıt ve
                    değerlendirmeyle yapılmalıdır.
                  </p>
                </FeatureCard>
              </div>

              <p>
                Gebelik ilerledikçe bireysel büyüme farklılıkları
                arttığı için geç dönem ultrasonu yalnızca doğum tarihini
                değiştirmek amacıyla yorumlamak uygun olmayabilir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Bir tahmini doğum tarihi belirlendikten sonra
                    sonraki değişiklikler yalnızca uygun klinik
                    gerekçeyle yapılmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ivf-hesaplama"
              title="IVF ve embriyo transferine göre gebelik hesaplama"
            >
              <Lead>
                IVF gebeliklerinde transfer tarihi ve embriyonun yaşı
                bilindiği için tarih hesaplaması daha doğrudan
                yapılabilir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="5. gün embriyosu"
                  formula="Tahmini doğum = Transfer tarihi + 261 gün"
                  description="Transfer günü klinik gebelik yaşı yaklaşık 2 hafta 5 gün kabul edilir."
                />

                <FormulaBox
                  title="3. gün embriyosu"
                  formula="Tahmini doğum = Transfer tarihi + 263 gün"
                  description="Transfer günü klinik gebelik yaşı yaklaşık 2 hafta 3 gün kabul edilir."
                />
              </div>

              <p>
                Taze veya dondurulmuş transferde temel mantık embriyo
                yaşı ve transfer tarihidir. Klinik merkez tarafından
                verilen tarih birincil referans olmalıdır.
              </p>

              <h3 className="text-2xl font-black text-slate-950">
                Transfer günündeki gebelik yaşı
              </h3>

              <p>
                Beşinci gün embriyosu transfer edildiğinde gebelik yaşı
                2 hafta 5 gün; üçüncü gün embriyosu transfer edildiğinde
                2 hafta 3 gün kabul edilir. Bunun nedeni klinik gebelik
                yaşının döllenmeden yaklaşık iki hafta önce
                başlatılmasıdır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="duzensiz-adet"
              title="Düzensiz adet döngüsünde gebelik hesabı"
            >
              <Lead>
                Düzensiz veya uzun döngülerde yumurtlama standart 14.
                gün varsayımından farklı olabileceği için son adet
                hesabı daha az güvenilir olabilir.
              </Lead>

              <p>
                Polikistik over, emzirme, yakın zamanda doğum kontrol
                bırakma veya düzensiz kanamalar son adet tarihinin
                yorumlanmasını zorlaştırabilir.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <TimerReset
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Döngü uzunluğu farkı
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yumurtlama günü ileri veya geri kayabilir ve tahmini
                    tarih değişebilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <ScanLine
                    className="h-8 w-8 text-rose-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Erken ultrason desteği
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Erken ölçümler klinik tarihlemeyi destekleyebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="cogul-gebelik"
              title="Çoğul gebelikte tarih hesaplama"
            >
              <Lead>
                İkiz veya daha fazla bebeğin bulunduğu gebelikte
                gebelik yaşı aynı temel yöntemlerle hesaplanır.
              </Lead>

              <p>
                Fark doğum tarihi hesabından çok takip sıklığı, büyüme
                değerlendirmesi ve doğum zamanlaması planında ortaya
                çıkar. Çoğul gebelikler kişisel risklere göre daha yakın
                izlenebilir.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Hesaplanan 40 haftalık tarih çoğul gebelikte doğumun
                    mutlaka o tarihte gerçekleşeceği anlamına gelmez.
                    Doğum planı yalnızca klinik ekip tarafından yapılır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Gebelik hesaplama örnekleri"
            >
              <Lead>
                Aşağıdaki örnekler tarih hesaplama yöntemlerinin
                mantığını göstermek için hazırlanmıştır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Yöntem
                      </th>
                      <th className="px-5 py-4">
                        Girdi
                      </th>
                      <th className="px-5 py-4">
                        İşlem
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık sonuç
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={`${row.method}-${row.input}`}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.method}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.input}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.calculation}
                        </td>
                        <td className="px-5 py-4 font-black text-rose-700">
                          {row.result}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Takvim aylarının gün sayısı farklı olduğu için manuel
                hesaplarda bir günlük fark oluşabilir. Dijital araçlar
                doğrudan gün sayısı ekleyerek daha kolay sonuç verir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Gebelik hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, tahmini doğum tarihini kesin doğum günü
                kabul etmektir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Adetin son gününü kullanmak",
                    error:
                      "Hesaplamayı kanamanın bittiği tarihten başlatmak.",
                    solution:
                      "Son adet kanamasının ilk gününü kullanın.",
                  },
                  {
                    title: "Döllenme tarihini gebelik başlangıcı sanmak",
                    error:
                      "Klinik gebelik yaşıyla fetal yaşı karıştırmak.",
                    solution:
                      "Klinik haftanın son adet tarihinden başladığını unutmayın.",
                  },
                  {
                    title: "Tahmini tarihi kesin kabul etmek",
                    error:
                      "Doğumun mutlaka hesaplanan günde olacağını düşünmek.",
                    solution:
                      "Tarihi takip planı için yaklaşık referans olarak görün.",
                  },
                  {
                    title: "Düzensiz döngüyü göz ardı etmek",
                    error:
                      "Standart 28 günlük döngü varsayımını herkese uygulamak.",
                    solution:
                      "Erken ultrason ve klinik değerlendirmeyi dikkate alın.",
                  },
                  {
                    title: "Geç ultrasonla tarihi sürekli değiştirmek",
                    error:
                      "Büyüme farklarını tarih farkı olarak yorumlamak.",
                    solution:
                      "Tarih değişikliğini yalnızca klinik kararla yapın.",
                  },
                  {
                    title: "IVF transfer gününü normal SAT gibi kullanmak",
                    error:
                      "Embriyo yaşını hesaplamaya dahil etmemek.",
                    solution:
                      "Transfer tarihi ve embriyo gününe özel formülü kullanın.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-black text-slate-950">
                      <AlertTriangle
                        className="h-5 w-5 text-amber-600"
                        aria-hidden="true"
                      />
                      {item.title}
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-rose-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-rose-700">
                          Hata
                        </p>

                        <p className="mt-2 text-sm leading-6 text-rose-900">
                          {item.error}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-emerald-700">
                          Doğru yaklaşım
                        </p>

                        <p className="mt-2 text-sm leading-6 text-emerald-900">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-rose-600 to-violet-600 p-8 text-white shadow-xl shadow-rose-950/20">
                <CalendarClock
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Gebelik haftanızı hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-rose-100">
                  Son adet tarihinizi girerek gebelik haftanızı,
                  trimesterinizi ve tahmini doğum tarihinizi saniyeler
                  içinde öğrenin.
                </p>

                <Link
                  href="/hesaplamalar/gebelik-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-rose-700 transition hover:bg-rose-50"
                >
                  Gebelik aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Gebelik hesaplama hakkında sık sorulan sorular"
            >
              <Lead>
                Gebelik haftası, tahmini doğum tarihi, ultrason ve IVF
                tarihlemeleri hakkında en çok sorulan soruların
                yanıtlarını aşağıda bulabilirsiniz.
              </Lead>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <CalculatorFaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </CalculatorContentSection>

            <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-rose-200">
                    <Calculator
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Gebelik haftası ve doğum tarihi
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Gebelik takviminizi hızlıca oluşturun
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Gebelik haftanızı, trimesterinizi ve yaklaşık doğum
                    tarihinizi tek ekranda görün.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/gebelik-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-rose-600 px-7 py-4 font-black text-white transition hover:bg-rose-500"
                >
                  Hesaplama aracını aç
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </CalculatorLayout>
    </>
  );
}