import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/indirim-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `İndirim hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
    title: "İndirim nasıl hesaplanır?",
    paragraphs: [
      "İndirim tutarını bulmak için ürünün normal fiyatı, indirim oranıyla çarpılır ve sonuç 100'e bölünür.",
      "İndirimli fiyatı bulmak için hesaplanan indirim tutarı ürünün normal fiyatından çıkarılır.",
    ],
    formula:
      "İndirim tutarı = Normal fiyat × İndirim oranı / 100",
  },
  {
    title: "İndirimli fiyat nasıl bulunur?",
    paragraphs: [
      "İndirimli satış fiyatı, ürünün normal fiyatından indirim tutarının çıkarılmasıyla hesaplanır.",
      "Aynı işlem normal fiyatın, indirim oranı çıkarıldıktan sonra kalan yüzdeyle çarpılmasıyla da yapılabilir.",
    ],
    formula:
      "İndirimli fiyat = Normal fiyat - İndirim tutarı",
  },
  {
    title: "İndirim oranları nasıl değerlendirilir?",
    paragraphs: [
      "Yüzde 10 indirim, ürün fiyatının onda biri kadar tasarruf edildiği anlamına gelir.",
      "Yüzde 50 indirimde ürünün satış fiyatı normal fiyatın yarısına düşer.",
      "Yüzde 100 indirim uygulandığında hesaplanan satış fiyatı sıfır olur.",
    ],
    cards: [
      {
        title: "%10 indirim",
        description:
          "Normal fiyatın yüzde 10'u kadar indirim uygulanır.",
      },
      {
        title: "%25 indirim",
        description:
          "Normal fiyatın dörtte biri kadar tasarruf sağlanır.",
      },
      {
        title: "%50 indirim",
        description:
          "Ürünün hesaplanan satış fiyatı normal fiyatın yarısı olur.",
      },
      {
        title: "%100 indirim",
        description:
          "Ürünün hesaplanan satış fiyatı sıfır olur.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Yüzde 10 indirim nasıl hesaplanır?",
    answer:
      "Ürün fiyatını 10 ile çarpıp 100'e bölebilir veya fiyatı doğrudan 10'a bölebilirsiniz. Bulduğunuz tutar indirim miktarıdır.",
  },
  {
    question: "Yüzde 50 indirim ne anlama gelir?",
    answer:
      "Ürünün normal fiyatının yarısı kadar indirim uygulanması anlamına gelir. Örneğin 1.000 ₺ fiyatlı ürün yüzde 50 indirimle 500 ₺ olur.",
  },
  {
    question: "İndirim oranı yüzde 100 olabilir mi?",
    answer:
      "Evet. Yüzde 100 indirim uygulandığında hesaplanan satış fiyatı sıfır olur.",
  },
  {
    question: "İndirim oranı yüzde 100'den büyük olabilir mi?",
    answer:
      "Standart alışveriş indirimlerinde oran genellikle yüzde 0 ile yüzde 100 arasında olmalıdır. Yüzde 100'den büyük oranlar negatif satış fiyatı oluşturacağı için standart indirim hesabına uygun değildir.",
  },
  {
    question: "İndirim tutarı ile indirimli fiyat aynı şey midir?",
    answer:
      "Hayır. İndirim tutarı normal fiyattan düşülen miktardır. İndirimli fiyat ise indirim sonrasında ödenecek kalan tutardır.",
  },
  {
    question: "Arka arkaya iki indirim nasıl hesaplanır?",
    answer:
      "İkinci indirim, ilk indirimden sonra oluşan yeni fiyat üzerinden hesaplanır. Örneğin yüzde 20 ve ardından yüzde 10 indirim toplamda yüzde 30 değil, yüzde 28 indirim oluşturur.",
  },
];

export default function IndirimHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-rose-100 text-rose-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="İndirim sonucu hakkında"
      warningText="Bu araç yalnızca girilen normal fiyat ve indirim oranına göre matematiksel sonuç üretir. Kargo, vergi, kupon, üyelik avantajı, taksit farkı ve mağazaya özel kampanya koşulları hesaplamaya dahil değildir."
    >
      <DiscountCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek indirim hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Normal fiyatı 1.000 ₺ olan bir ürüne yüzde 20 indirim
          uygulandığında indirim tutarı 200 ₺ olur. Ürünün indirimli satış
          fiyatı ise 800 ₺ olarak hesaplanır.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Normal fiyat
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              1.000 ₺
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              İndirim oranı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              %20
            </p>
          </article>

          <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <p className="text-sm font-medium text-rose-700">
              İndirim tutarı
            </p>

            <p className="mt-2 text-xl font-bold text-rose-900">
              200 ₺
            </p>
          </article>

          <article className="rounded-2xl bg-rose-600 p-6 text-white">
            <p className="text-sm font-medium text-rose-100">
              İndirimli fiyat
            </p>

            <p className="mt-2 text-xl font-bold">
              800 ₺
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <p className="font-semibold leading-7 text-rose-900">
            1.000 × 20 / 100 = 200 ₺ indirim tutarı
          </p>

          <p className="mt-2 font-semibold leading-7 text-rose-900">
            1.000 - 200 = 800 ₺ indirimli fiyat
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}