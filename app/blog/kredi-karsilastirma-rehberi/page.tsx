import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  Calculator,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  FileCheck2,
  FileText,
  Gauge,
  HandCoins,
  Landmark,
  PiggyBank,
  ReceiptText,
  RefreshCcw,
  Scale,
  ShieldCheck,
  TrendingDown,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const canonicalPath = "/blog/kredi-karsilastirma-rehberi";

export const metadata: Metadata = {
  title: "Kredi Karşılaştırma Rehberi",
  description:
    "Kredi tekliflerini faiz, aylık taksit, toplam geri ödeme, efektif maliyet, sigorta ve masraflarla doğru biçimde karşılaştırmayı öğrenin.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Kredi Karşılaştırma Rehberi | HesapRehberi",
    description:
      "İhtiyaç, taşıt ve konut kredisi tekliflerini aylık taksit yerine gerçek toplam maliyet üzerinden karşılaştırma rehberi.",
    url: canonicalPath,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kredi Karşılaştırma Rehberi | HesapRehberi",
    description:
      "Faiz oranı, taksit, toplam geri ödeme, masraf ve efektif maliyet üzerinden kredi tekliflerini karşılaştırın.",
  },
};

const tableOfContents = [
  ["kredi-karsilastirma-nedir", "Kredi karşılaştırması nedir?"],
  ["neden-karsilastirilmali", "Krediler neden karşılaştırılmalı?"],
  ["karsilastirma-kriterleri", "Temel karşılaştırma kriterleri"],
  ["faiz-orani", "Faiz oranı nasıl karşılaştırılır?"],
  ["aylik-taksit", "Aylık taksit karşılaştırması"],
  ["toplam-geri-odeme", "Toplam geri ödeme karşılaştırması"],
  ["efektif-maliyet", "Efektif maliyet neden önemlidir?"],
  ["vade-karsilastirma", "Vade seçeneklerinin etkisi"],
  ["masraf-ve-sigorta", "Masraf ve sigorta maliyetlerinin etkisi"],
  ["ihtiyac-kredisi", "İhtiyaç kredisi karşılaştırması"],
  ["tasit-kredisi", "Taşıt kredisi karşılaştırması"],
  ["konut-kredisi", "Konut kredisi karşılaştırması"],
  ["erken-kapama", "Erken kapama ve ara ödeme"],
  ["banka-teklifleri", "Banka teklifleri nasıl okunur?"],
  ["butce-planlama", "Bütçeye uygun kredi seçimi"],
  ["sik-yapilan-hatalar", "Sık yapılan hatalar"],
  ["sik-sorulan-sorular", "Sık sorulan sorular"],
];

const loanComponents = [
  {
    title: "Faiz oranı",
    description:
      "Teklifin aylık nominal faiz oranını gösterir. Tek başına gerçek maliyeti açıklamaz.",
    icon: BadgePercent,
  },
  {
    title: "Toplam geri ödeme",
    description:
      "Tüm taksitlerin, ücretlerin, sigortaların ve diğer zorunlu maliyetlerin toplamıdır.",
    icon: Banknote,
  },
  {
    title: "Efektif maliyet",
    description:
      "Faiz dışındaki giderleri de hesaba katarak teklifleri ortak bir ölçekte karşılaştırmayı sağlar.",
    icon: Gauge,
  },
];

const rateComparisonRows = [
  {
    rate: "Banka A — %3,49",
    installment: "12.580 TL",
    total: "303.420 TL",
  },
  {
    rate: "Banka B — %3,69",
    installment: "12.930 TL",
    total: "312.320 TL",
  },
  {
    rate: "Banka C — %3,89",
    installment: "13.290 TL",
    total: "321.460 TL",
  },
];

const termComparisonRows = [
  {
    term: "12 ay",
    installment: "22.650 TL",
    total: "273.300 TL",
    interest: "73.300 TL",
  },
  {
    term: "24 ay",
    installment: "13.480 TL",
    total: "325.020 TL",
    interest: "125.020 TL",
  },
  {
    term: "36 ay",
    installment: "10.850 TL",
    total: "392.100 TL",
    interest: "192.100 TL",
  },
];

const costItems = [
  {
    title: "Kredi tahsis ücreti",
    description:
      "Teklifteki dosya veya tahsis ücretinin toplam geri ödemeye dahil edilip edilmediği kontrol edilmelidir.",
  },
  {
    title: "Hayat sigortası",
    description:
      "Sigorta primi yaşa, kredi tutarına ve vadeye göre değişebilir; düşük faizli teklifin maliyetini yükseltebilir.",
  },
  {
    title: "Ekspertiz ve ipotek giderleri",
    description:
      "Konut kredilerinde ekspertiz, ipotek ve benzeri giderler teklif karşılaştırmasına eklenmelidir.",
  },
  {
    title: "Vergi ve fonlar",
    description:
      "Kredi türüne göre faiz üzerinden uygulanan vergi ve fonlar gerçek maliyeti etkileyebilir.",
  },
  {
    title: "Ek ürün şartları",
    description:
      "Kredi kartı, otomatik ödeme, maaş taşıma veya hesap paketi gibi şartların yıllık maliyeti incelenmelidir.",
  },
  {
    title: "Erken kapama gideri",
    description:
      "Özellikle uzun vadeli kredilerde erken ödeme tazminatı ve kapama koşulları karşılaştırılmalıdır.",
  },
];

const commonMistakes = [
  "Yalnızca ilan edilen aylık faiz oranına bakmak.",
  "Toplam geri ödeme tutarını karşılaştırmamak.",
  "Sigorta ve tahsis ücretlerini tekliften çıkarmak.",
  "Farklı vadelerdeki teklifleri doğrudan karşılaştırmak.",
  "Aylık taksiti düşük olan krediyi otomatik olarak daha ucuz sanmak.",
  "Efektif yıllık maliyet oranını incelememek.",
  "Kampanya şartlarının tüm vade boyunca geçerli olduğunu varsaymak.",
  "Erken kapama ve ara ödeme hükümlerini okumamak.",
  "Aylık bütçede acil durum payı bırakmamak.",
  "Teklifleri aynı kredi tutarı ve aynı vade üzerinden istememek.",
];

const faqItems = [
  {
    question: "Kredi karşılaştırması nasıl yapılır?",
    answer:
      "Aynı kredi tutarı ve aynı vade için faiz oranı, aylık taksit, toplam geri ödeme, tahsis ücreti, sigorta ve diğer zorunlu giderler birlikte karşılaştırılmalıdır.",
  },
  {
    question: "En düşük faizli kredi her zaman en ucuz mudur?",
    answer:
      "Hayır. Sigorta, tahsis ücreti, ek ürün şartları ve vergiler nedeniyle daha düşük faizli teklifin toplam maliyeti daha yüksek olabilir.",
  },
  {
    question: "Aylık taksit mi toplam geri ödeme mi daha önemlidir?",
    answer:
      "Aylık taksit bütçe uygunluğunu, toplam geri ödeme ise kredinin gerçek maliyetini gösterir. Sağlıklı seçim için ikisi birlikte değerlendirilmelidir.",
  },
  {
    question: "Efektif maliyet oranı nedir?",
    answer:
      "Faiz dışındaki zorunlu giderleri de hesaba katan ve kredi tekliflerini ortak bir yıllık maliyet ölçüsünde karşılaştırmaya yarayan orandır.",
  },
  {
    question: "Kredi teklifleri neden aynı vadede karşılaştırılmalıdır?",
    answer:
      "Vade değiştiğinde aylık taksit ve toplam faiz yükü değişir. Farklı vadeler doğrudan karşılaştırılırsa yanıltıcı sonuç oluşabilir.",
  },
  {
    question: "Uzun vade mi kısa vade mi daha avantajlıdır?",
    answer:
      "Kısa vade genellikle toplam maliyeti düşürür; uzun vade aylık taksiti azaltır. Seçim ödeme gücü ve toplam maliyet dengesiyle yapılmalıdır.",
  },
  {
    question: "Kredi tahsis ücreti karşılaştırmaya dahil edilmeli mi?",
    answer:
      "Evet. Kredi kullanımı için zorunlu olan tüm ücretler toplam geri ödeme hesabına eklenmelidir.",
  },
  {
    question: "Hayat sigortası kredi maliyetini etkiler mi?",
    answer:
      "Evet. Prim tutarı tekliften teklife değişebilir ve özellikle uzun vadede toplam maliyet farkı yaratabilir.",
  },
  {
    question: "İhtiyaç kredisi karşılaştırırken nelere bakılmalı?",
    answer:
      "Faiz, taksit, toplam ödeme, tahsis ücreti, hayat sigortası, ek ürün şartları ve erken ödeme koşulları incelenmelidir.",
  },
  {
    question: "Taşıt kredisi karşılaştırırken nelere bakılmalı?",
    answer:
      "Kredi oranına ek olarak peşinat, araç rehni, kasko şartı, sigorta maliyeti ve vade sınırları karşılaştırılmalıdır.",
  },
  {
    question: "Konut kredisi karşılaştırırken nelere bakılmalı?",
    answer:
      "Faiz ve taksit yanında ekspertiz, ipotek, konut sigortası, DASK, hayat sigortası ve erken ödeme tazminatı değerlendirilmelidir.",
  },
  {
    question: "Kampanyalı kredi gerçekten daha ucuz olabilir mi?",
    answer:
      "Olabilir; ancak kampanyanın maaş taşıma, kredi kartı, otomatik ödeme veya sigorta gibi ek şartları toplam maliyete eklenmelidir.",
  },
  {
    question: "Erken kapama planı karşılaştırmayı değiştirir mi?",
    answer:
      "Evet. Krediyi vadeden önce kapatma ihtimali varsa erken ödeme tazminatı ve kalan faiz avantajı ayrıca hesaplanmalıdır.",
  },
  {
    question: "Ara ödeme yapmak toplam maliyeti düşürür mü?",
    answer:
      "Kalan anaparayı azaltabildiği için gelecekteki faiz yükünü düşürebilir. Bankanın yeni ödeme planı ve masrafları kontrol edilmelidir.",
  },
  {
    question: "Kredi notu teklifleri etkiler mi?",
    answer:
      "Evet. Bankalar kredi notu, gelir, mevcut borç ve müşteri ilişkisine göre kişiye özel oran sunabilir.",
  },
  {
    question: "Ön onaylı teklif kesin kredi onayı mıdır?",
    answer:
      "Hayır. Ön onay nihai değerlendirme değildir; belge, gelir ve risk kontrollerinden sonra teklif değişebilir veya reddedilebilir.",
  },
  {
    question: "Kredi karşılaştırma aracı kesin banka teklifi verir mi?",
    answer:
      "Hayır. Araç örnek hesaplama sunar. Kesin oran, masraf ve ödeme planı bankanın kişisel teklifinde yer alır.",
  },
  {
    question: "Kaç bankadan teklif alınmalı?",
    answer:
      "Tek bir bankayla yetinmek yerine mümkün olduğunca aynı gün, aynı tutar ve aynı vade için birkaç bankadan yazılı toplam maliyet teklifi almak daha sağlıklıdır.",
  },
];

export default function IhtiyacKredisiHesaplamaRehberiPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: "Kredi Karşılaştırma Rehberi" },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <HandCoins size={31} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Kredi ve Finansman Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Kredi Karşılaştırma Rehberi
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aylık taksit, toplam geri ödeme, faiz maliyeti, vade ve ek
              masrafların ihtiyaç kredisi bütçenizi nasıl etkilediğini
              örneklerle öğrenin.
            </p>

            <ShareButtons
              title="Kredi Karşılaştırma Rehberi | HesapRehberi"
              description="İhtiyaç kredisi taksiti, toplam geri ödeme, faiz ve ek maliyetlerin hesaplanması."
            />
          </header>

          <nav
            className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6"
            aria-label="İçindekiler"
          >
            <h2 className="text-xl font-bold text-slate-900">İçindekiler</h2>

            <ol className="mt-5 grid gap-3 md:grid-cols-2">
              {tableOfContents.map(([id, label], index) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="flex items-center gap-2 text-slate-600 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  >
                    <ChevronRight
                      size={17}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                    <span>
                      {index + 1}. {label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-12 space-y-14">
            <section id="kredi-karsilastirma-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                İhtiyaç kredisi; eğitim, ev eşyası, sağlık, düğün, tadilat veya
                benzeri kişisel harcamaların finansmanı için kullanılan
                tüketici kredisidir. Kredi tutarı belirli bir ödeme planıyla
                aylık taksitler halinde geri ödenir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Bu kredi türünde en önemli üç değişken kredi tutarı, faiz oranı
                ve vadedir. Ancak gerçek maliyet yalnızca faizden oluşmaz;
                tahsis ücreti, vergiler, sigorta ve ek ürünler de toplam geri
                ödemeyi etkileyebilir.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-blue-900">
                    Hesaplama araçları yaklaşık bütçe sunar. Bankanın kesin
                    teklifi; kredi notu, gelir, mevcut borçlar, banka politikası
                    ve güncel maliyet kalemlerine göre değişebilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="neden-karsilastirilmali" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi Nasıl Çalışır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Başvuru sırasında banka gelir ve risk değerlendirmesi yapar.
                Onaylanan kredi müşterinin hesabına aktarılır ve sözleşmede
                belirlenen tarihlerde aylık taksitlerle geri ödenir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {loanComponents.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-3xl bg-slate-100 p-7"
                    >
                      <Icon
                        size={26}
                        className="text-blue-600"
                        aria-hidden="true"
                      />
                      <h3 className="mt-5 text-xl font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 rounded-3xl bg-blue-600 p-7 text-white">
                <h3 className="text-xl font-bold">Eşit taksitli ödeme planı</h3>
                <p className="mt-4 leading-8 text-blue-100">
                  Taksit tutarı çoğu standart planda sabit kalır. Ancak ilk
                  aylarda taksidin daha büyük bölümü faize giderken kredi
                  ilerledikçe anapara payı artar.
                </p>
              </div>
            </section>

            <section id="karsilastirma-kriterleri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Temel hesaplama için kredi tutarı, aylık faiz oranı ve vade
                gerekir. Bu bilgilerle aylık taksit hesaplanır. Taksit vadeyle
                çarpılarak yaklaşık toplam geri ödeme bulunur.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {[
                  ["Kredi tutarı", "200.000 TL"],
                  ["Aylık faiz", "%3,99"],
                  ["Vade", "24 ay"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <p className="text-sm font-semibold text-slate-500">
                      {label}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Örnek sonuç: Aylık yaklaşık 13.480 TL taksit ve 24 ay sonunda
                  yaklaşık 323.520 TL toplam geri ödeme.
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Bu örnekte tahsis, sigorta, vergi ve diğer yan maliyetler
                hesaplamaya dahil edilmemiştir. Değerler hesaplama yöntemini
                göstermek amacıyla yaklaşık verilmiştir.
              </p>
            </section>

            <section id="faiz-orani" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi Aylık Taksit Formülü
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli kredi hesaplamasında kullanılan temel formül
                aşağıdaki gibidir:
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="min-w-[650px] text-center text-lg font-semibold text-indigo-900">
                  Taksit = Kredi Tutarı × [r × (1 + r)ⁿ] ÷ [(1 + r)ⁿ − 1]
                </p>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="font-bold text-slate-900">r</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Aylık faiz oranının ondalık karşılığıdır.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="font-bold text-slate-900">n</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Toplam taksit veya ay sayısıdır.
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="font-bold text-slate-900">Kredi tutarı</p>
                  <p className="mt-2 leading-7 text-slate-600">
                    Bankadan kullanılan anapara miktarıdır.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Yüzde 3,99 aylık faiz oranı formülde 0,0399 olarak
                  kullanılmalıdır. Yüzde değerini doğrudan 3,99 biçiminde
                  yazmak yanlış sonuç üretir.
                </p>
              </div>
            </section>

            <section id="aylik-taksit" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Faiz Oranı Aylık Taksiti Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı tutar ve vadede faiz oranı yükseldikçe aylık taksit ve
                toplam geri ödeme artar. Küçük görünen farklar yüksek kredi
                tutarlarında belirgin hale gelebilir.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Aylık faiz oranı
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Yaklaşık taksit
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          24 ay toplam ödeme
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      {rateComparisonRows.map((row, index) => (
                        <tr
                          key={row.rate}
                          className={index == 1 ? "bg-blue-50" : undefined}
                        >
                          <td className="px-5 py-4 font-semibold text-slate-900">
                            {row.rate}
                          </td>
                          <td className="px-5 py-4">{row.installment}</td>
                          <td className="px-5 py-4">{row.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Tablo 200.000 TL kredi ve 24 ay vade için yaklaşık örnek
                değerlerdir. Banka hesaplama yöntemi ve yuvarlamalar küçük
                farklılıklar oluşturabilir.
              </p>
            </section>

            <section id="vade-karsilastirma" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                12, 24 ve 36 Ay Vade Karşılaştırması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kısa vadede taksit daha yüksek, toplam faiz maliyeti daha düşük
                olabilir. Uzun vadede taksit düşerken toplam geri ödeme artar.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Vade</th>
                        <th className="px-5 py-4 font-semibold">
                          Yaklaşık taksit
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Toplam geri ödeme
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Yaklaşık faiz yükü
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      {termComparisonRows.map((row, index) => (
                        <tr
                          key={row.term}
                          className={index === 0 ? "bg-green-50" : undefined}
                        >
                          <td className="px-5 py-4 font-semibold text-slate-900">
                            {row.term}
                          </td>
                          <td className="px-5 py-4">{row.installment}</td>
                          <td className="px-5 py-4">{row.total}</td>
                          <td className="px-5 py-4">{row.interest}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-red-200 bg-red-50 p-6">
                <div className="flex items-start gap-3">
                  <TrendingDown
                    size={23}
                    className="mt-1 shrink-0 text-red-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-red-900">
                    Daha düşük aylık taksit her zaman daha ucuz kredi anlamına
                    gelmez. Uzun vade nakit akışını rahatlatırken toplam maliyeti
                    önemli ölçüde yükseltebilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="toplam-geri-odeme" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Toplam Geri Ödeme Nasıl Hesaplanır?
              </h2>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Taksitler Toplamı = Aylık Taksit × Vade
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Gerçek Toplam Maliyet = Taksitler Toplamı + Ücretler +
                  Sigortalar + Vergiler + Diğer Giderler
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Yaklaşık faiz yükü, taksitler toplamından kullanılan anaparanın
                çıkarılmasıyla bulunabilir. Fakat bu sonuç tahsis, sigorta,
                vergi ve diğer yan giderleri içermez.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Calculator
                    size={25}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Faiz yükü
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Taksitler toplamı eksi kullanılan kredi anaparası.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <ReceiptText size={25} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">
                    Gerçek toplam maliyet
                  </h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Taksitler, vergiler, tahsis, sigorta ve diğer giderlerin
                    toplamı.
                  </p>
                </div>
              </div>
            </section>

            <section id="masraf-ve-sigorta" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisinde Masraf ve Sigorta Maliyetleri
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Faiz oranı tek başına kredi maliyetini göstermez. Başlangıçta
                veya kredi süresince tahsil edilen diğer tutarlar da
                karşılaştırmaya dahil edilmelidir.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {costItems.map((item) => (
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

              <div className="mt-7 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="leading-8 text-amber-900">
                  Aynı faiz oranına sahip iki kredi farklı sigorta ve ürün
                  maliyetleri nedeniyle farklı toplam geri ödeme oluşturabilir.
                </p>
              </div>
            </section>

            <section id="efektif-maliyet" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Notu ve Gelir Kredi Teklifini Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankalar yalnızca gelir miktarına bakmaz. Ödeme geçmişi, mevcut
                borçlar, kredi kartı limitleri, çalışma süresi ve gelir
                istikrarı birlikte değerlendirilir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Gauge
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Kredi geçmişi
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Düzenli ödeme geçmişi risk değerlendirmesini olumlu
                    etkileyebilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <WalletCards
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Mevcut borçlar
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Açık krediler ve kart borçları ödeme kapasitesini azaltır.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <Landmark size={26} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">Gelir istikrarı</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Düzenli ve belgelenebilir gelir kredi değerlendirmesinde
                    önem taşır.
                  </p>
                </div>
              </div>
            </section>

            <section id="ihtiyac-kredisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Erken Ödeme ve Erken Kapama
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kalan borcun tamamının vadesinden önce ödenmesine erken kapama
                denir. Kısmi ödeme yapıldığında ise kalan anapara ve ödeme planı
                yeniden düzenlenebilir.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Erken kapama öncesi kontrol listesi
                </h3>

                <ul className="mt-5 space-y-4">
                  {[
                    "Bankadan güncel kapama tutarını yazılı olarak alın.",
                    "Kalan anapara ile ileri dönem faizlerini ayırın.",
                    "Varsa sözleşmeye bağlı maliyetleri öğrenin.",
                    "Birikimin tamamını kullanmanın acil durum bütçesine etkisini değerlendirin.",
                    "Diğer yüksek maliyetli borçlarla karşılaştırma yapın.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={22}
                        className="mt-1 shrink-0 text-blue-600"
                        aria-hidden="true"
                      />
                      <span className="leading-7 text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="tasit-kredisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Ara Ödeme İhtiyaç Kredisini Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ara ödeme kalan anaparayı düşürür. Böylece daha sonraki
                dönemlerde faiz hesaplanacak borç azalabilir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <Gauge
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Taksit düşürme
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Vade korunarak aylık ödeme tutarı azaltılabilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <CalendarClock size={26} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">Vade kısaltma</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Taksit benzer seviyede tutularak kredi daha erken
                    bitirilebilir.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="leading-8 text-green-900">
                  Vade kısaltma çoğu durumda daha fazla faiz tasarrufu
                  sağlayabilir. Kesin karşılaştırma için bankadan iki ayrı yeni
                  ödeme planı istenmelidir.
                </p>
              </div>
            </section>

            <section id="konut-kredisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi Yapılandırma
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Mevcut kredi daha düşük maliyetli yeni bir krediyle
                kapatılabilir veya aynı bankada yeniden düzenlenebilir. Ancak
                yeni faiz oranı tek başına karar vermek için yeterli değildir.
              </p>

              <div className="mt-7 rounded-3xl bg-slate-100 p-7">
                <div className="flex items-center gap-3">
                  <RefreshCcw
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-bold text-slate-900">
                    Net tasarruf hesabı
                  </h3>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <p className="font-semibold text-indigo-900">
                    Net Tasarruf = Eski Planın Kalan Maliyeti − Yeni Planın
                    Toplam Maliyeti − Geçiş Giderleri
                  </p>
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  Yeni tahsis, sigorta, kapama ve diğer işlem giderleri mutlaka
                  hesaba dahil edilmelidir.
                </p>
              </div>
            </section>

            <section id="banka-teklifleri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Banka Karşılaştırırken Nelere Bakılmalı?
              </h2>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {[
                  ["Aylık faiz oranı", "Taksit ve toplam faiz yükünü doğrudan etkiler."],
                  ["Yıllık maliyet oranı", "Faiz dışındaki bazı maliyetleri karşılaştırmayı kolaylaştırır."],
                  ["Toplam geri ödeme", "Kredinin vade sonundaki gerçek büyüklüğünü gösterir."],
                  ["Tahsis ücreti", "Başlangıç maliyetlerinden biridir."],
                  ["Sigorta primi", "Yaş, tutar, vade ve teminata göre değişebilir."],
                  ["Ara ödeme koşulları", "İleride anaparayı azaltma esnekliğini etkiler."],
                  ["Erken kapama süreci", "Borcu vadesinden önce bitirme kolaylığını belirler."],
                  ["Ek ürün şartları", "Hesap, kart veya otomatik ödeme maliyetlerini etkileyebilir."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 p-6"
                  >
                    <h3 className="font-bold text-slate-900">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="butce-planlama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                İhtiyaç Kredisi İçin Sağlıklı Bütçe Planlaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi onayı almak, taksidin bütçeye uygun olduğu anlamına
                gelmez. Ödeme planı hazırlanırken zorunlu giderler ve olası
                gelir kayıpları hesaba katılmalıdır.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <PiggyBank
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Acil durum payı
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Beklenmeyen giderler için nakit yedek bırakın.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <Scale
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Borç dengesi
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Tüm kredi ve kart ödemelerini birlikte değerlendirin.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <FileText size={26} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">
                    Gerçekçi gelir hesabı
                  </h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Prim veya fazla mesai gibi değişken gelirleri temkinli
                    değerlendirin.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Kredi Hesaplarken Sık Yapılan Hatalar
              </h2>

              <div className="mt-7 space-y-4">
                {commonMistakes.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5"
                  >
                    <CircleAlert
                      size={22}
                      className="mt-1 shrink-0 text-amber-600"
                      aria-hidden="true"
                    />
                    <p className="leading-7 text-slate-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-blue-900">
                    Kredi taksitinden sonra kira, fatura, gıda, ulaşım ve
                    beklenmeyen giderler için yeterli pay kalmalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-sorulan-sorular" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Sık Sorulan Sorular
              </h2>

              <div className="mt-7 space-y-4">
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

            <section className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Calculator size={27} aria-hidden="true" />
              </div>

              <h2 className="mt-6 text-3xl font-bold">
                İhtiyaç Kredisi Taksitinizi Hesaplayın
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                Kredi tutarı, aylık faiz oranı ve vadeyi girerek aylık taksiti,
                toplam geri ödemeyi ve yaklaşık faiz maliyetini saniyeler içinde
                görün.
              </p>

              <Link
                href="/hesaplamalar/kredi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Kredi Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları bilgilendirme amaçlıdır ve banka teklifi
                niteliği taşımaz. Kesin faiz, taksit, masraf ve kredi uygunluğu
                ilgili banka tarafından belirlenir.
              </p>
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <div className="flex items-start gap-4">
                <FileCheck2
                  size={27}
                  className="mt-1 shrink-0 text-blue-600"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Son kontrol listesi
                  </h2>
                  <p className="mt-3 leading-8 text-slate-600">
                    Başvuru öncesinde ihtiyaç tutarınızı, aylık ödeme
                    kapasitenizi, acil durum bütçenizi ve en az üç farklı
                    bankanın toplam maliyet teklifini karşılaştırın.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </div>
    </main>
  );
}