import type { Metadata } from "next";

import WaterIntakeCalculator from "@/components/calculators/WaterIntakeCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Günlük Su İhtiyacı Hesaplama",
  description:
    "Kilonuz, aktivite seviyeniz ve hava koşullarına göre günlük tahmini su ihtiyacınızı litre, mililitre ve bardak olarak hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/su-ihtiyaci-hesaplama",
  },
  openGraph: {
    title: "Günlük Su İhtiyacı Hesaplama | HesapRehberi",
    description:
      "Günlük tahmini su ihtiyacınızı kilo ve aktivite seviyenize göre hesaplayın.",
    url: "/hesaplamalar/su-ihtiyaci-hesaplama",
    type: "website",
  },
};

export default function Page() {
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
              label: "Günlük Su İhtiyacı Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">
            Sağlık Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Günlük Su İhtiyacı Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Kilonuzu, günlük aktivite seviyenizi ve hava koşullarını girerek
            günlük tahmini su ihtiyacınızı litre, mililitre ve bardak olarak
            hesaplayın.
          </p>

          <ShareButtons
            title="Günlük Su İhtiyacı Hesaplama | HesapRehberi"
            description="Kilonuza ve aktivite seviyenize göre günlük tahmini su ihtiyacınızı hesaplayın."
          />
        </div>

        <WaterIntakeCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Günlük Su İhtiyacı Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Günlük su ihtiyacı kişiden kişiye değişebilir. Genel
            hesaplamalarda vücut ağırlığı, aktivite seviyesi, hava sıcaklığı ve
            terleme miktarı dikkate alınır.
          </p>

          <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <p className="font-semibold text-cyan-900">
              Tahmini Su İhtiyacı = Kilo × Günlük Mililitre Katsayısı
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Bu araçta düşük aktivite için kilogram başına yaklaşık 30 ml, orta
            aktivite için 35 ml ve yüksek aktivite için 40 ml temel alınır.
            Sıcak hava veya yoğun terleme seçildiğinde tahmini miktara ek su
            eklenir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Su İhtiyacını Etkileyen Faktörler
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Vücut Ağırlığı
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vücut ağırlığı arttıkça tahmini günlük sıvı ihtiyacı da
                genellikle artar.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Fiziksel Aktivite
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Egzersiz ve yoğun fiziksel çalışma terlemeyi artırdığı için daha
                fazla sıvı gerekebilir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Hava Sıcaklığı
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sıcak ve nemli hava koşullarında vücut daha fazla sıvı
                kaybedebilir.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <h3 className="text-lg font-bold text-slate-900">
                Sağlık Durumu
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Bazı sağlık durumları ve kullanılan ilaçlar günlük sıvı
                ihtiyacını değiştirebilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Su Yalnızca İçme Suyundan mı Alınır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Günlük toplam sıvı alımına suyun yanı sıra çorba, süt, ayran,
            şekersiz içecekler ve su oranı yüksek meyve ve sebzeler de katkı
            sağlayabilir.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="leading-7 text-amber-900">
              Hesaplama sonucu genel bir tahmindir. Kalp, böbrek veya sıvı
              dengesiyle ilgili bir sağlık durumunuz varsa sağlık uzmanının
              önerisi önceliklidir.
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
                Günde 2 litre su herkes için yeterli midir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. İhtiyaç kişinin kilosuna, aktivitesine, yaşadığı iklime
                ve sağlık durumuna göre değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Spor yaptığım günlerde daha fazla su içmeli miyim?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Egzersiz sırasında terleme arttığı için ek sıvı ihtiyacı
                oluşabilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Çay ve kahve günlük sıvı hesabına dahil olur mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Sıvı alımına katkı sağlayabilirler ancak suyun tamamen yerine
                geçmeleri önerilmez.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Fazla su içmek zararlı olabilir mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Çok kısa sürede aşırı miktarda su tüketmek vücudun elektrolit
                dengesini bozabilir. Dengeli tüketim önemlidir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}