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
  Gauge,
  HeartPulse,
  Info,
  ListChecks,
  Ruler,
  Scale,
  Sparkles,
  Target,
  UserRound,
  Weight,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/ideal-kilo-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/ideal-kilo-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "İdeal kilo hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type FormulaRow = {
  name: string;
  men: string;
  women: string;
  note: string;
};

type HeightRow = {
  height: string;
  bmiRange: string;
  generalRange: string;
};

type ExampleRow = {
  profile: string;
  devine: string;
  robinson: string;
  miller: string;
  hamwi: string;
};

const pageTitle =
  "İdeal Kilo Hesaplama Rehberi: Devine, Robinson, Miller ve Hamwi Formülleri";

const pageDescription =
  "İdeal kilo nasıl hesaplanır, Devine, Robinson, Miller ve Hamwi formülleri nasıl uygulanır, BKİ ile sağlıklı kilo aralığı nasıl bulunur öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "İdeal kilo nedir?",
    answer:
      "İdeal kilo, kişinin boyuna göre çeşitli formüllerle tahmin edilen referans ağırlıktır. Tek ve kesin bir sağlık hedefi değildir.",
  },
  {
    question: "İdeal kilo nasıl hesaplanır?",
    answer:
      "Boy ve biyolojik cinsiyet bilgileri Devine, Robinson, Miller veya Hamwi gibi formüllerde kullanılır. Ayrıca BKİ aralığıyla sağlıklı kilo aralığı hesaplanabilir.",
  },
  {
    question: "Devine formülü nedir?",
    answer:
      "Devine formülü, 5 feet üzerindeki her inç için erkeklerde ve kadınlarda farklı katsayılar ekleyerek ideal vücut ağırlığını tahmin eder.",
  },
  {
    question: "Robinson formülü nedir?",
    answer:
      "Robinson formülü, 5 feet üzerindeki her inç için erkeklerde 1,9 kg ve kadınlarda 1,7 kg ekleyerek tahmini ideal ağırlık hesaplar.",
  },
  {
    question: "Miller formülü nedir?",
    answer:
      "Miller formülü erkeklerde 56,2 kg, kadınlarda 53,1 kg taban değerine 5 feet üzerindeki her inç için farklı katsayılar ekler.",
  },
  {
    question: "Hamwi formülü nedir?",
    answer:
      "Hamwi formülü erkeklerde ilk 5 feet için 48 kg, kadınlarda 45,5 kg kullanır ve sonraki her inç için ek ağırlık uygular.",
  },
  {
    question: "İdeal kilo ile BKİ aynı şey midir?",
    answer:
      "Hayır. İdeal kilo formülleri tek bir referans değer üretirken BKİ, boya göre daha geniş bir ağırlık aralığı sunar.",
  },
  {
    question: "BKİ'ye göre sağlıklı kilo aralığı nasıl bulunur?",
    answer:
      "Alt sınır için 18,5 × boyun metre cinsinden karesi, üst sınır için 24,9 × boyun metre cinsinden karesi kullanılır.",
  },
  {
    question: "İdeal kilo hesabında yaş kullanılır mı?",
    answer:
      "Devine, Robinson, Miller ve Hamwi formülleri çoğunlukla yaş kullanmaz. Ancak gerçek sağlıklı ağırlık değerlendirmesinde yaş önemlidir.",
  },
  {
    question: "Kaslı kişilerde ideal kilo hesabı doğru mudur?",
    answer:
      "Kas kütlesi yüksek kişiler formüllerde çıkan değerden daha ağır olup sağlıklı olabilir. Vücut kompozisyonu ayrıca değerlendirilmelidir.",
  },
  {
    question: "Kadın ve erkek için formüller neden farklıdır?",
    answer:
      "Bu klasik formüller geliştirildikleri dönemlerdeki biyolojik cinsiyet ve vücut yapısı varsayımlarına göre farklı katsayılar kullanır.",
  },
  {
    question: "Çocuklarda ideal kilo formülü kullanılabilir mi?",
    answer:
      "Yetişkinler için geliştirilen bu formüller çocuklarda uygun değildir. Çocuklarda yaşa ve cinsiyete göre büyüme eğrileri kullanılmalıdır.",
  },
  {
    question: "Hamilelikte ideal kilo hesabı yapılır mı?",
    answer:
      "Gebelikte hedef ağırlık ve kilo artışı ayrı değerlendirilir. Genel ideal kilo formülleri gebelik için uygun değildir.",
  },
  {
    question: "Birden fazla formül neden farklı sonuç verir?",
    answer:
      "Her formül farklı taban değerleri ve katsayılar kullanır. Bu nedenle aynı kişi için birkaç kilogram fark oluşabilir.",
  },
  {
    question: "İdeal kilo tek bir sayı mıdır?",
    answer:
      "Hayır. Sağlık açısından tek sayı yerine vücut kompozisyonu, bel çevresi, laboratuvar bulguları ve yaşam tarzı birlikte değerlendirilmelidir.",
  },
  {
    question: "İdeal kilonun üzerinde olmak sağlıksız mıdır?",
    answer:
      "Her zaman değil. Kas kütlesi, yağ dağılımı, metabolik sağlık ve fiziksel uygunluk tek bir kilo değerinden daha açıklayıcı olabilir.",
  },
  {
    question: "İdeal kilonun altında olmak sağlıksız mıdır?",
    answer:
      "Her zaman değil ancak düşük kilo beslenme yetersizliği veya sağlık sorunlarıyla ilişkili olabilir. Kişisel değerlendirme gerekir.",
  },
  {
    question: "İdeal kilo hesaplama aracı tıbbi tanı koyar mı?",
    answer:
      "Hayır. Araç yalnızca matematiksel tahmin üretir ve tıbbi tanı veya kişisel tedavi önerisi yerine geçmez.",
  },
  {
    question: "Hangi ideal kilo formülü daha doğrudur?",
    answer:
      "Tek bir formül herkes için en doğru değildir. Formüller referans amaçlıdır; daha kapsamlı değerlendirme için BKİ aralığı ve vücut kompozisyonu birlikte ele alınmalıdır.",
  },
];

const tocItems: TocItem[] = [
  {
    id: "ideal-kilo-nedir",
    title: "İdeal kilo nedir?",
  },
  {
    id: "hesaplama-yontemleri",
    title: "İdeal kilo nasıl hesaplanır?",
  },
  {
    id: "devine-formulu",
    title: "Devine formülü",
  },
  {
    id: "robinson-formulu",
    title: "Robinson formülü",
  },
  {
    id: "miller-formulu",
    title: "Miller formülü",
  },
  {
    id: "hamwi-formulu",
    title: "Hamwi formülü",
  },
  {
    id: "formul-karsilastirma",
    title: "Formüllerin karşılaştırması",
  },
  {
    id: "ornekler",
    title: "Örnek hesaplamalar",
  },
  {
    id: "bki-araligi",
    title: "BKİ ile sağlıklı kilo aralığı",
  },
  {
    id: "boya-gore-kilo",
    title: "Boya göre kilo tablosu",
  },
  {
    id: "vucut-kompozisyonu",
    title: "Kas ve yağ oranının etkisi",
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

const formulaRows: FormulaRow[] = [
  {
    name: "Devine",
    men: "50 kg + 2,3 kg × her ek inç",
    women: "45,5 kg + 2,3 kg × her ek inç",
    note: "İlk 5 feet temel alınır.",
  },
  {
    name: "Robinson",
    men: "52 kg + 1,9 kg × her ek inç",
    women: "49 kg + 1,7 kg × her ek inç",
    note: "İlk 5 feet temel alınır.",
  },
  {
    name: "Miller",
    men: "56,2 kg + 1,41 kg × her ek inç",
    women: "53,1 kg + 1,36 kg × her ek inç",
    note: "İlk 5 feet temel alınır.",
  },
  {
    name: "Hamwi",
    men: "48 kg + 2,7 kg × her ek inç",
    women: "45,5 kg + 2,2 kg × her ek inç",
    note: "İlk 5 feet temel alınır.",
  },
];

const heightRows: HeightRow[] = [
  {
    height: "150 cm",
    bmiRange: "18,5–24,9",
    generalRange: "41,6–56,0 kg",
  },
  {
    height: "155 cm",
    bmiRange: "18,5–24,9",
    generalRange: "44,4–59,8 kg",
  },
  {
    height: "160 cm",
    bmiRange: "18,5–24,9",
    generalRange: "47,4–63,7 kg",
  },
  {
    height: "165 cm",
    bmiRange: "18,5–24,9",
    generalRange: "50,4–67,8 kg",
  },
  {
    height: "170 cm",
    bmiRange: "18,5–24,9",
    generalRange: "53,5–72,0 kg",
  },
  {
    height: "175 cm",
    bmiRange: "18,5–24,9",
    generalRange: "56,7–76,3 kg",
  },
  {
    height: "180 cm",
    bmiRange: "18,5–24,9",
    generalRange: "59,9–80,7 kg",
  },
  {
    height: "185 cm",
    bmiRange: "18,5–24,9",
    generalRange: "63,3–85,2 kg",
  },
  {
    height: "190 cm",
    bmiRange: "18,5–24,9",
    generalRange: "66,8–89,9 kg",
  },
];

const exampleRows: ExampleRow[] = [
  {
    profile: "170 cm erkek",
    devine: "65,9 kg",
    robinson: "65,5 kg",
    miller: "66,1 kg",
    hamwi: "66,0 kg",
  },
  {
    profile: "175 cm erkek",
    devine: "70,5 kg",
    robinson: "69,3 kg",
    miller: "68,9 kg",
    hamwi: "71,4 kg",
  },
  {
    profile: "180 cm erkek",
    devine: "75,0 kg",
    robinson: "73,0 kg",
    miller: "71,7 kg",
    hamwi: "76,7 kg",
  },
  {
    profile: "160 cm kadın",
    devine: "52,3 kg",
    robinson: "54,1 kg",
    miller: "57,4 kg",
    hamwi: "52,1 kg",
  },
  {
    profile: "165 cm kadın",
    devine: "56,9 kg",
    robinson: "57,5 kg",
    miller: "60,1 kg",
    hamwi: "56,5 kg",
  },
  {
    profile: "170 cm kadın",
    devine: "61,4 kg",
    robinson: "60,8 kg",
    miller: "62,8 kg",
    hamwi: "60,9 kg",
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
        "https://www.hesaprehberi.com/og/ideal-kilo-hesaplama-rehberi.jpg",
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

export default function IdealKiloHesaplamaRehberiPage() {
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
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Dört farklı formülle karşılaştırmalı hesaplama
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                İdeal kilo hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                  Devine, Robinson, Miller ve Hamwi
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Boyunuza göre ideal kilo tahminini, farklı formüller
                arasındaki sonuç farklarını ve BKİ ile sağlıklı kilo
                aralığını ayrıntılı biçimde öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/ideal-kilo-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  İdeal kilonu hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#formul-karsilastirma"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Formülleri karşılaştır
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Devine",
                  "Robinson",
                  "Miller",
                  "Hamwi",
                  "BKİ aralığı",
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
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        Örnek karşılaştırma
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        175 cm erkek
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Scale
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-3">
                    {[
                      ["Devine", "70,5 kg"],
                      ["Robinson", "69,3 kg"],
                      ["Miller", "68,9 kg"],
                      ["Hamwi", "71,4 kg"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-2xl bg-slate-100 p-4 text-center"
                      >
                        <p className="text-xs font-bold text-slate-500">
                          {label}
                        </p>
                        <p className="mt-1 text-xl font-black text-blue-700">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Tek bir doğru sayı yerine formül sonuçlarını
                    referans aralık olarak değerlendirmek daha
                    anlamlıdır.
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
                  <ListChecks className="h-5 w-5 text-blue-300" />

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
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
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
              id="ideal-kilo-nedir"
              title="İdeal kilo nedir?"
            >
              <Lead>
                İdeal kilo, boya ve bazı temel özelliklere göre
                matematiksel formüllerle tahmin edilen referans vücut
                ağırlığıdır.
              </Lead>

              <p>
                İdeal kilo kavramı tek başına kişinin sağlıklı olup
                olmadığını göstermez. Aynı boydaki iki kişi kas
                kütlesi, kemik yapısı, yağ oranı ve sağlık durumu
                bakımından farklı olabilir.
              </p>

              <p>
                Bu nedenle ideal kilo sonucu, kesin hedef yerine
                genel bir referans olarak değerlendirilmelidir.
                Sağlıklı kilo değerlendirmesinde BKİ, bel çevresi,
                vücut yağ oranı ve metabolik sağlık birlikte ele
                alınmalıdır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Ruler}
                  title="Boy temelli tahmin"
                >
                  <p>
                    Formüllerin çoğu temel olarak boy uzunluğunu
                    kullanır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={UserRound}
                  title="Cinsiyete göre katsayı"
                >
                  <p>
                    Klasik formüller kadın ve erkek için farklı
                    taban değerleri kullanır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Target}
                  title="Referans değer"
                >
                  <p>
                    Sonuç, kişisel sağlık hedefinin tek belirleyicisi
                    değildir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hesaplama-yontemleri"
              title="İdeal kilo nasıl hesaplanır?"
            >
              <Lead>
                Boyun 5 feet üzerindeki kısmı inç cinsinden bulunur ve
                her formülün cinsiyete özgü katsayısıyla çarpılır.
              </Lead>

              <p>
                Klasik ideal kilo formüllerinin çoğu 5 feet yani
                yaklaşık 152,4 cm boyu başlangıç noktası olarak alır.
                Bu değerin üzerindeki her inç için belirli kilogram
                eklenir.
              </p>

              <ol className="space-y-4">
                {[
                  "Boy uzunluğunu santimetre cinsinden belirleyin.",
                  "Boyu inçe dönüştürmek için 2,54'e bölün.",
                  "Toplam inç değerinden 60 çıkararak 5 feet üzerindeki kısmı bulun.",
                  "Seçilen formülün cinsiyete göre taban değerini ve katsayısını kullanın.",
                  "Birden fazla formül sonucunu birlikte değerlendirin.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>

              <FormulaBox
                title="Santimetreden inçe dönüşüm"
                formula="İnç = Boy (cm) ÷ 2,54"
                description="Formüllerde 5 feet üzerindeki her inç ayrı katsayıyla değerlendirilir."
              />

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Bu formüller yetişkinler için referans amaçlıdır.
                    Çocuklar, ergenler, hamileler ve özel sağlık
                    durumları için uygun değerlendirme yöntemi değildir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="devine-formulu"
              title="Devine ideal kilo formülü"
            >
              <Lead>
                Devine formülü, ideal vücut ağırlığı tahmininde en
                bilinen klasik yöntemlerden biridir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için Devine"
                  formula="50 kg + 2,3 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 50 kg taban değeri kullanılır."
                />

                <FormulaBox
                  title="Kadınlar için Devine"
                  formula="45,5 kg + 2,3 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 45,5 kg taban değeri kullanılır."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                175 cm erkek örneği
              </h3>

              <p>
                175 cm yaklaşık 68,9 inçtir. 60 inç çıkarıldığında
                8,9 ek inç kalır. Devine formülüne göre
                50 + 2,3 × 8,9 işlemi yaklaşık 70,5 kg verir.
              </p>

              <h3 className="text-2xl font-black text-slate-950">
                165 cm kadın örneği
              </h3>

              <p>
                165 cm yaklaşık 65 inçtir. 5 feet üzerindeki bölüm
                yaklaşık 5 inçtir. 45,5 + 2,3 × 5 işlemi yaklaşık
                57 kg sonucunu verir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="robinson-formulu"
              title="Robinson ideal kilo formülü"
            >
              <Lead>
                Robinson formülü, Devine yöntemine benzer ancak daha
                farklı taban değerleri ve inç katsayıları kullanır.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için Robinson"
                  formula="52 kg + 1,9 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 52 kg taban değeri kullanılır."
                />

                <FormulaBox
                  title="Kadınlar için Robinson"
                  formula="49 kg + 1,7 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 49 kg taban değeri kullanılır."
                />
              </div>

              <p>
                Robinson formülü bazı boylarda Devine formülüne göre
                daha düşük, bazı boylarda ise yakın sonuç verebilir.
                Formüller arasındaki fark matematiksel katsayılardan
                kaynaklanır.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Tek formüle bağlı kalmak yerine birkaç yöntemin
                    sonucunu karşılaştırmak daha dengeli bir referans
                    oluşturabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="miller-formulu"
              title="Miller ideal kilo formülü"
            >
              <Lead>
                Miller formülü daha yüksek taban değerleri ve daha
                düşük inç katsayıları kullanır.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için Miller"
                  formula="56,2 kg + 1,41 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 56,2 kg taban değeri kullanılır."
                />

                <FormulaBox
                  title="Kadınlar için Miller"
                  formula="53,1 kg + 1,36 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 53,1 kg taban değeri kullanılır."
                />
              </div>

              <p>
                Miller formülü özellikle daha kısa boylarda diğer
                formüllere göre daha yüksek sonuçlar verebilir.
                Boy uzadıkça kullanılan daha düşük inç katsayıları
                farkın azalmasına neden olabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hamwi-formulu"
              title="Hamwi ideal kilo formülü"
            >
              <Lead>
                Hamwi formülü klinik referanslarda sık anılan ve vücut
                yapısına göre düzeltme yorumlarıyla birlikte kullanılan
                klasik yöntemlerden biridir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Erkekler için Hamwi"
                  formula="48 kg + 2,7 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 48 kg taban değeri kullanılır."
                />

                <FormulaBox
                  title="Kadınlar için Hamwi"
                  formula="45,5 kg + 2,2 kg × 5 feet üzerindeki her inç"
                  description="İlk 5 feet için 45,5 kg taban değeri kullanılır."
                />
              </div>

              <p>
                Hamwi yaklaşımında bazı kaynaklar küçük veya büyük
                vücut yapısı için yüzde düzeltme önerir. Ancak vücut
                yapısı değerlendirmesi öznel olabileceği için bu tür
                düzeltmeler dikkatli yorumlanmalıdır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="formul-karsilastirma"
              title="İdeal kilo formüllerinin karşılaştırması"
            >
              <Lead>
                Dört formül aynı mantığı paylaşır ancak taban değerleri
                ve her ek inç için kullandıkları katsayılar farklıdır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Formül
                      </th>
                      <th className="px-5 py-4">
                        Erkek
                      </th>
                      <th className="px-5 py-4">
                        Kadın
                      </th>
                      <th className="px-5 py-4">
                        Not
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {formulaRows.map((row) => (
                      <tr key={row.name}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.name}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.men}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.women}
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
                Devine ve Hamwi formülleri uzun boylarda daha yüksek
                sonuç verebilirken Miller formülü daha düşük artış
                katsayısı nedeniyle farklılaşabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Kadın ve erkek için örnek ideal kilo hesaplamaları"
            >
              <Lead>
                Aşağıdaki tabloda farklı boylarda dört formülün yaklaşık
                sonuçları karşılaştırılmıştır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Profil
                      </th>
                      <th className="px-5 py-4">
                        Devine
                      </th>
                      <th className="px-5 py-4">
                        Robinson
                      </th>
                      <th className="px-5 py-4">
                        Miller
                      </th>
                      <th className="px-5 py-4">
                        Hamwi
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={row.profile}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.profile}
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-700">
                          {row.devine}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.robinson}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.miller}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.hamwi}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Sonuçlar yuvarlama nedeniyle küçük farklılıklar
                gösterebilir. Araçta kullanılan hassasiyet ve inç
                dönüşümü sonucu birkaç yüz gram değiştirebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bki-araligi"
              title="BKİ ile sağlıklı kilo aralığı nasıl hesaplanır?"
            >
              <Lead>
                BKİ yöntemi tek bir ideal kilo yerine boya göre genel
                bir ağırlık aralığı sunar.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Alt sınır"
                  formula="Alt Kilo = 18,5 × Boy²"
                  description="Boy metre cinsinden karesi alınarak hesaplanır."
                />

                <FormulaBox
                  title="Üst sınır"
                  formula="Üst Kilo = 24,9 × Boy²"
                  description="Genel yetişkin BKİ referans aralığının üst sınırıdır."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                170 cm için örnek
              </h3>

              <p>
                1,70 × 1,70 işlemi 2,89 eder. Alt sınır
                18,5 × 2,89 = 53,5 kg, üst sınır ise
                24,9 × 2,89 = yaklaşık 72 kg olarak bulunur.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    BKİ kas ve yağ dokusunu ayırt etmez. Kaslı kişilerde
                    yüksek BKİ sonucu yağ fazlalığı anlamına gelmeyebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="boya-gore-kilo"
              title="Boya göre sağlıklı kilo aralığı tablosu"
            >
              <Lead>
                Bu tablo 18,5–24,9 BKİ aralığı kullanılarak hesaplanan
                yaklaşık yetişkin kilo aralıklarını gösterir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Boy
                      </th>
                      <th className="px-5 py-4">
                        Kullanılan BKİ
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık kilo aralığı
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {heightRows.map((row) => (
                      <tr key={row.height}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.height}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.bmiRange}
                        </td>
                        <td className="px-5 py-4 font-black text-blue-700">
                          {row.generalRange}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Bu aralıklar genel yetişkin referansıdır. Yaşlılar,
                sporcular, çocuklar, hamileler ve belirli sağlık
                durumlarında farklı değerlendirmeler gerekebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="vucut-kompozisyonu"
              title="Kas kütlesi ve yağ oranı ideal kilo sonucunu nasıl etkiler?"
            >
              <Lead>
                Aynı boy ve kilodaki iki kişinin sağlık görünümü ve
                vücut kompozisyonu tamamen farklı olabilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Dumbbell}
                  title="Kas kütlesi"
                >
                  <p>
                    Kaslı kişiler formül sonucundan daha ağır olup
                    düşük yağ oranına sahip olabilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Gauge}
                  title="Vücut yağ oranı"
                >
                  <p>
                    Toplam kilonun ne kadarının yağ dokusu olduğunu
                    anlamaya yardımcı olur.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Ruler}
                  title="Bel çevresi"
                >
                  <p>
                    Karın bölgesi yağlanması hakkında ek bilgi sağlar.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Activity}
                  title="Fiziksel performans"
                >
                  <p>
                    Dayanıklılık, güç ve hareket kapasitesi sağlığın
                    önemli parçalarıdır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={HeartPulse}
                  title="Metabolik sağlık"
                >
                  <p>
                    Kan basıncı, kan şekeri ve lipid değerleri kilo
                    sayısından daha açıklayıcı olabilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BarChart3}
                  title="Zaman içindeki eğilim"
                >
                  <p>
                    Tek ölçüm yerine uzun dönemli değişim daha anlamlı
                    olabilir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <CircleHelp
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Formül sonucu sizi sağlıklı veya sağlıksız olarak
                    sınıflandırmaz. Kilo yalnızca daha geniş sağlık
                    değerlendirmesinin bir parçasıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="İdeal kilo hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, formül sonucunu herkes için geçerli
                kesin hedef ağırlık kabul etmektir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Tek formüle bağlı kalmak",
                    error:
                      "Yalnızca bir yöntemin sonucunu kesin doğru kabul etmek.",
                    solution:
                      "Birden fazla formülü ve BKİ aralığını birlikte değerlendirin.",
                  },
                  {
                    title: "Kas kütlesini göz ardı etmek",
                    error:
                      "Sporcuları yalnızca toplam kilo üzerinden değerlendirmek.",
                    solution:
                      "Vücut yağ oranı ve kas kütlesi gibi ölçümleri de dikkate alın.",
                  },
                  {
                    title: "Çocuklarda yetişkin formülü kullanmak",
                    error:
                      "Çocuk ve ergenlerde yetişkin ideal kilo denklemlerini uygulamak.",
                    solution:
                      "Yaşa ve cinsiyete özgü büyüme eğrileri kullanılmalıdır.",
                  },
                  {
                    title: "BKİ'yi kesin tanı sanmak",
                    error:
                      "BKİ sonucunu tek başına hastalık göstergesi kabul etmek.",
                    solution:
                      "Bel çevresi, laboratuvar bulguları ve klinik değerlendirmeyle birlikte yorumlayın.",
                  },
                  {
                    title: "Vücut yapısı farkını yok saymak",
                    error:
                      "Herkesin aynı kemik ve kas yapısına sahip olduğunu varsaymak.",
                    solution:
                      "Sonucu kişisel yapı ve yaşam tarzı bağlamında değerlendirin.",
                  },
                  {
                    title: "Hızlı kilo değişimi hedeflemek",
                    error:
                      "Formül sonucuna kısa sürede ulaşmak için aşırı diyet uygulamak.",
                    solution:
                      "Sürdürülebilir ve sağlık profesyoneliyle uyumlu hedefler belirleyin.",
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

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-600 p-8 text-white shadow-xl shadow-blue-950/20">
                <Scale
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  İdeal kilo tahmininizi hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Boy ve biyolojik cinsiyet bilgilerinizi girerek
                  Devine, Robinson, Miller ve Hamwi sonuçlarını tek
                  ekranda karşılaştırın.
                </p>

                <Link
                  href="/hesaplamalar/ideal-kilo-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  İdeal kilo aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="İdeal kilo hakkında sık sorulan sorular"
            >
              <Lead>
                İdeal kilo formülleri, BKİ aralığı ve vücut
                kompozisyonu hakkında en çok sorulan soruların
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                    <Calculator
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Karşılaştırmalı ideal kilo
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Dört formülün sonucunu tek ekranda görün
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Boyunuza göre farklı ideal kilo tahminlerini ve
                    BKİ temelli genel kilo aralığını hızlıca hesaplayın.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/ideal-kilo-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
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