import type { Metadata } from "next";

import BmrCalculator from "@/components/calculators/BmrCalculator";
import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/bazal-metabolizma-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Bazal metabolizma hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

const contentSections: CalculatorContentSection[] = [
  {
    title: "Bazal metabolizma hızı nedir?",
    paragraphs: [
      "Bazal metabolizma hızı, vücudun tam dinlenme hâlindeyken temel yaşam işlevlerini sürdürebilmek için harcadığı tahmini enerji miktarıdır.",
      "Solunum, dolaşım, vücut ısısının korunması ve hücresel faaliyetler bu enerji tüketimine dahildir.",
      "BMR değeri günlük toplam kalori ihtiyacının temelini oluşturur ancak tek başına günlük enerji harcamasının tamamını göstermez.",
    ],
  },
  {
    title: "BMR nasıl hesaplanır?",
    paragraphs: [
      "Bu hesaplayıcı Mifflin-St Jeor formülünü kullanır.",
      "Formülde kilo, boy, yaş ve cinsiyet bilgileri dikkate alınır.",
      "Sonuç, vücudun bir gün boyunca tam dinlenme hâlinde yaklaşık kaç kalori harcayacağını gösterir.",
    ],
    cards: [
      {
        title: "Erkekler için",
        description:
          "BMR = 10 × kilo + 6,25 × boy - 5 × yaş + 5",
      },
      {
        title: "Kadınlar için",
        description:
          "BMR = 10 × kilo + 6,25 × boy - 5 × yaş - 161",
      },
    ],
  },
  {
    title: "BMR ile günlük kalori ihtiyacı arasındaki fark",
    paragraphs: [
      "BMR yalnızca dinlenme hâlindeki enerji ihtiyacını ifade eder.",
      "Günlük toplam kalori ihtiyacı ise bazal metabolizma hızına ek olarak günlük hareket, iş, spor ve egzersiz düzeyini de içerir.",
      "Bu nedenle günlük enerji ihtiyacı hesaplanırken BMR değeri uygun aktivite katsayısıyla çarpılır.",
    ],
    formula:
      "Günlük kalori ihtiyacı = BMR × Aktivite katsayısı",
  },
  {
    title: "Bazal metabolizma hızını etkileyen faktörler",
    paragraphs: [
      "Yaş, boy, kilo, cinsiyet ve vücut kompozisyonu bazal metabolizma hızını etkileyebilir.",
      "Kas dokusu yağ dokusuna göre daha fazla enerji tükettiği için kas kütlesi yüksek kişilerde gerçek enerji harcaması daha yüksek olabilir.",
      "Standart formüller kas oranını doğrudan ölçmediğinden sonuç yaklaşık bir tahmindir.",
    ],
    cards: [
      {
        title: "Yaş",
        description:
          "Yaş ilerledikçe metabolizma hızı genellikle azalabilir.",
      },
      {
        title: "Vücut ağırlığı",
        description:
          "Vücut ağırlığı arttıkça temel enerji ihtiyacı da değişebilir.",
      },
      {
        title: "Boy",
        description:
          "Daha büyük vücut yapısı genellikle daha yüksek enerji gerektirir.",
      },
      {
        title: "Kas kütlesi",
        description:
          "Kas oranı yüksek kişiler daha fazla enerji harcayabilir.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "BMR ile kalori ihtiyacı aynı şey midir?",
    answer:
      "Hayır. BMR yalnızca vücudun dinlenme hâlindeki enerji ihtiyacını gösterir. Günlük toplam kalori ihtiyacı aktivite düzeyini de içerir.",
  },
  {
    question: "BMR yaşla birlikte değişir mi?",
    answer:
      "Evet. Yaş, kilo, boy ve vücut kompozisyonu değiştikçe bazal metabolizma hızı da değişebilir.",
  },
  {
    question: "Spor yapanların BMR değeri daha mı yüksektir?",
    answer:
      "Kas kütlesi yüksek kişilerde gerçek enerji ihtiyacı daha yüksek olabilir. Ancak standart BMR formülleri kas oranını doğrudan ölçmez.",
  },
  {
    question: "BMR sonucu kesin midir?",
    answer:
      "Hayır. Sonuç kullanılan formüle ve girilen bilgilere göre üretilen yaklaşık bir değerdir.",
  },
  {
    question: "Kilo verirken BMR kullanılabilir mi?",
    answer:
      "BMR günlük enerji planlamasında başlangıç noktası olarak kullanılabilir ancak sağlıklı kilo verme planı için toplam kalori ihtiyacı ve uzman değerlendirmesi de dikkate alınmalıdır.",
  },
  {
    question: "Bu sonuç tıbbi değerlendirme yerine geçer mi?",
    answer:
      "Hayır. Sonuç yalnızca genel bilgilendirme amacı taşır ve doktor veya diyetisyen değerlendirmesinin yerine geçmez.",
  },
];

export default function BazalMetabolizmaHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-violet-100 text-violet-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu hesaplama yalnızca genel bilgilendirme amacıyla yaklaşık sonuç üretir. Kişisel sağlık durumu, kas oranı, hormon düzeyleri, ilaç kullanımı ve diğer etkenler gerçek enerji ihtiyacını değiştirebilir. Beslenme veya kilo kontrolü planlarında doktor ya da diyetisyen görüşü alınmalıdır."
    >
      <BmrCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek BMR hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          30 yaşında, 180 cm boyunda ve 80 kg ağırlığındaki bir erkek
          için Mifflin-St Jeor formülü kullanıldığında bazal metabolizma
          hızı yaklaşık 1.780 kalori olarak hesaplanır.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Yaş
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              30
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Boy
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              180 cm
            </p>
          </article>

          <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
            <p className="text-sm font-medium text-violet-700">
              Kilo
            </p>

            <p className="mt-2 text-xl font-bold text-violet-900">
              80 kg
            </p>
          </article>

          <article className="rounded-2xl bg-violet-600 p-6 text-white">
            <p className="text-sm font-medium text-violet-100">
              Tahmini BMR
            </p>

            <p className="mt-2 text-xl font-bold">
              1.780 kcal
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50 p-6">
          <p className="font-semibold leading-7 text-violet-900">
            10 × 80 + 6,25 × 180 - 5 × 30 + 5
          </p>

          <p className="mt-2 font-semibold leading-7 text-violet-900">
            800 + 1.125 - 150 + 5 = 1.780 kcal
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}