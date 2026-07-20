import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
  description:
    "Basit faiz ve bileşik faiz hesaplama yöntemleri arasındaki farkları formüller, örnekler ve karşılaştırmalarla öğrenin.",
  alternates: {
    canonical: "/blog/basit-faiz-bilesik-faiz-farki",
  },
  openGraph: {
    title: "Basit Faiz ve Bileşik Faiz Arasındaki Fark | HesapRehberi",
    description:
      "Basit ve bileşik faiz arasındaki farkları formüller ve örneklerle inceleyin.",
    url: "/blog/basit-faiz-bilesik-faiz-farki",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Basit faiz nedir?",
    answer:
      "Basit faiz, her dönemde yalnızca başlangıçtaki anapara üzerinden faiz hesaplanan yöntemdir. Önceki dönemlerde oluşan faizler anaparaya eklenmez.",
  },
  {
    question: "Bileşik faiz nedir?",
    answer:
      "Bileşik faiz, her dönemde oluşan faizin anaparaya eklenmesi ve sonraki dönemlerde toplam tutarın yeniden faiz kazanmasıdır.",
  },
  {
    question: "Basit faiz mi, bileşik faiz mi daha fazla kazandırır?",
    answer:
      "Faiz oranı ve süre aynı olduğunda bileşik faiz genellikle daha yüksek sonuç verir. Süre uzadıkça iki yöntem arasındaki fark daha belirgin hale gelir.",
  },
  {
    question: "Faiz oranı formülde nasıl kullanılır?",
    answer:
      "Yüzde olarak verilen faiz oranı ondalık değere çevrilmelidir. Örneğin yüzde 20 faiz oranı formülde 0,20 olarak kullanılır.",
  },
  {
    question: "Faiz oranının aylık veya yıllık olması önemli midir?",
    answer:
      "Evet. Faiz oranı ile süre aynı döneme çevrilmelidir. Yıllık oran kullanılıyorsa süre yıl, aylık oran kullanılıyorsa süre ay olarak ele alınmalıdır.",
  },
];

export default function BasitFaizBilesikFaizFarkiPage() {
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
              label: "Basit Faiz ve Bileşik Faiz Arasındaki Fark",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Calculator size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Faiz Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Basit Faiz ve Bileşik Faiz Arasındaki Fark
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Basit faiz ve bileşik faiz yöntemlerinin nasıl çalıştığını,
              aralarındaki temel farkları, kullanılan formülleri ve örnek
              hesaplamaları öğrenin.
            </p>

            <ShareButtons
              title="Basit Faiz ve Bileşik Faiz Arasındaki Fark | HesapRehberi"
              description="Basit ve bileşik faiz yöntemleri arasındaki farkları öğrenin."
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
                  href="#basit-faiz"
                  className="transition hover:text-blue-600"
                >
                  1. Basit faiz nedir?
                </a>
              </li>

              <li>
                <a
                  href="#bilesik-faiz"
                  className="transition hover:text-blue-600"
                >
                  2. Bileşik faiz nedir?
                </a>
              </li>

              <li>
                <a
                  href="#ornek-karsilastirma"
                  className="transition hover:text-blue-600"
                >
                  3. Örnek faiz karşılaştırması
                </a>
              </li>

              <li>
                <a
                  href="#temel-fark"
                  className="transition hover:text-blue-600"
                >
                  4. Temel fark nedir?
                </a>
              </li>

              <li>
                <a
                  href="#karsilastirma-tablosu"
                  className="transition hover:text-blue-600"
                >
                  5. Basit ve bileşik faiz karşılaştırması
                </a>
              </li>

              <li>
                <a
                  href="#kullanim-alanlari"
                  className="transition hover:text-blue-600"
                >
                  6. Hangi durumlarda kullanılır?
                </a>
              </li>

              <li>
                <a
                  href="#gercek-getiri"
                  className="transition hover:text-blue-600"
                >
                  7. Gerçek getiri neden farklı olabilir?
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600"
                >
                  8. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600"
                >
                  9. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="basit-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Basit Faiz Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Basit faiz yönteminde faiz yalnızca başlangıçtaki anapara
                üzerinden hesaplanır. Önceki dönemlerde oluşan faiz anaparaya
                eklenmez ve sonraki dönemlerde yeniden faiz kazandırmaz.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bu nedenle her dönem kazanılan faiz tutarı aynıdır. Toplam
                getiri, süre arttıkça doğrusal biçimde yükselir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Faiz Tutarı = Anapara × Faiz Oranı × Süre
                </p>

                <p className="mt-3 font-semibold text-blue-900">
                  Toplam Tutar = Anapara + Faiz Tutarı
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Basit faiz hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Anapara: 10.000 ₺</p>
                  <p>Yıllık faiz oranı: %20</p>
                  <p>Süre: 2 yıl</p>
                  <p>Faiz tutarı: 10.000 × 0,20 × 2 = 4.000 ₺</p>
                  <p className="font-semibold text-slate-900">
                    Toplam tutar: 10.000 + 4.000 = 14.000 ₺
                  </p>
                </div>
              </div>
            </section>

            <section id="bilesik-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Bileşik Faiz Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bileşik faiz yönteminde her dönemde oluşan faiz anaparaya
                eklenir. Sonraki dönemin faizi, başlangıçtaki anapara ile daha
                önce kazanılan faizlerin toplamı üzerinden hesaplanır.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bu yöntem halk arasında faizin de faiz kazanması şeklinde
                açıklanabilir. Süre uzadıkça bileşik faizin etkisi daha belirgin
                hale gelir.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Toplam Tutar = Anapara × (1 + Faiz Oranı)
                  <sup>Süre</sup>
                </p>

                <p className="mt-3 font-semibold text-green-900">
                  Faiz Tutarı = Toplam Tutar − Anapara
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Bileşik faiz hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Anapara: 10.000 ₺</p>
                  <p>Yıllık faiz oranı: %20</p>
                  <p>Süre: 2 yıl</p>
                  <p>Toplam tutar: 10.000 × (1 + 0,20)²</p>
                  <p>Toplam tutar: 10.000 × 1,44 = 14.400 ₺</p>
                  <p className="font-semibold text-slate-900">
                    Toplam faiz: 14.400 − 10.000 = 4.400 ₺
                  </p>
                </div>
              </div>
            </section>

            <section id="ornek-karsilastirma" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Faiz Karşılaştırması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                10.000 ₺ anapara, yıllık %20 faiz oranı ve 2 yıl süre için basit
                faiz ile bileşik faiz sonuçlarını karşılaştıralım.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <p className="text-sm font-semibold text-slate-500">
                    Basit Faiz
                  </p>

                  <p className="mt-4 text-3xl font-bold text-slate-900">
                    14.000 ₺
                  </p>

                  <p className="mt-3 leading-7 text-slate-600">
                    İki yıl boyunca toplam faiz 4.000 ₺ olur. Her yıl yalnızca
                    başlangıçtaki 10.000 ₺ üzerinden faiz hesaplanır.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    Bileşik Faiz
                  </p>

                  <p className="mt-4 text-3xl font-bold">14.400 ₺</p>

                  <p className="mt-3 leading-7 text-blue-100">
                    İkinci yılda ilk yıl kazanılan faiz de toplam tutara eklenir
                    ve yeniden faiz getirir.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Bu örnekte bileşik faiz sonucu, basit faiz sonucundan 400 ₺
                  daha yüksektir. Süre uzadıkça aradaki fark daha hızlı büyür.
                </p>
              </div>
            </section>

            <section id="temel-fark" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Basit Faiz ve Bileşik Faiz Arasındaki Temel Fark Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Basit faizde her dönemin faizi yalnızca başlangıçtaki anapara
                üzerinden hesaplanır. Bu nedenle her dönem kazanılan faiz
                değişmez.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bileşik faizde ise önceki dönemlerde kazanılan faizler anaparaya
                eklenir. Yeni faiz, büyüyen toplam tutar üzerinden
                hesaplandığından getiri zaman içinde daha hızlı artar.
              </p>
            </section>

            <section id="karsilastirma-tablosu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Basit Faiz ve Bileşik Faiz Karşılaştırması
              </h2>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[680px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Özellik</th>
                        <th className="px-5 py-4 font-semibold">
                          Basit Faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Bileşik Faiz
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Faiz hesabı
                        </td>
                        <td className="px-5 py-4">
                          Yalnızca başlangıç anaparası üzerinden
                        </td>
                        <td className="px-5 py-4">
                          Anapara ve birikmiş faiz üzerinden
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Büyüme biçimi
                        </td>
                        <td className="px-5 py-4">Doğrusal büyüme</td>
                        <td className="px-5 py-4">Katlanarak büyüme</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Dönemlik faiz
                        </td>
                        <td className="px-5 py-4">Her dönem aynıdır</td>
                        <td className="px-5 py-4">
                          Toplam tutar büyüdükçe artar
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Uzun vadeli sonuç
                        </td>
                        <td className="px-5 py-4">Genellikle daha düşük</td>
                        <td className="px-5 py-4">Genellikle daha yüksek</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Hesaplama
                        </td>
                        <td className="px-5 py-4">Daha basit</td>
                        <td className="px-5 py-4">Üslü hesaplama gerektirir</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="kullanim-alanlari" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Basit ve Bileşik Faiz Hangi Durumlarda Kullanılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kullanılan faiz yöntemi, finansal ürünün veya sözleşmenin
                koşullarına göre değişebilir. Hesaplama yapmadan önce faizin
                hangi yöntemle uygulandığı kontrol edilmelidir.
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Basit Faiz Kullanım Alanları
                  </h3>

                  <ul className="mt-5 space-y-4 text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>Kısa vadeli bazı borç ve alacak hesaplamaları</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>Bazı ticari faiz hesaplamaları</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>Temel finans ve eğitim örnekleri</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span>Faizin anaparaya eklenmediği işlemler</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">
                    Bileşik Faiz Kullanım Alanları
                  </h3>

                  <ul className="mt-5 space-y-4 text-blue-100">
                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span>Uzun vadeli birikim hesaplamaları</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span>Faizin yeniden değerlendirildiği yatırımlar</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span>Vadeli mevduat ve yatırım senaryoları</span>
                    </li>

                    <li className="flex items-start gap-3">
                      <CheckCircle2
                        size={21}
                        className="mt-1 shrink-0 text-white"
                        aria-hidden="true"
                      />
                      <span>Uzun vadeli finansal büyüme analizleri</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="gercek-getiri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Gerçek Getiri Neden Farklı Olabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Matematiksel formüller teorik sonucu gösterir. Gerçek bir
                finansal üründe elde edilen net getiri ise vergi, stopaj,
                işlem ücreti, vade koşulları ve faiz oranının dönem içinde
                değişmesi gibi nedenlerle farklı olabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Ayrıca bazı ürünlerde faiz günlük, aylık veya yıllık olarak
                işletilebilir. Faizin anaparaya hangi sıklıkla eklendiği,
                bileşik faiz sonucunu doğrudan etkiler.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Finansal ürünleri karşılaştırırken yalnızca faiz oranını değil,
                  vade süresini, faiz işletme dönemini, vergileri ve net getiriyi
                  birlikte değerlendirmek gerekir.
                </p>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Faiz Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Basit faiz ile bileşik faizi aynı yöntemmiş gibi
                    değerlendirmek.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Yüzde olarak verilen faiz oranını formülde doğrudan
                    kullanmak. Örneğin %20 oranı 20 değil, 0,20 olarak
                    kullanılmalıdır.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Faiz oranının aylık mı yıllık mı olduğunu kontrol etmemek.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Faiz oranı ile süreyi farklı dönemlerde kullanmak. Yıllık
                    oranla aylık süre doğrudan birlikte kullanılmamalıdır.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Vergi, stopaj ve diğer kesintileri net getiriye dahil
                    etmemek.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Bileşik faizde faizin anaparaya eklenme sıklığını göz ardı
                    etmek.
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
                Faiz Getirinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Anapara, faiz oranı ve süre bilgilerini girerek faiz tutarınızı
                ve toplam birikiminizi saniyeler içinde görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/faiz-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Faiz Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacı taşır. Vergi,
                stopaj ve finansal ürün koşulları gerçek sonucu değiştirebilir.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}