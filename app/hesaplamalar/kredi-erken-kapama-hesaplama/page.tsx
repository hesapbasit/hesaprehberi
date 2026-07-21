import type { Metadata } from "next";

import LoanEarlyPayoffCalculator from "@/components/calculators/LoanEarlyPayoffCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kredi-erken-kapama-hesaplama";

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

export default function KrediErkenKapamaHesaplamaPage() {
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
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
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

        <LoanEarlyPayoffCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Erken Kapama Hesabı Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Erken kapama analizinde ilk olarak kredinin bugün itibarıyla kalan
            anapara borcu belirlenir. Mevcut plan devam ettiğinde ödenecek kalan
            taksitlerin toplamı ile bankanın bildireceği kapama tutarı
            karşılaştırılır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Tahmini kapama tutarı; kalan anapara, varsa erken ödeme ücreti ve
            kullanıcı tarafından girilen diğer masraflardan oluşur. Mevcut
            planın toplam ödemesi ile kapama maliyeti arasındaki fark yaklaşık
            tasarrufu gösterir.
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Doğru sonuç için gerekli bilgiler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Kalan anapara:</strong> Bankanın güncel borç dökümünde
                görünen anapara bakiyesidir.
              </li>
              <li>
                <strong>Kalan vade:</strong> Ödenmemiş taksitlerin ay sayısıdır.
              </li>
              <li>
                <strong>Aylık faiz:</strong> Mevcut kredi sözleşmesindeki aylık
                faiz oranıdır.
              </li>
              <li>
                <strong>Erken ödeme ücreti:</strong> Bankanın uyguladığı oran
                varsa kullanıcı tarafından girilmelidir.
              </li>
              <li>
                <strong>Diğer masraflar:</strong> Günlük faiz veya işlem gideri
                gibi ek kalemler bu alana yazılabilir.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Erken Kapama Kararı Verirken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Nakit rezervi
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Krediyi kapattıktan sonra acil ihtiyaçlar için yeterli nakit
                bırakılması finansal güvenlik açısından önemlidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Alternatif getiri
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kullanılacak paranın başka bir yerde sağlayabileceği net getiri
                ile kredi maliyeti birlikte değerlendirilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Banka kapama yazısı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kesin işlem öncesinde bankadan aynı gün için geçerli resmi
                kapama tutarı alınmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Sigorta ve iadeler
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kullanılmayan dönemlere ilişkin olası sigorta iadeleri ve diğer
                mahsuplar ayrıca kontrol edilmelidir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kredi erken kapama tutarı kalan taksitlerin toplamı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Genellikle hayır. Kapama tutarı çoğunlukla kalan anapara ve
                uygulanabilecek ek kalemlerden oluşur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Erken kapama her zaman avantajlı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Her zaman değil. Kalan faiz yükü, kapama masrafları, nakit
                ihtiyacı ve alternatif getiri birlikte değerlendirilmelidir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Erken ödeme ücreti nasıl hesaplanır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bu araç, kullanıcının girdiği oranı kalan anapara üzerinden
                hesaplar. Kesin yöntem kredi türüne ve sözleşmeye göre
                değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Günlük faiz hesaba dahil mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Otomatik olarak dahil değildir. Bankanın bildirdiği günlük faiz
                veya ek gider diğer masraflar alanına girilebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kısmi ödeme için kullanılabilir mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bu sürüm tam kapama senaryosu içindir. Kısmi ödeme sonrasında
                vade veya taksit değişimi bankanın yeniden oluşturduğu plana
                göre hesaplanmalıdır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç bankanın resmi tutarı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç tahminidir. Kesin tutar için bankadan güncel kapama
                yazısı alınmalıdır.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Farklı kapama senaryolarını karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-emerald-100">
                Kalan vade, faiz oranı ve masrafları değiştirerek tahmini
                tasarruf üzerindeki etkilerini inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}