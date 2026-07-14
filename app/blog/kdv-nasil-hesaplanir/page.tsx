import type { Metadata } from "next";
import { ArrowRight, ReceiptText } from "lucide-react";
import Link from "next/link";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "KDV Nasıl Hesaplanır?",
  description:
    "KDV dahil ve KDV hariç fiyatların nasıl hesaplandığını formüller ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/kdv-nasil-hesaplanir",
  },
  openGraph: {
    title: "KDV Nasıl Hesaplanır? | HesapRehberi",
    description:
      "KDV hesaplama formüllerini ve örneklerini anlaşılır şekilde inceleyin.",
    url: "/blog/kdv-nasil-hesaplanir",
    type: "article",
  },
};

export default function KdvNasilHesaplanirPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Blog",
              href: "/blog",
            },
            {
              label: "KDV Nasıl Hesaplanır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ReceiptText size={30} />
          </div>

          <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
            Vergi Rehberi
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
            KDV Nasıl Hesaplanır?
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            KDV dahil ve KDV hariç tutarların nasıl hesaplandığını temel
            formüller ve pratik örneklerle öğrenin.
          </p>

          <ShareButtons
            title="KDV Nasıl Hesaplanır? | HesapRehberi"
            description="KDV dahil ve hariç tutarların nasıl hesaplandığını öğrenin."
          />

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Katma Değer Vergisi, mal ve hizmet satışlarında uygulanan
                dolaylı bir vergidir. Satış bedeline belirli bir oran
                uygulanarak hesaplanır.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hariç Tutardan KDV Dahil Tutar Nasıl Bulunur?
              </h2>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  KDV Tutarı = KDV Hariç Tutar × KDV Oranı / 100
                </p>

                <p className="mt-3 font-semibold text-blue-900">
                  KDV Dahil Tutar = KDV Hariç Tutar + KDV Tutarı
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Örneğin KDV hariç fiyat 1.000 ₺ ve oran %20 ise KDV tutarı
                200 ₺ olur. KDV dahil toplam fiyat ise 1.200 ₺ olur.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Dahil Tutardan KDV Hariç Tutar Nasıl Bulunur?
              </h2>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  KDV Hariç Tutar = KDV Dahil Tutar / (1 + KDV Oranı / 100)
                </p>

                <p className="mt-3 font-semibold text-green-900">
                  KDV Tutarı = KDV Dahil Tutar - KDV Hariç Tutar
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Örneğin %20 KDV dahil fiyat 1.200 ₺ ise KDV hariç tutar
                1.000 ₺, KDV tutarı ise 200 ₺ olur.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900">
                Yaygın KDV Oranları
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Türkiye&apos;de farklı ürün ve hizmet gruplarında farklı KDV
                oranları uygulanabilir. Hesaplama yaparken güncel ve resmi oranı
                doğrulamanız önemlidir.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">%1</p>
                  <p className="mt-2 text-slate-600">Düşük oran</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">%10</p>
                  <p className="mt-2 text-slate-600">İndirimli oran</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">%20</p>
                  <p className="mt-2 text-slate-600">Genel oran</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                KDV Hesabınızı Hemen Yapın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                KDV dahil ve hariç tutarları saniyeler içinde hesaplamak için
                ücretsiz aracımızı kullanın.
              </p>

              <Link
                href="/hesaplamalar/kdv-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl"
              >
                KDV Hesaplama Aracını Aç
                <ArrowRight size={19} />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}