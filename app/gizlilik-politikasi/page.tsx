import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "HesapRehberi gizlilik politikası, veri kullanımı ve çerezler hakkında bilgi edinin.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Gizlilik Politikası",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Gizlilik Politikası
          </h1>

          <p className="mt-6 leading-8 text-slate-600">
            HesapRehberi olarak kullanıcıların gizliliğine önem veriyoruz. Bu
            sayfa, siteyi kullanırken hangi bilgilerin toplanabileceğini ve bu
            bilgilerin hangi amaçlarla kullanılabileceğini açıklamaktadır.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Toplanan Bilgiler
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Hesaplama araçlarına girilen tutarlar tarayıcı üzerinde işlenir ve
            kullanıcı hesabı oluşturulmadığı sürece kişisel veri olarak
            kaydedilmez.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Çerezler
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Site performansını geliştirmek, ziyaretçi trafiğini analiz etmek ve
            ileride reklam hizmetleri sunmak amacıyla çerezler kullanılabilir.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            Üçüncü Taraf Hizmetleri
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Google Analytics, Google AdSense veya benzeri üçüncü taraf
            hizmetleri kullanıldığında bu hizmetler kendi gizlilik
            politikalarına göre veri işleyebilir.
          </p>

          <h2 className="mt-10 text-2xl font-bold text-slate-900">
            İletişim
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Gizlilik politikasıyla ilgili sorularınız için iletişim sayfamız
            üzerinden bize ulaşabilirsiniz.
          </p>

          <p className="mt-10 text-sm text-slate-500">
            Son güncelleme: 14 Temmuz 2026
          </p>
        </article>
      </div>
    </main>
  );
}