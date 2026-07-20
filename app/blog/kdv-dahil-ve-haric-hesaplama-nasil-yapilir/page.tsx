import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  CircleAlert,
  FileText,
  Percent,
  ReceiptText,
  ShoppingCart,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "KDV Dahil ve Hariç Hesaplama Nasıl Yapılır?",
  description:
    "KDV dahil ve KDV hariç fiyatın nasıl hesaplandığını; yüzde 1, yüzde 10 ve yüzde 20 KDV örnekleriyle, formüller ve tablolar üzerinden öğrenin.",
  alternates: {
    canonical: "/blog/kdv-dahil-ve-haric-hesaplama-nasil-yapilir",
  },
  openGraph: {
    title: "KDV Dahil ve Hariç Hesaplama Nasıl Yapılır? | HesapRehberi",
    description:
      "KDV ekleme, KDV çıkarma, matrah bulma ve KDV tutarı hesaplama yöntemlerini anlaşılır örneklerle inceleyin.",
    url: "/blog/kdv-dahil-ve-haric-hesaplama-nasil-yapilir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "KDV dahil fiyat nedir?",
    answer:
      "KDV dahil fiyat, ürün veya hizmetin vergisiz bedeli ile hesaplanan KDV tutarının toplamıdır. Tüketicinin ödediği son satış fiyatı çoğunlukla KDV dahil olarak gösterilir.",
  },
  {
    question: "KDV hariç fiyat nedir?",
    answer:
      "KDV hariç fiyat, ürün veya hizmetin üzerine KDV eklenmeden önceki vergisiz bedelidir. Bu tutar KDV matrahı olarak da adlandırılabilir.",
  },
  {
    question: "KDV dahil fiyat nasıl hesaplanır?",
    answer:
      "KDV hariç fiyat, 1 ile KDV oranının ondalık karşılığının toplamıyla çarpılır. Örneğin yüzde 20 KDV için fiyat 1,20 ile çarpılır.",
  },
  {
    question: "KDV dahil fiyattan KDV hariç fiyat nasıl bulunur?",
    answer:
      "KDV dahil fiyat, 1 ile KDV oranının ondalık karşılığının toplamına bölünür. Örneğin yüzde 20 KDV için dahil fiyat 1,20'ye bölünür.",
  },
  {
    question: "KDV tutarı nasıl hesaplanır?",
    answer:
      "KDV hariç tutar biliniyorsa bu tutar KDV oranıyla çarpılır. KDV dahil tutar biliniyorsa önce hariç fiyat bulunabilir veya dahil fiyat oran yöntemine göre ayrıştırılabilir.",
  },
  {
    question: "Yüzde 20 KDV nasıl eklenir?",
    answer:
      "KDV hariç fiyat 1,20 ile çarpılır. Örneğin 1.000 TL KDV hariç fiyatın yüzde 20 KDV dahil tutarı 1.200 TL olur.",
  },
  {
    question: "Yüzde 20 KDV nasıl çıkarılır?",
    answer:
      "KDV dahil fiyat 1,20'ye bölünür. Örneğin 1.200 TL KDV dahil fiyatın KDV hariç tutarı 1.000 TL, içindeki KDV ise 200 TL'dir.",
  },
  {
    question: "KDV oranı her ürün ve hizmette aynı mıdır?",
    answer:
      "Hayır. Uygulanacak oran, ürün veya hizmetin niteliğine ve yürürlükteki mevzuata göre değişebilir. İşlem yapılmadan önce güncel oran doğrulanmalıdır.",
  },
  {
    question: "KDV hesaplama aracı kesin sonuç verir mi?",
    answer:
      "Araç, girilen fiyat ve oran üzerinden matematiksel sonuç üretir. İşleme uygulanması gereken doğru KDV oranının belirlenmesi için güncel mevzuat ve gerektiğinde mali müşavir görüşü esas alınmalıdır.",
  },
];

const commonMistakes = [
  "KDV dahil fiyatı bulurken yüzde oranını doğrudan fiyata eklemek yerine yanlış katsayı kullanmak.",
  "KDV dahil fiyattan KDV çıkarırken fiyatı yalnızca KDV yüzdesi kadar azaltmak.",
  "Yüzde 20 KDV dahil fiyatı yüzde 20 azaltmanın KDV hariç fiyatı vereceğini düşünmek.",
  "KDV tutarı ile KDV dahil toplam fiyatı aynı kavram olarak değerlendirmek.",
  "Yüzde oranını ondalık biçime çevirmeden formülde kullanmak.",
  "Ürün veya hizmete uygulanması gereken güncel KDV oranını kontrol etmemek.",
  "İskonto uygulandıktan sonra KDV matrahının değişebileceğini gözden kaçırmak.",
  "Birden fazla kalem bulunan faturada farklı KDV oranlarını tek oran üzerinden hesaplamak.",
  "Yuvarlama nedeniyle kuruş düzeyinde fark oluşabileceğini unutmamak.",
  "KDV dahil ve KDV hariç ifadelerini fatura ve tekliflerde açıkça belirtmemek.",
];

const calculationSteps = [
  {
    title: "Fiyat türünü belirleyin",
    description:
      "Elinizdeki tutarın KDV dahil mi yoksa KDV hariç mi olduğunu kontrol edin.",
  },
  {
    title: "KDV oranını seçin",
    description:
      "Ürün veya hizmet için uygulanması gereken güncel KDV oranını belirleyin.",
  },
  {
    title: "Doğru formülü kullanın",
    description:
      "KDV eklemek için çarpma, dahil fiyattan KDV ayırmak için bölme formülünü uygulayın.",
  },
  {
    title: "Sonucu kontrol edin",
    description:
      "KDV hariç fiyat ile KDV tutarının toplamının KDV dahil fiyata eşit olduğunu doğrulayın.",
  },
];

export default function KdvDahilVeHaricHesaplamaPage() {
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
              label: "KDV Dahil ve Hariç Hesaplama",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <ReceiptText size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              KDV Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              KDV Dahil ve Hariç Hesaplama Nasıl Yapılır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              KDV dahil fiyatın, KDV hariç tutarın ve fiyatın içindeki KDV
              miktarının nasıl hesaplandığını formüller, tablolar ve anlaşılır
              örneklerle öğrenin.
            </p>

            <ShareButtons
              title="KDV Dahil ve Hariç Hesaplama Nasıl Yapılır? | HesapRehberi"
              description="KDV ekleme, KDV çıkarma ve KDV tutarı hesaplama formüllerini öğrenin."
            />
          </header>

          <nav
            className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="İçindekiler"
          >
            <h2 className="text-xl font-bold text-slate-900">İçindekiler</h2>

            <ol className="mt-4 space-y-3 text-slate-600">
              <li>
                <a
                  href="#kdv-nedir"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  1. KDV nedir?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-dahil-fiyat"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  2. KDV dahil fiyat nedir?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-haric-fiyat"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  3. KDV hariç fiyat nedir?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-dahil-hesaplama"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  4. KDV dahil fiyat nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-haric-hesaplama"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  5. KDV hariç fiyat nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#kdv-tutari"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  6. KDV tutarı nasıl bulunur?
                </a>
              </li>

              <li>
                <a
                  href="#yuzde-bir-kdv"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  7. Yüzde 1 KDV hesaplama
                </a>
              </li>

              <li>
                <a
                  href="#yuzde-on-kdv"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  8. Yüzde 10 KDV hesaplama
                </a>
              </li>

              <li>
                <a
                  href="#yuzde-yirmi-kdv"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  9. Yüzde 20 KDV hesaplama
                </a>
              </li>

              <li>
                <a
                  href="#kdv-dahil-fiyattan-kdv-cikarma"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  10. KDV dahil fiyattan KDV çıkarma
                </a>
              </li>

              <li>
                <a
                  href="#fatura-ornegi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  11. Fatura üzerinden KDV hesaplama örneği
                </a>
              </li>

              <li>
                <a
                  href="#iskonto-ve-kdv"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  12. İskonto ve KDV hesaplama
                </a>
              </li>

              <li>
                <a
                  href="#isletmeler-icin-kdv"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  13. İşletmeler için KDV hesabı
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  14. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  15. Sık sorulan sorular
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
                Katma Değer Vergisi, mal teslimleri ve hizmetler üzerinden
                hesaplanan dolaylı bir vergidir. Bir ürün veya hizmet satılırken
                vergisiz bedel üzerinden ilgili KDV oranına göre vergi tutarı
                hesaplanır.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                KDV, satış fiyatına eklenerek tüketiciden tahsil edilir. Fatura
                ve benzeri belgelerde KDV hariç tutar, KDV oranı, KDV tutarı ve
                genel toplam ayrı ayrı gösterilebilir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Temel ilişki: KDV hariç fiyat + KDV tutarı = KDV dahil fiyat
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Uygulanacak KDV oranı ürün veya hizmetin niteliğine ve güncel
                    mevzuata göre değişebilir. Hesaplama öncesinde doğru oran
                    kontrol edilmelidir.
                  </p>
                </div>
              </div>
            </section>

            <section id="kdv-dahil-fiyat" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Dahil Fiyat Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KDV dahil fiyat, ürün veya hizmetin vergisiz bedeli ile
                hesaplanan KDV tutarının toplamıdır. Tüketicinin kasada veya
                ödeme ekranında gördüğü nihai fiyat çoğunlukla KDV dahil
                tutardır.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    KDV hariç fiyat
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    1.000 TL
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    %20 KDV
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    200 TL
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    KDV dahil fiyat
                  </p>

                  <p className="mt-3 text-2xl font-bold">1.200 TL</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  1.000 TL + 200 TL KDV = 1.200 TL KDV dahil fiyat
                </p>
              </div>
            </section>

            <section id="kdv-haric-fiyat" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hariç Fiyat Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KDV hariç fiyat, ürün veya hizmete KDV eklenmeden önceki
                vergisiz tutardır. Verginin hesaplanmasına esas olan bu bedel,
                uygulamada matrah olarak da ifade edilebilir.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <FileText size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Örnek fiyat dağılımı
                    </h3>

                    <div className="mt-4 space-y-3 text-slate-600">
                      <p>KDV hariç bedel: 2.000 TL</p>
                      <p>KDV oranı: %10</p>
                      <p>KDV tutarı: 200 TL</p>

                      <p className="font-semibold text-slate-900">
                        KDV dahil toplam: 2.200 TL
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Ticari teklifler hazırlanırken fiyatın KDV dahil veya KDV hariç
                olduğunun açıkça belirtilmesi, tarafların ödenecek toplam tutarı
                doğru anlaması açısından önemlidir.
              </p>
            </section>

            <section id="kdv-dahil-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Dahil Fiyat Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KDV hariç fiyat biliniyorsa önce KDV tutarı hesaplanabilir,
                ardından bu tutar vergisiz fiyata eklenebilir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  KDV Tutarı = KDV Hariç Fiyat × KDV Oranı ÷ 100
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  KDV Dahil Fiyat = KDV Hariç Fiyat + KDV Tutarı
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı işlem katsayı kullanılarak tek adımda da yapılabilir.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="min-w-[600px] font-semibold text-indigo-900">
                  KDV Dahil Fiyat = KDV Hariç Fiyat × (1 + KDV Oranı ÷ 100)
                </p>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    %1 KDV katsayısı
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">1,01</p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    %10 KDV katsayısı
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">1,10</p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    %20 KDV katsayısı
                  </p>

                  <p className="mt-3 text-2xl font-bold">1,20</p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Yüzde 20 KDV ekleme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV hariç fiyat: 5.000 TL</p>
                  <p>KDV oranı: %20</p>
                  <p>Hesaplama: 5.000 × 1,20</p>

                  <p className="font-semibold text-slate-900">
                    KDV dahil fiyat: 6.000 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="kdv-haric-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hariç Fiyat Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Elinizde KDV dahil fiyat varsa vergisiz tutarı bulmak için toplam
                fiyat, ilgili KDV katsayısına bölünür.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="min-w-[620px] font-semibold text-green-900">
                  KDV Hariç Fiyat = KDV Dahil Fiyat ÷ (1 + KDV Oranı ÷ 100)
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Yüzde 20 KDV çıkarma örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV dahil fiyat: 6.000 TL</p>
                  <p>KDV oranı: %20</p>
                  <p>Hesaplama: 6.000 ÷ 1,20</p>

                  <p className="font-semibold text-slate-900">
                    KDV hariç fiyat: 5.000 TL
                  </p>

                  <p className="font-semibold text-blue-700">
                    Fiyatın içindeki KDV: 1.000 TL
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    KDV dahil fiyatı yüzde 20 azaltmak, yüzde 20 KDV hariç
                    fiyatı doğru şekilde vermez. Dahil fiyatın 1,20 katsayısına
                    bölünmesi gerekir.
                  </p>
                </div>
              </div>
            </section>

            <section id="kdv-tutari" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Tutarı Nasıl Bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KDV tutarının hesaplanma yöntemi, elinizdeki fiyatın KDV dahil
                veya KDV hariç olmasına göre değişir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    KDV hariç fiyat biliniyorsa
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Vergisiz fiyat, KDV oranıyla çarpılarak KDV tutarı bulunur.
                  </p>

                  <div className="mt-5 rounded-xl bg-white p-4 font-semibold text-slate-900">
                    KDV = Hariç Fiyat × Oran ÷ 100
                  </div>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">
                    KDV dahil fiyat biliniyorsa
                  </h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    Önce KDV hariç fiyat bulunur, ardından dahil fiyattan
                    çıkarılır.
                  </p>

                  <div className="mt-5 rounded-xl bg-white/15 p-4 font-semibold">
                    KDV = Dahil Fiyat − Hariç Fiyat
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Dahil Fiyattaki KDV = KDV Dahil Fiyat × KDV Oranı ÷
                  (100 + KDV Oranı)
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Dahil fiyattan doğrudan KDV bulma örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV dahil fiyat: 12.000 TL</p>
                  <p>KDV oranı: %20</p>
                  <p>Hesaplama: 12.000 × 20 ÷ 120</p>

                  <p className="font-semibold text-slate-900">
                    Fiyatın içindeki KDV: 2.000 TL
                  </p>

                  <p className="font-semibold text-blue-700">
                    KDV hariç fiyat: 10.000 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="yuzde-bir-kdv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Yüzde 1 KDV Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Yüzde 1 KDV eklemek için KDV hariç fiyat 1,01 ile çarpılır. KDV
                dahil fiyattan vergisiz bedeli bulmak için toplam fiyat 1,01’e
                bölünür.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  %1 KDV Dahil Fiyat = KDV Hariç Fiyat × 1,01
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          KDV Hariç Fiyat
                        </th>
                        <th className="px-5 py-4 font-semibold">%1 KDV</th>
                        <th className="px-5 py-4 font-semibold">
                          KDV Dahil Fiyat
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          100 TL
                        </td>
                        <td className="px-5 py-4">1 TL</td>
                        <td className="px-5 py-4">101 TL</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.000 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">10 TL</td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.010 TL
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          10.000 TL
                        </td>
                        <td className="px-5 py-4">100 TL</td>
                        <td className="px-5 py-4">10.100 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="yuzde-on-kdv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Yüzde 10 KDV Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Yüzde 10 KDV eklemek için vergisiz fiyat 1,10 ile çarpılır.
                Dahil fiyattan KDV hariç tutarı bulmak için fiyat 1,10’a
                bölünür.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  %10 KDV Dahil Fiyat = KDV Hariç Fiyat × 1,10
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          KDV Hariç Fiyat
                        </th>
                        <th className="px-5 py-4 font-semibold">%10 KDV</th>
                        <th className="px-5 py-4 font-semibold">
                          KDV Dahil Fiyat
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          100 TL
                        </td>
                        <td className="px-5 py-4">10 TL</td>
                        <td className="px-5 py-4">110 TL</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.000 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">100 TL</td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.100 TL
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          10.000 TL
                        </td>
                        <td className="px-5 py-4">1.000 TL</td>
                        <td className="px-5 py-4">11.000 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="yuzde-yirmi-kdv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Yüzde 20 KDV Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Yüzde 20 KDV eklemek için KDV hariç fiyat 1,20 ile çarpılır.
                KDV dahil fiyattan vergisiz tutarı bulmak için toplam fiyat
                1,20’ye bölünür.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  %20 KDV Dahil Fiyat = KDV Hariç Fiyat × 1,20
                </p>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          KDV Hariç Fiyat
                        </th>
                        <th className="px-5 py-4 font-semibold">%20 KDV</th>
                        <th className="px-5 py-4 font-semibold">
                          KDV Dahil Fiyat
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          100 TL
                        </td>
                        <td className="px-5 py-4">20 TL</td>
                        <td className="px-5 py-4">120 TL</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.000 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">200 TL</td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.200 TL
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          10.000 TL
                        </td>
                        <td className="px-5 py-4">2.000 TL</td>
                        <td className="px-5 py-4">12.000 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section
              id="kdv-dahil-fiyattan-kdv-cikarma"
              className="scroll-mt-24"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Dahil Fiyattan KDV Nasıl Çıkarılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                KDV dahil fiyattan vergi tutarını ayırmak için önce vergisiz
                fiyat bulunabilir. Ardından KDV dahil toplamdan vergisiz bedel
                çıkarılır.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">KDV Oranı</th>
                        <th className="px-5 py-4 font-semibold">
                          KDV Dahil Fiyat
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          KDV Hariç Fiyat
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          İçindeki KDV
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          %1
                        </td>
                        <td className="px-5 py-4">1.010 TL</td>
                        <td className="px-5 py-4">1.000 TL</td>
                        <td className="px-5 py-4">10 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          %10
                        </td>
                        <td className="px-5 py-4">1.100 TL</td>
                        <td className="px-5 py-4">1.000 TL</td>
                        <td className="px-5 py-4">100 TL</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          %20
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          1.200 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">1.000 TL</td>
                        <td className="px-5 py-4 text-blue-900">200 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-6">
                <h3 className="font-bold text-red-900">
                  Yanlış hesaplama örneği
                </h3>

                <p className="mt-3 leading-8 text-red-800">
                  1.200 TL’nin yüzde 20’sini çıkararak 960 TL sonucuna ulaşmak
                  doğru değildir. Çünkü 1.200 TL, yüzde 20 KDV eklenmiş
                  tutardır. Doğru işlem 1.200 ÷ 1,20 = 1.000 TL şeklindedir.
                </p>
              </div>
            </section>

            <section id="fatura-ornegi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Fatura Üzerinden KDV Hesaplama Örneği
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bir işletmenin KDV hariç 25.000 TL bedelle ürün sattığını ve
                örnek işlemde yüzde 20 KDV uygulandığını varsayalım.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ReceiptText size={24} aria-hidden="true" />
                  </div>

                  <div className="w-full">
                    <h3 className="text-xl font-bold text-slate-900">
                      Örnek fatura özeti
                    </h3>

                    <div className="mt-5 space-y-4">
                      <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                        <span className="text-slate-600">Mal veya hizmet bedeli</span>
                        <span className="font-semibold text-slate-900">
                          25.000 TL
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                        <span className="text-slate-600">KDV oranı</span>
                        <span className="font-semibold text-slate-900">%20</span>
                      </div>

                      <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                        <span className="text-slate-600">KDV tutarı</span>
                        <span className="font-semibold text-slate-900">
                          5.000 TL
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-4 rounded-xl bg-blue-600 p-4 text-white">
                        <span className="font-semibold">Genel toplam</span>
                        <span className="text-xl font-bold">30.000 TL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Hesaplama işlemleri
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>KDV: 25.000 × 20 ÷ 100 = 5.000 TL</p>
                  <p>Genel toplam: 25.000 + 5.000 = 30.000 TL</p>
                </div>
              </div>
            </section>

            <section id="iskonto-ve-kdv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İskonto ve KDV Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ticari işlemlerde ürün veya hizmet bedeline indirim
                uygulanabilir. Hesaplama sırası, faturadaki iskonto türüne ve
                işlemin koşullarına göre önem taşır.
              </p>

              <div className="mt-7 grid gap-5">
                {calculationSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      {index + 1}
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">{step.title}</h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  İskonto sonrası KDV örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Liste fiyatı: 10.000 TL</p>
                  <p>İskonto oranı: %10</p>
                  <p>İskonto tutarı: 1.000 TL</p>
                  <p>İskonto sonrası bedel: 9.000 TL</p>
                  <p>Örnek KDV oranı: %20</p>
                  <p>KDV: 9.000 × 20 ÷ 100 = 1.800 TL</p>

                  <p className="font-semibold text-blue-700">
                    KDV dahil toplam: 10.800 TL
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  İskontonun KDV matrahına etkisi, işlemin niteliğine ve belge
                  düzenine göre değerlendirilmelidir. Gerçek ticari işlemlerde
                  muhasebe ve vergi uygulaması için uzman görüşü alınabilir.
                </p>
              </div>
            </section>

            <section id="isletmeler-icin-kdv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İşletmeler İçin KDV Hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                İşletmeler satışlarında hesaplanan KDV ile mal ve hizmet
                alımlarında ödedikleri indirilebilir KDV tutarlarını kayıtlarında
                takip eder. Bu iki kavramın birbirinden ayrılması gerekir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <ShoppingCart size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">Hesaplanan KDV</h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    İşletmenin gerçekleştirdiği vergiye tabi satışlar üzerinden
                    hesapladığı KDV tutarıdır.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <FileText size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    İndirilecek KDV
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    İşletmenin faaliyetleri kapsamında yaptığı uygun mal veya
                    hizmet alımlarında ödediği ve şartları karşılaması hâlinde
                    indirim konusu yapabildiği KDV’dir.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Basitleştirilmiş yaklaşım: Ödenecek KDV = Hesaplanan KDV −
                  İndirilecek KDV
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Basit işletme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Satışlar üzerinden hesaplanan KDV: 15.000 TL</p>
                  <p>Uygun alışlardan indirilecek KDV: 9.000 TL</p>
                  <p>Basitleştirilmiş fark: 15.000 − 9.000</p>

                  <p className="font-semibold text-blue-700">
                    Örnek fark: 6.000 TL
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Bu örnek yalnızca temel mantığı anlatır. KDV beyannamesi,
                    devreden KDV, istisnalar, tevkifat, indirim şartları ve diğer
                    özel uygulamalar nedeniyle gerçek hesap farklı olabilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                KDV Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                {commonMistakes.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <p className="leading-8 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <Calculator
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-blue-900">
                    Sonucu kontrol etmek için KDV hariç fiyat ile KDV tutarını
                    toplayın. Elde edilen tutar KDV dahil fiyata eşit olmalıdır.
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
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Percent size={27} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                KDV Dahil ve Hariç Fiyatı Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Fiyatı ve KDV oranını girerek KDV tutarını, KDV dahil toplamı
                veya KDV hariç bedeli saniyeler içinde hesaplayın.
              </p>

              <Link
                href="/hesaplamalar/kdv-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                KDV Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Sonuçlar genel bilgilendirme amacıyla sunulur. Ürün veya hizmete
                uygulanacak doğru KDV oranı için güncel mevzuat kontrol
                edilmelidir.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}