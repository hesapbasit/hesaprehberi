import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgePercent,
  Banknote,
  Building2,
  Calculator,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  FileCheck2,
  FileText,
  Gauge,
  HandCoins,
  Home,
  Landmark,
  PiggyBank,
  ReceiptText,
  Scale,
  ShieldCheck,
  TrendingDown,
  WalletCards,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

const canonicalPath = "/blog/konut-kredisi-hesaplama-rehberi";

export const metadata: Metadata = {
  title: "Konut Kredisi Hesaplama Rehberi",
  description:
    "Konut kredisi taksiti, toplam geri ödeme, faiz maliyeti, vade karşılaştırması, peşinat ve ek masrafların nasıl hesaplandığını örneklerle öğrenin.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Konut Kredisi Hesaplama Rehberi | HesapRehberi",
    description:
      "Konut kredisi aylık taksit formülü, örnek ödeme tabloları, peşinat, toplam maliyet, ara ödeme ve erken kapama rehberi.",
    url: canonicalPath,
    type: "article",
  },
};

const tableOfContents = [
  ["konut-kredisi-nedir", "Konut kredisi nedir?"],
  ["konut-kredisi-nasil-calisir", "Konut kredisi nasıl çalışır?"],
  ["konut-kredisi-hesaplama", "Konut kredisi nasıl hesaplanır?"],
  ["aylik-taksit-formulu", "Aylık taksit formülü"],
  ["pesinat-hesaplama", "Peşinat nasıl hesaplanır?"],
  ["faiz-orani-etkisi", "Faiz oranının taksite etkisi"],
  ["vade-karsilastirma", "120, 180 ve 240 ay karşılaştırması"],
  ["toplam-geri-odeme", "Toplam geri ödeme nasıl bulunur?"],
  ["ek-masraflar", "Konut kredisindeki ek masraflar"],
  ["ekspertiz-ve-ipotek", "Ekspertiz ve ipotek süreci"],
  ["dask-ve-sigortalar", "DASK ve diğer sigortalar"],
  ["erken-odeme", "Erken ödeme ve erken kapama"],
  ["ara-odeme", "Ara ödeme nasıl etkiler?"],
  ["yapilandirma", "Kredi yapılandırma"],
  ["banka-karsilastirma", "Banka karşılaştırırken nelere bakılmalı?"],
  ["sik-yapilan-hatalar", "Sık yapılan hatalar"],
  ["sik-sorulan-sorular", "Sık sorulan sorular"],
];

const loanComponents = [
  {
    title: "Anapara",
    description:
      "Bankadan kullandığınız kredi tutarıdır. Aylık taksitlerin bir bölümü anaparayı azaltır.",
    icon: Banknote,
  },
  {
    title: "Faiz",
    description:
      "Bankanın kredi kullandırma karşılığında aldığı maliyettir. İlk taksitlerde faiz payı daha yüksek olabilir.",
    icon: BadgePercent,
  },
  {
    title: "Vade",
    description:
      "Kredinin kaç ayda geri ödeneceğini gösterir. Vade uzadıkça taksit düşebilir ancak toplam maliyet artabilir.",
    icon: CalendarClock,
  },
];

const comparisonRows = [
  {
    term: "120 ay",
    installment: "31.050 TL",
    total: "3.726.000 TL",
    interest: "2.226.000 TL",
  },
  {
    term: "180 ay",
    installment: "28.250 TL",
    total: "5.085.000 TL",
    interest: "3.585.000 TL",
  },
  {
    term: "240 ay",
    installment: "27.350 TL",
    total: "6.564.000 TL",
    interest: "5.064.000 TL",
  },
];

const rateComparisonRows = [
  {
    rate: "%2,49",
    installment: "39.550 TL",
    total: "4.746.000 TL",
  },
  {
    rate: "%2,99",
    installment: "46.050 TL",
    total: "5.526.000 TL",
  },
  {
    rate: "%3,49",
    installment: "52.900 TL",
    total: "6.348.000 TL",
  },
];

const extraCosts = [
  {
    title: "Ekspertiz ücreti",
    description:
      "Gayrimenkulün piyasa değerinin lisanslı uzman tarafından belirlenmesi için alınır.",
  },
  {
    title: "Kredi tahsis ücreti",
    description:
      "Bankanın kredi kullandırım sürecinde tahsil edebildiği dosya veya tahsis bedelidir.",
  },
  {
    title: "İpotek masrafları",
    description:
      "Taşınmaz üzerine banka lehine ipotek tesis edilirken doğabilecek işlem giderleridir.",
  },
  {
    title: "DASK",
    description:
      "Zorunlu deprem sigortasıdır. Konut kredisi sürecinde geçerli poliçe talep edilir.",
  },
  {
    title: "Konut sigortası",
    description:
      "Zorunlu olmamakla birlikte banka tarafından teklif edilebilir ve toplam maliyeti etkileyebilir.",
  },
  {
    title: "Hayat sigortası",
    description:
      "Kredi borçlusunun vefatı gibi risklere karşı düzenlenebilir. Prim yaşa ve kredi tutarına göre değişir.",
  },
];

const commonMistakes = [
  "Yalnızca aylık taksite bakıp toplam geri ödemeyi gözden kaçırmak.",
  "Peşinat dışında tapu ve sigorta giderleri için bütçe ayırmamak.",
  "İlan fiyatını ekspertiz değeriyle aynı kabul etmek.",
  "Vade uzadığında toplam faiz maliyetinin ne kadar arttığını hesaplamamak.",
  "Farklı bankaları yalnızca nominal faiz oranına göre karşılaştırmak.",
  "Yıllık maliyet oranını ve ücretleri incelememek.",
  "Gelirin tamamını taksite ayırmak ve acil durum payı bırakmamak.",
  "Değişken gelirleri kalıcı gelir gibi kabul etmek.",
  "Ara ödeme ve erken kapama koşullarını sözleşmeden kontrol etmemek.",
  "Krediye uygunluk kesinleşmeden kapora veya bağlayıcı ödeme yapmak.",
];

const faqItems = [
  {
    question: "Konut kredisi taksiti nasıl hesaplanır?",
    answer:
      "Aylık taksit; kredi tutarı, aylık faiz oranı ve vade kullanılarak eşit taksitli kredi formülüyle hesaplanır. Bankanın ücretleri, sigortalar ve diğer giderler ayrıca toplam maliyete eklenebilir.",
  },
  {
    question: "Konut kredisi için ne kadar peşinat gerekir?",
    answer:
      "Gerekli peşinat, bankanın ekspertiz değerine göre kullandırabileceği azami kredi oranına bağlıdır. Satış bedeli ekspertiz değerinden yüksekse aradaki fark da alıcı tarafından karşılanır.",
  },
  {
    question: "Konut kredisi ilan fiyatı üzerinden mi hesaplanır?",
    answer:
      "Banka kredi limitini genellikle yetkili ekspertiz tarafından belirlenen değer üzerinden değerlendirir. İlan veya satış fiyatı daha yüksek olsa bile kredi tutarı ekspertiz değerine göre sınırlanabilir.",
  },
  {
    question: "Vade uzarsa aylık taksit düşer mi?",
    answer:
      "Genellikle evet. Ancak vade uzadıkça daha uzun süre faiz ödendiği için toplam geri ödeme ve toplam faiz yükü artabilir.",
  },
  {
    question: "Faiz oranındaki küçük değişiklik önemli midir?",
    answer:
      "Uzun vadeli ve yüksek tutarlı konut kredilerinde küçük görünen faiz farkları toplam geri ödemede yüz binlerce liralık değişiklik oluşturabilir.",
  },
  {
    question: "Konut kredisinde BSMV ve KKDF var mı?",
    answer:
      "Mevzuatta konut finansmanı kapsamında değerlendirilen kredilerde belirli vergi ve fon istisnaları bulunabilir. Kredinin niteliği ve güncel uygulama bankadan doğrulanmalıdır.",
  },
  {
    question: "Konut kredisi erken kapatılabilir mi?",
    answer:
      "Evet. Tüketici, kalan borcun tamamını ödeyerek krediyi kapatabilir. Sabit faizli kredilerde sözleşme ve mevzuat kapsamında erken ödeme tazminatı uygulanabilir.",
  },
  {
    question: "Ara ödeme yapmak avantajlı mı?",
    answer:
      "Ara ödeme anaparayı azaltarak kalan faiz yükünü düşürebilir. Bankaya göre taksit tutarı düşürülebilir veya vade kısaltılabilir.",
  },
  {
    question: "Kredi yapılandırma ne zaman mantıklıdır?",
    answer:
      "Yeni faiz oranıyla sağlanacak tasarruf; erken kapama tazminatı, yeni kredi masrafları ve sigorta giderlerinden yüksekse yapılandırma avantajlı olabilir.",
  },
  {
    question: "Ekspertiz değeri neden satış fiyatından düşük çıkabilir?",
    answer:
      "Ekspertiz; konum, bina yaşı, yasal durum, emsal satışlar, kullanım alanı ve yapı kalitesi gibi unsurları değerlendirir. Satıcının talep ettiği fiyat piyasa değerinden yüksek olabilir.",
  },
  {
    question: "DASK konut kredisi için zorunlu mu?",
    answer:
      "Deprem riski kapsamındaki binalar için DASK yasal olarak zorunludur. Bankalar kredi süresince poliçenin yenilenmesini talep edebilir.",
  },
  {
    question: "Konut sigortası yaptırmak zorunlu mu?",
    answer:
      "DASK ile konut sigortası farklı ürünlerdir. Konut sigortasının zorunluluğu sözleşme ve banka uygulamasına göre değerlendirilmelidir.",
  },
  {
    question: "Kredi taksiti gelirin ne kadarını geçmemeli?",
    answer:
      "Tek bir oran herkes için doğru değildir. Taksit belirlenirken düzenli gelir, mevcut borçlar, yaşam giderleri, acil durum birikimi ve gelir kaybı riski birlikte değerlendirilmelidir.",
  },
  {
    question: "Sabit faizli konut kredisi nedir?",
    answer:
      "Sözleşmede belirlenen faiz oranının kredi boyunca değişmediği kredi türüdür. Taksit planı daha öngörülebilir olur.",
  },
  {
    question: "Konut kredisi hesaplama aracı kesin banka teklifi verir mi?",
    answer:
      "Hayır. Araç yaklaşık taksit ve toplam ödeme sonucu üretir. Kesin teklif; kredi notu, gelir, ekspertiz, banka politikası, ücretler ve sigorta primlerine göre değişir.",
  },
];

export default function KonutKredisiHesaplamaRehberiPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb
          items={[
            { label: "Blog", href: "/blog" },
            { label: "Konut Kredisi Hesaplama Rehberi" },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Home size={31} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Kredi ve Finansman Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Konut Kredisi Hesaplama Rehberi
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Aylık taksit, toplam geri ödeme, peşinat, faiz maliyeti ve ek
              masrafların konut kredisi bütçenizi nasıl etkilediğini örneklerle
              öğrenin.
            </p>

            <ShareButtons
              title="Konut Kredisi Hesaplama Rehberi | HesapRehberi"
              description="Konut kredisi taksiti, peşinat, toplam geri ödeme ve ek maliyetlerin hesaplanması."
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
            <section id="konut-kredisi-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Konut kredisi, bir evin satın alınmasını finanse etmek amacıyla
                bankadan kullanılan uzun vadeli kredidir. Banka satın alınacak
                taşınmazı ekspertiz sürecinden geçirir, uygun bulduğu kredi
                tutarını kullandırır ve taşınmaz üzerine borç bitene kadar
                ipotek koyar.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Konut kredilerinin tutarı yüksek, vadesi uzun olduğu için faiz
                oranındaki küçük değişimler bile toplam geri ödemeyi önemli
                ölçüde etkileyebilir. Bu nedenle yalnızca aylık taksite değil,
                toplam maliyete, peşinata ve ek giderlere birlikte bakmak
                gerekir.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-blue-900">
                    Konut kredisi hesaplama sonucu yaklaşık bir bütçe sunar.
                    Bankanın kesin teklifi; gelir, kredi notu, ekspertiz değeri,
                    taşınmazın hukuki durumu, sigorta primleri ve güncel banka
                    politikalarına göre değişebilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="konut-kredisi-nasil-calisir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Nasıl Çalışır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredi başvurusu onaylandığında banka, belirlenen kredi tutarını
                satıcıya aktarır. Borçlu ise krediyi sözleşmede yer alan ödeme
                planına göre aylık taksitlerle geri öder.
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
                <h3 className="text-xl font-bold">Ödeme planının yapısı</h3>
                <p className="mt-4 leading-8 text-blue-100">
                  Eşit taksitli kredilerde aylık ödeme sabit kalabilir fakat
                  taksitin içindeki anapara ve faiz payları zamanla değişir.
                  İlk aylarda faiz payı daha yüksekken kredi ilerledikçe
                  anapara payı artar.
                </p>
              </div>
            </section>

            <section id="konut-kredisi-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Temel hesaplama için üç bilgi gerekir: kullanılacak kredi
                tutarı, aylık faiz oranı ve vade. Bu değerlerle aylık taksit
                hesaplanır. Ardından taksit tutarı vadeyle çarpılarak yaklaşık
                toplam geri ödeme bulunur.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {[
                  ["Kredi tutarı", "1.500.000 TL"],
                  ["Aylık faiz", "%2,99"],
                  ["Vade", "120 ay"],
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
                  Örnek sonuç: Aylık yaklaşık 46.050 TL taksit ve 120 ay sonunda
                  yaklaşık 5.526.000 TL toplam geri ödeme.
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Bu örnekte ücret, sigorta, ekspertiz ve diğer yan maliyetler
                hesaba dahil edilmemiştir. Rakamlar hesaplama yöntemini
                göstermek amacıyla yaklaşık olarak verilmiştir.
              </p>
            </section>

            <section id="aylik-taksit-formulu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Aylık Taksit Formülü
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eşit taksitli kredi hesabında kullanılan temel formül aşağıdaki
                gibidir:
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
                  Yüzde 2,99 aylık faiz oranı formülde 0,0299 olarak kullanılır.
                  Yüzde değerini doğrudan 2,99 biçiminde yazmak yanlış sonuç
                  üretir.
                </p>
              </div>
            </section>

            <section id="pesinat-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Peşinatı Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Banka, evin satış fiyatının tamamını finanse etmeyebilir.
                Kullanılabilecek azami kredi, ekspertiz değeri ve yürürlükteki
                kredi-değer oranı dikkate alınarak belirlenir.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Örnek peşinat hesabı
                </h3>

                <div className="mt-5 space-y-4">
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Evin satış fiyatı</span>
                    <span className="font-semibold text-slate-900">
                      3.000.000 TL
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">Ekspertiz değeri</span>
                    <span className="font-semibold text-slate-900">
                      2.800.000 TL
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">
                      Örnek kredi oranı
                    </span>
                    <span className="font-semibold text-slate-900">%80</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-slate-200 pb-4">
                    <span className="text-slate-600">
                      Kullanılabilecek kredi
                    </span>
                    <span className="font-semibold text-slate-900">
                      2.240.000 TL
                    </span>
                  </div>
                  <div className="flex justify-between gap-4 rounded-xl bg-blue-600 p-4 text-white">
                    <span className="font-semibold">Gerekli öz kaynak</span>
                    <span className="text-xl font-bold">760.000 TL</span>
                  </div>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Bu örnekte satış fiyatı ekspertiz değerinden yüksek olduğu için
                yalnızca yüzde 20&apos;lik klasik peşinat değil, iki değer
                arasındaki fark da alıcı tarafından karşılanır.
              </p>
            </section>

            <section id="faiz-orani-etkisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Faiz Oranı Aylık Taksiti Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Konut kredisi uzun vadeli olduğu için aylık faiz oranındaki
                değişim taksit ve toplam geri ödeme üzerinde güçlü bir etki
                oluşturur.
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
                          120 ay toplam ödeme
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      {rateComparisonRows.map((row, index) => (
                        <tr
                          key={row.rate}
                          className={index === 1 ? "bg-blue-50" : undefined}
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
                Tablo, 1.500.000 TL kredi ve 120 ay vade için yaklaşık örnek
                değerlerdir. Banka hesaplama yöntemleri ve yuvarlamalar küçük
                farklılıklar oluşturabilir.
              </p>
            </section>

            <section id="vade-karsilastirma" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                120, 180 ve 240 Ay Vade Karşılaştırması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vade uzadığında aylık taksit azalabilir. Ancak kredi daha uzun
                süre açık kaldığı için toplam faiz yükü önemli ölçüde artabilir.
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
                      {comparisonRows.map((row, index) => (
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
                    Daha düşük taksit her zaman daha ucuz kredi anlamına
                    gelmez. En uzun vadede aylık rahatlama sağlanırken toplam
                    geri ödeme ciddi biçimde yükselebilir.
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
                  Sigortalar + Diğer Giderler
                </p>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Toplam faiz yükü ise taksitler toplamından kullanılan anaparanın
                çıkarılmasıyla yaklaşık olarak bulunabilir. Ancak sigorta ve
                ücretler bu hesapta ayrı değerlendirilmelidir.
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
                    Taksitler, tahsis, ekspertiz, ipotek, sigorta ve diğer
                    giderlerin toplamı.
                  </p>
                </div>
              </div>
            </section>

            <section id="ek-masraflar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisindeki Ek Masraflar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aylık taksit dışında farklı maliyetler doğabilir. Bu giderler
                peşin ödenebileceği gibi bazı durumlarda krediyle bağlantılı
                tahsil edilebilir.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {extraCosts.map((item) => (
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
                  Tapu harcı, döner sermaye bedeli, emlakçı hizmet bedeli ve
                  taşınma masrafları kredi taksitinden ayrı olarak bütçeye
                  dahil edilmelidir.
                </p>
              </div>
            </section>

            <section id="ekspertiz-ve-ipotek" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Ekspertiz ve İpotek Süreci
              </h2>

              <div className="mt-7 space-y-5">
                {[
                  {
                    step: "1",
                    title: "Kredi ön değerlendirmesi",
                    text: "Gelir, kredi geçmişi ve mevcut borçlar incelenir.",
                  },
                  {
                    step: "2",
                    title: "Ekspertiz incelemesi",
                    text: "Taşınmazın piyasa değeri, fiziksel durumu ve yasal özellikleri değerlendirilir.",
                  },
                  {
                    step: "3",
                    title: "Kredi tutarının kesinleşmesi",
                    text: "Ekspertiz değeri ve kredi-değer sınırına göre azami kredi belirlenir.",
                  },
                  {
                    step: "4",
                    title: "Tapu ve ipotek",
                    text: "Satış işlemi tamamlanır ve banka lehine ipotek tesis edilir.",
                  },
                  {
                    step: "5",
                    title: "Kredi kullandırımı",
                    text: "Kredi bedeli işlem planına göre satıcıya aktarılır.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="dask-ve-sigortalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                DASK ve Diğer Sigortalar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                DASK, deprem ve deprem kaynaklı belirli zararları poliçe
                limitleri dahilinde karşılayan zorunlu sigortadır. Konut
                sigortası ise yangın, su baskını, hırsızlık gibi daha geniş
                riskleri kapsayabilir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <ShieldCheck
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    DASK
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Zorunlu deprem sigortasıdır ve her yıl yenilenir.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <Home
                    size={26}
                    className="text-blue-600"
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    Konut sigortası
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Poliçe kapsamına göre bina ve eşya risklerini güvence altına
                    alabilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <WalletCards size={26} aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold">Hayat sigortası</h3>
                  <p className="mt-3 leading-7 text-blue-100">
                    Kredi borçlusuna ilişkin riskleri poliçe şartlarına göre
                    karşılayabilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="erken-odeme" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Erken Ödeme ve Erken Kapama
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kredinin vadesi gelmeden kalan borcun tamamının ödenmesine erken
                kapama denir. Kısmi ödeme yapılması ise ara ödeme olarak
                değerlendirilir.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Erken kapama kararı verirken
                </h3>

                <ul className="mt-5 space-y-4">
                  {[
                    "Bankadan güncel kapama tutarını yazılı olarak alın.",
                    "Kalan anapara ile ileri dönem faizlerini birbirinden ayırın.",
                    "Varsa erken ödeme tazminatını öğrenin.",
                    "Birikimin tamamını kullanmanın acil durum bütçesine etkisini değerlendirin.",
                    "Başka yatırım veya borç seçenekleriyle maliyet karşılaştırması yapın.",
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

            <section id="ara-odeme" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Ara Ödeme Konut Kredisini Nasıl Etkiler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Ara ödeme doğrudan kalan anaparayı azaltır. Böylece sonraki
                dönemlerde faiz hesaplanacak borç tutarı düşer.
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
                    Taksit benzer seviyede tutularak borcun daha erken bitmesi
                    sağlanabilir.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="leading-8 text-green-900">
                  Aynı ara ödeme tutarında vade kısaltma seçeneği çoğu durumda
                  daha fazla faiz tasarrufu sağlayabilir. Kesin sonuç için
                  bankadan iki ayrı yeni ödeme planı istenmelidir.
                </p>
              </div>
            </section>

            <section id="yapilandirma" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Yapılandırma
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Faizlerin düşmesi halinde mevcut kredi aynı bankada yeniden
                düzenlenebilir veya başka bankaya taşınabilir. Ancak yalnızca
                yeni faiz oranına bakmak yeterli değildir.
              </p>

              <div className="mt-7 rounded-3xl bg-slate-100 p-7">
                <h3 className="text-xl font-bold text-slate-900">
                  Net tasarruf hesabı
                </h3>
                <div className="mt-5 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                  <p className="font-semibold text-indigo-900">
                    Net Tasarruf = Eski Planın Kalan Maliyeti − Yeni Planın
                    Toplam Maliyeti − Geçiş Giderleri
                  </p>
                </div>

                <p className="mt-5 leading-8 text-slate-600">
                  Geçiş giderlerine erken ödeme tazminatı, yeni tahsis ücreti,
                  ekspertiz, ipotek ve sigorta maliyetleri dahil edilmelidir.
                </p>
              </div>
            </section>

            <section id="banka-karsilastirma" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Banka Karşılaştırırken Nelere Bakılmalı?
              </h2>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {[
                  ["Aylık faiz oranı", "Taksit ve toplam faiz yükünü doğrudan etkiler."],
                  ["Yıllık maliyet oranı", "Faiz dışındaki bazı maliyetleri karşılaştırmayı kolaylaştırır."],
                  ["Toplam geri ödeme", "Kredinin vade sonundaki gerçek büyüklüğünü gösterir."],
                  ["Tahsis ücreti", "Başlangıçta ödenecek kredi masraflarından biridir."],
                  ["Sigorta primleri", "Yaş, kredi tutarı ve teminatlara göre değişebilir."],
                  ["Ara ödeme koşulları", "İleride borcu azaltma esnekliğini etkiler."],
                  ["Erken kapama şartları", "Krediyi vadesinden önce bitirme maliyetini belirler."],
                  ["Müşteri hizmetleri", "Uzun vadeli ilişkide işlem kolaylığı açısından önemlidir."],
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

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Konut Kredisi Hesaplarken Sık Yapılan Hatalar
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
                  <PiggyBank
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="leading-8 text-blue-900">
                    Kredi taksiti ödendikten sonra düzenli yaşam giderleri,
                    sigortalar, bakım masrafları ve beklenmeyen harcamalar için
                    yeterli nakit payı kalmalıdır.
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
                Konut Kredisi Taksitinizi Hesaplayın
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                Kredi tutarı, aylık faiz oranı ve vadeyi girerek aylık taksiti,
                toplam geri ödemeyi ve yaklaşık faiz maliyetini saniyeler içinde
                görün.
              </p>

              <Link
                href="/hesaplamalar/konut-kredisi-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Konut Kredisi Hesaplama Aracını Aç
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
                    Başvuru öncesinde peşinatınızı, ek masraf bütçenizi, aylık
                    ödeme kapasitenizi ve en az üç farklı bankanın toplam
                    maliyet teklifini karşılaştırın.
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