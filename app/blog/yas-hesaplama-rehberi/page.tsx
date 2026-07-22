import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Baby,
  Calendar,
  CalendarClock,
  CalendarDays,
  Calculator,
  Cake,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  FileText,
  Gift,
  Info,
  ListChecks,
  Sparkles,
  TimerReset,
  UserRound,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath = "/blog/yas-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/yas-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Yaş hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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
  birthDate: string;
  targetDate: string;
  result: string;
  note: string;
};

const pageTitle =
  "Yaş Hesaplama Rehberi: Doğum Tarihine Göre Yıl, Ay ve Gün";

const pageDescription =
  "Doğum tarihine göre yaş nasıl hesaplanır, yıl-ay-gün farkı nasıl bulunur, doğum günü gelmeden yaş neden değişmez ve artık yıl etkisi nedir öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Yaş nasıl hesaplanır?",
    answer:
      "Hesaplama tarihinden doğum tarihi çıkarılır. Ancak doğum günü o yıl henüz gelmediyse takvim yılı farkından bir çıkarılır.",
  },
  {
    question: "Doğum günü gelmeden yaş artar mı?",
    answer:
      "Hayır. Kişi yeni yaşına doğum gününün geldiği tarihte girer. Yıl değişmiş olsa bile doğum günü gelmediyse yaş değişmez.",
  },
  {
    question: "Bugünkü yaş nasıl bulunur?",
    answer:
      "Bugünün yılı ile doğum yılı arasındaki fark alınır. Bu yıl doğum günü henüz gelmediyse sonuçtan bir çıkarılır.",
  },
  {
    question: "Tam yaş ile doldurulan yaş aynı mıdır?",
    answer:
      "Evet. Doldurulan yaş, tamamlanan tam yıl sayısını ifade eder. Halk arasında kullanılan yaş bazen girilen yaşı anlatabilir.",
  },
  {
    question: "Yaş yıl, ay ve gün olarak nasıl hesaplanır?",
    answer:
      "Doğum tarihi ile hedef tarih arasındaki takvim farkı yıl, ay ve gün bileşenlerine ayrılır. Ay ve gün borçlanması gerektiğinde önceki ayın gün sayısı dikkate alınır.",
  },
  {
    question: "1990 doğumlu biri 2026 yılında kaç yaşındadır?",
    answer:
      "Doğum günü 2026 yılında geçmişse 36, henüz gelmediyse 35 yaşındadır.",
  },
  {
    question: "2000 doğumlu biri 2026 yılında kaç yaşındadır?",
    answer:
      "Doğum günü geçmişse 26, gelmediyse 25 yaşındadır.",
  },
  {
    question: "29 Şubat doğumlular yaşını ne zaman doldurur?",
    answer:
      "Yaş her takvim yılında artar. Resmi ve hukuki uygulamada doğum gününün hangi tarihte kabul edileceği ülkeye ve kurala göre değişebilir.",
  },
  {
    question: "Yaş hesaplamasında saat önemli midir?",
    answer:
      "Günlük kullanımda yalnızca doğum tarihi kullanılır. Çok hassas hesaplamalarda doğum saati ve saat dilimi de dikkate alınabilir.",
  },
  {
    question: "Bebek yaşı neden ay olarak söylenir?",
    answer:
      "İlk yıllarda gelişim hızlı olduğu için yaşın ay ve hatta hafta olarak ifade edilmesi daha anlamlı ve hassas bilgi verir.",
  },
  {
    question: "18 yaş ne zaman tamamlanır?",
    answer:
      "Kişi doğum tarihinin 18. yıl dönümünde 18 yaşını tamamlar. Hukuki sonuçlar için ilgili mevzuattaki özel kurallar ayrıca kontrol edilmelidir.",
  },
  {
    question: "Yaştan doğum yılı nasıl bulunur?",
    answer:
      "Hedef yıldan yaş çıkarılır. Ancak kişinin o yıl doğum gününün gelip gelmediğine göre doğum yılı bir yıl farklı çıkabilir.",
  },
  {
    question: "Bir sonraki doğum gününe kaç gün kaldığı nasıl bulunur?",
    answer:
      "Bu yılki doğum günü geçmişse gelecek yılın doğum günü, geçmemişse bu yılki doğum günü hedef alınır ve bugünden fark hesaplanır.",
  },
  {
    question: "Kronolojik yaş nedir?",
    answer:
      "Kronolojik yaş, doğum tarihinden itibaren geçen gerçek takvim süresidir. Biyolojik veya gelişimsel yaştan farklı bir kavramdır.",
  },
  {
    question: "Miladi ve hicri yaş aynı mıdır?",
    answer:
      "Hayır. Takvim yıllarının uzunlukları farklı olduğu için aynı kişi hicri takvimde daha yüksek yıl sayısına ulaşabilir.",
  },
  {
    question: "Yaş hesaplama aracı kesin resmi sonuç verir mi?",
    answer:
      "Araç matematiksel yaş hesabı yapar. Resmi işlemlerde nüfus kayıtları ve ilgili kurumun tarih kuralları esas alınır.",
  },
  {
    question: "Aynı yıl doğan herkes aynı yaşta mıdır?",
    answer:
      "Hayır. Doğum ayı ve günü farklıysa aynı yıl doğan kişiler yılın bir bölümünde farklı yaşlarda olabilir.",
  },
  {
    question: "Yaş neden bazen bir fazla söylenir?",
    answer:
      "Bazı kişiler içinde bulunulan yaş yerine girilen yaşı söyler. Resmi ve matematiksel hesapta tamamlanan tam yıl esas alınır.",
  },
];

const tocItems: TocItem[] = [
  { id: "yas-nedir", title: "Yaş nedir?" },
  { id: "yas-hesaplama-formulu", title: "Yaş hesaplama formülü" },
  { id: "dogum-gunu-kontrolu", title: "Doğum günü kontrolü" },
  { id: "yil-ay-gun", title: "Yıl, ay ve gün hesabı" },
  { id: "ornekler", title: "Örnek yaş hesaplamaları" },
  { id: "bebek-yasi", title: "Bebek yaşı hesaplama" },
  { id: "29-subat", title: "29 Şubat doğumlular" },
  { id: "sonraki-dogum-gunu", title: "Sonraki doğum günü" },
  { id: "resmi-islemler", title: "Resmi işlemlerde yaş" },
  { id: "takvim-farki", title: "Takvimlere göre yaş" },
  { id: "sik-hatalar", title: "Sık yapılan hatalar" },
  { id: "sss", title: "Sık sorulan sorular" },
];

const exampleRows: ExampleRow[] = [
  {
    birthDate: "10 Mart 1990",
    targetDate: "20 Temmuz 2026",
    result: "36 yaş",
    note: "Doğum günü geçti",
  },
  {
    birthDate: "10 Kasım 1990",
    targetDate: "20 Temmuz 2026",
    result: "35 yaş",
    note: "Doğum günü henüz gelmedi",
  },
  {
    birthDate: "1 Ocak 2000",
    targetDate: "1 Ocak 2026",
    result: "26 yaş",
    note: "Tam doğum günü",
  },
  {
    birthDate: "31 Aralık 2000",
    targetDate: "30 Aralık 2026",
    result: "25 yaş",
    note: "Bir gün sonra 26 olacak",
  },
  {
    birthDate: "20 Temmuz 2010",
    targetDate: "20 Temmuz 2026",
    result: "16 yaş",
    note: "Tam yıl dönümü",
  },
  {
    birthDate: "29 Şubat 2004",
    targetDate: "1 Mart 2026",
    result: "22 yaş",
    note: "Artık yıl doğumu",
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
      mainEntityOfPage:
        `https://www.https://hesaprehberionline.com${canonicalPath}`,
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
          url: "https://www.https://hesaprehberionline.com/logo.jpg",
        },
      },
      image:
        "https://www.https://hesaprehberionline.com/og/yas-hesaplama-rehberi.jpg",
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

export default function YasHesaplamaRehberiPage() {
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
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Doğum tarihine göre ayrıntılı yaş hesabı
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Yaş hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-fuchsia-200 bg-clip-text text-transparent">
                  yıl, ay, gün ve sonraki doğum günü
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Doğum tarihine göre tam yaşın nasıl bulunduğunu,
                doğum günü gelmeden yaşın neden değişmediğini ve yaşın
                yıl, ay, gün biçiminde nasıl hesaplandığını öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/yas-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Yaşını hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#yas-hesaplama-formulu"
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
                  "Tam yaş",
                  "Yıl-ay-gün",
                  "Doğum günü sayacı",
                  "Artık yıl",
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
                        Örnek hesaplama
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        10 Mart 1990
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Cake
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      20 Temmuz 2026 tarihinde
                    </p>
                    <p className="mt-2 text-5xl font-black text-blue-700">
                      36 yaş
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    2026 yılındaki doğum günü geçtiği için 36 tam yıl
                    tamamlanmıştır.
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
              id="yas-nedir"
              title="Yaş nedir?"
            >
              <Lead>
                Yaş, kişinin doğum tarihinden belirli bir hedef tarihe
                kadar tamamladığı takvim süresidir.
              </Lead>

              <p>
                Günlük ve resmi kullanımda yaş, tamamlanan tam yıl
                sayısıyla ifade edilir. Bir kişi 36. yaş gününe
                ulaştığında 36 yaşını doldurmuş olur.
              </p>

              <p>
                Bazı konuşmalarda “37 yaşından gün almak” gibi ifadeler
                kullanılır. Ancak matematiksel ve resmi yaş hesabında
                tamamlanan yıl esas alınır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={UserRound}
                  title="Tam yaş"
                >
                  <p>
                    Doğumdan itibaren tamamlanan tam yıl sayısıdır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarDays}
                  title="Takvim yaşı"
                >
                  <p>
                    Doğum tarihi ile hedef tarih arasındaki gerçek takvim
                    farkıdır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Clock3}
                  title="Ayrıntılı yaş"
                >
                  <p>
                    Tam yılın yanında kalan ay ve günleri de gösterir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="yas-hesaplama-formulu"
              title="Yaş hesaplama formülü"
            >
              <Lead>
                Temel yaş hesabında hedef yıl ile doğum yılı arasındaki
                fark alınır ve doğum günü kontrol edilir.
              </Lead>

              <FormulaBox
                title="Temel tam yaş formülü"
                formula="Yaş = Hedef Yıl − Doğum Yılı"
                description="Hedef tarihte doğum günü henüz gelmediyse sonuçtan 1 çıkarılır."
              />

              <h3 className="text-2xl font-black text-slate-950">
                1995 doğumlu biri için örnek
              </h3>

              <ol className="space-y-4">
                {[
                  "Hedef yılı belirleyin: 2026.",
                  "Doğum yılını çıkarın: 2026 − 1995 = 31.",
                  "2026 yılındaki doğum gününün gelip gelmediğini kontrol edin.",
                  "Doğum günü geldiyse 31, gelmediyse 30 yaş sonucu elde edilir.",
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

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Sadece yılları çıkarmak her zaman doğru sonuç vermez.
                    Ay ve gün karşılaştırması mutlaka yapılmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="dogum-gunu-kontrolu"
              title="Doğum günü kontrolü nasıl yapılır?"
            >
              <Lead>
                Yaşı doğru bulmak için hedef tarihte o yılın doğum
                gününün geçip geçmediği kontrol edilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <CheckCircle2
                    className="h-7 w-7 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Doğum günü geçtiyse
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yıl farkı doğrudan tam yaş olur. Örneğin mart doğumlu
                    bir kişinin temmuzdaki yaşı yıl farkına eşittir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <TimerReset
                    className="h-7 w-7 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Doğum günü gelmediyse
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Yıl farkından bir çıkarılır. Çünkü son doğum gününden
                    itibaren yeni tam yıl henüz tamamlanmamıştır.
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[820px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Doğum tarihi
                      </th>
                      <th className="px-5 py-4">
                        Hedef tarih
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
                      <tr
                        key={`${row.birthDate}-${row.targetDate}`}
                      >
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.birthDate}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.targetDate}
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
              id="yil-ay-gun"
              title="Yaş yıl, ay ve gün olarak nasıl hesaplanır?"
            >
              <Lead>
                Ayrıntılı yaş hesabı, tamamlanan yılların yanında kalan
                tam ay ve gün sayısını da gösterir.
              </Lead>

              <p>
                Önce hedef tarihten doğum tarihinin yıl, ay ve gün
                değerleri ayrı ayrı çıkarılır. Gün sonucu negatifse
                önceki aydan gün ödünç alınır; ay sonucu negatifse bir
                yıldan 12 ay ödünç alınır.
              </p>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Ayrıntılı yaş"
                  formula="Yaş = Tam Yıl + Kalan Ay + Kalan Gün"
                  description="Ayların farklı uzunlukları nedeniyle gerçek takvim hesabı kullanılmalıdır."
                />

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <CalendarClock
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Örnek sonuç
                  </h3>

                  <p className="mt-3 text-slate-600">
                    Doğum: 15 Mayıs 1998
                  </p>

                  <p className="mt-1 text-slate-600">
                    Hedef: 20 Temmuz 2026
                  </p>

                  <p className="mt-4 text-2xl font-black text-emerald-700">
                    28 yıl, 2 ay, 5 gün
                  </p>
                </div>
              </div>

              <p>
                Bu yöntem özellikle bebek gelişimi, sigorta süresi,
                eğitim yaşı ve kişisel tarih hesaplamalarında daha
                açıklayıcıdır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Örnek yaş hesaplamaları"
            >
              <Lead>
                Aynı doğum yılında doğan kişilerin yaşı, doğum ayı ve
                gününe göre yılın bir bölümünde farklı olabilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 1
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    5 Ocak 1985 doğumlu
                  </h3>

                  <p className="mt-4 text-slate-600">
                    20 Temmuz 2026 tarihinde doğum günü geçmiştir.
                  </p>

                  <p className="mt-2 text-xl font-black text-emerald-700">
                    41 yaş
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 2
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    5 Aralık 1985 doğumlu
                  </h3>

                  <p className="mt-4 text-slate-600">
                    20 Temmuz 2026 tarihinde doğum günü gelmemiştir.
                  </p>

                  <p className="mt-2 text-xl font-black text-emerald-700">
                    40 yaş
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 3
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    20 Temmuz 2000 doğumlu
                  </h3>

                  <p className="mt-4 text-slate-600">
                    20 Temmuz 2026 tam doğum günüdür.
                  </p>

                  <p className="mt-2 text-xl font-black text-emerald-700">
                    26 yaş
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 4
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    21 Temmuz 2000 doğumlu
                  </h3>

                  <p className="mt-4 text-slate-600">
                    Doğum gününe bir gün kalmıştır.
                  </p>

                  <p className="mt-2 text-xl font-black text-emerald-700">
                    25 yaş
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bebek-yasi"
              title="Bebek yaşı neden ay ve hafta olarak hesaplanır?"
            >
              <Lead>
                Bebeklerde gelişim hızlı olduğu için yalnızca yıl
                cinsinden yaş yeterince ayrıntılı bilgi vermez.
              </Lead>

              <p>
                Yenidoğan döneminde yaş gün veya hafta olarak, sonraki
                aylarda ise ay olarak ifade edilir. Örneğin 10 aylık bir
                bebek ile 18 aylık bir çocuk aynı şekilde “1 yaşında”
                denildiğinde gelişim farkı görünmez.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Baby}
                  title="İlk haftalar"
                >
                  <p>
                    Yenidoğan takibinde yaş genellikle gün ve hafta ile
                    ifade edilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarDays}
                  title="İlk iki yıl"
                >
                  <p>
                    Gelişim değerlendirmelerinde ay cinsinden yaş daha
                    kullanışlıdır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BadgeCheck}
                  title="Düzeltilmiş yaş"
                >
                  <p>
                    Prematüre bebeklerde sağlık uzmanları farklı bir yaş
                    yaklaşımı kullanabilir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Bebek gelişimi veya tıbbi değerlendirme için yalnızca
                    genel yaş hesabına dayanılmamalıdır. Sağlık
                    profesyonelinin önerisi esas alınmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="29-subat"
              title="29 Şubat doğumluların yaşı nasıl hesaplanır?"
            >
              <Lead>
                29 Şubat'ta doğan kişinin yaşı yalnızca artık yıllarda
                artmaz; her takvim yılında bir tam yıl daha tamamlanır.
              </Lead>

              <p>
                Matematiksel yaş hesabında doğum yılı ile hedef yıl
                arasındaki tam yıl sayısı esas alınır. Ancak artık olmayan
                yıllarda doğum gününün 28 Şubat mı yoksa 1 Mart mı kabul
                edileceği resmi işleme ve ülke hukukuna göre değişebilir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    29 Şubat 2004 doğumlu biri 2026 yılında 22 yaşına
                    girer. Takvimde 29 Şubat bulunmaması kişinin yalnızca
                    dört yılda bir yaş aldığı anlamına gelmez.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sonraki-dogum-gunu"
              title="Bir sonraki doğum gününe kaç gün kaldığı nasıl hesaplanır?"
            >
              <Lead>
                Bu yılki doğum günü geçmediyse mevcut yıl, geçtiyse
                gelecek yıl hedef alınır.
              </Lead>

              <FormulaBox
                title="Doğum günü sayacı"
                formula="Kalan Gün = Sonraki Doğum Günü − Bugün"
                description="Hesaplama yapılırken artık yıl ve ayların gerçek gün sayıları dikkate alınır."
              />

              <ol className="space-y-4">
                {[
                  "Bugünün ay ve gününü belirleyin.",
                  "Bu yılki doğum tarihiyle karşılaştırın.",
                  "Doğum günü henüz gelmediyse bu yılı hedef alın.",
                  "Doğum günü geçtiyse gelecek yılın doğum tarihini hedef alın.",
                  "İki tarih arasındaki takvim günü farkını hesaplayın.",
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
            </CalculatorContentSection>

            <CalculatorContentSection
              id="resmi-islemler"
              title="Resmi işlemlerde yaş nasıl değerlendirilir?"
            >
              <Lead>
                Resmi işlemlerde nüfus kayıtlarındaki doğum tarihi ve
                ilgili mevzuatın yaş kuralı esas alınır.
              </Lead>

              <p>
                Eğitim, sürücü belgesi, seçim, çalışma, emeklilik veya
                sözleşme ehliyeti gibi alanlarda “yaşını doldurmuş olmak”
                ifadesinin özel hukuki sonuçları olabilir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={FileText}
                  title="Nüfus kaydı"
                >
                  <p>
                    Resmi doğum tarihi temel kaynaktır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CalendarClock}
                  title="Kesin tarih"
                >
                  <p>
                    Yalnızca doğum yılı değil ay ve gün de kontrol edilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CircleHelp}
                  title="Özel mevzuat"
                >
                  <p>
                    İşlemin türüne göre farklı yaş ve süre kuralları
                    bulunabilir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Hesaplama aracındaki sonuç bilgilendirme amaçlıdır.
                    Resmi başvuru veya hukuki işlemde ilgili kurumun
                    kabul ettiği tarih ve yöntem kontrol edilmelidir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="takvim-farki"
              title="Farklı takvimlere göre yaş değişir mi?"
            >
              <Lead>
                Aynı doğum ve hedef tarihi farklı takvim sistemlerinde
                ifade edildiğinde tamamlanan yıl sayısı farklı görünebilir.
              </Lead>

              <p>
                Miladi takvim güneş yılına, hicri takvim ise ay yılına
                dayanır. Hicri yıl daha kısa olduğu için hicri yaş sayısı
                miladi yaştan daha yüksek çıkabilir.
              </p>

              <p>
                Günlük ve resmi işlemlerde Türkiye'de genel olarak miladi
                takvim kullanılır. Bu nedenle standart yaş hesabı miladi
                doğum tarihi üzerinden yapılır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Yaş hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, yalnızca doğum yılı ile hedef yılı
                çıkarmak ve doğum gününün gelip gelmediğini
                kontrol etmemektir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Sadece yılları çıkarmak",
                    error:
                      "Ay ve günü kontrol etmeden 2026 − 1990 = 36 sonucunu herkese uygulamak.",
                    solution:
                      "Hedef yıldaki doğum gününün gelip gelmediğini kontrol edin.",
                  },
                  {
                    title: "Girilen yaşı tam yaş sanmak",
                    error:
                      "36 yaşından gün alan kişiyi resmi olarak 36 yaşında kabul etmek.",
                    solution:
                      "Tamamlanan doğum günü sayısını esas alın.",
                  },
                  {
                    title: "29 Şubat doğumunu yanlış yorumlamak",
                    error:
                      "Kişinin yalnızca dört yılda bir yaş aldığını düşünmek.",
                    solution:
                      "Her takvim yılında bir tam yılın tamamlandığını unutmayın.",
                  },
                  {
                    title: "Ayları sabit 30 gün saymak",
                    error:
                      "Ayrıntılı yaş hesabında bütün ayları aynı uzunlukta kabul etmek.",
                    solution:
                      "Gerçek takvim aylarının gün sayılarını kullanın.",
                  },
                  {
                    title: "Bebek yaşını yalnızca yıl olarak vermek",
                    error:
                      "Gelişim takibinde ay ve hafta ayrıntısını gözden kaçırmak.",
                    solution:
                      "Özellikle ilk iki yılda ay ve hafta cinsinden yaş kullanın.",
                  },
                  {
                    title: "Resmi sonucu araçtan kesin kabul etmek",
                    error:
                      "Özel mevzuat ve kurum kurallarını kontrol etmemek.",
                    solution:
                      "Resmi işlemlerde ilgili kurumun kayıt ve yöntemini esas alın.",
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
                <Cake
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Yaşınızı ayrıntılı biçimde hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Doğum tarihinizi girerek tam yaşınızı, ay ve gün
                  ayrıntısını ve sonraki doğum gününe kalan süreyi
                  görüntüleyin.
                </p>

                <Link
                  href="/hesaplamalar/yas-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  Yaş hesaplama aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Yaş hesaplama hakkında sık sorulan sorular"
            >
              <Lead>
                Doğum günü, tam yaş, yıl-ay-gün hesabı ve 29 Şubat
                doğumlular hakkında en çok sorulan soruların yanıtlarını
                aşağıda bulabilirsiniz.
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
                    <Gift
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Ayrıntılı yaş sonucu
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Doğum tarihinize göre yaşınızı hesaplayın
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Tam yaşınızı, kalan ay ve günleri ve bir sonraki
                    doğum gününe kalan süreyi anında görüntüleyin.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/yas-hesaplama"
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