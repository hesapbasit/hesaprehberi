import type { Metadata } from "next";

import CreditComparisonCalculator from "@/components/calculators/CreditComparisonCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kredi-karsilastirma";

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
    question: "Kredi teklifleri nasıl karşılaştırılır?",
    answer:
      "Aylık taksit, toplam faiz, komisyon, sigorta, sabit masraflar ve toplam geri ödeme birlikte değerlendirilmelidir.",
  },
  {
    question: "En düşük faizli kredi her zaman en avantajlı mıdır?",
    answer:
      "Hayır. Komisyon, sigorta ve diğer masraflar nedeniyle daha düşük faizli teklifin toplam maliyeti daha yüksek olabilir.",
  },
  {
    question: "Toplam geri ödeme neden önemlidir?",
    answer:
      "Kredi süresince anapara, faiz ve ek masraflar dahil cebinizden çıkacak toplam tutarı gösterir.",
  },
  {
    question: "En düşük taksitli teklif en ucuz teklif midir?",
    answer:
      "Her zaman değildir. Uzun vade aylık taksiti düşürürken toplam faiz maliyetini artırabilir.",
  },
  {
    question: "Komisyon nasıl hesaplanır?",
    answer:
      "Girilen komisyon oranı kredi tutarıyla çarpılarak yaklaşık komisyon tutarı bulunur.",
  },
  {
    question: "Sigorta gideri karşılaştırmaya dahil mi?",
    answer:
      "Evet. Her teklif için ayrı sigorta gideri girilebilir ve toplam maliyete eklenir.",
  },
  {
    question: "Farklı kredi tutarları karşılaştırılabilir mi?",
    answer:
      "Evet; ancak sağlıklı karşılaştırma için teklifler genellikle aynı kredi tutarı ve benzer vadeyle değerlendirilmelidir.",
  },
  {
    question: "Farklı vadeler nasıl yorumlanmalıdır?",
    answer:
      "Kısa vade daha yüksek taksit, uzun vade ise çoğu durumda daha yüksek toplam faiz anlamına gelir.",
  },
  {
    question: "Maliyet oranı nedir?",
    answer:
      "Toplam finansman maliyetinin kredi tutarına oranını yaklaşık olarak gösterir.",
  },
  {
    question: "Kaç kredi teklifi karşılaştırılabilir?",
    answer:
      "Araç aynı anda en az iki, en fazla beş kredi teklifini karşılaştırır.",
  },
  {
    question: "Faiz oranı aylık mı girilmelidir?",
    answer:
      "Evet. Bu araç aylık faiz oranı üzerinden hesaplama yapar.",
  },
  {
    question: "Sabit masraflara neler dahil edilebilir?",
    answer:
      "Tahsis, ekspertiz, işlem veya benzeri tek seferlik giderler toplam tutar halinde girilebilir.",
  },
  {
    question: "En avantajlı teklif nasıl belirlenir?",
    answer:
      "Araç girilen bilgiler içinde toplam geri ödemesi en düşük teklifi otomatik olarak vurgular.",
  },
  {
    question: "Kampanyalı kredi teklifleri karşılaştırılabilir mi?",
    answer:
      "Evet. Kampanyanın faiz, vade ve masraf değerleri biliniyorsa ilgili alanlara girilebilir.",
  },
  {
    question: "Sonuç bankanın kesin teklifi midir?",
    answer:
      "Hayır. Sonuç tahminidir. Kesin ödeme planı ve maliyet bankanın resmi teklifinde yer alır.",
  },
];

export default function KrediKarsilastirmaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6">
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

        <CreditComparisonCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Teklifleri Nasıl Karşılaştırılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Kredi karşılaştırırken yalnızca faiz oranına bakmak yeterli
            değildir. Aylık taksit, toplam faiz, komisyon, sigorta, tahsis
            ücreti ve diğer sabit masraflar toplam geri ödeme üzerinde doğrudan
            etkilidir.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Sağlıklı bir karşılaştırma için kredi tutarlarının aynı, vadelerin
            ise mümkün olduğunca benzer olması önerilir. Böylece teklifler
            arasındaki gerçek maliyet farkı daha açık biçimde görülebilir.
          </p>

          <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Karşılaştırılması gereken temel değerler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Aylık taksit:</strong> Düzenli nakit akışınız üzerindeki
                aylık yükü gösterir.
              </li>
              <li>
                <strong>Toplam faiz:</strong> Vade boyunca ödenecek tahmini faiz
                miktarıdır.
              </li>
              <li>
                <strong>Ek masraflar:</strong> Komisyon, sigorta ve işlem
                giderlerini kapsar.
              </li>
              <li>
                <strong>Toplam finansman maliyeti:</strong> Anapara dışında
                ödenecek tüm tutarların toplamıdır.
              </li>
              <li>
                <strong>Toplam geri ödeme:</strong> Kredinin cebinizden çıkacak
                tahmini toplam tutarıdır.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Düşük Taksit mi, Düşük Toplam Maliyet mi?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Düşük aylık taksit
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Aylık bütçeyi rahatlatabilir ancak vade uzadığında toplam faiz
                ve geri ödeme artabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Düşük toplam maliyet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Genellikle daha kısa vade veya daha düşük ek masrafla elde
                edilir; fakat aylık taksit daha yüksek olabilir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Teklifi Seçerken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Bütçe uyumu
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Taksit tutarı, düzenli gelir ve zorunlu giderler sonrasında
                güvenli biçimde karşılanabilir olmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Ek ücretler
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Sigorta, tahsis ve benzeri ücretlerin zorunlu olup olmadığı
                teklif öncesinde sorulmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Erken ödeme koşulları
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Borcun erken kapatılması halinde uygulanabilecek ücret ve
                indirimler sözleşmeden kontrol edilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Değişken koşullar
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kampanya süresi, müşteri şartları ve ek ürün zorunlulukları
                toplam maliyeti değiştirebilir.
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

                <p className="mt-3 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-700 to-violet-800 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Kredi tekliflerinizi tek tabloda karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-indigo-100">
                Faiz, vade ve masraf değerlerini değiştirerek aylık taksit ile
                toplam maliyet arasındaki farkı inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-indigo-800 transition hover:bg-indigo-50"
            >
              Teklifleri Karşılaştır
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}