import type { Metadata } from "next";

import VehicleLoanCalculator from "@/components/calculators/VehicleLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/tasit-kredisi-hesaplama";

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

export default function TasitKredisiHesaplamaPage() {
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

        <VehicleLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Taşıt Kredisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Taşıt kredisi hesaplamasında araç fiyatından peşinat tutarı
            çıkarılarak tahmini kredi ihtiyacı bulunur. Ardından kredi tutarı,
            aylık faiz oranı ve vade bilgileri eşit taksitli kredi formülünde
            kullanılarak aylık ödeme hesaplanır.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Peşinat yükseldikçe kredi tutarı ve toplam faiz maliyeti azalabilir.
            Vadenin uzaması aylık taksiti düşürebilir ancak toplam geri ödeme
            tutarını genellikle artırır.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Hesaplamada kullanılan temel bilgiler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Araç fiyatı:</strong> Satın alınması planlanan aracın
                satış bedelidir.
              </li>
              <li>
                <strong>Peşinat:</strong> Araç bedelinin kredi kullanılmadan
                ödenecek kısmıdır.
              </li>
              <li>
                <strong>Kredi tutarı:</strong> Araç fiyatından peşinat
                çıkarıldıktan sonra kalan finansman ihtiyacıdır.
              </li>
              <li>
                <strong>Aylık faiz oranı:</strong> Kredi bakiyesine her ay
                uygulanan faiz oranıdır.
              </li>
              <li>
                <strong>Vade:</strong> Kredinin kaç ayda geri ödeneceğini
                gösterir.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Taşıt Kredisi Seçerken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam geri ödeme
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yalnızca aylık taksit değil, vade sonunda ödenecek toplam tutar
                karşılaştırılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Peşinat miktarı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Daha yüksek peşinat kredi ihtiyacını azaltabilir ancak günlük
                ihtiyaçlar için yeterli nakit rezervi bırakılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Ek masraflar
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Tahsis ücreti, kasko, hayat sigortası ve rehin işlemi gibi
                giderler toplam maliyeti değiştirebilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Bütçeye uygun vade
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Aylık bütçeyi zorlamayan fakat toplam faiz yükünü gereksiz yere
                artırmayan bir vade tercih edilmelidir.
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
                Taşıt kredisi taksiti nasıl hesaplanır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kredi tutarı, aylık faiz oranı ve vade eşit taksitli kredi
                formülünde kullanılarak aylık ödeme bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Peşinat arttıkça aylık taksit azalır mı?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Evet. Diğer koşullar aynı kaldığında daha yüksek peşinat kredi
                tutarını ve buna bağlı aylık taksiti azaltır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vade uzadıkça toplam ödeme artar mı?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Çoğu durumda aylık taksit düşerken toplam faiz ve toplam geri
                ödeme yükselir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplamaya kasko dahil mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Kasko, hayat sigortası, tahsis ücreti ve diğer banka
                masrafları hesaplamaya dahil değildir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sıfır ve ikinci el araçlarda sonuç değişir mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Matematiksel hesaplama aynı yöntemle yapılır. Ancak bankaların
                faiz, vade ve kredi oranı koşulları aracın yaşına ve türüne göre
                farklılaşabilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç banka teklifinin aynısı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Araç yaklaşık bir sonuç verir. Resmî ödeme planı banka
                koşulları, masraflar ve yuvarlama yöntemleri nedeniyle farklı
                olabilir.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Farklı taşıt kredisi senaryolarını karşılaştırın
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Peşinat, faiz oranı ve vadeyi değiştirerek bütçenize uygun ödeme
                seçeneklerini inceleyebilirsiniz.
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