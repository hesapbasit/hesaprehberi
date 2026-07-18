import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import DovizCalculator from "@/components/calculators/DovizCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath = "/hesaplamalar/doviz-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi data/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

const contentSections: CalculatorContentSection[] = [
  {
    title: "Döviz Çevirme Nasıl Yapılır?",
    paragraphs: [
      "Dövizden Türk lirasına çeviri yapılırken döviz miktarı kur ile çarpılır. Türk lirasından dövize çeviride ise Türk lirası tutarı ilgili döviz kuruna bölünür.",
      "Örneğin 1 dolar 40 TL ise 100 doların karşılığı 4.000 TL olur. Bankaların alış ve satış fiyatları arasında fark bulunduğu için gerçek işlem tutarı değişebilir.",
    ],
    cards: [
      {
        title: "Döviz → TL",
        description:
          "Döviz miktarı güncel kur ile çarpılarak Türk lirası karşılığı bulunur.",
      },
      {
        title: "TL → Döviz",
        description:
          "Türk lirası tutarı ilgili döviz kuruna bölünerek döviz miktarı hesaplanır.",
      },
      {
        title: "Kur Farkı",
        description:
          "Bankaların alış ve satış kurları farklı olduğu için gerçek işlem tutarı değişebilir.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Döviz alış ve satış kuru neden farklıdır?",
    answer:
      "Finans kuruluşları dövizi farklı fiyatlardan alıp sattığı için alış ve satış kuru arasında fark bulunur.",
  },
  {
    question: "Bu araç canlı döviz kuru kullanıyor mu?",
    answer:
      "Hayır. Bu hesaplama aracında döviz kuru kullanıcı tarafından girilmektedir.",
  },
  {
    question: "Hesaplama sonucu kesin işlem tutarı mıdır?",
    answer:
      "Hayır. Komisyonlar, alış-satış farkı ve kurumların uyguladığı ücretler gerçek sonucu değiştirebilir.",
  },
];

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

export default function DovizHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Önemli Bilgilendirme"
      warningText="Bu araç yaklaşık hesaplama yapar. Gerçek işlem tutarı bankaların alış-satış kuru, komisyon ve işlem ücretlerine göre değişebilir."
    >
      <DovizCalculator />
    </CalculatorLayout>
  );
}