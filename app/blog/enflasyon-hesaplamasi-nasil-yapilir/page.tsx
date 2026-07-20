import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  CheckCircle2,
  CircleAlert,
  ShoppingBasket,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Enflasyon Hesaplaması Nasıl Yapılır? Formül ve Örnekler",
  description:
    "Enflasyon oranının, fiyat değişiminin, paranın satın alma gücünün ve reel getirinin nasıl hesaplandığını formüller ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/enflasyon-hesaplamasi-nasil-yapilir",
  },
  openGraph: {
    title: "Enflasyon Hesaplaması Nasıl Yapılır? | HesapRehberi",
    description:
      "Enflasyon oranı, fiyat artışı, satın alma gücü ve reel getiri hesaplama yöntemlerini örneklerle inceleyin.",
    url: "/blog/enflasyon-hesaplamasi-nasil-yapilir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Enflasyon nedir?",
    answer:
      "Enflasyon, mal ve hizmetlerin genel fiyat seviyesinin belirli bir dönem boyunca sürekli yükselmesi ve buna bağlı olarak paranın satın alma gücünün azalmasıdır.",
  },
  {
    question: "Enflasyon oranı nasıl hesaplanır?",
    answer:
      "Yeni fiyat endeksi ile eski fiyat endeksi arasındaki fark, eski fiyat endeksine bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question: "Bir ürünün fiyat artışı enflasyon oranını gösterir mi?",
    answer:
      "Tek bir ürünün fiyat değişimi genel enflasyon oranını göstermez. Genel enflasyon, çok sayıda mal ve hizmetten oluşan bir sepetin ortalama fiyat değişimini ifade eder.",
  },
  {
    question: "Satın alma gücü nasıl hesaplanır?",
    answer:
      "Satın alma gücündeki değişim, fiyat seviyesindeki artış dikkate alınarak hesaplanır. Enflasyon yükseldikçe aynı para tutarıyla satın alınabilecek ürün ve hizmet miktarı azalır.",
  },
  {
    question: "Reel getiri nedir?",
    answer:
      "Reel getiri, bir yatırımın nominal getirisinin enflasyon etkisinden arındırılmış hâlidir. Yatırımın gerçek satın alma gücü kazancını veya kaybını gösterir.",
  },
  {
    question: "Nominal getiri enflasyondan yüksekse yatırım kazandırmış olur mu?",
    answer:
      "Genellikle yatırımın reel olarak kazanç sağlaması için nominal getirinin enflasyonun üzerinde olması gerekir. Kesin hesaplama için bileşik reel getiri formülü kullanılmalıdır.",
  },
  {
    question: "Enflasyon hesaplama sonucu kesin midir?",
    answer:
      "Hesaplama, kullanılan başlangıç ve bitiş değerlerine göre matematiksel bir sonuç verir. Resmî enflasyon oranları ise belirli ürün ve hizmet sepetleri ile ağırlıklandırma yöntemleri kullanılarak hesaplanır.",
  },
];

const impactItems = [
  {
    title: "Gıda ve temel ihtiyaçlar",
    description:
      "Gıda, temizlik ve günlük tüketim ürünlerinin fiyatlarındaki artış hane bütçesini doğrudan etkileyebilir.",
  },
  {
    title: "Konut ve kira giderleri",
    description:
      "Kira, aidat, bakım ve konutla ilgili diğer harcamalardaki artış toplam yaşam maliyetini yükseltebilir.",
  },
  {
    title: "Ulaşım giderleri",
    description:
      "Akaryakıt, toplu taşıma, araç bakımı ve diğer ulaşım harcamaları fiyat değişimlerinden etkilenebilir.",
  },
  {
    title: "Tasarrufların değeri",
    description:
      "Tasarrufların getirisi enflasyonun altında kalırsa birikimlerin gerçek satın alma gücü azalabilir.",
  },
  {
    title: "Maaş ve gelirler",
    description:
      "Gelir artışı fiyat artışlarının altında kalırsa kişinin reel geliri ve satın alma gücü düşebilir.",
  },
  {
    title: "Borç ve kredi ödemeleri",
    description:
      "Sabit tutarlı borçların reel yükü zamanla değişebilir ancak faiz oranları ve yeni kredi maliyetleri enflasyondan etkilenebilir.",
  },
];

export default function EnflasyonHesaplamasiNasilYapilirPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Blog",
              href: "/blog",
            },
            {
              label: "Enflasyon Hesaplaması Nasıl Yapılır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <ChartNoAxesColumnIncreasing
                size={30}
                aria-hidden="true"
              />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Enflasyon Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Enflasyon Hesaplaması Nasıl Yapılır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Enflasyon oranının, fiyat değişiminin, satın alma gücünün ve reel
              getirinin nasıl hesaplandığını formüller ve anlaşılır örneklerle
              öğrenin.
            </p>

            <ShareButtons
              title="Enflasyon Hesaplaması Nasıl Yapılır? | HesapRehberi"
              description="Enflasyon oranı, satın alma gücü ve reel getiri hesaplama yöntemlerini öğrenin."
            />
          </header>

          <nav
            className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="İçindekiler"
          >
            <h2 className="text-xl font-bold text-slate-900">İçindekiler</h2>

            <ol className="mt-4 space-y-3 text-slate-600">
              <li>
                <a
                  href="#enflasyon-nedir"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  1. Enflasyon nedir?
                </a>
              </li>

              <li>
                <a
                  href="#enflasyon-orani"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  2. Enflasyon oranı nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#fiyat-artisi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  3. Bir ürünün fiyat artışı nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#fiyat-endeksi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  4. Fiyat endeksi nedir?
                </a>
              </li>

              <li>
                <a
                  href="#satinalma-gucu"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  5. Satın alma gücü nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#reel-getiri"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  6. Reel getiri nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#gunluk-hayata-etkisi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  7. Enflasyonun günlük hayata etkileri
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  8. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  9. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="enflasyon-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Enflasyon Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Enflasyon, ekonomideki mal ve hizmetlerin genel fiyat
                seviyesinin belirli bir dönem boyunca artmasıdır. Fiyatlar
                genel olarak yükseldiğinde aynı para tutarıyla daha az ürün veya
                hizmet satın alınabilir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bu durum paranın satın alma gücünün azalması anlamına gelir.
                Ancak tek bir ürünün fiyatının artması tek başına genel
                enflasyon oluştuğunu göstermez. Enflasyon hesaplanırken geniş
                bir ürün ve hizmet grubundaki ortalama fiyat değişimi dikkate
                alınır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Enflasyon yükseldikçe paranın aynı miktarla satın alabildiği
                  mal ve hizmet miktarı azalabilir.
                </p>
              </div>
            </section>

            <section id="enflasyon-orani" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Enflasyon Oranı Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Enflasyon oranını hesaplamak için karşılaştırılan dönemin fiyat
                endeksi ile önceki dönemin fiyat endeksi arasındaki değişim
                bulunur.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Enflasyon Oranı = ((Yeni Endeks − Eski Endeks) ÷ Eski Endeks)
                  × 100
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Enflasyon oranı hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Eski fiyat endeksi: 200</p>
                  <p>Yeni fiyat endeksi: 230</p>
                  <p>Endeks farkı: 230 − 200 = 30</p>
                  <p>Hesaplama: (30 ÷ 200) × 100</p>

                  <p className="font-semibold text-slate-900">
                    Enflasyon oranı: %15
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Bu örnekte fiyat endeksinin 200 seviyesinden 230 seviyesine
                çıkması, karşılaştırılan dönemde genel fiyat seviyesinin yüzde
                15 arttığını gösterir.
              </p>
            </section>

            <section id="fiyat-artisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Bir Ürünün Fiyat Artışı Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Belirli bir ürünün fiyatındaki yüzdesel değişim, yeni fiyat ile
                eski fiyat arasındaki fark kullanılarak hesaplanabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Fiyat Artış Oranı = ((Yeni Fiyat − Eski Fiyat) ÷ Eski Fiyat)
                  × 100
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Ürün fiyat artışı örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Eski fiyat: 500 TL</p>
                  <p>Yeni fiyat: 650 TL</p>
                  <p>Fiyat farkı: 650 − 500 = 150 TL</p>
                  <p>Hesaplama: (150 ÷ 500) × 100</p>

                  <p className="font-semibold text-slate-900">
                    Fiyat artış oranı: %30
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Bir ürünün fiyatının yüzde 30 artması, genel enflasyon
                    oranının da yüzde 30 olduğu anlamına gelmez. Genel
                    enflasyon, çok sayıda ürün ve hizmetin ağırlıklı fiyat
                    değişimine göre hesaplanır.
                  </p>
                </div>
              </div>
            </section>

            <section id="fiyat-endeksi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Fiyat Endeksi Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Fiyat endeksi, belirli bir mal ve hizmet sepetinin fiyatlarının
                zaman içindeki değişimini ölçmek için kullanılan göstergedir.
                Bir başlangıç dönemi temel alınır ve sonraki dönemlerdeki fiyat
                değişimleri bu temel dönemle karşılaştırılır.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Temel dönem
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Endeks hesaplamasında karşılaştırma için başlangıç kabul
                    edilen dönemdir.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">Karşılaştırma dönemi</h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    Fiyat seviyesindeki değişimin ölçüldüğü yeni dönemi ifade
                    eder.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Endeksin artması genel fiyat seviyesinin yükseldiğini, azalması
                ise karşılaştırılan sepette genel fiyat seviyesinin düştüğünü
                gösterebilir.
              </p>
            </section>

            <section id="satinalma-gucu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Paranın Satın Alma Gücü Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Satın alma gücü, belirli bir para tutarıyla ne kadar mal veya
                hizmet alınabildiğini ifade eder. Fiyat seviyesi arttığında aynı
                para tutarının satın alma gücü azalır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Yeni Satın Alma Gücü = Para Tutarı ÷ (1 + Enflasyon Oranı)
                </p>

                <p className="mt-3 text-sm leading-6 text-blue-800">
                  Formülde enflasyon oranı ondalık biçimde kullanılır. Örneğin
                  yüzde 25 enflasyon için 0,25 yazılır.
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Satın alma gücü örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Başlangıç para tutarı: 10.000 TL</p>
                  <p>Enflasyon oranı: %25</p>
                  <p>Hesaplama: 10.000 ÷ 1,25</p>

                  <p className="font-semibold text-slate-900">
                    Başlangıç dönemindeki satın alma gücü karşılığı: 8.000 TL
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Başka bir ifadeyle fiyatlar yüzde 25 arttığında 10.000 TL&apos;nin
                başlangıç dönemindeki 10.000 TL ile aynı satın alma gücünü
                koruması için para tutarının da benzer oranda artması gerekir.
              </p>

              <div className="mt-7 rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <ShoppingBasket size={22} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-bold text-slate-900">
                      Sepet üzerinden basit örnek
                    </h3>

                    <p className="mt-3 leading-8 text-slate-600">
                      Bir alışveriş sepeti başlangıçta 1.000 TL iken aynı sepet
                      daha sonra 1.200 TL olursa sepet maliyeti yüzde 20 artmış
                      olur. Başlangıçta 1.000 TL ile alınabilen sepet için yeni
                      dönemde 1.200 TL gerekir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="reel-getiri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Reel Getiri Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Nominal getiri, yatırımın para cinsinden görünen kazancıdır.
                Reel getiri ise bu kazancın enflasyon etkisinden arındırılmış
                hâlini ifade eder.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Reel Getiri = ((1 + Nominal Getiri) ÷ (1 + Enflasyon Oranı) −
                  1) × 100
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Reel getiri hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Nominal yatırım getirisi: %30</p>
                  <p>Enflasyon oranı: %20</p>
                  <p>Hesaplama: ((1,30 ÷ 1,20) − 1) × 100</p>

                  <p className="font-semibold text-slate-900">
                    Reel getiri: Yaklaşık %8,33
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Nominal getiriden enflasyon oranını doğrudan çıkarmak yaklaşık
                bir fikir verebilir. Ancak daha doğru sonuç için oranların
                bileşik etkisini dikkate alan formül kullanılmalıdır.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Durum</th>
                        <th className="px-5 py-4 font-semibold">
                          Nominal Getiri
                        </th>
                        <th className="px-5 py-4 font-semibold">Enflasyon</th>
                        <th className="px-5 py-4 font-semibold">
                          Yaklaşık Sonuç
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Reel kazanç
                        </td>
                        <td className="px-5 py-4">%30</td>
                        <td className="px-5 py-4">%20</td>
                        <td className="px-5 py-4">Pozitif</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Satın alma gücü korunur
                        </td>
                        <td className="px-5 py-4">%20</td>
                        <td className="px-5 py-4">%20</td>
                        <td className="px-5 py-4">Yaklaşık dengeli</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Reel kayıp
                        </td>
                        <td className="px-5 py-4">%10</td>
                        <td className="px-5 py-4">%20</td>
                        <td className="px-5 py-4">Negatif</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="gunluk-hayata-etkisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Enflasyonun Günlük Hayata Etkileri
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Enflasyon yalnızca ekonomik göstergeleri değil, günlük
                harcamaları, tasarrufları ve gelirlerin gerçek değerini de
                etkileyebilir.
              </p>

              <div className="mt-7 grid gap-5">
                {impactItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="font-bold text-slate-900">{item.title}</h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Enflasyon Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Yeni ve eski değer arasındaki farkı yanlış değere bölmek.",
                  "Yüzde oranını ondalık biçime dönüştürmeden formülde kullanmak.",
                  "Tek bir ürünün fiyat artışını genel enflasyon oranı olarak değerlendirmek.",
                  "Aylık enflasyon oranlarını yalnızca toplayarak yıllık sonuç bulmaya çalışmak.",
                  "Nominal getiri ile reel getiriyi aynı kavram olarak düşünmek.",
                  "Farklı dönemlere ait fiyatları doğrudan karşılaştırmak.",
                  "Ürün sepetindeki ağırlıkların sonuç üzerindeki etkisini göz ardı etmek.",
                  "Yuvarlama nedeniyle küçük sonuç farklarının oluşabileceğini unutmamak.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <p className="leading-8 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Resmî enflasyon hesaplamaları çok sayıda ürün ve hizmetten
                    oluşan sepetler, belirli ağırlıklar ve istatistiksel
                    yöntemler kullanılarak hazırlanır. Basit fiyat değişimi
                    hesaplamaları resmî endeks hesaplamalarının yerine geçmez.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-sorulan-sorular" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Sık Sorulan Sorular
              </h2>

              <div className="mt-6 space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
                      {item.question}
                    </summary>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
              <h2 className="text-3xl font-bold">
                Enflasyon Etkisini Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Başlangıç ve bitiş değerlerini girerek fiyat değişimini,
                enflasyon oranını ve paranın satın alma gücündeki değişimi
                saniyeler içinde hesaplayın.
              </p>

              <Link
                href="/hesaplamalar/enflasyon-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Enflasyon Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacıyla sunulur ve
                resmî istatistiklerin veya finansal danışmanlığın yerine geçmez.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}