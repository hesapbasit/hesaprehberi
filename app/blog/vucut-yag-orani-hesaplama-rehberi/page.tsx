import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Dumbbell,
  Gauge,
  HeartPulse,
  Info,
  ListChecks,
  Ruler,
  Scale,
  Sparkles,
  Target,
  UserRound,
  Weight,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/vucut-yag-orani-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/vucut-yag-orani-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Vücut yağ oranı hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type ReferenceRow = {
  category: string;
  men: string;
  women: string;
  note: string;
};

type ExampleRow = {
  profile: string;
  method: string;
  result: string;
  note: string;
};

const pageTitle =
  "Vücut Yağ Oranı Hesaplama Rehberi: U.S. Navy Formülü ve Referans Aralıkları";

const pageDescription =
  "Vücut yağ oranı nasıl hesaplanır, U.S. Navy yöntemi nasıl uygulanır, bel, boyun ve kalça ölçüleri nasıl alınır, sonuçlar nasıl yorumlanır öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Vücut yağ oranı nedir?",
    answer:
      "Vücut yağ oranı, toplam vücut ağırlığının yüzde kaçının yağ dokusundan oluştuğunu gösteren tahmini değerdir.",
  },
  {
    question: "Vücut yağ oranı nasıl hesaplanır?",
    answer:
      "Bel, boyun, boy ve kadınlarda kalça ölçüsü U.S. Navy formülünde kullanılarak tahmin yapılabilir. Ayrıca BKİ tabanlı denklemler de kullanılabilir.",
  },
  {
    question: "U.S. Navy yöntemi nedir?",
    answer:
      "U.S. Navy yöntemi, çevre ölçümleri ve boy bilgisini kullanarak vücut yağ yüzdesini tahmin eden pratik bir formüldür.",
  },
  {
    question: "Erkeklerde hangi ölçüler kullanılır?",
    answer:
      "Erkeklerde genellikle boy, bel çevresi ve boyun çevresi kullanılır.",
  },
  {
    question: "Kadınlarda hangi ölçüler kullanılır?",
    answer:
      "Kadınlarda boy, bel çevresi, kalça çevresi ve boyun çevresi kullanılır.",
  },
  {
    question: "Bel çevresi nereden ölçülür?",
    answer:
      "Kullanılan yönteme göre ölçüm noktası değişebilir. Aynı yöntemi izlemek için ölçüm protokolü her seferinde aynı uygulanmalıdır.",
  },
  {
    question: "Boyun çevresi nasıl ölçülür?",
    answer:
      "Mezura boynun çevresine, genellikle gırtlak çıkıntısının hemen altından yatay şekilde yerleştirilir.",
  },
  {
    question: "Kalça çevresi nasıl ölçülür?",
    answer:
      "Kalçanın en geniş bölümünden, mezura yere paralel olacak şekilde ölçülür.",
  },
  {
    question: "Vücut yağ oranı ile BKİ aynı mıdır?",
    answer:
      "Hayır. BKİ boy ve kiloyu kullanır; vücut yağ oranı ise toplam ağırlığın ne kadarının yağ dokusu olduğunu tahmin etmeye çalışır.",
  },
  {
    question: "Kaslı kişilerde BKİ neden yanıltıcı olabilir?",
    answer:
      "Kas dokusu ağır olduğu için kaslı kişiler yüksek BKİ değerine sahip olsa da yağ oranları düşük olabilir.",
  },
  {
    question: "Evde yağ oranı ölçümü doğru mudur?",
    answer:
      "Evde kullanılan yöntemler tahmindir. Ölçüm tekniği, cihaz ve hidrasyon sonucu etkileyebilir.",
  },
  {
    question: "Akıllı tartılar vücut yağını doğru ölçer mi?",
    answer:
      "Biyoelektrik empedans kullanan tartılar tahmin üretir. Su durumu, yemek, egzersiz ve cihaz kalitesi sonucu değiştirebilir.",
  },
  {
    question: "Kaliper ölçümü nedir?",
    answer:
      "Kaliper yöntemi belirli bölgelerdeki deri kıvrım kalınlığını ölçerek vücut yağ oranı tahmini yapar.",
  },
  {
    question: "DEXA en doğru yöntem midir?",
    answer:
      "DEXA vücut kompozisyonu değerlendirmesinde kullanılan gelişmiş yöntemlerden biridir ancak hiçbir yöntem tamamen hatasız değildir.",
  },
  {
    question: "Sağlıklı vücut yağ oranı kaç olmalıdır?",
    answer:
      "Sağlıklı aralık yaş, biyolojik cinsiyet, spor düzeyi ve sağlık durumuna göre değişir. Tek bir ideal yüzde yoktur.",
  },
  {
    question: "Sporcularda yağ oranı kaçtır?",
    answer:
      "Sporcuların yağ oranı genellikle genel nüfustan daha düşük olabilir ancak spor dalı ve bireysel farklılıklar önemlidir.",
  },
  {
    question: "Çok düşük yağ oranı zararlı olabilir mi?",
    answer:
      "Evet. Çok düşük yağ oranı hormonlar, bağışıklık, enerji düzeyi ve üreme sağlığı üzerinde olumsuz etkiler oluşturabilir.",
  },
  {
    question: "Yağ oranı gün içinde değişir mi?",
    answer:
      "Gerçek yağ dokusu gün içinde büyük değişim göstermez ancak su durumu ve ölçüm koşulları tahmini sonucu değiştirebilir.",
  },
  {
    question: "Vücut yağ oranı hesaplama aracı tıbbi tanı koyar mı?",
    answer:
      "Hayır. Araç matematiksel tahmin verir ve tıbbi tanı veya profesyonel değerlendirme yerine geçmez.",
  },
];

const tocItems: TocItem[] = [
  {
    id: "vucut-yag-orani-nedir",
    title: "Vücut yağ oranı nedir?",
  },
  {
    id: "neden-onemlidir",
    title: "Neden önemlidir?",
  },
  {
    id: "us-navy-yontemi",
    title: "U.S. Navy yöntemi",
  },
  {
    id: "erkek-formulu",
    title: "Erkekler için formül",
  },
  {
    id: "kadin-formulu",
    title: "Kadınlar için formül",
  },
  {
    id: "olcum-nasil-alinir",
    title: "Ölçüler nasıl alınır?",
  },
  {
    id: "bki-yontemi",
    title: "BKİ tabanlı yöntem",
  },
  {
    id: "referans-araliklari",
    title: "Referans aralıkları",
  },
  {
    id: "ornekler",
    title: "Örnek hesaplamalar",
  },
  {
    id: "olcum-yontemleri",
    title: "Diğer ölçüm yöntemleri",
  },
  {
    id: "bki-farki",
    title: "BKİ ile farkı",
  },
  {
    id: "sonucu-etkileyenler",
    title: "Sonucu etkileyen faktörler",
  },
  {
    id: "sik-hatalar",
    title: "Sık yapılan hatalar",
  },
  {
    id: "sss",
    title: "Sık sorulan sorular",
  },
];

const referenceRows: ReferenceRow[] = [
  {
    category: "Esansiyel yağ",
    men: "%2–5",
    women: "%10–13",
    note: "Temel fizyolojik işlevler için gerekli alt düzey",
  },
  {
    category: "Sporcu",
    men: "%6–13",
    women: "%14–20",
    note: "Spor dalına göre geniş değişkenlik gösterebilir",
  },
  {
    category: "Fitness",
    men: "%14–17",
    women: "%21–24",
    note: "Aktif bireylerde görülebilen aralık",
  },
  {
    category: "Genel kabul edilen aralık",
    men: "%18–24",
    women: "%25–31",
    note: "Yetişkinler için genel referans",
  },
  {
    category: "Yüksek",
    men: "%25 ve üzeri",
    women: "%32 ve üzeri",
    note: "Klinik değerlendirme bağlama göre yapılmalıdır",
  },
];

const exampleRows: ExampleRow[] = [
  {
    profile: "30 yaş erkek, 180 cm, bel 88 cm, boyun 39 cm",
    method: "U.S. Navy",
    result: "Yaklaşık %17",
    note: "Çevre ölçümlerine dayalı tahmin",
  },
  {
    profile: "35 yaş erkek, 175 cm, bel 96 cm, boyun 40 cm",
    method: "U.S. Navy",
    result: "Yaklaşık %24",
    note: "Yaklaşık sonuç",
  },
  {
    profile: "28 yaş kadın, 165 cm, bel 72 cm, kalça 98 cm, boyun 33 cm",
    method: "U.S. Navy",
    result: "Yaklaşık %28",
    note: "Çevre ölçümlerine dayalı tahmin",
  },
  {
    profile: "40 yaş kadın, 160 cm, bel 82 cm, kalça 104 cm, boyun 34 cm",
    method: "U.S. Navy",
    result: "Yaklaşık %35",
    note: "Yaklaşık sonuç",
  },
  {
    profile: "25 yaş erkek, BKİ 23",
    method: "BKİ tabanlı",
    result: "Yaklaşık %17",
    note: "Yaş ve cinsiyet katsayılı tahmin",
  },
  {
    profile: "25 yaş kadın, BKİ 22",
    method: "BKİ tabanlı",
    result: "Yaklaşık %25",
    note: "Yaş ve cinsiyet katsayılı tahmin",
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
        `https://www.hesaprehberi.com${canonicalPath}`,
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
        "https://www.hesaprehberi.com/og/vucut-yag-orani-hesaplama-rehberi.jpg",
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
    <p className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-lg font-semibold leading-8 text-slate-800">
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
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300">
          {title}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="font-mono text-base font-black text-white sm:text-xl">
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
  icon: typeof Activity;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
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

export default function VucutYagOraniHesaplamaRehberiPage() {
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
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-bold text-emerald-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Çevre ölçümleriyle pratik yağ oranı tahmini
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Vücut yağ oranı hesaplama:
                <span className="block bg-gradient-to-r from-emerald-300 via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                  U.S. Navy yöntemi ve referans aralıkları
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Bel, boyun, kalça ve boy ölçülerinizi kullanarak
                tahmini vücut yağ yüzdesini öğrenin; sonucu BKİ ve
                diğer ölçüm yöntemleriyle karşılaştırın.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/vucut-yag-orani-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-6 py-3.5 font-black text-white transition hover:bg-emerald-500"
                >
                  Yağ oranını hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#olcum-nasil-alinir"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Ölçüm yöntemini gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "U.S. Navy",
                  "BKİ tabanlı tahmin",
                  "Erkek ve kadın formülü",
                  "Referans aralıkları",
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
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">
                        Örnek tahmin
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        180 cm erkek
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Gauge
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Bel 88 cm · Boyun 39 cm
                    </p>
                    <p className="mt-2 text-5xl font-black text-emerald-700">
                      ≈ %17
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Sonuç çevre ölçümlerine dayalı tahmindir ve ölçüm
                    tekniğine göre değişebilir.
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
                  <ListChecks className="h-5 w-5 text-emerald-300" />

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
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-emerald-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-emerald-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-emerald-700">
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
              id="vucut-yag-orani-nedir"
              title="Vücut yağ oranı nedir?"
            >
              <Lead>
                Vücut yağ oranı, toplam vücut ağırlığının yüzde kaçının
                yağ dokusundan oluştuğunu gösteren tahmini değerdir.
              </Lead>

              <p>
                Yağ dokusu enerji depolama, hormon üretimi, organların
                korunması ve vücut ısısının düzenlenmesi gibi önemli
                görevler üstlenir. Bu nedenle vücutta belirli miktarda
                yağ bulunması normal ve gereklidir.
              </p>

              <p>
                Vücut yağ yüzdesi tek başına sağlık tanısı koymaz.
                Yağ dağılımı, kas kütlesi, bel çevresi, fiziksel
                uygunluk ve metabolik göstergelerle birlikte
                değerlendirilmelidir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Scale}
                  title="Toplam ağırlık"
                >
                  <p>
                    Yağ dokusunun toplam ağırlık içindeki yüzdesini
                    gösterir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Dumbbell}
                  title="Yağsız kütle"
                >
                  <p>
                    Kas, kemik, organlar ve vücut suyunu kapsayan
                    diğer bileşenlerdir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Target}
                  title="Takip göstergesi"
                >
                  <p>
                    Kilo değişiminin yağ ve yağsız kütle yönünü
                    anlamaya yardımcı olabilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="neden-onemlidir"
              title="Vücut yağ oranı neden önemlidir?"
            >
              <Lead>
                Vücut ağırlığı tek başına yağ ve kas dağılımını
                göstermez; yağ oranı bu konuda ek bilgi sağlar.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <HeartPulse
                    className="h-8 w-8 text-rose-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Sağlık değerlendirmesi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Özellikle karın bölgesindeki yağlanma metabolik
                    riskler hakkında ek bilgi verebilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Dumbbell
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Spor performansı
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kas korunumu ve yağ kaybı hedeflerinin izlenmesine
                    yardımcı olabilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <BarChart3
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    İlerleme takibi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kilo sabit kalsa bile yağ ve kas oranındaki
                    değişimler görülebilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Activity
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Vücut kompozisyonu
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Aynı kilodaki kişiler arasındaki yapısal farkı
                    açıklamaya yardımcı olur.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="us-navy-yontemi"
              title="U.S. Navy vücut yağ oranı yöntemi"
            >
              <Lead>
                U.S. Navy yöntemi mezura ile alınan çevre ölçümlerini
                boy uzunluğuyla birlikte kullanarak yağ yüzdesi tahmini
                üretir.
              </Lead>

              <p>
                Yöntem pratik ve düşük maliyetlidir. Erkek ve kadın
                formülleri farklı ölçüler kullanır. Hesaplamada
                logaritmik yapı bulunduğu için çevrimiçi araç
                kullanmak işlemi kolaylaştırır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Ruler}
                  title="Mezura ölçümleri"
                >
                  <p>
                    Bel, boyun ve kadınlarda kalça çevresi kullanılır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={UserRound}
                  title="Cinsiyete göre formül"
                >
                  <p>
                    Erkek ve kadın denklemleri farklı değişkenlere
                    sahiptir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Gauge}
                  title="Tahmini sonuç"
                >
                  <p>
                    Laboratuvar ölçümü değil, pratik bir hesaplama
                    yöntemidir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Aynı ölçüm noktaları ve aynı mezura gerilimi
                    kullanıldığında yöntem değişimi takip etmek için
                    daha yararlı olabilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="erkek-formulu"
              title="Erkekler için U.S. Navy yağ oranı formülü"
            >
              <Lead>
                Erkek formülünde boy, bel çevresi ve boyun çevresi
                kullanılır.
              </Lead>

              <FormulaBox
                title="Erkekler için"
                formula="% Yağ = 495 ÷ (1,0324 − 0,19077 × log10(Bel − Boyun) + 0,15456 × log10(Boy)) − 450"
                description="Ölçüler santimetre cinsinden ve aynı protokolle alınmalıdır."
              />

              <h3 className="text-2xl font-black text-slate-950">
                Hesaplamanın mantığı
              </h3>

              <p>
                Bel çevresi ile boyun çevresi arasındaki fark arttıkça
                tahmini yağ oranı genellikle yükselir. Boy uzunluğu
                formülde dengeleyici değişken olarak kullanılır.
              </p>

              <ol className="space-y-4">
                {[
                  "Bel çevresini santimetre cinsinden ölçün.",
                  "Boyun çevresini santimetre cinsinden ölçün.",
                  "Bel ölçüsünden boyun ölçüsünü çıkarın.",
                  "Boy uzunluğunu santimetre cinsinden girin.",
                  "Formülü uygulayarak tahmini yağ yüzdesini bulun.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kadin-formulu"
              title="Kadınlar için U.S. Navy yağ oranı formülü"
            >
              <Lead>
                Kadın formülünde boy, bel, kalça ve boyun çevresi
                kullanılır.
              </Lead>

              <FormulaBox
                title="Kadınlar için"
                formula="% Yağ = 495 ÷ (1,29579 − 0,35004 × log10(Bel + Kalça − Boyun) + 0,22100 × log10(Boy)) − 450"
                description="Bel, kalça, boyun ve boy ölçüleri santimetre cinsinden girilir."
              />

              <p>
                Kadın formülünde kalça çevresi de dahil edilir.
                Mezuranın yeri ve gerginliği sonucu doğrudan
                etkileyebileceği için ölçüm tekniği önemlidir.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Ölçüm sırasında karın içeri çekilmemeli, mezura
                    cildi sıkıştırmamalı ve yere paralel tutulmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="olcum-nasil-alinir"
              title="Bel, boyun ve kalça ölçüsü nasıl alınır?"
            >
              <Lead>
                Güvenilir karşılaştırma için ölçümler her seferinde
                aynı noktadan ve benzer koşullarda alınmalıdır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Ruler
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Bel çevresi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kullanılan protokole göre göbek hizası veya
                    belirlenen anatomik noktadan, normal nefes sonunda
                    ölçülür.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <UserRound
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Boyun çevresi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Gırtlak çıkıntısının hemen altından, mezura yatay
                    olacak şekilde ölçülür.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Gauge
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Kalça çevresi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kalçanın en geniş bölümünden, mezura yere paralel
                    tutularak alınır.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Ölçüm kontrol listesi
              </h3>

              <ul className="space-y-4">
                {[
                  "Esnemeyen bir mezura kullanın.",
                  "Ölçümü mümkünse sabah ve benzer koşullarda yapın.",
                  "Mezurayı cildi sıkıştırmadan temas ettirin.",
                  "Normal duruşta ve kasları gevşek tutarak ölçün.",
                  "Her noktayı iki veya üç kez ölçüp ortalamasını alın.",
                  "Takip sırasında aynı protokolü değiştirmeyin.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bki-yontemi"
              title="BKİ tabanlı vücut yağ oranı formülü"
            >
              <Lead>
                BKİ tabanlı yöntem yaş, BKİ ve biyolojik cinsiyet
                bilgisini kullanarak kaba bir yağ oranı tahmini üretir.
              </Lead>

              <FormulaBox
                title="Yetişkinler için genel denklem"
                formula="% Yağ = 1,20 × BKİ + 0,23 × Yaş − 10,8 × Cinsiyet − 5,4"
                description="Cinsiyet değişkeni erkek için 1, kadın için 0 olarak alınır."
              />

              <p>
                Bu yöntem çevre ölçüsü gerektirmez ancak kas kütlesini
                doğrudan değerlendiremez. Özellikle kaslı bireylerde
                yanıltıcı sonuç verebilir.
              </p>

              <h3 className="text-2xl font-black text-slate-950">
                Erkek örneği
              </h3>

              <p>
                25 yaşında ve BKİ değeri 23 olan bir erkek için
                1,20 × 23 + 0,23 × 25 − 10,8 − 5,4 işlemi yaklaşık
                %17 sonuç verir.
              </p>

              <h3 className="text-2xl font-black text-slate-950">
                Kadın örneği
              </h3>

              <p>
                25 yaşında ve BKİ değeri 22 olan bir kadın için
                1,20 × 22 + 0,23 × 25 − 5,4 işlemi yaklaşık
                %27 sonuç verir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="referans-araliklari"
              title="Kadın ve erkek için vücut yağ oranı referansları"
            >
              <Lead>
                Referans aralıkları kesin tanı sınırı değil, genel
                değerlendirme amacıyla kullanılan yaklaşık
                kategorilerdir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Kategori
                      </th>
                      <th className="px-5 py-4">
                        Erkek
                      </th>
                      <th className="px-5 py-4">
                        Kadın
                      </th>
                      <th className="px-5 py-4">
                        Açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {referenceRows.map((row) => (
                      <tr key={row.category}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.category}
                        </td>
                        <td className="px-5 py-4 font-black text-emerald-700">
                          {row.men}
                        </td>
                        <td className="px-5 py-4 font-black text-blue-700">
                          {row.women}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Çok düşük yağ oranı her zaman daha sağlıklı değildir.
                    Hormonlar, bağışıklık, kemik sağlığı ve enerji
                    düzeyi olumsuz etkilenebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Vücut yağ oranı örnek hesaplamaları"
            >
              <Lead>
                Aşağıdaki sonuçlar kullanılan ölçümlere ve yönteme göre
                elde edilen yaklaşık değerlerdir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Profil
                      </th>
                      <th className="px-5 py-4">
                        Yöntem
                      </th>
                      <th className="px-5 py-4">
                        Sonuç
                      </th>
                      <th className="px-5 py-4">
                        Not
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={row.profile}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.profile}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.method}
                        </td>
                        <td className="px-5 py-4 font-black text-emerald-700">
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

              <p>
                Yuvarlama, mezura konumu ve formül varyasyonu sonucu
                etkileyebilir. Takip amacıyla aynı yöntemi kullanmak
                daha tutarlı karşılaştırma sağlar.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="olcum-yontemleri"
              title="Vücut yağ oranı ölçüm yöntemleri"
            >
              <Lead>
                Vücut yağ oranı farklı yöntemlerle tahmin edilebilir;
                her yöntemin maliyet, erişilebilirlik ve hata payı
                farklıdır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Ruler
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Çevre ölçümleri
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Ucuz ve erişilebilirdir ancak ölçüm tekniğine
                    duyarlıdır.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Gauge
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Biyoelektrik empedans
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Akıllı tartılarda yaygındır; hidrasyon ve ölçüm
                    zamanı sonucu etkileyebilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Target
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Deri kıvrım kaliperi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Uygun teknik ve deneyim gerektirir; belirli
                    bölgelerdeki deri kıvrımı ölçülür.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <BarChart3
                    className="h-8 w-8 text-rose-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    DEXA
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Gelişmiş vücut kompozisyonu analizi sağlar ancak
                    maliyetli ve sınırlı erişimli olabilir.
                  </p>
                </div>
              </div>

              <p>
                Ölçümler arasında doğal farklar olabilir. Bir yöntemle
                ilerlemeyi takip ederken sürekli yöntem değiştirmek
                karşılaştırmayı zorlaştırır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bki-farki"
              title="Vücut yağ oranı ile BKİ arasındaki fark"
            >
              <Lead>
                BKİ boy ve kilo ilişkisini, yağ oranı ise toplam
                ağırlığın yağ dokusu payını tahmin eder.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Scale
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    BKİ
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Hesaplaması kolaydır ve nüfus düzeyinde kullanışlı
                    olabilir. Kas ve yağ dokusunu ayırmaz.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Gauge
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Vücut yağ oranı
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Vücut kompozisyonu hakkında daha doğrudan bilgi
                    sunmaya çalışır ancak ölçüm yöntemine bağlıdır.
                  </p>
                </div>
              </div>

              <p>
                Kaslı bir sporcu yüksek BKİ değerine sahip olup düşük
                yağ oranında olabilir. Benzer şekilde normal BKİ
                değerine sahip bir kişi düşük kas kütlesi ve yüksek
                yağ oranına sahip olabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sonucu-etkileyenler"
              title="Vücut yağ oranı sonucunu etkileyen faktörler"
            >
              <Lead>
                Ölçüm yöntemi kadar ölçüm koşulları da tahmini sonucu
                önemli ölçüde etkileyebilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Ruler}
                  title="Mezura tekniği"
                >
                  <p>
                    Ölçüm noktasının birkaç santimetre değişmesi sonucu
                    etkileyebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Activity}
                  title="Egzersiz"
                >
                  <p>
                    Egzersiz sonrası sıvı dağılımı cihaz ölçümlerini
                    değiştirebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={HeartPulse}
                  title="Hidrasyon"
                >
                  <p>
                    Su tüketimi ve sıvı kaybı empedans sonuçlarını
                    etkileyebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Weight}
                  title="Vücut yapısı"
                >
                  <p>
                    Yağ dağılımı ve kas kütlesi formül doğruluğunu
                    etkileyebilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={BarChart3}
                  title="Cihaz farkı"
                >
                  <p>
                    Farklı tartı ve sistemler farklı algoritmalar
                    kullanabilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={UserRound}
                  title="Bireysel farklılık"
                >
                  <p>
                    Yaş, cinsiyet ve genetik özellikler sonucu
                    değiştirebilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Vücut yağ oranı hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                En yaygın hatalar ölçüm noktalarını değiştirmek,
                mezurayı fazla sıkmak ve farklı yöntemleri doğrudan
                karşılaştırmaktır.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Ölçüm noktasını değiştirmek",
                    error:
                      "Bel veya kalça ölçüsünü her seferinde farklı yerden almak.",
                    solution:
                      "Aynı anatomik noktayı ve aynı protokolü kullanın.",
                  },
                  {
                    title: "Mezurayı fazla sıkmak",
                    error:
                      "Cildi sıkıştırarak çevre ölçüsünü olduğundan düşük almak.",
                    solution:
                      "Mezurayı temas ettirin ancak cildi sıkıştırmayın.",
                  },
                  {
                    title: "Karnı içeri çekmek",
                    error:
                      "Bel ölçümü sırasında normal duruşu değiştirmek.",
                    solution:
                      "Normal nefes sonunda, karın gevşekken ölçüm yapın.",
                  },
                  {
                    title: "Farklı cihaz sonuçlarını karşılaştırmak",
                    error:
                      "Akıllı tartı ile çevre formülü sonuçlarını aynı kabul etmek.",
                    solution:
                      "İlerleme takibinde aynı yöntemi kullanın.",
                  },
                  {
                    title: "Tek ölçümü kesin kabul etmek",
                    error:
                      "Bir günlük sonucu gerçek yağ yüzdesi olarak görmek.",
                    solution:
                      "Tekrarlı ölçüm ve zaman içindeki eğilimi değerlendirin.",
                  },
                  {
                    title: "Çok düşük oranı hedeflemek",
                    error:
                      "Sağlık ve performans etkilerini göz ardı etmek.",
                    solution:
                      "Kişisel hedefi uzman desteğiyle güvenli biçimde belirleyin.",
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

              <div className="rounded-[2rem] bg-gradient-to-br from-emerald-600 to-cyan-600 p-8 text-white shadow-xl shadow-emerald-950/20">
                <Gauge
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Vücut yağ oranınızı hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-emerald-100">
                  Boy, bel, boyun ve gerekirse kalça ölçülerinizi
                  girerek U.S. Navy yöntemiyle tahmini yağ yüzdesini
                  öğrenin.
                </p>

                <Link
                  href="/hesaplamalar/vucut-yag-orani-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-emerald-700 transition hover:bg-emerald-50"
                >
                  Yağ oranı aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Vücut yağ oranı hakkında sık sorulan sorular"
            >
              <Lead>
                U.S. Navy yöntemi, çevre ölçümleri, BKİ ve referans
                aralıkları hakkında en çok sorulan soruların yanıtlarını
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-emerald-200">
                    <Calculator
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Çevre ölçümleriyle tahmin
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Vücut kompozisyonunuzu daha yakından tanıyın
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    U.S. Navy ve BKİ tabanlı yöntemlerle tahmini yağ
                    oranınızı hızlıca hesaplayın.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/vucut-yag-orani-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-7 py-4 font-black text-white transition hover:bg-emerald-500"
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