import {
  ArrowRight,
  Banknote,
  Calculator,
  Landmark,
  ReceiptText,
} from "lucide-react";
import Link from "next/link";

const articles = [
  {
    title: "KDV Nasıl Hesaplanır?",
    description:
      "KDV dahil ve KDV hariç fiyatların hangi formüllerle hesaplandığını örneklerle öğrenin.",
    category: "Vergi",
    href: "/blog/kdv-nasil-hesaplanir",
    icon: ReceiptText,
  },
  {
    title: "Kredi Taksiti Nasıl Hesaplanır?",
    description:
      "Kredi tutarı, faiz oranı ve vadenin aylık taksit üzerindeki etkisini inceleyin.",
    category: "Kredi",
    href: "/blog/kredi-taksiti-nasil-hesaplanir",
    icon: Landmark,
  },
  {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
    description:
      "Basit ve bileşik faiz yöntemlerinin farklarını örnek hesaplamalarla keşfedin.",
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
];

export default function LatestArticles() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Finans Rehberi
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Son Blog Yazıları
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Finansal hesaplamaların nasıl yapıldığını sade anlatımlar ve pratik
            örneklerle öğrenin.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
        >
          Tüm yazıları görüntüle
          <ArrowRight size={19} />
        </Link>
      </div>

      <div className="grid gap-7 md:grid-cols-2">
        {articles.map((article) => {
          const Icon = article.icon;

          return (
            <article
              key={article.href}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                  {article.category}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {article.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {article.description}
              </p>

              <Link
                href={article.href}
                className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
              >
                Yazıyı oku
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}