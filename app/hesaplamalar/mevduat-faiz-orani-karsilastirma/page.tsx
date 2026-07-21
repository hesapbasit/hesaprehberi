import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  Banknote,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  Landmark,
  Percent,
  Scale,
  Sparkles,
  TrendingUp,
  Trophy,
  WalletCards,
} from "lucide-react";

import DepositInterestRateComparisonCalculator from "@/components/calculators/DepositInterestRateComparisonCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const pageTitle = "Mevduat Faiz Oranı Karşılaştırma Hesaplama";

const pageDescription =
  "Aynı ana para ve vade için üç farklı mevduat faiz teklifini karşılaştırın; brüt faiz, stopaj, net kazanç ve vade sonu tutarlarını ücretsiz hesaplayın.";

const canonicalUrl =
  "https://hesaprehberi.com/hesaplamalar/mevduat-faiz-orani-karsilastirma";

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "mevduat faiz oranı karşılaştırma",
    "banka faiz karşılaştırma",
    "mevduat teklif karşılaştırma",
    "vadeli mevduat karşılaştırma",
    "faiz oranı karşılaştırma hesaplama",
    "mevduat kazanç karşılaştırma",
    "en yüksek mevduat getirisi",
    "banka mevduat faizi",
    "vadeli hesap faiz karşılaştırma",
    "net faiz hesaplama",
    "stopaj hesaplama",
    "vade sonu hesaplama",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: canonicalUrl,
    siteName: "HesapRehberi",
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${pageTitle} | HesapRehberi`,
    description: pageDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const faqItems = [
  {
    question: "Mevduat faiz oranı karşılaştırma nedir?",
    answer:
      "Mevduat faiz oranı karşılaştırma, aynı ana para ve vade süresi için farklı bankaların veya farklı mevduat tekliflerinin brüt ve net getirilerinin yan yana incelenmesidir.",
  },
  {
    question: "En yüksek faiz oranı her zaman en iyi teklif midir?",
    answer:
      "Diğer tüm koşullar aynıysa daha yüksek faiz oranı genellikle daha yüksek net kazanç sağlar. Ancak vade, stopaj, hesap açılış şartları, kampanya koşulları ve erken bozma kuralları da değerlendirilmelidir.",
  },
  {
    question: "Mevduat teklifleri nasıl karşılaştırılır?",
    answer:
      "Teklifleri karşılaştırırken aynı ana para, aynı vade süresi, aynı gün esası ve aynı stopaj oranı kullanılmalıdır. Böylece faiz oranlarının net kazanca etkisi doğru biçimde görülebilir.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, vergi kesintisi uygulanmadan önce hesaplanan kazançtır. Net faiz ise brüt faizden stopaj kesintisi çıkarıldıktan sonra yatırımcının elde ettiği tutardır.",
  },
  {
    question: "Stopaj oranı karşılaştırmayı etkiler mi?",
    answer:
      "Evet. Stopaj oranı yükseldikçe tüm tekliflerin net getirisi azalır. Tekliflerin tamamında aynı stopaj oranı kullanılıyorsa faiz oranı sıralaması genellikle değişmez ancak TL cinsinden kazançlar düşer.",
  },
  {
    question: "Vade süresi arttıkça teklifler arasındaki fark büyür mü?",
    answer:
      "Faiz oranları arasındaki fark sabit kalırsa vade süresi uzadıkça teklifler arasındaki TL cinsinden net kazanç farkı genellikle büyür.",
  },
  {
    question: "Ana para arttıkça faiz farkının etkisi artar mı?",
    answer:
      "Evet. Aynı faiz oranı ve vade koşullarında ana para yükseldikçe brüt faiz, net faiz ve teklifler arasındaki kazanç farkı orantılı olarak artar.",
  },
  {
    question: "360 ve 365 gün esası neden farklı sonuç verir?",
    answer:
      "Faiz formülünde vade günü seçilen gün esasına bölünür. Aynı oran ve vade için 360 gün esasıyla hesaplanan dönemsel faiz, 365 gün esasına göre biraz daha yüksek olabilir.",
  },
  {
    question: "Faiz oranındaki 1 puan fark ne kadar kazandırır?",
    answer:
      "Bir faiz puanının TL karşılığı ana para, vade, gün esası ve stopaj oranına bağlıdır. Hesaplama aracı en yüksek ve en düşük teklif arasındaki fark üzerinden bir faiz puanının yaklaşık net etkisini gösterir.",
  },
  {
    question: "Teklif adlarını banka adı olarak yazabilir miyim?",
    answer:
      "Evet. Teklif adı alanlarına banka adı, hesap türü veya kampanya adı yazılarak sonuçlar daha kolay takip edilebilir.",
  },
  {
    question: "Araç kaç farklı teklif karşılaştırıyor?",
    answer:
      "Bu hesaplama aracı aynı anda üç farklı mevduat faiz teklifini karşılaştırır ve teklifleri net faiz getirisine göre sıralar.",
  },
  {
    question: "Vade sonu toplam tutarı nedir?",
    answer:
      "Vade sonu toplam tutarı, yatırılan ana para ile stopaj sonrası net faiz kazancının toplamıdır.",
  },
  {
    question: "Günlük net kazanç nasıl hesaplanır?",
    answer:
      "Dönem boyunca elde edilen net faiz, toplam vade gününe bölünerek günlük ortalama net kazanç bulunur.",
  },
  {
    question: "30 günlük eşdeğer kazanç nedir?",
    answer:
      "Günlük ortalama net kazancın 30 ile çarpılmasıyla elde edilen yaklaşık aylık karşılıktır. Gerçek bir aylık mevduat teklifini temsil etmeyebilir.",
  },
  {
    question: "Dönemsel net getiri oranı nedir?",
    answer:
      "Net faiz kazancının ana paraya bölünüp yüzdeye çevrilmesiyle hesaplanan, seçilen vade süresine ait net getiri oranıdır.",
  },
  {
    question: "Faiz oranları günlük değişebilir mi?",
    answer:
      "Evet. Bankaların mevduat faiz oranları piyasa koşulları, müşteri profili, tutar, vade ve kampanyalara göre değişebilir.",
  },
  {
    question: "Hesaplama banka teklifinin kesin sonucunu verir mi?",
    answer:
      "Hayır. Araç girilen değerler üzerinden matematiksel tahmin üretir. Bankaların valör tarihi, yuvarlama yöntemi, özel kesintileri ve ürün koşulları farklı olabilir.",
  },
  {
    question: "Bu araç yatırım tavsiyesi verir mi?",
    answer:
      "Hayır. Hesaplama aracı yalnızca bilgilendirme ve karşılaştırma amacıyla hazırlanmıştır. Mevduat kararı vermeden önce bankaların güncel koşulları incelenmelidir.",
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
    url: "https://hesaprehberi.com",
  },
};

export default function DepositInterestRateComparisonPage() {
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
                  label: "Mevduat Faiz Oranı Karşılaştırma",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz mevduat teklif karşılaştırma aracı
                </div>

                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Mevduat Faiz Oranı Karşılaştırma Hesaplama
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-cyan-100 sm:text-lg">
                  Aynı ana para ve vade için üç farklı faiz teklifinin brüt
                  kazancını, stopaj kesintisini, net faizini ve vade sonu
                  tutarını karşılaştırın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroFeature text="Üç teklif karşılaştırması" />
                  <HeroFeature text="Net faiz sıralaması" />
                  <HeroFeature text="Stopaj dahil sonuç" />
                  <HeroFeature text="Faiz farkının TL karşılığı" />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-cyan-700 shadow-xl">
                  <Trophy className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  En yüksek getiriyi bulun
                </h2>

                <p className="mt-3 text-sm leading-7 text-cyan-100">
                  Farklı banka veya kampanya oranlarını girerek hangi teklifin
                  daha fazla net faiz kazandırdığını anında görün.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <MiniMetric label="Teklif" value="3 adet" />
                  <MiniMetric label="Sonuç" value="Net faiz" />
                  <MiniMetric label="Sıralama" value="Anlık" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <DepositInterestRateComparisonCalculator />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Bu aracı faydalı buldunuz mu?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Mevduat faiz oranı karşılaştırma aracını paylaşabilirsiniz.
              </p>
            </div>

            <ShareButtons
              title={pageTitle}
              description={pageDescription}
            />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">
                Kullanım rehberi
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat faiz teklifleri nasıl karşılaştırılır?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Doğru bir karşılaştırma için tüm tekliflerde aynı ana para,
                vade, stopaj ve gün esası kullanılmalıdır. Yalnızca faiz
                oranları değiştirilerek tekliflerin gerçek kazanç farkı
                görülebilir.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <GuideCard
                number="01"
                icon={<Landmark className="h-6 w-6" />}
                title="Ana parayı belirleyin"
                description="Tüm bankalarda değerlendireceğiniz ortak mevduat tutarını girin."
              />

              <GuideCard
                number="02"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vadeyi eşitleyin"
                description="Tekliflerin tamamı için aynı vade gününü kullanın."
              />

              <GuideCard
                number="03"
                icon={<Percent className="h-6 w-6" />}
                title="Faizleri girin"
                description="Üç bankanın veya kampanyanın yıllık oranlarını yazın."
              />

              <GuideCard
                number="04"
                icon={<Award className="h-6 w-6" />}
                title="En iyi teklifi görün"
                description="Net kazanç sıralamasını ve teklifler arasındaki farkı inceleyin."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="space-y-10">
              <ContentSection
                icon={<ChartNoAxesCombined className="h-6 w-6" />}
                title="Mevduat faiz oranı karşılaştırması neden önemlidir?"
              >
                <p>
                  Bankaların sunduğu yıllık mevduat faiz oranları birbirinden
                  farklı olabilir. Küçük görünen faiz oranı farkları, yüksek ana
                  para veya uzun vade söz konusu olduğunda önemli bir TL
                  farkına dönüşebilir.
                </p>

                <p>
                  Teklifleri yalnızca yıllık faiz oranına bakarak değil,
                  stopaj sonrası net kazanç ve vade sonunda hesaba geçecek
                  toplam tutar üzerinden karşılaştırmak daha sağlıklı sonuç
                  verir.
                </p>
              </ContentSection>

              <ContentSection
                icon={<Calculator className="h-6 w-6" />}
                title="Mevduat teklif karşılaştırma formülü"
              >
                <p>
                  Her teklif için brüt faiz ayrı hesaplanır. Ardından stopaj
                  kesintisi çıkarılarak net faiz ve vade sonu toplam tutarı
                  bulunur.
                </p>

                <FormulaBox>
                  <p>
                    Brüt faiz = Ana para × Yıllık faiz oranı ×
                    (Vade günü ÷ Gün esası)
                  </p>

                  <p className="mt-3">
                    Stopaj = Brüt faiz × Stopaj oranı
                  </p>

                  <p className="mt-3">
                    Net faiz = Brüt faiz − Stopaj
                  </p>

                  <p className="mt-3">
                    Vade sonu tutarı = Ana para + Net faiz
                  </p>
                </FormulaBox>
              </ContentSection>

              <ContentSection
                icon={<CircleDollarSign className="h-6 w-6" />}
                title="Faiz oranındaki küçük farklar neden önemlidir?"
              >
                <p>
                  Yıllık faiz oranları arasındaki bir veya iki puanlık fark,
                  düşük tutarlı ve kısa vadeli mevduatta sınırlı etki
                  oluşturabilir. Ancak ana para yükseldiğinde veya vade
                  uzadığında farkın TL karşılığı büyür.
                </p>

                <p>
                  Bu nedenle teklifler değerlendirilirken yalnızca oranların
                  görünümüne değil, net kazanç farkına da bakılmalıdır.
                  Hesaplama aracı, en yüksek ve en düşük teklif arasındaki
                  faiz farkının TL karşılığını gösterir.
                </p>
              </ContentSection>

              <ContentSection
                icon={<Scale className="h-6 w-6" />}
                title="Stopaj oranı karşılaştırmaya nasıl dahil edilir?"
              >
                <p>
                  Stopaj, brüt faiz kazancı üzerinden hesaplanan vergi
                  kesintisidir. Aynı stopaj oranı üç teklif için de
                  uygulandığında bütün tekliflerin net kazancı azalır.
                </p>

                <p>
                  Faiz oranı yüksek olan teklif daha fazla brüt kazanç
                  sağladığı için stopaj tutarı da daha yüksek olabilir. Buna
                  rağmen stopaj sonrası net kazancı genellikle diğer
                  tekliflerden yüksek kalır.
                </p>
              </ContentSection>

              <ContentSection
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vade süresi kazanç farkını nasıl etkiler?"
              >
                <p>
                  Vade süresi, yıllık faiz oranının hangi dönem için
                  uygulanacağını belirler. Aynı ana para ve oran farkı için
                  vade uzadıkça teklifler arasındaki net kazanç farkı da
                  genellikle artar.
                </p>

                <p>
                  Adil bir karşılaştırma için bankaların teklif ettiği
                  oranların aynı vade aralığına ait olması gerekir. Örneğin
                  32 günlük bir oran ile 92 günlük bir oran doğrudan
                  karşılaştırılmamalıdır.
                </p>
              </ContentSection>

              <ContentSection
                icon={<WalletCards className="h-6 w-6" />}
                title="Teklifleri karşılaştırırken nelere dikkat edilmelidir?"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Tüm tekliflerde aynı ana parayı kullanın." />
                  <CheckItem text="Vade günlerinin aynı olduğundan emin olun." />
                  <CheckItem text="Kampanya ve yeni müşteri şartlarını kontrol edin." />
                  <CheckItem text="Faiz oranının tutara göre değişip değişmediğini inceleyin." />
                  <CheckItem text="Erken bozma koşullarını öğrenin." />
                  <CheckItem text="Stopaj sonrası net kazancı esas alın." />
                  <CheckItem text="Valör ve hesap açılış tarihini kontrol edin." />
                  <CheckItem text="Vade sonunda otomatik yenileme oranını inceleyin." />
                </div>
              </ContentSection>

              <ContentSection
                icon={<Banknote className="h-6 w-6" />}
                title="Örnek mevduat faiz karşılaştırması"
              >
                <p>
                  Aşağıdaki tablo, aynı ana para ve vade için farklı yıllık
                  faiz oranlarının net kazanca nasıl yansıyabileceğini
                  kavramsal olarak gösterir.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">
                            Teklif
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Faiz oranı
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Brüt getiri
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Net getiri
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Sıralama
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-200 bg-white">
                        <ExampleTableRow
                          offer="Teklif A"
                          rate="%45,00"
                          gross="Daha düşük"
                          net="Daha düşük"
                          ranking="3"
                        />

                        <ExampleTableRow
                          offer="Teklif B"
                          rate="%47,50"
                          gross="Orta"
                          net="Orta"
                          ranking="2"
                        />

                        <ExampleTableRow
                          offer="Teklif C"
                          rate="%50,00"
                          gross="Daha yüksek"
                          net="Daha yüksek"
                          ranking="1"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>

                <p>
                  Gerçek tutarlar ana para, vade, stopaj ve gün esasına göre
                  değişir. Üstteki hesaplama aracına güncel teklifleri girerek
                  kişisel karşılaştırmanızı oluşturabilirsiniz.
                </p>
              </ContentSection>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                  <Trophy className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Doğru karşılaştırma özeti
                </h2>

                <div className="mt-5 space-y-4">
                  <SidebarRow label="Ana para" value="Aynı olmalı" />
                  <SidebarRow label="Vade" value="Aynı olmalı" />
                  <SidebarRow label="Stopaj" value="Aynı olmalı" />
                  <SidebarRow label="Değişken" value="Faiz oranı" />
                  <SidebarRow label="Karar ölçütü" value="Net kazanç" />
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-black text-slate-950">
                  İlgili hesaplamalar
                </h2>

                <div className="mt-5 space-y-3">
                  <RelatedLink
                    href="/hesaplamalar/mevduat-hesaplama"
                    title="Mevduat Hesaplama"
                  />

                  <RelatedLink
                    href="/hesaplamalar/mevduat-vade-karsilastirma"
                    title="Mevduat Vade Karşılaştırma"
                  />

                  <RelatedLink
                    href="/hesaplamalar/mevduat-getiri-hedefi"
                    title="Mevduat Getiri Hedefi"
                  />

                  <RelatedLink
                    href="/hesaplamalar/mevduat-erken-bozma-kaybi"
                    title="Mevduat Erken Bozma Kaybı"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <TrendingUp className="h-7 w-7 text-cyan-300" />

                <h2 className="mt-5 text-xl font-black">
                  Oran yerine net kazanca bakın
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Faiz oranı teklifin başlangıç noktasıdır. Karar verirken
                  stopaj sonrası net kazanç ve vade sonu toplam tutarını
                  birlikte değerlendirin.
                </p>

                <Link
                  href="/hesaplamalar"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-cyan-200"
                >
                  Tüm hesaplamaları incele
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-600">
                Sık sorulan sorular
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat faiz karşılaştırması hakkında merak edilenler
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Faiz teklifleri, stopaj, vade ve net kazanç karşılaştırması
                hakkında sık sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-cyan-200 open:bg-cyan-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-950 sm:px-6">
                    <span>{item.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-cyan-300 group-open:text-cyan-700">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="border-t border-cyan-200 pt-4 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-700 via-cyan-800 to-blue-900 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Diğer mevduat hesaplama araçlarını keşfedin
                </h2>

                <p className="mt-4 text-sm leading-7 text-cyan-100 sm:text-base">
                  Mevduat getirisi, vade karşılaştırması, hedef kazanç ve erken
                  bozma kaybı gibi hesaplamalarınızı ücretsiz araçlarımızla
                  yapın.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-cyan-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-cyan-50"
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
                Bu sayfadaki sonuçlar yalnızca bilgilendirme amacıyla
                hazırlanmıştır ve yatırım tavsiyesi değildir. Bankaların faiz
                oranları, stopaj uygulamaları, valör tarihleri ve kampanya
                koşulları değişebilir. Mevduat hesabı açmadan önce ilgili
                bankanın güncel şartlarını kontrol ediniz.
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
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-cyan-50 backdrop-blur">
      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
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
      <p className="text-[10px] font-semibold uppercase tracking-wide text-cyan-200">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">{value}</p>
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

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white">
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
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

function ContentSection({
  icon,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
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
    <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

      <p className="text-sm leading-6 text-emerald-950">
        {text}
      </p>
    </div>
  );
}

type ExampleTableRowProps = {
  offer: string;
  rate: string;
  gross: string;
  net: string;
  ranking: string;
};

function ExampleTableRow({
  offer,
  rate,
  gross,
  net,
  ranking,
}: ExampleTableRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {offer}
      </td>

      <td className="px-5 py-4 font-bold text-cyan-700">
        {rate}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {gross}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {net}
      </td>

      <td className="px-5 py-4 font-black text-slate-950">
        {ranking}
      </td>
    </tr>
  );
}

type SidebarRowProps = {
  label: string;
  value: string;
};

function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-cyan-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-600">{label}</span>

      <span className="text-sm font-bold text-slate-950">
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
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}