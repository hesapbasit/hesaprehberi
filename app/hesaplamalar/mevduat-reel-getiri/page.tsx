import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ChevronRight,
  Clock3,
  Info,
  Lightbulb,
  ListChecks,
  ArrowRight,
  Banknote,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Gauge,
  Landmark,
  Percent,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import DepositRealReturnCalculator from "@/components/calculators/DepositRealReturnCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/mevduat-reel-getiri";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Mevduat reel getiri aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

const pageTitle = "Mevduat Enflasyon Sonrası Reel Getiri Hesaplama";
const pageDescription =
  "Mevduat faiz kazancınızın enflasyon karşısındaki gerçek değerini hesaplayın; nominal getiri, reel getiri, satın alma gücü ve enflasyonu aşmak için gereken faiz oranını görün.";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Mevduat Reel Getiri Hesaplama | Enflasyon Sonrası Kazanç",
  description: pageDescription,
  path: canonicalPath,
  openGraph: {
    title: "Mevduat Reel Getiri | Satın Alma Gücü Analizi",
    description:
      "Stopaj sonrası mevduat kazancınızı enflasyonla karşılaştırın; gerçek kazancı, satın alma gücü değişimini ve başa baş faiz oranını görün.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mevduat Reel Getiri Hesaplama",
    description:
      "Nominal faiz kazancının enflasyon sonrası gerçek değerini ücretsiz hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Reel getiri hesaplama aracı" },
  { id: "kullanim-rehberi", label: "Hesaplama nasıl kullanılır?" },
  { id: "reel-getiri-nedir", label: "Mevduat reel getiri nedir?" },
  { id: "hesaplama-formulu", label: "Reel getiri formülleri" },
  { id: "nominal-getiri", label: "Nominal getiri nedir?" },
  { id: "negatif-reel-getiri", label: "Negatif reel getiri" },
  { id: "stopaj-etkisi", label: "Stopajın reel getiriye etkisi" },
  { id: "basa-bas-faiz", label: "Enflasyonu aşan minimum faiz" },
  { id: "enflasyon-senaryolari", label: "Enflasyon senaryoları" },
  { id: "satinalma-gucu", label: "Satın alma gücü analizi" },
  { id: "gun-esasi", label: "360 ve 365 gün esası" },
  { id: "vade-etkisi", label: "Vade süresinin etkisi" },
  { id: "dikkat-edilecekler", label: "Dikkat edilmesi gerekenler" },
  { id: "ornek-karsilastirma", label: "Nominal ve reel örnek" },
  { id: "ana-para-etkisi", label: "Ana paranın etkisi" },
  { id: "sik-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const inflationScenarioRows = [
  {
    inflation: "%20",
    netAnnualReturn: "%38,25",
    approximateRealReturn: "%15,21",
    status: "Pozitif reel getiri",
  },
  {
    inflation: "%30",
    netAnnualReturn: "%38,25",
    approximateRealReturn: "%6,35",
    status: "Pozitif reel getiri",
  },
  {
    inflation: "%40",
    netAnnualReturn: "%38,25",
    approximateRealReturn: "-%1,25",
    status: "Sınırlı reel kayıp",
  },
  {
    inflation: "%50",
    netAnnualReturn: "%38,25",
    approximateRealReturn: "-%7,83",
    status: "Negatif reel getiri",
  },
  {
    inflation: "%60",
    netAnnualReturn: "%38,25",
    approximateRealReturn: "-%13,59",
    status: "Yüksek reel kayıp",
  },
];

const purchasingPowerRows = [
  {
    principal: "100.000 TL",
    nominalEnd: "138.250 TL",
    inflation: "%30",
    realValue: "106.346 TL",
    realChange: "+6.346 TL",
  },
  {
    principal: "250.000 TL",
    nominalEnd: "345.625 TL",
    inflation: "%40",
    realValue: "246.875 TL",
    realChange: "-3.125 TL",
  },
  {
    principal: "500.000 TL",
    nominalEnd: "691.250 TL",
    inflation: "%50",
    realValue: "460.833 TL",
    realChange: "-39.167 TL",
  },
  {
    principal: "1.000.000 TL",
    nominalEnd: "1.382.500 TL",
    inflation: "%30",
    realValue: "1.063.462 TL",
    realChange: "+63.462 TL",
  },
];

const dayBasisRows = [
  {
    basis: "360 gün",
    grossInterest: "40.000 TL",
    withholding: "6.000 TL",
    netInterest: "34.000 TL",
    note: "Faiz katsayısı daha yüksek olabilir",
  },
  {
    basis: "365 gün",
    grossInterest: "39.452 TL",
    withholding: "5.918 TL",
    netInterest: "33.534 TL",
    note: "Takvim yılı esasına daha yakındır",
  },
];

const faqItems = [
  {
    question: "Mevduat reel getiri nedir?",
    answer:
      "Mevduat reel getiri, faiz kazancının stopaj ve enflasyon etkisi dikkate alındıktan sonra satın alma gücünde oluşturduğu gerçek artış veya azalıştır.",
  },
  {
    question: "Nominal getiri ile reel getiri arasındaki fark nedir?",
    answer:
      "Nominal getiri, hesapta görülen parasal kazançtır. Reel getiri ise bu kazancın enflasyon karşısındaki gerçek satın alma gücü etkisini gösterir.",
  },
  {
    question: "Mevduat faizi enflasyondan yüksekse reel getiri kesin pozitif midir?",
    answer:
      "Her zaman değil. Faiz kazancı üzerinden stopaj kesintisi uygulanıyorsa net faiz oranı enflasyon oranının altında kalabilir. Ayrıca vade uyarlaması da sonucu etkiler.",
  },
  {
    question: "Stopaj reel getiriyi nasıl etkiler?",
    answer:
      "Stopaj, brüt faiz kazancını azalttığı için net getiriyi düşürür. Bu nedenle mevduatın enflasyonu aşması için gereken brüt faiz oranı yükselir.",
  },
  {
    question: "Dönem enflasyonu nasıl hesaplanır?",
    answer:
      "Yıllık enflasyon oranı seçilen vade süresine bileşik yöntemle uyarlanır. Böylece 32, 90 veya 180 günlük dönemin yaklaşık enflasyon etkisi bulunur.",
  },
  {
    question: "Reel kazanç nasıl hesaplanır?",
    answer:
      "Önce vade sonu nominal tutar bulunur. Bu tutar dönem enflasyonuna bölünerek bugünkü satın alma gücüne çevrilir. Başlangıç ana parası çıkarıldığında reel kazanç veya kayıp hesaplanır.",
  },
  {
    question: "Reel getiri negatif çıkarsa ne anlama gelir?",
    answer:
      "Mevduat hesabında nominal olarak para kazanılmış olsa bile satın alma gücünün azaldığı anlamına gelir.",
  },
  {
    question: "Reel getiri pozitif çıkarsa ne anlama gelir?",
    answer:
      "Stopaj ve enflasyon etkisi sonrasında paranızın satın alma gücünün başlangıca göre arttığı anlamına gelir.",
  },
  {
    question: "Enflasyonu aşmak için gereken minimum faiz nedir?",
    answer:
      "Seçilen vade, yıllık enflasyon ve stopaj oranına göre satın alma gücünü koruyacak yaklaşık yıllık brüt faiz oranıdır.",
  },
  {
    question: "360 ve 365 gün esası sonucu etkiler mi?",
    answer:
      "Evet. Faiz hesaplamasında vade gününün bölündüğü yıl uzunluğu değiştiği için brüt ve net faiz sonucu farklılaşabilir.",
  },
  {
    question: "Vade uzadıkça enflasyon etkisi artar mı?",
    answer:
      "Genellikle evet. Vade uzadıkça yıllık enflasyonun ilgili döneme düşen bileşik etkisi büyür.",
  },
  {
    question: "Ana para reel getiri oranını değiştirir mi?",
    answer:
      "Aynı faiz, vade, stopaj ve enflasyon koşullarında ana para reel getiri oranını değiştirmez ancak reel kazanç veya kaybın TL tutarını değiştirir.",
  },
  {
    question: "Yıllık net faiz oranı nasıl bulunur?",
    answer:
      "Basitleştirilmiş yaklaşımda yıllık brüt faiz oranı, stopaj sonrası kalan oranla çarpılır. Gerçek banka uygulamalarında yuvarlama ve ürün koşulları farklı olabilir.",
  },
  {
    question: "Satın alma gücü ne demektir?",
    answer:
      "Satın alma gücü, belirli bir para tutarıyla satın alınabilecek mal ve hizmet miktarını ifade eder. Enflasyon yükseldikçe aynı paranın satın alma gücü azalır.",
  },
  {
    question: "Enflasyon maliyeti nedir?",
    answer:
      "Ana paranın seçilen vade boyunca satın alma gücünü koruyabilmesi için ihtiyaç duyduğu ek tutardır.",
  },
  {
    question: "Hesaplamada güncel enflasyon otomatik alınır mı?",
    answer:
      "Hayır. Kullanıcı yıllık enflasyon oranını kendisi girer. Böylece farklı enflasyon senaryoları karşılaştırılabilir.",
  },
  {
    question: "Bu hesaplama kesin banka sonucu verir mi?",
    answer:
      "Hayır. Araç matematiksel tahmin üretir. Bankaların valör tarihi, faiz tahakkuku, stopaj uygulaması ve yuvarlama yöntemleri farklı olabilir.",
  },
  {
    question: "Bu araç yatırım tavsiyesi verir mi?",
    answer:
      "Hayır. Araç yalnızca bilgilendirme ve finansal farkındalık amacıyla hazırlanmıştır.",
  },
  {
    question: "Reel faiz oranı hangi formülle hesaplanır?",
    answer:
      "Yaklaşık yöntem net faiz oranından enflasyon oranını çıkarmaktır. Daha doğru Fisher yaklaşımında reel oran, (1 + net getiri) ÷ (1 + enflasyon) − 1 formülüyle bulunur.",
  },
  {
    question: "Enflasyon oranı ile mevduat vadesi aynı döneme mi çevrilmelidir?",
    answer:
      "Evet. Sağlıklı karşılaştırma için faiz getirisi ve enflasyon aynı zaman aralığına uyarlanmalıdır. Yıllık enflasyon ile 32 günlük faiz getirisi doğrudan karşılaştırılmamalıdır.",
  },
  {
    question: "Beklenen enflasyon mu geçmiş enflasyon mu kullanılmalıdır?",
    answer:
      "Geleceğe yönelik karar analizinde beklenen enflasyon senaryosu, gerçekleşmiş dönemin performans analizinde ise aynı döneme ait gerçekleşen enflasyon kullanılabilir.",
  },
  {
    question: "Pozitif reel getiri satın alma gücünün kesin arttığı anlamına gelir mi?",
    answer:
      "Genel fiyat düzeyi açısından evet; ancak kişisel harcama sepetiniz resmi veya varsayımsal enflasyon oranından farklı yükselmiş olabilir. Bu nedenle kişisel satın alma gücü sonucu değişebilir.",
  },
  {
    question: "Reel getiri hesabında bileşik enflasyon neden kullanılır?",
    answer:
      "Fiyat seviyesindeki değişim zaman içinde bileşik olarak oluştuğu için dönem enflasyonunu yıllık orandan türetirken bileşik dönüşüm daha tutarlı sonuç verir.",
  },
  {
    question: "Mevduat reel getirisi döviz veya altın getirisiyle karşılaştırılabilir mi?",
    answer:
      "Karşılaştırılabilir; ancak tüm seçeneklerin aynı dönem, aynı vergi ve masraf koşullarıyla değerlendirilmesi gerekir. Risk, likidite ve fiyat oynaklığı da ayrıca dikkate alınmalıdır.",
  },
];

const faqStructuredData = {
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

const webApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  inLanguage: "tr-TR",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
};

const breadcrumbStructuredData = {
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
      name: "Mevduat Reel Getiri",
      item: canonicalUrl,
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: canonicalUrl,
  inLanguage: "tr-TR",
  author: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Mevduat reel getiri nasıl hesaplanır?",
  description:
    "Mevduat faizini stopaj ve enflasyon etkisiyle birlikte değerlendirerek gerçek satın alma gücü değişimini hesaplama adımları.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Ana parayı girin",
      text: "Mevduatta değerlendireceğiniz başlangıç tutarını yazın.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Faiz ve enflasyon oranlarını belirleyin",
      text: "Yıllık brüt faiz, yıllık enflasyon ve stopaj oranlarını girin.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Vade ve gün esasını seçin",
      text: "Mevduat vadesini ve bankanın kullandığı 360 veya 365 gün esasını belirleyin.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Reel sonucu değerlendirin",
      text: "Nominal kazanç, dönem enflasyonu, reel kazanç ve satın alma gücü değişimini inceleyin.",
    },
  ],
};

const relatedCalculators = getRelatedCalculators(canonicalPath, 4);
export default function DepositRealReturnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />

      <main className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                {
                  label: "Ana Sayfa",
                  href: "/",
                },
                {
                  label: "Hesaplamalar",
                  href: "/hesaplamalar",
                },
                {
                  label: "Mevduat",
                  href: "/hesaplamalar?category=Mevduat",
                },
                {
                  label: "Mevduat Reel Getiri",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz nominal ve reel getiri hesaplama aracı
                </div>

                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Mevduat Enflasyon Sonrası Reel Getiri Hesaplama
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-100 sm:text-lg">
                  Mevduat faiz kazancınızın enflasyon karşısındaki gerçek
                  değerini, satın alma gücü değişimini ve enflasyonu aşmak için
                  gereken faiz oranını hesaplayın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroFeature text="Stopaj sonrası net getiri" />
                  <HeroFeature text="Döneme uyarlanmış enflasyon" />
                  <HeroFeature text="Reel kazanç veya kayıp" />
                  <HeroFeature text="Minimum faiz hesaplama" />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-xl">
                  <ShieldCheck className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Satın alma gücünüzü ölçün
                </h2>

                <p className="mt-3 text-sm leading-7 text-emerald-100">
                  Hesapta görünen nominal kazanç ile enflasyon sonrası gerçek
                  kazanç arasındaki farkı anında inceleyin.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <MiniMetric label="Kazanç" value="Nominal" />
                  <MiniMetric label="Karşılaştırma" value="Enflasyon" />
                  <MiniMetric label="Sonuç" value="Reel" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hesaplama-araci" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <DepositRealReturnCalculator />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Bu aracı faydalı buldunuz mu?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Mevduat reel getiri hesaplama aracını paylaşabilirsiniz.
              </p>
            </div>

            <ShareButtons
              title={pageTitle}
              description={pageDescription}
              url={canonicalUrl}
            />
          </div>
        </section>

        <section id="kullanim-rehberi" className="scroll-mt-28 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Kullanım rehberi
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat reel getiri hesaplama nasıl yapılır?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Ana para, yıllık faiz, yıllık enflasyon, vade ve stopaj
                değerlerini girerek mevduatınızın gerçek satın alma gücü
                değişimini hesaplayabilirsiniz.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <GuideCard
                number="01"
                icon={<Landmark className="h-6 w-6" />}
                title="Ana parayı girin"
                description="Mevduat hesabında değerlendireceğiniz başlangıç tutarını yazın."
              />

              <GuideCard
                number="02"
                icon={<Percent className="h-6 w-6" />}
                title="Oranları belirleyin"
                description="Mevduat faizini, enflasyonu ve stopaj oranını girin."
              />

              <GuideCard
                number="03"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vadeyi seçin"
                description="Mevduatın bankada kalacağı toplam gün sayısını belirleyin."
              />

              <GuideCard
                number="04"
                icon={<Gauge className="h-6 w-6" />}
                title="Reel sonucu inceleyin"
                description="Satın alma gücünüzün artıp azaldığını sonuçlardan görün."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="space-y-10">
              <ContentSection id="reel-getiri-nedir"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Mevduat reel getiri neden önemlidir?"
              >
                <p>
                  Mevduat hesabında vade sonunda elde edilen faiz kazancı,
                  hesabınızda nominal olarak artış oluşturur. Ancak aynı dönemde
                  fiyatlar da yükseliyorsa paranızın gerçek satın alma gücü
                  beklediğiniz kadar artmayabilir.
                </p>

                <p>
                  Reel getiri hesaplaması, faiz kazancının enflasyonu aşıp
                  aşmadığını gösterir. Bu nedenle yalnızca vade sonu bakiyesine
                  değil, enflasyondan arındırılmış sonuca da bakılması gerekir.
                </p>
              </ContentSection>

              <ContentSection id="hesaplama-formulu"
                icon={<Calculator className="h-6 w-6" />}
                title="Mevduat reel getiri hesaplama formülü"
              >
                <p>
                  Hesaplamada önce brüt faiz ve stopaj sonrası net faiz
                  bulunur. Ardından yıllık enflasyon seçilen vade dönemine
                  uyarlanır.
                </p>

                <FormulaBox>
                  <p>
                    Brüt faiz = Ana para × Yıllık faiz ×
                    (Vade günü ÷ Gün esası)
                  </p>

                  <p className="mt-3">
                    Net faiz = Brüt faiz − Stopaj
                  </p>

                  <p className="mt-3">
                    Nominal vade sonu = Ana para + Net faiz
                  </p>

                  <p className="mt-3">
                    Dönem enflasyonu =
                    (1 + Yıllık enflasyon)^(Vade ÷ Gün esası) − 1
                  </p>

                  <p className="mt-3">
                    Reel vade sonu değeri =
                    Nominal vade sonu ÷ (1 + Dönem enflasyonu)
                  </p>

                  <p className="mt-3">
                    Reel kazanç = Reel vade sonu değeri − Ana para
                  </p>
                </FormulaBox>
              </ContentSection>

              <ContentSection id="nominal-getiri"
                icon={<TrendingUp className="h-6 w-6" />}
                title="Nominal getiri nedir?"
              >
                <p>
                  Nominal getiri, faiz kazancının enflasyon etkisi
                  çıkarılmadan hesaplanan parasal karşılığıdır. Banka
                  hesabınızda gördüğünüz net faiz kazancı nominal getiridir.
                </p>

                <p>
                  Örneğin 250.000 TL ana para vade sonunda 258.000 TL olmuşsa
                  nominal kazanç 8.000 TL&apos;dir. Ancak bu tutarın gerçek
                  değeri aynı dönemdeki enflasyona bağlıdır.
                </p>
              </ContentSection>

              <ContentSection id="negatif-reel-getiri"
                icon={<TrendingDown className="h-6 w-6" />}
                title="Reel getiri negatif olabilir mi?"
              >
                <p>
                  Evet. Mevduat hesabı nominal olarak faiz kazandırırken reel
                  olarak satın alma gücü kaybı oluşturabilir. Bunun temel
                  nedeni net faiz getirisinin dönemsel enflasyondan düşük
                  kalmasıdır.
                </p>

                <p>
                  Reel getirinin negatif çıkması, hesap bakiyesinin düştüğü
                  anlamına gelmez. Paranızı vade sonunda daha fazla TL olarak
                  geri alabilirsiniz ancak bu para başlangıçtaki kadar mal veya
                  hizmet satın alamayabilir.
                </p>
              </ContentSection>

              <ContentSection id="stopaj-etkisi"
                icon={<Scale className="h-6 w-6" />}
                title="Stopaj reel getiriyi nasıl değiştirir?"
              >
                <p>
                  Mevduat faiz gelirinden yapılan stopaj kesintisi, brüt
                  kazancın tamamının yatırımcıya ulaşmasını engeller. Bu nedenle
                  faiz oranı enflasyondan yüksek görünse bile stopaj sonrası net
                  getiri daha düşük kalabilir.
                </p>

                <p>
                  Reel getiri değerlendirmesinde brüt faiz yerine stopaj
                  sonrası net faiz esas alınmalıdır.
                </p>
              </ContentSection>

              <ContentSection id="basa-bas-faiz"
                icon={<Gauge className="h-6 w-6" />}
                title="Enflasyonu aşmak için gereken minimum faiz"
              >
                <p>
                  Satın alma gücünün korunabilmesi için stopaj sonrası net
                  getirinin dönemsel enflasyon oranına en az eşit olması
                  gerekir.
                </p>

                <p>
                  Hesaplama aracı, seçtiğiniz vade ve stopaj koşullarına göre
                  enflasyonu karşılamak için gerekli yaklaşık minimum net ve
                  brüt yıllık faiz oranlarını gösterir.
                </p>
              </ContentSection>

              <ContentSection id="dikkat-edilecekler"
                icon={<WalletCards className="h-6 w-6" />}
                title="Reel getiri hesaplanırken nelere dikkat edilmelidir?"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Faiz oranının yıllık brüt oran olduğunu doğrulayın." />
                  <CheckItem text="Güncel stopaj oranını kontrol edin." />
                  <CheckItem text="Enflasyon oranını senaryonuza uygun girin." />
                  <CheckItem text="Vade süresini gerçek gün sayısıyla yazın." />
                  <CheckItem text="Bankanın 360 veya 365 gün esasını inceleyin." />
                  <CheckItem text="Nominal kazanç ile reel kazancı ayırın." />
                  <CheckItem text="Kısa vadeli sonuçları uzun vadeye doğrudan taşımayın." />
                  <CheckItem text="Banka ürün koşullarını ayrıca kontrol edin." />
                </div>
              </ContentSection>

              <ContentSection id="ornek-karsilastirma"
                icon={<Banknote className="h-6 w-6" />}
                title="Nominal ve reel getiri karşılaştırma örneği"
              >
                <p>
                  Aşağıdaki tablo, mevduatta nominal kazanç ile gerçek satın
                  alma gücü arasındaki farkı kavramsal olarak gösterir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">
                            Gösterge
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Anlamı
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Etkisi
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-200 bg-white">
                        <ExampleTableRow
                          indicator="Brüt faiz"
                          meaning="Kesinti öncesi kazanç"
                          effect="Nominal getiriyi artırır"
                        />

                        <ExampleTableRow
                          indicator="Stopaj"
                          meaning="Faiz üzerinden yapılan kesinti"
                          effect="Net getiriyi azaltır"
                        />

                        <ExampleTableRow
                          indicator="Enflasyon"
                          meaning="Fiyatlar genel seviyesindeki artış"
                          effect="Satın alma gücünü azaltır"
                        />

                        <ExampleTableRow
                          indicator="Reel getiri"
                          meaning="Enflasyon sonrası gerçek sonuç"
                          effect="Satın alma gücü değişimini gösterir"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection id="ana-para-etkisi"
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Ana para reel sonucu nasıl etkiler?"
              >
                <p>
                  Ana para yükseldikçe nominal faiz kazancı ve reel kazanç ya da
                  kaybın TL karşılığı artar. Ancak diğer tüm değişkenler aynı
                  olduğunda reel getiri yüzdesi değişmez.
                </p>

                <p>
                  Bu nedenle iki farklı ana para tutarı aynı koşullarda aynı
                  reel getiri oranına sahip olabilir fakat TL cinsinden
                  sonuçları farklı olur.
                </p>
              </ContentSection>

              <ContentSection
                id="enflasyon-senaryolari"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Farklı enflasyon senaryolarında reel getiri"
              >
                <p>
                  Mevduatın gerçek performansı yalnızca faiz oranına bağlı
                  değildir. Aynı net yıllık getiri, farklı enflasyon
                  varsayımlarında pozitif veya negatif reel sonuç üretebilir.
                  Bu nedenle tek bir enflasyon tahminine bağlı kalmak yerine
                  iyimser, temel ve kötümser senaryoları birlikte incelemek
                  daha sağlıklı bir yaklaşım sağlar.
                </p>

                <p>
                  Aşağıdaki örnekte yıllık brüt faiz oranının %45, stopajın
                  %15 ve stopaj sonrası yaklaşık yıllık net getirinin %38,25
                  olduğu varsayılmıştır. Reel getiri, Fisher yaklaşımıyla
                  yaklaşık olarak hesaplanmıştır.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Yıllık enflasyon</th>
                          <th className="px-5 py-4 font-semibold">Net yıllık getiri</th>
                          <th className="px-5 py-4 font-semibold">Yaklaşık reel getiri</th>
                          <th className="px-5 py-4 font-semibold">Değerlendirme</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {inflationScenarioRows.map((row) => (
                          <tr key={row.inflation} className="transition hover:bg-slate-50">
                            <td className="px-5 py-4 font-black text-slate-950">{row.inflation}</td>
                            <td className="px-5 py-4 font-semibold text-blue-700">{row.netAnnualReturn}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.approximateRealReturn}</td>
                            <td className="px-5 py-4 text-slate-600">{row.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <InfoBox title="Senaryo sonuçlarını nasıl yorumlamalısınız?">
                  <p>
                    Reel getiri sıfıra yakınsa mevduat satın alma gücünü
                    yaklaşık olarak koruyor demektir. Pozitif değer gerçek
                    artışı, negatif değer ise fiyat artışlarına karşı satın
                    alma gücü kaybını ifade eder.
                  </p>
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="satinalma-gucu"
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Satın alma gücü değişimi nasıl ölçülür?"
              >
                <p>
                  Nominal vade sonu bakiyesi, hesapta görünen TL tutarıdır.
                  Reel değer ise bu bakiyenin dönem enflasyonu dikkate
                  alındığında başlangıç gününün fiyatlarıyla ne kadar satın
                  alma gücüne karşılık geldiğini gösterir.
                </p>

                <p>
                  Aşağıdaki senaryolar yıllık bazda örneklenmiştir. Net getiri
                  yaklaşık %38,25 kabul edilmiştir. Tablodaki tutarlar öğretici
                  örneklerdir ve banka teklifi niteliği taşımaz.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[820px] text-left text-sm">
                      <thead className="bg-emerald-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Başlangıç ana parası</th>
                          <th className="px-5 py-4 font-semibold">Nominal dönem sonu</th>
                          <th className="px-5 py-4 font-semibold">Enflasyon</th>
                          <th className="px-5 py-4 font-semibold">Bugünkü reel değer</th>
                          <th className="px-5 py-4 font-semibold">Reel değişim</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {purchasingPowerRows.map((row) => (
                          <tr key={`${row.principal}-${row.inflation}`} className="transition hover:bg-emerald-50/40">
                            <td className="px-5 py-4 font-black text-slate-950">{row.principal}</td>
                            <td className="px-5 py-4 font-semibold text-blue-700">{row.nominalEnd}</td>
                            <td className="px-5 py-4 font-semibold text-rose-700">{row.inflation}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.realValue}</td>
                            <td className="px-5 py-4 font-bold text-slate-700">{row.realChange}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                id="gun-esasi"
                icon={<CalendarDays className="h-6 w-6" />}
                title="360 ve 365 gün esasının reel getiriye etkisi"
              >
                <p>
                  Bankanın faiz hesabında kullandığı gün esası, aynı ana para,
                  oran ve vade için brüt faiz tutarını değiştirebilir. Gün
                  esasındaki fark küçük görünse de yüksek ana paralarda veya
                  tekrarlanan vadelerde toplam sonuç belirginleşebilir.
                </p>

                <p>
                  Aşağıdaki örnek 400.000 TL ana para, yıllık %45 faiz, 80 gün
                  vade ve %15 stopaj varsayımıyla hazırlanmıştır.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Gün esası</th>
                          <th className="px-5 py-4 font-semibold">Brüt faiz</th>
                          <th className="px-5 py-4 font-semibold">Stopaj</th>
                          <th className="px-5 py-4 font-semibold">Net faiz</th>
                          <th className="px-5 py-4 font-semibold">Not</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {dayBasisRows.map((row) => (
                          <tr key={row.basis}>
                            <td className="px-5 py-4 font-black text-slate-950">{row.basis}</td>
                            <td className="px-5 py-4 font-semibold text-blue-700">{row.grossInterest}</td>
                            <td className="px-5 py-4 font-semibold text-rose-700">{row.withholding}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.netInterest}</td>
                            <td className="px-5 py-4 text-slate-600">{row.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                id="vade-etkisi"
                icon={<Clock3 className="h-6 w-6" />}
                title="Vade süresi reel sonucu nasıl etkiler?"
              >
                <p>
                  Vade uzadıkça hem faiz geliri hem de aynı döneme düşen
                  enflasyon etkisi büyür. Bu nedenle yalnızca daha uzun
                  vadenin daha yüksek nominal faiz üretmesine bakmak,
                  yatırımın gerçek performansını anlamak için yeterli değildir.
                </p>

                <p>
                  Kısa vadede oranların sık yenilenmesi faiz değişimlerine daha
                  hızlı uyum sağlayabilir; uzun vadede ise mevcut oran daha
                  uzun süre korunabilir. Hangi seçeneğin daha iyi olduğu,
                  faizlerin ve enflasyonun gelecekteki yönüne bağlıdır.
                </p>

                <WarningBox title="Aynı dönemi karşılaştırın">
                  <p>
                    32 günlük net faiz oranını doğrudan yıllık enflasyonla
                    kıyaslamak hatalı yorumlara yol açabilir. Her iki oranı da
                    aynı vade dönemine veya yıllık eşdeğere dönüştürün.
                  </p>
                </WarningBox>
              </ContentSection>

              <ContentSection
                id="sik-hatalar"
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Reel getiri hesabında sık yapılan hatalar"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <MistakeCard
                    title="Brüt faizi kullanmak"
                    description="Stopajı hesaba katmadan yapılan karşılaştırma gerçek net getiriyi olduğundan yüksek gösterir."
                  />
                  <MistakeCard
                    title="Farklı dönemleri kıyaslamak"
                    description="Kısa vadeli faiz getirisi ile yıllık enflasyonu doğrudan karşılaştırmak sağlıklı değildir."
                  />
                  <MistakeCard
                    title="Basit çıkarma ile yetinmek"
                    description="Yüksek oranlarda net faizden enflasyonu çıkarmak yerine bileşik reel getiri formülü kullanılmalıdır."
                  />
                  <MistakeCard
                    title="Kişisel enflasyonu göz ardı etmek"
                    description="Harcamalarınızın dağılımı genel enflasyondan farklıysa kişisel satın alma gücü sonucu da farklı olabilir."
                  />
                  <MistakeCard
                    title="Gün esasını kontrol etmemek"
                    description="360 ve 365 gün uygulaması faiz tutarını ve dolaylı olarak reel sonucu değiştirebilir."
                  />
                  <MistakeCard
                    title="Vade bozma riskini unutmak"
                    description="Erken çekim halinde faiz kaybı oluşursa hesaplanan reel getiri gerçekleşmeyebilir."
                  />
                </div>
              </ContentSection>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <nav
                aria-label="Sayfa içindekiler"
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <ListChecks className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
                      Sayfa rehberi
                    </p>
                    <h2 className="text-lg font-black text-slate-950">İçindekiler</h2>
                  </div>
                </div>

                <div className="mt-5 max-h-[420px] space-y-1 overflow-y-auto pr-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-semibold leading-6 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-emerald-600" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </nav>

              <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Reel getiri özeti
                </h2>

                <div className="mt-5 space-y-4">
                  <SidebarRow label="Brüt faiz" value="Kesinti öncesi" />
                  <SidebarRow label="Net faiz" value="Stopaj sonrası" />
                  <SidebarRow label="Nominal sonuç" value="Hesap bakiyesi" />
                  <SidebarRow label="Reel sonuç" value="Satın alma gücü" />
                  <SidebarRow label="Temel ölçüt" value="Enflasyon" />
                </div>
              </div>

              <div id="ilgili-hesaplamalar" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  İlgili hesaplamalar
                </h2>

                <div className="mt-5 space-y-3">
                  {relatedCalculators.map((item) => (
                    <RelatedLink
                      key={item.href}
                      href={item.href}
                      title={item.title}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <TrendingUp className="h-7 w-7 text-emerald-300" />

                <h2 className="mt-5 text-xl font-black">
                  Nominal kazanç tek başına yeterli değildir
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Vade sonunda bakiyeniz artsa bile gerçek kazancı anlamak için
                  stopaj ve enflasyon etkisini birlikte değerlendirin.
                </p>

                <Link
                  href="/hesaplamalar"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300 transition hover:text-emerald-200"
                >
                  Tüm hesaplamaları incele
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section id="sss" className="scroll-mt-28 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Sık sorulan sorular
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat reel getiri hakkında merak edilenler
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Nominal faiz, enflasyon, stopaj ve satın alma gücü hakkında sık
                sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-emerald-200 open:bg-emerald-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-950 sm:px-6">
                    <span>{item.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-emerald-300 group-open:text-emerald-700">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="border-t border-emerald-200 pt-4 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-900 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Diğer mevduat hesaplama araçlarını keşfedin
                </h2>

                <p className="mt-4 text-sm leading-7 text-emerald-100 sm:text-base">
                  Mevduat getirisi, faiz karşılaştırması, hedef kazanç ve erken
                  bozma kaybı gibi hesaplamalarınızı ücretsiz araçlarımızla
                  yapın.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-emerald-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-emerald-50"
              >
                Tüm hesaplamaları görüntüle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                Bu sayfadaki hesaplama sonuçları yalnızca bilgilendirme
                amacıyla hazırlanmıştır ve yatırım tavsiyesi değildir.
                Enflasyon oranı kullanıcı tarafından girilen varsayımsal bir
                değerdir. Bankaların faiz, stopaj, valör ve ürün koşulları
                değişebilir. Finansal karar vermeden önce güncel verileri ve
                ilgili banka koşullarını kontrol ediniz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

type HeroFeatureProps = {
  text: string;
};

function HeroFeature({ text }: HeroFeatureProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-50 backdrop-blur">
      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
      {text}
    </div>
  );
}

type MiniMetricProps = {
  label: string;
  value: string;
};

function MiniMetric({ label, value }: MiniMetricProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">
        {value}
      </p>
    </div>
  );
}

type GuideCardProps = {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
};

function GuideCard({
  number,
  icon,
  title,
  description,
}: GuideCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <span className="absolute right-4 top-3 text-5xl font-black text-slate-200">
        {number}
      </span>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white">
        {icon}
      </div>

      <h3 className="relative mt-5 text-lg font-black text-slate-950">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

type ContentSectionProps = {
  id?: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContentSection({
  id,
  icon,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>

        <h2 className="text-2xl font-black tracking-tight text-slate-950">
          {title}
        </h2>
      </div>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

type FormulaBoxProps = {
  children: ReactNode;
};

function FormulaBox({ children }: FormulaBoxProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 sm:p-6">
      {children}
    </div>
  );
}

type CheckItemProps = {
  text: string;
};

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

      <p className="text-sm leading-6 text-emerald-950">
        {text}
      </p>
    </div>
  );
}

type ExampleTableRowProps = {
  indicator: string;
  meaning: string;
  effect: string;
};

function ExampleTableRow({
  indicator,
  meaning,
  effect,
}: ExampleTableRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {indicator}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {meaning}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {effect}
      </td>
    </tr>
  );
}

type InfoBoxProps = {
  title: string;
  children: ReactNode;
};

function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex gap-3">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
        <div>
          <h3 className="font-black text-blue-950">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-blue-900">{children}</div>
        </div>
      </div>
    </div>
  );
}

type WarningBoxProps = {
  title: string;
  children: ReactNode;
};

function WarningBox({ title, children }: WarningBoxProps) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <h3 className="font-black text-amber-950">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-amber-900">{children}</div>
        </div>
      </div>
    </div>
  );
}

type MistakeCardProps = {
  title: string;
  description: string;
};

function MistakeCard({ title, description }: MistakeCardProps) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
        <div>
          <h3 className="font-black text-rose-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-rose-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

type SidebarRowProps = {
  label: string;
  value: string;
};

function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-emerald-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-600">
        {label}
      </span>

      <span className="text-sm font-bold text-slate-950">
        {value}
      </span>
    </div>
  );
}

type RelatedLinkProps = {
  href: string;
  title: string;
};

function RelatedLink({ href, title }: RelatedLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}