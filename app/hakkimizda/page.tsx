import type { Metadata } from "next";
import { Calculator, ShieldCheck, Sparkles, Target } from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "HesapRehberi'nin amacı, sunduğu hesaplama araçları ve kullanıcılarına sağladığı faydalar hakkında bilgi edinin.",
  alternates: {
    canonical: "/hakkimizda",
  },
  openGraph: {
    title: "Hakkımızda | HesapRehberi",
    description:
      "HesapRehberi'nin amacı ve ücretsiz hesaplama araçları hakkında bilgi edinin.",
    url: "/hakkimizda",
    type: "website",
  },
};

const features = [
  {
    title: "Kolay Kullanım",
    description:
      "Karmaşık işlemleri sade formlar ve anlaşılır sonuçlarla herkes için kolaylaştırıyoruz.",
    icon: Calculator,
  },
  {
    title: "Güvenilir Yaklaşım",
    description:
      "Hesaplamalarda standart matematiksel formüller kullanıyor ve yaklaşık sonuçları açıkça belirtiyoruz.",
    icon: ShieldCheck,
  },
  {
    title: "Sürekli Gelişim",
    description:
      "Yeni araçlar, daha iyi açıklamalar ve kullanıcı deneyimi iyileştirmeleri üzerinde çalışıyoruz.",
    icon: Sparkles,
  },
];

export default function HakkimizdaPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Hakkımızda",
            },
          ]}
        />

        <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white shadow-xl md:p-14">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
              HesapRehberi
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Hesaplamaları herkes için daha kolay hale getiriyoruz.
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              HesapRehberi; finans, vergi, maaş, kredi, döviz ve günlük hayatta
              ihtiyaç duyulan hesaplamaları sade, hızlı ve ücretsiz araçlarla
              sunmak amacıyla geliştirilen bir platformdur.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Icon size={27} />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Target size={24} />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">
                Amacımız
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Kullanıcıların farklı sitelerde zaman kaybetmeden ihtiyaç
                duydukları hesaplama araçlarına tek bir platformdan
                ulaşabilmesini sağlamak istiyoruz.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Hesaplama sonuçları genel bilgi amacı taşır. Finansal, vergisel
                veya hukuki kararlar verilmeden önce resmi kaynakların ve uzman
                görüşünün dikkate alınması gerekir.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}