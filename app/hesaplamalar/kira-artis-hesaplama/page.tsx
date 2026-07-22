import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeInfo,
  Banknote,
  BookOpen,
  Building2,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CirclePercent,
  FileCheck2,
  FileText,
  Home,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import RentIncreaseCalculator from "@/components/calculators/RentIncreaseCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kira-artis-hesaplama";
const canonicalUrl = `https://hesaprehberi.vercel.app${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Kira artış hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
  { id: "hesaplama-araci", label: "Kira artış hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "kira-artisi-nedir", label: "Kira artışı nedir?" },
  { id: "hesaplama-formulu", label: "Kira artış formülü" },
  { id: "ornek-hesaplama", label: "Örnek kira artışı" },
  { id: "oran-senaryolari", label: "Farklı oran senaryoları" },
  { id: "yillik-maliyet", label: "Yıllık maliyet analizi" },
  { id: "sozlesme-ve-yenileme", label: "Sözleşme ve yenileme dönemi" },
  { id: "dikkat-edilecekler", label: "Dikkat edilmesi gerekenler" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Mevcut kirayı girin",
    description:
      "Sözleşme yenilenmeden önce ödediğiniz güncel aylık kira tutarını yazın.",
    icon: Home,
  },
  {
    number: "02",
    title: "Artış oranını belirleyin",
    description:
      "İlgili dönem için kullanmak istediğiniz kira artış oranını yüzde olarak girin.",
    icon: Percent,
  },
  {
    number: "03",
    title: "Sonuçları inceleyin",
    description:
      "Aylık artış tutarını, yeni kira bedelini ve yıllık toplam farkı görün.",
    icon: Calculator,
  },
  {
    number: "04",
    title: "Senaryoları karşılaştırın",
    description:
      "Farklı oranlar girerek bütçenize etkisini ve yıllık maliyeti karşılaştırın.",
    icon: TrendingUp,
  },
];

const exampleRows = [
  {
    currentRent: "10.000 ₺",
    rate: "%20",
    increase: "2.000 ₺",
    newRent: "12.000 ₺",
    annualDifference: "24.000 ₺",
  },
  {
    currentRent: "15.000 ₺",
    rate: "%25",
    increase: "3.750 ₺",
    newRent: "18.750 ₺",
    annualDifference: "45.000 ₺",
  },
  {
    currentRent: "20.000 ₺",
    rate: "%32,03",
    increase: "6.406 ₺",
    newRent: "26.406 ₺",
    annualDifference: "76.872 ₺",
  },
  {
    currentRent: "25.000 ₺",
    rate: "%40",
    increase: "10.000 ₺",
    newRent: "35.000 ₺",
    annualDifference: "120.000 ₺",
  },
];

const scenarioRows = [
  {
    rate: "%10",
    increase: "2.000 ₺",
    newRent: "22.000 ₺",
    annualRent: "264.000 ₺",
    annualDifference: "24.000 ₺",
  },
  {
    rate: "%20",
    increase: "4.000 ₺",
    newRent: "24.000 ₺",
    annualRent: "288.000 ₺",
    annualDifference: "48.000 ₺",
  },
  {
    rate: "%25",
    increase: "5.000 ₺",
    newRent: "25.000 ₺",
    annualRent: "300.000 ₺",
    annualDifference: "60.000 ₺",
  },
  {
    rate: "%32,03",
    increase: "6.406 ₺",
    newRent: "26.406 ₺",
    annualRent: "316.872 ₺",
    annualDifference: "76.872 ₺",
  },
  {
    rate: "%40",
    increase: "8.000 ₺",
    newRent: "28.000 ₺",
    annualRent: "336.000 ₺",
    annualDifference: "96.000 ₺",
  },
];

const keyPoints = [
  {
    title: "Doğru mevcut kira",
    description:
      "Hesaplamaya sözleşmenin yenilenmesinden önce geçerli olan aylık kira bedeliyle başlanmalıdır.",
    icon: WalletCards,
  },
  {
    title: "Doğru artış oranı",
    description:
      "Araç oranı kendisi belirlemez; kullanıcı tarafından girilen oranı matematiksel olarak uygular.",
    icon: CirclePercent,
  },
  {
    title: "Yenileme tarihi",
    description:
      "Sözleşmenin yenileme tarihi, uygulanacak koşulların değerlendirilmesinde önemlidir.",
    icon: CalendarDays,
  },
  {
    title: "Sözleşme şartları",
    description:
      "Özel sözleşme hükümleri ve taraflar arasındaki anlaşmalar ayrıca değerlendirilmelidir.",
    icon: FileText,
  },
];

const commonMistakes = [
  {
    title: "Yüzdeyi tutar gibi girmek",
    description:
      "Artış oranı alanına 32,03 yerine 0,3203 gibi farklı formatta değer girmek yanlış sonuç üretebilir.",
    icon: CircleAlert,
  },
  {
    title: "Eski kira yerine yeni kirayı baz almak",
    description:
      "Artış hesabı, henüz artırılmamış mevcut kira bedeli üzerinden yapılmalıdır.",
    icon: Home,
  },
  {
    title: "Aylık farkı yıllık fark sanmak",
    description:
      "Aylık artış tutarı ile yıllık toplam maliyet farkı birbirinden farklıdır.",
    icon: CalendarDays,
  },
  {
    title: "Matematiksel sonucu hukuki sonuç sanmak",
    description:
      "Araç yalnızca girilen verileri hesaplar; hukuki geçerlilik veya uygulanabilirlik değerlendirmesi yapmaz.",
    icon: Scale,
  },
];

const relatedCalculators = [
  {
    title: "Yüzde Hesaplama",
    description:
      "Bir tutarın yüzdesini, yüzde artışını ve yüzde azalışını kolayca hesaplayın.",
    href: "/hesaplamalar/yuzde-hesaplama",
    icon: Percent,
  },
  {
    title: "Enflasyon Hesaplama",
    description:
      "Paranın satın alma gücündeki değişimi ve enflasyon etkisini karşılaştırın.",
    href: "/hesaplamalar/enflasyon-hesaplama",
    icon: TrendingUp,
  },
  {
    title: "Konut Kredisi Hesaplama",
    description:
      "Konut kredisi taksitlerini, toplam geri ödemeyi ve faiz maliyetini hesaplayın.",
    href: "/hesaplamalar/konut-kredisi-hesaplama",
    icon: Building2,
  },
  {
    title: "Gelir Vergisi Hesaplama",
    description:
      "Matraha göre tahmini gelir vergisini ve efektif vergi oranını hesaplayın.",
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
    icon: FileText,
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt ve net maaş tutarlarını kesintilerle birlikte karşılaştırın.",
    href: "/hesaplamalar/maas-hesaplama",
    icon: Banknote,
  },
  {
    title: "Gün Hesaplama",
    description:
      "İki tarih arasındaki gün sayısını ve süre farkını kolayca bulun.",
    href: "/hesaplamalar/gun-hesaplama",
    icon: CalendarDays,
  },
];

const faqItems = [
  {
    question: "Kira artışı nasıl hesaplanır?",
    answer:
      "Mevcut aylık kira bedeli artış oranıyla çarpılır ve 100'e bölünür. Bulunan artış tutarı mevcut kiraya eklenerek yeni kira bedeli hesaplanır.",
  },
  {
    question: "Yeni kira bedeli nasıl bulunur?",
    answer:
      "Mevcut kira tutarına hesaplanan aylık artış miktarı eklenerek yeni aylık kira bedeli bulunur.",
  },
  {
    question: "Kira artış oranı her ay aynı mıdır?",
    answer:
      "Hayır. Kullanılacak oran sözleşmenin yenilendiği döneme, tarafların koşullarına ve yürürlükteki kurallara göre değişebilir.",
  },
  {
    question: "Artış oranını kendim değiştirebilir miyim?",
    answer:
      "Evet. Hesaplayıcıdaki artış oranı alanına istediğiniz oranı girerek farklı senaryoları karşılaştırabilirsiniz.",
  },
  {
    question: "Bu araç güncel oranı otomatik alıyor mu?",
    answer:
      "Hayır. Araç yalnızca sizin girdiğiniz artış oranını kullanır ve güncel oranları otomatik olarak çekmez.",
  },
  {
    question: "Yıllık kira farkı nasıl hesaplanır?",
    answer:
      "Aylık artış tutarı 12 ile çarpılarak yaklaşık yıllık kira farkı bulunabilir.",
  },
  {
    question: "Yeni yıllık kira maliyeti nasıl bulunur?",
    answer:
      "Yeni aylık kira bedeli 12 ile çarpılarak yeni kira döneminin yaklaşık yıllık toplam maliyeti hesaplanabilir.",
  },
  {
    question: "Kira artışı mevcut kira üzerinden mi hesaplanır?",
    answer:
      "Evet. Hesaplama sözleşme yenilenmeden önce geçerli olan mevcut aylık kira bedeli üzerinden yapılır.",
  },
  {
    question: "Artış oranı yüzde 30 ise ne anlama gelir?",
    answer:
      "Mevcut aylık kira bedelinin yüzde 30'u kadar artış yapılacağı anlamına gelir.",
  },
  {
    question: "20.000 TL kiraya yüzde 25 artış ne kadar olur?",
    answer:
      "Artış tutarı 5.000 TL, yeni aylık kira bedeli ise 25.000 TL olur.",
  },
  {
    question: "Artış oranı sıfır olabilir mi?",
    answer:
      "Matematiksel olarak evet. Yüzde sıfır oran girildiğinde yeni kira mevcut kira ile aynı çıkar.",
  },
  {
    question: "Negatif kira artış oranı girilebilir mi?",
    answer:
      "Negatif oran kira indirimi anlamına gelir. Hesaplayıcının kabul ettiği giriş kuralları bileşenin doğrulama yapısına bağlıdır.",
  },
  {
    question: "Kira artışı yıllık mı yapılır?",
    answer:
      "Uygulama sözleşmenin yenileme dönemine ve tarafların anlaşmasına göre değerlendirilir. Araç hukuki takvim belirlemez.",
  },
  {
    question: "Kira artış hesabında kuruş çıkabilir mi?",
    answer:
      "Evet. Mevcut kira ve oran çarpımına bağlı olarak kuruşlu sonuç oluşabilir. Sonuçların nasıl yuvarlanacağı ayrıca değerlendirilmelidir.",
  },
  {
    question: "Hesaplama sonucu hukuken bağlayıcı mıdır?",
    answer:
      "Hayır. Sonuç yalnızca matematiksel hesaplama ve genel bilgilendirme amacı taşır.",
  },
  {
    question: "Sözleşmede farklı oran varsa ne olur?",
    answer:
      "Sözleşme hükümleri ve yürürlükteki kurallar birlikte değerlendirilmelidir. Araç bu değerlendirmeyi yapmaz.",
  },
  {
    question: "İşyeri ve konut kiraları aynı şekilde mi değerlendirilir?",
    answer:
      "Hukuki uygulama ve sözleşme koşulları farklılık gösterebilir. Araç yalnızca girilen oranla matematiksel hesaplama yapar.",
  },
  {
    question: "Kira artışında depozito da artar mı?",
    answer:
      "Depozitonun durumu sözleşmeye ve tarafların anlaşmasına bağlıdır. Bu hesaplama aracı depozito hesabı yapmaz.",
  },
  {
    question: "Birden fazla oranı nasıl karşılaştırabilirim?",
    answer:
      "Artış oranı alanına farklı yüzdeler girerek her senaryoda oluşan yeni kira ve yıllık farkı karşılaştırabilirsiniz.",
  },
  {
    question: "Hesaplanan yeni kira kesin midir?",
    answer:
      "Matematiksel olarak girilen tutar ve oran için doğrudur; ancak hukuki veya sözleşmesel geçerlilik ayrıca değerlendirilmelidir.",
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
  name: "Kira Artış Hesaplama Aracı",
  applicationCategory: "FinanceApplication",
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
      item: "https://hesaprehberi.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hesaplamalar",
      item: "https://hesaprehberi.vercel.app/hesaplamalar",
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
  name: "Kira artışı nasıl hesaplanır?",
  description:
    "Mevcut kira ve artış oranıyla yeni kira bedelini hesaplama adımları.",
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
  headline: "Kira Artış Hesaplama Rehberi",
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

export default function KiraArtisHesaplamaPage() {
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"
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
                  <Home className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Kira Artış Hesaplama
                <span className="mt-2 block text-blue-300">
                  Yeni Kira Bedelinizi Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Mevcut kira bedeli ve artış oranını girerek aylık artış
                tutarını, yeni kira bedelini ve yıllık toplam farkı saniyeler
                içinde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Yeni aylık kira
                </span>
                <span className="inline-flex items-center gap-2">
                  <CirclePercent className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Artış tutarı
                </span>
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-cyan-300" aria-hidden="true" />
                  Yıllık maliyet farkı
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
          <RentIncreaseCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Kira artış hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Mevcut kira ve artış oranını kullanarak yeni kira bedelinizi dört
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
              id="kira-artisi-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex">
                  <Home className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Kira artışı nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Kira artışı, mevcut aylık kira bedelinin belirli bir yüzde
                  oranında yükseltilmesidir. Hesaplama, mevcut kira tutarı ile
                  girilen artış oranının çarpılmasıyla yapılır.
                </p>
                <p>
                  Bu işlem sonucunda önce aylık artış tutarı bulunur. Daha sonra
                  bu tutar mevcut kiraya eklenerek yeni aylık kira bedeli
                  hesaplanır.
                </p>
                <p>
                  Araç yalnızca matematiksel işlem yapar. Kullanılması gereken
                  oranı, sözleşme şartlarını veya hukuki uygulanabilirliği
                  kendisi belirlemez.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">
                    Aylık artış
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Mevcut kiraya uygulanacak ek aylık tutarı gösterir.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">
                    Yeni kira
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Artış sonrasında ödenecek yeni aylık kira bedelidir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="hesaplama-formulu"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Hesaplama yöntemi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Kira artışı nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kira artış tutarı, mevcut aylık kira bedelinin artış oranıyla
                çarpılması ve sonucun 100'e bölünmesiyle hesaplanır.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[540px] text-center font-mono text-base font-bold md:text-lg">
                    Artış Tutarı = Mevcut Kira × Artış Oranı / 100
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[540px] text-center font-mono text-base font-bold md:text-lg">
                    Yeni Kira = Mevcut Kira + Artış Tutarı
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[540px] text-center font-mono text-base font-bold md:text-lg">
                    Yıllık Fark = Aylık Artış Tutarı × 12
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ornek-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                Uygulamalı örnek
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek kira artışı hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Mevcut kira bedelinin 20.000 ₺ ve artış oranının %32,03
                olduğunu varsayalım. Bu durumda aylık artış tutarı yaklaşık
                6.406 ₺, yeni aylık kira bedeli ise 26.406 ₺ olur.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Mevcut kira
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    20.000 ₺
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Artış oranı
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    %32,03
                  </p>
                </article>

                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm font-medium text-blue-700">
                    Artış tutarı
                  </p>
                  <p className="mt-2 text-xl font-bold text-blue-900">
                    6.406 ₺
                  </p>
                </article>

                <article className="rounded-2xl bg-blue-700 p-6 text-white">
                  <p className="text-sm font-medium text-blue-100">
                    Yeni kira
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    26.406 ₺
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold leading-7 text-blue-900">
                  20.000 × %32,03 = 6.406 ₺ artış
                </p>
                <p className="mt-2 font-semibold leading-7 text-blue-900">
                  20.000 + 6.406 = 26.406 ₺ yeni kira
                </p>
                <p className="mt-2 font-semibold leading-7 text-blue-900">
                  6.406 × 12 = 76.872 ₺ yıllık fark
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Mevcut kira</th>
                      <th className="px-5 py-4 text-sm font-bold">Artış oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">Aylık artış</th>
                      <th className="px-5 py-4 text-sm font-bold">Yeni kira</th>
                      <th className="px-5 py-4 text-sm font-bold">Yıllık fark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={`${row.currentRent}-${row.rate}`} className="transition hover:bg-blue-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.currentRent}</td>
                        <td className="px-5 py-4 text-slate-700">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-blue-700">{row.increase}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.newRent}</td>
                        <td className="px-5 py-4 font-semibold text-cyan-700">{row.annualDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="oran-senaryolari"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Karşılaştırma
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Farklı kira artış oranları nasıl sonuç verir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki tablo, 20.000 ₺ mevcut kira için farklı artış oranlarının
                aylık ve yıllık maliyete etkisini gösterir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Artış oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">Aylık artış</th>
                      <th className="px-5 py-4 text-sm font-bold">Yeni kira</th>
                      <th className="px-5 py-4 text-sm font-bold">Yeni yıllık kira</th>
                      <th className="px-5 py-4 text-sm font-bold">Yıllık fark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {scenarioRows.map((row) => (
                      <tr key={row.rate} className="transition hover:bg-cyan-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-blue-700">{row.increase}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.newRent}</td>
                        <td className="px-5 py-4 text-slate-700">{row.annualRent}</td>
                        <td className="px-5 py-4 font-semibold text-cyan-700">{row.annualDifference}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-blue-900">
                  Farklı oranları karşılaştırırken yalnızca yeni aylık kirayı
                  değil, yıllık toplam maliyet farkını da dikkate almak bütçe
                  planlamasını kolaylaştırır.
                </p>
              </div>
            </section>

            <section
              id="yillik-maliyet"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
                Bütçe analizi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Kira artışının yıllık maliyeti nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık artış tutarının 12 ile çarpılması, yeni kira döneminde
                oluşacak yaklaşık yıllık maliyet farkını gösterir. Yeni aylık
                kira bedelinin 12 ile çarpılması ise yeni dönemin toplam yıllık
                kira maliyetini verir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <CalendarDays className="h-6 w-6 text-blue-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Aylık artış
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Mevcut kira ile yeni kira arasındaki aylık farktır.
                  </p>
                </article>

                <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                  <TrendingUp className="h-6 w-6 text-cyan-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Yıllık fark
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Aylık artış tutarının 12 aylık toplam karşılığıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                  <WalletCards className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                  <h3 className="mt-4 font-bold text-slate-950">
                    Yeni yıllık maliyet
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Yeni aylık kira bedelinin 12 aylık toplamıdır.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="sozlesme-ve-yenileme"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Sözleşme bilgisi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Sözleşme ve yenileme dönemi neden önemlidir?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {keyPoints.map((item) => {
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

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <TriangleAlert
                    className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-amber-950">
                      Hukuki değerlendirme uyarısı
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-amber-900">
                      Kira artışının hukuki geçerliliği; sözleşme, yenileme
                      tarihi, taşınmaz türü ve yürürlükteki düzenlemelere göre
                      değişebilir. Bu araç hukuki değerlendirme yapmaz.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="dikkat-edilecekler"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Önemli noktalar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Kira artış hesabında nelere dikkat edilmelidir?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">Baz alınan kira</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Hesaplamada yenileme öncesindeki mevcut kira tutarı kullanılmalıdır.
                  </p>
                </article>

                <article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                  <h3 className="font-bold text-cyan-950">Girilen oran</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-900">
                    Araç oranı doğrulamaz; yalnızca kullanıcının girdiği yüzdeden sonuç üretir.
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="font-bold text-amber-950">Yuvarlama farkı</h3>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Kuruşlu sonuçlarda kullanılan yuvarlama yöntemi küçük farklar oluşturabilir.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">Yıllık bütçe</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Yeni aylık kira kadar yıllık toplam maliyet de değerlendirilmelidir.
                  </p>
                </article>
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
                Kira artış hesaplamasında sık yapılan hatalar
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
                      Hesaplama sonucu hakkında
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Sonuç, yalnızca girilen kira tutarı ve yüzde oranına dayalı
                      matematiksel bir tahmindir. Resmî veya hukuki belge yerine
                      kullanılamaz.
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

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-cyan-700 p-6 text-white shadow-xl shadow-blue-900/20">
              <Sparkles className="h-7 w-7 text-blue-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                Yeni kiranızı hemen hesaplayın
              </h2>
              <p className="mt-3 text-sm leading-6 text-blue-100">
                Mevcut kira ve artış oranını girerek aylık ve yıllık maliyet
                farkını saniyeler içinde görün.
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
                Hukuki bilgilendirme
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Araç yalnızca matematiksel hesaplama yapar. Güncel mevzuat,
                sözleşme hükümleri ve özel anlaşmalar ayrıca değerlendirilmelidir.
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
                İlgili finans ve bütçe hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Kira, enflasyon, kredi ve gelir planlamanızı diğer ücretsiz
                hesaplama araçlarımızla tamamlayın.
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
              Kira artışı hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kira artış oranı, yeni kira bedeli, yıllık maliyet ve hesaplama
              yöntemi hakkında merak edilen soruları inceleyin.
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

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-cyan-900 p-8 text-white shadow-2xl shadow-blue-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Yeni kira bedelinizi hemen hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Mevcut kira ve artış oranını girerek aylık artış tutarını,
                yeni kirayı ve yıllık maliyet farkını saniyeler içinde görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Kira artışını hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki kira artış hesaplama sonuçları genel
            bilgilendirme amaçlıdır. Araç yalnızca girilen kira tutarı ve oran
            üzerinden matematiksel sonuç üretir. Sonuçlar sözleşme, mahkeme
            kararı, resmî belge veya hukuki danışmanlık yerine geçmez.
          </p>
        </div>
      </div>
    </main>
  );
}