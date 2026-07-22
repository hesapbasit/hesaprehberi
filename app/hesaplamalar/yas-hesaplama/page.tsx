import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  Baby,
  BadgeInfo,
  BookOpen,
  Calendar,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CakeSlice,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  GraduationCap,
  HeartPulse,
  Hourglass,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Milestone,
  Scale,
  ShieldCheck,
  Sparkles,
  Timer,
  TriangleAlert,
  UserRound,
  Users,
} from "lucide-react";

import AgeCalculator from "@/components/calculators/AgeCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/yas-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Yaş hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Yaş hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "yas-nedir", label: "Yaş hesabı nedir?" },
  { id: "hesaplama-yontemi", label: "Yaş nasıl hesaplanır?" },
  { id: "ornek-hesaplama", label: "Örnek yaş hesabı" },
  { id: "yil-ay-gun", label: "Yıl, ay ve gün hesabı" },
  { id: "dogum-gunune-kalan", label: "Doğum gününe kalan süre" },
  { id: "toplam-yasanan-sure", label: "Toplam yaşanan süre" },
  { id: "artik-yil", label: "Artık yıl ve 29 Şubat" },
  { id: "resmi-yas", label: "Resmî yaş ve kurum kuralları" },
  { id: "kullanim-alanlari", label: "Kullanım alanları" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Doğum tarihini seçin",
    description:
      "Doğduğunuz gün, ay ve yılı doğru biçimde girin.",
    icon: CakeSlice,
  },
  {
    number: "02",
    title: "Hesaplama tarihini belirleyin",
    description:
      "Bugünkü tarihi veya geçmişte ya da gelecekteki bir tarihi seçin.",
    icon: CalendarCheck2,
  },
  {
    number: "03",
    title: "Tam yaşınızı görün",
    description:
      "Tamamlanan yıl sayısını, kalan ayları ve günleri inceleyin.",
    icon: UserRound,
  },
  {
    number: "04",
    title: "Doğum günü süresini karşılaştırın",
    description:
      "Bir sonraki doğum gününe kalan süreyi ve toplam yaşanan günü görün.",
    icon: AlarmClock,
  },
];

const exampleRows = [
  {
    birthDate: "15 Mart 2000",
    calculationDate: "15 Mart 2026",
    age: "26 yıl",
    remainder: "0 ay 0 gün",
    birthday: "365 gün",
  },
  {
    birthDate: "15 Mart 2000",
    calculationDate: "14 Mart 2026",
    age: "25 yıl",
    remainder: "11 ay 27 gün",
    birthday: "1 gün",
  },
  {
    birthDate: "1 Ocak 1995",
    calculationDate: "1 Temmuz 2026",
    age: "31 yıl",
    remainder: "6 ay 0 gün",
    birthday: "184 gün",
  },
  {
    birthDate: "29 Şubat 2000",
    calculationDate: "1 Mart 2026",
    age: "26 yıl",
    remainder: "0 ay 1 gün",
    birthday: "365 gün",
  },
];

const ageMilestoneRows = [
  {
    age: "1 yaş",
    approximateDays: "365–366 gün",
    description: "İlk doğum günü tamamlanır.",
  },
  {
    age: "10 yaş",
    approximateDays: "3.652–3.653 gün",
    description: "Çocukluk döneminin önemli eşiklerinden biridir.",
  },
  {
    age: "18 yaş",
    approximateDays: "Yaklaşık 6.574 gün",
    description: "Birçok resmî işlemde önemli yaş sınırıdır.",
  },
  {
    age: "25 yaş",
    approximateDays: "Yaklaşık 9.131 gün",
    description: "Çeyrek yüzyıl tamamlanmış olur.",
  },
  {
    age: "50 yaş",
    approximateDays: "Yaklaşık 18.262 gün",
    description: "Yarım yüzyıl tamamlanmış olur.",
  },
  {
    age: "100 yaş",
    approximateDays: "Yaklaşık 36.524 gün",
    description: "Bir asırlık yaşam süresini ifade eder.",
  },
];

const usageAreas = [
  {
    title: "Okul ve kayıt işlemleri",
    description:
      "Belirli bir tarihte öğrencinin tamamlanan yaşını kontrol etmek için kullanılabilir.",
    icon: GraduationCap,
  },
  {
    title: "Sigorta ve emeklilik",
    description:
      "Yaşa bağlı değerlendirmelerde matematiksel yaş farkını görmek için kullanılabilir.",
    icon: ShieldCheck,
  },
  {
    title: "Sağlık ve gelişim takibi",
    description:
      "Bebek ve çocukların yıl, ay ve gün bazındaki yaşını izlemeye yardımcı olur.",
    icon: HeartPulse,
  },
  {
    title: "Doğum günü planlaması",
    description:
      "Bir sonraki doğum gününe kalan gün sayısını hesaplamak için kullanılabilir.",
    icon: CakeSlice,
  },
  {
    title: "Gelecekteki yaş hesabı",
    description:
      "Belirli bir gelecek tarihte kaç yaşında olunacağını görmek için kullanılabilir.",
    icon: CalendarClock,
  },
  {
    title: "Geçmiş tarih karşılaştırması",
    description:
      "Geçmişteki belirli bir tarihte kaç yaşında olunduğunu hesaplamaya yardımcı olur.",
    icon: Hourglass,
  },
];

const commonMistakes = [
  {
    title: "Yalnızca doğum yılını kullanmak",
    description:
      "Doğum ayı ve günü hesaba katılmadığında tamamlanan yaş bir yıl fazla çıkabilir.",
    icon: CircleAlert,
  },
  {
    title: "Doğum günü gelmeden yaşı artırmak",
    description:
      "Yeni yaş ancak doğum gününün gerçekleştiği tarihte tamamlanmış kabul edilir.",
    icon: CakeSlice,
  },
  {
    title: "Ayları eşit uzunlukta varsaymak",
    description:
      "Takvim ayları 28, 29, 30 veya 31 gün sürdüğü için kalan ay hesabı takvime göre yapılmalıdır.",
    icon: CalendarDays,
  },
  {
    title: "Resmî yaş ile araç sonucunu aynı kabul etmek",
    description:
      "Kurumlar farklı yaş ve tarih kuralları uygulayabilir; resmî işlemde kurum koşulları esas alınır.",
    icon: Scale,
  },
];

const relatedCalculators = [
  {
    title: "Gün Hesaplama",
    description:
      "İki tarih arasındaki toplam gün farkını ve hafta karşılığını hesaplayın.",
    href: "/hesaplamalar/gun-hesaplama",
    icon: CalendarDays,
  },
  {
    title: "Tarih Hesaplama",
    description:
      "Bir tarihe gün ekleyin veya çıkarın ve yeni tarihi bulun.",
    href: "/hesaplamalar/tarih-hesaplama",
    icon: CalendarClock,
  },
  {
    title: "Hafta Hesaplama",
    description:
      "Toplam gün sayısını tam hafta ve kalan gün biçiminde görüntüleyin.",
    href: "/hesaplamalar/hafta-hesaplama",
    icon: Calendar,
  },
  {
    title: "Saat Hesaplama",
    description:
      "İki saat arasındaki süreyi saat ve dakika olarak hesaplayın.",
    href: "/hesaplamalar/saat-hesaplama",
    icon: Clock3,
  },
  {
    title: "Geri Sayım Hesaplama",
    description:
      "Belirli bir tarihe kalan gün ve süreyi kolayca bulun.",
    href: "/hesaplamalar/geri-sayim-hesaplama",
    icon: AlarmClock,
  },
  {
    title: "Vücut Kitle İndeksi",
    description:
      "Boy ve kilo bilgilerine göre vücut kitle indeksinizi hesaplayın.",
    href: "/hesaplamalar/vucut-kitle-indeksi-hesaplama",
    icon: HeartPulse,
  },
];

const faqItems = [
  {
    question: "Yaş nasıl hesaplanır?",
    answer:
      "Doğum tarihi ile hesaplama tarihi arasındaki tamamlanmış yıl, ay ve gün farkı bulunur.",
  },
  {
    question: "Yaş yalnızca doğum yılına göre hesaplanabilir mi?",
    answer:
      "Hayır. Tam yaş için doğum ayı ve gününün de dikkate alınması gerekir.",
  },
  {
    question: "Doğum günü bugünse yeni yaş tamamlanmış olur mu?",
    answer:
      "Evet. Hesaplama tarihi doğum gününüzle aynıysa yeni yaş tamamlanmış kabul edilir.",
  },
  {
    question: "Doğum gününden bir gün önce yaş kaç olur?",
    answer:
      "Yeni yaş henüz tamamlanmadığı için önceki yaş geçerli olur.",
  },
  {
    question: "Toplam yaşanan gün sayısı kesin midir?",
    answer:
      "Araç iki takvim tarihi arasındaki gün farkını hesaplar; saat ve dakika bilgilerini dikkate almaz.",
  },
  {
    question: "Gelecekteki bir tarihte kaç yaşında olacağımı hesaplayabilir miyim?",
    answer:
      "Evet. Hesaplama tarihini gelecekteki bir gün olarak seçebilirsiniz.",
  },
  {
    question: "Geçmişteki bir tarihte kaç yaşında olduğumu öğrenebilir miyim?",
    answer:
      "Evet. Hesaplama tarihini geçmişteki bir gün olarak seçerek o tarihteki yaşınızı görebilirsiniz.",
  },
  {
    question: "Artık yıllar yaş hesabına dahil edilir mi?",
    answer:
      "Evet. Tarih sistemi 29 Şubat bulunan artık yılları otomatik olarak hesaba katar.",
  },
  {
    question: "29 Şubat doğumluların yaşı nasıl hesaplanır?",
    answer:
      "Tam yaş hesabı gerçek takvim tarihleri üzerinden yapılır. Resmî uygulamalar kurumlara göre değişebilir.",
  },
  {
    question: "Aynı doğum tarihi için sonuç neden değişebilir?",
    answer:
      "Yaş sonucu seçilen hesaplama tarihine bağlı olarak değişir.",
  },
  {
    question: "Yaş yıl, ay ve gün olarak nasıl gösterilir?",
    answer:
      "Önce tamamlanan yıllar, sonra son doğum gününden itibaren geçen tam aylar ve kalan günler hesaplanır.",
  },
  {
    question: "Bir sonraki doğum gününe kalan süre nasıl bulunur?",
    answer:
      "Hesaplama tarihinden sonraki doğum günü belirlenir ve iki tarih arasındaki gün farkı hesaplanır.",
  },
  {
    question: "Doğum günü hesaplama tarihiyle aynıysa ne olur?",
    answer:
      "Yeni yaş tamamlanmış kabul edilir ve sonraki doğum günü bir sonraki yıl için hesaplanır.",
  },
  {
    question: "Yaş hesabında saat bilgisi kullanılır mı?",
    answer:
      "Hayır. Araç yalnızca takvim tarihlerini kullanır.",
  },
  {
    question: "Resmî yaş hesabında bu sonuç kullanılabilir mi?",
    answer:
      "Resmî işlemlerde ilgili kurumun yaş ve tarih kuralları esas alınmalıdır.",
  },
  {
    question: "Okul kaydı için yaş nasıl değerlendirilir?",
    answer:
      "Kayıt şartlarında kurumun belirlediği tarih ve yaş sınırı esas alınır.",
  },
  {
    question: "Emeklilik yaşı bu araçla kesinleşir mi?",
    answer:
      "Hayır. Emeklilik koşulları yalnızca yaşa değil, sigortalılık ve prim şartlarına da bağlıdır.",
  },
  {
    question: "Bebek yaşı ay olarak hesaplanabilir mi?",
    answer:
      "Evet. Tamamlanan yılın yanında geçen tam ay ve kalan gün bilgisi incelenebilir.",
  },
  {
    question: "Yaş hesabı negatif olabilir mi?",
    answer:
      "Doğum tarihi hesaplama tarihinden sonraysa geçerli bir yaş sonucu oluşmaz.",
  },
  {
    question: "Hesaplama sonucu resmî belge yerine geçer mi?",
    answer:
      "Hayır. Sonuç genel bilgilendirme ve matematiksel hesaplama amacı taşır.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Yaş Hesaplama Aracı",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Web",
  description: calculator.description,
  url: canonicalUrl,
  inLanguage: "tr-TR",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://https://hesaprehberionline.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hesaplamalar",
      item: "https://https://hesaprehberionline.com/hesaplamalar",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: calculator.title,
      item: canonicalUrl,
    },
  ],
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Yaş nasıl hesaplanır?",
  description:
    "Doğum tarihi ve hesaplama tarihiyle yıl, ay ve gün bazında yaş hesaplama adımları.",
  totalTime: "PT1M",
  step: usageSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Yaş Hesaplama Rehberi",
  description: calculator.description,
  url: canonicalUrl,
  inLanguage: "tr-TR",
  author: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  mainEntityOfPage: canonicalUrl,
};

export default function YasHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="[&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-slate-400">
            <Breadcrumb
              items={[
                { label: "Hesaplamalar", href: "/hesaplamalar" },
                { label: calculator.title },
              ]}
            />
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/20">
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Yaş Hesaplama
                <span className="mt-2 block text-blue-300">
                  Yıl, Ay ve Gün Olarak Yaşınızı Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Doğum tarihinizi ve hesaplama tarihini seçerek tamamlanan
                yaşınızı, geçen ay ve günleri, toplam yaşanan süreyi ve sonraki
                doğum gününe kalan zamanı saniyeler içinde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CakeSlice className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Tamamlanan yaş
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                  Yıl, ay ve gün
                </span>
                <span className="inline-flex items-center gap-2">
                  <AlarmClock className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Doğum gününe kalan süre
                </span>
              </div>

              <div className="mt-8 [&_button]:border-white/20 [&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20">
                <ShareButtons
                  title={`${calculator.title} | HesapRehberi`}
                  description={calculator.description}
                />
              </div>
            </div>

            <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-200">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-200">
                    Sayfa rehberi
                  </p>
                  <h2 className="text-lg font-bold text-white">İçindekiler</h2>
                </div>
              </div>

              <nav aria-label="İçindekiler" className="mt-6">
                <ol className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
                      >
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-blue-200">
                          {index + 1}
                        </span>
                        <span className="flex-1">{item.label}</span>
                        <ChevronRight
                          className="h-4 w-4 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden="true"
                        />
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <section id="hesaplama-araci" className="scroll-mt-24">
          <AgeCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Yaş hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Doğum tarihinizi ve hesaplama tarihini kullanarak yaşınızı dört
              basit adımda hesaplayabilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {usageSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="absolute right-5 top-4 text-5xl font-black text-slate-100">
                    {step.number}
                  </span>

                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] md:mt-20">
          <div className="space-y-8">
            <section
              id="yas-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex">
                  <UserRound className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Yaş hesabı nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Yaş hesabı, doğum tarihi ile seçilen hesaplama tarihi arasında
                  tamamlanan yıl, ay ve günlerin belirlenmesidir.
                </p>
                <p>
                  Yalnızca doğum yılına bakmak tam yaş sonucunu vermeyebilir.
                  Doğum ayı ve günü henüz gelmediyse kişi yeni yaşını
                  tamamlamamış kabul edilir.
                </p>
                <p>
                  Araç, seçilen takvim tarihleri üzerinden matematiksel yaş
                  farkını gösterir. Resmî işlemlerde kurumların özel yaş ve tarih
                  kuralları ayrıca değerlendirilmelidir.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">
                    Tamamlanan yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Tam olarak geride kalan yaş sayısını gösterir.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <h3 className="font-bold text-indigo-950">
                    Kalan ay
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Son doğum gününden sonra geçen tam ay sayısıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                  <h3 className="font-bold text-cyan-950">
                    Kalan gün
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-900">
                    Tam yıl ve aylardan sonra kalan gün sayısıdır.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="hesaplama-yontemi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Hesaplama yöntemi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Yaş nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Önce hesaplama yılından doğum yılı çıkarılır. Daha sonra doğum
                günü seçilen hesaplama tarihinde henüz gelmediyse sonuçtan bir
                yıl düşülür.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[580px] text-center font-mono text-base font-bold md:text-lg">
                    Ön Yaş = Hesaplama Yılı − Doğum Yılı
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[580px] text-center font-mono text-base font-bold md:text-lg">
                    Doğum Günü Gelmediyse: Tam Yaş = Ön Yaş − 1
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[580px] text-center font-mono text-base font-bold md:text-lg">
                    Toplam Yaşanan Gün = Hesaplama Tarihi − Doğum Tarihi
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ornek-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Uygulamalı örnek
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek yaş hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                15 Mart 2000 tarihinde doğan bir kişi için hesaplama tarihi
                15 Mart 2026 seçildiğinde tamamlanan yaş 26 olur. Hesaplama
                tarihi 14 Mart 2026 seçilirse kişi henüz 26 yaşını
                tamamlamamıştır.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Doğum tarihi
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    15 Mart 2000
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Hesaplama tarihi
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    15 Mart 2026
                  </p>
                </article>

                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm font-medium text-blue-700">
                    Geçen süre
                  </p>
                  <p className="mt-2 text-xl font-bold text-blue-900">
                    26 tam yıl
                  </p>
                </article>

                <article className="rounded-2xl bg-blue-700 p-6 text-white">
                  <p className="text-sm font-medium text-blue-100">
                    Tamamlanan yaş
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    26 yaş
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold leading-7 text-blue-900">
                  2026 − 2000 = 26 yıl
                </p>
                <p className="mt-2 font-semibold leading-7 text-blue-900">
                  Doğum günü aynı tarihte gerçekleştiği için 26 yaş tamamlanır.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[980px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Doğum tarihi</th>
                      <th className="px-5 py-4 text-sm font-bold">Hesaplama tarihi</th>
                      <th className="px-5 py-4 text-sm font-bold">Tam yaş</th>
                      <th className="px-5 py-4 text-sm font-bold">Kalan süre</th>
                      <th className="px-5 py-4 text-sm font-bold">Sonraki doğum günü</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr
                        key={`${row.birthDate}-${row.calculationDate}`}
                        className="transition hover:bg-blue-50/60"
                      >
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.birthDate}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.calculationDate}
                        </td>
                        <td className="px-5 py-4 font-semibold text-blue-700">
                          {row.age}
                        </td>
                        <td className="px-5 py-4 font-semibold text-indigo-700">
                          {row.remainder}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.birthday}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="yil-ay-gun"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Ayrıntılı yaş
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Yaş yıl, ay ve gün olarak nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Tam yaş yalnızca yıl sayısını gösterir. Daha ayrıntılı sonuçta
                son doğum gününden sonra geçen tam aylar ve kalan günler de
                hesaplanır.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <Milestone className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-blue-950">
                    Tam yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Doğum tarihinden itibaren tamamlanan yaş sayısıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <Calendar className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Tam ay
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Son yaş gününden sonra tamamlanan ay sayısıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                  <Timer className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-cyan-950">
                    Kalan gün
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-900">
                    Tam yıl ve aylardan sonra kalan takvim günüdür.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="dogum-gunune-kalan"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Geri sayım
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Sonraki doğum gününe kalan süre nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Hesaplama tarihinden sonraki doğum günü belirlenir ve bu iki
                tarih arasındaki gün farkı bulunur. Doğum günü hesaplama
                tarihiyle aynıysa sonraki doğum günü bir sonraki yıl üzerinden
                değerlendirilir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                  <CakeSlice className="h-6 w-6 text-rose-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-rose-950">
                    Doğum günü gelmediyse
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rose-900">
                    Aynı yıl içindeki doğum gününe kalan süre hesaplanır.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <AlarmClock className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Doğum günü geçtiyse
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Bir sonraki yılın doğum gününe kalan süre hesaplanır.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="toplam-yasanan-sure"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Toplam süre
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Toplam yaşanan gün sayısı nasıl bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Toplam yaşanan gün sayısı, doğum tarihi ile hesaplama tarihi
                arasındaki takvim günü farkıdır. Artık yıllar ve ayların gerçek
                uzunlukları otomatik olarak hesaba katılır.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[820px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Yaş dönümü</th>
                      <th className="px-5 py-4 text-sm font-bold">Yaklaşık gün</th>
                      <th className="px-5 py-4 text-sm font-bold">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {ageMilestoneRows.map((row) => (
                      <tr key={row.age} className="transition hover:bg-indigo-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.age}
                        </td>
                        <td className="px-5 py-4 font-semibold text-blue-700">
                          {row.approximateDays}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <BadgeInfo
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-blue-900">
                  Tablodaki gün değerleri yaklaşık gösterimdir. Kesin toplam,
                  doğum tarihi ile seçilen hesaplama tarihine ve aradaki artık
                  yıllara göre değişir.
                </p>
              </div>
            </section>

            <section
              id="artik-yil"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Takvim detayı
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Artık yıl ve 29 Şubat yaş hesabını nasıl etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Artık yıllarda şubat ayı 29 gün sürer. Bu ek gün toplam yaşanan
                gün sayısını etkiler; ancak tamamlanan yaş hesabı doğum günü
                döngüsüne göre yapılır.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Calendar className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Normal yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Genellikle 365 gün sürer.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <CalendarCheck2 className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Artık yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    29 Şubat nedeniyle 366 gün sürer.
                  </p>
                </article>

                <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                  <Baby className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-cyan-950">
                    29 Şubat doğumu
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-900">
                    Matematiksel hesap gerçek takvim tarihleri üzerinden yapılır.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="resmi-yas"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Kurumsal kullanım
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Resmî yaş ile matematiksel yaş aynı mıdır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Matematiksel yaş, iki tarih arasındaki tamamlanan süreyi ifade
                eder. Resmî işlemlerde ise kurumların belirlediği tarih,
                yaş sınırı ve değerlendirme yöntemi esas alınabilir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <UserRound className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-blue-950">
                    Matematiksel yaş
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Doğum ve hesaplama tarihleri arasındaki tamamlanan süredir.
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <Landmark className="h-6 w-6 text-amber-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-amber-950">
                    Kurumsal değerlendirme
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Okul, sigorta, emeklilik veya hukuk işlemlerinde özel kurallar uygulanabilir.
                  </p>
                </article>
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <TriangleAlert
                    className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-amber-950">
                      Kurum şartlarını kontrol edin
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-amber-900">
                      Resmî başvurularda yalnızca bu aracın sonucuna dayanmayın.
                      İlgili kurumun ilan, yönetmelik ve tarih şartlarını ayrıca
                      inceleyin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="kullanim-alanlari"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Kullanım örnekleri
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Yaş hesaplama aracı hangi durumlarda kullanılabilir?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {usageAreas.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section
              id="yaygin-hatalar"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Kaçınılması gerekenler
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Yaş hesaplamasında sık yapılan hatalar
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {commonMistakes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-rose-700 shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-950">{item.title}</h3>
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>

              <div className="mt-7 rounded-2xl bg-slate-950 p-6 text-white">
                <div className="flex items-start gap-4">
                  <Info
                    className="mt-0.5 h-6 w-6 shrink-0 text-blue-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Sonuç türünü doğru yorumlayın
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Araç takvim tarihleri arasındaki matematiksel yaşı verir.
                      Resmî yaş sınırları ve kurum uygulamaları farklı olabilir.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="font-bold text-slate-950">Bu sayfada</h2>
              </div>

              <nav aria-label="Sayfa içeriği" className="mt-5">
                <ul className="space-y-1">
                  {tableOfContents.slice(2).map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-blue-800"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-700 p-6 text-white shadow-xl shadow-blue-900/20">
              <Sparkles className="h-7 w-7 text-blue-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                Yaşınızı hemen hesaplayın
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Doğum ve hesaplama tarihini seçerek yıl, ay ve gün bazında
                yaşınızı saniyeler içinde görün.
              </p>
              <a
                href="#hesaplama-araci"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
              >
                Hesaplamaya dön
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <TriangleAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
              <h2 className="mt-4 font-bold text-amber-950">
                Resmî işlem uyarısı
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Okul, sigorta, emeklilik ve hukuki işlemlerde ilgili kurumun
                yaş ve tarih kuralları esas alınmalıdır.
              </p>
            </div>
          </aside>
        </div>

        <section id="ilgili-hesaplamalar" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Diğer araçlar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                İlgili tarih ve yaşam hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Yaş, gün, tarih ve sağlık planlamanızı diğer ücretsiz hesaplama
                araçlarımızla tamamlayın.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 transition hover:text-blue-900"
            >
              Tüm hesaplamalar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedCalculators.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight
                      className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <section id="sik-sorulan-sorular" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <Info className="h-4 w-4" aria-hidden="true" />
              Merak edilenler
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Yaş hesaplama hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tam yaş, doğum günü, artık yıl ve resmî yaş değerlendirmesi
              hakkında merak edilen soruları inceleyin.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-blue-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 font-bold text-slate-950">
                      {item.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-blue-700 group-open:text-white">
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </summary>

                <div className="border-t border-slate-100 px-6 pb-6 pt-5">
                  <p className="pl-12 leading-7 text-slate-600">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-indigo-900 p-8 text-white shadow-2xl shadow-blue-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Yaşınızı yıl, ay ve gün olarak hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Doğum tarihinizi seçerek tamamlanan yaşınızı, toplam yaşanan
                günü ve sonraki doğum gününe kalan süreyi saniyeler içinde görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Yaşımı hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki yaş hesaplama sonuçları genel bilgilendirme
            amaçlıdır. Araç seçilen doğum tarihi ile hesaplama tarihi arasındaki
            takvim farkını gösterir. Okul kaydı, sigorta, emeklilik, sağlık veya
            hukuki işlemlerde ilgili kurumun tarih ve yaş kuralları esas
            alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}