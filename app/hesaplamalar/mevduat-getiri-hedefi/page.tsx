import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Calculator,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Landmark,
  Percent,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import DepositTargetReturnCalculator from "@/components/calculators/DepositTargetReturnCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const pageTitle = "Mevduat Getiri Hedefi Hesaplama";
const pageDescription =
  "Hedeflediğiniz net mevduat kazancı için yatırmanız gereken ana parayı; faiz oranı, vade süresi ve stopaj oranına göre ücretsiz hesaplayın.";

const canonicalUrl =
  "https://hesaprehberi.com/hesaplamalar/mevduat-getiri-hedefi";

export const metadata: Metadata = {
  title: `${pageTitle} | HesapRehberi`,
  description: pageDescription,
  keywords: [
    "mevduat getiri hedefi hesaplama",
    "hedef faiz kazancı hesaplama",
    "mevduat ana para hesaplama",
    "vadeli mevduat hesaplama",
    "hedef kazanç hesaplama",
    "mevduat faiz hesaplama",
    "net faiz hesaplama",
    "stopaj hesaplama",
    "vade sonu hesaplama",
    "vadeli hesap getirisi",
    "banka mevduat getirisi",
    "mevduat kazancı",
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
    question: "Mevduat getiri hedefi hesaplama aracı ne işe yarar?",
    answer:
      "Bu araç, vade sonunda ulaşmak istediğiniz net faiz kazancı için yatırmanız gereken tahmini ana para tutarını hesaplar. Hesaplamada yıllık brüt faiz oranı, vade süresi, stopaj oranı ve faiz gün esası dikkate alınır.",
  },
  {
    question: "Hedef net kazanç nedir?",
    answer:
      "Hedef net kazanç, stopaj kesintisi yapıldıktan sonra faiz geliri olarak elde etmek istediğiniz tutardır. Ana para bu tutara dahil değildir.",
  },
  {
    question: "Gerekli ana para nasıl hesaplanır?",
    answer:
      "Hedeflenen net faiz kazancı; yıllık faiz oranı, vade süresi ve stopaj sonrasında oluşan net getiri katsayısına bölünür. Böylece hedef kazanç için gereken tahmini başlangıç tutarı bulunur.",
  },
  {
    question: "Faiz oranı yükselirse gereken ana para azalır mı?",
    answer:
      "Diğer koşullar aynı kaldığında faiz oranının yükselmesi, hedeflenen net kazanca ulaşmak için gereken ana parayı azaltır. Faiz oranı düştüğünde ise daha yüksek ana para gerekebilir.",
  },
  {
    question: "Vade süresi uzadıkça gerekli ana para değişir mi?",
    answer:
      "Evet. Faiz oranı ve stopaj aynı kaldığında vadenin uzaması, yatırılan paranın daha uzun süre faiz kazanmasını sağlar. Bu nedenle aynı hedef kazanç için gereken ana para genellikle azalır.",
  },
  {
    question: "Stopaj oranı sonucu nasıl etkiler?",
    answer:
      "Stopaj, brüt faiz kazancı üzerinden yapılan vergi kesintisidir. Stopaj oranı yükseldikçe yatırımcının eline geçen net faiz azalır ve aynı net kazanca ulaşmak için daha yüksek ana para gerekebilir.",
  },
  {
    question: "360 gün ve 365 gün esası arasındaki fark nedir?",
    answer:
      "Bankalar faiz hesaplamalarında farklı gün esasları kullanabilir. 360 gün esasına göre yapılan hesaplamada dönemsel faiz katsayısı, aynı koşullarda 365 gün esasına göre biraz daha yüksek çıkabilir.",
  },
  {
    question: "Hesaplanan tutar bankanın kesin teklifini gösterir mi?",
    answer:
      "Hayır. Araç tahmini sonuç üretir. Bankaların faiz hesaplama yöntemleri, kampanya şartları, müşteri özel oranları, gün esası, valör uygulaması ve stopaj koşulları farklılık gösterebilir.",
  },
  {
    question: "Vade sonunda toplam tutar nedir?",
    answer:
      "Vade sonu toplam tutarı, yatırılan ana para ile stopaj sonrası elde edilen net faiz kazancının toplamıdır.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, herhangi bir vergi kesintisi uygulanmadan önce hesaplanan faiz kazancıdır. Net faiz ise stopaj kesildikten sonra yatırımcının elde ettiği tutardır.",
  },
  {
    question: "Mevduat faiz oranı yıllık mı girilmelidir?",
    answer:
      "Evet. Hesaplama alanına bankanın açıkladığı yıllık brüt faiz oranı girilmelidir. Araç bu yıllık oranı seçilen vade süresine göre dönemsel getiriye dönüştürür.",
  },
  {
    question: "Hedef kazanca ana para dahil midir?",
    answer:
      "Hayır. Hedef kazanç alanına yalnızca faizden elde etmek istediğiniz net gelir yazılmalıdır. Ana para araç tarafından ayrıca hesaplanır.",
  },
  {
    question: "Aylık tahmini kazanç nasıl hesaplanır?",
    answer:
      "Hesaplanan net faiz kazancı önce günlük ortalamaya çevrilir. Daha sonra bu günlük tutar 30 ile çarpılarak yaklaşık aylık karşılık gösterilir.",
  },
  {
    question: "Hesaplama bileşik faiz kullanıyor mu?",
    answer:
      "Hayır. Bu araç tek bir vade dönemi için basit mevduat faiz hesaplaması yapar. Faizin ana paraya eklenerek tekrar yatırıldığı bileşik getiri senaryolarını kapsamaz.",
  },
  {
    question: "Faiz oranı vade içinde değişirse sonuç geçerli olur mu?",
    answer:
      "Hesaplama, girilen faiz oranının vade boyunca sabit kaldığını varsayar. Değişken faizli ürünlerde veya vade içinde oran değişikliği olduğunda gerçek sonuç farklı olabilir.",
  },
  {
    question: "Stopaj oranını nereden öğrenebilirim?",
    answer:
      "Güncel stopaj oranını bankanızın mevduat ürün sayfasından, resmi mevzuat kaynaklarından veya hesap açılışı sırasında sunulan ürün bilgilerinden kontrol edebilirsiniz.",
  },
  {
    question: "Bu hesaplama yatırım tavsiyesi midir?",
    answer:
      "Hayır. Hesaplama yalnızca bilgilendirme amacı taşır. Yatırım kararı vermeden önce bankaların güncel koşullarını karşılaştırmanız ve gerektiğinde yetkili bir uzmandan destek almanız gerekir.",
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

export default function DepositTargetReturnPage() {
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
                  label: "Mevduat Getiri Hedefi",
                },
              ]}
            />
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-100 backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Ücretsiz mevduat hesaplama aracı
                </div>

                <h1 className="mt-6 max-w-4xl text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Mevduat Getiri Hedefi Hesaplama
                </h1>

                <p className="mt-5 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
                  Hedeflediğiniz net faiz kazancına ulaşmak için yatırmanız
                  gereken ana parayı; yıllık faiz oranı, vade süresi ve stopaj
                  oranına göre saniyeler içinde hesaplayın.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <HeroFeature text="Ücretsiz kullanım" />
                  <HeroFeature text="Anında sonuç" />
                  <HeroFeature text="Stopaj dahil hesaplama" />
                  <HeroFeature text="360 ve 365 gün seçeneği" />
                </div>
              </div>

              <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-xl">
                  <Target className="h-7 w-7" />
                </div>

                <h2 className="mt-5 text-xl font-bold text-white">
                  Ne kadar yatırmanız gerekiyor?
                </h2>

                <p className="mt-3 text-sm leading-7 text-blue-100">
                  Kazanmak istediğiniz net tutarı girin. Araç, seçtiğiniz faiz
                  ve vade koşullarına göre gerekli ana parayı hesaplasın.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <MiniMetric label="Faiz" value="Dahil" />
                  <MiniMetric label="Stopaj" value="Dahil" />
                  <MiniMetric label="Sonuç" value="Anlık" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <DepositTargetReturnCalculator />

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="text-sm font-bold text-slate-950">
                Bu aracı faydalı buldunuz mu?
              </p>

              <p className="mt-1 text-sm text-slate-600">
                Mevduat getiri hedefi hesaplama aracını paylaşabilirsiniz.
              </p>
            </div>

            <ShareButtons
              title={pageTitle}
              description={pageDescription}
              url={canonicalUrl}
            />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Hesaplama rehberi
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat getiri hedefi nasıl hesaplanır?
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Mevduat getiri hedefi hesaplaması, klasik mevduat
                hesaplamasının tersidir. Normal bir mevduat hesaplamasında
                yatırılacak ana para bilinir ve elde edilecek kazanç bulunur.
                Hedef hesaplamasında ise kazanılmak istenen net faiz tutarı
                bilinir ve bu kazanç için gereken ana para hesaplanır.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <GuideCard
                number="01"
                icon={<Target className="h-6 w-6" />}
                title="Hedef kazancı belirleyin"
                description="Faiz geliri olarak elde etmek istediğiniz net TL tutarını girin."
              />

              <GuideCard
                number="02"
                icon={<Percent className="h-6 w-6" />}
                title="Faiz oranını girin"
                description="Bankanın sunduğu yıllık brüt mevduat faiz oranını kullanın."
              />

              <GuideCard
                number="03"
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vadeyi seçin"
                description="Paranın mevduatta kalacağı toplam gün sayısını belirleyin."
              />

              <GuideCard
                number="04"
                icon={<Calculator className="h-6 w-6" />}
                title="Sonucu inceleyin"
                description="Gerekli ana para, vergi kesintisi ve vade sonu tutarını görün."
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <article className="space-y-10">
              <ContentSection
                icon={<Landmark className="h-6 w-6" />}
                title="Mevduat getiri hedefi nedir?"
              >
                <p>
                  Mevduat getiri hedefi, belirli bir vade sonunda faiz geliri
                  olarak ulaşılmak istenen net tutarı ifade eder. Örneğin 32
                  günlük bir vadede 10.000 TL net faiz kazanmak isteyen bir
                  yatırımcı, bankanın sunduğu faiz oranına ve uygulanacak
                  stopaja göre ne kadar para yatırması gerektiğini bu
                  hesaplama ile öğrenebilir.
                </p>

                <p>
                  Bu yaklaşım özellikle düzenli gelir hedefleyen, belirli bir
                  gideri faiz kazancıyla karşılamak isteyen veya farklı banka
                  tekliflerini ana para ihtiyacı açısından karşılaştıran
                  kullanıcılar için yararlıdır.
                </p>
              </ContentSection>

              <ContentSection
                icon={<Calculator className="h-6 w-6" />}
                title="Mevduat getiri hedefi hesaplama formülü"
              >
                <p>
                  Hesaplamada önce yıllık brüt faiz oranı, seçilen vade
                  süresine göre dönemsel faiz oranına dönüştürülür. Daha sonra
                  stopaj etkisi çıkarılarak net getiri katsayısı bulunur.
                </p>

                <FormulaBox>
                  <p>
                    Net getiri katsayısı = Yıllık faiz oranı × (Vade günü ÷ Gün
                    esası) × (1 − Stopaj oranı)
                  </p>

                  <p className="mt-3">
                    Gerekli ana para = Hedef net kazanç ÷ Net getiri katsayısı
                  </p>
                </FormulaBox>

                <p>
                  Hesaplanan ana para tahmini bir değerdir. Bankanın küsurat
                  yuvarlaması, valör tarihi, gün hesabı veya özel ürün
                  koşulları nedeniyle gerçek sonuç küçük farklılıklar
                  gösterebilir.
                </p>
              </ContentSection>

              <ContentSection
                icon={<Scale className="h-6 w-6" />}
                title="Stopaj neden önemlidir?"
              >
                <p>
                  Mevduat faizinden elde edilen brüt kazanç ile yatırımcının
                  hesabına geçen net kazanç aynı olmayabilir. Brüt faiz
                  üzerinden uygulanan stopaj, yatırımcının elde edeceği net
                  getiriyi azaltır.
                </p>

                <p>
                  Hedeflenen tutar net kazanç olduğu için stopaj oranının
                  doğru girilmesi önemlidir. Stopaj oranı yükseldiğinde aynı
                  net gelire ulaşmak için yatırılması gereken ana para da
                  yükselir.
                </p>

                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex gap-3">
                    <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

                    <div>
                      <h3 className="font-bold text-amber-950">
                        Güncel oranı kontrol edin
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-amber-900">
                        Stopaj oranları mevduat türüne, para birimine, vade
                        süresine ve yürürlükteki düzenlemelere göre
                        değişebilir. Hesaplama yapmadan önce bankanızın güncel
                        ürün koşullarını inceleyin.
                      </p>
                    </div>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                icon={<CalendarDays className="h-6 w-6" />}
                title="Vade süresi ana para ihtiyacını nasıl etkiler?"
              >
                <p>
                  Faiz oranı ve stopaj sabit tutulduğunda daha uzun vade,
                  yatırılan paranın daha uzun süre faiz üretmesini sağlar. Bu
                  nedenle aynı kazanç hedefi için daha uzun vadelerde daha
                  düşük ana para yeterli olabilir.
                </p>

                <p>
                  Ancak yalnızca hesaplanan getiriye bakmak yeterli değildir.
                  Uzun vadelerde paranızın kullanım esnekliği azalabilir.
                  Vadesinden önce bozulan mevduatlarda faiz kaybı
                  yaşanabileceği için nakit ihtiyacınızı da göz önünde
                  bulundurmalısınız.
                </p>
              </ContentSection>

              <ContentSection
                icon={<TrendingUp className="h-6 w-6" />}
                title="Faiz oranı sonucu nasıl değiştirir?"
              >
                <p>
                  Yıllık brüt faiz oranı yükseldikçe mevduatın aynı süre
                  içerisinde üreteceği kazanç artar. Böylece belirlenen net
                  hedef için gereken ana para azalır.
                </p>

                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead className="bg-slate-950 text-white">
                        <tr>
                          <th className="px-5 py-4 font-semibold">
                            Değişken
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Değişim
                          </th>
                          <th className="px-5 py-4 font-semibold">
                            Gerekli ana paraya etkisi
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-slate-200 bg-white">
                        <TableRow
                          variable="Faiz oranı"
                          change="Yükselirse"
                          effect="Gerekli ana para azalır"
                        />

                        <TableRow
                          variable="Vade süresi"
                          change="Uzarsa"
                          effect="Gerekli ana para genellikle azalır"
                        />

                        <TableRow
                          variable="Stopaj oranı"
                          change="Yükselirse"
                          effect="Gerekli ana para artar"
                        />

                        <TableRow
                          variable="Hedef kazanç"
                          change="Yükselirse"
                          effect="Gerekli ana para artar"
                        />
                      </tbody>
                    </table>
                  </div>
                </div>
              </ContentSection>

              <ContentSection
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Hesaplama yaparken dikkat edilmesi gerekenler"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <CheckItem text="Faiz oranının yıllık brüt oran olduğundan emin olun." />
                  <CheckItem text="Bankanın kullandığı 360 veya 365 gün esasını kontrol edin." />
                  <CheckItem text="Güncel stopaj oranını doğru şekilde girin." />
                  <CheckItem text="Vade başlangıç ve bitiş tarihlerini dikkate alın." />
                  <CheckItem text="Kampanyalı faiz oranlarının şartlarını inceleyin." />
                  <CheckItem text="Vade bozulduğunda uygulanabilecek faiz kaybını kontrol edin." />
                </div>
              </ContentSection>
            </article>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <WalletCards className="h-6 w-6" />
                </div>

                <h2 className="mt-5 text-xl font-black text-slate-950">
                  Kısa hesaplama özeti
                </h2>

                <div className="mt-5 space-y-4">
                  <SidebarRow label="Kazanç türü" value="Net faiz" />
                  <SidebarRow label="Faiz türü" value="Yıllık brüt" />
                  <SidebarRow label="Vergi" value="Stopaj" />
                  <SidebarRow label="Hesaplama" value="Basit faiz" />
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
                    href="/hesaplamalar/faiz-hesaplama"
                    title="Faiz Hesaplama"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <Banknote className="h-7 w-7 text-cyan-300" />

                <h2 className="mt-5 text-xl font-black">
                  Banka tekliflerini karşılaştırın
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Aynı hedef kazanç için farklı bankaların sunduğu faiz
                  oranlarını araca girerek gereken ana para tutarlarını
                  karşılaştırabilirsiniz.
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
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Sık sorulan sorular
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Mevduat getiri hedefi hakkında merak edilenler
              </h2>

              <p className="mt-4 text-base leading-8 text-slate-600">
                Hesaplama yöntemi, faiz oranı, stopaj ve vade süresi hakkında
                en çok sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-4xl space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 open:border-blue-200 open:bg-blue-50"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left font-bold text-slate-950 sm:px-6">
                    <span>{item.question}</span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-lg text-slate-600 transition group-open:rotate-45 group-open:border-blue-300 group-open:text-blue-700">
                      +
                    </span>
                  </summary>

                  <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <p className="border-t border-blue-200 pt-4 text-sm leading-7 text-slate-700">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-800 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-14">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                  Diğer finans hesaplama araçlarını keşfedin
                </h2>

                <p className="mt-4 text-sm leading-7 text-blue-100 sm:text-base">
                  Kredi, mevduat, faiz, vergi ve kişisel finans
                  hesaplamalarınızı ücretsiz araçlarımızla kolayca yapın.
                </p>
              </div>

              <Link
                href="/hesaplamalar"
                className="inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-bold text-blue-800 shadow-xl transition hover:-translate-y-0.5 hover:bg-blue-50"
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
              <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-slate-500" />

              <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                Bu sayfadaki hesaplamalar yalnızca bilgilendirme amacıyla
                hazırlanmıştır ve yatırım tavsiyesi niteliği taşımaz. Banka
                faiz oranları, stopaj uygulamaları ve ürün koşulları
                değişebilir. İşlem yapmadan önce bankanızın güncel
                bilgilendirmelerini kontrol ediniz.
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
    <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold text-blue-50 backdrop-blur">
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
      <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-200">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-white">{value}</p>
    </div>
  );
}

type GuideCardProps = {
  number: string;
  icon: React.ReactNode;
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

      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white">
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
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
};

function ContentSection({
  icon,
  title,
  children,
}: ContentSectionProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
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
  children: React.ReactNode;
};

function FormulaBox({ children }: FormulaBoxProps) {
  return (
    <div className="overflow-x-auto rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-100 sm:p-6">
      {children}
    </div>
  );
}

type TableRowProps = {
  variable: string;
  change: string;
  effect: string;
};

function TableRow({
  variable,
  change,
  effect,
}: TableRowProps) {
  return (
    <tr>
      <td className="px-5 py-4 font-bold text-slate-950">
        {variable}
      </td>

      <td className="px-5 py-4 text-slate-600">{change}</td>

      <td className="px-5 py-4 text-slate-600">{effect}</td>
    </tr>
  );
}

type CheckItemProps = {
  text: string;
};

function CheckItem({ text }: CheckItemProps) {
  return (
    <div className="flex gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />

      <p className="text-sm leading-6 text-emerald-950">{text}</p>
    </div>
  );
}

type SidebarRowProps = {
  label: string;
  value: string;
};

function SidebarRow({ label, value }: SidebarRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-blue-200 pb-3 last:border-b-0 last:pb-0">
      <span className="text-sm text-slate-600">{label}</span>
      <span className="text-sm font-bold text-slate-950">{value}</span>
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
      className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
    >
      {title}
      <ArrowRight className="h-4 w-4 shrink-0" />
    </Link>
  );
}