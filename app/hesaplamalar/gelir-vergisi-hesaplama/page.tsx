import type { Metadata } from "next";

import IncomeTaxCalculator from "@/components/calculators/IncomeTaxCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import StructuredData from "@/components/common/StructuredData";

const baseUrl = "https://hesaprehberi.vercel.app";
const pageUrl = `${baseUrl}/hesaplamalar/gelir-vergisi-hesaplama`;

export const metadata: Metadata = {
  title: "2026 Gelir Vergisi Hesaplama",
  description:
    "2026 yılı ücret ve ücret dışı gelir vergisi tarifesine göre yıllık vergi matrahınızı, gelir verginizi ve efektif vergi oranınızı hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/gelir-vergisi-hesaplama",
  },
  openGraph: {
    title: "2026 Gelir Vergisi Hesaplama | HesapRehberi",
    description:
      "2026 gelir vergisi dilimlerine göre yaklaşık gelir vergisi tutarınızı hesaplayın.",
    url: "/hesaplamalar/gelir-vergisi-hesaplama",
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
      name: "2026 Gelir Vergisi Hesaplama",
      description:
        "2026 yılı ücret ve ücret dışı gelir vergisi tarifesine göre yıllık vergi matrahınızı, gelir verginizi ve efektif vergi oranınızı hesaplayın.",
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
      mainEntity: {
        "@id": `${pageUrl}/#faq`,
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
          name: "2026 Gelir Vergisi Hesaplama",
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
          name: "Vergi matrahı ile brüt gelir aynı mıdır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Her zaman aynı değildir. Vergi matrahı, kanunen dikkate alınan indirimler ve istisnalar sonrasında vergilendirilecek tutarı ifade eder.",
          },
        },
        {
          "@type": "Question",
          name: "Üst vergi dilimine geçince tüm gelir üst orandan mı vergilendirilir?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Yalnızca ilgili vergi diliminin sınırını aşan bölüm üst orandan vergilendirilir.",
          },
        },
        {
          "@type": "Question",
          name: "Ücret ve ücret dışı gelir arasında neden fark vardır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2026 tarifesinde yüzde 27 oranına tabi üçüncü dilimin üst sınırı, ücret gelirlerinde ücret dışı gelirlere göre daha yüksektir.",
          },
        },
        {
          "@type": "Question",
          name: "Hesaplanan tutar kesin vergi borcum mudur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Sonuç genel bilgilendirme amaçlı yaklaşık bir hesaplamadır. Kişisel istisnalar, indirimler ve mahsuplar gerçek sonucu değiştirebilir.",
          },
        },
      ],
    },
  ],
};

export default function GelirVergisiHesaplamaPage() {
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
              label: "Gelir Vergisi Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            2026 Vergi Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            2026 Gelir Vergisi Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Yıllık vergi matrahınızı ve gelir türünüzü seçerek 2026 gelir
            vergisi tarifesine göre yaklaşık vergi tutarınızı, efektif vergi
            oranınızı ve ulaştığınız vergi dilimini hesaplayın.
          </p>

          <ShareButtons
            title="2026 Gelir Vergisi Hesaplama | HesapRehberi"
            description="2026 gelir vergisi dilimlerine göre yaklaşık vergi tutarınızı hesaplayın."
          />
        </div>

        <IncomeTaxCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Gelir Vergisi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Gelir vergisi, yıllık vergi matrahının tamamına tek bir oran
            uygulanarak hesaplanmaz. Matrahın her bölümü, içinde bulunduğu vergi
            diliminin oranıyla ayrı ayrı vergilendirilir.
          </p>

          <p className="mt-5 leading-8 text-slate-600">
            Bu nedenle vergi matrahı daha yüksek bir dilime ulaştığında,
            matrahın tamamı yeni orandan vergilendirilmez. Yalnızca ilgili
            sınırı aşan bölüm, üst vergi oranına tabi olur.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold leading-7 text-blue-900">
              Toplam Gelir Vergisi = Her vergi diliminde vergilendirilen
              tutarların ayrı ayrı hesaplanan vergilerinin toplamı
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            2026 Gelir Vergisi Oranları
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            2026 yılında gelir vergisi oranları %15, %20, %27, %35 ve %40
            olarak uygulanır. Ücret gelirleri ile ücret dışı gelirlerde üçüncü
            vergi diliminin üst sınırı farklıdır.
          </p>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Dilim
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Oran
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Ücret Geliri Üst Sınırı
                    </th>

                    <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                      Ücret Dışı Gelir Üst Sınırı
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 bg-white">
                  <tr>
                    <td className="px-6 py-4 text-slate-700">Birinci dilim</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      %15
                    </td>
                    <td className="px-6 py-4 text-slate-700">190.000 ₺</td>
                    <td className="px-6 py-4 text-slate-700">190.000 ₺</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-slate-700">İkinci dilim</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      %20
                    </td>
                    <td className="px-6 py-4 text-slate-700">400.000 ₺</td>
                    <td className="px-6 py-4 text-slate-700">400.000 ₺</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-slate-700">Üçüncü dilim</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      %27
                    </td>
                    <td className="px-6 py-4 text-slate-700">1.500.000 ₺</td>
                    <td className="px-6 py-4 text-slate-700">1.000.000 ₺</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-slate-700">
                      Dördüncü dilim
                    </td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      %35
                    </td>
                    <td className="px-6 py-4 text-slate-700">5.300.000 ₺</td>
                    <td className="px-6 py-4 text-slate-700">5.300.000 ₺</td>
                  </tr>

                  <tr>
                    <td className="px-6 py-4 text-slate-700">Beşinci dilim</td>
                    <td className="px-6 py-4 font-semibold text-slate-900">
                      %40
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      5.300.000 ₺ üzeri
                    </td>
                    <td className="px-6 py-4 text-slate-700">
                      5.300.000 ₺ üzeri
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Marjinal ve Efektif Vergi Oranı Arasındaki Fark
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-900">
                Marjinal Vergi Oranı
              </h3>

              <p className="mt-3 leading-7 text-blue-800">
                Matrahınızın ulaştığı en yüksek vergi diliminde uygulanan
                orandır. Matrahın tamamının bu oranla vergilendirildiği anlamına
                gelmez.
              </p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-900">
                Efektif Vergi Oranı
              </h3>

              <p className="mt-3 leading-7 text-green-800">
                Toplam hesaplanan verginin toplam vergi matrahına bölünmesiyle
                elde edilen ortalama vergi oranıdır.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Önemli Bilgilendirme
          </h2>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="leading-8 text-amber-900">
              Bu hesaplama aracı yalnızca girilen yıllık matraha 2026 gelir
              vergisi tarifesini uygular. Asgari ücret vergi istisnası,
              indirimler, giderler, geçmiş dönem mahsupları, kesintiler,
              engellilik indirimi, beyanname durumu ve kişiye özel diğer
              uygulamalar hesaplamaya dahil değildir.
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Resmî işlem, beyanname veya mali kararlar için Gelir İdaresi
            Başkanlığının güncel kaynaklarını kontrol etmeniz ve gerektiğinde
            mali müşavirden destek almanız gerekir.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Vergi matrahı ile brüt gelir aynı mıdır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Her zaman aynı değildir. Vergi matrahı, kanunen dikkate alınan
                indirimler ve istisnalar sonrasında vergilendirilecek tutarı
                ifade eder.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Üst vergi dilimine geçince tüm gelir üst orandan mı
                vergilendirilir?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Yalnızca ilgili vergi diliminin sınırını aşan bölüm üst
                orandan vergilendirilir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Ücret ve ücret dışı gelir arasında neden fark var?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                2026 tarifesinde %27 oranına tabi üçüncü dilimin üst sınırı,
                ücret gelirlerinde ücret dışı gelirlere göre daha yüksektir.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Hesaplanan tutar kesin vergi borcum mudur?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hayır. Sonuç genel bilgilendirme amaçlı yaklaşık bir
                hesaplamadır. Kişisel istisnalar, indirimler ve mahsuplar gerçek
                sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}