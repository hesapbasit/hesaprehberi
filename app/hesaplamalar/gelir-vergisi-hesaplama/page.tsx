import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CirclePercent,
  FileCheck2,
  FileText,
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
  UserRoundCheck,
  WalletCards,
} from "lucide-react";

import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gelir-vergisi-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi calculators.ts dosyasında bulunamadı.`,
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
  { id: "hesaplama-araci", label: "Gelir vergisi hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "gelir-vergisi-nedir", label: "Gelir vergisi nedir?" },
  { id: "vergi-matrahi", label: "Vergi matrahı nedir?" },
  { id: "vergi-dilimleri", label: "Vergi dilimleri nasıl çalışır?" },
  { id: "hesaplama-formulu", label: "Hesaplama yöntemi" },
  { id: "ornek-hesaplamalar", label: "Örnek hesaplamalar" },
  { id: "marjinal-efektif", label: "Marjinal ve efektif oran" },
  { id: "karsilastirma", label: "Matrah karşılaştırması" },
  { id: "kimler-oder", label: "Kimler gelir vergisi öder?" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Gelir türünü seçin",
    description:
      "Hesaplamanın ücret geliri veya ücret dışı gelir için yapılacağını belirleyin.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Yıllık matrahı girin",
    description:
      "Vergilendirilecek yıllık gelir matrahını Türk lirası olarak yazın.",
    icon: WalletCards,
  },
  {
    number: "03",
    title: "Dilim dağılımını inceleyin",
    description:
      "Matrahın hangi bölümlerinin hangi oranlarla vergilendirildiğini görüntüleyin.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Toplam sonucu değerlendirin",
    description:
      "Toplam vergi, net kalan tutar, marjinal oran ve efektif oran sonuçlarını karşılaştırın.",
    icon: FileCheck2,
  },
];

const taxBrackets = [
  {
    bracket: "Birinci dilim",
    rate: "%15",
    salaryLimit: "190.000 ₺",
    nonSalaryLimit: "190.000 ₺",
    description: "Matrahın ilk bölümü bu oran üzerinden vergilendirilir.",
  },
  {
    bracket: "İkinci dilim",
    rate: "%20",
    salaryLimit: "400.000 ₺",
    nonSalaryLimit: "400.000 ₺",
    description: "190.000 ₺ üzerindeki ilgili bölüm bu orana tabi olur.",
  },
  {
    bracket: "Üçüncü dilim",
    rate: "%27",
    salaryLimit: "1.500.000 ₺",
    nonSalaryLimit: "1.000.000 ₺",
    description:
      "Ücret ve ücret dışı gelirlerde üst sınırın farklılaştığı dilimdir.",
  },
  {
    bracket: "Dördüncü dilim",
    rate: "%35",
    salaryLimit: "5.300.000 ₺",
    nonSalaryLimit: "5.300.000 ₺",
    description: "Yüksek matrahların belirli bölümü bu oranla vergilendirilir.",
  },
  {
    bracket: "Beşinci dilim",
    rate: "%40",
    salaryLimit: "5.300.000 ₺ üzeri",
    nonSalaryLimit: "5.300.000 ₺ üzeri",
    description: "Tarifedeki en yüksek marjinal vergi oranıdır.",
  },
];

const exampleRows = [
  {
    matrah: "150.000 ₺",
    type: "Ücret geliri",
    tax: "22.500 ₺",
    net: "127.500 ₺",
    marginal: "%15",
    effective: "%15,00",
  },
  {
    matrah: "300.000 ₺",
    type: "Ücret geliri",
    tax: "50.500 ₺",
    net: "249.500 ₺",
    marginal: "%20",
    effective: "%16,83",
  },
  {
    matrah: "500.000 ₺",
    type: "Ücret geliri",
    tax: "97.500 ₺",
    net: "402.500 ₺",
    marginal: "%27",
    effective: "%19,50",
  },
  {
    matrah: "1.200.000 ₺",
    type: "Ücret dışı gelir",
    tax: "281.500 ₺",
    net: "918.500 ₺",
    marginal: "%35",
    effective: "%23,46",
  },
];

const comparisonRows = [
  {
    matrah: "100.000 ₺",
    tax: "15.000 ₺",
    net: "85.000 ₺",
    marginal: "%15",
    effective: "%15,00",
  },
  {
    matrah: "250.000 ₺",
    tax: "40.500 ₺",
    net: "209.500 ₺",
    marginal: "%20",
    effective: "%16,20",
  },
  {
    matrah: "500.000 ₺",
    tax: "97.500 ₺",
    net: "402.500 ₺",
    marginal: "%27",
    effective: "%19,50",
  },
  {
    matrah: "1.000.000 ₺",
    tax: "232.500 ₺",
    net: "767.500 ₺",
    marginal: "%27",
    effective: "%23,25",
  },
  {
    matrah: "2.000.000 ₺",
    tax: "532.500 ₺",
    net: "1.467.500 ₺",
    marginal: "%35",
    effective: "%26,63",
  },
];

const payerGroups = [
  {
    title: "Ücret geliri elde edenler",
    description:
      "İşverenden ücret, maaş, prim, ikramiye veya benzeri ödeme alan kişiler belirli koşullarda gelir vergisine tabi olabilir.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Ticari kazanç sahipleri",
    description:
      "Ticari faaliyetlerden kazanç elde eden gerçek kişiler, vergilendirilebilir kazançları üzerinden gelir vergisi ödeyebilir.",
    icon: Landmark,
  },
  {
    title: "Serbest meslek erbabı",
    description:
      "Mesleki bilgi ve uzmanlığa dayalı bağımsız faaliyetlerden kazanç sağlayan kişiler bu kapsamda değerlendirilebilir.",
    icon: UserRoundCheck,
  },
  {
    title: "Kira geliri elde edenler",
    description:
      "Gayrimenkul veya hakların kiralanmasından gelir elde eden kişiler, istisna ve giderler sonrasında vergiye tabi olabilir.",
    icon: FileText,
  },
];

const commonMistakes = [
  {
    title: "Brüt geliri doğrudan matrah kabul etmek",
    description:
      "Kanuni indirim, istisna ve giderler dikkate alınmadan brüt gelirin tamamını matrah saymak hatalı sonuç oluşturabilir.",
    icon: TriangleAlert,
  },
  {
    title: "Tüm geliri en yüksek orandan vergilendirmek",
    description:
      "Üst dilime geçildiğinde matrahın tamamı değil, yalnızca ilgili sınırı aşan bölüm üst orana tabi olur.",
    icon: Layers3,
  },
  {
    title: "Gelir türünü yanlış seçmek",
    description:
      "Ücret ve ücret dışı gelirlerde bazı dilim sınırları farklı olabileceğinden yanlış seçim sonucu değiştirebilir.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Efektif oranı marjinal oran sanmak",
    description:
      "Marjinal oran ulaşılan en yüksek dilimi, efektif oran ise toplam verginin matraha oranını ifade eder.",
    icon: CirclePercent,
  },
];

const relatedCalculators = [
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil ve KDV hariç tutarları, vergi miktarıyla birlikte hesaplayın.",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Stopaj Hesaplama",
    description:
      "Brüt veya net tutar üzerinden stopaj kesintisini ve kalan tutarı bulun.",
    href: "/hesaplamalar/stopaj-hesaplama",
    icon: Percent,
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt ve net maaş arasındaki farkı tahmini kesintilerle inceleyin.",
    href: "/hesaplamalar/maas-hesaplama",
    icon: WalletCards,
  },
  {
    title: "Yüzde Hesaplama",
    description:
      "Bir tutarın yüzdesini, yüzde artışını veya yüzde azalışını hesaplayın.",
    href: "/hesaplamalar/yuzde-hesaplama",
    icon: CirclePercent,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Anapara, oran ve süre bilgileriyle faiz getirisini hesaplayın.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: BarChart3,
  },
  {
    title: "Kredi Hesaplama",
    description:
      "Kredi tutarı, vade ve faiz oranına göre taksit ve toplam maliyeti görün.",
    href: "/hesaplamalar/kredi-hesaplama",
    icon: Calculator,
  },
];

const faqItems = [
  {
    question: "Gelir vergisi nedir?",
    answer:
      "Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde ettiği kazanç ve iratların vergilendirilebilir kısmı üzerinden alınan doğrudan bir vergidir.",
  },
  {
    question: "Vergi matrahı ile brüt gelir aynı mıdır?",
    answer:
      "Her zaman aynı değildir. Vergi matrahı, kanunen dikkate alınan indirimler, istisnalar ve giderler sonrasında vergilendirilecek tutarı ifade eder.",
  },
  {
    question:
      "Üst vergi dilimine geçince tüm gelir üst orandan mı vergilendirilir?",
    answer:
      "Hayır. Yalnızca ilgili vergi diliminin sınırını aşan bölüm üst orandan vergilendirilir. Önceki dilimlerde kalan tutarlar kendi oranları üzerinden hesaplanmaya devam eder.",
  },
  {
    question: "Ücret ve ücret dışı gelir arasında neden fark vardır?",
    answer:
      "Gelir vergisi tarifesinde bazı dilim sınırları ücret gelirleri ve ücret dışı gelirler için farklı uygulanabilir. Bu nedenle aynı matrah tutarı, gelir türüne göre farklı bir vergi dilimine ulaşabilir.",
  },
  {
    question: "Efektif vergi oranı nedir?",
    answer:
      "Efektif vergi oranı, hesaplanan toplam gelir vergisinin vergi matrahına bölünmesiyle bulunan ortalama vergi oranıdır.",
  },
  {
    question: "Marjinal vergi oranı nedir?",
    answer:
      "Marjinal vergi oranı, matrahın ulaştığı en yüksek vergi diliminde uygulanan orandır. Matrahın tamamının bu oranla vergilendirildiği anlamına gelmez.",
  },
  {
    question: "Gelir vergisi nasıl hesaplanır?",
    answer:
      "Vergi matrahı tarifedeki dilimlere ayrılır. Her dilimde kalan tutar o dilimin oranıyla çarpılır ve hesaplanan dilim vergileri toplanır.",
  },
  {
    question: "Gelir vergisi dilimleri ne işe yarar?",
    answer:
      "Vergi dilimleri, gelirin farklı bölümlerine farklı oran uygulanmasını sağlar. Böylece artan oranlı vergilendirme sistemi oluşur.",
  },
  {
    question: "Gelir vergisi oranı yüzde kaçtır?",
    answer:
      "Hesaplayıcıda oranlar yüzde 15, yüzde 20, yüzde 27, yüzde 35 ve yüzde 40 olarak kademeli biçimde uygulanır.",
  },
  {
    question: "Net gelir nasıl hesaplanır?",
    answer:
      "Basitleştirilmiş yaklaşımda net kalan tutar, vergi matrahından hesaplanan toplam gelir vergisinin çıkarılmasıyla bulunur.",
  },
  {
    question: "İstisnalar hesaplamaya dahil midir?",
    answer:
      "Bu araç genel tarife üzerinden yaklaşık hesaplama yapar. Asgari ücret istisnası, kişisel indirimler ve diğer özel uygulamalar sonuçlara dahil olmayabilir.",
  },
  {
    question: "Gelir vergisi aylık mı yıllık mı hesaplanır?",
    answer:
      "Gelir vergisi tarifesi yıllık matrah üzerinden değerlendirilir. Ücretlerde yıl içinde kümülatif matrah üzerinden dönemsel kesintiler yapılabilir.",
  },
  {
    question: "Birden fazla gelir türü varsa ne yapılır?",
    answer:
      "Birden fazla gelir türünde beyan, istisna ve mahsup kuralları değişebilir. Toplam vergi yükü her gelirin niteliğine göre ayrıca değerlendirilmelidir.",
  },
  {
    question: "Kira geliri gelir vergisine tabi midir?",
    answer:
      "Kira gelirleri belirli istisna ve gider kuralları sonrasında gelir vergisine tabi olabilir. Kesin sonuç için güncel mevzuat dikkate alınmalıdır.",
  },
  {
    question: "Serbest meslek kazancı nasıl vergilendirilir?",
    answer:
      "Serbest meslek kazançlarında hasılattan indirilebilen giderler düşüldükten sonra kalan vergilendirilebilir kazanç tarifeye göre hesaplanabilir.",
  },
  {
    question: "Hesaplanan tutar kesin vergi borcum mudur?",
    answer:
      "Hayır. Sonuç genel bilgilendirme amacıyla yapılan yaklaşık bir hesaplamadır. İstisnalar, indirimler, kesintiler, mahsuplar ve kişisel durumlar gerçek vergi tutarını değiştirebilir.",
  },
  {
    question: "Vergi dilimleri her yıl değişir mi?",
    answer:
      "Vergi dilimi tutarları ve uygulama ayrıntıları dönemsel olarak güncellenebilir. Resmî işlem öncesinde güncel kaynakların kontrol edilmesi gerekir.",
  },
  {
    question: "Gelir vergisi hesaplama aracı resmî belge yerine geçer mi?",
    answer:
      "Hayır. Araç yalnızca bilgilendirme ve karşılaştırma amacıyla sonuç üretir. Beyanname ve resmî işlemlerde güncel mevzuat ile uzman değerlendirmesi esas alınmalıdır.",
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
  name: "Gelir Vergisi Hesaplama Aracı",
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
  name: "Gelir vergisi nasıl hesaplanır?",
  description:
    "Yıllık vergi matrahına göre kademeli gelir vergisi hesaplama adımları.",
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
  headline: "Gelir Vergisi Hesaplama Rehberi",
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

export default function GelirVergisiHesaplamaPage() {
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950">
        <div
          aria-hidden="true"
          className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
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
                  <Landmark className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                Gelir Vergisi Hesaplama
                <span className="mt-2 block text-blue-300">
                  Vergi Diliminizi ve Net Tutarı Görün
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Yıllık vergi matrahınızı girerek kademeli gelir vergisini,
                marjinal oranı, efektif oranı ve vergi sonrası kalan tutarı
                saniyeler içinde hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Kademeli tarife
                </span>
                <span className="inline-flex items-center gap-2">
                  <Layers3 className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Dilim bazlı dağılım
                </span>
                <span className="inline-flex items-center gap-2">
                  <CirclePercent className="h-4 w-4 text-blue-300" aria-hidden="true" />
                  Efektif oran analizi
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
                  <p className="text-sm font-semibold text-blue-200">Sayfa rehberi</p>
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
          <IncomeTaxCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              Gelir vergisi hesaplama aracı nasıl kullanılır?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Yıllık vergi matrahınızı dört basit adımda analiz ederek toplam
              vergi yükünüzü ve net kalan tutarı görebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {usageSteps.map((step) => {
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
                    <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <div className="mt-16 grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] md:mt-20">
          <div className="space-y-8">
            <section id="gelir-vergisi-nedir" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Temel bilgiler</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Gelir vergisi nedir?</h2>
              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde ettiği kazanç ve iratların vergilendirilebilir kısmı üzerinden alınan doğrudan bir vergidir. Vergi, kişinin gelirinin tamamına tek bir oran uygulanarak değil, kademeli tarife üzerinden hesaplanır.</p>
                <p>Artan oranlı yapı nedeniyle matrah yükseldikçe gelirin belirli bölümleri daha yüksek oranlara tabi olur. Buna rağmen üst dilime geçildiğinde matrahın tamamı yeni orandan vergilendirilmez.</p>
                <p>Gerçek vergi tutarı; gelir türü, istisnalar, giderler, indirimler, kesintiler ve mahsuplar gibi birçok unsura göre değişebilir. Bu araç genel tarife mantığını anlamak ve yaklaşık sonuç görmek için hazırlanmıştır.</p>
              </div>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">Artan oranlı sistem</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-900">Gelirin farklı bölümleri farklı oranlarla vergilendirilir.</p>
                </article>
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">Dilim bazlı hesaplama</h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">Her dilimde hesaplanan vergi tutarı ayrı ayrı bulunur ve sonuçlar toplanır.</p>
                </article>
              </div>
            </section>

            <section id="vergi-matrahi" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">Vergilendirilebilir tutar</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Vergi matrahı nedir?</h2>
              <p className="mt-6 leading-8 text-slate-600">Vergi matrahı, gelir vergisinin uygulanacağı esas tutardır. Brüt gelir ile vergi matrahı her zaman aynı değildir. Kanunen kabul edilen giderler, istisnalar ve indirimler sonrasında kalan tutar vergilendirilebilir matrahı oluşturabilir.</p>
              <div className="mt-7 overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                <p className="min-w-[650px] text-center font-mono text-base font-bold md:text-lg">Vergi Matrahı = Brüt Gelir − İndirilebilir Giderler − İstisnalar</p>
              </div>
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
                <p className="text-sm leading-6 text-amber-900">Araçta girmeniz gereken değer, mümkünse brüt gelir değil, vergilendirilecek yıllık matrahtır. Matrahınızı bilmiyorsanız resmî belgelerinizi veya uzman değerlendirmesini esas alın.</p>
              </div>
            </section>

            <section id="vergi-dilimleri" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Kademeli tarife</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Vergi dilimleri nasıl çalışır?</h2>
              <p className="mt-5 leading-8 text-slate-600">Matrah, tarifedeki sınırlar boyunca parçalara ayrılır. Her parçaya ait vergi kendi oranıyla hesaplanır. Bu nedenle ulaşılan en yüksek oran, matrahın tamamına uygulanmaz.</p>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Dilim</th>
                      <th className="px-5 py-4 text-sm font-bold">Oran</th>
                      <th className="px-5 py-4 text-sm font-bold">Ücret geliri üst sınırı</th>
                      <th className="px-5 py-4 text-sm font-bold">Ücret dışı gelir üst sınırı</th>
                      <th className="px-5 py-4 text-sm font-bold">Açıklama</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {taxBrackets.map((row) => (
                      <tr key={row.bracket} className="transition hover:bg-blue-50/60">
                        <td className="px-5 py-4 font-semibold text-slate-900">{row.bracket}</td>
                        <td className="px-5 py-4"><span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">{row.rate}</span></td>
                        <td className="px-5 py-4 text-slate-700">{row.salaryLimit}</td>
                        <td className="px-5 py-4 text-slate-700">{row.nonSalaryLimit}</td>
                        <td className="px-5 py-4 text-sm leading-6 text-slate-600">{row.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">Tablodaki değerler mevcut hesaplayıcıda tanımlı tarife esas alınarak gösterilmiştir. Resmî işlemler öncesinde güncel mevzuatı kontrol edin.</p>
            </section>

            <section id="hesaplama-formulu" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">Hesaplama yöntemi</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Gelir vergisi nasıl hesaplanır?</h2>
              <p className="mt-5 leading-8 text-slate-600">Toplam gelir vergisi, her vergi diliminde kalan matrah bölümünün ilgili oranla çarpılması ve tüm dilim vergilerinin toplanmasıyla bulunur.</p>
              <div className="mt-7 overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                <p className="min-w-[720px] text-center font-mono text-base font-bold md:text-lg">Toplam Vergi = (1. Dilim Tutarı × Oran) + (2. Dilim Tutarı × Oran) + ...</p>
              </div>
              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5"><span className="text-sm font-bold text-blue-700">1. adım</span><h3 className="mt-2 font-bold text-blue-950">Matrahı dilimlere ayırın</h3><p className="mt-2 text-sm leading-6 text-blue-900">Her dilim sınırı içinde kalan tutarı ayrı belirleyin.</p></article>
                <article className="rounded-2xl border border-indigo-200 bg-indigo-50 p-5"><span className="text-sm font-bold text-indigo-700">2. adım</span><h3 className="mt-2 font-bold text-indigo-950">Oranları uygulayın</h3><p className="mt-2 text-sm leading-6 text-indigo-900">Her dilim tutarını kendi vergi oranıyla çarpın.</p></article>
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5"><span className="text-sm font-bold text-emerald-700">3. adım</span><h3 className="mt-2 font-bold text-emerald-950">Vergileri toplayın</h3><p className="mt-2 text-sm leading-6 text-emerald-900">Dilim bazında hesaplanan tutarları toplayarak toplam vergiyi bulun.</p></article>
              </div>
            </section>

            <section id="ornek-hesaplamalar" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Uygulamalı örnek</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">500.000 ₺ matrah için örnek hesaplama</h2>
              <p className="mt-5 leading-8 text-slate-600">Vergi matrahının 500.000 ₺ olduğunu düşünelim. İlk 190.000 ₺ için yüzde 15, sonraki 210.000 ₺ için yüzde 20 ve kalan 100.000 ₺ için yüzde 27 oranı uygulanır.</p>
              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <article className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-medium text-slate-500">Birinci dilim</p><p className="mt-2 font-bold text-slate-900">190.000 × %15 = 28.500 ₺</p></article>
                <article className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-medium text-slate-500">İkinci dilim</p><p className="mt-2 font-bold text-slate-900">210.000 × %20 = 42.000 ₺</p></article>
                <article className="rounded-2xl bg-slate-50 p-5"><p className="text-sm font-medium text-slate-500">Üçüncü dilim</p><p className="mt-2 font-bold text-slate-900">100.000 × %27 = 27.000 ₺</p></article>
              </div>
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-6"><p className="font-semibold text-emerald-900">Toplam vergi: 28.500 ₺ + 42.000 ₺ + 27.000 ₺ = 97.500 ₺</p><p className="mt-2 text-sm leading-6 text-emerald-800">Vergi sonrası kalan tutar 402.500 ₺, efektif vergi oranı ise yüzde 19,50 olur.</p></div>
              <h3 className="mt-10 text-2xl font-bold text-slate-950">Farklı matrahlar için örnek sonuçlar</h3>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[900px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-blue-950 text-white"><tr><th className="px-5 py-4 text-sm font-bold">Matrah</th><th className="px-5 py-4 text-sm font-bold">Gelir türü</th><th className="px-5 py-4 text-sm font-bold">Toplam vergi</th><th className="px-5 py-4 text-sm font-bold">Net kalan</th><th className="px-5 py-4 text-sm font-bold">Marjinal oran</th><th className="px-5 py-4 text-sm font-bold">Efektif oran</th></tr></thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={`${row.matrah}-${row.type}`} className="transition hover:bg-emerald-50/60"><td className="px-5 py-4 font-bold text-slate-950">{row.matrah}</td><td className="px-5 py-4 text-slate-700">{row.type}</td><td className="px-5 py-4 font-semibold text-rose-700">{row.tax}</td><td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td><td className="px-5 py-4 text-slate-700">{row.marginal}</td><td className="px-5 py-4 font-semibold text-blue-700">{row.effective}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section id="marjinal-efektif" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">Oran analizi</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Marjinal ve efektif vergi oranı arasındaki fark</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700"><Layers3 className="h-6 w-6" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-bold text-slate-950">Marjinal vergi oranı</h3><p className="mt-3 leading-7 text-slate-600">Matrahınızın ulaştığı en yüksek vergi diliminde uygulanan orandır. Matrahın tamamının bu oran üzerinden vergilendirildiği anlamına gelmez.</p></article>
                <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700"><CirclePercent className="h-6 w-6" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-bold text-slate-950">Efektif vergi oranı</h3><p className="mt-3 leading-7 text-slate-600">Hesaplanan toplam verginin toplam vergi matrahına bölünmesiyle elde edilen ortalama vergi oranıdır.</p></article>
              </div>
              <div className="mt-7 overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white"><p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">Efektif Vergi Oranı = Toplam Vergi ÷ Vergi Matrahı × 100</p></div>
            </section>

            <section id="karsilastirma" className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10">
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Karşılaştırmalı analiz</span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">Matrah yükseldikçe vergi yükü nasıl değişir?</h2>
              <p className="mt-5 leading-8 text-slate-600">Matrah yükseldikçe hem toplam vergi tutarı hem de efektif vergi oranı artabilir. Ancak artış, her tutarın tamamının en yüksek orandan vergilendirilmesi şeklinde gerçekleşmez.</p>
              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[800px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white"><tr><th className="px-5 py-4 text-sm font-bold">Matrah</th><th className="px-5 py-4 text-sm font-bold">Vergi</th><th className="px-5 py-4 text-sm font-bold">Net kalan</th><th className="px-5 py-4 text-sm font-bold">Marjinal oran</th><th className="px-5 py-4 text-sm font-bold">Efektif oran</th></tr></thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.matrah} className="transition hover:bg-blue-50/60"><td className="px-5 py-4 font-bold text-slate-950">{row.matrah}</td><td className="px-5 py-4 font-semibold text-rose-700">{row.tax}</td><td className="px-5 py-4 font-semibold text-emerald-700">{row.net}</td><td className="px-5 py-4 text-slate-700">{row.marginal}</td><td className="px-5 py-4 font-semibold text-blue-700">{row.effective}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="kimler-oder"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Gelir türleri
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Kimler gelir vergisi ödeyebilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vergilendirme yükümlülüğü; gelirin türüne, tutarına,
                istisnalara ve kişinin hukuki durumuna göre değişebilir.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {payerGroups.map((item) => {
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

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />

                <div>
                  <p className="font-bold text-emerald-950">
                    Gelir türünü doğru sınıflandırın
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Aynı tutardaki gelir, niteliğine göre farklı beyan,
                    istisna ve indirim kurallarına tabi olabilir.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="yaygin-hatalar"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Dikkat edilmesi gerekenler
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Gelir vergisi hesaplamasında sık yapılan hatalar
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
                      Önemli vergi bilgilendirmesi
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Bu araç yalnızca girilen yıllık matraha tanımlı gelir
                      vergisi tarifesini uygular. Asgari ücret vergi istisnası,
                      kişisel indirimler, giderler, geçmiş dönem mahsupları,
                      kesintiler, engellilik indirimi ve beyannameye özgü diğer
                      uygulamalar hesaplamaya dahil değildir.
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
                Matrahınızı hemen analiz edin
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Gelir türünü ve yıllık matrahı girerek dilim dağılımınızı,
                toplam verginizi ve efektif oranınızı görüntüleyin.
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
                Resmî işlem uyarısı
              </h2>

              <p className="mt-3 text-sm leading-6 text-amber-900">
                Vergi dilimleri ve uygulama esasları değişebilir. Beyanname ve
                resmî işlemler için güncel resmî kaynakları ve mali müşavir
                değerlendirmesini esas alın.
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
                İlgili vergi ve finans hesaplamaları
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Vergi, kesinti, maaş ve finans hesaplamalarınızı diğer ücretsiz
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
              Gelir vergisi hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Vergi matrahı, gelir türleri, dilimler, marjinal oran ve efektif
              oran hakkında merak edilen soruları inceleyin.
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
                Gelir vergisi yükünüzü hemen hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Yıllık vergi matrahınızı girerek toplam verginizi, dilim
                dağılımınızı ve vergi sonrası kalan tutarı saniyeler içinde
                görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              Gelir vergisi hesapla
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
            HesapRehberi üzerindeki gelir vergisi hesaplama sonuçları genel
            bilgilendirme amaçlıdır. Araç tarafından üretilen sonuçlar
            beyanname, tahakkuk fişi veya diğer resmî belgelerin yerine geçmez.
            Resmî işlemlerde güncel mevzuat ve yetkili uzman değerlendirmesi
            esas alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}