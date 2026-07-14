import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import DovizCalculator from "@/components/calculators/DovizCalculator";

export const metadata: Metadata = {
  title: "Döviz Hesaplama",
  description:
    "Dolar, Euro ve İngiliz Sterlini tutarlarını girdiğiniz kura göre Türk lirasına veya Türk lirasından dövize ücretsiz çevirin.",
  alternates: {
    canonical: "/hesaplamalar/doviz-hesaplama",
  },
  openGraph: {
    title: "Döviz Hesaplama | HesapRehberi",
    description:
      "Dolar, Euro ve İngiliz Sterlini tutarlarını kolayca Türk lirasına çevirin.",
    url: "/hesaplamalar/doviz-hesaplama",
    type: "website",
  },
};

export default function DovizHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Hesaplamalar",
              href: "/hesaplamalar",
            },
            {
              label: "Döviz Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Döviz Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Döviz Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Dolar, Euro ve İngiliz Sterlini tutarlarını girdiğiniz döviz kuruna
            göre Türk lirasına veya Türk lirasından dövize çevirin.
          </p>

          <ShareButtons
            title="Döviz Hesaplama | HesapRehberi"
            description="Dolar, Euro ve İngiliz Sterlini tutarlarını ücretsiz çevirin."
          />
        </div>

        <DovizCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Döviz Çevirme Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Dövizden Türk lirasına çeviri yapılırken döviz miktarı kur ile
            çarpılır. Türk lirasından dövize çeviride ise Türk lirası tutarı
            ilgili döviz kuruna bölünür.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Örneğin 1 dolar 40 TL ise 100 doların karşılığı 4.000 TL olur.
            Bankaların alış ve satış fiyatları arasında fark bulunduğu için
            gerçek işlem tutarı değişebilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Döviz alış ve satış kuru neden farklıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Finans kuruluşları dövizi farklı fiyatlardan alıp sattığı için
                alış ve satış kuru arasında fark bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bu araç canlı döviz kuru kullanıyor mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. İlk sürümde kullanıcı güncel kuru kendisi girmektedir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç kesin işlem tutarı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Komisyonlar, alış-satış farkı ve kurumların uyguladığı
                ücretler gerçek sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}