import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  Landmark,
  Percent,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Kredi Faizi Nasıl Hesaplanır? Formül ve Örnekler",
  description:
    "Kredi faizinin, aylık taksit tutarının, toplam geri ödemenin ve kredi maliyetinin nasıl hesaplandığını formüller ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/kredi-faizi-nasil-hesaplanir",
  },
  openGraph: {
    title: "Kredi Faizi Nasıl Hesaplanır? | HesapRehberi",
    description:
      "Kredi faizi, aylık taksit ve toplam geri ödeme hesaplama yöntemlerini anlaşılır örneklerle inceleyin.",
    url: "/blog/kredi-faizi-nasil-hesaplanir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kredi faizi nedir?",
    answer:
      "Kredi faizi, bankanın kullandırdığı para karşılığında borçludan talep ettiği finansman maliyetidir. Faiz, kalan anapara ve kredi sözleşmesindeki oran dikkate alınarak hesaplanır.",
  },
  {
    question: "Aylık kredi faizi nasıl hesaplanır?",
    answer:
      "Basit bir yaklaşımda aylık faiz tutarı, kalan anapara ile aylık faiz oranının çarpılmasıyla bulunur. Eşit taksitli kredilerde her ay anapara azaldığı için faiz tutarı da dönemler arasında değişir.",
  },
  {
    question: "Kredi taksiti nasıl hesaplanır?",
    answer:
      "Eşit taksitli kredilerde taksit tutarı; kredi anaparası, aylık faiz oranı ve vade kullanılarak annüite formülüyle hesaplanır.",
  },
  {
    question: "Toplam geri ödeme nasıl bulunur?",
    answer:
      "Aylık taksit tutarı toplam taksit sayısıyla çarpılır. Krediye bağlı ücret, vergi, sigorta veya diğer masraflar varsa bunlar ayrıca eklenebilir.",
  },
  {
    question: "Faiz oranı düşük olan kredi her zaman daha ucuz mudur?",
    answer:
      "Her zaman değil. Vade, tahsis ücreti, sigorta, vergi ve diğer masraflar toplam maliyeti etkileyebilir. Krediler yalnızca ilan edilen faiz oranıyla karşılaştırılmamalıdır.",
  },
  {
    question: "Vade uzadıkça kredi maliyeti neden artar?",
    answer:
      "Vade uzadığında borç daha uzun süre taşınır. Aylık taksit düşebilse de daha fazla dönem boyunca faiz ödendiği için toplam geri ödeme genellikle artar.",
  },
  {
    question: "Erken ödeme yapılırsa faiz azalır mı?",
    answer:
      "Erken ödeme veya ara ödeme, kalan anaparayı azaltabileceği için sonraki dönemlerde oluşacak faiz yükünü düşürebilir. Uygulanacak koşullar kredi sözleşmesine göre değişir.",
  },
  {
    question: "Kredi hesaplama sonucu kesin midir?",
    answer:
      "Çevrim içi hesaplama araçları yaklaşık sonuç verir. Kesin ödeme planı için bankanın sunduğu sözleşme, ödeme tablosu ve masraf bilgileri esas alınmalıdır.",
  },
];

const affectingFactors = [
  {
    title: "Kredi tutarı",
    description:
      "Kullanılan anapara arttıkça faiz hesaplamasına esas borç miktarı da artar.",
  },
  {
    title: "Faiz oranı",
    description:
      "Aylık faiz oranındaki küçük değişiklikler, özellikle uzun vadeli kredilerde toplam geri ödemeyi önemli ölçüde etkileyebilir.",
  },
  {
    title: "Vade",
    description:
      "Uzun vade aylık taksiti azaltabilir ancak toplam faiz yükünü yükseltebilir.",
  },
  {
    title: "Ödeme yöntemi",
    description:
      "Eşit taksit, azalan taksit veya farklı ödeme planları faiz dağılımını değiştirebilir.",
  },
  {
    title: "Vergi ve masraflar",
    description:
      "Kredi türüne ve sözleşmeye göre vergi, tahsis ücreti, sigorta ve diğer maliyetler oluşabilir.",
  },
  {
    title: "Erken ödeme",
    description:
      "Ara ödeme veya erken kapama kalan anaparayı ve gelecekteki faiz yükünü etkileyebilir.",
  },
];

export default function KrediFaiziNasilHesaplanirPage() {
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
              label: "Kredi Faizi Nasıl Hesaplanır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Percent size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Kredi Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Kredi Faizi Nasıl Hesaplanır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kredi faizinin, aylık taksit tutarının, toplam geri ödemenin ve
              kredi maliyetinin nasıl hesaplandığını formüller ve anlaşılır
              örneklerle öğrenin.
            </p>

            <ShareButtons
              title="Kredi Faizi Nasıl Hesaplanır? | HesapRehberi"
              description="Kredi faizi, aylık taksit ve toplam geri ödeme hesaplama yöntemlerini öğrenin."
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
                  href="#kredi-faizi-nedir"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  1. Kredi faizi nedir?
                </a>
              </li>

              <li>
                <a
                  href="#aylik-faiz-orani"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  2. Aylık faiz oranı nedir?
                </a>
              </li>

              <li>
                <a
                  href="#kredi-faizi-hesaplama"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  3. Kredi faizi nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#taksit-hesaplama"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  4. Aylık kredi taksiti nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#ornek-kredi-hesabi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  5. Örnek kredi hesaplaması
                </a>
              </li>

              <li>
                <a
                  href="#toplam-geri-odeme"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  6. Toplam geri ödeme nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#faiz-anapara-dagilimi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  7. Taksitte faiz ve anapara dağılımı
                </a>
              </li>

              <li>
                <a
                  href="#kredi-turleri"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  8. Kredi türlerine göre faiz hesabı
                </a>
              </li>

              <li>
                <a
                  href="#kredi-maliyetini-etkileyenler"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  9. Kredi maliyetini etkileyen unsurlar
                </a>
              </li>

              <li>
                <a
                  href="#vade-etkisi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  10. Vade kredi maliyetini nasıl etkiler?
                </a>
              </li>

              <li>
                <a
                  href="#erken-odeme"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  11. Erken ödeme faiz yükünü azaltır mı?
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  12. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  13. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="kredi-faizi-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Faizi Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi faizi, bankanın müşteriye kullandırdığı para karşılığında
                talep ettiği finansman bedelidir. Borçlu yalnızca aldığı
                anaparayı değil, kredi süresi boyunca oluşan faiz ve varsa diğer
                maliyetleri de geri öder.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Kredi ödemelerinde faiz genellikle kalan anapara üzerinden
                hesaplanır. Her taksitte anaparanın bir bölümü ödendiği için
                kalan borç azalır ve sonraki dönemlerde hesaplanan faiz tutarı
                da değişir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Kredi maliyeti yalnızca faizden oluşmayabilir. Vergi, tahsis
                  ücreti, sigorta ve sözleşmeye bağlı diğer masraflar da toplam
                  geri ödemeyi etkileyebilir.
                </p>
              </div>
            </section>

            <section id="aylik-faiz-orani" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Aylık Faiz Oranı Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık faiz oranı, kredi borcuna bir aylık dönem için uygulanan
                faiz oranıdır. Örneğin aylık yüzde 2 faiz oranı, ondalık
                hesaplamada 0,02 olarak kullanılır.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Yüzde 2 aylık faiz oranı = 2 ÷ 100 = 0,02
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık oranı yalnızca 12 ile çarparak yıllık bileşik maliyeti
                bulmak doğru değildir. Çünkü her dönemde oluşan faizin sonraki
                dönemler üzerindeki etkisi bileşik hesaplamada dikkate alınır.
              </p>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Bileşik Yıllık Oran = ((1 + Aylık Oran)¹² − 1) × 100
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Bu formül yalnızca faiz oranının bileşik yıllık karşılığını
                gösterir. Krediye bağlı vergi ve masraflar ayrıca dikkate
                alınmalıdır.
              </p>
            </section>

            <section id="kredi-faizi-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Faizi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Belirli bir döneme ait basit faiz tutarı, kalan anapara ile
                dönemsel faiz oranının çarpılmasıyla hesaplanabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Dönemlik Faiz = Kalan Anapara × Dönemlik Faiz Oranı
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Bir aylık faiz hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Kalan anapara: 100.000 TL</p>
                  <p>Aylık faiz oranı: %2</p>
                  <p>Ondalık faiz oranı: 0,02</p>
                  <p>Hesaplama: 100.000 × 0,02</p>

                  <p className="font-semibold text-slate-900">
                    Bir aylık örnek faiz tutarı: 2.000 TL
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli bir kredide ilk ayın faizi bu yöntemle
                hesaplanabilir. Ancak taksit yalnızca faizden oluşmaz. Aylık
                ödemenin kalan bölümü anaparadan düşülür.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Bu örnek yalnızca temel faiz mantığını açıklamak için
                    hazırlanmıştır. Gerçek kredi hesaplarında vergiler, masraflar
                    ve bankanın ödeme planı sonucu değiştirebilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="taksit-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Aylık Kredi Taksiti Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli kredilerde aylık ödeme tutarı, anapara, aylık faiz
                oranı ve toplam vade kullanılarak annüite formülüyle
                hesaplanabilir.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="min-w-[620px] font-semibold text-indigo-900">
                  Aylık Taksit = Anapara × [r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Formüldeki değişkenler
                </h3>

                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">Anapara:</strong>{" "}
                      Kullanılan kredi tutarı
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">r:</strong> Ondalık
                      biçimde aylık faiz oranı
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">n:</strong> Toplam
                      taksit sayısı
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Bu formül, anapara ve faiz toplamının vade boyunca eşit aylık
                taksitlere dağıtılmasını sağlar. Taksit tutarı aynı kalsa da
                taksitin içindeki faiz ve anapara payları zamanla değişir.
              </p>
            </section>

            <section id="ornek-kredi-hesabi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Kredi Faizi ve Taksit Hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki örnek yalnızca hesaplama yöntemini göstermek amacıyla
                hazırlanmıştır. Rakamlar güncel bir banka teklifini temsil
                etmez.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    Kredi tutarı
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    100.000 TL
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    Aylık faiz
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">%2</p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-semibold text-blue-100">Vade</p>

                  <p className="mt-3 text-2xl font-bold">12 ay</p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Hesaplama adımları
                </h3>

                <ol className="mt-5 space-y-4 text-slate-600">
                  <li className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      1
                    </span>

                    <p className="leading-8">
                      Aylık yüzde 2 oranı ondalık biçime çevrilir: 0,02.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      2
                    </span>

                    <p className="leading-8">
                      Anapara, faiz oranı ve 12 aylık vade taksit formülüne
                      yerleştirilir.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      3
                    </span>

                    <p className="leading-8">
                      Yaklaşık aylık taksit 9.456 TL olarak bulunur.
                    </p>
                  </li>

                  <li className="flex items-start gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      4
                    </span>

                    <p className="leading-8">
                      Aylık taksit 12 ile çarpılarak yaklaşık toplam ödeme
                      hesaplanır.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Kalem</th>
                        <th className="px-5 py-4 font-semibold">
                          Yaklaşık Tutar
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Kredi anaparası
                        </td>
                        <td className="px-5 py-4">100.000 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">Aylık taksit</td>
                        <td className="px-5 py-4">9.456 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">Toplam taksit sayısı</td>
                        <td className="px-5 py-4">12</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          Yaklaşık toplam geri ödeme
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          113.472 TL
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Yaklaşık faiz farkı
                        </td>
                        <td className="px-5 py-4">13.472 TL</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Tutarlar yuvarlanmıştır. Vergi, sigorta, tahsis ücreti ve diğer
                masraflar örneğe dahil edilmemiştir.
              </p>
            </section>

            <section id="toplam-geri-odeme" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Toplam Geri Ödeme Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli bir kredide temel toplam geri ödeme, aylık taksit
                tutarının toplam taksit sayısıyla çarpılmasıyla bulunur.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Toplam Geri Ödeme = Aylık Taksit × Taksit Sayısı
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Toplam Faiz ve Finansman Farkı = Toplam Geri Ödeme − Kredi
                  Anaparası
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Bu hesaplama kredi taksitleri içindeki anapara ve faiz toplamını
                gösterir. Kredi kullanımına bağlı ek ücretler bulunuyorsa toplam
                maliyet hesaplanırken bunlar da eklenmelidir.
              </p>
            </section>

            <section id="faiz-anapara-dagilimi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Taksitte Faiz ve Anapara Dağılımı Nasıl Olur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli kredilerde aylık ödeme tutarı sabit olabilir.
                Ancak her taksitin içindeki faiz ve anapara miktarı aynı kalmaz.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">İlk taksitlerde</h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    Kalan anapara yüksek olduğu için taksit içindeki faiz payı
                    daha yüksektir. Anapara payı görece daha düşüktür.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Son taksitlerde
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Kalan anapara azaldığı için faiz payı düşer. Taksitin daha
                    büyük bir bölümü anapara ödemesine ayrılır.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900">
                  Bir taksitin temel dağılımı
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>
                    Dönem faizi = Önceki dönem kalan anapara × Aylık faiz oranı
                  </p>

                  <p>
                    Anapara ödemesi = Aylık taksit − Dönem faizi
                  </p>

                  <p>
                    Yeni kalan anapara = Önceki kalan anapara − Anapara ödemesi
                  </p>
                </div>
              </div>
            </section>

            <section id="kredi-turleri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Türlerine Göre Faiz Hesabı
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Temel hesaplama mantığı benzer olsa da kredi türü, vade
                seçenekleri, masraflar ve ödeme koşulları bakımından farklılık
                gösterebilir.
              </p>

              <div className="mt-7 grid gap-5">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <CreditCard size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        İhtiyaç kredisi
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        Genellikle kişisel harcamaların finansmanında kullanılır.
                        Kredi tutarı, faiz oranı, vade ve ek maliyetler toplam
                        ödeme üzerinde belirleyicidir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Landmark size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Konut kredisi
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        Daha yüksek tutar ve uzun vade nedeniyle faiz oranındaki
                        küçük değişiklikler toplam maliyette büyük farklar
                        oluşturabilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                      <Calculator size={22} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Taşıt kredisi
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        Araç bedeli, kullanılabilecek kredi oranı, vade ve
                        finansman koşulları ödeme planını etkileyebilir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="kredi-maliyetini-etkileyenler"
              className="scroll-mt-24"
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Maliyetini Etkileyen Unsurlar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı kredi tutarı için farklı bankalarda veya farklı vadelerde
                farklı toplam maliyetler oluşabilir.
              </p>

              <div className="mt-7 grid gap-5">
                {affectingFactors.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="font-bold text-slate-900">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="vade-etkisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vade Kredi Maliyetini Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vade uzadıkça borç daha fazla döneme yayılır. Bu nedenle aylık
                taksit tutarı düşebilir. Ancak faiz daha uzun süre boyunca
                hesaplandığı için toplam geri ödeme çoğu durumda artar.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Vade Seçeneği
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Aylık Taksit
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Toplam Faiz Yükü
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Kısa vade
                        </td>
                        <td className="px-5 py-4">Daha yüksek</td>
                        <td className="px-5 py-4">Genellikle daha düşük</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Orta vade
                        </td>
                        <td className="px-5 py-4">Dengeli</td>
                        <td className="px-5 py-4">Orta seviyede</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Uzun vade
                        </td>
                        <td className="px-5 py-4">Daha düşük</td>
                        <td className="px-5 py-4">Genellikle daha yüksek</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi seçerken yalnızca aylık taksidin düşük olması değil,
                toplam geri ödeme ve bütçenin uzun süreli ödeme kapasitesi de
                değerlendirilmelidir.
              </p>
            </section>

            <section id="erken-odeme" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Erken Ödeme Faiz Yükünü Azaltır mı?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi borcuna yapılan ara ödeme, kalan anaparayı azaltabilir.
                Sonraki dönemlerin faizi daha düşük bir anapara üzerinden
                hesaplandığı için toplam faiz yükünde azalma oluşabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Kalan anapara azaldıkça gelecekte hesaplanacak faiz tutarı da
                  azalabilir.
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Erken kapama, ara ödeme ve ödeme planı değişikliğinde
                uygulanacak koşullar kredi türüne ve sözleşmeye göre farklılık
                gösterebilir. İşlem öncesinde bankadan güncel kapama tutarı ve
                masraf bilgisi alınmalıdır.
              </p>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Faizi Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Yüzde faiz oranını ondalık biçime çevirmeden formülde kullanmak.",
                  "Aylık faiz oranını yalnızca 12 ile çarparak bileşik yıllık maliyet bulmaya çalışmak.",
                  "Kredinin tüm vadesinde ilk ayın faiz tutarının sabit kalacağını varsaymak.",
                  "Aylık taksit ile aylık faiz tutarını aynı kavram sanmak.",
                  "Vergi, sigorta, tahsis ücreti ve diğer masrafları göz ardı etmek.",
                  "Yalnızca düşük aylık takside bakıp toplam geri ödemeyi karşılaştırmamak.",
                  "Farklı vadelerdeki kredi tekliflerini yalnızca faiz oranına göre değerlendirmek.",
                  "Yuvarlama nedeniyle küçük taksit ve toplam ödeme farklarının oluşabileceğini unutmamak.",
                  "Erken ödeme durumunda sözleşme koşullarını kontrol etmemek.",
                ].map((item) => (
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

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Bankaların faiz, masraf ve ödeme koşulları zaman içinde
                    değişebilir. Kredi kararı vermeden önce sözleşmedeki toplam
                    maliyet, ödeme planı ve erken ödeme şartları dikkatle
                    incelenmelidir.
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
              <h2 className="text-3xl font-bold">
                Kredi Taksitinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Kredi tutarı, aylık faiz oranı ve vade bilgilerini girerek
                tahmini aylık taksiti, toplam geri ödemeyi ve toplam faiz
                tutarını saniyeler içinde görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/kredi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Kredi Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacıyla sunulur.
                Bankanın ödeme planı, vergiler, sigorta ve diğer masraflar
                gerçek sonucu değiştirebilir.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}