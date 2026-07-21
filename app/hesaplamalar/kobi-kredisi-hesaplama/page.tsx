import type { Metadata } from "next";

import SmeLoanCalculator from "@/components/calculators/SmeLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kobi-kredisi-hesaplama";

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

const faqItems = [
  {
    question: "KOBİ kredisi taksiti nasıl hesaplanır?",
    answer:
      "Kredi tutarı, aylık faiz oranı, toplam vade ve geri ödemesiz dönem bilgileri kullanılarak tahmini ödeme planı oluşturulur.",
  },
  {
    question: "Geri ödemesiz dönem nasıl çalışır?",
    answer:
      "Bu hesaplama modelinde geri ödemesiz dönemde anapara ödenmez; yalnızca faiz ve varsa faiz kaynaklı ek vergi ödenir.",
  },
  {
    question: "Geri ödemesiz dönem toplam maliyeti artırır mı?",
    answer:
      "Genellikle evet. Anapara azalmadığı için faiz yükü daha uzun süre devam eder.",
  },
  {
    question: "Öz kaynak oranı neden önemlidir?",
    answer:
      "Daha yüksek öz kaynak, ihtiyaç duyulan kredi miktarını ve finansman maliyetini azaltabilir.",
  },
  {
    question: "Komisyon toplam geri ödemeye dahil mi?",
    answer:
      "Evet. Girilen komisyon oranı kredi tutarı üzerinden hesaplanarak toplam geri ödemeye eklenir.",
  },
  {
    question: "Sigorta gideri hesaba eklenebilir mi?",
    answer:
      "Evet. Sigorta gideri ayrı bir alan üzerinden toplam maliyete dahil edilir.",
  },
  {
    question: "Faiz oranı aylık mı girilmelidir?",
    answer:
      "Evet. Araç aylık faiz oranı üzerinden hesaplama yapar.",
  },
  {
    question: "Vergi ve fon oranı neden manuel girilir?",
    answer:
      "Uygulama kredi ürününe ve güncel koşullara göre değişebileceğinden oran kullanıcı tarafından girilir.",
  },
  {
    question: "Toplam finansman maliyeti nedir?",
    answer:
      "Toplam faiz, ek vergi veya fon, komisyon, sigorta ve diğer sabit masrafların toplamıdır.",
  },
  {
    question: "Finansman oranı neyi gösterir?",
    answer:
      "Kullanılacak kredi tutarının toplam yatırım veya ihtiyaç tutarına oranını gösterir.",
  },
  {
    question: "Maliyet oranı nasıl yorumlanır?",
    answer:
      "Toplam finansman maliyetinin kullanılan kredi tutarına göre yaklaşık büyüklüğünü gösterir.",
  },
  {
    question: "Vadeyi uzatmak aylık taksiti düşürür mü?",
    answer:
      "Genellikle düşürür; ancak toplam faiz ve geri ödeme artabilir.",
  },
  {
    question: "KOBİ kredisi ile ticari kredi aynı mıdır?",
    answer:
      "Ürünler benzer amaçlara hizmet edebilir ancak hedef müşteri, teminat, limit ve destek koşulları bankaya göre değişebilir.",
  },
  {
    question: "Destek programları bu araçla hesaplanabilir mi?",
    answer:
      "Programdaki faiz, vade, geri ödemesiz dönem ve masraf değerlerini biliyorsanız yaklaşık senaryo oluşturabilirsiniz.",
  },
  {
    question: "Sonuç bankanın kesin ödeme planı mıdır?",
    answer:
      "Hayır. Sonuç tahminidir. Kesin ödeme planı bankanın resmi teklifinde yer alır.",
  },
];

export default function KobiKredisiHesaplamaPage() {
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
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
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

        <SmeLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            KOBİ Kredisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            KOBİ kredisi hesabında toplam yatırım veya işletme ihtiyacından öz
            kaynak düşülerek kullanılacak kredi tutarı belirlenir. Ardından faiz
            oranı, toplam vade ve geri ödemesiz dönem dikkate alınarak tahmini
            nakit akışı oluşturulur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Geri ödemesiz dönem boyunca yalnızca faiz ödemesi yapılması,
            işletmenin yatırımın ilk aylarında nakit akışını korumasına yardımcı
            olabilir. Bununla birlikte anapara azalmadığı için toplam faiz yükü
            yükselebilir.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Hesaplamaya dahil edilen kalemler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Yatırım tutarı:</strong> Makine, ekipman, stok, iş yeri
                veya işletme sermayesi için gereken toplam tutardır.
              </li>
              <li>
                <strong>Öz kaynak:</strong> KOBİ'nin kendi kaynaklarıyla
                karşılayacağı bölümdür.
              </li>
              <li>
                <strong>Geri ödemesiz dönem:</strong> Anapara ödemesinin
                başlamadığı ilk dönemdir.
              </li>
              <li>
                <strong>Komisyon ve masraflar:</strong> Faiz dışındaki işlem,
                sigorta ve finansman giderleridir.
              </li>
              <li>
                <strong>Toplam geri ödeme:</strong> Tüm dönemsel ödemeler ve ek
                maliyetlerin toplamıdır.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Geri Ödemesiz Dönem Ne Zaman Avantajlı Olabilir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Yeni yatırım
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Makine veya tesis yatırımının gelir üretmeye başlaması zaman
                alıyorsa ilk aylardaki nakit baskısını azaltabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Sezonluk faaliyet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Gelirlerin yılın belirli dönemlerinde yoğunlaştığı işletmelerde
                tahsilat döngüsüyle uyum sağlayabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                İşletme sermayesi
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                İlk dönemde stok ve operasyon giderlerinin finanse edilmesine
                daha fazla kaynak ayrılmasını sağlayabilir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            KOBİ Kredisi Kullanırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Proje nakit akışı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kredinin geri ödeme planı, yatırımın gelir üretme takvimiyle
                birlikte değerlendirilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam maliyet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faiz oranının yanında komisyon, sigorta ve işlem giderleri de
                teklif karşılaştırmasına dahil edilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Teminat yapısı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                İpotek, kefalet ve diğer teminat yükümlülükleri sözleşme
                öncesinde ayrıntılı biçimde incelenmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Borç ödeme kapasitesi
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Taksitlerin düşük satış dönemlerinde dahi karşılanabilir olması
                işletmenin finansal dayanıklılığı için önemlidir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-700 to-teal-800 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                KOBİ finansman senaryolarınızı karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-emerald-100">
                Öz kaynak, geri ödemesiz dönem, vade ve faiz değerlerini
                değiştirerek işletmenize uygun ödeme planını inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-800 transition hover:bg-emerald-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}