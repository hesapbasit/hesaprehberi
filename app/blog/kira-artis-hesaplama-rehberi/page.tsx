import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  Calculator,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Gavel,
  Home,
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
import { createCalculatorMetadata } from "@/lib/createCalculatorMetada";

const PAGE_PATH = "/blog/kira-artis-hesaplama-rehberi";
const PAGE_URL = `https://www.hesaprehberi.com${PAGE_PATH}`;
const PAGE_TITLE =
  "Kira Artış Hesaplama Rehberi 2026: TÜFE Oranı ve Örnekler";
const PAGE_DESCRIPTION =
  "2026 kira artış oranını, TÜFE on iki aylık ortalama yöntemini, konut ve iş yeri kiralarında zam hesabını ve örnek hesaplamaları öğrenin.";

export const metadata: Metadata = createCalculatorMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  path: PAGE_PATH,
  keywords: [
    "kira artış hesaplama",
    "2026 kira artış oranı",
    "kira zammı hesaplama",
    "TÜFE kira artış oranı",
    "konut kira artışı",
    "işyeri kira artışı",
    "kira artışı nasıl hesaplanır",
    "Temmuz 2026 kira artış oranı",
    "12 aylık TÜFE ortalaması",
    "kira yenileme oranı",
    "kira tespit davası",
    "beş yıl kira kuralı",
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
        url: "/og/kira-artis-hesaplama-rehberi.jpg",
        width: 1200,
        height: 630,
        alt: "2026 kira artış hesaplama rehberi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/kira-artis-hesaplama-rehberi.jpg"],
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

const JULY_2026_RATE = 32.03;

const faqItems: FaqItem[] = [
  {
    question: "2026 kira artış oranı nasıl hesaplanır?",
    answer:
      "Yenilenen kira döneminde uygulanabilecek artış için sözleşmedeki oran ile TÜFE'nin on iki aylık ortalamalara göre değişim oranı karşılaştırılır. Sözleşmedeki oran daha düşükse düşük oran, daha yüksekse yasal üst sınır olan TÜFE ortalaması esas alınır.",
  },
  {
    question: "Temmuz 2026 kira artış oranı kaçtır?",
    answer:
      "TÜİK'in Haziran 2026 verisine göre on iki aylık ortalamalara göre TÜFE değişimi yüzde 32,03'tür. Temmuz 2026'da yenilenen ve genel kurala tabi sözleşmelerde bu oran yasal üst sınır olarak dikkate alınır.",
  },
  {
    question: "Kira artışında yıllık enflasyon mu kullanılır?",
    answer:
      "Hayır. Genel kuralda bir önceki yılın aynı ayına göre yıllık TÜFE yerine TÜFE'nin on iki aylık ortalamalara göre değişim oranı kullanılır.",
  },
  {
    question: "Yüzde 25 kira artış sınırı devam ediyor mu?",
    answer:
      "Hayır. Konut kiralarına yönelik geçici yüzde 25 sınırı 1 Temmuz 2024 tarihini kapsayan yenilemelerin ardından sona erdi. Sonraki yenilemelerde Türk Borçlar Kanunu'nun genel TÜFE kuralı uygulanır.",
  },
  {
    question: "Ev sahibi TÜFE oranından daha fazla zam yapabilir mi?",
    answer:
      "İlk beş yıllık dönemde yenileme artışına ilişkin anlaşma, TÜFE'nin on iki aylık ortalama değişim oranını aşamaz. Beş yıldan sonra kira tespitine ilişkin farklı kurallar ve dava imkânı gündeme gelebilir.",
  },
  {
    question: "Sözleşmede daha düşük artış oranı yazıyorsa hangisi uygulanır?",
    answer:
      "Sözleşmede yasal üst sınırdan daha düşük bir oran kararlaştırılmışsa kural olarak sözleşmedeki düşük oran uygulanır.",
  },
  {
    question: "Sözleşmede kira artış maddesi yoksa ne olur?",
    answer:
      "Taraflar anlaşamazsa kira bedeli, TÜFE'nin on iki aylık ortalama değişim oranını aşmamak koşuluyla kiralananın durumu dikkate alınarak hâkim tarafından belirlenebilir.",
  },
  {
    question: "Konut ve iş yeri kira artış oranı aynı mı?",
    answer:
      "Konut ve çatılı iş yeri kiralarında Türk Borçlar Kanunu'nun TÜFE üst sınırı genel olarak uygulanır. Bununla birlikte sözleşme türü ve özel hükümler ayrıca incelenmelidir.",
  },
  {
    question: "Kira artışı hangi ayın TÜFE oranına göre yapılır?",
    answer:
      "Kira sözleşmesinin yenilendiği dönemde açıklanmış en güncel on iki aylık ortalama TÜFE oranı esas alınır. Uygulamada yenileme ayının başında mevcut olan son TÜİK verisi kullanılır.",
  },
  {
    question: "Kira artışı her ay yapılabilir mi?",
    answer:
      "Kural olarak artış, kira sözleşmesinin yenilendiği kira döneminde yapılır. Sözleşmede veya sonradan geçerli biçimde kararlaştırılmadıkça yıl içinde tek taraflı ara zam yapılamaz.",
  },
  {
    question: "Ev sahibi geriye dönük kira artışı isteyebilir mi?",
    answer:
      "Geriye dönük talebin geçerliliği sözleşmeye, ihtara, dava tarihine ve Türk Borçlar Kanunu'nun kira tespitine ilişkin süre kurallarına bağlıdır. Somut olay için hukuki değerlendirme gerekir.",
  },
  {
    question: "Beş yıl dolunca kira otomatik olarak rayiç bedele çıkar mı?",
    answer:
      "Hayır. Beş yılın dolması kirayı kendiliğinden rayiç seviyeye taşımaz. Taraflar anlaşabilir veya şartları varsa kira tespit davası yoluyla hâkimden belirleme istenebilir.",
  },
  {
    question: "Kira tespit davasında yalnızca TÜFE mi dikkate alınır?",
    answer:
      "Beş yıldan uzun süreli veya beş yıldan sonra yenilenen sözleşmelerde hâkim; TÜFE değişimini, kiralananın durumunu, emsal kira bedellerini ve hakkaniyeti birlikte değerlendirir.",
  },
  {
    question: "Kira artışı hesaplanırken aidat da eklenir mi?",
    answer:
      "Kira artışı kural olarak çıplak kira bedeli üzerinden hesaplanır. Aidat ve yan giderler ayrı kalemlerdir; sözleşme hükümleri ayrıca değerlendirilmelidir.",
  },
  {
    question: "Kira bedeli 20.000 TL ise yüzde 32,03 artışla yeni kira kaç olur?",
    answer:
      "Artış tutarı 20.000 × 0,3203 = 6.406 TL'dir. Yeni aylık kira 26.406 TL olur.",
  },
  {
    question: "Kiracı ve ev sahibi daha düşük oranda anlaşabilir mi?",
    answer:
      "Evet. Yasal oran üst sınırdır. Taraflar daha düşük bir artış oranında veya artış yapılmamasında anlaşabilir.",
  },
  {
    question: "Kira artış oranı küsuratlı çıkarsa nasıl yuvarlanır?",
    answer:
      "Hesap sonucu kuruşlu çıkabilir. Taraflar ödeme kolaylığı için karşılıklı anlaşarak makul bir yuvarlama yapabilir; tek taraflı yuvarlama yasal sınırı aşmamalıdır.",
  },
  {
    question: "Kira artış hesaplama aracı kesin hukuki sonuç verir mi?",
    answer:
      "Araç matematiksel sonucu verir. Sözleşme maddeleri, kira başlangıç tarihi, beş yıl kuralı, yabancı para, dava veya özel durumlar hukuki sonucu değiştirebilir.",
  },
];

const tocItems: TocItem[] = [
  { id: "kira-artisi-nedir", title: "Kira artışı nedir?" },
  { id: "2026-orani", title: "2026 kira artış oranı" },
  { id: "tuik-verisi", title: "TÜFE on iki aylık ortalama" },
  { id: "hesaplama-formulu", title: "Kira artışı formülü" },
  { id: "ornek-hesaplamalar", title: "Örnek hesaplamalar" },
  { id: "konut-kirasi", title: "Konut kira artışı" },
  { id: "isyeri-kirasi", title: "İş yeri kira artışı" },
  { id: "sozlesme-orani", title: "Sözleşmedeki oran" },
  { id: "yuzde-25-siniri", title: "%25 sınırının durumu" },
  { id: "bes-yil-kurali", title: "Beş yıl kuralı" },
  { id: "kira-tespit-davasi", title: "Kira tespit davası" },
  { id: "ara-zam", title: "Ara zam yapılabilir mi?" },
  { id: "sik-hatalar", title: "Sık yapılan hatalar" },
  { id: "sss", title: "Sık sorulan sorular" },
];

const exampleRows = [
  {
    current: "10.000 TL",
    rate: "%32,03",
    increase: "3.203 TL",
    newRent: "13.203 TL",
  },
  {
    current: "15.000 TL",
    rate: "%32,03",
    increase: "4.804,50 TL",
    newRent: "19.804,50 TL",
  },
  {
    current: "20.000 TL",
    rate: "%32,03",
    increase: "6.406 TL",
    newRent: "26.406 TL",
  },
  {
    current: "25.000 TL",
    rate: "%32,03",
    increase: "8.007,50 TL",
    newRent: "33.007,50 TL",
  },
  {
    current: "30.000 TL",
    rate: "%32,03",
    increase: "9.609 TL",
    newRent: "39.609 TL",
  },
  {
    current: "40.000 TL",
    rate: "%32,03",
    increase: "12.812 TL",
    newRent: "52.812 TL",
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
        "https://www.hesaprehberi.com/og/kira-artis-hesaplama-rehberi.jpg",
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

export default function KiraArtisHesaplamaRehberiPage() {
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
        category="Kira Hesaplamaları"
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
                label: "Kira Artış Hesaplama Rehberi",
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
                2026 güncel kira artışı rehberi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl lg:leading-[1.05]">
                Kira artış hesaplama:
                <span className="block bg-gradient-to-r from-blue-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                  TÜFE oranı, formül ve yasal sınır
                </span>
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Konut ve iş yeri kiralarında artış oranının nasıl belirlendiğini,
                hangi TÜFE verisinin kullanıldığını, sözleşmedeki oranın etkisini
                ve beş yıl kuralını örneklerle öğrenin.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/hesaplamalar/kira-artis-hesaplama"
                  className="inline-flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-black text-white transition hover:bg-blue-500"
                >
                  Kira artışını hesapla
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>

                <a
                  href="#2026-orani"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
                >
                  Güncel oranı gör
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {[
                  "TÜFE üst sınırı",
                  "Konut ve iş yeri",
                  "Beş yıl kuralı",
                  "Gerçek örnekler",
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
                        Temmuz 2026 üst sınırı
                      </p>
                      <h2 className="mt-2 text-2xl font-black text-slate-950">
                        TÜFE 12 aylık ortalama
                      </h2>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Percent className="h-7 w-7" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-7 rounded-2xl bg-slate-100 p-6 text-center">
                    <p className="text-sm font-bold text-slate-500">
                      Haziran 2026 verisi
                    </p>
                    <p className="mt-2 text-5xl font-black text-blue-700">
                      %{JULY_2026_RATE.toLocaleString("tr-TR")}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">
                    Bu oran, Temmuz 2026 döneminde yenilenen ve genel kurala
                    tabi sözleşmeler için yasal üst sınır olarak dikkate alınır.
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
                Ev sahibi ve kiracıların güncel kira artış kuralına hızlıca
                ulaşmasına yardımcı olun.
              </p>

              <ShareButtons
                title={PAGE_TITLE}
                description={PAGE_DESCRIPTION}
              />
            </div>
          </aside>

          <article className="min-w-0">
            <CalculatorContentSection
              id="kira-artisi-nedir"
              title="Kira artışı nedir?"
            >
              <Lead>
                Kira artışı, devam eden bir kira sözleşmesinde yeni kira
                döneminde uygulanacak aylık bedelin belirlenmesidir.
              </Lead>

              <p>
                Kira artışı çoğunlukla sözleşmenin yıl dönümünde yapılır.
                Artışın oranı yalnızca tarafların istediği herhangi bir rakam
                değildir. Konut ve çatılı iş yeri kiralarında Türk Borçlar
                Kanunu, tarafların anlaşabileceği oran için bir üst sınır
                belirler.
              </p>

              <p>
                Genel kurala göre bu üst sınır, tüketici fiyat endeksinin bir
                önceki kira yılındaki on iki aylık ortalamalara göre değişim
                oranıdır. Sözleşmede daha düşük bir oran bulunuyorsa düşük oran
                uygulanabilir; yasal üst sınırı aşan bölüm geçerli kabul
                edilmez.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={CalendarDays} title="Yenileme tarihi">
                  <p>
                    Artışın hangi TÜFE verisiyle hesaplanacağını belirleyen temel
                    tarihtir.
                  </p>
                </FeatureCard>

                <FeatureCard icon={FileText} title="Sözleşme oranı">
                  <p>
                    Sözleşmedeki oran yasal sınırdan düşükse genellikle bu oran
                    dikkate alınır.
                  </p>
                </FeatureCard>

                <FeatureCard icon={Percent} title="TÜFE üst sınırı">
                  <p>
                    Tarafların artış anlaşmasının geçebileceği en yüksek genel
                    sınırı gösterir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="2026-orani"
              title="2026 kira artış oranı kaçtır?"
            >
              <Lead>
                Kira artış oranı yıl boyunca sabit değildir. Sözleşmenin
                yenilendiği ayda mevcut olan son TÜİK verisine göre değişir.
              </Lead>

              <p>
                TÜİK tarafından açıklanan Haziran 2026 tüketici fiyat endeksi
                verisinde on iki aylık ortalamalara göre değişim oranı yüzde
                32,03 olarak gerçekleşmiştir. Bu nedenle Temmuz 2026 döneminde
                yenilenen ve genel kurala tabi kira sözleşmelerinde yüzde 32,03
                oranı yasal üst sınır olarak dikkate alınır.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <BadgeCheck
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Temmuz 2026 örneği
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-blue-900">
                      Mevcut aylık kira 20.000 TL ise yüzde 32,03 üst sınırla
                      artış tutarı 6.406 TL, yeni aylık kira 26.406 TL olur.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Mevcut kira</th>
                      <th className="px-5 py-4">Artış oranı</th>
                      <th className="px-5 py-4">Artış tutarı</th>
                      <th className="px-5 py-4">Yeni kira</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {exampleRows.map((row) => (
                      <tr key={row.current}>
                        <td className="px-5 py-4 font-black text-slate-950">
                          {row.current}
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-700">
                          {row.rate}
                        </td>
                        <td className="px-5 py-4 text-slate-700">
                          {row.increase}
                        </td>
                        <td className="px-5 py-4 font-black text-emerald-700">
                          {row.newRent}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Info
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    Temmuz 2026 oranı, yalnızca yenilemesi bu döneme denk gelen
                    sözleşmeler açısından örnektir. Başka aylarda yenilenen
                    sözleşmelerde o tarihte açıklanmış güncel on iki aylık
                    ortalama TÜFE oranı kullanılmalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="tuik-verisi"
              title="TÜFE on iki aylık ortalama nedir?"
            >
              <Lead>
                Kira artışında kullanılan oran, aylık TÜFE veya bir önceki yılın
                aynı ayına göre yıllık TÜFE değildir.
              </Lead>

              <p>
                TÜFE on iki aylık ortalamalara göre değişim oranı, son on iki
                aylık endeks ortalamasının önceki on iki aylık dönemin
                ortalamasına kıyasla ne kadar değiştiğini gösterir. Bu yöntem,
                tek bir ayın ani hareketinden daha dengeli bir gösterge üretir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={TrendingUp} title="Yıllık TÜFE">
                  <p>
                    Bir ayın endeksini önceki yılın aynı ayıyla karşılaştırır.
                    Kira üst sınırında kullanılan temel oran değildir.
                  </p>
                </FeatureCard>

                <FeatureCard icon={CalendarDays} title="Aylık TÜFE">
                  <p>
                    Endeksin bir önceki aya göre değişimini gösterir. Kira
                    artış oranı olarak doğrudan kullanılmaz.
                  </p>
                </FeatureCard>

                <FeatureCard icon={Scale} title="12 aylık ortalama">
                  <p>
                    Kanundaki genel kira artış üst sınırında esas alınan
                    göstergedir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="hesaplama-formulu"
              title="Kira artışı nasıl hesaplanır?"
            >
              <Lead>
                Kira artış tutarı mevcut kira ile uygulanacak oranın çarpılması,
                yeni kira ise artış tutarının mevcut kiraya eklenmesiyle bulunur.
              </Lead>

              <div className="grid gap-5 xl:grid-cols-2">
                <FormulaBox
                  title="Kira artış tutarı"
                  formula="Artış Tutarı = Mevcut Kira × Artış Oranı ÷ 100"
                  description="Oran yüzde biçimindeyse 100'e bölünerek ondalık değere çevrilir."
                />

                <FormulaBox
                  title="Yeni aylık kira"
                  formula="Yeni Kira = Mevcut Kira + Artış Tutarı"
                  description="Doğrudan Mevcut Kira × (1 + Oran ÷ 100) formülü de kullanılabilir."
                />
              </div>

              <h3 className="text-2xl font-black text-slate-950">
                20.000 TL kira için adım adım hesaplama
              </h3>

              <ol className="space-y-4">
                {[
                  "Mevcut aylık kirayı belirleyin: 20.000 TL.",
                  "Uygulanacak oranı belirleyin: %32,03.",
                  "Artış tutarını hesaplayın: 20.000 × 32,03 ÷ 100 = 6.406 TL.",
                  "Artışı mevcut kiraya ekleyin: 20.000 + 6.406 = 26.406 TL.",
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
              title="Kira artışı örnek hesaplamaları"
            >
              <Lead>
                Aynı oran farklı kira tutarlarında farklı artış miktarları
                oluşturur. Bu nedenle oran ile TL karşılığını birlikte
                değerlendirmek gerekir.
              </Lead>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 1
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    12.000 TL kira
                  </h3>

                  <div className="mt-5 space-y-3">
                    <p>Artış: 12.000 × 0,3203 = 3.843,60 TL</p>
                    <p className="text-xl font-black text-emerald-700">
                      Yeni kira: 15.843,60 TL
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 2
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    18.500 TL kira
                  </h3>

                  <div className="mt-5 space-y-3">
                    <p>Artış: 18.500 × 0,3203 = 5.925,55 TL</p>
                    <p className="text-xl font-black text-emerald-700">
                      Yeni kira: 24.425,55 TL
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 3
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    22.000 TL kira
                  </h3>

                  <div className="mt-5 space-y-3">
                    <p>Artış: 22.000 × 0,3203 = 7.046,60 TL</p>
                    <p className="text-xl font-black text-emerald-700">
                      Yeni kira: 29.046,60 TL
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <p className="text-sm font-bold uppercase tracking-wide text-blue-700">
                    Örnek 4
                  </p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    35.000 TL kira
                  </h3>

                  <div className="mt-5 space-y-3">
                    <p>Artış: 35.000 × 0,3203 = 11.210,50 TL</p>
                    <p className="text-xl font-black text-emerald-700">
                      Yeni kira: 46.210,50 TL
                    </p>
                  </div>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="konut-kirasi"
              title="Konut kira artışı nasıl belirlenir?"
            >
              <Lead>
                Konut kiralarında ilk beş yıllık dönemde yenilenen kira bedeline
                ilişkin anlaşmalar, genel olarak on iki aylık ortalama TÜFE
                oranını aşamaz.
              </Lead>

              <p>
                Sözleşmede “her yıl yüzde 20 artış” yazıyor ve ilgili dönemde
                TÜFE üst sınırı yüzde 32,03 ise sözleşmedeki yüzde 20 oranı
                uygulanır. Sözleşmede yüzde 50 yazıyorsa artışın genel üst
                sınırı yüzde 32,03 olur.
              </p>

              <div className="grid gap-5 md:grid-cols-2">
                <FeatureCard icon={Home} title="Daha düşük sözleşme oranı">
                  <p>
                    Sözleşme oranı TÜFE üst sınırından düşükse düşük oran
                    kiracı lehine sonuç doğurur.
                  </p>
                </FeatureCard>

                <FeatureCard icon={ShieldCheck} title="Daha yüksek sözleşme oranı">
                  <p>
                    Sözleşmedeki yüksek oran, ilk beş yıllık genel dönemde TÜFE
                    üst sınırını aşamaz.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="isyeri-kirasi"
              title="İş yeri kira artışı nasıl hesaplanır?"
            >
              <Lead>
                Çatılı iş yeri kiralarında da Türk Borçlar Kanunu'nun on iki
                aylık ortalama TÜFE üst sınırı genel olarak uygulanır.
              </Lead>

              <p>
                İş yeri sözleşmelerinde ciro kirası, döviz, ortak gider,
                stopaj, KDV veya özel artış maddeleri bulunabilir. Bu kalemler
                matematiksel kira artış hesabından ayrı değerlendirilmelidir.
              </p>

              <p>
                Örneğin aylık çıplak iş yeri kirası 50.000 TL ve uygulanacak
                oran yüzde 32,03 ise artış tutarı 16.015 TL, yeni çıplak kira
                66.015 TL olur. Vergisel yükümlülükler bu tutara ayrıca etki
                edebilir.
              </p>

              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex gap-4">
                  <Building2
                    className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-amber-900">
                    İş yeri sözleşmelerinde özel hükümler daha karmaşık
                    olabileceği için sözleşmenin tamamı incelenmeden yalnızca
                    genel oranla hukuki sonuca varılmamalıdır.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sozlesme-orani"
              title="Sözleşmedeki kira artış oranı nasıl uygulanır?"
            >
              <Lead>
                Sözleşmedeki oran ile kanuni üst sınır birlikte değerlendirilir;
                otomatik olarak her zaman TÜFE oranı uygulanmaz.
              </Lead>

              <div className="overflow-x-auto rounded-3xl border border-slate-200">
                <table className="w-full min-w-[760px] text-left">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4">Sözleşme oranı</th>
                      <th className="px-5 py-4">TÜFE üst sınırı</th>
                      <th className="px-5 py-4">Genel sonuç</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">%20</td>
                      <td className="px-5 py-4">%32,03</td>
                      <td className="px-5 py-4 font-black text-emerald-700">
                        %20 uygulanır
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">%32,03</td>
                      <td className="px-5 py-4">%32,03</td>
                      <td className="px-5 py-4 font-black text-emerald-700">
                        %32,03 uygulanır
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">%50</td>
                      <td className="px-5 py-4">%32,03</td>
                      <td className="px-5 py-4 font-black text-emerald-700">
                        Üst sınır %32,03
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-4 font-black text-slate-950">
                        Artış maddesi yok
                      </td>
                      <td className="px-5 py-4">%32,03</td>
                      <td className="px-5 py-4 text-slate-700">
                        Anlaşma veya şartları varsa hâkim belirlemesi
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="yuzde-25-siniri"
              title="Yüzde 25 kira artış sınırı devam ediyor mu?"
            >
              <Lead>
                Konut kiraları için getirilen geçici yüzde 25 artış sınırı
                kalıcı bir kural değildi ve 1 Temmuz 2024'ü kapsayan dönemin
                ardından sona erdi.
              </Lead>

              <p>
                Geçici düzenleme 2 Temmuz 2023 ile 1 Temmuz 2024 tarihleri
                arasında yenilenen konut kira dönemlerini kapsıyordu. Bu
                tarihten sonraki yenilemelerde, yeni bir geçici sınırlama
                getirilmediği sürece Türk Borçlar Kanunu'nun on iki aylık
                ortalama TÜFE kuralı uygulanır.
              </p>

              <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6">
                <div className="flex gap-4">
                  <AlertTriangle
                    className="mt-1 h-6 w-6 shrink-0 text-rose-700"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="text-lg font-black text-rose-950">
                      Eski bilgiyi kullanmayın
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-rose-900">
                      Güncel kira artışı hesabında otomatik olarak yüzde 25
                      kullanmak yanlıştır. Yenileme tarihindeki güncel mevzuat
                      ve on iki aylık ortalama TÜFE oranı kontrol edilmelidir.
                    </p>
                  </div>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="bes-yil-kurali"
              title="Kirada beş yıl kuralı nedir?"
            >
              <Lead>
                Beş yıldan uzun süreli veya beş yıldan sonra yenilenen kira
                sözleşmelerinde yeni bedelin belirlenmesinde yalnızca TÜFE üst
                sınırıyla sınırlı farklı bir değerlendirme gündeme gelebilir.
              </Lead>

              <p>
                Türk Borçlar Kanunu'nun 344. maddesine göre hâkim, beş yıllık
                sürenin ardından kira bedelini belirlerken TÜFE değişim oranını,
                kiralananın durumunu, emsal kira bedellerini ve hakkaniyeti
                birlikte dikkate alabilir.
              </p>

              <p>
                Beş yılın dolması kirayı kendiliğinden çevredeki ilan fiyatına
                çıkarmaz. Taraflar yeni bedelde anlaşabilir veya gerekli
                şartlar varsa mahkemeden kira bedelinin tespiti istenebilir.
              </p>

              <div className="grid gap-5 md:grid-cols-3">
                <FeatureCard icon={CalendarDays} title="Süre">
                  <p>
                    Kira ilişkisinin başlangıcı ve uzama dönemleri doğru
                    hesaplanmalıdır.
                  </p>
                </FeatureCard>

                <FeatureCard icon={Building2} title="Emsal kiralar">
                  <p>
                    Benzer konum ve özellikteki gerçek kira değerleri dikkate
                    alınabilir.
                  </p>
                </FeatureCard>

                <FeatureCard icon={Scale} title="Hakkaniyet">
                  <p>
                    Hâkim yalnızca ilan fiyatlarına bağlı kalmadan somut olayı
                    değerlendirir.
                  </p>
                </FeatureCard>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="kira-tespit-davasi"
              title="Kira tespit davası nedir?"
            >
              <Lead>
                Kira tespit davası, yeni kira döneminde uygulanacak bedelin
                mahkeme tarafından belirlenmesinin istendiği dava türüdür.
              </Lead>

              <p>
                Dava açılabilmesi ile kararın hangi kira döneminden itibaren
                etkili olacağı aynı konu değildir. Sözleşmede artış hükmünün
                bulunması, dava tarihi ve yeni dönemden önce bildirim yapılması
                gibi unsurlar sonucu etkileyebilir.
              </p>

              <p>
                Kira ilişkisinin beş yılı aşması halinde emsal ve hakkaniyet
                değerlendirmesi öne çıkar. Beş yıldan önceki dönemlerde ise
                genel TÜFE sınırı belirleyicidir.
              </p>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex gap-4">
                  <Gavel
                    className="mt-1 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-900">
                    Dava süresi, arabuluculuk, ihtar ve yeni kira dönemine etki
                    gibi başlıklar somut olaya göre değişir. Hak kaybı
                    yaşamamak için hukuki destek alınması uygundur.
                  </p>
                </div>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="ara-zam"
              title="Kira döneminde ara zam yapılabilir mi?"
            >
              <Lead>
                Kira artışı genel olarak sözleşmenin yenileme döneminde yapılır;
                ev sahibi yalnızca piyasa yükseldiği için yıl ortasında tek
                taraflı ara zam uygulayamaz.
              </Lead>

              <p>
                Tarafların sonradan serbest iradeyle yeni bir anlaşma yapması
                ayrı bir durumdur. Ancak kiracının rızası olmadan, sözleşmede
                dayanağı bulunmayan bir ara artış talebi otomatik olarak
                bağlayıcı değildir.
              </p>

              <p>
                Aidat, yakıt, ortak alan veya hizmet giderlerindeki değişimler
                kira artışından farklı kalemlerdir. Bu giderlerin kime ait
                olduğu ve nasıl değişeceği sözleşme ile ilgili mevzuata göre
                ayrıca değerlendirilir.
              </p>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sik-hatalar"
              title="Kira artışı hesaplanırken sık yapılan hatalar"
            >
              <Lead>
                Yanlış TÜFE oranını seçmek veya sözleşmedeki düşük oranı gözden
                kaçırmak hesap sonucunu ve taraflar arasındaki uyuşmazlığı
                doğrudan etkileyebilir.
              </Lead>

              <div className="space-y-5">
                {[
                  {
                    title: "Yıllık TÜFE oranını kullanmak",
                    error:
                      "Bir önceki yılın aynı ayına göre açıklanan TÜFE oranını kira artış oranı sanmak.",
                    solution:
                      "On iki aylık ortalamalara göre değişim oranını kontrol edin.",
                  },
                  {
                    title: "Yüzde 25 sınırını hâlâ geçerli sanmak",
                    error:
                      "Geçici uygulamayı 2026 yenilemelerinde de kullanmak.",
                    solution:
                      "Yenileme tarihindeki güncel mevzuatı ve TÜFE üst sınırını esas alın.",
                  },
                  {
                    title: "Sözleşmedeki düşük oranı atlamak",
                    error:
                      "TÜFE üst sınırını zorunlu artış oranı gibi uygulamak.",
                    solution:
                      "Sözleşmede daha düşük oran varsa bu hükmü ayrıca değerlendirin.",
                  },
                  {
                    title: "Aidatı kiraya ekleyerek zam yapmak",
                    error:
                      "Kira, aidat ve yan giderleri tek matrah gibi kabul etmek.",
                    solution:
                      "Çıplak kira ile yan giderleri ayrı hesaplayın.",
                  },
                  {
                    title: "Beş yıl dolunca otomatik rayiç uygulamak",
                    error:
                      "İlan fiyatını doğrudan yeni kira saymak.",
                    solution:
                      "Anlaşma veya kira tespit süreci gerektiğini dikkate alın.",
                  },
                  {
                    title: "Yenileme ayını yanlış belirlemek",
                    error:
                      "Ödeme ayı ile sözleşmenin yeni kira dönemini karıştırmak.",
                    solution:
                      "Sözleşmenin başlangıç ve yenileme tarihlerini kontrol edin.",
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
                <Calculator className="h-8 w-8" aria-hidden="true" />

                <h3 className="mt-5 text-3xl font-black">
                  Yeni kira bedelini saniyeler içinde bulun
                </h3>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Mevcut kira ve uygulanacak oranı girerek artış tutarını ve
                  yeni aylık kira bedelini anında hesaplayın.
                </p>

                <Link
                  href="/hesaplamalar/kira-artis-hesaplama"
                  className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-black text-blue-700 transition hover:bg-blue-50"
                >
                  Kira artış hesaplama aracına git
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </CalculatorContentSection>

            <CalculatorContentSection
              id="sss"
              title="Kira artışı hakkında sık sorulan sorular"
            >
              <Lead>
                Güncel TÜFE oranı, sözleşme hükümleri, beş yıl kuralı ve
                yenileme dönemi hakkında en çok sorulan soruların yanıtlarını
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
                    <Landmark className="h-4 w-4" aria-hidden="true" />
                    Güncel TÜFE yöntemi
                  </div>

                  <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                    Kira artışınızı şimdi hesaplayın
                  </h2>

                  <p className="mt-4 max-w-2xl leading-8 text-slate-300">
                    Mevcut kira bedelini ve uygulanacak oranı girin; artış
                    tutarını ve yeni aylık kirayı hızlıca görüntüleyin.
                  </p>
                </div>

                <Link
                  href="/hesaplamalar/kira-artis-hesaplama"
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