import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ReceiptText } from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "KDV Nasıl Hesaplanır? Formüller ve Örnekler",
  description:
    "KDV dahil ve KDV hariç fiyatların nasıl hesaplandığını formüller, örnekler ve pratik açıklamalarla öğrenin.",
  alternates: {
    canonical: "/blog/kdv-nasil-hesaplanir",
  },
  openGraph: {
    title: "KDV Nasıl Hesaplanır? | HesapRehberi",
    description:
      "KDV dahil ve KDV hariç hesaplama formüllerini pratik örneklerle inceleyin.",
    url: "/blog/kdv-nasil-hesaplanir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "KDV dahil fiyat nasıl hesaplanır?",
    answer:
      "KDV hariç tutar, 1 ile KDV oranının ondalık karşılığının toplamıyla çarpılır. Örneğin yüzde 20 KDV için tutar 1,20 ile çarpılır.",
  },
  {
    question: "KDV dahil fiyattan KDV nasıl ayrılır?",
    answer:
      "KDV dahil tutar, 1 ile KDV oranının ondalık karşılığının toplamına bölünür. Bulunan sonuç KDV hariç tutardır.",
  },
  {
    question: "Yüzde 20 KDV nasıl hesaplanır?",
    answer:
      "KDV hariç tutar 0,20 ile çarpılarak KDV tutarı bulunur. KDV dahil toplam için tutar 1,20 ile çarpılır.",
  },
];

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
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <ReceiptText size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Vergi Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              KDV Nasıl Hesaplanır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              KDV dahil ve KDV hariç tutarların nasıl hesaplandığını temel
              formüller, pratik örnekler ve sık kullanılan KDV oranlarıyla
              öğrenin.
            </p>

            <ShareButtons
              title="KDV Nasıl Hesaplanır? | HesapRehberi"
              description="KDV dahil ve KDV hariç tutarların nasıl hesaplandığını öğrenin."
            />
          </header>

          <nav
            className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="İçindekiler"
          >
            <h2 className="text-xl font-bold text-slate-900">İçindekiler</h2>

            <ol className="mt-4 space-y-3 text-slate-600">
              <li>
                <a href="#kdv-nedir" className="transition hover:text-blue-600">
                  1. KDV nedir?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-dahil-hesaplama"
                  className="transition hover:text-blue-600"
                >
                  2. KDV dahil tutar nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-haric-hesaplama"
                  className="transition hover:text-blue-600"
                >
                  3. KDV hariç tutar nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-oranlari"
                  className="transition hover:text-blue-600"
                >
                  4. Yaygın KDV oranları
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600"
                >
                  5. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600"
                >
                  6. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="kdv-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Katma Değer Vergisi, mal ve hizmet teslimlerinde uygulanan
                dolaylı bir vergidir. Verginin tutarı, ürün veya hizmetin KDV
                hariç satış bedeline belirlenen oranın uygulanmasıyla
                hesaplanır.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bir fiyatın KDV dahil veya KDV hariç olarak belirtilmesi,
                hesaplama yöntemini değiştirir. Bu nedenle işlem yapmadan önce
                elinizdeki tutarın KDV içerip içermediğini bilmeniz gerekir.
              </p>
            </section>

            <section id="kdv-dahil-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hariç Tutardan KDV Dahil Tutar Nasıl Bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Elinizdeki tutar KDV hariçse önce vergi tutarı, ardından KDV
                dahil toplam fiyat hesaplanır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  KDV Tutarı = KDV Hariç Tutar × KDV Oranı / 100
                </p>

                <p className="mt-3 font-semibold text-blue-900">
                  KDV Dahil Tutar = KDV Hariç Tutar + KDV Tutarı
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Yüzde 20 KDV örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV hariç fiyat: 1.000 ₺</p>
                  <p>KDV oranı: %20</p>
                  <p>KDV tutarı: 1.000 × 20 / 100 = 200 ₺</p>
                  <p className="font-semibold text-slate-900">
                    KDV dahil fiyat: 1.000 + 200 = 1.200 ₺
                  </p>
                </div>
              </div>
            </section>

            <section id="kdv-haric-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Dahil Tutardan KDV Hariç Tutar Nasıl Bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Fiyat KDV dahil olarak verilmişse yalnızca oran kadar çıkarma
                yapılmaz. Dahil tutar, KDV oranına göre oluşan katsayıya
                bölünmelidir.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  KDV Hariç Tutar = KDV Dahil Tutar / (1 + KDV Oranı / 100)
                </p>

                <p className="mt-3 font-semibold text-green-900">
                  KDV Tutarı = KDV Dahil Tutar − KDV Hariç Tutar
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  KDV dahil fiyattan vergi ayırma örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV dahil fiyat: 1.200 ₺</p>
                  <p>KDV oranı: %20</p>
                  <p>KDV hariç tutar: 1.200 / 1,20 = 1.000 ₺</p>
                  <p className="font-semibold text-slate-900">
                    KDV tutarı: 1.200 − 1.000 = 200 ₺
                  </p>
                </div>
              </div>
            </section>

            <section id="kdv-oranlari" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Yaygın KDV Oranları
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Türkiye&apos;de mal ve hizmetin türüne göre farklı KDV oranları
                uygulanabilir. Temel oranlar %1, %10 ve %20&apos;dir. Ancak
                istisnalar ve özel uygulamalar bulunabileceği için işlem
                öncesinde ürün veya hizmete ait güncel resmi oran
                doğrulanmalıdır.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6 text-center">
                  <p className="text-3xl font-bold text-blue-600">%1</p>
                  <p className="mt-2 text-slate-600">İndirimli oran</p>
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

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Bu oranlar genel bilgilendirme amacıyla gösterilmektedir. Resmi
                işlem yapmadan önce güncel mevzuatı kontrol edin.
              </p>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    KDV dahil fiyattan doğrudan yüzde oranını çıkarmak doğru
                    değildir. Dahil tutar ilgili katsayıya bölünmelidir.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Ürün veya hizmete uygulanacak oran doğrulanmadan hesaplama
                    yapılmamalıdır.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Yuvarlama farkları nedeniyle fatura toplamında küçük kuruş
                    farklılıkları oluşabileceği unutulmamalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-sorulan-sorular" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Sık Sorulan Sorular
              </h2>

              <div className="mt-6 space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-900">
                      {item.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                KDV Hesabınızı Hemen Yapın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                KDV dahil ve KDV hariç tutarları saniyeler içinde hesaplamak
                için ücretsiz aracımızı kullanın.
              </p>

              <Link
                href="/hesaplamalar/kdv-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                KDV Hesaplama Aracını Aç

                <ArrowRight size={19} aria-hidden="true" />
              </Link>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}