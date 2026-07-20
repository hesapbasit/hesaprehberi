import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import EnflasyonCalculator from "@/components/calculators/EnflasyonCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/enflasyon-hesaplama";

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
    title: "Enflasyon Hesaplama Nasıl Yapılır?",
    paragraphs: [
      "Enflasyon, ürün ve hizmet fiyatlarının genel seviyesindeki artışı ifade eder. Fiyatlar yükseldikçe aynı miktardaki paranın satın alabileceği ürün ve hizmet miktarı azalır.",
      "Örneğin enflasyon oranı %50 olduğunda, bugün 10.000 ₺ karşılığında alınabilen ürünlerin gelecekte yaklaşık 15.000 ₺ tutması beklenir. Gerçek fiyat değişimleri ürün grubuna göre farklılık gösterebilir.",
    ],
    cards: [
      {
        title: "Gelecekteki Değer",
        description:
          "Mevcut tutarın belirlenen enflasyon oranı sonrasındaki yaklaşık karşılığını gösterir.",
      },
      {
        title: "Satın Alma Gücü",
        description:
          "Enflasyon sonrasında aynı para miktarının yaklaşık olarak ne kadar alım gücüne sahip olacağını gösterir.",
      },
      {
        title: "Değer Kaybı",
        description:
          "Enflasyon nedeniyle paranın satın alma gücünde oluşan yaklaşık azalmayı ifade eder.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Enflasyon paranın değerini nasıl etkiler?",
    answer:
      "Enflasyon yükseldikçe fiyatların genel seviyesi artar ve aynı para miktarının satın alma gücü azalır.",
  },
  {
    question: "Hesaplama resmi enflasyon verisini otomatik kullanıyor mu?",
    answer:
      "Hayır. Kullanıcı hesaplamak istediği enflasyon oranını kendisi girer.",
  },
  {
    question: "Enflasyon hesaplama sonuçları kesin midir?",
    answer:
      "Sonuçlar matematiksel olarak yaklaşık değer verir. Ürün ve hizmetlerin gerçek fiyat değişimleri birbirinden farklı olabilir.",
  },
];

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

export default function EnflasyonHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Önemli Bilgilendirme"
      warningText="Bu araç genel bilgilendirme amacıyla yaklaşık sonuç üretir. Gerçek enflasyon etkisi ürün gruplarına, harcama alışkanlıklarına ve kullanılan verilere göre farklılık gösterebilir."
    >
      <EnflasyonCalculator />
    </CalculatorLayout>
  );
}