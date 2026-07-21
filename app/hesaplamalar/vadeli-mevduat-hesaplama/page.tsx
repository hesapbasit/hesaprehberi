import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  BadgePercent,
  Banknote,
  Calculator,
  CalendarDays,
  CheckCircle2,
  FileText,
  Info,
  Landmark,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import TimeDepositCalculator from "@/components/calculators/TimeDepositCalculator";

export const metadata: Metadata = {
  title: "Vadeli Mevduat Hesaplama | Net Faiz Getirisi",
  description:
    "Vadeli mevduat hesaplama aracıyla ana para, faiz oranı, vade ve stopaj bilgilerine göre brüt faiz, net kazanç ve vade sonu tutarını hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/vadeli-mevduat-hesaplama",
  },
  openGraph: {
    title: "Vadeli Mevduat Hesaplama",
    description:
      "Vadeli mevduat faiz getirisini, stopaj kesintisini ve vade sonu toplam tutarı kolayca hesaplayın.",
    url: "/hesaplamalar/vadeli-mevduat-hesaplama",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vadeli Mevduat Hesaplama",
    description:
      "Vadeli mevduat net faiz getirisini saniyeler içinde hesaplayın.",
  },
};

const faqItems = [
  {
    question: "Vadeli mevduat nedir?",
    answer:
      "Vadeli mevduat, belirli bir süre boyunca bankada tutulan paraya önceden belirlenen faiz oranı üzerinden getiri sağlayan mevduat türüdür.",
  },
  {
    question: "Vadeli mevduat faizi nasıl hesaplanır?",
    answer:
      "Basit faiz yaklaşımında ana para, yıllık faiz oranı ve vade gün sayısı çarpılır; sonuç 365 güne bölünür. Brüt getiriden stopaj kesintisi çıkarılarak net getiri bulunur.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, herhangi bir vergi veya kesinti yapılmadan önce oluşan getiridir. Net faiz ise stopaj gibi kesintiler düşüldükten sonra hesap sahibine kalan tutardır.",
  },
  {
    question: "Vade sonu tutar nasıl bulunur?",
    answer:
      "Vade sonu tutar, başlangıçtaki ana para ile stopaj sonrası elde edilen net faiz kazancının toplamıdır.",
  },
  {
    question: "Stopaj oranını değiştirebilir miyim?",
    answer:
      "Evet. Hesaplama aracındaki stopaj alanına işleminize uygulanacak güncel oranı yazarak sonucu yeniden hesaplayabilirsiniz.",
  },
  {
    question: "Faiz oranı yıllık mı girilmelidir?",
    answer:
      "Evet. Araçtaki faiz oranı alanı yıllık nominal faiz oranı kabul edilerek hesaplama yapar.",
  },
  {
    question: "Ay seçildiğinde vade nasıl hesaplanır?",
    answer:
      "Ay seçeneği kullanıldığında girilen ay sayısı yıllık 365 gün üzerinden yaklaşık gün karşılığına dönüştürülür.",
  },
  {
    question: "Hesaplanan getiri banka sonucuyla aynı olur mu?",
    answer:
      "Her zaman birebir aynı olmayabilir. Bankaların gün sayım yöntemi, valör tarihi, faiz uygulaması, kesintileri ve yuvarlama yöntemleri farklılık gösterebilir.",
  },
];

const exampleRows = [
  {
    principal: "50.000 TL",
    days: "32 gün",
    rate: "%40",
    gross: "1.753,42 TL",
  },
  {
    principal: "100.000 TL",
    days: "32 gün",
    rate: "%45",
    gross: "3.945,21 TL",
  },
  {
    principal: "250.000 TL",
    days: "92 gün",
    rate: "%45",
    gross: "28.356,16 TL",
  },
];

export default function VadeliMevduatHesaplamaPage() {
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
                label: "Vadeli Mevduat Hesaplama",
              },
            ]}
          />

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-800">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Mevduat ve Faiz
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Vadeli Mevduat
                <span className="block text-blue-700">
                  Getirinizi Anında Hesaplayın
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Ana para, vade süresi, yıllık faiz oranı ve stopaj
                bilgilerini girerek brüt faiz kazancınızı, net
                getirinizi ve vade sonu toplam tutarınızı
                hesaplayın.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {[
                  "Canlı hesaplama",
                  "Net faiz sonucu",
                  "Stopaj hesaplama",
                  "Gün ve ay seçimi",
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
                  title="Vadeli Mevduat Hesaplama | HesapRehberi"
                  description="Vadeli mevduat brüt faiz, stopaj, net kazanç ve vade sonu tutarını hesaplayın."
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                <Landmark className="h-6 w-6" aria-hidden="true" />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Bu araç hangi sonuçları verir?
              </h2>

              <ul className="mt-5 space-y-4">
                {[
                  "Brüt faiz getirisi",
                  "Stopaj kesintisi",
                  "Net faiz kazancı",
                  "Vade sonu toplam tutar",
                  "Net getiri oranı",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <BadgeCheck
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    </span>

                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <TimeDepositCalculator />

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: TrendingUp,
              title: "Canlı getiri hesabı",
              description:
                "Girdiğiniz değerler değiştikçe brüt ve net faiz sonuçları otomatik olarak güncellenir.",
            },
            {
              icon: BadgePercent,
              title: "Kesinti dahil sonuç",
              description:
                "Stopaj oranını belirleyerek vergi sonrası elinize geçecek net kazancı görüntüleyin.",
            },
            {
              icon: CalendarDays,
              title: "Esnek vade seçimi",
              description:
                "Vade süresini gün veya ay cinsinden belirleyerek farklı senaryoları karşılaştırın.",
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
                Vadeli mevduat faizi nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Vadeli mevduat getirisinde ana para, yıllık faiz
                oranı ve vade süresi kullanılır. Önce brüt faiz
                hesaplanır, ardından varsa stopaj kesintisi
                düşülerek net kazanç bulunur.
              </p>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-start gap-3">
                  <Info
                    className="mt-1 h-5 w-5 shrink-0 text-blue-300"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-slate-300">
                    Bankaların ilan ettiği faiz oranları, vade
                    süresine ve müşteri koşullarına göre
                    değişebilir. Hesaplama yaparken güncel oranı
                    kullanın.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div>
                <h3 className="text-xl font-bold text-slate-950">
                  Brüt faiz formülü
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Ana para, yıllık faiz oranı ve vade gün sayısı
                  kullanılarak tahmini brüt faiz kazancı
                  hesaplanır.
                </p>

                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="font-mono text-sm font-bold leading-7 text-blue-950">
                    Brüt faiz = Ana para × Faiz oranı × Vade günü
                    ÷ 365
                  </p>
                </div>
              </div>

              <div className="mt-8 border-t border-slate-200 pt-8">
                <h3 className="text-xl font-bold text-slate-950">
                  Net faiz formülü
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Brüt kazanç üzerinden stopaj kesintisi
                  hesaplanır. Kesinti düşüldüğünde net faiz
                  getirisi ortaya çıkar.
                </p>

                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="font-mono text-sm font-bold leading-7 text-emerald-950">
                    Net faiz = Brüt faiz − Stopaj kesintisi
                  </p>

                  <p className="mt-2 font-mono text-sm font-bold leading-7 text-emerald-950">
                    Vade sonu = Ana para + Net faiz
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
              Farklı tutar ve vadelerde brüt faiz örnekleri
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki sonuçlar örnek yıllık faiz oranlarıyla
              hesaplanan yaklaşık brüt getirileri göstermektedir.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left">
                <thead className="bg-slate-950 text-white">
                  <tr>
                    <th className="px-6 py-4 text-sm font-bold">
                      Ana para
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      Vade
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      Yıllık faiz
                    </th>
                    <th className="px-6 py-4 text-sm font-bold">
                      Yaklaşık brüt getiri
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-200">
                  {exampleRows.map((row) => (
                    <tr
                      key={`${row.principal}-${row.days}`}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5 font-bold text-slate-950">
                        {row.principal}
                      </td>

                      <td className="px-6 py-5 font-semibold text-slate-700">
                        {row.days}
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                          {row.rate}
                        </span>
                      </td>

                      <td className="px-6 py-5 font-bold text-emerald-700">
                        {row.gross}
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
              Vadeli mevduat hakkında merak edilenler
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
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
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
                Diğer finans hesaplama araçlarını keşfedin
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Mevduat faizi, kredi, KDV, maaş ve diğer finansal
                hesaplamaları ücretsiz araçlarımızla kolayca
                gerçekleştirin.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 font-bold text-blue-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-50"
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