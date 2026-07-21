import type { Metadata } from "next";

import OvernightInterestCalculator from "@/components/calculators/OvernightInterestCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gecelik-faiz-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi lib/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const tableOfContents = [
  ["gecelik-faiz-nedir", "Gecelik faiz nedir?"],
  ["nasil-hesaplanir", "Gecelik faiz nasıl hesaplanır?"],
  ["basit-ve-yenilenen", "Basit ve yenilenen faiz farkı"],
  ["360-365", "360 ve 365 gün esası"],
  ["stopaj", "Stopaj ve net getiri"],
  ["dikkat-edilecekler", "Dikkat edilecek noktalar"],
  ["ornekler", "Örnek senaryolar"],
  ["sss", "Sık sorulan sorular"],
] as const;

const faqItems = [
  {
    question: "Gecelik faiz nedir?",
    answer:
      "Gecelik faiz, yatırılan tutarın bir gece veya günlük yenileme dönemleri boyunca faiz kazandığı kısa vadeli getiri yaklaşımıdır.",
  },
  {
    question: "Gecelik faiz nasıl hesaplanır?",
    answer:
      "Yıllık faiz oranı 360 veya 365 günlük esasa bölünür, ana para ve gece sayısıyla birlikte uygulanır.",
  },
  {
    question: "Gecelik faiz ile günlük faiz aynı mıdır?",
    answer:
      "Benzer hesaplama mantığı kullanılsa da ürünün yenileme saati, valör ve hafta sonu koşulları farklı olabilir.",
  },
  {
    question: "Her gece yenilenen faiz ne demektir?",
    answer:
      "Bir gecede oluşan faiz kazancının bakiyeye eklenip sonraki gecenin hesabına dahil edilmesidir.",
  },
  {
    question: "Basit gecelik faiz ne demektir?",
    answer:
      "Her gecenin faizinin yalnızca başlangıç ana parası üzerinden hesaplanmasıdır.",
  },
  {
    question: "360 gün ve 365 gün hesabı neden farklı sonuç verir?",
    answer:
      "Aynı yıllık oran daha az güne bölündüğünde günlük oran biraz daha yüksek çıkar.",
  },
  {
    question: "Stopaj gecelik faizden kesilir mi?",
    answer:
      "Ürünün vergi uygulamasına bağlı olarak faiz kazancı üzerinden stopaj uygulanabilir.",
  },
  {
    question: "Gecelik faiz hafta sonu işler mi?",
    answer:
      "Bu durum bankanın ürün koşullarına ve valör uygulamasına göre değişebilir.",
  },
  {
    question: "Valör tarihi neden önemlidir?",
    answer:
      "Paranın faiz kazanmaya başladığı günü belirlediği için toplam kazanç süresini etkiler.",
  },
  {
    question: "Gecelik faiz oranı yıllık mı belirtilir?",
    answer:
      "Genellikle ilan edilen oran yıllıktır ve hesaplama sırasında günlük orana dönüştürülür.",
  },
  {
    question: "Gecelik faiz oranı sabit midir?",
    answer:
      "Her zaman değil. Yenileme dönemlerinde oran değişebilir ve ürün koşullarına göre güncellenebilir.",
  },
  {
    question: "Gecelik faiz hesabında alt limit olabilir mi?",
    answer:
      "Evet. Bazı ürünlerde faiz kazanmaya başlamak için minimum bakiye şartı bulunabilir.",
  },
  {
    question: "Üst limit sonucu etkiler mi?",
    answer:
      "Bazı bankalar belirli bakiyenin üzerindeki tutara farklı oran uygulayabilir.",
  },
  {
    question: "Net gecelik kazanç nedir?",
    answer:
      "Brüt gecelik faizden stopaj kesildikten sonra kalan tahmini kazançtır.",
  },
  {
    question: "Efektif yıllık getiri neyi gösterir?",
    answer:
      "Gecelik yenilemenin bir yıl boyunca aynı koşullarla sürmesi halinde oluşabilecek yaklaşık bileşik getiriyi gösterir.",
  },
  {
    question: "Gecelik faiz likit hesapla aynı mıdır?",
    answer:
      "Her zaman değil. Likit hesapların para çekme, alt limit ve faiz işleyişi farklı olabilir.",
  },
  {
    question: "Gece sayısı arttıkça getiri artar mı?",
    answer:
      "Faiz oranı ve diğer koşullar sabitse toplam getiri genellikle artar.",
  },
  {
    question: "Negatif oran girilebilir mi?",
    answer:
      "Hayır. Araç negatif faiz ve stopaj oranlarını geçerli kabul etmez.",
  },
  {
    question: "Hesaplanan tutar kesin midir?",
    answer:
      "Hayır. Sonuç tahminidir; bankanın valör, yuvarlama, oran ve vergi uygulaması nihai sonucu belirler.",
  },
  {
    question: "Gecelik faiz hesabı kimler için uygundur?",
    answer:
      "Kısa süreli bekleyen nakdin tahmini günlük getirisini görmek isteyen kullanıcılar için faydalıdır.",
  },
];

export default function GecelikFaizHesaplamaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            { label: "Hesaplamalar", href: "/hesaplamalar" },
            { label: calculator.title },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            {calculator.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            {calculator.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {calculator.description}
          </p>

          <ShareButtons
            title={`${calculator.title} | HesapRehberi`}
            description={calculator.description}
          />
        </div>

        <OvernightInterestCalculator />

        <nav
          aria-label="İçindekiler"
          className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-900">İçindekiler</h2>

          <ol className="mt-6 grid gap-3 md:grid-cols-2">
            {tableOfContents.map(([href, label], index) => (
              <li key={href}>
                <a
                  href={`#${href}`}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-sm text-indigo-700">
                    {index + 1}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section
          id="gecelik-faiz-nedir"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Gecelik Faiz Nedir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Gecelik faiz, birikimin çok kısa vadeli dönemlerde faiz kazanmasını
            ifade eder. Bu tür ürünlerde para genellikle bir gece veya günlük
            yenileme döngüsü boyunca değerlendirilir. Kullanıcı açısından temel
            amaç, kısa süreli bekleyen nakdin boşta kalmamasıdır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Gecelik ürünler günlük faizle benzer görünse de yenileme saati,
            valör, alt bakiye, üst limit ve hafta sonu işleyişi gibi ayrıntılar
            gerçek kazancı etkileyebilir.
          </p>

          <div className="mt-8 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <h3 className="text-xl font-bold text-indigo-950">
              Temel mantık
            </h3>
            <p className="mt-3 leading-7 text-indigo-900">
              Yıllık faiz oranı günlük orana çevrilir, ana para ve faiz işleyen
              gece sayısı üzerinden brüt kazanç bulunur, ardından varsa stopaj
              düşülerek net getiri hesaplanır.
            </p>
          </div>
        </section>

        <section
          id="nasil-hesaplanir"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Gecelik Faiz Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Basit yöntemde ana para, yıllık faiz oranı, gece sayısı ve seçilen
            gün sayım esası kullanılır. Her gece yenilenen yöntemde ise bir
            gecede oluşan faiz teorik olarak bakiyeye eklenir ve sonraki gecede
            yeni toplam üzerinden yeniden hesaplanır.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Basit gecelik faiz formülü
            </h3>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                <strong>Gecelik oran:</strong> Yıllık faiz oranı / 360 veya 365
              </p>
              <p>
                <strong>Brüt faiz:</strong> Ana para × gecelik oran × gece sayısı
              </p>
              <p>
                <strong>Stopaj:</strong> Brüt faiz × stopaj oranı
              </p>
              <p>
                <strong>Net faiz:</strong> Brüt faiz − stopaj
              </p>
            </div>
          </div>
        </section>

        <section
          id="basit-ve-yenilenen"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Basit ve Her Gece Yenilenen Faiz Farkı
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Basit gecelik faiz
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Her gecenin kazancı başlangıç ana parası üzerinden hesaplanır.
                Faiz kazancı sonraki gecenin hesabına eklenmez.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Her gece yenilenen faiz
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Önceki gece oluşan faiz teorik olarak bakiyeye eklenir ve yeni
                gecenin getirisi büyüyen toplam üzerinden hesaplanır.
              </p>
            </article>
          </div>
        </section>

        <section
          id="360-365"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            360 Gün ve 365 Gün Esası
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Yıllık faiz oranının günlük orana çevrilmesinde kullanılan gün
            sayım esası sonucu etkiler. Aynı yıllık oran 360 güne bölündüğünde
            365 güne göre biraz daha yüksek gecelik oran ortaya çıkar.
          </p>
        </section>

        <section
          id="stopaj"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Stopaj ve Net Getiri
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Brüt faiz, vergi kesintisi öncesindeki kazançtır. Stopaj
            uygulandığında net faiz daha düşük çıkar. Ürünleri karşılaştırırken
            yalnızca yıllık oranı değil, kesinti sonrası net getiriyi ve alt
            bakiye şartlarını birlikte değerlendirmek gerekir.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-xl font-bold text-amber-950">
              Güncel stopaj oranını kontrol edin
            </h3>
            <p className="mt-3 leading-7 text-amber-900">
              Stopaj oranları ürün türüne ve yürürlükteki mevzuata göre
              değişebilir. Hesaplama yaparken bankanızın güncel oranını
              kullanın.
            </p>
          </div>
        </section>

        <section
          id="dikkat-edilecekler"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Gecelik Faizde Dikkat Edilecek Noktalar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Valör ve işlem saati
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Paranın faiz kazanmaya başladığı saat ve gün toplam getiriyi
                doğrudan etkileyebilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Alt ve üst bakiye
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bazı ürünlerde minimum tutar veya faiz işletilmeyen bakiye
                bölümü bulunabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Hafta sonu uygulaması
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Cumartesi, pazar ve resmî tatillerdeki faiz işleyişi ürün
                koşullarına göre değişebilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Yenilenen faiz oranı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Her yenilemede aynı faiz oranının uygulanacağı varsayılmamalıdır.
              </p>
            </article>
          </div>
        </section>

        <section
          id="ornekler"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek Gecelik Faiz Senaryoları
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Ana para
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Yıllık faiz
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Gece
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Gün esası
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Amaç
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-slate-700">25.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%38</td>
                  <td className="px-5 py-4 text-slate-700">1</td>
                  <td className="px-5 py-4 text-slate-700">365</td>
                  <td className="px-5 py-4 text-slate-700">
                    Tek gecelik tahmini getiri
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-700">100.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%45</td>
                  <td className="px-5 py-4 text-slate-700">7</td>
                  <td className="px-5 py-4 text-slate-700">365</td>
                  <td className="px-5 py-4 text-slate-700">
                    Haftalık nakit bekletme
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-700">500.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%42</td>
                  <td className="px-5 py-4 text-slate-700">30</td>
                  <td className="px-5 py-4 text-slate-700">360</td>
                  <td className="px-5 py-4 text-slate-700">
                    Yenileme etkisini inceleme
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="sss"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-700 to-slate-900 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Gecelik faiz kazancınızı hesaplayın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
                Ana para, faiz oranı, gece sayısı, gün esası ve stopaj
                değerlerini değiştirerek farklı kısa vadeli senaryoları
                karşılaştırın.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-indigo-800 transition hover:bg-indigo-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}