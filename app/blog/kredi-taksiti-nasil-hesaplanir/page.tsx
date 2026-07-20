import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Landmark,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Kredi Taksiti Nasıl Hesaplanır? Formül ve Örnek",
  description:
    "Kredi tutarı, aylık faiz oranı ve vadeye göre aylık taksit, toplam faiz ve toplam geri ödemenin nasıl hesaplandığını öğrenin.",
  alternates: {
    canonical: "/blog/kredi-taksiti-nasil-hesaplanir",
  },
  openGraph: {
    title: "Kredi Taksiti Nasıl Hesaplanır? | HesapRehberi",
    description:
      "Kredi taksiti, toplam faiz ve toplam geri ödeme hesabını formüller ve örneklerle inceleyin.",
    url: "/blog/kredi-taksiti-nasil-hesaplanir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Kredi taksiti nasıl hesaplanır?",
    answer:
      "Kredi taksiti; kullanılan anapara, aylık faiz oranı ve vade sayısı esas alınarak eşit taksitli kredi formülüyle hesaplanır.",
  },
  {
    question: "Vade uzarsa aylık taksit düşer mi?",
    answer:
      "Genellikle vade uzadıkça aylık taksit düşer. Ancak daha uzun süre faiz ödendiği için toplam faiz ve toplam geri ödeme artabilir.",
  },
  {
    question: "Faiz oranı yükselirse ne olur?",
    answer:
      "Aynı kredi tutarı ve vadede faiz oranı yükseldiğinde aylık taksit, toplam faiz maliyeti ve toplam geri ödeme artar.",
  },
  {
    question: "Kredi hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Bankaların tahsis ücreti, sigorta, vergi ve diğer masrafları farklı olabileceği için hesaplama sonucu yaklaşık değerdir.",
  },
];

export default function KrediTaksitiNasilHesaplanirPage() {
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
              label: "Kredi Taksiti Nasıl Hesaplanır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Landmark size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Kredi Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Kredi Taksiti Nasıl Hesaplanır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Kredi tutarı, aylık faiz oranı ve vade bilgilerinin aylık taksit,
              toplam faiz ve toplam geri ödeme üzerindeki etkisini formüller ve
              örneklerle öğrenin.
            </p>

            <ShareButtons
              title="Kredi Taksiti Nasıl Hesaplanır? | HesapRehberi"
              description="Kredi taksiti ve toplam geri ödeme hesabını örneklerle öğrenin."
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
                  href="#belirleyen-unsurlar"
                  className="transition hover:text-blue-600"
                >
                  1. Kredi taksitini belirleyen unsurlar
                </a>
              </li>

              <li>
                <a
                  href="#esit-taksit-formulu"
                  className="transition hover:text-blue-600"
                >
                  2. Eşit taksitli kredi formülü
                </a>
              </li>

              <li>
                <a
                  href="#ornek-kredi-hesabi"
                  className="transition hover:text-blue-600"
                >
                  3. Örnek kredi hesabı
                </a>
              </li>

              <li>
                <a
                  href="#vade-etkisi"
                  className="transition hover:text-blue-600"
                >
                  4. Vade uzarsa ne olur?
                </a>
              </li>

              <li>
                <a
                  href="#faiz-etkisi"
                  className="transition hover:text-blue-600"
                >
                  5. Faiz oranı artarsa ne olur?
                </a>
              </li>

              <li>
                <a
                  href="#banka-masraflari"
                  className="transition hover:text-blue-600"
                >
                  6. Banka masrafları
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600"
                >
                  7. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600"
                >
                  8. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="belirleyen-unsurlar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Taksitini Belirleyen Unsurlar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık kredi taksiti temel olarak kredi tutarı, aylık faiz oranı
                ve toplam vade sayısına göre hesaplanır. Bu değerlerden herhangi
                biri değiştiğinde aylık taksit ve toplam geri ödeme de değişir.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">Kredi Tutarı</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Bankadan kullanılan anapara miktarıdır. Tutar arttıkça
                    taksit ve toplam geri ödeme yükselir.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">Faiz Oranı</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Bankanın kredi için uyguladığı aylık maliyet oranıdır.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">Vade</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Kredinin kaç ay içinde geri ödeneceğini ifade eder.
                  </p>
                </div>
              </div>
            </section>

            <section id="esit-taksit-formulu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Eşit Taksitli Kredi Formülü
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli kredilerde her ay aynı ödeme tutarı esas alınır.
                Aylık taksit aşağıdaki formülle yaklaşık olarak hesaplanır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold leading-8 text-blue-900">
                  Aylık Taksit = Anapara × [Faiz × (1 + Faiz)
                  <sup>Vade</sup>] / [(1 + Faiz)<sup>Vade</sup> − 1]
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Formüldeki faiz değeri aylık faiz oranının ondalık karşılığıdır.
                Örneğin aylık faiz oranı %3 ise formülde 0,03 olarak kullanılır.
                Vade ise toplam ay sayısıdır.
              </p>
            </section>

            <section id="ornek-kredi-hesabi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Kredi Hesabı
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                100.000 ₺ kredi, 12 ay vade ve aylık %3 faiz oranı üzerinden
                örnek bir hesaplama yapalım.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Kredi Tutarı</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    100.000 ₺
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Vade</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    12 Ay
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm text-slate-500">Aylık Faiz</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">%3</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <div className="space-y-3 text-green-900">
                  <p>
                    Yaklaşık aylık taksit:{" "}
                    <strong>10.046,21 ₺</strong>
                  </p>

                  <p>
                    Yaklaşık toplam geri ödeme:{" "}
                    <strong>120.554,52 ₺</strong>
                  </p>

                  <p>
                    Yaklaşık toplam faiz:{" "}
                    <strong>20.554,52 ₺</strong>
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Bu örnek yalnızca faiz ve eşit taksit formülü esas alınarak
                hazırlanmıştır. Banka masrafları dahil değildir.
              </p>
            </section>

            <section id="vade-etkisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vade Uzarsa Ne Olur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vade uzadığında borç daha fazla aya bölündüğü için aylık taksit
                genellikle azalır. Ancak faiz daha uzun süre işletildiğinden
                toplam faiz maliyeti ve toplam geri ödeme çoğu zaman artar.
              </p>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Vade</th>
                        <th className="px-5 py-4 font-semibold">
                          Aylık taksit
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Toplam geri ödeme
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4">12 ay</td>
                        <td className="px-5 py-4">Daha yüksek</td>
                        <td className="px-5 py-4">Daha düşük</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">24 ay</td>
                        <td className="px-5 py-4">Daha düşük</td>
                        <td className="px-5 py-4">Daha yüksek</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">36 ay</td>
                        <td className="px-5 py-4">En düşük</td>
                        <td className="px-5 py-4">En yüksek</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="faiz-etkisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Faiz Oranı Artarsa Ne Olur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi tutarı ve vade değişmeden faiz oranı arttığında hem aylık
                taksit hem de toplam geri ödeme yükselir. Özellikle uzun vadeli
                kredilerde küçük faiz oranı farkları bile toplam maliyette
                belirgin bir değişime neden olabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Kredi tekliflerini karşılaştırırken yalnızca aylık faiz
                  oranına değil; toplam geri ödeme, yıllık maliyet oranı ve ek
                  ücretlere de bakmak gerekir.
                </p>
              </div>
            </section>

            <section id="banka-masraflari" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Banka Masrafları Hesaba Dahil midir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Tahsis ücreti, sigorta, vergi ve bankanın uygulayabileceği diğer
                masraflar standart kredi formülüne dahil değildir. Bu nedenle
                hesaplama aracı yaklaşık sonuç verir ve bankanın sunacağı resmi
                ödeme planıyla küçük farklılıklar oluşabilir.
              </p>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Yalnızca aylık taksite bakıp toplam geri ödemeyi göz ardı
                    etmek.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Tahsis ücreti, sigorta ve diğer masrafları hesaba katmamak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Farklı bankaların toplam maliyetlerini karşılaştırmamak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Bütçeyi zorlayacak kadar yüksek aylık taksit seçmek.
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
                Kredi Taksitinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Kredi tutarı, vade ve aylık faiz oranını girerek aylık taksit,
                toplam faiz ve toplam geri ödeme tutarını saniyeler içinde
                görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/kredi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Kredi Hesaplama Aracını Aç

                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları bilgilendirme amaçlıdır ve bankanın resmi
                kredi teklifi yerine geçmez.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}