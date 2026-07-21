import type { Metadata } from "next";

import CompoundInterestCalculator from "@/components/calculators/CompoundInterestCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/bilesik-faiz-hesaplama";

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
  ["bilesik-faiz-nedir", "Bileşik faiz nedir?"],
  ["nasil-hesaplanir", "Bileşik faiz nasıl hesaplanır?"],
  ["basit-ve-bilesik", "Basit ve bileşik faiz farkı"],
  ["bilesiklesme-sikligi", "Bileşikleşme sıklığı"],
  ["duzenli-katki", "Düzenli katkının etkisi"],
  ["stopaj-ve-net-getiri", "Stopaj ve net getiri"],
  ["reel-getiri", "Enflasyon ve reel getiri"],
  ["ornekler", "Örnek senaryolar"],
  ["sss", "Sık sorulan sorular"],
] as const;

const faqItems = [
  {
    question: "Bileşik faiz nedir?",
    answer:
      "Bileşik faiz, önceki dönemlerde oluşan faiz kazancının ana paraya eklenmesi ve sonraki faiz hesabının büyüyen toplam üzerinden yapılmasıdır.",
  },
  {
    question: "Bileşik faiz nasıl hesaplanır?",
    answer:
      "Ana para, dönemsel faiz oranı ve toplam dönem sayısı kullanılır. Her dönemin sonunda oluşan faiz bir sonraki dönemin hesaplama tabanına eklenir.",
  },
  {
    question: "Basit faiz ile bileşik faiz arasındaki fark nedir?",
    answer:
      "Basit faiz yalnızca başlangıç ana parası üzerinden işler. Bileşik faiz ise önceki faizlerin de yeni faiz üretmesini sağlar.",
  },
  {
    question: "Bileşikleşme sıklığı sonucu etkiler mi?",
    answer:
      "Evet. Aynı nominal yıllık oran altında daha sık bileşikleşme genellikle daha yüksek efektif getiri oluşturur.",
  },
  {
    question: "Aylık bileşik faiz ne demektir?",
    answer:
      "Faizin her ay sonunda birikime eklenmesi ve sonraki ayın faizinin yeni toplam üzerinden hesaplanmasıdır.",
  },
  {
    question: "Günlük bileşik faiz daha mı avantajlıdır?",
    answer:
      "Aynı yıllık nominal oran ve diğer koşullar sabitse daha sık bileşikleşme teorik olarak getiriyi artırabilir.",
  },
  {
    question: "Düzenli aylık katkı nasıl hesaplanır?",
    answer:
      "Araç, seçilen katkı zamanına göre her ay katkıyı bakiyeye ekler ve kalan dönemlerde faiz etkisini uygular.",
  },
  {
    question: "Ay başında katkı ile ay sonunda katkı farkı nedir?",
    answer:
      "Ay başında yatırılan katkı o ayın tamamında faiz kazanabildiği için genellikle biraz daha yüksek sonuç üretir.",
  },
  {
    question: "Stopaj bileşik faizi nasıl etkiler?",
    answer:
      "Stopaj, brüt faiz kazancı üzerinden kesinti oluşturarak net getiriyi ve vade sonu net tutarı azaltır.",
  },
  {
    question: "Efektif yıllık getiri nedir?",
    answer:
      "Nominal faiz oranının bileşikleşme sıklığı dikkate alınarak yıllık gerçek karşılığını yaklaşık olarak gösterir.",
  },
  {
    question: "Reel getiri nedir?",
    answer:
      "Net getirinin enflasyon etkisinden arındırılmış halidir ve satın alma gücündeki yaklaşık değişimi gösterir.",
  },
  {
    question: "Enflasyondan arındırılmış değer neyi gösterir?",
    answer:
      "Gelecekteki toplam birikimin bugünkü satın alma gücüne yaklaşık olarak dönüştürülmüş karşılığıdır.",
  },
  {
    question: "Faizin faize etkisi nasıl bulunur?",
    answer:
      "Bileşik faiz sonucu ile aynı ana para ve süre için hesaplanan basit faiz karşılaştırılarak yaklaşık fark bulunabilir.",
  },
  {
    question: "Bileşik faiz hesabında vade önemli midir?",
    answer:
      "Evet. Süre uzadıkça faizin faize etkisi daha görünür hale gelir ve büyüme hızlanabilir.",
  },
  {
    question: "Aylık katkı olmadan hesaplama yapılabilir mi?",
    answer:
      "Evet. Aylık düzenli katkı alanına sıfır girerek yalnızca başlangıç ana parasının büyümesini inceleyebilirsiniz.",
  },
  {
    question: "Başlangıç ana parası olmadan hesaplama yapılabilir mi?",
    answer:
      "Bu araç başlangıç ana parasının sıfırdan büyük olmasını bekler. Düzenli birikim için düşük bir başlangıç tutarı girilebilir.",
  },
  {
    question: "Negatif faiz oranı girilebilir mi?",
    answer:
      "Hayır. Araç negatif faiz, stopaj veya enflasyon oranlarını geçerli kabul etmez.",
  },
  {
    question: "Nominal faiz ile efektif faiz aynı mıdır?",
    answer:
      "Hayır. Nominal faiz ilan edilen yıllık orandır; efektif faiz bileşikleşme sıklığının etkisini de içerir.",
  },
  {
    question: "Hesaplanan sonuç banka teklifiyle aynı olur mu?",
    answer:
      "Her zaman değil. Valör, ürün şartları, vergi uygulaması, faiz tahakkuk yöntemi ve yuvarlama farklılık yaratabilir.",
  },
  {
    question: "Bileşik faiz uzun vadede neden güçlüdür?",
    answer:
      "Kazançların yeniden getiri üretmesi nedeniyle büyüme doğrusal değil giderek hızlanan bir yapıya dönüşebilir.",
  },
];

export default function BilesikFaizHesaplamaPage() {
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
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
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

        <CompoundInterestCalculator />

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
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-800"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm text-violet-700">
                    {index + 1}
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section
          id="bilesik-faiz-nedir"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Bileşik Faiz Nedir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Bileşik faiz, bir yatırımın yalnızca başlangıç ana parası üzerinden
            değil, önceki dönemlerde oluşan faiz kazançları üzerinden de getiri
            üretmesi anlamına gelir. Bu nedenle bileşik faiz hesabında büyüme
            doğrusal değil, dönemler ilerledikçe hızlanan bir yapı sergiler.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Örneğin birikiminize her ay faiz ekleniyorsa, ikinci ayın faizi
            yalnızca ilk yatırdığınız para üzerinden değil, ilk ay sonunda
            oluşan toplam bakiye üzerinden hesaplanır. Düzenli katkılar da bu
            sisteme dahil edildiğinde uzun vadeli birikim potansiyeli daha
            belirgin hale gelir.
          </p>

          <div className="mt-8 rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <h3 className="text-xl font-bold text-violet-950">
              Bileşik büyümenin temel mantığı
            </h3>
            <p className="mt-3 leading-7 text-violet-900">
              Faiz kazancı ana paraya eklenir, yeni dönem faizi büyüyen bakiye
              üzerinden hesaplanır ve bu döngü her bileşikleşme döneminde
              tekrarlanır.
            </p>
          </div>
        </section>

        <section
          id="nasil-hesaplanir"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Bileşik Faiz Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Temel bileşik faiz hesabında başlangıç ana parası, yıllık nominal
            faiz oranı, bir yıldaki bileşikleşme sayısı ve toplam süre
            kullanılır. Bileşikleşme sıklığı arttıkça her döneme düşen oran
            azalır; fakat faiz daha sık ana paraya eklenir.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Ana para
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bileşik büyümenin başladığı ilk yatırım tutarıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Nominal yıllık oran
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bileşikleşme sıklığı uygulanmadan önce belirtilen yıllık faiz
                oranıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Bileşikleşme sayısı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faizin yılda kaç kez bakiyeye eklendiğini ifade eder.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam süre
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Birikimin faiz üretmeye devam ettiği toplam yatırım dönemidir.
              </p>
            </article>
          </div>
        </section>

        <section
          id="basit-ve-bilesik"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Basit Faiz ve Bileşik Faiz Arasındaki Fark
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Özellik
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Basit faiz
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Bileşik faiz
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    Hesaplama tabanı
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Başlangıç ana parası
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Ana para ve birikmiş faiz
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    Büyüme şekli
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Doğrusal
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Hızlanan
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-4 font-semibold text-slate-900">
                    Uzun vadeli etki
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Daha sınırlı
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    Daha belirgin
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section
          id="bilesiklesme-sikligi"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Bileşikleşme Sıklığı Neden Önemlidir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Faizin yıllık, altı aylık, üç aylık, aylık veya günlük eklenmesi
            efektif yıllık getiriyi değiştirir. Aynı nominal faiz oranında faiz
            daha sık bakiyeye eklendiğinde teorik olarak daha yüksek bir sonuç
            oluşur.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Yıllık</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faiz yılda bir kez birikime eklenir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Aylık</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faiz yılda on iki kez bakiyeye yansıtılır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="font-bold text-slate-900">Günlük</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faiz etkisi her gün teorik olarak yeniden hesaplanır.
              </p>
            </article>
          </div>
        </section>

        <section
          id="duzenli-katki"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Düzenli Katkı Bileşik Büyümeyi Nasıl Etkiler?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Her ay yapılan düzenli katkılar, yalnızca yatırılan toplam tutarı
            artırmaz; erken yatırılan katkıların daha uzun süre faiz üretmesini
            de sağlar. Bu nedenle katkı zamanı uzun vadeli sonuç üzerinde
            belirgin olabilir.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-emerald-950">
              Ay başı katkının avantajı
            </h3>
            <p className="mt-3 leading-7 text-emerald-900">
              Ay başında yatırılan tutar aynı ay içinde faiz kazanabildiğinden,
              ay sonu katkıya göre daha yüksek birikim oluşturabilir.
            </p>
          </div>
        </section>

        <section
          id="stopaj-ve-net-getiri"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Stopaj ve Net Getiri
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Brüt faiz kazancı yatırımın vergi öncesi getirisini gösterir.
            Stopaj, faiz kazancı üzerinden yapılan kesintidir. Bu nedenle ürün
            karşılaştırırken yalnızca ilan edilen brüt oran yerine net faiz
            kazancı ve net vade sonu tutarı dikkate alınmalıdır.
          </p>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h3 className="text-xl font-bold text-amber-950">
              Güncel oranı doğrulayın
            </h3>
            <p className="mt-3 leading-7 text-amber-900">
              Stopaj uygulaması ürün türüne, vadeye ve yürürlükteki mevzuata
              göre değişebileceği için hesaplama öncesinde güncel oranı kontrol
              edin.
            </p>
          </div>
        </section>

        <section
          id="reel-getiri"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Enflasyon ve Reel Getiri
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Nominal olarak büyüyen bir yatırımın satın alma gücü aynı hızda
            artmayabilir. Reel getiri, net faiz kazancını enflasyon etkisiyle
            birlikte değerlendirir. Net faiz oranı enflasyonun altında kalırsa
            birikim nominal olarak artsa bile reel değer kaybı oluşabilir.
          </p>
        </section>

        <section
          id="ornekler"
          className="mt-10 scroll-mt-24 rounded-3xl bg-white p-8 shadow-sm md:p-10"
        >
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek Bileşik Faiz Senaryoları
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Ana para
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Aylık katkı
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Yıllık faiz
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Süre
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Bileşikleşme
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-slate-700">50.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">2.500 TL</td>
                  <td className="px-5 py-4 text-slate-700">%35</td>
                  <td className="px-5 py-4 text-slate-700">3 yıl</td>
                  <td className="px-5 py-4 text-slate-700">Aylık</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-700">100.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">5.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%45</td>
                  <td className="px-5 py-4 text-slate-700">5 yıl</td>
                  <td className="px-5 py-4 text-slate-700">Aylık</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-slate-700">250.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">10.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%40</td>
                  <td className="px-5 py-4 text-slate-700">10 yıl</td>
                  <td className="px-5 py-4 text-slate-700">Günlük</td>
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

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-violet-700 to-indigo-800 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Birikiminizin bileşik büyümesini hesaplayın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-violet-100">
                Faiz oranı, süre, düzenli katkı, stopaj ve enflasyon değerlerini
                değiştirerek farklı uzun vadeli senaryoları karşılaştırın.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-violet-800 transition hover:bg-violet-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}