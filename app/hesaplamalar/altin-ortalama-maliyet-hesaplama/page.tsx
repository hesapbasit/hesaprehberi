import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Coins,
  Gem,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  PieChart,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import AltinAverageCostCalculator from "@/components/calculators/AltinAverageCostCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/altin-ortalama-maliyet-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Altın ortalama maliyet hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Altın Ortalama Maliyet Hesaplama | Gram, Çeyrek, Tam",
  description:
    "Altın ortalama maliyet hesaplama aracıyla gram, çeyrek, yarım, tam ve Cumhuriyet altını alımlarınızın masraflar dahil ortalama maliyetini, ROI oranını ve kâr-zararını hesaplayın.",
  path: canonicalPath,
  openGraph: {
    title: "Altın Ortalama Maliyet Hesaplama",
    description:
      "Birden fazla altın alımını ekleyin; toplam yatırımınızı, ağırlıklı ortalama maliyetinizi ve yeni alım sonrası maliyetinizi hesaplayın.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altın Ortalama Maliyet Hesaplama",
    description:
      "Gram ve ziynet altın alımlarınızın ortalama maliyetini ücretsiz hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Altın ortalama maliyet hesaplama aracı" },
  { id: "ortalama-maliyet-nedir", label: "Altın ortalama maliyeti nedir?" },
  { id: "nasil-hesaplanir", label: "Altın maliyeti nasıl hesaplanır?" },
  { id: "formul", label: "Ortalama maliyet formülü" },
  { id: "makas", label: "Kuyumcu makası ve fiyat farkı" },
  { id: "iscilik", label: "İşçilik ve ek masraflar" },
  { id: "gram-altin", label: "Gram altın hesabı" },
  { id: "ziynet-altin", label: "Çeyrek, yarım ve tam altın" },
  { id: "ornek", label: "Örnek maliyet hesabı" },
  { id: "maliyet-dusurme", label: "Altında maliyet düşürme" },
  { id: "roi", label: "Kâr-zarar ve ROI" },
  { id: "basa-bas", label: "Başa baş fiyatı" },
  { id: "kur-ons", label: "Ons ve kur etkisi" },
  { id: "fiziki-banka", label: "Fiziki altın ve banka altını" },
  { id: "riskler", label: "Riskler" },
  { id: "hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const exampleRows = [
  ["1. alım", "10 gram", "2.425 TL", "50 TL", "24.300 TL"],
  ["2. alım", "8 gram", "2.310 TL", "40 TL", "18.520 TL"],
  ["Toplam", "18 gram", "—", "90 TL", "42.820 TL"],
];

const scenarioRows = [
  ["Mevcut portföy", "18 gram", "42.820 TL", "2.378,89 TL"],
  ["5 gram daha, 2.250 TL", "23 gram", "54.095 TL", "2.351,96 TL"],
  ["10 gram daha, 2.250 TL", "28 gram", "65.345 TL", "2.333,75 TL"],
];

const mistakes = [
  {
    title: "Kuyumcu alış fiyatı yerine satış fiyatını kullanmak",
    description:
      "Elinizdeki altını bozdururken kuyumcunun alış fiyatı geçerlidir. Portföy değerinde doğru tarafı kullanmak gerekir.",
  },
  {
    title: "İşçilik bedelini göz ardı etmek",
    description:
      "Bilezik ve takı ürünlerinde işçilik bedeli geri satarken tam olarak korunmayabilir.",
  },
  {
    title: "Farklı ayarları aynı kabul etmek",
    description:
      "14, 18, 22 ve 24 ayar altınların saf altın oranı farklıdır. Doğrudan aynı birimle karşılaştırılmamalıdır.",
  },
  {
    title: "Adet ile gramı karıştırmak",
    description:
      "Çeyrek altın adet bazında, gram altın gram bazında takip edilmelidir.",
  },
  {
    title: "Makas farkını küçümsemek",
    description:
      "Alış ve satış fiyatı arasındaki fark özellikle kısa vadeli işlemlerde getiriyi ciddi biçimde etkileyebilir.",
  },
  {
    title: "Sadece fiyat düştüğü için ek alım yapmak",
    description:
      "Maliyet düşerken toplam pozisyon büyür. Nakit ihtiyacı ve risk toleransı ayrıca değerlendirilmelidir.",
  },
];

const faqItems = [
  {
    question: "Altın ortalama maliyeti nedir?",
    answer:
      "Farklı fiyatlardan alınan altınların toplam maliyetinin toplam miktara bölünmesiyle bulunan birim maliyettir.",
  },
  {
    question: "Gram altın ortalama maliyeti nasıl hesaplanır?",
    answer:
      "Her alımda gram miktarı birim fiyatla çarpılır, masraflar eklenir. Tüm maliyetler toplam gram miktarına bölünür.",
  },
  {
    question: "Çeyrek altın maliyeti adet üzerinden mi hesaplanır?",
    answer:
      "Evet. Çeyrek, yarım, tam ve Cumhuriyet altını genellikle adet bazında hesaplanır.",
  },
  {
    question: "Kuyumcu masrafı maliyete eklenmeli mi?",
    answer:
      "Gerçek maliyeti görmek için işlem sırasında ödediğiniz ek tutarlar toplam maliyete eklenmelidir.",
  },
  {
    question: "Kuyumcu makası nedir?",
    answer:
      "Kuyumcunun altını sattığı fiyat ile sizden geri aldığı fiyat arasındaki farktır.",
  },
  {
    question: "Altın maliyet düşürme nasıl yapılır?",
    answer:
      "Mevcut ortalama maliyetin altında fiyattan yeni alım yapıldığında ağırlıklı ortalama aşağı çekilebilir.",
  },
  {
    question: "Maliyet düşürmek her zaman doğru mudur?",
    answer:
      "Hayır. Toplam pozisyon büyür ve fiyat düşmeye devam ederse zarar artabilir.",
  },
  {
    question: "Altında ROI nasıl hesaplanır?",
    answer:
      "Güncel portföy değerinden toplam yatırım çıkarılır, fark toplam yatırıma bölünüp 100 ile çarpılır.",
  },
  {
    question: "Başa baş fiyatı nedir?",
    answer:
      "Masraflar dahil ortalama maliyetinize eşit olan yaklaşık birim fiyattır.",
  },
  {
    question: "Bilezik maliyeti bu araçla hesaplanabilir mi?",
    answer:
      "Özel altın türü seçilerek gram veya adet bazında hesaplanabilir. İşçilik bedeli ayrıca girilmelidir.",
  },
  {
    question: "22 ayar ile 24 ayar altın aynı mı?",
    answer:
      "Hayır. Saflık oranları farklıdır. Karşılaştırma yapılırken ayar farkı dikkate alınmalıdır.",
  },
  {
    question: "Banka altını ile fiziki altın aynı maliyete sahip mi?",
    answer:
      "Hayır. Banka makası, kuyumcu makası, saklama ve işlem koşulları farklı olabilir.",
  },
  {
    question: "Ons altın fiyatı gram altını etkiler mi?",
    answer:
      "Evet. Gram altın fiyatı genel olarak ons altın ve döviz kuru etkisiyle şekillenir.",
  },
  {
    question: "Dolar kuru artarsa gram altın artar mı?",
    answer:
      "Ons fiyatı sabit kalsa bile kur yükselişi gram altın fiyatını yukarı taşıyabilir.",
  },
  {
    question: "Altın satışı sonrası ortalama maliyet değişir mi?",
    answer:
      "Kalan miktarın maliyet takibi kullanılan yönteme göre değişebilir. Gerçekleşen kâr-zarar ayrı izlenmelidir.",
  },
  {
    question: "Cumhuriyet altını ile tam altın aynı mı?",
    answer:
      "Hayır. Ağırlık, basım ve piyasa fiyatlaması bakımından farklı ürünlerdir.",
  },
  {
    question: "İşçilik geri satarken geri alınır mı?",
    answer:
      "Takı ürünlerinde işçilik bedelinin tamamı genellikle geri alınmaz.",
  },
  {
    question: "Güncel portföy değeri hangi fiyatla hesaplanmalı?",
    answer:
      "Gerçekçi sonuç için elinizdeki altını satabileceğiniz alış fiyatına yakın bir değer kullanılmalıdır.",
  },
  {
    question: "Vergi hesaplaması araçta var mı?",
    answer:
      "Hayır. Araç ortalama maliyet ve getiri hesabına odaklanır.",
  },
  {
    question: "Sonuçlar yatırım tavsiyesi midir?",
    answer:
      "Hayır. Sonuçlar yalnızca girilen verilere dayalı matematiksel tahminlerdir.",
  },
];

export default function AltinAverageCostPage() {
  const relatedCalculators = getRelatedCalculators(canonicalPath, 6);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "Altın Ortalama Maliyet Hesaplama",
      description:
        "Gram, çeyrek, yarım, tam ve Cumhuriyet altını alımlarının ortalama maliyetini hesaplayan ücretsiz araç.",
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
          name: "Altın Ortalama Maliyet Hesaplama",
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
        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-amber-50/50 to-slate-50">
          <div className="pointer-events-none absolute -left-24 top-14 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-yellow-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-10">
            <Breadcrumb
              items={[
                { label: "Hesaplamalar", href: "/hesaplamalar" },
                { label: calculator.title },
              ]}
            />

            <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-extrabold text-amber-800 shadow-sm">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Altın ve Değerli Maden Hesaplama
                </span>

                <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                  Altın Ortalama Maliyetinizi
                  <span className="block bg-gradient-to-r from-amber-600 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                    Masraflar Dahil Hesaplayın
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  Gram, çeyrek, yarım, tam ve Cumhuriyet altını alımlarınızı
                  ekleyin; toplam yatırımınızı, ortalama maliyetinizi, güncel
                  kâr-zararınızı ve yeni alım sonrası maliyetinizi görün.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Gram ve ziynet altın desteği",
                    "Masraf dahil maliyet",
                    "ROI ve kâr-zarar",
                    "Yeni alım simülasyonu",
                  ].map((item) => (
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
                    title="Altın Ortalama Maliyet Hesaplama | HesapRehberi"
                    description="Gram, çeyrek, yarım ve tam altın alımlarının ortalama maliyetini ücretsiz hesaplayın."
                  />
                </div>
              </div>

              <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25">
                    <Gem className="h-7 w-7" aria-hidden="true" />
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                    Ücretsiz araç
                  </span>
                </div>

                <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                  Hesaplama sonucunda neleri görürsünüz?
                </h2>

                <ul className="mt-6 space-y-4">
                  {[
                    "Toplam altın miktarı",
                    "Toplam yatırım tutarı",
                    "Masraflar dahil ortalama maliyet",
                    "Güncel portföy değeri",
                    "ROI ve kâr-zarar",
                    "Yeni alım sonrası ortalama",
                  ].map((item) => (
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
                  className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-amber-700"
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
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-amber-700">
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
                      className="group flex items-start gap-2 rounded-xl px-3 py-2.5 text-sm font-bold leading-5 text-slate-600 transition hover:bg-amber-50 hover:text-amber-800"
                    >
                      <ChevronRight
                        className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-amber-700"
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
                <AltinAverageCostCalculator />
              </section>

              <ContentSection
                id="ortalama-maliyet-nedir"
                icon={WalletCards}
                eyebrow="Temel kavram"
                title="Altın ortalama maliyeti nedir?"
              >
                <p>
                  Altın ortalama maliyeti, farklı tarihlerde ve farklı
                  fiyatlardan yapılan altın alımlarının toplam maliyetinin
                  toplam miktara bölünmesiyle bulunan birim maliyettir.
                </p>
                <p>
                  Gram altın için gram, çeyrek ve tam altın gibi ürünlerde ise
                  adet bazlı ağırlıklı ortalama hesaplanır. İşçilik, komisyon ve
                  diğer ek masraflar da toplam maliyete dahil edilebilir.
                </p>
                <InfoBox
                  tone="amber"
                  icon={Info}
                  title="Basit ortalama yeterli değildir"
                >
                  Farklı miktarlarda yapılan alımlar aynı ağırlığa sahip değildir.
                  Bu nedenle fiyatların aritmetik ortalaması yerine ağırlıklı
                  ortalama kullanılmalıdır.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="nasil-hesaplanir"
                icon={Calculator}
                eyebrow="Hesaplama yöntemi"
                title="Altın maliyeti nasıl hesaplanır?"
              >
                <p>
                  Her alım için miktar ile birim alış fiyatı çarpılır. İşlem
                  masrafı, kuyumcu farkı veya komisyon varsa toplam maliyete
                  eklenir. Tüm maliyetler toplanıp toplam miktara bölünür.
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <StepCard number="01" title="Alım maliyetini bul" description="Miktarı birim fiyatla çarpın ve ek masrafları dahil edin." />
                  <StepCard number="02" title="Toplamları birleştir" description="Tüm alımların miktarlarını ve maliyetlerini ayrı ayrı toplayın." />
                  <StepCard number="03" title="Toplam miktara böl" description="Toplam yatırım maliyetini toplam gram veya adet miktarına bölün." />
                </div>
              </ContentSection>

              <ContentSection
                id="formul"
                icon={Percent}
                eyebrow="Matematik"
                title="Altın ortalama maliyet formülü"
              >
                <FormulaBox label="Masraflar dahil ortalama maliyet" formula="Ortalama Maliyet = Toplam Alış Maliyeti ÷ Toplam Altın Miktarı" />
                <FormulaBox label="Toplam alış maliyeti" formula="Toplam Maliyet = Σ (Miktar × Alış Fiyatı + Masraf)" />
              </ContentSection>

              <ContentSection
                id="makas"
                icon={Scale}
                eyebrow="Alış-satış farkı"
                title="Kuyumcu makası altın maliyetini nasıl etkiler?"
              >
                <p>
                  Kuyumcunun altını sattığı fiyat ile geri aldığı fiyat
                  arasındaki fark makas olarak adlandırılır. Kısa vadeli
                  işlemlerde bu fark getiri üzerinde belirgin etki yaratabilir.
                </p>
                <p>
                  Güncel portföy değeri hesaplanırken elinizdeki altını
                  satabileceğiniz alış fiyatına yakın bir değer kullanmak daha
                  gerçekçi sonuç verir.
                </p>
              </ContentSection>

              <ContentSection
                id="iscilik"
                icon={CircleDollarSign}
                eyebrow="Ek maliyetler"
                title="İşçilik ve diğer masraflar"
              >
                <p>
                  Bilezik, kolye ve takı ürünlerinde saf altın değerine ek olarak
                  işçilik bedeli bulunabilir. Geri satışta işçilik bedelinin
                  tamamı korunmayabilir.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard icon={Gem} title="Düşük işçilikli ürünler" description="Yatırım amaçlı ürünlerde maliyet takibi daha şeffaf olabilir." />
                  <FeatureCard icon={Scale} title="Yüksek işçilikli ürünler" description="Takı değeri yüksek olsa da geri satış fiyatı farklılaşabilir." />
                </div>
              </ContentSection>

              <ContentSection
                id="gram-altin"
                icon={Coins}
                eyebrow="Gram bazlı yatırım"
                title="Gram altın ortalama maliyeti"
              >
                <p>
                  Gram altın alımlarında miktar doğrudan gram olarak girilir.
                  Farklı günlerde alınan toplam gram miktarı ile toplam yatırım
                  tutarı üzerinden ortalama maliyet bulunur.
                </p>
              </ContentSection>

              <ContentSection
                id="ziynet-altin"
                icon={Gem}
                eyebrow="Adet bazlı yatırım"
                title="Çeyrek, yarım ve tam altın maliyeti"
              >
                <p>
                  Ziynet altınlarında maliyet genellikle adet bazında takip
                  edilir. Aynı tür ürünlerin farklı fiyatlardan alımları tek bir
                  ortalama maliyette birleştirilebilir.
                </p>
                <InfoBox tone="amber" icon={AlertTriangle} title="Farklı ürünleri tek satırda birleştirmeyin">
                  Çeyrek, yarım, tam ve Cumhuriyet altını farklı ürünlerdir.
                  Her biri için ayrı ortalama maliyet hesabı yapmak daha doğrudur.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="ornek"
                icon={BarChart3}
                eyebrow="Uygulamalı örnek"
                title="Örnek gram altın maliyet hesabı"
              >
                <ResponsiveTable
                  headers={["İşlem", "Miktar", "Birim fiyat", "Masraf", "Toplam maliyet"]}
                  rows={exampleRows}
                />
                <FormulaBox label="Örnek sonuç" formula="42.820 TL ÷ 18 gram = 2.378,89 TL ortalama maliyet" />
              </ContentSection>

              <ContentSection
                id="maliyet-dusurme"
                icon={TrendingDown}
                eyebrow="Yeni alım senaryosu"
                title="Altında maliyet düşürme nasıl çalışır?"
              >
                <p>
                  Ortalama maliyetin altında fiyattan yeni alım yapılması
                  ağırlıklı ortalamayı aşağı çekebilir. Etki, yeni alım miktarına
                  ve fiyatına bağlıdır.
                </p>
                <ResponsiveTable
                  headers={["Senaryo", "Toplam miktar", "Toplam yatırım", "Yeni ortalama"]}
                  rows={scenarioRows}
                />
                <InfoBox tone="rose" icon={AlertTriangle} title="Toplam risk artabilir">
                  Ortalama maliyet azalırken yatırılan toplam sermaye büyür.
                  Fiyatın düşmeye devam etmesi hâlinde toplam zarar artabilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="roi"
                icon={TrendingUp}
                eyebrow="Performans"
                title="Altında kâr-zarar ve ROI hesabı"
              >
                <FormulaBox label="Kâr veya zarar" formula="Güncel Portföy Değeri − Toplam Yatırım Maliyeti" />
                <FormulaBox label="ROI yüzdesi" formula="(Kâr veya Zarar ÷ Toplam Yatırım Maliyeti) × 100" />
              </ContentSection>

              <ContentSection
                id="basa-bas"
                icon={Target}
                eyebrow="Kritik seviye"
                title="Altında başa baş fiyatı"
              >
                <p>
                  Başa baş fiyatı, masraflar dahil ortalama maliyetinize eşit
                  olan yaklaşık birim fiyattır. Satış makası nedeniyle gerçek
                  başa baş seviyesi biraz daha yüksek olabilir.
                </p>
              </ContentSection>

              <ContentSection
                id="kur-ons"
                icon={Landmark}
                eyebrow="Piyasa dinamikleri"
                title="Ons altın ve döviz kurunun etkisi"
              >
                <p>
                  Gram altın fiyatı genel olarak ons altın fiyatı ve USD/TRY
                  kurunun ortak etkisiyle şekillenir. Ons sabit kalsa bile kur
                  değişimi gram altını etkileyebilir.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard icon={TrendingUp} title="Ons etkisi" description="Dünya piyasalarındaki altın fiyatı gram altının temel bileşenidir." />
                  <FeatureCard icon={CircleDollarSign} title="Kur etkisi" description="Dolar/TL değişimi yerel gram altın fiyatını etkiler." />
                </div>
              </ContentSection>

              <ContentSection
                id="fiziki-banka"
                icon={PieChart}
                eyebrow="Yatırım kanalları"
                title="Fiziki altın ve banka altını farkı"
              >
                <p>
                  Fiziki altında kuyumcu makası, saklama ve güvenlik; banka
                  altınında ise banka makası, işlem saatleri ve platform
                  koşulları önemlidir.
                </p>
              </ContentSection>

              <ContentSection
                id="riskler"
                icon={ShieldCheck}
                eyebrow="Risk yönetimi"
                title="Altın yatırımında önemli riskler"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FeatureCard icon={TrendingDown} title="Fiyat dalgalanması" description="Altın fiyatı kısa vadede düşebilir." />
                  <FeatureCard icon={Scale} title="Makas riski" description="Alış-satış farkı kısa vadeli getiriyi azaltabilir." />
                  <FeatureCard icon={Gem} title="İşçilik kaybı" description="Takı ürünlerinde işçilik geri satışta korunmayabilir." />
                  <FeatureCard icon={PieChart} title="Yoğunlaşma riski" description="Tüm birikimi tek varlığa bağlamak portföy riskini artırabilir." />
                </div>
              </ContentSection>

              <ContentSection
                id="hatalar"
                icon={ListChecks}
                eyebrow="Kontrol listesi"
                title="Altın maliyeti hesaplarken sık yapılan hatalar"
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
                          <h3 className="font-black text-slate-950">{mistake.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">{mistake.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ContentSection>

              <section className="rounded-[2rem] bg-gradient-to-br from-amber-500 via-yellow-600 to-slate-950 p-8 text-white shadow-xl sm:p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-amber-100">
                      <Calculator className="h-4 w-4" aria-hidden="true" />
                      Ücretsiz altın aracı
                    </div>
                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      Altın ortalama maliyetinizi şimdi hesaplayın
                    </h2>
                    <p className="mt-3 leading-7 text-amber-100">
                      Alım miktarlarını, fiyatları ve masrafları girin; toplam
                      yatırımınızı ve yeni alım sonrası ortalamanızı görün.
                    </p>
                  </div>

                  <a
                    href="#hesaplama-araci"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-bold text-amber-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-amber-50"
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
                <div className="grid gap-4 sm:grid-cols-2">
                  {relatedCalculators.map((relatedCalculator) => {
                    const Icon = relatedCalculator.icon;

                    return (
                      <Link
                        key={relatedCalculator.href}
                        href={relatedCalculator.href}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50"
                      >
                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-amber-700 shadow-sm ring-1 ring-slate-200">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <div>
                            <h3 className="font-black text-slate-950 transition group-hover:text-amber-800">
                              {relatedCalculator.shortTitle ?? relatedCalculator.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                              {relatedCalculator.description}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-amber-700">
                              Aracı aç
                              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
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
                title="Altın ortalama maliyet hakkında sık sorulan sorular"
              >
                <div className="space-y-3">
                  {faqItems.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-amber-200 open:bg-amber-50/50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-black text-slate-950">
                        <span className="flex items-start gap-3">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-amber-700 shadow-sm ring-1 ring-slate-200">
                            {index + 1}
                          </span>
                          {item.question}
                        </span>
                        <span className="text-xl font-medium text-amber-700 transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="px-5 pb-5 pl-15 text-sm leading-7 text-slate-600">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </ContentSection>

              <InfoBox tone="rose" icon={AlertTriangle} title="Finansal bilgilendirme">
                Bu sayfadaki sonuçlar girilen verilere dayalı matematiksel
                tahminlerdir. Altın fiyatları değişebilir. İçerikler yatırım
                tavsiyesi veya getiri garantisi değildir.
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
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700">
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
  tone: "amber" | "rose";
  icon: typeof Info;
  title: string;
  children: React.ReactNode;
};

function InfoBox({ tone, icon: Icon, title, children }: InfoBoxProps) {
  const toneClasses =
    tone === "amber"
      ? {
          wrapper: "border-amber-200 bg-amber-50",
          icon: "bg-amber-100 text-amber-700",
          title: "text-amber-950",
          text: "text-amber-900",
        }
      : {
          wrapper: "border-rose-200 bg-rose-50",
          icon: "bg-rose-100 text-rose-700",
          title: "text-rose-950",
          text: "text-rose-900",
        };

  return (
    <div className={`rounded-2xl border p-5 ${toneClasses.wrapper}`}>
      <div className="flex items-start gap-4">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${toneClasses.icon}`}>
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

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="text-sm font-black text-amber-700">{number}</span>
      <h3 className="mt-3 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Calculator;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-amber-700 shadow-sm ring-1 ring-slate-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function FormulaBox({
  label,
  formula,
}: {
  label: string;
  formula: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-white">
      <div className="border-b border-white/10 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.13em] text-amber-200">
        {label}
      </div>
      <div className="overflow-x-auto px-5 py-5 font-mono text-sm font-bold leading-7 text-white sm:text-base">
        {formula}
      </div>
    </div>
  );
}

function ResponsiveTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col" className="whitespace-nowrap px-4 py-3 font-extrabold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`} className="transition hover:bg-amber-50/50">
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