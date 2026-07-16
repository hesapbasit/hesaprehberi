import type { Metadata } from "next";

import CalorieCalculator from "@/components/calculators/CalorieCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Günlük Kalori İhtiyacı Hesaplama",
  description:
    "Yaş, boy, kilo ve aktivite seviyenize göre günlük kalori ihtiyacınızı hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
  },
  openGraph: {
    title: "Günlük Kalori İhtiyacı Hesaplama | HesapRehberi",
    description:
      "Günlük kalori ihtiyacınızı ücretsiz hesaplayın.",
    url: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
    type: "website",
  },
};

export default function Page() {
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
              label: "Kalori İhtiyacı Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Sağlık Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Günlük Kalori İhtiyacı Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Yaş, cinsiyet, boy, kilo ve aktivite seviyenize göre günlük
            kalori ihtiyacınızı hesaplayın.
          </p>

          <ShareButtons
            title="Günlük Kalori İhtiyacı Hesaplama | HesapRehberi"
            description="Günlük kalori ihtiyacınızı ücretsiz hesaplayın."
          />
        </div>

        <CalorieCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Günlük Kalori İhtiyacı Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Hesaplama Mifflin-St Jeor formülünü temel alır. Önce bazal
            metabolizma hızı (BMR) hesaplanır, ardından aktivite seviyesine
            göre günlük enerji ihtiyacı tahmin edilir.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <p className="font-semibold text-orange-900">
              Günlük Kalori = BMR × Aktivite Katsayısı
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Sonuçlar yaklaşık değerlerdir. Spor yoğunluğu, kas oranı,
            metabolizma hızı ve sağlık durumu gerçek ihtiyacınızı
            değiştirebilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kalori ihtiyacı her gün aynı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Günlük hareket miktarı ve egzersize göre değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kilo vermek için kaç kalori almalıyım?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Genellikle günlük ihtiyacın yaklaşık 500 kcal altında
                beslenmek kontrollü kilo kaybı için tercih edilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bu sonuç kesin midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Hesaplama tahmini sonuç üretir ve tıbbi tavsiye yerine
                geçmez.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}