import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  CirclePercent,
  FileText,
  Info,
  ReceiptText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import KdvCalculator from "@/components/calculators/KdvCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kdv-hesaplama";

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

const faqItems = [
  {
    question: "KDV nedir?",
    answer:
      "Katma Değer Vergisi, mal ve hizmetlerin teslimi sırasında uygulanan dolaylı bir tüketim vergisidir. Vergi, satış bedeline eklenerek nihai tüketiciye yansıtılır.",
  },
  {
    question: "KDV hariç tutar nasıl hesaplanır?",
    answer:
      "KDV dahil tutar, 1 ile KDV oranının ondalık karşılığının toplamına bölünür. Örneğin yüzde 20 KDV dahil 1.200 TL için 1.200 / 1,20 işlemi yapılır ve KDV hariç tutar 1.000 TL bulunur.",
  },
  {
    question: "KDV dahil fiyat nasıl hesaplanır?",
    answer:
      "KDV hariç tutar, 1 ile KDV oranının ondalık karşılığının toplamıyla çarpılır. Örneğin 1.000 TL tutara yüzde 20 KDV uygulanırsa toplam 1.200 TL olur.",
  },
  {
    question: "KDV tutarı nasıl bulunur?",
    answer:
      "KDV hariç hesaplamada tutar ile KDV oranı çarpılır. KDV dahil hesaplamada ise toplam tutardan hesaplanan KDV hariç bedel çıkarılır.",
  },
  {
    question: "Özel KDV oranı girebilir miyim?",
    answer:
      "Evet. Hesaplama aracındaki Özel seçeneğini kullanarak yüzde 0 ile yüzde 100 arasında farklı bir oran girebilirsiniz.",
  },
  {
    question: "Hesaplama sonucu resmî belge yerine geçer mi?",
    answer:
      "Hayır. Araç bilgilendirme amacıyla matematiksel hesaplama yapar. Fatura, beyanname ve diğer resmî işlemlerde güncel mevzuat ve mali müşavir görüşü esas alınmalıdır.",
  },
];

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

export default function KdvHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-slate-200/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-14 pt-8 md:pb-20 md:pt-10">
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

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                {calculator.category}
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                KDV Hesaplama
                <span className="block text-blue-700">
                  Dahil ve Hariç Tutarı Anında Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                KDV hariç fiyata vergi ekleyin veya KDV dahil toplamın
                içerisindeki net tutarı ve vergi miktarını saniyeler içinde
                hesaplayın.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Canlı sonuç",
                  "Özel KDV oranı",
                  "Mobil uyumlu",
                  "Ücretsiz kullanım",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <ShareButtons
                  title={`${calculator.title} | HesapRehberi`}
                  description={calculator.description}
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                <ReceiptText className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Bu araçla neler hesaplanır?
              </h2>

              <ul className="mt-5 space-y-4">
                {[
                  "KDV hariç tutardan KDV dahil toplam",
                  "KDV dahil fiyattan net tutar",
                  "Toplam vergi miktarı",
                  "Yüzde 1, 10, 20 ve özel oranlar",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <KdvCalculator />

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Calculator,
              title: "Otomatik hesaplama",
              description:
                "Tutar veya oran değiştiğinde sonuçları herhangi bir butona basmadan anında görüntüleyin.",
            },
            {
              icon: ShieldCheck,
              title: "Şeffaf sonuçlar",
              description:
                "KDV hariç tutarı, KDV miktarını ve ödenecek toplamı ayrı ayrı inceleyin.",
            },
            {
              icon: CirclePercent,
              title: "Esnek oran seçimi",
              description:
                "Hazır oranları kullanın veya ihtiyacınıza uygun özel bir KDV oranı belirleyin.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                {title}
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-950 p-8 text-white md:p-10">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-blue-100">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Hesaplama rehberi
              </span>

              <h2 className="mt-6 text-3xl font-bold tracking-tight">
                KDV hesaplama nasıl yapılır?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                KDV hesaplama yöntemi, elinizdeki fiyatın vergiyi içerip
                içermemesine göre değişir. Doğru formülü kullanarak net fiyat,
                vergi miktarı ve toplam bedel ayrı ayrı bulunabilir.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-blue-300"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-slate-300">
                    Bir ürün veya hizmete uygulanacak KDV oranı, işlemin
                    niteliğine göre değişebilir. Resmî işlemlerde güncel
                    mevzuatı kontrol edin.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  KDV hariç tutardan hesaplama
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Önce KDV hariç tutar, KDV oranıyla çarpılarak vergi miktarı
                  bulunur. Daha sonra bu tutar başlangıç fiyatına eklenir.
                </p>

                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="font-mono text-sm font-bold text-blue-950">
                    KDV Tutarı = KDV Hariç Tutar × KDV Oranı
                  </p>
                  <p className="mt-2 font-mono text-sm font-bold text-blue-950">
                    KDV Dahil Tutar = KDV Hariç Tutar + KDV Tutarı
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-950">
                  KDV dahil tutardan hesaplama
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  KDV dahil toplam, 1 ile KDV oranının ondalık karşılığının
                  toplamına bölünür. Böylece vergi hariç net tutar bulunur.
                </p>

                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-mono text-sm font-bold text-emerald-950">
                    KDV Hariç Tutar = KDV Dahil Tutar ÷ (1 + KDV Oranı)
                  </p>
                  <p className="mt-2 font-mono text-sm font-bold text-emerald-950">
                    KDV Tutarı = KDV Dahil Tutar − KDV Hariç Tutar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Örnek hesaplamalar
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Farklı KDV oranlarına göre örnekler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki tabloda 1.000 TL KDV hariç tutara farklı oranlar
              uygulandığında oluşan sonuçları görebilirsiniz.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold">
                      KDV hariç tutar
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      KDV oranı
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      KDV tutarı
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      KDV dahil toplam
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {[
                    {
                      excluded: "1.000,00 TL",
                      rate: "%1",
                      vat: "10,00 TL",
                      included: "1.010,00 TL",
                    },
                    {
                      excluded: "1.000,00 TL",
                      rate: "%10",
                      vat: "100,00 TL",
                      included: "1.100,00 TL",
                    },
                    {
                      excluded: "1.000,00 TL",
                      rate: "%20",
                      vat: "200,00 TL",
                      included: "1.200,00 TL",
                    },
                  ].map((row) => (
                    <tr
                      key={row.rate}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5 font-semibold text-slate-900">
                        {row.excluded}
                      </td>
                      <td className="px-6 py-5">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                          {row.rate}
                        </span>
                      </td>
                      <td className="px-6 py-5 font-semibold text-emerald-700">
                        {row.vat}
                      </td>
                      <td className="px-6 py-5 font-bold text-slate-950">
                        {row.included}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
              Sık sorulan sorular
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              KDV hesaplama hakkında merak edilenler
            </h2>
          </div>

          <div className="mt-9 divide-y divide-slate-200">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group py-5 first:pt-0 last:pb-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-950">
                  <span>{item.question}</span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-blue-700 group-open:text-white">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>

                <p className="max-w-4xl pt-4 leading-8 text-slate-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 p-8 text-white shadow-xl shadow-blue-950/20 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold text-blue-100">
                <Calculator className="h-4 w-4" aria-hidden="true" />
                HesapRehberi
              </span>

              <h2 className="mt-5 text-3xl font-bold tracking-tight md:text-4xl">
                Diğer hesaplama araçlarını keşfedin
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Kredi, faiz, maaş, mevduat ve daha birçok finansal hesaplamayı
                ücretsiz araçlarımızla saniyeler içinde gerçekleştirin.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 font-bold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Tüm hesaplamalar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}