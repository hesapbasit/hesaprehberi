import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Baby,
  BadgeCheck,
  BarChart3,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  CloudSun,
  Coffee,
  Droplets,
  Dumbbell,
  GlassWater,
  HeartPulse,
  Info,
  ListChecks,
  Moon,
  ShieldCheck,
  Sparkles,
  ThermometerSun,
  TimerReset,
  UserRound,
  Weight,
} from "lucide-react";

import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";
import { getCalculatorByHref } from "@/lib/calculators";

const canonicalPath =
  "/blog/su-ihtiyaci-hesaplama-rehberi";

function getRequiredCalculator() {
  const foundCalculator = getCalculatorByHref(
    "/hesaplamalar/su-ihtiyaci-hesaplama",
  );

  if (!foundCalculator) {
    throw new Error(
      "Su ihtiyacı hesaplama aracı bulunamadı. Hesaplama kataloğunu kontrol edin.",
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

type WeightRow = {
  weight: string;
  lower: string;
  standard: string;
  active: string;
};

type ActivityRow = {
  activity: string;
  addition: string;
  explanation: string;
};

type ClimateRow = {
  condition: string;
  adjustment: string;
  note: string;
};

type ExampleRow = {
  profile: string;
  base: string;
  adjustment: string;
  total: string;
};

const pageTitle =
  "Su İhtiyacı Hesaplama Rehberi: Kiloya, Aktiviteye ve Hava Durumuna Göre";

const pageDescription =
  "Günlük su ihtiyacı nasıl hesaplanır, kiloya göre kaç litre su içilmeli, egzersiz, sıcak hava, gebelik ve emzirme ihtiyacı nasıl değiştirir öğrenin.";

const faqItems: FaqItem[] = [
  {
    question: "Günlük su ihtiyacı nedir?",
    answer:
      "Günlük su ihtiyacı, vücudun normal işlevlerini sürdürebilmesi için gün boyunca alınması gereken toplam sıvı miktarıdır.",
  },
  {
    question: "Su ihtiyacı nasıl hesaplanır?",
    answer:
      "Pratik hesaplamalarda kilo başına yaklaşık 30–35 ml su temel alınır; aktivite, sıcaklık, gebelik, emzirme ve sağlık durumu ayrıca değerlendirilir.",
  },
  {
    question: "Günde 2 litre su herkese yeter mi?",
    answer:
      "Hayır. Su ihtiyacı vücut ağırlığı, aktivite düzeyi, çevre koşulları ve bireysel özelliklere göre değişir.",
  },
  {
    question: "Kiloya göre su ihtiyacı nasıl bulunur?",
    answer:
      "Vücut ağırlığı kilogram cinsinden 30 veya 35 ml ile çarpılarak yaklaşık günlük su ihtiyacı hesaplanabilir.",
  },
  {
    question: "70 kilo biri kaç litre su içmeli?",
    answer:
      "70 kg için 30–35 ml hesabıyla yaklaşık 2,1–2,45 litre temel ihtiyaç tahmini elde edilir.",
  },
  {
    question: "Egzersiz yapanlar daha fazla su içmeli mi?",
    answer:
      "Evet. Egzersiz süresi, yoğunluk ve terleme miktarına bağlı olarak ek sıvı gerekebilir.",
  },
  {
    question: "Sıcak havada su ihtiyacı artar mı?",
    answer:
      "Evet. Terleme arttığı için sıcak ve nemli havalarda sıvı ihtiyacı genellikle yükselir.",
  },
  {
    question: "Kahve ve çay su ihtiyacına sayılır mı?",
    answer:
      "Kahve ve çay toplam sıvı alımına katkı sağlar; ancak su temel içecek olarak kalmalıdır.",
  },
  {
    question: "Meyve ve sebzeler su ihtiyacına katkı sağlar mı?",
    answer:
      "Evet. Su içeriği yüksek besinler toplam sıvı alımına katkıda bulunur.",
  },
  {
    question: "Çok fazla su içmek zararlı olabilir mi?",
    answer:
      "Evet. Kısa sürede aşırı su tüketimi kandaki sodyum düzeyini tehlikeli biçimde düşürebilir.",
  },
  {
    question: "İdrar rengi hidrasyonu gösterir mi?",
    answer:
      "Açık saman sarısı idrar genellikle yeterli hidrasyonla ilişkilidir; ancak ilaçlar ve besinler rengi değiştirebilir.",
  },
  {
    question: "Susamayı beklemek yeterli mi?",
    answer:
      "Çoğu sağlıklı yetişkinde susama yararlı bir sinyaldir; ancak yaşlılar, yoğun spor yapanlar ve sıcak ortamda çalışanlar daha planlı sıvı alımına ihtiyaç duyabilir.",
  },
  {
    question: "Gebelikte su ihtiyacı artar mı?",
    answer:
      "Evet. Gebelik döneminde dolaşım hacmi ve fizyolojik ihtiyaçlar nedeniyle ek sıvı gerekebilir.",
  },
  {
    question: "Emzirme döneminde ne kadar su içilmeli?",
    answer:
      "Emzirme döneminde süt üretimine bağlı olarak günlük sıvı ihtiyacı artabilir.",
  },
  {
    question: "Çocuklarda su ihtiyacı nasıl hesaplanır?",
    answer:
      "Çocuklarda ihtiyaç yaş, kilo ve aktiviteye göre değerlendirilir; yetişkin formülleri doğrudan kullanılmamalıdır.",
  },
  {
    question: "Yaşlılarda susama hissi azalır mı?",
    answer:
      "Evet. Yaş ilerledikçe susama hissi zayıflayabilir ve düzenli sıvı takibi daha önemli olabilir.",
  },
  {
    question: "Gece su içmek zararlı mı?",
    answer:
      "Genellikle zararlı değildir ancak fazla tüketim gece uykusunu bölebilir.",
  },
  {
    question: "Sporcu içeceği gerekli mi?",
    answer:
      "Kısa ve hafif egzersizlerde çoğu zaman su yeterlidir; uzun ve yoğun egzersizlerde elektrolit desteği gerekebilir.",
  },
  {
    question: "Su ihtiyacı hesaplama aracı tıbbi öneri verir mi?",
    answer:
      "Hayır. Araç genel tahmin sunar; böbrek, kalp veya karaciğer hastalığı olanlar kişisel öneri için sağlık profesyoneline danışmalıdır.",
  },
];

const tocItems: TocItem[] = [
  {
    id: "su-ihtiyaci-nedir",
    title: "Su ihtiyacı nedir?",
  },
  {
    id: "nasil-hesaplanir",
    title: "Su ihtiyacı nasıl hesaplanır?",
  },
  {
    id: "kiloya-gore",
    title: "Kiloya göre su ihtiyacı",
  },
  {
    id: "aktiviteye-gore",
    title: "Aktiviteye göre su ihtiyacı",
  },
  {
    id: "sicak-hava",
    title: "Sıcak havanın etkisi",
  },
  {
    id: "gebelik-emzirme",
    title: "Gebelik ve emzirme",
  },
  {
    id: "cocuklar-yaslilar",
    title: "Çocuklar ve yaşlılar",
  },
  {
    id: "hidrasyon-belirtileri",
    title: "Hidrasyon belirtileri",
  },
  {
    id: "fazla-su",
    title: "Fazla su tüketimi",
  },
  {
    id: "icecekler-besinler",
    title: "İçecekler ve besinler",
  },
  {
    id: "ornekler",
    title: "Örnek hesaplamalar",
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

const weightRows: WeightRow[] = [
  {
    weight: "45 kg",
    lower: "1,35 L",
    standard: "1,58 L",
    active: "1,80 L ve üzeri",
  },
  {
    weight: "50 kg",
    lower: "1,50 L",
    standard: "1,75 L",
    active: "2,00 L ve üzeri",
  },
  {
    weight: "55 kg",
    lower: "1,65 L",
    standard: "1,93 L",
    active: "2,20 L ve üzeri",
  },
  {
    weight: "60 kg",
    lower: "1,80 L",
    standard: "2,10 L",
    active: "2,40 L ve üzeri",
  },
  {
    weight: "65 kg",
    lower: "1,95 L",
    standard: "2,28 L",
    active: "2,60 L ve üzeri",
  },
  {
    weight: "70 kg",
    lower: "2,10 L",
    standard: "2,45 L",
    active: "2,80 L ve üzeri",
  },
  {
    weight: "75 kg",
    lower: "2,25 L",
    standard: "2,63 L",
    active: "3,00 L ve üzeri",
  },
  {
    weight: "80 kg",
    lower: "2,40 L",
    standard: "2,80 L",
    active: "3,20 L ve üzeri",
  },
  {
    weight: "90 kg",
    lower: "2,70 L",
    standard: "3,15 L",
    active: "3,60 L ve üzeri",
  },
  {
    weight: "100 kg",
    lower: "3,00 L",
    standard: "3,50 L",
    active: "4,00 L ve üzeri",
  },
];

const activityRows: ActivityRow[] = [
  {
    activity: "Hafif yürüyüş, 30 dakika",
    addition: "Yaklaşık 250–400 ml",
    explanation:
      "Hava sıcaklığı ve terleme miktarına göre değişebilir.",
  },
  {
    activity: "Orta yoğunluk, 45–60 dakika",
    addition: "Yaklaşık 400–750 ml",
    explanation:
      "Egzersiz öncesi ve sonrası sıvı takibi yararlı olabilir.",
  },
  {
    activity: "Yoğun antrenman, 60–90 dakika",
    addition: "Yaklaşık 750–1.250 ml",
    explanation:
      "Yoğun terlemede elektrolit kaybı da dikkate alınmalıdır.",
  },
  {
    activity: "Uzun dayanıklılık egzersizi",
    addition: "Kişisel terleme hızına göre",
    explanation:
      "Vücut ağırlığı değişimiyle terleme kaybı izlenebilir.",
  },
];

const climateRows: ClimateRow[] = [
  {
    condition: "Serin ve düşük aktivite",
    adjustment: "Genellikle ek ayarlama gerekmez",
    note: "Temel ihtiyacı takip etmek yeterli olabilir.",
  },
  {
    condition: "Sıcak hava",
    adjustment: "Günlük 300–700 ml eklenebilir",
    note: "Terleme ve dışarıda geçirilen süre önemlidir.",
  },
  {
    condition: "Sıcak ve nemli hava",
    adjustment: "500 ml ve üzeri ek gerekebilir",
    note: "Buharlaşma zorlaştığı için ısı stresi artabilir.",
  },
  {
    condition: "Yüksek rakım",
    adjustment: "Kademeli ek sıvı gerekebilir",
    note: "Solunum ve idrar yoluyla kayıp artabilir.",
  },
];

const exampleRows: ExampleRow[] = [
  {
    profile: "60 kg, düşük aktivite",
    base: "1,8–2,1 L",
    adjustment: "Ek yok",
    total: "Yaklaşık 1,8–2,1 L",
  },
  {
    profile: "70 kg, 45 dakika egzersiz",
    base: "2,1–2,45 L",
    adjustment: "+400–600 ml",
    total: "Yaklaşık 2,5–3,0 L",
  },
  {
    profile: "80 kg, sıcak havada çalışan",
    base: "2,4–2,8 L",
    adjustment: "+500–900 ml",
    total: "Yaklaşık 2,9–3,7 L",
  },
  {
    profile: "65 kg, emzirme dönemi",
    base: "1,95–2,28 L",
    adjustment: "Ek sıvı ihtiyacı",
    total: "Kişisel duruma göre artırılmalı",
  },
  {
    profile: "75 kg, 90 dakika yoğun egzersiz",
    base: "2,25–2,63 L",
    adjustment: "+750–1.250 ml",
    total: "Yaklaşık 3,0–3,9 L",
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
        "https://www.https://hesaprehberionline.com/og/su-ihtiyaci-hesaplama-rehberi.jpg",
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
    <p className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 text-lg font-semibold leading-8 text-slate-800">
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
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-300">
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
  icon: typeof Activity;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
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

export default function SuIhtiyaciHesaplamaRehberiPage() {
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
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-cyan-500/25 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-bold text-cyan-200">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Kilo, aktivite ve hava durumuna göre hesaplama
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Günlük su ihtiyacı hesaplama:
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-200 to-violet-200 bg-clip-text text-transparent">
                  Kaç litre su içmelisiniz?
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Vücut ağırlığınıza göre temel su ihtiyacınızı hesaplayın;
                egzersiz, sıcak hava, gebelik ve emzirme gibi etkenlerin
                günlük ihtiyacı nasıl değiştirdiğini öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/su-ihtiyaci-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-cyan-600 px-6 py-3.5 font-black text-white transition hover:bg-cyan-500"
                >
                  Su ihtiyacını hesapla
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>

                <a
                  href="#kiloya-gore"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Kilo tablosunu gör
                  <ChevronRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "Kilo başına hesaplama",
                  "Egzersiz ayarı",
                  "Sıcak hava ayarı",
                  "Gebelik ve emzirme",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-cyan-300"
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
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-600">
                        Örnek hesaplama
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        70 kg yetişkin
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                      <Droplets
                        className="h-7 w-7"
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      70 × 30–35 ml
                    </p>
                    <p className="mt-2 text-5xl font-black text-cyan-700">
                      2,1–2,45 L
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Aktivite ve sıcak hava nedeniyle bu miktara ek
                    sıvı gerekebilir.
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
                  <ListChecks className="h-5 w-5 text-cyan-300" />

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
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-cyan-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-cyan-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-cyan-700">
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
              id="su-ihtiyaci-nedir"
              title="Günlük su ihtiyacı nedir?"
            >
              <Lead>
                Günlük su ihtiyacı, vücudun normal işlevlerini
                sürdürebilmesi için gün içinde alınması gereken toplam
                sıvı miktarıdır.
              </Lead>

              <p>
                Su; vücut ısısının düzenlenmesi, besinlerin taşınması,
                sindirim, eklem sağlığı ve atıkların uzaklaştırılması
                gibi çok sayıda süreçte görev alır.
              </p>

              <p>
                İhtiyaç kişiden kişiye değişir. Vücut ağırlığı, yaş,
                aktivite, hava sıcaklığı, beslenme ve sağlık durumu
                günlük gereksinimi etkiler.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={HeartPulse}
                  title="Dolaşım"
                >
                  <p>
                    Kan hacminin ve hücresel işlevlerin sürdürülmesine
                    yardımcı olur.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={ThermometerSun}
                  title="Isı dengesi"
                >
                  <p>
                    Terleme yoluyla vücut ısısının düzenlenmesinde rol
                    oynar.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={ShieldCheck}
                  title="Organ işlevleri"
                >
                  <p>
                    Böbrekler ve sindirim sistemi için temel öneme
                    sahiptir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="nasil-hesaplanir"
              title="Su ihtiyacı nasıl hesaplanır?"
            >
              <Lead>
                Pratik yetişkin hesaplamalarında vücut ağırlığı başına
                yaklaşık 30–35 ml su temel alınabilir.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Alt tahmin"
                  formula="Günlük su = Kilo × 30 ml"
                  description="Düşük aktivite ve ılıman koşullar için genel başlangıç tahminidir."
                />

                <FormulaBox
                  title="Standart tahmin"
                  formula="Günlük su = Kilo × 35 ml"
                  description="Daha yüksek temel gereksinim için kullanılan pratik katsayıdır."
                />
              </div>

              <p>
                Sonuç litreye çevrilirken mililitre değeri 1000'e
                bölünür. Örneğin 70 kg × 35 ml = 2450 ml, yani
                yaklaşık 2,45 litredir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Bu değer yalnızca başlangıç tahminidir. Terleme,
                    egzersiz, sıcaklık ve sağlık durumu ayrıca
                    değerlendirilmelidir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kiloya-gore"
              title="Kiloya göre günlük su ihtiyacı tablosu"
            >
              <Lead>
                Aşağıdaki tablo 30–35 ml/kg yaklaşımına göre yaklaşık
                temel su ihtiyacını gösterir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Vücut ağırlığı
                      </th>
                      <th className="px-5 py-4">
                        30 ml/kg
                      </th>
                      <th className="px-5 py-4">
                        35 ml/kg
                      </th>
                      <th className="px-5 py-4">
                        Aktif gün tahmini
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {weightRows.map((row) => (
                      <tr key={row.weight}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.weight}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.lower}
                        </td>
                        <td className="px-5 py-4 font-black text-cyan-700">
                          {row.standard}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.active}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Aktif gün tahminleri kesin değildir. Gerçek ek ihtiyaç
                egzersiz süresi, yoğunluğu ve terleme miktarına göre
                değişir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="aktiviteye-gore"
              title="Aktivite düzeyine göre su ihtiyacı"
            >
              <Lead>
                Egzersiz sırasında ter yoluyla kaybedilen sıvı temel
                günlük ihtiyacın üzerine eklenmelidir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Aktivite
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık ek sıvı
                      </th>
                      <th className="px-5 py-4">
                        Açıklama
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {activityRows.map((row) => (
                      <tr key={row.activity}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.activity}
                        </td>
                        <td className="px-5 py-4 font-black text-cyan-700">
                          {row.addition}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.explanation}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Terleme hızını takip etme
              </h3>

              <p>
                Egzersiz öncesi ve sonrası vücut ağırlığı farkı,
                yaklaşık sıvı kaybını anlamaya yardımcı olabilir.
                Bir kilogram ağırlık kaybı kabaca bir litre sıvı
                kaybına karşılık gelebilir.
              </p>

              <FormulaBox
                title="Yaklaşık terleme kaybı"
                formula="Sıvı kaybı ≈ Egzersiz öncesi kilo − Egzersiz sonrası kilo"
                description="Egzersiz sırasında içilen sıvı ve idrar çıkışı ayrıca hesaba katılmalıdır."
              />

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Uzun ve yoğun egzersizlerde yalnızca su değil,
                    sodyum gibi elektrolitlerin de yerine konması
                    gerekebilir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sicak-hava"
              title="Sıcak hava ve nem su ihtiyacını nasıl etkiler?"
            >
              <Lead>
                Sıcaklık ve nem yükseldikçe terleme artar ve günlük
                sıvı ihtiyacı genellikle yükselir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Koşul
                      </th>
                      <th className="px-5 py-4">
                        Yaklaşık ayarlama
                      </th>
                      <th className="px-5 py-4">
                        Not
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {climateRows.map((row) => (
                      <tr key={row.condition}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.condition}
                        </td>
                        <td className="px-5 py-4 font-black text-cyan-700">
                          {row.adjustment}
                        </td>
                        <td className="px-5 py-4 text-slate-600">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={ThermometerSun}
                  title="Sıcaklık"
                >
                  <p>
                    Yüksek sıcaklık terleme ve sıvı kaybını artırır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={CloudSun}
                  title="Nem"
                >
                  <p>
                    Yüksek nem terin buharlaşmasını zorlaştırabilir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Activity}
                  title="Dışarıda çalışma"
                >
                  <p>
                    Uzun süre açık havada kalanlarda ihtiyaç daha fazla
                    olabilir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="gebelik-emzirme"
              title="Gebelik ve emzirme döneminde su ihtiyacı"
            >
              <Lead>
                Gebelik ve emzirme döneminde dolaşım hacmi ve süt üretimi
                nedeniyle sıvı ihtiyacı artabilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Baby
                    className="h-8 w-8 text-violet-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Gebelik
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Kan hacmi ve fizyolojik ihtiyaç arttığı için temel
                    su tüketimine ek sıvı gerekebilir.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <GlassWater
                    className="h-8 w-8 text-cyan-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Emzirme
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Süt üretimi sıvı gereksinimini artırabilir. Susama
                    sinyali ve idrar rengi takip edilebilir.
                  </p>
                </div>
              </div>

              <p>
                Gebelikte aşırı bulantı, kusma, ödem veya özel sağlık
                durumu varsa sıvı tüketimi kişisel olarak
                değerlendirilmelidir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="cocuklar-yaslilar"
              title="Çocuklarda ve yaşlılarda su ihtiyacı"
            >
              <Lead>
                Çocuklarda büyüme, yaşlılarda ise susama hissindeki
                azalma nedeniyle sıvı takibi ayrı önem taşır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <Baby
                    className="h-8 w-8 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Çocuklar
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    İhtiyaç yaş, kilo, büyüme ve aktiviteye göre
                    belirlenir. Yetişkin katsayıları doğrudan
                    kullanılmamalıdır.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <UserRound
                    className="h-8 w-8 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    Yaşlılar
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Susama hissi azalabileceğinden düzenli içme
                    alışkanlığı ve günlük takip önemli olabilir.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-rose-900">
                    Böbrek, kalp veya karaciğer hastalığında sıvı
                    kısıtlaması gerekebilir. Genel hesaplama sonucu
                    kişisel tıbbi önerinin yerine geçmez.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hidrasyon-belirtileri"
              title="Yeterli ve yetersiz hidrasyon belirtileri"
            >
              <Lead>
                Susama, idrar rengi ve günlük performans hidrasyon
                hakkında yararlı ipuçları verebilir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                  <h3 className="text-xl font-black text-emerald-950">
                    Yeterli hidrasyon göstergeleri
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-emerald-900">
                    <li>Açık saman sarısı idrar</li>
                    <li>Dengeli enerji düzeyi</li>
                    <li>Normal ağız ve cilt nemi</li>
                    <li>Egzersizde beklenen performans</li>
                  </ul>
                </div>

                <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                  <h3 className="text-xl font-black text-rose-950">
                    Olası sıvı eksikliği belirtileri
                  </h3>

                  <ul className="mt-4 space-y-3 text-sm leading-6 text-rose-900">
                    <li>Koyu renkli idrar</li>
                    <li>Ağız kuruluğu</li>
                    <li>Baş ağrısı ve halsizlik</li>
                    <li>Baş dönmesi ve performans düşüşü</li>
                  </ul>
                </div>
              </div>

              <p>
                Bu belirtiler yalnızca sıvı eksikliğine özgü değildir.
                Şiddetli veya devam eden yakınmalarda sağlık
                profesyoneline başvurulmalıdır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="fazla-su"
              title="Fazla su içmek zararlı olabilir mi?"
            >
              <Lead>
                Kısa sürede aşırı su tüketimi kandaki sodyumun
                seyrelmesine ve ciddi sağlık sorunlarına yol açabilir.
              </Lead>

              <p>
                Vücut belirli hızda suyu işleyebilir. Çok kısa sürede
                birkaç litre su içmek özellikle dayanıklılık sporlarında
                ve aşırı sıvı tüketiminde risk oluşturabilir.
              </p>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-black text-rose-950">
                      Aşırı su tüketiminde dikkat
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-rose-900">
                      Bulantı, baş ağrısı, bilinç bulanıklığı veya
                      şiddetli halsizlik gibi belirtiler acil
                      değerlendirme gerektirebilir.
                    </p>
                  </div>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="icecekler-besinler"
              title="Çay, kahve ve besinler su ihtiyacına dahil mi?"
            >
              <Lead>
                Toplam sıvı alımı yalnızca içilen sudan değil, diğer
                içecekler ve su içeriği yüksek besinlerden de oluşur.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard
                  icon={Coffee}
                  title="Çay ve kahve"
                >
                  <p>
                    Toplam sıvıya katkı sağlar ancak yüksek şekerli
                    içeceklerle suyun yerini doldurmak uygun değildir.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={GlassWater}
                  title="Süt ve ayran"
                >
                  <p>
                    Sıvı ve besin öğesi sağlar; enerji ve tuz içeriği
                    dikkate alınmalıdır.
                  </p>
                </FeatureCard>

                <FeatureCard
                  icon={Droplets}
                  title="Meyve ve sebzeler"
                >
                  <p>
                    Karpuz, salatalık ve çorba gibi seçenekler su
                    alımına katkıda bulunur.
                  </p>
                </FeatureCard>
              </div>

              <p>
                Su, kalorisiz ve erişilebilir olması nedeniyle temel
                içecek olarak tercih edilmelidir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Günlük su ihtiyacı örnek hesaplamaları"
            >
              <Lead>
                Aşağıdaki örnekler temel ihtiyaç ve ek koşulların nasıl
                birlikte değerlendirilebileceğini gösterir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[980px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">
                        Profil
                      </th>
                      <th className="px-5 py-4">
                        Temel ihtiyaç
                      </th>
                      <th className="px-5 py-4">
                        Ayarlama
                      </th>
                      <th className="px-5 py-4">
                        Tahmini toplam
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
                          {row.base}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.adjustment}
                        </td>
                        <td className="px-5 py-4 font-black text-cyan-700">
                          {row.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Örnek sonuçlar genel tahmindir. Gerçek gereksinim
                susama, idrar rengi, terleme ve kişisel sağlık
                koşullarına göre değişebilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Su tüketiminde sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, herkes için tek ve değişmez bir litre
                hedefi belirlemektir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Herkese 2 litre kuralı uygulamak",
                    error:
                      "Kilo ve aktivite farklarını göz ardı etmek.",
                    solution:
                      "Kilo başına hesaplama yapıp koşullara göre ayarlayın.",
                  },
                  {
                    title: "Susamayı tamamen yok saymak",
                    error:
                      "Planlı tüketim uğruna vücut sinyallerini dikkate almamak.",
                    solution:
                      "Susama ve idrar rengini hesaplama sonucuyla birlikte değerlendirin.",
                  },
                  {
                    title: "Egzersizde birden çok litreyi hızlı içmek",
                    error:
                      "Kısa sürede aşırı sıvı tüketmek.",
                    solution:
                      "Sıvıyı zamana yayın ve uzun egzersizde elektrolitleri değerlendirin.",
                  },
                  {
                    title: "Sıcak havayı hesaba katmamak",
                    error:
                      "Serin hava hedefini yaz sıcaklarında aynen sürdürmek.",
                    solution:
                      "Terleme ve dışarıda geçirilen süreye göre ek sıvı alın.",
                  },
                  {
                    title: "Tüm sıvıyı şekerli içeceklerden almak",
                    error:
                      "Su yerine yüksek kalorili içecekleri tercih etmek.",
                    solution:
                      "Temel içecek olarak suyu kullanın.",
                  },
                  {
                    title: "Tıbbi sıvı kısıtını görmezden gelmek",
                    error:
                      "Kalp veya böbrek hastalığında genel formülü uygulamak.",
                    solution:
                      "Kişisel tıbbi öneriyi öncelikli kabul edin.",
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

              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-600 to-blue-600 p-8 text-white shadow-xl shadow-cyan-950/20">
                <Droplets
                  className="h-8 w-8"
                  aria-hidden="true"
                />

                <h3 className="mt-5 text-3xl font-black">
                  Günlük su ihtiyacınızı hemen hesaplayın
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-cyan-100">
                  Kilonuzu ve aktivite düzeyinizi girerek tahmini günlük
                  sıvı ihtiyacınızı saniyeler içinde öğrenin.
                </p>

                <Link
                  href="/hesaplamalar/su-ihtiyaci-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-cyan-700 transition hover:bg-cyan-50"
                >
                  Su ihtiyacı aracına git
                  <ArrowRight
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Su ihtiyacı hakkında sık sorulan sorular"
            >
              <Lead>
                Günlük su tüketimi, egzersiz, hava sıcaklığı ve özel
                dönemler hakkında en çok sorulan soruların yanıtlarını
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-cyan-200">
                    <Calculator
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                    Kişisel su ihtiyacı
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Günlük su hedefinizi kişiselleştirin
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Kilo, aktivite ve çevre koşullarına göre yaklaşık
                    sıvı ihtiyacınızı hızlıca hesaplayın.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/su-ihtiyaci-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 px-7 py-4 font-black text-white transition hover:bg-cyan-500"
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