import type { Metadata } from "next";
import Link from "next/link";

import IdealWeightCalculator from "@/components/calculators/IdealWeightCalculator";

const pageUrl =
  "https://hesaprehberi.vercel.app/hesaplamalar/ideal-kilo-hesaplama";

export const metadata: Metadata = {
  title: "İdeal Kilo Hesaplama | Boyunuza Göre İdeal Kilonuz",
  description:
    "Boyunuza ve cinsiyetinize göre tahmini ideal kilonuzu ve sağlıklı kilo aralığınızı ücretsiz olarak hesaplayın.",
  keywords: [
    "ideal kilo hesaplama",
    "ideal kilo hesaplama aracı",
    "boya göre ideal kilo",
    "kadın ideal kilo hesaplama",
    "erkek ideal kilo hesaplama",
    "sağlıklı kilo aralığı",
    "ideal kilom kaç olmalı",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "İdeal Kilo Hesaplama",
    description:
      "Boyunuza ve cinsiyetinize göre tahmini ideal kilonuzu ve sağlıklı kilo aralığınızı hesaplayın.",
    url: pageUrl,
    siteName: "HesapRehberi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "İdeal Kilo Hesaplama",
    description:
      "Boyunuza ve cinsiyetinize göre tahmini ideal kilonuzu ücretsiz hesaplayın.",
  },
};

const faqItems = [
  {
    question: "İdeal kilo nasıl hesaplanır?",
    answer:
      "İdeal kilo hesaplanırken boy ve cinsiyet gibi bilgiler kullanılabilir. Bu araç tahmini ideal kilo değerini Devine formülüne göre, sağlıklı kilo aralığını ise 18,5 ile 24,9 arasındaki vücut kitle indeksi değerlerine göre hesaplar.",
  },
  {
    question: "İdeal kilo hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Hesaplama sonucu genel bir tahmindir. Kas kütlesi, kemik yapısı, yaş, vücut yağ oranı ve genel sağlık durumu kişiden kişiye değişebilir.",
  },
  {
    question: "Sağlıklı kilo aralığı nedir?",
    answer:
      "Sağlıklı kilo aralığı, kişinin boyuna göre vücut kitle indeksinin yaklaşık 18,5 ile 24,9 arasında olduğu kilo aralığını ifade eder.",
  },
  {
    question: "Kadın ve erkeklerin ideal kilosu farklı mıdır?",
    answer:
      "Kullanılan bazı ideal kilo formüllerinde kadınlar ve erkekler için farklı başlangıç değerleri kullanılır. Ancak kişisel vücut yapısı sonuç üzerinde önemli bir etkendir.",
  },
  {
    question: "İdeal kiloya ulaşmak için ne yapılmalıdır?",
    answer:
      "Dengeli beslenme, düzenli fiziksel aktivite ve yeterli uyku sağlıklı kilo yönetiminin temel parçalarıdır. Kişiye özel öneriler için doktor veya diyetisyen görüşü alınmalıdır.",
  },
];

export default function IdealWeightPage() {
  const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "İdeal Kilo Hesaplama",
    description:
      "Boy ve cinsiyet bilgilerine göre tahmini ideal kilo ve sağlıklı kilo aralığı hesaplama aracı.",
    url: pageUrl,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
  };

  const faqSchema = {
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: "https://hesaprehberi.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hesaplamalar",
        item: "https://hesaprehberi.vercel.app/hesaplamalar",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "İdeal Kilo Hesaplama",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(calculatorSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen bg-slate-100">
        {/* Üst Alan */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <nav
              aria-label="Sayfa yolu"
              className="flex flex-wrap items-center gap-2 text-sm text-slate-500"
            >
              <Link
                href="/"
                className="transition hover:text-blue-700"
              >
                Ana Sayfa
              </Link>

              <span aria-hidden="true">/</span>

              <Link
                href="/hesaplamalar"
                className="transition hover:text-blue-700"
              >
                Hesaplamalar
              </Link>

              <span aria-hidden="true">/</span>

              <span className="font-medium text-slate-700">
                İdeal Kilo Hesaplama
              </span>
            </nav>
          </div>
        </section>

        {/* Başlık */}
        <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center md:py-20">
            <span className="inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              Sağlık Hesaplamaları
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
              İdeal Kilo Hesaplama
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Boyunuza ve cinsiyetinize göre tahmini ideal kilonuzu ve sağlıklı
              kilo aralığınızı saniyeler içinde ücretsiz hesaplayın.
            </p>
          </div>
        </section>

        {/* Hesaplama Aracı */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <IdealWeightCalculator />
        </section>

        {/* Bilgilendirme */}
        <section className="mx-auto max-w-5xl px-6 pb-20">
          <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <h2 className="text-3xl font-bold text-slate-900">
              İdeal Kilo Nedir?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              İdeal kilo, kişinin boyu ve bazı temel fiziksel özellikleri
              dikkate alınarak tahmin edilen kilo değeridir. Bu değer herkes
              için kesin ve değişmez bir hedef değildir. Kas kütlesi, kemik
              yapısı, yaş, vücut yağ oranı ve genel sağlık durumu ideal kabul
              edilen kiloyu etkileyebilir.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              İdeal kilo hesaplama araçları, mevcut durumunuzu genel olarak
              değerlendirmek için kullanılabilir. Sağlıklı kilo yönetiminde
              yalnızca tartıdaki sayı değil, vücut kompozisyonu ve yaşam tarzı
              da önemlidir.
            </p>

            <h2 className="mt-12 text-3xl font-bold text-slate-900">
              İdeal Kilo Nasıl Hesaplanır?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Bu hesaplama aracında tahmini ideal kilo için Devine formülü
              kullanılmaktadır. Formülde kişinin boyu ve cinsiyeti dikkate
              alınır. Beş fit üzerindeki her inç için belirli bir kilo değeri
              başlangıç değerine eklenir.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Erkekler İçin
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  İlk 5 fit için 50 kg, bunun üzerindeki her inç için yaklaşık
                  2,3 kg eklenir.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Kadınlar İçin
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  İlk 5 fit için 45,5 kg, bunun üzerindeki her inç için yaklaşık
                  2,3 kg eklenir.
                </p>
              </div>
            </div>

            <h2 className="mt-12 text-3xl font-bold text-slate-900">
              Sağlıklı Kilo Aralığı Nasıl Belirlenir?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Sağlıklı kilo aralığı hesaplanırken vücut kitle indeksi değerleri
              kullanılabilir. Genel yetişkin değerlendirmesinde 18,5 ile 24,9
              arasındaki VKİ değerleri normal kilo aralığı olarak kabul edilir.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <p className="font-semibold text-emerald-900">
                Sağlıklı kilo aralığı formülü
              </p>

              <p className="mt-3 leading-7 text-emerald-800">
                Alt sınır: 18,5 × boy²
                <br />
                Üst sınır: 24,9 × boy²
              </p>
            </div>

            <h2 className="mt-12 text-3xl font-bold text-slate-900">
              Hesaplama Sonucunu Nasıl Değerlendirmelisiniz?
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Hesaplanan ideal kilo değerini kesin bir sağlık hedefi olarak
              görmek yerine genel bir referans olarak değerlendirmek daha
              doğrudur. Düzenli spor yapan ve yüksek kas kütlesine sahip bir
              kişi, hesaplanan değerin üzerinde olmasına rağmen sağlıklı bir
              vücut kompozisyonuna sahip olabilir.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Kilo verme veya kilo alma hedefiniz bulunuyorsa hızlı ve kontrolsüz
              yöntemler yerine sürdürülebilir bir beslenme ve hareket planı
              uygulanmalıdır. Sağlık durumunuza uygun kişisel hedef belirlemek
              için doktor veya diyetisyene danışmanız önerilir.
            </p>

            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-amber-900">
                Önemli bilgilendirme
              </h3>

              <p className="mt-3 leading-7 text-amber-800">
                Bu sayfadaki hesaplama sonuçları genel bilgilendirme amaçlıdır.
                Tıbbi tanı, tedavi veya profesyonel sağlık değerlendirmesi
                yerine geçmez.
              </p>
            </div>
          </article>
        </section>

        {/* İlgili Hesaplamalar */}
        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="text-center">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Benzer Araçlar
              </span>

              <h2 className="mt-6 text-3xl font-bold text-slate-900">
                İlgili Sağlık Hesaplamaları
              </h2>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Link
                href="/hesaplamalar/vki-hesaplama"
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  VKİ Hesaplama
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Boy ve kilonuza göre vücut kitle indeksinizi öğrenin.
                </p>
              </Link>

              <Link
                href="/hesaplamalar/kalori-ihtiyaci-hesaplama"
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  Kalori İhtiyacı
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Günlük tahmini kalori ihtiyacınızı hesaplayın.
                </p>
              </Link>

              <Link
                href="/hesaplamalar/bazal-metabolizma-hesaplama"
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  Bazal Metabolizma
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Vücudunuzun dinlenirken harcadığı enerjiyi öğrenin.
                </p>
              </Link>

              <Link
                href="/hesaplamalar/su-ihtiyaci-hesaplama"
                className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-900">
                  Su İhtiyacı
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  Günlük tahmini su tüketimi ihtiyacınızı hesaplayın.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* Sık Sorulan Sorular */}
        <section className="mx-auto max-w-5xl px-6 pb-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="text-center">
              <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
                Merak Edilenler
              </span>

              <h2 className="mt-6 text-3xl font-bold text-slate-900 md:text-4xl">
                Sık Sorulan Sorular
              </h2>
            </div>

            <div className="mt-10 space-y-5">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-slate-900">
                    {item.question}

                    <span className="text-2xl font-normal text-blue-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-5 leading-7 text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}