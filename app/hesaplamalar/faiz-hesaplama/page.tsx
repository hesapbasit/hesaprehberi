import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import FaizCalculator from "@/components/calculators/FaizCalculator";

export const metadata: Metadata = {
  title: "Faiz Hesaplama",
  description:
    "Anapara, faiz oranı ve süre bilgilerini girerek basit veya bileşik faiz getirisini ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/faiz-hesaplama",
  },
  openGraph: {
    title: "Faiz Hesaplama | HesapRehberi",
    description:
      "Basit ve bileşik faiz getirisini saniyeler içinde hesaplayın.",
    url: "/hesaplamalar/faiz-hesaplama",
    type: "website",
  },
};

export default function FaizHesaplamaPage() {
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
              label: "Faiz Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Yatırım Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Faiz Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Anapara, yıllık faiz oranı ve süre bilgilerini girerek basit veya
            bileşik faiz getirisini hesaplayın.
          </p>

          <ShareButtons
            title="Faiz Hesaplama | HesapRehberi"
            description="Basit ve bileşik faiz getirisini ücretsiz hesaplayın."
          />
        </div>

        <FaizCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Faiz Hesaplama Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Basit faiz hesabında faiz yalnızca başlangıçtaki anapara üzerinden
            hesaplanır. Bileşik faizde ise her dönemde oluşan faiz anaparaya
            eklenir ve sonraki dönemlerde yeni toplam üzerinden faiz işler.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Banka ve finans kuruluşlarının uyguladığı stopaj, vergi, vade
            koşulları ve ürün özellikleri gerçek sonucu değiştirebilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Basit faiz nedir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Faizin yalnızca başlangıç anaparası üzerinden hesaplandığı
                yöntemdir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Bileşik faiz nedir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Önceki dönemlerde oluşan faizin anaparaya eklenerek yeni toplam
                üzerinden tekrar faiz hesaplanmasıdır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuçlar kesin midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Stopaj, vergi, vade koşulları ve kurum politikaları gerçek
                getiriyi değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}