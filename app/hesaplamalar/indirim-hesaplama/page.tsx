import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CirclePercent,
  Coins,
  Gift,
  Info,
  Lightbulb,
  ListChecks,
  Percent,
  ReceiptText,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Tag,
  Tags,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import DiscountCalculator from "@/components/calculators/DiscountCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/indirim-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `İndirim hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
  { id: "hesaplama-araci", label: "İndirim hesaplama aracı" },
  { id: "nasil-kullanilir", label: "Araç nasıl kullanılır?" },
  { id: "indirim-nedir", label: "İndirim nedir?" },
  { id: "hesaplama-formulu", label: "İndirim formülü" },
  { id: "ornek-hesaplama", label: "Örnek indirim hesabı" },
  { id: "oran-karsilastirmasi", label: "İndirim oranı karşılaştırması" },
  { id: "ardisik-indirim", label: "Arka arkaya indirim" },
  { id: "tersine-hesaplama", label: "Eski fiyatı bulma" },
  { id: "alisveris-ipuclari", label: "Alışveriş ipuçları" },
  { id: "yaygin-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sik-sorulan-sorular", label: "Sık sorulan sorular" },
];

const usageSteps = [
  {
    number: "01",
    title: "Normal fiyatı girin",
    description:
      "Ürünün kampanya veya indirim uygulanmadan önceki satış fiyatını yazın.",
    icon: Tag,
  },
  {
    number: "02",
    title: "İndirim oranını ekleyin",
    description:
      "Uygulanacak yüzde indirim oranını ilgili alana girin.",
    icon: Percent,
  },
  {
    number: "03",
    title: "İndirim tutarını görün",
    description:
      "Normal fiyattan düşülecek toplam indirim miktarını inceleyin.",
    icon: Coins,
  },
  {
    number: "04",
    title: "İndirimli fiyatı karşılaştırın",
    description:
      "Ödenecek yeni fiyatı ve tasarruf oranını farklı senaryolarla karşılaştırın.",
    icon: ShoppingCart,
  },
];

const exampleRows = [
  {
    normalPrice: "500 ₺",
    rate: "%10",
    discount: "50 ₺",
    finalPrice: "450 ₺",
  },
  {
    normalPrice: "1.000 ₺",
    rate: "%20",
    discount: "200 ₺",
    finalPrice: "800 ₺",
  },
  {
    normalPrice: "1.500 ₺",
    rate: "%25",
    discount: "375 ₺",
    finalPrice: "1.125 ₺",
  },
  {
    normalPrice: "2.000 ₺",
    rate: "%50",
    discount: "1.000 ₺",
    finalPrice: "1.000 ₺",
  },
];

const comparisonRows = [
  {
    rate: "%5",
    discount: "50 ₺",
    finalPrice: "950 ₺",
    saved: "%5",
  },
  {
    rate: "%10",
    discount: "100 ₺",
    finalPrice: "900 ₺",
    saved: "%10",
  },
  {
    rate: "%20",
    discount: "200 ₺",
    finalPrice: "800 ₺",
    saved: "%20",
  },
  {
    rate: "%25",
    discount: "250 ₺",
    finalPrice: "750 ₺",
    saved: "%25",
  },
  {
    rate: "%50",
    discount: "500 ₺",
    finalPrice: "500 ₺",
    saved: "%50",
  },
];

const sequentialDiscountRows = [
  {
    first: "%10",
    second: "%10",
    finalPrice: "810 ₺",
    effective: "%19",
  },
  {
    first: "%20",
    second: "%10",
    finalPrice: "720 ₺",
    effective: "%28",
  },
  {
    first: "%25",
    second: "%20",
    finalPrice: "600 ₺",
    effective: "%40",
  },
  {
    first: "%30",
    second: "%30",
    finalPrice: "490 ₺",
    effective: "%51",
  },
];

const shoppingTips = [
  {
    title: "Etiket fiyatını kontrol edin",
    description:
      "İndirim oranı kadar ürünün indirimsiz normal fiyatı da doğru olmalıdır.",
    icon: Tag,
  },
  {
    title: "Kuponu ayrı değerlendirin",
    description:
      "Kupon indirimi çoğu zaman indirimli fiyat üzerinden ayrıca uygulanır.",
    icon: Gift,
  },
  {
    title: "Kargo ve hizmet bedelini ekleyin",
    description:
      "Toplam ödeme yalnızca ürün fiyatından oluşmayabilir.",
    icon: ShoppingBag,
  },
  {
    title: "Birim fiyatı karşılaştırın",
    description:
      "Farklı paket boyutlarında yalnızca toplam fiyat yerine birim maliyeti inceleyin.",
    icon: Calculator,
  },
];

const commonMistakes = [
  {
    title: "İndirim tutarıyla indirimli fiyatı karıştırmak",
    description:
      "İndirim tutarı düşülen miktardır; indirimli fiyat ise ödeme sonrası kalan tutardır.",
    icon: CircleAlert,
  },
  {
    title: "Ardışık indirimleri toplamak",
    description:
      "Yüzde 20 ve ardından yüzde 10 indirim toplamda yüzde 30 değil, yüzde 28 indirim oluşturur.",
    icon: BadgePercent,
  },
  {
    title: "Yüzdeyi ondalık biçimde yanlış girmek",
    description:
      "Yüzde 20 için alana 20 girilmesi gerekir; 0,20 farklı bir sonuç üretebilir.",
    icon: Percent,
  },
  {
    title: "Ek masrafları hesaba katmamak",
    description:
      "Kargo, vergi, taksit farkı veya hizmet bedeli toplam ödemeyi artırabilir.",
    icon: ReceiptText,
  },
];

const relatedCalculators = [
  {
    title: "Yüzde Hesaplama",
    description:
      "Bir tutarın yüzdesini, yüzde artışını ve yüzde azalışını hesaplayın.",
    href: "/hesaplamalar/yuzde-hesaplama",
    icon: Percent,
  },
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil ve hariç fiyatları vergi tutarıyla birlikte hesaplayın.",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Zam Hesaplama",
    description:
      "Bir tutara uygulanacak zam oranını ve yeni değeri hesaplayın.",
    href: "/hesaplamalar/zam-hesaplama",
    icon: CirclePercent,
  },
  {
    title: "Kar Marjı Hesaplama",
    description:
      "Maliyet ve satış fiyatına göre kâr tutarını ve marj oranını bulun.",
    href: "/hesaplamalar/kar-marji-hesaplama",
    icon: Banknote,
  },
  {
    title: "Taksit Hesaplama",
    description:
      "Toplam tutarı taksit sayısına göre aylık ödeme planına bölün.",
    href: "/hesaplamalar/taksit-hesaplama",
    icon: WalletCards,
  },
  {
    title: "Yüzde Değişim Hesaplama",
    description:
      "İki değer arasındaki yüzde artış veya azalış oranını hesaplayın.",
    href: "/hesaplamalar/yuzde-degisim-hesaplama",
    icon: Calculator,
  },
];

const faqItems = [
  {
    question: "İndirim nasıl hesaplanır?",
    answer:
      "Normal fiyat indirim oranıyla çarpılır ve 100'e bölünür. Bulunan tutar normal fiyattan çıkarılarak indirimli fiyat elde edilir.",
  },
  {
    question: "Yüzde 10 indirim nasıl hesaplanır?",
    answer:
      "Ürün fiyatını 10 ile çarpıp 100'e bölebilir veya fiyatı doğrudan 10'a bölebilirsiniz.",
  },
  {
    question: "Yüzde 20 indirim nasıl hesaplanır?",
    answer:
      "Normal fiyatın yüzde 20'si bulunur ve normal fiyattan çıkarılır.",
  },
  {
    question: "Yüzde 50 indirim ne anlama gelir?",
    answer:
      "Ürünün normal fiyatının yarısı kadar indirim uygulanması anlamına gelir.",
  },
  {
    question: "İndirim oranı yüzde 100 olabilir mi?",
    answer:
      "Evet. Yüzde 100 indirim uygulandığında matematiksel olarak satış fiyatı sıfır olur.",
  },
  {
    question: "İndirim oranı yüzde 100'den büyük olabilir mi?",
    answer:
      "Standart alışveriş indirimlerinde oran genellikle yüzde 0 ile yüzde 100 arasında olmalıdır.",
  },
  {
    question: "İndirim tutarı ile indirimli fiyat aynı şey midir?",
    answer:
      "Hayır. İndirim tutarı normal fiyattan düşülen miktardır; indirimli fiyat ise kalan ödeme tutarıdır.",
  },
  {
    question: "Arka arkaya iki indirim nasıl hesaplanır?",
    answer:
      "İkinci indirim, ilk indirimden sonra oluşan yeni fiyat üzerinden hesaplanır.",
  },
  {
    question: "Yüzde 20 ve yüzde 10 indirim toplamda yüzde 30 mudur?",
    answer:
      "Hayır. Ardışık uygulandığında efektif toplam indirim yüzde 28 olur.",
  },
  {
    question: "İndirimli fiyattan eski fiyat nasıl bulunur?",
    answer:
      "İndirimli fiyat, kalan yüzdeye bölünerek normal fiyat bulunabilir.",
  },
  {
    question: "500 TL ürün yüzde 20 indirimle kaç TL olur?",
    answer:
      "İndirim tutarı 100 TL, indirimli fiyat ise 400 TL olur.",
  },
  {
    question: "1.000 TL ürün yüzde 25 indirimle kaç TL olur?",
    answer:
      "İndirim tutarı 250 TL, indirimli satış fiyatı 750 TL olur.",
  },
  {
    question: "İndirim hesabına KDV dahil midir?",
    answer:
      "Araç yalnızca girilen fiyat ve oranla işlem yapar. Girdiğiniz fiyat KDV dahilse sonuç da KDV dahil tutar üzerinden hesaplanır.",
  },
  {
    question: "Kupon indirimi nasıl hesaplanır?",
    answer:
      "Kupon yüzde bazlıysa ilgili aşamadaki fiyat üzerinden ayrıca hesaplanmalıdır.",
  },
  {
    question: "Sabit tutarlı indirim nasıl hesaplanır?",
    answer:
      "Sabit indirim doğrudan ürün fiyatından çıkarılır; yüzde formülü kullanılmaz.",
  },
  {
    question: "İndirim sonrası tasarruf nasıl bulunur?",
    answer:
      "Normal fiyat ile indirimli fiyat arasındaki fark tasarruf tutarını gösterir.",
  },
  {
    question: "İndirim oranı negatif olabilir mi?",
    answer:
      "Negatif oran indirim değil fiyat artışı anlamına gelir ve standart indirim hesabına uygun değildir.",
  },
  {
    question: "İndirimli fiyat kuruşlu çıkabilir mi?",
    answer:
      "Evet. Normal fiyat ve oran nedeniyle kuruşlu sonuç oluşabilir.",
  },
  {
    question: "Kargo bedeli hesaplamaya dahil midir?",
    answer:
      "Hayır. Kargo, hizmet bedeli ve diğer ek masraflar ayrıca değerlendirilmelidir.",
  },
  {
    question: "Hesaplama sonucu kesin ödeme tutarı mıdır?",
    answer:
      "Hayır. Son ödeme tutarı mağaza koşulları, kupon, kargo ve ek ücretlere göre değişebilir.",
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
  name: "İndirim Hesaplama Aracı",
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
  name: "İndirim nasıl hesaplanır?",
  description:
    "Normal fiyat ve indirim oranıyla indirim tutarını ve yeni fiyatı hesaplama adımları.",
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
  headline: "İndirim Hesaplama Rehberi",
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

export default function IndirimHesaplamaPage() {
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

      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-rose-950 to-fuchsia-950">
        <div
          aria-hidden="true"
          className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"
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
                  <Tag className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                İndirim Hesaplama
                <span className="mt-2 block text-rose-300">
                  İndirimli Fiyatı Anında Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                Normal fiyat ve indirim oranını girerek indirim tutarını,
                ödenecek yeni fiyatı ve tasarruf miktarını saniyeler içinde
                hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <BadgePercent className="h-4 w-4 text-rose-300" aria-hidden="true" />
                  İndirim tutarı
                </span>
                <span className="inline-flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-fuchsia-300" aria-hidden="true" />
                  İndirimli fiyat
                </span>
                <span className="inline-flex items-center gap-2">
                  <Coins className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Tasarruf analizi
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
          <DiscountCalculator />
        </section>

        <section id="nasil-kullanilir" className="scroll-mt-24 pt-16 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-rose-100 px-4 py-2 text-sm font-bold text-rose-800">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Kullanım rehberi
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">
              İndirim hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Normal fiyat ve yüzde indirim oranını kullanarak ödenecek tutarı
              dört basit adımda hesaplayabilirsiniz.
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
              id="indirim-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700 sm:flex">
                  <Tag className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                    Temel bilgiler
                  </span>
                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    İndirim nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  İndirim, bir ürün veya hizmetin normal satış fiyatından belirli
                  bir tutar ya da yüzde oranında düşüş yapılmasıdır.
                </p>
                <p>
                  Yüzde bazlı indirimlerde önce normal fiyatın belirtilen oran
                  kadar kısmı hesaplanır. Bu tutar normal fiyattan çıkarıldığında
                  indirimli satış fiyatı bulunur.
                </p>
                <p>
                  Hesaplama yalnızca girilen fiyat ve indirim oranını dikkate alır.
                  Kargo, kupon, vergi veya ek kampanya koşulları ayrıca değerlendirilmelidir.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                  <h3 className="font-bold text-rose-950">
                    İndirim tutarı
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-rose-900">
                    Normal fiyattan düşülen toplam miktarı gösterir.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">
                    İndirimli fiyat
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    İndirim uygulandıktan sonra ödenecek kalan tutardır.
                  </p>
                </article>
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
                İndirim nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                İndirim tutarı, normal fiyatın indirim oranıyla çarpılması ve
                sonucun 100'e bölünmesiyle hesaplanır.
              </p>

              <div className="mt-7 space-y-4">
                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    İndirim Tutarı = Normal Fiyat × İndirim Oranı / 100
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    İndirimli Fiyat = Normal Fiyat − İndirim Tutarı
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                  <p className="min-w-[560px] text-center font-mono text-base font-bold md:text-lg">
                    İndirimli Fiyat = Normal Fiyat × (100 − İndirim Oranı) / 100
                  </p>
                </div>
              </div>
            </section>

            <section
              id="ornek-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-fuchsia-700">
                Uygulamalı örnek
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Örnek indirim hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Normal fiyatı 1.000 ₺ olan bir ürüne yüzde 20 indirim
                uygulandığında indirim tutarı 200 ₺, indirimli satış fiyatı ise
                800 ₺ olur.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    Normal fiyat
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    1.000 ₺
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm font-medium text-slate-500">
                    İndirim oranı
                  </p>
                  <p className="mt-2 text-xl font-bold text-slate-900">
                    %20
                  </p>
                </article>

                <article className="rounded-2xl border border-rose-200 bg-rose-50 p-6">
                  <p className="text-sm font-medium text-rose-700">
                    İndirim tutarı
                  </p>
                  <p className="mt-2 text-xl font-bold text-rose-900">
                    200 ₺
                  </p>
                </article>

                <article className="rounded-2xl bg-rose-700 p-6 text-white">
                  <p className="text-sm font-medium text-rose-100">
                    İndirimli fiyat
                  </p>
                  <p className="mt-2 text-xl font-bold">
                    800 ₺
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-6">
                <p className="font-semibold leading-7 text-rose-900">
                  1.000 × 20 / 100 = 200 ₺ indirim tutarı
                </p>
                <p className="mt-2 font-semibold leading-7 text-rose-900">
                  1.000 − 200 = 800 ₺ indirimli fiyat
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[760px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-rose-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">Normal fiyat</th>
                      <th className="px-5 py-4 text-sm font-bold">İndirim oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">İndirim tutarı</th>
                      <th className="px-5 py-4 text-sm font-bold">İndirimli fiyat</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {exampleRows.map((row) => (
                      <tr
                        key={`${row.normalPrice}-${row.rate}`}
                        className="transition hover:bg-rose-50/60"
                      >
                        <td className="px-5 py-4 font-bold text-slate-950">
                          {row.normalPrice}
                        </td>
                        <td className="px-5 py-4 text-slate-700">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-rose-700">
                          {row.discount}
                        </td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">
                          {row.finalPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="oran-karsilastirmasi"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Oran karşılaştırması
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Farklı indirim oranları fiyatı nasıl değiştirir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki tablo, normal fiyatı 1.000 ₺ olan bir ürün için farklı
                indirim oranlarının sonuçlarını gösterir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[760px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">İndirim oranı</th>
                      <th className="px-5 py-4 text-sm font-bold">İndirim tutarı</th>
                      <th className="px-5 py-4 text-sm font-bold">İndirimli fiyat</th>
                      <th className="px-5 py-4 text-sm font-bold">Tasarruf oranı</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {comparisonRows.map((row) => (
                      <tr key={row.rate} className="transition hover:bg-fuchsia-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.rate}</td>
                        <td className="px-5 py-4 font-semibold text-rose-700">{row.discount}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.finalPrice}</td>
                        <td className="px-5 py-4 text-slate-700">{row.saved}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="ardisik-indirim"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-fuchsia-700">
                Çoklu kampanya
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Arka arkaya iki indirim nasıl hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ardışık indirimlerde ikinci oran ilk indirim sonrası oluşan yeni
                fiyat üzerinden uygulanır. Bu nedenle oranlar doğrudan toplanmaz.
              </p>

              <div className="mt-7 rounded-2xl border border-fuchsia-200 bg-fuchsia-50 p-6">
                <p className="font-semibold text-fuchsia-950">
                  1.000 ₺ ürüne önce %20 indirim: 800 ₺
                </p>
                <p className="mt-2 font-semibold text-fuchsia-950">
                  800 ₺ üzerine %10 indirim: 720 ₺
                </p>
                <p className="mt-2 text-sm leading-6 text-fuchsia-900">
                  Toplam efektif indirim yüzde 28 olur; yüzde 30 olmaz.
                </p>
              </div>

              <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-[760px] w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-fuchsia-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-sm font-bold">İlk indirim</th>
                      <th className="px-5 py-4 text-sm font-bold">İkinci indirim</th>
                      <th className="px-5 py-4 text-sm font-bold">Son fiyat</th>
                      <th className="px-5 py-4 text-sm font-bold">Efektif indirim</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {sequentialDiscountRows.map((row) => (
                      <tr key={`${row.first}-${row.second}`} className="transition hover:bg-fuchsia-50/60">
                        <td className="px-5 py-4 font-bold text-slate-950">{row.first}</td>
                        <td className="px-5 py-4 text-slate-700">{row.second}</td>
                        <td className="px-5 py-4 font-semibold text-emerald-700">{row.finalPrice}</td>
                        <td className="px-5 py-4 font-semibold text-fuchsia-700">{row.effective}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              id="tersine-hesaplama"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-rose-700">
                Ters hesaplama
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                İndirimli fiyattan normal fiyat nasıl bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                İndirimli fiyat ve indirim oranı biliniyorsa normal fiyat,
                indirim sonrasında kalan yüzde kullanılarak hesaplanabilir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl bg-slate-950 px-5 py-6 text-white">
                <p className="min-w-[600px] text-center font-mono text-base font-bold md:text-lg">
                  Normal Fiyat = İndirimli Fiyat / ((100 − İndirim Oranı) / 100)
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-950">
                  800 ₺, yüzde 20 indirimli fiyat ise:
                </p>
                <p className="mt-2 text-sm leading-6 text-blue-900">
                  800 / 0,80 = 1.000 ₺ normal fiyat
                </p>
              </div>
            </section>

            <section
              id="alisveris-ipuclari"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                Akıllı alışveriş
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                İndirimleri değerlendirirken nelere dikkat edilmelidir?
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {shoppingTips.map((item) => {
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

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <Lightbulb
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-6 text-amber-900">
                  Yüksek indirim oranı her zaman en avantajlı fiyat anlamına
                  gelmez. Farklı mağazalardaki gerçek satış fiyatlarını ayrıca
                  karşılaştırın.
                </p>
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
                İndirim hesaplamasında sık yapılan hatalar
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
                      Son ödeme tutarı hakkında
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Araç yalnızca ürün fiyatı ve indirim oranını hesaplar.
                      Kargo, kupon, üyelik avantajı, taksit farkı ve mağaza
                      koşulları ayrıca değerlendirilmelidir.
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

            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-rose-700 to-fuchsia-700 p-6 text-white shadow-xl shadow-rose-900/20">
              <Sparkles className="h-7 w-7 text-rose-100" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-bold">
                İndirimli fiyatı hemen bulun
              </h2>
              <p className="mt-3 text-sm leading-6 text-rose-100">
                Normal fiyat ve indirim oranını girerek indirim tutarını ve
                ödenecek yeni fiyatı saniyeler içinde görün.
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
                Kampanya koşulları
              </h2>
              <p className="mt-3 text-sm leading-6 text-amber-900">
                Mağaza kampanyaları kupon, sepet tutarı veya üyelik şartlarına
                bağlı olabilir. Nihai fiyatı ödeme ekranında kontrol edin.
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
                İlgili alışveriş ve yüzde hesaplamaları
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                İndirim, vergi, zam ve fiyat karşılaştırmalarınızı diğer ücretsiz
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
              İndirim hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              İndirim oranı, indirimli fiyat, ardışık kampanya ve tersine
              hesaplama hakkında merak edilen soruları inceleyin.
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

        <section className="mt-16 overflow-hidden rounded-[2rem] bg-gradient-to-r from-slate-950 via-rose-950 to-fuchsia-900 p-8 text-white shadow-2xl shadow-rose-950/20 md:mt-20 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-rose-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Ücretsiz ve hızlı
              </span>

              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl">
                İndirimli fiyatı hemen hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Normal fiyat ve indirim oranını girerek indirim tutarını,
                ödenecek fiyatı ve tasarruf miktarını saniyeler içinde görün.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-rose-900 transition hover:-translate-y-0.5 hover:bg-rose-50"
            >
              İndirimi hesapla
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
          <p>
            HesapRehberi üzerindeki indirim hesaplama sonuçları genel
            bilgilendirme amaçlıdır. Araç yalnızca girilen normal fiyat ve
            indirim oranına göre matematiksel sonuç üretir. Kargo, kupon,
            vergi, üyelik avantajı, taksit farkı ve mağazaya özel kampanya
            koşulları hesaplamaya dahil değildir.
          </p>
        </div>
      </div>
    </main>
  );
}