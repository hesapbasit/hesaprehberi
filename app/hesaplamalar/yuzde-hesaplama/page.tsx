import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";

export const metadata: Metadata = {
  title: "Yüzde Hesaplama",
  description:
    "Bir sayının yüzdesini, yüzde artışını, yüzde azalışını, iki sayı arasındaki yüzde değişimini ve oranı ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/yuzde-hesaplama",
  },
  openGraph: {
    title: "Yüzde Hesaplama | HesapRehberi",
    description:
      "Yüzde hesaplama, yüzde ekleme, yüzde çıkarma ve yüzde değişimi işlemlerini kolayca yapın.",
    url: "/hesaplamalar/yuzde-hesaplama",
    type: "website",
  },
};

export default function YuzdeHesaplamaPage() {
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
              label: "Yüzde Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Matematik Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Yüzde Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Bir sayının yüzdesini, yüzde artışını, yüzde azalışını, iki değer
            arasındaki yüzde değişimini ve bir değerin diğerinin yüzde kaçı
            olduğunu hesaplayın.
          </p>

          <ShareButtons
            title="Yüzde Hesaplama | HesapRehberi"
            description="Yüzde hesaplama, yüzde artış ve azalış işlemlerini ücretsiz yapın."
          />
        </div>

        <PercentageCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Yüzde Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Bir sayının belirli bir yüzdesini bulmak için sayı, yüzde oranıyla
            çarpılır ve sonuç 100&apos;e bölünür.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-blue-900">
              Yüzde Değeri = Ana Değer × Yüzde Oranı / 100
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Örneğin 1.000 sayısının %20&apos;si 200&apos;dür. Bu işlem
            1.000 × 20 / 100 formülüyle hesaplanır.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Yüzde Artışı ve Azalışı Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Yüzde artışında ana değerin yüzdesi hesaplanır ve ana değere
            eklenir. Yüzde azalışında ise hesaplanan yüzde değeri ana değerden
            çıkarılır.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-900">
                Yüzde Artışı
              </h3>

              <p className="mt-3 leading-7 text-green-800">
                Yeni Değer = Ana Değer × (1 + Yüzde Oranı / 100)
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-red-900">
                Yüzde Azalışı
              </h3>

              <p className="mt-3 leading-7 text-red-800">
                Yeni Değer = Ana Değer × (1 - Yüzde Oranı / 100)
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            İki Sayı Arasındaki Yüzde Değişimi
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Başlangıç değeri ile yeni değer arasındaki değişim farkı, başlangıç
            değerine bölünür ve 100 ile çarpılır.
          </p>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <p className="font-semibold text-indigo-900">
              Yüzde Değişimi = (Yeni Değer - Başlangıç Değeri) / Başlangıç
              Değeri × 100
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Örneğin 100&apos;den 125&apos;e çıkan bir değerde %25 artış vardır.
            125&apos;ten 100&apos;e düşüş ise %20 azalıştır. Başlangıç
            değerlerinin farklı olması nedeniyle bu oranlar birbirine eşit
            değildir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bir sayının %10&apos;u nasıl bulunur?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sayıyı 10 ile çarpıp 100&apos;e bölebilir veya doğrudan
                10&apos;a bölebilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Yüzde artışı nasıl hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Ana değerin yüzdesi hesaplanır ve ana değere eklenir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bir sayının diğerinin yüzde kaçı olduğu nasıl bulunur?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                İlk sayı ikinci sayıya bölünür ve sonuç 100 ile çarpılır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Yüzde değişiminde başlangıç değeri sıfır olabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sıfıra bölme yapılamayacağı için başlangıç değeri sıfır
                olduğunda standart yüzde değişimi hesaplanamaz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}