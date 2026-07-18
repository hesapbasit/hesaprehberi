import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import MaasCalculator from "@/components/calculators/MaasCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath = "/hesaplamalar/maas-hesaplama";

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
    title: "Brüt Maaştan Net Maaş Nasıl Hesaplanır?",
    paragraphs: [
      "Brüt maaştan çalışan SGK payı, işsizlik sigortası, gelir vergisi ve damga vergisi gibi yasal kesintiler düşüldüğünde yaklaşık net maaş bulunur.",
      "Vergi dilimleri, asgari ücret istisnası, teşvikler ve çalışanın kişisel durumu nedeniyle bordrodaki gerçek sonuç farklı olabilir. Bu araç genel bilgi vermek amacıyla yaklaşık hesaplama yapar.",
    ],
    cards: [
      {
        title: "Brüt Maaş",
        description:
          "Vergi ve sigorta kesintileri uygulanmadan önceki toplam maaş tutarıdır.",
      },
      {
        title: "Yasal Kesintiler",
        description:
          "SGK payı, işsizlik sigortası, gelir vergisi ve damga vergisi gibi kesintileri kapsar.",
      },
      {
        title: "Net Maaş",
        description:
          "Yasal kesintiler sonrasında çalışanın eline geçen yaklaşık maaş tutarıdır.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Brüt maaş nedir?",
    answer:
      "Brüt maaş, vergi ve sigorta kesintileri uygulanmadan önceki toplam maaş tutarıdır.",
  },
  {
    question: "Net maaş nedir?",
    answer:
      "Net maaş, yasal kesintiler sonrasında çalışanın eline geçen yaklaşık tutardır.",
  },
  {
    question: "Maaş hesaplama kesin sonuç verir mi?",
    answer:
      "Hayır. Vergi dilimi, asgari ücret istisnası, teşvikler, ek ödemeler ve çalışanın bordro koşulları gerçek sonucu değiştirebilir.",
  },
];

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

export default function MaasHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Önemli Bilgilendirme"
      warningText="Bu hesaplama genel bilgilendirme amacıyla yaklaşık sonuç üretir. Kesin net maaş için işvereninizin hazırladığı resmi bordroyu ve güncel vergi uygulamalarını esas alın."
    >
      <MaasCalculator />
    </CalculatorLayout>
  );
}