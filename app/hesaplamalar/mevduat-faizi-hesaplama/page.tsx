import type { Metadata } from "next";

import DepositInterestCalculator from "@/components/calculators/DepositInterestCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import StructuredData from "@/components/common/StructuredData";

const baseUrl = "https://hesaprehberi.vercel.app";
const pageUrl = `${baseUrl}/hesaplamalar/mevduat-faizi-hesaplama`;

export const metadata: Metadata = {
  title: "Mevduat Faizi Hesaplama",
  description:
    "Ana para, yıllık faiz oranı, vade ve stopaj oranını girerek brüt faiz, net faiz ve vade sonu toplam tutarı hesaplayın.",
  alternates: {
    canonical: "/hesaplamalar/mevduat-faizi-hesaplama",
  },
  openGraph: {
    title: "Mevduat Faizi Hesaplama | HesapRehberi",
    description:
      "Vadeli mevduat için brüt faiz, net faiz, stopaj ve vade sonu toplam tutarı ücretsiz hesaplayın.",
    url: "/hesaplamalar/mevduat-faizi-hesaplama",
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
      name: "Mevduat Faizi Hesaplama",
      description:
        "Ana para, yıllık faiz oranı, vade ve stopaj oranını girerek brüt faiz, net faiz ve vade sonu toplam tutarı hesaplayın.",
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
          name: "Mevduat Faizi Hesaplama",
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
          name: "Mevduat faizi günlük mü hesaplanır?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Birçok vadeli mevduat hesabında faiz, yıllık oran üzerinden gün sayısına göre hesaplanır.",
          },
        },
        {
          "@type": "Question",
          name: "Stopaj oranını nereden öğrenebilirim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Stopaj oranı ürün türüne, vade süresine ve yürürlükteki düzenlemelere göre değişebilir. Güncel oran bankadan veya resmî kaynaklardan kontrol edilmelidir.",
          },
        },
        {
          "@type": "Question",
          name: "Ay seçeneğinde neden 30 gün kullanılıyor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hesaplamayı sadeleştirmek için her ay yaklaşık 30 gün kabul edilir. Kesin vade hesabında bankanın kullandığı gün sayısı esas alınmalıdır.",
          },
        },
        {
          "@type": "Question",
          name: "Sonuç bankanın vereceği tutarla aynı olur mu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Her zaman aynı olmayabilir. Bankanın faiz hesaplama yöntemi, gün sayısı, stopaj oranı ve kampanya şartları sonucu değiştirebilir.",
          },
        },
      ],
    },
  ],
};

export default function MevduatFaiziHesaplamaPage() {
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
              label: "Mevduat Faizi Hesaplama",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Finans Araçları
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Mevduat Faizi Hesaplama
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Ana para, yıllık faiz oranı, vade ve stopaj oranını girerek brüt
            faiz getirisini, net kazancı ve vade sonu toplam tutarı hesaplayın.
          </p>

          <ShareButtons
            title="Mevduat Faizi Hesaplama | HesapRehberi"
            description="Vadeli mevduat için net faiz getirisini ve vade sonu toplam tutarı hesaplayın."
          />
        </div>

        <DepositInterestCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Mevduat Faizi Nasıl Hesaplanır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Basit mevduat faizi hesaplanırken ana para, yıllık faiz oranı ve
            vade süresi dikkate alınır. Günlük vadede yıllık faiz oranı 365 güne
            bölünerek vade gün sayısıyla çarpılır.
          </p>

          <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <p className="font-semibold leading-7 text-blue-900">
              Brüt Faiz = Ana Para × Yıllık Faiz Oranı × Vade Günü / 365
            </p>
          </div>

          <p className="mt-6 leading-8 text-slate-600">
            Hesaplama yapılırken faiz oranı yüzde biçiminden ondalık değere
            çevrilir. Örneğin yıllık %40 faiz oranı hesaplamada 0,40 olarak
            kullanılır.
          </p>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Brüt Faiz ve Net Faiz Arasındaki Fark
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <h3 className="text-lg font-bold text-blue-900">Brüt Faiz</h3>

              <p className="mt-3 leading-7 text-blue-800">
                Stopaj veya başka bir kesinti uygulanmadan önce hesaplanan faiz
                getirisidir.
              </p>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-lg font-bold text-green-900">Net Faiz</h3>

              <p className="mt-3 leading-7 text-green-800">
                Brüt faizden stopaj kesintisi çıkarıldıktan sonra yatırımcının
                elde ettiği faiz kazancıdır.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="font-semibold leading-7 text-slate-900">
              Net Faiz = Brüt Faiz - Stopaj Kesintisi
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Örnek Mevduat Faizi Hesaplama
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            100.000 ₺ ana para, yıllık %40 faiz oranı ve 32 günlük vade için
            brüt faiz yaklaşık 3.506,85 ₺ olur. Stopaj oranı %0 seçilirse net
            faiz aynı tutarda kalır ve vade sonu toplam tutar yaklaşık
            103.506,85 ₺ olur.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Ana Para</p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                100.000 ₺
              </p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Faiz Oranı</p>
              <p className="mt-2 text-xl font-bold text-slate-900">%40</p>
            </div>

            <div className="rounded-2xl bg-slate-100 p-6">
              <p className="text-sm font-medium text-slate-500">Vade</p>
              <p className="mt-2 text-xl font-bold text-slate-900">32 Gün</p>
            </div>

            <div className="rounded-2xl bg-blue-600 p-6 text-white">
              <p className="text-sm font-medium text-blue-100">Vade Sonu</p>
              <p className="mt-2 text-xl font-bold">103.506,85 ₺</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Vade Türü Nasıl Kullanılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Gün seçeneğinde girdiğiniz değer doğrudan vade gün sayısı olarak
            kullanılır. Ay seçeneğinde ise her ay yaklaşık 30 gün kabul edilerek
            hesaplama yapılır.
          </p>

          <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <p className="leading-8 text-amber-900">
              Bankalar vade süresi, gün hesabı, faiz tahakkuku, stopaj ve
              kampanya şartlarında farklı uygulamalar kullanabilir. Bu nedenle
              sonuç yaklaşık bilgi verir.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Mevduat faizi günlük mü hesaplanır?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Birçok vadeli mevduat hesabında faiz, yıllık oran üzerinden gün
                sayısına göre hesaplanır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Stopaj oranını nereden öğrenebilirim?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Stopaj oranı ürün türüne, vade süresine ve yürürlükteki
                düzenlemelere göre değişebilir. Güncel oranı bankanızdan veya
                resmî kaynaklardan kontrol etmelisiniz.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Ay seçeneğinde neden 30 gün kullanılıyor?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Hesaplamayı sadeleştirmek için her ay yaklaşık 30 gün kabul
                edilir. Kesin vade hesabında bankanın kullandığı gün sayısı esas
                alınmalıdır.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Sonuç bankanın vereceği tutarla aynı olur mu?
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Her zaman aynı olmayabilir. Bankanın faiz hesaplama yöntemi,
                gün sayısı, stopaj ve kampanya şartları sonucu değiştirebilir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}