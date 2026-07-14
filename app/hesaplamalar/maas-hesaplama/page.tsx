import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import MaasCalculator from "@/components/calculators/MaasCalculator";

export const metadata: Metadata = {
  title: "Brüt Net Maaş Hesaplama",
  description:
    "Brüt maaştan yaklaşık net maaşı hesaplayın. SGK, işsizlik sigortası, gelir vergisi ve diğer kesintileri görüntüleyin.",
  alternates: {
    canonical: "/hesaplamalar/maas-hesaplama",
  },
  openGraph: {
    title: "Brüt Net Maaş Hesaplama | HesapRehberi",
    description:
      "Brüt maaşınızı girerek tahmini net maaşınızı ve kesinti kalemlerini hesaplayın.",
    url: "/hesaplamalar/maas-hesaplama",
    type: "website",
  },
};

export default function MaasHesaplamaPage() {
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
              label: "Maaş Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Maaş Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Brüt Net Maaş Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Brüt maaşınızı ve yaklaşık gelir vergisi oranını girerek tahmini
            net maaşınızı ve kesinti kalemlerini görüntüleyin.
          </p>

          <ShareButtons
            title="Brüt Net Maaş Hesaplama | HesapRehberi"
            description="Brüt maaştan tahmini net maaşı ve kesintileri ücretsiz hesaplayın."
          />
        </div>

        <MaasCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Brüt Maaştan Net Maaş Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Brüt maaştan çalışan SGK payı, işsizlik sigortası, gelir vergisi ve
            damga vergisi gibi yasal kesintiler düşüldüğünde yaklaşık net maaş
            bulunur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Vergi dilimleri, asgari ücret istisnası, teşvikler ve çalışanın
            kişisel durumu nedeniyle bordrodaki gerçek sonuç farklı olabilir.
            Bu araç genel bilgi vermek amacıyla yaklaşık hesaplama yapar.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Brüt maaş nedir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vergi ve sigorta kesintileri uygulanmadan önceki toplam maaş
                tutarıdır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Net maaş nedir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Yasal kesintiler sonrasında çalışanın eline geçen yaklaşık
                tutardır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama kesin sonuç verir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Vergi dilimi, istisnalar, teşvikler ve bordro koşulları
                gerçek sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}