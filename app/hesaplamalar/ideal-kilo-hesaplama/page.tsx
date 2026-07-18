import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import IdealWeightCalculator from "@/components/calculators/IdealWeightCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/ideal-kilo-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `İdeal kilo hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "İdeal kilo nedir?",
    paragraphs: [
      "İdeal kilo, kişinin boyu ve bazı temel fiziksel özellikleri dikkate alınarak tahmin edilen kilo değeridir.",
      "Bu değer herkes için kesin ve değişmez bir hedef değildir. Kas kütlesi, kemik yapısı, yaş, vücut yağ oranı ve genel sağlık durumu ideal kabul edilen kiloyu etkileyebilir.",
      "İdeal kilo hesaplama araçları mevcut durumunuzu genel olarak değerlendirmek için kullanılabilir. Sağlıklı kilo yönetiminde yalnızca tartıdaki sayı değil, vücut kompozisyonu ve yaşam tarzı da önemlidir.",
    ],
  },
  {
    title: "İdeal kilo nasıl hesaplanır?",
    paragraphs: [
      "Bu hesaplama aracında tahmini ideal kilo için Devine formülü kullanılır.",
      "Formülde kişinin boyu ve cinsiyeti dikkate alınır. Beş fit üzerindeki her inç için belirli bir kilo değeri başlangıç değerine eklenir.",
    ],
    cards: [
      {
        title: "Erkekler için",
        description:
          "İlk 5 fit için 50 kg, bunun üzerindeki her inç için yaklaşık 2,3 kg eklenir.",
      },
      {
        title: "Kadınlar için",
        description:
          "İlk 5 fit için 45,5 kg, bunun üzerindeki her inç için yaklaşık 2,3 kg eklenir.",
      },
    ],
  },
  {
    title: "Sağlıklı kilo aralığı nasıl belirlenir?",
    paragraphs: [
      "Sağlıklı kilo aralığı hesaplanırken vücut kitle indeksi değerleri kullanılabilir.",
      "Genel yetişkin değerlendirmesinde 18,5 ile 24,9 arasındaki VKİ değerleri normal kilo aralığı olarak kabul edilir.",
    ],
    formula:
      "Alt sınır = 18,5 × Boy² | Üst sınır = 24,9 × Boy²",
  },
  {
    title: "Hesaplama sonucu nasıl değerlendirilmelidir?",
    paragraphs: [
      "Hesaplanan ideal kilo değerini kesin bir sağlık hedefi yerine genel bir referans olarak değerlendirmek daha doğrudur.",
      "Düzenli spor yapan ve yüksek kas kütlesine sahip bir kişi, hesaplanan değerin üzerinde olmasına rağmen sağlıklı bir vücut kompozisyonuna sahip olabilir.",
      "Kilo verme veya kilo alma hedefiniz varsa hızlı ve kontrolsüz yöntemler yerine sürdürülebilir bir beslenme ve hareket planı uygulanmalıdır.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "İdeal kilo nasıl hesaplanır?",
    answer:
      "İdeal kilo hesaplanırken boy ve cinsiyet gibi bilgiler kullanılabilir. Bu araç tahmini ideal kilo değerini Devine formülüne göre, sağlıklı kilo aralığını ise 18,5 ile 24,9 arasındaki VKİ değerlerine göre hesaplar.",
  },
  {
    question: "İdeal kilo hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Hesaplama sonucu genel bir tahmindir. Kas kütlesi, kemik yapısı, yaş, vücut yağ oranı ve genel sağlık durumu kişiden kişiye değişebilir.",
  },
  {
    question: "Sağlıklı kilo aralığı nedir?",
    answer:
      "Sağlıklı kilo aralığı, kişinin boyuna göre vücut kitle indeksinin yaklaşık 18,5 ile 24,9 arasında olduğu kilo aralığını ifade eder.",
  },
  {
    question: "Kadın ve erkeklerin ideal kilosu farklı mıdır?",
    answer:
      "Bazı ideal kilo formüllerinde kadınlar ve erkekler için farklı başlangıç değerleri kullanılır. Ancak kişisel vücut yapısı sonuç üzerinde önemli bir etkendir.",
  },
  {
    question: "İdeal kiloya ulaşmak için ne yapılmalıdır?",
    answer:
      "Dengeli beslenme, düzenli fiziksel aktivite ve yeterli uyku sağlıklı kilo yönetiminin temel parçalarıdır. Kişiye özel öneriler için doktor veya diyetisyen görüşü alınmalıdır.",
  },
  {
    question: "Devine formülü nedir?",
    answer:
      "Devine formülü, boy ve cinsiyet bilgilerini kullanarak yetişkinler için yaklaşık ideal kilo tahmini oluşturan yöntemlerden biridir.",
  },
];

export default function IdealKiloHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu sayfadaki hesaplama sonuçları yalnızca genel bilgilendirme amaçlıdır. Tıbbi tanı, tedavi veya profesyonel sağlık değerlendirmesi yerine geçmez. Kişisel kilo hedefi belirlemek için doktor veya diyetisyene danışmanız önerilir."
    >
      <IdealWeightCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek ideal kilo değerlendirmesi
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Boyu 175 cm olan bir kişi için hesaplanan tahmini ideal kilo,
          seçilen cinsiyete ve kullanılan formüle göre değişebilir. Aynı boy
          için sağlıklı kilo aralığı ise VKİ alt ve üst sınırları kullanılarak
          yaklaşık olarak hesaplanır.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Örnek boy
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              175 cm
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Alt VKİ sınırı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              18,5
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Üst VKİ sınırı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              24,9
            </p>
          </article>

          <article className="rounded-2xl bg-emerald-600 p-6 text-white">
            <p className="text-sm font-medium text-emerald-100">
              Kullanım amacı
            </p>

            <p className="mt-2 text-xl font-bold">
              Genel referans
            </p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}