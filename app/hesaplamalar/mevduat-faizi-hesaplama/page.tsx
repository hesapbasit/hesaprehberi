import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import DepositInterestCalculator from "@/components/calculators/DepositInterestCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/mevduat-faizi-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Mevduat faizi hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
    title: "Mevduat faizi nasıl hesaplanır?",
    paragraphs: [
      "Basit mevduat faizi hesaplanırken ana para, yıllık faiz oranı ve vade süresi dikkate alınır. Günlük vadede yıllık faiz oranı 365 güne bölünür ve vade gün sayısıyla çarpılır.",
      "Hesaplama sırasında faiz oranı yüzde biçiminden ondalık değere çevrilir. Örneğin yıllık yüzde 40 faiz oranı hesaplamada 0,40 olarak kullanılır.",
    ],
    formula:
      "Brüt faiz = Ana para × Yıllık faiz oranı × Vade günü / 365",
  },
  {
    title: "Brüt faiz ve net faiz arasındaki fark",
    paragraphs: [
      "Brüt faiz, stopaj veya başka bir kesinti uygulanmadan önce hesaplanan toplam faiz getirisidir.",
      "Net faiz ise brüt faizden stopaj kesintisi çıkarıldıktan sonra yatırımcının elde ettiği gerçek faiz kazancını ifade eder.",
    ],
    formula:
      "Net faiz = Brüt faiz - Stopaj kesintisi",
    cards: [
      {
        title: "Brüt faiz",
        description:
          "Ana para, yıllık faiz oranı ve vade süresine göre kesintiler uygulanmadan önce hesaplanan faiz kazancıdır.",
      },
      {
        title: "Stopaj kesintisi",
        description:
          "Brüt faiz getirisi üzerinden ilgili oran kullanılarak hesaplanan vergi kesintisidir.",
      },
      {
        title: "Net faiz",
        description:
          "Brüt faizden stopaj kesintisi çıkarıldıktan sonra yatırımcının elde ettiği faiz kazancıdır.",
      },
    ],
  },
  {
    title: "Vade türü nasıl kullanılır?",
    paragraphs: [
      "Gün seçeneğinde girdiğiniz değer doğrudan vade gün sayısı olarak kullanılır.",
      "Ay seçeneğinde ise hesaplamayı sadeleştirmek amacıyla her ay yaklaşık 30 gün kabul edilir. Kesin sonuç için bankanın kullandığı gün sayısı ve vade başlangıç-bitiş tarihleri dikkate alınmalıdır.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Mevduat faizi günlük mü hesaplanır?",
    answer:
      "Birçok vadeli mevduat hesabında faiz, yıllık faiz oranı üzerinden gün sayısına göre hesaplanır. Bankanın kullandığı yöntem ve gün esası ürüne göre değişebilir.",
  },
  {
    question: "Stopaj oranını nereden öğrenebilirim?",
    answer:
      "Stopaj oranı ürün türüne, para birimine, vade süresine ve yürürlükteki düzenlemelere göre değişebilir. Güncel oranı bankanızdan veya resmî kaynaklardan kontrol etmelisiniz.",
  },
  {
    question: "Ay seçeneğinde neden 30 gün kullanılıyor?",
    answer:
      "Hesaplamayı sadeleştirmek için her ay yaklaşık 30 gün kabul edilir. Bankanın kesin hesaplamasında gerçek takvim günleri veya farklı bir gün esası kullanılabilir.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, herhangi bir vergi kesintisi uygulanmadan önceki kazançtır. Net faiz ise stopaj kesintisi çıkarıldıktan sonra kalan faiz kazancıdır.",
  },
  {
    question: "Vade sonu toplam tutar nasıl bulunur?",
    answer:
      "Vade sonu toplam tutar, ana para ile stopaj sonrasında kalan net faiz kazancının toplanmasıyla bulunur.",
  },
  {
    question: "Sonuç bankanın vereceği tutarla aynı olur mu?",
    answer:
      "Her zaman aynı olmayabilir. Bankanın gün hesabı, faiz tahakkuk yöntemi, stopaj oranı, ürün koşulları ve kampanya şartları sonucu değiştirebilir.",
  },
];

export default function MevduatFaiziHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-blue-100 text-blue-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Önemli mevduat bilgilendirmesi"
      warningText="Bu araç genel bilgilendirme amacıyla yaklaşık sonuç üretir. Bankaların faiz hesaplama yöntemi, gün sayısı, stopaj oranı, vade koşulları ve kampanya şartları farklı olabilir. Finansal karar vermeden önce bankanızın güncel ürün koşullarını ve resmî düzenlemeleri kontrol edin."
    >
      <DepositInterestCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek mevduat faizi hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          100.000 ₺ ana para, yıllık yüzde 40 faiz oranı ve 32 günlük
          vade için brüt faiz yaklaşık 3.506,85 ₺ olur. Stopaj oranı
          yüzde 0 seçilirse net faiz aynı tutarda kalır ve vade sonu
          toplam tutar yaklaşık 103.506,85 ₺ olur.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Ana para
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              100.000 ₺
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Yıllık faiz oranı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              %40
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Vade süresi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              32 gün
            </p>
          </article>

          <article className="rounded-2xl bg-blue-600 p-6 text-white">
            <p className="text-sm font-medium text-blue-100">
              Vade sonu toplam
            </p>

            <p className="mt-2 text-xl font-bold">
              103.506,85 ₺
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="font-semibold leading-7 text-blue-900">
            100.000 × 0,40 × 32 / 365 = yaklaşık 3.506,85 ₺
            brüt faiz
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}