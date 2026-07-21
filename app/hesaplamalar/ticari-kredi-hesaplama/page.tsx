import type { Metadata } from "next";

import CommercialLoanCalculator from "@/components/calculators/CommercialLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/ticari-kredi-hesaplama";

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

export default function TicariKrediHesaplamaPage() {
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

        <CommercialLoanCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Ticari Kredi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Ticari kredi hesaplamasında işletmenin ihtiyaç duyduğu toplam
            finansman tutarından kullanılacak öz kaynak düşülür. Kalan tutar
            için aylık faiz oranı ve vade kullanılarak tahmini eşit taksitli
            ödeme planı oluşturulur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Komisyon, sabit masraflar ve faiz üzerinden uygulanabilecek ek vergi
            veya fon oranları toplam maliyete dahil edildiğinde işletmenin
            gerçek nakit çıkışına daha yakın bir tahmin elde edilir.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">
              Hesaplamada kullanılan bilgiler
            </h3>

            <ul className="mt-5 space-y-3 text-slate-700">
              <li>
                <strong>Toplam yatırım tutarı:</strong> İşletmenin finanse
                etmeyi planladığı toplam ihtiyaçtır.
              </li>
              <li>
                <strong>Öz kaynak:</strong> İşletmenin kendi imkanlarıyla
                karşılayacağı tutardır.
              </li>
              <li>
                <strong>Kredi tutarı:</strong> Yatırım tutarından öz kaynak
                düşülerek hesaplanır.
              </li>
              <li>
                <strong>Komisyon ve masraflar:</strong> Finansmanın toplam
                maliyetini artıran ek kalemlerdir.
              </li>
              <li>
                <strong>Toplam geri ödeme:</strong> Taksitler, komisyon ve sabit
                masrafların toplamıdır.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Ticari Kredi Kullanırken Nelere Dikkat Edilmelidir?
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Nakit akışı
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Aylık taksit, işletmenin düzenli nakit girişleri ve operasyonel
                giderleriyle birlikte değerlendirilmelidir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Toplam finansman maliyeti
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Yalnızca ilan edilen faiz oranı değil, komisyon ve diğer
                masraflar da karşılaştırılmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Vade uyumu
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kredi vadesi, finanse edilen yatırımın gelir üretme süresiyle
                uyumlu olmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Teminat koşulları
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kefalet, ipotek, çek veya diğer teminat koşulları sözleşme
                öncesinde dikkatle incelenmelidir.
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
                Ticari kredi taksiti nasıl hesaplanır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Kredi tutarı, aylık faiz oranı ve vade eşit taksitli kredi
                formülünde kullanılarak tahmini taksit bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Öz kaynak kredi tutarını nasıl etkiler?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Öz kaynak yükseldikçe ihtiyaç duyulan kredi ve buna bağlı faiz
                maliyeti azalır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Komisyon hesaba dahil mi?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Evet. Girilen komisyon oranı kullanılan kredi tutarı üzerinden
                hesaplanarak toplam geri ödemeye eklenir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vergi oranı neden manuel giriliyor?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Uygulama kredi türüne, işletmeye ve güncel kurallara göre
                değişebileceğinden oran kullanıcı tarafından girilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Toplam maliyet oranı nedir?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Faiz, vergi, komisyon ve masrafların kredi tutarına oranını
                yaklaşık olarak gösterir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç banka teklifinin aynısı mıdır?
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç tahminidir; kesin değerler bankanın resmi teklif ve
                ödeme planında yer alır.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-slate-800 to-blue-900 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                İşletmeniz için farklı finansman senaryolarını inceleyin
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                Öz kaynak, vade, faiz ve masraf değerlerini değiştirerek nakit
                akışınıza uygun alternatifleri karşılaştırabilirsiniz.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}