"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Banknote,
  CalendarDays,
  ChartNoAxesCombined,
  CircleDollarSign,
  Landmark,
  Percent,
  RefreshCw,
  RotateCcw,
  Scale,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type DayBasis = 360 | 365;

type RenewalPeriod = {
  period: number;
  startingBalance: number;
  annualInterestRate: number;
  grossInterest: number;
  withholdingTax: number;
  netInterest: number;
  endingBalance: number;
};

type CalculationResult = {
  periods: RenewalPeriod[];
  firstPeriodGrossInterest: number;
  firstPeriodWithholdingTax: number;
  firstPeriodNetInterest: number;
  firstPeriodEndingBalance: number;
  finalBalance: number;
  totalGrossInterest: number;
  totalWithholdingTax: number;
  totalNetInterest: number;
  simpleInterestNetEarning: number;
  compoundAdvantage: number;
  totalReturnRate: number;
  effectiveAnnualNetReturnRate: number;
  totalDays: number;
  averageAnnualInterestRate: number;
  averagePeriodNetInterest: number;
};

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

const formatPercent = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

const formatNumberInput = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);

const parseNumberInput = (value: string) => {
  const normalizedValue = value
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
};

export default function DepositRenewalCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [termDays, setTermDays] = useState(32);
  const [renewalCount, setRenewalCount] = useState(6);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);
  const [useVariableRates, setUseVariableRates] = useState(false);
  const [fixedAnnualRate, setFixedAnnualRate] = useState(48);
  const [variableRates, setVariableRates] = useState<number[]>([
    48,
    47,
    46,
    45,
    44,
    43,
  ]);

  const normalizedRates = useMemo(() => {
    return Array.from({ length: renewalCount }, (_, index) => {
      if (useVariableRates) {
        return variableRates[index] ?? fixedAnnualRate;
      }

      return fixedAnnualRate;
    });
  }, [
    renewalCount,
    useVariableRates,
    variableRates,
    fixedAnnualRate,
  ]);

  const result = useMemo<CalculationResult | null>(() => {
    if (
      principal <= 0 ||
      termDays <= 0 ||
      renewalCount <= 0 ||
      withholdingTaxRate < 0 ||
      withholdingTaxRate >= 100 ||
      normalizedRates.some((rate) => rate < 0)
    ) {
      return null;
    }

    const withholdingDecimal = withholdingTaxRate / 100;
    const termRatio = termDays / dayBasis;

    let currentBalance = principal;
    let totalGrossInterest = 0;
    let totalWithholdingTax = 0;
    let totalNetInterest = 0;

    const periods: RenewalPeriod[] = normalizedRates.map(
      (annualRate, index) => {
        const startingBalance = currentBalance;
        const annualRateDecimal = annualRate / 100;

        const grossInterest =
          startingBalance * annualRateDecimal * termRatio;

        const withholdingTax =
          grossInterest * withholdingDecimal;

        const netInterest =
          grossInterest - withholdingTax;

        const endingBalance =
          startingBalance + netInterest;

        totalGrossInterest += grossInterest;
        totalWithholdingTax += withholdingTax;
        totalNetInterest += netInterest;
        currentBalance = endingBalance;

        return {
          period: index + 1,
          startingBalance,
          annualInterestRate: annualRate,
          grossInterest,
          withholdingTax,
          netInterest,
          endingBalance,
        };
      },
    );

    const firstPeriod = periods[0];

    const averageAnnualInterestRate =
      normalizedRates.reduce((sum, rate) => sum + rate, 0) /
      normalizedRates.length;

    const simpleInterestGross =
      principal *
      (averageAnnualInterestRate / 100) *
      termRatio *
      renewalCount;

    const simpleInterestTax =
      simpleInterestGross * withholdingDecimal;

    const simpleInterestNetEarning =
      simpleInterestGross - simpleInterestTax;

    const finalBalance = currentBalance;

    const compoundAdvantage =
      totalNetInterest - simpleInterestNetEarning;

    const totalReturnRate =
      principal > 0
        ? (totalNetInterest / principal) * 100
        : 0;

    const totalDays = termDays * renewalCount;

    const effectiveAnnualNetReturnRate =
      totalDays > 0 && principal > 0
        ? (Math.pow(
            finalBalance / principal,
            dayBasis / totalDays,
          ) -
            1) *
          100
        : 0;

    const averagePeriodNetInterest =
      renewalCount > 0
        ? totalNetInterest / renewalCount
        : 0;

    return {
      periods,
      firstPeriodGrossInterest:
        firstPeriod?.grossInterest ?? 0,
      firstPeriodWithholdingTax:
        firstPeriod?.withholdingTax ?? 0,
      firstPeriodNetInterest:
        firstPeriod?.netInterest ?? 0,
      firstPeriodEndingBalance:
        firstPeriod?.endingBalance ?? principal,
      finalBalance,
      totalGrossInterest,
      totalWithholdingTax,
      totalNetInterest,
      simpleInterestNetEarning,
      compoundAdvantage,
      totalReturnRate,
      effectiveAnnualNetReturnRate,
      totalDays,
      averageAnnualInterestRate,
      averagePeriodNetInterest,
    };
  }, [
    principal,
    termDays,
    renewalCount,
    withholdingTaxRate,
    dayBasis,
    normalizedRates,
  ]);

  const updateVariableRate = (
    index: number,
    value: number,
  ) => {
    setVariableRates((currentRates) => {
      const newRates = [...currentRates];
      newRates[index] = Math.max(0, value);

      return newRates;
    });
  };

  const handleRenewalCountChange = (value: number) => {
    const safeValue = Math.min(24, Math.max(1, value));

    setRenewalCount(safeValue);

    setVariableRates((currentRates) => {
      if (currentRates.length >= safeValue) {
        return currentRates.slice(0, safeValue);
      }

      const lastRate =
        currentRates[currentRates.length - 1] ??
        fixedAnnualRate;

      return [
        ...currentRates,
        ...Array.from(
          {
            length: safeValue - currentRates.length,
          },
          () => lastRate,
        ),
      ];
    });
  };

  const resetCalculator = () => {
    setPrincipal(250000);
    setTermDays(32);
    setRenewalCount(6);
    setWithholdingTaxRate(15);
    setDayBasis(365);
    setUseVariableRates(false);
    setFixedAnnualRate(48);
    setVariableRates([48, 47, 46, 45, 44, 43]);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-violet-100 bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-violet-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Yenilenen mevduat kazancını hesaplayın
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Faiz Yenileme Hesaplama
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-violet-100 sm:text-base">
              Vade sonunda elde edilen net faizin ana paraya eklenerek
              tekrar değerlendirilmesi durumunda oluşabilecek bileşik
              kazancı hesaplayın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-violet-700">
              <RefreshCw className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-violet-100">
                Yenileme sonu bakiye
              </p>

              <p className="text-lg font-bold text-white">
                {result
                  ? formatCurrency(result.finalBalance)
                  : formatCurrency(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50/80 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <InputField
              id="renewal-principal"
              label="Başlangıç ana parası"
              icon={<Landmark className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="renewal-principal"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(principal)}
                  onChange={(event) =>
                    setPrincipal(
                      parseNumberInput(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  TL
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {[100000, 250000, 500000, 1000000].map(
                  (value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setPrincipal(value)}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                        principal === value
                          ? "border-violet-600 bg-violet-600 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                      }`}
                    >
                      {new Intl.NumberFormat("tr-TR", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                      }).format(value)}{" "}
                      TL
                    </button>
                  ),
                )}
              </div>
            </InputField>

            <InputField
              id="renewal-term"
              label="Her vadenin süresi"
              icon={<CalendarDays className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="renewal-term"
                  type="number"
                  min="1"
                  max="3650"
                  step="1"
                  value={termDays}
                  onChange={(event) =>
                    setTermDays(
                      Math.max(
                        1,
                        Math.round(
                          Number(event.target.value) || 1,
                        ),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  gün
                </span>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {[32, 45, 90, 180].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setTermDays(day)}
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition ${
                      termDays === day
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                    }`}
                  >
                    {day} gün
                  </button>
                ))}
              </div>
            </InputField>

            <InputField
              id="renewal-count"
              label="Toplam vade sayısı"
              icon={<RefreshCw className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="renewal-count"
                  type="number"
                  min="1"
                  max="24"
                  step="1"
                  value={renewalCount}
                  onChange={(event) =>
                    handleRenewalCountChange(
                      Math.round(
                        Number(event.target.value) || 1,
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-20 text-base font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  dönem
                </span>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {[3, 6, 12, 24].map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() =>
                      handleRenewalCountChange(count)
                    }
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition ${
                      renewalCount === count
                        ? "border-violet-600 bg-violet-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-violet-400 hover:bg-violet-50"
                    }`}
                  >
                    {count} vade
                  </button>
                ))}
              </div>
            </InputField>

            <InputField
              id="renewal-tax"
              label="Stopaj oranı"
              icon={<Scale className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="renewal-tax"
                  type="number"
                  min="0"
                  max="99.99"
                  step="0.01"
                  value={withholdingTaxRate}
                  onChange={(event) =>
                    setWithholdingTaxRate(
                      Math.min(
                        99.99,
                        Math.max(
                          0,
                          Number(event.target.value) || 0,
                        ),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </InputField>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <WalletCards className="h-4 w-4 text-violet-600" />
                Faiz gün hesabı
              </legend>

              <div className="grid grid-cols-2 gap-3">
                {[360, 365].map((basis) => {
                  const isActive = dayBasis === basis;

                  return (
                    <button
                      key={basis}
                      type="button"
                      onClick={() =>
                        setDayBasis(basis as DayBasis)
                      }
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border-violet-600 bg-violet-600 text-white shadow-lg shadow-violet-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                      }`}
                    >
                      {basis} gün
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-slate-950">
                    Değişken faiz senaryosu
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Her yenileme döneminde farklı faiz oranı
                    kullanın.
                  </p>
                </div>

                <button
                  type="button"
                  role="switch"
                  aria-checked={useVariableRates}
                  onClick={() =>
                    setUseVariableRates(
                      (currentValue) => !currentValue,
                    )
                  }
                  className={`relative h-7 w-12 shrink-0 rounded-full transition ${
                    useVariableRates
                      ? "bg-violet-600"
                      : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition ${
                      useVariableRates
                        ? "left-6"
                        : "left-1"
                    }`}
                  />
                </button>
              </div>
            </div>

            {!useVariableRates ? (
              <InputField
                id="renewal-fixed-rate"
                label="Yıllık faiz oranı"
                icon={<TrendingUp className="h-4 w-4" />}
              >
                <div className="relative">
                  <input
                    id="renewal-fixed-rate"
                    type="number"
                    min="0"
                    max="1000"
                    step="0.01"
                    value={fixedAnnualRate}
                    onChange={(event) =>
                      setFixedAnnualRate(
                        Math.max(
                          0,
                          Number(event.target.value) || 0,
                        ),
                      )
                    }
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  />

                  <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                </div>
              </InputField>
            ) : (
              <div>
                <div className="mb-3 flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-slate-800">
                    Dönemsel yıllık faiz oranları
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      setVariableRates(
                        Array.from(
                          { length: renewalCount },
                          () => fixedAnnualRate,
                        ),
                      )
                    }
                    className="text-xs font-bold text-violet-700 hover:text-violet-900"
                  >
                    Tümünü %{formatPercent(fixedAnnualRate)} yap
                  </button>
                </div>

                <div className="max-h-72 space-y-3 overflow-y-auto pr-1">
                  {Array.from({
                    length: renewalCount,
                  }).map((_, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-[94px_minmax(0,1fr)] items-center gap-3"
                    >
                      <span className="text-xs font-semibold text-slate-600">
                        {index + 1}. vade
                      </span>

                      <div className="relative">
                        <input
                          type="number"
                          min="0"
                          max="1000"
                          step="0.01"
                          value={
                            variableRates[index] ??
                            fixedAnnualRate
                          }
                          onChange={(event) =>
                            updateVariableRate(
                              index,
                              Number(event.target.value) || 0,
                            )
                          }
                          aria-label={`${
                            index + 1
                          }. vade faiz oranı`}
                          className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 pr-11 text-sm font-semibold text-slate-950 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                        />

                        <Percent className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={resetCalculator}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              <RotateCcw className="h-4 w-4" />
              Varsayılan değerlere dön
            </button>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {result ? (
            <>
              <div className="relative overflow-hidden rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-600 via-violet-700 to-indigo-800 p-6 text-white shadow-xl shadow-violet-200/50 sm:p-8">
                <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90">
                      <RefreshCw className="h-4 w-4" />
                      {renewalCount} vade sonunda
                    </div>

                    <p className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {formatCurrency(result.finalBalance)}
                    </p>

                    <p className="mt-2 text-lg font-bold text-white/90">
                      Toplam net kazanç:{" "}
                      {formatCurrency(result.totalNetInterest)}
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                      Faizin her vade sonunda ana paraya eklenerek
                      yeniden değerlendirildiği bileşik mevduat
                      senaryosudur.
                    </p>
                  </div>

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-violet-700 shadow-xl">
                    <ChartNoAxesCombined className="h-9 w-9" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <ResultCard
                  label="Toplam net kazanç"
                  value={formatCurrency(
                    result.totalNetInterest,
                  )}
                  description="Tüm vadelerde stopaj sonrası kazanç"
                  icon={
                    <CircleDollarSign className="h-5 w-5" />
                  }
                />

                <ResultCard
                  label="Toplam stopaj"
                  value={formatCurrency(
                    result.totalWithholdingTax,
                  )}
                  description="Tüm dönemlerde yapılan kesinti"
                  icon={<Scale className="h-5 w-5" />}
                />

                <ResultCard
                  label="Bileşik faiz avantajı"
                  value={formatCurrency(
                    result.compoundAdvantage,
                  )}
                  description="Basit faiz senaryosuna göre fark"
                  icon={<TrendingUp className="h-5 w-5" />}
                />

                <ResultCard
                  label="Toplam süre"
                  value={`${result.totalDays} gün`}
                  description={`${renewalCount} ayrı vade dönemi`}
                  icon={<CalendarDays className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <MetricCard
                  label="Toplam getiri oranı"
                  value={`%${formatPercent(
                    result.totalReturnRate,
                  )}`}
                  description="Başlangıç ana parasına göre net getiri"
                />

                <MetricCard
                  label="Efektif yıllık net getiri"
                  value={`%${formatPercent(
                    result.effectiveAnnualNetReturnRate,
                  )}`}
                  description="Bileşik yenilemenin yıllık eşdeğeri"
                />

                <MetricCard
                  label="Ortalama yıllık faiz"
                  value={`%${formatPercent(
                    result.averageAnnualInterestRate,
                  )}`}
                  description="Tüm vade oranlarının ortalaması"
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <Banknote className="h-5 w-5 text-violet-600" />
                    İlk vade sonucu
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Başlangıç ana parası"
                      value={formatCurrency(principal)}
                    />

                    <CalculationRow
                      label="Brüt faiz"
                      value={formatCurrency(
                        result.firstPeriodGrossInterest,
                      )}
                    />

                    <CalculationRow
                      label="Stopaj"
                      value={formatCurrency(
                        result.firstPeriodWithholdingTax,
                      )}
                    />

                    <CalculationRow
                      label="Net faiz"
                      value={formatCurrency(
                        result.firstPeriodNetInterest,
                      )}
                      strong
                    />

                    <CalculationRow
                      label="İlk vade sonu bakiye"
                      value={formatCurrency(
                        result.firstPeriodEndingBalance,
                      )}
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <RefreshCw className="h-5 w-5 text-violet-600" />
                    Tüm yenilemeler
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Toplam brüt faiz"
                      value={formatCurrency(
                        result.totalGrossInterest,
                      )}
                    />

                    <CalculationRow
                      label="Toplam stopaj"
                      value={formatCurrency(
                        result.totalWithholdingTax,
                      )}
                    />

                    <CalculationRow
                      label="Toplam net kazanç"
                      value={formatCurrency(
                        result.totalNetInterest,
                      )}
                      strong
                    />

                    <CalculationRow
                      label="Ortalama dönem kazancı"
                      value={formatCurrency(
                        result.averagePeriodNetInterest,
                      )}
                    />

                    <CalculationRow
                      label="Son bakiye"
                      value={formatCurrency(
                        result.finalBalance,
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="flex items-center gap-2 text-lg font-black text-amber-950">
                      <ChartNoAxesCombined className="h-5 w-5 text-amber-600" />
                      Basit faiz ve yenileme karşılaştırması
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-amber-900">
                      Basit faiz senaryosunda her dönem faiz
                      yalnızca başlangıç ana parası üzerinden
                      hesaplanır. Yenilenen mevduatta ise net faiz
                      ana paraya eklenerek sonraki dönemde tekrar
                      faiz kazanır.
                    </p>
                  </div>

                  <div className="grid min-w-full gap-3 sm:grid-cols-3 lg:min-w-[520px]">
                    <SummaryBox
                      label="Basit faiz kazancı"
                      value={formatCurrency(
                        result.simpleInterestNetEarning,
                      )}
                    />

                    <SummaryBox
                      label="Yenilenen mevduat"
                      value={formatCurrency(
                        result.totalNetInterest,
                      )}
                    />

                    <SummaryBox
                      label="Ek kazanç"
                      value={formatCurrency(
                        result.compoundAdvantage,
                      )}
                      highlighted
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                  <div>
                    <h3 className="text-lg font-black text-slate-950">
                      Yenileme dönemleri
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Her vade sonunda net faiz bakiyeye eklenir.
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-bold text-violet-700">
                    <RefreshCw className="h-3.5 w-3.5" />
                    {result.periods.length} dönem
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1040px] text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Vade
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Başlangıç bakiyesi
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Yıllık faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Brüt faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Stopaj
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Net faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Vade sonu
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      {result.periods.map((period) => (
                        <tr
                          key={period.period}
                          className="bg-white transition hover:bg-violet-50/50"
                        >
                          <td className="px-5 py-4">
                            <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-violet-100 px-2 font-black text-violet-700">
                              {period.period}
                            </span>
                          </td>

                          <td className="px-5 py-4 font-semibold text-slate-950">
                            {formatCurrency(
                              period.startingBalance,
                            )}
                          </td>

                          <td className="px-5 py-4 font-bold text-violet-700">
                            %
                            {formatPercent(
                              period.annualInterestRate,
                            )}
                          </td>

                          <td className="px-5 py-4 text-slate-600">
                            {formatCurrency(
                              period.grossInterest,
                            )}
                          </td>

                          <td className="px-5 py-4 text-slate-600">
                            {formatCurrency(
                              period.withholdingTax,
                            )}
                          </td>

                          <td className="px-5 py-4 font-bold text-emerald-700">
                            {formatCurrency(
                              period.netInterest,
                            )}
                          </td>

                          <td className="px-5 py-4 font-black text-slate-950">
                            {formatCurrency(
                              period.endingBalance,
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Hesaplama varsayımı
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-blue-900">
                      Her vade sonunda stopaj kesildikten sonra kalan
                      net faiz tutarının tamamının ana paraya
                      eklendiği ve bekleme süresi olmadan yeniden
                      değerlendirildiği varsayılmıştır.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <RefreshCw className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Hesaplama yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Ana para, vade ve yenileme sayısının sıfırdan
                büyük olduğundan; faiz oranlarının negatif
                olmadığından ve stopaj oranının yüzde
                100&apos;den düşük olduğundan emin olun.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type InputFieldProps = {
  id: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
};

function InputField({
  id,
  label,
  icon,
  children,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
      >
        <span className="text-violet-600">{icon}</span>
        {label}
      </label>

      {children}
    </div>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  description: string;
  icon: ReactNode;
};

function ResultCard({
  label,
  value,
  description,
  icon,
}: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
        {icon}
      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 break-words text-xl font-black text-slate-950">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  description: string;
};

function MetricCard({
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5 text-violet-950">
      <p className="text-xs font-bold uppercase tracking-wide opacity-70">
        {label}
      </p>

      <p className="mt-2 break-words text-2xl font-black">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 opacity-75">
        {description}
      </p>
    </div>
  );
}

type CalculationRowProps = {
  label: string;
  value: string;
  strong?: boolean;
};

function CalculationRow({
  label,
  value,
  strong = false,
}: CalculationRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          strong
            ? "text-sm font-bold text-slate-950"
            : "text-sm text-slate-600"
        }
      >
        {label}
      </span>

      <span
        className={
          strong
            ? "text-right text-base font-black text-violet-700"
            : "text-right text-sm font-bold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
}

type SummaryBoxProps = {
  label: string;
  value: string;
  highlighted?: boolean;
};

function SummaryBox({
  label,
  value,
  highlighted = false,
}: SummaryBoxProps) {
  return (
    <div
      className={`rounded-2xl border p-4 ${
        highlighted
          ? "border-violet-300 bg-violet-600 text-white"
          : "border-amber-200 bg-white/70 text-amber-950"
      }`}
    >
      <p
        className={`text-xs font-bold uppercase tracking-wide ${
          highlighted
            ? "text-violet-100"
            : "text-amber-700"
        }`}
      >
        {label}
      </p>

      <p className="mt-2 break-words text-lg font-black">
        {value}
      </p>
    </div>
  );
}