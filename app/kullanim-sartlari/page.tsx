import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "HesapRehberi kullanım şartları, sorumluluk sınırları ve hesaplama araçlarının kullanım koşulları.",
  alternates: {
    canonical: "/kullanim-sartlari",
  },
  openGraph: {
    title: "Kullanım Şartları | HesapRehberi",
    description:
      "HesapRehberi kullanım şartları ve hizmet kullanım koşullarını inceleyin.",
    url: "/kullanim-sartlari",
    type: "website",
  },
};

export default function KullanimSartlariPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Kullanım Şartları",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Kullanım Şartları
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              HesapRehberi&apos;ni kullanarak aşağıdaki kullanım şartlarını kabul
              etmiş olursunuz. Site üzerinde sunulan hesaplama araçları genel
              bilgilendirme amacı taşır.
            </p>
          </header>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Hesaplama Sonuçları
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Araçlar standart matematiksel formüller ve kullanıcının girdiği
              bilgiler doğrultusunda yaklaşık sonuç üretir. Sonuçlar resmi belge,
              finansal teklif, vergi danışmanlığı veya hukuki görüş niteliğinde
              değildir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Kullanıcı Sorumluluğu
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Kullanıcılar girdikleri bilgilerin doğruluğundan ve hesaplama
              sonuçlarını hangi amaçlarla kullandıklarından kendileri
              sorumludur. Önemli kararlar verilmeden önce resmi kaynakların ve
              uzman görüşünün dikkate alınması önerilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              İçerik Değişiklikleri
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              HesapRehberi, hesaplama araçlarını, açıklamaları ve kullanım
              şartlarını önceden bildirimde bulunmadan güncelleyebilir,
              değiştirebilir veya kaldırabilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Hizmetin Kesintiye Uğraması
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Teknik bakım, altyapı sorunları veya üçüncü taraf hizmetlerinden
              kaynaklanan nedenlerle siteye erişimde geçici kesintiler
              yaşanabilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Fikri Mülkiyet
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Site tasarımı, marka adı, özgün metinler ve özel bileşenler ilgili
              hak sahiplerine aittir. İzinsiz şekilde kopyalanamaz veya ticari
              amaçla kullanılamaz.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              İletişim
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Kullanım şartlarıyla ilgili sorularınız için iletişim sayfamız
              üzerinden bize ulaşabilirsiniz.
            </p>
          </section>

          <footer className="mt-10 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500">
              Son güncelleme: 14 Temmuz 2026
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}