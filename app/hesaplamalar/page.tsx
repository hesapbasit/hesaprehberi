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
  Clock3,
  FileText,
  HeartPulse,
  HomeIcon,
  Landmark,
  LockKeyhole,
  ReceiptText,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  WalletCards,
  Zap,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import CalculationsDirectory from "@/components/ui/CalculationsDirectory";

const baseUrl = "https://hesaprehberionline.com";

export const metadata: Metadata = {
  title: "Tüm Hesaplamalar",
  description:
    "Kredi, KDV, faiz, maaş, döviz, mevduat, vergi, konut, tarih ve sağlık hesaplama araçlarının tamamını ücretsiz kullanın.",

  keywords: [
    "hesaplama araçları",
    "online hesaplama",
    "ücretsiz hesaplama",
    "kredi hesaplama",
    "KDV hesaplama",
    "faiz hesaplama",
    "maaş hesaplama",
    "döviz hesaplama",
    "mevduat hesaplama",
    "vergi hesaplama",
    "kira artış hesaplama",
    "yaş hesaplama",
    "tarih hesaplama",
    "sağlık hesaplama",
    "HesapRehberi",
  ],

  alternates: {
    canonical: "/hesaplamalar",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/hesaplamalar`,
    siteName: "HesapRehberi",
    title: "Tüm Hesaplamalar | HesapRehberi",
    description:
      "Finans, vergi, maaş, kredi, konut, tarih ve sağlık alanlarındaki ücretsiz hesaplama araçlarını keşfedin.",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "HesapRehberi tüm hesaplama araçları",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tüm Hesaplamalar | HesapRehberi",
    description:
      "Kredi, KDV, faiz, maaş, döviz, mevduat, konut, tarih ve sağlık hesaplamalarını ücretsiz yapın.",
    images: ["/logo.jpg"],
  },
};

const platformStats = [
  {
    value: "50+",
    label: "Ücretsiz hesaplama aracı",
    icon: Calculator,
  },
  {
    value: "10+",
    label: "Farklı hesaplama kategorisi",
    icon: Building2,
  },
  {
    value: "%100",
    label: "Ücretsiz kullanım",
    icon: BadgeCheck,
  },
  {
    value: "7/24",
    label: "Kesintisiz erişim",
    icon: Clock3,
  },
];

const categories = [
  {
    title: "Kredi Hesaplamaları",
    description:
      "İhtiyaç, taşıt ve konut kredilerinde taksit, faiz ve toplam geri ödeme tutarlarını hesaplayın.",
    icon: Landmark,
    href: "#tum-hesaplamalar",
    tools: [
      "Kredi hesaplama",
      "Kredi taksiti hesaplama",
      "Erken ödeme hesaplama",
    ],
  },
  {
    title: "Faiz ve Mevduat",
    description:
      "Basit faiz, bileşik faiz ve mevduat getirisi gibi finansal sonuçları inceleyin.",
    icon: TrendingUp,
    href: "#tum-hesaplamalar",
    tools: [
      "Faiz hesaplama",
      "Mevduat getirisi",
      "Erken bozma kaybı",
    ],
  },
  {
    title: "Vergi Hesaplamaları",
    description:
      "KDV, gelir vergisi ve günlük işlemlerde karşılaşabileceğiniz vergi tutarlarını hesaplayın.",
    icon: ReceiptText,
    href: "#tum-hesaplamalar",
    tools: [
      "KDV hesaplama",
      "Gelir vergisi",
      "Vergi dahil tutar",
    ],
  },
  {
    title: "Maaş ve Çalışma",
    description:
      "Brüt maaş, net maaş, kıdem tazminatı ve çalışma hayatına ilişkin hesaplamaları yapın.",
    icon: BriefcaseBusiness,
    href: "#tum-hesaplamalar",
    tools: [
      "Maaş hesaplama",
      "Kıdem tazminatı",
      "Fazla mesai",
    ],
  },
  {
    title: "Döviz ve Para",
    description:
      "Türk lirası ve yabancı para birimleri arasında tutar dönüşümlerini gerçekleştirin.",
    icon: Banknote,
    href: "#tum-hesaplamalar",
    tools: [
      "Döviz çevirme",
      "Kur hesaplama",
      "Para birimi dönüşümü",
    ],
  },
  {
    title: "Konut ve Kira",
    description:
      "Kira artışı, konut kredisi ve ev maliyetlerine ilişkin sonuçları görüntüleyin.",
    icon: HomeIcon,
    href: "#tum-hesaplamalar",
    tools: [
      "Kira artış hesaplama",
      "Konut kredisi",
      "Ev maliyeti",
    ],
  },
  {
    title: "Tarih ve Zaman",
    description:
      "İki tarih arasındaki farkı, yaşınızı, çalışma sürenizi ve önemli günleri hesaplayın.",
    icon: CalendarDays,
    href: "#tum-hesaplamalar",
    tools: [
      "Yaş hesaplama",
      "Gün farkı",
      "Çalışma süresi",
    ],
  },
  {
    title: "Sağlık Hesaplamaları",
    description:
      "Vücut kitle indeksi, ideal kilo ve günlük sağlık değerlerinizi kolayca hesaplayın.",
    icon: HeartPulse,
    href: "#tum-hesaplamalar",
    tools: [
      "VKİ hesaplama",
      "İdeal kilo",
      "Kalori ihtiyacı",
    ],
  },
];

const popularTools = [
  {
    title: "Kredi Hesaplama",
    description:
      "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit ile toplam ödeme tutarını hesaplayın.",
    href: "/hesaplamalar/kredi-hesaplama",
    icon: Landmark,
    label: "Kredi",
  },
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil veya KDV hariç fiyatı seçtiğiniz oran üzerinden kolayca hesaplayın.",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
    label: "Vergi",
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Anapara, faiz oranı ve süre bilgilerini kullanarak faiz getirisini görüntüleyin.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: TrendingUp,
    label: "Faiz",
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt ve net maaş arasındaki farkı, kesintileri ve tahmini maaş sonucunu inceleyin.",
    href: "/hesaplamalar/maas-hesaplama",
    icon: WalletCards,
    label: "Maaş",
  },
];

const usageSteps = [
  {
    number: "01",
    title: "Hesaplama aracını bulun",
    description:
      "Arama alanını, kategori filtrelerini veya araç listesini kullanarak ihtiyacınıza uygun hesaplamayı seçin.",
    icon: Search,
  },
  {
    number: "02",
    title: "Gerekli bilgileri girin",
    description:
      "Tutar, oran, vade, tarih veya hesaplama için gereken diğer bilgileri ilgili alanlara yazın.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Sonucu inceleyin",
    description:
      "Hesaplanan sonucu, detaylı dağılımları ve varsa karşılaştırmalı bilgileri görüntüleyin.",
    icon: CheckCircle2,
  },
];

const benefits = [
  {
    title: "Hızlı hesaplama",
    description:
      "Formları doldurduktan sonra sonuçlarınızı saniyeler içinde görüntüleyebilirsiniz.",
    icon: Zap,
  },
  {
    title: "Üyelik gerektirmez",
    description:
      "Hesaplama araçlarını kullanmak için hesap oluşturmanız veya giriş yapmanız gerekmez.",
    icon: LockKeyhole,
  },
  {
    title: "Mobil uyumlu",
    description:
      "Araçları telefon, tablet ve bilgisayar üzerinden rahatlıkla kullanabilirsiniz.",
    icon: Smartphone,
  },
  {
    title: "Anlaşılır sonuçlar",
    description:
      "Sonuçlar sade başlıklar, özetler ve açıklamalarla kolayca incelenebilir.",
    icon: BookOpen,
  },
];

const faqItems = [
  {
    question: "Hesaplama araçları ücretsiz mi?",
    answer:
      "Evet. HesapRehberi üzerinde yer alan hesaplama araçlarını ücretsiz olarak kullanabilirsiniz. Araçları kullanabilmek için üyelik oluşturmanız veya ödeme yapmanız gerekmez.",
  },
  {
    question: "Hesaplama yapmak için kayıt olmak gerekiyor mu?",
    answer:
      "Hayır. Hesaplama araçları üyelik gerektirmeden kullanılabilir. İlgili aracı açmanız ve gerekli bilgileri girmeniz yeterlidir.",
  },
  {
    question: "Hesaplama sonuçları kesin sonuç mudur?",
    answer:
      "Sonuçlar, girilen bilgiler ve kullanılan genel hesaplama formülleri üzerinden oluşturulur. Banka, kurum, mevzuat, kesinti ve kişisel koşullara göre gerçek sonuçlarda farklılık oluşabilir.",
  },
  {
    question: "Hangi hesaplama araçları bulunuyor?",
    answer:
      "Kredi, KDV, faiz, maaş, döviz, mevduat, vergi, konut, kira, tarih, sağlık ve günlük yaşama yönelik farklı kategorilerde hesaplama araçları bulunmaktadır.",
  },
  {
    question: "Hesaplamalar mobil cihazlarda kullanılabilir mi?",
    answer:
      "Evet. Sayfalar telefon, tablet ve masaüstü cihazlarla uyumlu olacak şekilde hazırlanmıştır.",
  },
  {
    question: "Girdiğim bilgiler kaydediliyor mu?",
    answer:
      "Hesaplama araçları üyelik sistemi gerektirmez. Girdiğiniz bilgileri yine de kişisel veya hassas bilgi içermeyecek şekilde kullanmanız önerilir.",
  },
  {
    question: "Yanlış sonuç alırsam ne yapmalıyım?",
    answer:
      "Öncelikle girdiğiniz tutar, oran, tarih ve süre bilgilerini kontrol edin. Önemli finansal, vergisel, hukuki veya sağlık kararlarında resmî kaynaklardan ve uzmanlardan doğrulama alın.",
  },
  {
    question: "Yeni hesaplama araçları eklenecek mi?",
    answer:
      "HesapRehberi, günlük hayatta ihtiyaç duyulan yeni hesaplama araçları ve bilgilendirici rehberlerle düzenli olarak geliştirilmektedir.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/hesaplamalar/#webpage`,
      url: `${baseUrl}/hesaplamalar`,
      name: "Tüm Hesaplamalar",
      headline: "Tüm Hesaplamalar",
      description:
        "Finans, vergi, maaş, kredi, konut, tarih ve sağlık alanlarındaki ücretsiz hesaplama araçları.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/hesaplamalar/#breadcrumb`,
      },
      mainEntity: {
        "@id": `${baseUrl}/hesaplamalar/#calculator-directory`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/hesaplamalar/#breadcrumb`,
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
          name: "Hesaplamalar",
          item: `${baseUrl}/hesaplamalar`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${baseUrl}/hesaplamalar/#calculator-directory`,
      name: "HesapRehberi Hesaplama Araçları",
      description:
        "Finans, vergi, maaş, konut, tarih ve sağlık kategorilerindeki hesaplama araçları.",
      numberOfItems: categories.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: category.title,
        description: category.description,
        url: `${baseUrl}/hesaplamalar`,
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/hesaplamalar/#faq`,
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

export default function HesaplamalarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-slate-50">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              {
                label: "Hesaplamalar",
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
            className="pointer-events-none absolute -right-48 top-16 -z-10 size-[36rem] rounded-full bg-indigo-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                Tüm hesaplama araçları
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                İhtiyacınız olan
                <span className="block text-blue-700">
                  hesaplamayı kolayca bulun
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Finans, kredi, vergi, maaş, mevduat, konut, tarih ve sağlık
                alanlarındaki hesaplama araçlarını arayın, filtreleyin ve
                ücretsiz kullanın.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#tum-hesaplamalar"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Hesaplama aracını bul
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
                  "Anlaşılır sonuçlar",
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

            {/* Hero önizleme paneli */}
            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-cyan-100/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-7">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Calculator className="size-6" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Hesaplama Merkezi
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        Popüler araçlara hızlı erişim
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Ücretsiz
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {popularTools.map((tool) => {
                    const Icon = tool.icon;

                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                            <Icon className="size-5" aria-hidden="true" />
                          </div>

                          <ChevronRight
                            className="size-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700"
                            aria-hidden="true"
                          />
                        </div>

                        <p className="mt-4 text-sm font-bold text-slate-950">
                          {tool.title}
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          {tool.label}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-600/20 text-blue-300">
                      <Search className="size-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-sm font-bold">
                        Aradığınız aracı kolayca bulun
                      </p>

                      <p className="mt-1 text-xs leading-5 text-slate-400">
                        Araç adı veya kategori yazarak sonuçları filtreleyin.
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href="#tum-hesaplamalar"
                  className="group mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Tüm araçları görüntüle
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl sm:block lg:-left-10">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-slate-500">
                      Kolay kullanım
                    </p>

                    <p className="mt-0.5 text-sm font-bold text-slate-950">
                      Kayıt gerektirmez
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* İstatistik alanı */}
        <section
          aria-label="HesapRehberi hesaplama platformu bilgileri"
          className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {platformStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 p-6 sm:p-7 ${
                    index !== platformStats.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xl font-bold tracking-tight text-slate-950">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Kategori alanı */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                  <Building2 className="size-4 text-blue-700" aria-hidden="true" />
                  Hesaplama kategorileri
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                  Aradığınız hesaplamaya
                  <span className="text-blue-700"> kategorisinden ulaşın</span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                  Farklı ihtiyaçlara göre gruplandırılmış hesaplama araçlarını
                  inceleyerek size uygun araca daha hızlı ulaşabilirsiniz.
                </p>
              </div>

              <div className="flex lg:justify-end">
                <Link
                  href="#tum-hesaplamalar"
                  className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Araç listesine geç
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;

                return (
                  <Link
                    key={category.title}
                    href={category.href}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-blue-50 transition duration-500 group-hover:scale-150 group-hover:bg-blue-100"
                      aria-hidden="true"
                    />

                    <div className="relative">
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

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {category.description}
                      </p>

                      <div className="mt-5 space-y-2">
                        {category.tools.map((tool) => (
                          <div
                            key={tool}
                            className="flex items-center gap-2 text-xs font-medium text-slate-500"
                          >
                            <CheckCircle2
                              className="size-3.5 shrink-0 text-blue-600"
                              aria-hidden="true"
                            />

                            {tool}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popüler hesaplamalar */}
        <section className="relative border-y border-slate-200 bg-white py-24 sm:py-28">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-blue-50/80 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="size-4" aria-hidden="true" />
                Sık kullanılan araçlar
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Popüler hesaplamalara
                <span className="text-blue-700"> doğrudan erişin</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Kullanıcıların günlük hayatta sık ihtiyaç duyduğu hesaplama
                araçlarından birini seçerek işleminize hemen başlayın.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {popularTools.map((tool) => {
                const Icon = tool.icon;

                return (
                  <article
                    key={tool.href}
                    className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>

                      <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600">
                        {tool.label}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {tool.title}
                    </h3>

                    <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                      {tool.description}
                    </p>

                    <Link
                      href={tool.href}
                      className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                      aria-label={`${tool.title} aracını aç`}
                    >
                      Hesaplamaya başla
                      <ArrowRight
                        className="size-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mevcut hesaplama dizini */}
        <section
          id="tum-hesaplamalar"
          className="scroll-mt-24 py-24 sm:py-28"
          aria-labelledby="all-calculations-title"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
              <div className="mb-10 border-b border-slate-200 pb-9">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <Search className="size-4" aria-hidden="true" />
                  Ara, filtrele ve keşfet
                </div>

                <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
                  <div>
                    <h2
                      id="all-calculations-title"
                      className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
                    >
                      Tüm hesaplama araçları
                    </h2>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                      Araç adına göre arama yapın, kategorileri kullanarak
                      sonuçları filtreleyin ve ihtiyacınız olan hesaplamayı
                      ücretsiz şekilde gerçekleştirin.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">
                    <div className="flex gap-3">
                      <ShieldCheck
                        className="mt-0.5 size-5 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />

                      <div>
                        <p className="text-sm font-bold text-emerald-950">
                          Üyelik gerektirmez
                        </p>

                        <p className="mt-1 text-sm leading-6 text-emerald-800">
                          Bir araç seçin, gerekli bilgileri girin ve sonucu
                          hemen görüntüleyin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CalculationsDirectory />
            </div>
          </div>
        </section>

        {/* Nasıl kullanılır */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                  <Calculator className="size-4 text-blue-700" aria-hidden="true" />
                  Nasıl kullanılır?
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Hesaplamanızı üç basit adımda tamamlayın
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Teknik bilgiye ihtiyaç duymadan, ihtiyacınız olan sonucu kısa
                  sürede görüntüleyebilirsiniz.
                </p>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-7 text-blue-950">
                      Sonucun doğru hesaplanabilmesi için tutar, oran, süre ve
                      tarih gibi bilgileri kontrol ederek girmeniz önemlidir.
                    </p>
                  </div>
                </div>

                <Link
                  href="#tum-hesaplamalar"
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Hesaplama aracını seç
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <div className="grid gap-5">
                {usageSteps.map((step) => {
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
          </div>
        </section>

        {/* Avantajlar */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <BadgeCheck className="size-4" aria-hidden="true" />
                HesapRehberi avantajları
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Günlük hesaplamalar için
                <span className="text-blue-700"> pratik bir platform</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Karmaşık işlemleri daha erişilebilir hâle getiren hesaplama
                araçlarını farklı cihazlardan ücretsiz kullanın.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article
                    key={benefit.title}
                    className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {benefit.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {benefit.description}
                    </p>
                  </article>
                );
              })}
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
                  İhtiyacınız olan hesaplamaya şimdi başlayın
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Finans, vergi, maaş, konut, tarih ve sağlık alanlarındaki
                  araçlardan birini seçerek sonucunuzu saniyeler içinde
                  görüntüleyin.
                </p>

                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-3">
                  {[
                    "Ücretsiz kullanım",
                    "Üyelik gerektirmez",
                    "Mobil uyumlu",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm font-medium text-slate-300"
                    >
                      <CheckCircle2
                        className="size-4 text-blue-300"
                        aria-hidden="true"
                      />

                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="#tum-hesaplamalar"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplama araçlarını görüntüle
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/blog"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplama rehberlerini oku
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
                Hesaplama araçları hakkında merak edilenler
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Platformun kullanımı ve hesaplama sonuçlarıyla ilgili sık
                sorulan soruların yanıtlarını inceleyin.
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

        {/* SEO açıklaması ve bilgilendirme */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <FileText className="size-4" aria-hidden="true" />
                  Online hesaplama araçları
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Günlük işlemler için ücretsiz hesaplama merkezi
                </h2>

                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  HesapRehberi, günlük hayatta ihtiyaç duyulan hesaplama
                  işlemlerini tek bir platform altında toplar. Kredi taksiti,
                  KDV, faiz, maaş, mevduat, döviz, kira artışı ve tarih
                  hesaplamaları gibi birçok işlemi çevrim içi olarak
                  gerçekleştirebilirsiniz.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Araçlar, gerekli bilgileri mümkün olduğunca sade biçimde
                  girmenize ve sonucu anlaşılır özetlerle incelemenize yardımcı
                  olacak şekilde hazırlanmıştır. Hesaplama sonucunun yanında
                  yer alan açıklamalar ve rehberler sayesinde kullanılan yöntem
                  hakkında da bilgi edinebilirsiniz.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Finans hesaplamaları",
                    "Vergi araçları",
                    "Maaş işlemleri",
                    "Konut ve kira",
                    "Tarih hesaplamaları",
                    "Sağlık araçları",
                  ].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600"
                    >
                      <CheckCircle2
                        className="size-4 text-blue-600"
                        aria-hidden="true"
                      />

                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-96 items-center bg-slate-950 p-8 sm:p-10 lg:p-12">
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
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-blue-600/40 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <ShieldCheck
                    className="size-12 text-blue-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    Önemli bilgilendirme
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Hesaplama sonuçları genel bilgilendirme amacıyla sunulur.
                    Bankaların, kamu kurumlarının, işverenlerin veya diğer
                    kuruluşların uyguladığı güncel oranlar ve kurallar nedeniyle
                    gerçek sonuçlarda farklılık oluşabilir.
                  </p>

                  <p className="mt-5 leading-8 text-slate-300">
                    Finansal, vergisel, hukuki veya sağlıkla ilgili önemli
                    kararlar vermeden önce güncel resmî kaynakları ve alanında
                    uzman kişilerin görüşlerini dikkate alın.
                  </p>

                  <div className="mt-7 flex items-center gap-3 text-sm font-medium text-blue-200">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                    Şeffaf ve anlaşılır hesaplama yaklaşımı
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