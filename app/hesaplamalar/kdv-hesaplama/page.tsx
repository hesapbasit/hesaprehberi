import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import KdvCalculator from "@/components/calculators/KdvCalculator";

export const metadata: Metadata = {
  title: "KDV Hesaplama",
  description:
    "KDV dahil veya KDV hariç tutarı ücretsiz hesaplayın. %1, %10 ve %20 oranlarıyla hızlı KDV hesaplama aracı.",
  alternates: {
    canonical: "/hesaplamalar/kdv-hesaplama",
  },
  openGraph: {
    title: "KDV Hesaplama | HesapRehberi",
    description:
      "KDV dahil ve hariç tutarı saniyeler içinde ücretsiz hesaplayın.",
    url: "/hesaplamalar/kdv-hesaplama",
    type: "website",
  },
};

export default function KdvHesaplamaPage() {
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
              label: "KDV Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Vergi Hesaplama
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            KDV Hesaplama
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            KDV dahil ve KDV hariç tutarı anında hesaplayın. %1, %10 ve %20
            KDV oranları desteklenmektedir.
          </p>

          <ShareButtons
            title="KDV Hesaplama | HesapRehberi"
            description="KDV dahil ve KDV hariç tutarı ücretsiz hesaplayın."
          />
        </div>

        <KdvCalculator />

        <section className="mt-20 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            KDV Hesaplama Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Katma Değer Vergisi, mal ve hizmet satışlarında uygulanan bir
            tüketim vergisidir. Türkiye&apos;de yaygın olarak %1, %10 ve %20
            oranları kullanılmaktadır.
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            Yukarıdaki araçla KDV hariç tutardan KDV dahil tutarı veya KDV
            dahil tutardan KDV hariç fiyatı saniyeler içerisinde
            hesaplayabilirsiniz.
          </p>
        </section>

        <section className="mt-12 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-10 space-y-8">
            <div>
              <h3 className="font-semibold text-slate-900">
                KDV nedir?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Katma Değer Vergisi, mal ve hizmet satışlarında uygulanan
                dolaylı bir vergidir.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                En çok kullanılan KDV oranları nelerdir?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Türkiye&apos;de en yaygın oranlar %1, %10 ve %20&apos;dir.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900">
                Hesaplama sonucu kesin midir?
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                Hesaplama standart matematiksel formüllerle yapılır. Vergisel
                işlemlerde resmi belge ve uzman görüşü esas alınmalıdır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}