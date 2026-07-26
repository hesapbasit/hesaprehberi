import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Ban,
  BookOpen,
  Building2,
  Check,
  ChevronRight,
  CircleHelp,
  Clock3,
  Copyright,
  ExternalLink,
  FileCheck2,
  FileText,
  Gavel,
  Handshake,
  Info,
  Landmark,
  LockKeyhole,
  Mail,
  Megaphone,
  RefreshCcw,
  Scale,
  Server,
  ShieldCheck,
  Sparkles,
  TriangleAlert,
  UserCheck,
  WalletCards,
  Wrench,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const baseUrl = "https://hesaprehberionline.com";
const contactEmail = "1hesaprehberi@gmail.com";
const lastUpdated = "24 Temmuz 2026";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description:
    "HesapRehberi kullanım şartları; hesaplama araçlarının kullanım koşulları, sorumluluk sınırları, fikri mülkiyet, yasaklanan kullanımlar ve kullanıcı yükümlülükleri hakkında bilgi verir.",
  keywords: [
    "HesapRehberi kullanım şartları",
    "hesaplama araçları kullanım koşulları",
    "sorumluluk reddi",
    "finansal hesaplama uyarısı",
    "HesapRehberi telif hakları",
    "internet sitesi kullanım şartları",
  ],
  alternates: {
    canonical: "/kullanim-sartlari",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: `${baseUrl}/kullanim-sartlari`,
    siteName: "HesapRehberi",
    title: "Kullanım Şartları | HesapRehberi",
    description:
      "HesapRehberi kullanım koşullarını, sorumluluk sınırlarını ve hesaplama araçlarına ilişkin önemli bilgilendirmeleri inceleyin.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "HesapRehberi Kullanım Şartları",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kullanım Şartları | HesapRehberi",
    description:
      "HesapRehberi kullanım koşullarını, sorumluluk sınırlarını ve hesaplama araçlarına ilişkin önemli bilgilendirmeleri inceleyin.",
    images: ["/og-image.png"],
  },
};

const tableOfContents = [
  { id: "genel-kabul", label: "Genel kabul ve kapsam" },
  { id: "hizmetin-niteligi", label: "Hizmetin niteliği" },
  { id: "hesaplama-sonuclari", label: "Hesaplama sonuçları" },
  { id: "kullanici-sorumlulugu", label: "Kullanıcı sorumluluğu" },
  { id: "yasaklanan-kullanimlar", label: "Yasaklanan kullanımlar" },
  { id: "icerik-guncelligi", label: "İçerik doğruluğu ve güncellik" },
  { id: "fikri-mulkiyet", label: "Fikri mülkiyet" },
  { id: "ucuncu-taraflar", label: "Üçüncü taraflar ve reklamlar" },
  { id: "harici-baglantilar", label: "Harici bağlantılar" },
  { id: "hizmet-degisiklikleri", label: "Hizmet değişiklikleri" },
  { id: "kesinti-ve-erisim", label: "Kesinti ve erişim" },
  { id: "sorumluluk-siniri", label: "Sorumluluğun sınırlandırılması" },
  { id: "tazmin", label: "Tazmin yükümlülüğü" },
  { id: "uygulanacak-hukuk", label: "Uygulanacak hukuk" },
  { id: "degisiklikler", label: "Şartlardaki değişiklikler" },
  { id: "iletisim", label: "İletişim" },
];

const highlights = [
  {
    title: "Bilgilendirme amaçlı",
    description:
      "Hesaplama araçları resmî teklif, finansal danışmanlık, hukuki görüş veya kamu kurumu kararı yerine geçmez.",
    icon: Info,
  },
  {
    title: "Kullanıcı kontrolü",
    description:
      "Girilen verilerin doğruluğu ve sonuçların hangi amaçla kullanılacağı tamamen kullanıcının sorumluluğundadır.",
    icon: UserCheck,
  },
  {
    title: "Yaklaşık sonuçlar",
    description:
      "Araçlar standart formüllerle tahmini sonuç üretir; kurum uygulamaları ve güncel mevzuat sonucu değiştirebilir.",
    icon: WalletCards,
  },
  {
    title: "Şeffaf sınırlar",
    description:
      "Hizmetin kapsamı, sorumluluklar ve kullanım sınırlamaları bu sayfada açık biçimde belirtilir.",
    icon: ShieldCheck,
  },
];

const serviceScope = [
  {
    title: "Finans hesaplamaları",
    description:
      "Kredi, faiz, mevduat, vergi, maaş ve benzeri konularda genel hesaplama araçları.",
    icon: WalletCards,
  },
  {
    title: "Bilgilendirici içerikler",
    description:
      "Hesaplama yöntemleri, finansal kavramlar ve günlük kullanım senaryolarını açıklayan rehberler.",
    icon: BookOpen,
  },
  {
    title: "Karşılaştırma desteği",
    description:
      "Farklı senaryoları anlamaya yardımcı olan tablolar, örnekler ve açıklamalar.",
    icon: Scale,
  },
  {
    title: "Ücretsiz erişim",
    description:
      "Platformun büyük bölümü üyelik gerektirmeden ve ücretsiz olarak kullanılabilir.",
    icon: Sparkles,
  },
];

const prohibitedUses = [
  "Siteye, sunuculara veya bağlı sistemlere yetkisiz erişim sağlamaya çalışmak",
  "Otomatik araçlarla aşırı trafik oluşturmak, hizmeti yavaşlatmak veya kesintiye uğratmak",
  "Kötü amaçlı yazılım, zararlı kod, spam veya yanıltıcı içerik yaymak",
  "İçerikleri izinsiz şekilde kopyalamak, yeniden yayımlamak veya ticari olarak kullanmak",
  "HesapRehberi markasını yanıltıcı, taklit edici veya itibar zedeleyici biçimde kullanmak",
  "Siteyi yasa dışı faaliyetleri kolaylaştırmak amacıyla kullanmak",
  "Güvenlik açıklarını istismar etmek veya başka kullanıcıların erişimini engellemek",
  "İçerikleri otomatik sistemlerle toplu biçimde çekmek ve yeniden sunmak",
];

const userResponsibilities = [
  {
    title: "Doğru veri girişi",
    description:
      "Hesaplama sonuçlarının anlamlı olabilmesi için araçlara doğru ve güncel bilgiler girilmelidir.",
    icon: FileCheck2,
  },
  {
    title: "Sonuçları doğrulama",
    description:
      "Önemli finansal, vergisel, hukuki veya sağlık kararları öncesinde resmî kaynaklar ve uzman görüşü dikkate alınmalıdır.",
    icon: BadgeCheck,
  },
  {
    title: "Güvenli kullanım",
    description:
      "Şifre, banka kartı bilgisi, kimlik numarası veya doğrulama kodu gibi hassas veriler siteye girilmemelidir.",
    icon: LockKeyhole,
  },
  {
    title: "Yasal kullanım",
    description:
      "Platform yalnızca hukuka uygun, dürüst ve diğer kullanıcıların haklarını ihlal etmeyen amaçlarla kullanılmalıdır.",
    icon: Gavel,
  },
];

const thirdPartyItems = [
  {
    title: "Google AdSense",
    description:
      "Sitede gösterilen reklamlar Google veya reklam teknolojisi ortakları tarafından sunulabilir.",
    icon: Megaphone,
  },
  {
    title: "Google Analytics",
    description:
      "Genel trafik ve performans verileri kullanıcı deneyimini geliştirmek amacıyla analiz edilebilir.",
    icon: Building2,
  },
  {
    title: "Barındırma ve güvenlik",
    description:
      "Vercel, Cloudflare ve benzeri hizmetler altyapı, performans ve güvenlik amacıyla kullanılabilir.",
    icon: Server,
  },
  {
    title: "Harici kaynaklar",
    description:
      "Resmî kurumlar veya bilgi kaynaklarına verilen bağlantılar üçüncü tarafların kontrolündedir.",
    icon: ExternalLink,
  },
];

const liabilityExamples = [
  "Hatalı veya eksik kullanıcı girdilerinden kaynaklanan sonuçlar",
  "Kurumların farklı faiz, vergi, ücret veya yuvarlama uygulamaları",
  "Mevzuat, oran, ücret ve piyasa koşullarındaki değişiklikler",
  "Teknik kesintiler, bakım çalışmaları veya üçüncü taraf hizmet sorunları",
  "Hesaplama sonuçlarına dayanılarak alınan kişisel veya ticari kararlar",
  "Harici sitelerin içerikleri, güvenliği veya işlem sonuçları",
];

const faqItems = [
  {
    question: "HesapRehberi'ni kullanmak ücretli mi?",
    answer:
      "HesapRehberi'nin temel hesaplama araçları ve içerikleri ücretsiz sunulur. İleride ücretli bir özellik sunulması hâlinde ilgili koşullar ayrıca ve açık biçimde belirtilir.",
  },
  {
    question: "Hesaplama sonuçları resmî belge yerine geçer mi?",
    answer:
      "Hayır. Sonuçlar genel bilgilendirme amacıyla üretilir ve banka teklifi, vergi beyannamesi, mahkeme belgesi, sağlık raporu veya kamu kurumu kararı yerine geçmez.",
  },
  {
    question: "Sonuçlar neden banka veya kurum sonucundan farklı olabilir?",
    answer:
      "Kurumlar farklı faiz yöntemleri, masraf kalemleri, sigorta ücretleri, vergi oranları, yuvarlama kuralları veya güncel kampanyalar uygulayabilir. Bu nedenle sonuçlar yaklaşık niteliktedir.",
  },
  {
    question: "Hesaplama araçlarında hata olursa ne yapmalıyım?",
    answer:
      "İlgili sayfanın bağlantısını, girdiğiniz değerleri, gördüğünüz sonucu ve beklediğiniz sonucu iletişim sayfası üzerinden bize iletebilirsiniz.",
  },
  {
    question: "HesapRehberi finansal danışmanlık veriyor mu?",
    answer:
      "Hayır. HesapRehberi bir banka, yatırım kuruluşu, muhasebe bürosu, hukuk ofisi veya finansal danışman değildir.",
  },
  {
    question: "Site içerikleri kopyalanabilir mi?",
    answer:
      "Site tasarımı, özgün metinler, hesaplama yapıları, marka unsurları ve özel bileşenler izin alınmadan kopyalanamaz veya ticari amaçla yeniden yayımlanamaz.",
  },
  {
    question: "Hesaplama sonuçlarına göre işlem yaparsam sorumluluk kime aittir?",
    answer:
      "Sonuçları nasıl kullandığınız ve bu sonuçlara dayanarak aldığınız kararlar sizin sorumluluğunuzdadır. Önemli kararlar öncesinde resmî kaynak ve uzman görüşü alınmalıdır.",
  },
  {
    question: "Site her zaman kesintisiz çalışır mı?",
    answer:
      "Kesintisiz erişim garanti edilmez. Bakım, altyapı sorunları, yoğun trafik, siber saldırılar veya üçüncü taraf servisler nedeniyle geçici kesintiler yaşanabilir.",
  },
  {
    question: "HesapRehberi kullanım şartlarını değiştirebilir mi?",
    answer:
      "Evet. Hizmetler, mevzuat, teknik altyapı veya iş modeli değiştiğinde kullanım şartları güncellenebilir. Güncel metin bu sayfada yayımlanır.",
  },
  {
    question: "Harici bağlantılardan HesapRehberi sorumlu mudur?",
    answer:
      "Hayır. Harici bağlantılar bilgilendirme amacıyla sunulur. Üçüncü taraf sitelerin içerikleri, güvenliği ve gizlilik uygulamaları kendi sorumluluklarındadır.",
  },
  {
    question: "Otomatik botlarla site verileri toplanabilir mi?",
    answer:
      "İzinsiz toplu veri çekme, aşırı trafik oluşturma, içerikleri yeniden yayımlama veya hizmeti olumsuz etkileyen otomasyonlar yasaktır.",
  },
  {
    question: "HesapRehberi markasını kullanabilir miyim?",
    answer:
      "Marka adı, logo, tasarım ve diğer ayırt edici unsurlar izin alınmadan yanıltıcı, taklit edici veya ticari biçimde kullanılamaz.",
  },
  {
    question: "Reklamların içeriğinden kim sorumludur?",
    answer:
      "Reklamlar üçüncü taraf reklam ağları tarafından sunulabilir. Reklam verenlerin ürün, hizmet ve iddialarına ilişkin sorumluluk ilgili reklam verene aittir.",
  },
  {
    question: "Kullanım şartları hangi tarihten itibaren geçerlidir?",
    answer:
      `Bu sürüm ${lastUpdated} tarihinde güncellenmiş ve yayımlandığı tarihten itibaren geçerli olmuştur.`,
  },
  {
    question: "Kullanım şartları hakkında nasıl iletişime geçebilirim?",
    answer:
      `Sorularınızı ${contactEmail} adresine veya iletişim sayfası üzerinden iletebilirsiniz.`,
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/kullanim-sartlari/#webpage`,
      url: `${baseUrl}/kullanim-sartlari`,
      name: "Kullanım Şartları | HesapRehberi",
      headline: "HesapRehberi Kullanım Şartları",
      description:
        "HesapRehberi'nin kullanım koşulları, hesaplama araçlarının sınırları, kullanıcı sorumlulukları ve fikri mülkiyet hükümleri.",
      dateModified: "2026-07-24",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${baseUrl}/kullanim-sartlari/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${baseUrl}/kullanim-sartlari/#breadcrumb`,
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
          name: "Kullanım Şartları",
          item: `${baseUrl}/kullanim-sartlari`,
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
      "@id": `${baseUrl}/kullanim-sartlari/#faq`,
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

export default function KullanimSartlariPage() {
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
                label: "Kullanım Şartları",
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
                <Scale className="size-4" aria-hidden="true" />
                Platform kullanım koşulları
              </div>

              <h1 className="mt-7 max-w-4xl text-4xl font-black tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
                Şeffaf, anlaşılır ve
                <span className="block text-blue-700">
                  güvenli kullanım kuralları
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:text-xl lg:leading-9">
                Bu kullanım şartları; HesapRehberi&apos;nin hangi amaçlarla
                kullanılabileceğini, hesaplama araçlarının sınırlarını,
                kullanıcı sorumluluklarını ve platformun hukuki çerçevesini
                açıklar.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                  <Clock3 className="size-4 text-blue-700" aria-hidden="true" />
                  Son güncelleme: {lastUpdated}
                </div>

                <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
                  <BadgeCheck className="size-4" aria-hidden="true" />
                  Geçerli sürüm
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#genel-kabul"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  Şartları incele
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
                  Soru gönder
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
                      <Gavel className="size-6" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="font-bold text-slate-950">Kısa özet</p>
                      <p className="mt-0.5 text-xs text-slate-500">
                        Kullanımın temel çerçevesi
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    Açık
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    "Araçlar genel bilgilendirme amacı taşır",
                    "Sonuçlar resmî belge veya teklif değildir",
                    "Önemli kararlar uzman görüşüyle doğrulanmalıdır",
                    "İçerikler izinsiz ticari kullanım için kopyalanamaz",
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
                      Platformu kullanarak bu şartları okuduğunuzu ve kabul
                      ettiğinizi beyan etmiş olursunuz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`p-6 sm:p-7 ${
                    index !== highlights.length - 1
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

                <nav className="mt-6" aria-label="Kullanım şartları içindekiler">
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
                    Bu metin platform kullanım koşullarını açıklar ve belirli
                    bir hukuki uyuşmazlık için profesyonel danışmanlık yerine
                    geçmez.
                  </p>
                </div>
              </div>
            </aside>

            <article className="min-w-0 space-y-8">
              <section
                id="genel-kabul"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <FileText className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 01
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Genel kabul ve kapsam
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    HesapRehberi&apos;ne erişerek, siteyi ziyaret ederek veya
                    hesaplama araçlarından yararlanarak bu kullanım şartlarını
                    okuduğunuzu, anladığınızı ve kabul ettiğinizi beyan etmiş
                    olursunuz.
                  </p>

                  <p>
                    Bu şartları kabul etmiyorsanız platformu kullanmamanız
                    gerekir. Belirli hizmetler veya özellikler için ek koşullar
                    sunulması hâlinde, ilgili ek koşullar da kullanımın bir
                    parçası olur.
                  </p>

                  <p>
                    Bu kullanım şartları; hesaprehberionline.com alan adı,
                    alt sayfalar, hesaplama araçları, blog içerikleri, tasarım
                    bileşenleri ve HesapRehberi markasıyla sunulan diğer
                    hizmetleri kapsar.
                  </p>
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <div className="flex gap-4">
                    <TriangleAlert
                      className="mt-0.5 size-6 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-bold text-amber-950">
                        Kabul etmiyorsanız kullanmayın
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-amber-900">
                        Platformu kullanmaya devam etmeniz, yürürlükteki
                        kullanım şartlarını kabul ettiğiniz anlamına gelir.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section
                id="hizmetin-niteligi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Building2 className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">
                      Bölüm 02
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Hizmetin niteliği
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  HesapRehberi, çeşitli hesaplama araçlarını ve bilgilendirici
                  içerikleri kullanıcıların genel bilgi edinmesini
                  kolaylaştırmak amacıyla sunan bağımsız bir internet
                  platformudur.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {serviceScope.map((item) => {
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

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm leading-7 text-blue-950">
                    HesapRehberi; banka, kamu kurumu, yatırım kuruluşu,
                    sigorta şirketi, muhasebe bürosu, hukuk ofisi veya sağlık
                    kuruluşu değildir.
                  </p>
                </div>
              </section>

              <section
                id="hesaplama-sonuclari"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <WalletCards className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">
                      Bölüm 03
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Hesaplama sonuçları
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Hesaplama araçları, kullanıcının girdiği bilgiler ile
                    belirli matematiksel formüller ve varsayımlar doğrultusunda
                    yaklaşık sonuçlar üretir.
                  </p>

                  <p>
                    Sonuçlar; resmî belge, bağlayıcı teklif, kredi onayı, vergi
                    hesap pusulası, sağlık raporu, yatırım tavsiyesi, hukuki
                    görüş veya profesyonel danışmanlık niteliğinde değildir.
                  </p>

                  <p>
                    Bankalar, kamu kurumları, işverenler, sigorta şirketleri ve
                    diğer kuruluşlar farklı hesaplama yöntemleri, yuvarlama
                    kuralları, masraflar, kampanyalar veya güncel oranlar
                    uygulayabilir.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Yaklaşık değer",
                      description:
                        "Araç sonucu kesin ve bağlayıcı bir kurum sonucu değildir.",
                    },
                    {
                      title: "Kullanıcı girdisi",
                      description:
                        "Yanlış veya eksik bilgi, doğrudan yanlış sonuca yol açabilir.",
                    },
                    {
                      title: "Kurum farkları",
                      description:
                        "Ücret, komisyon, vergi ve yuvarlama uygulamaları değişebilir.",
                    },
                    {
                      title: "Güncellik",
                      description:
                        "Mevzuat ve oran değişiklikleri sonuçları etkileyebilir.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5"
                    >
                      <h3 className="font-bold text-emerald-950">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-emerald-900">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section
                id="kullanici-sorumlulugu"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <UserCheck className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 04
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Kullanıcı sorumluluğu
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Platformu kullanan kişiler, girdikleri bilgilerin doğruluğu
                  ve sonuçları nasıl kullandıkları konusunda sorumludur.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {userResponsibilities.map((item) => {
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
              </section>

              <section
                id="yasaklanan-kullanimlar"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
                    <Ban className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">
                      Bölüm 05
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Yasaklanan kullanımlar
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Platformun güvenliğini, sürekliliğini, fikri mülkiyetini veya
                  diğer kullanıcıların haklarını ihlal eden kullanımlara izin
                  verilmez.
                </p>

                <div className="mt-8 grid gap-4">
                  {prohibitedUses.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-rose-100 bg-rose-50 p-5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-rose-700 text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-7 text-rose-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="text-sm leading-7 text-slate-700">
                    Yasaklanan kullanım tespit edilmesi hâlinde erişim
                    sınırlandırılabilir, teknik önlemler uygulanabilir ve
                    gerekli durumlarda hukuki yollara başvurulabilir.
                  </p>
                </div>
              </section>

              <section
                id="icerik-guncelligi"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                    <RefreshCcw className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-amber-700">
                      Bölüm 06
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      İçerik doğruluğu ve güncellik
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi içeriklerin ve araçların doğru, anlaşılır ve
                    güncel olması için makul çaba gösterir. Ancak tüm
                    bilgilerin her zaman eksiksiz, hatasız veya güncel olduğu
                    garanti edilmez.
                  </p>

                  <p>
                    Faiz oranları, vergi oranları, yasal sınırlar, ücretler ve
                    kurum uygulamaları zaman içinde değişebilir. Bu nedenle
                    güncel ve bağlayıcı bilgi için ilgili resmî kurum veya
                    hizmet sağlayıcının açıklamaları dikkate alınmalıdır.
                  </p>
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <h3 className="font-bold text-amber-950">
                    Düzeltme bildirimi
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-amber-900">
                    Hatalı veya güncelliğini yitirmiş bir içerik fark ederseniz
                    ilgili sayfanın bağlantısıyla birlikte bize
                    bildirebilirsiniz.
                  </p>
                </div>
              </section>

              <section
                id="fikri-mulkiyet"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-700">
                    <Copyright className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-indigo-700">
                      Bölüm 07
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Fikri mülkiyet hakları
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi marka adı, logo, site tasarımı, özgün
                    içerikler, hesaplama yapıları, grafikler, tablolar, özel
                    bileşenler ve diğer ayırt edici unsurlar ilgili fikri
                    mülkiyet hakları kapsamında korunabilir.
                  </p>

                  <p>
                    Yazılı izin olmadan içeriklerin tamamının veya önemli bir
                    bölümünün kopyalanması, değiştirilmesi, yeniden
                    yayımlanması, satılması, lisanslanması veya ticari amaçla
                    kullanılması yasaktır.
                  </p>

                  <p>
                    Kısa alıntılar; kaynak gösterilmesi, bağlantı verilmesi ve
                    içeriğin bağlamının bozulmaması şartıyla uygulanabilir
                    mevzuatın izin verdiği ölçüde kullanılabilir.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-5">
                    <h3 className="font-bold text-indigo-950">
                      Korunan unsurlar
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-indigo-900">
                      Marka, tasarım, özgün metinler, özel hesaplama düzenleri
                      ve görsel bileşenler.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">
                      İzin gerektiren kullanım
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Toplu kopyalama, yeniden yayın, ticari kullanım ve marka
                      taklidi.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="ucuncu-taraflar"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-violet-700">
                    <Handshake className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-violet-700">
                      Bölüm 08
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Üçüncü taraf hizmetler ve reklamlar
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Platformun çalışması, güvenliği, analizi ve finansmanı için
                  üçüncü taraf hizmetlerden yararlanılabilir.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-2">
                  {thirdPartyItems.map((item) => {
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

                <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="text-sm leading-7 text-blue-950">
                    Üçüncü taraf hizmet sağlayıcıların veri işleme ve kullanım
                    koşulları kendi politikalarına tabidir. Ayrıntılar için
                    Gizlilik Politikası sayfasını inceleyebilirsiniz.
                  </p>

                  <Link
                    href="/gizlilik-politikasi"
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-blue-700"
                  >
                    Gizlilik politikasını incele
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
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
                      Bölüm 09
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
                    bağlantılar bulunabilir.
                  </p>

                  <p>
                    Bu bağlantılar yalnızca kullanıcıya kolaylık ve bilgi
                    sağlamak amacıyla sunulur. Harici sitelerin içerikleri,
                    ürünleri, hizmetleri, güvenliği, gizlilik uygulamaları veya
                    kullanım koşulları HesapRehberi&apos;nin kontrolünde
                    değildir.
                  </p>
                </div>
              </section>

              <section
                id="hizmet-degisiklikleri"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-fuchsia-50 text-fuchsia-700">
                    <Wrench className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-fuchsia-700">
                      Bölüm 10
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Hizmette değişiklik yapılması
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    HesapRehberi; hesaplama araçlarını, içerikleri, tasarımı,
                    sayfa yapılarını, teknik özellikleri veya hizmet kapsamını
                    önceden bildirimde bulunmadan değiştirebilir,
                    güncelleyebilir veya kaldırabilir.
                  </p>

                  <p>
                    Belirli özelliklerin geçici veya kalıcı olarak
                    sonlandırılması, kullanım şartlarına aykırılık oluşturmaz.
                    Kullanıcılar platformun belirli bir özelliğinin sürekli
                    sunulacağı varsayımına dayanamaz.
                  </p>
                </div>
              </section>

              <section
                id="kesinti-ve-erisim"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                    <Server className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-slate-600">
                      Bölüm 11
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Hizmet kesintileri ve erişim
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Platformun kesintisiz, hatasız veya her cihazda aynı
                    performansla çalışacağı garanti edilmez.
                  </p>

                  <p>
                    Bakım çalışmaları, altyapı sorunları, yoğun trafik, siber
                    saldırılar, internet kesintileri, barındırma hizmeti
                    problemleri veya mücbir sebepler nedeniyle geçici erişim
                    sorunları yaşanabilir.
                  </p>
                </div>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">
                      Planlı çalışmalar
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      Bakım, güncelleme, güvenlik ve altyapı iyileştirmeleri.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <h3 className="font-bold text-slate-950">
                      Kontrol dışı durumlar
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      İnternet sorunları, üçüncü taraf kesintileri ve saldırılar.
                    </p>
                  </div>
                </div>
              </section>

              <section
                id="sorumluluk-siniri"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-rose-700">
                    <ShieldCheck className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-rose-700">
                      Bölüm 12
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Sorumluluğun sınırlandırılması
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Uygulanabilir hukukun izin verdiği azami ölçüde,
                  HesapRehberi aşağıdaki durumlardan kaynaklanan doğrudan veya
                  dolaylı zararlardan sorumlu tutulamaz.
                </p>

                <div className="mt-8 grid gap-4">
                  {liabilityExamples.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-rose-100 bg-rose-50 p-5"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-rose-700 text-sm font-bold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="pt-1 text-sm leading-7 text-rose-950">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                  <p className="text-sm leading-7 text-amber-950">
                    Bu hüküm, kanunen sınırlandırılması mümkün olmayan
                    sorumlulukları ortadan kaldırmaz.
                  </p>
                </div>
              </section>

              <section
                id="tazmin"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Handshake className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-cyan-700">
                      Bölüm 13
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Tazmin yükümlülüğü
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Kullanıcı; bu şartlara aykırı kullanımından, hukuka aykırı
                    faaliyetlerinden, üçüncü taraf haklarını ihlal etmesinden
                    veya platforma zarar vermesinden doğan makul zarar, masraf
                    ve taleplerden sorumlu olabilir.
                  </p>

                  <p>
                    Bu hüküm özellikle izinsiz içerik kopyalama, marka ihlali,
                    güvenlik açığı istismarı, kötü amaçlı yazılım yayma veya
                    sistemi işlevsiz hâle getirme girişimlerini kapsar.
                  </p>
                </div>
              </section>

              <section
                id="uygulanacak-hukuk"
                className="scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Landmark className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">
                      Bölüm 14
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Uygulanacak hukuk
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Bu kullanım şartları, uygulanabilir Türkiye Cumhuriyeti
                    mevzuatı çerçevesinde yorumlanır.
                  </p>

                  <p>
                    Uyuşmazlıkların öncelikle iyi niyetli iletişim yoluyla
                    çözülmesi amaçlanır. Çözüm sağlanamaması hâlinde yetkili
                    merciler yürürlükteki mevzuata göre belirlenir.
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
                      Bölüm 15
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      Şartlardaki değişiklikler
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5 leading-8 text-slate-600">
                  <p>
                    Kullanım şartları; hizmetlerin, teknik altyapının, yasal
                    gerekliliklerin veya platformun işleyişinin değişmesi
                    hâlinde güncellenebilir.
                  </p>

                  <p>
                    Güncel şartlar bu sayfada yayımlandığı tarihten itibaren
                    geçerli olur. Önemli değişikliklerde ek bilgilendirme
                    sunulabilir.
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
                      Bölüm 16
                    </p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                      İletişim
                    </h2>
                  </div>
                </div>

                <p className="mt-7 leading-8 text-slate-600">
                  Kullanım şartlarıyla ilgili soru, görüş veya bildirimlerinizi
                  e-posta yoluyla iletebilirsiniz.
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
                        "Kullanım Şartları Hakkında"
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
                Kullanım koşulları hakkında merak edilenler
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Hesaplama sonuçları, sorumluluklar, telif hakları ve platform
                erişimiyle ilgili sık sorulan soruların yanıtlarını inceleyin.
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
                  <Gavel className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Kullanım şartlarıyla ilgili sorunuz mu var?
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Platformun kullanımı, hesaplama araçları veya fikri mülkiyet
                  konularındaki sorularınızı doğrudan bize iletebilirsiniz.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                      "Kullanım Şartları Hakkında"
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
                    href="/gizlilik-politikasi"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Gizlilik politikasını incele
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
                      Önemli hatırlatma
                    </h2>

                    <p className="mt-3 leading-8 text-amber-900">
                      Hesaplama sonuçları yaklaşık niteliktedir. Finansal,
                      hukuki, vergisel veya sağlıkla ilgili önemli kararlar
                      öncesinde resmî kaynakları ve uzman görüşünü dikkate alın.
                    </p>
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
                      Gizlilik ve veri kullanımı
                    </h2>

                    <p className="mt-3 leading-8 text-blue-900">
                      Çerezler, analiz hizmetleri, reklamlar ve veri güvenliği
                      hakkındaki ayrıntılar için Gizlilik Politikası sayfasını
                      inceleyin.
                    </p>

                    <Link
                      href="/gizlilik-politikasi"
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-blue-700"
                    >
                      Gizlilik politikasını aç
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