import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Calculator,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Coins,
  FileText,
  Gauge,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  PieChart,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import StockAverageCostCalculator from "@/components/calculators/StockAverageCostCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/hisse-ortalama-maliyet-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Hisse ortalama maliyet hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Hisse Ortalama Maliyet Hesaplama | Kâr Zarar",
  description:
    "Hisse ortalama maliyet hesaplama aracıyla farklı fiyatlardan yaptığınız alımların komisyon dahil ortalama maliyetini, toplam yatırımını, güncel kâr-zararını ve yeni alım simülasyonunu hesaplayın.",
  path: canonicalPath,
  openGraph: {
    title: "Hisse Ortalama Maliyet Hesaplama",
    description:
      "Birden fazla hisse alımını ekleyin; ortalama maliyetinizi, toplam yatırımınızı, güncel portföy değerinizi ve yeni alım sonrası maliyetinizi hesaplayın.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisse Ortalama Maliyet Hesaplama",
    description:
      "Komisyon dahil hisse ortalama maliyetini ve güncel kâr-zarar durumunu saniyeler içinde hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Hisse ortalama maliyet hesaplama aracı" },
  { id: "ortalama-maliyet-nedir", label: "Hisse ortalama maliyeti nedir?" },
  { id: "nasil-hesaplanir", label: "Ortalama maliyet nasıl hesaplanır?" },
  { id: "formul", label: "Hisse ortalama maliyet formülü" },
  { id: "komisyon-etkisi", label: "Komisyonun maliyete etkisi" },
  { id: "ornek-hesaplama", label: "Örnek hisse maliyet hesaplaması" },
  { id: "maliyet-dusurme", label: "Maliyet düşürme nasıl çalışır?" },
  { id: "dca", label: "Düzenli alım ve DCA yaklaşımı" },
  { id: "kar-zarar", label: "Kâr ve zarar nasıl hesaplanır?" },
  { id: "basa-bas", label: "Başa baş fiyatı nedir?" },
  { id: "bedelsiz", label: "Bedelsiz sermaye artırımı etkisi" },
  { id: "bedelli", label: "Bedelli sermaye artırımı etkisi" },
  { id: "temettu", label: "Temettünün maliyete etkisi" },
  { id: "bolunme", label: "Hisse bölünmesi sonrası maliyet" },
  { id: "riskler", label: "Maliyet düşürmenin riskleri" },
  { id: "hatalar", label: "Sık yapılan hesaplama hataları" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplama araçları" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const exampleRows = [
  {
    purchase: "1. alış",
    quantity: "100 lot",
    unitPrice: "42,50 TL",
    commission: "8,50 TL",
    total: "4.258,50 TL",
  },
  {
    purchase: "2. alış",
    quantity: "75 lot",
    unitPrice: "38,20 TL",
    commission: "7,25 TL",
    total: "2.872,25 TL",
  },
  {
    purchase: "Toplam",
    quantity: "175 lot",
    unitPrice: "—",
    commission: "15,75 TL",
    total: "7.130,75 TL",
  },
];

const scenarioRows = [
  {
    scenario: "Mevcut portföy",
    quantity: "175 lot",
    investment: "7.130,75 TL",
    average: "40,75 TL",
  },
  {
    scenario: "50 lot daha, 35 TL",
    quantity: "225 lot",
    investment: "8.887,25 TL",
    average: "39,50 TL",
  },
  {
    scenario: "100 lot daha, 35 TL",
    quantity: "275 lot",
    investment: "10.637,25 TL",
    average: "38,68 TL",
  },
];

const mistakes = [
  {
    title: "Basit fiyat ortalaması almak",
    description:
      "42 TL ve 30 TL fiyatlarını doğrudan toplayıp ikiye bölmek, iki alımdaki adetler eşit değilse yanlış sonuç verir. Hesap ağırlıklı ortalama üzerinden yapılmalıdır.",
  },
  {
    title: "Komisyonu hesaba katmamak",
    description:
      "Aracı kurum komisyonu ve işlem masrafları toplam yatırım tutarını artırır. Özellikle küçük hacimli çok sayıda işlemde etkisi belirginleşebilir.",
  },
  {
    title: "Satışları alış gibi değerlendirmek",
    description:
      "Kısmi satışlar yalnızca yeni alış gibi toplam maliyete eklenmemelidir. Gerçekleşmiş kâr-zarar ve kalan pozisyon maliyeti ayrı takip edilmelidir.",
  },
  {
    title: "Bedelli ve bedelsiz işlemleri karıştırmak",
    description:
      "Bedelsiz sermaye artırımında toplam yatırım değişmezken lot sayısı artar. Bedelli artırımda ise yeni para girişi olduğu için maliyet hesabı farklıdır.",
  },
  {
    title: "Sadece maliyet düşürmek için alım yapmak",
    description:
      "Daha düşük fiyattan alım ortalama maliyeti düşürse de yatırımın temel riski devam eder. Maliyet düşmesi tek başına yatırım kararının doğruluğunu göstermez.",
  },
  {
    title: "Güncel fiyatı yanlış girmek",
    description:
      "Kâr-zarar sonucu güncel piyasa fiyatına bağlıdır. Gecikmeli veya farklı seans fiyatı kullanılması sonucu değiştirebilir.",
  },
];

const faqItems = [
  {
    question: "Hisse ortalama maliyeti nedir?",
    answer:
      "Hisse ortalama maliyeti, farklı fiyatlardan yapılan tüm alımların toplam maliyetinin toplam hisse adedine bölünmesiyle bulunan birim başına maliyettir. Komisyon dahil hesaplama yapılırsa yatırımcının gerçek maliyetine daha yakın sonuç elde edilir.",
  },
  {
    question: "Hisse ortalama maliyeti nasıl hesaplanır?",
    answer:
      "Her alış işleminde adet ile birim fiyat çarpılır, varsa komisyon eklenir. Tüm işlemlerin toplam maliyeti bulunur ve toplam hisse adedine bölünür.",
  },
  {
    question: "İki farklı fiyattan alınan hissenin ortalaması nasıl bulunur?",
    answer:
      "İki alımdaki adetler eşitse fiyatların aritmetik ortalaması kullanılabilir. Adetler farklıysa her fiyat kendi adediyle çarpılmalı ve ağırlıklı ortalama hesaplanmalıdır.",
  },
  {
    question: "Komisyon ortalama maliyete eklenmeli mi?",
    answer:
      "Gerçek yatırım maliyetini görmek için alış komisyonları toplam maliyete eklenmelidir. Komisyon hariç sonuç yalnızca hisse bedelini gösterir.",
  },
  {
    question: "Maliyet düşürme nedir?",
    answer:
      "Maliyet düşürme, mevcut ortalama maliyetin altındaki bir fiyattan ek alım yapılarak yeni ağırlıklı ortalamanın aşağı çekilmesidir. Bu işlem riski ortadan kaldırmaz ve pozisyon büyüklüğünü artırır.",
  },
  {
    question: "Yüksek fiyattan ek alım yapılırsa ortalama maliyet artar mı?",
    answer:
      "Yeni alış fiyatı mevcut ortalama maliyetin üzerindeyse komisyon etkisiyle birlikte yeni ortalama maliyet genellikle yükselir.",
  },
  {
    question: "Kaç lot daha alırsam maliyetim düşer?",
    answer:
      "Alınacak lot sayısı, yeni alış fiyatı ve mevcut portföy bilgileri birlikte değerlendirilmelidir. Hesaplama aracındaki yeni alım simülasyonu bu etkinin tahmini sonucunu gösterir.",
  },
  {
    question: "Başa baş fiyatı nedir?",
    answer:
      "Başa baş fiyatı, komisyon dahil toplam maliyetin toplam lot sayısına bölünmesiyle bulunan ve satış masrafları hariç tutulduğunda yatırımın kâr veya zarar göstermediği yaklaşık seviyedir.",
  },
  {
    question: "Hisse kâr-zarar yüzdesi nasıl hesaplanır?",
    answer:
      "Güncel portföy değerinden toplam yatırım maliyeti çıkarılır. Bulunan fark toplam yatırım maliyetine bölünüp 100 ile çarpılarak kâr veya zarar yüzdesi hesaplanır.",
  },
  {
    question: "Bedelsiz sermaye artırımı maliyeti değiştirir mi?",
    answer:
      "Bedelsiz sermaye artırımında yatırımcının toplam yatırım tutarı değişmez ancak lot sayısı artar. Bu nedenle teorik birim maliyet aynı oranda düşer.",
  },
  {
    question: "Bedelli sermaye artırımı maliyeti nasıl etkiler?",
    answer:
      "Bedelli sermaye artırımında yatırımcı yeni paylar için ek ödeme yapar. Yeni toplam yatırım tutarı ve yeni toplam lot sayısı üzerinden ağırlıklı ortalama yeniden hesaplanır.",
  },
  {
    question: "Temettü alınca hisse maliyeti düşer mi?",
    answer:
      "Aracı kurum ekranındaki maliyet yöntemi değişebilir. Ekonomik açıdan nakit temettü yatırımcıya gelir sağlar ancak vergi, fiyat düzeltmesi ve muhasebe yöntemi nedeniyle maliyet takibi ayrı yapılmalıdır.",
  },
  {
    question: "Hisse bölünmesi sonrası maliyet nasıl hesaplanır?",
    answer:
      "Bölünme sonrasında toplam yatırım değeri teorik olarak değişmez. Lot sayısı bölünme oranında artarken birim maliyet aynı oranda azalır.",
  },
  {
    question: "Kısmi satış sonrası ortalama maliyet değişir mi?",
    answer:
      "Aracı kurumun kullandığı maliyet yöntemine göre ekranda farklı sonuç görülebilir. Kalan pozisyon maliyeti, gerçekleşmiş kâr-zarar ve satış komisyonu ayrı değerlendirilmelidir.",
  },
  {
    question: "DCA yöntemi nedir?",
    answer:
      "DCA, belirli aralıklarla sabit veya planlı tutarda düzenli alım yapılması yaklaşımıdır. Amaç tek bir fiyat seviyesine bağlı kalmadan zaman içinde ortalama alış maliyeti oluşturmaktır.",
  },
  {
    question: "Ortalama maliyet düşürmek her zaman mantıklı mı?",
    answer:
      "Hayır. Şirketin finansal görünümü bozulmuşsa veya yatırım tezi geçerliliğini kaybetmişse yalnızca maliyeti düşürmek amacıyla ek alım yapmak riski artırabilir.",
  },
  {
    question: "Hesaplama aracı vergi kesintilerini içeriyor mu?",
    answer:
      "Araç temel olarak alış bedeli, komisyon, portföy değeri ve kâr-zarar hesabına odaklanır. Vergi, BSMV, saklama ücreti ve aracı kuruma özel diğer masraflar ayrıca değerlendirilmelidir.",
  },
  {
    question: "Lot ile adet aynı şey mi?",
    answer:
      "Borsa İstanbul pay piyasasında günlük kullanımda lot çoğunlukla bir adet payı ifade eder. Bazı ürün ve piyasalarda sözleşme büyüklüğü farklı olabileceği için ürün koşulları kontrol edilmelidir.",
  },
  {
    question: "Yabancı hisselerde bu araç kullanılabilir mi?",
    answer:
      "Matematiksel olarak kullanılabilir ancak araç sonuçları TL biçiminde gösterir. Yabancı para işlemlerinde kur dönüşümü, farklı komisyonlar ve vergisel koşullar ayrıca hesaba katılmalıdır.",
  },
  {
    question: "Sonuçlar yatırım tavsiyesi midir?",
    answer:
      "Hayır. Hesaplama sonuçları yalnızca girilen verilere dayalı tahmini matematiksel sonuçlardır ve yatırım tavsiyesi niteliği taşımaz.",
  },
];

const highlights = [
  "Birden fazla alış işlemi",
  "Komisyon dahil maliyet",
  "Güncel kâr-zarar",
  "Yeni alım simülasyonu",
];

const resultItems = [
  "Toplam hisse adedi",
  "Toplam yatırım tutarı",
  "Komisyon dahil ortalama maliyet",
  "Güncel portföy değeri",
  "Kâr veya zarar tutarı",
  "Yeni alım sonrası ortalama",
];

export default function StockAverageCostPage() {
  const relatedCalculators = getRelatedCalculators(canonicalPath, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Hisse Ortalama Maliyet Hesaplama",
      description:
        "Birden fazla hisse alış işleminin komisyon dahil ortalama maliyetini, toplam yatırımını ve güncel kâr-zararını hesaplayan ücretsiz araç.",
      applicationCategory: "FinanceApplication",
      operatingSystem: "All",
      url: `https://hesaprehberionline.com${canonicalPath}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "TRY",
      },
      provider: {
        "@type": "Organization",
        name: "HesapRehberi",
        url: "https://hesaprehberionline.com",
      },
    },
    {
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
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://hesaprehberionline.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hesaplamalar",
          item: "https://hesaprehberionline.com/hesaplamalar",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Hisse Ortalama Maliyet Hesaplama",
          item: `https://hesaprehberionline.com${canonicalPath}`,
        },
      ],
    },
  ];

  return (
    <>
      {jsonLd.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <main className="min-h-screen bg-slate-50">
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-blue-50/40 to-slate-50">
          <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-10">
            <Breadcrumb
              items={[
                { label: "Hesaplamalar", href: "/hesaplamalar" },
                { label: calculator.title },
              ]}
            />

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-extrabold text-blue-800 shadow-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Borsa ve Yatırım Hesaplama
                </span>

                <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                  Hisse Ortalama Maliyetinizi
                  <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                    Komisyon Dahil Hesaplayın
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Farklı fiyatlardan yaptığınız hisse alımlarını ekleyin;
                  toplam lotunuzu, gerçek yatırım maliyetinizi, ağırlıklı
                  ortalama alış fiyatınızı, güncel kâr-zararınızı ve yeni
                  alım senaryolarını saniyeler içinde görün.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200"
                    >
                      <CheckCircle2
                        className="h-4 w-4 text-emerald-600"
                        aria-hidden="true"
                      />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <ShareButtons
                    title="Hisse Ortalama Maliyet Hesaplama | HesapRehberi"
                    description="Farklı fiyatlardan yapılan hisse alımlarının komisyon dahil ortalama maliyetini ve güncel kâr-zararını ücretsiz hesaplayın."
                  />
                </div>
              </div>

              <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25">
                    <ChartNoAxesCombined
                      className="h-7 w-7"
                      aria-hidden="true"
                    />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                    Ücretsiz araç
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                  Hesaplama sonucunda neleri görürsünüz?
                </h2>

                <ul className="mt-6 space-y-4">
                  {resultItems.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#hesaplama-araci"
                  className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-blue-800"
                >
                  Hemen hesapla
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-blue-700">
                      Sayfa rehberi
                    </p>
                    <h2 className="font-black text-slate-950">
                      İçindekiler
                    </h2>
                  </div>
                </div>

                <nav className="mt-5 max-h-[68vh] space-y-1 overflow-y-auto pr-1">
                  {tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm font-bold leading-5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-800"
                    >
                      <ChevronRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-blue-700"
                        aria-hidden="true"
                      />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0 space-y-8">
              <section
                id="hesaplama-araci"
                className="scroll-mt-24"
              >
                <StockAverageCostCalculator />
              </section>

              <ContentSection
                id="ortalama-maliyet-nedir"
                icon={WalletCards}
                eyebrow="Temel kavram"
                title="Hisse ortalama maliyeti nedir?"
              >
                <p>
                  Hisse ortalama maliyeti, aynı pay senedinin farklı
                  tarihlerde ve farklı fiyatlardan yapılan alımlarının tek
                  bir birim maliyet altında birleştirilmesidir. Bu değer,
                  yatırımcının elindeki her bir lot için ortalama olarak ne
                  kadar ödeme yaptığını gösterir.
                </p>
                <p>
                  Doğru hesaplama yalnızca alış fiyatlarının aritmetik
                  ortalamasını almak değildir. Her işlemde alınan lot
                  sayısının farklı olabileceği için ağırlıklı ortalama
                  kullanılmalıdır. Ayrıca gerçek maliyetin görülmesi için
                  alış komisyonları da toplam yatırım tutarına eklenebilir.
                </p>

                <InfoBox
                  tone="blue"
                  icon={Info}
                  title="Neden ağırlıklı ortalama kullanılır?"
                >
                  100 lotu 40 TL’den, 10 lotu 20 TL’den alan bir yatırımcının
                  ortalama maliyeti 30 TL değildir. Büyük alışın fiyatı
                  toplam sonuç üzerinde daha fazla ağırlığa sahiptir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="nasil-hesaplanir"
                icon={Calculator}
                eyebrow="Hesaplama yöntemi"
                title="Hisse ortalama maliyeti nasıl hesaplanır?"
              >
                <p>
                  Her alış işlemi için alınan lot sayısı ile birim alış
                  fiyatı çarpılır. İşleme ait komisyon varsa bu tutara
                  eklenir. Daha sonra tüm işlemlerin maliyetleri toplanır ve
                  toplam lot sayısına bölünür.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <StepCard
                    number="01"
                    title="İşlem maliyetini bul"
                    description="Lot sayısı ile alış fiyatını çarpın ve komisyonu ekleyin."
                  />
                  <StepCard
                    number="02"
                    title="Toplamları birleştir"
                    description="Tüm alışların lotlarını ve toplam maliyetlerini ayrı ayrı toplayın."
                  />
                  <StepCard
                    number="03"
                    title="Lot sayısına böl"
                    description="Toplam yatırım maliyetini toplam lot sayısına bölün."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="formul"
                icon={Percent}
                eyebrow="Matematik"
                title="Hisse ortalama maliyet formülü"
              >
                <FormulaBox
                  label="Komisyon dahil ortalama maliyet"
                  formula="Ortalama Maliyet = Toplam Alış Maliyeti ÷ Toplam Lot"
                />

                <FormulaBox
                  label="Toplam alış maliyeti"
                  formula="Toplam Maliyet = Σ (Lot × Alış Fiyatı + Komisyon)"
                />

                <p>
                  Komisyon hariç sonuç isteniyorsa işlem komisyonları
                  formüle eklenmez. Ancak gerçek başa baş seviyesinin daha
                  doğru görülmesi için alış masraflarının dahil edilmesi
                  genellikle daha anlamlıdır.
                </p>
              </ContentSection>

              <ContentSection
                id="komisyon-etkisi"
                icon={CircleDollarSign}
                eyebrow="İşlem maliyetleri"
                title="Komisyonun ortalama maliyete etkisi"
              >
                <p>
                  Aracı kurum komisyonu her işlemde toplam yatırım maliyetini
                  artırır. Büyük hacimli tek bir işlemde komisyonun birim
                  maliyete etkisi düşük olabilirken, küçük tutarlı ve sık
                  yapılan işlemlerde toplam etki daha görünür hale gelir.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={Scale}
                    title="Komisyon hariç maliyet"
                    description="Yalnızca pay bedelini gösterir. Hızlı karşılaştırma için kullanılabilir."
                  />
                  <FeatureCard
                    icon={BadgeCheck}
                    title="Komisyon dahil maliyet"
                    description="Yatırımcının cebinden çıkan gerçek tutara daha yakın bir başa baş seviyesi sunar."
                  />
                </div>

                <InfoBox
                  tone="amber"
                  icon={AlertTriangle}
                  title="Satış komisyonunu unutmayın"
                >
                  Araç alış komisyonlarını ortalama maliyete dahil eder.
                  Pozisyon kapatılırken oluşabilecek satış komisyonu ve diğer
                  masraflar başa baş fiyatını bir miktar yükseltebilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="ornek-hesaplama"
                icon={FileText}
                eyebrow="Uygulamalı örnek"
                title="Örnek hisse ortalama maliyet hesaplaması"
              >
                <p>
                  Aşağıdaki örnekte aynı hisse iki farklı fiyattan alınmıştır.
                  Komisyonlar toplam yatırım maliyetine eklenmiştir.
                </p>

                <ResponsiveTable
                  headers={[
                    "İşlem",
                    "Adet",
                    "Birim fiyat",
                    "Komisyon",
                    "Toplam maliyet",
                  ]}
                  rows={exampleRows.map((row) => [
                    row.purchase,
                    row.quantity,
                    row.unitPrice,
                    row.commission,
                    row.total,
                  ])}
                />

                <FormulaBox
                  label="Örnek sonuç"
                  formula="7.130,75 TL ÷ 175 lot = 40,75 TL ortalama maliyet"
                />
              </ContentSection>

              <ContentSection
                id="maliyet-dusurme"
                icon={TrendingDown}
                eyebrow="Yeni alım senaryosu"
                title="Hisse maliyet düşürme nasıl çalışır?"
              >
                <p>
                  Mevcut ortalama maliyetin altında yapılan yeni alış,
                  ağırlıklı ortalamayı aşağı çeker. Düşüşün büyüklüğü yeni
                  alış fiyatına ve alınan lot sayısının mevcut pozisyona
                  oranına bağlıdır.
                </p>

                <ResponsiveTable
                  headers={[
                    "Senaryo",
                    "Toplam adet",
                    "Toplam yatırım",
                    "Yeni ortalama",
                  ]}
                  rows={scenarioRows.map((row) => [
                    row.scenario,
                    row.quantity,
                    row.investment,
                    row.average,
                  ])}
                />

                <InfoBox
                  tone="rose"
                  icon={AlertTriangle}
                  title="Maliyet düşmesi riskin düştüğü anlamına gelmez"
                >
                  Ek alım yapıldığında ortalama maliyet azalabilir ancak
                  toplam pozisyon ve yatırılan sermaye büyür. Şirketin veya
                  piyasanın riski aynı kalabilir, hatta artabilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="dca"
                icon={RefreshCw}
                eyebrow="Düzenli yatırım"
                title="Düzenli alım ve DCA yaklaşımı"
              >
                <p>
                  DCA, belirli aralıklarla planlı alım yapılmasını ifade eder.
                  Yatırımcı tek bir fiyat seviyesini tahmin etmeye çalışmak
                  yerine alımlarını zamana yayar. Böylece yüksek ve düşük
                  fiyatlardan yapılan işlemler zaman içinde ağırlıklı bir
                  ortalama oluşturur.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <FeatureCard
                    icon={Target}
                    title="Planlı hareket"
                    description="Alım sıklığı ve bütçe önceden belirlenebilir."
                  />
                  <FeatureCard
                    icon={Gauge}
                    title="Zamanlama riskini yayma"
                    description="Tüm tutarın tek bir fiyat seviyesinden alınması önlenebilir."
                  />
                  <FeatureCard
                    icon={PieChart}
                    title="Disiplinli dağılım"
                    description="Portföy büyüklüğü ve varlık dağılımı daha kontrollü takip edilebilir."
                  />
                </div>

                <p>
                  DCA yöntemi zarar ihtimalini ortadan kaldırmaz. Düzenli alım
                  yapılan şirketin finansal yapısı, değerlemesi ve yatırım
                  tezinin geçerliliği ayrıca değerlendirilmelidir.
                </p>
              </ContentSection>

              <ContentSection
                id="kar-zarar"
                icon={TrendingUp}
                eyebrow="Portföy performansı"
                title="Hisse kâr ve zarar nasıl hesaplanır?"
              >
                <FormulaBox
                  label="Kâr veya zarar tutarı"
                  formula="Güncel Portföy Değeri − Toplam Yatırım Maliyeti"
                />

                <FormulaBox
                  label="Kâr veya zarar yüzdesi"
                  formula="(Kâr veya Zarar ÷ Toplam Yatırım Maliyeti) × 100"
                />

                <p>
                  Güncel portföy değeri, eldeki toplam lot sayısının güncel
                  hisse fiyatı ile çarpılmasıyla bulunur. Sonuç pozitifse
                  gerçekleşmemiş kâr, negatifse gerçekleşmemiş zarar söz
                  konusudur.
                </p>

                <InfoBox
                  tone="blue"
                  icon={BarChart3}
                  title="Gerçekleşmemiş sonuç"
                >
                  Hisse henüz satılmadığı sürece hesaplanan kâr veya zarar
                  gerçekleşmemiştir. Satış fiyatı, komisyon ve diğer
                  kesintiler nihai sonucu değiştirebilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="basa-bas"
                icon={Target}
                eyebrow="Kritik seviye"
                title="Hissede başa baş fiyatı nedir?"
              >
                <p>
                  Başa baş fiyatı, pozisyonun satış masrafları dikkate
                  alınmadan kâr veya zarar göstermediği yaklaşık birim
                  fiyattır. Komisyon dahil ortalama maliyet bu seviye için
                  temel referanstır.
                </p>

                <p>
                  Güncel fiyat ortalama maliyetin altındaysa, aracımız güncel
                  fiyatın başa baş seviyesine ulaşması için gereken yaklaşık
                  yükseliş oranını da gösterir.
                </p>
              </ContentSection>

              <ContentSection
                id="bedelsiz"
                icon={Coins}
                eyebrow="Sermaye işlemleri"
                title="Bedelsiz sermaye artırımı ortalama maliyeti nasıl etkiler?"
              >
                <p>
                  Bedelsiz sermaye artırımında yatırımcıdan yeni para çıkışı
                  olmaz. Toplam yatırım maliyeti aynı kalırken lot sayısı
                  artar. Bu nedenle teorik birim maliyet, artan lot sayısına
                  göre aşağı yönlü düzeltilir.
                </p>

                <FormulaBox
                  label="%100 bedelsiz örneği"
                  formula="100 lot × 40 TL maliyet → 200 lot × 20 TL teorik maliyet"
                />

                <p>
                  Toplam maliyet bu örnekte yine 4.000 TL’dir. Yalnızca lot
                  sayısı ve birim maliyet değişmiştir.
                </p>
              </ContentSection>

              <ContentSection
                id="bedelli"
                icon={Landmark}
                eyebrow="Yeni sermaye girişi"
                title="Bedelli sermaye artırımı maliyeti nasıl etkiler?"
              >
                <p>
                  Bedelli sermaye artırımında yatırımcı rüçhan hakkını
                  kullanarak yeni paylar için ek ödeme yapar. Bu nedenle hem
                  toplam lot hem toplam yatırım tutarı artar. Yeni ortalama
                  maliyet, mevcut yatırım ile bedelli işlem maliyetinin
                  ağırlıklı ortalaması üzerinden hesaplanır.
                </p>

                <InfoBox
                  tone="amber"
                  icon={Info}
                  title="Rüçhan hakkı işlemleri"
                >
                  Rüçhan hakkının kullanılması, satılması veya
                  kullanılmaması farklı ekonomik sonuçlar doğurabilir.
                  Aracı kurum kayıtları ve şirket duyuruları kontrol
                  edilmelidir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="temettu"
                icon={CircleDollarSign}
                eyebrow="Nakit gelir"
                title="Temettünün hisse maliyetine etkisi"
              >
                <p>
                  Nakit temettü yatırımcıya gelir sağlar ve temettü
                  dağıtımında hisse fiyatı teorik olarak temettü tutarı kadar
                  düzeltilir. Bununla birlikte aracı kurumların maliyet
                  ekranlarında temettünün yansıtılma yöntemi farklı olabilir.
                </p>
                <p>
                  Kişisel performans takibinde temettü geliri ayrı bir nakit
                  akışı olarak izlenebilir. Böylece toplam getiri, yalnızca
                  fiyat değişimine değil alınan net temettülere göre de
                  değerlendirilebilir.
                </p>
              </ContentSection>

              <ContentSection
                id="bolunme"
                icon={Scale}
                eyebrow="Pay adedi değişimi"
                title="Hisse bölünmesi sonrası ortalama maliyet"
              >
                <p>
                  Hisse bölünmesinde toplam ekonomik değer teorik olarak
                  değişmez. Lot sayısı bölünme oranında artar, birim fiyat ve
                  birim maliyet aynı oranda azalır.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={TrendingUp}
                    title="Lot sayısı artar"
                    description="Örneğin 1’e 2 bölünmede 100 lot, 200 lot olur."
                  />
                  <FeatureCard
                    icon={TrendingDown}
                    title="Birim maliyet düşer"
                    description="40 TL olan birim maliyet teorik olarak 20 TL’ye iner."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="riskler"
                icon={ShieldCheck}
                eyebrow="Risk yönetimi"
                title="Hisse maliyet düşürmenin önemli riskleri"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={AlertTriangle}
                    title="Pozisyon büyüklüğü riski"
                    description="Aynı hissedeki toplam sermaye ve portföy yoğunluğu artabilir."
                  />
                  <FeatureCard
                    icon={TrendingDown}
                    title="Düşüşün devam etmesi"
                    description="Düşük görünen fiyat daha da gerileyebilir ve zarar büyüyebilir."
                  />
                  <FeatureCard
                    icon={FileText}
                    title="Yatırım tezinin bozulması"
                    description="Şirketin finansal veya operasyonel görünümü değişmiş olabilir."
                  />
                  <FeatureCard
                    icon={PieChart}
                    title="Çeşitlendirme kaybı"
                    description="Tek bir varlığa fazla ağırlık verilmesi portföy riskini artırabilir."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="hatalar"
                icon={ListChecks}
                eyebrow="Kontrol listesi"
                title="Hisse maliyeti hesaplarken sık yapılan hatalar"
              >
                <div className="space-y-4">
                  {mistakes.map((mistake, index) => (
                    <div
                      key={mistake.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-black text-slate-950">
                            {mistake.title}
                          </h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {mistake.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ContentSection>

              <section className="rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 p-8 text-white shadow-xl sm:p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-blue-100">
                      <Calculator className="h-4 w-4" aria-hidden="true" />
                      Ücretsiz yatırım aracı
                    </div>
                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      Hisse ortalama maliyetinizi şimdi hesaplayın
                    </h2>
                    <p className="mt-3 leading-7 text-blue-100">
                      Alış adetlerini, fiyatları ve komisyonları girin;
                      toplam yatırımınızı, ortalama maliyetinizi ve yeni alım
                      sonrası oluşacak sonucu saniyeler içinde görün.
                    </p>
                  </div>

                  <a
                    href="#hesaplama-araci"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-bold text-blue-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Hesaplamaya başla
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </section>

              <ContentSection
                id="ilgili-hesaplamalar"
                icon={BarChart3}
                eyebrow="Diğer araçlar"
                title="İlgili hesaplama araçları"
              >
                <p>
                  Yatırım kararlarınızı farklı açılardan değerlendirmek için
                  aşağıdaki hesaplama araçlarından yararlanabilirsiniz.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedCalculators.map((relatedCalculator) => {
                    const Icon = relatedCalculator.icon;

                    return (
                      <Link
                        key={relatedCalculator.href}
                        href={relatedCalculator.href}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="font-black text-slate-950 transition group-hover:text-blue-800">
                              {relatedCalculator.shortTitle ??
                                relatedCalculator.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {relatedCalculator.description}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-blue-700">
                              Aracı aç
                              <ArrowRight
                                className="h-4 w-4 transition group-hover:translate-x-1"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </ContentSection>

              <ContentSection
                id="sss"
                icon={Lightbulb}
                eyebrow="Merak edilenler"
                title="Hisse ortalama maliyet hesaplama hakkında sık sorulan sorular"
              >
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-blue-200 open:bg-blue-50/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-black text-slate-950">
                        <span className="flex items-start gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-blue-700 shadow-sm ring-1 ring-slate-200">
                            {index + 1}
                          </span>
                          {item.question}
                        </span>
                        <span className="text-xl font-medium text-blue-700 transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="px-5 pb-5 pl-15 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </ContentSection>

              <InfoBox
                tone="rose"
                icon={AlertTriangle}
                title="Yasal ve finansal bilgilendirme"
              >
                Bu sayfadaki hesaplamalar kullanıcı tarafından girilen
                bilgilere dayalı tahmini matematiksel sonuçlardır. İçerikler
                yatırım danışmanlığı, alım-satım önerisi veya getiri garantisi
                değildir. Yatırım kararları kişisel risk profili ve yetkili
                uzman görüşü çerçevesinde değerlendirilmelidir.
              </InfoBox>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}

type ContentSectionProps = {
  id: string;
  icon: typeof Calculator;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function ContentSection({
  id,
  icon: Icon,
  eyebrow,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-700">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

type InfoBoxProps = {
  tone: "blue" | "amber" | "rose";
  icon: typeof Info;
  title: string;
  children: React.ReactNode;
};

function InfoBox({
  tone,
  icon: Icon,
  title,
  children,
}: InfoBoxProps) {
  const toneClasses = {
    blue: {
      wrapper: "border-blue-200 bg-blue-50",
      icon: "bg-blue-100 text-blue-700",
      title: "text-blue-950",
      text: "text-blue-900",
    },
    amber: {
      wrapper: "border-amber-200 bg-amber-50",
      icon: "bg-amber-100 text-amber-700",
      title: "text-amber-950",
      text: "text-amber-900",
    },
    rose: {
      wrapper: "border-rose-200 bg-rose-50",
      icon: "bg-rose-100 text-rose-700",
      title: "text-rose-950",
      text: "text-rose-900",
    },
  }[tone];

  return (
    <div className={`rounded-2xl border p-5 ${toneClasses.wrapper}`}>
      <div className="flex items-start gap-4">
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toneClasses.icon}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <h3 className={`font-black ${toneClasses.title}`}>{title}</h3>
          <div className={`mt-2 text-sm leading-7 ${toneClasses.text}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

type StepCardProps = {
  number: string;
  title: string;
  description: string;
};

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="text-sm font-black text-blue-700">{number}</span>
      <h3 className="mt-3 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

type FeatureCardProps = {
  icon: typeof Calculator;
  title: string;
  description: string;
};

function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm ring-1 ring-slate-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

type FormulaBoxProps = {
  label: string;
  formula: string;
};

function FormulaBox({ label, formula }: FormulaBoxProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-blue-200">
        {label}
      </div>
      <div className="overflow-x-auto px-5 py-5 font-mono text-sm font-bold leading-7 text-white sm:text-base">
        {formula}
      </div>
    </div>
  );
}

type ResponsiveTableProps = {
  headers: string[];
  rows: string[][];
};

function ResponsiveTable({ headers, rows }: ResponsiveTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className="whitespace-nowrap px-4 py-3 font-extrabold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {rows.map((row, rowIndex) => (
              <tr
                key={`${row[0]}-${rowIndex}`}
                className="transition hover:bg-blue-50/50"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={`${cell}-${cellIndex}`}
                    className={`whitespace-nowrap px-4 py-3 ${
                      cellIndex === 0
                        ? "font-extrabold text-slate-950"
                        : "font-semibold text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}