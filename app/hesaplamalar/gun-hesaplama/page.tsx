import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowRight,
  BadgeInfo,
  BookOpen,
  BriefcaseBusiness,
  Calendar,
  CalendarCheck2,
  CalendarClock,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Clock3,
  Hourglass,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  MoonStar,
  Plane,
  Scale,
  Sparkles,
  Sun,
  Timer,
  TriangleAlert,
} from "lucide-react";

import DayCalculator from "@/components/calculators/DayCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gun-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Gün hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
  { id: "hesaplama-araci", label: "Gün hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "gun-farki-nedir", label: "Gün farkı nedir?" },
  { id: "hesaplama-yontemi", label: "Gün farkı nasıl hesaplanır?" },
  { id: "ornek-hesaplama", label: "Örnek gün hesabı" },
  { id: "dahil-haric-hesap", label: "Başlangıç ve bitiş günleri" },
  { id: "hafta-ay-yil", label: "Hafta, ay ve yıl karşılığı" },
  { id: "is-gunu-ve-takvim-gunu", label: "İş günü ve takvim günü" },
  { id: "artik-yil", label: "Artık yıl ve 29 Şubat" },
  { id: "kullanim-alanlari", label: "Kullanım alanları" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Başlangıç tarihini seçin",
    description:
      "Hesaplamanın başlayacağı ilk takvim tarihini belirleyin.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Bitiş tarihini girin",
    description:
      "Sürenin sona ereceği ikinci tarihi seçin.",
    icon: CalendarCheck2,
  },
  {
    number: "03",
    title: "Toplam gün farkını görün",
    description:
      "İki tarih arasındaki mutlak takvim günü farkını inceleyin.",
    icon: Timer,
  },
  {
    number: "04",
    title: "Hafta karşılığını karşılaştırın",
    description:
      "Toplam sürenin tam hafta ve kalan gün karşılığını değerlendirin.",
    icon: CalendarDays,
  },
];

const exampleRows = [
  {
    start: "1 Temmuz",
    end: "15 Temmuz",
    totalDays: "14 gün",
    weeks: "2 hafta",
    inclusive: "15 gün",
  },
  {
    start: "1 Ocak",
    end: "31 Ocak",
    totalDays: "30 gün",
    weeks: "4 hafta 2 gün",
    inclusive: "31 gün",
  },
  {
    start: "10 Mart",
    end: "25 Mart",
    totalDays: "15 gün",
    weeks: "2 hafta 1 gün",
    inclusive: "16 gün",
  },
  {
    start: "1 Nisan",
    end: "1 Mayıs",
    totalDays: "30 gün",
    weeks: "4 hafta 2 gün",
    inclusive: "31 gün",
  },
];

const durationRows = [
  {
    days: "7 gün",
    weeks: "1 hafta",
    months: "Yaklaşık 0,23 ay",
    years: "Yaklaşık 0,02 yıl",
  },
  {
    days: "30 gün",
    weeks: "4 hafta 2 gün",
    months: "Yaklaşık 1 ay",
    years: "Yaklaşık 0,08 yıl",
  },
  {
    days: "90 gün",
    weeks: "12 hafta 6 gün",
    months: "Yaklaşık 3 ay",
    years: "Yaklaşık 0,25 yıl",
  },
  {
    days: "180 gün",
    weeks: "25 hafta 5 gün",
    months: "Yaklaşık 6 ay",
    years: "Yaklaşık 0,49 yıl",
  },
  {
    days: "365 gün",
    weeks: "52 hafta 1 gün",
    months: "Yaklaşık 12 ay",
    years: "1 yıl",
  },
];

const usageAreas = [
  {
    title: "Seyahat planlaması",
    description:
      "Gidiş ve dönüş tarihleri arasındaki toplam konaklama süresini hesaplayın.",
    icon: Plane,
  },
  {
    title: "İzin ve tatil hesabı",
    description:
      "Yıllık izin veya tatil döneminin kaç takvim günü sürdüğünü görün.",
    icon: Sun,
  },
  {
    title: "Proje ve teslim süresi",
    description:
      "Başlangıç ile teslim tarihi arasındaki toplam süreyi takip edin.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Resmî ve hukuki süreler",
    description:
      "Süre hesabında kullanılacak yöntemi kurum ve mevzuat kurallarıyla birlikte değerlendirin.",
    icon: Scale,
  },
  {
    title: "Rezervasyon süresi",
    description:
      "Otel, araç kiralama veya etkinlik tarihleri arasındaki süreyi karşılaştırın.",
    icon: CalendarClock,
  },
  {
    title: "Kişisel hedef takibi",
    description:
      "Bir hedefin başlangıcından bugüne kadar geçen gün sayısını bulun.",
    icon: Hourglass,
  },
];

const commonMistakes = [
  {
    title: "Başlangıç gününü otomatik dahil saymak",
    description:
      "Standart tarih farkında iki tarih arasındaki geçen süre hesaplanır; her iki günü dahil etmek için sonuca bir eklenir.",
    icon: CircleAlert,
  },
  {
    title: "Takvim günü ile iş gününü karıştırmak",
    description:
      "Takvim günü hafta sonlarını kapsar; iş günü hesabında hafta sonları ve tatiller ayrıca değerlendirilir.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ayları sabit 30 gün kabul etmek",
    description:
      "Takvim ayları 28, 29, 30 veya 31 gün olabilir. Kesin tarih farkında gerçek takvim kullanılmalıdır.",
    icon: CalendarDays,
  },
  {
    title: "Artık yılı göz ardı etmek",
    description:
      "Şubat ayının 29 gün olduğu artık yıllar uzun dönemli hesaplamalarda sonucu etkileyebilir.",
    icon: CalendarCheck2,
  },
];

const relatedCalculators = [
  {
    title: "Yaş Hesaplama",
    description:
      "Doğum tarihine göre yıl, ay ve gün cinsinden yaşınızı hesaplayın.",
    href: "/hesaplamalar/yas-hesaplama",
    icon: Calendar,
  },
  {
    title: "Tarih Hesaplama",
    description:
      "Bir tarihe belirli gün ekleyin veya çıkarın ve yeni tarihi bulun.",
    href: "/hesaplamalar/tarih-hesaplama",
    icon: CalendarClock,
  },
  {
    title: "Hafta Hesaplama",
    description:
      "Toplam gün sayısını hafta ve kalan gün biçiminde görüntüleyin.",
    href: "/hesaplamalar/hafta-hesaplama",
    icon: CalendarDays,
  },
  {
    title: "Saat Hesaplama",
    description:
      "İki saat arasındaki süreyi saat ve dakika olarak hesaplayın.",
    href: "/hesaplamalar/saat-hesaplama",
    icon: Clock3,
  },
  {
    title: "Mesai Hesaplama",
    description:
      "Çalışma ve fazla mesai sürelerini toplam saat üzerinden değerlendirin.",
    href: "/hesaplamalar/mesai-hesaplama",
    icon: BriefcaseBusiness,
  },
  {
    title: "Geri Sayım Hesaplama",
    description:
      "Belirli bir tarihe kalan gün ve süreyi kolayca bulun.",
    href: "/hesaplamalar/geri-sayim-hesaplama",
    icon: AlarmClock,
  },
];

const faqItems = [
  {
    question: "İki tarih arasındaki gün farkı nasıl hesaplanır?",
    answer:
      "Bitiş tarihinden başlangıç tarihi çıkarılır. Araç tarihlerin sırası ters olsa bile mutlak gün farkını gösterir.",
  },
  {
    question: "Başlangıç ve bitiş günleri hesaba dahil mi?",
    answer:
      "Standart hesaplamada iki tarih arasındaki geçen süre bulunur. Her iki günü dahil etmek için sonuca bir gün eklenir.",
  },
  {
    question: "Tarihleri ters seçersem ne olur?",
    answer:
      "Araç negatif sonuç göstermez ve iki tarih arasındaki mutlak gün farkını hesaplar.",
  },
  {
    question: "Aynı tarih seçilirse sonuç ne olur?",
    answer:
      "Başlangıç ve bitiş tarihi aynıysa standart tarih farkı sıfır gün olur.",
  },
  {
    question: "Aynı günü dahil ederek hesaplamak istersem ne yapmalıyım?",
    answer:
      "Başlangıç ve bitiş gününün ikisini de dahil etmek için standart sonuca bir gün eklemelisiniz.",
  },
  {
    question: "Artık yıllar dikkate alınıyor mu?",
    answer:
      "Evet. Tarih sistemi 29 Şubat bulunan artık yılları otomatik olarak hesaba katar.",
  },
  {
    question: "Saat farkları hesaba katılıyor mu?",
    answer:
      "Hayır. Bu araç yalnızca takvim tarihlerini kullanır ve saat bilgilerini dikkate almaz.",
  },
  {
    question: "Toplam hafta sayısı nasıl bulunur?",
    answer:
      "Toplam gün sayısı 7'ye bölünür. Tam sayı kısmı hafta, kalan kısmı ek gün sayısıdır.",
  },
  {
    question: "30 gün tam olarak bir ay mıdır?",
    answer:
      "Her zaman değil. Takvim ayları 28, 29, 30 veya 31 gün sürebilir.",
  },
  {
    question: "365 gün her zaman bir yıl mıdır?",
    answer:
      "Çoğu normal yıl 365 gündür; artık yıllar 366 gündür.",
  },
  {
    question: "İş günü nasıl hesaplanır?",
    answer:
      "İş günü hesabında hafta sonları ve resmî tatiller çıkarılır. Bu araç standart takvim günü farkını verir.",
  },
  {
    question: "Hafta sonları toplam güne dahil mi?",
    answer:
      "Evet. Takvim günü hesabında cumartesi ve pazar günleri de toplam süreye dahildir.",
  },
  {
    question: "Resmî tatiller toplam güne dahil mi?",
    answer:
      "Evet. Takvim günü hesabında resmî tatiller de toplam gün farkına dahildir.",
  },
  {
    question: "İzin hesabında hangi yöntem kullanılmalı?",
    answer:
      "İzin türüne ve kurum kurallarına göre takvim günü veya iş günü yöntemi kullanılabilir.",
  },
  {
    question: "Rezervasyonlarda gün hesabı nasıl yapılır?",
    answer:
      "Rezervasyon türüne göre giriş ve çıkış günlerinin dahil edilme yöntemi değişebilir.",
  },
  {
    question: "Hukuki sürelerde bu sonuç kullanılabilir mi?",
    answer:
      "Hukuki sürelerde ilgili mevzuat ve kurum kuralları esas alınmalıdır. Araç yalnızca matematiksel fark verir.",
  },
  {
    question: "İki tarih arasındaki ay farkı kesin olarak bulunabilir mi?",
    answer:
      "Kesin ay farkı için takvim aylarının uzunluğu ve gün bileşenleri ayrıca değerlendirilmelidir.",
  },
  {
    question: "Gün farkı negatif olabilir mi?",
    answer:
      "Matematiksel olarak tarih sırasına göre negatif çıkabilir; ancak bu araç mutlak farkı gösterir.",
  },
  {
    question: "Bugünden belirli bir tarihe kalan gün nasıl bulunur?",
    answer:
      "Başlangıç olarak bugünün tarihini, bitiş olarak hedef tarihi seçebilirsiniz.",
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
  name: "Gün Hesaplama Aracı",
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
  name: "İki tarih arasındaki gün farkı nasıl hesaplanır?",
  description:
    "Başlangıç ve bitiş tarihleriyle toplam gün farkını hesaplama adımları.",
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
  headline: "Gün Hesaplama Rehberi",
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

export default function GunHesaplamaPage() {
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="[&_a]:text-indigo-200 [&_a:hover]:text-white [&_span]:text-slate-400">
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
                <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-200 ring-1 ring-indigo-400/20">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Gün Hesaplama
                <span className="mt-2 block text-indigo-300">
                  İki Tarih Arasındaki Süreyi Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Başlangıç ve bitiş tarihlerini seçerek toplam gün farkını,
                tam hafta sayısını ve kalan günleri saniyeler içinde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                  Toplam gün farkı
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-violet-300" aria-hidden="true" />
                  Tam hafta hesabı
                </span>
                <span className="inline-flex items-center gap-2">
                  <Timer className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Hızlı sonuç
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
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-200">
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
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-indigo-200">
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
          <DayCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Gün hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              İki tarih arasındaki toplam süreyi dört basit adımda
              hesaplayabilirsiniz.
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
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
              id="gun-farki-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 sm:flex">
                  <CalendarDays className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Gün farkı nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Gün farkı, iki takvim tarihi arasında geçen toplam gün
                  sayısını ifade eder. Standart hesaplamada bitiş tarihinden
                  başlangıç tarihi çıkarılır.
                </p>
                <p>
                  Tarihlerin sırası ters seçildiğinde matematiksel sonuç negatif
                  olabilir. Bu araç kullanıcıya daha anlaşılır bir sonuç sunmak
                  için mutlak gün farkını gösterir.
                </p>
                <p>
                  Standart fark ile her iki günün dahil edildiği süre aynı
                  değildir. Başlangıç ve bitiş günlerinin ikisi de sayılacaksa
                  standart sonuca bir gün eklenir.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <h3 className="font-bold text-indigo-950">
                    Standart gün farkı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    İki tarih arasında geçen süreyi gösterir.
                  </p>
                </article>

                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                  <h3 className="font-bold text-violet-950">
                    Dahil gün hesabı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    Başlangıç ve bitiş günlerinin ikisini de kapsar.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="hesaplama-yontemi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Hesaplama yöntemi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                İki tarih arasındaki gün farkı nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Gün farkı, bitiş tarihinden başlangıç tarihinin çıkarılmasıyla
                bulunur. Tarihlerin sırası tersse mutlak değer alınır.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    Gün Farkı = |Bitiş Tarihi − Başlangıç Tarihi|
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    Dahil Gün Sayısı = Standart Gün Farkı + 1
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    Tam Hafta = Toplam Gün ÷ 7
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ornek-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Uygulamalı örnek
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek gün hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Başlangıç tarihi 1 Temmuz, bitiş tarihi 15 Temmuz olarak
                seçildiğinde iki tarih arasında 14 gün vardır. Bu süre tam
                olarak 2 haftaya eşittir.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Başlangıç tarihi
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    1 Temmuz
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Bitiş tarihi
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    15 Temmuz
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <p className="text-sm font-medium text-indigo-700">
                    Toplam gün
                  </p>
                  <p className="mt-2 text-xl font-bold text-indigo-900">
                    14 gün
                  </p>
                </article>

                <article className="rounded-2xl bg-indigo-700 p-6 text-white">
                  <p className="text-sm font-medium text-indigo-100">
                    Tam hafta
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    2 hafta
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold leading-7 text-indigo-900">
                  15 Temmuz − 1 Temmuz = 14 gün
                </p>
                <p className="mt-2 font-semibold leading-7 text-indigo-900">
                  14 ÷ 7 = 2 tam hafta
                </p>
                <p className="mt-2 font-semibold leading-7 text-indigo-900">
                  Her iki gün dahil edilirse 15 gün
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-indigo-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Başlangıç</th>
                      <th className="px-5 py-4 text-sm font-bold">Bitiş</th>
                      <th className="px-5 py-4 text-sm font-bold">Standart fark</th>
                      <th className="px-5 py-4 text-sm font-bold">Hafta karşılığı</th>
                      <th className="px-5 py-4 text-sm font-bold">Her iki gün dahil</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr
                        key={`${row.start}-${row.end}`}
                        className="transition hover:bg-indigo-50/60"
                      >
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.start}
                        </td>
                        <td className="px-5 py-4 text-slate-700">{row.end}</td>
                        <td className="px-5 py-4 font-semibold text-indigo-700">
                          {row.totalDays}
                        </td>
                        <td className="px-5 py-4 font-semibold text-violet-700">
                          {row.weeks}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.inclusive}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="dahil-haric-hesap"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Dahil veya hariç
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Başlangıç ve bitiş günleri hesaba dahil edilir mi?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bu durum kullanım amacına göre değişir. Standart tarih farkında
                iki tarih arasında geçen süre hesaplanır. Rezervasyon, izin veya
                çalışma süresi gibi durumlarda başlangıç ve bitiş günleri ayrıca
                dahil edilebilir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <CalendarClock className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Standart fark
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    1 Temmuz ile 15 Temmuz arasında 14 gün vardır.
                  </p>
                </article>

                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                  <CalendarCheck2 className="h-6 w-6 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-violet-950">
                    İki gün de dahil
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    1 Temmuz ve 15 Temmuz birlikte sayılırsa toplam 15 gün olur.
                  </p>
                </article>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-amber-900">
                  Kullanacağınız yöntemi rezervasyon, izin, proje veya kurum
                  kuralına göre belirleyin. Aynı tarih aralığı farklı
                  uygulamalarda farklı gün sayısıyla değerlendirilebilir.
                </p>
              </div>
            </section>

            <section
              id="hafta-ay-yil"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Süre dönüşümü
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Gün sayısı hafta, ay ve yıl olarak nasıl yorumlanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Gün sayısı haftaya kesin biçimde çevrilebilir; ancak ay ve yıl
                karşılıkları takvim uzunlukları değiştiği için yaklaşık olabilir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[820px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Toplam gün</th>
                      <th className="px-5 py-4 text-sm font-bold">Hafta karşılığı</th>
                      <th className="px-5 py-4 text-sm font-bold">Yaklaşık ay</th>
                      <th className="px-5 py-4 text-sm font-bold">Yaklaşık yıl</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {durationRows.map((row) => (
                      <tr key={row.days} className="transition hover:bg-violet-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.days}
                        </td>
                        <td className="px-5 py-4 font-semibold text-indigo-700">
                          {row.weeks}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.months}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.years}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <BadgeInfo className="mt-0.5 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-blue-950">
                      Ay karşılığı neden yaklaşık?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-blue-900">
                      Çünkü takvim ayları 28, 29, 30 veya 31 gün sürebilir.
                      Kesin ay farkı için takvim bileşenleri ayrıca incelenmelidir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="is-gunu-ve-takvim-gunu"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Süre türleri
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                İş günü ile takvim günü arasındaki fark nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Takvim günü hesabında hafta sonları ve resmî tatiller dahil
                edilir. İş günü hesabında ise kurumun çalışma düzenine göre
                belirli günler çıkarılır.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <CalendarDays className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Takvim günü
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Haftanın tüm günlerini ve resmî tatilleri kapsar.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <BriefcaseBusiness className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-emerald-950">
                    İş günü
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Kurumun çalışma takvimine göre hafta sonları ve tatiller çıkarılabilir.
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
                      Kurum kurallarını kontrol edin
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-amber-900">
                      İş günü, izin, başvuru ve resmî süre hesaplarında her
                      kurumun farklı uygulaması olabilir. Araç standart takvim
                      günü farkını verir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="artik-yil"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-violet-700">
                Takvim detayı
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Artık yıl ve 29 Şubat gün hesabını nasıl etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Artık yıllarda şubat ayı 29 gün sürer ve yıl toplam 366 gündür.
                Uzun tarih aralıklarında bu ek gün toplam farkı doğrudan etkiler.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <Calendar className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Normal yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Genellikle 365 gün sürer.
                  </p>
                </article>

                <article className="rounded-2xl border border-violet-200 bg-violet-50 p-6">
                  <CalendarCheck2 className="h-6 w-6 text-violet-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-violet-950">
                    Artık yıl
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-violet-900">
                    29 Şubat nedeniyle 366 gün sürer.
                  </p>
                </article>

                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <Timer className="h-6 w-6 text-indigo-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-indigo-950">
                    Hesaplama etkisi
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Tarih aralığı 29 Şubat'ı kapsıyorsa toplam gün bir artar.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="kullanim-alanlari"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Kullanım örnekleri
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Gün hesaplama aracı hangi durumlarda kullanılabilir?
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-700 shadow-sm">
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
                Gün hesaplamasında sık yapılan hatalar
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
                    className="mt-0.5 h-6 w-6 shrink-0 text-indigo-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Sonuç türünü doğru yorumlayın
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Araç takvim tarihleri arasındaki matematiksel farkı verir.
                      İş günü, resmî süre, izin veya rezervasyon hesabında farklı
                      dahil etme kuralları uygulanabilir.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
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
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-indigo-50 hover:text-indigo-800"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 to-violet-700 p-6 text-white shadow-xl shadow-indigo-900/20">
              <Sparkles className="h-7 w-7 text-indigo-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                Tarihler arasındaki süreyi bulun
              </h2>
              <p className="mt-3 text-sm leading-6 text-indigo-100">
                Başlangıç ve bitiş tarihini seçerek toplam gün farkını ve hafta
                karşılığını saniyeler içinde görün.
              </p>
              <a
                href="#hesaplama-araci"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-indigo-800 transition hover:bg-indigo-50"
              >
                Hesaplamaya dön
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <TriangleAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
              <h2 className="mt-4 font-bold text-amber-950">
                Resmî süre uyarısı
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Hukuki, resmî veya kurumsal sürelerde hafta sonu, tatil ve dahil
                gün kuralları ayrıca kontrol edilmelidir.
              </p>
            </div>
          </aside>
        </div>

        <section id="ilgili-hesaplamalar" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Diğer araçlar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                İlgili tarih ve süre hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Gün, yaş, saat ve tarih planlamalarınızı diğer ücretsiz
                hesaplama araçlarımızla tamamlayın.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex items-center gap-2 text-sm font-bold text-indigo-700 transition hover:text-indigo-900"
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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700 transition group-hover:bg-indigo-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight
                      className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-700"
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
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-bold text-indigo-800">
              <Info className="h-4 w-4" aria-hidden="true" />
              Merak edilenler
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Gün hesaplama hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Tarih farkı, dahil gün hesabı, artık yıl ve iş günü hakkında
              merak edilen soruları inceleyin.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-indigo-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-sm font-extrabold text-indigo-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 font-bold text-slate-950">
                      {item.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-indigo-700 group-open:text-white">
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

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-indigo-950 to-violet-900 p-8 text-white shadow-2xl shadow-indigo-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-indigo-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                İki tarih arasındaki gün farkını hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Başlangıç ve bitiş tarihini seçerek toplam gün sayısını,
                hafta karşılığını ve dahil gün sonucunu saniyeler içinde görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-indigo-900 transition hover:-translate-y-0.5 hover:bg-indigo-50"
            >
              Gün farkını hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki gün hesaplama sonuçları genel bilgilendirme
            amaçlıdır. Araç seçilen takvim tarihleri arasındaki matematiksel
            farkı gösterir. İş günü, resmî tatil, izin süresi, rezervasyon veya
            hukuki süre hesaplarında ilgili kurumun kuralları ayrıca dikkate
            alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}