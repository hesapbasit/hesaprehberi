import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Clock3,
  Cookie,
  Database,
  ExternalLink,
  Eye,
  FileCheck2,
  FileText,
  Fingerprint,
  Globe2,
  Info,
  KeyRound,
  LockKeyhole,
  Mail,
  Megaphone,
  MousePointerClick,
  RefreshCcw,
  Scale,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Trash2,
  UserCheck,
  UserRound,
  Users,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const baseUrl = "https://hesaprehberionline.com";
const contactEmail = "1hesaprehberi@gmail.com";
const lastUpdated = "24 Temmuz 2026";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "HesapRehberi gizlilik politikası; kişisel veriler, çerezler, Google Analytics, Google AdSense, log kayıtları, üçüncü taraf hizmetler ve kullanıcı hakları hakkında ayrıntılı bilgi sunar.",
  keywords: [
    "HesapRehberi gizlilik politikası",
    "HesapRehberi çerez politikası",
    "kişisel veriler",
    "KVKK bilgilendirme",
    "Google Analytics",
    "Google AdSense",
    "internet sitesi gizlilik politikası",
  ],
  alternates: {
    canonical: "/gizlilik-politikasi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/gizlilik-politikasi`,
    siteName: "HesapRehberi",
    title: "Gizlilik Politikası | HesapRehberi",
    description:
      "HesapRehberi'nin veri işleme, çerez, analiz, reklam ve kullanıcı gizliliği yaklaşımını inceleyin.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HesapRehberi Gizlilik Politikası",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gizlilik Politikası | HesapRehberi",
    description:
      "HesapRehberi'nin veri işleme, çerez, analiz, reklam ve kullanıcı gizliliği yaklaşımını inceleyin.",
    images: ["/og-image.png"],
  },
};

const tableOfContents = [
  { id: "genel-bakis", label: "Genel bakış" },
  { id: "toplanan-veriler", label: "Toplanan veriler" },
  { id: "verilerin-kullanimi", label: "Verilerin kullanım amaçları" },
  { id: "cerezler", label: "Çerezler ve benzer teknolojiler" },
  { id: "analytics", label: "Google Analytics" },
  { id: "adsense", label: "Google AdSense" },
  { id: "log-kayitlari", label: "Sunucu ve log kayıtları" },
  { id: "ucuncu-taraflar", label: "Üçüncü taraf hizmetler" },
  { id: "veri-guvenligi", label: "Veri güvenliği" },
  { id: "saklama-suresi", label: "Veri saklama süresi" },
  { id: "kullanici-haklari", label: "Kullanıcı hakları" },
  { id: "cocuklarin-gizliligi", label: "Çocukların gizliliği" },
  { id: "harici-baglantilar", label: "Harici bağlantılar" },
  { id: "degisiklikler", label: "Politika değişiklikleri" },
  { id: "iletisim", label: "İletişim" },
];

const privacyHighlights = [
  {
    title: "Hesaplama verileri",
    description:
      "Araçlara girdiğiniz tutar, oran ve benzeri hesaplama değerleri normal kullanım sırasında sunucuda kişisel profil oluşturmak amacıyla saklanmaz.",
    icon: BarChart3,
  },
  {
    title: "Hassas bilgi talebi yok",
    description:
      "HesapRehberi sizden banka şifresi, kart bilgisi, T.C. kimlik numarası veya doğrulama kodu istemez.",
    icon: KeyRound,
  },
  {
    title: "Sınırlı veri işleme",
    description:
      "Yalnızca hizmetin çalışması, güvenliği, geliştirilmesi ve yasal yükümlülüklerin karşılanması için gerekli veriler işlenir.",
    icon: Database,
  },
  {
    title: "Şeffaflık",
    description:
      "Kullanılan analiz ve reklam hizmetleri ile çerezlerin amaçları bu sayfada açık biçimde açıklanır.",
    icon: Eye,
  },
];

const collectedData = [
  {
    title: "Teknik kullanım verileri",
    description:
      "IP adresi, tarayıcı türü, işletim sistemi, cihaz türü, yönlendiren sayfa, ziyaret zamanı, görüntülenen sayfalar ve temel hata kayıtları gibi teknik veriler otomatik olarak işlenebilir.",
    icon: Server,
  },
  {
    title: "Analiz verileri",
    description:
      "Sayfa görüntüleme, oturum süresi, genel trafik kaynağı, etkileşimler ve performans ölçümleri gibi anonimleştirilmiş veya toplulaştırılmış kullanım bilgileri analiz araçları aracılığıyla işlenebilir.",
    icon: BarChart3,
  },
  {
    title: "İletişim verileri",
    description:
      "Bize e-posta gönderdiğinizde e-posta adresiniz, mesaj içeriğiniz ve mesajda isteğe bağlı olarak paylaştığınız bilgiler işlenebilir.",
    icon: Mail,
  },
  {
    title: "Çerez tercihleri",
    description:
      "Çerez ve gizlilik tercihlerinizi hatırlamak için cihazınızda tercih kayıtları tutulabilir.",
    icon: Cookie,
  },
];

const processingPurposes = [
  "Hesaplama araçlarının ve sayfaların doğru şekilde çalışmasını sağlamak",
  "Teknik sorunları, hataları ve kötüye kullanım girişimlerini tespit etmek",
  "Site performansını, hızını ve kullanıcı deneyimini geliştirmek",
  "En çok kullanılan içerik ve araçları genel istatistiklerle anlamak",
  "Kullanıcı geri bildirimlerini ve iletişim taleplerini yanıtlamak",
  "Reklamların sunulmasını ve reklam performansının ölçülmesini sağlamak",
  "Hukuki yükümlülükleri yerine getirmek ve hakları korumak",
];

const cookieCategories = [
  {
    title: "Zorunlu çerezler",
    badge: "Temel",
    description:
      "Sitenin güvenli ve düzgün çalışması, oturum bütünlüğü ve tercihlerin hatırlanması gibi temel işlevler için kullanılabilir.",
    examples: "Güvenlik, yük dengeleme, tercih kaydı",
    icon: LockKeyhole,
    colorClassName: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    title: "Analitik çerezler",
    badge: "Ölçüm",
    description:
      "Ziyaretçilerin siteyi genel olarak nasıl kullandığını anlamaya, performans sorunlarını belirlemeye ve içerikleri iyileştirmeye yardımcı olur.",
    examples: "Sayfa görüntüleme, oturum, etkileşim",
    icon: BarChart3,
    colorClassName: "border-blue-200 bg-blue-50 text-blue-800",
  },
  {
    title: "Reklam çerezleri",
    badge: "Reklam",
    description:
      "Google AdSense ve benzeri reklam hizmetleri tarafından reklam sunumu, sıklık yönetimi ve performans ölçümü amacıyla kullanılabilir.",
    examples: "Reklam gösterimi, ölçüm, sınırlama",
    icon: Megaphone,
    colorClassName: "border-violet-200 bg-violet-50 text-violet-800",
  },
  {
    title: "İşlevsel teknolojiler",
    badge: "Deneyim",
    description:
      "Dil, görünüm veya daha önce yapılan tercihler gibi kullanıcı deneyimini kolaylaştıran ayarların hatırlanmasına yardımcı olabilir.",
    examples: "Arayüz ve tercih ayarları",
    icon: Settings2,
    colorClassName: "border-amber-200 bg-amber-50 text-amber-900",
  },
];

const rights = [
  {
    title: "Bilgi talep etme",
    description:
      "Kişisel verilerinizin işlenip işlenmediği ve işleniyorsa buna ilişkin bilgi talep edebilirsiniz.",
    icon: CircleHelp,
  },
  {
    title: "Erişim ve düzeltme",
    description:
      "İşlenen kişisel verilerinize erişim talep edebilir, eksik veya hatalı bilgilerin düzeltilmesini isteyebilirsiniz.",
    icon: UserCheck,
  },
  {
    title: "Silme talebi",
    description:
      "Yasal saklama yükümlülükleri saklı kalmak üzere, işleme amacı ortadan kalkmış verilerin silinmesini talep edebilirsiniz.",
    icon: Trash2,
  },
  {
    title: "İtiraz ve sınırlama",
    description:
      "Uygulanabilir mevzuat kapsamında belirli veri işleme faaliyetlerine itiraz edebilir veya işlemenin sınırlandırılmasını isteyebilirsiniz.",
    icon: Scale,
  },
];

const thirdPartyServices = [
  {
    name: "Google Analytics",
    purpose:
      "Site trafiğinin, performansın ve genel kullanıcı etkileşimlerinin ölçülmesi.",
    data:
      "Cihaz, tarayıcı, yaklaşık konum, trafik kaynağı ve kullanım istatistikleri.",
    icon: BarChart3,
  },
  {
    name: "Google AdSense",
    purpose:
      "Reklamların sunulması, reklam güvenliği, sıklık yönetimi ve performans ölçümü.",
    data:
      "Çerez veya benzer tanımlayıcılar, reklam etkileşimleri ve teknik cihaz bilgileri.",
    icon: Megaphone,
  },
  {
    name: "Vercel",
    purpose:
      "Web sitesinin barındırılması, dağıtılması, güvenliği ve teknik performansının sağlanması.",
    data:
      "Sunucu istekleri, IP adresi, zaman damgası, kullanıcı aracısı ve hata kayıtları.",
    icon: Server,
  },
  {
    name: "Cloudflare",
    purpose:
      "İçerik dağıtımı, ağ güvenliği, kötüye kullanımın önlenmesi ve performans iyileştirmesi.",
    data:
      "Ağ trafiği, IP adresi, güvenlik sinyalleri ve teknik istek bilgileri.",
    icon: ShieldCheck,
  },
];

const securityMeasures = [
  "HTTPS ve güncel şifreleme protokolleri",
  "Yetkisiz erişimi azaltmaya yönelik erişim kontrolleri",
  "Güvenlik ve performans izleme mekanizmaları",
  "Kötüye kullanım ve otomatik saldırı tespitleri",
  "Gereksiz verilerin toplanmaması ilkesi",
  "Hizmet sağlayıcıların güvenlik özelliklerinden yararlanılması",
];

const faqItems = [
  {
    question: "Hesaplama araçlarına girdiğim veriler kaydediliyor mu?",
    answer:
      "Hesaplama araçlarına girdiğiniz tutar, oran, süre ve benzeri değerler normal kullanım sırasında kişisel profil oluşturmak amacıyla sunucuda saklanmaz. Hesaplamalar çoğunlukla tarayıcı üzerinde gerçekleştirilir. Bununla birlikte teknik hata kayıtları veya genel kullanım istatistikleri, girdiğiniz değerlerle ilişkilendirilmeksizin işlenebilir.",
  },
  {
    question: "HesapRehberi hangi kişisel verileri toplar?",
    answer:
      "Siteyi ziyaret ettiğinizde IP adresi, cihaz ve tarayıcı bilgisi, ziyaret zamanı, görüntülenen sayfalar ve trafik kaynağı gibi teknik veriler otomatik olarak işlenebilir. Bize e-posta gönderirseniz e-posta adresiniz ve mesaj içeriğiniz de işlenir.",
  },
  {
    question: "Google Analytics kullanılıyor mu?",
    answer:
      "Evet. HesapRehberi, site trafiğini ve genel kullanım eğilimlerini anlamak amacıyla Google Analytics kullanabilir. Bu hizmet, çerezler veya benzer teknolojiler aracılığıyla teknik ve kullanım verileri işleyebilir.",
  },
  {
    question: "Google AdSense neden veri işliyor?",
    answer:
      "Google AdSense reklamların sunulması, reklam güvenliği, gösterim sıklığının yönetimi ve reklam performansının ölçülmesi için çerezler veya benzer tanımlayıcılar kullanabilir.",
  },
  {
    question: "Çerezleri kapatabilir miyim?",
    answer:
      "Tarayıcınızın ayarlarından çerezleri silebilir, engelleyebilir veya belirli siteler için sınırlandırabilirsiniz. Zorunlu çerezlerin devre dışı bırakılması bazı site işlevlerinin beklenen şekilde çalışmamasına yol açabilir.",
  },
  {
    question: "HesapRehberi hassas finansal bilgi ister mi?",
    answer:
      "Hayır. HesapRehberi banka şifresi, kart numarası, CVV, doğrulama kodu, T.C. kimlik numarası veya hesap giriş bilgisi istemez. Bu tür bilgileri e-posta yoluyla da paylaşmamalısınız.",
  },
  {
    question: "Veriler ne kadar süre saklanır?",
    answer:
      "Veriler, işleme amacı için gerekli olan süre boyunca veya yasal yükümlülüklerin gerektirdiği sürelerle sınırlı olarak saklanır. Süre sona erdiğinde veriler silinir, anonimleştirilir veya güvenli şekilde erişilemez hâle getirilir.",
  },
  {
    question: "Veriler başka ülkelere aktarılabilir mi?",
    answer:
      "Google, Vercel ve Cloudflare gibi küresel hizmet sağlayıcılar nedeniyle teknik veriler Türkiye dışındaki sunucularda işlenebilir. Bu hizmet sağlayıcılar kendi sözleşmeleri ve gizlilik politikaları kapsamında veri güvenliği önlemleri uygular.",
  },
  {
    question: "Kişisel verilerimle ilgili talep nasıl gönderebilirim?",
    answer:
      "Kişisel verilerinizle ilgili erişim, düzeltme, silme veya diğer taleplerinizi 1hesaprehberi@gmail.com adresine gönderebilirsiniz. Talebin doğru kişiden geldiğini doğrulamak için makul ek bilgi istenebilir.",
  },
  {
    question: "Bu politika hukuki danışmanlık niteliğinde mi?",
    answer:
      "Hayır. Bu metin HesapRehberi'nin veri ve gizlilik yaklaşımını açıklamak için hazırlanmıştır. Belirli bir hukuki durum hakkında profesyonel danışmanlık yerine geçmez.",
  },
  {
    question: "Çocuklara ait veriler bilerek toplanıyor mu?",
    answer:
      "HesapRehberi hizmetleri genel kullanıcı kitlesine yöneliktir ve çocuklardan bilerek kişisel veri toplama amacı taşımaz. Bir çocuğa ait verinin izinsiz işlendiğini düşünüyorsanız bizimle iletişime geçebilirsiniz.",
  },
  {
    question: "Gizlilik politikası değişebilir mi?",
    answer:
      "Evet. Hizmetler, kullanılan teknolojiler veya yasal gereklilikler değiştiğinde bu politika güncellenebilir. Güncel sürüm bu sayfada yayımlanır ve son güncelleme tarihi sayfanın üst kısmında belirtilir.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/gizlilik-politikasi/#webpage`,
      url: `${baseUrl}/gizlilik-politikasi`,
      name: "Gizlilik Politikası | HesapRehberi",
      headline: "HesapRehberi Gizlilik Politikası",
      description:
        "HesapRehberi'nin kişisel veriler, çerezler, analiz, reklam hizmetleri ve kullanıcı hakları hakkındaki gizlilik politikası.",
      dateModified: "2026-07-24",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/gizlilik-politikasi/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/gizlilik-politikasi/#breadcrumb`,
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
          name: "Gizlilik Politikası",
          item: `${baseUrl}/gizlilik-politikasi`,
        },
      ],
    },
    {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "HesapRehberi",
      url: baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo-512.png`,
        width: 512,
        height: 512,
      },
      email: contactEmail,
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/gizlilik-politikasi/#faq`,
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

export default function GizlilikPolitikasiPage() {
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
                label: "Gizlilik Politikası",
              },
            ]}
          />
        </div>

        <section className="relative isolate overflow-hidden pb-24 pt-10 sm:pb-28 sm:pt-14">
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
            className="pointer-events-none absolute -right-48 top-10 -z-10 size-[38rem] rounded-full bg-indigo-200/40 blur-3xl"
            aria-hidden="true"
          />

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Gizlilik ve veri güvenliği
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Verilerinize saygı duyan
                <span className="block text-blue-700">
                  şeffaf bir gizlilik yaklaşımı
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Bu politika; HesapRehberi'ni ziyaret ettiğinizde hangi
                verilerin işlenebileceğini, bu verilerin neden kullanıldığını,
                çerezleri, analiz ve reklam hizmetlerini ve sahip olduğunuz
                hakları açıklar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                  <Clock3 className="size-4 text-blue-700" aria-hidden="true" />
                  Son güncelleme: {lastUpdated}
                </div>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  Güncel sürüm
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#genel-bakis"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Politikayı incele
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <Link
                  href="/iletisim"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <Mail className="size-5" aria-hidden="true" />
                  Gizlilik talebi gönder
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-cyan-100/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Fingerprint className="size-6" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">
                        Gizlilik özeti
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Temel yaklaşımımız
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Şeffaf
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Hesaplama değerleri profil oluşturmak için saklanmaz",
                    "Hassas finansal bilgi talep edilmez",
                    "Veriler yalnızca gerekli amaçlarla işlenir",
                    "Çerez ve üçüncü taraf hizmetler açıkça açıklanır",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                    >
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-6 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex gap-3">
                    <AlertTriangle
                      className="mt-0.5 size-5 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <p className="text-sm leading-7 text-amber-950">
                      E-posta yoluyla şifre, kart bilgisi, kimlik numarası veya
                      doğrulama kodu göndermeyin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {privacyHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`p-6 sm:p-7 ${
                    index !== privacyHighlights.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-slate-950">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <BookOpen className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="font-bold text-slate-950">İçindekiler</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Bölümlere hızlı erişim
                    </p>
                  </div>
                </div>

                <nav className="mt-6" aria-label="Gizlilik politikası içindekiler">
                  <ul className="space-y-1">
                    {tableOfContents.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          <span>{item.label}</span>
                          <ChevronRight
                            className="size-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600"
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-4">
                  <p className="text-xs leading-6 text-blue-900">
                    Bu metin, HesapRehberi'nin mevcut işleyişini açıklamak için
                    hazırlanmıştır ve hukuki danışmanlık niteliğinde değildir.
                  </p>
                </div>
              </div>
            </aside>

            <article className="min-w-0 space-y-8">
              <section
                id="genel-bakis"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Info className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 01
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Genel bakış
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    HesapRehberi, ziyaretçilerinin gizliliğine önem verir. Bu
                    gizlilik politikası, hesaprehberionline.com alan adı ve bu
                    alan adı altında sunulan sayfalar, hesaplama araçları ve
                    içeriklerle bağlantılı olarak hangi bilgilerin
                    işlenebileceğini açıklar.
                  </p>

                  <p>
                    Siteyi kullanmanız, bu politikada açıklanan veri işleme
                    faaliyetleri hakkında bilgi sahibi olduğunuz anlamına
                    gelir. Belirli çerezler veya üçüncü taraf teknolojiler için
                    yasal olarak gerektiğinde ayrıca onay mekanizmaları
                    sunulabilir.
                  </p>

                  <p>
                    HesapRehberi bir banka, finans kuruluşu, kamu kurumu veya
                    finansal danışmanlık hizmeti değildir. Site üzerinde yer
                    alan araçlar genel bilgilendirme amacı taşır. Hesaplama
                    alanlarına girdiğiniz finansal değerler, sizin adınıza
                    hesap veya profil oluşturmak amacıyla kullanılmaz.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2
                        className="size-5 text-emerald-700"
                        aria-hidden="true"
                      />
                      <h3 className="font-bold text-emerald-950">
                        Temel ilkemiz
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-emerald-900">
                      Gerekli olmayan kişisel verileri toplamamak ve kullanılan
                      hizmetleri açık biçimde açıklamak.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                    <div className="flex items-center gap-3">
                      <UserRound
                        className="size-5 text-blue-700"
                        aria-hidden="true"
                      />
                      <h3 className="font-bold text-blue-950">
                        Kullanıcı sorumluluğu
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-blue-900">
                      İletişim sırasında yalnızca gerekli bilgileri paylaşın ve
                      hassas verileri e-posta yoluyla göndermeyin.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="toplanan-veriler"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Database className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">
                      Bölüm 02
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Toplanabilecek veriler
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Toplanan veya işlenen veri türü, siteyi nasıl kullandığınıza
                  ve hangi üçüncü taraf özelliklerinin etkin olduğuna göre
                  değişebilir. Genel olarak aşağıdaki veri kategorileri söz
                  konusu olabilir.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {collectedData.map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                      >
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-950">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <div className="flex gap-4">
                    <AlertTriangle
                      className="mt-0.5 size-6 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-amber-950">
                        Hassas veri paylaşmayın
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-amber-900">
                        HesapRehberi sizden banka kartı numarası, CVV, hesap
                        şifresi, SMS doğrulama kodu, T.C. kimlik numarası veya
                        benzeri hassas bilgi istemez. Bu bilgileri hesaplama
                        alanlarına veya e-posta mesajlarına yazmayın.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="verilerin-kullanimi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <FileCheck2 className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
                      Bölüm 03
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Verilerin kullanım amaçları
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  İşlenen veriler, amaçla bağlantılı, sınırlı ve ölçülü olma
                  ilkesi doğrultusunda aşağıdaki amaçlarla kullanılabilir.
                </p>

                <div className="mt-8 grid gap-4">
                  {processingPurposes.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-7 text-slate-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm leading-7 text-blue-950">
                    HesapRehberi, kullanıcıların hesaplama araçlarına girdiği
                    değerleri kişiye özel finansal profil oluşturmak, kredi
                    değerlendirmesi yapmak veya kullanıcı adına finansal karar
                    vermek amacıyla kullanmaz.
                  </p>
                </div>
              </section>

              <section
                id="cerezler"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <Cookie className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                      Bölüm 04
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Çerezler ve benzer teknolojiler
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınız
                    aracılığıyla cihazınıza kaydedilebilen küçük metin
                    dosyalarıdır. Benzer işlevler yerel depolama, piksel,
                    etiket veya cihaz tanımlayıcıları gibi teknolojilerle de
                    sağlanabilir.
                  </p>

                  <p>
                    Çerezler; sitenin temel işlevlerini yürütmek, tercihleri
                    hatırlamak, performansı ölçmek, güvenliği artırmak ve reklam
                    hizmetlerini sunmak amacıyla kullanılabilir.
                  </p>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {cookieCategories.map((category) => {
                    const Icon = category.icon;

                    return (
                      <article
                        key={category.title}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                            <Icon className="size-6" aria-hidden="true" />
                          </div>

                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-bold ${category.colorClassName}`}
                          >
                            {category.badge}
                          </span>
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-950">
                          {category.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {category.description}
                        </p>

                        <div className="mt-5 rounded-xl border border-slate-200 bg-white px-4 py-3">
                          <p className="text-xs font-semibold text-slate-500">
                            Örnek kullanım
                          </p>
                          <p className="mt-1 text-sm font-medium text-slate-700">
                            {category.examples}
                          </p>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="font-bold text-slate-950">
                    Çerezleri nasıl yönetebilirsiniz?
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Çoğu tarayıcı çerezleri görüntüleme, silme, engelleme veya
                    belirli siteler için sınırlandırma seçenekleri sunar.
                    Ayarlar tarayıcıya ve cihaza göre değişebilir. Çerezleri
                    tamamen devre dışı bırakmak, bazı sayfaların veya
                    özelliklerin beklenen şekilde çalışmamasına neden olabilir.
                  </p>
                </div>
              </section>

              <section
                id="analytics"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <BarChart3 className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 05
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Google Analytics
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi, site trafiğini ve genel kullanım eğilimlerini
                    anlamak amacıyla Google Analytics kullanabilir. Bu hizmet,
                    sayfa görüntüleme, ziyaret süresi, trafik kaynağı, cihaz ve
                    tarayıcı türü gibi kullanım verilerini işleyebilir.
                  </p>

                  <p>
                    Analitik veriler; hangi sayfaların daha faydalı olduğunu
                    anlamak, teknik sorunları tespit etmek, sayfa hızını
                    iyileştirmek ve içerik stratejisini geliştirmek amacıyla
                    kullanılır. Analiz sonuçları çoğunlukla toplulaştırılmış
                    istatistikler üzerinden değerlendirilir.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Trafik ölçümü",
                      description: "Ziyaret ve sayfa görüntüleme eğilimleri",
                    },
                    {
                      title: "Performans",
                      description: "Hız ve teknik sorunların belirlenmesi",
                    },
                    {
                      title: "Deneyim",
                      description: "İçerik ve araçların iyileştirilmesi",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-blue-100 bg-blue-50 p-5"
                    >
                      <h3 className="font-bold text-blue-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-blue-900">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-7 text-sm leading-7 text-slate-500">
                  Google tarafından gerçekleştirilen veri işleme faaliyetleri,
                  Google'ın kendi gizlilik politikaları ve hizmet şartları
                  kapsamında yürütülür.
                </p>
              </section>

              <section
                id="adsense"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Megaphone className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">
                      Bölüm 06
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Google AdSense ve reklamlar
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi, ücretsiz içerik ve hesaplama araçlarının
                    sürdürülebilirliğini desteklemek amacıyla Google AdSense
                    üzerinden reklam gösterebilir.
                  </p>

                  <p>
                    Google ve reklam teknolojisi ortakları; reklam sunumu,
                    güvenlik, sahtekârlığın önlenmesi, reklam sıklığının
                    yönetimi ve performans ölçümü için çerezler, mobil reklam
                    tanımlayıcıları veya benzer teknolojiler kullanabilir.
                  </p>

                  <p>
                    Reklamların kişiselleştirilmesi, bulunduğunuz ülkeye,
                    verdiğiniz onaylara ve Google hesap ayarlarınıza göre
                    değişebilir. Bazı durumlarda kişiselleştirilmemiş reklamlar
                    da teknik tanımlayıcılar ve temel ölçüm verileri
                    kullanabilir.
                  </p>
                </div>

                <div className="mt-7 rounded-2xl border border-violet-200 bg-violet-50 p-6">
                  <div className="flex gap-4">
                    <MousePointerClick
                      className="mt-0.5 size-6 shrink-0 text-violet-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-violet-950">
                        Reklam tercihleri
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-violet-900">
                        Reklam kişiselleştirme tercihlerinizi Google hesabınızın
                        reklam ayarları ve tarayıcı çerez seçenekleri üzerinden
                        yönetebilirsiniz.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="log-kayitlari"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Server className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-600">
                      Bölüm 07
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Sunucu ve log kayıtları
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Siteye eriştiğinizde barındırma ve güvenlik sağlayıcıları
                    tarafından otomatik sunucu kayıtları oluşturulabilir. Bu
                    kayıtlarda IP adresi, istek zamanı, istenen sayfa, HTTP
                    durum kodu, tarayıcı bilgisi ve güvenlik sinyalleri gibi
                    teknik bilgiler bulunabilir.
                  </p>

                  <p>
                    Log kayıtları; sistem güvenliği, hata teşhisi, hizmet
                    sürekliliği, kötüye kullanımın önlenmesi ve hukuki
                    yükümlülüklerin yerine getirilmesi amaçlarıyla
                    kullanılabilir.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">
                      Teknik amaçlar
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Hata tespiti, performans izleme, kesinti analizi ve
                      güvenlik olaylarının incelenmesi.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">
                      Koruyucu amaçlar
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Bot trafiği, saldırı girişimleri, spam ve diğer kötüye
                      kullanım davranışlarının sınırlandırılması.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="ucuncu-taraflar"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                    <Globe2 className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">
                      Bölüm 08
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Üçüncü taraf hizmetler
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  HesapRehberi'nin çalışması, güvenliği, analizi ve reklam
                  sunumu için üçüncü taraf hizmet sağlayıcılarından
                  yararlanılabilir. Bu sağlayıcılar verileri kendi gizlilik
                  politikaları ve sözleşmeleri kapsamında işleyebilir.
                </p>

                <div className="mt-8 space-y-4">
                  {thirdPartyServices.map((service) => {
                    const Icon = service.icon;

                    return (
                      <article
                        key={service.name}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                      >
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                            <Icon className="size-6" aria-hidden="true" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl font-bold text-slate-950">
                              {service.name}
                            </h3>

                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                  Kullanım amacı
                                </p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                  {service.purpose}
                                </p>
                              </div>

                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                                  İşlenebilecek veriler
                                </p>
                                <p className="mt-2 text-sm leading-7 text-slate-600">
                                  {service.data}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm leading-7 text-blue-950">
                    Küresel hizmet sağlayıcılar nedeniyle bazı teknik veriler
                    Türkiye dışındaki sunucularda işlenebilir. İlgili
                    sağlayıcıların uyguladığı veri koruma önlemleri kendi
                    politikaları ve sözleşmeleri kapsamında değerlendirilir.
                  </p>
                </div>
              </section>

              <section
                id="veri-guvenligi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
                      Bölüm 09
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Veri güvenliği
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Kişisel ve teknik verilerin yetkisiz erişime, kayba, kötüye
                  kullanıma veya değişikliğe karşı korunması için makul teknik
                  ve organizasyonel önlemler uygulanır.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {securityMeasures.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-5 shrink-0 text-emerald-700"
                        aria-hidden="true"
                      />
                      <p className="text-sm leading-7 text-emerald-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <p className="text-sm leading-7 text-amber-950">
                    İnternet üzerinden hiçbir aktarım veya elektronik saklama
                    yöntemi mutlak güvenlik garanti etmez. Buna rağmen riskleri
                    azaltmak için güncel ve makul güvenlik önlemleri
                    kullanılmaya çalışılır.
                  </p>
                </div>
              </section>

              <section
                id="saklama-suresi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
                    <Clock3 className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">
                      Bölüm 10
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Veri saklama süresi
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Kişisel veriler, toplandıkları veya işlendikleri amaç için
                    gerekli olan süre boyunca ve uygulanabilir yasal
                    yükümlülüklerle sınırlı olarak saklanır.
                  </p>

                  <p>
                    Saklama süresi belirlenirken verinin niteliği, işleme
                    amacı, güvenlik gereksinimleri, olası uyuşmazlıklar ve
                    yasal zorunluluklar dikkate alınır. Süre sona erdiğinde
                    veriler silinir, anonimleştirilir veya güvenli şekilde
                    erişilemez hâle getirilir.
                  </p>
                </div>

                <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                  <div className="grid grid-cols-[0.9fr_1.1fr] bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
                    <div>Veri türü</div>
                    <div>Genel saklama yaklaşımı</div>
                  </div>

                  {[
                    [
                      "İletişim kayıtları",
                      "Talebin sonuçlandırılması ve gerektiğinde uyuşmazlıkların yönetimi için gerekli süre",
                    ],
                    [
                      "Sunucu logları",
                      "Güvenlik, hata analizi ve teknik gereksinimlerle sınırlı makul süre",
                    ],
                    [
                      "Analitik veriler",
                      "Hizmet sağlayıcının ayarları ve anonimleştirme politikaları doğrultusunda",
                    ],
                    [
                      "Çerez tercihleri",
                      "Tercihin hatırlanması için gerekli süre veya çerez silinene kadar",
                    ],
                  ].map(([type, approach], index) => (
                    <div
                      key={type}
                      className={`grid grid-cols-[0.9fr_1.1fr] px-5 py-4 text-sm ${
                        index !== 3 ? "border-b border-slate-200" : ""
                      }`}
                    >
                      <div className="font-semibold text-slate-800">{type}</div>
                      <div className="leading-6 text-slate-600">{approach}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="kullanici-haklari"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Scale className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 11
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Kullanıcı hakları
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Uygulanabilir veri koruma mevzuatı kapsamında, kişisel
                  verilerinizle ilgili çeşitli haklara sahip olabilirsiniz.
                  Talebin niteliğine ve yasal koşullara bağlı olarak aşağıdaki
                  haklar değerlendirilebilir.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {rights.map((right) => {
                    const Icon = right.icon;

                    return (
                      <article
                        key={right.title}
                        className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                      >
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-white text-blue-700 shadow-sm">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>

                        <h3 className="mt-5 text-xl font-bold text-slate-950">
                          {right.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {right.description}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <h3 className="font-bold text-blue-950">
                    Talep gönderme yöntemi
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-blue-900">
                    Taleplerinizi {contactEmail} adresine gönderebilirsiniz.
                    Talebin doğru kişiden geldiğini doğrulamak, güvenliği
                    sağlamak veya talebin kapsamını anlamak için makul ek bilgi
                    istenebilir. Hassas kimlik belgelerini ilk e-postanıza
                    eklemeyin.
                  </p>

                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                      "Kişisel Veri ve Gizlilik Talebi"
                    )}`}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-blue-700"
                  >
                    Gizlilik talebi gönder
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </section>

              <section
                id="cocuklarin-gizliligi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Users className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">
                      Bölüm 12
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Çocukların gizliliği
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi genel kullanıcı kitlesine yönelik bir
                    bilgilendirme ve hesaplama platformudur. Çocuklardan bilerek
                    kişisel veri toplama amacı taşımaz.
                  </p>

                  <p>
                    Bir ebeveyn veya yasal temsilci olarak, bir çocuğa ait
                    kişisel verinin izinsiz şekilde işlendiğini düşünüyorsanız
                    bizimle iletişime geçebilirsiniz. Durum doğrulandığında
                    uygun işlemler yapılır.
                  </p>
                </div>
              </section>

              <section
                id="harici-baglantilar"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-orange-50 text-orange-700">
                    <ExternalLink className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-orange-700">
                      Bölüm 13
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Harici bağlantılar
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Site içerisinde resmî kurumlara, bankalara, hizmet
                    sağlayıcılara veya diğer internet sitelerine yönlendiren
                    bağlantılar bulunabilir. Bu bağlantılar bilgilendirme
                    amacıyla sunulur.
                  </p>

                  <p>
                    HesapRehberi, üçüncü taraf sitelerin içeriklerinden,
                    güvenlik uygulamalarından, çerezlerinden veya gizlilik
                    politikalarından sorumlu değildir. Harici bir siteyi
                    ziyaret etmeden önce ilgili sitenin gizlilik politikasını
                    incelemeniz önerilir.
                  </p>
                </div>
              </section>

              <section
                id="degisiklikler"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-700">
                    <RefreshCcw className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">
                      Bölüm 14
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Politika değişiklikleri
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Bu gizlilik politikası; kullanılan hizmetlerin, teknik
                    altyapının, iş süreçlerinin veya yasal gerekliliklerin
                    değişmesi hâlinde güncellenebilir.
                  </p>

                  <p>
                    Güncellenen metin bu sayfada yayımlandığı tarihten itibaren
                    geçerli olur. Önemli değişikliklerde sayfa üzerinde ek
                    bilgilendirme sunulabilir. Güncel sürümü takip etmek için
                    bu sayfayı belirli aralıklarla inceleyebilirsiniz.
                  </p>
                </div>

                <div className="mt-7 flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                    <Clock3 className="size-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-500">
                      Son güncelleme tarihi
                    </p>
                    <p className="mt-1 font-bold text-slate-950">
                      {lastUpdated}
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="iletisim"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Mail className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 15
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      İletişim
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Bu gizlilik politikası, çerezler veya kişisel verilerinizle
                  ilgili sorularınız için bize e-posta yoluyla ulaşabilirsiniz.
                </p>

                <div className="mt-7 rounded-3xl border border-blue-200 bg-blue-50 p-6 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-blue-800">
                        Resmî iletişim adresi
                      </p>
                      <a
                        href={`mailto:${contactEmail}`}
                        className="mt-2 block break-all text-xl font-black tracking-tight text-blue-950 transition hover:text-blue-700"
                      >
                        {contactEmail}
                      </a>
                    </div>

                    <a
                      href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                        "Gizlilik Politikası Hakkında"
                      )}`}
                      className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5 hover:bg-blue-800"
                    >
                      E-posta gönder
                      <ArrowRight
                        className="size-5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <CircleHelp className="size-4" aria-hidden="true" />
                Sık sorulan sorular
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Gizlilik hakkında merak edilenler
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Hesaplama verileri, çerezler, analiz, reklam ve kullanıcı
                haklarıyla ilgili sık sorulan soruların yanıtlarını inceleyin.
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

        <section className="py-24 sm:py-28">
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
                  <ShieldCheck className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Gizlilikle ilgili bir sorunuz mu var?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Kişisel veriler, çerezler veya bu politika hakkındaki
                  sorularınızı doğrudan HesapRehberi'ne iletebilirsiniz.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                      "Gizlilik Politikası Hakkında"
                    )}`}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    E-posta gönder
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>

                  <Link
                    href="/kullanim-sartlari"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Kullanım şartlarını incele
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-1 shrink-0 text-amber-700"
                    size={25}
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-xl font-bold text-amber-950">
                      Hukuki bilgilendirme
                    </h2>

                    <p className="mt-3 leading-8 text-amber-900">
                      Bu politika, sitenin veri işleme yaklaşımını açıklamak
                      amacıyla hazırlanmıştır. Belirli hukuki durumlar için
                      uzman görüşü alınması gerekebilir.
                    </p>
                  </div>
                </div>
              </aside>

              <aside className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <FileText
                    className="mt-1 shrink-0 text-blue-700"
                    size={25}
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-xl font-bold text-blue-950">
                      İlgili belgeler
                    </h2>

                    <p className="mt-3 leading-8 text-blue-900">
                      Platformun kullanımına ilişkin sorumluluklar, sınırlamalar
                      ve genel koşullar için Kullanım Şartları sayfasını da
                      inceleyin.
                    </p>

                    <Link
                      href="/kullanim-sartlari"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-blue-700"
                    >
                      Kullanım şartlarını aç
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}