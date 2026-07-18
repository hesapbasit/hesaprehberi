import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import WaterIntakeCalculator from "@/components/calculators/WaterIntakeCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/su-ihtiyaci-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Su ihtiyacı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "Günlük su ihtiyacı nasıl hesaplanır?",
    paragraphs: [
      "Günlük su ihtiyacı kişiden kişiye değişebilir. Genel hesaplamalarda vücut ağırlığı, aktivite seviyesi, hava sıcaklığı ve terleme miktarı dikkate alınır.",
      "Bu araçta düşük aktivite için kilogram başına yaklaşık 30 ml, orta aktivite için 35 ml ve yüksek aktivite için 40 ml temel alınır.",
      "Sıcak hava veya yoğun terleme seçildiğinde tahmini günlük miktara ek su eklenir.",
    ],
    formula:
      "Tahmini su ihtiyacı = Vücut ağırlığı × Günlük mililitre katsayısı",
  },
  {
    title: "Su ihtiyacını etkileyen faktörler",
    paragraphs: [
      "Günlük sıvı ihtiyacı yalnızca kişinin kilosuna bağlı değildir.",
      "Fiziksel aktivite, yaşanılan iklim, sağlık durumu ve terleme miktarı ihtiyaç duyulan su miktarını önemli ölçüde değiştirebilir.",
    ],
    cards: [
      {
        title: "Vücut ağırlığı",
        description:
          "Vücut ağırlığı arttıkça tahmini günlük sıvı ihtiyacı da genellikle artar.",
      },
      {
        title: "Fiziksel aktivite",
        description:
          "Egzersiz ve yoğun fiziksel çalışma terlemeyi artırdığı için daha fazla sıvı gerekebilir.",
      },
      {
        title: "Hava sıcaklığı",
        description:
          "Sıcak ve nemli hava koşullarında vücut daha fazla sıvı kaybedebilir.",
      },
      {
        title: "Sağlık durumu",
        description:
          "Bazı sağlık durumları ve kullanılan ilaçlar günlük sıvı ihtiyacını değiştirebilir.",
      },
    ],
  },
  {
    title: "Su yalnızca içme suyundan mı alınır?",
    paragraphs: [
      "Günlük toplam sıvı alımına suyun yanı sıra çorba, süt, ayran, şekersiz içecekler ve su oranı yüksek meyve ve sebzeler de katkı sağlayabilir.",
      "Bununla birlikte şekerli içecekleri veya yüksek kafeinli ürünleri yalnızca sıvı ihtiyacını karşılamak amacıyla tüketmek uygun değildir.",
      "Günlük sıvı tüketiminin önemli bir bölümünün doğrudan sudan karşılanması daha dengeli bir yaklaşım olabilir.",
    ],
  },
  {
    title: "Su ihtiyacı sonucu nasıl değerlendirilmelidir?",
    paragraphs: [
      "Hesaplama sonucu genel bir günlük sıvı tahmini sunar.",
      "Egzersiz süresi, terleme miktarı, hava sıcaklığı, hamilelik, emzirme dönemi, hastalıklar ve kullanılan ilaçlar gerçek ihtiyacı değiştirebilir.",
      "Özellikle sıvı kısıtlaması gerektiren bir sağlık durumunda genel hesaplama sonuçları yerine doktor önerisi esas alınmalıdır.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Günde 2 litre su herkes için yeterli midir?",
    answer:
      "Hayır. Günlük ihtiyaç kişinin kilosuna, aktivite düzeyine, yaşadığı iklime, terleme miktarına ve sağlık durumuna göre değişebilir.",
  },
  {
    question: "Spor yaptığım günlerde daha fazla su içmeli miyim?",
    answer:
      "Egzersiz sırasında terleme arttığı için ek sıvı ihtiyacı oluşabilir. Egzersizin süresi, yoğunluğu ve hava koşulları ihtiyaç duyulan ek miktarı etkiler.",
  },
  {
    question: "Çay ve kahve günlük sıvı hesabına dahil olur mu?",
    answer:
      "Çay ve kahve günlük sıvı alımına katkı sağlayabilir. Ancak suyun tamamen yerine geçmeleri önerilmez ve aşırı kafein tüketiminden kaçınılmalıdır.",
  },
  {
    question: "Fazla su içmek zararlı olabilir mi?",
    answer:
      "Evet. Çok kısa sürede aşırı miktarda su tüketmek vücudun elektrolit dengesini bozabilir. Dengeli ve gün içine yayılmış tüketim önemlidir.",
  },
  {
    question: "Sıcak havalarda su ihtiyacı artar mı?",
    answer:
      "Evet. Sıcak ve nemli havalarda terleme yoluyla kaybedilen sıvı arttığı için günlük su ihtiyacı da yükselebilir.",
  },
  {
    question: "Yemeklerden alınan su hesaba dahil olur mu?",
    answer:
      "Evet. Çorba, süt ürünleri, meyve ve sebzeler gibi su içeriği yüksek besinler günlük toplam sıvı alımına katkı sağlar.",
  },
  {
    question: "Bardak hesabında kaç mililitre kullanılır?",
    answer:
      "Araçtaki bardak karşılığı, hesaplayıcı bileşeninde kullanılan standart bardak hacmine göre belirlenir. Evde kullanılan bardakların hacmi farklı olabilir.",
  },
];

export default function SuIhtiyaciHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-cyan-100 text-cyan-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç yalnızca genel bir günlük sıvı ihtiyacı tahmini sunar. Kalp, böbrek veya sıvı dengesiyle ilgili bir sağlık durumunuz varsa doktorunuzun önerisi önceliklidir. Hesaplama sonucu tıbbi tavsiye yerine geçmez."
    >
      <WaterIntakeCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek günlük su ihtiyacı hesaplaması
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Vücut ağırlığı 70 kg olan ve orta düzeyde aktif bir kişi için
          kilogram başına 35 ml temel alındığında günlük tahmini su
          ihtiyacı 2.450 ml, yani yaklaşık 2,45 litre olur.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Vücut ağırlığı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              70 kg
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Aktivite düzeyi
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              Orta aktif
            </p>
          </article>

          <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
            <p className="text-sm font-medium text-cyan-700">
              Kullanılan katsayı
            </p>

            <p className="mt-2 text-xl font-bold text-cyan-900">
              35 ml/kg
            </p>
          </article>

          <article className="rounded-2xl bg-cyan-600 p-6 text-white">
            <p className="text-sm font-medium text-cyan-100">
              Günlük tahmin
            </p>

            <p className="mt-2 text-xl font-bold">
              2,45 litre
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
          <p className="font-semibold leading-7 text-cyan-900">
            70 × 35 = 2.450 ml
          </p>

          <p className="mt-2 leading-7 text-cyan-800">
            Sıcak hava veya yoğun terleme durumunda hesaplayıcının eklediği
            miktar sonucunda günlük ihtiyaç daha yüksek çıkabilir.
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}