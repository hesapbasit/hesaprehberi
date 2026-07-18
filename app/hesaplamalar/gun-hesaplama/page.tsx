import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import DayCalculator from "@/components/calculators/DayCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath = "/hesaplamalar/gun-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Gün hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "İki tarih arasındaki gün farkı nasıl hesaplanır?",
    paragraphs: [
      "İki tarih arasındaki gün farkı, bitiş tarihinden başlangıç tarihinin çıkarılmasıyla bulunur.",
      "Araç, tarihlerin sırası ters seçilmiş olsa bile negatif sonuç yerine mutlak gün farkını gösterir.",
      "Örneğin 1 Temmuz ile 15 Temmuz arasında 14 günlük fark vardır. Başlangıç ve bitiş günlerinin ikisini de hesaba katmak isterseniz sonuca bir gün eklemeniz gerekir.",
    ],
  },
  {
    title: "Gün farkı ve hafta hesabı",
    paragraphs: [
      "Toplam gün sayısı 7'ye bölünerek tam hafta sayısı hesaplanır.",
      "Bölme işleminden kalan değer ise tam haftalara ek olarak kalan gün sayısını gösterir.",
    ],
    cards: [
      {
        title: "Tam hafta sayısı",
        description:
          "Toplam gün sayısının 7'ye bölümündeki tam sayı kısmıdır.",
      },
      {
        title: "Kalan gün sayısı",
        description:
          "Toplam gün sayısının 7'ye bölümünden kalan değerdir.",
      },
    ],
  },
  {
    title: "Başlangıç ve bitiş günleri hesaba dahil edilir mi?",
    paragraphs: [
      "Standart tarih farkı hesaplamasında iki tarih arasındaki geçen süre bulunur.",
      "Her iki takvim gününün de dahil edilmesi gereken rezervasyon, izin veya çalışma süresi gibi durumlarda hesaplanan sonuca bir gün eklenebilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Başlangıç ve bitiş günleri hesaba dahil mi?",
    answer:
      "Araç iki tarih arasındaki geçen gün farkını hesaplar. Her iki günü de dahil etmek istediğiniz durumlarda sonuca bir gün eklemelisiniz.",
  },
  {
    question: "Tarihleri ters seçersem ne olur?",
    answer:
      "Araç negatif sonuç göstermez. İki tarih arasındaki mutlak gün farkını hesaplar ve tarihlerin sırasını ayrıca belirtir.",
  },
  {
    question: "Artık yıllar dikkate alınıyor mu?",
    answer:
      "Evet. Tarih hesaplama sistemi 29 Şubat bulunan artık yılları otomatik olarak hesaba katar.",
  },
  {
    question: "Saat farkları hesaba katılıyor mu?",
    answer:
      "Hayır. Hesaplama yalnızca seçilen takvim tarihleri üzerinden yapılır ve saat bilgileri dikkate alınmaz.",
  },
  {
    question: "Aynı tarih seçilirse sonuç ne olur?",
    answer:
      "Başlangıç ve bitiş tarihi aynı seçildiğinde iki tarih arasındaki fark sıfır gün olur.",
  },
  {
    question: "Toplam hafta sayısı nasıl bulunur?",
    answer:
      "Toplam gün sayısı 7'ye bölünür. Bölümün tam sayı kısmı tam hafta sayısını, kalan kısmı ise ek gün sayısını verir.",
  },
];

export default function GunHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-indigo-100 text-indigo-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Tarih hesabı hakkında"
      warningText="Bu araç seçilen takvim tarihleri arasındaki yaklaşık gün farkını hesaplar. Çalışma günü, resmî tatil, izin süresi veya hukuki süre hesaplarında ilgili kurumun kuralları ayrıca dikkate alınmalıdır."
    >
      <DayCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek gün hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Başlangıç tarihi 1 Temmuz, bitiş tarihi 15 Temmuz olarak
          seçildiğinde iki tarih arasında 14 gün bulunur. Bu süre tam
          olarak 2 haftaya eşittir.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Başlangıç tarihi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              1 Temmuz
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Bitiş tarihi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              15 Temmuz
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Toplam gün
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              14 gün
            </p>
          </article>

          <article className="rounded-2xl bg-indigo-600 p-6 text-white">
            <p className="text-sm font-medium text-indigo-100">
              Tam hafta
            </p>

            <p className="mt-2 text-xl font-bold">
              2 hafta
            </p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}