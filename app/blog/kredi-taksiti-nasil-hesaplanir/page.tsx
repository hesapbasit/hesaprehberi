import type { Metadata } from "next";
import { ArrowRight, Landmark } from "lucide-react";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Kredi Taksiti Nasıl Hesaplanır?",
  description:
    "Kredi tutarı, aylık faiz oranı ve vadeye göre aylık taksit ile toplam geri ödemenin nasıl hesaplandığını öğrenin.",
  alternates: {
    canonical: "/blog/kredi-taksiti-nasil-hesaplanir",
  },
  openGraph: {
    title: "Kredi Taksiti Nasıl Hesaplanır? | HesapRehberi",
    description:
      "Kredi taksiti, toplam faiz ve toplam geri ödeme hesabını örneklerle inceleyin.",
    url: "/blog/kredi-taksiti-nasil-hesaplanir",
    type: "article",
  },
};

export default function KrediTaksitiNasilHesaplanirPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Blog",
              href: "/blog",
            },
            {
              label: "Kredi Taksiti Nasıl Hesaplanır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Landmark size={30} />
          </div>

          <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            Kredi Rehberi
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Kredi Taksiti Nasıl Hesaplanır?
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Kredi tutarı, aylık faiz oranı ve vade bilgilerinin aylık taksit,
            toplam faiz ve toplam geri ödeme üzerindeki etkisini öğrenin.
          </p>

          <ShareButtons
            title="Kredi Taksiti Nasıl Hesaplanır? | HesapRehberi"
            description="Kredi taksiti ve toplam geri ödeme hesabını örneklerle öğrenin."
          />

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Taksitini Belirleyen Unsurlar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık kredi taksiti temel olarak kredi tutarı, aylık faiz oranı
                ve toplam vade sayısına göre hesaplanır. Bu değerlerden biri
                değiştiğinde aylık taksit ve toplam geri ödeme de değişir.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Eşit Taksitli Kredi Formülü
              </h2>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold leading-8 text-blue-900">
                  Aylık Taksit = Anapara × [Faiz × (1 + Faiz)
                  <sup>Vade</sup>] / [(1 + Faiz)<sup>Vade</sup> − 1]
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Formüldeki faiz değeri aylık faiz oranının ondalık karşılığıdır.
                Örneğin aylık faiz oranı %3 ise formülde 0,03 olarak kullanılır.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Kredi Hesabı
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                100.000 ₺ kredi, 12 ay vade ve aylık %3 faiz oranı üzerinden
                hesaplandığında aylık taksit yaklaşık olarak eşit taksitli kredi
                formülüyle bulunur.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Kredi Tutarı</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    100.000 ₺
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Vade</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    12 Ay
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Aylık Faiz</p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    %3
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Vade Uzarsa Ne Olur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vade uzadığında aylık taksit genellikle azalır. Ancak daha uzun
                süre faiz ödendiği için toplam faiz maliyeti ve toplam geri
                ödeme çoğu zaman artar.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Banka Masrafları Hesaba Dahil midir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Tahsis ücreti, sigorta, vergi ve bankanın uygulayabileceği diğer
                masraflar standart kredi formülüne dahil değildir. Bu nedenle
                hesaplama aracı yaklaşık sonuç verir.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                Kredi Taksitinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Kredi tutarı, vade ve aylık faiz oranını girerek aylık taksit ve
                toplam geri ödeme tutarını hemen görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/kredi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl"
              >
                Kredi Hesaplama Aracını Aç
                <ArrowRight size={19} />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}