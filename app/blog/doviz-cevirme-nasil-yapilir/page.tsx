import type { Metadata } from "next";
import { ArrowRight, Banknote } from "lucide-react";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Döviz Çevirme İşlemi Nasıl Yapılır?",
  description:
    "Dövizden Türk lirasına ve Türk lirasından dövize çeviri işleminin nasıl yapıldığını örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/doviz-cevirme-nasil-yapilir",
  },
  openGraph: {
    title: "Döviz Çevirme İşlemi Nasıl Yapılır? | HesapRehberi",
    description:
      "Döviz çevirme işlemini, alış-satış kuru farkını ve temel hesaplama yöntemlerini inceleyin.",
    url: "/blog/doviz-cevirme-nasil-yapilir",
    type: "article",
  },
};

export default function DovizCevirmeNasilYapilirPage() {
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
              label: "Döviz Çevirme İşlemi Nasıl Yapılır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Banknote size={30} />
          </div>

          <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            Döviz Rehberi
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Döviz Çevirme İşlemi Nasıl Yapılır?
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dövizden Türk lirasına ve Türk lirasından dövize çeviri yaparken
            kullanılan temel yöntemleri ve alış-satış kuru farkını öğrenin.
          </p>

          <ShareButtons
            title="Döviz Çevirme İşlemi Nasıl Yapılır? | HesapRehberi"
            description="Döviz çevirme işlemini ve alış-satış kuru farkını öğrenin."
          />

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Dövizden Türk Lirasına Çeviri
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Döviz miktarını Türk lirasına çevirmek için döviz miktarı,
                kullanılan kur değeriyle çarpılır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Türk Lirası Tutarı = Döviz Miktarı × Döviz Kuru
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Örneğin 1 Amerikan doları 40 TL ise 100 doların Türk lirası
                karşılığı 4.000 TL olur.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Türk Lirasından Dövize Çeviri
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Türk lirası tutarını dövize çevirmek için Türk lirası miktarı,
                ilgili döviz kuruna bölünür.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Döviz Miktarı = Türk Lirası Tutarı / Döviz Kuru
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Örneğin 4.000 TL, 1 doların 40 TL olduğu kur üzerinden
                çevrildiğinde 100 dolara karşılık gelir.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Alış ve Satış Kuru Arasındaki Fark
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankalar ve döviz büroları dövizi farklı fiyatlardan alır ve
                satar. Döviz satın alırken satış kuru, döviz bozdururken ise
                alış kuru kullanılır.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <p className="text-sm font-semibold text-slate-500">
                    Alış Kuru
                  </p>

                  <p className="mt-4 text-2xl font-bold text-slate-900">
                    Kurumun dövizi sizden aldığı fiyat
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    Satış Kuru
                  </p>

                  <p className="mt-4 text-2xl font-bold">
                    Kurumun dövizi size sattığı fiyat
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Döviz Kuru Neden Değişir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Döviz kurları; arz ve talep, faiz oranları, enflasyon,
                ekonomik beklentiler, merkez bankası kararları ve küresel
                gelişmeler gibi birçok etkene bağlı olarak değişebilir.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Gerçek İşlem Tutarı Neden Farklı Olabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Banka komisyonları, alış-satış farkı, işlem saati ve kurumun
                uyguladığı ek ücretler nedeniyle gerçek işlem tutarı,
                hesaplama sonucundan farklı olabilir.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                Döviz Tutarınızı Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Döviz miktarını ve güncel kuru girerek Türk lirası karşılığını
                veya Türk lirasından döviz karşılığını hesaplayın.
              </p>

              <Link
                href="/hesaplamalar/doviz-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl"
              >
                Döviz Hesaplama Aracını Aç
                <ArrowRight size={19} />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}