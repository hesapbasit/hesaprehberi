import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import EnflasyonCalculator from "@/components/calculators/EnflasyonCalculator";

export const metadata: Metadata = {
  title: "Enflasyon Hesaplama",
  description:
    "Bir tutarın enflasyon sonrasındaki karşılığını, yeni alım gücünü ve değer kaybını ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/enflasyon-hesaplama",
  },
  openGraph: {
    title: "Enflasyon Hesaplama | HesapRehberi",
    description:
      "Paranızın enflasyon sonrasındaki alım gücünü ve değer kaybını hesaplayın.",
    url: "/hesaplamalar/enflasyon-hesaplama",
    type: "website",
  },
};

export default function EnflasyonHesaplamaPage() {
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
              label: "Enflasyon Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Finans Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Enflasyon Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Bir tutarın enflasyon sonrasındaki karşılığını, yeni alım gücünü ve
            yaşadığı değer kaybını kolayca hesaplayın.
          </p>

          <ShareButtons
            title="Enflasyon Hesaplama | HesapRehberi"
            description="Paranızın enflasyon sonrasındaki alım gücünü ve değer kaybını hesaplayın."
          />
        </div>

        <EnflasyonCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Enflasyon Hesaplama Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Enflasyon, ürün ve hizmet fiyatlarının genel seviyesindeki artışı
            ifade eder. Fiyatlar yükseldikçe aynı miktardaki paranın satın
            alabileceği ürün ve hizmet miktarı azalır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Örneğin enflasyon oranı %50 olduğunda, bugün 10.000 ₺ karşılığında
            alınabilen ürünlerin gelecekte yaklaşık 15.000 ₺ tutması beklenir.
            Gerçek fiyat değişimleri ürün grubuna göre farklılık gösterebilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Enflasyon paranın değerini nasıl etkiler?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Enflasyon yükseldikçe aynı para miktarının satın alma gücü
                azalır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama resmi enflasyon verisini otomatik kullanıyor mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Kullanıcı hesaplamak istediği enflasyon oranını kendisi
                girer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuçlar kesin midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sonuçlar matematiksel olarak yaklaşık değer verir. Ürünlerin
                gerçek fiyat değişimleri birbirinden farklı olabilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}