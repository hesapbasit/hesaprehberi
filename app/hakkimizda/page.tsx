import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Calculator,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  FileCheck2,
  FileText,
  HeartPulse,
  Landmark,
  Lightbulb,
  LockKeyhole,
  MessageCircle,
  ReceiptText,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const baseUrl = "https://hesaprehberionline.com";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "HesapRehberi'nin amacı, çalışma yaklaşımı, ücretsiz hesaplama araçları ve kullanıcılarına sunduğu faydalar hakkında bilgi edinin.",

  keywords: [
    "HesapRehberi hakkında",
    "HesapRehberi nedir",
    "ücretsiz hesaplama platformu",
    "online hesaplama araçları",
    "finans hesaplama platformu",
    "kredi hesaplama",
    "KDV hesaplama",
    "maaş hesaplama",
    "faiz hesaplama",
    "döviz hesaplama",
  ],

  alternates: {
    canonical: "/hakkimizda",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/hakkimizda`,
    siteName: "HesapRehberi",
    title: "Hakkımızda | HesapRehberi",
    description:
      "Hesaplamaları daha anlaşılır, hızlı ve erişilebilir hâle getiren HesapRehberi platformunu yakından tanıyın.",
    images: [
      {
        url: "/logo-512.png",
        width: 512,
        height: 512,
        alt: "HesapRehberi hesaplama platformu logosu",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "Hakkımızda | HesapRehberi",
    description:
      "Ücretsiz hesaplama araçları sunan HesapRehberi'nin amacı, yaklaşımı ve değerleri hakkında bilgi edinin.",
    images: ["/logo-512.png"],
  },
};

const platformStats = [
  {
    value: "50+",
    label: "Hesaplama aracı",
    description: "Farklı ihtiyaçlar için geliştirilen ücretsiz araçlar",
    icon: Calculator,
  },
  {
    value: "10+",
    label: "Hesaplama kategorisi",
    description: "Finanstan sağlığa uzanan kapsamlı içerik yapısı",
    icon: Building2,
  },
  {
    value: "%100",
    label: "Ücretsiz kullanım",
    description: "Üyelik veya ödeme gerektirmeyen erişim",
    icon: BadgeCheck,
  },
  {
    value: "7/24",
    label: "Kesintisiz erişim",
    description: "Telefon, tablet ve bilgisayardan kullanım",
    icon: Smartphone,
  },
];

const primaryValues = [
  {
    title: "Kolay kullanım",
    description:
      "Karmaşık hesaplamaları sade formlar, anlaşılır başlıklar ve kullanıcıyı yönlendiren açıklamalarla herkes için erişilebilir hâle getiriyoruz.",
    icon: Calculator,
  },
  {
    title: "Şeffaf yaklaşım",
    description:
      "Araçların hangi bilgilerle çalıştığını açıkça gösteriyor, sonuçların bilgilendirme amacı taşıdığını ve değişebileceğini dürüstçe belirtiyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Sürekli gelişim",
    description:
      "Yeni hesaplama araçları, daha kapsamlı rehberler ve daha iyi bir kullanıcı deneyimi için platformu düzenli olarak geliştiriyoruz.",
    icon: Sparkles,
  },
];

const missionItems = [
  "Hesaplama işlemlerini daha kolay ve anlaşılır hâle getirmek",
  "Farklı ihtiyaçlara yönelik araçları tek platformda toplamak",
  "Kullanıcıların zaman kaybetmeden sonuca ulaşmasını sağlamak",
  "Hesaplama sonuçlarını açıklayıcı içeriklerle desteklemek",
];

const visionItems = [
  "Türkiye'nin güvenilir hesaplama platformlarından biri olmak",
  "Günlük hayatta ihtiyaç duyulan hesaplamaları genişletmek",
  "Bilgilendirici rehberlerle finansal farkındalığı desteklemek",
  "Her cihazda hızlı ve erişilebilir bir deneyim sunmak",
];

const categories = [
  {
    title: "Kredi hesaplamaları",
    description:
      "Kredi taksiti, toplam ödeme, faiz maliyeti ve farklı vade seçeneklerini incelemeye yardımcı olan araçlar.",
    icon: Landmark,
  },
  {
    title: "Faiz ve mevduat",
    description:
      "Basit faiz, bileşik faiz, mevduat getirisi ve erken bozma kaybı gibi işlemlere yönelik hesaplamalar.",
    icon: TrendingUp,
  },
  {
    title: "Vergi hesaplamaları",
    description:
      "KDV, gelir vergisi ve günlük ticari işlemlerde ihtiyaç duyulan vergi hesaplama araçları.",
    icon: ReceiptText,
  },
  {
    title: "Maaş ve çalışma",
    description:
      "Brüt-net maaş, kıdem tazminatı, fazla mesai ve çalışma hayatına ilişkin hesaplama araçları.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Döviz ve para",
    description:
      "Para birimi dönüşümleri ve farklı tutarların karşılaştırılması için pratik araçlar.",
    icon: Banknote,
  },
  {
    title: "Konut ve kira",
    description:
      "Kira artışı, konut kredisi ve ev maliyetleriyle ilgili hesaplamaları destekleyen araçlar.",
    icon: WalletCards,
  },
  {
    title: "Tarih ve zaman",
    description:
      "Yaş, gün farkı, çalışma süresi ve belirli tarihler arasındaki zaman aralığını hesaplayan araçlar.",
    icon: CalendarDays,
  },
  {
    title: "Sağlık hesaplamaları",
    description:
      "Vücut kitle indeksi, ideal kilo ve günlük sağlık değerlerine ilişkin genel bilgilendirme araçları.",
    icon: HeartPulse,
  },
];

const editorialPrinciples = [
  {
    title: "Sade anlatım",
    description:
      "Teknik konuları gereksiz karmaşıklık oluşturmadan, günlük dilde ve anlaşılır biçimde açıklamaya özen gösteriyoruz.",
    icon: MessageCircle,
  },
  {
    title: "Kullanıcı odaklı yapı",
    description:
      "Formları, sonuç ekranlarını ve içerikleri kullanıcıların ihtiyaç duyduğu bilgiye daha hızlı ulaşabileceği şekilde düzenliyoruz.",
    icon: Users,
  },
  {
    title: "Açık bilgilendirme",
    description:
      "Sonuçların genel bilgilendirme amacı taşıdığını ve gerçek uygulamalarla farklılık gösterebileceğini görünür biçimde belirtiyoruz.",
    icon: FileCheck2,
  },
  {
    title: "İçerik bütünlüğü",
    description:
      "Hesaplama araçlarını yalnızca sonuç üreten formlar olarak değil, açıklayıcı rehberlerle desteklenen bütünlüklü kaynaklar olarak ele alıyoruz.",
    icon: BookOpen,
  },
];

const developmentSteps = [
  {
    number: "01",
    title: "İhtiyacı belirliyoruz",
    description:
      "Kullanıcıların günlük hayatta sık karşılaştığı ve hesaplamakta zorlandığı konuları değerlendiriyoruz.",
    icon: Search,
  },
  {
    number: "02",
    title: "Hesaplama yapısını oluşturuyoruz",
    description:
      "Gerekli girdileri, temel formülleri ve sonuçların nasıl sunulacağını planlıyoruz.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Deneyimi sadeleştiriyoruz",
    description:
      "Form alanlarını, açıklamaları ve sonuç kartlarını mümkün olduğunca anlaşılır bir yapıda tasarlıyoruz.",
    icon: Zap,
  },
  {
    number: "04",
    title: "İçerikle destekliyoruz",
    description:
      "Hesaplama sonucunun daha iyi anlaşılması için rehberler, açıklamalar ve sık sorulan sorular hazırlıyoruz.",
    icon: FileText,
  },
];

const trustItems = [
  {
    title: "Üyelik gerektirmez",
    description:
      "Hesaplama araçlarını kullanmak için hesap oluşturmanız veya kişisel profil açmanız gerekmez.",
    icon: LockKeyhole,
  },
  {
    title: "Ücretsiz erişim",
    description:
      "Platformdaki hesaplama araçları kullanıcıların ücretsiz biçimde erişebilmesi amacıyla sunulur.",
    icon: BadgeCheck,
  },
  {
    title: "Mobil uyumluluk",
    description:
      "Sayfalar telefon, tablet ve masaüstü cihazlarda rahat kullanılabilecek şekilde hazırlanır.",
    icon: Smartphone,
  },
  {
    title: "Açıklayıcı sonuçlar",
    description:
      "Hesaplama sonuçları yalnızca sayı olarak değil, özet ve açıklamalarla birlikte sunulmaya çalışılır.",
    icon: CheckCircle2,
  },
];

const faqItems = [
  {
    question: "HesapRehberi nedir?",
    answer:
      "HesapRehberi; finans, vergi, maaş, kredi, mevduat, konut, tarih ve sağlık gibi farklı alanlarda ücretsiz hesaplama araçları sunan çevrim içi bir platformdur.",
  },
  {
    question: "HesapRehberi'nin temel amacı nedir?",
    answer:
      "Temel amacımız, kullanıcıların farklı sitelerde zaman kaybetmeden ihtiyaç duydukları hesaplamalara tek bir platform üzerinden ulaşmasını sağlamaktır.",
  },
  {
    question: "Hesaplama araçları ücretsiz mi?",
    answer:
      "Evet. HesapRehberi üzerinde yer alan hesaplama araçları ücretsiz olarak kullanılabilir.",
  },
  {
    question: "Araçları kullanmak için üyelik gerekiyor mu?",
    answer:
      "Hayır. Hesaplama araçlarını kullanmak için kayıt olmanız veya giriş yapmanız gerekmez.",
  },
  {
    question: "Hesaplama sonuçları kesin midir?",
    answer:
      "Sonuçlar, kullanıcı tarafından girilen bilgiler ve kullanılan genel hesaplama yöntemleri üzerinden hazırlanır. Kurumların güncel oranları, kesintileri ve uygulamaları nedeniyle gerçek sonuçlar farklı olabilir.",
  },
  {
    question: "HesapRehberi resmî bir kurum mudur?",
    answer:
      "Hayır. HesapRehberi bağımsız bir bilgilendirme ve hesaplama platformudur; banka, kamu kurumu veya resmî danışmanlık kuruluşu değildir.",
  },
  {
    question: "Finansal kararlar için sonuçlara güvenebilir miyim?",
    answer:
      "Araçlar genel fikir edinmenize yardımcı olabilir. Ancak önemli finansal, vergisel veya hukuki kararlar öncesinde bankalardan, resmî kurumlardan veya alanında uzman kişilerden doğrulama almanız gerekir.",
  },
  {
    question: "Yeni hesaplama araçları eklenecek mi?",
    answer:
      "Evet. Kullanıcıların ihtiyaçları doğrultusunda yeni hesaplama araçları ve açıklayıcı rehberler eklenmesi planlanmaktadır.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${baseUrl}/hakkimizda/#webpage`,
      url: `${baseUrl}/hakkimizda`,
      name: "Hakkımızda | HesapRehberi",
      headline: "Hesaplamaları herkes için daha kolay hâle getiriyoruz",
      description:
        "HesapRehberi'nin amacı, yaklaşımı, ücretsiz hesaplama araçları ve kullanıcılarına sunduğu faydalar hakkında bilgi edinin.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/hakkimizda/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/hakkimizda/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: `${baseUrl}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hakkımızda",
          item: `${baseUrl}/hakkimizda`,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/hakkimizda/#faq`,
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

export default function HakkimizdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                label: "Hakkımızda",
              },
            ]}
          />
        </div>

        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-14 lg:pb-32">
          <div
            className="pointer-events-none absolute inset-0 -z-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(15,23,42,0.055) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />

          <div
            className="pointer-events-none absolute -left-48 top-0 -z-10 size-[34rem] rounded-full bg-blue-200/50 blur-3xl"
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-48 top-20 -z-10 size-[36rem] rounded-full bg-indigo-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                HesapRehberi'ni yakından tanıyın
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Hesaplamaları herkes için
                <span className="block text-blue-700">
                  daha anlaşılır hâle getiriyoruz
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                HesapRehberi; finans, vergi, maaş, kredi, döviz, mevduat,
                konut, tarih ve sağlık alanlarında ihtiyaç duyulan
                hesaplamaları sade, hızlı ve ücretsiz araçlarla sunmak amacıyla
                geliştirilen bir platformdur.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/hesaplamalar"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Hesaplama araçlarını keşfet
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/blog"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <BookOpen className="size-5" aria-hidden="true" />
                  Rehberleri incele
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-7">
                {[
                  "Ücretsiz kullanım",
                  "Üyelik gerektirmez",
                  "Mobil uyumlu",
                  "Açık bilgilendirme",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-slate-600"
                  >
                    <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero sağ panel */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-cyan-100/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Target className="size-6" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Temel yaklaşımımız
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Sade, şeffaf ve kullanıcı odaklı
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Ücretsiz
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "Kolay anlaşılır araçlar",
                      description:
                        "Gereksiz karmaşıklık oluşturmayan sade formlar",
                      icon: Calculator,
                    },
                    {
                      title: "Açık sonuç sunumu",
                      description:
                        "Sonucu destekleyen özetler ve bilgilendirmeler",
                      icon: FileCheck2,
                    },
                    {
                      title: "Gelişen içerik yapısı",
                      description:
                        "Yeni hesaplama araçları ve kapsamlı rehberler",
                      icon: Sparkles,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>

                        <div>
                          <p className="text-sm font-bold text-slate-950">
                            {item.title}
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-blue-300"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-6 text-slate-300">
                      Hesaplama sonuçlarını her zaman genel bilgilendirme
                      amacıyla sunuyor, önemli kararlar için resmî kaynakların
                      dikkate alınmasını öneriyoruz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İstatistikler */}
        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <article
                  key={stat.label}
                  className={`p-6 sm:p-7 ${
                    index !== platformStats.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-2xl font-bold tracking-tight text-slate-950">
                        {stat.value}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-700">
                        {stat.label}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {stat.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Hikâyemiz */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-blue-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-indigo-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.45) 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />

              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Lightbulb className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
                  Bir ihtiyacı daha basit çözme fikriyle başladık
                </h2>

                <p className="mt-6 leading-8 text-slate-300">
                  Günlük hayatta sıkça ihtiyaç duyulan hesaplamalar çoğu zaman
                  karmaşık formlar, anlaşılması güç terimler veya farklı
                  kaynaklar arasında dağılmış bilgilerle sunuluyor.
                </p>

                <p className="mt-5 leading-8 text-slate-300">
                  HesapRehberi, kullanıcıların ihtiyaç duydukları araca hızlıca
                  ulaşabildiği, gerekli bilgileri kolayca girebildiği ve sonucu
                  sade biçimde inceleyebildiği tek bir platform oluşturma
                  düşüncesiyle geliştirildi.
                </p>

                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <CheckCircle2
                    className="size-6 shrink-0 text-blue-300"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-slate-200">
                    Amacımız yalnızca hesaplama sonucu göstermek değil, sonucu
                    anlamayı kolaylaştıran bir deneyim sunmaktır.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <BookOpen className="size-4 text-blue-700" aria-hidden="true" />
                Hikâyemiz
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Hesaplama araçlarını
                <span className="text-blue-700"> anlaşılır bilgiyle</span>
                birleştiriyoruz
              </h2>

              <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                HesapRehberi'nde araçları yalnızca sayısal sonuç üreten
                formlar olarak görmüyoruz. Kullanıcının hesaplamanın ne anlama
                geldiğini, sonucu hangi bilgilerin etkilediğini ve hangi
                durumlarda farklılık oluşabileceğini anlayabilmesini
                önemsiyoruz.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                Bu nedenle hesaplama sayfalarını açıklamalar, örnekler, sık
                sorulan sorular ve kapsamlı rehberlerle destekliyoruz. Böylece
                kullanıcıların yalnızca sonuca değil, ihtiyaç duyduğu temel
                bilgiye de ulaşmasını hedefliyoruz.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Sade form yapıları",
                  "Açıklayıcı sonuç kartları",
                  "Bilgilendirici rehberler",
                  "Mobil uyumlu deneyim",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                      <Check className="size-4" aria-hidden="true" />
                    </span>

                    <span className="text-sm font-semibold text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Temel değerler */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Target className="size-4" aria-hidden="true" />
                Temel değerlerimiz
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Her araçta aynı
                <span className="text-blue-700"> kalite yaklaşımı</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Platformu geliştirirken aldığımız kararların merkezinde
                kullanılabilirlik, şeffaflık ve sürekli gelişim bulunur.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {primaryValues.map((value) => {
                const Icon = value.icon;

                return (
                  <article
                    key={value.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div
                      className="pointer-events-none absolute -right-14 -top-14 size-40 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-blue-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
                      <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                        <Icon className="size-7" aria-hidden="true" />
                      </div>

                      <h3 className="mt-7 text-2xl font-bold text-slate-950">
                        {value.title}
                      </h3>

                      <p className="mt-4 leading-8 text-slate-600">
                        {value.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Misyon ve vizyon */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="relative overflow-hidden rounded-[2rem] border border-blue-200 bg-blue-50 p-8 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full bg-blue-200/60"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                    <Target className="size-7" aria-hidden="true" />
                  </div>

                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                    Misyonumuz
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                    Hesaplamaları daha erişilebilir hâle getirmek
                  </h2>

                  <p className="mt-6 leading-8 text-slate-700">
                    Kullanıcıların ihtiyaç duydukları hesaplama araçlarına
                    kolayca ulaşmasını, gerekli bilgileri doğru biçimde
                    girmesini ve sonuçları anlaşılır şekilde incelemesini
                    sağlamak istiyoruz.
                  </p>

                  <div className="mt-8 space-y-4">
                    {missionItems.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-blue-700"
                          aria-hidden="true"
                        />

                        <p className="text-sm leading-7 text-slate-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              <article className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl shadow-slate-950/15 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute -bottom-20 -right-14 size-64 rounded-full bg-indigo-600/30 blur-3xl"
                  aria-hidden="true"
                />

                <div
                  className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-blue-600/20 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                    <TrendingUp className="size-7" aria-hidden="true" />
                  </div>

                  <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-blue-300">
                    Vizyonumuz
                  </p>

                  <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                    Güvenilir ve kapsamlı bir hesaplama merkezi olmak
                  </h2>

                  <p className="mt-6 leading-8 text-slate-300">
                    HesapRehberi'ni, kullanıcıların farklı alanlardaki
                    hesaplama ihtiyaçları için ilk başvurduğu, sade ve güven
                    veren bir platform hâline getirmeyi hedefliyoruz.
                  </p>

                  <div className="mt-8 space-y-4">
                    {visionItems.map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-blue-300"
                          aria-hidden="true"
                        />

                        <p className="text-sm leading-7 text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Kategoriler */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  <Building2 className="size-4 text-blue-700" aria-hidden="true" />
                  Platform kapsamı
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Günlük hayatın farklı alanlarına yönelik
                  <span className="text-blue-700"> hesaplama araçları</span>
                </h2>
              </div>

              <p className="text-base leading-8 text-slate-600 sm:text-lg">
                Finansal işlemlerden tarih ve sağlık hesaplamalarına kadar
                farklı ihtiyaçları tek bir düzenli yapı altında topluyoruz.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <article
                    key={category.title}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>

                      <ChevronRight
                        className="size-5 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-700"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {category.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {category.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/hesaplamalar"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Tüm hesaplamaları görüntüle
                <ArrowRight
                  className="size-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Editoryal yaklaşım */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <FileCheck2 className="size-4" aria-hidden="true" />
                İçerik yaklaşımımız
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Sonuç kadar
                <span className="text-blue-700"> açıklamayı da önemsiyoruz</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Araçların yanında yer alan içerikleri, kullanıcıların konuyu
                daha iyi anlayabilmesine yardımcı olacak şekilde hazırlıyoruz.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {editorialPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {principle.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Geliştirme süreci */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                <Zap className="size-4 text-blue-700" aria-hidden="true" />
                Geliştirme sürecimiz
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Her aracı kullanıcı ihtiyacından başlayarak geliştiriyoruz
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Araçları geliştirirken yalnızca formülü değil, kullanıcının
                hangi bilgiye ihtiyaç duyduğunu ve sonucu nasıl daha rahat
                anlayabileceğini de değerlendiriyoruz.
              </p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                <div className="flex gap-3">
                  <ShieldCheck
                    className="mt-0.5 size-5 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7 text-blue-950">
                    Yeni araçlar ve mevcut sayfalardaki iyileştirmeler,
                    platformun genel tasarım ve içerik standardıyla uyumlu
                    olacak şekilde hazırlanır.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {developmentSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                  >
                    <div
                      className="pointer-events-none absolute -right-4 -top-8 text-8xl font-black text-slate-100 transition group-hover:text-blue-50"
                      aria-hidden="true"
                    >
                      {step.number}
                    </div>

                    <div className="relative flex gap-5">
                      <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>

                      <div className="pr-8">
                        <h3 className="text-xl font-bold text-slate-950">
                          {step.title}
                        </h3>

                        <p className="mt-3 leading-7 text-slate-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Güven */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                  Güven ve şeffaflık
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Kullanıcıların ne gördüğünü ve
                  <span className="text-blue-700">
                    {" "}
                    ne anlama geldiğini bilmesini önemsiyoruz
                  </span>
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  HesapRehberi bir banka, kamu kurumu veya resmî danışmanlık
                  kuruluşu değildir. Platformdaki araçlar genel bilgilendirme
                  amacıyla hazırlanır.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Bankaların, kamu kurumlarının, işverenlerin veya diğer
                  kuruluşların uyguladığı güncel oranlar ve kurallar nedeniyle
                  gerçek sonuçlar farklılık gösterebilir. Bu nedenle önemli
                  kararlar öncesinde resmî kaynakların kontrol edilmesini
                  öneriyoruz.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {trustItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>

                      <h3 className="mt-5 text-lg font-bold text-slate-950">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 shadow-2xl shadow-slate-950/20 sm:px-10 sm:py-16 lg:px-16">
              <div
                className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-blue-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-32 right-0 size-80 rounded-full bg-indigo-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Calculator className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  İhtiyacınız olan hesaplamayı kolayca bulun
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Farklı kategorilerdeki ücretsiz hesaplama araçlarını
                  inceleyin veya hesaplama konularını daha iyi anlamak için
                  rehberlerimizi okuyun.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/hesaplamalar"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplamaları keşfet
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/blog"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Rehberleri oku
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SSS */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <BookOpen className="size-4" aria-hidden="true" />
                Sık sorulan sorular
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                HesapRehberi hakkında merak edilenler
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Platformun amacı, kapsamı ve hesaplama araçlarının kullanımıyla
                ilgili sık sorulan soruların yanıtlarını inceleyin.
              </p>
            </div>

            <div className="mt-14 space-y-4">
              {faqItems.map((item, index) => (
                <details
                  key={item.question}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition open:border-blue-200 open:bg-white open:shadow-lg open:shadow-slate-900/5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-6 font-bold text-slate-950 marker:hidden sm:p-7">
                    <span className="flex items-center gap-4">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {item.question}
                    </span>

                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition duration-300 group-open:rotate-45 group-open:border-blue-200 group-open:text-blue-700">
                      +
                    </span>
                  </summary>

                  <div className="border-t border-slate-200 px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                    <p className="leading-8 text-slate-600">{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Son bilgilendirme */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <Users className="size-4" aria-hidden="true" />
                  Kullanıcı odaklı gelişim
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Daha iyi bir hesaplama deneyimi için çalışıyoruz
                </h2>

                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  HesapRehberi tamamlanmış ve değişmeyen bir platform değildir.
                  Yeni ihtiyaçlar ortaya çıktıkça araçları geliştiriyor, mevcut
                  içerikleri daha anlaşılır hâle getiriyor ve kullanıcı
                  deneyimini iyileştiriyoruz.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Kullanıcıların hangi araçlara ihtiyaç duyduğunu, hangi
                  açıklamaların yetersiz kaldığını ve hangi bölümlerin daha
                  kolay kullanılabileceğini dikkate alarak platformu adım adım
                  büyütmeyi hedefliyoruz.
                </p>

                <Link
                  href="/iletisim"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Bizimle iletişime geçin
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="relative flex min-h-96 items-center bg-blue-700 p-8 text-white sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.45) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-white/20 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <ShieldCheck
                    className="size-12 text-blue-100"
                    aria-hidden="true"
                  />

                  <h3 className="mt-7 text-2xl font-bold">
                    Önemli bilgilendirme
                  </h3>

                  <p className="mt-5 leading-8 text-blue-100">
                    HesapRehberi üzerinde sunulan hesaplama sonuçları genel
                    bilgilendirme amacı taşır. Sonuçlar, kullanıcı tarafından
                    girilen bilgiler ve genel hesaplama yöntemleri üzerinden
                    oluşturulur.
                  </p>

                  <p className="mt-5 leading-8 text-blue-100">
                    Finansal, vergisel, hukuki veya sağlıkla ilgili önemli
                    kararlar vermeden önce resmî kaynaklardan ve alanında uzman
                    kişilerden doğrulama alınmalıdır.
                  </p>

                  <div className="mt-7 flex items-center gap-3 text-sm font-medium text-white">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                    Şeffaf ve sorumlu bilgilendirme yaklaşımı
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}