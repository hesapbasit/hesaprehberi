import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Clock3,
  Landmark,
  Lightbulb,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import DepositTermComparisonCalculator from "@/components/calculators/DepositTermComparisonCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const pageUrl =
  "https://hesaprehberi.com/hesaplamalar/mevduat-vade-karsilastirma";

const pageTitle = "Mevduat Vade Karşılaştırma Hesaplama";
const pageDescription =
  "Mevduat vade karşılaştırma aracıyla farklı vade sürelerindeki brüt faiz, stopaj, net kazanç, vade sonu tutarı ve tahmini bileşik getiriyi karşılaştırın.";

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "mevduat vade karşılaştırma",
    "mevduat vade hesaplama",
    "vadeli mevduat hesaplama",
    "mevduat faiz hesaplama",
    "30 günlük mevduat hesaplama",
    "32 günlük mevduat hesaplama",
    "mevduat net kazanç hesaplama",
    "stopaj hesaplama",
    "vade sonu tutar hesaplama",
    "bileşik mevduat getirisi",
    "faiz vade karşılaştırma",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
    url: pageUrl,
    siteName: "HesapRehberi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og/mevduat-vade-karsilastirma.png",
        width: 1200,
        height: 630,
        alt: "Mevduat vade karşılaştırma hesaplama aracı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
    images: ["/og/mevduat-vade-karsilastirma.png"],
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

const breadcrumbItems = [
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
    href: "/hesaplamalar/mevduat",
  },
  {
    label: "Mevduat Vade Karşılaştırma",
    href: "/hesaplamalar/mevduat-vade-karsilastirma",
  },
];

const termExamples = [
  {
    term: "30 gün",
    useCase: "Kısa süreli nakit değerlendirme",
    advantage: "Paraya daha kısa sürede yeniden erişim",
    consideration: "Vade sonunda oran değişebilir",
  },
  {
    term: "32 gün",
    useCase: "Bankaların sık kullandığı standart vadeler",
    advantage: "Kampanyalı oranlarla karşılaşılabilir",
    consideration: "Her bankada aynı oran sunulmaz",
  },
  {
    term: "90 gün",
    useCase: "Orta vadeli birikim değerlendirme",
    advantage: "Faiz oranını daha uzun süre sabitleme",
    consideration: "Vade bozulursa faiz kaybı yaşanabilir",
  },
  {
    term: "180 gün",
    useCase: "Uzun süre ihtiyaç duyulmayacak birikim",
    advantage: "Daha uzun faiz dönemi",
    consideration: "Likidite esnekliği azalır",
  },
  {
    term: "365 gün",
    useCase: "Uzun vadeli mevduat planlaması",
    advantage: "Yıllık getiri daha kolay izlenir",
    consideration: "Piyasa faizindeki artışlardan geç yararlanılabilir",
  },
];

const faqItems = [
  {
    question: "Mevduat vade karşılaştırma hesaplaması nedir?",
    answer:
      "Mevduat vade karşılaştırma hesaplaması, aynı ana para ve faiz oranının farklı vade sürelerinde ne kadar brüt faiz, stopaj kesintisi, net kazanç ve vade sonu tutarı oluşturabileceğini gösteren hesaplamadır.",
  },
  {
    question: "En kazançlı mevduat vadesi hangisidir?",
    answer:
      "Faiz oranı bütün vadelerde aynı kabul edildiğinde en uzun vade genellikle en yüksek toplam TL kazancını üretir. Ancak en yüksek toplam kazanç, her zaman en yüksek yıllık bileşik getiri veya en uygun likidite seçeneği anlamına gelmez.",
  },
  {
    question: "30 gün ile 32 gün vadeli mevduat arasındaki fark nedir?",
    answer:
      "Faiz oranları aynıysa 32 günlük vade, iki gün daha fazla faiz kazancı oluşturur. Bankalar farklı vadeler için farklı faiz oranları sunabileceğinden gerçek karşılaştırmada her vadenin kendi oranı dikkate alınmalıdır.",
  },
  {
    question: "Mevduat faizi nasıl hesaplanır?",
    answer:
      "Basit hesaplamada ana para, yıllık faiz oranı ve vade günü çarpılır; çıkan tutar 360 veya 365 günlük hesaplama esasına bölünür. Brüt faizden stopaj düşüldüğünde net kazanç bulunur.",
  },
  {
    question: "Stopaj nedir?",
    answer:
      "Stopaj, mevduat faiz gelirinden kaynakta kesilen vergidir. Hesaplayıcıda stopaj oranını kullanıcı belirleyebilir. Gerçek işlem öncesinde bankanın uyguladığı güncel oran kontrol edilmelidir.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz vergi kesintisi yapılmadan önceki faiz kazancıdır. Net faiz ise brüt faizden stopaj ve varsa diğer kesintiler çıkarıldıktan sonra hesaba yansıyan tutardır.",
  },
  {
    question: "Vade sonu tutarı nasıl bulunur?",
    answer:
      "Vade sonu tutarı, başlangıçtaki ana paraya net faiz kazancının eklenmesiyle bulunur.",
  },
  {
    question: "360 gün ve 365 gün hesabı neyi değiştirir?",
    answer:
      "Faiz hesabında kullanılan gün esası sonucu etkiler. Aynı ana para, oran ve vadede 360 gün esası kullanıldığında hesaplanan brüt faiz, 365 gün esasına göre bir miktar daha yüksek çıkar.",
  },
  {
    question: "Bileşik yıllık getiri nedir?",
    answer:
      "Bileşik yıllık getiri, her vade sonunda elde edilen net kazancın ana paraya eklenerek aynı koşullarda yeniden değerlendirildiği varsayımıyla hesaplanan yıllık tahmini getiridir.",
  },
  {
    question: "Kısa vadeli mevduat daha mı avantajlıdır?",
    answer:
      "Kısa vade, paraya daha erken erişme ve faiz oranlarını daha sık yenileme imkânı sağlar. Buna karşılık faizlerin düşmesi halinde sonraki vadelerde daha düşük oranla karşılaşılabilir.",
  },
  {
    question: "Uzun vadeli mevduatın avantajı nedir?",
    answer:
      "Uzun vadeli mevduat, belirli bir faiz oranını daha uzun süre koruma imkânı sağlayabilir. Ancak paraya vade bitmeden ihtiyaç duyulması halinde faiz kaybı veya düşük faiz uygulanması riski bulunabilir.",
  },
  {
    question: "Vade bozulursa ne olur?",
    answer:
      "Vadeli mevduat hesabı vade bitmeden kapatıldığında bankanın sözleşmesine göre faiz kazancı tamamen veya kısmen kaybedilebilir. Bazı hesap türlerinde erken çekim için farklı kurallar uygulanabilir.",
  },
  {
    question: "Her vade için faiz oranı aynı mıdır?",
    answer:
      "Hayır. Bankalar mevduat tutarına, müşteri türüne, vade süresine, yeni para koşuluna ve kampanyalara göre farklı faiz oranları sunabilir.",
  },
  {
    question: "Günlük ortalama kazanç neyi gösterir?",
    answer:
      "Günlük ortalama kazanç, vade sonunda oluşan net faiz tutarının toplam vade gününe bölünmesiyle elde edilen yaklaşık günlük kazançtır.",
  },
  {
    question: "Hesaplanan sonuçlar kesin midir?",
    answer:
      "Hayır. Sonuçlar girilen verilere göre tahmini olarak hesaplanır. Bankanın valör tarihi, küsurat yöntemi, faiz oranı, stopaj uygulaması ve hesap türü gerçek sonucu değiştirebilir.",
  },
  {
    question: "Mevduat hesabı seçerken yalnızca faiz oranına mı bakılmalıdır?",
    answer:
      "Hayır. Net faiz oranı, stopaj, vade süresi, erken çekim koşulları, hesap işletim şartları, kampanya koşulları ve bankanın sunduğu esneklik de birlikte değerlendirilmelidir.",
  },
];

const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Mevduat Vade Karşılaştırma Hesaplama",
  url: pageUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  inLanguage: "tr-TR",
  description: pageDescription,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://hesaprehberi.com",
  },
};

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

export default function DepositTermComparisonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>
        </section>

        <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz mevduat hesaplama aracı
                </div>

                <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Mevduat Vade
                  <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                    Karşılaştırma Hesaplama
                  </span>
                </h1>

                <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Farklı mevduat vadelerinde oluşabilecek brüt faiz, stopaj,
                  net kazanç ve vade sonu tutarlarını tek tabloda karşılaştırın.
                  Paranızı hangi vadede değerlendireceğinizi daha bilinçli
                  şekilde planlayın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Farklı vadeleri karşılaştırma",
                    "Net kazanç hesabı",
                    "Stopaj hesaplama",
                    "Bileşik getiri tahmini",
                  ].map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-lg">
                  <Landmark className="h-7 w-7" />
                </div>

                <h2 className="mt-6 text-xl font-bold text-white">
                  Neleri karşılaştırabilirsiniz?
                </h2>

                <div className="mt-5 space-y-4">
                  {[
                    {
                      icon: CalendarDays,
                      title: "Vade süresi",
                      text: "7 günden 365 güne kadar farklı vadeler",
                    },
                    {
                      icon: Banknote,
                      title: "Net faiz kazancı",
                      text: "Stopaj sonrası elinize geçecek tutar",
                    },
                    {
                      icon: TrendingUp,
                      title: "Bileşik getiri",
                      text: "Vade yenileme varsayımıyla yıllık tahmin",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-3 rounded-2xl border border-white/10 bg-black/10 p-4"
                      >
                        <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />

                        <div>
                          <p className="font-semibold text-white">
                            {item.title}
                          </p>

                          <p className="mt-1 text-sm leading-6 text-slate-300">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <DepositTermComparisonCalculator />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-semibold text-slate-900">
                Bu hesaplama aracını faydalı buldunuz mu?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Mevduat vade karşılaştırma aracını çevrenizle paylaşabilirsiniz.
              </p>
            </div>

            <ShareButtons
              title={pageTitle}
              url={pageUrl}
              description={pageDescription}
            />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                <WalletCards className="h-4 w-4" />
                Mevduat vadesi rehberi
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Mevduat vadesi karşılaştırması nasıl yapılır?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Doğru vade seçimi yalnızca en yüksek faiz oranını bulmaktan
                ibaret değildir. Paraya ne zaman ihtiyaç duyacağınız, vade
                sonunda oranların değişme ihtimali ve net kazanç birlikte
                değerlendirilmelidir.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                {
                  number: "01",
                  icon: Banknote,
                  title: "Ana parayı belirleyin",
                  description:
                    "Vadeli hesaba yatırmayı planladığınız ve vade boyunca ihtiyaç duymayacağınız tutarı girin.",
                },
                {
                  number: "02",
                  icon: BadgePercent,
                  title: "Faiz ve stopajı girin",
                  description:
                    "Bankanın sunduğu yıllık brüt faiz oranını ve hesaplamada kullanılacak stopaj oranını yazın.",
                },
                {
                  number: "03",
                  icon: CalendarDays,
                  title: "Vadeleri karşılaştırın",
                  description:
                    "Kısa, orta ve uzun vadelerin net kazançlarını aynı tabloda inceleyerek seçiminizi yapın.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <span className="absolute right-5 top-3 text-6xl font-black text-slate-200">
                      {item.number}
                    </span>

                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-200">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Scale className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-sm font-semibold text-blue-700">
                    Hesaplama formülü
                  </p>

                  <h2 className="text-2xl font-black text-slate-950">
                    Mevduat getirisi nasıl hesaplanır?
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-sm font-semibold text-blue-700">
                    Brüt faiz formülü
                  </p>

                  <p className="mt-3 overflow-x-auto font-mono text-sm font-bold text-blue-950 sm:text-base">
                    Ana Para × Yıllık Faiz Oranı × Vade Günü ÷ Gün Esası
                  </p>
                </div>

                <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <p className="text-sm font-semibold text-rose-700">
                    Stopaj kesintisi
                  </p>

                  <p className="mt-3 font-mono text-sm font-bold text-rose-950 sm:text-base">
                    Brüt Faiz × Stopaj Oranı
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">
                    Net kazanç
                  </p>

                  <p className="mt-3 font-mono text-sm font-bold text-emerald-950 sm:text-base">
                    Brüt Faiz − Stopaj Kesintisi
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-bold text-slate-950">
                  Örnek hesaplama
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  250.000 TL ana para, yıllık %45 brüt faiz, 32 günlük vade,
                  %15 stopaj ve 365 gün esası kullanıldığını varsayalım.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label: "Brüt faiz",
                      value: "250.000 × 0,45 × 32 ÷ 365",
                    },
                    {
                      label: "Stopaj",
                      value: "Brüt faiz × 0,15",
                    },
                    {
                      label: "Net kazanç",
                      value: "Brüt faiz − stopaj",
                    },
                    {
                      label: "Vade sonu",
                      value: "250.000 TL + net kazanç",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm font-semibold text-slate-800">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <Lightbulb className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-amber-950">
                  Vade seçerken dikkat
                </h2>

                <p className="mt-3 text-sm leading-7 text-amber-900">
                  En uzun vade toplam TL kazancını artırabilir; ancak paranıza
                  erken ihtiyaç duyarsanız vadeyi bozmanız gerekebilir. Bu
                  nedenle getirinin yanında likidite ihtiyacınızı da hesaba
                  katın.
                </p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Clock3 className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-blue-950">
                  Kısa vadenin avantajı
                </h2>

                <p className="mt-3 text-sm leading-7 text-blue-900">
                  Kısa vadeli hesaplar, faiz oranlarını daha sık yenileme ve
                  paraya daha erken erişme imkânı sunabilir. Buna karşılık
                  faizler düşerse sonraki dönemde daha düşük getiri oluşabilir.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-emerald-950">
                  Net oranı karşılaştırın
                </h2>

                <p className="mt-3 text-sm leading-7 text-emerald-900">
                  Bankaların ilan ettiği brüt faiz oranları yerine stopaj
                  sonrası net kazancı karşılaştırmak, seçenekler arasındaki
                  gerçek farkı daha doğru görmenizi sağlar.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Vade türleri
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Hangi mevduat vadesi ne zaman tercih edilebilir?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Her vadenin amacı ve sunduğu esneklik farklıdır. Aşağıdaki tablo,
                yaygın vadelerin genel kullanım biçimlerini karşılaştırır.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[900px] border-collapse text-left">
                  <thead>
                    <tr className="bg-slate-950 text-sm text-white">
                      <th className="px-5 py-4 font-bold">Vade</th>
                      <th className="px-5 py-4 font-bold">Kullanım amacı</th>
                      <th className="px-5 py-4 font-bold">Avantajı</th>
                      <th className="px-5 py-4 font-bold">
                        Dikkat edilmesi gereken
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {termExamples.map((item, index) => (
                      <tr
                        key={item.term}
                        className={`border-b border-slate-200 last:border-b-0 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-5 py-4 font-extrabold text-blue-700">
                          {item.term}
                        </td>

                        <td className="px-5 py-4 text-sm leading-6 text-slate-700">
                          {item.useCase}
                        </td>

                        <td className="px-5 py-4 text-sm leading-6 text-emerald-700">
                          {item.advantage}
                        </td>

                        <td className="px-5 py-4 text-sm leading-6 text-slate-600">
                          {item.consideration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">
                Kısa vadeli mevduat
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Kısa vadeli mevduat, parasını yakın zamanda kullanma ihtimali
                bulunan veya faiz oranlarını düzenli takip etmek isteyen
                kullanıcılar için daha esnek olabilir. Vade sonunda para ve faiz
                kazancı yeniden değerlendirilebilir.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Paraya daha kısa sürede erişim",
                  "Faiz oranlarını daha sık güncelleme",
                  "Bileşik getiri imkânı",
                  "Piyasa değişimlerine daha hızlı uyum",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-black text-slate-950">
                Uzun vadeli mevduat
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Uzun vadeli mevduat, belirli bir süre boyunca ihtiyaç
                duyulmayacak birikimler için tercih edilebilir. Faiz oranının
                vade boyunca korunması avantaj sağlayabilir; ancak erken çekim
                ihtimali dikkatle değerlendirilmelidir.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Faiz oranını daha uzun süre koruma",
                  "Daha yüksek toplam TL kazancı",
                  "Daha az işlem ve takip ihtiyacı",
                  "Uzun vadeli tasarruf disiplini",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 flex gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-6">
            <CircleAlert className="mt-1 h-6 w-6 shrink-0 text-amber-700" />

            <div>
              <h2 className="text-lg font-bold text-amber-950">
                Önemli bilgilendirme
              </h2>

              <p className="mt-2 text-sm leading-7 text-amber-900">
                Bu sayfadaki hesaplamalar yatırım tavsiyesi değildir. Faiz
                oranları, vergi uygulamaları ve banka koşulları değişebilir.
                Mevduat hesabı açmadan önce bankanın sözleşmesini, güncel oranı,
                valör tarihini ve erken çekim koşullarını kontrol edin.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                <CircleAlert className="h-4 w-4" />
                Sık sorulan sorular
              </span>

              <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Mevduat vade karşılaştırma hakkında merak edilenler
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300">
                Mevduat faizi, stopaj, vade süresi ve net kazanç hesaplamasıyla
                ilgili sık sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-4xl space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-white/10 bg-white/5 transition open:bg-white/10"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-white sm:px-6">
                    <span>
                      {index + 1}. {item.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-blue-200 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-slate-300 sm:px-6">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">
                  Daha fazla hesaplama
                </p>

                <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Diğer mevduat hesaplama araçlarını keşfedin
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-blue-100">
                  Mevduat faizi, stopaj, günlük kazanç ve bileşik getiri
                  hesaplamalarıyla birikiminizi farklı açılardan inceleyin.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-bold text-blue-700 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
              >
                Tüm hesaplamaları görüntüle
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}