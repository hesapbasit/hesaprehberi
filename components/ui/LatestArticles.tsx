import Link from "next/link";

import {
  Activity,
  ArrowRight,
  Banknote,
  Calculator,
  CalendarDays,
  Car,
  CircleDollarSign,
  Coins,
  CreditCard,
  HeartPulse,
  Home,
  Landmark,
  Percent,
  ReceiptText,
  Scale,
  TrendingUp,
  WalletCards,
} from "lucide-react";

const articles = [
  {
    title: "Taşıt Kredisi Hesaplama Rehberi",
    description:
      "Araç kredisi taksitlerinin, toplam geri ödeme tutarının ve kredi maliyetinin nasıl hesaplandığını öğrenin.",
    category: "Kredi",
    href: "/blog/tasit-kredisi-hesaplama-rehberi",
    icon: Car,
  },
  {
    title: "Konut Kredisi Hesaplama Rehberi",
    description:
      "Konut kredisi faiz oranı, vade ve kredi tutarının aylık taksitlere etkisini örneklerle inceleyin.",
    category: "Kredi",
    href: "/blog/konut-kredisi-hesaplama-rehberi",
    icon: Home,
  },
  {
    title: "İhtiyaç Kredisi Hesaplama Rehberi",
    description:
      "İhtiyaç kredilerinde aylık taksit, toplam faiz ve geri ödeme tutarının nasıl oluştuğunu öğrenin.",
    category: "Kredi",
    href: "/blog/ihtiyac-kredisi-hesaplama-rehberi",
    icon: CreditCard,
  },
  {
    title: "Mevduat Faizi Hesaplama Rehberi",
    description:
      "Vadeli mevduat getirisini, stopaj kesintisini ve net kazancı adım adım hesaplayın.",
    category: "Mevduat",
    href: "/blog/mevduat-faizi-hesaplama-rehberi",
    icon: Coins,
  },
  {
    title: "KDV Nasıl Hesaplanır?",
    description:
      "KDV dahil ve KDV hariç fiyatların hangi formüllerle hesaplandığını örneklerle öğrenin.",
    category: "Vergi",
    href: "/blog/kdv-nasil-hesaplanir",
    icon: ReceiptText,
  },
  {
    title: "Gelir Vergisi Hesaplama Rehberi",
    description:
      "Gelir vergisi dilimleri, matrah ve ödenecek vergi tutarının hesaplanma yöntemlerini inceleyin.",
    category: "Vergi",
    href: "/blog/gelir-vergisi-hesaplama-rehberi",
    icon: CircleDollarSign,
  },
  {
    title: "Stopaj Hesaplama Rehberi",
    description:
      "Brüt ve net tutarlar üzerinden stopaj kesintisinin nasıl hesaplandığını pratik örneklerle öğrenin.",
    category: "Vergi",
    href: "/blog/stopaj-hesaplama-rehberi",
    icon: WalletCards,
  },
  {
    title: "Kredi Taksiti Nasıl Hesaplanır?",
    description:
      "Kredi tutarı, faiz oranı ve vadenin aylık taksit üzerindeki etkisini ayrıntılı olarak inceleyin.",
    category: "Kredi",
    href: "/blog/kredi-taksiti-nasil-hesaplanir",
    icon: Landmark,
  },
  {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
    description:
      "Basit ve bileşik faiz yöntemlerinin farklarını karşılaştırmalı örnek hesaplamalarla keşfedin.",
    category: "Faiz",
    href: "/blog/basit-faiz-bilesik-faiz-farki",
    icon: Calculator,
  },
  {
    title: "Döviz Çevirme İşlemi Nasıl Yapılır?",
    description:
      "Dövizden Türk lirasına ve Türk lirasından dövize çevirmenin temel yöntemlerini öğrenin.",
    category: "Döviz",
    href: "/blog/doviz-cevirme-nasil-yapilir",
    icon: Banknote,
  },
  {
    title: "Kira Artışı Hesaplama Rehberi",
    description:
      "Kira artış oranının TÜFE verileri ve yasal sınırlar doğrultusunda nasıl hesaplandığını inceleyin.",
    category: "Konut",
    href: "/blog/kira-artis-hesaplama-rehberi",
    icon: Percent,
  },
  {
    title: "Enflasyon Hesaplaması Nasıl Yapılır?",
    description:
      "Paranın satın alma gücündeki değişimi ve enflasyon oranını örneklerle hesaplamayı öğrenin.",
    category: "Ekonomi",
    href: "/blog/enflasyon-hesaplamasi-nasil-yapilir",
    icon: TrendingUp,
  },
];

const categoryStyles: Record<string, string> = {
  Kredi: "bg-blue-50 text-blue-700 ring-blue-200",
  Mevduat: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  Vergi: "bg-amber-50 text-amber-700 ring-amber-200",
  Faiz: "bg-violet-50 text-violet-700 ring-violet-200",
  Döviz: "bg-cyan-50 text-cyan-700 ring-cyan-200",
  Konut: "bg-rose-50 text-rose-700 ring-rose-200",
  Ekonomi: "bg-indigo-50 text-indigo-700 ring-indigo-200",
};

export default function LatestArticles() {
  return (
    <section
      aria-labelledby="latest-articles-title"
      className="relative overflow-hidden py-24 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-indigo-50/70 to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
              <CalendarDays className="size-4" aria-hidden="true" />
              Finans ve hesaplama rehberleri
            </span>

            <h2
              id="latest-articles-title"
              className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
            >
              Son blog yazıları
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Finansal hesaplamaları, vergi yöntemlerini, kredi maliyetlerini ve
              günlük hesaplama işlemlerini anlaşılır rehberlerle öğrenin.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            Tüm yazıları görüntüle
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => {
            const Icon = article.icon;

            return (
              <article
                key={article.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${
                      categoryStyles[article.category] ??
                      "bg-slate-100 text-slate-700 ring-slate-200"
                    }`}
                  >
                    {article.category}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold leading-8 text-slate-950 sm:text-2xl">
                  <Link
                    href={article.href}
                    className="transition hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                  >
                    {article.title}
                  </Link>
                </h3>

                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {article.description}
                </p>

                <Link
                  href={article.href}
                  aria-label={`${article.title} yazısını oku`}
                  className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Yazıyı oku
                  <ArrowRight
                    className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
          >
            Bütün blog rehberlerini keşfet
            <ArrowRight
              className="size-5 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}