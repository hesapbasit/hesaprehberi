import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Calculator,
  CheckCircle2,
  Clock3,
  FileText,
  LockKeyhole,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

import Hero from "@/components/layout/Hero";
import CategoryCard from "@/components/ui/CategoryCard";
import HomeFaq from "@/components/ui/HomeFaq";
import LatestArticles from "@/components/ui/LatestArticles";
import { featuredCalculators } from "@/lib/calculators";

const platformFeatures = [
  {
    title: "Hızlı Sonuçlar",
    description:
      "Gerekli bilgileri girerek hesaplama sonuçlarını saniyeler içerisinde görüntüleyebilirsiniz.",
    icon: Zap,
  },
  {
    title: "Güvenilir Yaklaşım",
    description:
      "Araçlarımız yaygın kabul gören hesaplama yöntemleri ve standart formüller kullanılarak hazırlanır.",
    icon: ShieldCheck,
  },
  {
    title: "Mobil Uyumlu",
    description:
      "Hesaplama araçlarını telefon, tablet ve bilgisayar üzerinden rahatlıkla kullanabilirsiniz.",
    icon: Smartphone,
  },
  {
    title: "Üyelik Gerektirmez",
    description:
      "Hesaplama yapabilmek için kayıt olmanız veya kişisel bilgilerinizi paylaşmanız gerekmez.",
    icon: LockKeyhole,
  },
];

const platformHighlights = [
  {
    value: "50+",
    label: "Hesaplama aracı",
    icon: Calculator,
  },
  {
    value: "7/24",
    label: "Kesintisiz erişim",
    icon: Clock3,
  },
  {
    value: "%100",
    label: "Ücretsiz kullanım",
    icon: BadgeCheck,
  },
  {
    value: "Tek Platform",
    label: "Birçok farklı kategori",
    icon: Sparkles,
  },
];

const steps = [
  {
    number: "01",
    title: "Aracınızı bulun",
    description:
      "Arama alanını veya kategorileri kullanarak ihtiyacınız olan hesaplama aracına ulaşın.",
    icon: Search,
  },
  {
    number: "02",
    title: "Bilgileri girin",
    description:
      "Hesaplama için gerekli tutar, oran, süre veya diğer bilgileri ilgili alanlara yazın.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Sonucu görüntüleyin",
    description:
      "Hesaplama sonucunu ve varsa detaylı ödeme, oran veya karşılaştırma bilgilerini inceleyin.",
    icon: CheckCircle2,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <main className="overflow-hidden bg-slate-50">
        {/* Platform İstatistikleri */}
        <section
          aria-label="HesapRehberi platform bilgileri"
          className="relative z-10 mx-auto -mt-8 max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {platformHighlights.map((highlight, index) => {
              const Icon = highlight.icon;

              return (
                <div
                  key={highlight.label}
                  className={`relative flex items-center gap-4 p-6 sm:p-7 ${
                    index !== platformHighlights.length - 1
                      ? "border-b border-slate-200 sm:border-b-0 sm:border-r"
                      : ""
                  }`}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-xl font-bold tracking-tight text-slate-950">
                      {highlight.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {highlight.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Popüler Hesaplamalar */}
        <section className="relative py-24 sm:py-28">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-96 bg-gradient-to-b from-blue-50/80 to-transparent"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="size-4" aria-hidden="true" />
                En çok kullanılan araçlar
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Popüler hesaplamalara
                <span className="text-blue-700"> hızlıca ulaşın</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Finans, kredi, vergi, maaş, konut, tarih ve sağlık alanlarında
                sık kullanılan hesaplama araçlarını ücretsiz kullanın.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
              {featuredCalculators.map((calculator) => (
                <CategoryCard
                  key={calculator.href}
                  title={calculator.title}
                  icon={calculator.icon}
                  href={calculator.href}
                />
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/hesaplamalar"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-slate-950/15 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Tüm hesaplama araçları
                <ArrowRight
                  className="size-5 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Nasıl Çalışır */}
        <section className="border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  <Calculator className="size-4" aria-hidden="true" />
                  Kolay kullanım
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Üç basit adımda hesaplamanızı tamamlayın
                </h2>

                <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
                  Karmaşık işlemlerle uğraşmadan, ihtiyacınız olan hesaplamayı
                  kısa sürede tamamlayabilirsiniz.
                </p>

                <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-blue-700"
                      aria-hidden="true"
                    />

                    <p className="text-sm leading-7 text-blue-950">
                      Hesaplama araçlarına girdiğiniz bilgiler üyelik sistemiyle
                      ilişkilendirilmez. Sonuçlar doğrudan tarayıcınızda
                      hesaplanır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-5">
                {steps.map((step) => {
                  const Icon = step.icon;

                  return (
                    <article
                      key={step.number}
                      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5 sm:p-7"
                    >
                      <div
                        className="pointer-events-none absolute -right-4 -top-8 text-8xl font-black text-slate-200/60 transition group-hover:text-blue-100"
                        aria-hidden="true"
                      >
                        {step.number}
                      </div>

                      <div className="relative flex gap-5">
                        <div className="flex size-13 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/20">
                          <Icon className="size-6" aria-hidden="true" />
                        </div>

                        <div className="pr-10">
                          <h3 className="text-xl font-bold text-slate-950">
                            {step.title}
                          </h3>

                          <p className="mt-3 leading-7 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-14 shadow-2xl shadow-slate-950/20 sm:px-10 sm:py-16 lg:px-16">
              <div
                className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-blue-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute -bottom-32 right-0 size-80 rounded-full bg-indigo-600/30 blur-3xl"
                aria-hidden="true"
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />

              <div className="relative mx-auto max-w-3xl text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-blue-200">
                  <Calculator className="size-7" aria-hidden="true" />
                </div>

                <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  İhtiyacınız olan hesaplama tek bir yerde
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  Günlük hayatta ihtiyaç duyduğunuz hesaplama araçlarını
                  ücretsiz kullanın, sonuçları saniyeler içinde görüntüleyin.
                </p>

                <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                  <Link
                    href="/hesaplamalar"
                    className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Hesaplamaları keşfet
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>

                  <Link
                    href="/iletisim"
                    className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-3.5 font-semibold text-white transition duration-300 hover:border-white/40 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
                  >
                    Öneride bulun
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Son Blog Yazıları */}
        <LatestArticles />

        {/* Neden HesapRehberi */}
        <section className="relative border-y border-slate-200 bg-white py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                <BadgeCheck className="size-4" aria-hidden="true" />
                Neden HesapRehberi?
              </div>

              <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Hesaplama yapmanın daha kolay yolu
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Günlük hesaplamaları daha anlaşılır, erişilebilir ve hızlı hâle
                getiren kullanıcı odaklı bir platform.
              </p>
            </div>

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {platformFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-slate-900/5"
                  >
                    <div className="flex size-13 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-700 transition duration-300 group-hover:bg-blue-700 group-hover:text-white">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    <h3 className="mt-6 text-xl font-bold text-slate-950">
                      {feature.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sık Sorulan Sorular */}
        <HomeFaq />

        {/* Hakkımızda */}
        <section className="pb-28 pt-8 sm:pb-32 sm:pt-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-7 sm:p-10 lg:p-14">
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                  <FileText className="size-4" aria-hidden="true" />
                  HesapRehberi hakkında
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Karmaşık hesaplamaları daha anlaşılır hâle getiriyoruz
                </h2>

                <p className="mt-7 text-base leading-8 text-slate-600 sm:text-lg">
                  HesapRehberi; finans, vergi, maaş, alışveriş, tarih, konut ve
                  sağlık gibi günlük hayatta ihtiyaç duyulan alanlardaki
                  hesaplama araçlarını tek bir platformda sunar.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
                  Amacımız, kullanıcıların ihtiyaç duyduğu sonuçlara gereksiz
                  karmaşıklık yaşamadan ulaşmasını sağlamaktır. Araçların
                  yanında yer alan açıklamalar ve rehberler, hesaplama
                  sonuçlarının daha kolay anlaşılmasına yardımcı olur.
                </p>

                <div className="mt-8">
                  <Link
                    href="/hakkimizda"
                    className="group inline-flex items-center gap-2 font-semibold text-blue-700 transition hover:text-blue-900"
                  >
                    HesapRehberi&apos;ni daha yakından tanıyın
                    <ArrowRight
                      className="size-5 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>

              <div className="relative flex min-h-80 items-center bg-slate-950 p-8 sm:p-10 lg:p-12">
                <div
                  className="pointer-events-none absolute inset-0 opacity-20"
                  aria-hidden="true"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.45) 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />

                <div
                  className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-blue-600/40 blur-3xl"
                  aria-hidden="true"
                />

                <div className="relative">
                  <ShieldCheck
                    className="size-12 text-blue-300"
                    aria-hidden="true"
                  />

                  <h3 className="mt-7 text-2xl font-bold text-white">
                    Önemli bilgilendirme
                  </h3>

                  <p className="mt-5 leading-8 text-slate-300">
                    Hesaplama sonuçları genel bilgilendirme amacı taşır.
                    Finansal, vergisel, hukuki veya sağlıkla ilgili önemli
                    kararlarda resmî kaynakların ve alanında uzman kişilerin
                    değerlendirmeleri dikkate alınmalıdır.
                  </p>

                  <div className="mt-7 flex items-center gap-3 text-sm font-medium text-blue-200">
                    <CheckCircle2 className="size-5" aria-hidden="true" />
                    Şeffaf ve anlaşılır sonuçlar
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}