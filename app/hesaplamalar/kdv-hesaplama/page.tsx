import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CirclePercent,
  FileCheck2,
  FileText,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  Percent,
  ReceiptText,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import KdvCalculator from "@/components/calculators/KdvCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/kdv-hesaplama";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

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
    label: "KDV hesaplama aracı",
  },
  {
    id: "nasil-kullanilir",
    label: "Araç nasıl kullanılır?",
  },
  {
    id: "kdv-nedir",
    label: "KDV nedir?",
  },
  {
    id: "kdv-formulleri",
    label: "KDV hesaplama formülleri",
  },
  {
    id: "ornek-hesaplamalar",
    label: "Örnek hesaplamalar",
  },
  {
    id: "oran-karsilastirma",
    label: "KDV oranı karşılaştırması",
  },
  {
    id: "dahil-haric-farki",
    label: "KDV dahil ve hariç farkı",
  },
  {
    id: "yaygin-hatalar",
    label: "Sık yapılan hatalar",
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

const usageSteps = [
  {
    number: "01",
    title: "Hesaplama türünü seçin",
    description:
      "Elinizdeki tutarın KDV hariç mi yoksa KDV dahil mi olduğunu belirleyin.",
    icon: ListChecks,
  },
  {
    number: "02",
    title: "Tutarı girin",
    description:
      "Ürün veya hizmet bedelini Türk lirası olarak hesaplama alanına yazın.",
    icon: WalletCards,
  },
  {
    number: "03",
    title: "KDV oranını belirleyin",
    description:
      "Hazır oranlardan birini seçin veya özel oran alanına kendi değerinizi girin.",
    icon: CirclePercent,
  },
  {
    number: "04",
    title: "Sonuçları inceleyin",
    description:
      "KDV hariç tutarı, vergi miktarını ve KDV dahil toplam bedeli ayrı ayrı görün.",
    icon: FileCheck2,
  },
];

const excludedExamples = [
  {
    excluded: "1.000,00 TL",
    rate: "%1",
    vat: "10,00 TL",
    included: "1.010,00 TL",
  },
  {
    excluded: "1.000,00 TL",
    rate: "%10",
    vat: "100,00 TL",
    included: "1.100,00 TL",
  },
  {
    excluded: "1.000,00 TL",
    rate: "%20",
    vat: "200,00 TL",
    included: "1.200,00 TL",
  },
  {
    excluded: "5.000,00 TL",
    rate: "%20",
    vat: "1.000,00 TL",
    included: "6.000,00 TL",
  },
];

const includedExamples = [
  {
    included: "1.010,00 TL",
    rate: "%1",
    excluded: "1.000,00 TL",
    vat: "10,00 TL",
  },
  {
    included: "1.100,00 TL",
    rate: "%10",
    excluded: "1.000,00 TL",
    vat: "100,00 TL",
  },
  {
    included: "1.200,00 TL",
    rate: "%20",
    excluded: "1.000,00 TL",
    vat: "200,00 TL",
  },
  {
    included: "6.000,00 TL",
    rate: "%20",
    excluded: "5.000,00 TL",
    vat: "1.000,00 TL",
  },
];

const rateComparisonRows = [
  {
    amount: "500 TL",
    rateOne: "505 TL",
    rateTen: "550 TL",
    rateTwenty: "600 TL",
  },
  {
    amount: "1.000 TL",
    rateOne: "1.010 TL",
    rateTen: "1.100 TL",
    rateTwenty: "1.200 TL",
  },
  {
    amount: "2.500 TL",
    rateOne: "2.525 TL",
    rateTen: "2.750 TL",
    rateTwenty: "3.000 TL",
  },
  {
    amount: "5.000 TL",
    rateOne: "5.050 TL",
    rateTen: "5.500 TL",
    rateTwenty: "6.000 TL",
  },
  {
    amount: "10.000 TL",
    rateOne: "10.100 TL",
    rateTen: "11.000 TL",
    rateTwenty: "12.000 TL",
  },
];

const commonMistakes = [
  {
    title: "Yüzdeyi doğrudan bölmek",
    description:
      "KDV dahil tutardan vergi ayırırken toplam tutarı yalnızca KDV yüzdesine bölmek doğru sonuç vermez.",
    icon: TriangleAlert,
  },
  {
    title: "Dahil ve hariç tutarı karıştırmak",
    description:
      "Elinizdeki bedelin vergiyi içerip içermediği belirlenmeden yapılan hesaplamalar hatalı olabilir.",
    icon: Scale,
  },
  {
    title: "Yanlış oran kullanmak",
    description:
      "Ürün veya hizmet için geçerli oran yerine farklı bir oran seçilmesi net tutarı ve vergiyi değiştirir.",
    icon: Percent,
  },
  {
    title: "Yuvarlama farklarını göz ardı etmek",
    description:
      "Fatura satırlarında yapılan kuruş yuvarlamaları toplam tutarda küçük farklılıklar oluşturabilir.",
    icon: ReceiptText,
  },
];

const relatedCalculators = [
  {
    title: "Gelir Vergisi Hesaplama",
    description:
      "Gelir tutarına göre tahmini vergi dilimini ve vergi yükünü hesaplayın.",
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
    icon: Landmark,
  },
  {
    title: "Stopaj Hesaplama",
    description:
      "Brüt veya net tutar üzerinden stopaj kesintisini ve kalan tutarı bulun.",
    href: "/hesaplamalar/stopaj-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Yüzde Hesaplama",
    description:
      "Bir tutarın yüzdesini, yüzde artışını veya yüzde azalışını hesaplayın.",
    href: "/hesaplamalar/yuzde-hesaplama",
    icon: CirclePercent,
  },
  {
    title: "İndirim Hesaplama",
    description:
      "İndirim oranına göre yeni fiyatı ve toplam kazancınızı görüntüleyin.",
    href: "/hesaplamalar/indirim-hesaplama",
    icon: ShoppingCart,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Anapara, oran ve süre bilgileriyle faiz getirisini hesaplayın.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: Percent,
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt ve net maaş arasındaki farkı tahmini kesintilerle inceleyin.",
    href: "/hesaplamalar/maas-hesaplama",
    icon: WalletCards,
  },
];

const faqItems = [
  {
    question: "KDV nedir?",
    answer:
      "Katma Değer Vergisi, mal ve hizmetlerin üretimden nihai tüketiciye ulaşmasına kadar oluşan katma değer üzerinden alınan dolaylı bir tüketim vergisidir. Satış sırasında bedele eklenerek alıcıya yansıtılır.",
  },
  {
    question: "KDV dahil fiyat nasıl hesaplanır?",
    answer:
      "KDV hariç tutar, 1 ile KDV oranının ondalık karşılığının toplamıyla çarpılır. Örneğin 1.000 TL tutara yüzde 20 KDV uygulanırsa 1.000 × 1,20 işlemiyle 1.200 TL KDV dahil toplam bulunur.",
  },
  {
    question: "KDV hariç fiyat nasıl hesaplanır?",
    answer:
      "KDV dahil toplam, 1 ile KDV oranının ondalık karşılığının toplamına bölünür. Örneğin yüzde 20 KDV dahil 1.200 TL için 1.200 ÷ 1,20 işlemi yapılır ve KDV hariç tutar 1.000 TL olur.",
  },
  {
    question: "KDV tutarı nasıl bulunur?",
    answer:
      "KDV hariç tutardan hesaplama yapılıyorsa net bedel KDV oranıyla çarpılır. KDV dahil bedelden hesaplama yapılıyorsa toplam tutardan KDV hariç bedel çıkarılır.",
  },
  {
    question: "Yüzde 20 KDV nasıl hesaplanır?",
    answer:
      "KDV hariç tutarın yüzde 20’si alınır ve başlangıç tutarına eklenir. Örneğin 500 TL için KDV 100 TL, KDV dahil toplam ise 600 TL olur.",
  },
  {
    question: "Yüzde 10 KDV dahil tutardan nasıl ayrılır?",
    answer:
      "KDV dahil toplam 1,10’a bölünerek KDV hariç bedel bulunur. Ardından toplam tutardan net bedel çıkarılarak KDV miktarı hesaplanır.",
  },
  {
    question: "KDV dahil tutarın yüzde 20’si doğrudan KDV midir?",
    answer:
      "Hayır. KDV dahil bir toplamın doğrudan yüzde 20’sini almak, içerdiği KDV tutarını vermez. Dahil tutar önce 1,20’ye bölünmeli, daha sonra net bedel toplamdan çıkarılmalıdır.",
  },
  {
    question: "Özel KDV oranı kullanabilir miyim?",
    answer:
      "Evet. Hesaplama aracında özel oran seçeneğini kullanarak ihtiyacınıza uygun farklı bir yüzde değeri girebilirsiniz.",
  },
  {
    question: "KDV oranları her ürün için aynı mıdır?",
    answer:
      "Hayır. Uygulanacak oran, mal veya hizmetin türüne ve güncel mevzuata göre değişebilir. Resmî işlem yapmadan önce ilgili ürün veya hizmet için geçerli oran kontrol edilmelidir.",
  },
  {
    question: "KDV hesaplama sonucunda kuruş farkı neden oluşur?",
    answer:
      "Fatura sistemleri ve muhasebe yazılımları satır veya belge toplamında farklı yuvarlama yöntemleri kullanabilir. Bu nedenle birkaç kuruşluk fark oluşması mümkündür.",
  },
  {
    question: "KDV dahil fiyat ile satış fiyatı aynı mıdır?",
    answer:
      "Tüketiciye sunulan nihai satış fiyatı çoğunlukla KDV dahil bedeldir. Ancak ticari tekliflerde fiyatın KDV hariç belirtilmesi de mümkündür; teklif açıklaması dikkatle incelenmelidir.",
  },
  {
    question: "Birden fazla üründe KDV nasıl hesaplanır?",
    answer:
      "Aynı KDV oranına sahip ürünlerin toplam net bedeli üzerinden hesaplama yapılabilir. Farklı oranlara tabi ürünlerde ise her oran grubu ayrı hesaplanmalı ve sonuçlar daha sonra toplanmalıdır.",
  },
  {
    question: "İndirimden önce mi sonra mı KDV hesaplanır?",
    answer:
      "Genel hesaplama mantığında vergi matrahı, uygulanan indirim sonrasında kalan bedel üzerinden belirlenir. Resmî belgelerde işlemin niteliği ve mevzuat koşulları ayrıca değerlendirilmelidir.",
  },
  {
    question: "KDV hesaplama aracı resmî belge yerine geçer mi?",
    answer:
      "Hayır. Araç yalnızca matematiksel ve bilgilendirici sonuç üretir. Fatura, beyanname ve diğer resmî işlemlerde güncel mevzuat, muhasebe kayıtları ve yetkili uzman görüşü esas alınmalıdır.",
  },
  {
    question: "KDV tevkifatı bu hesaplamaya dahil midir?",
    answer:
      "Standart KDV hesaplama aracı yalnızca normal KDV dahil ve hariç tutarları hesaplar. Tevkifatlı işlemler farklı kurallara sahip olduğundan ayrıca değerlendirilmelidir.",
  },
  {
    question: "KDV sıfır olduğunda toplam tutar değişir mi?",
    answer:
      "KDV oranı yüzde sıfır olarak girildiğinde vergi tutarı sıfır olur ve KDV hariç tutar ile KDV dahil toplam birbirine eşit çıkar.",
  },
  {
    question: "KDV oranı değişirse eski faturalar etkilenir mi?",
    answer:
      "Uygulanacak oran genellikle vergiyi doğuran olayın gerçekleştiği tarihteki mevzuata göre değerlendirilir. Geçmiş işlemler için belge tarihi ve işlem koşulları dikkate alınmalıdır.",
  },
  {
    question: "Hesaplama aracında hangi para birimi kullanılır?",
    answer:
      "Araç sonuçları Türk lirası biçiminde gösterir. Ancak formül para biriminden bağımsızdır; aynı matematiksel yöntem farklı para birimleri için de kullanılabilir.",
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
  name: "KDV Hesaplama Aracı",
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
  name: "KDV nasıl hesaplanır?",
  description:
    "KDV dahil veya KDV hariç bir tutarın vergi miktarını hesaplama adımları.",
  totalTime: "PT1M",
  step: usageSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    name: step.title,
    text: step.description,
  })),
};

export default function KdvHesaplamaPage() {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema),
        }}
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
                  <ReceiptText className="h-4 w-4" aria-hidden="true" />
                  {calculator.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  Ücretsiz hesaplama
                </span>
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
                KDV Hesaplama
                <span className="mt-2 block text-blue-300">
                  Dahil ve Hariç Tutarı Anında Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                KDV hariç bir tutara vergi ekleyin veya KDV dahil fiyatın
                içindeki net bedeli ve vergi miktarını saniyeler içinde
                hesaplayın.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-300"
                    aria-hidden="true"
                  />
                  Anında sonuç
                </span>

                <span className="inline-flex items-center gap-2">
                  <CirclePercent
                    className="h-4 w-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Özel oran desteği
                </span>

                <span className="inline-flex items-center gap-2">
                  <FileCheck2
                    className="h-4 w-4 text-blue-300"
                    aria-hidden="true"
                  />
                  Ayrıntılı tutar özeti
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
          <KdvCalculator />
        </section>

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
              KDV hesaplama aracı nasıl kullanılır?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Dört basit adımda net bedeli, vergi miktarını ve ödenecek toplam
              tutarı hesaplayabilirsiniz.
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
              id="kdv-nedir"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-start gap-4">
                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 sm:flex">
                  <ReceiptText className="h-6 w-6" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                    Temel bilgiler
                  </span>

                  <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                    KDV nedir?
                  </h2>
                </div>
              </div>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  Katma Değer Vergisi, mal ve hizmetlerin teslimi sırasında
                  uygulanan dolaylı bir tüketim vergisidir. İşletme satış
                  bedeline KDV ekler ve tahsil ettiği vergiyi ilgili kurallar
                  kapsamında beyan eder.
                </p>

                <p>
                  Günlük alışverişlerde tüketicinin gördüğü etiket fiyatı
                  çoğunlukla KDV dahil nihai bedeldir. Ticari teklifler,
                  toptan satışlar ve işletmeler arası işlemlerde ise fiyatın
                  KDV hariç verilmesi mümkündür.
                </p>

                <p>
                  Bu nedenle bir tutarı değerlendirirken fiyatın vergiyi içerip
                  içermediğinin açıkça belirlenmesi gerekir. Aynı rakam, KDV
                  dahil veya hariç olmasına göre farklı net bedel ve vergi
                  sonucuna karşılık gelir.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="font-bold text-blue-950">
                    KDV hariç tutar
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Ürün veya hizmetin vergi eklenmeden önceki net bedelidir.
                    KDV bu tutar üzerinden hesaplanır.
                  </p>
                </article>

                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <h3 className="font-bold text-emerald-950">
                    KDV dahil tutar
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Net bedel ile hesaplanan KDV tutarının toplamıdır. Nihai
                    alıcının ödeyeceği bedeli gösterir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="kdv-formulleri"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                  <Calculator className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                    Hesaplama yöntemi
                  </span>

                  <h2 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-950">
                    KDV hesaplama formülleri
                  </h2>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Kullanılacak formül, başlangıç tutarının KDV dahil veya KDV
                hariç olmasına göre değişir.
              </p>

              <div className="mt-8 space-y-6">
                <article className="overflow-hidden rounded-2xl border border-blue-200 bg-blue-50">
                  <div className="border-b border-blue-200 bg-blue-100/70 px-5 py-4">
                    <h3 className="font-bold text-blue-950">
                      KDV hariç tutardan KDV dahil tutar hesaplama
                    </h3>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="overflow-x-auto rounded-xl bg-white px-5 py-6 shadow-sm">
                      <p className="min-w-[540px] text-center font-mono text-base font-bold text-slate-950 md:text-lg">
                        KDV Tutarı = KDV Hariç Tutar × KDV Oranı
                      </p>

                      <p className="mt-3 min-w-[540px] text-center font-mono text-base font-bold text-slate-950 md:text-lg">
                        KDV Dahil Tutar = KDV Hariç Tutar + KDV Tutarı
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-blue-900">
                      Örneğin KDV hariç 1.000 TL tutara yüzde 20 vergi
                      uygulandığında KDV 200 TL, toplam bedel 1.200 TL olur.
                    </p>
                  </div>
                </article>

                <article className="overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50">
                  <div className="border-b border-emerald-200 bg-emerald-100/70 px-5 py-4">
                    <h3 className="font-bold text-emerald-950">
                      KDV dahil tutardan KDV hariç tutar hesaplama
                    </h3>
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="overflow-x-auto rounded-xl bg-white px-5 py-6 shadow-sm">
                      <p className="min-w-[600px] text-center font-mono text-base font-bold text-slate-950 md:text-lg">
                        KDV Hariç Tutar = KDV Dahil Tutar ÷ (1 + KDV Oranı)
                      </p>

                      <p className="mt-3 min-w-[600px] text-center font-mono text-base font-bold text-slate-950 md:text-lg">
                        KDV Tutarı = KDV Dahil Tutar − KDV Hariç Tutar
                      </p>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-emerald-900">
                      Yüzde 20 KDV dahil 1.200 TL tutar 1,20’ye bölünür. Net
                      bedel 1.000 TL, içerdiği KDV ise 200 TL bulunur.
                    </p>
                  </div>
                </article>
              </div>

              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <TriangleAlert
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />

                <p className="text-sm leading-6 text-amber-900">
                  KDV dahil bir tutarın doğrudan yüzde 20’sini almak, içerdiği
                  KDV miktarını vermez. Dahil toplam önce 1,20’ye bölünerek net
                  bedel bulunmalıdır.
                </p>
              </div>
            </section>

            <section
              id="ornek-hesaplamalar"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Uygulamalı örnekler
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                KDV hariç tutardan örnek hesaplamalar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki tabloda farklı tutar ve oranlar için KDV hariç
                bedelden vergi eklenerek ulaşılan toplamlar gösterilmektedir.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV hariç tutar
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV oranı
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV tutarı
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV dahil toplam
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 bg-white">
                    {excludedExamples.map((row) => (
                      <tr
                        key={`${row.excluded}-${row.rate}`}
                        className="transition hover:bg-blue-50/60"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                          {row.excluded}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-800">
                            {row.rate}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-emerald-700">
                          {row.vat}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-950">
                          {row.included}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-10 text-2xl font-bold text-slate-950">
                KDV dahil tutardan örnek hesaplamalar
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Bu tabloda toplam satış fiyatının içindeki KDV ayrıştırılarak
                vergi hariç net bedel hesaplanmıştır.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-blue-950 text-white">
                    <tr>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV dahil tutar
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV oranı
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        KDV hariç tutar
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        İçerdiği KDV
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 bg-white">
                    {includedExamples.map((row) => (
                      <tr
                        key={`${row.included}-${row.rate}`}
                        className="transition hover:bg-emerald-50/60"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-950">
                          {row.included}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
                            {row.rate}
                          </span>
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-700">
                          {row.excluded}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-emerald-700">
                          {row.vat}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500">
                Sonuçlar matematiksel örneklerdir. Fatura sistemlerinde
                yuvarlama yöntemi nedeniyle kuruş düzeyinde farklılık
                oluşabilir.
              </p>
            </section>

            <section
              id="oran-karsilastirma"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-indigo-700">
                Oran analizi
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                Farklı KDV oranları toplam fiyatı nasıl etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı net bedel için KDV oranı yükseldikçe vergi tutarı ve
                tüketicinin ödeyeceği toplam fiyat artar.
              </p>

              <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200">
                <table className="min-w-full divide-y divide-slate-200 text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        Net tutar
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        %1 dahil
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        %10 dahil
                      </th>
                      <th className="whitespace-nowrap px-5 py-4 text-sm font-bold">
                        %20 dahil
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-100 bg-white">
                    {rateComparisonRows.map((row) => (
                      <tr
                        key={row.amount}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="whitespace-nowrap px-5 py-4 font-bold text-slate-950">
                          {row.amount}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                          {row.rateOne}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 text-slate-600">
                          {row.rateTen}
                        </td>

                        <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-700">
                          {row.rateTwenty}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <CirclePercent
                    className="h-5 w-5 text-emerald-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-emerald-950">
                    Düşük oran
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    Net bedel ile nihai satış fiyatı arasındaki fark daha
                    sınırlı olur.
                  </p>
                </article>

                <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <Scale
                    className="h-5 w-5 text-blue-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-blue-950">
                    Orta oran
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-blue-900">
                    Vergi yükü net bedelin daha görünür bir bölümünü
                    oluşturur.
                  </p>
                </article>

                <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <Percent
                    className="h-5 w-5 text-amber-700"
                    aria-hidden="true"
                  />

                  <h3 className="mt-4 font-bold text-amber-950">
                    Yüksek oran
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-amber-900">
                    Net fiyat ile tüketicinin ödediği toplam arasındaki fark
                    belirginleşir.
                  </p>
                </article>
              </div>
            </section>

            <section
              id="dahil-haric-farki"
              className="scroll-mt-24 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <span className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
                Fiyatlandırma rehberi
              </span>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">
                KDV dahil ve KDV hariç fiyat arasındaki fark
              </h2>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <FileText className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    KDV hariç fiyat
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Mal veya hizmetin vergi uygulanmadan önceki bedelidir.
                    Ticari teklifler ve işletmeler arası fiyatlandırmalarda
                    sıkça kullanılır.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Vergi tutarı henüz eklenmemiştir.",
                      "Nihai ödeme tutarını tek başına göstermez.",
                      "Üzerine geçerli KDV oranı eklenir.",
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

                <article className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <ShoppingCart className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-950">
                    KDV dahil fiyat
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Net bedel ile vergi tutarının toplamıdır. Nihai
                    tüketicinin kasada veya ödeme ekranında karşılaştığı fiyat
                    çoğunlukla bu tutardır.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      "Vergi tutarı fiyatın içindedir.",
                      "Ödenecek toplam bedeli gösterir.",
                      "Net tutar formülle ayrıştırılabilir.",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
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
                    Teklifleri karşılaştırırken
                  </p>

                  <p className="mt-2 text-sm leading-6 text-emerald-900">
                    İki fiyat teklifini karşılaştırmadan önce her ikisinin de
                    KDV dahil veya her ikisinin de KDV hariç olduğundan emin
                    olun. Aksi halde daha düşük görünen teklif gerçekte daha
                    pahalı olabilir.
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
                KDV hesaplamasında sık yapılan hatalar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Yanlış başlangıç tutarı veya yanlış formül kullanılması,
                faturadaki net ve toplam bedelin hatalı değerlendirilmesine
                neden olabilir.
              </p>

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
                      Resmî işlemlerde güncel mevzuatı kontrol edin
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      KDV oranları ve uygulama esasları zaman içinde
                      değişebilir. Fatura, beyanname veya muhasebe işlemi
                      yaparken güncel resmî düzenlemeler ve mali müşavir
                      değerlendirmesi esas alınmalıdır.
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
                Farklı oranları karşılaştırın
              </h2>

              <p className="mt-3 text-sm leading-6 text-blue-100">
                Hesaplama aracına dönerek aynı tutarı farklı KDV oranlarıyla
                deneyin ve vergi miktarındaki değişimi inceleyin.
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
                Vergi bilgilendirmesi
              </h2>

              <p className="mt-3 text-sm leading-6 text-amber-900">
                Bu araç vergi danışmanlığı sunmaz. Ürün veya hizmete
                uygulanacak doğru oran için güncel mevzuatı ve resmî
                kaynakları kontrol edin.
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
                Vergi, kesinti, fiyat ve finans hesaplamalarınızı diğer
                ücretsiz araçlarımızla tamamlayın.
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
              KDV hesaplama hakkında sık sorulan sorular
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              KDV dahil fiyat, KDV hariç tutar, oranlar ve hesaplama yöntemleri
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
                KDV dahil ve hariç tutarı hemen hesaplayın
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
                Tutarı ve KDV oranını girerek net bedeli, vergi miktarını ve
                toplam fiyatı saniyeler içinde görüntüleyin.
              </p>
            </div>

            <a
              href="#hesaplama-araci"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 text-base font-bold text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              KDV hesapla
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
            HesapRehberi üzerindeki KDV hesaplama sonuçları genel
            bilgilendirme amaçlıdır. Araç tarafından üretilen sonuçlar fatura,
            beyanname veya diğer resmî belgelerin yerine geçmez. Resmî
            işlemlerde güncel mevzuat ve yetkili uzman değerlendirmesi esas
            alınmalıdır.
          </p>
        </div>
      </div>
    </main>
  );
}