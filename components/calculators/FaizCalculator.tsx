"use client";

import {
  BadgePercent,
  Banknote,
  CalendarDays,
  Check,
  Clipboard,
  Coins,
  Info,
  Percent,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

type CalculationType = "simple" | "compound";
type TimeUnit = "day" | "month" | "year";

const quickPrincipals = [10_000, 25_000, 50_000, 100_000];
const quickRates = [10, 25, 40, 50];

const durationPresets: Record<
  TimeUnit,
  Array<{
    label: string;
    value: number;
  }>
> = {
  day: [
    { label: "30 gün", value: 30 },
    { label: "90 gün", value: 90 },
    { label: "180 gün", value: 180 },
    { label: "365 gün", value: 365 },
  ],
  month: [
    { label: "3 ay", value: 3 },
    { label: "6 ay", value: 6 },
    { label: "12 ay", value: 12 },
    { label: "24 ay", value: 24 },
  ],
  year: [
    { label: "1 yıl", value: 1 },
    { label: "2 yıl", value: 2 },
    { label: "5 yıl", value: 5 },
    { label: "10 yıl", value: 10 },
  ],
};

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

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
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

function getDurationLabel(
  duration: number,
  timeUnit: TimeUnit,
): string {
  if (timeUnit === "day") {
    return `${numberFormatter.format(duration)} gün`;
  }

  if (timeUnit === "month") {
    return `${numberFormatter.format(duration)} ay`;
  }

  return `${numberFormatter.format(duration)} yıl`;
}

function convertDurationToYears(
  duration: number,
  timeUnit: TimeUnit,
): number {
  if (timeUnit === "day") {
    return duration / 365;
  }

  if (timeUnit === "month") {
    return duration / 12;
  }

  return duration;
}

export default function FaizCalculator() {
  const [principal, setPrincipal] = useState("10.000");
  const [rate, setRate] = useState("25");
  const [duration, setDuration] = useState("12");
  const [timeUnit, setTimeUnit] = useState<TimeUnit>("month");
  const [calculationType, setCalculationType] =
    useState<CalculationType>("simple");
  const [copied, setCopied] = useState(false);

  const calculation = useMemo(() => {
    const principalValue = Math.max(parseNumber(principal), 0);
    const rateValue = Math.max(parseNumber(rate), 0);
    const durationValue = Math.max(parseNumber(duration), 0);

    const years = convertDurationToYears(durationValue, timeUnit);
    const decimalRate = rateValue / 100;

    const isValid =
      principalValue > 0 &&
      rateValue >= 0 &&
      durationValue > 0 &&
      years > 0;

    if (!isValid) {
      return {
        principalValue,
        rateValue,
        durationValue,
        years,
        interest: 0,
        total: 0,
        effectiveReturnRate: 0,
        averageMonthlyInterest: 0,
        averageDailyInterest: 0,
        multiplier: 0,
        isValid: false,
      };
    }

    const total =
      calculationType === "simple"
        ? principalValue * (1 + decimalRate * years)
        : principalValue * Math.pow(1 + decimalRate, years);

    const interest = Math.max(total - principalValue, 0);

    const effectiveReturnRate =
      principalValue > 0
        ? (interest / principalValue) * 100
        : 0;

    const totalMonths = Math.max(years * 12, 0);
    const totalDays = Math.max(years * 365, 0);

    const averageMonthlyInterest =
      totalMonths > 0 ? interest / totalMonths : 0;

    const averageDailyInterest =
      totalDays > 0 ? interest / totalDays : 0;

    const multiplier =
      principalValue > 0 ? total / principalValue : 0;

    return {
      principalValue,
      rateValue,
      durationValue,
      years,
      interest,
      total,
      effectiveReturnRate,
      averageMonthlyInterest,
      averageDailyInterest,
      multiplier,
      isValid,
    };
  }, [
    calculationType,
    duration,
    principal,
    rate,
    timeUnit,
  ]);

  const calculationTypeLabel =
    calculationType === "simple"
      ? "Basit Faiz"
      : "Bileşik Faiz";

  function handleCalculationTypeChange(
    type: CalculationType,
  ) {
    setCalculationType(type);
    setCopied(false);
  }

  function handleTimeUnitChange(unit: TimeUnit) {
    setTimeUnit(unit);

    if (unit === "day") {
      setDuration("365");
    } else if (unit === "month") {
      setDuration("12");
    } else {
      setDuration("1");
    }

    setCopied(false);
  }

  function handleQuickPrincipal(value: number) {
    setPrincipal(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleQuickRate(value: number) {
    setRate(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleQuickDuration(value: number) {
    setDuration(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleReset() {
    setPrincipal("10.000");
    setRate("25");
    setDuration("12");
    setTimeUnit("month");
    setCalculationType("simple");
    setCopied(false);
  }

  async function handleCopy() {
    if (!calculation.isValid) {
      return;
    }

    const copyText = [
      "HesapRehberi Faiz Hesaplama Sonucu",
      `Hesaplama türü: ${calculationTypeLabel}`,
      `Anapara: ${currencyFormatter.format(
        calculation.principalValue,
      )}`,
      `Yıllık faiz oranı: %${percentageFormatter.format(
        calculation.rateValue,
      )}`,
      `Vade: ${getDurationLabel(
        calculation.durationValue,
        timeUnit,
      )}`,
      `Faiz getirisi: ${currencyFormatter.format(
        calculation.interest,
      )}`,
      `Toplam tutar: ${currencyFormatter.format(
        calculation.total,
      )}`,
      `Toplam getiri oranı: %${percentageFormatter.format(
        calculation.effectiveReturnRate,
      )}`,
      "Not: Vergi, stopaj, komisyon ve diğer kesintiler hesaplamaya dahil değildir.",
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
      aria-labelledby="interest-calculator-title"
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
              <TrendingUp
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
                Basit ve bileşik faiz karşılaştırması
              </div>

              <h2
                id="interest-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Faiz Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Anapara, yıllık faiz oranı ve vade bilgilerini
                girerek tahmini faiz getirisini hesaplayın.
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

      <div className="border-b border-slate-200 bg-white p-4 md:px-9 md:py-5">
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() =>
              handleCalculationTypeChange("simple")
            }
            className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              calculationType === "simple"
                ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
            }`}
          >
            <BadgePercent
              className="h-4 w-4"
              aria-hidden="true"
            />
            Basit Faiz
          </button>

          <button
            type="button"
            onClick={() =>
              handleCalculationTypeChange("compound")
            }
            className={`flex min-h-14 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-bold transition ${
              calculationType === "compound"
                ? "border-blue-700 bg-blue-700 text-white shadow-lg shadow-blue-700/20"
                : "border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
            }`}
          >
            <TrendingUp
              className="h-4 w-4"
              aria-hidden="true"
            />
            Bileşik Faiz
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="interest-principal"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Anapara
              </label>

              <span className="text-xs font-medium text-slate-500">
                Türk lirası
              </span>
            </div>

            <div className="relative">
              <input
                id="interest-principal"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={principal}
                onChange={(event) => {
                  setPrincipal(
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
              {quickPrincipals.map((quickPrincipal) => {
                const isSelected =
                  calculation.principalValue ===
                  quickPrincipal;

                return (
                  <button
                    key={quickPrincipal}
                    type="button"
                    onClick={() =>
                      handleQuickPrincipal(quickPrincipal)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {quickPrincipal.toLocaleString("tr-TR")} ₺
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="interest-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <Percent
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Yıllık faiz oranı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Yıllık oran
              </span>
            </div>

            <div className="relative">
              <input
                id="interest-rate"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={rate}
                onChange={(event) => {
                  setRate(
                    formatInputValue(event.target.value, 2),
                  );
                  setCopied(false);
                }}
                placeholder="Örneğin 25"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                %
              </span>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
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

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="interest-duration"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <CalendarDays
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Vade süresi
              </label>

              <span className="text-xs font-medium text-slate-500">
                Gün, ay veya yıl
              </span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3">
              <input
                id="interest-duration"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={duration}
                onChange={(event) => {
                  setDuration(
                    formatInputValue(event.target.value, 2),
                  );
                  setCopied(false);
                }}
                placeholder="Örneğin 12"
                className="h-16 min-w-0 rounded-2xl border border-slate-300 bg-white px-5 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <select
                value={timeUnit}
                onChange={(event) =>
                  handleTimeUnitChange(
                    event.target.value as TimeUnit,
                  )
                }
                aria-label="Vade birimi"
                className="h-16 rounded-2xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              >
                <option value="day">Gün</option>
                <option value="month">Ay</option>
                <option value="year">Yıl</option>
              </select>
            </div>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {durationPresets[timeUnit].map((preset) => {
                const isSelected =
                  calculation.durationValue === preset.value;

                return (
                  <button
                    key={`${timeUnit}-${preset.value}`}
                    type="button"
                    onClick={() =>
                      handleQuickDuration(preset.value)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {preset.label}
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
                  {calculationTypeLabel} nasıl çalışır?
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-900">
                  {calculationType === "simple"
                    ? "Basit faiz yönteminde getiri yalnızca başlangıç anaparası üzerinden hesaplanır. Önceki dönemlerde oluşan faiz anaparaya eklenmez."
                    : "Bileşik faiz yönteminde oluşan getiri anaparaya eklenir. Sonraki dönemlerin getirisi büyüyen toplam tutar üzerinden hesaplanır."}
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

              <p className="text-sm leading-6 text-amber-950">
                Hesaplamaya stopaj, vergi, komisyon ve banka
                kesintileri dahil edilmez. Sonuç brüt ve yaklaşık
                değer niteliğindedir.
              </p>
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
                  Faiz sonucu
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Tahmini brüt getiri
                </h3>
              </div>

              <span className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                {calculationTypeLabel}
              </span>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Coins
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Faiz getirisi
              </div>

              <p className="mt-5 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(
                  calculation.interest,
                )}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <TrendingUp
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                />
                Toplam getiri oranı yaklaşık %
                {percentageFormatter.format(
                  calculation.effectiveReturnRate,
                )}
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-emerald-800">
                    Vade sonu toplam
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Banknote
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-emerald-950 md:text-2xl">
                  {currencyFormatter.format(calculation.total)}
                </p>

                <p className="mt-2 text-xs leading-5 text-emerald-700">
                  Anapara ve hesaplanan brüt faiz getirisi.
                </p>
              </article>

              <article className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-blue-800">
                    Aylık ortalama getiri
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <CalendarDays
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-blue-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.averageMonthlyInterest,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-blue-700">
                  Toplam getirinin vadeye bölünmüş yaklaşık
                  ortalaması.
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
                    Hesaplama türü
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {calculationTypeLabel}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Anapara
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.principalValue,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Yıllık faiz oranı
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
                    Vade süresi
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {getDurationLabel(
                      calculation.durationValue,
                      timeUnit,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Günlük ortalama getiri
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.averageDailyInterest,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Büyüme çarpanı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {numberFormatter.format(
                      calculation.multiplier,
                    )}{" "}
                    kat
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">
                Kullanılan formül
              </p>

              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                {calculationType === "simple" ? (
                  <>
                    <p>
                      Faiz = Anapara × Yıllık oran × Vade
                    </p>

                    <p>
                      Toplam tutar = Anapara + faiz getirisi
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Toplam tutar = Anapara × (1 + yıllık
                      oran)
                      <sup>vade</sup>
                    </p>

                    <p>
                      Faiz getirisi = Toplam tutar − anapara
                    </p>
                  </>
                )}
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
                Sonuçlar matematiksel tahmindir. Bankaların faiz
                tahakkuk yöntemi, gün hesabı, vade koşulları,
                stopaj oranı ve diğer kesintileri gerçek getiriyi
                değiştirebilir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}