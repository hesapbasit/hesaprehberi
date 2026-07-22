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

const pageTitle = "Mevduat Erken Bozma Kaybı Rehberi";
const pageDescription =
  "Vadeli mevduat erken bozulursa ne kadar kayıp oluşur? Kazanılmayan faiz, stopaj, kalan gün, kısmi çekim ve alternatif senaryoları örneklerle öğrenin.";
const canonicalPath = "/blog/mevduat-erken-bozma-kaybi-rehberi";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "mevduat erken bozma kaybı",
    "vadeli hesap erken bozma",
    "vadeli mevduat erken çekim",
    "mevduat faiz kaybı hesaplama",
    "erken bozma cezası",
    "vadeli hesap bozulursa ne olur",
    "mevduat erken kapama",
    "kısmi para çekme",
    "vade bozulması",
    "kazanılmayan faiz",
    "vadeli mevduat kaybı",
    "erken çekim hesaplama",
    "mevduat stopaj kaybı",
    "vade sonu beklemek",
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
  { id: "erken-bozma-nedir", label: "Mevduatı erken bozmak nedir?" },
  { id: "kayip-nasil-olusur", label: "Erken bozma kaybı nasıl oluşur?" },
  { id: "hesaplamada-kullanilan-veriler", label: "Erken bozma kaybı nasıl oluşur?" },
  { id: "temel-formul", label: "Erken bozma kaybı formülü" },
  { id: "faiz-kaybi", label: "Kazanılmayan faiz nasıl bulunur?" },
  { id: "stopaj-etkisi", label: "Kazanılmayan faiz nasıl bulunur?" },
  { id: "kismi-cekim", label: "Kısmi çekim yapılabilir mi?" },
  { id: "ornek-hesaplama", label: "Kısmi çekim yapılabilir mi?" },
  { id: "vade-senaryolari", label: "Farklı günlerde bozma senaryoları" },
  { id: "banka-uygulamalari", label: "Bankaların uygulamaları" },
  { id: "alternatif-maliyet", label: "Alternatif maliyet nasıl hesaplanır?" },
  { id: "ne-zaman-mantikli", label: "Ne zaman mantıklı olabilir?" },
  { id: "kontrol-listesi", label: "Karar öncesi kontrol listesi" },
  { id: "sik-hatalar", label: "Sık yapılan hatalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const faqItems = [
  {
    question: "Mevduatı erken bozmak ne demektir?",
    answer:
      "Vadeli hesaptaki parayı sözleşmede belirtilen vade sonu gelmeden çekmek veya hesabı kapatmaktır.",
  },
  {
    question: "Vadeli hesap erken bozulursa faiz tamamen yanar mı?",
    answer:
      "Birçok klasik vadeli üründe vade bozulduğunda faiz ödenmeyebilir. Bazı ürünlerde ise daha düşük oran, günlük faiz veya kısmi ödeme uygulanabilir.",
  },
  {
    question: "Erken bozma kaybı nasıl hesaplanır?",
    answer:
      "Vade sonunda elde edilecek net faiz ile erken bozma halinde alınabilecek net faiz arasındaki fark hesaplanır.",
  },
  {
    question: "Erken bozma cezası var mı?",
    answer:
      "Çoğu üründe ayrı bir para cezası yerine kazanılmış görünen faizin ödenmemesi veya daha düşük orana dönülmesi söz konusudur.",
  },
  {
    question: "Ana para kaybedilir mi?",
    answer:
      "Normal koşullarda ana para kaybedilmez; kayıp çoğunlukla kazanılması beklenen faiz gelirinden oluşur.",
  },
  {
    question: "Stopaj erken bozma kaybını etkiler mi?",
    answer:
      "Evet. Karşılaştırma brüt değil net faiz üzerinden yapılmalıdır; uygulanacak stopaj net kaybı değiştirir.",
  },
  {
    question: "Kısmi çekim yapılabilir mi?",
    answer:
      "Ürün koşullarına göre yalnızca bir kısmı çekilebilir ve kalan tutar vadeye devam edebilir. Klasik hesaplarda kısmi çekim tüm vadeyi bozabilir.",
  },
  {
    question: "Vadenin son gününde bozmak kayıp oluşturur mu?",
    answer:
      "Bankanın vade bitiş saati ve valör kuralı önemlidir. Vade tamamlanmadan yapılan çekim faiz kaybına yol açabilir.",
  },
  {
    question: "Otomatik yenilenen hesap nasıl bozulur?",
    answer:
      "Yenileme sonrası yeni bir vade başlar. Hesap yeni vade içinde kapatılırsa yeni dönemin faiz hakkı ürün koşullarına göre kaybedilebilir.",
  },
  {
    question: "Erken bozma yerine kredi kullanmak mantıklı mı?",
    answer:
      "Kredinin toplam maliyeti, mevduatı bozmanın net kaybından düşükse düşünülebilir; ancak borçlanma riski ayrıca değerlendirilmelidir.",
  },
  {
    question: "Erken bozma kaybı ile alternatif maliyet aynı şey mi?",
    answer:
      "Hayır. Erken bozma kaybı kazanılmayan mevduat faizidir; alternatif maliyet paranın başka bir seçenekte sağlayabileceği getiriyi de kapsar.",
  },
  {
    question: "Banka neden farklı bir sonuç gösterebilir?",
    answer:
      "Valör, gün esası, ürün tipi, kampanya şartı, kısmi çekim imkânı ve yuvarlama yöntemi sonucu değiştirebilir.",
  },
  {
    question: "Mevduatı erken bozmak kredi notunu etkiler mi?",
    answer:
      "Vadeli hesabı kapatmak tek başına kredi notunu doğrudan düşürmez.",
  },
  {
    question: "Döviz veya altın mevduatında erken bozma olur mu?",
    answer:
      "Vadeli döviz ve kıymetli maden hesaplarında da ürün koşullarına göre erken çekim sonucu faiz veya getiri kaybı oluşabilir.",
  },
  {
    question: "Mobil bankacılıktan erken bozma yapılabilir mi?",
    answer:
      "Birçok bankada yapılabilir; fakat bazı özel ürünlerde şube, saat veya işlem günü kısıtı bulunabilir.",
  },
  {
    question: "Erken bozma kaybı hesaplama aracı ne gösterir?",
    answer:
      "Vade sonu net kazancı, erken çekim halinde alınabilecek tutarı ve aradaki tahmini kaybı karşılaştırır.",
  },
  {
    question: "Hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Sonuç tahminidir; kesin tutar bankanın ürün sözleşmesi ve işlem anındaki kurallarına göre belirlenir.",
  },
  {
    question: "Bu rehber yatırım tavsiyesi midir?",
    answer:
      "Hayır. Rehber genel bilgilendirme ve hesaplama amacı taşır.",
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

const maturityRows = [
  {
    days: "1 gün",
    gross: "123,29 TL",
    withholding: "18,49 TL",
    net: "104,80 TL",
    total: "100.104,80 TL",
  },
  {
    days: "32 gün",
    gross: "3.945,21 TL",
    withholding: "591,78 TL",
    net: "3.353,43 TL",
    total: "103.353,43 TL",
  },
  {
    days: "46 gün",
    gross: "5.671,23 TL",
    withholding: "850,68 TL",
    net: "4.820,55 TL",
    total: "104.820,55 TL",
  },
  {
    days: "92 gün",
    gross: "11.342,47 TL",
    withholding: "1.701,37 TL",
    net: "9.641,10 TL",
    total: "109.641,10 TL",
  },
];

const rateComparisonRows = [
  {
    rate: "%42",
    gross: "3.682,19 TL",
    withholding: "552,33 TL",
    net: "3.129,86 TL",
    total: "103.129,86 TL",
  },
  {
    rate: "%45",
    gross: "3.945,21 TL",
    withholding: "591,78 TL",
    net: "3.353,43 TL",
    total: "103.353,43 TL",
  },
  {
    rate: "%48",
    gross: "4.208,22 TL",
    withholding: "631,23 TL",
    net: "3.576,99 TL",
    total: "103.576,99 TL",
  },
];

export default function MevduatFaiziHesaplamaRehberiPage() {
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
        <section className="relative overflow-hidden border-b border-slate-200 bg-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_34%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.10),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <Breadcrumb
              items={[
                { label: "Ana Sayfa", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: pageTitle },
              ]}
            />

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <BadgePercent className="h-4 w-4" />
                  Mevduat ve faiz rehberi
                </div>

                <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                  Mevduat faizi nasıl hesaplanır?
                </h1>

                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                  Ana para, yıllık faiz oranı, vade gün sayısı, stopaj ve gün
                  esası birlikte değerlendirilmeden gerçek kazanç görülemez.
                  Bu rehberde mevduat faizini adım adım, açık formüller ve
                  karşılaştırmalı tablolarla ele alıyoruz.
                </p>

                <div className="mt-7 flex flex-wrap gap-3 text-sm text-slate-600">
                  <FeaturePill icon={<Calculator className="h-4 w-4" />}>
                    Adım adım formül
                  </FeaturePill>
                  <FeaturePill icon={<ReceiptText className="h-4 w-4" />}>
                    Brüt, stopaj ve net kazanç
                  </FeaturePill>
                  <FeaturePill icon={<ChartNoAxesCombined className="h-4 w-4" />}>
                    Oran ve vade karşılaştırması
                  </FeaturePill>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/hesaplamalar/mevduat-erken-bozma-kaybi"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                  >
                    Mevduat faizini hesapla
                    <ArrowRight className="h-5 w-5" />
                  </Link>

                  <Link
                    href="#temel-formul"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
                  >
                    Formülü incele
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <CircleDollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Örnek hesap
                    </p>
                    <p className="font-bold text-slate-950">
                      100.000 TL · %45 · 32 gün
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <SummaryRow label="Brüt faiz" value="3.945,21 TL" />
                  <SummaryRow label="Stopaj (%15 örnek)" value="591,78 TL" />
                  <SummaryRow label="Net kazanç" value="3.353,43 TL" highlight />
                  <div className="border-t border-slate-200 pt-4">
                    <SummaryRow label="Vade sonu tutarı" value="103.353,43 TL" strong />
                  </div>
                </div>

                <p className="mt-5 rounded-2xl bg-amber-50 p-4 text-xs leading-5 text-amber-800">
                  Bu örnek 365 gün esası ve varsayımsal %15 stopaj üzerinden
                  hazırlanmıştır. Güncel oranlar ve banka kuralları farklılık
                  gösterebilir.
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <ShareButtons title={pageTitle} description={pageDescription} />
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 lg:py-14">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="İçindekiler"
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 text-slate-950">
                <ListChecks className="h-5 w-5 text-blue-600" />
                <h2 className="font-extrabold">İçindekiler</h2>
              </div>

              <ol className="mt-4 space-y-1">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex gap-3 rounded-xl px-3 py-2 text-sm leading-5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                    >
                      <span className="font-bold text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-5 rounded-3xl bg-slate-950 p-5 text-white shadow-sm">
              <Landmark className="h-7 w-7 text-blue-300" />
              <h2 className="mt-4 text-lg font-black">
                Teklifleri aynı koşullarda karşılaştır
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Farklı ana para veya vade kullanıldığında yalnızca faiz oranına
                bakmak doğru sonuç vermez.
              </p>
              <Link
                href="/hesaplamalar/mevduat-faiz-orani-karsilastirma"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue-300 hover:text-blue-200"
              >
                Oranları karşılaştır
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>

          <article className="min-w-0 space-y-8">
            <ArticleSection
              id="erken-bozma-nedir"
              eyebrow="Temel bilgi"
              title="Mevduatı erken bozmak nedir?"
              icon={<Landmark className="h-6 w-6" />}
            >
              <p>
                Mevduat faizi, bankada tutulan birikimin belirli bir süre
                boyunca bankanın kullanımında kalması karşılığında elde edilen
                geliridir. Tasarruf sahibi parasını hesaba yatırır; banka ise
                ilan ettiği yıllık brüt oranı, vade süresini ve ürün şartlarını
                kullanarak dönemsel faiz kazancını hesaplar.
              </p>

              <p>
                Buradaki en önemli ayrıntı, bankanın ekranda gösterdiği oranın
                çoğunlukla <strong>yıllık ve brüt</strong> olmasıdır. Örneğin
                yıllık %45 oran, 32 gün sonunda ana paranın %45&apos;i kadar
                kazanç elde edileceği anlamına gelmez. Yıllık oran yalnızca 32
                günlük süreye orantılanır.
              </p>

              <InfoBox
                title="Faiz oranını tek başına değerlendirmeyin"
                icon={<Lightbulb className="h-5 w-5" />}
              >
                Aynı yıllık oran, farklı gün esası, stopaj oranı, valör tarihi
                veya vade süresi kullanıldığında farklı net kazanç üretebilir.
                Karşılaştırmanın merkezinde net vade sonu tutarı olmalıdır.
              </InfoBox>

              <div className="grid gap-4 md:grid-cols-3">
                <MetricCard
                  icon={<Banknote className="h-6 w-6" />}
                  title="Ana para"
                  description="Faiz kazancı sağlayacak başlangıç tutarıdır."
                />
                <MetricCard
                  icon={<BadgePercent className="h-6 w-6" />}
                  title="Yıllık oran"
                  description="Bankanın ilan ettiği brüt faiz oranıdır."
                />
                <MetricCard
                  icon={<CalendarDays className="h-6 w-6" />}
                  title="Vade"
                  description="Paranın faiz kazanacağı gün sayısını gösterir."
                />
              </div>
            </ArticleSection>

            <ArticleSection
              id="kayip-nasil-olusur"
              eyebrow="Girdiler"
              title="Mevduat faizi hesaplanırken hangi bilgiler kullanılır?"
              icon={<ListChecks className="h-6 w-6" />}
            >
              <p>
                Sağlıklı bir hesaplama için yalnızca ana para ve faiz oranı
                yeterli değildir. Vade gün sayısı, bankanın kullandığı gün
                esası, stopaj oranı ve paranın faiz kazanmaya başladığı valör
                tarihi de sonuca doğrudan etki eder.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <DetailCard
                  number="01"
                  title="Ana para"
                  description="Mevduata bağlanan başlangıç bakiyesidir. Faiz bu tutar üzerinden hesaplanır."
                />
                <DetailCard
                  number="02"
                  title="Yıllık brüt faiz oranı"
                  description="Bankanın teklif ekranında gördüğünüz, henüz vergi kesintisi uygulanmamış yıllık orandır."
                />
                <DetailCard
                  number="03"
                  title="Vade gün sayısı"
                  description="Faizin kaç gün için hesaplanacağını belirler. Takvim günü ile ürün günü aynı olmayabilir."
                />
                <DetailCard
                  number="04"
                  title="Gün esası"
                  description="Yıllık oranın 360 ya da 365 güne bölünmesi hesaplama sonucunu etkiler."
                />
                <DetailCard
                  number="05"
                  title="Stopaj oranı"
                  description="Brüt faiz gelirinden yapılacak vergi kesintisinin oranıdır."
                />
                <DetailCard
                  number="06"
                  title="Valör tarihi"
                  description="Yatırılan paranın faiz kazanmaya başladığı tarihtir; bazı ürünlerde işlem gününden farklı olabilir."
                />
              </div>

              <WarningBox title="Güncel mevzuatı kontrol edin">
                Stopaj oranları ve ürün koşulları zaman içinde değişebilir.
                Hesaplama sırasında bankanın güncel sözleşmesi ve resmi
                düzenlemeler esas alınmalıdır.
              </WarningBox>
            </ArticleSection>

            <ArticleSection
              id="hesaplamada-kullanilan-veriler"
              eyebrow="Formül"
              title="Temel mevduat faizi hesaplama formülü"
              icon={<Calculator className="h-6 w-6" />}
            >
              <p>
                Basit vadeli mevduatta bir dönem için brüt faiz kazancı aşağıdaki
                temel formülle tahmin edilebilir:
              </p>

              <FormulaBox>
                Brüt Faiz = Ana Para × (Yıllık Faiz Oranı ÷ 100) ×
                (Vade Gün Sayısı ÷ Gün Esası)
              </FormulaBox>

              <p>
                Formülde faiz oranı yüzde biçiminden ondalık biçime çevrilir.
                Örneğin %45 oran hesaplamada <strong>0,45</strong> olarak
                kullanılır. Gün esası bankaya veya ürüne göre 360 ya da 365
                olabilir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <h3 className="text-lg font-black text-blue-950">
                  100.000 TL için hızlı örnek
                </h3>
                <div className="mt-5 space-y-3 font-mono text-sm text-blue-900 sm:text-base">
                  <p>100.000 × 0,45 × (32 ÷ 365)</p>
                  <p>= 45.000 × 0,087671</p>
                  <p className="font-black">= 3.945,21 TL brüt faiz</p>
                </div>
              </div>

              <p>
                Bu tutar henüz hesaba geçecek net kazanç değildir. Brüt faiz
                üzerinden stopaj hesaplanmalı ve brüt kazançtan çıkarılmalıdır.
              </p>
            </ArticleSection>

            <ArticleSection
              id="temel-formul"
              eyebrow="Kazanç türleri"
              title="Brüt faiz ile net faiz arasındaki fark"
              icon={<Scale className="h-6 w-6" />}
            >
              <p>
                Brüt faiz, mevduatın vergi kesintisi öncesindeki kazancını
                gösterir. Net faiz ise kesintilerden sonra hesaba geçen gerçek
                tutardır. Bu nedenle bütçe planlamasında ve banka
                karşılaştırmasında net tutar dikkate alınmalıdır.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <ComparisonCard
                  title="Brüt faiz"
                  icon={<TrendingUp className="h-6 w-6" />}
                  items={[
                    "Vergi kesintisi öncesi kazançtır.",
                    "İlan edilen yıllık oran üzerinden hesaplanır.",
                    "Tek başına hesaba geçecek tutarı göstermez.",
                  ]}
                />
                <ComparisonCard
                  title="Net faiz"
                  icon={<WalletCards className="h-6 w-6" />}
                  items={[
                    "Stopaj sonrası gerçek kazançtır.",
                    "Vade sonunda ana paraya eklenebilir.",
                    "Teklif karşılaştırmasında daha anlamlıdır.",
                  ]}
                />
              </div>

              <FormulaBox>
                Net Faiz = Brüt Faiz − Stopaj Tutarı
              </FormulaBox>

              <FormulaBox>
                Vade Sonu Tutarı = Ana Para + Net Faiz
              </FormulaBox>
            </ArticleSection>

            <ArticleSection
              id="faiz-kaybi"
              eyebrow="Vergi etkisi"
              title="Stopaj mevduat kazancını nasıl etkiler?"
              icon={<ReceiptText className="h-6 w-6" />}
            >
              <p>
                Stopaj, faiz gelirinin kaynağında kesilen vergi kısmıdır. Banka,
                hesaplanan brüt faiz üzerinden ilgili oranı uygular ve kalan
                net kazancı hesaba aktarır. Stopaj ana paradan değil, faiz
                gelirinden kesilir.
              </p>

              <FormulaBox>
                Stopaj Tutarı = Brüt Faiz × (Stopaj Oranı ÷ 100)
              </FormulaBox>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="font-black text-slate-950">
                  Örnek stopaj hesabı
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <SmallStat label="Brüt faiz" value="3.945,21 TL" />
                  <SmallStat label="Örnek stopaj" value="%15" />
                  <SmallStat label="Kesinti" value="591,78 TL" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  3.945,21 TL − 591,78 TL =
                  <strong className="ml-1 text-slate-950">3.353,43 TL net faiz</strong>
                </p>
              </div>

              <InfoBox
                title="Stopaj oranı vade yapısına göre değişebilir"
                icon={<ShieldCheck className="h-5 w-5" />}
              >
                Farklı para birimleri, hesap türleri veya vade grupları için
                farklı oranlar uygulanabilir. Araçta güncel oranı manuel olarak
                girmek en güvenli yaklaşımdır.
              </InfoBox>
            </ArticleSection>

            <ArticleSection
              id="stopaj-etkisi"
              eyebrow="Teknik ayrıntı"
              title="360 gün ve 365 gün esası neden önemlidir?"
              icon={<CalendarDays className="h-6 w-6" />}
            >
              <p>
                Yıllık faiz oranının dönemsel kazanca çevrilmesinde kullanılan
                payda, sonuç üzerinde küçük fakat özellikle yüksek tutarlarda
                önemli olabilecek bir fark yaratır. Aynı ana para, oran ve vade
                için 360 gün esası, 365 gün esasına göre daha yüksek dönemsel
                brüt faiz oluşturur.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-bold">Gün esası</th>
                        <th className="px-5 py-4 font-bold">Formül</th>
                        <th className="px-5 py-4 font-bold">Brüt kazanç</th>
                        <th className="px-5 py-4 font-bold">Fark</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="px-5 py-4 font-bold text-slate-950">365 gün</td>
                        <td className="px-5 py-4 text-slate-600">100.000 × 0,45 × 32 / 365</td>
                        <td className="px-5 py-4 text-slate-700">3.945,21 TL</td>
                        <td className="px-5 py-4 text-slate-500">Referans</td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-bold text-slate-950">360 gün</td>
                        <td className="px-5 py-4 text-slate-600">100.000 × 0,45 × 32 / 360</td>
                        <td className="px-5 py-4 text-slate-700">4.000,00 TL</td>
                        <td className="px-5 py-4 font-bold text-emerald-700">+54,79 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p>
                Bankanın teklif dokümanında gün esasını göremiyorsanız müşteri
                hizmetlerinden veya sözleşmeden teyit edin. Hesaplama aracı ile
                banka sonucunun küçük farklılık göstermesinin en yaygın
                nedenlerinden biri bu ayrıntıdır.
              </p>
            </ArticleSection>

            <ArticleSection
              id="kismi-cekim"
              eyebrow="Uygulama"
              title="Mevduat faizi adım adım nasıl hesaplanır?"
              icon={<Coins className="h-6 w-6" />}
            >
              <p>
                Aşağıdaki örnekte 100.000 TL ana para, yıllık %45 brüt faiz,
                32 günlük vade, 365 gün esası ve örnek %15 stopaj kullanılmıştır.
              </p>

              <div className="space-y-4">
                <StepCard
                  step="1"
                  title="Faiz oranını ondalık biçime çevirin"
                  description="%45 ÷ 100 = 0,45"
                />
                <StepCard
                  step="2"
                  title="Vade oranını bulun"
                  description="32 ÷ 365 = 0,087671"
                />
                <StepCard
                  step="3"
                  title="Brüt faiz kazancını hesaplayın"
                  description="100.000 × 0,45 × 0,087671 = 3.945,21 TL"
                />
                <StepCard
                  step="4"
                  title="Stopaj tutarını bulun"
                  description="3.945,21 × 0,15 = 591,78 TL"
                />
                <StepCard
                  step="5"
                  title="Net kazancı ve toplam bakiyeyi bulun"
                  description="Net faiz 3.353,43 TL, vade sonu tutarı 103.353,43 TL"
                />
              </div>

              <ResultBox
                title="Örneğin sonucu"
                items={[
                  ["Ana para", "100.000,00 TL"],
                  ["Brüt faiz", "3.945,21 TL"],
                  ["Stopaj", "591,78 TL"],
                  ["Net faiz", "3.353,43 TL"],
                  ["Vade sonu", "103.353,43 TL"],
                ]}
              />
            </ArticleSection>

            <ArticleSection
              id="ornek-hesaplama"
              eyebrow="Vade analizi"
              title="Farklı vadelere göre mevduat kazancı"
              icon={<Clock3 className="h-6 w-6" />}
            >
              <p>
                Vade uzadıkça aynı yıllık oran altında dönemsel faiz kazancı
                artar. Ancak bankalar her vadeye aynı oranı vermeyebilir.
                Aşağıdaki tablo karşılaştırma mantığını göstermek için tüm
                vadelerde aynı %45 yıllık oran ve %15 örnek stopaj kullanır.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-bold">Vade</th>
                        <th className="px-5 py-4 font-bold">Brüt faiz</th>
                        <th className="px-5 py-4 font-bold">Stopaj</th>
                        <th className="px-5 py-4 font-bold">Net faiz</th>
                        <th className="px-5 py-4 font-bold">Vade sonu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {maturityRows.map((row) => (
                        <tr key={row.days} className="hover:bg-slate-50">
                          <td className="px-5 py-4 font-bold text-slate-950">{row.days}</td>
                          <td className="px-5 py-4 text-slate-700">{row.gross}</td>
                          <td className="px-5 py-4 text-slate-700">{row.withholding}</td>
                          <td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td>
                          <td className="px-5 py-4 font-bold text-slate-950">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <WarningBox title="Tablo, oranların sabit kaldığını varsayar">
                Gerçekte banka 32 gün için yüksek, 92 gün için daha düşük veya
                daha yüksek oran sunabilir. Vade kararını güncel tekliflere göre
                vermek gerekir.
              </WarningBox>

              <LinkCard
                href="/hesaplamalar/mevduat-vade-karsilastirma"
                title="Mevduat vade karşılaştırma aracını kullanın"
                description="Aynı ana para için farklı vade seçeneklerinin net sonuçlarını yan yana görün."
              />
            </ArticleSection>

            <ArticleSection
              id="vade-senaryolari"
              eyebrow="Teklif analizi"
              title="Mevduat faiz oranları nasıl karşılaştırılır?"
              icon={<ChartNoAxesCombined className="h-6 w-6" />}
            >
              <p>
                Karşılaştırma yaparken ana para, vade, stopaj ve gün esası aynı
                tutulmalıdır. Aksi halde oran farkının gerçek etkisini görmek
                zorlaşır. Aşağıdaki tablo 100.000 TL ve 32 günlük vade için üç
                yıllık brüt oranı karşılaştırır.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm">
                    <thead className="bg-blue-700 text-white">
                      <tr>
                        <th className="px-5 py-4 font-bold">Yıllık oran</th>
                        <th className="px-5 py-4 font-bold">Brüt faiz</th>
                        <th className="px-5 py-4 font-bold">Stopaj</th>
                        <th className="px-5 py-4 font-bold">Net faiz</th>
                        <th className="px-5 py-4 font-bold">Vade sonu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {rateComparisonRows.map((row) => (
                        <tr key={row.rate} className="hover:bg-blue-50/50">
                          <td className="px-5 py-4 font-black text-blue-700">{row.rate}</td>
                          <td className="px-5 py-4 text-slate-700">{row.gross}</td>
                          <td className="px-5 py-4 text-slate-700">{row.withholding}</td>
                          <td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td>
                          <td className="px-5 py-4 font-bold text-slate-950">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <InfoBox
                title="Oran farkını TL cinsinden görün"
                icon={<CircleDollarSign className="h-5 w-5" />}
              >
                %42 ile %48 arasındaki 6 puanlık fark, bu örnekte 32 gün için
                net kazancı yaklaşık 447 TL değiştirir. Ana para büyüdükçe fark
                da aynı oranda büyür.
              </InfoBox>

              <LinkCard
                href="/hesaplamalar/mevduat-faiz-orani-karsilastirma"
                title="Üç faiz teklifini tek ekranda karşılaştırın"
                description="Brüt kazanç, stopaj, net kazanç ve vade sonu tutarlarını otomatik hesaplayın."
              />
            </ArticleSection>

            <ArticleSection
              id="banka-uygulamalari"
              eyebrow="Yıllıklaştırma"
              title="Efektif yıllık mevduat getirisi nedir?"
              icon={<TrendingUp className="h-6 w-6" />}
            >
              <p>
                Kısa vadeli mevduat yıl içinde tekrar tekrar yenilenirse her
                dönemin net faizi ana paraya eklenebilir. Sonraki dönem daha
                yüksek bakiye üzerinden faiz kazanıldığı için toplam yıllık
                getiri basit yıllık oranla aynı olmayabilir.
              </p>

              <FormulaBox>
                Efektif Getiri = (1 + Dönemsel Net Oran)ⁿ − 1
              </FormulaBox>

              <p>
                Buradaki <strong>n</strong>, aynı vadeli dönemin yıl içinde kaç
                kez tekrarlandığını ifade eder. Ancak gerçek hayatta her
                yenilemede faiz oranı değişebileceği için efektif sonuç bir
                senaryo tahminidir, garanti edilmiş getiri değildir.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <MetricCard
                  icon={<RefreshCw className="h-6 w-6" />}
                  title="Yenileme sayısı"
                  description="Kısa vadenin yıl içinde kaç kez tamamlandığını gösterir."
                />
                <MetricCard
                  icon={<Coins className="h-6 w-6" />}
                  title="Faizin ana paraya eklenmesi"
                  description="Bileşik etkinin oluşması için net kazancın yeniden bağlanması gerekir."
                />
              </div>
            </ArticleSection>

            <ArticleSection
              id="alternatif-maliyet"
              eyebrow="Bileşik etki"
              title="Mevduat yenileme kazancı nasıl büyütür?"
              icon={<RefreshCw className="h-6 w-6" />}
            >
              <p>
                Vade sonunda yalnızca ana para yeniden bağlanırsa her dönem
                yaklaşık aynı nominal tutar faiz kazanır. Net faiz de ana paraya
                eklenirse sonraki dönemin başlangıç bakiyesi yükselir ve bileşik
                getiri etkisi oluşur.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <ComparisonCard
                  title="Faiz çekilirse"
                  icon={<TrendingDown className="h-6 w-6" />}
                  items={[
                    "Ana para sabit kalır.",
                    "Her dönem benzer tutar faiz oluşur.",
                    "Bileşik büyüme sınırlanır.",
                  ]}
                />
                <ComparisonCard
                  title="Faiz ana paraya eklenirse"
                  icon={<TrendingUp className="h-6 w-6" />}
                  items={[
                    "Yeni dönem bakiyesi artar.",
                    "Faiz de faiz kazanmaya başlar.",
                    "Uzun dönemde bileşik etki oluşur.",
                  ]}
                />
              </div>

              <LinkCard
                href="/hesaplamalar/mevduat-faiz-yenileme"
                title="Mevduat faiz yenileme hesabı yapın"
                description="Birden fazla yenileme döneminde bakiyenin nasıl büyüdüğünü dönem dönem inceleyin."
              />
            </ArticleSection>

            <ArticleSection
              id="ne-zaman-mantikli"
              eyebrow="Satın alma gücü"
              title="Enflasyon sonrası reel mevduat getirisi"
              icon={<Scale className="h-6 w-6" />}
            >
              <p>
                Mevduat hesabındaki TL bakiyenin artması, satın alma gücünün de
                aynı ölçüde arttığı anlamına gelmez. Net nominal getiri,
                enflasyonun altında kalırsa hesap bakiyesi büyürken gerçek satın
                alma gücü azalabilir.
              </p>

              <FormulaBox>
                Reel Getiri = ((1 + Net Getiri) ÷ (1 + Enflasyon)) − 1
              </FormulaBox>

              <p>
                Örneğin aynı dönemde net getiri %35, enflasyon %40 ise basitçe
                35 − 40 = −5 puan demek yaklaşık fikir verir; fakat doğru reel
                oran bölme formülüyle hesaplanmalıdır.
              </p>

              <InfoBox
                title="Nominal kazanç ile reel kazancı ayırın"
                icon={<Lightbulb className="h-5 w-5" />}
              >
                Vade sonu tutarı günlük bütçe planı için önemlidir. Uzun vadeli
                birikim başarısını değerlendirirken ise satın alma gücü değişimi
                de ayrıca izlenmelidir.
              </InfoBox>

              <LinkCard
                href="/hesaplamalar/mevduat-reel-getiri"
                title="Reel mevduat getirisini hesaplayın"
                description="Net faiz kazancını enflasyon etkisinden arındırarak satın alma gücü değişimini görün."
              />
            </ArticleSection>

            <ArticleSection
              id="kontrol-listesi"
              eyebrow="İnce ayrıntılar"
              title="Mevduat kampanyalarında hangi koşullar kontrol edilmeli?"
              icon={<ShieldCheck className="h-6 w-6" />}
            >
              <p>
                Yüksek görünen bir hoş geldin faizi, yalnızca belirli tutar
                aralığında veya sınırlı gün sayısında geçerli olabilir. Bazı
                teklifler yeni müşteri, yeni para, mobil kanal ya da ek ürün
                şartı içerebilir.
              </p>

              <Checklist
                items={[
                  "Oranın hangi ana para aralığında geçerli olduğunu kontrol edin.",
                  "Kampanyanın yalnızca yeni müşteri veya yeni para şartı taşıyıp taşımadığını öğrenin.",
                  "Vade sonunda otomatik yenileme oranının kampanya oranından farklı olabileceğini unutmayın.",
                  "Faiz kazanmayan alt bakiye veya vadesiz hesapta kalan tutar olup olmadığını kontrol edin.",
                  "Valör tarihini ve paranın hangi gün faiz kazanmaya başlayacağını teyit edin.",
                  "Erken bozma durumunda faiz kaybı veya oran değişikliği olup olmadığını okuyun.",
                  "Stopaj ve diğer kesintilerin net kazanca etkisini hesaplayın.",
                  "Teklifin dijital kanal, otomatik ödeme veya kart kullanımı gibi ek koşullarını inceleyin.",
                ]}
              />

              <WarningBox title="İlk dönem oranına aldanmayın">
                Kampanya oranı yalnızca ilk vade için geçerliyse, uzun vadeli
                toplam getiriyi hesaplarken sonraki dönem için daha düşük bir
                yenileme oranı senaryosu da değerlendirilmelidir.
              </WarningBox>
            </ArticleSection>

            <ArticleSection
              id="sik-hatalar"
              eyebrow="Kontrol listesi"
              title="Mevduat faizi hesaplanırken sık yapılan hatalar"
              icon={<AlertTriangle className="h-6 w-6" />}
            >
              <div className="space-y-4">
                <MistakeCard
                  title="Yıllık oranı doğrudan vade oranı sanmak"
                  description="Yıllık %45 oran, 32 günde %45 kazanç anlamına gelmez. Oran vade gününe göre orantılanmalıdır."
                />
                <MistakeCard
                  title="Brüt kazancı net kazanç kabul etmek"
                  description="Brüt faizden stopaj düşülmeden hesaba geçecek gerçek tutar bulunamaz."
                />
                <MistakeCard
                  title="Stopajın erken bozma kaybına etkisinı göz ardı etmek"
                  description="Paydadaki fark özellikle yüksek ana paralarda banka sonucu ile hesaplama sonucu arasında fark oluşturabilir."
                />
                <MistakeCard
                  title="Kampanya üst limitini kontrol etmemek"
                  description="Yüksek oran tüm ana paraya değil yalnızca belirli bir tutara uygulanıyor olabilir."
                />
                <MistakeCard
                  title="Valör tarihini hesaba katmamak"
                  description="Para işlem gününde değil sonraki iş gününde faiz kazanmaya başlayabilir."
                />
                <MistakeCard
                  title="Yenileme oranının aynı kalacağını varsaymak"
                  description="Vade sonunda güncel piyasa ve banka politikası nedeniyle oran değişebilir."
                />
                <MistakeCard
                  title="Enflasyon etkisini tamamen unutmak"
                  description="Nominal bakiye artışı pozitif olsa bile reel satın alma gücü düşebilir."
                />
              </div>
            </ArticleSection>

            <section
              id="sss"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                    Merak edilenler
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
                    Mevduat faizi hakkında sık sorulan sorular
                  </h2>
                </div>
              </div>

              <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200">
                {faqItems.map((item, index) => (
                  <details
                    key={item.question}
                    className="group p-5 open:bg-slate-50"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-slate-950">
                      <span>
                        {index + 1}. {item.question}
                      </span>
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-open:rotate-45 group-open:bg-blue-100 group-open:text-blue-700">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 pr-8 leading-7 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-emerald-600 p-6 text-white shadow-xl shadow-blue-900/15 sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    Ücretsiz hesaplama aracı
                  </div>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                    Mevduat kazancınızı saniyeler içinde hesaplayın
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-blue-50">
                    Ana para, faiz oranı, vade, stopaj ve gün esasını girin;
                    brüt faiz, kesinti, net kazanç ve vade sonu tutarını tek
                    ekranda görün.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/mevduat-erken-bozma-kaybi"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-black text-blue-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Hesaplamaya başla
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </section>

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <Calculator className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-black text-slate-950">
                  İlgili hesaplama araçları
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <RelatedTool
                  href="/hesaplamalar/vadeli-mevduat-hesaplama"
                  title="Vadeli Mevduat Hesaplama"
                  description="Vade sonu net kazancı ve toplam bakiyeyi hesaplayın."
                />
                <RelatedTool
                  href="/hesaplamalar/mevduat-faiz-orani-karsilastirma"
                  title="Faiz Oranı Karşılaştırma"
                  description="Üç farklı banka teklifini aynı koşullarda kıyaslayın."
                />
                <RelatedTool
                  href="/hesaplamalar/mevduat-vade-karsilastirma"
                  title="Mevduat Vade Karşılaştırma"
                  description="Farklı vade seçeneklerinin net sonuçlarını görün."
                />
                <RelatedTool
                  href="/hesaplamalar/mevduat-reel-getiri"
                  title="Mevduat Reel Getiri"
                  description="Faiz kazancını enflasyon etkisinden arındırın."
                />
                <RelatedTool
                  href="/hesaplamalar/mevduat-faiz-yenileme"
                  title="Mevduat Faiz Yenileme"
                  description="Birden fazla dönemde bileşik büyümeyi inceleyin."
                />
                <RelatedTool
                  href="/hesaplamalar/stopaj-hesaplama"
                  title="Stopaj Hesaplama"
                  description="Brüt gelir üzerindeki kesinti ve net tutarı bulun."
                />
              </div>
            </section>

            <section className="rounded-3xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <LockKeyhole className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black text-amber-950">
                    Bilgilendirme ve sorumluluk reddi
                  </h2>
                  <p className="mt-3 leading-7 text-amber-900/80">
                    Bu sayfadaki formüller, oranlar ve örnekler genel
                    bilgilendirme amacıyla hazırlanmıştır. Stopaj oranları,
                    bankaların gün esası, valör, kampanya, yuvarlama ve erken
                    bozma kuralları değişebilir. Kesin sonuç için bankanın güncel
                    sözleşmesini ve resmi düzenlemeleri kontrol edin. İçerik
                    yatırım tavsiyesi değildir.
                  </p>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
}

function ArticleSection({
  id,
  eyebrow,
  title,
  icon,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
          {icon}
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            {eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-6 space-y-6 text-base leading-8 text-slate-600 sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function FeaturePill({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
      <span className="text-blue-600">{icon}</span>
      {children}
    </span>
  );
}

function SummaryRow({
  label,
  value,
  highlight = false,
  strong = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className={strong ? "font-bold text-slate-950" : "text-slate-600"}>
        {label}
      </span>
      <span
        className={
          highlight
            ? "font-black text-emerald-700"
            : strong
              ? "text-lg font-black text-slate-950"
              : "font-bold text-slate-950"
        }
      >
        {value}
      </span>
    </div>
  );
}

function InfoBox({
  title,
  icon,
  children,
}: {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
      <div className="flex items-center gap-3 font-black text-blue-950">
        <span className="text-blue-700">{icon}</span>
        {title}
      </div>
      <div className="mt-3 text-base leading-7 text-blue-900/80">{children}</div>
    </div>
  );
}

function WarningBox({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
      <div className="flex items-center gap-3 font-black text-amber-950">
        <AlertTriangle className="h-5 w-5 text-amber-700" />
        {title}
      </div>
      <div className="mt-3 text-base leading-7 text-amber-900/80">{children}</div>
    </div>
  );
}

function MetricCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
        {icon}
      </div>
      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function DetailCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 p-5">
      <span className="text-sm font-black text-blue-600">{number}</span>
      <h3 className="mt-2 text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}

function FormulaBox({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-slate-950 p-6 text-center font-mono text-base font-bold leading-8 text-blue-100 shadow-lg sm:text-lg">
      {children}
    </div>
  );
}

function ComparisonCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: ReactNode;
  items: string[];
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
          {icon}
        </div>
        <h3 className="text-xl font-black text-slate-950">{title}</h3>
      </div>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-2 font-black text-slate-950">{value}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-600 font-black text-white">
        {step}
      </div>
      <div>
        <h3 className="font-black text-slate-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
      </div>
    </div>
  );
}

function ResultBox({
  title,
  items,
}: {
  title: string;
  items: [string, string][];
}) {
  return (
    <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
      <div className="flex items-center gap-3">
        <CheckCircle2 className="h-6 w-6 text-emerald-700" />
        <h3 className="text-xl font-black text-emerald-950">{title}</h3>
      </div>
      <dl className="mt-5 divide-y divide-emerald-200/70">
        {items.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 py-3 first:pt-0 last:pb-0">
            <dt className="text-emerald-900/70">{label}</dt>
            <dd className="font-black text-emerald-950">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
        >
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function MistakeCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 rounded-3xl border border-rose-200 bg-rose-50 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
        <AlertTriangle className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-black text-rose-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-rose-900/75">{description}</p>
      </div>
    </div>
  );
}

function LinkCard({
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
      className="group flex items-center justify-between gap-5 rounded-3xl border border-blue-200 bg-blue-50 p-5 transition hover:border-blue-300 hover:bg-blue-100/70"
    >
      <div>
        <h3 className="font-black text-blue-950">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-blue-900/70">{description}</p>
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-blue-700 transition group-hover:translate-x-1" />
    </Link>
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
      className="group rounded-3xl border border-slate-200 p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/60"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-black text-slate-950 transition group-hover:text-blue-700">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
        </div>
        <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600" />
      </div>
    </Link>
  );
}