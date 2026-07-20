import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import BmiCalculator from "@/components/calculators/BmiCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/vki-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `VKİ hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
    title: "VKİ nasıl hesaplanır?",
    paragraphs: [
      "Vücut Kitle İndeksi (VKİ), kilogram cinsinden ağırlığın metre cinsinden boyun karesine bölünmesiyle hesaplanır.",
      "Örneğin 70 kilogram ağırlığında ve 1,75 metre boyunda bir kişinin VKİ değeri yaklaşık 22,9 olur.",
    ],
    formula: "VKİ = Kilo / Boy²",
  },
  {
    title: "VKİ değerleri ne anlama gelir?",
    cards: [
      {
        title: "18,5 altı",
        description: "Genel sınıflandırmada zayıf kabul edilir.",
      },
      {
        title: "18,5 - 24,9",
        description: "Normal kilo aralığı olarak değerlendirilir.",
      },
      {
        title: "25 - 29,9",
        description: "Fazla kilolu olarak değerlendirilir.",
      },
      {
        title: "30 ve üzeri",
        description: "Obez kategorisinde değerlendirilir.",
      },
    ],
  },
  {
    title: "VKİ herkes için aynı sonucu verir mi?",
    paragraphs: [
      "VKİ yetişkinler için genel bir tarama ölçütüdür.",
      "Kas oranı yüksek sporcular, hamileler, çocuklar, yaşlılar ve bazı sağlık durumlarında tek başına yeterli değerlendirme sağlamayabilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "VKİ ile ideal kilo bulunabilir mi?",
    answer:
      "VKİ kullanılarak boya göre yaklaşık normal kilo aralığı hesaplanabilir. Ancak vücut yapısı ve kas oranı gibi faktörler sonucu etkileyebilir.",
  },
  {
    question: "VKİ çocuklarda aynı şekilde hesaplanır mı?",
    answer:
      "Matematiksel işlem aynı olsa da çocuklarda değerlendirme yaş ve cinsiyete göre büyüme eğrileri üzerinden yapılır.",
  },
  {
    question: "Sporcularda VKİ doğru sonuç verir mi?",
    answer:
      "Kas kütlesi yüksek kişilerde VKİ olduğundan yüksek çıkabilir. Bu nedenle vücut yağ oranı gibi ek ölçümler de değerlendirilmelidir.",
  },
  {
    question: "Sonuç tıbbi teşhis sayılır mı?",
    answer:
      "Hayır. Bu hesaplama yalnızca genel bilgilendirme amacı taşır ve tıbbi değerlendirme yerine geçmez.",
  },
  {
    question: "Normal VKİ aralığı nedir?",
    answer:
      "Genel yetişkin sınıflandırmasına göre 18,5 ile 24,9 arasındaki VKİ değeri normal kilo aralığı olarak kabul edilir.",
  },
];

export default function VkiHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu hesaplama yalnızca genel bilgilendirme amacı taşır. VKİ tek başına sağlık durumu hakkında kesin sonuç vermez. Tanı ve tedavi için mutlaka bir sağlık uzmanına danışınız."
    >
      <BmiCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek VKİ hesaplaması
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Boyu <strong>1,75 m</strong>, kilosu <strong>70 kg</strong> olan
          bir kişinin VKİ değeri yaklaşık <strong>22,9</strong> olur ve bu
          değer genel sınıflandırmada normal kilo aralığında yer alır.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Boy</p>
            <p className="mt-2 text-xl font-bold">1,75 m</p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">Kilo</p>
            <p className="mt-2 text-xl font-bold">70 kg</p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm text-slate-500">VKİ</p>
            <p className="mt-2 text-xl font-bold">22,9</p>
          </article>

          <article className="rounded-2xl bg-emerald-600 p-6 text-white">
            <p className="text-sm text-emerald-100">Kategori</p>
            <p className="mt-2 text-xl font-bold">Normal</p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}