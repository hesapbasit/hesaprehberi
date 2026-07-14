import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import KrediCalculator from "@/components/calculators/KrediCalculator";

export const metadata: Metadata = {
  title: "Kredi Hesaplama",
  description:
    "Kredi tutarı, vade ve aylık faiz oranını girerek aylık taksit, toplam faiz ve toplam geri ödeme tutarını ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/kredi-hesaplama",
  },
  openGraph: {
    title: "Kredi Hesaplama | HesapRehberi",
    description:
      "Kredi tutarı, vade ve faiz oranına göre aylık taksit ve toplam geri ödeme tutarını hesaplayın.",
    url: "/hesaplamalar/kredi-hesaplama",
    type: "website",
  },
};

export default function KrediHesaplamaPage() {
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
              label: "Kredi Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Kredi Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Kredi Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Kredi tutarı, vade ve aylık faiz oranını girerek aylık taksit,
            toplam faiz ve toplam geri ödeme tutarını hesaplayın.
          </p>

          <ShareButtons
            title="Kredi Hesaplama | HesapRehberi"
            description="Kredi taksitinizi ve toplam geri ödeme tutarını ücretsiz hesaplayın."
          />
        </div>

        <KrediCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Taksiti Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Eşit taksitli kredilerde aylık ödeme; kredi tutarı, vade ve aylık
            faiz oranına göre hesaplanır. Faiz oranı veya vade yükseldiğinde
            toplam geri ödeme tutarı da genellikle artar.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Hesaplama sonucuna banka tahsis ücreti, sigorta, vergi ve diğer
            masraflar dahil değildir. Bu nedenle bankanın sunduğu gerçek ödeme
            planıyla farklılıklar oluşabilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Aylık kredi taksiti nasıl hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Kredi tutarı, aylık faiz oranı ve toplam vade kullanılarak eşit
                taksitli kredi formülüyle hesaplanır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vade arttıkça toplam ödeme artar mı?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Çoğu durumda vade uzadıkça aylık taksit azalırken toplam faiz
                ve toplam geri ödeme yükselir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama banka teklifinin aynısı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Bankanın uyguladığı sigorta, tahsis ücreti, vergi ve
                diğer masraflar gerçek sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}