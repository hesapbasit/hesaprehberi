import type { Metadata } from "next";

import BmrCalculator from "@/components/calculators/BmrCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Bazal Metabolizma Hızı Hesaplama",
  description:
    "Yaş, cinsiyet, boy, kilo ve aktivite seviyenize göre bazal metabolizma hızınızı ve günlük tahmini kalori ihtiyacınızı hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/bazal-metabolizma-hesaplama",
  },
  openGraph: {
    title: "Bazal Metabolizma Hızı Hesaplama | HesapRehberi",
    description:
      "Bazal metabolizma hızınızı ve günlük tahmini enerji ihtiyacınızı ücretsiz hesaplayın.",
    url: "/hesaplamalar/bazal-metabolizma-hesaplama",
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
              label: "Bazal Metabolizma Hızı Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            Sağlık Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Bazal Metabolizma Hızı Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Yaş, cinsiyet, boy, kilo ve aktivite seviyenize göre bazal
            metabolizma hızınızı, günlük ve haftalık tahmini enerji ihtiyacınızı
            hesaplayın.
          </p>

          <ShareButtons
            title="Bazal Metabolizma Hızı Hesaplama | HesapRehberi"
            description="Bazal metabolizma hızınızı ve günlük enerji ihtiyacınızı ücretsiz hesaplayın."
          />
        </div>

        <BmrCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Bazal Metabolizma Hızı Nedir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Bazal metabolizma hızı, vücudun tam dinlenme hâlindeyken solunum,
            dolaşım, vücut ısısının korunması ve hücresel faaliyetler gibi temel
            yaşam işlevleri için harcadığı tahmini enerji miktarıdır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            BMR değeri, günlük toplam kalori ihtiyacının temelini oluşturur.
            Günlük hareket ve egzersiz miktarı arttıkça toplam enerji ihtiyacı
            da yükselir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            BMR Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Bu araç Mifflin-St Jeor formülünü kullanır. Formülde kilo, boy, yaş
            ve cinsiyet bilgileri dikkate alınır.
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
              <h3 className="text-lg font-bold text-violet-900">
                Erkekler İçin
              </h3>

              <p className="mt-3 leading-7 text-violet-800">
                BMR = 10 × kilo + 6,25 × boy - 5 × yaş + 5
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="text-lg font-bold text-indigo-900">
                Kadınlar İçin
              </h3>

              <p className="mt-3 leading-7 text-indigo-800">
                BMR = 10 × kilo + 6,25 × boy - 5 × yaş - 161
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            BMR ile Günlük Kalori İhtiyacı Arasındaki Fark
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            BMR yalnızca dinlenme hâlindeki enerji ihtiyacını gösterir. Günlük
            toplam kalori ihtiyacı ise BMR değerinin aktivite katsayısıyla
            çarpılmasıyla tahmin edilir.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-blue-900">
              Günlük Kalori İhtiyacı = BMR × Aktivite Katsayısı
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                BMR ile kalori ihtiyacı aynı şey midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. BMR yalnızca dinlenme hâlindeki ihtiyacı gösterir. Günlük
                toplam ihtiyaç aktivite düzeyini de içerir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                BMR yaşla birlikte değişir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Yaş, kas oranı, kilo ve boy değiştikçe bazal metabolizma
                hızı da değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Spor yapanların BMR değeri daha mı yüksektir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Kas kütlesi yüksek kişilerde gerçek enerji ihtiyacı daha yüksek
                olabilir. Ancak standart formüller kas oranını doğrudan ölçmez.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bu sonuç tıbbi değerlendirme yerine geçer mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç genel bilgilendirme amaçlı tahmindir ve sağlık
                uzmanı değerlendirmesinin yerine geçmez.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}