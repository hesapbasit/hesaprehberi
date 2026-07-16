import type { Metadata } from "next";

import RentIncreaseCalculator from "@/components/calculators/RentIncreaseCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import StructuredData from "@/components/common/StructuredData";

const baseUrl = "https://hesaprehberi.vercel.app";
const pageUrl = `${baseUrl}/hesaplamalar/kira-artis-hesaplama`;

export const metadata: Metadata = {
  title: "Kira Artış Hesaplama",
  description:
    "Mevcut kira tutarı ve artış oranını girerek yeni aylık kira bedelini, artış tutarını ve yıllık farkı hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/kira-artis-hesaplama",
  },
  openGraph: {
    title: "Kira Artış Hesaplama | HesapRehberi",
    description:
      "Kira artış oranına göre yeni aylık kira bedelini ve artış tutarını ücretsiz hesaplayın.",
    url: "/hesaplamalar/kira-artis-hesaplama",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Kira Artış Hesaplama",
      description:
        "Mevcut kira tutarı ve artış oranını girerek yeni aylık kira bedelini, artış tutarını ve yıllık farkı hesaplayın.",
      inLanguage: "tr-TR",
      isPartOf: {
        "@id": `${baseUrl}/#website`,
      },
      about: {
        "@id": `${baseUrl}/#organization`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hesaplamalar",
          item: `${baseUrl}/hesaplamalar`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Kira Artış Hesaplama",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Kira artış oranı her ay aynı mıdır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Kullanılacak oran, sözleşmenin yenilendiği dönemdeki güncel verilere ve geçerli kurallara göre değişebilir.",
          },
        },
        {
          "@type": "Question",
          name: "Artış oranını kendim değiştirebilir miyim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Evet. Araçtaki artış oranı alanına hesaplamak istediğiniz oranı yazabilirsiniz.",
          },
        },
        {
          "@type": "Question",
          name: "Yeni kira bedeli nasıl bulunur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mevcut kiraya, mevcut kiranın artış oranına karşılık gelen tutar eklenerek yeni kira bedeli bulunur.",
          },
        },
        {
          "@type": "Question",
          name: "Hesaplama sonucu hukuken bağlayıcı mıdır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Sonuç yalnızca genel bilgilendirme ve matematiksel hesaplama amacı taşır. Hukuki uyuşmazlıklarda uzman görüşü alınmalıdır.",
          },
        },
      ],
    },
  ],
};

export default function KiraArtisHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <StructuredData data={structuredData} />

      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Hesaplamalar",
              href: "/hesaplamalar",
            },
            {
              label: "Kira Artış Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Kira ve Konut Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Kira Artış Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Mevcut aylık kira tutarınızı ve uygulanacak artış oranını girerek
            yeni kira bedelini, aylık artış tutarını ve bir yıllık toplam farkı
            hesaplayın.
          </p>

          <ShareButtons
            title="Kira Artış Hesaplama | HesapRehberi"
            description="Kira artış oranına göre yeni kira bedelini ücretsiz hesaplayın."
          />
        </div>

        <RentIncreaseCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kira Artışı Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Kira artış tutarı, mevcut aylık kira bedelinin uygulanacak artış
            oranıyla çarpılması ve sonucun 100&apos;e bölünmesiyle hesaplanır.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold leading-7 text-blue-900">
              Artış Tutarı = Mevcut Kira × Artış Oranı / 100
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Yeni aylık kira bedeli ise mevcut kiraya hesaplanan artış
            tutarının eklenmesiyle bulunur.
          </p>

          <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
            <p className="font-semibold leading-7 text-green-900">
              Yeni Kira = Mevcut Kira + Artış Tutarı
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek Kira Artışı Hesaplama
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Mevcut kira bedelinin 20.000 ₺ ve artış oranının %32,03 olduğunu
            varsayalım. Bu durumda aylık artış tutarı 6.406 ₺ olur ve yeni kira
            bedeli 26.406 ₺ olarak hesaplanır.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">
                Mevcut Kira
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                20.000 ₺
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">
                Artış Oranı
              </p>

              <p className="mt-2 text-2xl font-bold text-slate-900">
                %32,03
              </p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-sm font-medium text-blue-100">
                Yeni Aylık Kira
              </p>

              <p className="mt-2 text-2xl font-bold">26.406 ₺</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Kira Artış Oranı Nasıl Belirlenir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Hesaplamada kullanılacak oran, kira sözleşmesinin yenileme
            dönemine ve geçerli mevzuata göre değişebilir. Bu nedenle aracın
            oran alanına yenileme tarihiniz için geçerli oranı girmeniz gerekir.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="leading-8 text-amber-900">
              Hesaplama aracı yalnızca girilen kira tutarı ve oran üzerinden
              matematiksel sonuç üretir. Sözleşme hükümleri, beş yılı aşan kira
              ilişkileri, tarafların anlaşması veya mahkeme kararı gibi özel
              durumları değerlendirmez.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Bir Yıllık Kira Farkı
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Aylık artış tutarı 12 ile çarpılarak yeni kira döneminde bir yıl
            boyunca oluşacak toplam fark hesaplanabilir.
          </p>

          <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <p className="font-semibold leading-7 text-indigo-900">
              Bir Yıllık Toplam Fark = Aylık Artış Tutarı × 12
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Yukarıdaki örnekte aylık artış tutarı 6.406 ₺ olduğu için bir
            yıllık toplam kira farkı 76.872 ₺ olur.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Kira artış oranı her ay aynı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Kullanılacak oran, sözleşmenin yenilendiği dönemdeki
                güncel verilere ve geçerli kurallara göre değişebilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Artış oranını kendim değiştirebilir miyim?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Evet. Araçtaki artış oranı alanına hesaplamak istediğiniz oranı
                yazabilirsiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Yeni kira bedeli nasıl bulunur?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Mevcut kiraya, mevcut kiranın artış oranına karşılık gelen
                tutarı ekleyerek bulunur.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplama sonucu hukuken bağlayıcı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç yalnızca genel bilgilendirme ve matematiksel
                hesaplama amacı taşır. Hukuki uyuşmazlıklarda uzman görüşü
                alınmalıdır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}