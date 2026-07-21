"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  Check,
  Clipboard,
  Info,
  Percent,
  RefreshCcw,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

const quickRates = [10, 25, 50, 75, 100];
const quickAmounts = [1000, 5000, 10000, 25000];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function parseNumber(value: string): number {
  const normalizedValue = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[₺%]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatInputValue(
  value: string,
  maximumFractionDigits = 2,
): string {
  const cleanedValue = value.replace(/[^\d,]/g, "");
  const firstCommaIndex = cleanedValue.indexOf(",");

  const integerPart =
    firstCommaIndex === -1
      ? cleanedValue
      : cleanedValue.slice(0, firstCommaIndex);

  const decimalPart =
    firstCommaIndex === -1
      ? ""
      : cleanedValue
          .slice(firstCommaIndex + 1)
          .replace(/,/g, "")
          .slice(0, maximumFractionDigits);

  const normalizedInteger = integerPart.replace(/^0+(?=\d)/, "");

  const formattedInteger = normalizedInteger
    ? Number(normalizedInteger).toLocaleString("tr-TR")
    : "";

  if (firstCommaIndex !== -1) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

export default function EnflasyonCalculator() {
  const [amount, setAmount] = useState("10.000");
  const [inflationRate, setInflationRate] = useState("50");
  const [copied, setCopied] = useState(false);

  const calculation = useMemo(() => {
    const amountValue = Math.max(parseNumber(amount), 0);
    const rateValue = Math.max(parseNumber(inflationRate), 0);

    const inflationMultiplier = 1 + rateValue / 100;

    const equivalentAmount =
      inflationMultiplier > 0
        ? amountValue * inflationMultiplier
        : 0;

    const priceIncreaseAmount =
      equivalentAmount - amountValue;

    const purchasingPower =
      inflationMultiplier > 0
        ? amountValue / inflationMultiplier
        : 0;

    const purchasingPowerLoss =
      amountValue - purchasingPower;

    const purchasingPowerLossRate =
      amountValue > 0
        ? (purchasingPowerLoss / amountValue) * 100
        : 0;

    const requiredIncreaseRate =
      amountValue > 0
        ? (priceIncreaseAmount / amountValue) * 100
        : 0;

    const isValid = amountValue > 0 && rateValue >= 0;

    return {
      amountValue,
      rateValue,
      inflationMultiplier,
      equivalentAmount,
      priceIncreaseAmount,
      purchasingPower,
      purchasingPowerLoss,
      purchasingPowerLossRate,
      requiredIncreaseRate,
      isValid,
    };
  }, [amount, inflationRate]);

  function handleQuickAmount(value: number) {
    setAmount(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleQuickRate(value: number) {
    setInflationRate(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleReset() {
    setAmount("10.000");
    setInflationRate("50");
    setCopied(false);
  }

  async function handleCopy() {
    if (!calculation.isValid) {
      return;
    }

    const copyText = [
      "HesapRehberi Enflasyon Hesaplama Sonucu",
      `Başlangıç tutarı: ${currencyFormatter.format(
        calculation.amountValue,
      )}`,
      `Enflasyon oranı: %${percentageFormatter.format(
        calculation.rateValue,
      )}`,
      `Aynı değeri korumak için gereken tutar: ${currencyFormatter.format(
        calculation.equivalentAmount,
      )}`,
      `Fiyat artışı: ${currencyFormatter.format(
        calculation.priceIncreaseAmount,
      )}`,
      `Paranın yeni satın alma gücü: ${currencyFormatter.format(
        calculation.purchasingPower,
      )}`,
      `Satın alma gücü kaybı: ${currencyFormatter.format(
        calculation.purchasingPowerLoss,
      )}`,
      `Satın alma gücü kayıp oranı: %${percentageFormatter.format(
        calculation.purchasingPowerLossRate,
      )}`,
      "Not: Sonuçlar kullanıcı tarafından girilen enflasyon oranına göre yaklaşık olarak hesaplanmıştır.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="hesaplama-araci"
      aria-labelledby="inflation-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
    >
      <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 px-6 py-7 text-white md:px-9 md:py-8">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <TrendingUp className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Enflasyon etkisini saniyeler içinde hesaplayın
              </div>

              <h2
                id="inflation-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Enflasyon Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Paranızın enflasyon sonrasındaki yaklaşık değerini,
                satın alma gücünü ve oluşan değer kaybını görün.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Ücretsiz kullanım
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="inflation-amount"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Başlangıç tutarı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Türk lirası
              </span>
            </div>

            <div className="relative">
              <input
                id="inflation-amount"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={amount}
                onChange={(event) => {
                  setAmount(
                    formatInputValue(event.target.value, 2),
                  );
                  setCopied(false);
                }}
                placeholder="Örneğin 10.000"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                ₺
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {quickAmounts.map((quickAmount) => {
                const isSelected =
                  calculation.amountValue === quickAmount;

                return (
                  <button
                    key={quickAmount}
                    type="button"
                    onClick={() =>
                      handleQuickAmount(quickAmount)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {quickAmount.toLocaleString("tr-TR")} ₺
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="inflation-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <Percent
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Enflasyon oranı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Yüzde olarak
              </span>
            </div>

            <div className="relative">
              <input
                id="inflation-rate"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={inflationRate}
                onChange={(event) => {
                  setInflationRate(
                    formatInputValue(event.target.value, 2),
                  );
                  setCopied(false);
                }}
                placeholder="Örneğin 50"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                %
              </span>
            </div>

            <div className="mt-3 grid grid-cols-5 gap-2">
              {quickRates.map((quickRate) => {
                const isSelected =
                  calculation.rateValue === quickRate;

                return (
                  <button
                    key={quickRate}
                    type="button"
                    onClick={() => handleQuickRate(quickRate)}
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    %{quickRate}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold text-blue-950">
                  Hesaplama nasıl yorumlanır?
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-900">
                  Enflasyon oranı %{percentageFormatter.format(
                    calculation.rateValue,
                  )} olduğunda, bugün{" "}
                  {currencyFormatter.format(
                    calculation.amountValue,
                  )}{" "}
                  değerindeki bir ürünün aynı değeri koruyan yaklaşık
                  fiyatı{" "}
                  {currencyFormatter.format(
                    calculation.equivalentAmount,
                  )}{" "}
                  olur.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <ShoppingBasket
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <p className="text-sm leading-6 text-amber-950">
                Gerçek fiyat değişimleri gıda, konut, ulaşım ve
                diğer harcama gruplarında birbirinden farklı
                olabilir. Sonuç genel bir matematiksel tahmindir.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            Hesaplamayı sıfırla
          </button>
        </div>

        <div
          aria-live="polite"
          className="relative overflow-hidden bg-white p-6 md:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Enflasyon sonucu
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Paranızın yaklaşık yeni karşılığı
                </h3>
              </div>

              <span className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                %{percentageFormatter.format(
                  calculation.rateValue,
                )}{" "}
                enflasyon
              </span>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Banknote className="h-4 w-4" aria-hidden="true" />
                Aynı değeri korumak için gereken tutar
              </div>

              <p className="mt-5 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(
                  calculation.equivalentAmount,
                )}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <ArrowUpRight
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                />
                Başlangıç tutarından{" "}
                {currencyFormatter.format(
                  calculation.priceIncreaseAmount,
                )}{" "}
                daha yüksek.
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-rose-800">
                    Satın alma gücü
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <TrendingDown
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-rose-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.purchasingPower,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-rose-700">
                  Mevcut paranın enflasyon sonrasındaki yaklaşık
                  reel değeri.
                </p>
              </article>

              <article className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-amber-800">
                    Alım gücü kaybı
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <ArrowDownRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-amber-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.purchasingPowerLoss,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-amber-700">
                  Yaklaşık %
                  {percentageFormatter.format(
                    calculation.purchasingPowerLossRate,
                  )}{" "}
                  satın alma gücü kaybı.
                </p>
              </article>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <h4 className="font-bold text-slate-900">
                  Hesaplama özeti
                </h4>
              </div>

              <dl className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Başlangıç tutarı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.amountValue,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Enflasyon oranı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.rateValue,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Fiyat artış tutarı
                  </dt>

                  <dd className="text-right font-bold text-emerald-700">
                    +
                    {currencyFormatter.format(
                      calculation.priceIncreaseAmount,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Gerekli nominal artış
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.requiredIncreaseRate,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Enflasyon çarpanı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {numberFormatter.format(
                      calculation.inflationMultiplier,
                    )}{" "}
                    kat
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">
                Kullanılan formüller
              </p>

              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <p>
                  Gelecekteki değer = Başlangıç tutarı × (1 +
                  enflasyon oranı)
                </p>

                <p>
                  Satın alma gücü = Başlangıç tutarı ÷ (1 +
                  enflasyon oranı)
                </p>

                <p>
                  Alım gücü kaybı = Başlangıç tutarı − satın alma
                  gücü
                </p>
              </div>
            </div>

            <button
              type="button"
              disabled={!calculation.isValid}
              onClick={handleCopy}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Sonuç kopyalandı
                </>
              ) : (
                <>
                  <Clipboard
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Sonucu kopyala
                </>
              )}
            </button>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                aria-hidden="true"
              />

              <p className="text-xs leading-5 text-slate-500">
                Hesaplama resmi veya güncel enflasyon verisini
                otomatik olarak kullanmaz. Sonuç yalnızca yazdığınız
                oran üzerinden matematiksel olarak oluşturulur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}