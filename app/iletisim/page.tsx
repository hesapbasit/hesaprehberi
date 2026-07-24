import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Bug,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  Globe2,
  HelpCircle,
  Lightbulb,
  LockKeyhole,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const baseUrl = "https://hesaprehberionline.com";
const contactEmail = "1hesaprehberi@gmail.com";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "HesapRehberi ile iletişime geçin. Hata bildirimi, içerik düzeltme, yeni hesaplama aracı önerisi, reklam ve iş birliği taleplerinizi e-posta yoluyla bize iletin.",
  keywords: [
    "HesapRehberi iletişim",
    "HesapRehberi e-posta",
    "hesaplama aracı hata bildirimi",
    "hesaplama aracı önerisi",
    "HesapRehberi reklam",
    "HesapRehberi iş birliği",
  ],
  alternates: {
    canonical: "/iletisim",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/iletisim`,
    siteName: "HesapRehberi",
    title: "İletişim | HesapRehberi",
    description:
      "Öneri, hata bildirimi, içerik düzeltme ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HesapRehberi iletişim sayfası",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İletişim | HesapRehberi",
    description:
      "Öneri, hata bildirimi ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
    images: ["/og-image.png"],
  },
};

const emailSubject = encodeURIComponent("HesapRehberi İletişim Talebi");

const emailBody = encodeURIComponent(`Merhaba HesapRehberi,

İletişim konusu:

İlgili sayfa veya hesaplama aracı:

Karşılaştığım durum / önerim:

Varsa kullandığım cihaz ve tarayıcı:

Eklemek istediğim diğer bilgiler:

`);

const mailtoUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

const platformStats = [
  {
    value: "7/24",
    label: "Mesaj gönderimi",
    description: "E-posta adresimize günün her saatinde ulaşabilirsiniz.",
    icon: Clock3,
  },
  {
    value: "%100",
    label: "Doğrudan iletişim",
    description: "Mesajınız doğrudan HesapRehberi ekibine ulaşır.",
    icon: Send,
  },
  {
    value: "4",
    label: "Temel iletişim konusu",
    description: "Hata, öneri, düzeltme ve iş birliği talepleri.",
    icon: MessageCircle,
  },
  {
    value: "Tek",
    label: "Resmî iletişim adresi",
    description: "Tüm talepler için tek ve doğrulanabilir e-posta adresi.",
    icon: Mail,
  },
];

const contactTopics = [
  {
    title: "Hata bildirimi",
    description:
      "Bir hesaplama aracında teknik hata, beklenmeyen sonuç, bağlantı sorunu veya görüntüleme problemi fark ettiyseniz bize bildirebilirsiniz.",
    icon: Bug,
    iconClassName: "bg-rose-50 text-rose-700 border-rose-100",
    accentClassName: "group-hover:border-rose-200",
  },
  {
    title: "Öneri ve görüşler",
    description:
      "Yeni hesaplama aracı önerilerinizi, tasarım görüşlerinizi ve kullanıcı deneyimini geliştirecek fikirlerinizi paylaşabilirsiniz.",
    icon: Lightbulb,
    iconClassName: "bg-amber-50 text-amber-700 border-amber-100",
    accentClassName: "group-hover:border-amber-200",
  },
  {
    title: "İçerik düzeltme",
    description:
      "Eksik, güncelliğini yitirmiş veya daha açık anlatılması gerektiğini düşündüğünüz içerikleri bize iletebilirsiniz.",
    icon: FileCheck2,
    iconClassName: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accentClassName: "group-hover:border-emerald-200",
  },
  {
    title: "Reklam ve iş birliği",
    description:
      "Kurumsal iletişim, reklam, içerik iş birliği ve diğer ticari talepleriniz için bizimle bağlantı kurabilirsiniz.",
    icon: BriefcaseBusiness,
    iconClassName: "bg-violet-50 text-violet-700 border-violet-100",
    accentClassName: "group-hover:border-violet-200",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Konuyu açıkça belirtin",
    description:
      "E-postanın konu alanında talebinizin hata bildirimi, öneri, düzeltme veya iş birliği olduğunu belirtin.",
    icon: Target,
  },
  {
    number: "02",
    title: "İlgili sayfayı ekleyin",
    description:
      "Mesajınız bir hesaplama aracı ya da içerikle ilgiliyse, mümkünse ilgili sayfanın bağlantısını paylaşın.",
    icon: Globe2,
  },
  {
    number: "03",
    title: "Detayları açıklayın",
    description:
      "Karşılaştığınız durumu, beklediğiniz sonucu ve varsa kullandığınız cihaz veya tarayıcı bilgisini yazın.",
    icon: MessageCircle,
  },
  {
    number: "04",
    title: "İnceleme sürecini bekleyin",
    description:
      "Mesajlar önem ve kapsam durumuna göre değerlendirilir. Gerekli görülürse e-posta üzerinden dönüş yapılır.",
    icon: Clock3,
  },
];

const communicationPrinciples = [
  {
    title: "Açık iletişim",
    description:
      "Talebinizi doğru anlayabilmek için mesajların açık, kısa ve ilgili bilgilerle desteklenmiş olmasını önemsiyoruz.",
    icon: MessageCircle,
  },
  {
    title: "Kullanıcı odaklı değerlendirme",
    description:
      "Geri bildirimleri yalnızca tek bir sorun olarak değil, platformun genel deneyimini geliştirecek bir fırsat olarak ele alıyoruz.",
    icon: Users,
  },
  {
    title: "Güvenli paylaşım",
    description:
      "İletişim sırasında hassas kişisel verilerin ve finansal bilgilerin paylaşılmamasını özellikle öneriyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Sürekli gelişim",
    description:
      "Tekrarlanan geri bildirimleri ve kullanım sorunlarını yeni geliştirmelerde önceliklendirmeye çalışıyoruz.",
    icon: Sparkles,
  },
];

const messageChecklist = [
  "İletişim konusunu açıkça yazın",
  "İlgili sayfanın bağlantısını ekleyin",
  "Sorunu veya öneriyi kısa ve anlaşılır anlatın",
  "Gerekliyse cihaz ve tarayıcı bilgisini paylaşın",
  "Hassas kişisel veya finansal veri göndermeyin",
];

const faqItems = [
  {
    question: "HesapRehberi ile nasıl iletişime geçebilirim?",
    answer:
      "HesapRehberi ile 1hesaprehberi@gmail.com adresine e-posta göndererek iletişime geçebilirsiniz. Sayfadaki E-posta Gönder butonu, konu ve mesaj taslağı hazırlanmış biçimde e-posta uygulamanızı açar.",
  },
  {
    question: "Hangi konularda mesaj gönderebilirim?",
    answer:
      "Teknik hata bildirimi, hesaplama sonucu hakkındaki gözlemler, içerik düzeltme talepleri, yeni araç önerileri, tasarım görüşleri, reklam ve iş birliği talepleri için mesaj gönderebilirsiniz.",
  },
  {
    question: "Mesajıma ne kadar sürede yanıt verilir?",
    answer:
      "Mesajlar mümkün olan en kısa sürede incelenir. Yanıt süresi mesaj yoğunluğuna, talebin kapsamına ve ek inceleme gerektirip gerektirmediğine göre değişebilir.",
  },
  {
    question: "Hesaplama sonucunun yanlış olduğunu düşünürsem ne yapmalıyım?",
    answer:
      "İlgili hesaplama aracının bağlantısını, girdiğiniz değerleri, gördüğünüz sonucu ve beklediğiniz sonucu e-postada açıkça belirtin. Mümkünse kullandığınız cihaz ve tarayıcı bilgisini de ekleyin.",
  },
  {
    question: "Yeni bir hesaplama aracı önerebilir miyim?",
    answer:
      "Evet. İhtiyaç duyduğunuz hesaplama aracının adını, hangi bilgileri kullanması gerektiğini ve sonucu nasıl görmek istediğinizi kısaca açıklayabilirsiniz.",
  },
  {
    question: "Reklam veya içerik iş birliği için yazabilir miyim?",
    answer:
      "Evet. Kurumsal tanıtım, reklam ve içerik iş birliği taleplerinizi marka veya şirket bilgisi, talebin kapsamı ve iletişim bilgileriyle birlikte e-posta üzerinden iletebilirsiniz.",
  },
  {
    question: "Telefon veya canlı destek hattınız var mı?",
    answer:
      "Şu anda iletişim yalnızca e-posta üzerinden yürütülmektedir. HesapRehberi adına telefon, WhatsApp veya sosyal medya üzerinden ödeme ya da şifre talep eden kişilere itibar etmeyin.",
  },
  {
    question: "E-posta gönderirken hangi bilgileri paylaşmamalıyım?",
    answer:
      "T.C. kimlik numarası, banka kartı bilgileri, hesap şifreleri, doğrulama kodları, açık adres ve benzeri hassas kişisel veya finansal bilgileri kesinlikle paylaşmayın.",
  },
  {
    question: "HesapRehberi finansal danışmanlık veriyor mu?",
    answer:
      "Hayır. HesapRehberi bir banka, kamu kurumu veya finansal danışmanlık kuruluşu değildir. Hesaplama araçları genel bilgilendirme amacıyla sunulur.",
  },
  {
    question: "İçerik düzeltme talebi nasıl gönderilir?",
    answer:
      "Düzeltilmesini istediğiniz sayfanın bağlantısını, hatalı veya eksik olduğunu düşündüğünüz bölümü ve mümkünse dayandığınız resmî kaynağı mesajınıza ekleyin.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${baseUrl}/iletisim/#webpage`,
      url: `${baseUrl}/iletisim`,
      name: "İletişim | HesapRehberi",
      headline: "HesapRehberi ile iletişime geçin",
      description:
        "Hata bildirimi, içerik düzeltme, öneri ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/iletisim/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/iletisim/#breadcrumb`,
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
          name: "İletişim",
          item: `${baseUrl}/iletisim`,
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
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: contactEmail,
        availableLanguage: ["Turkish"],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${baseUrl}/iletisim/#faq`,
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

export default function IletisimPage() {
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
          <Breadcrumb items={[{ label: "İletişim" }]} />
        </div>

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

          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
                <MessageCircle className="size-4" aria-hidden="true" />
                HesapRehberi iletişim merkezi
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Görüşlerinizi dinliyor,
                <span className="block text-blue-700">
                  platformu birlikte geliştiriyoruz
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Hata bildirimlerinizi, içerik düzeltme taleplerinizi, yeni
                hesaplama aracı önerilerinizi ve iş birliği görüşmelerinizi
                doğrudan e-posta üzerinden bize iletebilirsiniz.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailtoUrl}
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  <Mail className="size-5" aria-hidden="true" />
                  E-posta gönder
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <Link
                  href="/hakkimizda"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                >
                  <BookOpen className="size-5" aria-hidden="true" />
                  Bizi yakından tanıyın
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-7">
                {[
                  "Doğrudan e-posta",
                  "Açık iletişim",
                  "Güvenli paylaşım",
                  "Kullanıcı odaklı değerlendirme",
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

            <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto">
              <div
                className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-blue-200/70 via-indigo-100/60 to-cyan-100/70 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)] sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                      <Mail className="size-6" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-950">
                        Resmî iletişim adresi
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Tüm talepler için tek kanal
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Aktif
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    E-posta adresimiz
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-3 block break-all text-xl font-black tracking-tight text-slate-950 transition hover:text-blue-700 sm:text-2xl"
                  >
                    {contactEmail}
                  </a>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: "Hata ve teknik sorunlar", icon: Bug },
                    { label: "Öneri ve içerik düzeltmeleri", icon: Lightbulb },
                    { label: "Reklam ve iş birliği", icon: BriefcaseBusiness },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                          <Icon className="size-5" aria-hidden="true" />
                        </div>
                        <p className="text-sm font-semibold text-slate-700">
                          {item.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <a
                  href={mailtoUrl}
                  className="group mt-6 inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
                >
                  Hazır e-posta taslağını aç
                  <Send
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>

                <div className="mt-5 flex gap-3 rounded-2xl bg-amber-50 p-4 text-amber-950">
                  <AlertTriangle
                    className="mt-0.5 size-5 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <p className="text-xs leading-5">
                    Şifre, kart bilgisi, kimlik numarası veya doğrulama kodu
                    göndermeyin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                <MessageCircle className="size-4 text-blue-700" aria-hidden="true" />
                İletişim konuları
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Hangi konularda
                <span className="text-blue-700"> bize yazabilirsiniz?</span>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Platformu daha güvenilir, anlaşılır ve kullanışlı hâle
                getirebilmek için farklı türdeki geri bildirimleri
                değerlendiriyoruz.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {contactTopics.map((topic) => {
                const Icon = topic.icon;
                return (
                  <article
                    key={topic.title}
                    className={`group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 ${topic.accentClassName}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div
                        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border ${topic.iconClassName}`}
                      >
                        <Icon className="size-7" aria-hidden="true" />
                      </div>
                      <ChevronRight
                        className="size-5 text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-blue-700"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-7 text-2xl font-bold text-slate-950">
                      {topic.title}
                    </h3>
                    <p className="mt-4 leading-8 text-slate-600">
                      {topic.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Zap className="size-4" aria-hidden="true" />
                İletişim süreci
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Mesajınızın daha hızlı değerlendirilmesi için
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                Birkaç temel bilgiyi mesajınıza eklemeniz, sorunun veya
                talebin doğru anlaşılmasını ve daha verimli incelenmesini
                kolaylaştırır.
              </p>
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-emerald-950">
                    Özellikle teknik hata bildirimlerinde sayfa bağlantısı,
                    kullanılan değerler ve görülen sonucun paylaşılması çok
                    faydalıdır.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5">
              {processSteps.map((step) => {
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

        <section className="py-24 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <article className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20 sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-blue-600/30 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-indigo-600/30 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Mail className="size-7" aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">
                  İyi hazırlanmış bir mesaj neler içermeli?
                </h2>
                <p className="mt-6 leading-8 text-slate-300">
                  Mesajınız ne kadar açık ve ilgili bilgilerle desteklenmiş
                  olursa, talebin doğru anlaşılması o kadar kolay olur.
                </p>
                <div className="mt-8 space-y-4">
                  {messageChecklist.map((item) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">
                        <Check className="size-4" aria-hidden="true" />
                      </span>
                      <p className="text-sm leading-7 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
                <a
                  href={mailtoUrl}
                  className="group mt-9 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                >
                  Mesaj taslağını aç
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <article className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
                <div className="flex size-13 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                  <AlertTriangle className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-amber-950">
                  Hassas bilgilerinizi paylaşmayın
                </h3>
                <p className="mt-4 leading-8 text-amber-900">
                  E-posta mesajınızda T.C. kimlik numarası, banka veya kredi
                  kartı bilgileri, hesap şifreleri, doğrulama kodları ve açık
                  adres gibi hassas bilgileri kesinlikle göndermeyin.
                </p>
              </article>

              <article className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-8">
                <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <ShieldCheck className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-blue-950">
                  Resmî olmayan taleplere dikkat edin
                </h3>
                <p className="mt-4 leading-8 text-blue-900">
                  HesapRehberi, e-posta üzerinden sizden ödeme, şifre, kart
                  bilgisi veya doğrulama kodu istemez. İletişim için yalnızca
                  bu sayfada belirtilen adresi dikkate alın.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <ShieldCheck className="size-4" aria-hidden="true" />
                İletişim yaklaşımımız
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Geri bildirimleri
                <span className="text-blue-700"> gelişimin bir parçası</span>
                olarak görüyoruz
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Her mesaj doğrudan bir değişiklik anlamına gelmeyebilir; ancak
                tekrar eden sorunları ve kullanıcıların ortak ihtiyaçlarını
                geliştirme sürecinde dikkate alıyoruz.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {communicationPrinciples.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article
                    key={principle.title}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
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

        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <Clock3 className="size-4" aria-hidden="true" />
                  Yanıt ve değerlendirme süreci
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Mesajları mümkün olan en kısa sürede inceliyoruz
                </h2>
                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  Mesajlar; konu, aciliyet, teknik inceleme gereksinimi ve
                  platform üzerindeki etkisine göre değerlendirilir. Basit
                  sorular daha kısa sürede yanıtlanabilirken teknik sorunların
                  incelenmesi daha uzun sürebilir.
                </p>
                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Her mesaja ayrı yanıt verilmesi garanti edilmez. Ancak hata
                  bildirimi, güvenlik sorunu veya kapsamlı iş birliği talepleri
                  öncelikli olarak incelenmeye çalışılır.
                </p>
                <a
                  href={mailtoUrl}
                  className="group mt-8 inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  E-posta göndermeye başla
                  <ArrowRight
                    className="size-5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
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
                  <BadgeCheck
                    className="size-12 text-blue-100"
                    aria-hidden="true"
                  />
                  <h3 className="mt-7 text-2xl font-bold">
                    Göndermeden önce kontrol edin
                  </h3>
                  <div className="mt-6 space-y-4">
                    {[
                      "Konu başlığı talebinizi açıklıyor mu?",
                      "İlgili sayfa bağlantısını eklediniz mi?",
                      "Sorunu veya öneriyi anlaşılır biçimde yazdınız mı?",
                      "Hassas kişisel bilgileri çıkardınız mı?",
                    ].map((item) => (
                      <div key={item} className="flex gap-3">
                        <CheckCircle2
                          className="mt-0.5 size-5 shrink-0 text-blue-100"
                          aria-hidden="true"
                        />
                        <p className="text-sm leading-7 text-blue-100">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5">
                    <p className="text-sm leading-7 text-white">
                      Doğru ve yeterli bilgi içeren mesajlar daha hızlı ve
                      sağlıklı değerlendirilebilir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <HelpCircle className="size-4" aria-hidden="true" />
                Sık sorulan sorular
              </div>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                İletişim hakkında merak edilenler
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Mesaj gönderimi, yanıt süresi, güvenlik ve iş birliği
                talepleriyle ilgili sık sorulan soruların yanıtlarını
                inceleyin.
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
              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Send className="size-7" aria-hidden="true" />
                </div>
                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Görüşünüzü bizimle paylaşın
                </h2>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Karşılaştığınız bir sorunu, yeni araç fikrinizi veya iş
                  birliği talebinizi doğrudan bize iletin.
                </p>
                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={mailtoUrl}
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    E-posta gönder
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                  <Link
                    href="/hesaplamalar"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplamaları incele
                  </Link>
                </div>
                <p className="mt-6 break-all text-sm text-slate-400">
                  {contactEmail}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2">
              <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <LockKeyhole
                    className="mt-1 shrink-0 text-amber-700"
                    size={25}
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-amber-950">
                      Gizlilik hatırlatması
                    </h2>
                    <p className="mt-3 leading-8 text-amber-900">
                      İletişim sırasında yalnızca talebin değerlendirilmesi
                      için gerekli bilgileri paylaşın. Hassas veriler içeren
                      mesajları göndermeyin.
                    </p>
                    <Link
                      href="/gizlilik-politikasi"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-950 transition hover:text-amber-700"
                    >
                      Gizlilik politikasını incele
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </aside>

              <aside className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    className="mt-1 shrink-0 text-blue-700"
                    size={25}
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="text-xl font-bold text-blue-950">
                      Genel bilgilendirme
                    </h2>
                    <p className="mt-3 leading-8 text-blue-900">
                      Hesaplama araçları genel bilgilendirme amacı taşır.
                      Finansal, vergisel, hukuki veya sağlıkla ilgili önemli
                      kararlar için resmî kaynakları ve uzman görüşlerini
                      dikkate alın.
                    </p>
                    <Link
                      href="/kullanim-sartlari"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-blue-700"
                    >
                      Kullanım şartlarını incele
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