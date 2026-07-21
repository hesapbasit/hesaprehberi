"use client";

import {
  BadgePercent,
  Banknote,
  CalendarDays,
  Check,
  CircleDollarSign,
  Clipboard,
  Coins,
  CreditCard,
  Info,
  Landmark,
  Percent,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

const quickAmounts = [50_000, 100_000, 250_000, 500_000];
const maturityOptions = [3, 6, 12, 18, 24, 36, 48, 60];
const quickRates = [1.99, 2.49, 3.49, 4.49];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function parseCurrencyInput(value: string): number {
  const normalizedValue = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[₺]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function parseDecimalInput(value: string): number {
  const normalizedValue = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[%]/g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatCurrencyInput(value: string): string {
  const cleanedValue = value.replace(/[^\d,]/g, "");
  const commaIndex = cleanedValue.indexOf(",");

  const integerPart =
    commaIndex === -1
      ? cleanedValue
      : cleanedValue.slice(0, commaIndex);

  const decimalPart =
    commaIndex === -1
      ? ""
      : cleanedValue
          .slice(commaIndex + 1)
          .replace(/,/g, "")
          .slice(0, 2);

  const normalizedInteger = integerPart.replace(
    /^0+(?=\d)/,
    "",
  );

  const formattedInteger = normalizedInteger
    ? Number(normalizedInteger).toLocaleString("tr-TR")
    : "";

  if (commaIndex !== -1) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

function formatRateInput(value: string): string {
  const cleanedValue = value
    .replace(".", ",")
    .replace(/[^\d,]/g, "");

  const commaIndex = cleanedValue.indexOf(",");

  if (commaIndex === -1) {
    return cleanedValue.replace(/^0+(?=\d)/, "");
  }

  const integerPart = cleanedValue
    .slice(0, commaIndex)
    .replace(/^0+(?=\d)/, "");

  const decimalPart = cleanedValue
    .slice(commaIndex + 1)
    .replace(/,/g, "")
    .slice(0, 4);

  return `${integerPart || "0"},${decimalPart}`;
}

export default function KrediCalculator() {
  const [amount, setAmount] = useState("100.000");
  const [months, setMonths] = useState(12);
  const [monthlyRate, setMonthlyRate] =
    useState("3,49");
  const [copied, setCopied] = useState(false);

  const calculation = useMemo(() => {
    const principal = Math.max(
      parseCurrencyInput(amount),
      0,
    );

    const monthlyRateValue = Math.max(
      parseDecimalInput(monthlyRate),
      0,
    );

    const rate = monthlyRateValue / 100;

    const isValid =
      principal > 0 &&
      months > 0 &&
      monthlyRateValue >= 0;

    if (!isValid) {
      return {
        principal,
        monthlyRateValue,
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        interestRatio: 0,
        paymentToPrincipalRatio: 0,
        annualNominalRate: 0,
        firstMonthInterest: 0,
        firstMonthPrincipal: 0,
        lastMonthInterest: 0,
        lastMonthPrincipal: 0,
        remainingBalanceAfterHalf: 0,
        isValid: false,
      };
    }

    let monthlyPayment = 0;

    if (rate === 0) {
      monthlyPayment = principal / months;
    } else {
      const compoundFactor = Math.pow(
        1 + rate,
        months,
      );

      monthlyPayment =
        (principal * rate * compoundFactor) /
        (compoundFactor - 1);
    }

    const totalPayment = monthlyPayment * months;
    const totalInterest = Math.max(
      totalPayment - principal,
      0,
    );

    const interestRatio =
      principal > 0
        ? (totalInterest / principal) * 100
        : 0;

    const paymentToPrincipalRatio =
      principal > 0
        ? (totalPayment / principal) * 100
        : 0;

    const annualNominalRate = monthlyRateValue * 12;

    const firstMonthInterest = principal * rate;

    const firstMonthPrincipal = Math.max(
      monthlyPayment - firstMonthInterest,
      0,
    );

    let remainingBalance = principal;
    let lastMonthInterest = 0;
    let lastMonthPrincipal = 0;
    let remainingBalanceAfterHalf = principal;

    const halfwayMonth = Math.floor(months / 2);

    for (let month = 1; month <= months; month += 1) {
      const interestPayment =
        remainingBalance * rate;

      const principalPayment =
        rate === 0
          ? monthlyPayment
          : Math.min(
              monthlyPayment - interestPayment,
              remainingBalance,
            );

      remainingBalance = Math.max(
        remainingBalance - principalPayment,
        0,
      );

      if (month === halfwayMonth) {
        remainingBalanceAfterHalf = remainingBalance;
      }

      if (month === months) {
        lastMonthInterest = interestPayment;
        lastMonthPrincipal = principalPayment;
      }
    }

    return {
      principal,
      monthlyRateValue,
      monthlyPayment,
      totalPayment,
      totalInterest,
      interestRatio,
      paymentToPrincipalRatio,
      annualNominalRate,
      firstMonthInterest,
      firstMonthPrincipal,
      lastMonthInterest,
      lastMonthPrincipal,
      remainingBalanceAfterHalf,
      isValid: true,
    };
  }, [amount, monthlyRate, months]);

  function handleQuickAmount(value: number) {
    setAmount(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleMaturityChange(value: number) {
    setMonths(value);
    setCopied(false);
  }

  function handleQuickRate(value: number) {
    setMonthlyRate(
      value.toLocaleString("tr-TR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    );

    setCopied(false);
  }

  function handleReset() {
    setAmount("100.000");
    setMonths(12);
    setMonthlyRate("3,49");
    setCopied(false);
  }

  async function handleCopy() {
    if (!calculation.isValid) {
      return;
    }

    const copyText = [
      "HesapRehberi Kredi Hesaplama Sonucu",
      `Kredi tutarı: ${currencyFormatter.format(
        calculation.principal,
      )}`,
      `Vade: ${months} ay`,
      `Aylık faiz oranı: %${percentageFormatter.format(
        calculation.monthlyRateValue,
      )}`,
      `Aylık taksit: ${currencyFormatter.format(
        calculation.monthlyPayment,
      )}`,
      `Toplam faiz: ${currencyFormatter.format(
        calculation.totalInterest,
      )}`,
      `Toplam geri ödeme: ${currencyFormatter.format(
        calculation.totalPayment,
      )}`,
      `Faiz yükü oranı: %${percentageFormatter.format(
        calculation.interestRatio,
      )}`,
      "Not: Tahsis ücreti, sigorta, vergi ve bankaya özgü diğer masraflar dahil değildir.",
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
      aria-labelledby="loan-calculator-title"
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
              <Landmark
                className="h-6 w-6"
                aria-hidden="true"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Eşit taksitli kredi hesaplaması
              </div>

              <h2
                id="loan-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Kredi Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Kredi tutarı, vade ve aylık faiz oranını
                girerek aylık taksiti, toplam faiz yükünü ve
                toplam geri ödemeyi hesaplayın.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            <ShieldCheck
              className="h-4 w-4"
              aria-hidden="true"
            />
            Ücretsiz kullanım
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="loan-amount"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Kredi tutarı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Kullanılacak anapara
              </span>
            </div>

            <div className="relative">
              <input
                id="loan-amount"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={amount}
                onChange={(event) => {
                  setAmount(
                    formatCurrencyInput(
                      event.target.value,
                    ),
                  );

                  setCopied(false);
                }}
                placeholder="Örneğin 100.000"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                ₺
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {quickAmounts.map((quickAmount) => {
                const isSelected =
                  calculation.principal === quickAmount;

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
                htmlFor="loan-maturity"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <CalendarDays
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Kredi vadesi
              </label>

              <span className="text-xs font-medium text-slate-500">
                Toplam taksit sayısı
              </span>
            </div>

            <select
              id="loan-maturity"
              value={months}
              onChange={(event) =>
                handleMaturityChange(
                  Number(event.target.value),
                )
              }
              className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 text-lg font-bold text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              {maturityOptions.map((maturity) => (
                <option
                  key={maturity}
                  value={maturity}
                >
                  {maturity} ay vade
                </option>
              ))}
            </select>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {[6, 12, 24, 36].map((maturity) => {
                const isSelected = months === maturity;

                return (
                  <button
                    key={maturity}
                    type="button"
                    onClick={() =>
                      handleMaturityChange(maturity)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {maturity} ay
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="monthly-interest-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <Percent
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Aylık faiz oranı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Bankanın uyguladığı oran
              </span>
            </div>

            <div className="relative">
              <input
                id="monthly-interest-rate"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={monthlyRate}
                onChange={(event) => {
                  setMonthlyRate(
                    formatRateInput(event.target.value),
                  );

                  setCopied(false);
                }}
                placeholder="Örneğin 3,49"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                %
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {quickRates.map((quickRate) => {
                const isSelected =
                  Math.abs(
                    calculation.monthlyRateValue -
                      quickRate,
                  ) < 0.001;

                return (
                  <button
                    key={quickRate}
                    type="button"
                    onClick={() =>
                      handleQuickRate(quickRate)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    %
                    {quickRate.toLocaleString("tr-TR", {
                      minimumFractionDigits: 2,
                    })}
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
                  Kredi taksiti nasıl hesaplanır?
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-900">
                  Hesaplama, kalan borca faiz uygulanan eşit
                  taksitli kredi formülüyle yapılır. İlk
                  taksitlerde faiz payı daha yüksek, anapara payı
                  daha düşüktür.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold text-amber-950">
                  Yaklaşık sonuç
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Tahsis ücreti, sigorta primi, vergi, dosya
                  masrafı ve bankaya özgü ek maliyetler
                  hesaplamaya dahil değildir.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <RefreshCcw
              className="h-4 w-4"
              aria-hidden="true"
            />
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
                  Kredi sonucu
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Tahmini aylık taksit
                </h3>
              </div>

              <span className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {months} ay vade
              </span>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <CreditCard
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Her ay ödenecek yaklaşık tutar
              </div>

              <p className="mt-5 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(
                  calculation.monthlyPayment,
                )}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <BadgePercent
                  className="h-4 w-4 text-amber-300"
                  aria-hidden="true"
                />

                Aylık %
                {percentageFormatter.format(
                  calculation.monthlyRateValue,
                )}{" "}
                faiz oranıyla hesaplandı
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-rose-800">
                    Toplam faiz
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <Coins
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-rose-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.totalInterest,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-rose-700">
                  Vade boyunca ödenecek tahmini toplam faiz.
                </p>
              </article>

              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-emerald-800">
                    Toplam geri ödeme
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Banknote
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-emerald-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.totalPayment,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-emerald-700">
                  Anapara ve tahmini faizin toplamı.
                </p>
              </article>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <h4 className="font-bold text-slate-900">
                  Kredi özeti
                </h4>
              </div>

              <dl className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Kredi tutarı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.principal,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Toplam vade
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {months} ay
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Aylık faiz oranı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.monthlyRateValue,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Yaklaşık yıllık nominal oran
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.annualNominalRate,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Faiz yükü
                  </dt>

                  <dd className="text-right font-bold text-rose-700">
                    %
                    {percentageFormatter.format(
                      calculation.interestRatio,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 bg-blue-50/70 px-5 py-4">
                  <dt className="font-bold text-blue-950">
                    Toplam geri ödeme
                  </dt>

                  <dd className="text-right text-lg font-extrabold text-blue-800">
                    {currencyFormatter.format(
                      calculation.totalPayment,
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <CircleDollarSign
                    className="h-4 w-4 text-blue-700"
                    aria-hidden="true"
                  />
                  İlk taksit dağılımı
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      Anapara
                    </span>

                    <span className="text-right text-sm font-bold text-slate-900">
                      {currencyFormatter.format(
                        calculation.firstMonthPrincipal,
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      Faiz
                    </span>

                    <span className="text-right text-sm font-bold text-rose-700">
                      {currencyFormatter.format(
                        calculation.firstMonthInterest,
                      )}
                    </span>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <TrendingDown
                    className="h-4 w-4 text-emerald-700"
                    aria-hidden="true"
                  />
                  Son taksit dağılımı
                </div>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      Anapara
                    </span>

                    <span className="text-right text-sm font-bold text-slate-900">
                      {currencyFormatter.format(
                        calculation.lastMonthPrincipal,
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-500">
                      Faiz
                    </span>

                    <span className="text-right text-sm font-bold text-rose-700">
                      {currencyFormatter.format(
                        calculation.lastMonthInterest,
                      )}
                    </span>
                  </div>
                </div>
              </article>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <ReceiptText
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Ek ödeme bilgileri
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Vade yarısındaki tahmini kalan borç
                  </span>

                  <span className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.remainingBalanceAfterHalf,
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Toplam ödemenin anaparaya oranı
                  </span>

                  <span className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.paymentToPrincipalRatio,
                    )}
                  </span>
                </div>
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
                  <Check
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
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
                Bu araç eşit taksitli kredi formülüyle yaklaşık
                sonuç üretir. Bankanın sunduğu ödeme planı;
                masraflar, sigorta, vergiler, faiz tahakkuk
                yöntemi ve yuvarlama farkları nedeniyle
                değişebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}