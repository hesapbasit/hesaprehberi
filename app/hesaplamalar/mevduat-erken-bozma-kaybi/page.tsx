import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  Calculator,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Landmark,
  Percent,
  Scale,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import DepositEarlyWithdrawalLossCalculator from "@/components/calculators/DepositEarlyWithdrawalLossCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
const pageTitle = "Mevduat Erken Bozma Kaybı Hesaplama";
const pageDescription =
  "Vadeli mevduatınızı vade dolmadan bozmanız halinde oluşabilecek tahmini faiz kaybını, erken bozma tutarını ve normal vade sonu kazancını ücretsiz hesaplayın.";
const canonicalUrl =
  "https://https://hesaprehberionline.com/hesaplamalar/mevduat-erken-bozma-kaybi";
export const metadata: Metadata = {
  applicationName: "HesapRehberi",
  authors: [{ name: "HesapRehberi Editör Ekibi", url: "https://https://hesaprehberionline.com" }],
  creator: "HesapRehberi",
  publisher: "HesapRehberi",
  category: "Finans",
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "mevduat erken bozma kaybı",
    "vadeli hesap erken bozma",
    "mevduat bozma hesaplama",
    "vadeli mevduat faiz kaybı",
    "erken çekim faiz kaybı",
    "mevduat vade bozma",
    "vadeli hesap bozulursa ne olur",
    "mevduat faiz hesaplama",
    "erken bozma faiz oranı",
    "vade sonu hesaplama",
    "stopaj hesaplama",
    "mevduat kazanç kaybı",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
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
const faqItems = [
  {
    question: "Mevduat erken bozma kaybı nedir?",
    answer:
      "Mevduat erken bozma kaybı, vadeli hesabın vade tarihi gelmeden kapatılması durumunda normal vade sonunda elde edilebilecek faiz kazancı ile erken bozma sonucunda elde edilen faiz arasındaki farktır.",
  },
  {
    question: "Vadeli mevduat vadesinden önce bozulursa ne olur?",
    answer:
      "Bankanın ürün koşullarına göre faiz kazancının tamamı kaybedilebilir, daha düşük bir faiz oranı uygulanabilir veya geçen gün sayısına göre kısmi faiz ödenebilir. Ana para genellikle müşteriye geri ödenir.",
  },
  {
    question: "Erken bozma halinde ana para kaybedilir mi?",
    answer:
      "Standart vadeli mevduat ürünlerinde erken bozma genellikle ana para kaybına yol açmaz. Ancak faiz getirisi kısmen veya tamamen kaybedilebilir. Ürünün sözleşme şartları mutlaka kontrol edilmelidir.",
  },
  {
    question: "Erken bozma faiz oranı nedir?",
    answer:
      "Erken bozma faiz oranı, bankanın vade tamamlanmadan kapatılan hesap için uyguladığı yıllık faiz oranıdır. Banka faiz ödemiyorsa bu oran sıfır olarak girilebilir.",
  },
  {
    question: "Banka erken bozma halinde hiç faiz ödemezse ne girilmelidir?",
    answer:
      "Hesaplama aracındaki erken bozma faiz oranı alanına sıfır girilmelidir. Böylece erken bozma sonucunda yalnızca ana paranın geri alınacağı varsayılır.",
  },
  {
    question: "Geçen gün sayısı nasıl belirlenir?",
    answer:
      "Geçen gün sayısı, vadeli hesabın açıldığı tarihten hesabın bozulacağı tarihe kadar geçen gün sayısıdır. Bu sayı toplam vade gününü aşmamalıdır.",
  },
  {
    question: "Stopaj erken bozma hesabını etkiler mi?",
    answer:
      "Erken bozma sonucunda faiz kazancı oluşuyorsa bu kazanç üzerinden stopaj kesintisi uygulanabilir. Stopaj oranı arttıkça yatırımcının elde edeceği net faiz azalır.",
  },
  {
    question: "Normal vade sonu tutarı nedir?",
    answer:
      "Normal vade sonu tutarı, ana para ile vade tamamlandığında elde edilecek stopaj sonrası net faiz kazancının toplamıdır.",
  },
  {
    question: "Erken bozma sonrası toplam tutar nedir?",
    answer:
      "Erken bozma sonrası toplam tutar, ana para ile bankanın erken bozma koşullarına göre hesaplanan net faiz kazancının toplamıdır.",
  },
  {
    question: "Kazanç kaybı oranı nasıl hesaplanır?",
    answer:
      "Kaybedilen net faiz tutarı, normal vade sonunda elde edilecek net faize bölünür ve sonuç yüzdeye çevrilir. Böylece normal kazancın ne kadarının kaybedildiği bulunur.",
  },
  {
    question: "Faiz oranı yükseldikçe erken bozma kaybı artar mı?",
    answer:
      "Normal faiz oranı yükselirken erken bozma faiz oranı aynı kalırsa normal vade sonunda elde edilecek kazanç büyür. Bu nedenle erken bozma kaynaklı potansiyel kayıp da artabilir.",
  },
  {
    question: "Vadenin sonuna yakın bozmak daha az kayıp oluşturur mu?",
    answer:
      "Bankanın geçen günler için faiz ödediği ürünlerde vade sonuna yaklaştıkça elde edilen kısmi faiz artabilir. Ancak banka erken bozma halinde hiç faiz ödemiyorsa hesap son günlerde dahi bozulsa faiz kazancının tamamı kaybedilebilir.",
  },
  {
    question: "360 ve 365 gün esası sonucu değiştirir mi?",
    answer:
      "Evet. Faiz hesabında kullanılan gün esası dönemsel faiz tutarını etkiler. Aynı yıllık oran ve vade için 360 gün esasıyla hesaplanan faiz, 365 gün esasına göre bir miktar daha yüksek çıkabilir.",
  },
  {
    question: "Hesaplama bileşik faiz içeriyor mu?",
    answer:
      "Hayır. Araç tek bir mevduat dönemi için basit faiz yöntemiyle tahmini hesaplama yapar. Faizin yeniden ana paraya eklenerek değerlendirildiği bileşik faiz senaryolarını kapsamaz.",
  },
  {
    question: "Erken bozma yerine kredi kullanmak daha mantıklı mı?",
    answer:
      "Bu karar kredi maliyeti, mevduat faiz kaybı, nakit ihtiyacının süresi ve kişisel mali durum gibi birçok etkene bağlıdır. Kredi maliyeti ile mevduat bozma kaybı ayrı ayrı hesaplanarak karşılaştırılmalıdır.",
  },
  {
    question: "Bankanın kesin sonucuyla hesaplama farklı olabilir mi?",
    answer:
      "Evet. Bankaların valör tarihi, küsurat yuvarlama yöntemi, stopaj uygulaması, ürün türü ve erken bozma politikası farklı olabilir. Araç yalnızca girilen değerler üzerinden tahmini sonuç üretir.",
  },
  {
    question: "Bu hesaplama yatırım tavsiyesi sayılır mı?",
    answer:
      "Hayır. Hesaplama yalnızca bilgilendirme amacıyla hazırlanmıştır. Finansal karar vermeden önce bankanızın güncel ürün koşullarını ve sözleşmesini incelemeniz gerekir.",
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
const lastReviewedDate = "23 Temmuz 2026";
const tableOfContents = [
  { href: "#erken-bozma-nedir", label: "Mevduat erken bozma nedir?" },
  { href: "#hesaplama-formulu", label: "Hesaplama formülü" },
  { href: "#banka-uygulamalari", label: "Banka uygulamaları" },
  { href: "#gecen-gun-etkisi", label: "Geçen günün etkisi" },
  { href: "#stopaj", label: "Stopaj uygulaması" },
  { href: "#kaybi-azaltma", label: "Kaybı azaltma yöntemleri" },
  { href: "#karsilastirma", label: "Normal vade karşılaştırması" },
  { href: "#ornek-hesaplama", label: "Örnek hesaplama" },
  { href: "#vade-merdiveni", label: "Vade merdiveni yöntemi" },
  { href: "#alternatif-maliyet", label: "Alternatif maliyet karşılaştırması" },
  { href: "#sik-hatalar", label: "Sık yapılan hatalar" },
  { href: "#karar-kontrol-listesi", label: "Karar kontrol listesi" },
  { href: "#sss", label: "Sık sorulan sorular" },
];
const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://https://hesaprehberionline.com" },
    { "@type": "ListItem", position: 2, name: "Hesaplamalar", item: "https://https://hesaprehberionline.com/hesaplamalar" },
    { "@type": "ListItem", position: 3, name: "Mevduat", item: "https://https://hesaprehberionline.com/hesaplamalar?category=Mevduat" },
    { "@type": "ListItem", position: 4, name: pageTitle, item: canonicalUrl },
  ],
};
const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: canonicalUrl,
  inLanguage: "tr-TR",
  dateModified: "2026-07-23",
  datePublished: "2026-07-23",
  author: {
    "@type": "Organization",
    name: "HesapRehberi Editör Ekibi",
    url: "https://https://hesaprehberionline.com",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
};
export default function DepositEarlyWithdrawalLossPage() {
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
      <a
        href="#hesaplama-araci"
        className="sr-only fixed left-4 top-4 z-[100] rounded-xl bg-white px-4 py-3 font-bold text-slate-950 shadow-xl focus:not-sr-only"
      >
        Hesaplama aracına geç
      </a>
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
                  label: "Mevduat Erken Bozma Kaybı",
                },
              ]}
            />
          </div>
        </section>
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-rose-950 to-orange-950">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-orange-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz mevduat kayıp hesaplama aracı
                </div>
                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Mevduat Erken Bozma Kaybı Hesaplama
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-rose-100 sm:text-lg">
                  Vadeli hesabınızı vade tamamlanmadan kapatmanız halinde
                  kaybedebileceğiniz tahmini faiz kazancını, erken bozma
                  tutarını ve normal vade sonu sonucunu karşılaştırın.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroFeature text="Normal vade karşılaştırması" />
                  <HeroFeature text="Erken bozma hesabı" />
                  <HeroFeature text="Stopaj dahil sonuç" />
                  <HeroFeature text="Anlık kazanç kaybı" />
                </div>
              </div>
              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-rose-700 shadow-xl">
                  <TrendingDown className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-white">
                  Erken bozmak ne kadar kaybettirir?
                </h2>
                <p className="mt-3 text-sm leading-7 text-rose-100">
                  Ana para, normal faiz, geçen gün ve erken bozma faiz oranını
                  girerek iki senaryo arasındaki farkı inceleyin.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <MiniMetric label="Vade" value="Normal" />
                  <MiniMetric label="Bozma" value="Erken" />
                  <MiniMetric label="Fark" value="Anlık" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="hesaplama-araci" aria-labelledby="hesaplama-basligi" className="scroll-mt-24 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <h2 id="hesaplama-basligi" className="sr-only">Mevduat erken bozma kaybı hesaplama aracı</h2>
          <DepositEarlyWithdrawalLossCalculator />
          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Bu aracı faydalı buldunuz mu?
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Mevduat erken bozma kaybı hesaplama aracını paylaşabilirsiniz.
              </p>
            </div>
            <ShareButtons
              title={pageTitle}
              description={pageDescription}
              url={canonicalUrl}
            />
          </div>
          <nav
            aria-label="Sayfa içeriği"
            className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-rose-600">
                  İçindekiler
                </p>
                <h2 className="mt-2 text-xl font-black text-slate-950">
                  Bu rehberde neler var?
                </h2>
              </div>
              <p className="text-sm text-slate-500">
                Son gözden geçirme: {lastReviewedDate}
              </p>
            </div>
            <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {tableOfContents.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-xs font-black text-slate-500 shadow-sm group-hover:text-rose-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>
        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-rose-600">
                Hesaplama rehberi
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat erken bozma kaybı nasıl hesaplanır?
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Erken bozma kaybını hesaplamak için önce mevduatın normal vade
                sonunda sağlayacağı net faiz bulunur. Daha sonra bankanın
                erken bozma halinde uyguladığı faiz oranına göre geçen günler
                için elde edilecek net faiz hesaplanır. İki net kazanç
                arasındaki fark, tahmini erken bozma kaybını gösterir.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <GuideCard
                number="01"
                icon={<Landmark className="h-6 w-6" />}
                title="Ana parayı girin"
                description="Vadeli mevduat hesabındaki başlangıç tutarını yazın."
              />
              <GuideCard
                number="02"
                icon={<Percent className="h-6 w-6" />}
                title="Faizleri belirleyin"
                description="Normal faiz ile erken bozma halinde uygulanacak oranı girin."
              />
              <GuideCard
                number="03"
                icon={<CalendarClock className="h-6 w-6" />}
                title="Geçen günü seçin"
                description="Hesabın kaçıncı gününde bozulacağını belirtin."
              />
              <GuideCard
                number="04"
                icon={<Calculator className="h-6 w-6" />}
                title="Kaybı karşılaştırın"
                description="Normal ve erken bozma sonuçları arasındaki farkı görün."
              />
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="space-y-10">
              <ContentSection
                id="erken-bozma-nedir"
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Mevduat erken bozma ne anlama gelir?"
              >
                <p>
                  Vadeli mevduat erken bozma, hesabın sözleşmede belirlenen
                  vade tarihi gelmeden kapatılması ve yatırılan paranın geri
                  çekilmesi anlamına gelir. Vadeli hesaplar belirli bir süre
                  boyunca paranın bankada tutulması karşılığında faiz getirisi
                  sağlar.
                </p>
                <p>
                  Hesap vade tamamlanmadan kapatıldığında banka, ürün
                  koşullarına bağlı olarak faiz ödemeyebilir veya standart
                  mevduat faizinden daha düşük bir oran uygulayabilir. Bu
                  nedenle erken bozma kararı vermeden önce olası kazanç
                  kaybının hesaplanması önemlidir.
                </p>
              </ContentSection>
              <ContentSection
                id="hesaplama-formulu"
                icon={<Calculator className="h-6 w-6" />}
                title="Erken bozma kaybı hesaplama formülü"
              >
                <p>
                  Normal vade ve erken bozma senaryoları ayrı ayrı hesaplanır.
                  Her senaryoda brüt faiz üzerinden stopaj kesintisi
                  çıkarılarak net kazanç bulunur.
                </p>
                <FormulaBox>
                  <p>
                    Normal brüt faiz = Ana para × Normal yıllık faiz ×
                    (Toplam vade ÷ Gün esası)
                  </p>
                  <p className="mt-3">
                    Erken bozma brüt faizi = Ana para × Erken bozma faizi ×
                    (Geçen gün ÷ Gün esası)
                  </p>
                  <p className="mt-3">
                    Net kayıp = Normal net faiz − Erken bozma net faizi
                  </p>
                </FormulaBox>
                <p>
                  Banka erken bozma halinde faiz ödemiyorsa erken bozma faiz
                  oranı sıfır kabul edilir. Bu durumda normal vade sonunda
                  kazanılabilecek net faizin tamamı kayıp olarak gösterilir.
                </p>
              </ContentSection>
              <ContentSection
                id="banka-uygulamalari"
                icon={<ShieldAlert className="h-6 w-6" />}
                title="Bankaların erken bozma uygulamaları neden farklıdır?"
              >
                <p>
                  Her banka vadeli mevduat ürünlerini kendi sözleşme
                  koşullarıyla sunar. Bazı ürünlerde vade bozulduğunda hiç
                  faiz ödenmezken bazı ürünlerde geçen gün sayısına göre düşük
                  oranlı faiz uygulanabilir.
                </p>
                <p>
                  Esnek vadeli hesaplar, kısmi para çekimine izin veren
                  ürünler veya özel birikim hesapları standart vadeli
                  mevduatlardan farklı kurallara sahip olabilir.
                </p>
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                    <div>
                      <h3 className="font-bold text-amber-950">
                        Ürün sözleşmesini kontrol edin
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-amber-900">
                        Hesabı bozmadan önce bankanızdan erken çekim halinde
                        uygulanacak faiz oranını ve varsa ek kesintileri
                        öğrenin. Araçta bu oranı kullanarak daha gerçekçi bir
                        tahmin elde edebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </ContentSection>
              <ContentSection
                id="gecen-gun-etkisi"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Geçen gün sayısı sonucu nasıl etkiler?"
              >
                <p>
                  Banka erken bozma halinde geçen süre için faiz ödüyorsa,
                  hesapta kalınan gün sayısı arttıkça elde edilecek kısmi faiz
                  de artabilir. Bu durumda vadenin başında yapılan bozma ile
                  vade sonuna yakın yapılan bozma arasında önemli fark
                  oluşabilir.
                </p>
                <p>
                  Ancak banka erken kapatılan hesaplarda faiz hakkını tamamen
                  kaldırıyorsa geçen gün sayısı sonucu değiştirmez. Bu
                  senaryoda hesap vadenin ilk gününde veya son gününden bir
                  gün önce bozulsa da faiz kazancı sıfır olabilir.
                </p>
              </ContentSection>
              <ContentSection
                id="stopaj"
                icon={<Scale className="h-6 w-6" />}
                title="Stopaj erken bozma hesabında nasıl uygulanır?"
              >
                <p>
                  Stopaj, oluşan brüt faiz kazancı üzerinden hesaplanan vergi
                  kesintisidir. Normal vade ve erken bozma senaryolarında
                  oluşan brüt faizler farklı olabileceği için stopaj tutarları
                  da farklı çıkar.
                </p>
                <p>
                  Erken bozma halinde faiz ödenmiyorsa faiz geliri oluşmaz ve
                  bu hesaplama senaryosunda stopaj kesintisi de sıfır olur.
                  Kısmi faiz ödenmesi halinde ise stopaj yalnızca bu faiz
                  kazancı üzerinden hesaplanır.
                </p>
              </ContentSection>
              <ContentSection
                id="kaybi-azaltma"
                icon={<TrendingDown className="h-6 w-6" />}
                title="Erken bozma kaybını azaltmak için neler yapılabilir?"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Vade seçerken yakın dönem nakit ihtiyacınızı dikkate alın." />
                  <CheckItem text="Tüm paranızı tek bir uzun vadeli hesaba bağlamayın." />
                  <CheckItem text="Mevduatı farklı vadelerde parçalara ayırmayı değerlendirin." />
                  <CheckItem text="Kısmi çekime izin veren esnek ürünleri inceleyin." />
                  <CheckItem text="Erken bozma şartlarını hesap açmadan önce kontrol edin." />
                  <CheckItem text="Acil durumlar için ayrı bir nakit rezervi tutun." />
                </div>
              </ContentSection>
              <ContentSection
                id="karsilastirma"
                icon={<WalletCards className="h-6 w-6" />}
                title="Normal vade ile erken bozma karşılaştırması"
              >
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">
                            Karşılaştırma
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Normal vade
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Erken bozma
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow
                          label="Faiz oranı"
                          normalValue="Sözleşmedeki mevduat oranı"
                          earlyValue="Sıfır veya daha düşük oran"
                        />
                        <TableRow
                          label="Faiz süresi"
                          normalValue="Toplam vade günü"
                          earlyValue="Geçen gün sayısı"
                        />
                        <TableRow
                          label="Net kazanç"
                          normalValue="Tam vade kazancı"
                          earlyValue="Kısmi kazanç veya sıfır"
                        />
                        <TableRow
                          label="Toplam tutar"
                          normalValue="Ana para ve tam net faiz"
                          earlyValue="Ana para ve varsa kısmi faiz"
                        />
                        <TableRow
                          label="Likidite"
                          normalValue="Vade sonuna kadar sınırlı"
                          earlyValue="Para erken kullanılabilir"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>
              <ContentSection
                id="ornek-hesaplama"
                icon={<Calculator className="h-6 w-6" />}
                title="Adım adım örnek erken bozma hesaplaması"
              >
                <p>
                  Aşağıdaki örnek yalnızca hesaplama yöntemini göstermek için
                  hazırlanmıştır. Bankanızın uyguladığı oranlar, stopaj,
                  valör ve yuvarlama kuralları farklı olabileceğinden gerçek
                  sonuçlar banka ekranındaki tutarla birebir aynı olmayabilir.
                </p>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  <ExampleMetric
                    label="Ana para"
                    value="100.000 TL"
                    description="Vadeli hesaba yatırılan başlangıç tutarı"
                  />
                  <ExampleMetric
                    label="Normal yıllık faiz"
                    value="%45"
                    description="Örnek sözleşme faiz oranı"
                  />
                  <ExampleMetric
                    label="Toplam vade"
                    value="32 gün"
                    description="Mevduatın planlanan vade süresi"
                  />
                  <ExampleMetric
                    label="Erken bozma günü"
                    value="18. gün"
                    description="Paranın hesaptan çekileceği gün"
                  />
                  <ExampleMetric
                    label="Erken bozma faizi"
                    value="%5"
                    description="Örnek kısmi faiz oranı"
                  />
                  <ExampleMetric
                    label="Örnek stopaj"
                    value="%5"
                    description="Yalnızca senaryo amacıyla kullanılan oran"
                  />
                </div>
                <h3 className="text-lg font-black text-slate-950">
                  1. Normal vade sonu brüt faiz
                </h3>
                <FormulaBox>
                  <p>
                    100.000 × 0,45 × (32 ÷ 365) = 3.945,21 TL
                  </p>
                </FormulaBox>
                <p>
                  Örnek stopaj kesintisi uygulandığında normal vade sonunda
                  elde edilecek net faiz yaklaşık 3.747,95 TL olur. Ana para
                  ile birlikte tahmini vade sonu tutarı 103.747,95 TL olarak
                  hesaplanır.
                </p>
                <h3 className="text-lg font-black text-slate-950">
                  2. Erken bozma halinde brüt faiz
                </h3>
                <FormulaBox>
                  <p>
                    100.000 × 0,05 × (18 ÷ 365) = 246,58 TL
                  </p>
                </FormulaBox>
                <p>
                  Aynı örnek stopaj oranıyla erken bozma net faizi yaklaşık
                  234,25 TL olur. Bu senaryoda erken çekim sonrası toplam
                  tutar yaklaşık 100.234,25 TL olarak görünür.
                </p>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Sonuç</th>
                          <th className="px-5 py-4 font-semibold">Normal vade</th>
                          <th className="px-5 py-4 font-semibold">Erken bozma</th>
                          <th className="px-5 py-4 font-semibold">Fark</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <ComparisonAmountRow
                          label="Brüt faiz"
                          normalValue="3.945,21 TL"
                          earlyValue="246,58 TL"
                          difference="3.698,63 TL"
                        />
                        <ComparisonAmountRow
                          label="Net faiz"
                          normalValue="3.747,95 TL"
                          earlyValue="234,25 TL"
                          difference="3.513,70 TL"
                        />
                        <ComparisonAmountRow
                          label="Toplam tutar"
                          normalValue="103.747,95 TL"
                          earlyValue="100.234,25 TL"
                          difference="3.513,70 TL"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <div className="flex gap-3">
                    <TrendingDown className="mt-0.5 h-5 w-5 shrink-0 text-rose-700" />
                    <div>
                      <h3 className="font-bold text-rose-950">
                        Örnek senaryonun sonucu
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-rose-900">
                        Bu varsayımlarla mevduatın 18. günde bozulması,
                        normal vade sonuna göre yaklaşık 3.513,70 TL net faiz
                        kaybı oluşturur. Banka erken bozma halinde hiç faiz
                        ödemeseydi kayıp normal net faizin tamamına eşit olurdu.
                      </p>
                    </div>
                  </div>
                </div>
              </ContentSection>
              <ContentSection
                id="vade-merdiveni"
                icon={<CalendarClock className="h-6 w-6" />}
                title="Vade merdiveni yöntemi erken bozma riskini nasıl azaltır?"
              >
                <p>
                  Vade merdiveni, toplam birikimin tek bir vadeli hesap yerine
                  farklı başlangıç veya bitiş tarihlerine sahip birden fazla
                  mevduata bölünmesi yaklaşımıdır. Böylece belirli aralıklarla
                  bir hesabın vadesi gelir ve nakit ihtiyacı oluştuğunda bütün
                  birikimi bozmak yerine yalnızca gerekli dilim kullanılabilir.
                </p>
                <p>
                  Bu yöntem faiz kaybını tamamen ortadan kaldırmaz. Ancak tüm
                  paranın aynı anda uzun süre erişilemez kalması nedeniyle
                  ortaya çıkabilecek likidite baskısını azaltabilir. Vade
                  aralıkları belirlenirken düzenli giderler, beklenen büyük
                  ödemeler ve acil durum rezervi birlikte değerlendirilmelidir.
                </p>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[780px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Mevduat dilimi</th>
                          <th className="px-5 py-4 font-semibold">Örnek tutar</th>
                          <th className="px-5 py-4 font-semibold">Örnek vade</th>
                          <th className="px-5 py-4 font-semibold">Amaç</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <PlanningRow
                          tranche="Birinci dilim"
                          amount="50.000 TL"
                          maturity="32 gün"
                          purpose="Yakın dönem nakit erişimi"
                        />
                        <PlanningRow
                          tranche="İkinci dilim"
                          amount="50.000 TL"
                          maturity="46 gün"
                          purpose="Orta vadeli planlı ödeme"
                        />
                        <PlanningRow
                          tranche="Üçüncü dilim"
                          amount="50.000 TL"
                          maturity="60 gün"
                          purpose="Daha uzun süreli getiri hedefi"
                        />
                        <PlanningRow
                          tranche="Nakit rezerv"
                          amount="25.000 TL"
                          maturity="Vadesiz veya likit"
                          purpose="Beklenmeyen harcamalar"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Her vade tarihinde yeniden oran karşılaştırması yapılabilir." />
                  <CheckItem text="Tüm birikimi bozma zorunluluğu azaltılabilir." />
                  <CheckItem text="Planlı ödemeler belirli vade tarihlerine eşleştirilebilir." />
                  <CheckItem text="Acil durum rezervi vadeli mevduattan ayrı tutulabilir." />
                </div>
              </ContentSection>
              <ContentSection
                id="alternatif-maliyet"
                icon={<Scale className="h-6 w-6" />}
                title="Erken bozma kaybı alternatif finansman maliyetiyle nasıl karşılaştırılır?"
              >
                <p>
                  Nakit ihtiyacı ortaya çıktığında yalnızca mevduat kaybına
                  bakmak yeterli olmayabilir. Kullanılabilecek alternatifin
                  toplam maliyeti de aynı zaman aralığı için hesaplanmalıdır.
                  Karşılaştırmada kredi faizi, tahsis ücreti, vergiler ve
                  diğer masraflar dikkate alınırken mevduat tarafında
                  kaybedilecek net faiz esas alınmalıdır.
                </p>
                <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
                  <div className="flex gap-3">
                    <CircleDollarSign className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" />
                    <div>
                      <h3 className="font-bold text-sky-950">
                        Aynı dönem ve aynı tutarı karşılaştırın
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-sky-900">
                        Örneğin 30 günlük nakit ihtiyacı için kredi maliyetini
                        12 aylık toplam ödeme üzerinden değil, kredinin gerçek
                        kullanım planı ve erken kapama ihtimaliyle birlikte
                        değerlendirin. Farklı dönemleri doğrudan karşılaştırmak
                        yanıltıcı olabilir.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[820px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Seçenek</th>
                          <th className="px-5 py-4 font-semibold">Hesaba katılacak maliyet</th>
                          <th className="px-5 py-4 font-semibold">Avantaj</th>
                          <th className="px-5 py-4 font-semibold">Dikkat edilmesi gereken</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <DecisionRow
                          option="Mevduatı erken bozmak"
                          cost="Kaybedilen net faiz"
                          advantage="Yeni borç oluşmaması"
                          caution="Vade kazancının kısmen veya tamamen kaybı"
                        />
                        <DecisionRow
                          option="İhtiyaç kredisi kullanmak"
                          cost="Faiz, vergi ve ücretlerin toplamı"
                          advantage="Mevduat vadesinin korunması"
                          caution="Aylık ödeme ve borç yükü"
                        />
                        <DecisionRow
                          option="Kısmi çekim olanağı"
                          cost="Ürün koşuluna göre sınırlı getiri kaybı"
                          advantage="Yalnızca ihtiyaç kadar para çekilmesi"
                          caution="Her üründe bulunmaması"
                        />
                        <DecisionRow
                          option="Vade sonunu beklemek"
                          cost="Nakit ihtiyacını ertelemenin olası maliyeti"
                          advantage="Tam mevduat getirisinin korunması"
                          caution="Ödemenin gecikme riski"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>
              <ContentSection
                id="sik-hatalar"
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Erken bozma hesabında sık yapılan hatalar"
              >
                <div className="space-y-4">
                  <MistakeItem
                    number="01"
                    title="Yıllık faiz oranını dönemsel oran gibi kullanmak"
                    description="Yıllık oran doğrudan ana parayla çarpılmamalıdır. Vade veya geçen gün sayısı gün esasına bölünerek dönemsel faiz bulunmalıdır."
                  />
                  <MistakeItem
                    number="02"
                    title="Brüt faiz ile net faizi karıştırmak"
                    description="Bankanın gösterdiği brüt kazanç ile stopaj sonrası hesaba geçecek net kazanç farklı olabilir. Karşılaştırma aynı bazda yapılmalıdır."
                  />
                  <MistakeItem
                    number="03"
                    title="Erken bozma faizini normal faizle aynı kabul etmek"
                    description="Birçok üründe erken kapama halinde sözleşmedeki normal faiz yerine sıfır veya daha düşük bir oran uygulanabilir."
                  />
                  <MistakeItem
                    number="04"
                    title="Valör tarihini dikkate almamak"
                    description="Paranın faiz işlemeye başladığı tarih ile hesabın açıldığı saat veya gün aynı olmayabilir. Bankanın valör kuralı kontrol edilmelidir."
                  />
                  <MistakeItem
                    number="05"
                    title="Kısmi çekim seçeneğini araştırmamak"
                    description="Bazı ürünler hesabın tamamını kapatmadan belirli bir tutarın çekilmesine izin verebilir. Ürün koşulları incelenmeden bütün hesabı bozmak gereksiz kayıp doğurabilir."
                  />
                  <MistakeItem
                    number="06"
                    title="Alternatif maliyetleri eksik hesaplamak"
                    description="Krediyle karşılaştırma yapılırken yalnızca aylık faiz oranına değil, toplam masraf ve ödeme planına bakılmalıdır."
                  />
                </div>
              </ContentSection>
              <ContentSection
                id="karar-kontrol-listesi"
                icon={<CheckCircle2 className="h-6 w-6" />}
                title="Hesabı bozmadan önce karar kontrol listesi"
              >
                <p>
                  Aşağıdaki kontrol listesi kesin bir finansal öneri değildir.
                  Amaç, erken bozma kararında gözden kaçabilecek temel
                  noktaları sistemli biçimde değerlendirmeye yardımcı olmaktır.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <DecisionCheck
                    title="Kesin banka tutarını öğrenin"
                    description="Mobil uygulama veya müşteri hizmetlerinden erken kapama halinde hesaba geçecek net tutarı doğrulayın."
                  />
                  <DecisionCheck
                    title="Kalan vade gününü kontrol edin"
                    description="Vade sonuna çok az süre kaldıysa bekleme seçeneğinin uygulanabilir olup olmadığını değerlendirin."
                  />
                  <DecisionCheck
                    title="Çekilecek tutarı netleştirin"
                    description="İhtiyacınız hesabın tamamından düşükse kısmi çekim veya bölünmüş hesap seçeneğini araştırın."
                  />
                  <DecisionCheck
                    title="Alternatiflerin toplam maliyetini bulun"
                    description="Kredi, ek hesap veya ödeme erteleme gibi seçenekleri yalnızca faiz oranıyla değil toplam maliyetle karşılaştırın."
                  />
                  <DecisionCheck
                    title="Acil durum önceliğini belirleyin"
                    description="Sağlık, barınma veya zorunlu ödeme gibi acil ihtiyaçlarda likidite, faiz kaybından daha önemli olabilir."
                  />
                  <DecisionCheck
                    title="Yeni vade planını oluşturun"
                    description="Hesap bozulduktan sonra kalan birikimin nasıl değerlendirileceğini önceden planlayın."
                  />
                </div>
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                    <div>
                      <h3 className="font-bold text-emerald-950">
                        Son karar için banka ekranını esas alın
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-emerald-900">
                        HesapRehberi aracı karşılaştırma yapmanızı kolaylaştırır;
                        ancak hesabın kapatılmasıyla oluşacak kesin tutar yalnızca
                        bankanızın güncel sisteminde ve ürün sözleşmesinde
                        belirlenebilir.
                      </p>
                    </div>
                  </div>
                </div>
              </ContentSection>
            </article>
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-orange-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white">
                  <Clock3 className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Kısa hesaplama özeti
                </h2>
                <div className="mt-5 space-y-4">
                  <SidebarRow label="Ana para" value="Kullanıcı girişi" />
                  <SidebarRow label="Normal getiri" value="Tam vade" />
                  <SidebarRow label="Erken getiri" value="Geçen süre" />
                  <SidebarRow label="Sonuç" value="Net kazanç farkı" />
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  İlgili hesaplamalar
                </h2>
                <div className="mt-5 space-y-3">
                  <RelatedLink
                    href="/hesaplamalar/mevduat-hesaplama"
                    title="Mevduat Hesaplama"
                  />
                  <RelatedLink
                    href="/hesaplamalar/mevduat-vade-karsilastirma"
                    title="Mevduat Vade Karşılaştırma"
                  />
                  <RelatedLink
                    href="/hesaplamalar/mevduat-getiri-hedefi"
                    title="Mevduat Getiri Hedefi"
                  />
                  <RelatedLink
                    href="/hesaplamalar/faiz-hesaplama"
                    title="Faiz Hesaplama"
                  />
                </div>
              </div>
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <Banknote className="h-7 w-7 text-orange-300" />
                <h2 className="mt-5 text-xl font-black">
                  Hesabı bozmadan önce karşılaştırın
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Erken bozma nedeniyle oluşacak kaybı, alternatif
                  finansman maliyetleriyle birlikte değerlendirerek karar
                  vermeniz daha sağlıklı olabilir.
                </p>
                <Link
                  href="/hesaplamalar"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-orange-300 transition hover:text-orange-200"
                >
                  Tüm hesaplamaları incele
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>
        <section id="sss" className="scroll-mt-24 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-rose-600">
                Sık sorulan sorular
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat erken bozma hakkında merak edilenler
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Erken çekim, faiz kaybı, stopaj ve vade süresi hakkında en sık
                sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-rose-200 open:bg-rose-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-950 sm:px-6">
                    <span>{item.question}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-rose-300 group-open:text-rose-700">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="border-t border-rose-200 pt-4 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-rose-700 via-rose-800 to-orange-800 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Diğer mevduat hesaplama araçlarını keşfedin
                </h2>
                <p className="mt-4 text-sm leading-7 text-rose-100 sm:text-base">
                  Mevduat getirisi, vade karşılaştırması, hedef kazanç ve
                  diğer finansal hesaplamalarınızı ücretsiz araçlarımızla
                  kolayca yapın.
                </p>
              </div>
              <Link
                href="/hesaplamalar"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-rose-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-rose-50"
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
                Bu sayfadaki hesaplamalar yalnızca bilgilendirme amacıyla
                hazırlanmıştır ve yatırım tavsiyesi niteliği taşımaz.
                Bankaların erken bozma koşulları, faiz uygulamaları ve stopaj
                oranları değişebilir. Hesabınızı kapatmadan önce bankanızın
                güncel sözleşme ve ürün koşullarını kontrol ediniz.
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
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-rose-50 backdrop-blur">
      <CheckCircle2 className="h-4 w-4 text-orange-300" />
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
      <p className="text-[10px] font-semibold uppercase tracking-wide text-rose-200">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}
type GuideCardProps = {
  number: string;
  icon: React.ReactNode;
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
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-600 text-white">
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
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
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
      className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
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
  children: React.ReactNode;
};
function FormulaBox({ children }: FormulaBoxProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 sm:p-6">
      {children}
    </div>
  );
}
type TableRowProps = {
  label: string;
  normalValue: string;
  earlyValue: string;
};
function TableRow({
  label,
  normalValue,
  earlyValue,
}: TableRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {label}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {normalValue}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {earlyValue}
      </td>
    </tr>
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
type SidebarRowProps = {
  label: string;
  value: string;
};
function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-rose-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-sm font-bold text-slate-950">
        {value}
      </span>
    </div>
  );
}
type ExampleMetricProps = {
  label: string;
  value: string;
  description: string;
};
function ExampleMetric({
  label,
  value,
  description,
}: ExampleMetricProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-black text-slate-950">
        {value}
      </p>
      <p className="mt-2 text-xs leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}
type ComparisonAmountRowProps = {
  label: string;
  normalValue: string;
  earlyValue: string;
  difference: string;
};
function ComparisonAmountRow({
  label,
  normalValue,
  earlyValue,
  difference,
}: ComparisonAmountRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {label}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {normalValue}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {earlyValue}
      </td>
      <td className="px-5 py-4 font-bold text-rose-700">
        {difference}
      </td>
    </tr>
  );
}
type PlanningRowProps = {
  tranche: string;
  amount: string;
  maturity: string;
  purpose: string;
};
function PlanningRow({
  tranche,
  amount,
  maturity,
  purpose,
}: PlanningRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {tranche}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {amount}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {maturity}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {purpose}
      </td>
    </tr>
  );
}
type DecisionRowProps = {
  option: string;
  cost: string;
  advantage: string;
  caution: string;
};
function DecisionRow({
  option,
  cost,
  advantage,
  caution,
}: DecisionRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {option}
      </td>
      <td className="px-5 py-4 text-slate-600">
        {cost}
      </td>
      <td className="px-5 py-4 text-emerald-700">
        {advantage}
      </td>
      <td className="px-5 py-4 text-amber-800">
        {caution}
      </td>
    </tr>
  );
}
type MistakeItemProps = {
  number: string;
  title: string;
  description: string;
};
function MistakeItem({
  number,
  title,
  description,
}: MistakeItemProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-sm font-black text-rose-700">
        {number}
      </span>
      <div>
        <h3 className="font-black text-slate-950">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
type DecisionCheckProps = {
  title: string;
  description: string;
};
function DecisionCheck({
  title,
  description,
}: DecisionCheckProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-5 w-5" />
        </span>
        <h3 className="font-black text-slate-950">
          {title}
        </h3>
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
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
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}