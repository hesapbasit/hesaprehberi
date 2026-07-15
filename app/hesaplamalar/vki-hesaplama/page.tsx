import type { Metadata } from "next";

import BmiCalculator from "@/components/calculators/BmiCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "VKİ Hesaplama",
  description:
    "Boy ve kilo bilgilerinizi girerek vücut kitle indeksinizi, VKİ kategorinizi ve tahmini normal kilo aralığınızı ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/vki-hesaplama",
  },
  openGraph: {
    title: "VKİ Hesaplama | HesapRehberi",
    description:
      "Boy ve kilo bilgilerinize göre vücut kitle indeksinizi kolayca hesaplayın.",
    url: "/hesaplamalar/vki-hesaplama",
    type: "website",
  },
};

export default function VkiHesaplamaPage() {
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
              label: "VKİ Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Sağlık Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            VKİ Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Boy ve kilo bilgilerinizi girerek vücut kitle indeksinizi,
            bulunduğunuz VKİ kategorisini ve tahmini normal kilo aralığınızı
            hesaplayın.
          </p>

          <ShareButtons
            title="VKİ Hesaplama | HesapRehberi"
            description="Boy ve kilo bilgilerinize göre vücut kitle indeksinizi ücretsiz hesaplayın."
          />
        </div>

        <BmiCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            VKİ Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Vücut kitle indeksi, kilogram cinsinden ağırlığın metre cinsinden
            boyun karesine bölünmesiyle hesaplanır.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold text-blue-900">
              VKİ = Kilo / Boy²
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Örneğin 70 kilogram ağırlığında ve 1,75 metre boyunda bir kişinin
            VKİ değeri yaklaşık 22,9 olur.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            VKİ Değerleri Ne Anlama Gelir?
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-6">
              <h3 className="text-lg font-bold text-sky-900">
                18,5 Altı
              </h3>

              <p className="mt-3 leading-7 text-sky-800">
                Genel sınıflandırmada zayıf kabul edilir.
              </p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-900">
                18,5 - 24,9
              </h3>

              <p className="mt-3 leading-7 text-green-800">
                Genel sınıflandırmada normal kilo aralığıdır.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-900">
                25 - 29,9
              </h3>

              <p className="mt-3 leading-7 text-amber-800">
                Genel sınıflandırmada fazla kilolu kabul edilir.
              </p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-lg font-bold text-red-900">
                30 ve Üzeri
              </h3>

              <p className="mt-3 leading-7 text-red-800">
                Genel sınıflandırmada obez kategorisindedir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            VKİ Sonucu Herkes İçin Uygun mudur?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            VKİ yetişkinler için genel bir tarama ölçütüdür. Kas oranı yüksek
            sporcular, hamileler, çocuklar, yaşlılar ve bazı özel sağlık
            durumlarında sonuç tek başına yeterli değerlendirme sağlamayabilir.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="leading-7 text-amber-900">
              Bu araç tıbbi teşhis veya tedavi amacı taşımaz. Sağlığınızla
              ilgili kararlar için sağlık uzmanına danışmanız gerekir.
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
                VKİ ile ideal kilo bulunabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                VKİ kullanılarak boya göre yaklaşık normal kilo aralığı
                hesaplanabilir. Ancak vücut yapısı ve kas oranı gibi faktörler
                değerlendirmeyi etkileyebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                VKİ çocuklarda aynı şekilde hesaplanır mı?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Matematiksel işlem aynı olsa da çocuklarda değerlendirme yaşa
                ve cinsiyete göre büyüme eğrileri üzerinden yapılır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sporcularda VKİ doğru sonuç verir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Kas kütlesi yüksek kişilerde VKİ değeri yüksek çıkabilir. Bu
                nedenle vücut yağ oranı gibi ek ölçümlerin değerlendirilmesi
                gerekebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç tıbbi teşhis sayılır mı?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç yalnızca genel bilgilendirme amacı taşır ve tıbbi
                değerlendirme yerine geçmez.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}