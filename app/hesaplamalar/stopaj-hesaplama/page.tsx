import type { Metadata } from "next";

import WithholdingTaxCalculator from "@/components/calculators/WithholdingTaxCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/stopaj-hesaplama";

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

const faqItems = [
  {
    question: "Stopaj nedir?",
    answer:
      "Stopaj, gelir elde edilirken kaynağında yapılan vergi kesintisidir.",
  },
  {
    question: "Faiz stopajı nasıl hesaplanır?",
    answer:
      "Brüt faiz geliri stopaj oranıyla çarpılarak kesinti tutarı bulunur.",
  },
  {
    question: "Net faiz nasıl bulunur?",
    answer:
      "Brüt faiz gelirinden stopaj kesintisi çıkarılarak net faiz hesaplanır.",
  },
  {
    question: "Stopaj ana paradan mı kesilir?",
    answer:
      "Genellikle ana paradan değil, faiz kazancı üzerinden hesaplanır.",
  },
  {
    question: "Stopaj oranı sabit midir?",
    answer:
      "Hayır. Ürün türü, vade ve yürürlükteki mevzuata göre değişebilir.",
  },
  {
    question: "Vadeli mevduatta stopaj uygulanır mı?",
    answer:
      "Uygulanabilir. Güncel oran ürün ve vade koşullarına göre doğrulanmalıdır.",
  },
  {
    question: "Günlük faiz kazancında stopaj nasıl etkiler?",
    answer:
      "Günlük brüt kazancın stopaj oranı kadar kısmı kesilerek net kazanç azalır.",
  },
  {
    question: "Stopaj oranı yüzde 15 ise ne anlama gelir?",
    answer:
      "Brüt faiz gelirinin yüzde 15'inin vergi kesintisi olarak ayrılması demektir.",
  },
  {
    question: "Brüt ve net getiri farkı nedir?",
    answer:
      "Brüt getiri kesinti öncesi, net getiri ise stopaj sonrası kazançtır.",
  },
  {
    question: "Vade sonu tutarı nasıl bulunur?",
    answer:
      "Ana para ile stopaj sonrası net faiz geliri toplanır.",
  },
  {
    question: "Stopaj hesaplama aracı hangi gelirlerde kullanılabilir?",
    answer:
      "Özellikle faiz ve benzeri brüt gelirlerin net karşılığını tahmin etmek için kullanılabilir.",
  },
  {
    question: "Efektif yıllık getiri neden hesaplanır?",
    answer:
      "Kısa vadeli getirinin yıllık bileşik karşılığını yaklaşık olarak görmek için kullanılır.",
  },
  {
    question: "Ana para girmeden stopaj hesaplanabilir mi?",
    answer:
      "Evet. Kesinti ve net faiz bulunabilir; ancak getiri oranları hesaplanamaz.",
  },
  {
    question: "Vade süresi neden istenir?",
    answer:
      "Günlük kazanç ve yıllıklaştırılmış getiri hesaplarını yapabilmek için kullanılır.",
  },
  {
    question: "Stopaj kesintisi iade edilir mi?",
    answer:
      "Bu durum gelir türüne ve vergi mevzuatına bağlıdır; kişisel vergi danışmanlığı gerekebilir.",
  },
  {
    question: "Stopaj ile gelir vergisi aynı mıdır?",
    answer:
      "Aynı kavram değildir. Stopaj, verginin kaynağında kesilme yöntemidir.",
  },
  {
    question: "Stopaj oranı sıfır olabilir mi?",
    answer:
      "Bazı ürün veya dönemlerde mevzuata bağlı olarak sıfır oran uygulanabilir.",
  },
  {
    question: "Negatif stopaj oranı girilebilir mi?",
    answer:
      "Hayır. Araç negatif oranları geçerli kabul etmez.",
  },
  {
    question: "Hesaplanan sonuç kesin midir?",
    answer:
      "Hayır. Sonuç tahminidir; banka ve güncel mevzuat nihai kesintiyi belirler.",
  },
  {
    question: "Güncel stopaj oranı nereden kontrol edilmelidir?",
    answer:
      "İlgili finans kuruluşunun ürün koşulları ve resmî düzenlemeler kontrol edilmelidir.",
  },
];

export default function StopajHesaplamaPage() {
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
          <span className="rounded-full bg-rose-100 px-4 py-2 text-sm font-semibold text-rose-700">
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

        <WithholdingTaxCalculator />

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Stopaj Nedir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Stopaj, belirli gelirler elde edilirken verginin kaynağında
            kesilmesini ifade eder. Faiz gelirlerinde kullanıcıya ödenen net
            tutar, brüt faiz kazancından stopaj kesintisinin çıkarılmasıyla
            bulunur.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Bu nedenle mevduat veya faiz getirisi karşılaştırırken yalnızca
            ilan edilen brüt oranı değil, stopaj sonrası elde kalacak net faiz
            gelirini de dikkate almak gerekir.
          </p>

          <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <h3 className="text-xl font-bold text-rose-950">
              Temel stopaj formülü
            </h3>

            <div className="mt-5 space-y-3 text-rose-900">
              <p>
                <strong>Stopaj tutarı:</strong> Brüt faiz × stopaj oranı
              </p>
              <p>
                <strong>Net faiz:</strong> Brüt faiz − stopaj tutarı
              </p>
              <p>
                <strong>Vade sonu:</strong> Ana para + net faiz
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Brüt Faiz ve Net Faiz Arasındaki Fark
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Brüt faiz
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vergi kesintisi uygulanmadan önce hesaplanan toplam faiz
                geliridir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Net faiz
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Stopaj kesintisinden sonra kullanıcıya kalan gerçek faiz
                geliridir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Stopaj Hesabında Dikkat Edilecek Noktalar
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Güncel oran
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Stopaj oranları zaman içinde değişebileceği için güncel oran
                doğrulanmalıdır.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Ürün türü
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Mevduat, fon veya farklı gelir türlerinde uygulama değişebilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Vade süresi
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Bazı ürünlerde vade süresi stopaj oranını etkileyebilir.
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Net karşılaştırma
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Finansal ürünleri net getiri üzerinden karşılaştırmak daha
                sağlıklı sonuç verir.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek Stopaj Senaryoları
          </h2>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Brüt faiz
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Stopaj oranı
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Stopaj
                  </th>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Net faiz
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-5 py-4 text-slate-700">5.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%10</td>
                  <td className="px-5 py-4 text-slate-700">500 TL</td>
                  <td className="px-5 py-4 text-slate-700">4.500 TL</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-slate-700">10.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%15</td>
                  <td className="px-5 py-4 text-slate-700">1.500 TL</td>
                  <td className="px-5 py-4 text-slate-700">8.500 TL</td>
                </tr>

                <tr>
                  <td className="px-5 py-4 text-slate-700">25.000 TL</td>
                  <td className="px-5 py-4 text-slate-700">%17,5</td>
                  <td className="px-5 py-4 text-slate-700">4.375 TL</td>
                  <td className="px-5 py-4 text-slate-700">20.625 TL</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            {faqItems.map((item) => (
              <article key={item.question}>
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.question}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-rose-700 to-orange-700 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Stopaj sonrası net kazancınızı hesaplayın
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-rose-100">
                Brüt faiz ve stopaj oranını değiştirerek farklı net getiri
                senaryolarını saniyeler içinde karşılaştırın.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-rose-800 transition hover:bg-rose-50"
            >
              Yeniden Hesapla
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
