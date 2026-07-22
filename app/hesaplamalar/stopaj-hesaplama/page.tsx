import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeInfo,
  Banknote,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CirclePercent,
  Coins,
  FileCheck2,
  FileText,
  HandCoins,
  Info,
  Landmark,
  Layers3,
  Lightbulb,
  ListChecks,
  Percent,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import WithholdingTaxCalculator from "@/components/calculators/WithholdingTaxCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/stopaj-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

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

const tableOfContents = [
  { id: "hesaplama-araci", label: "Stopaj hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "stopaj-nedir", label: "Stopaj nedir?" },
  { id: "brut-net-fark", label: "Brüt ve net faiz farkı" },
  { id: "hesaplama-formulu", label: "Stopaj hesaplama formülü" },
  { id: "ornek-hesaplamalar", label: "Örnek hesaplamalar" },
  { id: "vade-etkisi", label: "Vade ve ürün etkisi" },
  { id: "karsilastirma", label: "Oran karşılaştırması" },
  { id: "dikkat-edilecekler", label: "Dikkat edilecekler" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Brüt faiz tutarını girin",
    description:
      "Kesinti uygulanmadan önce elde edilen toplam faiz kazancını yazın.",
    icon: Coins,
  },
  {
    number: "02",
    title: "Stopaj oranını belirleyin",
    description:
      "İlgili ürün ve vade için geçerli stopaj oranını yüzde olarak girin.",
    icon: Percent,
  },
  {
    number: "03",
    title: "Ana para ve vadeyi ekleyin",
    description:
      "Getiri oranlarını görmek için ana para ve vade süresini isteğe bağlı olarak girin.",
    icon: WalletCards,
  },
  {
    number: "04",
    title: "Net sonucu inceleyin",
    description:
      "Stopaj tutarı, net faiz, vade sonu toplamı ve efektif getiriyi karşılaştırın.",
    icon: FileCheck2,
  },
];

const exampleRows = [
  {
    gross: "5.000 ₺",
    rate: "%10",
    withholding: "500 ₺",
    net: "4.500 ₺",
  },
  {
    gross: "10.000 ₺",
    rate: "%15",
    withholding: "1.500 ₺",
    net: "8.500 ₺",
  },
  {
    gross: "25.000 ₺",
    rate: "%17,5",
    withholding: "4.375 ₺",
    net: "20.625 ₺",
  },
  {
    gross: "50.000 ₺",
    rate: "%20",
    withholding: "10.000 ₺",
    net: "40.000 ₺",
  },
];

const rateComparisonRows = [
  {
    gross: "10.000 ₺",
    rate: "%0",
    withholding: "0 ₺",
    net: "10.000 ₺",
    loss: "%0",
  },
  {
    gross: "10.000 ₺",
    rate: "%5",
    withholding: "500 ₺",
    net: "9.500 ₺",
    loss: "%5",
  },
  {
    gross: "10.000 ₺",
    rate: "%10",
    withholding: "1.000 ₺",
    net: "9.000 ₺",
    loss: "%10",
  },
  {
    gross: "10.000 ₺",
    rate: "%15",
    withholding: "1.500 ₺",
    net: "8.500 ₺",
    loss: "%15",
  },
  {
    gross: "10.000 ₺",
    rate: "%20",
    withholding: "2.000 ₺",
    net: "8.000 ₺",
    loss: "%20",
  },
];

const productNotes = [
  {
    title: "Vadeli mevduat",
    description:
      "Stopaj oranı ürünün para birimine, vadesine ve yürürlükteki düzenlemelere göre değişebilir.",
    icon: Landmark,
  },
  {
    title: "Faiz gelirleri",
    description:
      "Kesinti çoğunlukla ana para yerine elde edilen brüt faiz kazancı üzerinden hesaplanır.",
    icon: HandCoins,
  },
  {
    title: "Fon ve benzeri ürünler",
    description:
      "Vergilendirme yöntemi ve oranları ürün türüne göre farklılık gösterebilir.",
    icon: Layers3,
  },
  {
    title: "Kısa vadeli ürünler",
    description:
      "Vade kısa olduğunda günlük ve yıllıklaştırılmış getiri karşılaştırmaları daha dikkatli yorumlanmalıdır.",
    icon: CirclePercent,
  },
];

const commonMistakes = [
  {
    title: "Stopajı ana paradan hesaplamak",
    description:
      "Birçok faiz ürününde stopaj ana para üzerinden değil, brüt faiz geliri üzerinden hesaplanır.",
    icon: TriangleAlert,
  },
  {
    title: "Eski oranı kullanmak",
    description:
      "Stopaj oranları mevzuata göre değişebileceğinden güncel oran doğrulanmadan yapılan hesaplama yanıltıcı olabilir.",
    icon: BadgeInfo,
  },
  {
    title: "Brüt getiriyi net sanmak",
    description:
      "İlan edilen getiri kesinti öncesi olabilir. Gerçek karşılaştırmada stopaj sonrası net kazanç dikkate alınmalıdır.",
    icon: Coins,
  },
  {
    title: "Vade etkisini göz ardı etmek",
    description:
      "Aynı brüt getiri, farklı vade ve oran koşullarında farklı net yıllık getiri üretebilir.",
    icon: CirclePercent,
  },
];

const relatedCalculators = [
  {
    title: "Mevduat Faizi Hesaplama",
    description:
      "Ana para, faiz oranı ve vadeye göre brüt ve net mevduat getirisini hesaplayın.",
    href: "/hesaplamalar/mevduat-faizi-hesaplama",
    icon: Landmark,
  },
  {
    title: "Bileşik Faiz Hesaplama",
    description:
      "Faizin anaparaya eklenerek yeniden değerlendirildiği bileşik getiriyi görün.",
    href: "/hesaplamalar/bilesik-faiz-hesaplama",
    icon: CirclePercent,
  },
  {
    title: "Gelir Vergisi Hesaplama",
    description:
      "Yıllık matraha göre kademeli gelir vergisini ve efektif oranı hesaplayın.",
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
    icon: FileText,
  },
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil ve hariç tutarları vergi miktarıyla birlikte hesaplayın.",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Anapara, oran ve süre bilgileriyle faiz getirisini hesaplayın.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: Calculator,
  },
  {
    title: "Yüzde Hesaplama",
    description:
      "Bir tutarın yüzdesini, yüzde artışını veya yüzde azalışını bulun.",
    href: "/hesaplamalar/yuzde-hesaplama",
    icon: Percent,
  },
];

const faqItems = [
  {
    question: "Stopaj nedir?",
    answer:
      "Stopaj, belirli gelirler elde edilirken verginin ödeme aşamasında kaynağında kesilmesidir.",
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
      "Faiz gelirlerinde çoğunlukla ana paradan değil, elde edilen brüt faiz kazancı üzerinden hesaplanır.",
  },
  {
    question: "Stopaj oranı sabit midir?",
    answer:
      "Hayır. Ürün türü, vade, para birimi ve yürürlükteki mevzuata göre değişebilir.",
  },
  {
    question: "Vadeli mevduatta stopaj uygulanır mı?",
    answer:
      "Uygulanabilir. Güncel oran ürün ve vade koşullarına göre doğrulanmalıdır.",
  },
  {
    question: "Günlük faiz kazancında stopaj nasıl etkiler?",
    answer:
      "Günlük brüt kazancın stopaj oranı kadar kısmı kesilerek net günlük kazanç azalır.",
  },
  {
    question: "Stopaj oranı yüzde 15 ise ne anlama gelir?",
    answer:
      "Brüt faiz gelirinin yüzde 15'inin vergi kesintisi olarak ayrılması anlamına gelir.",
  },
  {
    question: "Brüt ve net getiri farkı nedir?",
    answer:
      "Brüt getiri kesinti öncesi, net getiri ise stopaj sonrası elde kalan kazançtır.",
  },
  {
    question: "Vade sonu tutarı nasıl bulunur?",
    answer:
      "Ana para ile stopaj sonrası net faiz geliri toplanır.",
  },
  {
    question: "Stopaj hesaplama aracı hangi gelirlerde kullanılabilir?",
    answer:
      "Özellikle faiz ve benzeri brüt gelirlerin net karşılığını yaklaşık olarak hesaplamak için kullanılabilir.",
  },
  {
    question: "Efektif yıllık getiri neden hesaplanır?",
    answer:
      "Kısa vadeli getirinin yıllık bileşik karşılığını yaklaşık olarak görmek ve ürünleri karşılaştırmak için kullanılır.",
  },
  {
    question: "Ana para girmeden stopaj hesaplanabilir mi?",
    answer:
      "Evet. Stopaj kesintisi ve net faiz bulunabilir; ancak getiri oranları hesaplanamaz.",
  },
  {
    question: "Vade süresi neden istenir?",
    answer:
      "Günlük kazanç ve yıllıklaştırılmış getiri hesaplarını yapabilmek için kullanılır.",
  },
  {
    question: "Stopaj kesintisi iade edilir mi?",
    answer:
      "Bu durum gelir türüne ve vergi mevzuatına bağlıdır. Kesin değerlendirme için uzman desteği gerekebilir.",
  },
  {
    question: "Stopaj ile gelir vergisi aynı mıdır?",
    answer:
      "Aynı kavram değildir. Stopaj, verginin kaynağında kesilme yöntemidir; gelir vergisi ise verginin kendisidir.",
  },
  {
    question: "Stopaj oranı sıfır olabilir mi?",
    answer:
      "Bazı ürün veya dönemlerde mevzuata bağlı olarak sıfır oran uygulanabilir.",
  },
  {
    question: "Negatif stopaj oranı girilebilir mi?",
    answer:
      "Hayır. Negatif oran ekonomik olarak geçerli bir stopaj senaryosu oluşturmaz.",
  },
  {
    question: "Hesaplanan sonuç kesin midir?",
    answer:
      "Hayır. Sonuç tahminidir; finans kuruluşu koşulları ve güncel mevzuat nihai kesintiyi belirler.",
  },
  {
    question: "Güncel stopaj oranı nereden kontrol edilmelidir?",
    answer:
      "İlgili finans kuruluşunun ürün koşulları ve resmî düzenlemeler kontrol edilmelidir.",
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
  name: "Stopaj Hesaplama Aracı",
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
  name: "Stopaj nasıl hesaplanır?",
  description:
    "Brüt faiz ve stopaj oranına göre kesinti ve net faiz hesaplama adımları.",
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
  headline: "Stopaj Hesaplama Rehberi",
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

export default function StopajHesaplamaPage() {
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-rose-950 to-orange-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="[&_a]:text-rose-200 [&_a:hover]:text-white [&_span]:text-slate-400">
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
                <span className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 px-4 py-2 text-sm font-semibold text-rose-200 ring-1 ring-rose-400/20">
                  <ReceiptText className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Stopaj Hesaplama
                <span className="mt-2 block text-rose-300">
                  Brüt Faizden Net Kazancı Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Brüt faiz geliri ve stopaj oranını girerek kesinti tutarını,
                net faiz kazancını, vade sonu toplamını ve efektif getiriyi
                saniyeler içinde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Brüt ve net sonuç
                </span>
                <span className="inline-flex items-center gap-2">
                  <CirclePercent className="h-4 w-4 text-rose-300" aria-hidden="true" />
                  Oran karşılaştırması
                </span>
                <span className="inline-flex items-center gap-2">
                  <WalletCards className="h-4 w-4 text-orange-300" aria-hidden="true" />
                  Vade sonu toplamı
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
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-200">
                  <BookOpen className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-rose-200">
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
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-rose-200">
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
          <WithholdingTaxCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Stopaj hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Brüt kazancınızı dört basit adımda analiz ederek kesinti ve net
              getiri sonuçlarını karşılaştırabilirsiniz.
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 transition group-hover:bg-rose-700 group-hover:text-white">
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
              id="stopaj-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 sm:flex">
                  <ReceiptText className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Stopaj nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Stopaj, belirli gelirler elde edilirken verginin kaynağında
                  kesilmesini ifade eder. Faiz gelirlerinde kullanıcıya ödenen
                  net tutar, brüt faiz kazancından stopaj kesintisinin
                  çıkarılmasıyla bulunur.
                </p>
                <p>
                  Bu nedenle mevduat veya faiz getirisi karşılaştırırken yalnızca
                  ilan edilen brüt oranı değil, stopaj sonrası elde kalacak net
                  faiz gelirini de dikkate almak gerekir.
                </p>
                <p>
                  Stopaj oranı ürün türü, vade, para birimi ve yürürlükteki
                  mevzuata göre değişebilir. Hesaplama yaparken güncel oranın
                  kullanılması önemlidir.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <h3 className="font-bold text-rose-950">
                    Kaynağında kesinti
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rose-900">
                    Vergi, gelirin ödeme aşamasında kesilerek net tutar hesaplanır.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">
                    Net getiri analizi
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Gerçek kazanç, brüt getiriden kesintinin çıkarılmasıyla bulunur.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="brut-net-fark"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">
                Getiri analizi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Brüt faiz ve net faiz arasındaki fark
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-rose-700 shadow-sm">
                    <Coins className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Brüt faiz
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Vergi kesintisi uygulanmadan önce hesaplanan toplam faiz
                    geliridir.
                  </p>
                </article>

                <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-sm">
                    <WalletCards className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Net faiz
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Stopaj kesintisinden sonra yatırımcıya kalan gerçek faiz
                    geliridir.
                  </p>
                </article>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-blue-900">
                  Finansal ürünleri karşılaştırırken yalnızca brüt faiz oranına
                  değil, stopaj sonrası net kazanca odaklanmak daha sağlıklı sonuç verir.
                </p>
              </div>
            </section>

            <section
              id="hesaplama-formulu"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Hesaplama yöntemi
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Stopaj nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Stopaj tutarı, brüt faiz gelirinin stopaj oranıyla çarpılmasıyla
                bulunur. Net faiz ise brüt faizden stopaj tutarının çıkarılmasıyla
                hesaplanır.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[520px] text-center font-mono text-base font-bold md:text-lg">
                    Stopaj Tutarı = Brüt Faiz × Stopaj Oranı
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[520px] text-center font-mono text-base font-bold md:text-lg">
                    Net Faiz = Brüt Faiz − Stopaj Tutarı
                  </p>
                </div>
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[520px] text-center font-mono text-base font-bold md:text-lg">
                    Vade Sonu Tutarı = Ana Para + Net Faiz
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ornek-hesaplamalar"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">
                Uygulamalı örnek
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek stopaj hesaplamaları
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brüt faiz geliri 10.000 ₺ ve stopaj oranı yüzde 15 ise stopaj
                tutarı 1.500 ₺, net faiz geliri ise 8.500 ₺ olur.
              </p>

              <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-semibold text-emerald-950">
                  10.000 ₺ × %15 = 1.500 ₺ stopaj
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  10.000 ₺ − 1.500 ₺ = 8.500 ₺ net faiz
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[720px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-rose-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Brüt faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Stopaj oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">Stopaj</th>
                      <th className="px-5 py-4 text-sm font-bold">Net faiz</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={`${row.gross}-${row.rate}`} className="transition hover:bg-rose-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.gross}</td>
                        <td className="px-5 py-4 text-slate-700">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-rose-700">{row.withholding}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="vade-etkisi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-orange-700">
                Ürün ve vade
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Vade ve ürün türü stopajı nasıl etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Stopaj oranı her ürün için aynı olmayabilir. Mevduat, fon,
                faiz geliri ve farklı yatırım ürünlerinde uygulama değişebilir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {productNotes.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
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
            </section>

            <section
              id="karsilastirma"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Oran karşılaştırması
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Stopaj oranı net kazancı nasıl değiştirir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı brüt faiz geliri için stopaj oranı yükseldikçe kesinti
                artar ve net faiz geliri azalır.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[800px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Brüt faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Stopaj oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">Stopaj</th>
                      <th className="px-5 py-4 text-sm font-bold">Net faiz</th>
                      <th className="px-5 py-4 text-sm font-bold">Kazanç kaybı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {rateComparisonRows.map((row) => (
                      <tr key={row.rate} className="transition hover:bg-orange-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.gross}</td>
                        <td className="px-5 py-4 text-slate-700">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-rose-700">{row.withholding}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td>
                        <td className="px-5 py-4 font-semibold text-orange-700">{row.loss}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                Stopaj hesabında nelere dikkat edilmelidir?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <h3 className="font-bold text-amber-950">Güncel oran</h3>
                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Oranlar zaman içinde değişebileceği için güncel oran doğrulanmalıdır.
                  </p>
                </article>
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">Ürün türü</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Mevduat, fon veya farklı gelir türlerinde uygulama değişebilir.
                  </p>
                </article>
                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5">
                  <h3 className="font-bold text-indigo-950">Vade süresi</h3>
                  <p className="mt-2 text-sm leading-6 text-indigo-900">
                    Bazı ürünlerde vade süresi stopaj oranını etkileyebilir.
                  </p>
                </article>
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">Net karşılaştırma</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Finansal ürünleri net getiri üzerinden karşılaştırmak daha sağlıklıdır.
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
                Stopaj hesaplamasında sık yapılan hatalar
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
                    className="mt-0.5 h-6 w-6 shrink-0 text-rose-300"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold">
                      Önemli vergi bilgilendirmesi
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Bu araç genel bilgilendirme amacıyla yaklaşık sonuç üretir.
                      Güncel stopaj oranı, ürün koşulları ve vergi uygulaması için
                      finans kuruluşunun belgelerini ve resmî düzenlemeleri esas alın.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
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
                        className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm text-slate-600 transition hover:bg-rose-50 hover:text-rose-800"
                      >
                        <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-700 to-orange-700 p-6 text-white shadow-xl shadow-rose-900/20">
              <Sparkles className="h-7 w-7 text-rose-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                Net kazancınızı hemen görün
              </h2>
              <p className="mt-3 text-sm leading-6 text-rose-100">
                Brüt faiz ve stopaj oranını girerek kesinti tutarınızı ve net
                getirinizi saniyeler içinde hesaplayın.
              </p>
              <a
                href="#hesaplama-araci"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold text-rose-800 transition hover:bg-rose-50"
              >
                Hesaplamaya dön
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
              <TriangleAlert className="h-6 w-6 text-amber-700" aria-hidden="true" />
              <h2 className="mt-4 font-bold text-amber-950">
                Güncel oran uyarısı
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Stopaj oranları değişebilir. İşlem öncesinde ilgili finans
                kuruluşunun güncel ürün koşullarını kontrol edin.
              </p>
            </div>
          </aside>
        </div>

        <section id="ilgili-hesaplamalar" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Diğer araçlar
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                İlgili vergi ve faiz hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Faiz, vergi, kesinti ve getiri hesaplamalarınızı diğer ücretsiz
                araçlarımızla tamamlayın.
              </p>
            </div>

            <Link
              href="/hesaplamalar"
              className="inline-flex items-center gap-2 text-sm font-bold text-rose-700 transition hover:text-rose-900"
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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-rose-300 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 transition group-hover:bg-rose-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight
                      className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-rose-700"
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
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-800">
              <Info className="h-4 w-4" aria-hidden="true" />
              Merak edilenler
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Stopaj hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Faiz stopajı, brüt ve net getiri, vade ve oranlar hakkında merak
              edilen soruları inceleyin.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm open:border-rose-200 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5">
                  <span className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-sm font-extrabold text-rose-700">
                      {index + 1}
                    </span>
                    <span className="pt-1 font-bold text-slate-950">
                      {item.question}
                    </span>
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-rose-700 group-open:text-white">
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

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-rose-950 to-orange-900 p-8 text-white shadow-2xl shadow-rose-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-rose-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Stopaj sonrası net kazancınızı hemen hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Brüt faiz ve stopaj oranını girerek kesinti tutarınızı, net
                kazancınızı ve vade sonu toplamınızı saniyeler içinde görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-rose-900 transition hover:-translate-y-0.5 hover:bg-rose-50"
            >
              Stopaj hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki stopaj hesaplama sonuçları genel
            bilgilendirme amaçlıdır. Araç tarafından üretilen sonuçlar banka
            belgesi, vergi bildirimi veya diğer resmî belgelerin yerine geçmez.
            Güncel oranlar ve resmî işlemler için ilgili finans kuruluşunun
            açıklamaları ile yürürlükteki mevzuat esas alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}