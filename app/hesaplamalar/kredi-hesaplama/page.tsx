import type { Metadata } from "next";

import KrediCalculator from "@/components/calculators/KrediCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kredi-hesaplama";

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

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

export default function KrediHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Hesaplamalar",
              href: "/hesaplamalar",
            },
            {
              label: calculator.title,
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            {calculator.category}
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            {calculator.title}
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            {calculator.description}
          </p>

          <ShareButtons
            title={`${calculator.title} | HesapRehberi`}
            description={calculator.description}
          />
        </div>

        <KrediCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Taksiti Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Eşit taksitli kredilerde aylık ödeme; kredi tutarı, vade ve aylık
            faiz oranına göre hesaplanır. Faiz oranı veya vade yükseldiğinde
            toplam geri ödeme tutarı da genellikle artar.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Hesaplama sonucuna banka tahsis ücreti, sigorta, vergi ve diğer
            masraflar dahil değildir. Bu nedenle bankanın sunduğu gerçek ödeme
            planıyla farklılıklar oluşabilir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Aylık kredi taksiti nasıl hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Kredi tutarı, aylık faiz oranı ve toplam vade kullanılarak eşit
                taksitli kredi formülüyle hesaplanır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vade arttıkça toplam ödeme artar mı?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Çoğu durumda vade uzadıkça aylık taksit azalırken toplam faiz
                ve toplam geri ödeme yükselir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama banka teklifinin aynısı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Bankanın uyguladığı sigorta, tahsis ücreti, vergi ve
                diğer masraflar gerçek sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}