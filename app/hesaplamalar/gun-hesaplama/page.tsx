import type { Metadata } from "next";

import DayCalculator from "@/components/calculators/DayCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Gün Hesaplama",
  description:
    "İki tarih arasındaki toplam gün, hafta ve kalan gün sayısını ücretsiz hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/gun-hesaplama",
  },
  openGraph: {
    title: "Gün Hesaplama | HesapRehberi",
    description:
      "İki tarih arasındaki toplam gün ve hafta farkını kolayca hesaplayın.",
    url: "/hesaplamalar/gun-hesaplama",
    type: "website",
  },
};

export default function GunHesaplamaPage() {
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
              label: "Gün Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Tarih Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Gün Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Başlangıç ve bitiş tarihlerini seçerek iki tarih arasındaki toplam
            gün, tam hafta ve kalan gün sayısını hesaplayın.
          </p>

          <ShareButtons
            title="Gün Hesaplama | HesapRehberi"
            description="İki tarih arasındaki toplam gün ve hafta farkını ücretsiz hesaplayın."
          />
        </div>

        <DayCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            İki Tarih Arasındaki Gün Farkı Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            İki tarih arasındaki gün farkı, bitiş tarihinden başlangıç tarihinin
            çıkarılmasıyla bulunur. Araç, tarihlerin sırası ters olsa bile
            mutlak gün farkını gösterir.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Örneğin 1 Temmuz ile 15 Temmuz arasında 14 günlük fark vardır.
            Başlangıç ve bitiş günlerinin ikisini de dahil etmek istediğiniz
            durumlarda sonuca bir gün eklemeniz gerekir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Gün Farkı ve Hafta Hesabı
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Toplam gün sayısı 7&apos;ye bölünerek tam hafta sayısı bulunur.
            Bölme işleminden kalan değer ise ek gün sayısını gösterir.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-900">
                Tam Hafta Sayısı
              </h3>

              <p className="mt-3 leading-7 text-blue-800">
                Toplam Gün / 7 işleminin tam sayı kısmıdır.
              </p>
            </div>

            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
              <h3 className="text-lg font-bold text-indigo-900">
                Kalan Gün Sayısı
              </h3>

              <p className="mt-3 leading-7 text-indigo-800">
                Toplam gün sayısının 7&apos;ye bölümünden kalan değerdir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Başlangıç ve bitiş günleri hesaba dahil mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Araç iki tarih arasındaki farkı hesaplar. Her iki günü de dahil
                etmek istediğiniz durumlarda sonuca bir gün eklemelisiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Tarihleri ters seçersem ne olur?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Araç negatif sonuç göstermez. Mutlak gün farkını hesaplar ve
                tarih sırasını ayrıca belirtir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Artık yıllar dikkate alınıyor mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Tarayıcının tarih sistemi 29 Şubat bulunan artık yılları
                otomatik olarak hesaba katar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Saat farkları hesaba katılıyor mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Hesaplama yalnızca seçilen takvim tarihleri üzerinden
                yapılır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}