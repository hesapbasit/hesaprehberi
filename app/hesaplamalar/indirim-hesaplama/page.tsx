import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import DiscountCalculator from "@/components/calculators/DiscountCalculator";

export const metadata: Metadata = {
  title: "İndirim Hesaplama",
  description:
    "Ürün fiyatı ve indirim oranını girerek indirim tutarını ve indirimli fiyatı ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/indirim-hesaplama",
  },
  openGraph: {
    title: "İndirim Hesaplama | HesapRehberi",
    description:
      "İndirim oranına göre ne kadar tasarruf edeceğinizi ve yeni fiyatı hemen hesaplayın.",
    url: "/hesaplamalar/indirim-hesaplama",
    type: "website",
  },
};

export default function IndirimHesaplamaPage() {
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
              label: "İndirim Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Alışveriş Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            İndirim Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Ürünün normal fiyatını ve indirim oranını girerek indirim tutarını,
            indirimli satış fiyatını ve toplam tasarrufunuzu hesaplayın.
          </p>

          <ShareButtons
            title="İndirim Hesaplama | HesapRehberi"
            description="İndirim tutarını ve indirimli fiyatı ücretsiz hesaplayın."
          />
        </div>

        <DiscountCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            İndirim Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            İndirim tutarını bulmak için ürünün normal fiyatı, indirim oranıyla
            çarpılır ve sonuç 100&apos;e bölünür.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-blue-900">
              İndirim Tutarı = Normal Fiyat × İndirim Oranı / 100
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            İndirimli fiyatı bulmak için hesaplanan indirim tutarı, ürünün
            normal fiyatından çıkarılır.
          </p>

          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
            <p className="font-semibold text-green-900">
              İndirimli Fiyat = Normal Fiyat - İndirim Tutarı
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek İndirim Hesaplama
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Normal fiyatı 1.000 ₺ olan bir ürüne %20 indirim uygulandığında
            indirim tutarı 200 ₺ olur. Ürünün indirimli fiyatı ise 800 ₺ olarak
            hesaplanır.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Normal Fiyat</p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                1.000 ₺
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">
                İndirim Oranı
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">%20</p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-sm font-medium text-blue-100">
                İndirimli Fiyat
              </p>
              <p className="mt-2 text-2xl font-bold">800 ₺</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                %10 indirim nasıl hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ürün fiyatını 10 ile çarpıp 100&apos;e bölebilir veya fiyatı
                doğrudan 10&apos;a bölebilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                %50 indirim ne anlama gelir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ürünün normal fiyatının yarısı kadar indirim uygulanması
                anlamına gelir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                İndirim oranı %100 olabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. %100 indirim uygulanırsa ürünün hesaplanan satış fiyatı
                sıfır olur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                İndirim oranı %100&apos;den büyük olabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Normal alışveriş indirimlerinde oran genellikle %0 ile %100
                arasındadır. Daha yüksek oranlar negatif fiyat oluşturacağı
                için standart indirim hesabına uygun değildir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}