import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  CheckCircle2,
  CircleAlert,
  Landmark,
  Percent,
  PiggyBank,
  TrendingUp,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Vadeli Mevduat Faizi Nasıl Hesaplanır? Formül ve Örnekler",
  description:
    "Vadeli mevduat faizinin, günlük brüt getirinin, stopaj kesintisinin ve net faiz kazancının nasıl hesaplandığını formüller ve örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/vadeli-mevduat-faizi-nasil-hesaplanir",
  },
  openGraph: {
    title: "Vadeli Mevduat Faizi Nasıl Hesaplanır? | HesapRehberi",
    description:
      "Vadeli mevduat faizi, brüt kazanç, stopaj ve net getiri hesaplama yöntemlerini anlaşılır örneklerle inceleyin.",
    url: "/blog/vadeli-mevduat-faizi-nasil-hesaplanir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Vadeli mevduat nedir?",
    answer:
      "Vadeli mevduat, belirli bir para tutarının banka hesabında önceden belirlenen bir süre boyunca tutulması karşılığında faiz getirisi sağlayan tasarruf ürünüdür.",
  },
  {
    question: "Vadeli mevduat faizi nasıl hesaplanır?",
    answer:
      "Temel hesaplamada anapara, yıllık faiz oranı ve gün sayısı çarpılır; sonuç yılın gün sayısına ve 100'e bölünür. Bulunan tutar brüt faiz getirisidir.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz, herhangi bir vergi veya kesinti uygulanmadan önce hesaplanan kazançtır. Net faiz ise geçerli kesintiler düşüldükten sonra hesaba geçen tutardır.",
  },
  {
    question: "Stopaj nedir?",
    answer:
      "Stopaj, faiz gelirinden kaynakta yapılan vergi kesintisidir. Uygulanacak oran mevzuata, hesap türüne, vadeye ve ilgili dönemdeki düzenlemelere göre değişebilir.",
  },
  {
    question: "Vadeli hesapta faiz oranı yıllık mı gösterilir?",
    answer:
      "Bankalar mevduat faiz oranlarını çoğunlukla yıllık brüt oran olarak gösterir. Kısa vadeli hesabın getirisi, yıllık oran gün sayısına uyarlanarak hesaplanır.",
  },
  {
    question: "32 günlük mevduat faizi nasıl hesaplanır?",
    answer:
      "Anapara ile yıllık faiz oranı ve 32 gün çarpılır. Sonuç 36500'e bölünerek yaklaşık brüt faiz getirisi bulunur. Ardından varsa stopaj kesintisi düşülür.",
  },
  {
    question: "Vade dolmadan para çekilirse faiz alınır mı?",
    answer:
      "Bu durum bankanın ürün koşullarına bağlıdır. Bazı hesaplarda vade bozulduğunda faiz getirisi tamamen veya kısmen kaybedilebilir.",
  },
  {
    question: "Faiz oranı yükselirse mevduat getirisi de yükselir mi?",
    answer:
      "Anapara ve vade aynı kalırsa daha yüksek faiz oranı daha yüksek brüt getiri sağlar. Ancak net kazanç hesaplanırken kesintiler ve ürün koşulları da dikkate alınmalıdır.",
  },
];

const affectingFactors = [
  {
    title: "Anapara tutarı",
    description:
      "Mevduata yatırılan tutar arttıkça aynı faiz oranı ve vadede elde edilen faiz kazancı da artar.",
  },
  {
    title: "Yıllık faiz oranı",
    description:
      "Bankanın sunduğu yıllık brüt faiz oranı, mevduat getirisinin temel belirleyicilerinden biridir.",
  },
  {
    title: "Vade süresi",
    description:
      "Paranın hesapta tutulduğu gün sayısı arttıkça faiz işletilen süre de uzar.",
  },
  {
    title: "Stopaj oranı",
    description:
      "Faiz gelirine uygulanan kesinti oranı, brüt kazançtan net kazanca geçişte doğrudan etkilidir.",
  },
  {
    title: "Faiz hesaplama yöntemi",
    description:
      "Basit faiz, bileşik faiz, vade sonu ödeme veya dönemsel yenileme gibi yöntemler toplam getiriyi değiştirebilir.",
  },
  {
    title: "Vade yenileme koşulları",
    description:
      "Vade sonunda hesabın hangi faiz oranıyla yenileneceği gelecekteki toplam kazancı etkileyebilir.",
  },
];

const bankComparisonItems = [
  "Yıllık brüt faiz oranını karşılaştırın.",
  "Net faiz getirisini kontrol edin.",
  "Vade süresinin ihtiyaçlarınıza uygun olduğundan emin olun.",
  "Vade bozulduğunda uygulanacak koşulları inceleyin.",
  "Alt ve üst hesap açma limitlerini kontrol edin.",
  "Faizin vade sonunda mı yoksa dönemsel olarak mı ödendiğini öğrenin.",
  "Yeni müşteri veya hoş geldin faizi şartlarını inceleyin.",
  "Otomatik yenilemede geçerli olacak oranı kontrol edin.",
];

export default function VadeliMevduatFaiziNasilHesaplanirPage() {
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
              label: "Vadeli Mevduat Faizi Nasıl Hesaplanır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <PiggyBank size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Mevduat Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Vadeli Mevduat Faizi Nasıl Hesaplanır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Vadeli mevduatın brüt faiz getirisinin, stopaj kesintisinin ve
              hesabınıza geçecek net kazancın nasıl hesaplandığını formüller ve
              anlaşılır örneklerle öğrenin.
            </p>

            <ShareButtons
              title="Vadeli Mevduat Faizi Nasıl Hesaplanır? | HesapRehberi"
              description="Vadeli mevduat faizi, stopaj ve net getiri hesaplama yöntemlerini öğrenin."
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
                  href="#vadeli-mevduat-nedir"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  1. Vadeli mevduat nedir?
                </a>
              </li>

              <li>
                <a
                  href="#mevduat-faizi-nasil-isler"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  2. Mevduat faizi nasıl işler?
                </a>
              </li>

              <li>
                <a
                  href="#mevduat-faizi-formulu"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  3. Vadeli mevduat faizi hesaplama formülü
                </a>
              </li>

              <li>
                <a
                  href="#gunluk-faiz"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  4. Günlük mevduat faizi nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#aylik-faiz"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  5. Aylık mevduat faizi nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#yillik-faiz"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  6. Yıllık mevduat faizi nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#brut-net-faiz"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  7. Brüt ve net faiz arasındaki fark
                </a>
              </li>

              <li>
                <a
                  href="#stopaj"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  8. Stopaj nedir?
                </a>
              </li>

              <li>
                <a
                  href="#net-faiz-getirisi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  9. Net faiz getirisi nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#ornek-hesaplamalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  10. Örnek mevduat hesaplamaları
                </a>
              </li>

              <li>
                <a
                  href="#basit-bilesik-faiz"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  11. Basit faiz ve bileşik faiz farkı
                </a>
              </li>

              <li>
                <a
                  href="#getiriyi-etkileyenler"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  12. Mevduat getirisini etkileyen unsurlar
                </a>
              </li>

              <li>
                <a
                  href="#banka-secimi"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  13. Banka seçerken nelere dikkat edilmeli?
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  14. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  15. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="vadeli-mevduat-nedir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vadeli Mevduat Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vadeli mevduat, belirli bir para tutarının önceden belirlenen
                süre boyunca bankada tutulması karşılığında faiz getirisi
                sağlayan bir tasarruf ürünüdür. Hesap açılırken anapara, vade
                süresi ve faiz oranı belirlenir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Vade sona erdiğinde anapara ile elde edilen net faiz kazancı
                hesap sahibine ödenir. Hesabın vadesinden önce kapatılması
                hâlinde uygulanacak koşullar bankanın ürün sözleşmesine göre
                değişebilir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Vadeli mevduat getirisini belirleyen temel unsurlar anapara,
                  yıllık faiz oranı, vade gün sayısı ve faiz gelirine uygulanan
                  kesintilerdir.
                </p>
              </div>
            </section>

            <section id="mevduat-faizi-nasil-isler" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Mevduat Faizi Nasıl İşler?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Banka, vadeli hesaba yatırılan anapara için belirli bir yıllık
                faiz oranı sunar. Para, seçilen vade boyunca hesapta kaldığında
                gün sayısına karşılık gelen faiz getirisi oluşur.
              </p>

              <div className="mt-7 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Banknote size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">Anapara</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Vadeli hesaba yatırılan başlangıç para tutarıdır.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                    <Percent size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-bold text-slate-900">Faiz oranı</h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Bankanın çoğunlukla yıllık brüt olarak açıkladığı orandır.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white">
                    <CalendarDays size={22} aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-bold">Vade</h3>

                  <p className="mt-3 leading-7 text-blue-100">
                    Paranın hesapta tutulacağı gün veya ay sayısıdır.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">
                Banka tarafından sunulan oran yıllık olsa bile 32, 45 veya 92
                günlük hesapların getirisi yalnızca ilgili gün sayısı için
                hesaplanır.
              </p>
            </section>

            <section id="mevduat-faizi-formulu" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vadeli Mevduat Faizi Hesaplama Formülü
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Vadeli mevduatın brüt faiz getirisi, anapara, yıllık faiz oranı
                ve vade gün sayısı kullanılarak hesaplanabilir.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="min-w-[600px] font-semibold text-green-900">
                  Brüt Faiz Getirisi = Anapara × Yıllık Faiz Oranı × Gün Sayısı
                  ÷ 36500
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Formüldeki değerler
                </h3>

                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">Anapara:</strong>{" "}
                      Vadeli hesaba yatırılan para
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">
                        Yıllık faiz oranı:
                      </strong>{" "}
                      Bankanın sunduğu yıllık brüt oran
                    </span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <span>
                      <strong className="text-slate-900">Gün sayısı:</strong>{" "}
                      Seçilen vadenin toplam gün sayısı
                    </span>
                  </li>
                </ul>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Formülde faiz oranı yüzde biçiminde kullanıldığı için paydada
                36500 yer alır. Oran ondalık biçimde kullanılırsa hesaplama
                anapara × oran × gün ÷ 365 şeklinde yapılabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Bazı finansal ürünlerde yılın gün sayısı veya hesaplama
                    yöntemi farklı olabilir. Kesin sonuç için bankanın ürün
                    koşulları esas alınmalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="gunluk-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Günlük Mevduat Faizi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bir günlük brüt faiz getirisi, yıllık faiz getirisinin 365 güne
                dağıtılmasıyla yaklaşık olarak bulunabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Günlük Brüt Faiz = Anapara × Yıllık Faiz Oranı ÷ 36500
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Günlük faiz hesaplama örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Anapara: 100.000 TL</p>
                  <p>Yıllık brüt faiz oranı: %40</p>
                  <p>Hesaplama: 100.000 × 40 ÷ 36500</p>

                  <p className="font-semibold text-slate-900">
                    Yaklaşık günlük brüt faiz: 109,59 TL
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Bu örnek yalnızca hesaplama yöntemini açıklamak için
                hazırlanmıştır. Kullanılan oran güncel banka teklifi değildir.
              </p>
            </section>

            <section id="aylik-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Aylık Mevduat Faizi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Mevduat hesaplarında bir ay sabit olarak 30 gün kabul
                edilmeyebilir. Banka ürünlerinde 32 günlük vade seçeneği yaygın
                olarak kullanılabildiği için hesaplama gerçek vade gün sayısına
                göre yapılmalıdır.
              </p>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Dönemsel Brüt Getiri = Anapara × Yıllık Faiz Oranı × Vade
                  Günü ÷ 36500
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  32 günlük mevduat örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Anapara: 100.000 TL</p>
                  <p>Yıllık brüt faiz oranı: %40</p>
                  <p>Vade: 32 gün</p>
                  <p>Hesaplama: 100.000 × 40 × 32 ÷ 36500</p>

                  <p className="font-semibold text-slate-900">
                    Yaklaşık brüt faiz getirisi: 3.506,85 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="yillik-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Yıllık Mevduat Faizi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Para 365 gün boyunca aynı faiz oranıyla değerlendiriliyor ve
                faiz anaparaya eklenmeden yalnızca basit faiz uygulanıyorsa
                yıllık brüt getiri daha kısa bir formülle bulunabilir.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Yıllık Brüt Faiz = Anapara × Yıllık Faiz Oranı ÷ 100
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Yıllık basit faiz örneği
                </h3>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Anapara: 100.000 TL</p>
                  <p>Yıllık brüt faiz oranı: %40</p>
                  <p>Hesaplama: 100.000 × 40 ÷ 100</p>

                  <p className="font-semibold text-slate-900">
                    Yıllık brüt faiz getirisi: 40.000 TL
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Vade boyunca elde edilen faiz yeniden anaparaya eklenirse
                bileşik getiri oluşur. Bu durumda toplam yıllık kazanç basit
                faiz hesabından farklı olabilir.
              </p>
            </section>

            <section id="brut-net-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Brüt Faiz ile Net Faiz Arasındaki Fark
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankanın açıkladığı faiz oranı ve hesaplama sonucunda bulunan
                ilk getiri çoğunlukla brüt tutardır. Hesap sahibinin elde ettiği
                gerçek kazanç ise geçerli kesintiler sonrasında kalan net
                faizdir.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Kavram</th>
                        <th className="px-5 py-4 font-semibold">Açıklama</th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Brüt faiz
                        </td>
                        <td className="px-5 py-4">
                          Vergi veya diğer kesintiler uygulanmadan önce
                          hesaplanan faiz kazancıdır.
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Stopaj
                        </td>
                        <td className="px-5 py-4">
                          Faiz gelirinden geçerli oran üzerinden yapılan
                          kesintidir.
                        </td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          Net faiz
                        </td>
                        <td className="px-5 py-4 font-medium text-blue-900">
                          Kesintiler düşüldükten sonra hesap sahibine kalan faiz
                          kazancıdır.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="stopaj" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Mevduat Faizinde Stopaj Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Stopaj, faiz kazancı üzerinden kaynakta yapılan vergi
                kesintisidir. Banka, hesaplanan brüt faiz kazancından geçerli
                stopaj tutarını düşer ve kalan net tutarı hesaba aktarır.
              </p>

              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-3">
                  <CircleAlert
                    size={23}
                    className="mt-1 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-amber-900">
                    Stopaj oranları mevzuata, vadeye, hesap türüne ve ilgili
                    dönemde yürürlükte bulunan düzenlemelere göre değişebilir.
                    Hesaplama sırasında güncel oran kontrol edilmelidir.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Stopaj Tutarı = Brüt Faiz Getirisi × Stopaj Oranı ÷ 100
                </p>
              </div>
            </section>

            <section id="net-faiz-getirisi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Net Faiz Getirisi Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Net faiz kazancı, brüt faiz getirisinden stopaj tutarının
                çıkarılmasıyla hesaplanır.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Net Faiz Getirisi = Brüt Faiz Getirisi − Stopaj Tutarı
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Vade Sonu Toplam Tutar = Anapara + Net Faiz Getirisi
                </p>
              </div>

              <div className="mt-7 rounded-2xl bg-slate-100 p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Net faiz hesaplama örneği
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Aşağıdaki örnekte yalnızca hesaplama yöntemini göstermek için
                  varsayımsal yüzde 10 stopaj oranı kullanılmıştır.
                </p>

                <div className="mt-4 space-y-3 text-slate-600">
                  <p>Brüt faiz getirisi: 3.506,85 TL</p>
                  <p>Varsayımsal stopaj oranı: %10</p>
                  <p>Stopaj: 3.506,85 × 10 ÷ 100 = 350,69 TL</p>
                  <p>Net faiz: 3.506,85 − 350,69</p>

                  <p className="font-semibold text-slate-900">
                    Yaklaşık net faiz getirisi: 3.156,16 TL
                  </p>

                  <p className="font-semibold text-blue-700">
                    Vade sonu toplam tutar: 103.156,16 TL
                  </p>
                </div>
              </div>
            </section>

            <section id="ornek-hesaplamalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Vadeli Mevduat Hesaplamaları
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki örneklerde yıllık yüzde 40 brüt faiz, 32 günlük vade
                ve yalnızca örnek olması amacıyla yüzde 10 stopaj oranı
                kullanılmıştır.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Anapara</th>
                        <th className="px-5 py-4 font-semibold">
                          Brüt Faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">Stopaj</th>
                        <th className="px-5 py-4 font-semibold">Net Faiz</th>
                        <th className="px-5 py-4 font-semibold">
                          Vade Sonu Tutar
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          50.000 TL
                        </td>
                        <td className="px-5 py-4">1.753,42 TL</td>
                        <td className="px-5 py-4">175,34 TL</td>
                        <td className="px-5 py-4">1.578,08 TL</td>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          51.578,08 TL
                        </td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          100.000 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">
                          3.506,85 TL
                        </td>
                        <td className="px-5 py-4 text-blue-900">350,69 TL</td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          3.156,16 TL
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          103.156,16 TL
                        </td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          250.000 TL
                        </td>
                        <td className="px-5 py-4">8.767,12 TL</td>
                        <td className="px-5 py-4">876,71 TL</td>
                        <td className="px-5 py-4">7.890,41 TL</td>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          257.890,41 TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Tutarlar yuvarlanmıştır. Faiz ve stopaj oranları yalnızca
                örnektir; güncel banka oranlarını veya yürürlükteki mevzuatı
                temsil etmez.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-3">
                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    50.000 TL
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    1.578,08 TL
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Örnek net kazanç
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-600 p-6 text-white">
                  <p className="text-sm font-semibold text-blue-100">
                    100.000 TL
                  </p>

                  <p className="mt-3 text-2xl font-bold">3.156,16 TL</p>

                  <p className="mt-2 text-sm text-blue-100">
                    Örnek net kazanç
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-100 p-6">
                  <p className="text-sm font-semibold text-slate-500">
                    250.000 TL
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-900">
                    7.890,41 TL
                  </p>

                  <p className="mt-2 text-sm text-slate-500">
                    Örnek net kazanç
                  </p>
                </div>
              </div>
            </section>

            <section id="basit-bilesik-faiz" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Basit Faiz ve Bileşik Faiz Arasındaki Fark
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Mevduat getirisinin hesaplanma biçimi, faizin anaparaya eklenip
                eklenmemesine göre değişebilir.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Basit faiz
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Faiz yalnızca başlangıç anaparası üzerinden hesaplanır.
                    Önceki dönemde kazanılan faiz yeni dönemin anaparasına
                    eklenmez.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">Bileşik faiz</h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    Önceki dönemde elde edilen getiri anaparaya eklenir ve yeni
                    dönemde faiz daha yüksek tutar üzerinden hesaplanır.
                  </p>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
                <p className="font-semibold text-indigo-900">
                  Bileşik Tutar = Anapara × (1 + Dönemsel Net Getiri Oranı)ⁿ
                </p>

                <p className="mt-3 text-sm leading-6 text-indigo-800">
                  Formüldeki n, faizin anaparaya eklendiği toplam dönem sayısını
                  ifade eder.
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Vadeli hesap her dönem aynı oranla yenilenmeyebilir. Bu nedenle
                gelecekteki bileşik getiri hesapları tahmini sonuç verir.
              </p>
            </section>

            <section id="getiriyi-etkileyenler" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Mevduat Getirisini Etkileyen Unsurlar
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aynı anapara için farklı bankalarda veya farklı vade
                seçeneklerinde farklı net getiriler oluşabilir.
              </p>

              <div className="mt-7 grid gap-5">
                {affectingFactors.map((item) => (
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

            <section id="banka-secimi" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vadeli Mevduat İçin Banka Seçerken Nelere Dikkat Edilmeli?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Bankaları yalnızca ilan edilen faiz oranına göre
                karşılaştırmak yeterli olmayabilir. Net kazanç ve ürün koşulları
                birlikte değerlendirilmelidir.
              </p>

              <div className="mt-7 rounded-3xl border border-slate-200 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                    <Landmark size={24} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Mevduat tekliflerini karşılaştırırken
                    </h3>

                    <div className="mt-5 space-y-4">
                      {bankComparisonItems.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={21}
                            className="mt-1 shrink-0 text-blue-600"
                            aria-hidden="true"
                          />

                          <p className="leading-7 text-slate-600">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-3">
                  <TrendingUp
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />

                  <p className="leading-8 text-blue-900">
                    En yüksek faiz oranı her zaman en uygun seçenek anlamına
                    gelmeyebilir. Vade bozulma koşulları, kampanya süresi ve
                    sonraki yenileme oranı da dikkate alınmalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Vadeli Mevduat Faizi Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "Yıllık faiz oranını doğrudan bir aylık getiri olarak değerlendirmek.",
                  "Vade gün sayısını hesaba katmadan yalnızca faiz oranına bakmak.",
                  "Brüt faiz ile net faiz getirisini aynı tutar sanmak.",
                  "Stopaj kesintisini hesaplamaya dahil etmemek.",
                  "32 günlük vade ile tam bir takvim ayını aynı kabul etmek.",
                  "Faiz oranının bütün yıl boyunca değişmeden kalacağını varsaymak.",
                  "Vade sonunda hesabın hangi oranla yenileneceğini kontrol etmemek.",
                  "Vade bozulduğunda uygulanacak faiz koşullarını incelememek.",
                  "Kampanya faizinin yalnızca belirli tutar veya müşteri grubu için geçerli olabileceğini göz ardı etmek.",
                  "Yuvarlama nedeniyle küçük tutar farklarının oluşabileceğini unutmamak.",
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
                    Faiz ve stopaj oranları zaman içinde değişebilir. Vadeli
                    hesap açmadan önce bankanın güncel oranları, ürün şartları
                    ve vade sonunda uygulanacak koşullar kontrol edilmelidir.
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
                Vadeli Mevduat Getirinizi Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Anapara, yıllık faiz oranı, vade gün sayısı ve stopaj oranını
                girerek brüt faiz kazancını, kesinti tutarını ve net getiriyi
                saniyeler içinde hesaplayın.
              </p>

              <Link
                href="/hesaplamalar/vadeli-mevduat-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Vadeli Mevduat Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacıyla sunulur.
                Bankanın uyguladığı faiz oranı, gün hesabı, stopaj ve ürün
                koşulları gerçek sonucu değiştirebilir.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}