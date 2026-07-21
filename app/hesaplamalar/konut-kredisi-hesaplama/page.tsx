import type { Metadata } from "next";

import HousingLoanCalculator from "@/components/calculators/HousingLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/konut-kredisi-hesaplama";

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

export default function KonutKredisiHesaplamaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12 md:py-16">
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

        <HousingLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Konut Kredisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Konut kredisi hesaplanırken konut bedelinden peşinat tutarı
            çıkarılır ve kalan tutar kullanılacak kredi miktarı olarak kabul
            edilir. Aylık taksit; kredi tutarı, aylık faiz oranı ve vade
            kullanılarak eşit taksitli kredi formülüyle hesaplanır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Peşinat tutarı yükseldikçe kullanılacak kredi miktarı azalır. Bu
            durum aylık taksitlerin ve toplam faiz maliyetinin düşmesine yardımcı
            olabilir. Vadenin uzatılması ise aylık taksiti azaltabilse de toplam
            geri ödeme tutarını genellikle yükseltir.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Konut kredisi hesaplamasında kullanılan bilgiler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Konut bedeli:</strong> Satın alınması planlanan
                taşınmazın toplam satış fiyatıdır.
              </li>

              <li>
                <strong>Peşinat:</strong> Konut bedelinin kredi kullanılmadan
                ödenecek bölümüdür.
              </li>

              <li>
                <strong>Kredi tutarı:</strong> Konut bedelinden peşinat
                çıkarıldıktan sonra kalan tutardır.
              </li>

              <li>
                <strong>Aylık faiz oranı:</strong> Bankanın kredi bakiyesine
                uyguladığı aylık faiz oranıdır.
              </li>

              <li>
                <strong>Vade:</strong> Kredinin kaç ay içinde geri ödeneceğini
                gösterir.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Konut Kredisi Kullanırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Peşinat oranı
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Daha yüksek peşinat, kullanılacak kredi tutarını ve toplam faiz
                yükünü azaltabilir. Ancak acil durum birikiminin tamamının
                peşinata ayrılmaması da önemlidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Aylık ödeme gücü
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Aylık taksidin yalnızca bugünkü gelirle değil, düzenli giderler
                ve olası gelir değişimleriyle birlikte değerlendirilmesi
                gerekir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam maliyet
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Bankalar karşılaştırılırken yalnızca aylık faiz oranı değil,
                toplam geri ödeme, tahsis ücreti, ekspertiz ve sigorta
                giderleri de dikkate alınmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Vade seçimi
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Uzun vade aylık taksiti düşürebilir ancak toplam faiz
                maliyetini artırabilir. Bütçeyi zorlamayan en kısa uygun vade
                tercih edilmelidir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Hesaplama Sonuçlarına Neler Dahil Değildir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Hesaplama aracı tahmini kredi taksitini ve faiz maliyetini gösterir.
            Banka tarafından alınabilecek aşağıdaki masraflar hesaplama
            sonucuna dahil değildir:
          </p>

          <ul className="mt-6 grid gap-4 text-slate-700 sm:grid-cols-2">
            <li className="rounded-2xl bg-slate-50 p-5">
              Kredi tahsis ücreti
            </li>

            <li className="rounded-2xl bg-slate-50 p-5">
              Ekspertiz ücreti
            </li>

            <li className="rounded-2xl bg-slate-50 p-5">
              DASK ve konut sigortası
            </li>

            <li className="rounded-2xl bg-slate-50 p-5">
              Hayat sigortası
            </li>

            <li className="rounded-2xl bg-slate-50 p-5">
              Tapu ve ipotek işlemi giderleri
            </li>

            <li className="rounded-2xl bg-slate-50 p-5">
              Bankaya özel diğer ücretler
            </li>
          </ul>

          <p className="mt-6 leading-8 text-slate-600">
            Kesin maliyet ve ödeme planı için kredi kullanılacak bankanın
            sunduğu resmi teklif incelenmelidir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Konut kredisi aylık taksiti nasıl hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Kullanılacak kredi tutarı, aylık faiz oranı ve vade bilgileri
                eşit taksitli kredi formülünde kullanılarak aylık ödeme tutarı
                hesaplanır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Konut kredisi tutarı nasıl belirlenir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hesaplama aracında kredi tutarı, girilen konut bedelinden
                peşinat tutarı çıkarılarak bulunur. Bankanın kullandıracağı
                gerçek tutar ekspertiz değeri ve kredi politikalarına göre
                değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Peşinat arttıkça aylık taksit azalır mı?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Diğer koşullar aynı kaldığında peşinatın artması kredi
                tutarını azalttığı için aylık taksit ve toplam faiz maliyeti de
                düşer.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vade uzadıkça aylık taksit düşer mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Genellikle evet. Ancak uzun vade daha fazla faiz dönemi
                oluşturduğu için toplam geri ödeme tutarı yükselebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Faiz oranı değişince taksit neden değişir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Faiz oranı, kalan kredi bakiyesi üzerinden hesaplanan finansman
                maliyetini belirler. Oranın yükselmesi aylık taksiti ve toplam
                geri ödemeyi artırır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama sonucuna sigorta masrafları dahil mi?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. DASK, konut sigortası, hayat sigortası ve bankaya göre
                değişebilen diğer giderler sonuçlara dahil değildir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama banka teklifinin aynısı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Araç yaklaşık sonuç verir. Bankanın faiz oranı, masraf,
                sigorta ve yuvarlama uygulamaları nedeniyle resmi ödeme planı
                farklı olabilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Farklı kredi seçeneklerini karşılaştırın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Farklı faiz oranları, peşinat tutarları ve vadeler girerek
                bütçenize uygun konut kredisi senaryolarını karşılaştırabilirsiniz.
              </p>
            </div>

            <a
              href="#top"
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