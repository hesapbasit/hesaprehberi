import type { Metadata } from "next";

import TradesmanLoanCalculator from "@/components/calculators/TradesmanLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/esnaf-kredisi-hesaplama";

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
    question: "Esnaf kredisi taksiti nasıl hesaplanır?",
    answer:
      "Kullanılacak kredi tutarı, aylık faiz oranı, vade ve seçilen ödeme sıklığı eşit ödeme formülünde kullanılarak tahmini taksit bulunur.",
  },
  {
    question: "Öz kaynak kredi tutarını nasıl etkiler?",
    answer:
      "Öz kaynak arttıkça ihtiyaç duyulan kredi tutarı ve buna bağlı toplam finansman maliyeti azalır.",
  },
  {
    question: "Aylık yerine üç ayda bir ödeme hesaplanabilir mi?",
    answer:
      "Evet. Araç aylık, üç ayda bir ve altı ayda bir ödeme seçeneklerini destekler.",
  },
  {
    question: "Komisyon toplam geri ödemeye dahil mi?",
    answer:
      "Evet. Girilen komisyon oranı kredi tutarı üzerinden hesaplanır ve toplam geri ödemeye eklenir.",
  },
  {
    question: "Dosya masrafı nasıl eklenir?",
    answer:
      "Tahsis, ekspertiz veya işlem gideri gibi sabit masrafları ilgili alana toplam tutar olarak girebilirsiniz.",
  },
  {
    question: "Vergi ve fon oranı neden manuel giriliyor?",
    answer:
      "Uygulanacak oran kredi ürününe ve güncel koşullara göre değişebileceğinden kullanıcı tarafından manuel girilir.",
  },
  {
    question: "Faiz oranı aylık mı girilmelidir?",
    answer:
      "Evet. Bu hesaplayıcı aylık faiz oranını kullanır.",
  },
  {
    question: "Ödeme sıklığı toplam maliyeti etkiler mi?",
    answer:
      "Evet. Ödemeler arasındaki süre uzadığında faiz birikimi değişebileceği için toplam maliyet de değişebilir.",
  },
  {
    question: "Toplam finansman maliyeti nedir?",
    answer:
      "Toplam faiz, ek vergi veya fon, komisyon ve sabit masrafların toplamını ifade eder.",
  },
  {
    question: "Maliyet oranı neyi gösterir?",
    answer:
      "Toplam finansman maliyetinin kullanılan kredi tutarına oranını yaklaşık olarak gösterir.",
  },
  {
    question: "Vadeyi uzatmak avantajlı mıdır?",
    answer:
      "Vade uzadığında dönemsel ödeme düşebilir ancak toplam faiz ve geri ödeme artabilir.",
  },
  {
    question: "Kısa vadeli kredi her zaman daha mı ucuzdur?",
    answer:
      "Genellikle toplam faiz daha düşük olabilir; ancak dönemsel ödeme yükseldiği için işletme nakit akışı ayrıca değerlendirilmelidir.",
  },
  {
    question: "Esnaf kredisi ile ticari kredi aynı mıdır?",
    answer:
      "Ürün koşulları bankaya göre farklılaşabilir. Esnaf kredileri çoğunlukla küçük işletmelerin ihtiyaçlarına göre yapılandırılır.",
  },
  {
    question: "Destekli kredi programları bu araçla hesaplanabilir mi?",
    answer:
      "Programdaki faiz, vade ve masraf değerlerini biliyorsanız yaklaşık karşılaştırma yapabilirsiniz.",
  },
  {
    question: "Sonuç bankanın kesin ödeme planı mıdır?",
    answer:
      "Hayır. Hesaplama tahminidir. Kesin sonuç bankanın resmi teklif ve ödeme planına göre belirlenir.",
  },
];

export default function EsnafKredisiHesaplamaPage() {
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
          <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
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

        <TradesmanLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Esnaf Kredisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Esnaf kredisi hesabında işletmenin toplam finansman ihtiyacından öz
            kaynak düşülerek kullanılacak kredi tutarı belirlenir. Bu tutar,
            aylık faiz oranı, vade ve ödeme sıklığıyla birlikte ödeme planına
            dönüştürülür.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Komisyon, sabit işlem masrafları ve faiz üzerinden uygulanabilecek
            ek vergi veya fonlar toplam maliyete dahil edildiğinde işletmenin
            karşılaşabileceği nakit çıkışı daha kapsamlı biçimde görülebilir.
          </p>

          <div className="mt-8 rounded-2xl border border-orange-100 bg-orange-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Hesaplamada kullanılan temel kalemler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>İşletme ihtiyacı:</strong> Stok, ekipman, tadilat veya
                işletme sermayesi için gereken toplam tutardır.
              </li>
              <li>
                <strong>Öz kaynak:</strong> Esnafın kendi imkanlarıyla
                karşılayacağı bölümdür.
              </li>
              <li>
                <strong>Ödeme sıklığı:</strong> Taksitlerin aylık, üç aylık veya
                altı aylık dönemlerle ödenmesini ifade eder.
              </li>
              <li>
                <strong>Komisyon ve masraflar:</strong> Faiz dışındaki ek
                finansman giderleridir.
              </li>
              <li>
                <strong>Toplam geri ödeme:</strong> Taksitler ve tüm ek
                masrafların toplamıdır.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Ödeme Sıklığı Nasıl Seçilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Aylık ödeme
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Düzenli aylık ciro üreten işletmeler için nakit akışını daha
                dengeli dağıtabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Üç ayda bir ödeme
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Geliri dönemsel oluşan işletmelerde tahsilat döngüsüyle daha
                uyumlu olabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Altı ayda bir ödeme
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Sezonluk gelir elde eden işletmeler için değerlendirilebilir;
                ancak dönemsel ödeme tutarı yükselir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Esnaf Kredisi Kullanırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Nakit akışı uyumu
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Ödeme tarihleri, işletmenin satış ve tahsilat döngüsüyle uyumlu
                planlanmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam maliyet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yalnızca faiz oranı değil; komisyon, sigorta ve diğer işlem
                giderleri de karşılaştırılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Borç ödeme kapasitesi
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Taksitlerin düşük satış dönemlerinde de karşılanabilir olması
                finansal dayanıklılık açısından önemlidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Teminat ve kefalet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Teminat koşulları ve olası sorumluluklar sözleşme öncesinde
                dikkatle incelenmelidir.
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

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-amber-600 to-orange-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                İşletmenize uygun ödeme planını karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-amber-100">
                Aylık, üç aylık ve altı aylık ödeme seçeneklerini farklı faiz ve
                vade değerleriyle inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}