import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ChevronRight,
  Info,
  Lightbulb,
  ListChecks,
  ArrowRight,
  Banknote,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Landmark,
  Percent,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import DepositRenewalCalculator from "@/components/calculators/DepositRenewalCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/mevduat-faiz-yenileme";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Mevduat faiz yenileme aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

const pageTitle = "Mevduat Faiz Yenileme Hesaplama";
const pageDescription =
  "Vadeli mevduatınızı vade sonunda faiz kazancıyla birlikte yeniden bağlamanız halinde oluşacak toplam kazancı, bileşik faiz avantajını ve dönemsel yenileme tablosunu hesaplayın.";
const canonicalUrl = `https://https://hesaprehberionline.com${canonicalPath}`;

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Mevduat Faiz Yenileme Hesaplama | Bileşik Getiri",
  description: pageDescription,
  path: canonicalPath,
  openGraph: {
    title: "Mevduat Faiz Yenileme | Bileşik Kazanç Hesaplama",
    description:
      "Faizi ana paraya ekleyerek mevduatınızı yenilediğinizde oluşacak toplam bakiyeyi, dönemsel kazancı ve efektif getiriyi hesaplayın.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mevduat Faiz Yenileme Hesaplama",
    description:
      "Vadeli mevduat yenilemelerinde bileşik büyümeyi ve toplam net kazancı ücretsiz hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Faiz yenileme hesaplama aracı" },
  { id: "kullanim-rehberi", label: "Hesaplama nasıl kullanılır?" },
  { id: "yenileme-nedir", label: "Mevduat faiz yenileme nedir?" },
  { id: "hesaplama-formulu", label: "Yenileme hesaplama formülü" },
  { id: "bilesik-faiz", label: "Bileşik faiz avantajı" },
  { id: "basit-bilesik", label: "Basit ve bileşik faiz farkı" },
  { id: "stopaj-etkisi", label: "Stopajın etkisi" },
  { id: "degisken-faiz", label: "Değişken faizle yenileme" },
  { id: "vade-etkisi", label: "Vade süresinin etkisi" },
  { id: "efektif-getiri", label: "Efektif yıllık net getiri" },
  { id: "donem-tablosu", label: "Dönemsel yenileme tablosu" },
  { id: "faiz-senaryolari", label: "Faiz oranı senaryoları" },
  { id: "gun-esasi", label: "360 ve 365 gün esası" },
  { id: "reel-getiri", label: "Reel getiri ve enflasyon" },
  { id: "dikkat-edilecekler", label: "Dikkat edilmesi gerekenler" },
  { id: "ornek-senaryo", label: "Örnek yenileme senaryosu" },
  { id: "sik-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const renewalRows = [
  { period: "1. dönem", opening: "250.000 TL", rate: "%45", gross: "9.863 TL", withholding: "1.479 TL", net: "8.384 TL", closing: "258.384 TL" },
  { period: "2. dönem", opening: "258.384 TL", rate: "%45", gross: "10.194 TL", withholding: "1.529 TL", net: "8.665 TL", closing: "267.049 TL" },
  { period: "3. dönem", opening: "267.049 TL", rate: "%45", gross: "10.536 TL", withholding: "1.580 TL", net: "8.956 TL", closing: "276.005 TL" },
  { period: "4. dönem", opening: "276.005 TL", rate: "%45", gross: "10.889 TL", withholding: "1.633 TL", net: "9.256 TL", closing: "285.261 TL" },
  { period: "5. dönem", opening: "285.261 TL", rate: "%45", gross: "11.254 TL", withholding: "1.688 TL", net: "9.566 TL", closing: "294.827 TL" },
  { period: "6. dönem", opening: "294.827 TL", rate: "%45", gross: "11.631 TL", withholding: "1.745 TL", net: "9.886 TL", closing: "304.713 TL" },
];

const rateScenarioRows = [
  { scenario: "Faiz düşüyor", rates: "%45 → %42 → %39 → %36", finalBalance: "286.940 TL", comment: "Bileşik büyüme yavaşlar" },
  { scenario: "Faiz sabit", rates: "%45 → %45 → %45 → %45", finalBalance: "287.949 TL", comment: "Dengeli bileşik büyüme" },
  { scenario: "Faiz yükseliyor", rates: "%45 → %48 → %51 → %54", finalBalance: "289.004 TL", comment: "Son dönem katkısı artar" },
  { scenario: "Dalgalı faiz", rates: "%45 → %40 → %50 → %43", finalBalance: "287.772 TL", comment: "Dönem sırası sonucu etkiler" },
];

const dayBasisRows = [
  { basis: "360 gün", gross: "10.000 TL", withholding: "1.500 TL", net: "8.500 TL", closing: "258.500 TL" },
  { basis: "365 gün", gross: "9.863 TL", withholding: "1.479 TL", net: "8.384 TL", closing: "258.384 TL" },
];

const faqItems = [
  {
    question: "Mevduat faiz yenileme nedir?",
    answer:
      "Mevduat faiz yenileme, vadeli hesabın vade sonunda oluşan net faiz kazancıyla birlikte yeniden vadeye bağlanmasıdır. Böylece sonraki dönemde faiz, yalnızca ilk ana para üzerinden değil, önceki dönem kazancı eklenmiş yeni bakiye üzerinden hesaplanır.",
  },
  {
    question: "Mevduat yenileme hesaplaması nasıl yapılır?",
    answer:
      "Her dönem için başlangıç bakiyesi, yıllık faiz oranı ve vade gün sayısına göre brüt faiz bulunur. Stopaj kesildikten sonra kalan net faiz bakiyeye eklenir ve yeni dönem bu tutarla başlar.",
  },
  {
    question: "Faizin ana paraya eklenmesi ne anlama gelir?",
    answer:
      "Vade sonunda elde edilen net faiz kazancının çekilmeden ana paraya dahil edilmesi anlamına gelir. Sonraki vade döneminde faiz daha yüksek bir bakiye üzerinden hesaplanır.",
  },
  {
    question: "Bileşik faiz avantajı nedir?",
    answer:
      "Bileşik faiz avantajı, önceki dönem kazançlarının da sonraki dönemlerde faiz kazanması sonucunda oluşan ek getiridir.",
  },
  {
    question: "Basit faiz ile yenilenen mevduat arasındaki fark nedir?",
    answer:
      "Basit faiz senaryosunda her dönemde faiz yalnızca ilk ana para üzerinden hesaplanır. Yenilenen mevduatta ise önceki dönemlerin net faiz kazançları ana paraya eklenir.",
  },
  {
    question: "Her yenileme döneminde faiz oranı değişebilir mi?",
    answer:
      "Evet. Bankaların mevduat faiz oranları piyasa koşullarına göre değişebilir. Hesaplama aracındaki değişken faiz seçeneğiyle her vade için farklı yıllık faiz oranı girebilirsiniz.",
  },
  {
    question: "Stopaj her vade sonunda mı kesilir?",
    answer:
      "Genellikle mevduat faiz geliri tahakkuk ettiğinde stopaj uygulanır. Hesaplama aracı her vade dönemindeki brüt faiz üzerinden ayrı stopaj kesintisi varsayar.",
  },
  {
    question: "Yenileme sayısı neyi ifade eder?",
    answer:
      "Yenileme sayısı, mevduatın aynı veya farklı faiz oranlarıyla kaç ayrı vade dönemi boyunca yeniden bağlanacağını gösterir.",
  },
  {
    question: "Toplam süre nasıl hesaplanır?",
    answer:
      "Bir vadenin gün sayısı toplam yenileme dönemi sayısıyla çarpılır. Örneğin 32 günlük vade 6 dönem yenilenirse toplam süre 192 gün olur.",
  },
  {
    question: "Efektif yıllık net getiri nedir?",
    answer:
      "Efektif yıllık net getiri, bileşik yenileme sonucunda oluşan toplam kazancın yıllık eşdeğer oranıdır. Stopaj sonrası gerçek bileşik büyümeyi yıllık ölçekte gösterir.",
  },
  {
    question: "360 ve 365 gün hesabı arasındaki fark nedir?",
    answer:
      "Faiz formülünde vade gün sayısının bölündüğü yıl uzunluğu değişir. Aynı faiz oranında 360 gün esası, 365 gün esasına göre genellikle biraz daha yüksek dönemsel faiz üretir.",
  },
  {
    question: "Vade sonunda faiz çekilirse bileşik kazanç oluşur mu?",
    answer:
      "Hayır. Faiz kazancı hesaptan çekilirse sonraki dönemde yalnızca başlangıç ana parası faiz kazanır ve bileşik faiz etkisi oluşmaz.",
  },
  {
    question: "Faiz oranı her dönem düşerse toplam kazanç nasıl etkilenir?",
    answer:
      "Sonraki dönem faiz oranları düştükçe bileşik büyüme yavaşlar. Ancak önceki dönemlerde kazanılan faiz ana paraya eklendiği için bakiye yine büyümeye devam edebilir.",
  },
  {
    question: "Faiz oranı her dönem artarsa toplam getiri yükselir mi?",
    answer:
      "Diğer koşullar aynı kaldığında artan faiz oranları dönemsel kazancı ve nihai bakiyeyi yükseltir.",
  },
  {
    question: "Ana para arttıkça bileşik faiz avantajı artar mı?",
    answer:
      "Evet. Aynı vade, faiz ve stopaj koşullarında daha yüksek ana para daha yüksek TL cinsinden bileşik faiz avantajı oluşturur.",
  },
  {
    question: "Kısa vadeli mevduatı sık yenilemek avantajlı mıdır?",
    answer:
      "Bu durum faiz oranlarının yönüne, stopaj koşullarına, bankanın yenileme faizine ve alternatif yatırım getirilerine bağlıdır. Sık yenileme her zaman daha yüksek kazanç garantisi vermez.",
  },
  {
    question: "Otomatik yenileme ile manuel yenileme arasında fark var mı?",
    answer:
      "Otomatik yenilemede banka vade sonunda ürünü kendi koşullarına göre tekrar bağlayabilir. Manuel yenilemede farklı banka, ürün veya faiz oranı seçme imkânı bulunabilir.",
  },
  {
    question: "Hesaplama sonucu banka sonucuyla birebir aynı olur mu?",
    answer:
      "Her zaman olmaz. Bankaların valör tarihi, gün hesabı, faiz tahakkuku, küsurat yuvarlama ve stopaj uygulamaları farklılık gösterebilir.",
  },
  {
    question: "Bu hesaplama yatırım tavsiyesi midir?",
    answer:
      "Hayır. Hesaplama yalnızca bilgilendirme ve farklı mevduat senaryolarını karşılaştırma amacıyla hazırlanmıştır.",
  },
  {
    question: "Yenileme dönemlerinin sırası toplam kazancı etkiler mi?",
    answer:
      "Evet. Özellikle faiz oranlarının dönemden döneme değiştiği senaryolarda yüksek oranların erken veya geç uygulanması nihai bakiyeyi değiştirebilir.",
  },
  {
    question: "Bileşik mevduat getirisi enflasyondan arındırılabilir mi?",
    answer:
      "Evet. Nihai net bakiye, aynı toplam süreye uyarlanmış enflasyon oranına bölünerek yaklaşık reel değer ve satın alma gücü değişimi hesaplanabilir.",
  },
  {
    question: "Yenileme sırasında ana paraya ek para yatırılabilir mi?",
    answer:
      "Bazı bankalar vade sonunda ekleme yapılmasına izin verir. Ancak hesaplama aracı standart senaryoda yalnızca net faiz kazancının ana paraya eklendiğini varsayar.",
  },
  {
    question: "Kısmi faiz çekimi bileşik getiriyi nasıl etkiler?",
    answer:
      "Net faizin bir bölümü çekilirse yalnızca kalan bölüm ana paraya eklenir. Bu nedenle tam yeniden yatırım senaryosuna göre bileşik büyüme daha düşük olur.",
  },
  {
    question: "Yenileme işlemi için aynı bankada kalmak zorunlu mudur?",
    answer:
      "Hayır. Vade sonunda farklı banka veya ürün seçilebilir. Karşılaştırmada net faiz, stopaj, valör, kampanya şartları ve hesap açılış koşulları birlikte değerlendirilmelidir.",
  },
];

const faqStructuredData = {
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

const webApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: pageTitle,
  description: pageDescription,
  url: canonicalUrl,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  inLanguage: "tr-TR",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
    url: "https://https://hesaprehberionline.com",
  },
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://https://hesaprehberionline.com" },
    { "@type": "ListItem", position: 2, name: "Hesaplamalar", item: "https://https://hesaprehberionline.com/hesaplamalar" },
    { "@type": "ListItem", position: 3, name: "Mevduat Faiz Yenileme", item: canonicalUrl },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: pageTitle,
  description: pageDescription,
  mainEntityOfPage: canonicalUrl,
  inLanguage: "tr-TR",
  author: { "@type": "Organization", name: "HesapRehberi" },
  publisher: { "@type": "Organization", name: "HesapRehberi", url: "https://https://hesaprehberionline.com" },
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Mevduat faiz yenileme nasıl hesaplanır?",
  description:
    "Vadeli mevduatın net faiz kazancıyla birlikte yeniden bağlanması halinde oluşacak bileşik getiriyi hesaplama adımları.",
  totalTime: "PT2M",
  step: [
    { "@type": "HowToStep", position: 1, name: "Ana parayı girin", text: "İlk vade döneminde değerlendireceğiniz başlangıç tutarını yazın." },
    { "@type": "HowToStep", position: 2, name: "Vade ve yenileme sayısını seçin", text: "Her vadenin gün sayısını ve toplam dönem sayısını belirleyin." },
    { "@type": "HowToStep", position: 3, name: "Faiz ve stopajı girin", text: "Sabit veya dönemsel faiz oranlarıyla stopaj oranını tanımlayın." },
    { "@type": "HowToStep", position: 4, name: "Bileşik sonucu inceleyin", text: "Dönemsel net faizleri, nihai bakiyeyi ve bileşik faiz avantajını değerlendirin." },
  ],
};

const relatedCalculators = getRelatedCalculators(canonicalPath, 4);

export default function DepositRenewalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationStructuredData),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
      />

      <main className="min-h-screen bg-slate-50">
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <Breadcrumb
              items={[
                {
                  label: "Ana Sayfa",
                  href: "/",
                },
                {
                  label: "Hesaplamalar",
                  href: "/hesaplamalar",
                },
                {
                  label: "Mevduat",
                  href: "/hesaplamalar?category=Mevduat",
                },
                {
                  label: "Mevduat Faiz Yenileme",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-violet-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz bileşik mevduat hesaplama aracı
                </div>

                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Mevduat Faiz Yenileme Hesaplama
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-violet-100 sm:text-lg">
                  Vadeli mevduatınızı vade sonunda net faiz kazancıyla birlikte
                  yeniden bağladığınızda oluşabilecek toplam bakiyeyi, bileşik
                  faiz avantajını ve her dönemin ayrıntılı sonucunu hesaplayın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroFeature text="Sabit veya değişken faiz" />
                  <HeroFeature text="Dönemsel yenileme tablosu" />
                  <HeroFeature text="Bileşik faiz avantajı" />
                  <HeroFeature text="Efektif yıllık getiri" />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-700 shadow-xl">
                  <RefreshCw className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Faiz kazancını yeniden değerlendirin
                </h2>

                <p className="mt-3 text-sm leading-7 text-violet-100">
                  Her vade sonunda net faizi ana paraya ekleyerek mevduatın
                  dönemler boyunca nasıl büyüyebileceğini inceleyin.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <MiniMetric label="Yöntem" value="Bileşik" />
                  <MiniMetric label="Senaryo" value="Değişken" />
                  <MiniMetric label="Sonuç" value="Dönemsel" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="hesaplama-araci" className="scroll-mt-28 mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <DepositRenewalCalculator />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Bu aracı faydalı buldunuz mu?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Mevduat faiz yenileme hesaplama aracını paylaşabilirsiniz.
              </p>
            </div>

            <ShareButtons
              title={pageTitle}
              description={pageDescription}
              url={canonicalUrl}
            />
          </div>
        </section>

        <section id="kullanim-rehberi" className="scroll-mt-28 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
                Kullanım rehberi
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat faiz yenileme hesaplama nasıl yapılır?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Başlangıç ana paranızı, vade süresini, yenileme sayısını,
                stopajı ve faiz oranını girerek her vade sonunda oluşabilecek
                yeni bakiyeyi hesaplayabilirsiniz.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <GuideCard
                number="01"
                icon={<Landmark className="h-6 w-6" />}
                title="Ana parayı girin"
                description="İlk vade döneminde değerlendireceğiniz başlangıç tutarını yazın."
              />

              <GuideCard
                number="02"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vade ve dönem seçin"
                description="Her vadenin gün sayısını ve toplam yenileme sayısını belirleyin."
              />

              <GuideCard
                number="03"
                icon={<Percent className="h-6 w-6" />}
                title="Faiz oranını belirleyin"
                description="Sabit faiz kullanın veya her dönem için farklı oran girin."
              />

              <GuideCard
                number="04"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Sonuçları inceleyin"
                description="Toplam bakiye, net kazanç ve bileşik faiz avantajını karşılaştırın."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="space-y-10">
              <ContentSection id="yenileme-nedir"
                icon={<RefreshCw className="h-6 w-6" />}
                title="Mevduat faiz yenileme nedir?"
              >
                <p>
                  Vadeli mevduat hesabı açıldığında ana para belirli bir süre
                  boyunca yıllık faiz oranı üzerinden değerlendirilir. Vade
                  sonunda elde edilen faiz kazancından stopaj kesilir ve kalan
                  net faiz hesaba aktarılır.
                </p>

                <p>
                  Hesap sahibi bu net faiz kazancını çekmek yerine ana paraya
                  ekleyerek mevduatı tekrar vadeye bağlarsa faiz yenileme
                  işlemi gerçekleşir. Böylece sonraki dönem daha yüksek bir
                  bakiye üzerinden faiz kazanılır.
                </p>
              </ContentSection>

              <ContentSection id="hesaplama-formulu"
                icon={<Calculator className="h-6 w-6" />}
                title="Mevduat yenileme hesaplama formülü"
              >
                <p>
                  Her yenileme döneminde önce brüt faiz, ardından stopaj ve net
                  faiz hesaplanır. Net faiz dönem sonu bakiyesine eklenerek
                  sonraki vadenin başlangıç tutarını oluşturur.
                </p>

                <FormulaBox>
                  <p>
                    Brüt faiz = Dönem başı bakiye × Yıllık faiz oranı ×
                    (Vade günü ÷ Gün esası)
                  </p>

                  <p className="mt-3">
                    Stopaj = Brüt faiz × Stopaj oranı
                  </p>

                  <p className="mt-3">
                    Net faiz = Brüt faiz − Stopaj
                  </p>

                  <p className="mt-3">
                    Dönem sonu bakiye = Dönem başı bakiye + Net faiz
                  </p>

                  <p className="mt-3">
                    Yeni dönem başlangıcı = Önceki dönem sonu bakiyesi
                  </p>
                </FormulaBox>
              </ContentSection>

              <ContentSection id="bilesik-faiz"
                icon={<TrendingUp className="h-6 w-6" />}
                title="Bileşik faiz avantajı nasıl oluşur?"
              >
                <p>
                  İlk dönemde faiz yalnızca başlangıç ana parası üzerinden
                  kazanılır. İkinci dönemde ise ilk dönemin net faizi ana
                  paraya eklendiği için daha yüksek bir bakiye faiz kazanır.
                </p>

                <p>
                  Bu süreç her yenilemede devam eder. Önceki dönemlerde
                  kazanılan faizlerin de faiz üretmesine bileşik faiz etkisi
                  denir.
                </p>
              </ContentSection>

              <ContentSection id="basit-bilesik"
                icon={<Banknote className="h-6 w-6" />}
                title="Basit faiz ile yenilenen mevduat farkı"
              >
                <p>
                  Basit faiz hesabında her dönemde kazanç yalnızca ilk ana para
                  üzerinden hesaplanır. Faiz kazancı ana paraya eklenmez.
                </p>

                <p>
                  Yenilenen mevduatta ise her vade sonunda net faiz bakiyeye
                  eklenir. Bu nedenle vade sayısı arttıkça basit faiz ile
                  bileşik mevduat arasındaki fark büyüyebilir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">
                            Özellik
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            Basit faiz
                          </th>

                          <th className="px-5 py-4 font-semibold">
                            Yenilenen mevduat
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-200 bg-white">
                        <ComparisonRow
                          feature="Faiz hesaplanan tutar"
                          simple="İlk ana para"
                          compound="Güncel dönem bakiyesi"
                        />

                        <ComparisonRow
                          feature="Önceki faizlerin etkisi"
                          simple="Yeni faiz kazandırmaz"
                          compound="Sonraki dönemde faiz kazanır"
                        />

                        <ComparisonRow
                          feature="Uzun dönem sonucu"
                          simple="Doğrusal büyüme"
                          compound="Bileşik büyüme"
                        />

                        <ComparisonRow
                          feature="Toplam kazanç"
                          simple="Genellikle daha düşük"
                          compound="Genellikle daha yüksek"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection id="stopaj-etkisi"
                icon={<Scale className="h-6 w-6" />}
                title="Stopaj yenileme kazancını nasıl etkiler?"
              >
                <p>
                  Mevduat faiz gelirinden yapılan stopaj, her dönem elde edilen
                  brüt faiz kazancını azaltır. Ana paraya eklenen tutar brüt
                  faiz değil, stopaj sonrası net faizdir.
                </p>

                <p>
                  Stopaj oranı yükseldikçe her dönem bakiyeye eklenen net kazanç
                  azalır. Bu nedenle bileşik büyüme hızı da düşer.
                </p>
              </ContentSection>

              <ContentSection id="degisken-faiz"
                icon={<Percent className="h-6 w-6" />}
                title="Değişken faiz oranıyla yenileme"
              >
                <p>
                  Mevduat faiz oranları her vade sonunda aynı kalmayabilir.
                  Piyasa faizleri, bankanın kampanyaları ve ürün koşulları
                  nedeniyle yenileme oranı değişebilir.
                </p>

                <p>
                  Hesaplama aracındaki değişken faiz seçeneğiyle her dönem için
                  ayrı yıllık faiz oranı girebilir ve faizlerin düşmesi ya da
                  yükselmesi durumunda oluşacak toplam bakiyeyi görebilirsiniz.
                </p>
              </ContentSection>

              <ContentSection id="vade-etkisi"
                icon={<Clock3 className="h-6 w-6" />}
                title="Vade süresi sonucu nasıl değiştirir?"
              >
                <p>
                  Vade gün sayısı, yıllık faiz oranının ilgili döneme ne kadar
                  yansıyacağını belirler. Daha uzun vade aynı yıllık faiz
                  oranında tek dönem için daha yüksek faiz kazancı üretir.
                </p>

                <p>
                  Buna karşılık kısa vadeler faiz oranı değişikliklerine daha
                  sık uyum sağlama imkânı verebilir. Yenileme kararında yalnızca
                  vade süresine değil, beklenen faiz yönüne de bakılmalıdır.
                </p>
              </ContentSection>

              <ContentSection id="efektif-getiri"
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Efektif yıllık net getiri nedir?"
              >
                <p>
                  Efektif yıllık net getiri, yenileme dönemleri sonunda oluşan
                  bileşik büyümenin yıllık eşdeğerini gösterir.
                </p>

                <p>
                  Bu oran stopaj sonrası nihai bakiyeye göre hesaplandığı için
                  yalnızca ilan edilen brüt faiz oranına bakmaktan daha kapsamlı
                  bir karşılaştırma sağlar.
                </p>
              </ContentSection>

              <ContentSection id="dikkat-edilecekler"
                icon={<WalletCards className="h-6 w-6" />}
                title="Mevduat yenilenirken nelere dikkat edilmelidir?"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Yenileme faizinin ilk dönem faizinden farklı olabileceğini unutmayın." />
                  <CheckItem text="Stopaj oranının vade yapısına göre değişip değişmediğini kontrol edin." />
                  <CheckItem text="Bankanın otomatik yenileme koşullarını inceleyin." />
                  <CheckItem text="Vade sonunda uygulanacak güncel faiz oranını öğrenin." />
                  <CheckItem text="Faizin ana paraya eklenip eklenmediğini kontrol edin." />
                  <CheckItem text="360 veya 365 gün hesabının hangisinin kullanıldığını öğrenin." />
                  <CheckItem text="Valör ve vade sonu tarihlerini dikkate alın." />
                  <CheckItem text="Farklı bankaların net getiri sonuçlarını karşılaştırın." />
                </div>
              </ContentSection>

              <ContentSection id="ornek-senaryo"
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Örnek mevduat yenileme senaryosu"
              >
                <p>
                  250.000 TL ana paranın 32 günlük vadelerle altı kez
                  yenilendiğini düşünelim. Her dönemde net faiz bakiyeye
                  eklenirse ikinci dönem 250.000 TL yerine ilk dönem sonundaki
                  daha yüksek bakiye üzerinden başlar.
                </p>

                <p>
                  Faiz oranı sabit kalsa bile her dönemin net faiz kazancı
                  önceki dönemden biraz daha yüksek olur. Faiz oranları
                  değişiyorsa dönemsel kazançlar oranların yönüne göre artabilir
                  veya azalabilir.
                </p>
              </ContentSection>

              <ContentSection
                id="donem-tablosu"
                icon={<RefreshCw className="h-6 w-6" />}
                title="Altı dönemlik mevduat yenileme tablosu"
              >
                <p>
                  Aşağıdaki örnek 250.000 TL ana para, 32 günlük vade,
                  yıllık %45 brüt faiz, %15 stopaj ve 365 gün esasıyla
                  hazırlanmıştır. Her dönem sonunda net faiz tamamen ana
                  paraya eklenmiştir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[980px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Dönem</th>
                          <th className="px-5 py-4 font-semibold">Açılış bakiyesi</th>
                          <th className="px-5 py-4 font-semibold">Faiz</th>
                          <th className="px-5 py-4 font-semibold">Brüt kazanç</th>
                          <th className="px-5 py-4 font-semibold">Stopaj</th>
                          <th className="px-5 py-4 font-semibold">Net kazanç</th>
                          <th className="px-5 py-4 font-semibold">Kapanış bakiyesi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {renewalRows.map((row) => (
                          <tr key={row.period} className="transition hover:bg-violet-50/40">
                            <td className="px-5 py-4 font-black text-slate-950">{row.period}</td>
                            <td className="px-5 py-4 font-semibold text-slate-700">{row.opening}</td>
                            <td className="px-5 py-4 font-semibold text-violet-700">{row.rate}</td>
                            <td className="px-5 py-4 text-slate-700">{row.gross}</td>
                            <td className="px-5 py-4 font-semibold text-rose-700">{row.withholding}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.net}</td>
                            <td className="px-5 py-4 font-black text-blue-800">{row.closing}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <InfoBox title="Tablo neyi gösterir?">
                  <p>
                    Her dönemin kapanış bakiyesi sonraki dönemin açılış
                    bakiyesidir. Bu nedenle dönemsel net kazanç zaman içinde
                    kademeli olarak yükselir.
                  </p>
                </InfoBox>
              </ContentSection>

              <ContentSection
                id="faiz-senaryolari"
                icon={<Percent className="h-6 w-6" />}
                title="Sabit ve değişken faiz senaryoları"
              >
                <p>
                  Mevduat yenileme kararında yalnızca ilk faiz oranına bakmak
                  yeterli değildir. Sonraki dönemlerde uygulanacak oranların
                  yönü nihai bakiyeyi belirgin biçimde değiştirebilir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[820px] text-left text-sm">
                      <thead className="bg-violet-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Senaryo</th>
                          <th className="px-5 py-4 font-semibold">Dönemsel oranlar</th>
                          <th className="px-5 py-4 font-semibold">Tahmini nihai bakiye</th>
                          <th className="px-5 py-4 font-semibold">Yorum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {rateScenarioRows.map((row) => (
                          <tr key={row.scenario}>
                            <td className="px-5 py-4 font-black text-slate-950">{row.scenario}</td>
                            <td className="px-5 py-4 font-semibold text-violet-700">{row.rates}</td>
                            <td className="px-5 py-4 font-black text-blue-800">{row.finalBalance}</td>
                            <td className="px-5 py-4 text-slate-600">{row.comment}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                id="gun-esasi"
                icon={<CalendarDays className="h-6 w-6" />}
                title="360 ve 365 gün esasının yenileme sonucuna etkisi"
              >
                <p>
                  Aynı ana para, yıllık faiz ve vade için 360 gün esası,
                  dönemsel faiz katsayısını 365 gün esasına göre biraz daha
                  yüksek hesaplayabilir. Bu fark her yenilemede yeni bakiyeye
                  taşındığı için dönem sayısı arttıkça büyüyebilir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">Gün esası</th>
                          <th className="px-5 py-4 font-semibold">Brüt faiz</th>
                          <th className="px-5 py-4 font-semibold">Stopaj</th>
                          <th className="px-5 py-4 font-semibold">Net faiz</th>
                          <th className="px-5 py-4 font-semibold">Dönem sonu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {dayBasisRows.map((row) => (
                          <tr key={row.basis}>
                            <td className="px-5 py-4 font-black text-slate-950">{row.basis}</td>
                            <td className="px-5 py-4 font-semibold text-blue-700">{row.gross}</td>
                            <td className="px-5 py-4 font-semibold text-rose-700">{row.withholding}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.net}</td>
                            <td className="px-5 py-4 font-black text-violet-800">{row.closing}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                id="reel-getiri"
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Yenilenen mevduatta reel getiri ve enflasyon"
              >
                <p>
                  Bileşik yenileme nominal bakiyeyi büyütür ancak gerçek
                  kazanç, aynı toplam süredeki enflasyonla karşılaştırıldığında
                  anlaşılır. Nihai bakiyenin artması satın alma gücünün de aynı
                  oranda arttığı anlamına gelmez.
                </p>

                <p>
                  Toplam yenileme süresine uyarlanmış enflasyon oranı, stopaj
                  sonrası efektif getiriyle karşılaştırılmalıdır. Efektif net
                  getiri enflasyonun üzerindeyse pozitif, altındaysa negatif
                  reel sonuç oluşabilir.
                </p>

                <WarningBox title="Nominal ve reel sonucu ayırın">
                  <p>
                    Yenileme tablosundaki kapanış bakiyesi nominal sonuçtur.
                    Yatırımın gerçek performansını görmek için aynı dönemin
                    enflasyon etkisini ayrıca hesaplayın.
                  </p>
                </WarningBox>
              </ContentSection>

              <ContentSection
                id="sik-hatalar"
                icon={<AlertTriangle className="h-6 w-6" />}
                title="Mevduat yenilemede sık yapılan hatalar"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <MistakeCard title="İlk faiz oranını sabit sanmak" description="Bankanın yenileme oranı ilk dönem kampanya faizinden daha düşük olabilir." />
                  <MistakeCard title="Brüt faizi ana paraya eklemek" description="Gerçekte ana paraya eklenen tutar stopaj sonrası net faizdir." />
                  <MistakeCard title="Faizi çekip bileşik sonuç beklemek" description="Faiz hesaptan çekildiğinde sonraki dönem daha yüksek bakiye üzerinden başlamaz." />
                  <MistakeCard title="Gün esasını göz ardı etmek" description="360 ve 365 gün uygulamaları dönemsel ve toplam kazancı değiştirebilir." />
                  <MistakeCard title="Valör tarihini unutmak" description="Paranın faiz kazanmaya başladığı tarih toplam gün ve kazanç hesabını etkiler." />
                  <MistakeCard title="Enflasyonu hesaba katmamak" description="Nominal bakiye artsa bile satın alma gücü azalabilir." />
                </div>
              </ContentSection>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <nav aria-label="Sayfa içindekiler" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white">
                    <ListChecks className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-violet-600">Sayfa rehberi</p>
                    <h2 className="text-lg font-black text-slate-950">İçindekiler</h2>
                  </div>
                </div>
                <div className="mt-5 max-h-[420px] space-y-1 overflow-y-auto pr-1">
                  {tableOfContents.map((item) => (
                    <a key={item.id} href={`#${item.id}`} className="group flex items-start gap-2 rounded-xl px-3 py-2 text-sm font-semibold leading-6 text-slate-600 transition hover:bg-violet-50 hover:text-violet-800">
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-violet-600" />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </nav>

              <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">
                  <RefreshCw className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Yenileme hesabı özeti
                </h2>

                <div className="mt-5 space-y-4">
                  <SidebarRow label="İlk bakiye" value="Ana para" />
                  <SidebarRow label="Dönem kazancı" value="Net faiz" />
                  <SidebarRow label="Yeni ana para" value="Dönem sonu bakiye" />
                  <SidebarRow label="Büyüme yöntemi" value="Bileşik" />
                  <SidebarRow label="Karşılaştırma" value="Basit faiz" />
                </div>
              </div>

              <div id="ilgili-hesaplamalar" className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  İlgili hesaplamalar
                </h2>

                <div className="mt-5 space-y-3">
                  {relatedCalculators.map((item) => (
                    <RelatedLink key={item.href} href={item.href} title={item.title} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <TrendingUp className="h-7 w-7 text-violet-300" />

                <h2 className="mt-5 text-xl font-black">
                  Faizin faizi toplam kazancı büyütür
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Net faiz kazancını ana paraya eklemek, sonraki vadelerde daha
                  yüksek bakiye üzerinden faiz kazanılmasını sağlar.
                </p>

                <Link
                  href="/hesaplamalar"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-violet-200"
                >
                  Tüm hesaplamaları incele
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section id="sss" className="scroll-mt-28 border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
                Sık sorulan sorular
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat faiz yenileme hakkında merak edilenler
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Vadeli mevduat yenileme, bileşik faiz, stopaj ve dönemsel faiz
                oranları hakkında sık sorulan soruları inceleyin.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-violet-200 open:bg-violet-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-950 sm:px-6">
                    <span>{item.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-violet-300 group-open:text-violet-700">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="border-t border-violet-200 pt-4 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-violet-700 via-violet-800 to-indigo-900 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Diğer mevduat hesaplama araçlarını keşfedin
                </h2>

                <p className="mt-4 text-sm leading-7 text-violet-100 sm:text-base">
                  Mevduat getirisi, reel getiri, faiz karşılaştırması, hedef
                  kazanç ve erken bozma kaybı hesaplamalarınızı ücretsiz
                  araçlarımızla yapın.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-violet-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-violet-50"
              >
                Tüm hesaplamaları görüntüle
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-100">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                Bu sayfadaki hesaplamalar yalnızca bilgilendirme amacıyla
                hazırlanmıştır ve yatırım tavsiyesi değildir. Hesaplama,
                vade sonunda oluşan net faizin tamamının ana paraya eklendiği
                varsayımına dayanır. Bankaların faiz, stopaj, valör, otomatik
                yenileme ve yuvarlama uygulamaları farklı olabilir. Finansal
                karar vermeden önce bankanızın güncel ürün koşullarını kontrol
                ediniz.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

type HeroFeatureProps = {
  text: string;
};

function HeroFeature({ text }: HeroFeatureProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-violet-50 backdrop-blur">
      <CheckCircle2 className="h-4 w-4 text-violet-300" />
      {text}
    </div>
  );
}

type MiniMetricProps = {
  label: string;
  value: string;
};

function MiniMetric({ label, value }: MiniMetricProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/10 px-3 py-3 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-wide text-violet-200">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">
        {value}
      </p>
    </div>
  );
}

type GuideCardProps = {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
};

function GuideCard({
  number,
  icon,
  title,
  description,
}: GuideCardProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6">
      <span className="absolute right-4 top-3 text-5xl font-black text-slate-200">
        {number}
      </span>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white">
        {icon}
      </div>

      <h3 className="relative mt-5 text-lg font-black text-slate-950">
        {title}
      </h3>

      <p className="relative mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

type ContentSectionProps = {
  id?: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContentSection({
  id,
  icon,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
          {icon}
        </div>

        <h2 className="text-2xl font-black tracking-tight text-slate-950">
          {title}
        </h2>
      </div>

      <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
        {children}
      </div>
    </section>
  );
}

type FormulaBoxProps = {
  children: ReactNode;
};

function FormulaBox({ children }: FormulaBoxProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 sm:p-6">
      {children}
    </div>
  );
}

type CheckItemProps = {
  text: string;
};

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-violet-200 bg-violet-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-600" />

      <p className="text-sm leading-6 text-violet-950">
        {text}
      </p>
    </div>
  );
}

type ComparisonRowProps = {
  feature: string;
  simple: string;
  compound: string;
};

function ComparisonRow({
  feature,
  simple,
  compound,
}: ComparisonRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {feature}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {simple}
      </td>

      <td className="px-5 py-4 font-semibold text-violet-700">
        {compound}
      </td>
    </tr>
  );
}

type InfoBoxProps = {
  title: string;
  children: ReactNode;
};

function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
      <div className="flex gap-3">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
        <div>
          <h3 className="font-black text-blue-950">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-blue-900">{children}</div>
        </div>
      </div>
    </div>
  );
}

type WarningBoxProps = {
  title: string;
  children: ReactNode;
};

function WarningBox({ title, children }: WarningBoxProps) {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
        <div>
          <h3 className="font-black text-amber-950">{title}</h3>
          <div className="mt-2 text-sm leading-7 text-amber-900">{children}</div>
        </div>
      </div>
    </div>
  );
}

type MistakeCardProps = {
  title: string;
  description: string;
};

function MistakeCard({ title, description }: MistakeCardProps) {
  return (
    <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
      <div className="flex gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
        <div>
          <h3 className="font-black text-rose-950">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-rose-900">{description}</p>
        </div>
      </div>
    </div>
  );
}

type SidebarRowProps = {
  label: string;
  value: string;
};

function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-violet-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-600">
        {label}
      </span>

      <span className="text-right text-sm font-bold text-slate-950">
        {value}
      </span>
    </div>
  );
}

type RelatedLinkProps = {
  href: string;
  title: string;
};

function RelatedLink({ href, title }: RelatedLinkProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}