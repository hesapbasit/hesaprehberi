import type { Metadata } from "next";

import LoanRestructuringCalculator from "@/components/calculators/LoanRestructuringCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kredi-yapilandirma-hesaplama";

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

export default function KrediYapilandirmaHesaplamaPage() {
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
          <span className="rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
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

        <LoanRestructuringCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Yapılandırma Hesabı Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Kredi yapılandırma hesabında mevcut borcun kalan anaparası, güncel
            faiz oranı ve kalan vadesi kullanılarak mevcut planın tahmini
            maliyeti bulunur. Ardından yeni faiz oranı, yeni vade ve masraflar
            eklenerek ikinci bir ödeme planı oluşturulur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            İki plan arasındaki aylık taksit ve toplam geri ödeme farkı,
            yapılandırmanın bütçeye etkisini gösterir. Aylık taksidin düşmesi
            tek başına yeterli değildir; toplam maliyetin de karşılaştırılması
            gerekir.
          </p>

          <div className="mt-8 rounded-2xl border border-violet-100 bg-violet-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Değerlendirilmesi gereken kalemler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Kalan anapara:</strong> Mevcut kredi borcunun faiz
                hariç kalan ana kısmıdır.
              </li>
              <li>
                <strong>Mevcut plan:</strong> Güncel faiz oranı ve kalan vadeye
                göre devam eden ödeme düzenidir.
              </li>
              <li>
                <strong>Yeni plan:</strong> Yapılandırma sonrası uygulanacak
                faiz oranı ve yeni vadedir.
              </li>
              <li>
                <strong>Yapılandırma masrafı:</strong> Tahsis, işlem ve benzeri
                giderlerin toplamıdır.
              </li>
              <li>
                <strong>Toplam fark:</strong> İki planın toplam geri ödeme
                tutarları arasındaki farktır.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kredi Yapılandırırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam maliyet
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yeni aylık taksit düşük olsa bile uzun vade toplam geri ödemeyi
                artırabilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Masraf kalemleri
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tahsis ücreti, sigorta ve eski kredinin kapama maliyetleri
                mutlaka hesaba katılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Vade uzaması
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vade uzadıkça aylık ödeme düşebilir fakat borç daha uzun süre
                taşınır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Banka teklifleri
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Birden fazla bankanın efektif maliyet ve toplam ödeme teklifleri
                karşılaştırılmalıdır.
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
                Kredi yapılandırma nedir?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Mevcut kredi borcunun yeni faiz oranı, vade veya ödeme koşulları
                ile yeniden planlanmasıdır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Yapılandırma aylık taksiti düşürür mü?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Daha düşük faiz veya daha uzun vade aylık taksiti düşürebilir;
                ancak toplam maliyet ayrıca incelenmelidir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Daha düşük faiz her zaman avantajlı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Yeni vade ve masraflar toplam ödeme avantajını ortadan
                kaldırabilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Yapılandırma masrafları dahil mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kullanıcının girdiği masraf tutarı yeni kredi tutarına eklenerek
                hesaba dahil edilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Masrafın geri kazanım süresi nedir?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Aylık taksit tasarrufunun yapılandırma masrafını yaklaşık kaç
                ayda karşılayacağını gösterir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç banka teklifinin aynısı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç tahminidir; kesin maliyet bankanın resmi ödeme
                planı ve masraf dökümüyle belirlenir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Farklı yapılandırma seçeneklerini karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-violet-100">
                Yeni faiz, vade ve masraf değerlerini değiştirerek bütçenize
                uygun senaryoları inceleyebilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}