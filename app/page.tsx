import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  Calculator,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  HeartPulse,
  HomeIcon,
  Landmark,
  LockKeyhole,
  ReceiptText,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

import CategoryCard from "@/components/ui/CategoryCard";
import HomeFaq from "@/components/ui/HomeFaq";
import LatestArticles from "@/components/ui/LatestArticles";
import { featuredCalculators } from "@/lib/calculators";

const baseUrl = "https://hesaprehberionline.com";

export const metadata: Metadata = {
  title: {
    absolute: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
  },

  description:
    "Kredi, KDV, faiz, maaş, döviz, vergi, kira, mevduat, tarih ve sağlık hesaplamalarını ücretsiz ve hızlı şekilde yapın.",

  keywords: [
    "hesaplama",
    "hesaplama araçları",
    "online hesaplama",
    "kredi hesaplama",
    "faiz hesaplama",
    "KDV hesaplama",
    "maaş hesaplama",
    "döviz hesaplama",
    "mevduat hesaplama",
    "enflasyon hesaplama",
    "vergi hesaplama",
    "kira artış hesaplama",
    "yaş hesaplama",
    "gün hesaplama",
    "sağlık hesaplama",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: baseUrl,
    siteName: "HesapRehberi",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Finans, vergi, maaş, kira, tarih ve sağlık hesaplamalarını ücretsiz ve hızlı şekilde yapın.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HesapRehberi hesaplama platformu",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
    description:
      "Finans, vergi, maaş, kira, tarih ve sağlık hesaplamalarını ücretsiz ve hızlı şekilde yapın.",
    images: ["/logo.jpg"],
  },
};

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/#webpage`,
      url: `${baseUrl}/`,
      name: "HesapRehberi | Tüm Hesaplamalar Tek Yerde",
      headline: "Tüm Hesaplamalar Tek Yerde",
      description:
        "Kredi, KDV, faiz, maaş, döviz, vergi, kira, mevduat, tarih ve sağlık hesaplamalarını ücretsiz ve hızlı şekilde yapın.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        "@id": `${baseUrl}/#primaryimage`,
        url: `${baseUrl}/logo.jpg`,
        contentUrl: `${baseUrl}/logo.jpg`,
        caption: "HesapRehberi hesaplama platformu",
      },
      mainEntity: {
        "@id": `${baseUrl}/#featured-calculators`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: `${baseUrl}/`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/#featured-calculators`,
      name: "Popüler Hesaplama Araçları",
      description:
        "HesapRehberi ana sayfasında öne çıkan ve sık kullanılan hesaplama araçları.",
      numberOfItems: featuredCalculators.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: featuredCalculators.map((calculator, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: calculator.title,
        url: `${baseUrl}${calculator.href}`,
      })),
    },
  ],
};

const platformHighlights = [
  {
    value: "50+",
    label: "Ücretsiz hesaplama aracı",
    icon: Calculator,
  },
  {
    value: "40+",
    label: "Detaylı rehber ve içerik",
    icon: FileText,
  },
  {
    value: "%100",
    label: "Ücretsiz kullanım",
    icon: BadgeCheck,
  },
  {
    value: "7/24",
    label: "Kesintisiz erişim",
    icon: Clock3,
  },
];

const calculatorCategories = [
  {
    title: "Finans",
    description:
      "Kredi, faiz, mevduat ve yatırım hesaplamalarına kolayca ulaşın.",
    href: "/hesaplamalar",
    icon: Landmark,
    count: "Kredi ve faiz araçları",
  },
  {
    title: "Vergi",
    description:
      "KDV, gelir vergisi ve diğer vergi hesaplamalarını gerçekleştirin.",
    href: "/hesaplamalar",
    icon: ReceiptText,
    count: "Vergi araçları",
  },
  {
    title: "Maaş",
    description:
      "Net maaş, brüt maaş ve iş hayatına yönelik sonuçları görüntüleyin.",
    href: "/hesaplamalar",
    icon: WalletCards,
    count: "Maaş araçları",
  },
  {
    title: "Konut",
    description:
      "Kira artışı, konut kredisi ve ev maliyetlerini hesaplayın.",
    href: "/hesaplamalar",
    icon: HomeIcon,
    count: "Konut araçları",
  },
  {
    title: "Tarih",
    description:
      "Yaş, gün farkı, çalışma süresi ve tarih hesaplamalarını yapın.",
    href: "/hesaplamalar",
    icon: CalendarDays,
    count: "Tarih araçları",
  },
  {
    title: "Sağlık",
    description:
      "VKİ, ideal kilo, kalori ve günlük sağlık değerlerini hesaplayın.",
    href: "/hesaplamalar",
    icon: HeartPulse,
    count: "Sağlık araçları",
  },
];

const quickLinks = [
  {
    title: "Kredi Hesaplama",
    href: "/hesaplamalar/kredi-hesaplama",
    icon: Landmark,
  },
  {
    title: "KDV Hesaplama",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Faiz Hesaplama",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: TrendingUp,
  },
  {
    title: "Maaş Hesaplama",
    href: "/hesaplamalar/maas-hesaplama",
    icon: Banknote,
  },
];

const steps = [
  {
    number: "01",
    title: "Aracınızı bulun",
    description:
      "Arama alanını veya kategorileri kullanarak ihtiyacınız olan hesaplama aracına ulaşın.",
    icon: Search,
  },
  {
    number: "02",
    title: "Bilgileri girin",
    description:
      "Hesaplama için gerekli tutar, oran, süre veya diğer bilgileri ilgili alanlara yazın.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Sonucu görüntüleyin",
    description:
      "Hesaplama sonucunu ve varsa detaylı ödeme, oran veya karşılaştırma bilgilerini inceleyin.",
    icon: CheckCircle2,
  },
];

const platformFeatures = [
  {
    title: "Hızlı sonuçlar",
    description:
      "Gerekli bilgileri girerek hesaplama sonuçlarını saniyeler içerisinde görüntüleyebilirsiniz.",
    icon: Zap,
  },
  {
    title: "Güvenilir yaklaşım",
    description:
      "Araçlarımız yaygın kabul gören hesaplama yöntemleri ve standart formüller kullanılarak hazırlanır.",
    icon: ShieldCheck,
  },
  {
    title: "Mobil uyumlu",
    description:
      "Hesaplama araçlarını telefon, tablet ve bilgisayar üzerinden rahatlıkla kullanabilirsiniz.",
    icon: Smartphone,
  },
  {
    title: "Üyelik gerektirmez",
    description:
      "Hesaplama yapabilmek için kayıt olmanız veya kişisel bilgilerinizi paylaşmanız gerekmez.",
    icon: LockKeyhole,
  },
];

const trustItems = [
  "Üyelik gerekmez",
  "Ücretsiz kullanım",
  "Mobil uyumlu",
  "Anlaşılır sonuçlar",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="overflow-hidden bg-slate-50">
        {/* Premium Hero */}
        <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
          <div
            className="pointer-events-none absolute inset-0 -z-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.055) 1px, transparent 0)",
              backgroundSize: "26px 26px",
            }}
          />

          <div
            className="pointer-events-none absolute -left-40 top-10 -z-10 size-[30rem] rounded-full bg-blue-200/50 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-40 top-20 -z-10 size-[34rem] rounded-full bg-indigo-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-16 px-4 pb-28 pt-20 sm:px-6 sm:pt-24 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-32 lg:pt-28">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                Türkiye&apos;nin ücretsiz hesaplama platformu
              </div>

              <h1 className="mt-7 max-w-3xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
                İhtiyacınız olan
                <span className="relative mx-2 inline-block text-blue-700">
                  hesaplama
                  <span
                    className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-blue-100"
                    aria-hidden="true"
                  />
                </span>
                tek bir yerde
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Kredi, KDV, faiz, maaş, mevduat, kira, tarih ve sağlık
                hesaplamalarını karmaşık işlemlerle uğraşmadan saniyeler içinde
                tamamlayın.
              </p>

              <form
                action="/hesaplamalar"
                method="get"
                className="mt-9 max-w-2xl"
                role="search"
              >
                <div className="group relative rounded-[1.4rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/10 transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
                  <Search
                    className="pointer-events-none absolute left-6 top-1/2 size-5 -translate-y-1/2 text-slate-400"
                    aria-hidden="true"
                  />

                  <input
                    type="search"
                    name="arama"
                    aria-label="Hesaplama aracı ara"
                    placeholder="Hangi hesaplamayı arıyorsunuz?"
                    className="min-h-14 w-full rounded-2xl bg-transparent py-3 pl-12 pr-36 text-base text-slate-950 outline-none placeholder:text-slate-400 sm:pr-44"
                  />

                  <button
                    type="submit"
                    className="absolute bottom-2 right-2 top-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-700 px-5 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:px-7"
                  >
                    <span className="hidden sm:inline">Hesaplama ara</span>
                    <span className="sm:hidden">Ara</span>
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                </div>
              </form>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {quickLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
                    >
                      <Icon
                        className="size-4 text-blue-600"
                        aria-hidden="true"
                      />
                      {item.title}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-7">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero hesaplama önizlemesi */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/60 via-indigo-100/50 to-cyan-100/60 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Calculator className="size-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Kredi Hesaplama
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Örnek hesaplama ekranı
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Hazır
                  </div>
                </div>

                <div className="mt-6 grid gap-4">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-700">
                        Kredi tutarı
                      </span>
                      <span className="text-xs text-slate-400">₺</span>
                    </div>

                    <div className="flex min-h-14 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
                      <span className="text-lg font-bold text-slate-950">
                        250.000
                      </span>
                      <span className="ml-auto text-sm font-medium text-slate-500">
                        TL
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="mb-2 text-sm font-semibold text-slate-700">
                        Vade
                      </div>

                      <div className="flex min-h-14 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
                        <span className="font-bold text-slate-950">24</span>
                        <span className="ml-auto text-sm text-slate-500">Ay</span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-2 text-sm font-semibold text-slate-700">
                        Aylık faiz
                      </div>

                      <div className="flex min-h-14 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4">
                        <span className="font-bold text-slate-950">3,49</span>
                        <span className="ml-auto text-sm text-slate-500">%</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-1 rounded-[1.4rem] bg-slate-950 p-5 text-white">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                          Aylık taksit
                        </p>
                        <p className="mt-2 text-3xl font-black tracking-tight">
                          15.528,34 TL
                        </p>
                      </div>

                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                        <TrendingUp className="size-5" aria-hidden="true" />
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                      <div>
                        <p className="text-xs text-slate-400">Toplam ödeme</p>
                        <p className="mt-1 text-sm font-bold text-white">
                          372.680,16 TL
                        </p>
                      </div>

                      <div>
                        <p className="text-xs text-slate-400">Toplam faiz</p>
                        <p className="mt-1 text-sm font-bold text-white">
                          122.680,16 TL
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/hesaplamalar/kredi-hesaplama"
                    className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                  >
                    Kendi kredinizi hesaplayın
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              <div className="absolute -left-5 top-24 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Güvenli kullanım
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-950">
                      Üyelik gerekmez
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-7 -right-3 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-right-8">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <Zap className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Hızlı sonuç
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-950">
                      Saniyeler içinde
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platform bilgileri */}
        <section
          aria-label="HesapRehberi platform bilgileri"
          className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {platformHighlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className={`relative flex items-center gap-4 p-6 sm:p-7 ${
                    index !== platformHighlights.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xl font-bold tracking-tight text-slate-950">
                      {highlight.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {highlight.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kategoriler */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Building2 className="size-4 text-blue-700" aria-hidden="true" />
                  Hesaplama kategorileri
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  İhtiyacınıza uygun kategoriyi seçin
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                  Finansal işlemlerden sağlık hesaplamalarına kadar farklı
                  alanlarda hazırlanan araçları kategori bazında keşfedin.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <Link
                  href="/hesaplamalar"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Tüm kategorileri görüntüle
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {calculatorCategories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-blue-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>

                        <ChevronRight
                          className="size-5 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-700"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-slate-950">
                        {category.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {category.description}
                      </p>

                      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                        {category.count}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popüler Hesaplamalar */}
        <section className="relative border-y border-slate-200 bg-white py-24 sm:py-28">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-50/80 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="size-4" aria-hidden="true" />
                En çok kullanılan araçlar
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Popüler hesaplamalara
                <span className="text-blue-700"> hızlıca ulaşın</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Finans, kredi, vergi, maaş, konut, tarih ve sağlık alanlarında
                sık kullanılan hesaplama araçlarını ücretsiz kullanın.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {featuredCalculators.map((calculator) => (
                <CategoryCard
                  key={calculator.href}
                  title={calculator.title}
                  icon={calculator.icon}
                  href={calculator.href}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/hesaplamalar"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Tüm hesaplama araçları
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Nasıl çalışır */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  <Calculator className="size-4" aria-hidden="true" />
                  Kolay kullanım
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Üç basit adımda hesaplamanızı tamamlayın
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Karmaşık işlemlerle uğraşmadan, ihtiyacınız olan hesaplamayı
                  kısa sürede tamamlayabilirsiniz.
                </p>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-7 text-blue-950">
                      Hesaplama araçlarına girdiğiniz bilgiler üyelik sistemiyle
                      ilişkilendirilmez. Sonuçlar doğrudan tarayıcınızda
                      hesaplanır.
                    </p>
                  </div>
                </div>

                <Link
                  href="/hesaplamalar"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Hesaplama araçlarını inceleyin
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="grid gap-5">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.number}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                    >
                      <div
                        className="pointer-events-none absolute -right-4 -top-8 text-8xl font-black text-slate-100 transition group-hover:text-blue-50"
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>

                      <div className="relative flex gap-5">
                        <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>

                        <div className="pr-10">
                          <h3 className="text-xl font-bold text-slate-950">
                            {step.title}
                          </h3>

                          <p className="mt-3 leading-7 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Ana CTA */}
        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 shadow-2xl shadow-slate-950/20 sm:px-10 sm:py-16 lg:px-16">
              <div
                className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-blue-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-32 right-0 size-80 rounded-full bg-indigo-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Calculator className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Günlük hesaplamalarınızı tek platformda tamamlayın
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Finans, vergi, maaş, konut, tarih ve sağlık alanlarında
                  ihtiyaç duyduğunuz araçlara ücretsiz ulaşın.
                </p>

                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
                  {[
                    "Kayıt gerektirmez",
                    "Ücretsizdir",
                    "Mobil uyumludur",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-300"
                    >
                      <CheckCircle2
                        className="size-4 text-blue-300"
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/hesaplamalar"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplamaları keşfet
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/blog"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Rehberleri incele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Son blog yazıları */}
        <LatestArticles />

        {/* Neden HesapRehberi */}
        <section className="relative border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <BadgeCheck className="size-4" aria-hidden="true" />
                Neden HesapRehberi?
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Hesaplama yapmanın daha kolay yolu
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Günlük hesaplamaları daha anlaşılır, erişilebilir ve hızlı hâle
                getiren kullanıcı odaklı bir platform.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {platformFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sık sorulan sorular */}
        <HomeFaq />

        {/* Hakkımızda */}
        <section className="pb-28 pt-8 sm:pb-32 sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <FileText className="size-4" aria-hidden="true" />
                  HesapRehberi hakkında
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Karmaşık hesaplamaları daha anlaşılır hâle getiriyoruz
                </h2>

                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  HesapRehberi; finans, vergi, maaş, alışveriş, tarih, konut ve
                  sağlık gibi günlük hayatta ihtiyaç duyulan alanlardaki
                  hesaplama araçlarını tek bir platformda sunar.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Amacımız, kullanıcıların ihtiyaç duyduğu sonuçlara gereksiz
                  karmaşıklık yaşamadan ulaşmasını sağlamaktır. Araçların
                  yanında yer alan açıklamalar ve rehberler, hesaplama
                  sonuçlarının daha kolay anlaşılmasına yardımcı olur.
                </p>

                <div className="mt-8">
                  <Link
                    href="/hakkimizda"
                    className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    HesapRehberi&apos;ni daha yakından tanıyın
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              <div className="relative flex min-h-80 items-center bg-slate-950 p-8 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.45) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-blue-600/40 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <ShieldCheck
                    className="size-12 text-blue-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    Önemli bilgilendirme
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Hesaplama sonuçları genel bilgilendirme amacı taşır.
                    Finansal, vergisel, hukuki veya sağlıkla ilgili önemli
                    kararlarda resmî kaynakların ve alanında uzman kişilerin
                    değerlendirmeleri dikkate alınmalıdır.
                  </p>

                  <div className="mt-7 flex items-center gap-3 text-sm font-medium text-blue-200">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                    Şeffaf ve anlaşılır sonuçlar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}