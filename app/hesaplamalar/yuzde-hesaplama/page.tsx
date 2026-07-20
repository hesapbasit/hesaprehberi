import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/yuzde-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Yüzde hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
    title: "Yüzde nasıl hesaplanır?",
    paragraphs: [
      "Bir sayının belirli bir yüzdesini bulmak için ana değer, yüzde oranıyla çarpılır ve sonuç 100'e bölünür.",
      "Örneğin 1.000 sayısının yüzde 20'si 200'dür. Bu işlem 1.000 × 20 / 100 formülüyle hesaplanır.",
    ],
    formula:
      "Yüzde değeri = Ana değer × Yüzde oranı / 100",
  },
  {
    title: "Yüzde artışı ve azalışı nasıl hesaplanır?",
    paragraphs: [
      "Yüzde artışında ana değerin belirli bir yüzdesi hesaplanır ve bulunan tutar ana değere eklenir.",
      "Yüzde azalışında ise hesaplanan yüzde tutarı ana değerden çıkarılır.",
    ],
    cards: [
      {
        title: "Yüzde artışı",
        description:
          "Yeni değer = Ana değer × (1 + Yüzde oranı / 100)",
      },
      {
        title: "Yüzde azalışı",
        description:
          "Yeni değer = Ana değer × (1 - Yüzde oranı / 100)",
      },
    ],
  },
  {
    title: "İki sayı arasındaki yüzde değişimi",
    paragraphs: [
      "Başlangıç değeri ile yeni değer arasındaki fark, başlangıç değerine bölünür ve sonuç 100 ile çarpılır.",
      "Örneğin 100'den 125'e çıkan bir değerde yüzde 25 artış vardır. Buna karşılık 125'ten 100'e düşüş yüzde 20 azalıştır. Başlangıç değerleri farklı olduğu için bu oranlar birbirine eşit değildir.",
    ],
    formula:
      "Yüzde değişimi = (Yeni değer - Başlangıç değeri) / Başlangıç değeri × 100",
  },
  {
    title: "Bir sayı diğerinin yüzde kaçı?",
    paragraphs: [
      "Bir değerin başka bir değerin yüzde kaçı olduğunu bulmak için ilk sayı ikinci sayıya bölünür ve sonuç 100 ile çarpılır.",
      "Örneğin 25 sayısının 200 sayısına oranı yüzde 12,5'tir.",
    ],
    formula:
      "Yüzde oranı = İlk sayı / İkinci sayı × 100",
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Bir sayının yüzde 10'u nasıl bulunur?",
    answer:
      "Sayıyı 10 ile çarpıp 100'e bölebilir veya doğrudan 10'a bölebilirsiniz.",
  },
  {
    question: "Yüzde artışı nasıl hesaplanır?",
    answer:
      "Ana değerin yüzde oranına karşılık gelen kısmı hesaplanır ve bulunan tutar ana değere eklenir.",
  },
  {
    question: "Yüzde azalışı nasıl hesaplanır?",
    answer:
      "Ana değerin yüzde oranına karşılık gelen kısmı hesaplanır ve bulunan tutar ana değerden çıkarılır.",
  },
  {
    question:
      "Bir sayının diğerinin yüzde kaçı olduğu nasıl bulunur?",
    answer:
      "İlk sayı ikinci sayıya bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question:
      "Yüzde değişiminde başlangıç değeri sıfır olabilir mi?",
    answer:
      "Hayır. Standart yüzde değişimi formülünde başlangıç değerine bölme işlemi yapıldığı için başlangıç değeri sıfır olduğunda sonuç hesaplanamaz.",
  },
  {
    question:
      "Yüzde 20 artıştan sonra yüzde 20 azalış neden eski değeri vermez?",
    answer:
      "Çünkü artış ve azalış farklı başlangıç değerleri üzerinden hesaplanır. Örneğin 100 sayısı yüzde 20 artınca 120 olur; 120'nin yüzde 20 azalması ise 96 sonucunu verir.",
  },
];

export default function YuzdeHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-violet-100 text-violet-700"
      contentSections={contentSections}
      faqItems={faqItems}
    >
      <PercentageCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek yüzde hesaplamaları
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Bir sayının yüzdesi
            </p>

            <p className="mt-3 font-bold text-slate-900">
              1.000 × %20 = 200
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-medium text-emerald-700">
              Yüzde artışı
            </p>

            <p className="mt-3 font-bold text-emerald-900">
              1.000 + %20 = 1.200
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <p className="text-sm font-medium text-rose-700">
              Yüzde azalışı
            </p>

            <p className="mt-3 font-bold text-rose-900">
              1.000 - %20 = 800
            </p>
          </article>

          <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <p className="text-sm font-medium text-indigo-700">
              Yüzde değişimi
            </p>

            <p className="mt-3 font-bold text-indigo-900">
              100 → 125 = %25 artış
            </p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}