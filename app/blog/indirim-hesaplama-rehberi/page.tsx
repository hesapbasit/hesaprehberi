import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Info,
  ListChecks,
  Percent,
  ReceiptText,
  ShoppingBag,
  Sparkles,
  Tags,
  TrendingDown,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const PAGE_PATH = "/blog/indirim-hesaplama-rehberi";
const PAGE_URL = `https://www.hesaprehberi.com${PAGE_PATH}`;
const PAGE_TITLE =
  "İndirim Hesaplama Rehberi: Yüzde İndirim, İndirimli Fiyat ve Örnekler";
const PAGE_DESCRIPTION =
  "Yüzde indirim nasıl hesaplanır, indirimli fiyat nasıl bulunur, ardışık indirimler nasıl karşılaştırılır ve gerçek alışveriş örnekleriyle öğrenin.";

export const metadata: Metadata = createCalculatorMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "indirim hesaplama",
    "yüzde indirim hesaplama",
    "indirimli fiyat hesaplama",
    "indirim oranı hesaplama",
    "yüzde kaç indirim",
    "ardışık indirim hesaplama",
    "kampanya hesaplama",
    "etiket fiyatı hesaplama",
    "indirim tutarı bulma",
    "alışveriş indirimi hesaplama",
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
        url: "/og/indirim-hesaplama-rehberi.jpg",
        width: 1200,
        height: 630,
        alt: "İndirim hesaplama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/indirim-hesaplama-rehberi.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
});

type FaqItem = {
  question: string;
  answer: string;
};

type TocItem = {
  id: string;
  title: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Yüzde indirim nasıl hesaplanır?",
    answer:
      "İndirim tutarı, ürünün eski fiyatı ile indirim oranının çarpılıp 100'e bölünmesiyle bulunur. İndirimli fiyat ise eski fiyattan indirim tutarının çıkarılmasıyla hesaplanır.",
  },
  {
    question: "1.000 TL ürün yüzde 20 indirimle kaç TL olur?",
    answer:
      "İndirim tutarı 1.000 × 20 ÷ 100 = 200 TL'dir. İndirimli fiyat 1.000 − 200 = 800 TL olur.",
  },
  {
    question: "İndirim oranı nasıl bulunur?",
    answer:
      "Eski fiyat ile yeni fiyat arasındaki fark eski fiyata bölünür ve sonuç 100 ile çarpılır. Formül: İndirim oranı = (Eski fiyat − Yeni fiyat) ÷ Eski fiyat × 100.",
  },
  {
    question: "Yüzde 30 indirim ne demek?",
    answer:
      "Ürünün etiket fiyatının yüzde 30'u kadar indirim uygulanması demektir. Ürünün yüzde 70'i ödenir.",
  },
  {
    question: "İki indirim oranı toplanır mı?",
    answer:
      "Ardışık indirimlerde oranlar doğrudan toplanmaz. Önce ilk indirim uygulanır, ardından ikinci indirim kalan fiyat üzerinden hesaplanır.",
  },
  {
    question: "Yüzde 20 üzerine yüzde 10 indirim toplam yüzde kaçtır?",
    answer:
      "İlk indirim sonrası fiyat yüzde 80'e düşer. Bunun üzerine yüzde 10 indirim uygulanınca yüzde 72 ödeme yapılır. Toplam etkili indirim yüzde 28 olur.",
  },
  {
    question: "İndirimli fiyattan eski fiyat nasıl bulunur?",
    answer:
      "İndirimli fiyat, 1 eksi indirim oranının ondalık karşılığına bölünür. Örneğin yüzde 20 indirimli fiyat 800 TL ise eski fiyat 800 ÷ 0,80 = 1.000 TL'dir.",
  },
  {
    question: "Yüzde 50 indirimli ürün neden yarı fiyatına gelir?",
    answer:
      "Çünkü yüzde 50 indirim, ürün fiyatının yarısının düşülmesi anlamına gelir. Geriye fiyatın yüzde 50'si kalır.",
  },
  {
    question: "Yüzde 100 indirim mümkün müdür?",
    answer:
      "Matematiksel olarak yüzde 100 indirim fiyatın sıfıra düşmesi anlamına gelir. Ticari kampanyalarda ürün ücretsiz hâle gelir.",
  },
  {
    question: "İndirim tutarı ile indirimli fiyat aynı şey midir?",
    answer:
      "Hayır. İndirim tutarı eski fiyattan düşülen miktardır; indirimli fiyat ise müşterinin ödeyeceği son tutardır.",
  },
  {
    question: "KDV indirimden önce mi sonra mı hesaplanır?",
    answer:
      "Satış işlemlerinde matrah ve KDV uygulaması kampanya yapısına ve belge düzenine göre belirlenir. Tüketici açısından görünen son fiyat çoğunlukla KDV dahil sunulur.",
  },
  {
    question: "Kupon indirimi ile ürün indirimi aynı şekilde mi hesaplanır?",
    answer:
      "Temel matematik aynıdır ancak kupon sabit tutarlı veya yüzdesel olabilir. Ayrıca minimum sepet, kategori ve üst limit gibi kampanya şartları sonucu değiştirir.",
  },
  {
    question: "Yüzde 25 indirimli fiyat nasıl hızlı hesaplanır?",
    answer:
      "Fiyatın dörtte birini çıkarabilirsiniz. Çünkü yüzde 25, dörtte bire eşittir. Örneğin 800 TL'nin dörtte biri 200 TL'dir; indirimli fiyat 600 TL olur.",
  },
  {
    question: "Yüzde 15 indirim nasıl zihinden hesaplanır?",
    answer:
      "Önce yüzde 10'u, sonra yüzde 5'i bulun ve toplayın. Örneğin 2.000 TL'nin yüzde 10'u 200 TL, yüzde 5'i 100 TL'dir; toplam indirim 300 TL olur.",
  },
  {
    question: "İndirim oranı küsuratlı olabilir mi?",
    answer:
      "Evet. Yüzde 12,5 veya yüzde 17,75 gibi oranlar kullanılabilir. Hesaplama aynı formülle yapılır.",
  },
  {
    question: "İndirim hesaplama aracı ne işe yarar?",
    answer:
      "Eski fiyat, indirim oranı veya yeni fiyat bilgilerini kullanarak indirim tutarını, indirimli fiyatı ve gerçek indirim oranını hızlıca hesaplar.",
  },
];

const tocItems: TocItem[] = [
  { id: "indirim-nedir", title: "İndirim nedir?" },
  { id: "temel-formuller", title: "Temel indirim formülleri" },
  { id: "indirim-tutari", title: "İndirim tutarı nasıl bulunur?" },
  { id: "indirimli-fiyat", title: "İndirimli fiyat nasıl bulunur?" },
  { id: "oran-bulma", title: "İndirim oranı nasıl bulunur?" },
  { id: "eski-fiyati-bulma", title: "Eski fiyatı bulma" },
  { id: "ardisik-indirim", title: "Ardışık indirimler" },
  { id: "ornekler", title: "Gerçek hesaplama örnekleri" },
  { id: "hizli-yontemler", title: "Zihinden hızlı yöntemler" },
  { id: "kampanya-karsilastirma", title: "Kampanya karşılaştırma" },
  { id: "sik-hatalar", title: "Sık yapılan hatalar" },
  { id: "sss", title: "Sık sorulan sorular" },
];

const examples = [
  {
    oldPrice: "500 TL",
    discount: "%10",
    amount: "50 TL",
    finalPrice: "450 TL",
  },
  {
    oldPrice: "750 TL",
    discount: "%20",
    amount: "150 TL",
    finalPrice: "600 TL",
  },
  {
    oldPrice: "1.200 TL",
    discount: "%25",
    amount: "300 TL",
    finalPrice: "900 TL",
  },
  {
    oldPrice: "2.000 TL",
    discount: "%30",
    amount: "600 TL",
    finalPrice: "1.400 TL",
  },
  {
    oldPrice: "3.500 TL",
    discount: "%40",
    amount: "1.400 TL",
    finalPrice: "2.100 TL",
  },
  {
    oldPrice: "5.000 TL",
    discount: "%50",
    amount: "2.500 TL",
    finalPrice: "2.500 TL",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
      image:
        "https://www.hesaprehberi.com/og/indirim-hesaplama-rehberi.jpg",
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

function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-lg font-semibold leading-8 text-slate-800">
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
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-300">
          {title}
        </p>
      </div>

      <div className="p-6 sm:p-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="font-mono text-lg font-black text-white sm:text-2xl">
            {formula}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Calculator;
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

export default function IndirimHesaplamaRehberiPage() {
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
        category="Yüzde Hesaplamaları"
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
              {
                label: "İndirim Hesaplama Rehberi",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <header className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-rose-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Alışverişte doğru indirim hesabı
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                İndirim hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-rose-200 bg-clip-text text-transparent">
                  oran, indirim tutarı ve son fiyat
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Bir ürünün kaç TL indirimli olduğunu, yeni fiyatı, gerçek
                indirim oranını ve ardışık kampanyaların toplam etkisini adım
                adım öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/indirim-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  İndirimi hesapla
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>

                <a
                  href="#temel-formuller"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Formülleri gör
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "İndirim tutarı",
                  "İndirimli fiyat",
                  "Gerçek oran",
                  "Ardışık indirim",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-300"
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
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                        Örnek indirim
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        1.000 TL ürün
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Tags className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      %20 indirimli fiyat
                    </p>
                    <p className="mt-2 text-5xl font-black text-blue-700">
                      800 TL
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    200 TL indirim uygulanır ve ürünün etiket fiyatının yüzde
                    80'i ödenir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
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
                      Rehber
                    </p>
                    <h2 className="mt-1 text-lg font-black">İçindekiler</h2>
                  </div>
                </div>
              </div>

              <ol className="space-y-1 p-3">
                {tocItems.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 transition group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </span>

                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-sm font-black text-slate-950">
                Bu rehberi paylaşın
              </p>

              <p className="mt-2 text-xs leading-5 text-slate-600">
                Alışverişte gerçek kampanya avantajını hesaplamak isteyenlerle
                paylaşın.
              </p>

              <ShareButtons
                title={PAGE_TITLE}
                description={PAGE_DESCRIPTION}
              />
            </div>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection
              id="indirim-nedir"
              title="İndirim nedir?"
            >
              <Lead>
                İndirim, bir ürün veya hizmetin başlangıç fiyatından belirli
                bir tutar ya da yüzde oranında düşüş yapılmasıdır.
              </Lead>

              <p>
                İndirimler yüzdesel veya sabit tutarlı olabilir. “Yüzde 20
                indirim” ifadesi fiyatın beşte birinin düşüleceğini, “200 TL
                indirim” ifadesi ise doğrudan 200 TL azaltılacağını gösterir.
              </p>

              <p>
                Doğru karşılaştırma için yalnızca kampanya başlığına değil,
                ürünün eski fiyatına, son fiyatına, kupon şartlarına ve varsa
                ikinci indirim uygulamasına birlikte bakılmalıdır.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={WalletCards} title="Eski fiyat">
                  <p>İndirimin hesaplanacağı başlangıç fiyatıdır.</p>
                </FeatureCard>

                <FeatureCard icon={Percent} title="İndirim oranı">
                  <p>Fiyatın yüzde kaçının düşüleceğini gösterir.</p>
                </FeatureCard>

                <FeatureCard icon={ReceiptText} title="Son fiyat">
                  <p>Müşterinin indirim sonrası ödeyeceği tutardır.</p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="temel-formuller"
              title="Temel indirim hesaplama formülleri"
            >
              <Lead>
                İndirim hesabında üç temel değer vardır: eski fiyat, indirim
                oranı ve indirimli fiyat.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="İndirim tutarı"
                  formula="İndirim Tutarı = Eski Fiyat × İndirim Oranı ÷ 100"
                  description="Yüzdesel indirimde fiyattan kaç TL düşüleceğini gösterir."
                />

                <FormulaBox
                  title="İndirimli fiyat"
                  formula="İndirimli Fiyat = Eski Fiyat − İndirim Tutarı"
                  description="Müşterinin kampanya sonrası ödeyeceği son tutardır."
                />

                <FormulaBox
                  title="İndirim oranı"
                  formula="İndirim Oranı = (Eski Fiyat − Yeni Fiyat) ÷ Eski Fiyat × 100"
                  description="Eski ve yeni fiyat biliniyorsa gerçek yüzde indirimi verir."
                />

                <FormulaBox
                  title="Eski fiyat"
                  formula="Eski Fiyat = İndirimli Fiyat ÷ (1 − İndirim Oranı ÷ 100)"
                  description="İndirimli fiyat ile oran biliniyorsa etiket fiyatını geriye doğru bulur."
                />
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="indirim-tutari"
              title="İndirim tutarı nasıl bulunur?"
            >
              <Lead>
                İndirim tutarı, başlangıç fiyatından düşülecek TL miktarıdır.
              </Lead>

              <p>
                Örneğin 1.500 TL fiyatlı bir üründe yüzde 30 indirim varsa
                1.500 × 30 ÷ 100 = 450 TL indirim uygulanır. Bu 450 TL,
                indirimli fiyat değil; eski fiyattan çıkarılacak tutardır.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Kısa yöntem
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-blue-900">
                      Fiyatı önce 100'e bölüp sonra oranla çarpabilir veya oranı
                      ondalık sayıya çevirip doğrudan fiyatla çarpabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="indirimli-fiyat"
              title="İndirimli fiyat nasıl bulunur?"
            >
              <Lead>
                İndirimli fiyat, eski fiyattan hesaplanan indirim tutarının
                çıkarılmasıyla bulunur.
              </Lead>

              <p>
                2.000 TL'lik üründe yüzde 25 indirim varsa indirim tutarı 500
                TL'dir. Yeni fiyat 2.000 − 500 = 1.500 TL olur.
              </p>

              <p>
                Aynı sonucu tek adımda, ödenecek oranı kullanarak da
                bulabilirsiniz. Yüzde 25 indirimde fiyatın yüzde 75'i ödenir:
                2.000 × 0,75 = 1.500 TL.
              </p>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Eski fiyat</th>
                      <th className="px-5 py-4">İndirim</th>
                      <th className="px-5 py-4">İndirim tutarı</th>
                      <th className="px-5 py-4">Yeni fiyat</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {examples.map((row) => (
                      <tr key={`${row.oldPrice}-${row.discount}`}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.oldPrice}
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-700">
                          {row.discount}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.amount}
                        </td>
                        <td className="px-5 py-4 font-black text-emerald-700">
                          {row.finalPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="oran-bulma"
              title="Eski ve yeni fiyattan indirim oranı nasıl bulunur?"
            >
              <Lead>
                Gerçek indirim oranını bulmak için fiyat farkı eski fiyata
                bölünür ve sonuç 100 ile çarpılır.
              </Lead>

              <h3 className="text-2xl font-black text-slate-950">
                Örnek: 1.250 TL'den 1.000 TL'ye düşen ürün
              </h3>

              <ol className="space-y-4">
                {[
                  "Fiyat farkını bulun: 1.250 − 1.000 = 250 TL.",
                  "Farkı eski fiyata bölün: 250 ÷ 1.250 = 0,20.",
                  "Sonucu 100 ile çarpın: 0,20 × 100 = %20.",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-black text-white">
                      {index + 1}
                    </span>

                    <p className="pt-1">{item}</p>
                  </li>
                ))}
              </ol>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    İndirim oranı her zaman eski fiyat üzerinden hesaplanır.
                    Fiyat farkını yeni fiyata bölmek farklı ve yanlış bir sonuç
                    verir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="eski-fiyati-bulma"
              title="İndirimli fiyattan eski fiyat nasıl bulunur?"
            >
              <Lead>
                İndirimli fiyat ile oran biliniyorsa, ödenen yüzde üzerinden
                geriye doğru hesap yapılır.
              </Lead>

              <p>
                Yüzde 20 indirimde ürünün yüzde 80'i ödenir. İndirimli fiyat
                960 TL ise eski fiyat 960 ÷ 0,80 = 1.200 TL'dir.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-blue-700">
                    Yüzde 30 indirim
                  </p>

                  <p className="mt-3 text-lg font-black text-slate-950">
                    1.400 TL yeni fiyat
                  </p>

                  <p className="mt-4 text-slate-600">
                    Ödenen oran %70'tir. 1.400 ÷ 0,70 = 2.000 TL eski fiyat.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-xs font-black uppercase tracking-wide text-blue-700">
                    Yüzde 25 indirim
                  </p>

                  <p className="mt-3 text-lg font-black text-slate-950">
                    900 TL yeni fiyat
                  </p>

                  <p className="mt-4 text-slate-600">
                    Ödenen oran %75'tir. 900 ÷ 0,75 = 1.200 TL eski fiyat.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ardisik-indirim"
              title="Ardışık indirimler nasıl hesaplanır?"
            >
              <Lead>
                “Yüzde 20 + yüzde 10 indirim” toplam yüzde 30 indirim anlamına
                gelmez; ikinci indirim ilk indirimden kalan fiyat üzerinden
                uygulanır.
              </Lead>

              <h3 className="text-2xl font-black text-slate-950">
                1.000 TL üründe önce %20, sonra %10 indirim
              </h3>

              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">
                    1. indirim: 1.000 × %20 = 200 TL
                  </p>
                  <p className="mt-2 text-slate-600">
                    İlk indirim sonrası fiyat: 800 TL
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-black text-slate-950">
                    2. indirim: 800 × %10 = 80 TL
                  </p>
                  <p className="mt-2 text-slate-600">
                    Son fiyat: 720 TL
                  </p>
                </div>

                <div className="rounded-2xl bg-emerald-50 p-5">
                  <p className="text-xl font-black text-emerald-800">
                    Toplam etkili indirim: %28
                  </p>
                </div>
              </div>

              <FormulaBox
                title="Ardışık indirim formülü"
                formula="Etkili Oran = 1 − (1 − İlk Oran) × (1 − İkinci Oran)"
                description="Oranlar formülde ondalık olarak kullanılır. %20 için 0,20; %10 için 0,10 yazılır."
              />
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornekler"
              title="Gerçek indirim hesaplama örnekleri"
            >
              <Lead>
                Aşağıdaki örnekler mağaza, e-ticaret ve kupon kampanyalarında
                karşılaşılan tipik hesaplamaları gösterir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Giyim ürünü
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    2.400 TL, %35 indirim
                  </h3>

                  <p className="mt-4">İndirim: 2.400 × 0,35 = 840 TL</p>
                  <p className="mt-2 text-xl font-black text-emerald-700">
                    Son fiyat: 1.560 TL
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Elektronik ürün
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    12.500 TL, %12 indirim
                  </h3>

                  <p className="mt-4">İndirim: 12.500 × 0,12 = 1.500 TL</p>
                  <p className="mt-2 text-xl font-black text-emerald-700">
                    Son fiyat: 11.000 TL
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Sabit kupon
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    3.000 TL sepete 400 TL kupon
                  </h3>

                  <p className="mt-4">3.000 − 400 = 2.600 TL</p>
                  <p className="mt-2 text-xl font-black text-emerald-700">
                    Etkili indirim: %13,33
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    İkinci ürüne indirim
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    İki ürün 800 TL, ikinciye %50
                  </h3>

                  <p className="mt-4">800 + 400 = 1.200 TL toplam</p>
                  <p className="mt-2 text-xl font-black text-emerald-700">
                    İki üründe etkili indirim: %25
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hizli-yontemler"
              title="Zihinden hızlı indirim hesaplama yöntemleri"
            >
              <Lead>
                Bazı yaygın oranlar bölme ve basit toplama işlemleriyle
                hesap makinesi olmadan bulunabilir.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Oran</th>
                      <th className="px-5 py-4">Hızlı yöntem</th>
                      <th className="px-5 py-4">1.000 TL örneği</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-black text-blue-700">%10</td>
                      <td className="px-5 py-4">Fiyatı 10'a bölün</td>
                      <td className="px-5 py-4 font-black">100 TL indirim</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-black text-blue-700">%20</td>
                      <td className="px-5 py-4">%10'un iki katı</td>
                      <td className="px-5 py-4 font-black">200 TL indirim</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-black text-blue-700">%25</td>
                      <td className="px-5 py-4">Fiyatı 4'e bölün</td>
                      <td className="px-5 py-4 font-black">250 TL indirim</td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 font-black text-blue-700">%50</td>
                      <td className="px-5 py-4">Fiyatı 2'ye bölün</td>
                      <td className="px-5 py-4 font-black">500 TL indirim</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kampanya-karsilastirma"
              title="Kampanyalar nasıl doğru karşılaştırılır?"
            >
              <Lead>
                Kampanya karşılaştırmasında yalnızca görünen yüzdeye değil,
                ödenecek toplam tutara ve şartlara bakılmalıdır.
              </Lead>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={ShoppingBag} title="Sepet alt limiti">
                  <p>
                    Kuponun kullanılabilmesi için gereken minimum harcamayı
                    kontrol edin.
                  </p>
                </FeatureCard>

                <FeatureCard icon={CircleDollarSign} title="İndirim üst limiti">
                  <p>
                    “%20 indirim, en fazla 300 TL” gibi sınırlar gerçek oranı
                    düşürebilir.
                  </p>
                </FeatureCard>

                <FeatureCard icon={FileText} title="Hariç ürünler">
                  <p>
                    Marka, kategori veya satıcı kısıtlamaları kampanyanın
                    kapsamını daraltabilir.
                  </p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    “500 TL indirim” ile “%20 indirim” arasında seçim yaparken
                    sepet tutarını kullanın. 2.000 TL sepette %20 yalnızca 400
                    TL eder; 500 TL sabit indirim daha avantajlıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="İndirim hesaplamasında sık yapılan hatalar"
            >
              <Lead>
                En yaygın hata, indirim tutarı ile indirimli fiyatı karıştırmak
                ve ardışık oranları doğrudan toplamaktır.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "İndirim tutarını son fiyat sanmak",
                    error:
                      "1.000 TL'nin %20'si olan 200 TL'yi ürünün yeni fiyatı kabul etmek.",
                    solution:
                      "200 TL'yi eski fiyattan çıkarın; doğru sonuç 800 TL'dir.",
                  },
                  {
                    title: "Ardışık oranları toplamak",
                    error:
                      "%20 + %10 kampanyasını %30 indirim sanmak.",
                    solution:
                      "İkinci oranı ilk indirimden kalan fiyat üzerinden uygulayın.",
                  },
                  {
                    title: "Oranı yeni fiyata bölmek",
                    error:
                      "Gerçek indirimi hesaplarken fiyat farkını indirimli fiyata bölmek.",
                    solution:
                      "Fiyat farkını her zaman eski fiyata bölün.",
                  },
                  {
                    title: "Üst limitli kuponu yok saymak",
                    error:
                      "%30 kuponun tüm sepette sınırsız çalıştığını düşünmek.",
                    solution:
                      "Kampanyanın maksimum indirim tutarını kontrol edin.",
                  },
                  {
                    title: "Sabit ve yüzdesel indirimi karıştırmak",
                    error:
                      "300 TL kuponu %30 indirim gibi değerlendirmek.",
                    solution:
                      "Sabit tutarı sepete bölerek gerçek yüzde karşılığını hesaplayın.",
                  },
                  {
                    title: "Eski fiyatın gerçekliğini kontrol etmemek",
                    error:
                      "Yalnızca üzeri çizili fiyat ile kampanya yüzdesine güvenmek.",
                    solution:
                      "Ürünün yakın dönem piyasa fiyatını farklı kaynaklarla karşılaştırın.",
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

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl shadow-blue-950/20">
                <TrendingDown className="h-8 w-8" aria-hidden="true" />

                <h3 className="mt-5 text-3xl font-black">
                  Gerçek indirimli fiyatı hemen bulun
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Eski fiyat ve indirim oranını girerek indirim tutarını ve
                  ödeyeceğiniz son fiyatı saniyeler içinde hesaplayın.
                </p>

                <Link
                  href="/hesaplamalar/indirim-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  İndirim hesaplama aracına git
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="İndirim hesaplama hakkında sık sorulan sorular"
            >
              <Lead>
                Yüzde indirim, indirimli fiyat, gerçek oran ve ardışık
                kampanyalar hakkında en çok sorulan soruların yanıtlarını
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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-blue-200">
                    <Tags className="h-4 w-4" aria-hidden="true" />
                    Hızlı ve doğru sonuç
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    İndirim hesabınızı şimdi yapın
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Etiket fiyatını ve indirim oranını girin; indirim tutarını
                    ve ödeyeceğiniz son fiyatı anında görüntüleyin.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/indirim-hesaplama"
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