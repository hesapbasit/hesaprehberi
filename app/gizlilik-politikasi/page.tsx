import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "HesapRehberi gizlilik politikası, kişisel verilerin işlenmesi, çerez kullanımı ve veri güvenliği hakkında bilgi edinin.",
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  openGraph: {
    title: "Gizlilik Politikası | HesapRehberi",
    description:
      "HesapRehberi gizlilik politikası ve kullanıcı verilerinin nasıl işlendiği hakkında bilgi edinin.",
    url: "/gizlilik-politikasi",
    type: "website",
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
          <header>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Gizlilik Politikası
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              HesapRehberi olarak kullanıcılarımızın gizliliğine önem veriyoruz.
              Bu sayfa, internet sitemizi kullanırken hangi bilgilerin
              toplanabileceğini, bu bilgilerin nasıl kullanılabileceğini ve
              nasıl korunduğunu açıklamaktadır.
            </p>
          </header>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Toplanan Bilgiler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Hesaplama araçlarına girilen veriler tarayıcı üzerinde işlenir.
              Kullanıcı hesabı oluşturulmadığı sürece kişisel bilgilerimizde
              saklanmaz ve üçüncü kişilerle paylaşılmaz.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Çerezler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Site performansını geliştirmek, kullanıcı deneyimini iyileştirmek
              ve ziyaretçi trafiğini analiz etmek amacıyla çerezler
              kullanılabilir. Ayrıntılı bilgi için Çerez Politikası sayfamızı
              inceleyebilirsiniz.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Üçüncü Taraf Hizmetleri
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Google Analytics, Google AdSense veya benzeri üçüncü taraf
              hizmetleri kullanılmaya başlandığında bu hizmetler kendi
              politikaları doğrultusunda veri işleyebilir. Bu hizmetlerin veri
              işleme süreçlerinden ilgili sağlayıcılar sorumludur.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Veri Güvenliği
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Kullanıcı bilgilerinin güvenliğini korumak amacıyla güncel teknik
              ve idari önlemler uygulanmaktadır. Ancak internet üzerinden
              gerçekleştirilen hiçbir veri aktarımının tamamen risksiz olduğu
              garanti edilemez.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              İletişim
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Gizlilik politikasıyla ilgili sorularınız veya talepleriniz için
              İletişim sayfamız üzerinden bizimle iletişime geçebilirsiniz.
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