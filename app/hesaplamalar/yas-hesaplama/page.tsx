import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import AgeCalculator from "@/components/calculators/AgeCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath = "/hesaplamalar/yas-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Yaş hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "Yaş nasıl hesaplanır?",
    paragraphs: [
      "Yaş hesaplama işleminde doğum tarihi ile yaşın hesaplanacağı tarih arasındaki fark dikkate alınır.",
      "Önce tamamlanan yıllar, ardından son doğum gününden sonra geçen tam aylar ve kalan günler belirlenir.",
      "Örneğin 15 Mart 2000 tarihinde doğan bir kişi, 15 Mart 2026 tarihinde tam 26 yaşındadır. Hesaplama tarihi doğum gününden önceyse tamamlanan yaş bir eksik olur.",
    ],
  },
  {
    title: "Yaş hesaplamada yıl, ay ve gün",
    paragraphs: [
      "Yalnızca doğum yılına bakmak tam yaş sonucunu vermeyebilir.",
      "Doğum ayı ve günü henüz gelmediyse kişi yeni yaşını tamamlamamış kabul edilir.",
    ],
    cards: [
      {
        title: "Tamamlanan yıl",
        description:
          "Doğum tarihinden hesaplama tarihine kadar geçen tam yaş sayısını gösterir.",
      },
      {
        title: "Kalan ay",
        description:
          "Son tamamlanan yaştan sonra geçen tam ay sayısını gösterir.",
      },
      {
        title: "Kalan gün",
        description:
          "Tam yıllar ve aylardan sonra kalan gün sayısını gösterir.",
      },
    ],
  },
  {
    title: "Toplam yaşanan gün sayısı nasıl bulunur?",
    paragraphs: [
      "Toplam yaşanan gün sayısı, doğum tarihi ile seçilen hesaplama tarihi arasındaki takvim günü farkı üzerinden bulunur.",
      "Artık yıllarda bulunan 29 Şubat tarihleri de hesaplamaya otomatik olarak dahil edilir.",
      "Saat bilgileri kullanılmadığı için sonuç seçilen takvim tarihleri arasındaki gün farkını ifade eder.",
    ],
  },
  {
    title: "Sonraki doğum gününe kalan süre",
    paragraphs: [
      "Hesaplayıcı, seçilen hesaplama tarihinden sonraki doğum gününü belirleyerek kalan süreyi gösterebilir.",
      "Doğum günü hesaplama tarihiyle aynı günse yeni yaş tamamlanmış kabul edilir ve sonraki doğum günü bir sonraki yıl üzerinden hesaplanır.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Yaş yalnızca doğum yılına göre hesaplanabilir mi?",
    answer:
      "Tam yaş için doğum yılıyla birlikte doğum ayı ve gününün de dikkate alınması gerekir.",
  },
  {
    question: "Doğum günü bugünse yeni yaş tamamlanmış olur mu?",
    answer:
      "Evet. Hesaplama tarihi doğum gününüzle aynı tarihe geldiğinde yeni yaşınız tamamlanmış kabul edilir.",
  },
  {
    question: "Toplam yaşanan gün sayısı kesin midir?",
    answer:
      "Araç, seçilen iki tarih arasındaki takvim günlerini hesaplar. Saat ve dakika farkları dikkate alınmaz.",
  },
  {
    question:
      "Gelecekteki bir tarihte kaç yaşında olacağımı hesaplayabilir miyim?",
    answer:
      "Evet. Hesaplama tarihini gelecekteki bir gün olarak seçerek o tarihteki yaşınızı öğrenebilirsiniz.",
  },
  {
    question: "Artık yıllar yaş hesabına dahil edilir mi?",
    answer:
      "Evet. Tarih sistemi 29 Şubat bulunan artık yılları otomatik olarak hesaba katar.",
  },
  {
    question: "Aynı doğum tarihi için sonuç neden değişebilir?",
    answer:
      "Yaş sonucu seçilen hesaplama tarihine göre değişir. Bugünkü tarih yerine geçmiş veya gelecekteki bir tarih seçildiğinde farklı sonuç oluşur.",
  },
];

export default function YasHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-blue-100 text-blue-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Tarih sonucu hakkında"
      warningText="Bu araç seçilen doğum tarihi ile hesaplama tarihi arasındaki takvim farkını gösterir. Resmî yaş, okul kaydı, sigorta, emeklilik veya hukuki işlemlerde ilgili kurumun tarih ve yaş kuralları esas alınmalıdır."
    >
      <AgeCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek yaş hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          15 Mart 2000 tarihinde doğan bir kişi için hesaplama tarihi
          15 Mart 2026 olarak seçildiğinde tamamlanan yaş 26 olur.
          Hesaplama tarihi 14 Mart 2026 seçilirse kişi henüz 26 yaşını
          tamamlamadığı için sonuç 25 yıl olarak gösterilir.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Doğum tarihi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              15 Mart 2000
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Hesaplama tarihi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              15 Mart 2026
            </p>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-sm font-medium text-blue-700">
              Geçen süre
            </p>

            <p className="mt-2 text-xl font-bold text-blue-900">
              26 tam yıl
            </p>
          </article>

          <article className="rounded-2xl bg-blue-600 p-6 text-white">
            <p className="text-sm font-medium text-blue-100">
              Tamamlanan yaş
            </p>

            <p className="mt-2 text-xl font-bold">
              26 yaş
            </p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}