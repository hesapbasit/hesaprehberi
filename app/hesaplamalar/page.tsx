import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import CalculationsDirectory from "@/components/ui/CalculationsDirectory";

export const metadata: Metadata = {
  title: "Tüm Hesaplamalar",
  description:
    "Kredi, KDV, faiz, maaş, döviz ve enflasyon hesaplama araçlarının tamamını inceleyin.",
  alternates: {
    canonical: "/hesaplamalar",
  },
  openGraph: {
    title: "Tüm Hesaplamalar | HesapRehberi",
    description:
      "Ücretsiz finans, vergi, maaş, kredi ve döviz hesaplama araçlarını keşfedin.",
    url: "/hesaplamalar",
    type: "website",
  },
};

export default function HesaplamalarPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Hesaplamalar",
            },
          ]}
        />

        <section className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Tüm Araçlar
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Tüm Hesaplamalar
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Finans, kredi, vergi, maaş, döviz ve enflasyon hesaplama
            araçlarını arayın, filtreleyin ve ücretsiz kullanın.
          </p>
        </section>

        <CalculationsDirectory />
      </div>
    </main>
  );
}