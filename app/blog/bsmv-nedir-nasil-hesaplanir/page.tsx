import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  Calculator,
  CheckCircle2,
  CircleAlert,
  CreditCard,
  FileText,
  Landmark,
  Percent,
  ReceiptText,
  Scale,
  ShieldCheck,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const canonicalPath = "/blog/bsmv-nedir-nasil-hesaplanir";

export const metadata: Metadata = {
  title: "BSMV Nedir? Nasıl Hesaplanır?",
  description:
    "Banka ve Sigorta Muameleleri Vergisinin ne olduğunu, hangi işlemlerde uygulandığını, BSMV hesaplama formülünü ve örnek hesaplamaları öğrenin.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "BSMV Nedir? Nasıl Hesaplanır? | HesapRehberi",
    description:
      "BSMV matrahı, oranı, kredi faizinde BSMV hesabı, KDV ile farkları ve örnek hesaplamalar.",
    url: canonicalPath,
    type: "article",
  },
};

const faqItems = [
  {
    question: "BSMV nedir?",
    answer:
      "BSMV, Banka ve Sigorta Muameleleri Vergisinin kısaltmasıdır. Banka, banker ve sigorta şirketlerinin vergi kapsamındaki işlemleri sonucunda kendi lehlerine aldıkları paralar üzerinden hesaplanan bir gider vergisidir.",
  },
  {
    question: "BSMV'yi kim öder?",
    answer:
      "Kanuni mükellef banka, banker ve sigorta şirketleridir. Ancak verginin ekonomik maliyeti, işlem ücretine veya kredi maliyetine yansıtılması nedeniyle müşterinin ödediği toplam tutarın içinde görülebilir.",
  },
  {
    question: "BSMV hangi tutar üzerinden hesaplanır?",
    answer:
      "Genel yaklaşımda vergi, işlem sonucunda banka veya ilgili kuruluş lehine kalan faiz, komisyon, ücret ve benzeri gelirler üzerinden hesaplanır. Kambiyo işlemlerinde ise özel matrah ve oran kuralları bulunabilir.",
  },
  {
    question: "BSMV oranı her işlemde aynı mıdır?",
    answer:
      "Hayır. İşlemin türüne göre genel oran, özel oran veya istisna uygulanabilir. Özellikle tüketici kredileri, kambiyo işlemleri, menkul kıymet işlemleri ve konut finansmanı gibi alanlarda farklı kurallar bulunabilir.",
  },
  {
    question: "Kredi anaparası üzerinden BSMV alınır mı?",
    answer:
      "Genellikle kredi anaparasının tamamı üzerinden değil, bankanın kredi nedeniyle lehine aldığı faiz ve vergiye tabi ücretler üzerinden hesaplama yapılır.",
  },
  {
    question: "Tüketici kredisinde BSMV nasıl hesaplanır?",
    answer:
      "İlgili taksit dönemindeki faiz veya vergiye tabi banka geliri, uygulanan BSMV oranıyla çarpılır. Her taksitte faiz payı değişebileceği için BSMV tutarı da dönemlere göre farklılaşabilir.",
  },
  {
    question: "Konut kredisinde BSMV var mı?",
    answer:
      "Konut finansmanı tanımına giren işlemlerde BSMV istisnası uygulanabilen durumlar vardır. Kredinin gerçekten konut finansmanı kapsamında olup olmadığı ve sözleşme özellikleri kontrol edilmelidir.",
  },
  {
    question: "Kredi kartı faizinde BSMV uygulanır mı?",
    answer:
      "Kredi kartı borcuna ilişkin faiz, gecikme faizi veya benzeri banka gelirleri BSMV kapsamına girebilir. Uygulama, işlemin türüne ve yürürlükteki düzenlemelere göre belirlenir.",
  },
  {
    question: "Mevduat faizinden BSMV kesilir mi?",
    answer:
      "Mevduat sahibine ödenen faiz açısından çoğunlukla gelir vergisi stopajı gündeme gelir. BSMV ise bankanın kendi lehine aldığı paralarla ilgili bir vergidir.",
  },
  {
    question: "BSMV ile KDV arasındaki fark nedir?",
    answer:
      "KDV mal teslimi ve hizmetlerin geniş bir bölümünde uygulanan genel tüketim vergisidir. BSMV ise banka, banker ve sigorta işlemlerine özgü özel bir gider vergisidir.",
  },
  {
    question: "BSMV ile KKDF aynı şey midir?",
    answer:
      "Hayır. BSMV bir vergidir; KKDF ise belirli kredi ve finansman işlemlerinde uygulanabilen ayrı bir fon kesintisidir.",
  },
  {
    question: "BSMV hesaplama aracı kesin vergi sonucu verir mi?",
    answer:
      "Araç, girilen matrah ve oran üzerinden matematiksel sonuç üretir. İşlemin hangi orana tabi olduğu ve istisna kapsamında bulunup bulunmadığı güncel mevzuata göre ayrıca doğrulanmalıdır.",
  },
];

const coveredTransactions = [
  "Kredi faizleri ve vergiye tabi kredi ücretleri",
  "Kredi kartı faizleri ve bazı kart işlem gelirleri",
  "Havale, EFT, para transferi ve benzeri hizmet gelirleri",
  "Banka komisyonları ve hesap işletim niteliğindeki gelirler",
  "Teminat mektubu ve gayrinakdi kredi komisyonları",
  "Sigorta şirketlerinin vergi kapsamındaki işlemleri",
  "Banker sayılan kuruluşların esas faaliyetleri kapsamındaki işlemler",
  "Kambiyo alım satım işlemleri için belirlenen özel uygulamalar",
  "Menkul kıymet işlemlerinden lehe kalan bazı tutarlar",
  "Finansal hizmetler nedeniyle alınan ücret ve komisyonlar",
];

const commonMistakes = [
  "Kredi anaparasının tamamını BSMV matrahı kabul etmek.",
  "Faiz oranı ile BSMV oranını aynı oran sanmak.",
  "BSMV'yi KDV ile karıştırmak.",
  "BSMV ile KKDF'yi tek bir kesinti olarak değerlendirmek.",
  "Konut finansmanı istisnasının her konutla ilgili krediye otomatik uygulandığını düşünmek.",
  "Kambiyo işlemlerindeki özel matrah ve oran kurallarını genel BSMV formülüyle karıştırmak.",
  "Aylık kredi taksitinin tamamı üzerinden BSMV hesaplamak.",
  "Komisyon ve masrafların vergi durumunu ayrı ayrı incelememek.",
  "Değişen oranları ve güncel mevzuatı kontrol etmemek.",
  "Yuvarlama nedeniyle oluşan kuruş farklarını hesaplama hatası sanmak.",
];

const tocItems = [
  ["bsmv-nedir", "1. BSMV nedir?"],
  ["bsmv-kimler-oder", "2. BSMV'yi kim öder?"],
  ["bsmv-kapsami", "3. Hangi işlemlerde uygulanır?"],
  ["bsmv-matrahi", "4. BSMV matrahı nedir?"],
  ["bsmv-orani", "5. BSMV oranı nedir?"],
  ["bsmv-formulu", "6. BSMV hesaplama formülü"],
  ["ornek-hesaplamalar", "7. Örnek BSMV hesaplamaları"],
  ["kredi-faizinde-bsmv", "8. Kredi faizinde BSMV"],
  ["kredi-karti-bsmv", "9. Kredi kartında BSMV"],
  ["konut-kredisi-bsmv", "10. Konut kredisinde BSMV"],
  ["kambiyo-bsmv", "11. Döviz işlemlerinde BSMV"],
  ["mevduat-bsmv", "12. Mevduatta BSMV var mı?"],
  ["bsmv-kdv-farki", "13. BSMV ve KDV farkı"],
  ["bsmv-kkdf-farki", "14. BSMV ve KKDF farkı"],
  ["sik-yapilan-hatalar", "15. Sık yapılan hatalar"],
  ["sik-sorulan-sorular", "16. Sık sorulan sorular"],
] as const;

export default function BsmvNedirNasilHesaplanirPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: "BSMV Nedir? Nasıl Hesaplanır?" },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Landmark size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Vergi ve Bankacılık Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              BSMV Nedir? Nasıl Hesaplanır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Banka ve Sigorta Muameleleri Vergisinin kapsamını, matrahını,
              hesaplama formülünü ve kredi işlemlerindeki etkisini anlaşılır
              örneklerle inceleyin.
            </p>

            <ShareButtons
              title="BSMV Nedir? Nasıl Hesaplanır? | HesapRehberi"
              description="BSMV matrahı, hesaplama formülü, kredi faizindeki uygulaması ve KDV ile farkları."
            />
          </header>

          <nav
            className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="İçindekiler"
          >
            <h2 className="text-xl font-bold text-slate-900">İçindekiler</h2>
            <ol className="mt-4 grid gap-3 text-slate-600 md:grid-cols-2">
              {tocItems.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={`#${href}`}
                    className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="bsmv-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">BSMV Nedir?</h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV, Banka ve Sigorta Muameleleri Vergisinin kısaltmasıdır.
                Banka, banker ve sigorta şirketlerinin belirli işlemleri
                sonucunda kendi lehlerine aldıkları faiz, komisyon, ücret ve
                benzeri paralar üzerinden hesaplanan özel bir gider vergisidir.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Vergi doğrudan kredi tutarının veya hesaptaki paranın tamamı
                üzerinden hesaplanmaz. Esas olarak finansal işlem sonucunda
                kuruluş lehine kalan gelir dikkate alınır. Kambiyo işlemleri
                gibi bazı alanlarda özel matrah kuralları bulunabilir.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Temel yaklaşım: BSMV, finansal işlem nedeniyle banka veya
                  ilgili kuruluş lehine kalan vergiye tabi tutar üzerinden
                  hesaplanır.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-amber-900">
                    BSMV oranı ve istisna durumu işlemin türüne göre değişebilir.
                    Gerçek bir işlem değerlendirilirken güncel mevzuat ve
                    sözleşme bilgileri kontrol edilmelidir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-kimler-oder" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV&apos;yi Kim Öder?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV&apos;nin kanuni mükellefi banka, banker ve sigorta
                şirketleridir. Vergi, bu kuruluşların vergi kapsamındaki
                işlemlerinden doğan gelir üzerinden hesaplanır ve beyan edilir.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                Banka vergi maliyetini kredi faizine, komisyona veya hizmet
                bedeline yansıtabildiği için kullanıcı BSMV tutarını ödeme
                planı, hesap özeti veya dekontta ayrı bir satır olarak görebilir.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Building2 size={25} className="text-blue-600" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Bankalar</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Kredi, komisyon ve diğer bankacılık gelirleri üzerinden
                    vergi doğabilir.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-7">
                  <WalletCards size={25} className="text-blue-600" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Bankerler</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Kanunda banker sayılan kuruluşların esas faaliyet gelirleri
                    kapsama girebilir.
                  </p>
                </div>
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <ShieldCheck size={25} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">Sigorta şirketleri</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Vergi kapsamındaki sigorta muameleleri nedeniyle lehe alınan
                    tutarlar değerlendirilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-kapsami" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV Hangi İşlemlerde Uygulanır?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV tek bir işlem türüne bağlı değildir. Banka veya ilgili
                kuruluşun yaptığı işlem sonucunda lehine para kalması, verginin
                doğması açısından temel unsurlardan biridir.
              </p>
              <div className="mt-6 grid gap-4">
                {coveredTransactions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="bsmv-matrahi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV Matrahı Nedir?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Matrah, verginin hesaplanacağı temel tutardır. Genel BSMV
                uygulamasında matrah; faiz, komisyon, ücret veya başka bir adla
                banka ya da ilgili kuruluş lehine alınan paradır.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Matraha girebilen tutarlar
                  </h3>
                  <ul className="mt-5 space-y-3 text-slate-600">
                    <li>Faiz geliri</li>
                    <li>Komisyon geliri</li>
                    <li>Hizmet ücreti</li>
                    <li>İşlem nedeniyle lehe kalan diğer paralar</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">
                    Genellikle matrah olmayan tutar
                  </h3>
                  <p className="mt-5 leading-7 text-blue-100">
                    Kredi anaparasının tamamı bankanın geliri değildir. Temel
                    kredi hesabında BSMV, anaparanın tamamı yerine faiz ve
                    vergiye tabi gelir unsurları üzerinden değerlendirilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-orani" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV Oranı Nedir?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV için tek ve değişmez bir oran bulunmaz. Genel banka ve
                sigorta muamelelerinde genel oran kullanılırken, tüketici
                kredileri ve kambiyo işlemleri gibi alanlarda özel oranlar veya
                özel matrah kuralları uygulanabilir.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">İşlem türü</th>
                        <th className="px-5 py-4 font-semibold">Genel yaklaşım</th>
                        <th className="px-5 py-4 font-semibold">Kontrol</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Genel banka işlemleri
                        </td>
                        <td className="px-5 py-4">
                          Lehe alınan tutara genel oran uygulanabilir
                        </td>
                        <td className="px-5 py-4">Özel oran veya istisna</td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          Tüketici kredileri
                        </td>
                        <td className="px-5 py-4 text-blue-900">
                          Faiz ve vergiye tabi gelirler için özel oran
                        </td>
                        <td className="px-5 py-4 text-blue-900">
                          Kredi türü ve güncel düzenleme
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Kambiyo işlemleri
                        </td>
                        <td className="px-5 py-4">
                          Satış tutarı esaslı özel uygulama bulunabilir
                        </td>
                        <td className="px-5 py-4">
                          İstisna ve sıfır oranlı işlemler
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Konut finansmanı
                        </td>
                        <td className="px-5 py-4">
                          Şartları karşılayan işlemler istisna olabilir
                        </td>
                        <td className="px-5 py-4">Kredinin hukuki niteliği</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-red-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-red-900">
                    Oranlar zaman içinde değiştirilebilir. Bu sayfadaki yüzde 5,
                    yüzde 10 ve yüzde 15 değerleri yalnızca hesaplama yöntemini
                    göstermek içindir. Gerçek işlemde güncel oran resmi
                    kaynaklardan doğrulanmalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-formulu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV Nasıl Hesaplanır?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Matrah ve uygulanacak oran biliniyorsa BSMV basit bir yüzde
                hesabıyla bulunabilir.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  BSMV Tutarı = BSMV Matrahı × BSMV Oranı ÷ 100
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Vergi Dahil Toplam = BSMV Matrahı + BSMV Tutarı
                </p>
              </div>
              <div className="mt-7 rounded-3xl bg-slate-100 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Basit hesaplama örneği
                </h3>
                <div className="mt-5 space-y-3 text-slate-600">
                  <p>Vergiye tabi banka geliri: 2.000 TL</p>
                  <p>Örnek BSMV oranı: %5</p>
                  <p>Hesaplama: 2.000 × 5 ÷ 100</p>
                  <p className="font-semibold text-slate-900">
                    BSMV tutarı: 100 TL
                  </p>
                  <p className="font-semibold text-blue-700">
                    Vergi dahil toplam: 2.100 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="ornek-hesaplamalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek BSMV Hesaplamaları
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki tablo farklı matrah ve oranlarla matematiksel
                hesaplama yöntemini gösterir. Oranlar örnek amaçlıdır.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Matrah</th>
                        <th className="px-5 py-4 font-semibold">Oran</th>
                        <th className="px-5 py-4 font-semibold">BSMV</th>
                        <th className="px-5 py-4 font-semibold">Toplam</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4">1.000 TL</td>
                        <td className="px-5 py-4">%5</td>
                        <td className="px-5 py-4">50 TL</td>
                        <td className="px-5 py-4 font-semibold text-slate-900">
                          1.050 TL
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4">2.500 TL</td>
                        <td className="px-5 py-4">%10</td>
                        <td className="px-5 py-4">250 TL</td>
                        <td className="px-5 py-4 font-semibold text-slate-900">
                          2.750 TL
                        </td>
                      </tr>
                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          4.000 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">%15</td>
                        <td className="px-5 py-4 text-blue-900">600 TL</td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          4.600 TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="kredi-faizinde-bsmv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Faizinde BSMV Nasıl Hesaplanır?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Bir kredi taksiti genellikle anapara, faiz ve varsa vergi veya
                fon bileşenlerinden oluşur. BSMV hesabında taksidin tamamı
                yerine ilgili dönemdeki vergiye tabi faiz ve ücretler dikkate
                alınır.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Banknote size={25} className="text-blue-600" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-slate-900">Anapara</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Borcun geri ödenen ana kısmıdır.
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Percent size={25} className="text-blue-600" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold text-slate-900">Faiz</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Bankanın kredi karşılığında aldığı gelirdir.
                  </p>
                </div>
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <Calculator size={25} aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-bold">BSMV</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Vergiye tabi faiz veya ücret üzerinden hesaplanır.
                  </p>
                </div>
              </div>
              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Örnek kredi taksiti hesabı
                </h3>
                <div className="mt-5 space-y-4">
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Anapara payı</span>
                    <span className="font-semibold text-slate-900">3.500 TL</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Faiz payı</span>
                    <span className="font-semibold text-slate-900">1.000 TL</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Örnek BSMV oranı</span>
                    <span className="font-semibold text-slate-900">%15</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">BSMV</span>
                    <span className="font-semibold text-slate-900">150 TL</span>
                  </div>
                  <div className="flex justify-between gap-4 rounded-xl bg-blue-600 p-4 text-white">
                    <span className="font-semibold">
                      Anapara + faiz + BSMV
                    </span>
                    <span className="text-xl font-bold">4.650 TL</span>
                  </div>
                </div>
              </div>
            </section>

            <section id="kredi-karti-bsmv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Kartında BSMV
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Kredi kartı borcunun yalnızca asgari tutarının ödenmesi, borcun
                gecikmesi veya nakit avans kullanılması halinde faiz ve bazı ek
                maliyetler oluşabilir. Bankanın lehine kalan bu gelirler BSMV
                matrahına girebilir.
              </p>
              <div className="mt-7 rounded-3xl bg-slate-100 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <CreditCard size={24} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Örnek kart faizi
                    </h3>
                    <div className="mt-4 space-y-3 text-slate-600">
                      <p>Dönem faizi: 800 TL</p>
                      <p>Örnek BSMV oranı: %15</p>
                      <p>BSMV: 800 × 15 ÷ 100 = 120 TL</p>
                      <p className="font-semibold text-blue-700">
                        Faiz ve BSMV toplamı: 920 TL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="konut-kredisi-bsmv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisinde BSMV Var mı?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Konut finansmanı kapsamına giren işlemlerde BSMV istisnası
                uygulanabilen durumlar vardır. Ancak kredinin adında
                &quot;konut&quot; kelimesinin bulunması tek başına istisna için
                yeterli kabul edilmemelidir.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-green-50 p-7">
                  <h3 className="text-xl font-bold text-green-900">
                    İstisna gündeme gelebilir
                  </h3>
                  <p className="mt-4 leading-7 text-green-800">
                    Kredinin yürürlükteki mevzuatta tanımlanan konut finansmanı
                    şartlarını karşılaması halinde.
                  </p>
                </div>
                <div className="rounded-3xl bg-amber-50 p-7">
                  <h3 className="text-xl font-bold text-amber-900">
                    Ayrıca kontrol edilmelidir
                  </h3>
                  <p className="mt-4 leading-7 text-amber-800">
                    Refinansman, işyeri kredisi, arsa kredisi veya farklı amaçlı
                    finansmanlarda özel hükümler bulunabilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="kambiyo-bsmv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Döviz ve Kambiyo İşlemlerinde BSMV
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Kambiyo işlemlerinde genel faiz veya komisyon matrahından farklı
                özel bir uygulama bulunabilir. Vergi, belirlenen işlemlerde
                kambiyo satış tutarı üzerinden hesaplanabilir.
              </p>
              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Kambiyo BSMV&apos;si = Kambiyo satış tutarı × yürürlükteki oran
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Bazı kambiyo satışları için sıfır oran veya istisna
                  uygulanabilir. İşlem tarihi, tarafların niteliği ve işlemin
                  amacı önem taşır.
                </p>
              </div>
            </section>

            <section id="mevduat-bsmv" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Mevduat Faizinde BSMV Var mı?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Mevduat sahibine banka tarafından ödenen faiz ile bankanın kendi
                lehine aldığı faiz veya komisyon aynı değildir. Mevduat faizinde
                yatırımcı açısından çoğunlukla gelir vergisi stopajı gündeme
                gelir.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <ReceiptText size={25} className="text-blue-600" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">Stopaj</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Mevduat sahibinin faiz geliri üzerinden yapılan vergi
                    kesintisidir.
                  </p>
                </div>
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <Landmark size={25} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">BSMV</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Banka veya ilgili kuruluşun kendi lehine aldığı vergiye tabi
                    paralarla ilgilidir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-kdv-farki" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV ile KDV Arasındaki Fark
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV ve KDV, konu, matrah ve mükellef bakımından farklı
                vergilerdir.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[860px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Konu</th>
                        <th className="px-5 py-4 font-semibold">BSMV</th>
                        <th className="px-5 py-4 font-semibold">KDV</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          Verginin konusu
                        </td>
                        <td className="px-5 py-4 text-blue-900">
                          Finansal işlemlerden lehe alınan paralar
                        </td>
                        <td className="px-5 py-4 text-blue-900">
                          Mal teslimleri ve hizmetler
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Temel mükellef
                        </td>
                        <td className="px-5 py-4">
                          Banka, banker ve sigorta şirketleri
                        </td>
                        <td className="px-5 py-4">
                          Teslim veya hizmeti yapanlar
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Matrah
                        </td>
                        <td className="px-5 py-4">
                          Faiz, komisyon, ücret ve benzeri lehe kalan tutarlar
                        </td>
                        <td className="px-5 py-4">
                          Teslim veya hizmet karşılığı bedel
                        </td>
                      </tr>
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Uygulama alanı
                        </td>
                        <td className="px-5 py-4">Finans ve sigorta işlemleri</td>
                        <td className="px-5 py-4">Genel mal ve hizmet ekonomisi</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <div className="flex items-start gap-3">
                  <Scale
                    size={23}
                    className="mt-1 shrink-0 text-indigo-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-indigo-900">
                    Bir işlem BSMV kapsamındaysa aynı işlem için çoğunlukla KDV
                    istisnası gündeme gelir. Ancak her finansal tahsilat otomatik
                    olarak BSMV kapsamında değildir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bsmv-kkdf-farki" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV ile KKDF Arasındaki Fark
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                BSMV ve Kaynak Kullanımını Destekleme Fonu kredi maliyetlerinde
                birlikte görülebilse de hukuki nitelikleri ve hesaplama
                yöntemleri farklıdır.
              </p>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">BSMV</h3>
                  <ul className="mt-5 space-y-3 text-blue-100">
                    <li>Bir vergidir.</li>
                    <li>Lehe alınan tutarlar üzerinden hesaplanır.</li>
                    <li>İşlem türüne göre oran ve istisna değişebilir.</li>
                  </ul>
                </div>
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">KKDF</h3>
                  <ul className="mt-5 space-y-3 text-slate-600">
                    <li>Bir fon kesintisidir.</li>
                    <li>Belirli kredi ve finansman işlemlerinde uygulanır.</li>
                    <li>Kredi türüne göre farklı kurallar bulunabilir.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                BSMV Hesaplanırken Sık Yapılan Hatalar
              </h2>
              <div className="mt-6 space-y-4">
                {commonMistakes.map((item) => (
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
              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <Calculator
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-blue-900">
                    Hesaplamadan önce üç bilgiyi kesinleştirin: vergi matrahı,
                    uygulanacak oran ve işlemin istisna kapsamında olup
                    olmadığı.
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
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <FileText size={27} aria-hidden="true" />
              </div>
              <h2 className="mt-6 text-3xl font-bold">
                BSMV Tutarını Kolayca Hesaplayın
              </h2>
              <p className="mt-4 leading-8 text-blue-100">
                Vergi matrahını ve uygulanacak oranı girerek BSMV tutarını ve
                vergi dahil toplam maliyeti saniyeler içinde bulun.
              </p>
              <Link
                href="/hesaplamalar/bsmv-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                BSMV Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>
              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacı taşır. Güncel oran,
                matrah ve istisna değerlendirmesi için resmi mevzuat ve
                gerektiğinde mali müşavir görüşü esas alınmalıdır.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}