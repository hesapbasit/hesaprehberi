import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  Banknote,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Coins,
  Landmark,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  ReceiptText,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const pageTitle = "Vadeli Mevduat Hesaplama Rehberi";
const pageDescription =
  "Vadeli mevduat nasıl hesaplanır? Brüt faiz, stopaj, net kazanç, vade sonu tutarı, vade karşılaştırması ve reel getiri hesaplarını örneklerle öğrenin.";
const canonicalPath = "/blog/vadeli-mevduat-hesaplama-rehberi";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "vadeli mevduat hesaplama",
    "vadeli mevduat faizi hesaplama",
    "mevduat getirisi hesaplama",
    "vade sonu tutarı hesaplama",
    "net mevduat kazancı",
    "brüt mevduat faizi",
    "mevduat stopaj hesaplama",
    "32 günlük mevduat hesaplama",
    "46 günlük mevduat hesaplama",
    "92 günlük mevduat hesaplama",
    "vadeli hesap getirisi",
    "mevduat vade karşılaştırma",
    "mevduat yenileme",
    "mevduat reel getiri",
  ],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    type: "article",
    locale: "tr_TR",
    url: canonicalUrl,
    siteName: "HesapRehberi",
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const tableOfContents = [
  { id: "vadeli-mevduat-nedir", label: "Vadeli mevduat nedir?" },
  { id: "temel-kavramlar", label: "Temel kavramlar" },
  { id: "hesaplama-formulu", label: "Hesaplama formülü" },
  { id: "brut-net-stopaj", label: "Brüt faiz, net faiz ve stopaj" },
  { id: "gun-esasi", label: "360 ve 365 gün esası" },
  { id: "ornek-hesaplama", label: "Örnek hesaplama" },
  { id: "vade-karsilastirma", label: "Vade karşılaştırması" },
  { id: "faiz-orani-karsilastirma", label: "Faiz oranı karşılaştırması" },
  { id: "yenileme", label: "Yenileme ve bileşik getiri" },
  { id: "erken-bozma", label: "Erken bozma" },
  { id: "reel-getiri", label: "Reel getiri" },
  { id: "banka-teklifleri", label: "Banka tekliflerini karşılaştırma" },
  { id: "sik-hatalar", label: "Sık yapılan hatalar" },
  { id: "dikkat-edilecekler", label: "Dikkat edilmesi gerekenler" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const faqItems = [
  {
    question: "Vadeli mevduat nedir?",
    answer:
      "Vadeli mevduat, belirli bir tutarın belirli bir süre boyunca bankada tutulması karşılığında faiz geliri sağlayan hesap türüdür. Vade sonunda ana para ile net faiz kazancı birlikte hesaba geçer.",
  },
  {
    question: "Vadeli mevduat faizi nasıl hesaplanır?",
    answer:
      "Ana para, yıllık brüt faiz oranı, vade gün sayısı ve bankanın kullandığı gün esası kullanılarak brüt faiz bulunur. Brüt faizden stopaj düşüldüğünde net kazanç hesaplanır.",
  },
  {
    question: "Vade sonu tutarı nasıl hesaplanır?",
    answer:
      "Vade sonu tutarı, başlangıç ana parasına stopaj sonrası net faiz kazancının eklenmesiyle bulunur.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, vergi ve kesintiler uygulanmadan önceki kazançtır. Net faiz ise stopaj gibi kesintiler düşüldükten sonra hesaba geçen gerçek kazançtır.",
  },
  {
    question: "Stopaj mevduat kazancını nasıl etkiler?",
    answer:
      "Stopaj brüt faiz üzerinden kesildiği için net faiz kazancını azaltır. Bu nedenle banka tekliflerini yalnızca brüt oranla değil, net vade sonu tutarıyla karşılaştırmak gerekir.",
  },
  {
    question: "32 günlük mevduat nasıl hesaplanır?",
    answer:
      "Yıllık brüt faiz oranı 32 günlük süreye orantılanır. Bulunan brüt faizden stopaj düşülür ve net kazanç ana paraya eklenir.",
  },
  {
    question: "360 ve 365 gün esası neden farklı sonuç verir?",
    answer:
      "Faiz formülündeki payda değiştiği için aynı ana para, oran ve vade için dönemsel kazanç farklılaşır. 360 gün esası aynı koşullarda biraz daha yüksek sonuç üretebilir.",
  },
  {
    question: "Vadeli hesap otomatik yenilenir mi?",
    answer:
      "Bu durum hesap açılışındaki vade sonu talimatına bağlıdır. Otomatik yenileme seçildiyse ana para veya ana para ile faiz toplamı güncel oran üzerinden yeniden vadeye bağlanabilir.",
  },
  {
    question: "Faiz ana paraya eklenirse ne olur?",
    answer:
      "Net faiz ana paraya eklenerek hesap yeniden bağlanırsa sonraki dönem daha yüksek bakiye faiz kazanır. Bu durum bileşik getiri etkisi oluşturur.",
  },
  {
    question: "Vadeli mevduat erken bozulursa faiz alınır mı?",
    answer:
      "Ürünün sözleşme koşullarına göre faiz tamamen kaybedilebilir, daha düşük bir oran uygulanabilir veya farklı bir erken çekim kuralı devreye girebilir.",
  },
  {
    question: "Uzun vade her zaman daha avantajlı mıdır?",
    answer:
      "Hayır. Uzun vade oranı sabitleme avantajı sunabilir ancak faizlerin yükselmesi durumunda daha yüksek oranlardan yararlanmayı geciktirebilir. Likidite ihtiyacı da dikkate alınmalıdır.",
  },
  {
    question: "En yüksek faiz oranı her zaman en yüksek net kazancı sağlar mı?",
    answer:
      "Her zaman değil. Stopaj, vade gün sayısı, gün esası, kampanya üst limiti, yeni müşteri şartı ve valör uygulaması net sonucu değiştirebilir.",
  },
  {
    question: "Mevduatta reel getiri nasıl hesaplanır?",
    answer:
      "Net mevduat getirisi enflasyon etkisinden arındırılır. Net getiri enflasyonun üzerinde kalırsa pozitif, altında kalırsa negatif reel getiri oluşabilir.",
  },
  {
    question: "Günlük mevduat faizi hesaplanabilir mi?",
    answer:
      "Evet. Yıllık brüt faiz oranı bankanın kullandığı gün esasına bölünerek yaklaşık günlük oran bulunabilir. Kesin sonuç için valör ve yuvarlama kuralları da dikkate alınmalıdır.",
  },
  {
    question: "Mevduat teklifleri nasıl karşılaştırılmalıdır?",
    answer:
      "Aynı ana para ve aynı vade süresi için net faiz kazancı, vade sonu tutarı, kampanya şartları ve yenileme koşulları birlikte karşılaştırılmalıdır.",
  },
  {
    question: "Hesaplama sonucu neden bankanın sonucundan farklı çıkabilir?",
    answer:
      "Valör tarihi, gün esası, stopaj oranı, yuvarlama yöntemi, vade başlangıç ve bitiş saatleri ile bankanın ürün kuralları farklılık oluşturabilir.",
  },
  {
    question: "Vadeli mevduatta faiz oranı vade boyunca değişir mi?",
    answer:
      "Sabit oranlı standart vadeli mevduatta oran çoğunlukla vade boyunca korunur. Yenileme tarihinde ise bankanın o günkü güncel oranı uygulanabilir.",
  },
  {
    question: "Bu rehber yatırım tavsiyesi midir?",
    answer:
      "Hayır. Bu içerik genel bilgilendirme ve hesaplama amacı taşır. Banka seçimi ve yatırım kararı kişisel koşullara göre değerlendirilmelidir.",
  },
];

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  inLanguage: "tr-TR",
  mainEntityOfPage: canonicalUrl,
  author: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
};

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
      name: "Blog",
      item: "https://https://hesaprehberionline.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: pageTitle,
      item: canonicalUrl,
    },
  ],
};

const sampleRows = [
  {
    principal: "100.000 TL",
    rate: "%40",
    term: "32 gün",
    gross: "3.506,85 TL",
    withholding: "526,03 TL",
    net: "2.980,82 TL",
    maturity: "102.980,82 TL",
  },
  {
    principal: "250.000 TL",
    rate: "%42",
    term: "45 gün",
    gross: "12.945,21 TL",
    withholding: "1.941,78 TL",
    net: "11.003,43 TL",
    maturity: "261.003,43 TL",
  },
  {
    principal: "500.000 TL",
    rate: "%44",
    term: "92 gün",
    gross: "55.452,05 TL",
    withholding: "8.317,81 TL",
    net: "47.134,24 TL",
    maturity: "547.134,24 TL",
  },
];

export default function VadeliMevduatHesaplamaRehberiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />

      <main className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: pageTitle },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_390px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                  <Sparkles className="h-4 w-4" />
                  Mevduat kazancını doğru yorumlama rehberi
                </div>

                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {pageTitle}
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-emerald-100 sm:text-lg">
                  Ana para, yıllık faiz oranı, vade süresi ve stopaj
                  bilgileriyle brüt faiz, net kazanç ve vade sonu
                  bakiyesini adım adım hesaplayın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroBadge>Brüt ve net faiz</HeroBadge>
                  <HeroBadge>Stopaj etkisi</HeroBadge>
                  <HeroBadge>Vade karşılaştırması</HeroBadge>
                  <HeroBadge>Reel getiri</HeroBadge>
                </div>

                <Link
                  href="/hesaplamalar/vadeli-mevduat-hesaplama"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-emerald-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
                >
                  Vadeli mevduat hesapla
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-[30px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-200">
                  <Landmark className="h-8 w-8" />
                </div>

                <h2 className="mt-5 text-xl font-black text-white">
                  Hesaplamanın dört temel bileşeni
                </h2>

                <div className="mt-5 space-y-3">
                  <HeroMetric label="Ana para" value="Başlangıç tutarı" />
                  <HeroMetric label="Faiz oranı" value="Yıllık brüt oran" />
                  <HeroMetric label="Vade" value="Gün sayısı" />
                  <HeroMetric label="Kesinti" value="Stopaj" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <ShareButtons
              title={pageTitle}
              description={pageDescription}
              url={canonicalUrl}
            />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="flex items-center gap-2 font-black text-slate-950">
                  <ReceiptText className="h-5 w-5 text-emerald-700" />
                  İçindekiler
                </h2>

                <nav className="mt-5 space-y-1">
                  {tableOfContents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex gap-3 rounded-xl px-3 py-2 text-sm leading-6 text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900"
                    >
                      <span className="font-bold text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </nav>
              </div>

              <div className="mt-5 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
                <Calculator className="h-7 w-7 text-emerald-700" />
                <h3 className="mt-4 font-black text-emerald-950">
                  Hızlı hesaplama
                </h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Ana para, faiz oranı, vade ve stopaj bilgilerini girerek
                  sonucu saniyeler içinde görün.
                </p>
                <Link
                  href="/hesaplamalar/vadeli-mevduat-hesaplama"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-800"
                >
                  Hesaplama aracına git
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>

            <article className="min-w-0 space-y-8">
              <ArticleSection
                id="vadeli-mevduat-nedir"
                icon={<Landmark className="h-6 w-6" />}
                title="Vadeli mevduat nedir?"
              >
                <p>
                  Vadeli mevduat, belirli bir miktar paranın önceden
                  belirlenen bir süre boyunca bankada tutulması karşılığında
                  faiz geliri elde edilen hesap türüdür. Hesap açılırken ana
                  para, vade süresi, yıllık brüt faiz oranı ve vade sonu
                  talimatı belirlenir.
                </p>

                <p>
                  Vade süresi tamamlandığında banka, sözleşmede belirtilen
                  koşullara göre brüt faiz kazancını hesaplar. Brüt faizden
                  stopaj düşüldükten sonra kalan net faiz ana paraya eklenir.
                  Böylece vade sonu bakiyesi ortaya çıkar.
                </p>

                <p>
                  Vadeli hesaplar genellikle 32 gün, 46 gün, 92 gün, 181 gün
                  veya 365 gün gibi farklı sürelerle açılabilir. Bankalar
                  kampanya dönemlerinde farklı vadelere farklı faiz oranları
                  uygulayabilir. Bu nedenle yalnızca ilan edilen oranı değil,
                  aynı ana para için oluşan net kazancı karşılaştırmak gerekir.
                </p>

                <InfoBox title="Temel ayrım">
                  Bankanın ilan ettiği oran çoğunlukla yıllık brüt faiz
                  oranıdır. Hesabınıza geçecek gerçek kazanç ise vade süresi ve
                  stopaj kesintisi dikkate alındıktan sonra belirlenir.
                </InfoBox>
              </ArticleSection>

              <ArticleSection
                id="temel-kavramlar"
                icon={<ListChecks className="h-6 w-6" />}
                title="Vadeli mevduat hesabındaki temel kavramlar"
              >
                <p>
                  Hesaplama sonucunu doğru yorumlayabilmek için ana para,
                  yıllık faiz oranı, vade, brüt faiz, stopaj ve net faiz
                  kavramlarını birbirinden ayırmak gerekir.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <DefinitionCard
                    title="Ana para"
                    text="Vadeli hesaba yatırılan başlangıç tutarıdır. Faiz hesabının temelini oluşturur."
                  />
                  <DefinitionCard
                    title="Yıllık brüt faiz"
                    text="Banka tarafından yıllık ve kesinti öncesi olarak ilan edilen faiz oranıdır."
                  />
                  <DefinitionCard
                    title="Vade"
                    text="Paranın vadeli hesapta kalacağı süredir ve çoğunlukla gün sayısıyla ifade edilir."
                  />
                  <DefinitionCard
                    title="Brüt faiz"
                    text="Stopaj ve diğer olası kesintiler uygulanmadan önce oluşan faiz kazancıdır."
                  />
                  <DefinitionCard
                    title="Stopaj"
                    text="Brüt faiz kazancı üzerinden kaynağında kesilen vergidir."
                  />
                  <DefinitionCard
                    title="Net faiz"
                    text="Stopaj düşüldükten sonra hesabınıza geçen gerçek faiz geliridir."
                  />
                </div>

                <TipBox title="Karşılaştırmada doğru ölçüt">
                  İki banka teklifini değerlendirirken yalnızca yıllık brüt
                  faiz oranını karşılaştırmak yerine aynı ana para ve aynı
                  vade için oluşan net faiz kazancına bakın.
                </TipBox>
              </ArticleSection>

              <ArticleSection
                id="hesaplama-formulu"
                icon={<Calculator className="h-6 w-6" />}
                title="Vadeli mevduat hesaplama formülü"
              >
                <p>
                  Standart vadeli mevduat hesabında brüt faiz; ana para,
                  yıllık brüt faiz oranı, vade gün sayısı ve bankanın kullandığı
                  gün esası üzerinden hesaplanır.
                </p>

                <FormulaBox>
                  <span>Brüt faiz = Ana para × (Yıllık faiz ÷ 100)</span>
                  <span>× (Vade günü ÷ Gün esası)</span>
                  <span className="mt-4">Stopaj = Brüt faiz × (Stopaj oranı ÷ 100)</span>
                  <span>Net faiz = Brüt faiz − Stopaj</span>
                  <span>Vade sonu tutarı = Ana para + Net faiz</span>
                </FormulaBox>

                <p>
                  Örneğin yıllık yüzde 40 faiz oranı formülde 0,40 olarak
                  kullanılır. Vade 32 gün ve gün esası 365 ise yıllık oran
                  32 günlük süreye orantılanır.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <StepCard
                    number="1"
                    title="Brüt faizi bulun"
                    text="Ana para, yıllık faiz ve vade gününü kullanın."
                  />
                  <StepCard
                    number="2"
                    title="Stopajı hesaplayın"
                    text="Brüt faiz üzerinden geçerli stopaj oranını uygulayın."
                  />
                  <StepCard
                    number="3"
                    title="Net sonucu bulun"
                    text="Stopajı brüt faizden çıkarıp ana paraya ekleyin."
                  />
                </div>

                <ToolLink
                  href="/hesaplamalar/vadeli-mevduat-hesaplama"
                  title="Vadeli mevduat hesaplama aracı"
                  description="Brüt faiz, stopaj, net kazanç ve vade sonu tutarını otomatik hesaplayın."
                />
              </ArticleSection>

              <ArticleSection
                id="brut-net-stopaj"
                icon={<Scale className="h-6 w-6" />}
                title="Brüt faiz, net faiz ve stopaj arasındaki fark"
              >
                <p>
                  Brüt faiz, bankanın faiz oranı ve vade üzerinden oluşturduğu
                  kesinti öncesi kazançtır. Stopaj bu brüt kazanç üzerinden
                  hesaplanır. Net faiz ise stopaj düşüldükten sonra hesabınıza
                  geçen tutardır.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <MetricCard
                    icon={<BadgePercent className="h-6 w-6" />}
                    title="Brüt faiz"
                    text="Kesinti uygulanmadan önceki toplam faiz kazancı"
                  />
                  <MetricCard
                    icon={<ReceiptText className="h-6 w-6" />}
                    title="Stopaj"
                    text="Brüt faiz üzerinden yapılan vergi kesintisi"
                  />
                  <MetricCard
                    icon={<CircleDollarSign className="h-6 w-6" />}
                    title="Net faiz"
                    text="Hesabınıza geçen gerçek faiz geliri"
                  />
                </div>

                <p>
                  Stopaj oranı ürünün türüne, vadesine ve yürürlükteki mevzuata
                  göre değişebilir. Bu nedenle uzun süre önce hazırlanmış bir
                  örnekteki oranı doğrudan kullanmak yerine güncel oranı kontrol
                  etmek önemlidir.
                </p>

                <WarningBox>
                  İnternette görülen örnek tablolar güncel stopaj oranını
                  yansıtmayabilir. Kesin sonuç için bankanın ürün sayfasını ve
                  yürürlükteki vergi uygulamasını kontrol edin.
                </WarningBox>

                <ToolLink
                  href="/hesaplamalar/stopaj-hesaplama"
                  title="Stopaj hesaplama aracı"
                  description="Brüt faiz üzerinden oluşan stopajı ve net kazancı ayrı ayrı görün."
                />
              </ArticleSection>

              <ArticleSection
                id="gun-esasi"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Mevduat hesabında 360 ve 365 gün esası"
              >
                <p>
                  Yıllık faiz oranı vade süresine çevrilirken formülde 360 veya
                  365 gün esası kullanılabilir. Bankanın ürün şartlarında hangi
                  yöntemi kullandığı belirtilmelidir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[680px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Özellik</th>
                          <th className="px-5 py-4">360 gün esası</th>
                          <th className="px-5 py-4">365 gün esası</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <ComparisonRow
                          label="Formüldeki payda"
                          first="360"
                          second="365"
                        />
                        <ComparisonRow
                          label="Aynı koşullarda dönemsel faiz"
                          first="Biraz daha yüksek"
                          second="Biraz daha düşük"
                        />
                        <ComparisonRow
                          label="Kullanım"
                          first="Ürüne göre değişir"
                          second="Ürüne göre değişir"
                        />
                        <ComparisonRow
                          label="Kontrol edilmesi gereken"
                          first="Banka sözleşmesi"
                          second="Banka sözleşmesi"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>

                <InfoBox title="Neden küçük fark oluşur?">
                  Vade gün sayısı aynı kaldığı halde formüldeki payda küçüldükçe
                  dönemsel oran yükselir. Bu nedenle 360 gün esası aynı faiz
                  oranında 365 gün esasına göre biraz daha yüksek brüt kazanç
                  oluşturabilir.
                </InfoBox>
              </ArticleSection>

              <ArticleSection
                id="ornek-hesaplama"
                icon={<Banknote className="h-6 w-6" />}
                title="Örnek vadeli mevduat hesaplama"
              >
                <p>
                  Aşağıdaki örnek, 100.000 TL ana para, yıllık yüzde 40 brüt
                  faiz, 32 gün vade, 365 gün esası ve yüzde 15 stopaj varsayımı
                  kullanılarak hazırlanmıştır.
                </p>

                <FormulaBox>
                  <span>Brüt faiz = 100.000 × 0,40 × (32 ÷ 365)</span>
                  <span>Brüt faiz = 3.506,85 TL</span>
                  <span className="mt-4">Stopaj = 3.506,85 × 0,15</span>
                  <span>Stopaj = 526,03 TL</span>
                  <span className="mt-4">Net faiz = 3.506,85 − 526,03</span>
                  <span>Net faiz = 2.980,82 TL</span>
                  <span className="mt-4">Vade sonu = 100.000 + 2.980,82</span>
                  <span>Vade sonu = 102.980,82 TL</span>
                </FormulaBox>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-4 py-4">Ana para</th>
                          <th className="px-4 py-4">Yıllık faiz</th>
                          <th className="px-4 py-4">Vade</th>
                          <th className="px-4 py-4">Brüt faiz</th>
                          <th className="px-4 py-4">Stopaj</th>
                          <th className="px-4 py-4">Net faiz</th>
                          <th className="px-4 py-4">Vade sonu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {sampleRows.map((row) => (
                          <tr key={`${row.principal}-${row.term}`}>
                            <td className="px-4 py-4 font-bold text-slate-950">
                              {row.principal}
                            </td>
                            <td className="px-4 py-4 text-slate-600">
                              {row.rate}
                            </td>
                            <td className="px-4 py-4 text-slate-600">
                              {row.term}
                            </td>
                            <td className="px-4 py-4 text-slate-600">
                              {row.gross}
                            </td>
                            <td className="px-4 py-4 text-slate-600">
                              {row.withholding}
                            </td>
                            <td className="px-4 py-4 font-semibold text-emerald-700">
                              {row.net}
                            </td>
                            <td className="px-4 py-4 font-bold text-slate-950">
                              {row.maturity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <WarningBox>
                  Tablo yalnızca hesaplama mantığını göstermek için hazırlanmış
                  örnek değerlerden oluşur. Güncel banka teklifi veya yatırım
                  önerisi değildir.
                </WarningBox>
              </ArticleSection>

              <ArticleSection
                id="vade-karsilastirma"
                icon={<Clock3 className="h-6 w-6" />}
                title="Kısa ve uzun vadeli mevduat nasıl karşılaştırılır?"
              >
                <p>
                  Kısa vade, faiz oranlarındaki değişikliklere daha sık uyum
                  sağlama esnekliği sunar. Uzun vade ise mevcut oranı daha uzun
                  süre sabitleme avantajı sağlayabilir. Hangisinin daha iyi
                  olduğu faiz beklentisine, nakit ihtiyacına ve bankanın
                  tekliflerine bağlıdır.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <ProsConsCard
                    title="Kısa vadenin güçlü yönleri"
                    icon={<RefreshCw className="h-6 w-6" />}
                    items={[
                      "Faiz değişimlerine daha sık uyum sağlama",
                      "Paraya daha kısa sürede erişebilme",
                      "Farklı banka tekliflerine geçiş esnekliği",
                    ]}
                  />
                  <ProsConsCard
                    title="Uzun vadenin güçlü yönleri"
                    icon={<LockKeyhole className="h-6 w-6" />}
                    items={[
                      "Mevcut oranı daha uzun süre koruma",
                      "Daha az yenileme işlemi",
                      "Nakit akışını önceden planlama kolaylığı",
                    ]}
                  />
                </div>

                <p>
                  Vade karşılaştırması yaparken her seçenek için yıllık oranı
                  doğrudan kıyaslamak yeterli değildir. Aynı ana para için net
                  faiz, vade sonu tutarı ve olası yenileme senaryosu birlikte
                  değerlendirilmelidir.
                </p>

                <ToolLink
                  href="/hesaplamalar/mevduat-vade-karsilastirma"
                  title="Mevduat vade karşılaştırma aracı"
                  description="Farklı vade seçeneklerinin net kazançlarını aynı ekranda karşılaştırın."
                />
              </ArticleSection>

              <ArticleSection
                id="faiz-orani-karsilastirma"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Farklı mevduat faiz oranları nasıl karşılaştırılır?"
              >
                <p>
                  Bankaların aynı vade için sunduğu oranlar farklı olabilir.
                  Ancak yüksek görünen oran yalnızca belirli tutar aralıklarında,
                  yeni müşterilerde veya ek ürün şartıyla geçerli olabilir.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Aynı ana para tutarını kullanın." />
                  <CheckItem text="Aynı vade gününü kullanın." />
                  <CheckItem text="Gün esasını kontrol edin." />
                  <CheckItem text="Stopaj sonrası net kazancı kıyaslayın." />
                  <CheckItem text="Kampanya üst limitini inceleyin." />
                  <CheckItem text="Yeni müşteri şartını kontrol edin." />
                  <CheckItem text="Valör tarihini doğrulayın." />
                  <CheckItem text="Yenileme oranını ayrıca sorun." />
                </div>

                <InfoBox title="Yüzde farkını TL karşılığıyla görün">
                  İki faiz oranı arasında küçük görünen fark, yüksek ana para ve
                  uzun vadede önemli bir TL farkı oluşturabilir. Kararı oran
                  üzerinden değil, net kazanç üzerinden vermek daha açıklayıcıdır.
                </InfoBox>

                <ToolLink
                  href="/hesaplamalar/mevduat-faiz-orani-karsilastirma"
                  title="Mevduat faiz oranı karşılaştırma aracı"
                  description="Üç farklı faiz teklifinin net kazanç ve vade sonu tutarlarını karşılaştırın."
                />
              </ArticleSection>

              <ArticleSection
                id="yenileme"
                icon={<RefreshCw className="h-6 w-6" />}
                title="Mevduat yenileme ve bileşik getiri etkisi"
              >
                <p>
                  Vade sonunda elde edilen net faiz ana paraya eklenerek hesap
                  yeniden açılırsa sonraki dönem daha yüksek bir bakiye faiz
                  kazanır. Bu durum bileşik getiri etkisi oluşturur.
                </p>

                <p>
                  Örneğin 100.000 TL ana para ilk vade sonunda 103.000 TL'ye
                  ulaşıyorsa ve toplam tutar yeniden vadeye bağlanıyorsa ikinci
                  dönemde faiz yalnızca 100.000 TL üzerinden değil, 103.000 TL
                  üzerinden hesaplanır.
                </p>

                <FormulaBox>
                  <span>Yeni dönem ana parası = Eski ana para + Net faiz</span>
                  <span>Sonraki dönem faizi = Yeni bakiye × Dönemsel oran</span>
                </FormulaBox>

                <WarningBox>
                  Otomatik yenilemede ilk dönemdeki faiz oranının korunacağı
                  varsayılmamalıdır. Banka yeni vade başlangıcında güncel oranı
                  uygulayabilir.
                </WarningBox>

                <ToolLink
                  href="/hesaplamalar/mevduat-faiz-yenileme"
                  title="Mevduat faiz yenileme hesaplama aracı"
                  description="Birden fazla yenileme dönemi sonunda oluşabilecek toplam bakiyeyi hesaplayın."
                />
              </ArticleSection>

              <ArticleSection
                id="erken-bozma"
                icon={<TrendingDown className="h-6 w-6" />}
                title="Vadeli mevduat erken bozulursa ne olur?"
              >
                <p>
                  Vadeli hesaptaki paranın vade tarihinden önce çekilmesi erken
                  bozma olarak adlandırılır. Bu işlem ürün koşullarına göre faiz
                  kaybına veya daha düşük bir faiz oranının uygulanmasına yol
                  açabilir.
                </p>

                <p>
                  Bazı ürünlerde vade bozulduğunda o güne kadar oluşan faizin
                  tamamı silinebilir. Bazı esnek hesaplarda ise belirli bir
                  kısmın çekilmesine izin verilebilir. Kesin uygulama sözleşmeye
                  göre değişir.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Erken çekim koşulunu önceden okuyun." />
                  <CheckItem text="Faiz kaybını TL olarak hesaplayın." />
                  <CheckItem text="Ana para kesintisi olup olmadığını sorun." />
                  <CheckItem text="Acil ihtiyaç için ayrı likit bakiye bırakın." />
                </div>

                <WarningBox>
                  Vadeli mevduata tüm nakit birikimi bağlamak, beklenmedik para
                  ihtiyacında hesabın erken bozulmasına ve faiz kaybına neden
                  olabilir.
                </WarningBox>

                <ToolLink
                  href="/hesaplamalar/mevduat-erken-bozma-kaybi"
                  title="Mevduat erken bozma kaybı hesaplama"
                  description="Vade bozulduğunda kaybedilebilecek faiz tutarını senaryolarla görün."
                />
              </ArticleSection>

              <ArticleSection
                id="reel-getiri"
                icon={<TrendingUp className="h-6 w-6" />}
                title="Enflasyon sonrası reel mevduat getirisi"
              >
                <p>
                  Mevduat hesabındaki bakiyenin TL olarak artması, satın alma
                  gücünün de arttığı anlamına gelmez. Net faiz getirisi aynı
                  dönemdeki enflasyonun altında kalırsa nominal kazanç olmasına
                  rağmen reel kayıp oluşabilir.
                </p>

                <FormulaBox>
                  <span>Reel getiri = ((1 + Net getiri oranı)</span>
                  <span>÷ (1 + Enflasyon oranı) − 1) × 100</span>
                </FormulaBox>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[700px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Net getiri</th>
                          <th className="px-5 py-4">Enflasyon</th>
                          <th className="px-5 py-4">Yaklaşık sonuç</th>
                          <th className="px-5 py-4">Yorum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <DataRow
                          values={["%35", "%30", "%3,85", "Pozitif reel getiri"]}
                        />
                        <DataRow
                          values={["%30", "%30", "%0", "Satın alma gücü yaklaşık korunur"]}
                        />
                        <DataRow
                          values={["%25", "%30", "-%3,85", "Negatif reel getiri"]}
                        />
                      </tbody>
                    </table>
                  </div>
                </div>

                <ToolLink
                  href="/hesaplamalar/mevduat-reel-getiri"
                  title="Mevduat reel getiri hesaplama aracı"
                  description="Net faiz kazancınızın enflasyon karşısındaki gerçek değerini hesaplayın."
                />
              </ArticleSection>

              <ArticleSection
                id="banka-teklifleri"
                icon={<WalletCards className="h-6 w-6" />}
                title="Banka mevduat teklifleri nasıl değerlendirilir?"
              >
                <p>
                  Mevduat teklifi değerlendirirken tek ölçüt faiz oranı değildir.
                  Kampanya koşulları, vade, üst tutar sınırı, yeni müşteri şartı,
                  valör tarihi ve otomatik yenileme oranı toplam sonucu etkiler.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <EvaluationCard
                    title="Faiz ve getiri"
                    items={[
                      "Yıllık brüt faiz oranı",
                      "Stopaj sonrası net kazanç",
                      "Vade sonu toplam tutar",
                      "Gün esası ve valör",
                    ]}
                  />
                  <EvaluationCard
                    title="Ürün koşulları"
                    items={[
                      "Kampanya tutar aralığı",
                      "Yeni müşteri şartı",
                      "Ek ürün veya otomatik ödeme şartı",
                      "Vade sonu yenileme yöntemi",
                    ]}
                  />
                </div>

                <TipBox title="Teklif ekran görüntüsünü saklayın">
                  Hesap açmadan önce faiz oranını, vade tarihini ve kampanya
                  şartlarını gösteren teklif özetini kaydetmek, daha sonra
                  hesap hareketlerini kontrol ederken faydalı olabilir.
                </TipBox>
              </ArticleSection>

              <ArticleSection
                id="sik-hatalar"
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Vadeli mevduat hesaplamasında sık yapılan hatalar"
              >
                <div className="space-y-4">
                  <MistakeCard
                    number="01"
                    title="Yıllık oranı doğrudan aylık kazanç sanmak"
                    text="Yüzde 40 yıllık faiz, 32 günlük vadede ana paranın yüzde 40 artacağı anlamına gelmez. Oran vade gününe göre orantılanmalıdır."
                  />
                  <MistakeCard
                    number="02"
                    title="Stopajı hesaba katmamak"
                    text="Brüt faiz ile hesaba geçen net faiz aynı değildir. Karşılaştırmada net tutar kullanılmalıdır."
                  />
                  <MistakeCard
                    number="03"
                    title="360 ve 365 gün farkını görmezden gelmek"
                    text="Aynı oran ve vade için gün esası değiştiğinde sonuç küçük de olsa farklılaşabilir."
                  />
                  <MistakeCard
                    number="04"
                    title="Kampanya oranını kalıcı sanmak"
                    text="Hoş geldin faizi veya yeni müşteri oranı yalnızca ilk vade ya da belirli tutar aralığı için geçerli olabilir."
                  />
                  <MistakeCard
                    number="05"
                    title="Otomatik yenilemede aynı oranı beklemek"
                    text="Yeni vade başlangıcında bankanın güncel oranı uygulanabilir ve önceki oran korunmayabilir."
                  />
                  <MistakeCard
                    number="06"
                    title="Enflasyonu dikkate almamak"
                    text="Nominal kazanç pozitif olsa bile enflasyon daha yüksekse satın alma gücü azalabilir."
                  />
                </div>
              </ArticleSection>

              <ArticleSection
                id="dikkat-edilecekler"
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Vadeli mevduatta dikkat edilmesi gerekenler"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Faiz oranının yıllık ve brüt olup olmadığını kontrol edin." />
                  <CheckItem text="Stopaj sonrası net faiz kazancını hesaplayın." />
                  <CheckItem text="Vade başlangıç ve bitiş tarihini doğrulayın." />
                  <CheckItem text="Bankanın 360 mı 365 gün mü kullandığını öğrenin." />
                  <CheckItem text="Erken bozma koşullarını sözleşmeden okuyun." />
                  <CheckItem text="Otomatik yenileme talimatını kontrol edin." />
                  <CheckItem text="Kampanya oranının üst tutar sınırını inceleyin." />
                  <CheckItem text="Yeni müşteri veya ek ürün şartlarını doğrulayın." />
                  <CheckItem text="Acil ihtiyaçlar için ayrı likit bakiye bırakın." />
                  <CheckItem text="Net getiriyi enflasyonla karşılaştırın." />
                </div>

                <InfoBox title="Hesap güvenliği">
                  İnternet bankacılığında güçlü parola kullanın, doğrulama
                  kodlarını kimseyle paylaşmayın ve banka adıyla gönderilen
                  bağlantılara tıklamadan önce adresi kontrol edin.
                </InfoBox>
              </ArticleSection>

              <section
                id="sss"
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Coins className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
                      Merak edilenler
                    </p>
                    <h2 className="mt-1 text-2xl font-black text-slate-950 sm:text-3xl">
                      Sık sorulan sorular
                    </h2>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 transition open:border-emerald-200 open:bg-emerald-50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-bold text-slate-950">
                        <span>{item.question}</span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-lg text-emerald-700 shadow-sm transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mx-5 border-t border-emerald-200 pb-5 pt-4 text-sm leading-7 text-slate-700">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="rounded-[34px] bg-gradient-to-br from-emerald-700 via-teal-800 to-slate-950 p-8 text-white shadow-xl sm:p-10">
                <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold text-emerald-100">
                      <Calculator className="h-4 w-4" />
                      Ücretsiz hesaplama aracı
                    </div>
                    <h2 className="mt-5 text-2xl font-black sm:text-3xl">
                      Vadeli mevduat kazancınızı hemen hesaplayın
                    </h2>
                    <p className="mt-3 leading-7 text-emerald-100">
                      Ana para, faiz oranı, vade ve stopaj bilgilerini girin;
                      brüt faiz, net kazanç ve vade sonu bakiyesini saniyeler
                      içinde görün.
                    </p>
                  </div>

                  <Link
                    href="/hesaplamalar/vadeli-mevduat-hesaplama"
                    className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 font-bold text-emerald-800 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50"
                  >
                    Hesaplamaya başla
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </section>

              <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <h2 className="text-2xl font-black text-slate-950">
                  İlgili hesaplama araçları
                </h2>
                <p className="mt-3 leading-7 text-slate-600">
                  Mevduat kararınızı farklı senaryolarla değerlendirmek için
                  aşağıdaki araçlardan yararlanabilirsiniz.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <RelatedTool
                    href="/hesaplamalar/mevduat-faizi-hesaplama"
                    title="Mevduat Faizi Hesaplama"
                    description="Brüt ve net faiz kazancını hesaplayın."
                  />
                  <RelatedTool
                    href="/hesaplamalar/mevduat-vade-karsilastirma"
                    title="Mevduat Vade Karşılaştırma"
                    description="Farklı vade seçeneklerini karşılaştırın."
                  />
                  <RelatedTool
                    href="/hesaplamalar/mevduat-faiz-orani-karsilastirma"
                    title="Faiz Oranı Karşılaştırma"
                    description="Üç farklı banka teklifini yan yana görün."
                  />
                  <RelatedTool
                    href="/hesaplamalar/mevduat-reel-getiri"
                    title="Mevduat Reel Getiri"
                    description="Enflasyon sonrası gerçek getiriyi hesaplayın."
                  />
                </div>
              </section>
            </article>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />
              <p className="text-sm leading-6 text-slate-600">
                Bu içerik genel bilgilendirme amacıyla hazırlanmıştır ve
                yatırım tavsiyesi değildir. Güncel faiz oranı, stopaj, valör,
                vade ve ürün koşullarını işlem yapmadan önce bankanızdan kontrol
                edin. Hesaplama sonuçları bankaların yuvarlama ve uygulama
                yöntemlerine göre küçük farklılıklar gösterebilir.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function HeroBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-emerald-50">
      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
      {children}
    </span>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl bg-white/10 px-4 py-3 text-sm">
      <span className="text-emerald-100">{label}</span>
      <strong className="text-right text-white">{value}</strong>
    </div>
  );
}

function ArticleSection({
  id,
  icon,
  title,
  children,
}: {
  id: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
          {icon}
        </div>
        <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

function FormulaBox({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 shadow-inner sm:p-6">
      <div className="flex min-w-max flex-col">{children}</div>
    </div>
  );
}

function InfoBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-blue-700" />
        <h3 className="font-black text-blue-950">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-7 text-blue-900">{children}</p>
    </div>
  );
}

function TipBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-emerald-700" />
        <h3 className="font-black text-emerald-950">{title}</h3>
      </div>
      <p className="mt-2 text-sm leading-7 text-emerald-900">{children}</p>
    </div>
  );
}

function WarningBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-950">
      <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
      <p>{children}</p>
    </div>
  );
}

function DefinitionCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function MetricCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
      <div className="text-emerald-700">{icon}</div>
      <h3 className="mt-4 font-black text-emerald-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-emerald-900">{text}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-sm font-black text-white">
        {number}
      </span>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
      <p className="text-sm leading-6 text-emerald-950">{text}</p>
    </div>
  );
}

function ToolLink({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 transition hover:-translate-y-0.5 hover:bg-emerald-100 hover:shadow-md"
    >
      <div>
        <h3 className="font-black text-emerald-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-emerald-900">
          {description}
        </p>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-emerald-700 transition group-hover:translate-x-1" />
    </Link>
  );
}

function ComparisonRow({
  label,
  first,
  second,
}: {
  label: string;
  first: string;
  second: string;
}) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">{label}</td>
      <td className="px-5 py-4 text-slate-600">{first}</td>
      <td className="px-5 py-4 text-slate-600">{second}</td>
    </tr>
  );
}

function DataRow({ values }: { values: string[] }) {
  return (
    <tr>
      {values.map((value, index) => (
        <td
          key={`${value}-${index}`}
          className={`px-5 py-4 ${
            index === 0 || index === values.length - 1
              ? "font-semibold text-slate-950"
              : "text-slate-600"
          }`}
        >
          {value}
        </td>
      ))}
    </tr>
  );
}

function ProsConsCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="text-emerald-700">{icon}</div>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EvaluationCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <h3 className="font-black text-slate-950">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MistakeCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-xs font-black text-white">
        {number}
      </span>
      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function RelatedTool({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-700 shadow-sm">
          <Coins className="h-5 w-5" />
        </div>
        <ArrowRight className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-700" />
      </div>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>
    </Link>
  );
}