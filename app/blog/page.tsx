import type { Metadata } from "next";
import {
  ArrowRight,
  Banknote,
  Calculator,
  Landmark,
  ReceiptText,
} from "lucide-react";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Finans ve Hesaplama Rehberi",
  description:
    "KDV, kredi, faiz, maaş, döviz ve enflasyon konularında anlaşılır finans rehberlerini okuyun.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Finans ve Hesaplama Rehberi | HesapRehberi",
    description:
      "KDV, kredi, faiz, maaş, döviz ve enflasyon konularındaki rehberleri inceleyin.",
    url: "/blog",
    type: "website",
  },
};

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
      "Kredi tutarı, faiz oranı ve vadenin aylık taksit ile toplam geri ödemeyi nasıl etkilediğini inceleyin.",
    category: "Kredi",
    href: "/blog/kredi-taksiti-nasil-hesaplanir",
    icon: Landmark,
  },
  {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
    description:
      "Basit ve bileşik faiz hesaplama yöntemleri arasındaki farkları anlaşılır örneklerle keşfedin.",
    category: "Faiz",
    href: "/blog/basit-faiz-bilesik-faiz-farki",
    icon: Calculator,
  },
  {
    title: "Döviz Çevirme İşlemi Nasıl Yapılır?",
    description:
      "Dövizden Türk lirasına ve Türk lirasından dövize çeviri yapmanın temel yöntemlerini öğrenin.",
    category: "Döviz",
    href: "/blog/doviz-cevirme-nasil-yapilir",
    icon: Banknote,
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Blog",
            },
          ]}
        />

        <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 px-8 py-14 text-center text-white shadow-xl md:px-14">
          <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
            HesapRehberi Blog
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Finans ve Hesaplama Rehberi
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Finansal hesaplamaları daha iyi anlamanıza yardımcı olacak sade,
            anlaşılır ve faydalı rehberleri inceleyin.
          </p>
        </section>

        <section className="py-16">
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
              Son Yazılar
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Hesaplamalarla ilgili temel bilgileri ve pratik örnekleri okuyun.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <span className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    {article.category}
                  </span>

                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {article.title}
                  </h2>

                  <p className="mt-4 leading-7 text-slate-600">
                    {article.description}
                  </p>

                  <Link
                    href={article.href}
                    className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
                  >
                    Yazıyı Oku
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
      </div>
    </main>
  );
}