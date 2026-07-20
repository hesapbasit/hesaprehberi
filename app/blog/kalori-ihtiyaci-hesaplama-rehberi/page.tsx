import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  Apple,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Beef,
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
  Minus,
  Plus,
  Scale,
  Sparkles,
  Target,
  Utensils,
  Weight,
  Wheat,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/kalori-ihtiyaci-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/kalori-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Kalori hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type ActivityRow = {
  level: string;
  factor: string;
  description: string;
};

type ExampleRow = {
  profile: string;
  bmr: string;
  factor: string;
  tdee: string;
};

const pageTitle =
  "Kalori İhtiyacı Hesaplama Rehberi: TDEE, Aktivite ve Hedef Kalorisi";

const pageDescription =
  "Günlük kalori ihtiyacı nasıl hesaplanır, TDEE ve aktivite katsayısı nasıl kullanılır, kilo verme, koruma ve alma kalorisi nasıl belirlenir öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Günlük kalori ihtiyacı nedir?",
    answer:
      "Günlük kalori ihtiyacı, vücudun temel işlevleri, günlük hareketler, egzersiz ve besinlerin sindirimi için bir günde harcadığı tahmini toplam enerji miktarıdır.",
  },
  {
    question: "Kalori ihtiyacı nasıl hesaplanır?",
    answer:
      "Önce bazal veya dinlenme metabolizma hızı tahmin edilir. Ardından bu değer kişinin aktivite düzeyine uygun katsayıyla çarpılarak toplam günlük enerji harcaması hesaplanır.",
  },
  {
    question: "TDEE nedir?",
    answer:
      "TDEE, toplam günlük enerji harcamasının İngilizce kısaltmasıdır. Bazal enerji, günlük hareket, egzersiz ve besinlerin termik etkisini kapsayan yaklaşık günlük toplam harcamayı ifade eder.",
  },
  {
    question: "BMR ile TDEE aynı mıdır?",
    answer:
      "Hayır. BMR veya BMH, dinlenme hâlindeki temel enerji ihtiyacıdır. TDEE ise günlük hareket ve egzersiz dahil toplam enerji harcamasıdır.",
  },
  {
    question: "Mifflin–St Jeor formülü nedir?",
    answer:
      "Erkekler için 10 × kilo + 6,25 × boy − 5 × yaş + 5; kadınlar için 10 × kilo + 6,25 × boy − 5 × yaş − 161 formülüyle dinlenme enerji ihtiyacı tahmin edilir.",
  },
  {
    question: "Aktivite katsayısı nasıl seçilir?",
    answer:
      "Masa başı çalışma, günlük adım, fiziksel iş, egzersiz sıklığı, süresi ve yoğunluğu birlikte değerlendirilerek uygun aktivite düzeyi seçilir.",
  },
  {
    question: "Hareketsiz biri hangi katsayıyı kullanır?",
    answer:
      "Yaygın pratik hesaplarda masa başı yaşayan ve çok az egzersiz yapan kişiler için 1,20 katsayısı kullanılır.",
  },
  {
    question: "Haftada üç gün spor yapan biri hangi katsayıyı seçmelidir?",
    answer:
      "Egzersizin süresi ve yoğunluğuna bağlı olarak hafif aktif 1,375 veya orta aktif 1,55 katsayısı değerlendirilebilir.",
  },
  {
    question: "Kilo koruma kalorisi nedir?",
    answer:
      "Vücut ağırlığının uzun vadede yaklaşık sabit kalmasını sağlayan enerji alımıdır. Başlangıç tahmini olarak TDEE değeri kullanılabilir.",
  },
  {
    question: "Kilo vermek için kaç kalori almalıyım?",
    answer:
      "Genellikle toplam günlük enerji ihtiyacından kontrollü bir miktar azaltılarak enerji açığı oluşturulur. Güvenli ve uygun miktar kişisel sağlık durumuna göre değişir.",
  },
  {
    question: "Kilo almak için kaç kalori fazlası gerekir?",
    answer:
      "Toplam günlük enerji ihtiyacının üzerinde kontrollü bir enerji fazlası oluşturulur. Kas kazanımı hedefinde direnç antrenmanı ve yeterli protein de önemlidir.",
  },
  {
    question: "Günde 500 kalori açık ne kadar kilo verdirir?",
    answer:
      "Sabit bir dönüşüm her kişi için doğru değildir. Vücut ağırlığı değiştikçe enerji harcaması ve metabolik uyum da değişebilir.",
  },
  {
    question: "Kalori ihtiyacı her gün aynı mıdır?",
    answer:
      "Hayır. Günlük adım, egzersiz, uyku, stres, iş yükü ve sağlık durumu nedeniyle harcama günden güne değişebilir.",
  },
  {
    question: "Akıllı saatlerin gösterdiği kalori doğru mudur?",
    answer:
      "Akıllı saatler sensörler ve kişisel verilerle tahmin üretir. Sonuçlar kesin ölçüm değildir ve cihazlar arasında farklılık gösterebilir.",
  },
  {
    question: "Kalori hesabında protein, karbonhidrat ve yağ önemli midir?",
    answer:
      "Toplam enerji dengesi önemlidir ancak makro besin dağılımı tokluk, performans, kas korunması ve beslenme kalitesini etkileyebilir.",
  },
  {
    question: "Bir gram protein kaç kaloridir?",
    answer:
      "Beslenme hesaplarında protein ve karbonhidratın gramı yaklaşık 4 kcal, yağın gramı yaklaşık 9 kcal olarak kabul edilir.",
  },
  {
    question: "Kalori ihtiyacı yaşla değişir mi?",
    answer:
      "Evet. Yaş, vücut kompozisyonu ve hareket düzeyindeki değişiklikler toplam enerji ihtiyacını etkileyebilir.",
  },
  {
    question: "Çok düşük kalorili diyet güvenli midir?",
    answer:
      "Çok düşük enerji alımı besin eksiklikleri ve sağlık sorunlarına yol açabilir. Böyle planlar yalnızca uygun tıbbi gözetim altında uygulanmalıdır.",
  },
  {
    question: "Kalori hesaplama aracı tıbbi öneri verir mi?",
    answer:
      "Hayır. Araç matematiksel tahmin üretir. Hastalık, gebelik, emzirme, çocukluk, yeme bozukluğu veya özel beslenme gereksinimlerinde sağlık uzmanına danışılmalıdır.",
  },
];

const tocItems: TocItem[] = [
  {
    id: "kalori-ihtiyaci-nedir",
    title: "Kalori ihtiyacı nedir?",
  },
  {
    id: "enerji-harcamasi",
    title: "Enerji harcamasının bileşenleri",
  },
  {
    id: "hesaplama-formulu",
    title: "Kalori ihtiyacı formülü",
  },
  {
    id: "mifflin-st-jeor",
    title: "Mifflin–St Jeor denklemi",
  },
  {
    id: "aktivite-katsayilari",
    title: "Aktivite katsayıları",
  },
  {
    id: "ornekler",
    title: "Gerçek hesaplama örnekleri",
  },
  {
    id: "kilo-koruma",
    title: "Kilo koruma kalorisi",
  },
  {
    id: "kilo-verme",
    title: "Kilo verme kalorisi",
  },
  {
    id: "kilo-alma",
    title: "Kilo alma kalorisi",
  },
  {
    id: "makrolar",
    title: "Makro besin dağılımı",
  },
  {
    id: "takip-ve-ayarlama",
    title: "Sonucu takip etme",
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

const activityRows: ActivityRow[] = [
  {
    level: "Hareketsiz",
    factor: "1,20",
    description:
      "Masa başı yaşam, çok az günlük hareket ve egzersiz",
  },
  {
    level: "Hafif aktif",
    factor: "1,375",
    description:
      "Haftada 1–3 gün hafif egzersiz veya düzenli yürüyüş",
  },
  {
    level: "Orta aktif",
    factor: "1,55",
    description:
      "Haftada 3–5 gün düzenli ve orta yoğunluklu egzersiz",
  },
  {
    level: "Çok aktif",
    factor: "1,725",
    description:
      "Haftada 6–7 gün yoğun egzersiz veya hareketli yaşam",
  },
  {
    level: "Ekstra aktif",
    factor: "1,90",
    description:
      "Ağır fiziksel iş, çift antrenman veya çok yüksek hareket",
  },
];

const exampleRows: ExampleRow[] = [
  {
    profile:
      "30 yaş, erkek, 80 kg, 180 cm, hareketsiz",
    bmr: "1.780 kcal",
    factor: "1,20",
    tdee: "2.136 kcal",
  },
  {
    profile:
      "30 yaş, kadın, 65 kg, 165 cm, hafif aktif",
    bmr: "1.370 kcal",
    factor: "1,375",
    tdee: "1.884 kcal",
  },
  {
    profile:
      "40 yaş, erkek, 90 kg, 175 cm, orta aktif",
    bmr: "1.799 kcal",
    factor: "1,55",
    tdee: "2.788 kcal",
  },
  {
    profile:
      "40 yaş, kadın, 70 kg, 160 cm, hareketsiz",
    bmr: "1.339 kcal",
    factor: "1,20",
    tdee: "1.607 kcal",
  },
  {
    profile:
      "25 yaş, erkek, 70 kg, 178 cm, çok aktif",
    bmr: "1.693 kcal",
    factor: "1,725",
    tdee: "2.920 kcal",
  },
  {
    profile:
      "25 yaş, kadın, 55 kg, 162 cm, orta aktif",
    bmr: "1.277 kcal",
    factor: "1,55",
    tdee: "1.979 kcal",
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
        "https://www.hesaprehberi.com/og/kalori-ihtiyaci-hesaplama-rehberi.jpg",
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
    <p className="rounded-3xl border border-orange-200 bg-orange-50 p-6 text-lg font-semibold leading-8 text-slate-800">
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
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange-300">
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
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
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

export default function KaloriIhtiyaciHesaplamaRehberiPage() {
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
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-sm font-bold text-orange-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Günlük enerji ihtiyacını doğru tahmin et
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Kalori ihtiyacı hesaplama:
                <span className="block bg-gradient-to-r from-orange-300 via-amber-200 to-emerald-200 bg-clip-text text-transparent">
                  TDEE, aktivite ve hedef kalorisi
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Günlük toplam enerji harcamanızı, aktivite
                katsayınızı ve kilo verme, koruma veya alma
                hedefinize uygun başlangıç kalorisini öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/kalori-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-orange-600 px-6 py-3.5 font-black text-white transition hover:bg-orange-500"
                >
                  Kalori ihtiyacını hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#hesaplama-formulu"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Hesaplama yöntemini gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Bazal metabolizma",
                  "TDEE",
                  "Aktivite katsayısı",
                  "Hedef kalorisi",
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
                        Örnek günlük ihtiyaç
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        1.780 kcal BMH
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
                      Orta aktif × 1,55
                    </p>
                    <p className="mt-2 text-5xl font-black text-orange-700">
                      2.759 kcal
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Bu sonuç vücut ağırlığını koruma kalorisi için
                    başlangıç tahminidir; kesin kişisel ihtiyaç değildir.
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
              id="kalori-ihtiyaci-nedir"
              title="Günlük kalori ihtiyacı nedir?"
            >
              <Lead>
                Günlük kalori ihtiyacı, vücudun bir gün boyunca
                kullandığı toplam enerji miktarının tahmini karşılığıdır.
              </Lead>

              <p>
                Vücut yalnızca egzersiz sırasında enerji harcamaz.
                Solunum, kalp atımı, vücut ısısının korunması,
                sindirim, yürüyüş, çalışma ve günlük hareketlerin
                tamamı enerji gerektirir.
              </p>

              <p>
                Kalori ihtiyacı yaş, boy, kilo, biyolojik cinsiyet,
                kas kütlesi, günlük hareket, egzersiz, sağlık durumu
                ve çevresel koşullara göre kişiden kişiye değişir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={HeartPulse}
                  title="Bazal enerji"
                >
                  <p>
                    Vücudun dinlenirken temel işlevler için harcadığı
                    enerjidir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Activity}
                  title="Fiziksel aktivite"
                >
                  <p>
                    Günlük hareket, iş, yürüyüş ve egzersiz
                    harcamalarını kapsar.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Utensils}
                  title="Besinlerin termik etkisi"
                >
                  <p>
                    Besinlerin sindirimi ve işlenmesi sırasında
                    kullanılan enerjidir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="enerji-harcamasi"
              title="Günlük enerji harcamasının bileşenleri"
            >
              <Lead>
                Toplam günlük enerji harcaması birkaç farklı enerji
                bileşeninin birleşiminden oluşur.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Flame
                    className="h-8 w-8 text-orange-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Dinlenme enerji harcaması
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Organların ve temel yaşamsal faaliyetlerin enerji
                    ihtiyacıdır. Toplam harcamanın önemli bölümünü
                    oluşturur.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Dumbbell
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Egzersiz harcaması
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Planlı spor ve antrenman sırasında kullanılan
                    enerjidir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Activity
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Egzersiz dışı hareket
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yürüme, ayakta durma, ev işi ve günlük küçük
                    hareketlerin enerji harcamasıdır.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Utensils
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Besinlerin termik etkisi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yiyeceklerin sindirilmesi, emilmesi ve
                    metabolize edilmesi için harcanan enerjidir.
                  </p>
                </div>
              </div>

              <p>
                Pratik çevrimiçi hesaplamalarda bu bileşenler tek tek
                ölçülmez. Dinlenme metabolizma tahmini aktivite
                katsayısıyla çarpılarak yaklaşık toplam enerji
                harcaması bulunur.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hesaplama-formulu"
              title="Günlük kalori ihtiyacı nasıl hesaplanır?"
            >
              <Lead>
                Kalori ihtiyacı hesabı iki aşamadan oluşur: önce
                dinlenme metabolizma hızı, sonra aktiviteye göre
                toplam enerji harcaması hesaplanır.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Birinci aşama"
                  formula="BMH = Dinlenme Enerji İhtiyacı"
                  description="Yaş, kilo, boy ve biyolojik cinsiyet bilgileri Mifflin–St Jeor gibi bir denklemde kullanılır."
                />

                <FormulaBox
                  title="İkinci aşama"
                  formula="TDEE = BMH × Aktivite Katsayısı"
                  description="Sonuç günlük toplam enerji ihtiyacı için başlangıç tahminidir."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Adım adım örnek
              </h3>

              <ol className="space-y-4">
                {[
                  "Yaş, kilo, boy ve biyolojik cinsiyet bilgilerini belirleyin.",
                  "Mifflin–St Jeor formülüyle BMH değerini hesaplayın.",
                  "Günlük hareket ve egzersize uygun aktivite katsayısını seçin.",
                  "BMH değerini aktivite katsayısıyla çarpın.",
                  "Sonucu birkaç haftalık kilo ve performans takibiyle değerlendirin.",
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

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Formül sonucu kesin kişisel ölçüm değildir.
                    Metabolik odada veya dolaylı kalorimetriyle yapılan
                    ölçümlerden farklılık gösterebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="mifflin-st-jeor"
              title="Mifflin–St Jeor denklemi"
            >
              <Lead>
                Mifflin–St Jeor denklemi yetişkinlerde dinlenme enerji
                harcamasını tahmin etmek için yaygın kullanılan
                formüllerden biridir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için"
                  formula="BMH = 10 × kg + 6,25 × cm − 5 × yaş + 5"
                  description="Kilo kilogram, boy santimetre ve yaş tamamlanan yıl olarak kullanılır."
                />

                <FormulaBox
                  title="Kadınlar için"
                  formula="BMH = 10 × kg + 6,25 × cm − 5 × yaş − 161"
                  description="Temel yapı aynı, yalnızca sabit terim farklıdır."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Erkek örneği
              </h3>

              <p>
                30 yaşında, 80 kg ve 180 cm boyundaki bir erkek için
                10 × 80 + 6,25 × 180 − 5 × 30 + 5 işlemi
                1.780 kcal tahmini BMH verir.
              </p>

              <h3 className="text-2xl font-black text-slate-950">
                Kadın örneği
              </h3>

              <p>
                30 yaşında, 65 kg ve 165 cm boyundaki bir kadın için
                10 × 65 + 6,25 × 165 − 5 × 30 − 161 işlemi yaklaşık
                1.370 kcal tahmini BMH verir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Hesaplanan BMH değerine aktivite katsayısı
                    uygulanmadan günlük koruma kalorisi bulunmuş olmaz.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="aktivite-katsayilari"
              title="Aktivite katsayıları nasıl seçilir?"
            >
              <Lead>
                Aktivite katsayısı yalnızca spor sayısını değil,
                günlük toplam hareket düzeyini temsil etmelidir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[820px] text-left">
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

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Activity}
                  title="Günlük adım"
                >
                  <p>
                    İş ve ulaşım sırasında yapılan yürüyüş toplam
                    hareketi etkiler.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Dumbbell}
                  title="Egzersiz yoğunluğu"
                >
                  <p>
                    Antrenmanın süresi kadar yoğunluğu da enerji
                    harcamasını değiştirir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Gauge}
                  title="Fiziksel iş"
                >
                  <p>
                    Ayakta veya bedensel çalışanların günlük hareketi
                    masa başı çalışanlardan farklıdır.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Aktivite düzeyini olduğundan yüksek seçmek kalori
                    ihtiyacının fazla tahmin edilmesine yol açabilir.
                    Emin değilseniz daha düşük seviyeden başlayıp
                    sonuçları takip etmek daha gerçekçi olabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Günlük kalori ihtiyacı örnekleri"
            >
              <Lead>
                Aşağıdaki değerler Mifflin–St Jeor denklemi ve yaygın
                aktivite katsayılarıyla hesaplanan yaklaşık
                sonuçlardır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Profil
                      </th>
                      <th className="px-5 py-4">
                        BMH
                      </th>
                      <th className="px-5 py-4">
                        Katsayı
                      </th>
                      <th className="px-5 py-4">
                        Tahmini TDEE
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
                          {row.bmr}
                        </td>
                        <td className="px-5 py-4 font-black text-blue-700">
                          {row.factor}
                        </td>
                        <td className="px-5 py-4 font-black text-orange-700">
                          {row.tdee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Gerçek ihtiyacın bu tahminlerden daha düşük veya yüksek
                olması mümkündür. Kilo eğilimi, açlık, performans,
                toparlanma ve sağlık durumu birlikte değerlendirilmelidir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kilo-koruma"
              title="Kilo koruma kalorisi nasıl bulunur?"
            >
              <Lead>
                Kilo koruma kalorisi, uzun vadede alınan enerji ile
                harcanan enerjinin yaklaşık dengede olduğu günlük
                miktardır.
              </Lead>

              <p>
                Hesaplanan TDEE değeri başlangıç tahmini olarak
                kullanılabilir. Örneğin TDEE sonucu 2.400 kcal olan
                bir kişi teorik olarak bu seviyeye yakın bir alımla
                kilosunu koruyabilir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Scale}
                  title="Kilo ortalaması"
                >
                  <p>
                    Günlük dalgalanma yerine haftalık ortalama ağırlığı
                    izleyin.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BarChart3}
                  title="En az birkaç hafta"
                >
                  <p>
                    Tek günlük sonuca göre kalori hedefini
                    değiştirmeyin.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Target}
                  title="Küçük ayarlamalar"
                >
                  <p>
                    Eğilime göre hedef kaloriyi kademeli biçimde
                    güncelleyin.
                  </p>
                </FeatureCard>
              </div>

              <p>
                Vücut ağırlığı haftalar boyunca belirgin biçimde
                yükseliyorsa alınan enerji tahmini koruma seviyesinin
                üzerinde, düşüyorsa altında olabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kilo-verme"
              title="Kilo vermek için kalori ihtiyacı nasıl belirlenir?"
            >
              <Lead>
                Kilo kaybı hedefinde toplam günlük enerji ihtiyacından
                kontrollü bir enerji açığı oluşturulur.
              </Lead>

              <FormulaBox
                title="Başlangıç yaklaşımı"
                formula="Hedef Kalori = TDEE − Kontrollü Enerji Açığı"
                description="Uygun açık miktarı kişisel sağlık, vücut ağırlığı, hareket, performans ve hedefe göre değişir."
              />

              <p>
                Örneğin tahmini TDEE değeri 2.400 kcal olan bir kişi
                ılımlı bir enerji açığıyla daha düşük bir başlangıç
                hedefi seçebilir. Ancak sabit bir rakam herkes için
                doğru değildir.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Minus
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Daha küçük açık
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Genellikle daha yavaş ilerler ancak açlık,
                    performans ve sürdürülebilirlik açısından daha
                    yönetilebilir olabilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <AlertTriangle
                    className="h-8 w-8 text-rose-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Aşırı büyük açık
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yorgunluk, performans düşüşü, açlık ve besin
                    yetersizliği riskini artırabilir.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <HeartPulse
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Çocuklar, ergenler, hamileler, emzirenler, kronik
                    hastalığı veya yeme bozukluğu öyküsü olan kişiler
                    kalori açığını sağlık profesyoneli gözetiminde
                    planlamalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kilo-alma"
              title="Kilo almak için kalori ihtiyacı nasıl belirlenir?"
            >
              <Lead>
                Kilo alma hedefinde tahmini TDEE değerinin üzerinde
                kontrollü bir enerji fazlası oluşturulur.
              </Lead>

              <FormulaBox
                title="Enerji fazlası"
                formula="Hedef Kalori = TDEE + Kontrollü Enerji Fazlası"
                description="Fazlanın büyüklüğü hedefe, antrenmana, sindirim toleransına ve kilo değişim hızına göre ayarlanır."
              />

              <p>
                Kas kazanımı hedefleniyorsa yalnızca daha fazla kalori
                almak yeterli değildir. Düzenli direnç antrenmanı,
                yeterli protein, uyku ve toparlanma da önemlidir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Dumbbell}
                  title="Direnç antrenmanı"
                >
                  <p>
                    Enerji fazlasının kas gelişimiyle desteklenmesine
                    yardımcı olur.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Beef}
                  title="Yeterli protein"
                >
                  <p>
                    Kas protein sentezi ve toparlanma için önemlidir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BarChart3}
                  title="Kontrollü hız"
                >
                  <p>
                    Hızlı kilo artışı daha fazla yağ kazanımına yol
                    açabilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="makrolar"
              title="Kalori hedefi makro besinlere nasıl dağıtılır?"
            >
              <Lead>
                Toplam kalori hedefi belirlendikten sonra protein,
                karbonhidrat ve yağ miktarları kişisel gereksinimlere
                göre planlanabilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Beef
                    className="h-8 w-8 text-rose-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Protein
                  </h3>

                  <p className="mt-3 text-3xl font-black text-rose-700">
                    4 kcal/g
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kas korunması, onarım ve tokluk açısından önemlidir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Wheat
                    className="h-8 w-8 text-amber-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Karbonhidrat
                  </h3>

                  <p className="mt-3 text-3xl font-black text-amber-700">
                    4 kcal/g
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Günlük hareket ve özellikle yoğun egzersiz için
                    önemli enerji kaynağıdır.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Apple
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Yağ
                  </h3>

                  <p className="mt-3 text-3xl font-black text-emerald-700">
                    9 kcal/g
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Hormonlar, hücre yapısı ve yağda çözünen
                    vitaminler için gereklidir.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                2.000 kcal için örnek dağılım
              </h3>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[780px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Makro
                      </th>
                      <th className="px-5 py-4">
                        Örnek kalori
                      </th>
                      <th className="px-5 py-4">
                        Gram hesabı
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık miktar
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-black">
                        Protein
                      </td>
                      <td className="px-5 py-4">
                        600 kcal
                      </td>
                      <td className="px-5 py-4">
                        600 ÷ 4
                      </td>
                      <td className="px-5 py-4 font-black text-rose-700">
                        150 g
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black">
                        Karbonhidrat
                      </td>
                      <td className="px-5 py-4">
                        900 kcal
                      </td>
                      <td className="px-5 py-4">
                        900 ÷ 4
                      </td>
                      <td className="px-5 py-4 font-black text-amber-700">
                        225 g
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black">
                        Yağ
                      </td>
                      <td className="px-5 py-4">
                        500 kcal
                      </td>
                      <td className="px-5 py-4">
                        500 ÷ 9
                      </td>
                      <td className="px-5 py-4 font-black text-emerald-700">
                        Yaklaşık 56 g
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Bu dağılım yalnızca matematiksel bir örnektir. Kişisel
                makro hedefi yaşa, sağlık durumuna, egzersize, tercihlere
                ve profesyonel değerlendirmeye göre değişebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="takip-ve-ayarlama"
              title="Hesaplanan kalori hedefi nasıl takip edilir?"
            >
              <Lead>
                Formülün doğruluğu, birkaç haftalık gerçek sonuçlarla
                değerlendirilip gerekirse küçük adımlarla ayarlanmalıdır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Weight}
                  title="Kilo eğilimi"
                >
                  <p>
                    Günlük değerler yerine haftalık ortalama değişime
                    bakın.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Dumbbell}
                  title="Performans"
                >
                  <p>
                    Egzersiz gücü, dayanıklılık ve toparlanmayı takip
                    edin.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={HeartPulse}
                  title="İyi oluş"
                >
                  <p>
                    Açlık, enerji, uyku ve genel sağlık sinyallerini
                    gözlemleyin.
                  </p>
                </FeatureCard>
              </div>

              <ol className="space-y-4">
                {[
                  "Başlangıç kalorisini en az iki hafta tutarlı biçimde uygulayın.",
                  "Benzer koşullarda düzenli tartılın ve haftalık ortalama alın.",
                  "Hedeflenen yönde değişim yoksa küçük kalori ayarlaması yapın.",
                  "Büyük ve sık değişiklikler yerine kontrollü adımlar kullanın.",
                  "Sağlık sorunu veya belirgin olumsuz belirti varsa profesyonel destek alın.",
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

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <CircleHelp
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Tuz, karbonhidrat, sindirim içeriği, adet döngüsü
                    ve sıvı dengesi günlük tartı sonucunu
                    değiştirebilir. Tek bir güne göre karar vermeyin.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Kalori ihtiyacı hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hatalar aktiviteyi yüksek seçmek, BMH ile
                TDEE'yi karıştırmak ve formül sonucunu kesin kabul
                etmektir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "BMH'yi günlük ihtiyaç sanmak",
                    error:
                      "Dinlenme enerji sonucunu koruma kalorisi olarak kullanmak.",
                    solution:
                      "BMH değerini uygun aktivite katsayısıyla çarparak TDEE tahmini oluşturun.",
                  },
                  {
                    title: "Aktiviteyi fazla tahmin etmek",
                    error:
                      "Masa başı yaşamda birkaç egzersiz nedeniyle çok aktif seviyeyi seçmek.",
                    solution:
                      "Günlük hareket ve fiziksel işi de gerçekçi biçimde değerlendirin.",
                  },
                  {
                    title: "Egzersiz kalorisini iki kez eklemek",
                    error:
                      "Aktivite katsayısına dahil olan egzersizi ayrıca tekrar eklemek.",
                    solution:
                      "Kullandığınız yöntemin egzersizi içerip içermediğini kontrol edin.",
                  },
                  {
                    title: "Tek günlük tartıya göre ayarlamak",
                    error:
                      "Sıvı dalgalanmasını yağ değişimi sanmak.",
                    solution:
                      "En az birkaç haftalık ortalama eğilimi takip edin.",
                  },
                  {
                    title: "Çok büyük kalori açığı oluşturmak",
                    error:
                      "Hızlı sonuç için gereğinden fazla kısıtlama yapmak.",
                    solution:
                      "Sürdürülebilir ve kişisel duruma uygun bir yaklaşım seçin.",
                  },
                  {
                    title: "Yalnızca kaloriye odaklanmak",
                    error:
                      "Protein, lif, vitamin, mineral ve besin kalitesini gözden kaçırmak.",
                    solution:
                      "Toplam enerjiyle birlikte dengeli beslenme yapısını değerlendirin.",
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
                  Günlük kalori ihtiyacınızı hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-orange-100">
                  Yaş, boy, kilo, biyolojik cinsiyet ve aktivite
                  bilgilerinizi girerek tahmini koruma ve hedef
                  kalorilerinizi görüntüleyin.
                </p>

                <Link
                  href="/hesaplamalar/kalori-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-orange-700 transition hover:bg-orange-50"
                >
                  Kalori hesaplama aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Kalori ihtiyacı hakkında sık sorulan sorular"
            >
              <Lead>
                TDEE, aktivite katsayıları, hedef kalorisi ve makro
                besinler hakkında en çok sorulan soruların yanıtlarını
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
                    <Target
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Kişisel enerji tahmini
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Hedefinize uygun başlangıç kalorisini bulun
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Kilo verme, koruma veya alma hedefinizi seçerek
                    günlük enerji ihtiyacınızı hızlıca hesaplayın.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/kalori-hesaplama"
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