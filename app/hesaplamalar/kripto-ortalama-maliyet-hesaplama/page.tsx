import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bitcoin,
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
  Waves,
  Zap,
} from "lucide-react";

import CryptoAverageCostCalculator from "@/components/calculators/CryptoAverageCostCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/kripto-ortalama-maliyet-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Kripto ortalama maliyet hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Kripto Ortalama Maliyet Hesaplama | BTC, ETH, Altcoin",
  description:
    "Kripto ortalama maliyet hesaplama aracıyla BTC, ETH ve altcoin alımlarınızın komisyon dahil ortalama maliyetini, toplam yatırımını, ROI oranını ve güncel kâr-zararını hesaplayın.",
  path: canonicalPath,
  openGraph: {
    title: "Kripto Ortalama Maliyet Hesaplama",
    description:
      "Birden fazla kripto alımını ekleyin; komisyon dahil ortalama maliyetinizi, toplam yatırımınızı, güncel portföy değerinizi ve yeni alım sonrası maliyetinizi hesaplayın.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kripto Ortalama Maliyet Hesaplama",
    description:
      "BTC, ETH ve diğer kripto varlıkların ortalama maliyetini ve ROI oranını ücretsiz hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Kripto ortalama maliyet hesaplama aracı" },
  { id: "ortalama-maliyet-nedir", label: "Kripto ortalama maliyeti nedir?" },
  { id: "nasil-hesaplanir", label: "Kripto maliyeti nasıl hesaplanır?" },
  { id: "formul", label: "Kripto ortalama maliyet formülü" },
  { id: "komisyon", label: "Borsa komisyonlarının etkisi" },
  { id: "spread", label: "Spread ve fiyat farkı" },
  { id: "ornek", label: "Örnek kripto maliyet hesabı" },
  { id: "maliyet-dusurme", label: "Kriptoda maliyet düşürme" },
  { id: "dca", label: "DCA yöntemi" },
  { id: "roi", label: "ROI ve kâr-zarar hesabı" },
  { id: "basa-bas", label: "Başa baş fiyatı" },
  { id: "stablecoin", label: "Stablecoin ile alım" },
  { id: "kur-etkisi", label: "Kur etkisi" },
  { id: "spot-vadeli", label: "Spot ve vadeli işlem farkı" },
  { id: "transfer-ag", label: "Transfer ve ağ ücretleri" },
  { id: "riskler", label: "Kripto maliyet düşürme riskleri" },
  { id: "hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplama araçları" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const exampleRows = [
  {
    purchase: "1. BTC alımı",
    amount: "0,025 BTC",
    price: "2.420.000 TL",
    commission: "75 TL",
    total: "60.575 TL",
  },
  {
    purchase: "2. BTC alımı",
    amount: "0,018 BTC",
    price: "2.180.000 TL",
    commission: "58 TL",
    total: "39.298 TL",
  },
  {
    purchase: "Toplam",
    amount: "0,043 BTC",
    price: "—",
    commission: "133 TL",
    total: "99.873 TL",
  },
];

const scenarioRows = [
  {
    scenario: "Mevcut portföy",
    amount: "0,043 BTC",
    investment: "99.873 TL",
    average: "2.322.628 TL",
  },
  {
    scenario: "0,01 BTC daha, 2.050.000 TL",
    amount: "0,053 BTC",
    investment: "120.408 TL",
    average: "2.271.849 TL",
  },
  {
    scenario: "0,02 BTC daha, 2.050.000 TL",
    amount: "0,063 BTC",
    investment: "140.908 TL",
    average: "2.236.635 TL",
  },
];

const mistakes = [
  {
    title: "Coin miktarını yanlış girmek",
    description:
      "Kripto varlıklarda miktarlar çok küçük ondalık değerler içerebilir. Virgül ve nokta kullanımının doğru yapılmaması sonucu ciddi biçimde değiştirebilir.",
  },
  {
    title: "Komisyonu ve spreadi yok saymak",
    description:
      "Borsanın işlem komisyonu dışında alış ve satış fiyatı arasındaki spread de gerçek maliyeti artırabilir.",
  },
  {
    title: "USDT maliyetini TL maliyeti sanmak",
    description:
      "USDT ile yapılan alımlarda coin maliyeti ayrıca USDT/TL kuruna bağlıdır. Kur değişimi TL bazlı performansı etkiler.",
  },
  {
    title: "Vadeli işlemleri spot maliyete eklemek",
    description:
      "Kaldıraçlı vadeli işlemler farklı risk ve hesaplama mantığına sahiptir. Spot portföy maliyetiyle karıştırılmamalıdır.",
  },
  {
    title: "Transfer ücretlerini unutmak",
    description:
      "Borsadan cüzdana yapılan çekimlerde ağ ücreti düşülebilir. Net varlık miktarı bu nedenle daha düşük olabilir.",
  },
  {
    title: "Sadece fiyat düştüğü için alım yapmak",
    description:
      "Maliyeti düşürmek matematiksel olarak mümkün olsa da proje riski, likidite ve piyasa koşulları ayrıca değerlendirilmelidir.",
  },
];

const faqItems = [
  {
    question: "Kripto ortalama maliyeti nedir?",
    answer:
      "Kripto ortalama maliyeti, aynı coin veya token için farklı fiyatlardan yapılan tüm alımların toplam maliyetinin toplam varlık miktarına bölünmesiyle bulunan birim maliyettir.",
  },
  {
    question: "Bitcoin ortalama maliyeti nasıl hesaplanır?",
    answer:
      "Her BTC alımında alınan miktar ile birim fiyat çarpılır, işlem komisyonu eklenir. Tüm alımların toplam maliyeti toplam BTC miktarına bölünür.",
  },
  {
    question: "Ethereum ortalama maliyeti de aynı yöntemle mi hesaplanır?",
    answer:
      "Evet. ETH, SOL, XRP ve diğer tüm spot kripto varlıklar için aynı ağırlıklı ortalama yöntemi kullanılabilir.",
  },
  {
    question: "Komisyon kripto maliyetine eklenmeli mi?",
    answer:
      "Gerçek yatırım maliyetini görmek için alış komisyonlarının toplam maliyete eklenmesi daha doğru sonuç verir.",
  },
  {
    question: "Kripto maliyet düşürme nedir?",
    answer:
      "Mevcut ortalama maliyetin altında fiyattan yeni alım yapılarak ağırlıklı ortalamanın aşağı çekilmesidir. Bu işlem toplam pozisyon riskini artırabilir.",
  },
  {
    question: "DCA yöntemi kriptoda nasıl uygulanır?",
    answer:
      "DCA, belirli gün veya aralıklarla sabit ya da planlı tutarda düzenli alım yapılmasıdır. Amaç tek bir fiyat seviyesine bağlı kalmadan zaman içinde ortalama maliyet oluşturmaktır.",
  },
  {
    question: "Kriptoda ROI nasıl hesaplanır?",
    answer:
      "Güncel portföy değerinden toplam yatırım maliyeti çıkarılır. Bulunan fark toplam yatırım maliyetine bölünüp 100 ile çarpılır.",
  },
  {
    question: "Başa baş fiyatı nedir?",
    answer:
      "Başa baş fiyatı, komisyon dahil ortalama maliyete eşit olan ve satış masrafları hariç tutulduğunda portföyün kâr veya zarar göstermediği yaklaşık fiyattır.",
  },
  {
    question: "USDT ile yapılan alımlar TL bazında nasıl hesaplanır?",
    answer:
      "İşlem tarihindeki USDT/TL kuru kullanılarak USDT cinsinden maliyet TL’ye çevrilmelidir. Aksi halde TL bazlı performans doğru ölçülmez.",
  },
  {
    question: "Spread ortalama maliyeti etkiler mi?",
    answer:
      "Evet. Piyasa alış ve satış fiyatı arasındaki fark, özellikle likiditesi düşük coinlerde gerçek işlem maliyetini artırabilir.",
  },
  {
    question: "Ağ ücreti maliyete dahil edilmeli mi?",
    answer:
      "Varlık başka bir cüzdana aktarılıyorsa ağ ücreti net alınan miktarı azaltabilir. Ayrıntılı maliyet takibinde bu ücret hesaba katılabilir.",
  },
  {
    question: "Kripto borsaları neden farklı maliyet gösterir?",
    answer:
      "Komisyon oranı, maliyet yöntemi, işlem para birimi, kur dönüşümü ve yuvarlama yöntemi borsadan borsaya değişebilir.",
  },
  {
    question: "Spot ve vadeli işlem maliyeti aynı mı?",
    answer:
      "Hayır. Spot işlemde gerçek varlık alınır. Vadeli işlemlerde kaldıraç, fonlama ödemesi, likidasyon ve teminat gibi ek unsurlar bulunur.",
  },
  {
    question: "Kaldıraçlı işlemler bu araçla hesaplanabilir mi?",
    answer:
      "Araç spot alımlar için tasarlanmıştır. Kaldıraçlı işlemler farklı hesaplama mantığına sahip olduğundan bu araçla değerlendirilmemelidir.",
  },
  {
    question: "Coin miktarı 0,000001 gibi küçük olabilir mi?",
    answer:
      "Evet. Hesaplama aracı sekiz ondalık basamağa kadar miktar girişini destekler.",
  },
  {
    question: "Satış yaptıktan sonra ortalama maliyet değişir mi?",
    answer:
      "Borsanın kullandığı muhasebe yöntemine göre değişebilir. Kalan pozisyon maliyeti ile gerçekleşmiş kâr-zarar ayrı takip edilmelidir.",
  },
  {
    question: "Kripto maliyet düşürmek her zaman doğru mudur?",
    answer:
      "Hayır. Projenin güvenilirliği, likiditesi, token ekonomisi ve piyasa koşulları bozulmuşsa ek alım yapmak zararı büyütebilir.",
  },
  {
    question: "Vergi hesaplaması araçta var mı?",
    answer:
      "Hayır. Araç ortalama maliyet, portföy değeri ve kâr-zarar hesabına odaklanır. Vergisel yükümlülükler ayrıca değerlendirilmelidir.",
  },
  {
    question: "Yabancı borsadaki işlemler hesaplanabilir mi?",
    answer:
      "Evet, matematiksel olarak hesaplanabilir. Ancak işlem para birimi ve kur dönüşümü doğru şekilde TL’ye çevrilmelidir.",
  },
  {
    question: "Sonuçlar yatırım tavsiyesi midir?",
    answer:
      "Hayır. Sonuçlar yalnızca girilen verilere dayalı matematiksel tahminlerdir ve yatırım tavsiyesi değildir.",
  },
];

const highlights = [
  "BTC, ETH ve altcoin desteği",
  "Komisyon dahil maliyet",
  "ROI ve kâr-zarar",
  "Yeni alım simülasyonu",
];

const resultItems = [
  "Toplam coin miktarı",
  "Toplam yatırım tutarı",
  "Komisyon dahil ortalama maliyet",
  "Güncel portföy değeri",
  "ROI ve kâr-zarar",
  "Yeni alım sonrası ortalama",
];

export default function CryptoAverageCostPage() {
  const relatedCalculators = getRelatedCalculators(canonicalPath, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Kripto Ortalama Maliyet Hesaplama",
      description:
        "BTC, ETH ve altcoin alımlarının komisyon dahil ortalama maliyetini, toplam yatırımını ve ROI oranını hesaplayan ücretsiz araç.",
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
          name: "Kripto Ortalama Maliyet Hesaplama",
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
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-orange-50/40 to-slate-50">
          <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-orange-200/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-10">
            <Breadcrumb
              items={[
                { label: "Hesaplamalar", href: "/hesaplamalar" },
                { label: calculator.title },
              ]}
            />

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-extrabold text-orange-800 shadow-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Kripto ve Dijital Varlık Hesaplama
                </span>

                <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                  Kripto Ortalama Maliyetinizi
                  <span className="block bg-gradient-to-r from-orange-600 via-amber-500 to-violet-600 bg-clip-text text-transparent">
                    Komisyon Dahil Hesaplayın
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  BTC, ETH, SOL ve diğer kripto varlıklarda farklı fiyatlardan
                  yaptığınız alımları ekleyin; toplam yatırımınızı, ağırlıklı
                  ortalama maliyetinizi, ROI oranınızı, güncel kâr-zararınızı
                  ve yeni alım senaryolarını saniyeler içinde görün.
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
                    title="Kripto Ortalama Maliyet Hesaplama | HesapRehberi"
                    description="BTC, ETH ve altcoin alımlarının komisyon dahil ortalama maliyetini ve ROI oranını ücretsiz hesaplayın."
                  />
                </div>
              </div>

              <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-600/25">
                    <Bitcoin className="h-7 w-7" aria-hidden="true" />
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
                  className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-orange-700"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-orange-700">
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
                      className="group flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm font-bold leading-5 text-slate-600 transition hover:bg-orange-50 hover:text-orange-800"
                    >
                      <ChevronRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-orange-700"
                        aria-hidden="true"
                      />
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0 space-y-8">
              <section id="hesaplama-araci" className="scroll-mt-24">
                <CryptoAverageCostCalculator />
              </section>

              <ContentSection
                id="ortalama-maliyet-nedir"
                icon={WalletCards}
                eyebrow="Temel kavram"
                title="Kripto ortalama maliyeti nedir?"
              >
                <p>
                  Kripto ortalama maliyeti, aynı dijital varlığın farklı
                  tarihlerde ve farklı fiyatlardan yapılan alımlarının tek bir
                  birim maliyet altında birleştirilmesidir. Bu değer, elde
                  tutulan her bir coin veya token için ortalama olarak ne kadar
                  ödeme yapıldığını gösterir.
                </p>
                <p>
                  Hesaplama yalnızca alış fiyatlarının basit ortalamasını almak
                  değildir. Her işlemde alınan miktar farklı olabileceği için
                  ağırlıklı ortalama kullanılmalıdır. Gerçek maliyete daha yakın
                  sonuç için işlem komisyonları da toplam tutara eklenebilir.
                </p>

                <InfoBox
                  tone="orange"
                  icon={Info}
                  title="Kripto miktarları neden önemlidir?"
                >
                  0,10 BTC ile 0,005 BTC aynı ağırlığa sahip değildir. Daha büyük
                  miktarlı alım, ortalama maliyet üzerinde daha fazla etkili olur.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="nasil-hesaplanir"
                icon={Calculator}
                eyebrow="Hesaplama yöntemi"
                title="Kripto ortalama maliyeti nasıl hesaplanır?"
              >
                <p>
                  Her alım işlemi için alınan coin miktarı ile birim alış fiyatı
                  çarpılır. İşlem komisyonu varsa bu tutara eklenir. Tüm
                  işlemlerin maliyetleri toplanır ve toplam coin miktarına
                  bölünür.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <StepCard
                    number="01"
                    title="İşlem maliyetini bul"
                    description="Coin miktarını birim fiyatla çarpın ve komisyonu ekleyin."
                  />
                  <StepCard
                    number="02"
                    title="Toplamları birleştir"
                    description="Tüm alımların miktarlarını ve maliyetlerini ayrı ayrı toplayın."
                  />
                  <StepCard
                    number="03"
                    title="Toplam miktara böl"
                    description="Toplam yatırım maliyetini toplam coin miktarına bölün."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="formul"
                icon={Percent}
                eyebrow="Matematik"
                title="Kripto ortalama maliyet formülü"
              >
                <FormulaBox
                  label="Komisyon dahil ortalama maliyet"
                  formula="Ortalama Maliyet = Toplam Alış Maliyeti ÷ Toplam Coin Miktarı"
                />

                <FormulaBox
                  label="Toplam alış maliyeti"
                  formula="Toplam Maliyet = Σ (Coin Miktarı × Alış Fiyatı + Komisyon)"
                />

                <p>
                  Komisyon hariç hesaplama yapılacaksa işlem ücretleri formüle
                  eklenmez. Ancak borsada gerçekleşen gerçek başa baş seviyesini
                  görmek için komisyon dahil sonuç daha anlamlıdır.
                </p>
              </ContentSection>

              <ContentSection
                id="komisyon"
                icon={CircleDollarSign}
                eyebrow="İşlem ücretleri"
                title="Kripto borsa komisyonlarının maliyete etkisi"
              >
                <p>
                  Kripto borsaları spot alım ve satım işlemlerinde belirli
                  oranlarda komisyon kesebilir. Komisyon oranı işlem hacmine,
                  kullanıcı seviyesine, kullanılan emir tipine ve platformun
                  kampanyalarına göre değişebilir.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={Scale}
                    title="Komisyon hariç maliyet"
                    description="Yalnızca coin bedelini gösterir ve hızlı karşılaştırma için kullanılabilir."
                  />
                  <FeatureCard
                    icon={BadgeCheck}
                    title="Komisyon dahil maliyet"
                    description="Cebinizden çıkan gerçek tutara daha yakın bir başa baş seviyesi sunar."
                  />
                </div>

                <InfoBox
                  tone="amber"
                  icon={AlertTriangle}
                  title="Maker ve taker komisyonu farklı olabilir"
                >
                  Limit emir ile piyasa emri farklı komisyon oranlarına tabi
                  olabilir. Hesaplamada işlem geçmişinizde görünen gerçek kesinti
                  tutarını kullanmanız daha doğru sonuç verir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="spread"
                icon={Waves}
                eyebrow="Piyasa farkı"
                title="Spread kripto maliyetini nasıl etkiler?"
              >
                <p>
                  Spread, bir varlığın alış ve satış fiyatı arasındaki farktır.
                  Likiditesi yüksek BTC ve ETH gibi varlıklarda spread genellikle
                  daha dar olabilirken, işlem hacmi düşük altcoinlerde daha geniş
                  olabilir.
                </p>
                <p>
                  Piyasa emri kullanıldığında görünen son fiyat ile gerçekleşen
                  işlem fiyatı arasında fark oluşabilir. Bu nedenle özellikle
                  yüksek tutarlı işlemlerde gerçekleşen ortalama fiyatın
                  kullanılması daha doğru maliyet hesabı sağlar.
                </p>
              </ContentSection>

              <ContentSection
                id="ornek"
                icon={FileText}
                eyebrow="Uygulamalı örnek"
                title="Örnek Bitcoin ortalama maliyet hesaplaması"
              >
                <p>
                  Aşağıdaki örnekte Bitcoin iki farklı fiyat seviyesinden
                  alınmıştır. Komisyonlar toplam yatırım maliyetine eklenmiştir.
                </p>

                <ResponsiveTable
                  headers={[
                    "İşlem",
                    "Miktar",
                    "Birim fiyat",
                    "Komisyon",
                    "Toplam maliyet",
                  ]}
                  rows={exampleRows.map((row) => [
                    row.purchase,
                    row.amount,
                    row.price,
                    row.commission,
                    row.total,
                  ])}
                />

                <FormulaBox
                  label="Örnek sonuç"
                  formula="99.873 TL ÷ 0,043 BTC = 2.322.628 TL ortalama maliyet"
                />
              </ContentSection>

              <ContentSection
                id="maliyet-dusurme"
                icon={TrendingDown}
                eyebrow="Yeni alım senaryosu"
                title="Kriptoda maliyet düşürme nasıl çalışır?"
              >
                <p>
                  Mevcut ortalama maliyetin altında fiyattan yeni alım yapılması,
                  ağırlıklı ortalamayı aşağı çeker. Düşüşün büyüklüğü yeni alış
                  fiyatına ve alınan miktarın mevcut pozisyona oranına bağlıdır.
                </p>

                <ResponsiveTable
                  headers={[
                    "Senaryo",
                    "Toplam miktar",
                    "Toplam yatırım",
                    "Yeni ortalama",
                  ]}
                  rows={scenarioRows.map((row) => [
                    row.scenario,
                    row.amount,
                    row.investment,
                    row.average,
                  ])}
                />

                <InfoBox
                  tone="rose"
                  icon={AlertTriangle}
                  title="Maliyet düşürmek riski ortadan kaldırmaz"
                >
                  Ortalama maliyet azalırken toplam yatırılan sermaye ve pozisyon
                  büyüklüğü artar. Coin fiyatının düşmeye devam etmesi hâlinde
                  toplam zarar daha yüksek olabilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="dca"
                icon={RefreshCw}
                eyebrow="Düzenli yatırım"
                title="Kriptoda DCA yöntemi nedir?"
              >
                <p>
                  DCA, belirli günlerde veya aralıklarla sabit ya da planlı
                  tutarda kripto varlık alınması yaklaşımıdır. Yatırımcı tek bir
                  fiyat seviyesini tahmin etmeye çalışmak yerine alımları zamana
                  yayar.
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
                    description="Tüm sermayenin tek bir fiyat seviyesinde kullanılması önlenebilir."
                  />
                  <FeatureCard
                    icon={PieChart}
                    title="Disiplinli takip"
                    description="Portföy büyüklüğü ve ortalama maliyet daha düzenli izlenebilir."
                  />
                </div>

                <p>
                  DCA zarar ihtimalini ortadan kaldırmaz. Projenin teknik yapısı,
                  ekip güvenilirliği, token ekonomisi, likiditesi ve piyasa riski
                  ayrıca değerlendirilmelidir.
                </p>
              </ContentSection>

              <ContentSection
                id="roi"
                icon={TrendingUp}
                eyebrow="Performans ölçümü"
                title="Kriptoda ROI ve kâr-zarar nasıl hesaplanır?"
              >
                <FormulaBox
                  label="Kâr veya zarar tutarı"
                  formula="Güncel Portföy Değeri − Toplam Yatırım Maliyeti"
                />

                <FormulaBox
                  label="ROI yüzdesi"
                  formula="(Kâr veya Zarar ÷ Toplam Yatırım Maliyeti) × 100"
                />

                <p>
                  Güncel portföy değeri, toplam coin miktarının güncel piyasa
                  fiyatı ile çarpılmasıyla bulunur. Sonuç pozitifse
                  gerçekleşmemiş kâr, negatifse gerçekleşmemiş zarar oluşur.
                </p>

                <InfoBox
                  tone="orange"
                  icon={BarChart3}
                  title="Gerçekleşmemiş sonuç"
                >
                  Varlık satılmadığı sürece kâr veya zarar gerçekleşmemiştir.
                  Satış fiyatı, spread, komisyon ve kur değişimi nihai sonucu
                  etkileyebilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="basa-bas"
                icon={Target}
                eyebrow="Kritik seviye"
                title="Kriptoda başa baş fiyatı nedir?"
              >
                <p>
                  Başa baş fiyatı, satış masrafları hariç tutulduğunda portföyün
                  kâr veya zarar göstermediği yaklaşık birim fiyattır. Komisyon
                  dahil ortalama maliyet bu seviye için temel referanstır.
                </p>
                <p>
                  Güncel fiyat ortalama maliyetin altındaysa hesaplama aracı,
                  başa baş seviyesine ulaşılması için gereken yaklaşık yükseliş
                  oranını da gösterir.
                </p>
              </ContentSection>

              <ContentSection
                id="stablecoin"
                icon={Coins}
                eyebrow="İşlem para birimi"
                title="Stablecoin ile yapılan kripto alımları"
              >
                <p>
                  Birçok kripto borsasında BTC, ETH ve altcoinler USDT, USDC veya
                  benzeri stablecoin çiftleri üzerinden alınır. Bu durumda coin
                  maliyeti önce stablecoin cinsinden oluşur.
                </p>
                <p>
                  TL bazlı gerçek performansın görülmesi için stablecoin alım
                  maliyeti veya işlem tarihindeki ilgili kur da hesaba
                  katılmalıdır. Sadece USDT fiyatını takip etmek, TL bazında
                  oluşan kur etkisini gizleyebilir.
                </p>
              </ContentSection>

              <ContentSection
                id="kur-etkisi"
                icon={Landmark}
                eyebrow="Döviz etkisi"
                title="Kur değişimi kripto maliyetini nasıl etkiler?"
              >
                <p>
                  Kripto varlığın dolar bazlı fiyatı sabit kalsa bile USD/TRY
                  veya USDT/TRY kurundaki değişim TL bazlı portföy değerini
                  etkileyebilir. Bu nedenle yabancı para üzerinden alınan
                  varlıklarda iki farklı performans oluşabilir:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={Bitcoin}
                    title="Varlık performansı"
                    description="Coinin dolar veya stablecoin bazındaki fiyat değişimidir."
                  />
                  <FeatureCard
                    icon={CircleDollarSign}
                    title="Kur performansı"
                    description="İşlem para biriminin TL karşısındaki değişimidir."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="spot-vadeli"
                icon={ChartNoAxesCombined}
                eyebrow="İşlem türleri"
                title="Spot ve vadeli işlem maliyeti arasındaki fark"
              >
                <p>
                  Spot piyasada gerçek kripto varlık satın alınır ve portföye
                  eklenir. Ortalama maliyet hesabı, toplam miktar ve toplam
                  yatırım üzerinden yapılır.
                </p>
                <p>
                  Vadeli işlemlerde ise kaldıraç, teminat, fonlama ödemesi,
                  likidasyon fiyatı ve gerçekleşmiş PnL gibi farklı unsurlar
                  bulunur. Bu nedenle spot ortalama maliyet aracı kaldıraçlı
                  işlemler için kullanılmamalıdır.
                </p>

                <InfoBox
                  tone="rose"
                  icon={AlertTriangle}
                  title="Kaldıraç riski"
                >
                  Vadeli işlemlerde zarar yatırılan teminata hızla yaklaşabilir
                  ve pozisyon likide olabilir. Spot maliyet mantığı bu riski
                  göstermez.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="transfer-ag"
                icon={Zap}
                eyebrow="Blockchain maliyetleri"
                title="Transfer ve ağ ücretleri maliyete dahil edilmeli mi?"
              >
                <p>
                  Kripto varlık bir borsadan kişisel cüzdana veya başka bir
                  platforma gönderildiğinde ağ ücreti kesilebilir. Bu ücret
                  bazen coin miktarından düşülür, bazen ayrıca tahsil edilir.
                </p>
                <p>
                  Uzun vadeli ve ayrıntılı performans takibinde ağ ücretleri,
                  çekim ücretleri ve köprü işlemlerindeki masraflar toplam
                  maliyete eklenebilir.
                </p>
              </ContentSection>

              <ContentSection
                id="riskler"
                icon={ShieldCheck}
                eyebrow="Risk yönetimi"
                title="Kripto maliyet düşürmenin önemli riskleri"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard
                    icon={AlertTriangle}
                    title="Yüksek volatilite"
                    description="Kripto fiyatları kısa sürede sert yükseliş ve düşüş yaşayabilir."
                  />
                  <FeatureCard
                    icon={TrendingDown}
                    title="Düşüşün devam etmesi"
                    description="Düşük görünen fiyat daha da gerileyebilir ve zarar büyüyebilir."
                  />
                  <FeatureCard
                    icon={FileText}
                    title="Proje riski"
                    description="Ekip, token ekonomisi veya güvenlik sorunları yatırım tezini bozabilir."
                  />
                  <FeatureCard
                    icon={PieChart}
                    title="Portföy yoğunlaşması"
                    description="Tek bir coine fazla sermaye ayırmak toplam riski artırabilir."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="hatalar"
                icon={ListChecks}
                eyebrow="Kontrol listesi"
                title="Kripto maliyeti hesaplarken sık yapılan hatalar"
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

              <section className="rounded-[2rem] bg-gradient-to-br from-orange-600 via-orange-700 to-slate-950 p-8 text-white shadow-xl sm:p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-orange-100">
                      <Calculator className="h-4 w-4" aria-hidden="true" />
                      Ücretsiz kripto aracı
                    </div>
                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      Kripto ortalama maliyetinizi şimdi hesaplayın
                    </h2>
                    <p className="mt-3 leading-7 text-orange-100">
                      Coin miktarlarını, alış fiyatlarını ve komisyonları girin;
                      toplam yatırımınızı, ROI oranınızı ve yeni alım sonrası
                      ortalama maliyetinizi saniyeler içinde görün.
                    </p>
                  </div>

                  <a
                    href="#hesaplama-araci"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-bold text-orange-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50"
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
                  Yatırım ve getiri hesaplamalarınızı farklı açılardan
                  değerlendirmek için aşağıdaki araçlardan yararlanabilirsiniz.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedCalculators.map((relatedCalculator) => {
                    const Icon = relatedCalculator.icon;

                    return (
                      <Link
                        key={relatedCalculator.href}
                        href={relatedCalculator.href}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-orange-700 shadow-sm ring-1 ring-slate-200">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="font-black text-slate-950 transition group-hover:text-orange-800">
                              {relatedCalculator.shortTitle ??
                                relatedCalculator.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {relatedCalculator.description}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-orange-700">
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
                title="Kripto ortalama maliyet hesaplama hakkında sık sorulan sorular"
              >
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-orange-200 open:bg-orange-50/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-black text-slate-950">
                        <span className="flex items-start gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-orange-700 shadow-sm ring-1 ring-slate-200">
                            {index + 1}
                          </span>
                          {item.question}
                        </span>
                        <span className="text-xl font-medium text-orange-700 transition group-open:rotate-45">
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
                Bu sayfadaki sonuçlar kullanıcı tarafından girilen verilere
                dayalı tahmini matematiksel hesaplamalardır. Kripto varlıklar
                yüksek risk ve volatilite içerir. İçerikler yatırım tavsiyesi,
                alım-satım önerisi veya getiri garantisi değildir.
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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-700">
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
  tone: "orange" | "amber" | "rose";
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
    orange: {
      wrapper: "border-orange-200 bg-orange-50",
      icon: "bg-orange-100 text-orange-700",
      title: "text-orange-950",
      text: "text-orange-900",
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
      <span className="text-sm font-black text-orange-700">{number}</span>
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
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-orange-700 shadow-sm ring-1 ring-slate-200">
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
      <div className="border-b border-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-orange-200">
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
                className="transition hover:bg-orange-50/50"
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