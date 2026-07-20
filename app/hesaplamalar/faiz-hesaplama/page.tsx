import type { Metadata } from "next";

import FaizCalculator from "@/components/calculators/FaizCalculator";
import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/faiz-hesaplama";

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
    title: "Faiz Hesaplama Nasıl Yapılır?",
    paragraphs: [
      "Basit faiz hesabında faiz yalnızca başlangıçtaki anapara üzerinden hesaplanır. Bileşik faizde ise her dönemde oluşan faiz anaparaya eklenir ve sonraki dönemlerde yeni toplam üzerinden faiz işler.",
      "Banka ve finans kuruluşlarının uyguladığı stopaj, vergi, vade koşulları ve ürün özellikleri gerçek sonucu değiştirebilir.",
    ],
    cards: [
      {
        title: "Basit Faiz",
        description:
          "Faiz yalnızca başlangıçtaki anapara üzerinden hesaplanır.",
      },
      {
        title: "Bileşik Faiz",
        description:
          "Her dönemde oluşan faiz anaparaya eklenir ve yeni toplam üzerinden tekrar faiz hesaplanır.",
      },
      {
        title: "Gerçek Getiri",
        description:
          "Stopaj, vergi, vade ve finans kuruluşunun koşulları net getiriyi etkileyebilir.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Basit faiz nedir?",
    answer:
      "Basit faiz, faizin yalnızca başlangıç anaparası üzerinden hesaplandığı yöntemdir.",
  },
  {
    question: "Bileşik faiz nedir?",
    answer:
      "Bileşik faiz, önceki dönemlerde oluşan faizin anaparaya eklenerek yeni toplam üzerinden tekrar faiz hesaplanmasıdır.",
  },
  {
    question: "Faiz hesaplama sonuçları kesin midir?",
    answer:
      "Hayır. Stopaj, vergi, vade koşulları, ürün özellikleri ve finans kuruluşlarının politikaları gerçek getiriyi değiştirebilir.",
  },
];

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

export default function FaizHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Önemli Bilgilendirme"
      warningText="Bu araç yalnızca genel bilgilendirme amacıyla yaklaşık sonuç üretir. Yatırım kararı vermeden önce bankanızın güncel oranlarını, stopaj kesintilerini ve ürün koşullarını kontrol edin."
    >
      <FaizCalculator />
    </CalculatorLayout>
  );
}