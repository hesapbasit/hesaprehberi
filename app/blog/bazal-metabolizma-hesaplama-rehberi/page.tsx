import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Dumbbell,
  Flame,
  Gauge,
  HeartPulse,
  Info,
  ListChecks,
  Moon,
  Scale,
  Sparkles,
  TimerReset,
  Utensils,
  Weight,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/bazal-metabolizma-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/bazal-metabolizma-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Bazal metabolizma hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type ExampleRow = {
  profile: string;
  formula: string;
  result: string;
  note: string;
};

const pageTitle =
  "Bazal Metabolizma Hesaplama Rehberi: BMH Formülü ve Örnekler";

const pageDescription =
  "Bazal metabolizma hızı nasıl hesaplanır, Mifflin–St Jeor ve Harris–Benedict formülleri nasıl uygulanır, günlük kalori ihtiyacı nasıl tahmin edilir öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Bazal metabolizma hızı nedir?",
    answer:
      "Bazal metabolizma hızı, vücudun dinlenme hâlinde solunum, dolaşım, hücre yenilenmesi ve vücut ısısının korunması gibi temel işlevler için harcadığı tahmini enerji miktarıdır.",
  },
  {
    question: "Bazal metabolizma hızı nasıl hesaplanır?",
    answer:
      "Yaş, boy, kilo ve biyolojik cinsiyet bilgileri Mifflin–St Jeor veya Harris–Benedict gibi tahmin denklemlerinde kullanılır.",
  },
  {
    question: "Mifflin–St Jeor formülü nedir?",
    answer:
      "Erkekler için 10 × kilo + 6,25 × boy − 5 × yaş + 5; kadınlar için 10 × kilo + 6,25 × boy − 5 × yaş − 161 formülü kullanılır.",
  },
  {
    question: "Harris–Benedict formülü nedir?",
    answer:
      "Harris–Benedict denklemi yaş, boy, kilo ve biyolojik cinsiyete göre bazal enerji harcamasını tahmin eden klasik bir yöntemdir. Günümüzde revize sürümleri de kullanılmaktadır.",
  },
  {
    question: "BMH ile günlük kalori ihtiyacı aynı şey midir?",
    answer:
      "Hayır. BMH dinlenme hâlindeki temel enerji ihtiyacını tahmin eder. Günlük toplam enerji ihtiyacı için BMH aktivite katsayısıyla çarpılır.",
  },
  {
    question: "Dinlenme metabolizma hızı ile bazal metabolizma hızı aynı mıdır?",
    answer:
      "Kavramlar benzerdir ancak ölçüm koşulları farklı olabilir. Bazal metabolizma daha sıkı laboratuvar koşullarında, dinlenme metabolizma hızı ise daha esnek dinlenme koşullarında ölçülür.",
  },
  {
    question: "Bazal metabolizma neden kişiden kişiye değişir?",
    answer:
      "Yaş, vücut ağırlığı, boy, kas kütlesi, hormonlar, genetik özellikler, sağlık durumu ve ölçüm koşulları sonucu etkileyebilir.",
  },
  {
    question: "Kas kütlesi bazal metabolizmayı etkiler mi?",
    answer:
      "Kas dokusu enerji harcayan aktif dokulardan biridir. Vücut kompozisyonundaki farklılıklar dinlenme enerji harcamasını etkileyebilir.",
  },
  {
    question: "Yaş ilerledikçe bazal metabolizma düşer mi?",
    answer:
      "Yaşla birlikte vücut kompozisyonu ve fiziksel aktivite değişebildiği için tahmini bazal enerji ihtiyacı genellikle azalabilir.",
  },
  {
    question: "Kilo arttıkça BMH yükselir mi?",
    answer:
      "Tahmin denklemlerinde vücut ağırlığı arttıkça sonuç çoğunlukla yükselir. Ancak vücut kompozisyonu aynı olmayan iki kişide gerçek enerji harcaması farklı olabilir.",
  },
  {
    question: "Bazal metabolizma kaç kalori olmalıdır?",
    answer:
      "Tek bir ideal sayı yoktur. Sonuç yaş, boy, kilo, biyolojik cinsiyet ve vücut kompozisyonuna göre kişiye özeldir.",
  },
  {
    question: "BMH altında kalori almak güvenli midir?",
    answer:
      "Uzun süre çok düşük enerji almak sağlık riskleri oluşturabilir. Kilo verme planı kişisel sağlık durumu dikkate alınarak diyetisyen veya hekim desteğiyle hazırlanmalıdır.",
  },
  {
    question: "Aktivite katsayısı nasıl seçilir?",
    answer:
      "Günlük hareket, egzersiz sıklığı, egzersiz yoğunluğu ve işin fiziksel düzeyi birlikte değerlendirilir. Sadece spor günlerinin sayısına bakmak yeterli olmayabilir.",
  },
  {
    question: "Hareketsiz aktivite katsayısı kaçtır?",
    answer:
      "Yaygın tahminlerde masa başı ve çok az egzersiz için 1,2 katsayısı kullanılır.",
  },
  {
    question: "Haftada üç gün spor yapan hangi katsayıyı kullanır?",
    answer:
      "Egzersizin yoğunluğuna ve günlük hareket düzeyine göre yaklaşık 1,375 veya 1,55 aralığı düşünülebilir. Kesin seçim kişisel rutine bağlıdır.",
  },
  {
    question: "Kilo vermek için BMH mi TDEE mi kullanılmalı?",
    answer:
      "Kalori planı için toplam günlük enerji harcaması daha işlevseldir. BMH yalnızca temel dinlenme ihtiyacını gösterir.",
  },
  {
    question: "Akıllı saat BMH'yi doğru ölçer mi?",
    answer:
      "Akıllı saatler genellikle kişisel veriler ve hareket sensörleriyle tahmin yapar. Laboratuvar ölçümü değildir ve sonuçlar cihazdan cihaza değişebilir.",
  },
  {
    question: "Bazal metabolizma hesaplama aracı tıbbi tanı koyar mı?",
    answer:
      "Hayır. Araç yalnızca matematiksel tahmin üretir. Hastalık, hormon bozukluğu veya beslenme tedavisi için sağlık profesyoneline başvurulmalıdır.",
  },
];

const tocItems: TocItem[] = [
  { id: "bmh-nedir", title: "Bazal metabolizma nedir?" },
  { id: "bmh-nasil-hesaplanir", title: "BMH nasıl hesaplanır?" },
  { id: "mifflin-st-jeor", title: "Mifflin–St Jeor formülü" },
  { id: "harris-benedict", title: "Harris–Benedict formülü" },
  { id: "ornekler", title: "Örnek hesaplamalar" },
  { id: "bmh-rmr-farki", title: "BMH ve RMR farkı" },
  { id: "aktivite-katsayilari", title: "Aktivite katsayıları" },
  { id: "gunluk-kalori", title: "Günlük kalori ihtiyacı" },
  { id: "etkileyen-faktorler", title: "BMH'yi etkileyen faktörler" },
  { id: "kilo-hedefleri", title: "Kilo hedeflerinde kullanım" },
  { id: "sik-hatalar", title: "Sık yapılan hatalar" },
  { id: "sss", title: "Sık sorulan sorular" },
];

const exampleRows: ExampleRow[] = [
  {
    profile: "30 yaş, erkek, 80 kg, 180 cm",
    formula: "Mifflin–St Jeor",
    result: "1.780 kcal",
    note: "10×80 + 6,25×180 − 5×30 + 5",
  },
  {
    profile: "30 yaş, kadın, 65 kg, 165 cm",
    formula: "Mifflin–St Jeor",
    result: "1.370 kcal",
    note: "10×65 + 6,25×165 − 5×30 − 161",
  },
  {
    profile: "40 yaş, erkek, 90 kg, 175 cm",
    formula: "Mifflin–St Jeor",
    result: "1.799 kcal",
    note: "Yaklaşık sonuç",
  },
  {
    profile: "40 yaş, kadın, 70 kg, 160 cm",
    formula: "Mifflin–St Jeor",
    result: "1.339 kcal",
    note: "Yaklaşık sonuç",
  },
  {
    profile: "25 yaş, erkek, 70 kg, 178 cm",
    formula: "Mifflin–St Jeor",
    result: "1.693 kcal",
    note: "Yaklaşık sonuç",
  },
  {
    profile: "25 yaş, kadın, 55 kg, 162 cm",
    formula: "Mifflin–St Jeor",
    result: "1.277 kcal",
    note: "Yaklaşık sonuç",
  },
];

const activityRows = [
  {
    level: "Hareketsiz",
    factor: "1,20",
    description:
      "Masa başı yaşam, çok az egzersiz",
  },
  {
    level: "Hafif aktif",
    factor: "1,375",
    description:
      "Haftada 1–3 gün hafif egzersiz",
  },
  {
    level: "Orta aktif",
    factor: "1,55",
    description:
      "Haftada 3–5 gün düzenli egzersiz",
  },
  {
    level: "Çok aktif",
    factor: "1,725",
    description:
      "Haftada 6–7 gün yoğun egzersiz",
  },
  {
    level: "Ekstra aktif",
    factor: "1,90",
    description:
      "Ağır fiziksel iş veya çok yoğun antrenman",
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
        `https://www.hesaprehberi.com${canonicalPath}`,
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
          url: "https://www.hesaprehberi.com/logo.jpg",
        },
      },
      image:
        "https://www.hesaprehberi.com/og/bazal-metabolizma-hesaplama-rehberi.jpg",
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
    <p className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-lg font-semibold leading-8 text-slate-800">
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
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
          {title}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="font-mono text-lg font-black text-white sm:text-2xl">
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
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
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

export default function BazalMetabolizmaHesaplamaRehberiPage() {
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
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Günlük enerji ihtiyacının başlangıç noktası
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Bazal metabolizma hesaplama:
                <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-blue-200 bg-clip-text text-transparent">
                  BMH formülü, örnekler ve kalori ihtiyacı
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Vücudunuzun dinlenme hâlinde harcadığı tahmini enerjiyi,
                Mifflin–St Jeor ve Harris–Benedict formüllerini ve aktivite
                düzeyine göre günlük kalori ihtiyacını öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/bazal-metabolizma-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3.5 font-black text-white transition hover:bg-orange-500"
                >
                  Bazal metabolizmanı hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#mifflin-st-jeor"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Formülleri gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Mifflin–St Jeor",
                  "Harris–Benedict",
                  "Aktivite katsayısı",
                  "Günlük kalori",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-300"
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
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                        Örnek hesaplama
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        30 yaş, 80 kg, 180 cm
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                      <Flame
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Mifflin–St Jeor erkek örneği
                    </p>
                    <p className="mt-2 text-5xl font-black text-orange-700">
                      1.780 kcal
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Bu değer günlük toplam ihtiyaç değil, dinlenme
                    hâlindeki tahmini enerji harcamasıdır.
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
                  <ListChecks className="h-5 w-5 text-orange-300" />

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
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-orange-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-orange-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-orange-700">
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
              id="bmh-nedir"
              title="Bazal metabolizma hızı nedir?"
            >
              <Lead>
                Bazal metabolizma hızı, vücudun tam dinlenme hâlinde temel
                yaşamsal işlevleri sürdürmek için kullandığı tahmini enerji
                miktarıdır.
              </Lead>

              <p>
                Kalp atımı, solunum, sinir sistemi faaliyetleri, hücre
                yenilenmesi, vücut ısısının korunması ve organların
                çalışması için gün boyunca enerji gerekir. Bazal
                metabolizma bu temel harcamanın matematiksel tahminidir.
              </p>

              <p>
                BMH genellikle günlük kalori planlamasının başlangıç
                noktasıdır. Ancak tek başına kişinin toplam günlük enerji
                ihtiyacını göstermez; hareket ve egzersiz ayrıca hesaba
                katılmalıdır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={HeartPulse}
                  title="Temel yaşamsal işlevler"
                >
                  <p>
                    Solunum, dolaşım ve organ faaliyetlerinin enerji
                    ihtiyacını temsil eder.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Moon}
                  title="Dinlenme hâli"
                >
                  <p>
                    Egzersiz ve günlük hareketten bağımsız temel enerji
                    tahminidir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Flame}
                  title="Kalori karşılığı"
                >
                  <p>
                    Sonuç genellikle günlük kilokalori cinsinden
                    gösterilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bmh-nasil-hesaplanir"
              title="Bazal metabolizma hızı nasıl hesaplanır?"
            >
              <Lead>
                Yaş, boy, kilo ve biyolojik cinsiyet bilgileri tahmin
                denklemlerine yerleştirilerek günlük bazal enerji sonucu
                elde edilir.
              </Lead>

              <p>
                İnternetteki hesaplama araçları çoğunlukla Mifflin–St
                Jeor veya revize Harris–Benedict denklemini kullanır. Her
                iki yöntem de laboratuvar ölçümü değil, nüfus verilerinden
                geliştirilen tahminlerdir.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <FeatureCard
                  icon={Scale}
                  title="Vücut ağırlığı"
                >
                  <p>
                    Formüle kilogram olarak girilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Gauge}
                  title="Boy uzunluğu"
                >
                  <p>
                    Formüle santimetre olarak girilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={TimerReset}
                  title="Yaş"
                >
                  <p>
                    Tamamlanan yıl sayısı kullanılır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Activity}
                  title="Biyolojik cinsiyet"
                >
                  <p>
                    Denklemde kullanılan sabit terimi değiştirir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Formül sonucu tahmindir. Kas kütlesi, sağlık durumu,
                    hormonlar ve vücut kompozisyonu aynı boy ve kilodaki
                    kişiler arasında farklı gerçek enerji harcamaları
                    oluşturabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="mifflin-st-jeor"
              title="Mifflin–St Jeor formülü"
            >
              <Lead>
                Mifflin–St Jeor denklemi, yetişkinlerde dinlenme enerji
                harcamasını tahmin etmek için yaygın kullanılan
                yöntemlerden biridir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için"
                  formula="BMH = 10 × kg + 6,25 × cm − 5 × yaş + 5"
                  description="Kilo kilogram, boy santimetre ve yaş tamamlanan yıl olarak girilir."
                />

                <FormulaBox
                  title="Kadınlar için"
                  formula="BMH = 10 × kg + 6,25 × cm − 5 × yaş − 161"
                  description="Temel yapı aynıdır; denklemdeki sabit terim farklıdır."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Erkek örneği
              </h3>

              <ol className="space-y-4">
                {[
                  "Kilo: 80 kg → 10 × 80 = 800.",
                  "Boy: 180 cm → 6,25 × 180 = 1.125.",
                  "Yaş: 30 → 5 × 30 = 150.",
                  "Toplam: 800 + 1.125 − 150 + 5 = 1.780 kcal.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>

              <h3 className="text-2xl font-black text-slate-950">
                Kadın örneği
              </h3>

              <p>
                30 yaşında, 65 kg ve 165 cm boyundaki bir kadın için:
                10 × 65 + 6,25 × 165 − 5 × 30 − 161 işlemi yaklaşık
                1.370 kcal sonucunu verir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="harris-benedict"
              title="Harris–Benedict formülü"
            >
              <Lead>
                Harris–Benedict denklemi bazal enerji harcaması tahmininde
                kullanılan klasik yöntemlerden biridir ve zaman içinde
                revize edilmiştir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Revize erkek denklemi"
                  formula="BMH = 88,362 + 13,397 × kg + 4,799 × cm − 5,677 × yaş"
                  description="Revize Harris–Benedict denkleminde erkekler için kullanılan yaygın formdur."
                />

                <FormulaBox
                  title="Revize kadın denklemi"
                  formula="BMH = 447,593 + 9,247 × kg + 3,098 × cm − 4,330 × yaş"
                  description="Revize Harris–Benedict denkleminde kadınlar için kullanılan yaygın formdur."
                />
              </div>

              <p>
                Farklı denklemler aynı kişi için birbirine yakın ancak
                tamamen aynı olmayan sonuçlar verebilir. Bu fark,
                denklemlerin geliştirildiği örneklemler ve katsayılardan
                kaynaklanır.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Günlük kullanımda aynı formülü düzenli biçimde
                    kullanmak, küçük formül farklarından daha anlamlı bir
                    takip sağlayabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Bazal metabolizma örnek hesaplamaları"
            >
              <Lead>
                Aşağıdaki sonuçlar Mifflin–St Jeor denklemiyle elde edilen
                yaklaşık günlük bazal enerji tahminleridir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Profil
                      </th>
                      <th className="px-5 py-4">
                        Formül
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık BMH
                      </th>
                      <th className="px-5 py-4">
                        Açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={row.profile}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.profile}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.formula}
                        </td>
                        <td className="px-5 py-4 font-black text-orange-700">
                          {row.result}
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
                Bu tabloda verilen değerler, kişinin gerçek enerji
                harcamasını kesin olarak ölçmez. Formül sonuçları başlangıç
                tahmini olarak değerlendirilmelidir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bmh-rmr-farki"
              title="Bazal metabolizma hızı ile dinlenme metabolizma hızı arasındaki fark"
            >
              <Lead>
                BMH ve RMR benzer kavramlardır ancak ölçüm koşulları ve
                tanımları tamamen aynı değildir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Moon
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Bazal metabolizma hızı
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Daha sıkı ölçüm koşulları gerektirir. Tam dinlenme,
                    uygun sıcaklık ve açlık gibi koşullar gözetilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Activity
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Dinlenme metabolizma hızı
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Daha esnek dinlenme koşullarında ölçülebilir ve günlük
                    uygulamalarda sık kullanılır.
                  </p>
                </div>
              </div>

              <p>
                Çevrimiçi araçlarda BMH ve RMR ifadeleri zaman zaman aynı
                anlamda kullanılabilir. Sonucun bir tahmin olduğu
                unutulmamalıdır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="aktivite-katsayilari"
              title="Aktivite katsayıları nasıl kullanılır?"
            >
              <Lead>
                Günlük toplam enerji ihtiyacını tahmin etmek için bazal
                metabolizma sonucu aktivite katsayısıyla çarpılır.
              </Lead>

              <FormulaBox
                title="Toplam günlük enerji"
                formula="TDEE = BMH × Aktivite Katsayısı"
                description="TDEE, toplam günlük enerji harcamasının yaklaşık değeridir."
              />

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Aktivite düzeyi
                      </th>
                      <th className="px-5 py-4">
                        Katsayı
                      </th>
                      <th className="px-5 py-4">
                        Genel açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {activityRows.map((row) => (
                      <tr key={row.level}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.level}
                        </td>
                        <td className="px-5 py-4 font-black text-orange-700">
                          {row.factor}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Aktivite katsayıları kaba sınıflandırmalardır. Günlük
                    adım sayısı, fiziksel iş, egzersiz süresi ve yoğunluğu
                    birlikte değerlendirilmelidir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="gunluk-kalori"
              title="Bazal metabolizmadan günlük kalori ihtiyacı nasıl bulunur?"
            >
              <Lead>
                BMH değeri aktivite katsayısıyla çarpıldığında toplam
                günlük enerji harcaması için yaklaşık bir sonuç elde
                edilir.
              </Lead>

              <h3 className="text-2xl font-black text-slate-950">
                1.780 kcal BMH için örnekler
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Hareketsiz
                  </p>

                  <p className="mt-3 text-slate-600">
                    1.780 × 1,20
                  </p>

                  <p className="mt-3 text-2xl font-black text-orange-700">
                    2.136 kcal
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Hafif aktif
                  </p>

                  <p className="mt-3 text-slate-600">
                    1.780 × 1,375
                  </p>

                  <p className="mt-3 text-2xl font-black text-orange-700">
                    2.448 kcal
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Orta aktif
                  </p>

                  <p className="mt-3 text-slate-600">
                    1.780 × 1,55
                  </p>

                  <p className="mt-3 text-2xl font-black text-orange-700">
                    2.759 kcal
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Çok aktif
                  </p>

                  <p className="mt-3 text-slate-600">
                    1.780 × 1,725
                  </p>

                  <p className="mt-3 text-2xl font-black text-orange-700">
                    3.071 kcal
                  </p>
                </div>
              </div>

              <p>
                Bu değerler vücut ağırlığını korumak için kesin reçete
                değildir. Gerçek ihtiyaç günlük hareket, besinlerin termik
                etkisi, uyku, sağlık durumu ve bireysel metabolik
                farklılıklardan etkilenebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="etkileyen-faktorler"
              title="Bazal metabolizma hızını etkileyen faktörler"
            >
              <Lead>
                BMH yalnızca kilo ve boya bağlı değildir; vücut
                kompozisyonu ve fizyolojik özellikler de sonucu
                etkileyebilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Weight}
                  title="Vücut ağırlığı"
                >
                  <p>
                    Daha büyük bedenin temel enerji ihtiyacı çoğunlukla
                    daha yüksektir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Dumbbell}
                  title="Kas kütlesi"
                >
                  <p>
                    Yağsız vücut kütlesi dinlenme enerji harcamasında
                    önemli rol oynar.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={TimerReset}
                  title="Yaş"
                >
                  <p>
                    Yaşla birlikte vücut kompozisyonundaki değişimler
                    sonucu etkileyebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={HeartPulse}
                  title="Sağlık durumu"
                >
                  <p>
                    Ateş, hormonlar ve bazı hastalıklar enerji harcamasını
                    değiştirebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Moon}
                  title="Uyku ve stres"
                >
                  <p>
                    Dolaylı olarak hareket, iştah ve günlük enerji
                    dengesini etkileyebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BarChart3}
                  title="Genetik farklılıklar"
                >
                  <p>
                    Aynı ölçülere sahip kişilerde bireysel farklılıklar
                    bulunabilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kilo-hedefleri"
              title="Kilo verme, koruma ve alma hedeflerinde BMH nasıl kullanılır?"
            >
              <Lead>
                Kilo hedefleri için doğrudan BMH yerine toplam günlük
                enerji harcaması başlangıç noktası olarak kullanılır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Activity
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Kilo koruma
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Toplam günlük enerji harcamasına yakın enerji alımı
                    hedeflenir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Scale
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Kilo verme
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Toplam ihtiyaçtan kontrollü bir enerji açığı
                    oluşturulur.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Dumbbell
                    className="h-8 w-8 text-orange-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Kilo alma
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Toplam ihtiyacın üzerinde kontrollü enerji fazlası
                    planlanır.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Çok düşük kalorili diyetler, kronik hastalık, gebelik,
                    emzirme, yeme bozukluğu öyküsü veya özel sağlık
                    durumlarında profesyonel destek alınmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Bazal metabolizma hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, BMH sonucunu doğrudan günlük kalori
                ihtiyacı sanmaktır.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "BMH ile TDEE'yi karıştırmak",
                    error:
                      "Dinlenme enerji tahminini günlük toplam ihtiyaç kabul etmek.",
                    solution:
                      "Aktivite düzeyini kullanarak toplam günlük enerji harcamasını ayrıca hesaplayın.",
                  },
                  {
                    title: "Birimleri yanlış girmek",
                    error:
                      "Kilogram yerine pound veya santimetre yerine metre kullanmak.",
                    solution:
                      "Formülde kilo için kilogram, boy için santimetre kullanın.",
                  },
                  {
                    title: "Aktiviteyi olduğundan yüksek seçmek",
                    error:
                      "Haftada birkaç kısa egzersizi çok aktif sınıfına koymak.",
                    solution:
                      "Egzersiz dışındaki günlük hareketi de gerçekçi biçimde değerlendirin.",
                  },
                  {
                    title: "Formül sonucunu kesin ölçüm sanmak",
                    error:
                      "Tahmini kaloriyi laboratuvar sonucu gibi yorumlamak.",
                    solution:
                      "Sonucu başlangıç tahmini olarak kullanın ve zaman içindeki değişimi izleyin.",
                  },
                  {
                    title: "Kas kütlesini gözden kaçırmak",
                    error:
                      "Aynı kilo ve boydaki herkesin aynı enerji harcamasına sahip olduğunu düşünmek.",
                    solution:
                      "Vücut kompozisyonunun farklılık yaratabileceğini dikkate alın.",
                  },
                  {
                    title: "Çok düşük kalori hedeflemek",
                    error:
                      "BMH'nin çok altında uzun süreli beslenme planı oluşturmak.",
                    solution:
                      "Kişisel hedefi sağlık profesyoneliyle güvenli biçimde planlayın.",
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

              <div className="rounded-[2rem] bg-gradient-to-br from-orange-600 to-red-600 p-8 text-white shadow-xl shadow-orange-950/20">
                <Flame
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Bazal metabolizma hızınızı hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-orange-100">
                  Yaş, boy, kilo ve biyolojik cinsiyet bilgilerinizi
                  girerek tahmini bazal enerji ihtiyacınızı saniyeler
                  içinde öğrenin.
                </p>

                <Link
                  href="/hesaplamalar/bazal-metabolizma-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-orange-700 transition hover:bg-orange-50"
                >
                  Bazal metabolizma aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Bazal metabolizma hakkında sık sorulan sorular"
            >
              <Lead>
                BMH formülleri, aktivite katsayıları ve günlük enerji
                ihtiyacı hakkında en çok sorulan soruların yanıtlarını
                aşağıda bulabilirsiniz.
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-orange-200">
                    <Calculator
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Hızlı BMH tahmini
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Günlük temel enerji ihtiyacınızı öğrenin
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Mifflin–St Jeor formülüyle bazal metabolizma
                    sonucunuzu ve aktiviteye göre günlük enerji
                    tahmininizi görüntüleyin.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/bazal-metabolizma-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-600 px-7 py-4 font-black text-white transition hover:bg-orange-500"
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