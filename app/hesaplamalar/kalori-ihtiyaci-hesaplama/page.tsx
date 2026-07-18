import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/kalori-ihtiyaci-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Kalori ihtiyacı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "Günlük kalori ihtiyacı nasıl hesaplanır?",
    paragraphs: [
      "Günlük kalori ihtiyacı hesaplanırken önce bazal metabolizma hızı belirlenir.",
      "Bazal metabolizma hızı, vücudun dinlenme hâlindeyken solunum, dolaşım ve vücut sıcaklığını koruma gibi temel işlevler için harcadığı yaklaşık enerji miktarıdır.",
      "Daha sonra bazal metabolizma değeri kişinin günlük hareket ve egzersiz düzeyini temsil eden aktivite katsayısıyla çarpılır.",
    ],
    formula:
      "Günlük kalori ihtiyacı = Bazal metabolizma hızı × Aktivite katsayısı",
  },
  {
    title: "Mifflin-St Jeor formülü nedir?",
    paragraphs: [
      "Bu araç günlük kalori ihtiyacını tahmin ederken yaygın olarak kullanılan Mifflin-St Jeor formülünü temel alır.",
      "Formülde yaş, cinsiyet, boy ve kilo bilgileri kullanılarak önce bazal metabolizma hızı hesaplanır.",
      "Hesaplanan bazal metabolizma değeri aktivite seviyesiyle birlikte değerlendirilerek günlük toplam enerji ihtiyacı tahmin edilir.",
    ],
  },
  {
    title: "Aktivite seviyesi sonucu nasıl etkiler?",
    paragraphs: [
      "Gün içinde daha fazla hareket eden veya düzenli egzersiz yapan kişilerin enerji ihtiyacı genellikle daha yüksektir.",
      "Masa başında çalışan ve az hareket eden bir kişiyle haftada birkaç gün yoğun egzersiz yapan bir kişinin günlük kalori ihtiyacı aynı olmayabilir.",
    ],
    cards: [
      {
        title: "Hareketsiz yaşam",
        description:
          "Günlük hareketin ve düzenli egzersizin çok az olduğu yaşam biçimidir.",
      },
      {
        title: "Hafif aktif",
        description:
          "Haftada birkaç gün hafif egzersiz veya düzenli günlük hareket içerir.",
      },
      {
        title: "Orta düzey aktif",
        description:
          "Haftada birkaç gün orta yoğunlukta egzersiz yapan kişileri ifade eder.",
      },
      {
        title: "Çok aktif",
        description:
          "Yoğun egzersiz yapan veya fiziksel olarak hareketli bir işte çalışan kişileri kapsar.",
      },
    ],
  },
  {
    title: "Kalori sonucu nasıl değerlendirilmelidir?",
    paragraphs: [
      "Hesaplama sonucu mevcut kilonuzu korumak için gereken yaklaşık günlük enerji miktarını gösterir.",
      "Gerçek ihtiyaç; kas oranı, vücut yağ oranı, uyku düzeni, hormonlar, sağlık durumu ve egzersiz yoğunluğu gibi birçok etkene göre değişebilir.",
      "Kilo verme veya kilo alma hedeflerinde yalnızca kalori miktarı değil, besinlerin kalitesi ve günlük protein, karbonhidrat, yağ dağılımı da önemlidir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Kalori ihtiyacı her gün aynı mıdır?",
    answer:
      "Hayır. Günlük hareket miktarı, egzersiz süresi ve yoğunluğu nedeniyle kalori ihtiyacı günden güne değişebilir.",
  },
  {
    question: "Kilo vermek için kaç kalori almalıyım?",
    answer:
      "Kilo vermek için genellikle günlük enerji ihtiyacının altında kalori alınması gerekir. Ancak uygun kalori açığı kişiden kişiye değişir ve sağlık uzmanı desteğiyle belirlenmelidir.",
  },
  {
    question: "Günde 500 kalori açık vermek uygun mudur?",
    answer:
      "Yaklaşık 500 kalorilik günlük açık bazı kişilerde kontrollü kilo kaybı için kullanılabilir. Ancak herkes için uygun olmayabilir ve kişisel sağlık durumu dikkate alınmalıdır.",
  },
  {
    question: "Bu hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Hesaplama yaş, boy, kilo, cinsiyet ve aktivite seviyesine dayalı yaklaşık bir tahmin üretir.",
  },
  {
    question: "Bazal metabolizma ile kalori ihtiyacı aynı şey midir?",
    answer:
      "Hayır. Bazal metabolizma vücudun dinlenme hâlindeki temel enerji harcamasıdır. Günlük kalori ihtiyacı ise hareket ve egzersiz de dahil edilerek hesaplanır.",
  },
  {
    question: "Kilo almak için ne kadar kalori almalıyım?",
    answer:
      "Kilo almak için günlük enerji ihtiyacının üzerinde kalori alınması gerekir. Uygun fazlalık, hedefe ve sağlık durumuna göre kişisel olarak belirlenmelidir.",
  },
];

export default function KaloriIhtiyaciHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-orange-100 text-orange-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç yalnızca genel bir kalori tahmini sunar. Sonuçlar tıbbi tanı, tedavi veya kişiye özel beslenme planı yerine geçmez. Kilo verme, kilo alma veya sağlık durumunuza uygun beslenme hedefi için doktor ya da diyetisyene danışmanız önerilir."
    >
      <CalorieCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek günlük kalori değerlendirmesi
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Bazal metabolizma hızı 1.600 kcal olarak hesaplanan orta düzey
          aktif bir kişinin aktivite katsayısı 1,55 kabul edilirse günlük
          tahmini kalori ihtiyacı 2.480 kcal olur.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Bazal metabolizma
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              1.600 kcal
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Aktivite düzeyi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              Orta aktif
            </p>
          </article>

          <article className="rounded-2xl border border-orange-200 bg-orange-50 p-6">
            <p className="text-sm font-medium text-orange-700">
              Aktivite katsayısı
            </p>

            <p className="mt-2 text-xl font-bold text-orange-900">
              1,55
            </p>
          </article>

          <article className="rounded-2xl bg-orange-600 p-6 text-white">
            <p className="text-sm font-medium text-orange-100">
              Günlük ihtiyaç
            </p>

            <p className="mt-2 text-xl font-bold">
              2.480 kcal
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-6">
          <p className="font-semibold leading-7 text-orange-900">
            1.600 × 1,55 = 2.480 kcal
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}