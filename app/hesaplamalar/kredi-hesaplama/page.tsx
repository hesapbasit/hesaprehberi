import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  BookOpen,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  CreditCard,
  FileText,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import KrediCalculator from "@/components/calculators/KrediCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kredi-hesaplama";

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

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const tableOfContents = [
  {
    id: "hesaplama-araci",
    label: "Kredi hesaplama aracı",
  },
  {
    id: "nasil-kullanilir",
    label: "Nasıl kullanılır?",
  },
  {
    id: "kredi-taksiti-nasil-hesaplanir",
    label: "Kredi taksiti nasıl hesaplanır?",
  },
  {
    id: "ornek-hesaplama",
    label: "Örnek kredi hesaplaması",
  },
  {
    id: "faiz-ve-vade-etkisi",
    label: "Faiz ve vadenin etkisi",
  },
  {
    id: "maliyetler",
    label: "Ek maliyetler",
  },
  {
    id: "kredi-karsilastirma",
    label: "Kredi karşılaştırma",
  },
  {
    id: "ilgili-hesaplamalar",
    label: "İlgili hesaplamalar",
  },
  {
    id: "sik-sorulan-sorular",
    label: "Sık sorulan sorular",
  },
];

const calculationSteps = [
  {
    number: "01",
    title: "Kredi tutarını girin",
    description:
      "Bankadan kullanmayı planladığınız anapara tutarını Türk lirası olarak yazın.",
    icon: WalletCards,
  },
  {
    number: "02",
    title: "Vadeyi seçin",
    description:
      "Krediyi kaç ayda geri ödemek istediğinizi belirleyin. Vade, aylık taksit ve toplam maliyet üzerinde doğrudan etkilidir.",
    icon: CalendarDays,
  },
  {
    number: "03",
    title: "Aylık faiz oranını yazın",
    description:
      "Bankanın teklifinde belirtilen aylık faiz oranını girin. Yıllık maliyet oranı yerine aylık oran kullanılmalıdır.",
    icon: Percent,
  },
  {
    number: "04",
    title: "Sonuçları değerlendirin",
    description:
      "Aylık taksiti, toplam faiz yükünü, toplam geri ödemeyi ve taksit dağılımını birlikte inceleyin.",
    icon: ListChecks,
  },
];

const exampleRows = [
  {
    amount: "100.000 ₺",
    maturity: "12 ay",
    rate: "%3,49",
    monthlyPayment: "Yaklaşık 10.624 ₺",
    totalPayment: "Yaklaşık 127.488 ₺",
  },
  {
    amount: "100.000 ₺",
    maturity: "24 ay",
    rate: "%3,49",
    monthlyPayment: "Yaklaşık 6.237 ₺",
    totalPayment: "Yaklaşık 149.688 ₺",
  },
  {
    amount: "100.000 ₺",
    maturity: "36 ay",
    rate: "%3,49",
    monthlyPayment: "Yaklaşık 4.986 ₺",
    totalPayment: "Yaklaşık 179.496 ₺",
  },
];

const costItems = [
  {
    title: "Kredi tahsis ücreti",
    description:
      "Bankanın kredi kullandırma işlemi için talep edebileceği dosya veya tahsis masrafıdır.",
    icon: FileText,
  },
  {
    title: "Sigorta primleri",
    description:
      "Hayat sigortası, konut sigortası veya kredi türüne göre farklı sigorta maliyetleri oluşabilir.",
    icon: ShieldCheck,
  },
  {
    title: "Vergi ve fonlar",
    description:
      "Kredi türüne ve yürürlükteki uygulamalara bağlı olarak faiz üzerinden ilave kesintiler hesaplanabilir.",
    icon: ReceiptText,
  },
  {
    title: "Ekspertiz ve ipotek masrafları",
    description:
      "Özellikle konut kredilerinde ekspertiz, ipotek tesis ve benzeri ek maliyetler bulunabilir.",
    icon: Landmark,
  },
];

const comparisonCriteria = [
  {
    title: "Aylık taksit",
    description:
      "Bütçenizi zorlamadan düzenli olarak ödeyebileceğiniz taksit seviyesini değerlendirin.",
    icon: CreditCard,
  },
  {
    title: "Toplam geri ödeme",
    description:
      "Yalnızca düşük taksite değil, kredi sonunda bankaya ödenecek toplam tutara odaklanın.",
    icon: Banknote,
  },
  {
    title: "Yıllık maliyet oranı",
    description:
      "Faiz dışındaki bazı ücretleri de yansıtabildiği için teklifleri karşılaştırırken önemli bir göstergedir.",
    icon: BadgePercent,
  },
  {
    title: "Ek masraflar",
    description:
      "Tahsis ücreti, sigorta ve krediye bağlı diğer masrafları banka teklifinden kontrol edin.",
    icon: ReceiptText,
  },
];

const relatedCalculators = [
  {
    title: "İhtiyaç Kredisi Hesaplama",
    description:
      "Bireysel ihtiyaç kredilerinde taksit ve toplam geri ödeme tutarını hesaplayın.",
    href: "/hesaplamalar/ihtiyac-kredisi-hesaplama",
    icon: WalletCards,
  },
  {
    title: "Konut Kredisi Hesaplama",
    description:
      "Ev finansmanı için farklı tutar, faiz ve vade seçeneklerini değerlendirin.",
    href: "/hesaplamalar/konut-kredisi-hesaplama",
    icon: Landmark,
  },
  {
    title: "Taşıt Kredisi Hesaplama",
    description:
      "Araç kredinizin tahmini aylık taksitini ve toplam maliyetini görün.",
    href: "/hesaplamalar/tasit-kredisi-hesaplama",
    icon: CreditCard,
  },
  {
    title: "Kredi Yapılandırma Hesaplama",
    description:
      "Mevcut kredinizi yeni faiz oranı ve vadeyle yapılandırmanın etkisini inceleyin.",
    href: "/hesaplamalar/kredi-yapilandirma-hesaplama",
    icon: TrendingDown,
  },
  {
    title: "Kredi Erken Kapama Hesaplama",
    description:
      "Krediyi vadesinden önce kapatmanın tahmini maliyet ve tasarruf etkisini hesaplayın.",
    href: "/hesaplamalar/kredi-erken-kapama-hesaplama",
    icon: CircleDollarSign,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Basit faiz hesaplamalarıyla faiz tutarını ve toplam değeri öğrenin.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: Percent,
  },
];

const faqItems = [
  {
    question: "Aylık kredi taksiti nasıl hesaplanır?",
    answer:
      "Aylık kredi taksiti; kredi anaparası, aylık faiz oranı ve toplam vade kullanılarak eşit taksitli kredi formülüyle hesaplanır. Taksitlerin içinde hem faiz hem de anapara ödemesi bulunur.",
  },
  {
    question: "Vade uzadıkça aylık taksit azalır mı?",
    answer:
      "Genellikle evet. Vade uzadığında kredi daha fazla aya bölündüğü için aylık taksit düşebilir. Ancak daha uzun süre faiz ödendiğinden toplam geri ödeme çoğunlukla artar.",
  },
  {
    question: "Faiz oranı yükselirse kredi taksiti nasıl değişir?",
    answer:
      "Aynı kredi tutarı ve vade için faiz oranının yükselmesi aylık taksiti, toplam faiz tutarını ve toplam geri ödemeyi artırır.",
  },
  {
    question: "Kredi hesaplama sonucuna masraflar dahil mi?",
    answer:
      "Bu araç temel eşit taksitli kredi formülüne göre yaklaşık sonuç verir. Tahsis ücreti, sigorta, ekspertiz, ipotek, vergi ve bankaya özgü diğer masraflar ayrıca değerlendirilmelidir.",
  },
  {
    question: "Aylık faiz oranı ile yıllık faiz oranı aynı mıdır?",
    answer:
      "Hayır. Aylık faiz oranı her ödeme dönemi için uygulanan oranı ifade eder. Yıllık nominal oran aylık oranın on iki ile çarpılmasıyla gösterilebilir ancak bileşik etki nedeniyle efektif yıllık maliyet farklı olabilir.",
  },
  {
    question: "Kredi taksitlerinin tamamı eşit midir?",
    answer:
      "Eşit taksitli kredi modelinde aylık ödeme tutarları çoğunlukla eşittir. Ancak ilk taksitlerde faiz payı daha yüksek, son taksitlerde anapara payı daha yüksek olur.",
  },
  {
    question: "Kredi ödeme planında faiz neden ilk aylarda daha yüksektir?",
    answer:
      "Faiz, kalan anapara üzerinden hesaplanır. Kredinin ilk aylarında kalan borç daha yüksek olduğu için taksitin faiz kısmı da daha yüksek olur.",
  },
  {
    question: "Sıfır faizli kredi nasıl hesaplanır?",
    answer:
      "Faiz oranı sıfır olduğunda kredi tutarı doğrudan vade sayısına bölünür. Ancak kampanyalarda tahsis ücreti, sigorta veya başka koşullar bulunabileceği için toplam maliyet ayrıca kontrol edilmelidir.",
  },
  {
    question: "En uygun kredi yalnızca en düşük faizli kredi midir?",
    answer:
      "Her zaman değil. Faiz oranının yanında yıllık maliyet oranı, tahsis ücreti, sigorta masrafı, toplam geri ödeme ve erken kapama koşulları birlikte incelenmelidir.",
  },
  {
    question: "Kredi vadesini kısa tutmak avantajlı mıdır?",
    answer:
      "Kısa vadede aylık taksit yükselir ancak genellikle toplam faiz yükü azalır. Karar verirken aylık ödeme gücü ile toplam maliyet arasında denge kurulmalıdır.",
  },
  {
    question: "Kredi erken kapatılırsa faiz azalır mı?",
    answer:
      "Kalan vadelere ait gelecekteki faizlerin bir kısmı ödenmeyeceği için toplam maliyet azalabilir. Ancak kredi türüne bağlı erken ödeme tazminatı ve diğer koşullar dikkate alınmalıdır.",
  },
  {
    question: "Kredi yapılandırma ne zaman avantajlı olabilir?",
    answer:
      "Yeni faiz oranı belirgin şekilde daha düşükse ve yeni masraflar elde edilecek faiz tasarrufunu aşmıyorsa yapılandırma avantajlı olabilir. Karşılaştırma toplam maliyet üzerinden yapılmalıdır.",
  },
  {
    question: "Kredi hesaplama aracı kesin banka sonucu verir mi?",
    answer:
      "Hayır. Araç yaklaşık ve bilgilendirici sonuç üretir. Kesin taksit ve ödeme planı için bankanın resmi teklifindeki oranlar, vergiler, masraflar ve yuvarlama yöntemi esas alınmalıdır.",
  },
  {
    question: "Kredi için ideal vade nasıl belirlenir?",
    answer:
      "Aylık taksitin düzenli gelir içindeki payı, zorunlu giderler, acil durum birikimi ve toplam faiz maliyeti birlikte değerlendirilmelidir. En düşük taksit yerine sürdürülebilir ve toplam maliyeti makul bir vade seçilmelidir.",
  },
  {
    question: "Aynı faiz oranında yüksek kredi tutarı toplam faizi artırır mı?",
    answer:
      "Evet. Aynı faiz oranı ve vadede anapara arttıkça aylık taksit ve toplam faiz tutarı da orantılı biçimde yükselir.",
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
  name: "Kredi Hesaplama Aracı",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description: calculator.description,
  url: canonicalPath,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
};

export default function KrediHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema),
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <div
          aria-hidden="true"
          className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-20 md:pt-10">
          <div className="[&_a]:text-blue-200 [&_a:hover]:text-white [&_span]:text-slate-400">
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
          </div>

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-200 ring-1 ring-blue-400/20">
                  <Calculator className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                {calculator.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                {calculator.description} Aylık taksit, toplam faiz ve toplam
                geri ödeme tutarını saniyeler içinde karşılaştırın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Anında sonuç
                </span>

                <span className="inline-flex items-center gap-2">
                  <Scale className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Vade ve faiz analizi
                </span>

                <span className="inline-flex items-center gap-2">
                  <ReceiptText
                    className="h-4 w-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Detaylı ödeme özeti
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
        <KrediCalculator />

        <section
          id="nasil-kullanilir"
          className="scroll-mt-24 pt-16 md:pt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Kredi hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dört basit adımda farklı kredi tutarı, faiz ve vade seçeneklerinin
              aylık bütçenize etkisini görebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {calculationSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
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
              id="kredi-taksiti-nasil-hesaplanir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex">
                  <Calculator className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Hesaplama yöntemi
                  </span>

                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    Kredi taksiti nasıl hesaplanır?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Eşit taksitli kredilerde aylık ödeme; kullanılan kredi tutarı,
                  aylık faiz oranı ve toplam vade dikkate alınarak hesaplanır.
                  Her taksit, anapara ve faiz olmak üzere iki ana bölümden
                  oluşur.
                </p>

                <p>
                  Kredinin ilk dönemlerinde kalan anapara yüksek olduğu için
                  taksitin daha büyük bölümü faize ayrılır. Ödemeler ilerledikçe
                  kalan borç azalır ve taksit içindeki anapara payı yükselir.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-blue-200 bg-blue-50">
                <div className="border-b border-blue-200 bg-blue-100/70 px-5 py-4">
                  <p className="flex items-center gap-2 font-bold text-blue-950">
                    <BadgePercent className="h-5 w-5" aria-hidden="true" />
                    Eşit taksitli kredi formülü
                  </p>
                </div>

                <div className="p-5 md:p-6">
                  <div className="overflow-x-auto rounded-xl bg-white px-5 py-6 text-center shadow-sm">
                    <p className="min-w-[520px] font-mono text-lg font-bold text-slate-900 md:text-xl">
                      Taksit = Anapara × [r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]
                    </p>
                  </div>

                  <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                    <div className="rounded-xl bg-white p-4">
                      <dt className="font-bold text-slate-900">r</dt>
                      <dd className="mt-1 text-slate-600">
                        Aylık faiz oranının ondalık karşılığıdır.
                      </dd>
                    </div>

                    <div className="rounded-xl bg-white p-4">
                      <dt className="font-bold text-slate-900">n</dt>
                      <dd className="mt-1 text-slate-600">
                        Toplam vade veya taksit sayısıdır.
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <TriangleAlert
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-amber-900">
                  Bankaların ödeme planlarında vergi, sigorta, tahsis ücreti,
                  faiz hesaplama yöntemi ve yuvarlama farkları bulunabilir. Bu
                  nedenle araçta görülen sonuç ile resmi banka teklifi arasında
                  farklılık oluşabilir.
                </p>
              </div>
            </section>

            <section
              id="ornek-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <CircleDollarSign className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                    Örnek senaryo
                  </span>

                  <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-950">
                    Örnek kredi hesaplaması
                  </h2>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Aşağıdaki tablo, 100.000 TL kredi ve aylık %3,49 faiz oranı için
                farklı vadelerin aylık taksit ve toplam ödeme üzerindeki
                yaklaşık etkisini gösterir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Kredi tutarı
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Vade
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Aylık faiz
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Aylık taksit
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Toplam ödeme
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr
                        key={row.maturity}
                        className="transition hover:bg-blue-50/60"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                          {row.amount}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                          {row.maturity}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                          {row.rate}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-700">
                          {row.monthlyPayment}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                          {row.totalPayment}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Tablodaki tutarlar yuvarlanmış örnek sonuçlardır. Ek masraflar
                dahil değildir.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <CalendarDays
                    className="h-5 w-5 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-blue-950">
                    Kısa vade
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Aylık taksit yüksektir ancak toplam faiz maliyeti genellikle
                    daha düşüktür.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <Scale
                    className="h-5 w-5 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-emerald-950">
                    Dengeli vade
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Aylık ödeme gücü ile toplam maliyet arasında denge kurmayı
                    amaçlar.
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <TrendingDown
                    className="h-5 w-5 text-amber-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-amber-950">
                    Uzun vade
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Aylık taksit düşebilir fakat toplam faiz ve toplam geri
                    ödeme artabilir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="faiz-ve-vade-etkisi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Maliyet analizi
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Faiz oranı ve vade krediyi nasıl etkiler?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-700">
                    <BadgePercent className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Faiz oranının etkisi
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Faiz oranı yükseldiğinde her ay kalan borç üzerinden
                    hesaplanan faiz tutarı artar. Bu durum hem aylık taksiti hem
                    de toplam geri ödemeyi yükseltir.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Aylık taksit yükselir.",
                      "Toplam faiz yükü artar.",
                      "Kredi maliyeti yükselir.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-rose-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <CalendarDays className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    Vadenin etkisi
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Vade uzatıldığında anapara daha fazla taksite bölünür.
                    Aylık ödeme düşebilse de borç daha uzun süre faizlendiği
                    için toplam maliyet artabilir.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Aylık taksit düşebilir.",
                      "Toplam faiz yükü artabilir.",
                      "Borç daha uzun süre devam eder.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-bold text-emerald-950">
                    Dengeli vade seçimi
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    En kısa vade her bütçe için uygun olmayabilir. Aylık
                    taksitinizi düzenli giderleriniz ve beklenmeyen masraflar
                    sonrasında rahatça karşılayabileceğiniz seviyede tutarken,
                    toplam maliyeti de mümkün olduğunca sınırlamaya çalışın.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="maliyetler"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
                Banka masrafları
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Faiz dışında hangi maliyetler olabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Gerçek kredi maliyeti yalnızca faizden oluşmayabilir. Banka
                teklifini değerlendirirken aşağıdaki maliyet kalemlerini ayrıca
                kontrol edin.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {costItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>

                        <div>
                          <h3 className="font-bold text-slate-950">
                            {item.title}
                          </h3>

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
                      Toplam geri ödeme tutarını karşılaştırın
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Düşük faiz oranına sahip görünen bir teklif, yüksek
                      sigorta veya ek ücretler nedeniyle daha pahalı olabilir.
                      Karar vermeden önce taksit, toplam geri ödeme ve yıllık
                      maliyet oranını birlikte değerlendirin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="kredi-karsilastirma"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Teklif değerlendirme
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Kredi tekliflerini karşılaştırırken nelere bakılmalı?
              </h2>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {comparisonCriteria.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="group rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50/50"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>

                      <h3 className="mt-4 font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                  <h3 className="font-bold text-slate-950">
                    Sağlıklı kredi kullanımı için kontrol listesi
                  </h3>
                </div>

                <ul className="grid gap-0 divide-y divide-slate-100 md:grid-cols-2 md:divide-x md:divide-y-0">
                  <li className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        Taksitin geliriniz içindeki payını değerlendirin ve
                        zorunlu giderler için yeterli alan bırakın.
                      </p>
                    </div>
                  </li>

                  <li className="p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
                        aria-hidden="true"
                      />

                      <p className="text-sm leading-6 text-slate-600">
                        Beklenmeyen giderlere karşı acil durum birikiminizi
                        tamamen tüketmemeye çalışın.
                      </p>
                    </div>
                  </li>
                </ul>
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
                        <ChevronRight
                          className="h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-6 text-white shadow-xl shadow-blue-900/20">
              <Sparkles
                className="h-7 w-7 text-blue-200"
                aria-hidden="true"
              />

              <h2 className="mt-5 text-xl font-bold">
                Farklı senaryoları karşılaştırın
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Hesaplama aracına dönerek vade veya faiz oranını değiştirin.
                Aylık taksit yerine toplam maliyeti de mutlaka inceleyin.
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
              <TriangleAlert
                className="h-6 w-6 text-amber-700"
                aria-hidden="true"
              />

              <h2 className="mt-4 font-bold text-amber-950">
                Finansal karar uyarısı
              </h2>

              <p className="mt-3 text-sm leading-6 text-amber-900">
                Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır. Kredi
                kullanmadan önce banka sözleşmesini, ödeme planını ve tüm
                masrafları ayrıntılı biçimde inceleyin.
              </p>
            </div>
          </aside>
        </div>

        <section
          id="ilgili-hesaplamalar"
          className="scroll-mt-24 pt-16 md:pt-20"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Diğer araçlar
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
                İlgili kredi hesaplamaları
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Farklı kredi türlerini ve ödeme senaryolarını diğer ücretsiz
                hesaplama araçlarımızla inceleyin.
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
                  className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-200/70"
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

        <section
          id="sik-sorulan-sorular"
          className="scroll-mt-24 pt-16 md:pt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <Info className="h-4 w-4" aria-hidden="true" />
              Merak edilenler
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Kredi hesaplama hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Kredi taksiti, faiz, vade ve toplam maliyet hakkında en çok merak
              edilen soruların yanıtlarını inceleyin.
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
                  <p className="pl-12 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 p-8 text-white shadow-2xl shadow-blue-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                Kredi kararınızı rakamlarla değerlendirin
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Farklı tutar, vade ve faiz seçeneklerini deneyerek aylık
                bütçenize ve toplam maliyet hedefinize daha uygun senaryoyu
                belirleyin.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Kredi hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
            aria-hidden="true"
          />

          <p>
            HesapRehberi üzerindeki kredi hesaplama sonuçları genel
            bilgilendirme amaçlıdır ve finansal danışmanlık niteliği taşımaz.
            Kesin kredi maliyeti için bankanın güncel faiz oranı, sözleşmesi,
            resmi ödeme planı ve ek masrafları esas alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}