import {
  Activity,
  Droplets,
  Flame,
  HeartPulse,
  Scale,
} from "lucide-react";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
  type CalculatorRelatedItem,
} from "@/components/calculators/CalculatorLayout";
import PregnancyCalculator from "@/components/calculators/PregnancyCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gebelik-hesaplama";

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

export const metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Gebelik hesaplama nasıl yapılır?",
    answer:
      "Gebelik hesaplaması genellikle son adet tarihinin ilk günü esas alınarak yapılır. Bu tarihe yaklaşık 280 gün eklenerek tahmini doğum tarihi belirlenir.",
  },
  {
    question: "Gebelik haftası neye göre hesaplanır?",
    answer:
      "Gebelik haftası, son adet tarihinin ilk gününden bugüne kadar geçen süreye göre hesaplanır. Bu yöntem döllenme tarihinden yaklaşık iki hafta öncesini başlangıç kabul eder.",
  },
  {
    question: "Tahmini doğum tarihi kesin midir?",
    answer:
      "Hayır. Tahmini doğum tarihi yaklaşık bir sonuçtur. Doğum bu tarihten önce veya sonra gerçekleşebilir. Daha doğru değerlendirme için doktor muayenesi ve ultrason sonuçları dikkate alınmalıdır.",
  },
  {
    question: "Adet döngüsü 28 günden farklıysa hesaplama değişir mi?",
    answer:
      "Evet. Adet döngüsü 28 günden uzun veya kısa olduğunda tahmini doğum tarihi birkaç gün ileri ya da geri kayabilir.",
  },
  {
    question: "Trimester dönemleri nasıl ayrılır?",
    answer:
      "Gebelik genel olarak üç döneme ayrılır. Birinci trimester 1 ile 13. haftalar, ikinci trimester 14 ile 27. haftalar ve üçüncü trimester 28. haftadan doğuma kadar olan dönemdir.",
  },
];

const contentSections: CalculatorContentSection[] = [
  {
    title: "Gebelik Hesaplama Nasıl Yapılır?",
    paragraphs: [
      "Gebelik hesaplamasında genellikle son adet tarihinin ilk günü başlangıç kabul edilir. Standart gebelik süresi yaklaşık 40 hafta, yani 280 gündür. Ortalama adet döngünüz 28 günden farklıysa tahmini doğum tarihi döngü uzunluğunuza göre birkaç gün ileri veya geri ayarlanabilir.",
    ],
    cards: [
      {
        title: "Gebelik Haftası",
        description:
          "Son adet tarihinden bugüne kadar geçen süreye göre kaç hafta ve kaç günlük gebe olduğunuz hesaplanır.",
      },
      {
        title: "Tahmini Doğum Tarihi",
        description:
          "Son adet tarihine ve adet döngüsü uzunluğuna göre bebeğin tahmini doğum tarihi belirlenir.",
      },
      {
        title: "Trimester Bilgisi",
        description:
          "Bulunduğunuz gebelik haftasına göre birinci, ikinci veya üçüncü trimester dönemi gösterilir.",
      },
    ],
  },
  {
    title: "Kullanılan Hesaplama Yöntemi",
    paragraphs: [
      "Tahmini doğum tarihi hesaplanırken son adet tarihinin ilk gününe yaklaşık 280 gün eklenir. Bu yöntem, standart gebelik süresini temel alır.",
      "Adet döngüsü 28 günden farklıysa, 28 gün ile gerçek döngü uzunluğu arasındaki fark tahmini doğum tarihine eklenir veya tarihten çıkarılır.",
    ],
    formula:
      "Tahmini doğum tarihi = Son adet tarihinin ilk günü + 280 gün",
  },
  {
    title: "Örnek Gebelik Hesaplaması",
    paragraphs: [
      "Son adet tarihinin ilk günü 1 Ocak olan ve ortalama adet döngüsü 28 gün süren bir kişi için tahmini doğum tarihi yaklaşık 8 Ekim olarak hesaplanır. Bu tarih yalnızca tahminidir ve gerçek doğum tarihi farklı olabilir.",
    ],
  },
];

const relatedCalculations: CalculatorRelatedItem[] = [
  {
    title: "VKİ Hesaplama",
    description:
      "Boy ve kilo bilgilerinize göre vücut kitle indeksinizi hesaplayın.",
    href: "/hesaplamalar/vki-hesaplama",
    icon: Activity,
  },
  {
    title: "İdeal Kilo Hesaplama",
    description:
      "Boyunuza ve cinsiyetinize göre tahmini ideal kilo aralığınızı öğrenin.",
    href: "/hesaplamalar/ideal-kilo-hesaplama",
    icon: Scale,
  },
  {
    title: "Vücut Yağ Oranı Hesaplama",
    description:
      "Vücut ölçülerinize göre tahmini yağ oranınızı hesaplayın.",
    href: "/hesaplamalar/vucut-yag-orani-hesaplama",
    icon: HeartPulse,
  },
  {
    title: "Günlük Su İhtiyacı Hesaplama",
    description:
      "Kilonuz ve aktivite seviyenize göre günlük su ihtiyacınızı hesaplayın.",
    href: "/hesaplamalar/su-ihtiyaci-hesaplama",
    icon: Droplets,
  },
  {
    title: "Günlük Kalori İhtiyacı Hesaplama",
    description:
      "Yaş, boy, kilo ve aktivite bilgilerinize göre kalori ihtiyacınızı öğrenin.",
    href: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
    icon: Flame,
  },
];

export default function PregnancyCalculationPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-pink-100 text-pink-700"
      contentSections={contentSections}
      faqItems={faqItems}
      relatedCalculations={relatedCalculations}
      warningTitle="Önemli Sağlık Bilgilendirmesi"
      warningText="Bu hesaplama yalnızca genel bilgilendirme amacı taşır ve tıbbi tanı veya doktor değerlendirmesi yerine geçmez. Kesin gebelik haftası ve tahmini doğum tarihi; doktor muayenesi, ultrason ölçümleri ve diğer tıbbi değerlendirmeler sonucunda belirlenmelidir."
    >
      <PregnancyCalculator />
    </CalculatorLayout>
  );
}