import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Landmark,
  Lightbulb,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const baseUrl = "https://hesaprehberionline.com";

export const metadata: Metadata = {
  title: "Finans ve Hesaplama Rehberi",
  description:
    "KDV, kredi, faiz, maaş, döviz ve diğer finansal hesaplamalar hakkında sade, anlaşılır ve kapsamlı rehberleri okuyun.",
  keywords: [
    "finans rehberi",
    "hesaplama rehberi",
    "KDV nasıl hesaplanır",
    "kredi taksiti hesaplama",
    "faiz hesaplama",
    "bileşik faiz",
    "döviz çevirme",
    "maaş hesaplama",
    "finans blogu",
    "HesapRehberi blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/blog`,
    siteName: "HesapRehberi",
    title: "Finans ve Hesaplama Rehberi | HesapRehberi",
    description:
      "KDV, kredi, faiz, maaş, döviz ve diğer finansal hesaplamalarla ilgili anlaşılır rehberleri inceleyin.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HesapRehberi finans ve hesaplama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finans ve Hesaplama Rehberi | HesapRehberi",
    description:
      "Finansal hesaplamaları daha iyi anlamanıza yardımcı olacak rehberleri inceleyin.",
    images: ["/logo.jpg"],
  },
};

const articles = [
  {
    title: "KDV Nasıl Hesaplanır?",
    description:
      "KDV dahil ve KDV hariç fiyatların hangi formüller kullanılarak hesaplandığını, farklı oranlar ve örnek işlemler üzerinden öğrenin.",
    shortDescription:
      "KDV dahil ve hariç fiyat hesaplama yöntemlerini örneklerle öğrenin.",
    category: "Vergi",
    href: "/blog/kdv-nasil-hesaplanir",
    icon: ReceiptText,
    readingTime: "8 dk",
    featured: true,
    accent: "blue",
  },
  {
    title: "Kredi Taksiti Nasıl Hesaplanır?",
    description:
      "Kredi tutarı, aylık faiz oranı ve vadenin taksit tutarı ile toplam geri ödeme üzerindeki etkisini ayrıntılı olarak inceleyin.",
    shortDescription:
      "Kredi tutarı, faiz ve vadenin aylık taksite etkisini inceleyin.",
    category: "Kredi",
    href: "/blog/kredi-taksiti-nasil-hesaplanir",
    icon: Landmark,
    readingTime: "10 dk",
    featured: false,
    accent: "indigo",
  },
  {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
    description:
      "Basit faiz ile bileşik faiz hesaplama yöntemleri arasındaki farkları, formülleri ve örnek sonuçları karşılaştırmalı olarak keşfedin.",
    shortDescription:
      "Basit ve bileşik faiz yöntemlerinin farklarını karşılaştırın.",
    category: "Faiz",
    href: "/blog/basit-faiz-bilesik-faiz-farki",
    icon: Calculator,
    readingTime: "9 dk",
    featured: false,
    accent: "emerald",
  },
  {
    title: "Döviz Çevirme İşlemi Nasıl Yapılır?",
    description:
      "Dövizden Türk lirasına ve Türk lirasından dövize çeviri yaparken kullanılan temel hesaplama yöntemlerini öğrenin.",
    shortDescription:
      "Döviz ve Türk lirası arasında çeviri yapmanın temelini öğrenin.",
    category: "Döviz",
    href: "/blog/doviz-cevirme-nasil-yapilir",
    icon: Banknote,
    readingTime: "7 dk",
    featured: false,
    accent: "amber",
  },
];

const featuredArticle =
  articles.find((article) => article.featured) ?? articles[0];

const regularArticles = articles.filter(
  (article) => article.href !== featuredArticle.href,
);

const categories = [
  {
    title: "Vergi Rehberleri",
    description:
      "KDV ve diğer vergi hesaplamalarında kullanılan temel yöntemleri öğrenin.",
    icon: ReceiptText,
    href: "/blog/kdv-nasil-hesaplanir",
    articleCount: "KDV rehberleri",
  },
  {
    title: "Kredi Rehberleri",
    description:
      "Kredi taksiti, faiz oranı ve toplam geri ödeme ilişkisini anlayın.",
    icon: Landmark,
    href: "/blog/kredi-taksiti-nasil-hesaplanir",
    articleCount: "Kredi rehberleri",
  },
  {
    title: "Faiz Rehberleri",
    description:
      "Basit faiz, bileşik faiz ve faiz hesaplama yöntemlerini karşılaştırın.",
    icon: TrendingUp,
    href: "/blog/basit-faiz-bilesik-faiz-farki",
    articleCount: "Faiz rehberleri",
  },
  {
    title: "Döviz Rehberleri",
    description:
      "Kur değerleri üzerinden döviz çevirme işlemlerinin nasıl yapıldığını öğrenin.",
    icon: Banknote,
    href: "/blog/doviz-cevirme-nasil-yapilir",
    articleCount: "Döviz rehberleri",
  },
];

const blogHighlights = [
  {
    value: `${articles.length}`,
    label: "Detaylı finans rehberi",
    icon: FileText,
  },
  {
    value: "4",
    label: "Temel finans kategorisi",
    icon: BookOpen,
  },
  {
    value: "%100",
    label: "Ücretsiz içerik",
    icon: BadgeCheck,
  },
  {
    value: "7/24",
    label: "Kesintisiz erişim",
    icon: Clock3,
  },
];

const editorialFeatures = [
  {
    title: "Sade anlatım",
    description:
      "Karmaşık finansal kavramlar herkesin anlayabileceği açık bir dille anlatılır.",
    icon: Lightbulb,
  },
  {
    title: "Pratik örnekler",
    description:
      "Hesaplama yöntemleri yalnızca formüllerle değil, gerçekçi örneklerle açıklanır.",
    icon: Calculator,
  },
  {
    title: "Hesaplama araçları",
    description:
      "Rehberlerde anlatılan işlemleri ilgili ücretsiz araçlarımızla uygulayabilirsiniz.",
    icon: WalletCards,
  },
  {
    title: "Bilgilendirici içerik",
    description:
      "İçerikler genel bilgilendirme amacıyla, anlaşılır ve kullanıcı odaklı hazırlanır.",
    icon: ShieldCheck,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/blog/#webpage`,
      url: `${baseUrl}/blog`,
      name: "Finans ve Hesaplama Rehberi",
      headline: "Finans ve Hesaplama Rehberi",
      description:
        "KDV, kredi, faiz ve döviz hesaplamaları hakkında sade ve anlaşılır finans rehberleri.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/blog/#breadcrumb`,
      },
      mainEntity: {
        "@id": `${baseUrl}/blog/#articles`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/blog/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: `${baseUrl}/blog`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/blog/#articles`,
      name: "HesapRehberi Finans Rehberleri",
      numberOfItems: articles.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: articles.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${baseUrl}${article.href}`,
        name: article.title,
        description: article.description,
      })),
    },
  ],
};

function getArticleAccent(accent: string) {
  switch (accent) {
    case "indigo":
      return {
        icon: "bg-indigo-50 text-indigo-700",
        iconHover: "group-hover:bg-indigo-700",
        badge: "bg-indigo-50 text-indigo-700",
        border: "hover:border-indigo-200",
      };

    case "emerald":
      return {
        icon: "bg-emerald-50 text-emerald-700",
        iconHover: "group-hover:bg-emerald-700",
        badge: "bg-emerald-50 text-emerald-700",
        border: "hover:border-emerald-200",
      };

    case "amber":
      return {
        icon: "bg-amber-50 text-amber-700",
        iconHover: "group-hover:bg-amber-600",
        badge: "bg-amber-50 text-amber-700",
        border: "hover:border-amber-200",
      };

    default:
      return {
        icon: "bg-blue-50 text-blue-700",
        iconHover: "group-hover:bg-blue-700",
        badge: "bg-blue-50 text-blue-700",
        border: "hover:border-blue-200",
      };
  }
}

export default function BlogPage() {
  const FeaturedIcon = featuredArticle.icon;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-slate-50">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                label: "Blog",
              },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-14">
          <div
            className="pointer-events-none absolute inset-0 -z-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.055) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div
            className="pointer-events-none absolute -left-48 top-0 -z-10 size-[34rem] rounded-full bg-blue-200/50 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-48 top-10 -z-10 size-[36rem] rounded-full bg-indigo-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                HesapRehberi Blog
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-6xl">
                Finansal hesaplamaları
                <span className="block text-blue-700">
                  daha kolay anlayın
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Kredi, KDV, faiz, döviz ve diğer finansal hesaplamaların nasıl
                yapıldığını sade anlatımlar, formüller ve pratik örneklerle
                öğrenin.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#son-yazilar"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Rehberleri incele
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/hesaplamalar"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <Calculator className="size-5" aria-hidden="true" />
                  Hesaplama araçları
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-7">
                {[
                  "Sade ve anlaşılır anlatım",
                  "Pratik hesaplama örnekleri",
                  "Ücretsiz erişim",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="size-3.5" aria-hidden="true" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero görsel kart */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-cyan-100/70 blur-2xl"
                aria-hidden="true"
              />

              <article className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                    <FeaturedIcon className="size-7" aria-hidden="true" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <Sparkles className="size-3.5" aria-hidden="true" />
                    Öne çıkan
                  </span>
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 font-semibold text-blue-700">
                    {featuredArticle.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock3 className="size-4" aria-hidden="true" />
                    {featuredArticle.readingTime} okuma
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {featuredArticle.title}
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  {featuredArticle.description}
                </p>

                <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex gap-3">
                    <Lightbulb
                      className="mt-0.5 size-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-7 text-blue-950">
                      KDV dahil ve hariç tutarları hesaplarken kullanılan
                      formülleri adım adım öğrenin.
                    </p>
                  </div>
                </div>

                <Link
                  href={featuredArticle.href}
                  className="group mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                  aria-label={`${featuredArticle.title} yazısını oku`}
                >
                  Rehberi okumaya başla
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>

              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <BadgeCheck className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      İçerik yaklaşımı
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-950">
                      Sade ve anlaşılır
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog bilgileri */}
        <section
          aria-label="HesapRehberi blog bilgileri"
          className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {blogHighlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className={`flex items-center gap-4 p-6 sm:p-7 ${
                    index !== blogHighlights.length - 1
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
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <BookOpen className="size-4 text-blue-700" aria-hidden="true" />
                Rehber kategorileri
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                İlgi alanınıza uygun
                <span className="text-blue-700"> rehberi keşfedin</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Finansal hesaplamalarla ilgili içerikleri konu başlıklarına göre
                inceleyerek aradığınız bilgiye daha hızlı ulaşın.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
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
                        {category.articleCount}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Son yazılar */}
        <section
          id="son-yazilar"
          className="relative scroll-mt-24 border-y border-slate-200 bg-white py-24 sm:py-28"
          aria-labelledby="latest-articles-title"
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-50/80 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  Güncel rehberler
                </div>

                <h2
                  id="latest-articles-title"
                  className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
                >
                  Son yayınlanan yazılar
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Hesaplamaların arkasındaki yöntemleri, formülleri ve önemli
                  ayrıntıları anlaşılır rehberlerle öğrenin.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
              >
                Hesaplama araçlarına git
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {regularArticles.map((article) => {
                const Icon = article.icon;
                const accent = getArticleAccent(article.accent);

                return (
                  <article
                    key={article.href}
                    className={`group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 ${accent.border}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div
                        className={`flex size-13 items-center justify-center rounded-2xl transition duration-300 group-hover:text-white ${accent.icon} ${accent.iconHover}`}
                      >
                        <Icon className="size-6" aria-hidden="true" />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${accent.badge}`}
                      >
                        {article.category}
                      </span>
                    </div>

                    <div className="mt-7 flex items-center gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Clock3 className="size-4" aria-hidden="true" />
                        {article.readingTime} okuma
                      </span>

                      <span
                        className="size-1 rounded-full bg-slate-300"
                        aria-hidden="true"
                      />

                      <span>HesapRehberi</span>
                    </div>

                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-950">
                      <Link
                        href={article.href}
                        className="transition hover:text-blue-700"
                      >
                        {article.title}
                      </Link>
                    </h3>

                    <p className="mt-4 flex-1 leading-7 text-slate-600">
                      {article.shortDescription}
                    </p>

                    <Link
                      href={article.href}
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                      aria-label={`${article.title} yazısını oku`}
                    >
                      Yazıyı oku
                      <ArrowRight
                        className="size-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* Öne çıkan geniş yazı */}
            <article className="group mt-7 grid overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 shadow-xl shadow-slate-950/10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="relative flex min-h-80 items-center justify-center overflow-hidden p-8 sm:p-10">
                <div
                  className="pointer-events-none absolute inset-0 opacity-25"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.45) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div
                  className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-blue-600/50 blur-3xl"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -bottom-24 -right-20 size-72 rounded-full bg-indigo-600/40 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative text-center">
                  <div className="mx-auto flex size-24 items-center justify-center rounded-[1.8rem] border border-white/10 bg-white/10 text-blue-200 shadow-2xl backdrop-blur">
                    <FeaturedIcon className="size-12" aria-hidden="true" />
                  </div>

                  <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
                    <Sparkles className="size-4" aria-hidden="true" />
                    Editörün seçimi
                  </div>
                </div>
              </div>

              <div className="bg-white p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="rounded-full bg-blue-50 px-3 py-1.5 font-semibold text-blue-700">
                    {featuredArticle.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-slate-500">
                    <Clock3 className="size-4" aria-hidden="true" />
                    {featuredArticle.readingTime} okuma
                  </span>
                </div>

                <h3 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  {featuredArticle.title}
                </h3>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  {featuredArticle.description}
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {[
                    "KDV dahil fiyat formülü",
                    "KDV hariç fiyat formülü",
                    "Farklı oranlarla örnekler",
                    "Pratik hesaplama adımları",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700"
                    >
                      <CheckCircle2
                        className="size-5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={featuredArticle.href}
                  className="group mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Rehberi şimdi oku
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* İçerik yaklaşımı */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <BadgeCheck className="size-4" aria-hidden="true" />
                HesapRehberi içerikleri
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Finansal bilgileri daha anlaşılır hâle getiriyoruz
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Rehberlerimiz, hesaplama yöntemlerini öğrenmenize ve sonuçları
                daha doğru yorumlamanıza yardımcı olacak şekilde hazırlanır.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {editorialFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
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

        {/* Hesaplama CTA */}
        <section className="pb-28 sm:pb-32">
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
                  Öğrendiğiniz bilgileri hesaplama araçlarıyla uygulayın
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Kredi, KDV, faiz, maaş, mevduat, kira ve daha birçok alandaki
                  ücretsiz araçlarla hesaplamalarınızı saniyeler içinde
                  tamamlayın.
                </p>

                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
                  {[
                    "Ücretsiz kullanım",
                    "Üyelik gerektirmez",
                    "Mobil uyumlu",
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
                    Hesaplama araçlarını keşfet
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    İçerik önerisinde bulun
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bilgilendirme */}
        <section className="border-t border-slate-200 bg-white py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-start sm:p-8">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  Önemli bilgilendirme
                </h2>

                <p className="mt-2 max-w-5xl text-sm leading-7 text-slate-600">
                  HesapRehberi blogunda yer alan içerikler genel bilgilendirme
                  amacıyla hazırlanır. Finansal, vergisel veya hukuki kararlar
                  verilmeden önce güncel resmî kaynakların ve alanında uzman
                  kişilerin değerlendirmeleri dikkate alınmalıdır.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}