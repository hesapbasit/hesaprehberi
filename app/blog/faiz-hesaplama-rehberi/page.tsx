import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BadgePercent,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Coins,
  CreditCard,
  Landmark,
  Lightbulb,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const pageTitle = "Faiz Hesaplama Rehberi";
const pageDescription =
  "Faiz nasıl hesaplanır? Basit faiz, bileşik faiz, kredi ve mevduat faizi formüllerini örnekler, tablolar ve dikkat edilmesi gereken noktalarla öğrenin.";
const canonicalPath = "/blog/faiz-hesaplama-rehberi";
const canonicalUrl = `https://hesaprehberi.com${canonicalPath}`;

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "faiz hesaplama",
    "faiz nasıl hesaplanır",
    "faiz hesaplama formülü",
    "basit faiz hesaplama",
    "bileşik faiz hesaplama",
    "mevduat faizi hesaplama",
    "kredi faizi hesaplama",
    "aylık faiz hesaplama",
    "yıllık faiz hesaplama",
    "günlük faiz hesaplama",
    "net faiz hesaplama",
    "brüt faiz hesaplama",
    "stopaj sonrası faiz",
    "efektif faiz oranı",
    "nominal faiz oranı",
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
  { id: "faiz-nedir", label: "Faiz nedir?" },
  { id: "faiz-nasil-hesaplanir", label: "Faiz nasıl hesaplanır?" },
  { id: "basit-faiz", label: "Basit faiz hesaplama" },
  { id: "bilesik-faiz", label: "Bileşik faiz hesaplama" },
  { id: "mevduat-faizi", label: "Mevduat faizi hesaplama" },
  { id: "kredi-faizi", label: "Kredi faizi hesaplama" },
  { id: "gunluk-aylik-yillik", label: "Günlük, aylık ve yıllık faiz" },
  { id: "nominal-efektif", label: "Nominal ve efektif faiz" },
  { id: "brut-net-stopaj", label: "Brüt faiz, net faiz ve stopaj" },
  { id: "ornekler", label: "Örnek faiz hesaplamaları" },
  { id: "karsilastirma", label: "Faiz türleri karşılaştırması" },
  { id: "enflasyon", label: "Faiz ve enflasyon ilişkisi" },
  { id: "dikkat-edilecekler", label: "Dikkat edilmesi gerekenler" },
  { id: "sik-hatalar", label: "Sık yapılan hatalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const faqItems = [
  {
    question: "Faiz nasıl hesaplanır?",
    answer:
      "Basit faiz hesabında ana para, faiz oranı ve süre çarpılır. Bileşik faiz hesabında ise her dönemin faizi ana paraya eklenir ve sonraki dönem faiz hesaplaması büyüyen bakiye üzerinden yapılır.",
  },
  {
    question: "Faiz hesaplamasında yüzde oranı nasıl kullanılır?",
    answer:
      "Yüzde olarak verilen faiz oranı formülde ondalık sayıya çevrilir. Örneğin yüzde 36 faiz oranı 0,36 olarak kullanılır.",
  },
  {
    question: "Aylık faiz ile yıllık faiz arasındaki fark nedir?",
    answer:
      "Aylık faiz bir aylık döneme, yıllık faiz ise bir yıllık döneme ilişkin oranı ifade eder. Dönüşüm yapılırken yalnızca 12 ile çarpmak veya bölmek her zaman doğru efektif sonucu vermez.",
  },
  {
    question: "Basit faiz nedir?",
    answer:
      "Basit faiz, her dönemde yalnızca başlangıç ana parası üzerinden faiz hesaplanan yöntemdir. Önceki dönem faizleri ana paraya eklenmez.",
  },
  {
    question: "Bileşik faiz nedir?",
    answer:
      "Bileşik faiz, dönem sonunda oluşan faizin ana paraya eklenmesi ve sonraki dönemlerde toplam bakiyenin yeniden faiz kazanmasıdır.",
  },
  {
    question: "Mevduat faizi nasıl hesaplanır?",
    answer:
      "Ana para, yıllık brüt faiz oranı ve vade gün sayısı kullanılarak brüt faiz bulunur. Brüt faizden stopaj düşüldüğünde net faiz kazancı elde edilir.",
  },
  {
    question: "Kredi faizi nasıl hesaplanır?",
    answer:
      "Kredi faizinde aylık oran, vade ve ana para kullanılarak eşit taksit veya farklı ödeme planları oluşturulur. Taksitin içindeki faiz payı başlangıçta daha yüksek, ana para payı daha düşük olabilir.",
  },
  {
    question: "Günlük faiz nasıl hesaplanır?",
    answer:
      "Yıllık faiz oranı kullanılan gün esasına bölünür ve ana para ile gün sayısı üzerinden dönemsel faiz bulunur. Bankalar 360 veya 365 gün esasını kullanabilir.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz vergi ve kesintiler uygulanmadan önceki kazançtır. Net faiz ise stopaj gibi kesintiler düşüldükten sonra hesaba geçen tutardır.",
  },
  {
    question: "Nominal faiz nedir?",
    answer:
      "Nominal faiz, ilan edilen veya sözleşmede belirtilen faiz oranıdır. Dönem içi bileşikleşme ve bazı maliyetler nominal orana dahil olmayabilir.",
  },
  {
    question: "Efektif faiz nedir?",
    answer:
      "Efektif faiz, dönem içi bileşikleşmenin etkisini dikkate alarak gerçek yıllık maliyeti veya getiriyi gösteren orandır.",
  },
  {
    question: "Faiz oranı yükselirse kredi taksiti artar mı?",
    answer:
      "Diğer koşullar aynı kaldığında faiz oranının yükselmesi toplam geri ödemeyi ve genellikle aylık taksit tutarını artırır.",
  },
  {
    question: "Faiz oranı yükselirse mevduat kazancı artar mı?",
    answer:
      "Ana para, vade ve kesintiler aynı kaldığında daha yüksek faiz oranı daha yüksek brüt ve net mevduat kazancı oluşturur.",
  },
  {
    question: "Faiz hesabında 360 gün mü 365 gün mü kullanılır?",
    answer:
      "Ürün ve bankaya göre 360 veya 365 gün esası kullanılabilir. Kesin sonuç için sözleşmedeki gün hesabı kontrol edilmelidir.",
  },
  {
    question: "Faiz kazancı enflasyondan yüksekse gerçek kazanç oluşur mu?",
    answer:
      "Net getiri enflasyondan yüksekse satın alma gücü bakımından pozitif reel getiri oluşabilir. Doğru karşılaştırmada vergi ve kesintiler sonrası net oran kullanılmalıdır.",
  },
  {
    question: "Kredi faiz oranı ile toplam maliyet aynı şey midir?",
    answer:
      "Hayır. Toplam maliyet; faiz yanında tahsis ücreti, sigorta, vergi ve diğer masrafları da içerebilir.",
  },
  {
    question: "Faiz hesaplama sonucu neden bankadan farklı çıkabilir?",
    answer:
      "Gün esası, valör tarihi, yuvarlama yöntemi, vergi, sigorta, masraf ve ödeme planı gibi ayrıntılar farklı sonuçlara yol açabilir.",
  },
  {
    question: "Faiz hesaplama aracı yatırım tavsiyesi verir mi?",
    answer:
      "Hayır. Hesaplama araçları yalnızca bilgilendirme ve senaryo karşılaştırma amacı taşır; kişisel yatırım tavsiyesi değildir.",
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
    url: "https://hesaprehberi.com",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://hesaprehberi.com",
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
      item: "https://hesaprehberi.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://hesaprehberi.com/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: pageTitle,
      item: canonicalUrl,
    },
  ],
};

export default function FaizHesaplamaRehberiPage() {
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
                { label: "Blog", href: "/blog" },
                { label: pageTitle },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
          <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Faiz hesaplamanın kapsamlı anlatımı
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Faiz Hesaplama Rehberi
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
                  Basit faizden bileşik faize, mevduat getirisinden kredi
                  maliyetine kadar faiz hesaplamasında kullanılan temel
                  formülleri, örnekleri ve karşılaştırmaları tek rehberde
                  öğrenin.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroPill text="Basit ve bileşik faiz" />
                  <HeroPill text="Kredi ve mevduat örnekleri" />
                  <HeroPill text="Gerçek karşılaştırma tabloları" />
                  <HeroPill text="18 sık sorulan soru" />
                </div>
              </div>

              <div className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur-xl">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-xl">
                  <Calculator className="h-8 w-8" />
                </div>

                <h2 className="mt-6 text-2xl font-black text-white">
                  Hemen hesaplama yapın
                </h2>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Ana para, faiz oranı ve süre bilgilerini girerek faiz
                  tutarını saniyeler içinde hesaplayın.
                </p>

                <Link
                  href="/hesaplamalar/faiz-hesaplama"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-bold text-blue-800 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Faiz hesaplama aracını aç
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="min-w-0 space-y-10">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">
                      Finans rehberi
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Bu içerik faiz hesaplama mantığını öğretmek ve farklı
                      finansal ürünleri daha bilinçli karşılaştırmanıza yardım
                      etmek için hazırlanmıştır.
                    </p>
                  </div>

                  <ShareButtons
                    title={`${pageTitle} | HesapRehberi`}
                    description={pageDescription}
                    url={canonicalUrl}
                  />
                </div>
              </div>

              <nav
                aria-label="İçindekiler"
                className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <ReceiptText className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-950">
                    İçindekiler
                  </h2>
                </div>

                <ol className="mt-6 grid gap-3 sm:grid-cols-2">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-3 rounded-xl border border-blue-100 bg-white/80 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
                      >
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-black text-blue-700">
                          {index + 1}
                        </span>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              <ContentSection
                id="faiz-nedir"
                icon={<BadgePercent className="h-6 w-6" />}
                title="Faiz nedir?"
              >
                <p>
                  Faiz, paranın belirli bir süre boyunca kullanılmasının
                  karşılığıdır. Mevduat hesabında banka müşterinin parasını
                  kullandığı için faiz öder. Kredide ise müşteri bankanın
                  sağladığı parayı kullandığı için faiz maliyetine katlanır.
                </p>
                <p>
                  Bu nedenle faiz hem bir kazanç hem de bir maliyet olabilir.
                  Aynı yüzde oranı farklı vade, ödeme sıklığı, vergi ve masraf
                  koşullarında farklı sonuçlar doğurabilir.
                </p>

                <InfoBox
                  icon={<Lightbulb className="h-5 w-5" />}
                  title="Temel fikir"
                >
                  Faiz hesabında yalnızca oran değil; ana para, süre, dönem
                  sıklığı, bileşikleşme ve kesintiler birlikte değerlendirilir.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="faiz-nasil-hesaplanir"
                icon={<Calculator className="h-6 w-6" />}
                title="Faiz nasıl hesaplanır?"
              >
                <p>
                  En temel faiz hesabında üç veri kullanılır: ana para, faiz
                  oranı ve süre. Ancak doğru formül, faizin basit mi yoksa
                  bileşik mi uygulandığına göre değişir.
                </p>

                <FormulaBox>
                  <p>Basit faiz = Ana para × Faiz oranı × Süre</p>
                  <p className="mt-3">
                    Toplam tutar = Ana para + Faiz tutarı
                  </p>
                </FormulaBox>

                <p>
                  Yüzde oranı formülde ondalık değere çevrilmelidir. Örneğin
                  yüzde 24 oranı 0,24; yüzde 3 aylık oran ise 0,03 olarak
                  kullanılır. Oran ile süre aynı zaman biriminde olmalıdır.
                </p>
              </ContentSection>

              <ContentSection
                id="basit-faiz"
                icon={<Coins className="h-6 w-6" />}
                title="Basit faiz hesaplama"
              >
                <p>
                  Basit faiz yönteminde her dönemin faizi yalnızca ilk ana para
                  üzerinden hesaplanır. Önceki dönem faizleri ana paraya
                  eklenmediği için dönemsel faiz tutarı değişmez.
                </p>

                <ExampleCard title="Basit faiz örneği">
                  <ExampleRow label="Ana para" value="100.000 TL" />
                  <ExampleRow label="Yıllık faiz oranı" value="%30" />
                  <ExampleRow label="Süre" value="1 yıl" />
                  <ExampleRow label="Faiz kazancı" value="30.000 TL" strong />
                  <ExampleRow label="Toplam tutar" value="130.000 TL" />
                </ExampleCard>

                <p>
                  Aynı yatırım iki yıl basit faizle devam ederse her yıl
                  30.000 TL faiz oluşur ve iki yıllık toplam faiz 60.000 TL
                  olur. İkinci yılda ilk yılın faizi yeni faiz üretmez.
                </p>
              </ContentSection>

              <ContentSection
                id="bilesik-faiz"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Bileşik faiz hesaplama"
              >
                <p>
                  Bileşik faiz yönteminde her dönemin faiz kazancı ana paraya
                  eklenir. Sonraki dönem faizi büyüyen toplam bakiye üzerinden
                  hesaplanır. Bu durum “faizin faizi” olarak da ifade edilir.
                </p>

                <FormulaBox>
                  <p>Gelecek değer = Ana para × (1 + dönem faizi)ⁿ</p>
                  <p className="mt-3">n = Toplam dönem sayısı</p>
                </FormulaBox>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Yıl</th>
                          <th className="px-5 py-4">Dönem başı</th>
                          <th className="px-5 py-4">Faiz (%30)</th>
                          <th className="px-5 py-4">Dönem sonu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow values={["1", "100.000 TL", "30.000 TL", "130.000 TL"]} />
                        <TableRow values={["2", "130.000 TL", "39.000 TL", "169.000 TL"]} />
                        <TableRow values={["3", "169.000 TL", "50.700 TL", "219.700 TL"]} />
                      </tbody>
                    </table>
                  </div>
                </div>

                <p>
                  Aynı ana para ve oranla üçüncü yıl sonunda basit faiz toplamı
                  190.000 TL olurken bileşik faiz sonucu 219.700 TL’ye ulaşır.
                  Vade uzadıkça aradaki fark büyür.
                </p>

                <LinkCard
                  href="/hesaplamalar/bilesik-faiz-hesaplama"
                  title="Bileşik Faiz Hesaplama"
                  description="Dönem sayısı ve faiz oranına göre bileşik getiriyi hesaplayın."
                />
              </ContentSection>

              <ContentSection
                id="mevduat-faizi"
                icon={<Landmark className="h-6 w-6" />}
                title="Mevduat faizi nasıl hesaplanır?"
              >
                <p>
                  Vadeli mevduatta faiz genellikle yıllık brüt oran olarak ilan
                  edilir. Vade gün sayısı ve bankanın kullandığı gün esası
                  üzerinden dönemsel brüt faiz bulunur. Ardından stopaj
                  kesilerek net kazanç hesaplanır.
                </p>

                <FormulaBox>
                  <p>
                    Brüt faiz = Ana para × Yıllık faiz oranı × Vade günü ÷ Gün
                    esası
                  </p>
                  <p className="mt-3">Stopaj = Brüt faiz × Stopaj oranı</p>
                  <p className="mt-3">Net faiz = Brüt faiz − Stopaj</p>
                </FormulaBox>

                <ExampleCard title="32 günlük mevduat örneği">
                  <ExampleRow label="Ana para" value="250.000 TL" />
                  <ExampleRow label="Yıllık brüt faiz" value="%48" />
                  <ExampleRow label="Vade" value="32 gün" />
                  <ExampleRow label="Gün esası" value="365 gün" />
                  <ExampleRow label="Brüt faiz" value="10.520,55 TL" />
                  <ExampleRow label="Stopaj (%15 varsayım)" value="1.578,08 TL" />
                  <ExampleRow label="Net faiz" value="8.942,47 TL" strong />
                </ExampleCard>

                <div className="grid gap-4 sm:grid-cols-2">
                  <LinkCard
                    href="/hesaplamalar/mevduat-faizi-hesaplama"
                    title="Mevduat Faizi Hesaplama"
                    description="Brüt faiz, stopaj ve net kazancı hesaplayın."
                  />
                  <LinkCard
                    href="/hesaplamalar/vadeli-mevduat-hesaplama"
                    title="Vadeli Mevduat Hesaplama"
                    description="Farklı vade ve oranlarla mevduat sonucunu görün."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="kredi-faizi"
                icon={<CreditCard className="h-6 w-6" />}
                title="Kredi faizi nasıl hesaplanır?"
              >
                <p>
                  Tüketici kredilerinde yaygın yöntem eşit taksitli ödeme
                  planıdır. Her taksit faiz ve ana para bileşenlerinden oluşur.
                  İlk taksitlerde kalan borç yüksek olduğu için faiz payı daha
                  yüksek olabilir.
                </p>

                <FormulaBox>
                  <p>
                    Taksit = P × [r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]
                  </p>
                  <p className="mt-3">P = Kredi tutarı</p>
                  <p className="mt-3">r = Aylık faiz oranı</p>
                  <p className="mt-3">n = Taksit sayısı</p>
                </FormulaBox>

                <WarningBox title="Faiz oranı toplam maliyet değildir">
                  Kredi karşılaştırırken yalnızca aylık faiz oranına bakmak
                  yeterli değildir. Tahsis ücreti, sigorta, vergi ve diğer
                  masraflar toplam geri ödemeyi etkileyebilir.
                </WarningBox>

                <div className="grid gap-4 sm:grid-cols-2">
                  <LinkCard
                    href="/hesaplamalar/kredi-hesaplama"
                    title="Kredi Hesaplama"
                    description="Taksit ve toplam geri ödeme tutarını hesaplayın."
                  />
                  <LinkCard
                    href="/hesaplamalar/kredi-karsilastirma"
                    title="Kredi Karşılaştırma"
                    description="Farklı kredi tekliflerini tek tabloda karşılaştırın."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="gunluk-aylik-yillik"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Günlük, aylık ve yıllık faiz oranları"
              >
                <p>
                  Faiz oranı ile süre aynı döneme çevrilmeden doğru hesaplama
                  yapılamaz. Günlük oranla gün, aylık oranla ay ve yıllık oranla
                  yıl üzerinden hesaplama yapılmalıdır.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Oran türü</th>
                          <th className="px-5 py-4">Kullanılan süre</th>
                          <th className="px-5 py-4">Yaygın kullanım</th>
                          <th className="px-5 py-4">Dikkat</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow values={["Günlük", "Gün", "Gecelik hesaplar", "360/365 gün esası"]} />
                        <TableRow values={["Aylık", "Ay", "Tüketici kredileri", "Vergi ve masraflar"]} />
                        <TableRow values={["Yıllık", "Yıl veya gün oranı", "Mevduat ve ticari ürünler", "Nominal/efektif farkı"]} />
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <LinkCard
                    href="/hesaplamalar/gunluk-faiz-hesaplama"
                    title="Günlük Faiz Hesaplama"
                    description="Belirli gün sayısı için faiz kazancını bulun."
                  />
                  <LinkCard
                    href="/hesaplamalar/gecelik-faiz-hesaplama"
                    title="Gecelik Faiz Hesaplama"
                    description="Gecelik faiz senaryolarını karşılaştırın."
                  />
                </div>
              </ContentSection>

              <ContentSection
                id="nominal-efektif"
                icon={<TrendingUp className="h-6 w-6" />}
                title="Nominal faiz ve efektif faiz farkı"
              >
                <p>
                  Nominal faiz ilan edilen orandır. Efektif faiz ise yıl içinde
                  faizin kaç kez bileşikleştiğini dikkate alır. Aylık yüzde 2
                  oranı doğrudan 12 ile çarpıldığında yüzde 24 nominal oran
                  bulunur; aylık bileşikleşmede efektif yıllık oran daha yüksek
                  olur.
                </p>

                <FormulaBox>
                  <p>Efektif yıllık oran = (1 + dönem oranı)ᵐ − 1</p>
                  <p className="mt-3">m = Yıldaki dönem sayısı</p>
                </FormulaBox>

                <InfoBox
                  icon={<Scale className="h-5 w-5" />}
                  title="Karşılaştırmada aynı ölçüyü kullanın"
                >
                  İki ürünü karşılaştırırken oranların ikisinin de nominal veya
                  ikisinin de efektif olmasına dikkat edin.
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="brut-net-stopaj"
                icon={<ReceiptText className="h-6 w-6" />}
                title="Brüt faiz, net faiz ve stopaj"
              >
                <p>
                  Brüt faiz kesinti öncesi kazancı, net faiz ise hesaba geçen
                  gerçek tutarı gösterir. Mevduat ürünlerinde stopaj oranı ürün
                  türü ve vade yapısına göre değişebileceğinden güncel oran
                  kontrol edilmelidir.
                </p>

                <div className="grid gap-4 sm:grid-cols-3">
                  <MetricCard
                    label="Brüt faiz"
                    value="Kesinti öncesi"
                    description="İlan edilen oranla hesaplanan kazanç"
                  />
                  <MetricCard
                    label="Stopaj"
                    value="Vergi kesintisi"
                    description="Brüt faiz üzerinden uygulanan kesinti"
                  />
                  <MetricCard
                    label="Net faiz"
                    value="Hesaba geçen"
                    description="Brüt faiz eksi stopaj"
                  />
                </div>

                <LinkCard
                  href="/hesaplamalar/stopaj-hesaplama"
                  title="Stopaj Hesaplama"
                  description="Brüt tutar, kesinti ve net kazancı hesaplayın."
                />
              </ContentSection>

              <ContentSection
                id="ornekler"
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Örnek faiz hesaplamaları"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Senaryo</th>
                          <th className="px-5 py-4">Ana para</th>
                          <th className="px-5 py-4">Oran</th>
                          <th className="px-5 py-4">Süre</th>
                          <th className="px-5 py-4">Yöntem</th>
                          <th className="px-5 py-4">Sonuç</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow values={["Basit yatırım", "50.000 TL", "%20 yıllık", "1 yıl", "Basit", "60.000 TL"]} />
                        <TableRow values={["Bileşik yatırım", "50.000 TL", "%20 yıllık", "2 yıl", "Bileşik", "72.000 TL"]} />
                        <TableRow values={["32 günlük mevduat", "100.000 TL", "%45 yıllık", "32 gün", "365 gün esası", "3.945,21 TL brüt"]} />
                        <TableRow values={["Aylık kredi", "100.000 TL", "%3 aylık", "12 ay", "Eşit taksit", "Formülle belirlenir"]} />
                      </tbody>
                    </table>
                  </div>
                </div>

                <p>
                  Tablodaki sonuçlar yöntem farkını göstermek için
                  basitleştirilmiştir. Gerçek banka işlemlerinde vergi, masraf,
                  valör ve yuvarlama kuralları ayrıca uygulanabilir.
                </p>
              </ContentSection>

              <ContentSection
                id="karsilastirma"
                icon={<WalletCards className="h-6 w-6" />}
                title="Faiz türleri karşılaştırması"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[900px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4">Tür</th>
                          <th className="px-5 py-4">Hesaplama temeli</th>
                          <th className="px-5 py-4">Kullanım alanı</th>
                          <th className="px-5 py-4">Temel özellik</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow values={["Basit faiz", "İlk ana para", "Kısa dönem örnekleri", "Faizler ana paraya eklenmez"]} />
                        <TableRow values={["Bileşik faiz", "Güncel bakiye", "Uzun vadeli birikim", "Faiz yeniden faiz kazanır"]} />
                        <TableRow values={["Mevduat faizi", "Ana para ve vade günü", "Vadeli hesap", "Stopaj sonrası net getiri"]} />
                        <TableRow values={["Kredi faizi", "Kalan borç", "Finansman", "Taksit ve toplam maliyet"]} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                id="enflasyon"
                icon={<TrendingDown className="h-6 w-6" />}
                title="Faiz ve enflasyon ilişkisi"
              >
                <p>
                  Faiz kazancının TL olarak artması her zaman satın alma
                  gücünün arttığı anlamına gelmez. Net getiri enflasyonun
                  altında kalırsa nominal kazanç oluşmasına rağmen reel kayıp
                  yaşanabilir.
                </p>

                <FormulaBox>
                  <p>
                    Reel getiri = [(1 + net getiri) ÷ (1 + enflasyon)] − 1
                  </p>
                </FormulaBox>

                <LinkCard
                  href="/hesaplamalar/mevduat-reel-getiri"
                  title="Mevduat Reel Getiri Hesaplama"
                  description="Enflasyon sonrası satın alma gücü değişimini hesaplayın."
                />
              </ContentSection>

              <ContentSection
                id="dikkat-edilecekler"
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Faiz hesaplamasında dikkat edilmesi gerekenler"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Faiz oranının günlük, aylık veya yıllık olduğunu doğrulayın." />
                  <CheckItem text="Oran ile süreyi aynı zaman birimine çevirin." />
                  <CheckItem text="Basit veya bileşik yöntem kullanıldığını belirleyin." />
                  <CheckItem text="360 ve 365 gün esasını kontrol edin." />
                  <CheckItem text="Stopaj ve diğer vergi kesintilerini hesaba katın." />
                  <CheckItem text="Kredilerde ek ücret ve sigortaları karşılaştırın." />
                  <CheckItem text="Nominal oran ile efektif oranı karıştırmayın." />
                  <CheckItem text="Vade sonunda yenileme oranının değişebileceğini unutmayın." />
                </div>
              </ContentSection>

              <ContentSection
                id="sik-hatalar"
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Faiz hesaplamasında sık yapılan hatalar"
              >
                <div className="space-y-4">
                  <MistakeCard
                    title="Yüzde oranını doğrudan kullanmak"
                    description="Yüzde 30 oran formülde 30 değil 0,30 olarak kullanılmalıdır."
                  />
                  <MistakeCard
                    title="Aylık ve yıllık oranı karıştırmak"
                    description="Aylık yüzde 3 oranı yıllık yüzde 3 gibi kullanmak sonucu ciddi biçimde değiştirir."
                  />
                  <MistakeCard
                    title="Brüt kazancı net kazanç sanmak"
                    description="Stopaj ve kesintiler hesaba katılmadığında beklenen gelir olduğundan yüksek görünür."
                  />
                  <MistakeCard
                    title="Kredi maliyetini yalnızca faizle ölçmek"
                    description="Masraf, sigorta ve vergiler toplam geri ödemeyi artırabilir."
                  />
                </div>
              </ContentSection>

              <section
                id="sss"
                className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-950 sm:text-3xl">
                    Sık sorulan sorular
                  </h2>
                </div>

                <div className="mt-8 space-y-4">
                  {faqItems.map((item) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-blue-200 open:bg-blue-50"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 font-bold text-slate-950 sm:px-6">
                        <span>{item.question}</span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-blue-300 group-open:text-blue-700">
                          +
                        </span>
                      </summary>
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="border-t border-blue-200 pt-4 text-sm leading-7 text-slate-700">
                          {item.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Calculator className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Faiz hesabının üç temeli
                </h2>
                <div className="mt-5 space-y-4">
                  <SidebarRow label="Tutar" value="Ana para" />
                  <SidebarRow label="Maliyet/Getiri" value="Faiz oranı" />
                  <SidebarRow label="Zaman" value="Vade" />
                  <SidebarRow label="Yöntem" value="Basit veya bileşik" />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  İlgili hesaplamalar
                </h2>
                <div className="mt-5 space-y-3">
                  <RelatedLink href="/hesaplamalar/faiz-hesaplama" title="Faiz Hesaplama" />
                  <RelatedLink href="/hesaplamalar/bilesik-faiz-hesaplama" title="Bileşik Faiz Hesaplama" />
                  <RelatedLink href="/hesaplamalar/mevduat-faizi-hesaplama" title="Mevduat Faizi Hesaplama" />
                  <RelatedLink href="/hesaplamalar/gunluk-faiz-hesaplama" title="Günlük Faiz Hesaplama" />
                  <RelatedLink href="/hesaplamalar/kredi-hesaplama" title="Kredi Hesaplama" />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <Clock3 className="h-7 w-7 text-blue-300" />
                <h2 className="mt-5 text-xl font-black">
                  Süre uzadıkça yöntem farkı büyür
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Bileşik faizde önceki dönem kazançları da yeniden faiz
                  ürettiği için uzun vadede sonuç basit faizden belirgin biçimde
                  ayrılabilir.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Faiz hesabınızı şimdi yapın
                </h2>
                <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                  Ana para, faiz oranı ve süreyi girerek toplam faiz tutarını ve
                  vade sonu bakiyeyi ücretsiz hesaplayın.
                </p>
              </div>
              <Link
                href="/hesaplamalar/faiz-hesaplama"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-blue-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Faiz hesaplama aracına git
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
                Bu içerik yalnızca genel bilgilendirme amacıyla hazırlanmıştır
                ve yatırım, kredi veya mevduat tavsiyesi değildir. Bankaların
                güncel faiz, vergi, ücret, valör, yuvarlama ve sözleşme
                koşulları değişebilir. Finansal karar vermeden önce ilgili
                kurumun güncel koşullarını inceleyiniz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

type HeroPillProps = { text: string };

function HeroPill({ text }: HeroPillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-blue-50 backdrop-blur">
      <CheckCircle2 className="h-4 w-4 text-blue-300" />
      {text}
    </span>
  );
}

type ContentSectionProps = {
  id: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContentSection({ id, icon, title, children }: ContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          {icon}
        </div>
        <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

type InfoBoxProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function InfoBox({ icon, title, children }: InfoBoxProps) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex gap-3">
        <div className="mt-0.5 text-blue-700">{icon}</div>
        <div>
          <h3 className="font-black text-blue-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-blue-900">{children}</p>
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
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
        <div>
          <h3 className="font-black text-amber-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-amber-900">{children}</p>
        </div>
      </div>
    </div>
  );
}

type FormulaBoxProps = { children: ReactNode };

function FormulaBox({ children }: FormulaBoxProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 sm:p-6">
      {children}
    </div>
  );
}

type ExampleCardProps = {
  title: string;
  children: ReactNode;
};

function ExampleCard({ title, children }: ExampleCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
      <h3 className="text-lg font-black text-slate-950">{title}</h3>
      <div className="mt-5 space-y-3">{children}</div>
    </div>
  );
}

type ExampleRowProps = {
  label: string;
  value: string;
  strong?: boolean;
};

function ExampleRow({ label, value, strong = false }: ExampleRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span
        className={
          strong
            ? "text-right text-base font-black text-blue-700"
            : "text-right text-sm font-bold text-slate-950"
        }
      >
        {value}
      </span>
    </div>
  );
}

type TableRowProps = { values: string[] };

function TableRow({ values }: TableRowProps) {
  return (
    <tr className="transition hover:bg-blue-50/60">
      {values.map((value, index) => (
        <td
          key={`${value}-${index}`}
          className={`px-5 py-4 ${index === 0 ? "font-bold text-slate-950" : "text-slate-600"}`}
        >
          {value}
        </td>
      ))}
    </tr>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  description: string;
};

function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
        {label}
      </p>
      <p className="mt-2 text-lg font-black text-slate-950">{value}</p>
      <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
    </div>
  );
}

type CheckItemProps = { text: string };

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
      <p className="text-sm leading-6 text-blue-950">{text}</p>
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

type LinkCardProps = {
  href: string;
  title: string;
  description: string;
};

function LinkCard({ href, title, description }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-300 hover:bg-blue-50"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-black text-slate-950 transition group-hover:text-blue-700">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {description}
          </p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>
    </Link>
  );
}

type SidebarRowProps = {
  label: string;
  value: string;
};

function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-blue-200 pb-3 last:border-0 last:pb-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-right text-sm font-bold text-slate-950">{value}</span>
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
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}