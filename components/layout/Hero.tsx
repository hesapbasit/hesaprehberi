import Link from "next/link";

import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Calculator,
  CalendarDays,
  Check,
  ChevronRight,
  CirclePercent,
  CreditCard,
  Landmark,
  ReceiptText,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

import SearchBox from "@/components/ui/SearchBox";

const popularCalculators = [
  {
    title: "Kredi",
    href: "/hesaplamalar/kredi-hesaplama",
    icon: CreditCard,
  },
  {
    title: "KDV",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Faiz",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: CirclePercent,
  },
  {
    title: "Maaş",
    href: "/hesaplamalar/maas-hesaplama",
    icon: Banknote,
  },
  {
    title: "Döviz",
    href: "/hesaplamalar/doviz-hesaplama",
    icon: TrendingUp,
  },
  {
    title: "Tarih",
    href: "/hesaplamalar",
    icon: CalendarDays,
  },
];

const calculatorPreview = [
  {
    label: "Kredi tutarı",
    value: "250.000 TL",
  },
  {
    label: "Vade",
    value: "24 Ay",
  },
  {
    label: "Aylık faiz",
    value: "%3,49",
  },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white">
      {/* Arka plan */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(37, 99, 235, 0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.045) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-100 opacity-70"
        aria-hidden="true"
        style={{
          filter: "blur(100px)",
        }}
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-indigo-100 opacity-60"
        aria-hidden="true"
        style={{
          filter: "blur(90px)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.06fr_0.94fr] lg:gap-12 xl:gap-20">
          {/* Sol alan */}
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4" aria-hidden="true" />

              <span>Türkiye&apos;nin ücretsiz hesaplama platformu</span>
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-7xl">
              İhtiyacınız olan
              <span className="block text-blue-700">
                tüm hesaplamalar
              </span>
              tek platformda
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0 lg:text-xl lg:leading-9">
              Kredi, faiz, KDV, maaş, vergi, konut, sağlık ve günlük yaşam
              hesaplamalarına saniyeler içinde ulaşın. Üyelik gerektirmeden,
              tamamen ücretsiz kullanın.
            </p>

            {/* Arama */}
            <div className="mx-auto mt-9 w-full max-w-2xl lg:mx-0">
              <div className="rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10">
                <SearchBox />
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 lg:justify-start">
                <Search className="h-4 w-4 text-blue-600" aria-hidden="true" />

                <span>
                  Örnek: kredi, KDV, maaş, yaş veya faiz
                </span>
              </div>
            </div>

            {/* Hızlı bağlantılar */}
            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-500">
                Popüler hesaplamalar
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {popularCalculators.map((calculator) => {
                  const Icon = calculator.icon;

                  return (
                    <Link
                      key={calculator.title}
                      href={calculator.href}
                      className="group inline-flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
                    >
                      <Icon
                        className="h-4 w-4 text-slate-400 transition group-hover:text-blue-600"
                        aria-hidden="true"
                      />

                      {calculator.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/hesaplamalar"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-700/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
              >
                Hesaplamaları keşfet

                <ArrowRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/blog"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
              >
                Rehberleri incele

                <ChevronRight
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>

            {/* Güven satırı */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </div>

                Ücretsiz kullanım
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </div>

                Üyelik gerektirmez
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </div>

                Mobil uyumlu
              </div>
            </div>
          </div>

          {/* Sağ görsel alan */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-blue-200 opacity-40"
              aria-hidden="true"
              style={{
                filter: "blur(55px)",
              }}
            />

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/15 sm:p-5">
              {/* Uygulama üst çubuğu */}
              <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-md shadow-blue-700/20">
                    <Calculator className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-950">
                      HesapRehberi
                    </p>

                    <p className="mt-0.5 text-xs text-slate-500">
                      Akıllı hesaplama merkezi
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />

                  Kullanıma hazır
                </div>
              </div>

              {/* Hesaplama kartı */}
              <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-white sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100">
                      <Landmark className="h-3.5 w-3.5" aria-hidden="true" />

                      Finans
                    </div>

                    <h2 className="mt-4 text-2xl font-bold tracking-tight">
                      Kredi Hesaplama
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Taksit ve toplam geri ödeme tutarını hesaplayın.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <WalletCards className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {calculatorPreview.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-3.5"
                    >
                      <p className="text-xs text-slate-400">
                        {item.label}
                      </p>

                      <p className="mt-2 text-sm font-bold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-white p-5 text-slate-950">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Tahmini aylık taksit
                      </p>

                      <p className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                        17.438 TL
                      </p>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                      <TrendingUp className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[68%] rounded-full bg-blue-600" />
                  </div>

                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>Ana para</span>
                    <span>Faiz ve masraflar</span>
                  </div>
                </div>
              </div>

              {/* Alt kartlar */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                      <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Güvenli kullanım
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Kişisel bilgi gerekmez
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        Anlaşılır sonuçlar
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Detaylı hesaplama özeti
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yüzen kart */}
            <div className="absolute -bottom-7 -left-4 hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10 sm:block lg:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <CirclePercent className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-500">
                    Hızlı erişim
                  </p>

                  <p className="mt-1 text-sm font-bold text-slate-950">
                    50+ ücretsiz araç
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 -top-7 hidden rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-xl shadow-blue-900/10 sm:block lg:-right-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white">
                  <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <p className="text-xs font-medium text-blue-600">
                    HesapRehberi
                  </p>

                  <p className="mt-1 text-sm font-bold text-blue-950">
                    Her zaman ücretsiz
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}