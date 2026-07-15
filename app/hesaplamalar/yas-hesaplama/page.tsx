import type { Metadata } from "next";

import AgeCalculator from "@/components/calculators/AgeCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Yaş Hesaplama",
  description:
    "Doğum tarihinizi girerek yaşınızı yıl, ay ve gün olarak hesaplayın. Toplam yaşadığınız gün sayısını ve sonraki doğum gününe kalan süreyi öğrenin.",
  alternates: {
    canonical: "/hesaplamalar/yas-hesaplama",
  },
  openGraph: {
    title: "Yaş Hesaplama | HesapRehberi",
    description:
      "Doğum tarihinize göre tam yaşınızı, toplam gün sayısını ve sonraki doğum gününe kalan süreyi hesaplayın.",
    url: "/hesaplamalar/yas-hesaplama",
    type: "website",
  },
};

export default function YasHesaplamaPage() {
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
              label: "Yaş Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Tarih Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Yaş Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Doğum tarihinizi seçerek tam yaşınızı yıl, ay ve gün olarak
            hesaplayın. Yaşadığınız toplam gün sayısını ve sonraki doğum
            gününüze kalan süreyi görüntüleyin.
          </p>

          <ShareButtons
            title="Yaş Hesaplama | HesapRehberi"
            description="Doğum tarihinize göre yaşınızı yıl, ay ve gün olarak ücretsiz hesaplayın."
          />
        </div>

        <AgeCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Yaş Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Yaş hesaplama işleminde doğum tarihi ile yaşın hesaplanacağı tarih
            arasındaki fark dikkate alınır. Önce tamamlanan yıllar, ardından
            kalan ay ve gün sayısı belirlenir.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Örneğin 15 Mart 2000 tarihinde doğan bir kişi, 15 Mart 2026
            tarihinde tam 26 yaşındadır. Hesaplama tarihi doğum gününden önceyse
            tamamlanan yaş bir eksik olur.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Yaş Hesaplamada Yıl, Ay ve Gün
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Yalnızca doğum yılına bakmak tam yaş sonucunu vermeyebilir. Doğum
            ayı ve günü henüz gelmediyse kişi yeni yaşını tamamlamamış kabul
            edilir.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">
                Tamamlanan Yıl
              </p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                Geçen tam yaş sayısını gösterir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Kalan Ay</p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                Son doğum gününden sonra geçen tam ayı gösterir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Kalan Gün</p>

              <p className="mt-2 text-lg font-semibold text-slate-900">
                Tam aylardan sonra kalan gün sayısını gösterir.
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
                Yaş yalnızca doğum yılına göre hesaplanabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Tam yaş için doğum yılıyla birlikte ay ve gün bilgilerinin de
                dikkate alınması gerekir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Doğum günü bugünse yeni yaş tamamlanmış olur mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Hesaplama tarihi doğum gününüzle aynı tarihe geldiğinde
                yeni yaşınız tamamlanmış kabul edilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Toplam yaşanan gün sayısı kesin midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Araç, seçilen iki tarih arasındaki takvim günlerini hesaplar.
                Saat farkları dikkate alınmaz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Gelecekteki bir tarihte kaç yaşında olacağımı hesaplayabilir
                miyim?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Hesaplama tarihini gelecekteki bir gün olarak seçerek o
                tarihteki yaşınızı öğrenebilirsiniz.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}