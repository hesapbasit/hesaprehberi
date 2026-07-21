"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Banknote,
  CalendarDays,
  ChartNoAxesCombined,
  CircleDollarSign,
  Gauge,
  Landmark,
  Percent,
  RefreshCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type DayBasis = 360 | 365;

type CalculationResult = {
  grossInterest: number;
  withholdingTax: number;
  netInterest: number;
  nominalMaturityAmount: number;
  periodInflationRate: number;
  inflationAdjustedPrincipal: number;
  realMaturityValue: number;
  realProfitLoss: number;
  nominalReturnRate: number;
  realReturnRate: number;
  purchasingPowerChangeRate: number;
  minimumGrossRateToBeatInflation: number;
  minimumNetRateToBeatInflation: number;
  inflationCost: number;
  dailyNetEarning: number;
  monthlyEquivalentNetEarning: number;
  annualizedNetRate: number;
  isPositiveRealReturn: boolean;
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

export default function DepositRealReturnCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [annualInterestRate, setAnnualInterestRate] = useState(48);
  const [annualInflationRate, setAnnualInflationRate] = useState(35);
  const [termDays, setTermDays] = useState(32);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);

  const result = useMemo<CalculationResult | null>(() => {
    if (
      principal <= 0 ||
      annualInterestRate < 0 ||
      annualInflationRate < 0 ||
      termDays <= 0 ||
      withholdingTaxRate < 0 ||
      withholdingTaxRate >= 100
    ) {
      return null;
    }

    const annualInterestDecimal = annualInterestRate / 100;
    const annualInflationDecimal = annualInflationRate / 100;
    const withholdingDecimal = withholdingTaxRate / 100;
    const termRatio = termDays / dayBasis;

    const grossInterest =
      principal * annualInterestDecimal * termRatio;

    const withholdingTax =
      grossInterest * withholdingDecimal;

    const netInterest =
      grossInterest - withholdingTax;

    const nominalMaturityAmount =
      principal + netInterest;

    const periodInflationRate =
      Math.pow(1 + annualInflationDecimal, termRatio) - 1;

    const inflationAdjustedPrincipal =
      principal * (1 + periodInflationRate);

    const realMaturityValue =
      nominalMaturityAmount / (1 + periodInflationRate);

    const realProfitLoss =
      realMaturityValue - principal;

    const nominalReturnRate =
      principal > 0 ? (netInterest / principal) * 100 : 0;

    const realReturnRate =
      principal > 0 ? (realProfitLoss / principal) * 100 : 0;

    const purchasingPowerChangeRate = realReturnRate;

    const minimumNetRateToBeatInflation =
      termRatio > 0
        ? periodInflationRate / termRatio
        : 0;

    const minimumGrossRateToBeatInflation =
      withholdingDecimal < 1
        ? minimumNetRateToBeatInflation /
          (1 - withholdingDecimal)
        : 0;

    const inflationCost =
      inflationAdjustedPrincipal - principal;

    const dailyNetEarning =
      termDays > 0 ? netInterest / termDays : 0;

    const monthlyEquivalentNetEarning =
      dailyNetEarning * 30;

    const annualizedNetRate =
      annualInterestRate * (1 - withholdingDecimal);

    return {
      grossInterest,
      withholdingTax,
      netInterest,
      nominalMaturityAmount,
      periodInflationRate,
      inflationAdjustedPrincipal,
      realMaturityValue,
      realProfitLoss,
      nominalReturnRate,
      realReturnRate,
      purchasingPowerChangeRate,
      minimumGrossRateToBeatInflation:
        minimumGrossRateToBeatInflation * 100,
      minimumNetRateToBeatInflation:
        minimumNetRateToBeatInflation * 100,
      inflationCost,
      dailyNetEarning,
      monthlyEquivalentNetEarning,
      annualizedNetRate,
      isPositiveRealReturn: realProfitLoss >= 0,
    };
  }, [
    principal,
    annualInterestRate,
    annualInflationRate,
    termDays,
    withholdingTaxRate,
    dayBasis,
  ]);

  const resetCalculator = () => {
    setPrincipal(250000);
    setAnnualInterestRate(48);
    setAnnualInflationRate(35);
    setTermDays(32);
    setWithholdingTaxRate(15);
    setDayBasis(365);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-emerald-100 bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-emerald-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Nominal ve reel getiriyi karşılaştırın
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Enflasyon Sonrası Reel Getiri
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-emerald-100 sm:text-base">
              Mevduat faiz kazancınızın enflasyon karşısındaki gerçek
              değerini, satın alma gücü değişimini ve reel kazanç veya
              kaybınızı hesaplayın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-emerald-700">
              {result?.isPositiveRealReturn ? (
                <ArrowUpRight className="h-5 w-5" />
              ) : (
                <ArrowDownRight className="h-5 w-5" />
              )}
            </div>

            <div>
              <p className="text-xs font-medium text-emerald-100">
                Reel kazanç veya kayıp
              </p>

              <p className="text-lg font-bold text-white">
                {result
                  ? formatCurrency(result.realProfitLoss)
                  : formatCurrency(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[410px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50/80 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <InputField
              id="real-return-principal"
              label="Ana para"
              icon={<Landmark className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="real-return-principal"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(principal)}
                  onChange={(event) =>
                    setPrincipal(
                      parseNumberInput(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
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
              id="real-return-interest"
              label="Yıllık mevduat faiz oranı"
              icon={<TrendingUp className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="real-return-interest"
                  type="number"
                  min="0"
                  max="1000"
                  step="0.01"
                  value={annualInterestRate}
                  onChange={(event) =>
                    setAnnualInterestRate(
                      Math.max(
                        0,
                        Number(event.target.value) || 0,
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </InputField>

            <InputField
              id="real-return-inflation"
              label="Yıllık enflasyon oranı"
              icon={<TrendingDown className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="real-return-inflation"
                  type="number"
                  min="0"
                  max="1000"
                  step="0.01"
                  value={annualInflationRate}
                  onChange={(event) =>
                    setAnnualInflationRate(
                      Math.max(
                        0,
                        Number(event.target.value) || 0,
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </InputField>

            <InputField
              id="real-return-term"
              label="Vade süresi"
              icon={<CalendarDays className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="real-return-term"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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
                        ? "border-emerald-600 bg-emerald-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-emerald-400 hover:bg-emerald-50"
                    }`}
                  >
                    {day} gün
                  </button>
                ))}
              </div>
            </InputField>

            <InputField
              id="real-return-tax"
              label="Stopaj oranı"
              icon={<Scale className="h-4 w-4" />}
            >
              <div className="relative">
                <input
                  id="real-return-tax"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </InputField>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <WalletCards className="h-4 w-4 text-emerald-600" />
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
                          ? "border-emerald-600 bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-emerald-300 hover:bg-emerald-50"
                      }`}
                    >
                      {basis} gün
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <button
              type="button"
              onClick={resetCalculator}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              <RefreshCcw className="h-4 w-4" />
              Varsayılan değerlere dön
            </button>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {result ? (
            <>
              <div
                className={`relative overflow-hidden rounded-3xl border p-6 text-white shadow-xl sm:p-8 ${
                  result.isPositiveRealReturn
                    ? "border-emerald-200 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 shadow-emerald-200/50"
                    : "border-rose-200 bg-gradient-to-br from-rose-600 via-rose-700 to-red-800 shadow-rose-200/50"
                }`}
              >
                <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90">
                      {result.isPositiveRealReturn ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      {result.isPositiveRealReturn
                        ? "Pozitif reel getiri"
                        : "Negatif reel getiri"}
                    </div>

                    <p className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {formatCurrency(result.realProfitLoss)}
                    </p>

                    <p className="mt-2 text-lg font-bold text-white/90">
                      Reel getiri oranı: %
                      {formatPercent(result.realReturnRate)}
                    </p>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-white/80">
                      Vade sonunda paranızın satın alma gücü,
                      başlangıç tutarına göre{" "}
                      <strong className="text-white">
                        {result.isPositiveRealReturn
                          ? "artıyor"
                          : "azalıyor"}
                      </strong>
                      .
                    </p>
                  </div>

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-slate-900 shadow-xl">
                    {result.isPositiveRealReturn ? (
                      <TrendingUp className="h-9 w-9" />
                    ) : (
                      <TrendingDown className="h-9 w-9" />
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <ResultCard
                  label="Net faiz kazancı"
                  value={formatCurrency(result.netInterest)}
                  description="Stopaj sonrası nominal kazanç"
                  icon={<CircleDollarSign className="h-5 w-5" />}
                />

                <ResultCard
                  label="Vade sonu nominal tutar"
                  value={formatCurrency(
                    result.nominalMaturityAmount,
                  )}
                  description="Ana para ve net faiz toplamı"
                  icon={<Banknote className="h-5 w-5" />}
                />

                <ResultCard
                  label="Reel vade sonu değeri"
                  value={formatCurrency(result.realMaturityValue)}
                  description="Enflasyondan arındırılmış değer"
                  icon={<Gauge className="h-5 w-5" />}
                />

                <ResultCard
                  label="Dönem enflasyonu"
                  value={`%${formatPercent(
                    result.periodInflationRate * 100,
                  )}`}
                  description={`${termDays} günlük enflasyon etkisi`}
                  icon={<TrendingDown className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <MetricCard
                  label="Nominal net getiri"
                  value={`%${formatPercent(
                    result.nominalReturnRate,
                  )}`}
                  description="Vade dönemindeki stopaj sonrası getiri"
                />

                <MetricCard
                  label="Reel getiri"
                  value={`%${formatPercent(
                    result.realReturnRate,
                  )}`}
                  description="Enflasyon sonrası satın alma gücü değişimi"
                />

                <MetricCard
                  label="Enflasyon maliyeti"
                  value={formatCurrency(result.inflationCost)}
                  description="Ana paranın dönemsel değer kaybı"
                />
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <ChartNoAxesCombined className="h-5 w-5 text-emerald-600" />
                    Nominal sonuçlar
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Ana para"
                      value={formatCurrency(principal)}
                    />

                    <CalculationRow
                      label="Brüt faiz"
                      value={formatCurrency(
                        result.grossInterest,
                      )}
                    />

                    <CalculationRow
                      label="Stopaj kesintisi"
                      value={formatCurrency(
                        result.withholdingTax,
                      )}
                    />

                    <CalculationRow
                      label="Net faiz"
                      value={formatCurrency(result.netInterest)}
                      strong
                    />

                    <CalculationRow
                      label="Vade sonu tutarı"
                      value={formatCurrency(
                        result.nominalMaturityAmount,
                      )}
                    />
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    Reel sonuçlar
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Enflasyona göre korunması gereken tutar"
                      value={formatCurrency(
                        result.inflationAdjustedPrincipal,
                      )}
                    />

                    <CalculationRow
                      label="Reel vade sonu değeri"
                      value={formatCurrency(
                        result.realMaturityValue,
                      )}
                    />

                    <CalculationRow
                      label="Satın alma gücü değişimi"
                      value={`%${formatPercent(
                        result.purchasingPowerChangeRate,
                      )}`}
                    />

                    <CalculationRow
                      label="Reel kazanç veya kayıp"
                      value={formatCurrency(
                        result.realProfitLoss,
                      )}
                      strong
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-amber-950">
                    <Gauge className="h-5 w-5 text-amber-600" />
                    Enflasyonu aşmak için gereken faiz
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-amber-900">
                    Seçilen vade, stopaj ve enflasyon oranına göre
                    paranızın satın alma gücünü koruyabilmesi için
                    yaklaşık olarak aşağıdaki yıllık faiz oranı
                    gereklidir.
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-amber-200 bg-white/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                        Minimum net faiz
                      </p>

                      <p className="mt-2 text-2xl font-black text-amber-950">
                        %
                        {formatPercent(
                          result.minimumNetRateToBeatInflation,
                        )}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-200 bg-white/70 p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                        Minimum brüt faiz
                      </p>

                      <p className="mt-2 text-2xl font-black text-amber-950">
                        %
                        {formatPercent(
                          result.minimumGrossRateToBeatInflation,
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-blue-950">
                    <WalletCards className="h-5 w-5 text-blue-600" />
                    Kazanç hızı
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Günlük net kazanç"
                      value={formatCurrency(
                        result.dailyNetEarning,
                      )}
                    />

                    <CalculationRow
                      label="30 günlük eşdeğer kazanç"
                      value={formatCurrency(
                        result.monthlyEquivalentNetEarning,
                      )}
                    />

                    <CalculationRow
                      label="Yıllık net faiz oranı"
                      value={`%${formatPercent(
                        result.annualizedNetRate,
                      )}`}
                    />

                    <CalculationRow
                      label="Yıllık enflasyon"
                      value={`%${formatPercent(
                        annualInflationRate,
                      )}`}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-black text-slate-950">
                    Nominal ve reel değer karşılaştırması
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Gösterge
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Tutar
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Açıklama
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      <ComparisonRow
                        label="Başlangıç ana para"
                        value={formatCurrency(principal)}
                        description="Mevduata yatırılan başlangıç tutarı"
                      />

                      <ComparisonRow
                        label="Nominal vade sonu tutarı"
                        value={formatCurrency(
                          result.nominalMaturityAmount,
                        )}
                        description="Hesap bakiyesinde görülen toplam tutar"
                      />

                      <ComparisonRow
                        label="Enflasyona göre korunması gereken tutar"
                        value={formatCurrency(
                          result.inflationAdjustedPrincipal,
                        )}
                        description="Satın alma gücünün korunması için gereken tutar"
                      />

                      <ComparisonRow
                        label="Reel vade sonu değeri"
                        value={formatCurrency(
                          result.realMaturityValue,
                        )}
                        description="Nominal tutarın bugünkü satın alma gücü"
                      />

                      <ComparisonRow
                        label="Reel kazanç veya kayıp"
                        value={formatCurrency(
                          result.realProfitLoss,
                        )}
                        description={
                          result.isPositiveRealReturn
                            ? "Satın alma gücünde artış"
                            : "Satın alma gücünde azalış"
                        }
                        strong
                      />
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <ChartNoAxesCombined className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Hesaplama yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Ana para ve vade süresinin sıfırdan büyük olduğundan,
                faiz ve enflasyon oranlarının negatif olmadığından ve
                stopaj oranının yüzde 100&apos;den düşük olduğundan
                emin olun.
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
        <span className="text-emerald-600">{icon}</span>
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
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
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
    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">
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
            ? "text-right text-base font-black text-emerald-700"
            : "text-right text-sm font-bold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
}

type ComparisonRowProps = {
  label: string;
  value: string;
  description: string;
  strong?: boolean;
};

function ComparisonRow({
  label,
  value,
  description,
  strong = false,
}: ComparisonRowProps) {
  return (
    <tr className={strong ? "bg-emerald-50" : "bg-white"}>
      <td className="px-5 py-4 font-bold text-slate-950">
        {label}
      </td>

      <td
        className={`px-5 py-4 font-black ${
          strong ? "text-emerald-700" : "text-slate-950"
        }`}
      >
        {value}
      </td>

      <td className="px-5 py-4 text-slate-600">
        {description}
      </td>
    </tr>
  );
}