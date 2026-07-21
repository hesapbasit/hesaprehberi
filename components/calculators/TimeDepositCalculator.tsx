"use client";

import { useMemo, useState } from "react";

import {
  BadgePercent,
  Banknote,
  CalendarDays,
  Check,
  Clipboard,
  Coins,
  Info,
  Landmark,
  Percent,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type TermUnit = "day" | "month";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const presetTerms = [
  { label: "32 gün", value: 32, unit: "day" as const },
  { label: "46 gün", value: 46, unit: "day" as const },
  { label: "92 gün", value: 92, unit: "day" as const },
  { label: "181 gün", value: 181, unit: "day" as const },
  { label: "1 yıl", value: 365, unit: "day" as const },
];

function parseNumber(value: string): number {
  const normalizedValue = value
    .replace(/\s/g, "")
    .replace(/[₺TLtl%]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatMoneyInput(value: string): string {
  const cleanedValue = value.replace(/[^\d,]/g, "");
  const [integerPart = "", decimalPart] = cleanedValue.split(",");

  const normalizedInteger = integerPart.replace(/^0+(?=\d)/, "");

  const formattedInteger = normalizedInteger
    ? Number(normalizedInteger).toLocaleString("tr-TR")
    : "";

  if (decimalPart !== undefined) {
    return `${formattedInteger},${decimalPart.slice(0, 2)}`;
  }

  return formattedInteger;
}

function formatDecimalInput(value: string): string {
  const cleanedValue = value.replace(/[^\d,]/g, "");
  const [integerPart = "", decimalPart] = cleanedValue.split(",");

  const limitedInteger = integerPart.slice(0, 3);

  if (decimalPart !== undefined) {
    return `${limitedInteger},${decimalPart.slice(0, 2)}`;
  }

  return limitedInteger;
}

export default function TimeDepositCalculator() {
  const [principal, setPrincipal] = useState("100.000");
  const [termValue, setTermValue] = useState("32");
  const [termUnit, setTermUnit] = useState<TermUnit>("day");
  const [annualRate, setAnnualRate] = useState("45");
  const [withholdingRate, setWithholdingRate] = useState("15");
  const [copied, setCopied] = useState(false);

  const calculation = useMemo(() => {
    const principalAmount = Math.max(parseNumber(principal), 0);
    const enteredTerm = Math.max(parseNumber(termValue), 0);
    const rate = Math.max(parseNumber(annualRate), 0);
    const withholding = Math.min(
      Math.max(parseNumber(withholdingRate), 0),
      100,
    );

    const days =
      termUnit === "month"
        ? enteredTerm * (365 / 12)
        : enteredTerm;

    const grossInterest =
      principalAmount * (rate / 100) * (days / 365);

    const withholdingTax =
      grossInterest * (withholding / 100);

    const netInterest = grossInterest - withholdingTax;
    const maturityAmount = principalAmount + netInterest;

    const dailyGrossInterest =
      days > 0 ? grossInterest / days : 0;

    const monthlyEquivalent =
      principalAmount > 0
        ? (netInterest / principalAmount) * (30 / Math.max(days, 1)) * 100
        : 0;

    const netReturnRate =
      principalAmount > 0
        ? (netInterest / principalAmount) * 100
        : 0;

    return {
      principalAmount,
      enteredTerm,
      days,
      rate,
      withholding,
      grossInterest,
      withholdingTax,
      netInterest,
      maturityAmount,
      dailyGrossInterest,
      monthlyEquivalent,
      netReturnRate,
    };
  }, [
    annualRate,
    principal,
    termUnit,
    termValue,
    withholdingRate,
  ]);

  const isValid =
    calculation.principalAmount > 0 &&
    calculation.days > 0 &&
    calculation.rate >= 0;

  function handlePresetTerm(days: number) {
    setTermUnit("day");
    setTermValue(String(days));
    setCopied(false);
  }

  function handleReset() {
    setPrincipal("100.000");
    setTermValue("32");
    setTermUnit("day");
    setAnnualRate("45");
    setWithholdingRate("15");
    setCopied(false);
  }

  async function handleCopy() {
    if (!isValid) {
      return;
    }

    const termDescription =
      termUnit === "month"
        ? `${numberFormatter.format(
            calculation.enteredTerm,
          )} ay`
        : `${numberFormatter.format(
            calculation.enteredTerm,
          )} gün`;

    const resultText = [
      "HesapRehberi Vadeli Mevduat Hesaplama Sonucu",
      `Ana para: ${currencyFormatter.format(
        calculation.principalAmount,
      )}`,
      `Vade: ${termDescription}`,
      `Yıllık faiz oranı: %${numberFormatter.format(
        calculation.rate,
      )}`,
      `Stopaj oranı: %${numberFormatter.format(
        calculation.withholding,
      )}`,
      `Brüt faiz getirisi: ${currencyFormatter.format(
        calculation.grossInterest,
      )}`,
      `Stopaj kesintisi: ${currencyFormatter.format(
        calculation.withholdingTax,
      )}`,
      `Net faiz getirisi: ${currencyFormatter.format(
        calculation.netInterest,
      )}`,
      `Vade sonu toplam: ${currencyFormatter.format(
        calculation.maturityAmount,
      )}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(resultText);
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
      aria-labelledby="time-deposit-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 px-6 py-7 text-white md:px-9 md:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <Landmark className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Canlı getiri hesaplama
              </div>

              <h2
                id="time-deposit-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Vadeli Mevduat Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Ana para, vade, yıllık faiz ve stopaj oranını girerek
                tahmini net kazancınızı anında hesaplayın.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Ücretsiz hesaplama
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="deposit-principal"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Ana para
              </label>

              <span className="text-xs font-medium text-slate-500">
                Mevduat tutarı
              </span>
            </div>

            <div className="relative">
              <input
                id="deposit-principal"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={principal}
                onChange={(event) => {
                  setPrincipal(
                    formatMoneyInput(event.target.value),
                  );
                  setCopied(false);
                }}
                placeholder="Örneğin 100.000"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-lg font-bold text-slate-500">
                TL
              </span>
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="deposit-term"
              className="flex items-center gap-2 text-sm font-bold text-slate-900"
            >
              <CalendarDays
                className="h-4 w-4 text-blue-700"
                aria-hidden="true"
              />
              Vade süresi
            </label>

            <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
              <input
                id="deposit-term"
                type="text"
                inputMode="decimal"
                value={termValue}
                onChange={(event) => {
                  setTermValue(
                    formatDecimalInput(event.target.value),
                  );
                  setCopied(false);
                }}
                placeholder="32"
                className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 font-bold text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <div className="grid grid-cols-2 rounded-2xl border border-slate-300 bg-white p-1">
                <button
                  type="button"
                  aria-pressed={termUnit === "day"}
                  onClick={() => {
                    setTermUnit("day");
                    setCopied(false);
                  }}
                  className={`rounded-xl px-4 text-sm font-bold transition ${
                    termUnit === "day"
                      ? "bg-blue-700 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Gün
                </button>

                <button
                  type="button"
                  aria-pressed={termUnit === "month"}
                  onClick={() => {
                    setTermUnit("month");
                    setCopied(false);
                  }}
                  className={`rounded-xl px-4 text-sm font-bold transition ${
                    termUnit === "month"
                      ? "bg-blue-700 text-white shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  Ay
                </button>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
              {presetTerms.map((item) => {
                const isSelected =
                  termUnit === item.unit &&
                  Number(termValue) === item.value;

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() =>
                      handlePresetTerm(item.value)
                    }
                    className={`h-10 rounded-xl border text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="annual-interest-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <TrendingUp
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Yıllık faiz oranı
              </label>

              <div className="relative mt-3">
                <input
                  id="annual-interest-rate"
                  type="text"
                  inputMode="decimal"
                  value={annualRate}
                  onChange={(event) => {
                    setAnnualRate(
                      formatDecimalInput(event.target.value),
                    );
                    setCopied(false);
                  }}
                  placeholder="45"
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-12 font-bold text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-bold text-slate-500">
                  %
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="withholding-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <BadgePercent
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Stopaj oranı
              </label>

              <div className="relative mt-3">
                <input
                  id="withholding-rate"
                  type="text"
                  inputMode="decimal"
                  value={withholdingRate}
                  onChange={(event) => {
                    setWithholdingRate(
                      formatDecimalInput(event.target.value),
                    );
                    setCopied(false);
                  }}
                  placeholder="15"
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-12 font-bold text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-bold text-slate-500">
                  %
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-4">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
              aria-hidden="true"
            />

            <p className="text-sm leading-6 text-blue-950">
              Bankaların faiz oranları ve uygulanan kesintiler
              değişebilir. Güncel oranı bankanızdan kontrol ederek
              ilgili alanlara yazabilirsiniz.
            </p>
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
                  Tahmini mevduat getirisi
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Vade sonu toplam tutar
                </h3>
              </div>

              <div className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {numberFormatter.format(calculation.days)} gün
              </div>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Banknote className="h-4 w-4" aria-hidden="true" />
                Ana para + net faiz
              </div>

              <p className="mt-4 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(
                  calculation.maturityAmount,
                )}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <Check
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                />
                Sonuçlar girdiğiniz değerlere göre otomatik
                güncellenir.
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-emerald-800">
                    Net faiz getirisi
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Coins className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 break-words text-xl font-extrabold text-emerald-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.netInterest,
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-600">
                    Brüt faiz getirisi
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <TrendingUp
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 break-words text-xl font-extrabold text-slate-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.grossInterest,
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-amber-800">
                    Stopaj kesintisi
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Percent className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 break-words text-xl font-extrabold text-amber-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.withholdingTax,
                  )}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-blue-800">
                    Net getiri oranı
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <BadgePercent
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-blue-950 md:text-2xl">
                  %{numberFormatter.format(
                    calculation.netReturnRate,
                  )}
                </p>
              </div>
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
                    Ana para
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.principalAmount,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Yıllık faiz oranı
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    %{numberFormatter.format(calculation.rate)}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Günlük brüt kazanç
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.dailyGrossInterest,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Aylık tahmini net getiri
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    %
                    {numberFormatter.format(
                      calculation.monthlyEquivalent,
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              disabled={!isValid}
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
                  <Clipboard className="h-4 w-4" aria-hidden="true" />
                  Sonucu kopyala
                </>
              )}
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Hesaplama tahmini sonuç üretir. Bankanın gün sayım
              yöntemi, faiz oranı, kesintileri ve ürün koşulları
              gerçek sonucu değiştirebilir.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}