import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  Calculator,
  Wheat,
  Handshake,
  Store,
  Factory,
  ChartNoAxesCombined,
  Building2,
  CalendarDays,
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

const canonicalPath = "/blog/tarim-kredisi-rehberi";

export const metadata: Metadata = {
  title: "Tarım Kredisi Rehberi",
  description:
    "Tarım kredisi nedir, nasıl alınır? Üretim, hayvancılık, sera, traktör, ekipman, faiz, vade, teminat ve toplam maliyeti örneklerle öğrenin.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Tarım Kredisi Rehberi | HesapRehberi",
    description:
      "Çiftçiler ve tarımsal işletmeler için üretim, hayvancılık, ekipman ve yatırım kredileri; faiz, vade, teminat ve toplam maliyet rehberi.",
    url: canonicalPath,
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarım Kredisi Rehberi | HesapRehberi",
    description:
      "Tarım kredisi seçeneklerini faiz, vade, hasat dönemi, teminat, destekler ve toplam maliyet üzerinden değerlendirin.",
  },
};

const tableOfContents = [
  ["tarim-kredisi-nedir", "Tarım kredisi nedir?"],
  ["kimler-kullanabilir", "Kimler tarım kredisi kullanabilir?"],
  ["kredi-turleri", "Tarım kredisi türleri"],
  ["bitkisel-uretim", "Bitkisel üretim kredileri"],
  ["hayvancilik", "Hayvancılık kredileri"],
  ["traktor-ekipman", "Traktör ve ekipman kredileri"],
  ["faiz-hesabi", "Tarım kredisi faizi nasıl hesaplanır?"],
  ["odeme-plani", "Hasada uygun ödeme planı"],
  ["destekli-krediler", "Destekli tarım kredileri"],
  ["teminat", "Teminat ve kefalet şartları"],
  ["masraflar", "Masraf, sigorta ve komisyonlar"],
  ["ornek-hesaplama", "Adım adım örnek hesaplama"],
  ["banka-degerlendirmesi", "Bankalar üreticiyi nasıl değerlendirir?"],
  ["basvuru-belgeleri", "Başvuru belgeleri"],
  ["ne-zaman-mantikli", "Ne zaman mantıklıdır?"],
  ["sik-yapilan-hatalar", "Sık yapılan hatalar"],
  ["sik-sorulan-sorular", "Sık sorulan sorular"],
];

const loanComponents = [
  {
    title: "Üretim amacı",
    description:
      "Tohum, gübre, yem, hayvan, sera, traktör veya ekipman ihtiyacına göre doğru finansman türü seçilmelidir.",
    icon: Wheat,
  },
  {
    title: "Hasat takvimi",
    description:
      "Taksit ve ödeme tarihleri ürünün hasat, satış ve tahsilat dönemine uyumlu olmalıdır.",
    icon: CalendarClock,
  },
  {
    title: "Risk ve teminat",
    description:
      "TARSİM, ipotek, rehin, kefalet ve gelir dalgalanmaları toplam finansman riskini etkiler.",
    icon: ShieldCheck,
  },
];

const rateComparisonRows = [
  {
    rate: "Bitkisel üretim",
    installment: "Hasat dönemli",
    total: "Tohum, gübre, ilaç",
  },
  {
    rate: "Hayvancılık",
    installment: "Dönemsel / taksitli",
    total: "Yem, hayvan, tesis",
  },
  {
    rate: "Traktör ve ekipman",
    installment: "Orta / uzun vade",
    total: "Makine yatırımı",
  },
];

const termComparisonRows = [
  {
    term: "12 ay",
    installment: "71.800 TL",
    total: "861.600 TL",
    interest: "161.600 TL",
  },
  {
    term: "24 ay",
    installment: "43.500 TL",
    total: "1.044.000 TL",
    interest: "344.000 TL",
  },
  {
    term: "36 ay",
    installment: "34.900 TL",
    total: "1.256.400 TL",
    interest: "556.400 TL",
  },
];

const costItems = [
  {
    title: "Faiz maliyeti",
    description:
      "Kredi tutarı, faiz oranı, vade ve ödeme sıklığı toplam finansman yükünü belirler.",
  },
  {
    title: "TARSİM ve sigorta",
    description:
      "Ürün, hayvan, sera, traktör veya ekipman sigortaları kredi koşullarına göre zorunlu olabilir.",
  },
  {
    title: "Ekspertiz giderleri",
    description:
      "Tarla, ahır, sera, traktör veya ekipman teminatında ekspertiz ücreti oluşabilir.",
  },
  {
    title: "İpotek ve rehin",
    description:
      "Taşınmaz ipoteği, araç rehni ve diğer teminat işlemleri ek maliyet doğurabilir.",
  },
  {
    title: "Tahsis ve komisyon",
    description:
      "Kredi tahsis, kullandırım ve limit yenileme ücretleri toplam maliyete eklenebilir.",
  },
  {
    title: "Erken kapama maliyeti",
    description:
      "Sabit vadeli veya destekli ürünlerde erken kapama şartları sözleşmeden kontrol edilmelidir.",
  },
];

const commonMistakes = [
  "Krediyi üretim takviminden bağımsız planlamak.",
  "Hasat ve satış tarihini taksitlerle eşleştirmemek.",
  "Sadece faiz oranına bakmak.",
  "TARSİM ve sigorta giderlerini hesaba katmamak.",
  "Kısa vadeli girdi ihtiyacını gereğinden uzun vadeye yaymak.",
  "Gelir dalgalanması için güvenlik payı bırakmamak.",
  "Destekli krediyi otomatik olarak faizsiz sanmak.",
  "Teminat çözüm ve ekspertiz süresini dikkate almamak.",
  "Ürün fiyatı riskini geri ödeme planına yansıtmamak.",
  "Erken kapama ve gecikme koşullarını incelememek.",
];

const faqItems = [
  {
    question: "Tarım kredisi nedir?",
    answer:
      "Çiftçilerin ve tarımsal işletmelerin üretim, hayvancılık, sera, traktör, ekipman veya yatırım ihtiyacını karşılamak için kullandığı finansmandır.",
  },
  {
    question: "Kimler tarım kredisi kullanabilir?",
    answer:
      "Çiftçiler, üreticiler, tarımsal işletmeler, kooperatifler ve banka şartlarını sağlayan diğer tarım sektörü katılımcıları kullanabilir.",
  },
  {
    question: "Bitkisel üretim kredisi nedir?",
    answer:
      "Tohum, gübre, ilaç, sulama, işçilik ve hasat giderlerini finanse eden tarım kredisi türüdür.",
  },
  {
    question: "Hayvancılık kredisi nedir?",
    answer:
      "Büyükbaş, küçükbaş, kanatlı, yem, ahır, ekipman ve hayvan alımı gibi ihtiyaçları finanse eder.",
  },
  {
    question: "Traktör kredisi nasıl çalışır?",
    answer:
      "Yeni veya ikinci el traktör alımında araç rehni ve gerektiğinde ek teminatla orta veya uzun vadeli finansman sağlar.",
  },
  {
    question: "Tarım kredisi faizi nasıl hesaplanır?",
    answer:
      "Kredi tutarı, faiz oranı, vade ve ödeme sıklığı esas alınır; sigorta, ekspertiz ve komisyonlar ayrıca eklenebilir.",
  },
  {
    question: "Hasat dönemli ödeme nedir?",
    answer:
      "Taksitlerin aylık yerine ürünün hasat ve satış dönemine uygun tarihlerde ödenmesidir.",
  },
  {
    question: "Destekli tarım kredisi nedir?",
    answer:
      "Belirli üretim konularında faiz indirimi, sübvansiyon veya kamu destekli koşullar içerebilen kredidir.",
  },
  {
    question: "Destekli tarım kredisi faizsiz midir?",
    answer:
      "Her zaman değil. Destek oranı, kredi konusu ve güncel programa göre faiz tamamen veya kısmen karşılanabilir.",
  },
  {
    question: "Tarım kredisi için ÇKS belgesi gerekir mi?",
    answer:
      "Birçok bitkisel üretim kredisinde ÇKS kaydı istenebilir; kredi türüne göre farklı belgeler talep edilebilir.",
  },
  {
    question: "Tarım kredisi için teminat gerekir mi?",
    answer:
      "Tutar ve risk durumuna göre ipotek, traktör rehni, kefalet, ürün alacağı veya başka teminatlar istenebilir.",
  },
  {
    question: "TARSİM yaptırmak zorunlu mu?",
    answer:
      "Kredi ve ürün türüne göre zorunlu tutulabilir. Sigorta şartı bankanın teklifinden kontrol edilmelidir.",
  },
  {
    question: "Tarım kredisi başvurusunda hangi belgeler istenir?",
    answer:
      "Kimlik, çiftçi kayıtları, gelir belgeleri, tapu veya kira sözleşmesi, proje, fatura ve teminat belgeleri istenebilir.",
  },
  {
    question: "Banka tarım kredisi başvurusunu nasıl değerlendirir?",
    answer:
      "Üretim kapasitesi, arazi, ürün deseni, gelir geçmişi, borçluluk, kredi notu ve teminat yapısı birlikte incelenir.",
  },
  {
    question: "Tarım kredisi erken kapatılabilir mi?",
    answer:
      "Sözleşmeye göre kapatılabilir. Güncel kapama tutarı ve olası erken ödeme maliyeti bankadan öğrenilmelidir.",
  },
  {
    question: "Tarım kredisi yapılandırılabilir mi?",
    answer:
      "Banka onayıyla vade, ödeme tarihi veya plan yeniden düzenlenebilir; gecikme ve destek koşulları ayrıca değerlendirilir.",
  },
  {
    question: "Tarım kredisi hesabı kesin banka teklifi verir mi?",
    answer:
      "Hayır. Hesaplama tahminidir; kesin oran, destek, masraf ve şartlar bankanın üreticiye özel teklifinde yer alır.",
  },
  {
    question: "Tarım kredisi hesaplama aracı ne işe yarar?",
    answer:
      "Kredi tutarı, faiz ve vade üzerinden taksit, toplam faiz ve geri ödeme tutarını karşılaştırmayı sağlar.",
  },
];

export default function IhtiyacKredisiHesaplamaRehberiPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: "Tarım Kredisi Rehberi" },
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
              Tarım Kredisi Rehberi
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aylık taksit, toplam geri ödeme, faiz maliyeti, vade ve ek
              masrafların ihtiyaç kredisi bütçenizi nasıl etkilediğini
              örneklerle öğrenin.
            </p>

            <ShareButtons
              title="Tarım Kredisi Rehberi | HesapRehberi"
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
            <section id="tarim-kredisi-nedir" className="scroll-mt-24">
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

            <section id="kimler-kullanabilir" className="scroll-mt-24">
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

            <section id="kredi-turleri" className="scroll-mt-24">
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

            <section id="faiz-hesabi" className="scroll-mt-24">
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

            <section id="odeme-plani" className="scroll-mt-24">
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

            <section id="bitkisel-uretim" className="scroll-mt-24">
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

            <section id="hayvancilik" className="scroll-mt-24">
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

            <section id="ornek-hesaplama" className="scroll-mt-24">
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

            <section id="ne-zaman-mantikli" className="scroll-mt-24">
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

            <section id="destekli-krediler" className="scroll-mt-24">
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

            <section id="ornek-hesaplama" className="scroll-mt-24">
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

            <section id="masraflar" className="scroll-mt-24">
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

            <section id="banka-degerlendirmesi" className="scroll-mt-24">
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

            <section id="basvuru-belgeleri" className="scroll-mt-24">
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
                Tarım Kredisi Hesaplarken Sık Yapılan Hatalar
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
                href="/hesaplamalar/tarim-kredisi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Tarım Kredisi Hesaplama Aracını Aç
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