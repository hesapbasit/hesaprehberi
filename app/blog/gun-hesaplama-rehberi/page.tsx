import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Calendar,
  CalendarCheck2,
  CalendarClock,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  Info,
  ListChecks,
  Minus,
  Plus,
  Sparkles,
  TimerReset,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath = "/blog/gun-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/gun-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Gün hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type FaqItem = {
  question: string;
  answer: string;
};

type TocItem = {
  id: string;
  title: string;
};

type ExampleRow = {
  start: string;
  end: string;
  result: string;
  note: string;
};

const pageTitle =
  "Gün Hesaplama Rehberi: İki Tarih Arası Gün, Tarih Ekleme ve Çıkarma";

const pageDescription =
  "İki tarih arasındaki gün sayısını, belirli bir tarihten önceki veya sonraki tarihi, iş günü farkını ve artık yıl etkisini örneklerle öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "İki tarih arasındaki gün sayısı nasıl hesaplanır?",
    answer:
      "Bitiş tarihinden başlangıç tarihi çıkarılır. Hesaplamada başlangıç gününün dahil edilip edilmediğine göre sonuç değişebilir. Standart tarih farkı hesabında başlangıç günü genellikle sıfırıncı gün kabul edilir.",
  },
  {
    question: "Başlangıç ve bitiş günü hesaba dahil edilir mi?",
    answer:
      "Bu, kullanım amacına bağlıdır. Standart matematiksel farkta başlangıç günü dahil edilmez. Her iki günü de dahil etmek istiyorsanız hesaplanan farka bir gün eklenir.",
  },
  {
    question: "Bugünden 30 gün sonrası nasıl bulunur?",
    answer:
      "Bugünün tarihine 30 takvim günü eklenir. Ay sonu veya yıl sonu geçişleri takvim kurallarına göre otomatik olarak dikkate alınır.",
  },
  {
    question: "Bir tarihten 45 gün öncesi nasıl hesaplanır?",
    answer:
      "Belirlenen tarihten 45 takvim günü çıkarılır. Ayların farklı gün sayılarına sahip olması nedeniyle düz ay hesabı yerine gerçek takvim hesabı yapılmalıdır.",
  },
  {
    question: "İş günü ile takvim günü arasındaki fark nedir?",
    answer:
      "Takvim günü haftanın tüm günlerini kapsar. İş günü hesabında hafta sonları ve tercihe göre resmi tatiller hesaptan çıkarılır.",
  },
  {
    question: "Hafta sonları gün hesabına dahil edilir mi?",
    answer:
      "Takvim günü hesabında dahildir. İş günü hesabında cumartesi ve pazar genellikle hariç tutulur.",
  },
  {
    question: "Artık yıl gün hesabını etkiler mi?",
    answer:
      "Evet. Artık yıllarda şubat ayı 29 gün sürer. Tarih aralığı 29 Şubat gününü kapsıyorsa toplam gün sayısı bir gün artabilir.",
  },
  {
    question: "Hangi yıllar artık yıldır?",
    answer:
      "Dörde tam bölünen yıllar genellikle artık yıldır. Ancak 100'e tam bölünen yıllar artık yıl sayılmaz; 400'e tam bölünenler yeniden artık yıl kabul edilir.",
  },
  {
    question: "1 Ocak ile 2 Ocak arasında kaç gün vardır?",
    answer:
      "Standart tarih farkı hesabında 1 gün vardır. Her iki tarih de dahil sayılırsa toplam 2 takvim günü kabul edilir.",
  },
  {
    question: "Aynı tarih arasında kaç gün vardır?",
    answer:
      "Standart fark sıfır gündür. O günün kendisini dahil eden süre hesabında bir gün olarak değerlendirilebilir.",
  },
  {
    question: "Ay hesabı ile 30 gün hesabı aynı mıdır?",
    answer:
      "Hayır. Aylar 28, 29, 30 veya 31 gün sürebilir. Bir takvim ayı eklemek ile 30 gün eklemek farklı tarihler üretebilir.",
  },
  {
    question: "90 gün kaç aydır?",
    answer:
      "Kesin olarak üç takvim ayı demek değildir. Yaklaşık üç ay olarak kullanılabilir ancak başlangıç tarihine göre üç takvim ayının gün karşılığı değişir.",
  },
  {
    question: "365 gün her zaman bir yıl mıdır?",
    answer:
      "Takvim yılı normal yıllarda 365, artık yıllarda 366 gündür. Bu nedenle 365 gün eklemek her durumda aynı takvim tarihine götürmeyebilir.",
  },
  {
    question: "Vade günü hesaplanırken başlangıç günü dahil edilir mi?",
    answer:
      "Finansal veya hukuki işlemin kuralına göre değişebilir. Sözleşme, mevzuat veya kurumun kullandığı yönteme bakılmalıdır.",
  },
  {
    question: "Resmi tatiller iş günü hesabında nasıl ele alınır?",
    answer:
      "Resmi tatil hariç iş günü isteniyorsa hafta sonlarına ek olarak ilgili ülkedeki resmi tatil takvimi de hesaptan çıkarılmalıdır.",
  },
  {
    question: "Gün farkı negatif çıkabilir mi?",
    answer:
      "Başlangıç tarihi bitiş tarihinden sonraysa yönlü hesaplamada sonuç negatif çıkabilir. Mutlak gün farkı isteniyorsa sonucun mutlak değeri alınır.",
  },
  {
    question: "Gece saatleri tarih farkını etkiler mi?",
    answer:
      "Sadece tarih alanlarıyla hesap yapılıyorsa saatler dikkate alınmaz. Tarih ve saat birlikte kullanılıyorsa geçen toplam saat, gün sonucunu etkileyebilir.",
  },
  {
    question: "Gün hesaplama aracı kesin hukuki süre verir mi?",
    answer:
      "Araç matematiksel tarih farkını hesaplar. Hukuki sürelerde tebliğ günü, tatil günü, son günün uzaması ve özel mevzuat gibi kurallar ayrıca incelenmelidir.",
  },
];

const tocItems: TocItem[] = [
  { id: "gun-hesaplama-nedir", title: "Gün hesaplama nedir?" },
  { id: "iki-tarih-arasi", title: "İki tarih arası gün hesabı" },
  { id: "dahil-haric", title: "Başlangıç ve bitiş günü" },
  { id: "tarih-ekleme", title: "Tarihe gün ekleme" },
  { id: "tarih-cikarma", title: "Tarihten gün çıkarma" },
  { id: "is-gunu", title: "İş günü hesaplama" },
  { id: "artik-yil", title: "Artık yıl etkisi" },
  { id: "ay-ve-yil-farki", title: "Ay ve yıl farkı" },
  { id: "ornekler", title: "Örnek hesaplamalar" },
  { id: "kullanim-alanlari", title: "Kullanım alanları" },
  { id: "sik-hatalar", title: "Sık yapılan hatalar" },
  { id: "sss", title: "Sık sorulan sorular" },
];

const exampleRows: ExampleRow[] = [
  {
    start: "1 Ocak 2026",
    end: "2 Ocak 2026",
    result: "1 gün",
    note: "Başlangıç hariç standart fark",
  },
  {
    start: "1 Ocak 2026",
    end: "31 Ocak 2026",
    result: "30 gün",
    note: "Her iki gün dahil edilirse 31 gün",
  },
  {
    start: "1 Şubat 2026",
    end: "1 Mart 2026",
    result: "28 gün",
    note: "2026 artık yıl değildir",
  },
  {
    start: "1 Şubat 2028",
    end: "1 Mart 2028",
    result: "29 gün",
    note: "2028 artık yıldır",
  },
  {
    start: "15 Haziran 2026",
    end: "15 Temmuz 2026",
    result: "30 gün",
    note: "Bir takvim ayı",
  },
  {
    start: "31 Ocak 2026",
    end: "28 Şubat 2026",
    result: "28 gün",
    note: "Ay sonu geçişi",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: pageTitle,
      description: pageDescription,
      inLanguage: "tr-TR",
      mainEntityOfPage: `https://www.hesaprehberi.com${canonicalPath}`,
      datePublished: "2026-07-20",
      dateModified: "2026-07-20",
      author: {
        "@type": "Organization",
        name: "HesapRehberi",
      },
      publisher: {
        "@type": "Organization",
        name: "HesapRehberi",
        logo: {
          "@type": "ImageObject",
          url: "https://www.hesaprehberi.com/logo.jpg",
        },
      },
      image:
        "https://www.hesaprehberi.com/og/gun-hesaplama-rehberi.jpg",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

function Lead({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <p className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-lg font-semibold leading-8 text-slate-800">
      {children}
    </p>
  );
}

function FormulaBox({
  title,
  formula,
  description,
}: {
  title: string;
  formula: string;
  description: string;
}) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-950/10">
      <div className="border-b border-white/10 px-6 py-5">
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
          {title}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="font-mono text-lg font-black text-white sm:text-2xl">
            {formula}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Calendar;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        <Icon
          className="h-6 w-6"
          aria-hidden="true"
        />
      </div>

      <h3 className="mt-5 text-lg font-black text-slate-950">
        {title}
      </h3>

      <div className="mt-3 text-sm leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

export default function GunHesaplamaRehberiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <CalculatorLayout
        calculator={calculator}
        showShareButtons={false}
      >
        <section className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Tarih farkını doğru hesaplama rehberi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Gün hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                  iki tarih arası fark, gün ekleme ve çıkarma
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                İki tarih arasında kaç gün olduğunu, başlangıç gününün
                hesaba nasıl katıldığını, iş günü farkını ve belirli bir
                tarihten önceki veya sonraki tarihi örneklerle öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/gun-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Gün farkını hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#iki-tarih-arasi"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Hesaplama yöntemini gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "İki tarih arası",
                  "Gün ekleme",
                  "Gün çıkarma",
                  "İş günü",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-300"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="self-center">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-3xl bg-white p-6 sm:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        Basit örnek
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        1–31 Ocak 2026
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <CalendarClock
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Standart tarih farkı
                    </p>
                    <p className="mt-2 text-5xl font-black text-blue-700">
                      30 gün
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Her iki tarih de dahil edilirse kapsanan toplam gün
                    sayısı 31 olur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="İçindekiler"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
            >
              <div className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white">
                <div className="flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-blue-300" />

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Rehber
                    </p>
                    <h2 className="mt-1 text-lg font-black">
                      İçindekiler
                    </h2>
                  </div>
                </div>
              </div>

              <ol className="space-y-1 p-3">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection
              id="gun-hesaplama-nedir"
              title="Gün hesaplama nedir?"
            >
              <Lead>
                Gün hesaplama, iki tarih arasındaki zaman farkını
                belirlemek veya bir tarihe belirli sayıda gün ekleyip
                çıkarmak için yapılan takvim işlemidir.
              </Lead>

              <p>
                Gün farkı hesabı ilk bakışta basit görünse de başlangıç
                gününün dahil edilmesi, ayların farklı uzunlukları, artık
                yıllar, hafta sonları ve resmi tatiller sonucu
                değiştirebilir.
              </p>

              <p>
                Bu nedenle yapılacak hesaplamanın türü baştan
                belirlenmelidir. Takvim günü, iş günü, her iki tarih dahil
                süre veya yalnızca geçen tam gün sayısı birbirinden farklı
                sonuçlar verebilir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Calendar}
                  title="Takvim günü"
                >
                  <p>
                    Hafta sonları dahil, takvimde geçen bütün günleri
                    kapsar.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarCheck2}
                  title="İş günü"
                >
                  <p>
                    Hafta sonları ve seçime göre resmi tatiller hariç
                    hesaplanır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Clock3}
                  title="Geçen süre"
                >
                  <p>
                    Başlangıç anından bitiş anına kadar geçen gerçek zaman
                    farkını ifade eder.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="iki-tarih-arasi"
              title="İki tarih arasındaki gün sayısı nasıl hesaplanır?"
            >
              <Lead>
                Standart yöntemde bitiş tarihinin takvim değeri başlangıç
                tarihinin takvim değerinden çıkarılır.
              </Lead>

              <FormulaBox
                title="Temel gün farkı"
                formula="Gün Farkı = Bitiş Tarihi − Başlangıç Tarihi"
                description="Bu sonuç genellikle başlangıç gününü sıfırıncı gün kabul eder. Her iki gün dahil edilecekse sonuca bir gün eklenir."
              />

              <h3 className="text-2xl font-black text-slate-950">
                10 Mart ile 25 Mart arasındaki fark
              </h3>

              <ol className="space-y-4">
                {[
                  "Başlangıç tarihini belirleyin: 10 Mart.",
                  "Bitiş tarihini belirleyin: 25 Mart.",
                  "Takvim farkını alın: 25 − 10 = 15 gün.",
                  "Her iki günü dahil etmek istiyorsanız sonuca 1 ekleyin: 16 gün.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[820px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Başlangıç
                      </th>
                      <th className="px-5 py-4">
                        Bitiş
                      </th>
                      <th className="px-5 py-4">
                        Sonuç
                      </th>
                      <th className="px-5 py-4">
                        Açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={`${row.start}-${row.end}`}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.start}
                        </td>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.end}
                        </td>
                        <td className="px-5 py-4 font-black text-blue-700">
                          {row.result}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="dahil-haric"
              title="Başlangıç ve bitiş günü dahil edilir mi?"
            >
              <Lead>
                Gün hesabındaki en önemli ayrım, başlangıç ve bitiş
                tarihlerinin kapsanan süreye dahil edilip edilmediğidir.
              </Lead>

              <p>
                Standart tarih farkı hesabında aynı gün ile aynı gün
                arasındaki fark sıfırdır. Çünkü başlangıç anından bitiş
                anına kadar tam bir gün geçmemiştir.
              </p>

              <p>
                Ancak otel konaklaması, izin süresi, etkinlik süresi veya
                belirli bir dönemde kapsanan takvim günleri hesaplanırken
                her iki gün de dahil edilebilir.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Minus
                    className="h-7 w-7 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Başlangıç hariç
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    1 Ocak–2 Ocak farkı 1 gündür. Yaygın yazılım ve
                    tarih farkı yaklaşımı budur.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Plus
                    className="h-7 w-7 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Her iki gün dahil
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    1 Ocak ve 2 Ocak birlikte sayılırsa kapsanan süre 2
                    takvim günüdür.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Sonucun hangi amaçla kullanılacağını belirtmeden sadece
                    “kaç gün” demek belirsizlik yaratabilir. Hesaplama
                    sonucuyla birlikte dahil etme yöntemini de yazın.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="tarih-ekleme"
              title="Bir tarihe gün nasıl eklenir?"
            >
              <Lead>
                Tarihe gün ekleme işleminde ay sonu ve yıl sonu geçişleri
                gerçek takvim yapısına göre ilerletilir.
              </Lead>

              <p>
                Örneğin 25 Ocak 2026 tarihine 10 gün eklendiğinde önce
                ocak ayının kalan 6 günü geçilir, ardından şubat ayında 4
                gün ilerlenir. Sonuç 4 Şubat 2026 olur.
              </p>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Gün ekleme"
                  formula="Yeni Tarih = Başlangıç Tarihi + Gün Sayısı"
                  description="Ayların gün sayıları ve artık yıl kuralları otomatik olarak dikkate alınmalıdır."
                />

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <CalendarCheck2
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Örnek
                  </h3>

                  <p className="mt-3 text-slate-600">
                    20 Aralık 2026 + 20 gün
                  </p>

                  <p className="mt-4 text-2xl font-black text-emerald-700">
                    9 Ocak 2027
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Gün eklerken dikkat edilmesi gerekenler
              </h3>

              <div className="space-y-4">
                {[
                  "Başlangıç günü çoğunlukla sıfırıncı gün kabul edilir.",
                  "Ay sonlarında doğrudan gün numarası toplamak yerine takvim hesabı yapılır.",
                  "Şubat ayının 28 veya 29 gün sürdüğü kontrol edilir.",
                  "Yıl değişimi gerçek takvim sırasıyla yapılır.",
                  "İş günü ekleniyorsa hafta sonu ve tatil kuralları ayrıca uygulanır.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="tarih-cikarma"
              title="Bir tarihten gün nasıl çıkarılır?"
            >
              <Lead>
                Tarihten gün çıkarma, başlangıç tarihinden takvim üzerinde
                geriye doğru ilerleyerek önceki tarihin bulunmasıdır.
              </Lead>

              <p>
                Örneğin 10 Mart 2026 tarihinden 20 gün çıkarıldığında şubat
                ayına geçilir ve sonuç 18 Şubat 2026 olur.
              </p>

              <FormulaBox
                title="Gün çıkarma"
                formula="Önceki Tarih = Başlangıç Tarihi − Gün Sayısı"
                description="Ay ve yıl sınırları geriye doğru takvim sırasıyla aşılır."
              />

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold text-blue-700">
                    15 Nisan 2026
                  </p>
                  <p className="mt-2 text-slate-500">
                    30 gün önce
                  </p>
                  <p className="mt-4 text-xl font-black text-slate-950">
                    16 Mart 2026
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold text-blue-700">
                    1 Ocak 2027
                  </p>
                  <p className="mt-2 text-slate-500">
                    1 gün önce
                  </p>
                  <p className="mt-4 text-xl font-black text-slate-950">
                    31 Aralık 2026
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold text-blue-700">
                    1 Mart 2028
                  </p>
                  <p className="mt-2 text-slate-500">
                    1 gün önce
                  </p>
                  <p className="mt-4 text-xl font-black text-slate-950">
                    29 Şubat 2028
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="is-gunu"
              title="İş günü nasıl hesaplanır?"
            >
              <Lead>
                İş günü hesabında takvim günlerinden hafta sonları ve
                seçilen yönteme göre resmi tatiller çıkarılır.
              </Lead>

              <p>
                Türkiye'de standart çalışma düzeninde cumartesi ve pazar
                çoğunlukla hafta sonu kabul edilir. Ancak sektör ve iş
                sözleşmesine göre cumartesi iş günü sayılabilir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Calendar}
                  title="Takvim aralığı"
                >
                  <p>
                    Önce başlangıç ve bitiş arasındaki tüm günler
                    belirlenir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={TimerReset}
                  title="Hafta sonları"
                >
                  <p>
                    İş günü tanımına göre cumartesi ve pazar çıkarılır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BadgeCheck}
                  title="Resmi tatiller"
                >
                  <p>
                    Kullanım amacına göre ulusal ve dini tatiller ayrıca
                    düşülür.
                  </p>
                </FeatureCard>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Basit iş günü örneği
              </h3>

              <p>
                Pazartesi başlayan ve cuma sona eren bir aralıkta her iki
                gün dahil sayılırsa 5 iş günü vardır. Aynı aralık bir
                sonraki pazartesi sona ererse aradaki cumartesi ve pazar
                çıkarılarak 6 iş günü bulunur.
              </p>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Hukuki, bankacılık veya resmi başvuru sürelerinde iş
                    günü tanımı kurumdan kuruma değişebilir. Son günün
                    tatile denk gelmesiyle ilgili özel kurallar ayrıca
                    kontrol edilmelidir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="artik-yil"
              title="Artık yıl gün hesabını nasıl etkiler?"
            >
              <Lead>
                Artık yıllarda şubat ayı 29 gün sürer ve yıl toplam 366
                gündür.
              </Lead>

              <p>
                Bir yılın artık yıl olup olmadığını anlamak için önce dörde
                bölünüp bölünmediğine bakılır. Yüzün katı olan yıllar
                istisnadır; bunların artık yıl olabilmesi için 400'e de
                tam bölünmesi gerekir.
              </p>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Yıl
                      </th>
                      <th className="px-5 py-4">
                        Durum
                      </th>
                      <th className="px-5 py-4">
                        Gerekçe
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-black">
                        2026
                      </td>
                      <td className="px-5 py-4 text-rose-700">
                        Artık yıl değil
                      </td>
                      <td className="px-5 py-4">
                        4'e tam bölünmez
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black">
                        2028
                      </td>
                      <td className="px-5 py-4 text-emerald-700">
                        Artık yıl
                      </td>
                      <td className="px-5 py-4">
                        4'e tam bölünür
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black">
                        2100
                      </td>
                      <td className="px-5 py-4 text-rose-700">
                        Artık yıl değil
                      </td>
                      <td className="px-5 py-4">
                        100'e bölünür, 400'e bölünmez
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black">
                        2000
                      </td>
                      <td className="px-5 py-4 text-emerald-700">
                        Artık yıl
                      </td>
                      <td className="px-5 py-4">
                        400'e tam bölünür
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    1 Şubat ile 1 Mart arasındaki fark normal yılda 28,
                    artık yılda 29 gündür. Uzun tarih aralıklarında bu
                    farkların tamamı hesaba katılmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ay-ve-yil-farki"
              title="Gün, ay ve yıl farkı neden farklı sonuç verir?"
            >
              <Lead>
                Takvim ayları sabit sayıda gün sürmediği için “bir ay” ile
                “30 gün” her zaman aynı değildir.
              </Lead>

              <p>
                1 Ocak tarihine bir takvim ayı eklendiğinde 1 Şubat elde
                edilir ve fark 31 gündür. 1 Şubat'a bir takvim ayı
                eklendiğinde ise normal yılda 1 Mart elde edilir ve fark
                28 gündür.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <CalendarClock
                    className="h-7 w-7 text-blue-700"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    30 gün eklemek
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Başlangıç tarihinden tam 30 takvim günü ilerler.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <CalendarCheck2
                    className="h-7 w-7 text-violet-700"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Bir ay eklemek
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Takvimde aynı gün numarasına bir sonraki ayda ulaşmayı
                    hedefler.
                  </p>
                </div>
              </div>

              <p>
                Ay sonu tarihleri ayrıca dikkat gerektirir. 31 Ocak'a bir
                ay eklendiğinde şubat ayında 31. gün bulunmadığı için
                kullanılan sisteme göre ayın son günü tercih edilebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Gün hesaplama örnekleri"
            >
              <Lead>
                Aşağıdaki örnekler günlük hayatta sık karşılaşılan tarih
                farkı, ekleme ve çıkarma işlemlerini gösterir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 1
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    5 Mayıs–20 Mayıs
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Standart fark: 15 gün
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Her iki gün dahil: 16 gün
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 2
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    10 Ağustos + 45 gün
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Ağustosun kalan günleri ve eylül geçişi dikkate alınır.
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Sonuç: 24 Eylül
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 3
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    1 Mart 2028 − 1 gün
                  </h3>

                  <p className="mt-4 text-slate-600">
                    2028 artık yıldır.
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Sonuç: 29 Şubat 2028
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 4
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    Cuma + 3 iş günü
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Cumartesi ve pazar hariç tutulur.
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Sonuç: Çarşamba
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 5
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    1 Ocak–1 Nisan 2026
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Ocak 31, şubat 28, mart 31 gün.
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Standart fark: 90 gün
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 6
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    Aynı tarih
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Başlangıç ve bitiş aynıdır.
                  </p>

                  <p className="mt-2 text-lg font-black text-emerald-700">
                    Standart fark: 0 gün
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kullanim-alanlari"
              title="Gün hesaplama hangi alanlarda kullanılır?"
            >
              <Lead>
                Gün hesabı; finans, hukuk, eğitim, sağlık, seyahat ve
                proje yönetimi gibi birçok alanda kullanılır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={FileText}
                  title="Sözleşme ve süreler"
                >
                  <p>
                    Başvuru, bildirim, cayma veya teslim sürelerinin
                    planlanmasında kullanılır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Calculator}
                  title="Finansal vadeler"
                >
                  <p>
                    Ödeme tarihi, faiz dönemi ve vade sonunun
                    belirlenmesine yardımcı olur.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarCheck2}
                  title="Planlama"
                >
                  <p>
                    Tatil, proje, etkinlik ve eğitim takvimlerinin
                    hazırlanmasında kullanılır.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <CircleHelp
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Aynı gün farkı farklı alanlarda farklı biçimde
                    yorumlanabilir. Matematiksel sonucu kullanmadan önce
                    ilgili alanın dahil etme ve tatil kurallarını kontrol
                    edin.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Gün hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hatalar başlangıç gününü yanlış saymak, ayları
                30 gün kabul etmek ve artık yılı gözden kaçırmaktır.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Her ayı 30 gün kabul etmek",
                    error:
                      "Ocak, şubat ve mart aylarının aynı uzunlukta olduğunu varsaymak.",
                    solution:
                      "Gerçek takvim gün sayılarını kullanın.",
                  },
                  {
                    title: "Başlangıç gününü fark etmeden dahil etmek",
                    error:
                      "Standart fark ile kapsanan gün sayısını karıştırmak.",
                    solution:
                      "Sonuçta başlangıç gününün dahil olup olmadığını açıkça belirtin.",
                  },
                  {
                    title: "Artık yılı gözden kaçırmak",
                    error:
                      "Şubat ayını her yıl 28 gün kabul etmek.",
                    solution:
                      "Tarih aralığındaki her yıl için artık yıl kontrolü yapın.",
                  },
                  {
                    title: "Takvim günü ile iş gününü karıştırmak",
                    error:
                      "Hafta sonlarını otomatik olarak süreden çıkarmak veya dahil etmek.",
                    solution:
                      "Hesaplama türünü baştan seçin.",
                  },
                  {
                    title: "Bir ay ile 30 günü eşitlemek",
                    error:
                      "Takvim ayı ekleme ve sabit gün ekleme işlemlerini aynı sanmak.",
                    solution:
                      "İstenen birimi netleştirin: gün mü, takvim ayı mı?",
                  },
                  {
                    title: "Resmi tatilleri unutmak",
                    error:
                      "İş günü hesabında yalnızca hafta sonlarını çıkarmak.",
                    solution:
                      "Gerekliyse ilgili resmi tatil takvimini de kullanın.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-black text-slate-950">
                      <AlertTriangle
                        className="h-5 w-5 text-amber-600"
                        aria-hidden="true"
                      />
                      {item.title}
                    </h3>

                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl bg-rose-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-rose-700">
                          Hata
                        </p>
                        <p className="mt-2 text-sm leading-6 text-rose-900">
                          {item.error}
                        </p>
                      </div>

                      <div className="rounded-2xl bg-emerald-50 p-4">
                        <p className="text-xs font-black uppercase tracking-wide text-emerald-700">
                          Doğru yaklaşım
                        </p>
                        <p className="mt-2 text-sm leading-6 text-emerald-900">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-blue-950/20">
                <CalendarClock
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Tarih farkını saniyeler içinde bulun
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Başlangıç ve bitiş tarihini seçerek aradaki gün
                  sayısını, hafta ve ay karşılığını hızlıca
                  görüntüleyin.
                </p>

                <Link
                  href="/hesaplamalar/gun-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  Gün hesaplama aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Gün hesaplama hakkında sık sorulan sorular"
            >
              <Lead>
                Tarih farkı, gün ekleme, iş günü ve artık yıl hakkında en
                çok sorulan soruların yanıtlarını aşağıda bulabilirsiniz.
              </Lead>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <CalculatorFaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </CalculatorContentSection>

            <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl sm:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                    <Calendar
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Hızlı ve doğru tarih hesabı
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    İki tarih arasındaki gün sayısını hesaplayın
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Tarihleri seçin; toplam gün farkını ve ilgili zaman
                    karşılıklarını anında görüntüleyin.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/gun-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
                >
                  Hesaplama aracını aç
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </CalculatorLayout>
    </>
  );
}