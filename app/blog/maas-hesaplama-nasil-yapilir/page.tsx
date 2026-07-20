import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  CheckCircle2,
  CircleAlert,
  ReceiptText,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";

export const metadata: Metadata = {
  title: "Maaş Hesaplama Nasıl Yapılır? Brüt ve Net Maaş Rehberi",
  description:
    "Brüt maaş, net maaş, SGK primi, işsizlik sigortası, gelir vergisi ve diğer kesintiler hakkında temel bilgileri örneklerle öğrenin.",
  alternates: {
    canonical: "/blog/maas-hesaplama-nasil-yapilir",
  },
  openGraph: {
    title: "Maaş Hesaplama Nasıl Yapılır? | HesapRehberi",
    description:
      "Brüt ve net maaş arasındaki farkı, maaş kesintilerini ve temel hesaplama yöntemlerini örneklerle inceleyin.",
    url: "/blog/maas-hesaplama-nasil-yapilir",
    type: "article",
  },
};

const faqItems = [
  {
    question: "Brüt maaş nedir?",
    answer:
      "Brüt maaş, çalışanın vergi, sigorta primi ve diğer yasal kesintiler uygulanmadan önceki toplam ücretidir.",
  },
  {
    question: "Net maaş nedir?",
    answer:
      "Net maaş, brüt ücret üzerinden gerekli kesintiler yapıldıktan sonra çalışanın hesabına ödenen tutardır.",
  },
  {
    question: "Brüt maaş ile net maaş arasındaki fark neden değişir?",
    answer:
      "Kesinti tutarları; brüt ücret, vergi matrahı, gelir vergisi dilimi, istisnalar, ek ödemeler ve çalışanın durumuna göre değişebilir.",
  },
  {
    question: "Net maaştan brüt maaş hesaplanabilir mi?",
    answer:
      "Yaklaşık olarak hesaplanabilir. Ancak vergi dilimi, istisnalar ve diğer bordro bilgileri bilinmeden kesin brüt maaş sonucuna ulaşmak her zaman mümkün değildir.",
  },
  {
    question: "Maaş yıl içinde neden azalabilir?",
    answer:
      "Çalışanın kümülatif vergi matrahı arttıkça daha yüksek bir gelir vergisi dilimine geçmesi, bazı durumlarda net maaşın yıl içinde değişmesine neden olabilir.",
  },
  {
    question: "Prim ve ikramiyeler maaş hesabını etkiler mi?",
    answer:
      "Evet. Prime tabi ek ödemeler, ikramiyeler ve benzeri kazançlar vergi ve sigorta matrahlarını etkileyerek net ödeme tutarını değiştirebilir.",
  },
  {
    question: "Maaş hesaplama sonucu kesin midir?",
    answer:
      "Çevrim içi hesaplama araçları yaklaşık sonuç verir. Kesin tutar için işveren tarafından hazırlanan bordro ve güncel yasal düzenlemeler esas alınmalıdır.",
  },
];

const deductionItems = [
  {
    title: "SGK çalışan primi",
    description:
      "Çalışanın sosyal güvenlik sistemi kapsamındaki sigorta primi payıdır. Brüt ücret üzerinden, yürürlükteki kurallara göre hesaplanır.",
  },
  {
    title: "İşsizlik sigortası primi",
    description:
      "Çalışanın işsizlik sigortası fonuna yaptığı kesintidir. Prime esas kazanç üzerinden hesaplanabilir.",
  },
  {
    title: "Gelir vergisi",
    description:
      "Vergiye tabi ücret matrahı üzerinden hesaplanır. Kümülatif matrah ve gelir vergisi tarifesi nedeniyle yıl içinde değişebilir.",
  },
  {
    title: "Damga vergisi",
    description:
      "Ücret ödemelerinde yürürlükteki mevzuat kapsamında uygulanabilen kesintilerden biridir.",
  },
  {
    title: "Diğer kesintiler",
    description:
      "Avans, icra, bireysel emeklilik, özel sigorta, sendika aidatı veya işyeri uygulamalarına bağlı başka kesintiler bulunabilir.",
  },
];

export default function MaasHesaplamaNasilYapilirPage() {
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
              label: "Maaş Hesaplama Nasıl Yapılır?",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
              <Banknote size={30} aria-hidden="true" />
            </div>

            <span className="mt-7 inline-flex rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
              Maaş Rehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
              Maaş Hesaplama Nasıl Yapılır?
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Brüt ve net maaş arasındaki farkı, maaştan yapılan temel
              kesintileri ve yaklaşık maaş hesaplama yöntemini adım adım
              öğrenin.
            </p>

            <ShareButtons
              title="Maaş Hesaplama Nasıl Yapılır? | HesapRehberi"
              description="Brüt ve net maaş arasındaki farkı ve maaş kesintilerini öğrenin."
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
                  href="#brut-maas"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  1. Brüt maaş nedir?
                </a>
              </li>

              <li>
                <a
                  href="#net-maas"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  2. Net maaş nedir?
                </a>
              </li>

              <li>
                <a
                  href="#brutten-nete"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  3. Brüt maaştan net maaş nasıl hesaplanır?
                </a>
              </li>

              <li>
                <a
                  href="#maas-kesintileri"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  4. Maaş kesintileri nelerdir?
                </a>
              </li>

              <li>
                <a
                  href="#ornek-hesaplama"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  5. Örnek maaş hesaplaması
                </a>
              </li>

              <li>
                <a
                  href="#netten-brute"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  6. Net maaştan brüt maaş hesaplanabilir mi?
                </a>
              </li>

              <li>
                <a
                  href="#maas-neden-degisir"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  7. Net maaş neden değişebilir?
                </a>
              </li>

              <li>
                <a
                  href="#bordro"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  8. Maaş bordrosunda neler bulunur?
                </a>
              </li>

              <li>
                <a
                  href="#sik-yapilan-hatalar"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  9. Sık yapılan hatalar
                </a>
              </li>

              <li>
                <a
                  href="#sik-sorulan-sorular"
                  className="transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  10. Sık sorulan sorular
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-12 space-y-12">
            <section id="brut-maas" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Brüt Maaş Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brüt maaş, çalışanın iş sözleşmesinde belirtilen ve herhangi
                bir yasal ya da özel kesinti uygulanmadan önceki toplam ücret
                tutarıdır.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Sosyal güvenlik primi, işsizlik sigortası primi, gelir vergisi
                ve uygulanabilecek diğer kesintiler brüt ücret üzerinden veya
                ilgili matrahlar kullanılarak hesaplanır.
              </p>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Brüt Maaş = Kesintiler Uygulanmadan Önceki Toplam Ücret
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                İş ilanlarında veya iş sözleşmelerinde belirtilen ücretin brüt
                mü yoksa net mi olduğu mutlaka kontrol edilmelidir. Aynı rakam,
                bu iki durumda farklı ödeme sonuçları oluşturur.
              </p>
            </section>

            <section id="net-maas" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Net Maaş Nedir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Net maaş, brüt ücret üzerinden gerekli kesintiler yapıldıktan
                sonra çalışana fiilen ödenen tutardır. Çalışanın banka hesabına
                yatan veya kendisine ödenen miktar genellikle net maaşı ifade
                eder.
              </p>

              <div className="mt-6 rounded-2xl border border-green-200 bg-green-50 p-6">
                <p className="font-semibold text-green-900">
                  Net Maaş = Brüt Maaş − Toplam Kesintiler + Uygulanabilir
                  İstisna ve Ek Ödemeler
                </p>
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                Net maaş yalnızca brüt ücrete bağlı değildir. Çalışanın vergi
                matrahı, gelir vergisi dilimi, ek kazançları, istisnaları ve
                bordroda yer alan özel kesintiler sonucu etkileyebilir.
              </p>
            </section>

            <section id="brutten-nete" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Brüt Maaştan Net Maaş Nasıl Hesaplanır?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brüt maaştan net maaşa ulaşmak için önce çalışanın sigorta ve
                vergi matrahları belirlenir. Ardından ilgili primler ve vergiler
                hesaplanarak brüt tutardan düşülür.
              </p>

              <div className="mt-7 grid gap-5">
                <div className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      1
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Brüt ücret belirlenir
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        Aylık brüt maaş ile prime tabi ek ödemeler tespit edilir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      2
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Sigorta kesintileri hesaplanır
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        SGK çalışan primi ve işsizlik sigortası çalışan payı,
                        geçerli matrah üzerinden hesaplanır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      3
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Vergi matrahı bulunur
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        Gelir vergisine esas tutar, yürürlükteki mevzuata göre
                        belirlenir.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      4
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Vergiler hesaplanır
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        Gelir vergisi ve uygulanabilen diğer vergi kesintileri
                        hesaplanır.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-700">
                      5
                    </span>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        Net ödeme bulunur
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        Toplam kesintiler brüt kazançtan çıkarılır. Varsa net
                        ödemeye dahil edilen ek ödemeler eklenir.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="maas-kesintileri" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Maaş Kesintileri Nelerdir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Maaştan yapılan kesintiler çalışanın statüsüne, kazancına ve
                yürürlükteki mevzuata göre farklılık gösterebilir. Bordrolarda
                sık karşılaşılan temel kesintiler şunlardır:
              </p>

              <div className="mt-7 grid gap-5">
                {deductionItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
                        <ReceiptText size={21} aria-hidden="true" />
                      </div>

                      <div>
                        <h3 className="font-bold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
                    Vergi oranları, istisnalar, prim sınırları ve diğer bordro
                    kuralları zaman içinde değişebilir. Kesin hesaplama için
                    güncel resmî düzenlemeler ve bordro bilgileri esas
                    alınmalıdır.
                  </p>
                </div>
              </div>
            </section>

            <section id="ornek-hesaplama" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Örnek Maaş Hesaplaması
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Aşağıdaki örnek yalnızca hesaplama mantığını göstermek için
                hazırlanmıştır. Kullanılan rakamlar güncel yasal oranları veya
                gerçek bir bordroyu temsil etmez.
              </p>

              <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[620px] text-left">
                    <thead className="bg-slate-100 text-slate-900">
                      <tr>
                        <th className="px-5 py-4 font-semibold">Kalem</th>
                        <th className="px-5 py-4 font-semibold">
                          Örnek Tutar
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200 text-slate-600">
                      <tr>
                        <td className="px-5 py-4 font-medium text-slate-900">
                          Brüt maaş
                        </td>
                        <td className="px-5 py-4">40.000 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">
                          Örnek SGK çalışan primi
                        </td>
                        <td className="px-5 py-4">5.600 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">
                          Örnek işsizlik sigortası primi
                        </td>
                        <td className="px-5 py-4">400 TL</td>
                      </tr>

                      <tr>
                        <td className="px-5 py-4">
                          Örnek vergi ve diğer kesintiler
                        </td>
                        <td className="px-5 py-4">4.000 TL</td>
                      </tr>

                      <tr className="bg-blue-50">
                        <td className="px-5 py-4 font-bold text-blue-900">
                          Örnek net maaş
                        </td>
                        <td className="px-5 py-4 font-bold text-blue-900">
                          30.000 TL
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                <p className="font-semibold text-blue-900">
                  Örnek Net Maaş = 40.000 − 5.600 − 400 − 4.000
                </p>

                <p className="mt-3 text-xl font-bold text-blue-950">
                  Örnek sonuç: 30.000 TL
                </p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Gerçek bordroda gelir vergisi matrahı, istisnalar, prim
                tavanları, ek ödemeler ve özel kesintiler nedeniyle farklı bir
                sonuç oluşabilir.
              </p>
            </section>

            <section id="netten-brute" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Net Maaştan Brüt Maaş Hesaplanabilir mi?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Net maaştan yaklaşık brüt maaş hesabı yapılabilir. Ancak işlem,
                brütten nete hesaplamaya göre daha karmaşıktır. Bunun nedeni
                kesintilerin sabit bir tutar olmaması ve bazı kesintilerin
                brüt ücret ile vergi matrahına bağlı olarak değişmesidir.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Doğru sonuca ulaşmak için çalışanın gelir vergisi dilimi,
                kümülatif vergi matrahı, sigorta durumu, istisnaları, ek
                ödemeleri ve diğer bordro bilgileri bilinmelidir.
              </p>

              <div className="mt-6 rounded-2xl bg-slate-100 p-6">
                <h3 className="font-bold text-slate-900">
                  Netten brüte hesaplamada gereken bilgiler
                </h3>

                <ul className="mt-4 space-y-3 text-slate-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>Hedeflenen net ücret</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>İlgili ay ve yıl</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>Kümülatif gelir vergisi matrahı</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>Ek ödeme ve kesintiler</span>
                  </li>

                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />
                    <span>Uygulanabilecek istisnalar</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="maas-neden-degisir" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Net Maaş Neden Aylar İçinde Değişebilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Brüt maaş sabit olsa bile net maaş her ay aynı kalmayabilir.
                Bunun en yaygın nedenlerinden biri kümülatif gelir vergisi
                matrahının yıl boyunca artmasıdır.
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Vergi dilimi değişikliği
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Biriken vergi matrahı belirli sınırları geçtiğinde
                    uygulanacak gelir vergisi oranı değişebilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-blue-600 p-7 text-white">
                  <h3 className="text-xl font-bold">
                    Ek kazanç ve kesintiler
                  </h3>

                  <p className="mt-4 leading-7 text-blue-100">
                    Prim, ikramiye, fazla mesai, avans veya özel kesintiler net
                    ödeme tutarını artırabilir ya da azaltabilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Eksik çalışma günleri
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Ücretsiz izin, işe giriş veya işten çıkış tarihi gibi
                    durumlar aylık ücret hesabını etkileyebilir.
                  </p>
                </div>

                <div className="rounded-3xl bg-slate-100 p-7">
                  <h3 className="text-xl font-bold text-slate-900">
                    Mevzuat değişiklikleri
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Vergi tarifeleri, istisnalar ve prim uygulamalarındaki
                    güncellemeler net ücreti değiştirebilir.
                  </p>
                </div>
              </div>
            </section>

            <section id="bordro" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Maaş Bordrosunda Neler Bulunur?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Maaş bordrosu, çalışanın ücret hesaplamasının ayrıntılarını
                gösteren belgedir. Bordro içeriği işyerine ve çalışanın
                durumuna göre farklılaşabilse de genellikle şu bilgiler yer
                alır:
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Çalışanın kimlik ve işyeri bilgileri",
                  "Brüt ücret ve çalışma gün sayısı",
                  "Fazla mesai, prim ve ikramiyeler",
                  "SGK ve işsizlik sigortası kesintileri",
                  "Gelir vergisi ve vergi matrahı",
                  "Diğer özel kesintiler",
                  "Toplam kazanç ve toplam kesinti",
                  "Ödenecek net ücret",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-slate-100 p-5"
                  >
                    <CheckCircle2
                      size={21}
                      className="mt-1 shrink-0 text-blue-600"
                      aria-hidden="true"
                    />

                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-slate-900">
                Maaş Hesaplanırken Sık Yapılan Hatalar
              </h2>

              <div className="mt-6 space-y-4">
                {[
                  "İş teklifindeki ücretin brüt mü yoksa net mi olduğunu kontrol etmemek.",
                  "Her ay aynı gelir vergisi kesintisinin uygulanacağını varsaymak.",
                  "Prim, ikramiye ve fazla mesai ödemelerini hesaplamaya dahil etmemek.",
                  "İşveren maliyeti ile çalışanın brüt maaşını aynı tutar sanmak.",
                  "Vergi istisnaları ve özel kesintileri göz ardı etmek.",
                  "Güncel olmayan oranlarla kesin sonuç elde edildiğini düşünmek.",
                  "Netten brüte dönüşümde yalnızca sabit bir katsayı kullanmak.",
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
                Brüt ve Net Maaşınızı Hesaplayın
              </h2>

              <p className="mt-4 leading-8 text-blue-100">
                Maaş bilgilerinizi girerek brüt ücret, tahmini kesintiler ve
                yaklaşık net maaş sonucunu saniyeler içinde görüntüleyin.
              </p>

              <Link
                href="/hesaplamalar/maas-hesaplama"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
              >
                Maaş Hesaplama Aracını Aç
                <ArrowRight size={19} aria-hidden="true" />
              </Link>

              <p className="mt-5 text-sm leading-6 text-blue-100">
                Hesaplama sonuçları genel bilgilendirme amacıyla sunulur.
                Kesin ücret tutarı için güncel mevzuat ve resmî maaş bordrosu
                esas alınmalıdır.
              </p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}