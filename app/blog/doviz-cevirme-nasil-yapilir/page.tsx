import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Döviz Çevirme İşlemi Nasıl Yapılır? Formül ve Örnekler",
  description:
    "Dövizden Türk lirasına ve Türk lirasından dövize çeviri işleminin nasıl yapıldığını formüller, alış-satış kuru farkı ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/doviz-cevirme-nasil-yapilir",
  },
  openGraph: {
    title: "Döviz Çevirme İşlemi Nasıl Yapılır? | HesapRehberi",
    description:
      "Döviz çevirme işlemini, alış-satış kuru farkını ve temel hesaplama yöntemlerini örneklerle inceleyin.",
    url: "/blog/doviz-cevirme-nasil-yapilir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Dövizden Türk lirasına çeviri nasıl yapılır?",
    answer:
      "Döviz miktarı, kullanılacak döviz kuruyla çarpılır. Örneğin 100 dolar, 40 TL kur üzerinden 4.000 TL eder.",
  },
  {
    question: "Türk lirasından dövize çeviri nasıl yapılır?",
    answer:
      "Türk lirası tutarı, dövizin satış kuruna bölünür. Örneğin 4.000 TL, 40 TL kur üzerinden 100 dolara karşılık gelir.",
  },
  {
    question: "Döviz alırken hangi kur kullanılır?",
    answer:
      "Bir banka veya döviz bürosundan döviz satın alırken kurumun satış kuru kullanılır.",
  },
  {
    question: "Döviz bozdururken hangi kur kullanılır?",
    answer:
      "Elinizdeki dövizi bankaya veya döviz bürosuna sattığınızda kurumun alış kuru kullanılır.",
  },
  {
    question: "Alış ve satış kuru neden farklıdır?",
    answer:
      "Finansal kurumlar dövizi farklı fiyatlardan alıp satar. İki kur arasındaki fark, makas aralığı olarak adlandırılır ve kurumun fiyatlandırmasına göre değişebilir.",
  },
  {
    question: "Döviz hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Kur değişimleri, alış-satış farkı, komisyonlar ve işlem anındaki fiyat nedeniyle gerçek işlem tutarı farklı olabilir.",
  },
];

export default function DovizCevirmeNasilYapilirPage() {
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
              label: "Döviz Çevirme İşlemi Nasıl Yapılır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Banknote size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Döviz Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Döviz Çevirme İşlemi Nasıl Yapılır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Dövizden Türk lirasına ve Türk lirasından dövize çeviri yaparken
              kullanılan formülleri, alış-satış kuru farkını ve dikkat edilmesi
              gereken noktaları öğrenin.
            </p>

            <ShareButtons
              title="Döviz Çevirme İşlemi Nasıl Yapılır? | HesapRehberi"
              description="Döviz çevirme işlemini ve alış-satış kuru farkını öğrenin."
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
                  href="#doviz-kuru-nedir"
                  className="transition hover:text-blue-600"
                >
                  1. Döviz kuru nedir?
                </a>
              </li>

              <li>
                <a
                  href="#dovizden-tlye-ceviri"
                  className="transition hover:text-blue-600"
                >
                  2. Dövizden Türk lirasına çeviri
                </a>
              </li>

              <li>
                <a
                  href="#tlden-dovize-ceviri"
                  className="transition hover:text-blue-600"
                >
                  3. Türk lirasından dövize çeviri
                </a>
              </li>

              <li>
                <a
                  href="#capraz-kur"
                  className="transition hover:text-blue-600"
                >
                  4. Bir dövizden başka bir dövize çeviri
                </a>
              </li>

              <li>
                <a
                  href="#alis-satis-kuru"
                  className="transition hover:text-blue-600"
                >
                  5. Alış ve satış kuru arasındaki fark
                </a>
              </li>

              <li>
                <a
                  href="#kur-neden-degisir"
                  className="transition hover:text-blue-600"
                >
                  6. Döviz kuru neden değişir?
                </a>
              </li>

              <li>
                <a
                  href="#gercek-islem-tutari"
                  className="transition hover:text-blue-600"
                >
                  7. Gerçek işlem tutarı neden farklı olabilir?
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
            <section id="doviz-kuru-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Döviz Kuru Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Döviz kuru, bir para biriminin başka bir para birimi karşısındaki
                değerini ifade eder. Örneğin dolar kuru 40 TL olarak
                gösteriliyorsa bu değer, 1 Amerikan dolarının 40 Türk lirasına
                karşılık geldiğini belirtir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Döviz kurları sabit kalmaz. Piyasa koşulları, ekonomik
                gelişmeler ve finansal kurumların fiyatlandırmaları nedeniyle
                gün içinde değişebilir.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Bu rehberde kullanılan kur değerleri yalnızca hesaplama
                  yöntemini göstermek amacıyla hazırlanmış örneklerdir ve güncel
                  piyasa kuru değildir.
                </p>
              </div>
            </section>

            <section id="dovizden-tlye-ceviri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Dövizden Türk Lirasına Çeviri Nasıl Yapılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Elinizdeki döviz miktarının Türk lirası karşılığını bulmak için
                döviz miktarı ile kullanılacak kur değeri çarpılır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Türk Lirası Tutarı = Döviz Miktarı × Döviz Kuru
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Doları Türk lirasına çevirme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Döviz miktarı: 100 USD</p>
                  <p>Örnek kur: 1 USD = 40 TL</p>
                  <p>Hesaplama: 100 × 40</p>

                  <p className="font-semibold text-slate-900">
                    Türk lirası karşılığı: 4.000 TL
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Euroyu Türk lirasına çevirme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Döviz miktarı: 250 EUR</p>
                  <p>Örnek kur: 1 EUR = 45 TL</p>
                  <p>Hesaplama: 250 × 45</p>

                  <p className="font-semibold text-slate-900">
                    Türk lirası karşılığı: 11.250 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="tlden-dovize-ceviri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Türk Lirasından Dövize Çeviri Nasıl Yapılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Türk lirası tutarının kaç birim dövize karşılık geldiğini bulmak
                için Türk lirası miktarı, ilgili dövizin kuruna bölünür.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Döviz Miktarı = Türk Lirası Tutarı ÷ Döviz Kuru
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Türk lirasını dolara çevirme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Türk lirası tutarı: 4.000 TL</p>
                  <p>Örnek kur: 1 USD = 40 TL</p>
                  <p>Hesaplama: 4.000 ÷ 40</p>

                  <p className="font-semibold text-slate-900">
                    Döviz karşılığı: 100 USD
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Gerçek bir döviz satın alma işleminde kurumun satış kuru
                kullanılmalıdır. Çünkü banka veya döviz bürosu dövizi müşteriye
                satış fiyatından verir.
              </p>
            </section>

            <section id="capraz-kur" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Bir Dövizden Başka Bir Dövize Çeviri Nasıl Yapılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Doları euroya veya euroyu sterline çevirmek gibi işlemlerde
                doğrudan parite kullanılabilir. Doğrudan parite bulunmuyorsa
                tutar önce ortak bir para birimine, ardından hedef para birimine
                çevrilebilir.
              </p>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Hedef Döviz = Kaynak Döviz Miktarı × Dönüşüm Paritesi
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Doları euroya çevirme örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Kaynak tutar: 100 USD</p>
                  <p>Örnek parite: 1 USD = 0,90 EUR</p>
                  <p>Hesaplama: 100 × 0,90</p>

                  <p className="font-semibold text-slate-900">
                    Sonuç: 90 EUR
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-500">
                Paritenin hangi yönde gösterildiğine dikkat edilmelidir. Ters
                yöndeki bir dönüşümde çarpma yerine bölme yapılması gerekebilir.
              </p>
            </section>

            <section id="alis-satis-kuru" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Alış ve Satış Kuru Arasındaki Fark
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankalar ve döviz büroları dövizi müşteriden aldığı fiyat ile
                müşteriye sattığı fiyatı ayrı ayrı belirler. Bu nedenle aynı
                para birimi için alış ve satış olmak üzere iki farklı kur
                görülebilir.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <p className="text-sm font-semibold text-slate-500">
                    Alış Kuru
                  </p>

                  <p className="mt-4 text-2xl font-bold text-slate-900">
                    Kurumun dövizi sizden aldığı fiyat
                  </p>

                  <p className="mt-4 leading-7 text-slate-600">
                    Elinizdeki dövizi bozdururken genellikle kurumun alış kuru
                    kullanılır.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    Satış Kuru
                  </p>

                  <p className="mt-4 text-2xl font-bold">
                    Kurumun dövizi size sattığı fiyat
                  </p>

                  <p className="mt-4 leading-7 text-blue-100">
                    Türk lirasıyla döviz satın alırken genellikle kurumun satış
                    kuru kullanılır.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="font-bold text-amber-950">
                  Kur makası nedir?
                </h3>

                <p className="mt-3 leading-8 text-amber-900">
                  Alış kuru ile satış kuru arasındaki fark, kur makası veya
                  makas aralığı olarak adlandırılır. Makas arttıkça dövizi alıp
                  hemen geri satmanın oluşturacağı fark da büyür.
                </p>
              </div>
            </section>

            <section id="kur-neden-degisir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Döviz Kuru Neden Değişir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Döviz kurları, piyasadaki arz ve talebin yanı sıra ekonomik ve
                finansal beklentilerden etkilenebilir. Kur hareketlerinin tek
                bir nedeni bulunmaz.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">
                    Faiz oranları
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Ülkelerin faiz politikaları para birimlerine yönelik talebi
                    etkileyebilir.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">Enflasyon</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Fiyatların genel seviyesindeki değişim, para biriminin satın
                    alma gücü üzerinde etkili olabilir.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">
                    Ekonomik beklentiler
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Büyüme, dış ticaret ve ekonomik güven gibi göstergeler kur
                    beklentilerini değiştirebilir.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <h3 className="font-bold text-slate-900">
                    Küresel gelişmeler
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Uluslararası piyasalar ve jeopolitik gelişmeler döviz
                    talebinde değişime yol açabilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="gercek-islem-tutari" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Gerçek İşlem Tutarı Neden Farklı Olabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Matematiksel döviz çevirme işlemi basit olsa da banka veya döviz
                bürosunda gerçekleşen sonuç farklı olabilir. Bunun temel nedeni,
                ekranda görülen gösterge kuru ile işlemin gerçekleştirildiği
                kurun aynı olmayabilmesidir.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Bankanın veya döviz bürosunun uyguladığı alış-satış farkı
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    İşlem ücreti veya komisyon
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Kurun işlem sırasında değişmesi
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Mesai saatleri dışında daha geniş makas uygulanması
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Nakit, mobil uygulama veya kart işlemlerinde farklı kur
                    kullanılması
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Döviz Çevirirken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Döviz alırken alış kuru yerine satış kurunun kullanılması
                    gerektiğini gözden kaçırmak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Dövizi Türk lirasına çevirirken çarpma yerine bölme yapmak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Kurun hangi para birimini ifade ettiğini kontrol etmemek.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Gösterge kuruyla gerçek işlem kurunun aynı olduğunu
                    varsaymak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Komisyonları ve alış-satış farkını hesaba katmamak.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-blue-600"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-slate-600">
                    Eski veya güncel olmayan bir kur değeriyle işlem yapmak.
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
                Döviz Tutarınızı Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Döviz miktarını ve kullanmak istediğiniz kur değerini girerek
                Türk lirası karşılığını veya Türk lirasından döviz karşılığını
                saniyeler içinde hesaplayın.
              </p>

              <Link
                href="/hesaplamalar/doviz-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Döviz Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amaçlıdır. Gerçek işlem
                kuru, alış-satış farkı ve kurum ücretleri sonucu değiştirebilir.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}