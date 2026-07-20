import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CircleDollarSign,
  Info,
  Landmark,
  ListChecks,
  Percent,
  PieChart,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetada";

const PAGE_PATH = "/blog/yuzde-hesaplama-rehberi";
const PAGE_URL = `https://www.hesaprehberi.com${PAGE_PATH}`;
const PAGE_TITLE =
  "Yüzde Hesaplama Rehberi: Artış, Azalış, Oran ve Fark Hesabı";
const PAGE_DESCRIPTION =
  "Yüzde hesaplama formüllerini; bir sayının yüzdesini bulma, yüzde artış ve azalış, iki sayı arasındaki yüzde farkı ve ters yüzde hesabıyla öğrenin.";

export const metadata: Metadata = createCalculatorMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "yüzde hesaplama",
    "yüzde nasıl hesaplanır",
    "yüzde artış hesaplama",
    "yüzde azalış hesaplama",
    "iki sayı arasındaki yüzde farkı",
    "bir sayının yüzdesini bulma",
    "yüzde oran hesaplama",
    "indirim yüzdesi hesaplama",
    "zam oranı hesaplama",
    "ters yüzde hesaplama",
    "yüzde formülü",
  ],
  openGraph: {
    type: "article",
    locale: "tr_TR",
    url: PAGE_URL,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    siteName: "HesapRehberi",
    images: [
      {
        url: "/og/yuzde-hesaplama-rehberi.jpg",
        width: 1200,
        height: 630,
        alt: "Yüzde hesaplama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/yuzde-hesaplama-rehberi.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
});

type TocItem = {
  id: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

const tableOfContents: TocItem[] = [
  {
    id: "yuzde-nedir",
    title: "Yüzde nedir?",
    description: "Yüzde kavramının 100 üzerinden oran ifade etme mantığını öğrenin.",
  },
  {
    id: "bir-sayinin-yuzdesi",
    title: "Bir sayının yüzdesi nasıl bulunur?",
    description: "Tutar ile yüzde oranını kullanarak temel yüzde hesabını yapın.",
  },
  {
    id: "yuzde-orani-bulma",
    title: "Bir sayı diğerinin yüzde kaçıdır?",
    description: "Parçanın bütüne oranını yüzde cinsinden hesaplayın.",
  },
  {
    id: "yuzde-artis",
    title: "Yüzde artış nasıl hesaplanır?",
    description: "Eski ve yeni değer arasındaki artış oranını doğru bulun.",
  },
  {
    id: "yuzde-azalis",
    title: "Yüzde azalış nasıl hesaplanır?",
    description: "Bir değerdeki düşüşün başlangıç değerine oranını hesaplayın.",
  },
  {
    id: "iki-sayi-yuzde-farki",
    title: "İki sayı arasındaki yüzde farkı",
    description: "Değişim oranı ile simetrik yüzde farkı arasındaki ayrımı görün.",
  },
  {
    id: "yuzde-ekleme-cikarma",
    title: "Bir sayıya yüzde ekleme ve çıkarma",
    description: "Zam, indirim ve vergi gibi işlemleri çarpan yöntemiyle yapın.",
  },
  {
    id: "ters-yuzde",
    title: "Ters yüzde hesabı",
    description: "Yüzde eklenmiş veya çıkarılmış tutardan ilk değeri geri bulun.",
  },
  {
    id: "ardisik-yuzdeler",
    title: "Ardışık yüzde değişimleri",
    description: "Birden fazla artış ve azalışın neden doğrudan toplanmadığını anlayın.",
  },
  {
    id: "indirim-zam",
    title: "İndirim ve zam hesaplama",
    description: "Etiket fiyatı, indirimli fiyat ve zamlı fiyat hesaplarını karşılaştırın.",
  },
  {
    id: "kar-zarar",
    title: "Kâr ve zarar yüzdesi",
    description: "Maliyet, satış fiyatı, kâr oranı ve marj farkını öğrenin.",
  },
  {
    id: "finansal-kullanim",
    title: "Finansta yüzde kullanımı",
    description: "Faiz, enflasyon, vergi ve getiri oranlarını doğru yorumlayın.",
  },
  {
    id: "sik-hatalar",
    title: "Sık yapılan hatalar",
    description: "Yanlış taban seçimi ve yüzde puan karışıklığını önleyin.",
  },
  {
    id: "hizli-formuller",
    title: "Hızlı formül özeti",
    description: "En sık kullanılan yüzde formüllerini tek tabloda inceleyin.",
  },
  {
    id: "sik-sorulan-sorular",
    title: "Sık sorulan sorular",
    description: "Yüzde hesabıyla ilgili en çok merak edilen soruların yanıtlarını okuyun.",
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Yüzde nasıl hesaplanır?",
    answer:
      "Bir sayının belirli bir yüzdesini bulmak için sayıyı yüzde oranıyla çarpıp 100'e bölün. Örneğin 500'ün yüzde 20'si 500 × 20 ÷ 100 işlemiyle 100 bulunur.",
  },
  {
    question: "Bir sayının yüzde kaçı olduğu nasıl bulunur?",
    answer:
      "Parça değeri bütün değere bölünür ve sonuç 100 ile çarpılır. Örneğin 40 sayısı 160'ın yüzde 25'idir.",
  },
  {
    question: "Yüzde artış oranı nasıl hesaplanır?",
    answer:
      "Yeni değerden eski değer çıkarılır, fark eski değere bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question: "Yüzde azalış oranı nasıl hesaplanır?",
    answer:
      "Eski değerden yeni değer çıkarılır, oluşan azalış eski değere bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question: "Yüzde 20 zam ile yüzde 20 indirim birbirini götürür mü?",
    answer:
      "Hayır. 100 TL önce yüzde 20 artarsa 120 TL olur. Ardından yüzde 20 azalırsa 96 TL olur.",
  },
  {
    question: "Yüzde puan ile yüzde değişim aynı şey midir?",
    answer:
      "Değildir. Bir oran yüzde 10'dan yüzde 15'e çıktığında artış 5 yüzde puandır; oransal artış ise yüzde 50'dir.",
  },
  {
    question: "İndirimli fiyattan eski fiyat nasıl bulunur?",
    answer:
      "İndirimli fiyat, 1 eksi indirim oranının ondalık karşılığına bölünür. Yüzde 20 indirimli fiyat 800 TL ise eski fiyat 1.000 TL'dir.",
  },
  {
    question: "Zamlı fiyattan eski fiyat nasıl bulunur?",
    answer:
      "Zamlı fiyat, 1 artı zam oranının ondalık karşılığına bölünür. Yüzde 25 zamlı fiyat 1.250 TL ise eski fiyat 1.000 TL'dir.",
  },
  {
    question: "İki sayı arasındaki yüzde farkı nasıl hesaplanır?",
    answer:
      "Yönlü değişim için başlangıç değeri taban alınır. Tarafsız karşılaştırmada mutlak fark iki sayının ortalamasına bölünebilir.",
  },
  {
    question: "Ardışık yüzdeler neden toplanmaz?",
    answer:
      "Her yüzde işlemi bir önceki işlemden sonra oluşan yeni tutar üzerinden yapılır. Bu nedenle yüzde 10 ve yüzde 20 artışın toplam etkisi yüzde 32 olur.",
  },
  {
    question: "Yüzde 100 artış ne anlama gelir?",
    answer:
      "Bir değerin yüzde 100 artması iki katına çıkması demektir.",
  },
  {
    question: "Yüzde 100 azalış mümkün müdür?",
    answer:
      "Evet. Bir değerin yüzde 100 azalması sıfıra düşmesi anlamına gelir.",
  },
  {
    question: "Kâr yüzdesi hangi tutara göre hesaplanır?",
    answer:
      "Kâr oranı çoğunlukla maliyet üzerinden, kâr marjı ise satış fiyatı üzerinden hesaplanır.",
  },
  {
    question: "Ondalık sayı yüzdeye nasıl çevrilir?",
    answer:
      "Ondalık sayı 100 ile çarpılır. Örneğin 0,35 değeri yüzde 35'e eşittir.",
  },
  {
    question: "Kesir yüzdeye nasıl çevrilir?",
    answer:
      "Pay paydaya bölünür ve sonuç 100 ile çarpılır. Örneğin 3/4 yüzde 75'tir.",
  },
  {
    question: "Yüzde hesaplarında sonuç nasıl yuvarlanır?",
    answer:
      "Kullanım amacına göre genellikle iki ondalık basamak yeterlidir. Ara adımları erken yuvarlamamak daha doğru sonuç verir.",
  },
  {
    question: "Yüzde hesaplama aracı ne işe yarar?",
    answer:
      "Bir sayının yüzdesini, iki değer arasındaki oranı, artış ve azalış yüzdesini hızlı biçimde hesaplamaya yardımcı olur.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  inLanguage: "tr-TR",
  mainEntityOfPage: PAGE_URL,
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
};

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-lg font-semibold leading-8 text-slate-800">
      {children}
    </p>
  );
}

function Formula({ title, value }: { title: string; value: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl shadow-slate-950/10">
      <div className="border-b border-white/10 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
        {title}
      </div>
      <div className="p-6 text-center font-mono text-lg font-black text-white sm:text-2xl">
        {value}
      </div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Percent;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
      <div className="mt-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

export default function YuzdeHesaplamaRehberiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <CalculatorLayout
        title={PAGE_TITLE}
        category="Genel Hesaplamalar"
        description={PAGE_DESCRIPTION}
        canonicalPath={PAGE_PATH}
        faqItems={faqItems}
        relatedCalculations={[]}
        showShareButtons={false}
      >
        <div className="mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Yüzde Hesaplama Rehberi", href: PAGE_PATH },
            ]}
          />
        </div>

        <section className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Kapsamlı yüzde hesaplama rehberi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Yüzde hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-violet-200 bg-clip-text text-transparent">
                  artış, azalış, oran ve fark
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Bir sayının yüzdesini bulmaktan zam ve indirim hesabına,
                iki değer arasındaki değişim oranından ters yüzde işlemine
                kadar en çok kullanılan formülleri örneklerle öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/hesaplamalar/yuzde-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Yüzde hesaplama aracını aç
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href="#hizli-formuller"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Formülleri incele
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="self-center rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-3xl bg-white p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                      Hızlı örnek
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      800&apos;ün %15&apos;i
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <Percent className="h-7 w-7" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-7 rounded-2xl bg-blue-600 px-5 py-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">800 × 15 ÷ 100</span>
                    <span className="text-2xl font-black">120</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 xl:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav
              aria-label="İçindekiler"
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-950/5"
            >
              <div className="border-b border-slate-200 bg-slate-950 px-5 py-5 text-white">
                <div className="flex items-center gap-3">
                  <ListChecks className="h-5 w-5 text-blue-300" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      Rehber navigasyonu
                    </p>
                    <h2 className="mt-1 text-lg font-black">İçindekiler</h2>
                  </div>
                </div>
              </div>
              <ol className="max-h-[70vh] space-y-1 overflow-y-auto p-3">
                {tableOfContents.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </span>
                      <span>
                        <span className="block text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
                          {item.title}
                        </span>
                        <span className="mt-1 hidden text-xs leading-5 text-slate-500 xl:block">
                          {item.description}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-black text-slate-950">Bu rehberi paylaşın</p>
              <p className="mt-2 text-xs leading-5 text-slate-600">
                Yüzde hesabında zorlanan yakınlarınızın doğru formüle hızlıca
                ulaşmasına yardımcı olun.
              </p>
              <ShareButtons title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            </div>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection id="yuzde-nedir" title="Yüzde nedir?">
              <Lead>
                Yüzde, bir büyüklüğün 100 eşit parçaya göre ifade edilmesidir.
                Yüzde işareti olan “%”, verilen sayının yüz üzerinden kaç parçaya
                karşılık geldiğini gösterir.
              </Lead>
              <p>
                Örneğin yüzde 25, 100 parçanın 25&apos;i anlamına gelir. Aynı
                değer kesir olarak 25/100, ondalık olarak 0,25 biçiminde
                yazılabilir.
              </p>
              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard icon={Percent} title="Kesir gösterimi">
                  <p>%25 = 25/100 = 1/4</p>
                </InfoCard>
                <InfoCard icon={PieChart} title="Ondalık gösterim">
                  <p>%25 = 0,25</p>
                </InfoCard>
                <InfoCard icon={Scale} title="Oran gösterimi">
                  <p>25&apos;e 100 veya 1&apos;e 4</p>
                </InfoCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bir-sayinin-yuzdesi"
              title="Bir sayının yüzdesi nasıl bulunur?"
            >
              <Lead>
                Bir sayının belirli bir yüzdesini bulmak için sayı, yüzde
                oranıyla çarpılır ve 100&apos;e bölünür.
              </Lead>
              <Formula title="Temel yüzde formülü" value="Sonuç = Sayı × Oran ÷ 100" />
              <p>
                800&apos;ün yüzde 15&apos;i için 800 × 15 ÷ 100 işlemi yapılır
                ve sonuç 120 bulunur. Aynı işlem 800 × 0,15 biçiminde de
                yazılabilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="yuzde-orani-bulma"
              title="Bir sayı diğerinin yüzde kaçıdır?"
            >
              <Lead>
                Bir parçanın bütüne oranını bulmak için parça bütüne bölünür ve
                sonuç 100 ile çarpılır.
              </Lead>
              <Formula title="Oran bulma formülü" value="Yüzde = Parça ÷ Bütün × 100" />
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard icon={Calculator} title="Satış hedefi örneği">
                  <p>250 ürünlük hedefin 175&apos;i satıldıysa gerçekleşme oranı %70&apos;tir.</p>
                </InfoCard>
                <InfoCard icon={WalletCards} title="Bütçe örneği">
                  <p>30.000 TL gelirin 9.000 TL&apos;si kiraya gidiyorsa kira payı %30&apos;dur.</p>
                </InfoCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="yuzde-artis" title="Yüzde artış nasıl hesaplanır?">
              <Lead>
                Bir değerin ne kadar yükseldiğini yüzde olarak bulmak için önce
                artış miktarı hesaplanır, ardından bu fark başlangıç değerine bölünür.
              </Lead>
              <Formula
                title="Yüzde artış formülü"
                value="(Yeni Değer − Eski Değer) ÷ Eski Değer × 100"
              />
              <p>
                400&apos;den 460&apos;a yükselişte fark 60&apos;tır. 60 ÷ 400 ×
                100 işlemi yüzde 15 artış sonucunu verir.
              </p>
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex gap-4">
                  <TrendingUp className="mt-1 h-6 w-6 shrink-0 text-emerald-700" />
                  <p className="text-sm leading-7 text-emerald-900">
                    Artış oranının tabanı eski değerdir. Farkı yeni değere bölmek
                    farklı ve yanlış bir sonuç verir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="yuzde-azalis" title="Yüzde azalış nasıl hesaplanır?">
              <Lead>
                Yüzde azalışta eski değerden yeni değer çıkarılır ve fark eski değere bölünür.
              </Lead>
              <Formula
                title="Yüzde azalış formülü"
                value="(Eski Değer − Yeni Değer) ÷ Eski Değer × 100"
              />
              <p>
                900 TL olan bir ürün 720 TL&apos;ye düşmüşse azalış 180 TL&apos;dir.
                180 ÷ 900 × 100 işlemi yüzde 20 sonucunu verir.
              </p>
              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <TrendingDown className="mt-1 h-6 w-6 shrink-0 text-rose-700" />
                  <p className="text-sm leading-7 text-rose-900">
                    Farkı yeni fiyat olan 720 TL&apos;ye bölmek yüzde 25 verir;
                    ancak bu indirim oranı değildir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="iki-sayi-yuzde-farki"
              title="İki sayı arasındaki yüzde farkı nasıl hesaplanır?"
            >
              <Lead>
                “Yüzde değişim” ve “yüzde fark” ifadeleri aynı sanılsa da
                kullanılan tabana göre farklı sonuçlar verebilir.
              </Lead>
              <p>
                Yönlü değişimde başlangıç değeri taban alınır. Başlangıç yönü
                belli değilse mutlak fark iki sayının ortalamasına bölünebilir.
              </p>
              <Formula
                title="Simetrik yüzde fark"
                value="|A − B| ÷ ((A + B) ÷ 2) × 100"
              />
            </CalculatorContentSection>

            <CalculatorContentSection
              id="yuzde-ekleme-cikarma"
              title="Bir sayıya yüzde ekleme ve çıkarma"
            >
              <Lead>
                Zam veya ekleme işleminde 1 artı oran; indirim veya çıkarma
                işleminde 1 eksi oran çarpanı kullanılır.
              </Lead>
              <div className="grid gap-5 md:grid-cols-2">
                <Formula
                  title="Yüzde ekleme"
                  value="Yeni = Eski × (1 + Oran ÷ 100)"
                />
                <Formula
                  title="Yüzde çıkarma"
                  value="Yeni = Eski × (1 − Oran ÷ 100)"
                />
              </div>
              <p>
                2.000 TL&apos;ye yüzde 10 zam eklemek için 2.000 × 1,10 yapılır
                ve 2.200 TL bulunur. Yüzde 10 indirim için çarpan 0,90&apos;dır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection id="ters-yuzde" title="Ters yüzde hesabı nasıl yapılır?">
              <Lead>
                Son tutar ve uygulanan yüzde biliniyorsa, başlangıç değeri
                çarpma yerine bölme işlemiyle geri bulunur.
              </Lead>
              <div className="grid gap-5 md:grid-cols-2">
                <Formula
                  title="Artış öncesi değer"
                  value="İlk = Son ÷ (1 + Oran ÷ 100)"
                />
                <Formula
                  title="İndirim öncesi değer"
                  value="İlk = Son ÷ (1 − Oran ÷ 100)"
                />
              </div>
              <p>
                Yüzde 20 indirimli fiyatı 800 TL olan ürünün eski fiyatı
                800 ÷ 0,80 = 1.000 TL&apos;dir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ardisik-yuzdeler"
              title="Ardışık yüzde değişimleri nasıl hesaplanır?"
            >
              <Lead>
                Ardışık yüzde artış ve azalışlar doğrudan toplanmaz. Her işlem,
                bir önceki işlemden sonra oluşan yeni değer üzerinden yapılır.
              </Lead>
              <p>
                1.000 TL&apos;ye önce yüzde 10, ardından yüzde 20 zam uygulanırsa
                sonuç 1.000 × 1,10 × 1,20 = 1.320 TL olur. Toplam artış yüzde 32&apos;dir.
              </p>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <CircleAlert className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
                  <p className="text-sm leading-7 text-amber-900">
                    Yüzde 20 artışın ardından yüzde 20 azalış başlangıç değerine
                    dönmez: 1,20 × 0,80 = 0,96, yani net yüzde 4 azalış oluşur.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="indirim-zam" title="İndirim ve zam nasıl hesaplanır?">
              <Lead>
                İndirim ve zam hesaplarında değişim tutarı ile işlem sonrası
                fiyatı ayrı ayrı göstermek bütçe planlamasını kolaylaştırır.
              </Lead>
              <div className="grid gap-5 md:grid-cols-3">
                <InfoCard icon={BadgePercent} title="Etiket fiyatı">
                  <p>İşlemin uygulandığı başlangıç tutarıdır.</p>
                </InfoCard>
                <InfoCard icon={ReceiptText} title="Değişim tutarı">
                  <p>Başlangıç tutarı × yüzde oranı ile bulunur.</p>
                </InfoCard>
                <InfoCard icon={CircleDollarSign} title="Yeni fiyat">
                  <p>Başlangıç ve değişim tutarının toplamı veya farkıdır.</p>
                </InfoCard>
              </div>
              <p>
                3.000 TL&apos;lik üründe yüzde 25 indirim 750 TL&apos;dir ve yeni
                fiyat 2.250 TL olur. 20.000 TL maaşa yüzde 15 zam ise 3.000 TL
                artış ve 23.000 TL yeni tutar oluşturur.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection id="kar-zarar" title="Kâr ve zarar yüzdesi nasıl hesaplanır?">
              <Lead>
                Kâr oranı ile kâr marjı farklı tabanlar kullandığı için aynı sonuç değildir.
              </Lead>
              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Kavram</th>
                      <th className="px-5 py-4">Formül</th>
                      <th className="px-5 py-4">Örnek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">Kâr oranı</td>
                      <td className="px-5 py-4">Kâr ÷ Maliyet × 100</td>
                      <td className="px-5 py-4">25 ÷ 100 × 100 = %25</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">Kâr marjı</td>
                      <td className="px-5 py-4">Kâr ÷ Satış Fiyatı × 100</td>
                      <td className="px-5 py-4">25 ÷ 125 × 100 = %20</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">Zarar oranı</td>
                      <td className="px-5 py-4">Zarar ÷ Maliyet × 100</td>
                      <td className="px-5 py-4">20 ÷ 100 × 100 = %20</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="finansal-kullanim" title="Finansta yüzde nasıl kullanılır?">
              <Lead>
                Yüzde oranları finansal kararları karşılaştırmayı kolaylaştırır;
                ancak dönem, vergi, bileşik etki ve başlangıç tutarı birlikte değerlendirilmelidir.
              </Lead>
              <div className="grid gap-5 md:grid-cols-2">
                <InfoCard icon={Landmark} title="Faiz oranı">
                  <p>Aylık ve yıllık oranlar bileşik etki nedeniyle doğrudan aynı değildir.</p>
                </InfoCard>
                <InfoCard icon={TrendingUp} title="Yatırım getirisi">
                  <p>Getiri oranı, kazancın başlangıç yatırımına bölünmesiyle bulunur.</p>
                </InfoCard>
                <InfoCard icon={ReceiptText} title="Vergi ve kesinti">
                  <p>Verginin hangi matrah üzerinden hesaplandığı sonucu belirler.</p>
                </InfoCard>
                <InfoCard icon={WalletCards} title="Bütçe payı">
                  <p>Bir giderin toplam gelir içindeki ağırlığını gösterir.</p>
                </InfoCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="sik-hatalar" title="Yüzde hesaplamada sık yapılan hatalar">
              <Lead>
                Yüzde formülleri kısa olsa da yanlış taban seçimi veya kavram
                karışıklığı önemli sonuç farkları oluşturabilir.
              </Lead>
              <div className="space-y-4">
                {[
                  ["Farkı yanlış sayıya bölmek", "Yönlü değişimde farkı başlangıç değerine bölün."],
                  ["Yüzde puan ile yüzdeyi karıştırmak", "Mutlak puan farkı ile oransal değişimi ayrı ifade edin."],
                  ["Ardışık oranları toplamak", "Oranları çarpan biçiminde art arda uygulayın."],
                  ["Ters yüzdeyi normal artışla çözmek", "Son tutarı kalan veya artan oran çarpanına bölün."],
                  ["Kâr oranı ile marjı aynı sanmak", "Paydanın maliyet mi satış fiyatı mı olduğunu kontrol edin."],
                  ["Erken yuvarlama yapmak", "Ara adımlarda daha fazla basamak kullanıp sonunda yuvarlayın."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
                    <h3 className="flex items-center gap-3 text-lg font-black text-slate-950">
                      <CircleAlert className="h-5 w-5 text-amber-600" aria-hidden="true" />
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection id="hizli-formuller" title="Yüzde hesaplama formülleri: hızlı özet">
              <Lead>
                En sık kullanılan yüzde işlemlerini aşağıdaki tabloda tek yerde inceleyebilirsiniz.
              </Lead>
              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[820px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">İşlem</th>
                      <th className="px-5 py-4">Formül</th>
                      <th className="px-5 py-4">Örnek</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      ["Bir sayının yüzdesi", "Sayı × Oran ÷ 100", "600 × 25 ÷ 100 = 150"],
                      ["Parçanın bütüne oranı", "Parça ÷ Bütün × 100", "30 ÷ 120 × 100 = %25"],
                      ["Yüzde artış", "(Yeni − Eski) ÷ Eski × 100", "(150 − 120) ÷ 120 × 100 = %25"],
                      ["Yüzde azalış", "(Eski − Yeni) ÷ Eski × 100", "(200 − 160) ÷ 200 × 100 = %20"],
                      ["Yüzde ekleme", "Sayı × (1 + Oran ÷ 100)", "500 × 1,10 = 550"],
                      ["Yüzde çıkarma", "Sayı × (1 − Oran ÷ 100)", "500 × 0,90 = 450"],
                      ["Artış sonrası ilk değer", "Son ÷ (1 + Oran ÷ 100)", "660 ÷ 1,10 = 600"],
                      ["İndirim öncesi değer", "Son ÷ (1 − Oran ÷ 100)", "720 ÷ 0,80 = 900"],
                    ].map(([topic, formula, example]) => (
                      <tr key={topic}>
                        <td className="px-5 py-4 font-black text-slate-950">{topic}</td>
                        <td className="px-5 py-4 font-mono text-sm text-blue-700">{formula}</td>
                        <td className="px-5 py-4 text-sm text-slate-600">{example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-violet-700 p-8 text-white shadow-xl shadow-blue-950/20">
                <Calculator className="h-8 w-8" aria-hidden="true" />
                <h3 className="mt-5 text-3xl font-black">İşlemleri saniyeler içinde tamamlayın</h3>
                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Sayı ve oran bilgilerini girerek yüzde tutarı, oran, artış veya azalış sonuçlarını hızlıca hesaplayın.
                </p>
                <Link
                  href="/hesaplamalar/yuzde-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  Yüzde hesaplama aracına git
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-sorulan-sorular"
              title="Yüzde hesaplama hakkında sık sorulan sorular"
            >
              <Lead>
                Temel formüllerden ters yüzdeye kadar en çok merak edilen soruların yanıtlarını aşağıda bulabilirsiniz.
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    Ücretsiz ve hızlı hesaplama
                  </div>
                  <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                    Yüzde hesabınızı şimdi yapın
                  </h2>
                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Zam, indirim, artış, azalış veya oran hesabı için gerekli değerleri girin ve sonucu anında görün.
                  </p>
                </div>
                <Link
                  href="/hesaplamalar/yuzde-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
                >
                  Hesaplama aracını aç
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </CalculatorLayout>
    </>
  );
}