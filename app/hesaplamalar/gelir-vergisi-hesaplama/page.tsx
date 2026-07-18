import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/data/calculators";
import { createCalculatorMetadata } from "@/lib/metadata";

const canonicalPath =
  "/hesaplamalar/gelir-vergisi-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Gelir vergisi hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata(calculator);

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Vergi matrahı ile brüt gelir aynı mıdır?",
    answer:
      "Her zaman aynı değildir. Vergi matrahı, kanunen dikkate alınan indirimler ve istisnalar sonrasında vergilendirilecek tutarı ifade eder.",
  },
  {
    question:
      "Üst vergi dilimine geçince tüm gelir üst orandan mı vergilendirilir?",
    answer:
      "Hayır. Yalnızca ilgili vergi diliminin sınırını aşan bölüm üst orandan vergilendirilir. Önceki dilimlerde kalan tutarlar kendi oranları üzerinden hesaplanmaya devam eder.",
  },
  {
    question:
      "Ücret ve ücret dışı gelir arasında neden fark vardır?",
    answer:
      "Gelir vergisi tarifesinde bazı dilim sınırları ücret gelirleri ve ücret dışı gelirler için farklı uygulanabilir. Bu nedenle aynı matrah tutarı, gelir türüne göre farklı bir vergi dilimine ulaşabilir.",
  },
  {
    question: "Efektif vergi oranı nedir?",
    answer:
      "Efektif vergi oranı, hesaplanan toplam gelir vergisinin vergi matrahına bölünmesiyle bulunan ortalama vergi oranıdır.",
  },
  {
    question: "Marjinal vergi oranı nedir?",
    answer:
      "Marjinal vergi oranı, matrahın ulaştığı en yüksek vergi diliminde uygulanan orandır. Matrahın tamamının bu oranla vergilendirildiği anlamına gelmez.",
  },
  {
    question: "Hesaplanan tutar kesin vergi borcum mudur?",
    answer:
      "Hayır. Sonuç genel bilgilendirme amacıyla yapılan yaklaşık bir hesaplamadır. İstisnalar, indirimler, kesintiler, mahsuplar ve kişisel durumlar gerçek vergi tutarını değiştirebilir.",
  },
];

export default function GelirVergisiHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-blue-100 text-blue-700"
      faqItems={faqItems}
      warningTitle="Önemli vergi bilgilendirmesi"
      warningText="Bu araç yalnızca girilen yıllık matraha tanımlı gelir vergisi tarifesini uygular. Asgari ücret vergi istisnası, kişisel indirimler, giderler, geçmiş dönem mahsupları, kesintiler, engellilik indirimi ve beyannameye özgü diğer uygulamalar hesaplamaya dahil değildir. Resmî işlemler için Gelir İdaresi Başkanlığının güncel kaynaklarını kontrol edin ve gerektiğinde mali müşavir desteği alın."
    >
      <IncomeTaxCalculator />

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Gelir vergisi nasıl hesaplanır?
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Gelir vergisi, yıllık vergi matrahının tamamına tek bir oran
          uygulanarak hesaplanmaz. Matrah, vergi tarifesinde bulunan dilimlere
          ayrılır ve her dilimde kalan tutar ilgili oran üzerinden ayrı ayrı
          vergilendirilir.
        </p>

        <p className="mt-5 leading-8 text-slate-600">
          Matrah daha yüksek bir vergi dilimine ulaştığında matrahın tamamı yeni
          orandan vergilendirilmez. Yalnızca önceki dilimin üst sınırını aşan
          bölüm, sonraki vergi oranına tabi olur.
        </p>

        <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <p className="font-semibold leading-7 text-blue-900">
            Toplam gelir vergisi = Her vergi diliminde hesaplanan vergi
            tutarlarının toplamı
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Gelir vergisi oranları
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Hesaplayıcıda gelir vergisi oranları yüzde 15, yüzde 20, yüzde 27,
          yüzde 35 ve yüzde 40 olarak kademeli biçimde uygulanır. Ücret
          gelirleri ile ücret dışı gelirlerde üçüncü dilimin üst sınırı
          farklıdır.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Dilim
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Oran
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Ücret geliri üst sınırı
                  </th>

                  <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                    Ücret dışı gelir üst sınırı
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-6 py-4 text-slate-700">
                    Birinci dilim
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    %15
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    190.000 ₺
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    190.000 ₺
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-slate-700">
                    İkinci dilim
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    %20
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    400.000 ₺
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    400.000 ₺
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-slate-700">
                    Üçüncü dilim
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    %27
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    1.500.000 ₺
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    1.000.000 ₺
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-slate-700">
                    Dördüncü dilim
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    %35
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    5.300.000 ₺
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    5.300.000 ₺
                  </td>
                </tr>

                <tr>
                  <td className="px-6 py-4 text-slate-700">
                    Beşinci dilim
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-900">
                    %40
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    5.300.000 ₺ üzeri
                  </td>

                  <td className="px-6 py-4 text-slate-700">
                    5.300.000 ₺ üzeri
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Marjinal ve efektif vergi oranı arasındaki fark
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-lg font-bold text-blue-900">
              Marjinal vergi oranı
            </h3>

            <p className="mt-3 leading-7 text-blue-800">
              Matrahınızın ulaştığı en yüksek vergi diliminde uygulanan
              orandır. Matrahın tamamının bu oran üzerinden vergilendirildiği
              anlamına gelmez.
            </p>
          </article>

          <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-900">
              Efektif vergi oranı
            </h3>

            <p className="mt-3 leading-7 text-emerald-800">
              Hesaplanan toplam verginin toplam vergi matrahına bölünmesiyle
              elde edilen ortalama vergi oranıdır.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Örnek gelir vergisi hesaplaması
        </h2>

        <p className="mt-5 leading-8 text-slate-600">
          Vergi matrahının 500.000 ₺ olduğunu düşünelim. İlk 190.000 ₺ için
          yüzde 15, sonraki 210.000 ₺ için yüzde 20 ve kalan 100.000 ₺ için
          yüzde 27 oranı uygulanır.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Birinci dilim
            </p>

            <p className="mt-2 font-bold text-slate-900">
              190.000 × %15 = 28.500 ₺
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              İkinci dilim
            </p>

            <p className="mt-2 font-bold text-slate-900">
              210.000 × %20 = 42.000 ₺
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-500">
              Üçüncü dilim
            </p>

            <p className="mt-2 font-bold text-slate-900">
              100.000 × %27 = 27.000 ₺
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
          <p className="font-semibold text-emerald-900">
            Toplam vergi: 28.500 ₺ + 42.000 ₺ + 27.000 ₺ = 97.500 ₺
          </p>
        </div>
      </section>
    </CalculatorLayout>
  );
}