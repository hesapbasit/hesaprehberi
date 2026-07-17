import type { Metadata } from "next";
import Link from "next/link";

import BodyFatCalculator from "@/components/calculators/BodyFatCalculator";

const pageUrl =
  "https://hesaprehberi.vercel.app/hesaplamalar/vucut-yag-orani-hesaplama";

export const metadata: Metadata = {
  title: "Vücut Yağ Oranı Hesaplama | HesapRehberi",
  description:
    "ABD Donanması yöntemiyle çevre ölçülerinize göre tahmini vücut yağ oranınızı ücretsiz hesaplayın.",
  keywords: [
    "vücut yağ oranı hesaplama",
    "body fat calculator",
    "yağ oranı hesaplama",
    "abd donanması yöntemi",
    "vücut yağ yüzdesi",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Vücut Yağ Oranı Hesaplama",
    description:
      "Çevre ölçülerinize göre tahmini vücut yağ oranınızı hesaplayın.",
    url: pageUrl,
    type: "website",
    locale: "tr_TR",
    siteName: "HesapRehberi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vücut Yağ Oranı Hesaplama",
    description:
      "ABD Donanması yöntemi ile ücretsiz vücut yağ oranı hesaplayın.",
  },
};

const faqItems = [
  {
    question: "Vücut yağ oranı nedir?",
    answer:
      "Vücudunuzdaki toplam yağ miktarının toplam vücut ağırlığına oranıdır.",
  },
  {
    question: "İdeal yağ oranı kaç olmalıdır?",
    answer:
      "İdeal değer yaşa ve cinsiyete göre değişir. Bu araç genel referans amaçlı sonuç üretir.",
  },
  {
    question: "Bu hesaplama doğru mudur?",
    answer:
      "ABD Donanması yöntemi oldukça yaygın kullanılan bir tahmin yöntemidir ancak profesyonel ölçüm cihazlarının yerini tutmaz.",
  },
  {
    question: "Kaslı kişilerde sonuç değişir mi?",
    answer:
      "Evet. Kas kütlesi yüksek kişilerde farklı ölçüm yöntemleri daha doğru sonuç verebilir.",
  },
];

export default function BodyFatPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600">
              Ana Sayfa
            </Link>

            <span>/</span>

            <Link
              href="/hesaplamalar"
              className="hover:text-blue-600"
            >
              Hesaplamalar
            </Link>

            <span>/</span>

            <span className="font-medium text-slate-700">
              Vücut Yağ Oranı Hesaplama
            </span>
          </nav>
        </div>
      </section>

      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Sağlık Hesaplamaları
          </span>

          <h1 className="mt-6 text-5xl font-bold text-slate-900">
            Vücut Yağ Oranı Hesaplama
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Boy, boyun, bel ve gerekiyorsa kalça çevrenizi girerek
            tahmini vücut yağ oranınızı saniyeler içerisinde hesaplayın.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <BodyFatCalculator />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20">
        <article className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-bold text-slate-900">
            Vücut Yağ Oranı Nedir?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Vücut yağ oranı, toplam vücut ağırlığınızın yüzde kaçının
            yağ dokusundan oluştuğunu gösterir. Tek başına kilo
            değerinden çok daha anlamlı bilgiler sağlayabilir.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Hesaplama Nasıl Yapılır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Bu hesaplayıcı ABD Donanması (US Navy) tarafından geliştirilen
            çevre ölçümü yöntemini kullanır. Boy, boyun ve bel ölçüsü,
            kadınlarda ise bunlara ek olarak kalça çevresi kullanılır.
          </p>

          <h2 className="mt-12 text-3xl font-bold text-slate-900">
            Sonuçlar Nasıl Yorumlanmalıdır?
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Sonuçlar yalnızca yaklaşık değerlerdir. Profesyonel analiz
            cihazları ve sağlık uzmanlarının değerlendirmesi daha doğru
            sonuçlar verebilir.
          </p>

          <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <strong className="text-amber-900">
              Önemli Bilgilendirme
            </strong>

            <p className="mt-3 leading-7 text-amber-800">
              Bu araç yalnızca bilgilendirme amaçlıdır. Tıbbi tanı veya
              tedavi amacıyla kullanılmamalıdır.
            </p>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="text-center text-3xl font-bold text-slate-900">
            İlgili Hesaplamalar
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/hesaplamalar/vki-hesaplama"
              className="rounded-2xl border p-6 hover:border-emerald-400"
            >
              VKİ Hesaplama
            </Link>

            <Link
              href="/hesaplamalar/ideal-kilo-hesaplama"
              className="rounded-2xl border p-6 hover:border-emerald-400"
            >
              İdeal Kilo Hesaplama
            </Link>

            <Link
              href="/hesaplamalar/kalori-ihtiyaci-hesaplama"
              className="rounded-2xl border p-6 hover:border-emerald-400"
            >
              Günlük Kalori Hesaplama
            </Link>

            <Link
              href="/hesaplamalar/bazal-metabolizma-hesaplama"
              className="rounded-2xl border p-6 hover:border-emerald-400"
            >
              Bazal Metabolizma
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="rounded-3xl bg-white p-10 shadow-sm">
          <h2 className="text-center text-4xl font-bold text-slate-900">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-10 space-y-5">
            {faqItems.map((faq) => (
              <details
                key={faq.question}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <summary className="cursor-pointer font-bold">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}