import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import RentIncreaseCalculator from "@/components/calculators/RentIncreaseCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/kira-artis-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Kira artış hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "Kira artışı nasıl hesaplanır?",
    paragraphs: [
      "Kira artış tutarı, mevcut aylık kira bedelinin uygulanacak artış oranıyla çarpılması ve sonucun 100'e bölünmesiyle hesaplanır.",
      "Yeni aylık kira bedeli ise mevcut kiraya hesaplanan artış tutarının eklenmesiyle bulunur.",
    ],
    formula:
      "Artış tutarı = Mevcut kira × Artış oranı / 100",
  },
  {
    title: "Yeni kira bedeli nasıl bulunur?",
    paragraphs: [
      "Artış tutarı hesaplandıktan sonra mevcut kira bedeline eklenerek yeni aylık kira tutarı bulunur.",
      "Bu yöntem girilen oran üzerinden tamamen matematiksel bir hesaplama yapar.",
    ],
    formula:
      "Yeni kira = Mevcut kira + Artış tutarı",
  },
  {
    title: "Kira artış oranı nasıl belirlenir?",
    paragraphs: [
      "Kullanılacak oran kira sözleşmesinin yenileme tarihine ve yürürlükteki mevzuata göre değişebilir.",
      "Bu nedenle hesaplayıcıya ilgili dönem için geçerli oranın girilmesi gerekir.",
      "Araç yalnızca girilen oran üzerinden hesaplama yapar ve oranı kendisi belirlemez.",
    ],
  },
  {
    title: "Bir yıllık kira farkı nasıl hesaplanır?",
    paragraphs: [
      "Aylık artış tutarı 12 ile çarpılarak yeni kira döneminde oluşacak yaklaşık yıllık fark hesaplanabilir.",
      "Bu değer yalnızca matematiksel toplamı ifade eder ve sözleşme koşullarını dikkate almaz.",
    ],
    formula:
      "Yıllık kira farkı = Aylık artış tutarı × 12",
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Kira artış oranı her ay aynı mıdır?",
    answer:
      "Hayır. Kullanılacak oran sözleşmenin yenilendiği dönemdeki güncel verilere ve yürürlükteki kurallara göre değişebilir.",
  },
  {
    question: "Artış oranını kendim değiştirebilir miyim?",
    answer:
      "Evet. Hesaplayıcıdaki artış oranı alanına istediğiniz oranı girerek hesaplama yapabilirsiniz.",
  },
  {
    question: "Yeni kira bedeli nasıl bulunur?",
    answer:
      "Mevcut kira tutarına hesaplanan artış miktarı eklenerek yeni aylık kira bedeli bulunur.",
  },
  {
    question: "Hesaplama sonucu hukuken bağlayıcı mıdır?",
    answer:
      "Hayır. Sonuç yalnızca matematiksel hesaplama ve genel bilgilendirme amacı taşır. Hukuki uyuşmazlıklarda uzman görüşü alınmalıdır.",
  },
  {
    question: "Yıllık kira farkı nasıl hesaplanır?",
    answer:
      "Aylık artış tutarı 12 ile çarpılarak yaklaşık yıllık kira farkı bulunabilir.",
  },
  {
    question: "Bu araç TÜFE oranını otomatik alıyor mu?",
    answer:
      "Hayır. Hesaplayıcı yalnızca sizin girdiğiniz artış oranını kullanır ve güncel oranları otomatik olarak çekmez.",
  },
];

export default function KiraArtisHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-blue-100 text-blue-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Hukuki bilgilendirme"
      warningText="Bu araç yalnızca girilen kira tutarı ve artış oranına göre matematiksel hesaplama yapar. Güncel mevzuat, kira sözleşmesi hükümleri, mahkeme kararları ve taraflar arasındaki özel anlaşmalar hesaplamaya dahil değildir. Hukuki durumlarda uzman görüşü alınmalıdır."
    >
      <RentIncreaseCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek kira artışı hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Mevcut kira bedelinin 20.000 ₺ ve artış oranının %32,03
          olduğunu varsayalım. Bu durumda aylık artış tutarı yaklaşık
          6.406 ₺ olur ve yeni kira bedeli 26.406 ₺ olarak hesaplanır.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Mevcut kira
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              20.000 ₺
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Artış oranı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              %32,03
            </p>
          </article>

          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="text-sm font-medium text-blue-700">
              Artış tutarı
            </p>

            <p className="mt-2 text-xl font-bold text-blue-900">
              6.406 ₺
            </p>
          </article>

          <article className="rounded-2xl bg-blue-600 p-6 text-white">
            <p className="text-sm font-medium text-blue-100">
              Yeni kira
            </p>

            <p className="mt-2 text-xl font-bold">
              26.406 ₺
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="font-semibold leading-7 text-blue-900">
            20.000 × %32,03 = 6.406 ₺ artış
          </p>

          <p className="mt-2 font-semibold leading-7 text-blue-900">
            20.000 + 6.406 = 26.406 ₺ yeni kira
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}