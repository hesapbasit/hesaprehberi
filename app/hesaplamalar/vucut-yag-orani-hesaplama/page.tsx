import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import BodyFatCalculator from "@/components/calculators/BodyFatCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/vucut-yag-orani-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Vücut yağ oranı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const contentSections: CalculatorContentSection[] = [
  {
    title: "Vücut yağ oranı nedir?",
    paragraphs: [
      "Vücut yağ oranı, toplam vücut ağırlığınızın yüzde kaçının yağ dokusundan oluştuğunu gösteren tahmini bir değerdir.",
      "Tek başına toplam kilo bilgisi, vücuttaki yağ ve kas dağılımını göstermez. Bu nedenle yağ oranı, vücut kompozisyonunu genel olarak değerlendirmek için kullanılabilir.",
      "Aynı kiloya sahip iki kişinin kas kütlesi ve yağ oranı birbirinden farklı olabilir.",
    ],
  },
  {
    title: "Vücut yağ oranı nasıl hesaplanır?",
    paragraphs: [
      "Bu hesaplayıcı ABD Donanması tarafından geliştirilen çevre ölçümü yöntemini kullanır.",
      "Erkeklerde boy, boyun ve bel çevresi; kadınlarda ise boy, boyun, bel ve kalça çevresi ölçüleri kullanılır.",
      "Girilen ölçüler matematiksel formülde değerlendirilerek yaklaşık vücut yağ yüzdesi hesaplanır.",
    ],
  },
  {
    title: "Ölçüler nasıl alınmalıdır?",
    paragraphs: [
      "Ölçümlerin mezura ile, vücudu sıkıştırmadan ve mümkün olduğunca aynı koşullarda alınması gerekir.",
      "Boyun çevresi gırtlağın altından, bel çevresi doğal bel hattından ölçülmelidir.",
      "Kadınlarda kalça çevresi, kalçanın en geniş bölümünden ölçülür.",
    ],
    cards: [
      {
        title: "Boyun çevresi",
        description:
          "Mezura boynu sıkıştırmadan, gırtlağın hemen altından geçirilmelidir.",
      },
      {
        title: "Bel çevresi",
        description:
          "Karın içeri çekilmeden doğal bel hattından ölçüm yapılmalıdır.",
      },
      {
        title: "Kalça çevresi",
        description:
          "Kadınlar için kalçanın en geniş bölümünden ölçülmelidir.",
      },
      {
        title: "Boy uzunluğu",
        description:
          "Ayakkabısız ve dik duruşla mümkün olduğunca doğru girilmelidir.",
      },
    ],
  },
  {
    title: "Sonuçlar nasıl yorumlanmalıdır?",
    paragraphs: [
      "Hesaplama sonucu yalnızca yaklaşık bir vücut yağ oranı tahmini sunar.",
      "Kas kütlesi yüksek sporcularda, çok düşük veya yüksek vücut ağırlığına sahip kişilerde ve ölçümlerin hatalı alınması durumunda sonuç sapabilir.",
      "Daha ayrıntılı değerlendirme için profesyonel vücut analiz cihazları, deri kıvrım ölçümü veya sağlık uzmanı değerlendirmesi kullanılabilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Vücut yağ oranı nedir?",
    answer:
      "Vücuttaki toplam yağ miktarının toplam vücut ağırlığına oranıdır ve genellikle yüzde olarak ifade edilir.",
  },
  {
    question: "İdeal yağ oranı kaç olmalıdır?",
    answer:
      "Uygun yağ oranı yaşa, cinsiyete, fiziksel aktivite düzeyine ve sağlık durumuna göre değişir. Bu araç genel referans amaçlı sonuç üretir.",
  },
  {
    question: "Bu hesaplama doğru mudur?",
    answer:
      "ABD Donanması yöntemi yaygın kullanılan bir tahmin yöntemidir. Ancak profesyonel ölçüm cihazları veya klinik değerlendirme kadar kesin değildir.",
  },
  {
    question: "Kaslı kişilerde sonuç değişir mi?",
    answer:
      "Evet. Kas kütlesi yüksek kişilerde çevre ölçümlerine dayalı formüller gerçek vücut kompozisyonunu tam olarak yansıtmayabilir.",
  },
  {
    question: "Ölçüm için hangi birim kullanılmalıdır?",
    answer:
      "Hesaplayıcıda belirtilen birim kullanılmalıdır. Boy ve çevre ölçülerinin tamamının aynı ölçü sistemine uygun girilmesi önemlidir.",
  },
  {
    question: "Bel çevresi nereden ölçülür?",
    answer:
      "Bel çevresi, karın içeri çekilmeden doğal bel hattından ve mezura yere paralel olacak şekilde ölçülmelidir.",
  },
  {
    question: "Günün farklı saatlerinde sonuç değişebilir mi?",
    answer:
      "Çevre ölçüleri gün içindeki beslenme, sıvı tüketimi ve şişkinlik nedeniyle küçük farklılıklar gösterebilir. Karşılaştırma yaparken ölçümlerin benzer koşullarda alınması önerilir.",
  },
];

export default function VucutYagOraniHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç yalnızca genel bilgilendirme amacıyla yaklaşık sonuç üretir. Tıbbi tanı, tedavi veya profesyonel vücut kompozisyonu değerlendirmesi yerine geçmez. Sağlık hedefleri için doktor, diyetisyen veya alanında uzman bir sağlık profesyoneline danışılmalıdır."
    >
      <BodyFatCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Ölçüm yaparken dikkat edilmesi gerekenler
        </h2>

        <p className="mt-5 max-w-5xl leading-8 text-slate-600">
          Daha tutarlı sonuçlar için ölçümleri günün benzer saatlerinde,
          aynı mezurayla ve vücudu sıkıştırmadan almak önemlidir. Bel ve
          kalça çevresi ölçülürken mezuranın yere paralel durmasına dikkat
          edilmelidir.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Ölçüm aracı
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              Esnek mezura
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-medium text-slate-500">
              Duruş
            </p>

            <p className="mt-2 text-xl font-bold text-slate-900">
              Dik ve rahat
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-medium text-emerald-700">
              Mezura konumu
            </p>

            <p className="mt-2 text-xl font-bold text-emerald-900">
              Yere paralel
            </p>
          </article>

          <article className="rounded-2xl bg-emerald-600 p-6 text-white">
            <p className="text-sm font-medium text-emerald-100">
              Sonuç türü
            </p>

            <p className="mt-2 text-xl font-bold">
              Yaklaşık tahmin
            </p>
          </article>
        </div>
      </section>
    </CalculatorLayout>
  );
}