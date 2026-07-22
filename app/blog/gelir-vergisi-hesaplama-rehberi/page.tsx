import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BarChart3,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Info,
  Landmark,
  ListChecks,
  Percent,
  ReceiptText,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import CalculatorContentSection from "@/components/calculators/CalculatorContentSection";
import CalculatorFaqItem from "@/components/calculators/CalculatorFaqItem";
import CalculatorLayout from "@/components/calculators/CalculatorLayout";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const PAGE_PATH = "/blog/gelir-vergisi-hesaplama-rehberi";
const PAGE_URL = `https://www.https://hesaprehberionline.com${PAGE_PATH}`;
const PAGE_TITLE =
  "Gelir Vergisi Hesaplama Rehberi 2026: Dilimler, Matrah ve Örnekler";
const PAGE_DESCRIPTION =
  "2026 gelir vergisi dilimlerini, kümülatif vergi matrahını, ücret gelirlerinde gelir vergisi hesaplama yöntemini ve örnek hesaplamaları öğrenin.";

export const metadata: Metadata = createCalculatorMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "gelir vergisi hesaplama",
    "2026 gelir vergisi dilimleri",
    "gelir vergisi matrahı",
    "kümülatif vergi matrahı",
    "maaştan gelir vergisi hesaplama",
    "ücret gelir vergisi",
    "vergi dilimi hesaplama",
    "gelir vergisi oranları",
    "gelir vergisi nasıl hesaplanır",
    "net maaş vergi dilimi",
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
        url: "/og/gelir-vergisi-hesaplama-rehberi.jpg",
        width: 1200,
        height: 630,
        alt: "Gelir vergisi hesaplama rehberi 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/gelir-vergisi-hesaplama-rehberi.jpg"],
  },
  alternates: {
    canonical: PAGE_URL,
  },
});

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Gelir vergisi nasıl hesaplanır?",
    answer:
      "Gelir vergisi, vergiye tabi matrahın ilgili yılın gelir vergisi tarifesindeki dilimlere dağıtılmasıyla hesaplanır. Her dilime giren tutara o dilimin oranı uygulanır ve sonuçlar toplanır.",
  },
  {
    question: "2026 yılında ilk gelir vergisi dilimi kaç TL'dir?",
    answer:
      "2026 yılı gelir vergisi tarifesinde ilk dilim 190.000 TL'ye kadardır ve bu dilime yüzde 15 oran uygulanır.",
  },
  {
    question: "Kümülatif vergi matrahı nedir?",
    answer:
      "Kümülatif vergi matrahı, yıl başından itibaren gelir vergisine tabi ücret matrahlarının toplamıdır. Çalışanın hangi vergi diliminde olduğunu belirlemek için kullanılır.",
  },
  {
    question: "Vergi dilimine girince maaşın tamamı yüksek orandan mı vergilenir?",
    answer:
      "Hayır. Yalnızca ilgili dilimi aşan kısım daha yüksek oranla vergilenir. Önceki dilimlerde kalan tutarlar kendi oranları üzerinden hesaplanmaya devam eder.",
  },
  {
    question: "Brüt maaş ile vergi matrahı aynı şey midir?",
    answer:
      "Aynı değildir. Gelir vergisi matrahı, brüt ücret üzerinden yasal kesintiler ve uygulanabilen istisnalar dikkate alınarak belirlenir.",
  },
  {
    question: "Gelir vergisi aylık mı yıllık mı hesaplanır?",
    answer:
      "Ücretlerde vergi kesintisi aylık bordroda yapılır; ancak uygulanacak oran yıl başından itibaren biriken kümülatif matraha göre belirlenir.",
  },
  {
    question: "İş değiştirince vergi dilimi sıfırlanır mı?",
    answer:
      "Uygulama, işveren ve çalışma koşullarına göre değişebilir. Birden fazla işverenden ücret elde edilmesi halinde beyan yükümlülüğü de doğabilir. Güncel durum için bordro birimi veya mali müşavir görüşü alınmalıdır.",
  },
  {
    question: "Asgari ücret gelir vergisinden istisna mı?",
    answer:
      "Ücret gelirlerinde asgari ücret düzeyine ilişkin gelir vergisi istisnası uygulanır. İstisnanın bordroya etkisi ücret tutarı ve ilgili ayın koşullarına göre hesaplanır.",
  },
  {
    question: "Gelir vergisi ile damga vergisi aynı şey midir?",
    answer:
      "Hayır. Gelir vergisi kazanç veya irat üzerinden, damga vergisi ise belirli belgeler ve ücret bordrosundaki matrah üzerinden ayrı kurallarla hesaplanır.",
  },
  {
    question: "Gelir vergisi matrahı nerede yazar?",
    answer:
      "Çalışanlar gelir vergisi matrahını ve kümülatif matrahı genellikle aylık ücret bordrosunda görebilir.",
  },
  {
    question: "Vergi dilimi neden yıl içinde değişir?",
    answer:
      "Kümülatif matrah her ay arttığı için belirli eşikler aşılır. Eşik aşıldığında aşan tutara bir sonraki dilimin oranı uygulanır.",
  },
  {
    question: "Yüzde 27 vergi dilimine girince net maaş ne kadar düşer?",
    answer:
      "Düşüş, o ay matrahın ne kadarının yüzde 27'lik dilime girdiğine ve bordrodaki diğer kesinti ile istisnalara bağlıdır. Maaşın tamamı bir anda yüzde 27 oranla vergilenmez.",
  },
  {
    question: "Gelir vergisi hesaplamasında SGK primi dikkate alınır mı?",
    answer:
      "Ücret bordrosunda gelir vergisi matrahı belirlenirken çalışan payına ait yasal sigorta kesintileri dikkate alınır.",
  },
  {
    question: "Birden fazla işverenden ücret alanlar beyanname verir mi?",
    answer:
      "Belirli yıllık sınırların aşılması halinde beyanname gerekebilir. 2026 yılı için birinci işverenden sonraki ücretlerin toplamı ve toplam ücret geliri açısından ayrı sınırlar bulunmaktadır.",
  },
  {
    question: "Gelir vergisi hesaplama aracı kesin sonuç verir mi?",
    answer:
      "Araçlar genel hesaplama mantığını gösterir. Bordro, istisna, teşvik, engellilik indirimi, özel kesinti ve işveren uygulamaları nedeniyle resmi sonuç farklı olabilir.",
  },
  {
    question: "Gelir vergisi dilimleri her yıl değişir mi?",
    answer:
      "Evet. Dilim tutarları yeniden değerleme ve mevzuat düzenlemeleri doğrultusunda yıllara göre güncellenebilir.",
  },
  {
    question: "Ücret dışı gelirlerde tarife farklı mıdır?",
    answer:
      "Tarifenin bazı eşikleri ücret gelirleri için farklı uygulanabilir. Ticari, serbest meslek, kira ve diğer gelir unsurlarında beyan ve matrah kuralları ayrıca değerlendirilmelidir.",
  },
];

const taxBrackets = [
  {
    range: "190.000 TL'ye kadar",
    rate: "%15",
    fixed: "Matrah × %15",
    type: "Tüm gelirler",
  },
  {
    range: "400.000 TL'nin 190.000 TL'si için",
    rate: "%20",
    fixed: "28.500 TL + aşan kısım × %20",
    type: "Tüm gelirler",
  },
  {
    range: "1.000.000 TL'nin 400.000 TL'si için",
    rate: "%27",
    fixed: "70.500 TL + aşan kısım × %27",
    type: "Ücret dışı gelirler",
  },
  {
    range: "1.500.000 TL'nin 400.000 TL'si için",
    rate: "%27",
    fixed: "70.500 TL + aşan kısım × %27",
    type: "Ücret gelirleri",
  },
  {
    range: "5.300.000 TL'ye kadar",
    rate: "%35",
    fixed: "İlgili alt dilim vergisi + aşan kısım × %35",
    type: "Tüm gelirler",
  },
  {
    range: "5.300.000 TL'den fazlası",
    rate: "%40",
    fixed: "İlgili sabit vergi + aşan kısım × %40",
    type: "Tüm gelirler",
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
          url: "https://www.https://hesaprehberionline.com/logo.jpg",
        },
      },
      image:
        "https://www.https://hesaprehberionline.com/og/gelir-vergisi-hesaplama-rehberi.jpg",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://www.https://hesaprehberionline.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blog",
          item: "https://www.https://hesaprehberionline.com/blog",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Gelir Vergisi Hesaplama Rehberi",
          item: PAGE_URL,
        },
      ],
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

const toc = [
  ["gelir-vergisi-nedir", "Gelir vergisi nedir?"],
  ["2026-vergi-dilimleri", "2026 gelir vergisi dilimleri"],
  ["matrah-nedir", "Gelir vergisi matrahı"],
  ["kumulatif-matrah", "Kümülatif vergi matrahı"],
  ["hesaplama-yontemi", "Gelir vergisi nasıl hesaplanır?"],
  ["ornek-hesaplamalar", "Örnek hesaplamalar"],
  ["ucret-gelirleri", "Ücret gelirlerinde vergi"],
  ["vergi-dilimi-gecisi", "Vergi dilimi geçişi"],
  ["istisna-ve-indirimler", "İstisna ve indirimler"],
  ["birden-fazla-isveren", "Birden fazla işveren"],
  ["sik-hatalar", "Sık yapılan hatalar"],
  ["sss", "Sık sorulan sorular"],
];

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
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-xl">
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

export default function GelirVergisiHesaplamaRehberiPage() {
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
        category="Vergi Hesaplamaları"
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
                label: "Gelir Vergisi Hesaplama Rehberi",
                href: PAGE_PATH,
              },
            ]}
          />
        </div>

        <header className="relative overflow-hidden border-y border-slate-200 bg-slate-950">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:32px_32px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-200">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                2026 güncel gelir vergisi rehberi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Gelir vergisi hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                  dilimler, matrah ve bordro mantığı
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                2026 vergi dilimlerini, kümülatif matrahın nasıl ilerlediğini,
                hangi tutarın hangi oranla vergilendirildiğini ve ücret
                bordrosunda gelir vergisinin nasıl oluştuğunu adım adım
                öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/gelir-vergisi-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Hesaplama aracını aç
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <a
                  href="#2026-vergi-dilimleri"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  2026 tarifesini gör
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "2026 dilimleri",
                  "Kümülatif matrah",
                  "Ücret vergisi",
                  "Örnek hesaplamalar",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-emerald-300" />
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
                        İlk vergi dilimi
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        190.000 TL&apos;ye kadar
                      </h2>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Percent className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Uygulanan oran
                    </p>
                    <p className="mt-2 text-5xl font-black text-blue-700">%15</p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Üst dilime geçildiğinde yalnızca sınırı aşan kısım daha
                    yüksek oranla vergilendirilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <nav className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
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
                {toc.map(([id, title], index) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="group flex gap-3 rounded-2xl px-3 py-3 transition hover:bg-blue-50"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-black text-slate-600 group-hover:bg-blue-600 group-hover:text-white">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold leading-5 text-slate-800 group-hover:text-blue-700">
                        {title}
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
              <ShareButtons
                title={PAGE_TITLE}
                description={PAGE_DESCRIPTION}
              />
            </div>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection
              id="gelir-vergisi-nedir"
              title="Gelir vergisi nedir?"
            >
              <Lead>
                Gelir vergisi, gerçek kişilerin bir takvim yılı içinde elde
                ettiği kazanç ve iratlar üzerinden alınan doğrudan vergidir.
              </Lead>

              <p>
                Ücret, ticari kazanç, serbest meslek kazancı, kira geliri,
                menkul sermaye iradı ve diğer bazı kazançlar gelir vergisinin
                kapsamına girebilir. Her gelir unsurunun beyan, istisna ve
                matrah kuralları aynı değildir.
              </p>

              <p>
                Çalışanların ücret gelirlerinde vergi çoğunlukla işveren
                tarafından bordroda hesaplanır ve stopaj yoluyla kesilir.
                Uygulanacak oran, yıl başından itibaren biriken gelir vergisi
                matrahına göre belirlenir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={WalletCards} title="Gelir">
                  <p>Vergiye tabi kazanç veya iradın başlangıç noktasıdır.</p>
                </FeatureCard>
                <FeatureCard icon={Scale} title="Matrah">
                  <p>Verginin hesaplandığı yasal tutardır.</p>
                </FeatureCard>
                <FeatureCard icon={Percent} title="Tarife">
                  <p>Matrah dilimlerine uygulanan artan oranlı yapıdır.</p>
                </FeatureCard>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
                  <p className="text-sm leading-7 text-amber-900">
                    Bu rehber genel bilgilendirme amacı taşır. Kişisel beyan,
                    istisna, teşvik veya bordro uygulamalarında Gelir İdaresi
                    Başkanlığı açıklamaları ve mali müşavir değerlendirmesi esas
                    alınmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="2026-vergi-dilimleri"
              title="2026 gelir vergisi dilimleri"
            >
              <Lead>
                2026 tarifesi artan oranlıdır. Matrah yükseldikçe aşan kısma
                sırasıyla yüzde 15, yüzde 20, yüzde 27, yüzde 35 ve yüzde 40
                oranları uygulanır.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[900px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Matrah aralığı</th>
                      <th className="px-5 py-4">Oran</th>
                      <th className="px-5 py-4">Hesaplama</th>
                      <th className="px-5 py-4">Kapsam</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {taxBrackets.map((row) => (
                      <tr key={`${row.range}-${row.type}`}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.range}
                        </td>
                        <td className="px-5 py-4 text-xl font-black text-blue-700">
                          {row.rate}
                        </td>
                        <td className="px-5 py-4 text-sm text-slate-600">
                          {row.fixed}
                        </td>
                        <td className="px-5 py-4 text-sm font-semibold text-slate-700">
                          {row.type}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-blue-700" />
                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Ücret gelirlerinde üçüncü dilim farklıdır
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-900">
                      2026 yılında yüzde 27&apos;lik dilimin üst sınırı ücret
                      gelirlerinde 1.500.000 TL, ücret dışı gelirlerde ise
                      1.000.000 TL olarak uygulanır.
                    </p>
                  </div>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="matrah-nedir"
              title="Gelir vergisi matrahı nedir?"
            >
              <Lead>
                Matrah, vergi oranının doğrudan uygulandığı tutardır; brüt ücret
                ile aynı değildir.
              </Lead>

              <FormulaBox
                title="Ücret bordrosunda genel matrah mantığı"
                formula="Gelir Vergisi Matrahı = Brüt Ücret − Yasal Sigorta Kesintileri − Uygulanabilen İndirimler"
                description="Gerçek bordroda istisna, teşvik, özel indirim ve ücret unsurları hesaplamayı değiştirebilir."
              />

              <p>
                Brüt ücretin tamamına doğrudan gelir vergisi oranı uygulanmaz.
                Önce çalışan payına ait yasal sigorta kesintileri ve mevzuata
                göre dikkate alınabilen kalemler düşülür. Kalan tutar gelir
                vergisi matrahını oluşturur.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <FeatureCard icon={Banknote} title="Brüt ücret">
                  <p>
                    Kesintiler uygulanmadan önceki toplam ücret ve ücret
                    niteliğindeki ödemelerdir.
                  </p>
                </FeatureCard>
                <FeatureCard icon={ReceiptText} title="Vergi matrahı">
                  <p>
                    Gelir vergisi tarifesine giren, yasal kesintiler sonrası
                    hesaplanan tutardır.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kumulatif-matrah"
              title="Kümülatif vergi matrahı nedir?"
            >
              <Lead>
                Kümülatif vergi matrahı, çalışanın yıl başından ilgili aya kadar
                oluşan gelir vergisi matrahlarının toplamıdır.
              </Lead>

              <p>
                Ocak ayı matrahı tek başına ilk kümülatif matrahtır. Şubat
                ayında Ocak ve Şubat matrahları toplanır. Bu süreç yıl boyunca
                devam eder. Toplam matrah tarife sınırını geçtiğinde aşan bölüm
                bir sonraki oranla vergilendirilir.
              </p>

              <div className="overflow-hidden rounded-3xl border border-slate-200">
                <table className="w-full min-w-[700px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Ay</th>
                      <th className="px-5 py-4">Aylık matrah</th>
                      <th className="px-5 py-4">Kümülatif matrah</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {[
                      ["Ocak", "40.000 TL", "40.000 TL"],
                      ["Şubat", "40.000 TL", "80.000 TL"],
                      ["Mart", "40.000 TL", "120.000 TL"],
                      ["Nisan", "40.000 TL", "160.000 TL"],
                      ["Mayıs", "40.000 TL", "200.000 TL"],
                    ].map((row) => (
                      <tr key={row[0]}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row[0]}
                        </td>
                        <td className="px-5 py-4 text-slate-700">{row[1]}</td>
                        <td className="px-5 py-4 font-black text-blue-700">
                          {row[2]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Bu örnekte Mayıs ayı içinde 190.000 TL sınırı aşılır. İlk
                190.000 TL yüzde 15, sınırı aşan 10.000 TL ise yüzde 20 oranla
                hesaplanır.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hesaplama-yontemi"
              title="Gelir vergisi nasıl hesaplanır?"
            >
              <Lead>
                Matrah tek bir oranla çarpılmaz; tutar ilgili dilimlere
                dağıtılır ve her parçaya kendi oranı uygulanır.
              </Lead>

              <FormulaBox
                title="Artan oranlı tarife mantığı"
                formula="Toplam Vergi = Her Dilime Düşen Matrah × O Dilimin Oranı"
                description="Üst dilime geçiş, önceki dilimlerin oranını değiştirmez."
              />

              <ol className="space-y-4">
                {[
                  "Vergiye tabi matrahı belirleyin.",
                  "Matrahın hangi vergi dilimlerine dağıldığını bulun.",
                  "Her dilime giren tutarı ilgili oranla çarpın.",
                  "Dilimler için hesaplanan vergileri toplayın.",
                  "Ücret bordrosunda uygulanabilen istisna ve mahsupları ayrıca dikkate alın.",
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
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ornek-hesaplamalar"
              title="2026 gelir vergisi örnek hesaplamaları"
            >
              <Lead>
                Aşağıdaki örnekler yalnızca tarife hesabını göstermek için
                hazırlanmıştır; bordro istisnaları ayrıca değerlendirilmelidir.
              </Lead>

              <h3 className="text-2xl font-black text-slate-950">
                Örnek 1: 150.000 TL matrah
              </h3>
              <div className="rounded-3xl border border-slate-200 bg-white p-6">
                <p className="font-mono text-lg font-black text-slate-950">
                  150.000 × %15 = 22.500 TL
                </p>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Örnek 2: 300.000 TL matrah
              </h3>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
                <p>İlk 190.000 TL için: 190.000 × %15 = 28.500 TL</p>
                <p>Aşan 110.000 TL için: 110.000 × %20 = 22.000 TL</p>
                <p className="border-t border-slate-200 pt-4 text-xl font-black text-blue-700">
                  Toplam vergi: 50.500 TL
                </p>
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                Örnek 3: Ücret gelirinde 700.000 TL matrah
              </h3>
              <div className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6">
                <p>İlk 190.000 TL için: 28.500 TL</p>
                <p>190.000–400.000 TL arası: 210.000 × %20 = 42.000 TL</p>
                <p>400.000 TL&apos;yi aşan 300.000 TL: 300.000 × %27 = 81.000 TL</p>
                <p className="border-t border-slate-200 pt-4 text-xl font-black text-blue-700">
                  Toplam vergi: 151.500 TL
                </p>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ucret-gelirleri"
              title="Ücret gelirlerinde gelir vergisi"
            >
              <Lead>
                Ücret vergisi aylık bordroda görünse de oranı belirleyen unsur
                yıl içinde biriken kümülatif matrahtır.
              </Lead>

              <p>
                Aylık ücret sabit kalsa bile çalışan yıl içinde üst vergi
                dilimine geçebilir. Bu nedenle net maaş bazı aylarda düşebilir.
                Ancak düşüş, brüt ücretin tamamının yeni orana tabi olduğu
                anlamına gelmez.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={CalendarDays} title="Aylık bordro">
                  <p>Vergi kesintisi her ay bordroda gösterilir.</p>
                </FeatureCard>
                <FeatureCard icon={TrendingUp} title="Yıllık birikim">
                  <p>Kümülatif matrah yıl boyunca yükselir.</p>
                </FeatureCard>
                <FeatureCard icon={BarChart3} title="Dilim geçişi">
                  <p>Aşan bölüm bir sonraki oranla vergilenir.</p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="vergi-dilimi-gecisi"
              title="Vergi dilimi geçişi maaşı nasıl etkiler?"
            >
              <Lead>
                Üst dilime geçişte yalnızca sınırı aşan matrah bölümüne daha
                yüksek oran uygulanır.
              </Lead>

              <p>
                Kümülatif matrah 185.000 TL iken o ay 40.000 TL daha matrah
                oluşursa, 5.000 TL ilk dilimde; kalan 35.000 TL ikinci dilimde
                değerlendirilir. Bu nedenle o ayın efektif vergi oranı iki
                oranın birleşiminden oluşur.
              </p>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-emerald-700" />
                  <p className="text-sm leading-7 text-emerald-900">
                    “Yüzde 20&apos;lik dilime girdim, maaşımın tamamından yüzde
                    20 kesilecek” düşüncesi yanlıştır. Tarife dilimsel çalışır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="istisna-ve-indirimler"
              title="Gelir vergisinde istisna ve indirimler"
            >
              <Lead>
                Hesaplanan vergi ile bordroda ödenecek vergi aynı olmayabilir;
                istisna, indirim ve mahsuplar sonucu etkileyebilir.
              </Lead>

              <p>
                Ücret gelirlerinde asgari ücret düzeyine ilişkin gelir vergisi
                istisnası bordro hesabında önemlidir. Ayrıca engellilik indirimi,
                belirli sigorta primleri, teşvikler ve özel durumlar matrahı veya
                ödenecek vergiyi etkileyebilir.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle className="mt-1 h-6 w-6 shrink-0 text-amber-700" />
                  <p className="text-sm leading-7 text-amber-900">
                    Her indirim her çalışan veya her gelir türü için otomatik
                    uygulanmaz. Şartların belge ve mevzuat açısından ayrıca
                    incelenmesi gerekir.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="birden-fazla-isveren"
              title="Birden fazla işverenden ücret geliri"
            >
              <Lead>
                Bir takvim yılında birden fazla işverenden ücret alanlarda
                yıllık beyanname yükümlülüğü doğabilir.
              </Lead>

              <p>
                2026 yılı için birinci işverenden sonraki işverenlerden alınan
                ücretlerin toplamının 400.000 TL&apos;yi aşması halinde
                ücretlerin tamamının beyan edilmesi gerekebilir.
              </p>

              <p>
                Ayrıca birinci işveren dahil toplam ücret gelirinin 5.300.000
                TL&apos;yi aşması halinde de beyan yükümlülüğü gündeme gelebilir.
                İşveren sıralaması, ücretli tarafından belirlenebilir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <FileText className="mt-1 h-6 w-6 shrink-0 text-blue-700" />
                  <p className="text-sm leading-7 text-blue-900">
                    İş değişikliği, aynı anda birden fazla işverenden ücret
                    alma, şirket birleşmesi veya grup şirketleri arasında geçiş
                    gibi durumlarda beyan yükümlülüğü için uzman görüşü alınması
                    faydalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Gelir vergisi hesaplamasında sık yapılan hatalar"
            >
              <Lead>
                En yaygın hatalar, brüt ücret ile matrahı karıştırmak ve dilim
                mantığını tek oranlı hesap sanmaktır.
              </Lead>

              <div className="space-y-5">
                {[
                  [
                    "Brüt ücretin tamamına oran uygulamak",
                    "Önce gelir vergisi matrahının belirlenmesi gerekir.",
                  ],
                  [
                    "Üst dilime geçince tüm matrahı yüksek oranla çarpmak",
                    "Yalnızca eşik üzerindeki tutar yeni oranla hesaplanır.",
                  ],
                  [
                    "Aylık matrah ile kümülatif matrahı karıştırmak",
                    "Dilim tespiti yıl başından itibaren biriken matrahla yapılır.",
                  ],
                  [
                    "Ücret ve ücret dışı tarife sınırlarını aynı sanmak",
                    "2026 yılında yüzde 27'lik dilimin üst sınırı farklıdır.",
                  ],
                  [
                    "İstisna ve mahsupları yok saymak",
                    "Bordroda ödenecek vergi genel tarife hesabından farklı olabilir.",
                  ],
                  [
                    "Eski yılın vergi dilimlerini kullanmak",
                    "Tarife tutarları yıllara göre güncellenir.",
                  ],
                ].map(([title, solution]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-white p-6"
                  >
                    <h3 className="flex items-center gap-3 text-lg font-black text-slate-950">
                      <AlertTriangle className="h-5 w-5 text-amber-600" />
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
                <Calculator className="h-8 w-8" />
                <h3 className="mt-5 text-3xl font-black">
                  Gelir verginizi hızlıca hesaplayın
                </h3>
                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Matrah ve gelir türü bilgilerini kullanarak yaklaşık gelir
                  vergisi sonucunu görüntüleyin.
                </p>
                <Link
                  href="/hesaplamalar/gelir-vergisi-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700"
                >
                  Hesaplama aracına git
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Gelir vergisi hakkında sık sorulan sorular"
            >
              <Lead>
                2026 vergi dilimleri, kümülatif matrah ve ücret bordrosu
                hakkında en çok sorulan soruların yanıtlarını aşağıda
                bulabilirsiniz.
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
                    <Landmark className="h-4 w-4" />
                    2026 güncel tarife
                  </div>
                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Gelir vergisi hesabınızı şimdi yapın
                  </h2>
                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Matrahınızı girin, ilgili vergi dilimlerini ve yaklaşık
                    toplam vergi tutarını hızlıca görün.
                  </p>
                </div>
                <Link
                  href="/hesaplamalar/gelir-vergisi-hesaplama"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-black text-white transition hover:bg-blue-500"
                >
                  Hesaplama aracını aç
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </section>
          </article>
        </div>
      </CalculatorLayout>
    </>
  );
}