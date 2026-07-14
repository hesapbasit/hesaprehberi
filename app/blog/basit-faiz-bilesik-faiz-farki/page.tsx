import type { Metadata } from "next";
import { ArrowRight, Calculator } from "lucide-react";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
  description:
    "Basit faiz ve bileşik faiz hesaplama yöntemleri arasındaki farkları formüller ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/basit-faiz-bilesik-faiz-farki",
  },
  openGraph: {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark | HesapRehberi",
    description:
      "Basit ve bileşik faiz arasındaki farkları örneklerle inceleyin.",
    url: "/blog/basit-faiz-bilesik-faiz-farki",
    type: "article",
  },
};

export default function BasitFaizBilesikFaizFarkiPage() {
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
              label: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Calculator size={30} />
          </div>

          <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            Faiz Rehberi
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            Basit Faiz ve Bileşik Faiz Arasındaki Fark
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Basit faiz ve bileşik faiz yöntemlerinin nasıl çalıştığını,
            aralarındaki temel farkları ve örnek hesaplamaları öğrenin.
          </p>

          <ShareButtons
            title="Basit Faiz ve Bileşik Faiz Arasındaki Fark | HesapRehberi"
            description="Basit ve bileşik faiz yöntemleri arasındaki farkları öğrenin."
          />

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Basit Faiz Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Basit faiz yönteminde faiz yalnızca başlangıçtaki anapara
                üzerinden hesaplanır. Önceki dönemlerde oluşan faiz anaparaya
                eklenmez.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Faiz = Anapara × Faiz Oranı × Süre
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Bileşik Faiz Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bileşik faiz yönteminde her dönemde oluşan faiz anaparaya
                eklenir. Sonraki dönemlerde faiz, artan toplam tutar üzerinden
                hesaplanır.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Toplam Tutar = Anapara × (1 + Faiz Oranı)
                  <sup>Süre</sup>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Karşılaştırma
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                10.000 ₺ anapara, yıllık %20 faiz oranı ve 2 yıl süre için iki
                yöntemin sonucu farklı olur.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <p className="text-sm font-semibold text-slate-500">
                    Basit Faiz
                  </p>

                  <p className="mt-4 text-3xl font-bold text-slate-900">
                    14.000 ₺
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    İki yıl boyunca toplam faiz 4.000 ₺ olur.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    Bileşik Faiz
                  </p>

                  <p className="mt-4 text-3xl font-bold">
                    14.400 ₺
                  </p>

                  <p className="mt-3 leading-7 text-blue-100">
                    İkinci yılda ilk yılın faizi de faiz getirir.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Temel Fark Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Basit faizde getiri doğrusal artar. Bileşik faizde ise oluşan
                faiz anaparaya eklendiği için getiri zamanla daha hızlı büyür.
                Süre uzadıkça iki yöntem arasındaki fark daha belirgin hale
                gelir.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Gerçek Getiri Neden Farklı Olabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankaların uyguladığı stopaj, vergi, dönemsel faiz oranları ve
                ürün koşulları gerçek getiriyi değiştirebilir. Hesaplama
                araçları genel bilgi amacıyla yaklaşık sonuç verir.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                Faiz Getirinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Anapara, faiz oranı ve süre bilgilerini girerek basit veya
                bileşik faiz sonucunuzu hemen görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/faiz-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl"
              >
                Faiz Hesaplama Aracını Aç
                <ArrowRight size={19} />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}