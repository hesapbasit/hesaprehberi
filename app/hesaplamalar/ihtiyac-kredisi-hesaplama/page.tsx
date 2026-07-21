import type { Metadata } from "next";

import PersonalLoanCalculator from "@/components/calculators/PersonalLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/ihtiyac-kredisi-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi lib/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

export default function IhtiyacKredisiHesaplamaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            { label: "Hesaplamalar", href: "/hesaplamalar" },
            { label: calculator.title },
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

        <PersonalLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            İhtiyaç Kredisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            İhtiyaç kredisi hesaplanırken kredi tutarı, aylık faiz oranı ve vade
            bilgileri eşit taksitli kredi formülünde kullanılır. Böylece aylık
            taksit, toplam faiz ve toplam geri ödeme tutarı tahmini olarak
            bulunur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Faiz oranı veya vade arttığında toplam maliyet genellikle yükselir.
            Vadenin uzaması aylık taksiti düşürebilir ancak toplam geri ödeme
            tutarını artırabilir.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Hesaplamada kullanılan temel bilgiler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li><strong>Kredi tutarı:</strong> Bankadan alınması planlanan anapara miktarıdır.</li>
              <li><strong>Aylık faiz oranı:</strong> Kalan borca her ay uygulanan faiz oranıdır.</li>
              <li><strong>Vade:</strong> Kredinin kaç ay içinde geri ödeneceğini gösterir.</li>
              <li><strong>Aylık taksit:</strong> Her ay ödenecek tahmini sabit tutardır.</li>
              <li><strong>Toplam geri ödeme:</strong> Tüm taksitlerin toplamıdır.</li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            İhtiyaç Kredisi Kullanırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Aylık ödeme gücü</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Taksit tutarı, düzenli gelir ve zorunlu giderlerle birlikte değerlendirilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Toplam maliyet</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yalnızca faiz oranı değil, toplam geri ödeme ve ek masraflar da karşılaştırılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Vade seçimi</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bütçeyi zorlamayan en kısa uygun vade toplam faiz yükünü azaltabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Ek ücretler</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tahsis ücreti, sigorta ve bankaya göre değişen diğer giderler toplam maliyeti etkileyebilir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Sık Sorulan Sorular</h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                İhtiyaç kredisi taksiti nasıl hesaplanır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kredi tutarı, aylık faiz oranı ve vade eşit taksitli kredi formülünde kullanılır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vade uzadıkça aylık taksit düşer mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Genellikle düşer; ancak toplam faiz ve toplam geri ödeme çoğu durumda yükselir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Faiz oranı arttığında toplam ödeme ne olur?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Diğer koşullar aynı kaldığında aylık taksit ve toplam geri ödeme artar.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplamaya sigorta dahil mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sigorta, tahsis ücreti ve diğer banka masrafları dahil değildir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sıfır faizli kredi hesaplanabilir mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Evet. Faiz oranını sıfır girdiğinizde kredi tutarı vadeye eşit olarak bölünür.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç banka teklifinin aynısı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Masraflar, sigorta ve yuvarlama yöntemleri gerçek ödeme planını değiştirebilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Farklı ihtiyaç kredisi seçeneklerini karşılaştırın
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Kredi tutarı, faiz oranı ve vadeyi değiştirerek bütçenize uygun ödeme planlarını inceleyin.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}