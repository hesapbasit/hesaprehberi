import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeInfo,
  Banknote,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CalendarClock,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CircleDollarSign,
  Coins,
  CreditCard,
  Gauge,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  PiggyBank,
  Scale,
  ShieldCheck,
  Sparkles,
  TimerReset,
  TrendingUp,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/bilesik-faiz-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi lib/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Bileşik faiz hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "bilesik-faiz-nedir", label: "Bileşik faiz nedir?" },
  { id: "nasil-hesaplanir", label: "Bileşik faiz nasıl hesaplanır?" },
  { id: "formuller", label: "Temel formüller" },
  { id: "basit-ve-bilesik", label: "Basit ve bileşik faiz farkı" },
  { id: "bilesiklesme-sikligi", label: "Bileşikleşme sıklığı" },
  { id: "duzenli-katki", label: "Düzenli katkının etkisi" },
  { id: "efektif-getiri", label: "Efektif yıllık getiri" },
  { id: "stopaj-ve-net-getiri", label: "Stopaj ve net getiri" },
  { id: "reel-getiri", label: "Enflasyon ve reel getiri" },
  { id: "uzun-vadeli-etki", label: "Uzun vadeli büyüme" },
  { id: "ornekler", label: "Örnek senaryolar" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Başlangıç tutarını girin",
    description:
      "Bileşik büyümenin başlayacağı ana para tutarını belirleyin.",
    icon: WalletCards,
  },
  {
    number: "02",
    title: "Faiz oranı ve süreyi seçin",
    description:
      "Nominal yıllık faiz oranını ve yatırım süresini girin.",
    icon: Percent,
  },
  {
    number: "03",
    title: "Bileşikleşme sıklığını belirleyin",
    description:
      "Faizin yıllık, aylık veya günlük olarak eklenmesini seçin.",
    icon: TimerReset,
  },
  {
    number: "04",
    title: "Katkı ve kesintileri ekleyin",
    description:
      "Düzenli katkı, stopaj ve enflasyon oranlarını senaryoya dahil edin.",
    icon: PiggyBank,
  },
];

const frequencyRows = [
  {
    frequency: "Yıllık",
    periods: "1",
    nominalRate: "%30",
    effectiveRate: "%30,00",
    description: "Faiz yılda bir kez ana paraya eklenir.",
  },
  {
    frequency: "Altı aylık",
    periods: "2",
    nominalRate: "%30",
    effectiveRate: "%32,25",
    description: "Faiz yılda iki kez bakiyeye eklenir.",
  },
  {
    frequency: "Üç aylık",
    periods: "4",
    nominalRate: "%30",
    effectiveRate: "%33,55",
    description: "Faiz yılda dört kez bileşikleşir.",
  },
  {
    frequency: "Aylık",
    periods: "12",
    nominalRate: "%30",
    effectiveRate: "%34,49",
    description: "Faiz her ay sonunda bakiyeye eklenir.",
  },
  {
    frequency: "Günlük",
    periods: "365",
    nominalRate: "%30",
    effectiveRate: "%34,97",
    description: "Faiz teorik olarak her gün bileşikleşir.",
  },
];

const comparisonRows = [
  {
    year: "1. yıl",
    simple: "130.000 TL",
    compound: "130.000 TL",
    difference: "0 TL",
  },
  {
    year: "2. yıl",
    simple: "160.000 TL",
    compound: "169.000 TL",
    difference: "9.000 TL",
  },
  {
    year: "3. yıl",
    simple: "190.000 TL",
    compound: "219.700 TL",
    difference: "29.700 TL",
  },
  {
    year: "5. yıl",
    simple: "250.000 TL",
    compound: "371.293 TL",
    difference: "121.293 TL",
  },
  {
    year: "10. yıl",
    simple: "400.000 TL",
    compound: "1.378.585 TL",
    difference: "978.585 TL",
  },
];

const contributionRows = [
  {
    monthlyContribution: "0 TL",
    totalContribution: "100.000 TL",
    estimatedBalance: "371.293 TL",
    estimatedGain: "271.293 TL",
  },
  {
    monthlyContribution: "2.500 TL",
    totalContribution: "250.000 TL",
    estimatedBalance: "714.000 TL",
    estimatedGain: "464.000 TL",
  },
  {
    monthlyContribution: "5.000 TL",
    totalContribution: "400.000 TL",
    estimatedBalance: "1.057.000 TL",
    estimatedGain: "657.000 TL",
  },
  {
    monthlyContribution: "10.000 TL",
    totalContribution: "700.000 TL",
    estimatedBalance: "1.743.000 TL",
    estimatedGain: "1.043.000 TL",
  },
];

const scenarioRows = [
  {
    title: "Kısa vadeli birikim",
    principal: "50.000 TL",
    contribution: "2.500 TL/ay",
    rate: "%25",
    duration: "2 yıl",
    frequency: "Aylık",
  },
  {
    title: "Orta vadeli yatırım",
    principal: "100.000 TL",
    contribution: "5.000 TL/ay",
    rate: "%35",
    duration: "5 yıl",
    frequency: "Aylık",
  },
  {
    title: "Uzun vadeli birikim",
    principal: "250.000 TL",
    contribution: "10.000 TL/ay",
    rate: "%30",
    duration: "10 yıl",
    frequency: "Aylık",
  },
  {
    title: "Düzenli yatırım planı",
    principal: "25.000 TL",
    contribution: "3.000 TL/ay",
    rate: "%20",
    duration: "15 yıl",
    frequency: "Aylık",
  },
];

const longTermRows = [
  {
    duration: "1 yıl",
    total: "130.000 TL",
    gain: "30.000 TL",
    multiplier: "1,30 kat",
  },
  {
    duration: "3 yıl",
    total: "219.700 TL",
    gain: "119.700 TL",
    multiplier: "2,20 kat",
  },
  {
    duration: "5 yıl",
    total: "371.293 TL",
    gain: "271.293 TL",
    multiplier: "3,71 kat",
  },
  {
    duration: "10 yıl",
    total: "1.378.585 TL",
    gain: "1.278.585 TL",
    multiplier: "13,79 kat",
  },
  {
    duration: "20 yıl",
    total: "19.004.964 TL",
    gain: "18.904.964 TL",
    multiplier: "190,05 kat",
  },
];

const usageAreas = [
  {
    title: "Mevduat karşılaştırması",
    description:
      "Farklı oran ve bileşikleşme sıklıklarının vade sonu tutarına etkisini karşılaştırın.",
    icon: Landmark,
  },
  {
    title: "Uzun vadeli birikim",
    description:
      "Yıllar boyunca faizin faize etkisini ve büyüme hızını inceleyin.",
    icon: TrendingUp,
  },
  {
    title: "Düzenli yatırım planı",
    description:
      "Aylık katkıların uzun vadede toplam birikimi nasıl değiştirdiğini görün.",
    icon: PiggyBank,
  },
  {
    title: "Reel getiri analizi",
    description:
      "Enflasyon sonrası satın alma gücündeki yaklaşık değişimi değerlendirin.",
    icon: BarChart3,
  },
  {
    title: "Stopaj karşılaştırması",
    description:
      "Brüt getiri ile net vade sonu tutarı arasındaki farkı inceleyin.",
    icon: ShieldCheck,
  },
  {
    title: "Hedef bazlı planlama",
    description:
      "Belirli bir gelecek tutarına ulaşmak için gerekli süre ve katkıyı karşılaştırın.",
    icon: Gauge,
  },
];

const commonMistakes = [
  {
    title: "Nominal oranı efektif oran sanmak",
    description:
      "Nominal faiz ilan edilen orandır; efektif getiri bileşikleşme sıklığını da içerir.",
    icon: CircleAlert,
  },
  {
    title: "Stopajı hesaba katmamak",
    description:
      "Brüt faiz ile net kazanç aynı değildir. Vergi kesintisi sonucu azaltabilir.",
    icon: ShieldCheck,
  },
  {
    title: "Enflasyonu göz ardı etmek",
    description:
      "Nominal kazanç artarken satın alma gücü aynı ölçüde artmayabilir.",
    icon: BarChart3,
  },
  {
    title: "Düzenli katkı zamanını önemsememek",
    description:
      "Ay başında ve ay sonunda yapılan katkılar uzun vadede farklı sonuç üretir.",
    icon: CalendarClock,
  },
];

const relatedCalculators = [
  {
    title: "Basit Faiz Hesaplama",
    description:
      "Yalnızca başlangıç ana parası üzerinden oluşan faiz kazancını hesaplayın.",
    href: "/hesaplamalar/basit-faiz-hesaplama",
    icon: Percent,
  },
  {
    title: "Mevduat Faizi Hesaplama",
    description:
      "Vadeli mevduat için brüt ve net faiz kazancını karşılaştırın.",
    href: "/hesaplamalar/mevduat-faizi-hesaplama",
    icon: Landmark,
  },
  {
    title: "Yatırım Getirisi Hesaplama",
    description:
      "Başlangıç ve bitiş değerlerine göre toplam getiri oranını bulun.",
    href: "/hesaplamalar/yatirim-getirisi-hesaplama",
    icon: TrendingUp,
  },
  {
    title: "Enflasyon Hesaplama",
    description:
      "Paranın zaman içindeki satın alma gücü değişimini karşılaştırın.",
    href: "/hesaplamalar/enflasyon-hesaplama",
    icon: BarChart3,
  },
  {
    title: "Kredi Hesaplama",
    description:
      "Faiz oranı ve vadeye göre aylık taksit ile toplam geri ödemeyi görün.",
    href: "/hesaplamalar/kredi-hesaplama",
    icon: CreditCard,
  },
  {
    title: "Tasarruf Hesaplama",
    description:
      "Düzenli birikim hedefiniz için aylık tasarruf planı oluşturun.",
    href: "/hesaplamalar/tasarruf-hesaplama",
    icon: PiggyBank,
  },
];

const faqItems = [
  {
    question: "Bileşik faiz nedir?",
    answer:
      "Bileşik faiz, önceki dönemlerde oluşan faiz kazancının ana paraya eklenmesi ve sonraki faiz hesabının büyüyen toplam üzerinden yapılmasıdır.",
  },
  {
    question: "Bileşik faiz nasıl hesaplanır?",
    answer:
      "Ana para, dönemsel faiz oranı, bileşikleşme sayısı ve toplam süre kullanılır. Her dönem sonunda faiz bakiyeye eklenir.",
  },
  {
    question: "Basit faiz ile bileşik faiz arasındaki fark nedir?",
    answer:
      "Basit faiz yalnızca başlangıç ana parası üzerinden işler. Bileşik faiz ise önceki faiz kazançlarını da hesaplama tabanına ekler.",
  },
  {
    question: "Bileşikleşme sıklığı sonucu etkiler mi?",
    answer:
      "Evet. Aynı nominal yıllık oran altında daha sık bileşikleşme genellikle daha yüksek efektif getiri oluşturur.",
  },
  {
    question: "Aylık bileşik faiz ne demektir?",
    answer:
      "Faizin her ay sonunda bakiyeye eklenmesi ve sonraki ay faizinin yeni toplam üzerinden hesaplanmasıdır.",
  },
  {
    question: "Günlük bileşik faiz daha mı avantajlıdır?",
    answer:
      "Aynı nominal oran ve diğer koşullar sabitse daha sık bileşikleşme teorik olarak getiriyi artırabilir.",
  },
  {
    question: "Düzenli aylık katkı nasıl hesaplanır?",
    answer:
      "Her katkı bakiyeye eklenir ve katkının sistemde kaldığı dönem boyunca faiz etkisi uygulanır.",
  },
  {
    question: "Ay başında katkı ile ay sonunda katkı farkı nedir?",
    answer:
      "Ay başında yatırılan katkı daha uzun süre faiz kazanabildiği için genellikle daha yüksek sonuç üretir.",
  },
  {
    question: "Stopaj bileşik faizi nasıl etkiler?",
    answer:
      "Stopaj brüt faiz kazancı üzerinden kesinti oluşturarak net getiriyi ve vade sonu tutarını azaltır.",
  },
  {
    question: "Efektif yıllık getiri nedir?",
    answer:
      "Nominal faiz oranının bileşikleşme sıklığı dikkate alınarak yıllık gerçek karşılığını yaklaşık olarak gösterir.",
  },
  {
    question: "Reel getiri nedir?",
    answer:
      "Net getirinin enflasyon etkisinden arındırılmış halidir ve satın alma gücündeki yaklaşık değişimi gösterir.",
  },
  {
    question: "Enflasyondan arındırılmış değer neyi gösterir?",
    answer:
      "Gelecekteki toplam birikimin bugünkü satın alma gücüne yaklaşık olarak dönüştürülmüş karşılığıdır.",
  },
  {
    question: "Faizin faize etkisi nasıl bulunur?",
    answer:
      "Bileşik faiz sonucu ile aynı ana para ve süre için hesaplanan basit faiz karşılaştırılarak fark bulunabilir.",
  },
  {
    question: "Bileşik faiz hesabında vade önemli midir?",
    answer:
      "Evet. Süre uzadıkça faizin faize etkisi daha görünür hale gelir ve büyüme hızlanabilir.",
  },
  {
    question: "Aylık katkı olmadan hesaplama yapılabilir mi?",
    answer:
      "Evet. Aylık katkıyı sıfır girerek yalnızca başlangıç ana parasının büyümesini inceleyebilirsiniz.",
  },
  {
    question: "Başlangıç ana parası olmadan hesaplama yapılabilir mi?",
    answer:
      "Araç başlangıç tutarı bekleyebilir. Düzenli birikim için düşük bir başlangıç ana parası girilebilir.",
  },
  {
    question: "Negatif faiz oranı girilebilir mi?",
    answer:
      "Araç negatif faiz, stopaj veya enflasyon oranlarını geçerli kabul etmeyebilir.",
  },
  {
    question: "Nominal faiz ile efektif faiz aynı mıdır?",
    answer:
      "Hayır. Nominal faiz ilan edilen yıllık orandır; efektif faiz bileşikleşme sıklığının etkisini de içerir.",
  },
  {
    question: "Hesaplanan sonuç banka teklifiyle aynı olur mu?",
    answer:
      "Her zaman değil. Valör, ürün şartları, vergi uygulaması, tahakkuk yöntemi ve yuvarlama farklılık yaratabilir.",
  },
  {
    question: "Bileşik faiz uzun vadede neden güçlüdür?",
    answer:
      "Kazançların yeniden getiri üretmesi nedeniyle büyüme doğrusal değil, giderek hızlanan bir yapıya dönüşebilir.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Bileşik Faiz Hesaplama Aracı",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: calculator.description,
  url: canonicalUrl,
  inLanguage: "tr-TR",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://https://hesaprehberionline.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hesaplamalar",
      item: "https://https://hesaprehberionline.com/hesaplamalar",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: calculator.title,
      item: canonicalUrl,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Bileşik faiz nasıl hesaplanır?",
  description:
    "Ana para, faiz oranı, süre, bileşikleşme sıklığı ve düzenli katkıyla bileşik faiz hesaplama adımları.",
  totalTime: "PT2M",
  step: usageSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bileşik Faiz Hesaplama Rehberi",
  description: calculator.description,
  url: canonicalUrl,
  inLanguage: "tr-TR",
  author: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  mainEntityOfPage: canonicalUrl,
};

export default function BilesikFaizHesaplamaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="[&_a]:text-violet-200 [&_a:hover]:text-white [&_span]:text-slate-400">
            <Breadcrumb
              items={[
                { label: "Hesaplamalar", href: "/hesaplamalar" },
                { label: calculator.title },
              ]}
            />
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 ring-1 ring-violet-400/20">
                  <Coins className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Bileşik Faiz Hesaplama
                <span className="mt-2 block text-violet-300">
                  Birikiminizin Uzun Vadeli Büyümesini Görün
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Ana para, faiz oranı, bileşikleşme sıklığı, düzenli katkı,
                stopaj ve enflasyon değerlerini kullanarak gelecekteki
                birikiminizi ayrıntılı biçimde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-violet-300" aria-hidden="true" />
                  Bileşik büyüme
                </span>
                <span className="inline-flex items-center gap-2">
                  <PiggyBank className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                  Düzenli katkı
                </span>
                <span className="inline-flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Reel getiri
                </span>
              </div>

              <div className="mt-8 [&_button]:border-white/20 [&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20">
                <ShareButtons
                  title={`${calculator.title} | HesapRehberi`}
                  description={calculator.description}
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-200">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-violet-200">
                    Sayfa rehberi
                  </p>
                  <h2 className="text-lg font-bold text-white">İçindekiler</h2>
                </div>
              </div>

              <nav aria-label="İçindekiler" className="mt-6">
                <ol className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-violet-200">
                          {index + 1}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        <ChevronRight
                          className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <section id="hesaplama-araci" className="scroll-mt-24">
          <CompoundInterestCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Bileşik faiz hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Birikiminizin gelecekteki değerini dört temel adımda
              hesaplayabilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {usageSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] md:mt-20">
          <div className="space-y-8">
            <section
              id="bilesik-faiz-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 sm:flex">
                  <TrendingUp className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Bileşik faiz nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Bileşik faiz, bir yatırımın yalnızca başlangıç ana parası
                  üzerinden değil, önceki dönemlerde oluşan faiz kazançları
                  üzerinden de getiri üretmesi anlamına gelir.
                </p>
                <p>
                  Her dönem sonunda oluşan faiz bakiyeye eklenir ve sonraki
                  dönem faizi büyüyen toplam üzerinden hesaplanır. Bu nedenle
                  bileşik büyüme zaman içinde hızlanabilir.
                </p>
                <p>
                  Düzenli katkılar da sisteme dahil edildiğinde erken yatırılan
                  her tutar daha uzun süre faiz üretme fırsatı bulur.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                  <h3 className="font-bold text-violet-950">
                    Ana para
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    Büyümenin başladığı ilk yatırım tutarıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <h3 className="font-bold text-indigo-950">
                    Faiz kazancı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Her dönemde bakiyeye eklenen getiridir.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">
                    Faizin faizi
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Önceki kazançların da yeni getiri üretmesidir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="nasil-hesaplanir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Hesaplama yöntemi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Bileşik faiz nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Temel hesaplamada ana para, nominal yıllık faiz oranı,
                bir yıldaki bileşikleşme sayısı ve toplam süre kullanılır.
                Faiz her dönemde bakiyeye eklenir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <WalletCards className="h-6 w-6 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Başlangıç ana parası
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Bileşik büyümenin başladığı ilk tutardır.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Percent className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Nominal faiz oranı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Bileşikleşme öncesi ilan edilen yıllık orandır.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <TimerReset className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Bileşikleşme sıklığı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Faizin yılda kaç kez bakiyeye eklendiğini gösterir.
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <CalendarClock className="h-6 w-6 text-amber-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Yatırım süresi
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Birikimin faiz üretmeye devam ettiği toplam dönemdir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="formuller"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Matematiksel temel
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Bileşik faiz formülleri
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Düzenli katkı olmadan kullanılan temel formül, ana paranın
                dönemsel faiz oranıyla kaç dönem büyüdüğünü gösterir.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Gelecek Değer = Ana Para × (1 + r / n)^(n × t)
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Faiz Kazancı = Gelecek Değer − Ana Para − Toplam Katkı
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Efektif Getiri = (1 + r / n)^n − 1
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <BadgeInfo className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-blue-950">
                      Formüldeki değişkenler
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-blue-900">
                      r yıllık nominal faiz oranını, n bir yıldaki bileşikleşme
                      sayısını ve t toplam yıl sayısını ifade eder.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="basit-ve-bilesik"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Karşılaştırma
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Basit faiz ve bileşik faiz arasındaki fark
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Basit faiz yalnızca başlangıç ana parası üzerinden işler.
                Bileşik faiz ise önceki faiz kazançlarını da yeni hesaplama
                tabanına ekler.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[820px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-violet-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Özellik</th>
                      <th className="px-5 py-4 text-sm font-bold">Basit faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Bileşik faiz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-950">
                        Hesaplama tabanı
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Başlangıç ana parası
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Ana para ve birikmiş faiz
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-950">
                        Büyüme şekli
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Doğrusal
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Hızlanan
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-bold text-slate-950">
                        Uzun vadeli etki
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Daha sınırlı
                      </td>
                      <td className="px-5 py-4 text-slate-700">
                        Daha belirgin
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[860px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Süre</th>
                      <th className="px-5 py-4 text-sm font-bold">Basit faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Bileşik faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Fark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.year} className="transition hover:bg-violet-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.year}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.simple}
                        </td>
                        <td className="px-5 py-4 font-semibold text-violet-700">
                          {row.compound}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.difference}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="bilesiklesme-sikligi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Faiz sıklığı
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Bileşikleşme sıklığı neden önemlidir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı nominal faiz oranında faiz daha sık ana paraya eklendiğinde
                efektif yıllık getiri artabilir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[980px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-indigo-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Sıklık</th>
                      <th className="px-5 py-4 text-sm font-bold">Yıllık dönem</th>
                      <th className="px-5 py-4 text-sm font-bold">Nominal oran</th>
                      <th className="px-5 py-4 text-sm font-bold">Yaklaşık efektif oran</th>
                      <th className="px-5 py-4 text-sm font-bold">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {frequencyRows.map((row) => (
                      <tr key={row.frequency} className="transition hover:bg-indigo-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.frequency}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.periods}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.nominalRate}
                        </td>
                        <td className="px-5 py-4 font-semibold text-indigo-700">
                          {row.effectiveRate}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="duzenli-katki"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Düzenli birikim
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Düzenli katkı bileşik büyümeyi nasıl etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Her ay yapılan katkılar yalnızca toplam yatırılan tutarı
                artırmaz. Erken yatırılan katkılar daha uzun süre faiz üretme
                fırsatı bulur.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <PiggyBank className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-emerald-950">
                    Ay başı katkı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Aynı ay içinde faiz kazanabildiği için genellikle daha yüksek sonuç verir.
                  </p>
                </article>

                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                  <CalendarClock className="h-6 w-6 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-violet-950">
                    Ay sonu katkı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    Katkı bir sonraki dönemden itibaren faiz etkisine dahil olabilir.
                  </p>
                </article>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-emerald-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Aylık katkı</th>
                      <th className="px-5 py-4 text-sm font-bold">Toplam yatırılan</th>
                      <th className="px-5 py-4 text-sm font-bold">Tahmini bakiye</th>
                      <th className="px-5 py-4 text-sm font-bold">Tahmini kazanç</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {contributionRows.map((row) => (
                      <tr key={row.monthlyContribution} className="transition hover:bg-emerald-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.monthlyContribution}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.totalContribution}
                        </td>
                        <td className="px-5 py-4 font-semibold text-violet-700">
                          {row.estimatedBalance}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.estimatedGain}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="efektif-getiri"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Gerçek yıllık etki
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Efektif yıllık getiri nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Efektif yıllık getiri, nominal faiz oranının bileşikleşme
                sıklığı dikkate alınarak yıllık gerçek karşılığını yaklaşık
                olarak gösterir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                  <Percent className="h-6 w-6 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-violet-950">
                    Nominal oran
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    İlan edilen yıllık faiz oranıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <TimerReset className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Bileşikleşme
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Faizin bakiyeye eklenme sıklığıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <TrendingUp className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-emerald-950">
                    Efektif oran
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Bileşikleşme etkisini içeren yıllık karşılıktır.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="stopaj-ve-net-getiri"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Vergi etkisi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Stopaj ve net getiri nasıl değerlendirilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brüt faiz kazancı vergi öncesi getiriyi gösterir. Stopaj faiz
                kazancı üzerinden yapılan kesintidir ve net vade sonu tutarını
                azaltır.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Stopaj Tutarı = Brüt Faiz Kazancı × Stopaj Oranı
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Net Kazanç = Brüt Kazanç − Stopaj
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <TriangleAlert
                    className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-bold text-amber-950">
                      Güncel stopaj oranını doğrulayın
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-amber-900">
                      Stopaj oranı ürün türüne, vadeye ve yürürlükteki mevzuata
                      göre değişebilir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="reel-getiri"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Satın alma gücü
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Enflasyon ve reel getiri neden önemlidir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Nominal olarak büyüyen bir yatırımın satın alma gücü aynı
                ölçüde artmayabilir. Reel getiri, net kazancı enflasyon etkisiyle
                birlikte değerlendirir.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[620px] text-center font-mono text-base font-bold md:text-lg">
                    Reel Getiri ≈ ((1 + Net Getiri) / (1 + Enflasyon)) − 1
                  </p>
                </div>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <TrendingUp className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-emerald-950">
                    Pozitif reel getiri
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Net getiri enflasyonun üzerindeyse satın alma gücü artabilir.
                  </p>
                </article>

                <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                  <BarChart3 className="h-6 w-6 text-rose-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-rose-950">
                    Negatif reel getiri
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rose-900">
                    Net getiri enflasyonun altındaysa satın alma gücü azalabilir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="uzun-vadeli-etki"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Zaman etkisi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Bileşik faiz uzun vadede neden güçlenir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Süre uzadıkça yalnızca ana para değil, önceki yıllarda oluşan
                kazançlar da yeni getiri üretmeye devam eder.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[860px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-violet-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Süre</th>
                      <th className="px-5 py-4 text-sm font-bold">Tahmini toplam</th>
                      <th className="px-5 py-4 text-sm font-bold">Tahmini kazanç</th>
                      <th className="px-5 py-4 text-sm font-bold">Ana para çarpanı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {longTermRows.map((row) => (
                      <tr key={row.duration} className="transition hover:bg-violet-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.duration}
                        </td>
                        <td className="px-5 py-4 font-semibold text-violet-700">
                          {row.total}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.gain}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.multiplier}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-violet-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-violet-900">
                  Uzun vadeli tablolar örnek oran üzerinden teorik gösterimdir.
                  Gerçek yatırım getirileri zaman içinde değişebilir.
                </p>
              </div>
            </section>

            <section
              id="ornekler"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Uygulama örnekleri
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek bileşik faiz senaryoları
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki senaryolar farklı ana para, katkı, faiz ve süre
                kombinasyonlarının nasıl karşılaştırılabileceğini gösterir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {scenarioRows.map((row) => (
                  <article
                    key={row.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-lg font-bold text-slate-950">
                      {row.title}
                    </h3>

                    <dl className="mt-5 space-y-3 text-sm">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">Ana para</dt>
                        <dd className="font-semibold text-slate-900">
                          {row.principal}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">Düzenli katkı</dt>
                        <dd className="font-semibold text-slate-900">
                          {row.contribution}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">Yıllık faiz</dt>
                        <dd className="font-semibold text-violet-700">
                          {row.rate}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">Süre</dt>
                        <dd className="font-semibold text-slate-900">
                          {row.duration}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-slate-500">Bileşikleşme</dt>
                        <dd className="font-semibold text-indigo-700">
                          {row.frequency}
                        </dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {usageAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section
              id="yaygin-hatalar"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Kaçınılması gerekenler
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Bileşik faiz hesabında sık yapılan hatalar
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {commonMistakes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-rose-700 shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-4">
                  <Info
                    className="mt-0.5 h-6 w-6 shrink-0 text-violet-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Sonucu ürün koşullarıyla karşılaştırın
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Banka ve yatırım ürünlerinde valör, faiz tahakkuku,
                      stopaj, masraf ve yuvarlama yöntemleri farklılık
                      gösterebilir.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-slate-950">Bu sayfada</h2>
              </div>

              <nav aria-label="Sayfa içeriği" className="mt-5">
                <ul className="space-y-1">
                  {tableOfContents.slice(2).map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-violet-50 hover:text-violet-800"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 to-indigo-700 p-6 text-white shadow-xl shadow-violet-900/20">
              <Sparkles className="h-7 w-7 text-violet-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                Birikiminizi hesaplayın
              </h2>
              <p className="mt-3 text-sm leading-6 text-violet-100">
                Ana para, faiz, katkı ve süre bilgilerinizi girerek uzun vadeli
                büyümeyi saniyeler içinde görün.
              </p>
              <a
                href="#hesaplama-araci"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-violet-800 transition hover:bg-violet-50"
              >
                Hesaplamaya dön
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <TriangleAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
              <h2 className="mt-4 font-bold text-amber-950">
                Yatırım uyarısı
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Hesaplanan sonuçlar varsayımsal oranlara dayanır ve yatırım
                tavsiyesi niteliği taşımaz.
              </p>
            </div>
          </aside>
        </div>

        <section id="ilgili-hesaplamalar" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Diğer araçlar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                İlgili faiz ve yatırım hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Faiz, enflasyon, mevduat ve yatırım planlamanızı diğer ücretsiz
                araçlarımızla tamamlayın.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex items-center gap-2 text-sm font-bold text-violet-700 transition hover:text-violet-900"
            >
              Tüm hesaplamalar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedCalculators.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight
                      className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-violet-700"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="sss" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-2 text-sm font-bold text-violet-800">
              <Info className="h-4 w-4" aria-hidden="true" />
              Merak edilenler
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Bileşik faiz hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Bileşikleşme, efektif getiri, düzenli katkı, stopaj ve enflasyon
              hakkında merak edilen soruları inceleyin.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-violet-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-sm font-extrabold text-violet-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 font-bold text-slate-950">
                      {item.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-violet-700 group-open:text-white">
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-6 pb-6 pt-5">
                  <p className="pl-12 leading-7 text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-violet-950 to-indigo-900 p-8 text-white shadow-2xl shadow-violet-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-violet-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Birikiminizin bileşik büyümesini hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Faiz oranı, süre, düzenli katkı, stopaj ve enflasyon değerlerini
                değiştirerek farklı uzun vadeli senaryoları karşılaştırın.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-violet-900 transition hover:-translate-y-0.5 hover:bg-violet-50"
            >
              Bileşik faizi hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki bileşik faiz sonuçları genel bilgilendirme
            ve senaryo karşılaştırma amacı taşır. Gerçek ürün sonuçları faiz
            tahakkuk yöntemi, valör, stopaj, masraf, enflasyon ve kurum
            koşullarına göre değişebilir. Bu içerik yatırım tavsiyesi değildir.
          </p>
        </div>
      </div>
    </main>
  );
}