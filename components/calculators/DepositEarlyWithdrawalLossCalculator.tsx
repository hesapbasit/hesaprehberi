"use client";

import { useMemo, useState } from "react";
import {
  AlertTriangle,
  Banknote,
  CalendarClock,
  CalendarDays,
  CircleDollarSign,
  Landmark,
  Percent,
  RefreshCcw,
  Scale,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type DayBasis = 360 | 365;

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

export default function DepositEarlyWithdrawalLossCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [annualInterestRate, setAnnualInterestRate] = useState(45);
  const [totalTermDays, setTotalTermDays] = useState(90);
  const [elapsedDays, setElapsedDays] = useState(30);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [earlyWithdrawalRate, setEarlyWithdrawalRate] = useState(0);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);

  const result = useMemo(() => {
    if (
      principal <= 0 ||
      annualInterestRate < 0 ||
      totalTermDays <= 0 ||
      elapsedDays < 0 ||
      withholdingTaxRate < 0 ||
      withholdingTaxRate >= 100 ||
      earlyWithdrawalRate < 0
    ) {
      return null;
    }

    const safeElapsedDays = Math.min(elapsedDays, totalTermDays);

    const annualRateDecimal = annualInterestRate / 100;
    const withholdingDecimal = withholdingTaxRate / 100;
    const earlyWithdrawalRateDecimal = earlyWithdrawalRate / 100;

    const normalGrossInterest =
      principal *
      annualRateDecimal *
      (totalTermDays / dayBasis);

    const normalWithholdingTax =
      normalGrossInterest * withholdingDecimal;

    const normalNetInterest =
      normalGrossInterest - normalWithholdingTax;

    const normalMaturityAmount =
      principal + normalNetInterest;

    const earlyGrossInterest =
      principal *
      earlyWithdrawalRateDecimal *
      (safeElapsedDays / dayBasis);

    const earlyWithholdingTax =
      earlyGrossInterest * withholdingDecimal;

    const earlyNetInterest =
      earlyGrossInterest - earlyWithholdingTax;

    const earlyWithdrawalAmount =
      principal + earlyNetInterest;

    const lostNetEarning =
      normalNetInterest - earlyNetInterest;

    const lostGrossEarning =
      normalGrossInterest - earlyGrossInterest;

    const lossRate =
      normalNetInterest > 0
        ? (lostNetEarning / normalNetInterest) * 100
        : 0;

    const earnedShare =
      normalNetInterest > 0
        ? (earlyNetInterest / normalNetInterest) * 100
        : 0;

    const elapsedTermRatio =
      totalTermDays > 0
        ? (safeElapsedDays / totalTermDays) * 100
        : 0;

    const remainingDays =
      Math.max(totalTermDays - safeElapsedDays, 0);

    const normalDailyNetEarning =
      totalTermDays > 0
        ? normalNetInterest / totalTermDays
        : 0;

    const earlyDailyNetEarning =
      safeElapsedDays > 0
        ? earlyNetInterest / safeElapsedDays
        : 0;

    const forfeitedFutureEarning =
      normalNetInterest -
      normalDailyNetEarning * safeElapsedDays;

    const rateDifference =
      annualInterestRate - earlyWithdrawalRate;

    return {
      safeElapsedDays,
      normalGrossInterest,
      normalWithholdingTax,
      normalNetInterest,
      normalMaturityAmount,
      earlyGrossInterest,
      earlyWithholdingTax,
      earlyNetInterest,
      earlyWithdrawalAmount,
      lostNetEarning,
      lostGrossEarning,
      lossRate,
      earnedShare,
      elapsedTermRatio,
      remainingDays,
      normalDailyNetEarning,
      earlyDailyNetEarning,
      forfeitedFutureEarning,
      rateDifference,
    };
  }, [
    principal,
    annualInterestRate,
    totalTermDays,
    elapsedDays,
    withholdingTaxRate,
    earlyWithdrawalRate,
    dayBasis,
  ]);

  const resetCalculator = () => {
    setPrincipal(250000);
    setAnnualInterestRate(45);
    setTotalTermDays(90);
    setElapsedDays(30);
    setWithholdingTaxRate(15);
    setEarlyWithdrawalRate(0);
    setDayBasis(365);
  };

  const handleTotalTermChange = (value: number) => {
    const safeValue = Math.max(1, Math.round(value || 1));

    setTotalTermDays(safeValue);
    setElapsedDays((currentValue) =>
      Math.min(currentValue, safeValue),
    );
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-rose-100 bg-gradient-to-br from-slate-950 via-rose-950 to-orange-900 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-orange-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-rose-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-orange-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Vade bozma etkisini karşılaştırın
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Erken Bozma Kaybı
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-rose-100 sm:text-base">
              Vadeli mevduatınızı vade bitmeden bozmanız halinde
              oluşabilecek tahmini faiz kaybını ve elinize geçecek tutarı
              hesaplayın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-rose-700">
              <TrendingDown className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-rose-100">
                Tahmini kayıp
              </p>

              <p className="text-lg font-bold text-white">
                {result
                  ? formatCurrency(result.lostNetEarning)
                  : formatCurrency(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[390px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50/80 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="early-withdrawal-principal"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Landmark className="h-4 w-4 text-rose-600" />
                Ana para
              </label>

              <div className="relative">
                <input
                  id="early-withdrawal-principal"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(principal)}
                  onChange={(event) =>
                    setPrincipal(
                      parseNumberInput(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
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
                          ? "border-rose-600 bg-rose-600 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-rose-400 hover:bg-rose-50"
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
            </div>

            <div>
              <label
                htmlFor="normal-interest-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <TrendingUp className="h-4 w-4 text-rose-600" />
                Yıllık mevduat faiz oranı
              </label>

              <div className="relative">
                <input
                  id="normal-interest-rate"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="total-term-days"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <CalendarDays className="h-4 w-4 text-rose-600" />
                Toplam vade süresi
              </label>

              <div className="relative">
                <input
                  id="total-term-days"
                  type="number"
                  min="1"
                  max="3650"
                  step="1"
                  value={totalTermDays}
                  onChange={(event) =>
                    handleTotalTermChange(
                      Number(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
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
                    onClick={() => handleTotalTermChange(day)}
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition ${
                      totalTermDays === day
                        ? "border-rose-600 bg-rose-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-rose-400 hover:bg-rose-50"
                    }`}
                  >
                    {day} gün
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="elapsed-days"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <CalendarClock className="h-4 w-4 text-rose-600" />
                Geçen gün sayısı
              </label>

              <div className="relative">
                <input
                  id="elapsed-days"
                  type="number"
                  min="0"
                  max={totalTermDays}
                  step="1"
                  value={elapsedDays}
                  onChange={(event) =>
                    setElapsedDays(
                      Math.min(
                        totalTermDays,
                        Math.max(
                          0,
                          Math.round(
                            Number(event.target.value) || 0,
                          ),
                        ),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  gün
                </span>
              </div>

              <input
                type="range"
                min="0"
                max={totalTermDays}
                step="1"
                value={Math.min(elapsedDays, totalTermDays)}
                onChange={(event) =>
                  setElapsedDays(Number(event.target.value))
                }
                className="mt-4 w-full accent-rose-600"
                aria-label="Geçen gün sayısı"
              />

              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>Başlangıç</span>
                <span>Vade sonu</span>
              </div>
            </div>

            <div>
              <label
                htmlFor="early-withdrawal-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <ShieldAlert className="h-4 w-4 text-rose-600" />
                Erken bozma faiz oranı
              </label>

              <div className="relative">
                <input
                  id="early-withdrawal-rate"
                  type="number"
                  min="0"
                  max="1000"
                  step="0.01"
                  value={earlyWithdrawalRate}
                  onChange={(event) =>
                    setEarlyWithdrawalRate(
                      Math.max(
                        0,
                        Number(event.target.value) || 0,
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Banka erken bozma halinde faiz ödemiyorsa bu alanı sıfır
                bırakın.
              </p>
            </div>

            <div>
              <label
                htmlFor="early-withdrawal-tax"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Scale className="h-4 w-4 text-rose-600" />
                Stopaj oranı
              </label>

              <div className="relative">
                <input
                  id="early-withdrawal-tax"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <WalletCards className="h-4 w-4 text-rose-600" />
                Faiz gün hesabı
              </legend>

              <div className="grid grid-cols-2 gap-3">
                {[360, 365].map((basis) => {
                  const isActive = dayBasis === basis;

                  return (
                    <button
                      key={basis}
                      type="button"
                      onClick={() => setDayBasis(basis as DayBasis)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border-rose-600 bg-rose-600 text-white shadow-lg shadow-rose-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-rose-300 hover:bg-rose-50"
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

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <p className="text-xs leading-5 text-amber-900">
              Bankaların erken bozma uygulamaları farklı olabilir. Bazı
              bankalar hiç faiz ödemezken bazıları düşük bir oran üzerinden
              kısmi faiz verebilir.
            </p>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {result ? (
            <>
              <div className="relative overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-600 via-rose-700 to-orange-700 p-6 text-white shadow-xl shadow-rose-200/50 sm:p-8">
                <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-rose-100">
                      <TrendingDown className="h-4 w-4" />
                      Tahmini net kazanç kaybı
                    </div>

                    <p className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {formatCurrency(result.lostNetEarning)}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-rose-100">
                      Mevduat {result.safeElapsedDays}. günde bozulursa,
                      normal vade sonuna kıyasla tahmini kayıp.
                    </p>
                  </div>

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-rose-700 shadow-xl">
                    <CircleDollarSign className="h-9 w-9" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <ResultCard
                  label="Normal net faiz"
                  value={formatCurrency(result.normalNetInterest)}
                  description="Vade sonuna kadar beklenirse"
                  icon={<TrendingUp className="h-5 w-5" />}
                />

                <ResultCard
                  label="Erken bozma net faizi"
                  value={formatCurrency(result.earlyNetInterest)}
                  description={`${result.safeElapsedDays} günlük tahmini kazanç`}
                  icon={<Banknote className="h-5 w-5" />}
                />

                <ResultCard
                  label="Kaybedilen net faiz"
                  value={formatCurrency(result.lostNetEarning)}
                  description="Normal vadeye göre fark"
                  icon={<TrendingDown className="h-5 w-5" />}
                />

                <ResultCard
                  label="Normal vade sonu"
                  value={formatCurrency(result.normalMaturityAmount)}
                  description="Ana para ve normal net faiz"
                  icon={<Landmark className="h-5 w-5" />}
                />

                <ResultCard
                  label="Erken bozma sonrası"
                  value={formatCurrency(result.earlyWithdrawalAmount)}
                  description="Ana para ve erken bozma faizi"
                  icon={<WalletCards className="h-5 w-5" />}
                />

                <ResultCard
                  label="Kalan vade"
                  value={`${result.remainingDays} gün`}
                  description="Vadenin tamamlanmasına kalan süre"
                  icon={<CalendarClock className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <MetricCard
                  label="Kazanç kaybı oranı"
                  value={`%${formatPercent(result.lossRate)}`}
                  description="Normal net faizin kaybedilen kısmı"
                  variant="rose"
                />

                <MetricCard
                  label="Elde edilen kazanç payı"
                  value={`%${formatPercent(result.earnedShare)}`}
                  description="Normal kazancın korunabilen kısmı"
                  variant="emerald"
                />

                <MetricCard
                  label="Vadenin tamamlanan kısmı"
                  value={`%${formatPercent(
                    result.elapsedTermRatio,
                  )}`}
                  description={`${result.safeElapsedDays} / ${totalTermDays} gün`}
                  variant="blue"
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-black text-slate-950">
                    Normal vade ve erken bozma karşılaştırması
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[700px] text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Hesaplama kalemi
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Normal vade
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Erken bozma
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Fark
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      <ComparisonRow
                        label="Brüt faiz"
                        normalValue={formatCurrency(
                          result.normalGrossInterest,
                        )}
                        earlyValue={formatCurrency(
                          result.earlyGrossInterest,
                        )}
                        difference={formatCurrency(
                          result.lostGrossEarning,
                        )}
                      />

                      <ComparisonRow
                        label="Stopaj kesintisi"
                        normalValue={formatCurrency(
                          result.normalWithholdingTax,
                        )}
                        earlyValue={formatCurrency(
                          result.earlyWithholdingTax,
                        )}
                        difference={formatCurrency(
                          result.normalWithholdingTax -
                            result.earlyWithholdingTax,
                        )}
                      />

                      <ComparisonRow
                        label="Net faiz"
                        normalValue={formatCurrency(
                          result.normalNetInterest,
                        )}
                        earlyValue={formatCurrency(
                          result.earlyNetInterest,
                        )}
                        difference={formatCurrency(
                          result.lostNetEarning,
                        )}
                        highlight
                      />

                      <ComparisonRow
                        label="Toplam tutar"
                        normalValue={formatCurrency(
                          result.normalMaturityAmount,
                        )}
                        earlyValue={formatCurrency(
                          result.earlyWithdrawalAmount,
                        )}
                        difference={formatCurrency(
                          result.normalMaturityAmount -
                            result.earlyWithdrawalAmount,
                        )}
                      />
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <Scale className="h-5 w-5 text-rose-600" />
                    Hesaplama özeti
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Ana para"
                      value={formatCurrency(principal)}
                    />

                    <CalculationRow
                      label="Normal faiz oranı"
                      value={`%${formatPercent(
                        annualInterestRate,
                      )}`}
                    />

                    <CalculationRow
                      label="Erken bozma faiz oranı"
                      value={`%${formatPercent(
                        earlyWithdrawalRate,
                      )}`}
                    />

                    <CalculationRow
                      label="Faiz oranı farkı"
                      value={`%${formatPercent(
                        result.rateDifference,
                      )}`}
                    />

                    <CalculationRow
                      label="Toplam vade"
                      value={`${totalTermDays} gün`}
                    />

                    <CalculationRow
                      label="Bozulan gün"
                      value={`${result.safeElapsedDays}. gün`}
                    />

                    <CalculationRow
                      label="Stopaj"
                      value={`%${formatPercent(
                        withholdingTaxRate,
                      )}`}
                    />

                    <div className="border-t border-slate-200 pt-4">
                      <CalculationRow
                        label="Toplam tahmini kayıp"
                        value={formatCurrency(
                          result.lostNetEarning,
                        )}
                        strong
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-orange-950">
                    <ShieldAlert className="h-5 w-5 text-orange-600" />
                    Sonuç nasıl yorumlanmalı?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-orange-900">
                    Erken bozma faiz oranı normal mevduat faizinden düşük
                    oldukça kazanç kaybı artar. Banka erken bozma halinde
                    sıfır faiz uyguluyorsa yalnızca ana paranız geri alınır ve
                    vade boyunca beklenmesi halinde kazanılacak net faizin
                    tamamı kaybedilmiş kabul edilir.
                  </p>

                  <div className="mt-5 rounded-2xl border border-orange-200 bg-white/70 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-orange-700">
                      Tamamlanmamış vadeden kaynaklanan tahmini kazanç
                    </p>

                    <p className="mt-2 text-2xl font-black text-orange-950">
                      {formatCurrency(
                        result.forfeitedFutureEarning,
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-lg font-black text-slate-950">
                  Günlük net kazanç karşılaştırması
                </h3>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <DailyEarningCard
                    label="Normal mevduat günlük net kazancı"
                    value={formatCurrency(
                      result.normalDailyNetEarning,
                    )}
                    description={`%${formatPercent(
                      annualInterestRate,
                    )} yıllık faiz üzerinden`}
                  />

                  <DailyEarningCard
                    label="Erken bozma günlük net kazancı"
                    value={formatCurrency(
                      result.earlyDailyNetEarning,
                    )}
                    description={`%${formatPercent(
                      earlyWithdrawalRate,
                    )} yıllık faiz üzerinden`}
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <TrendingDown className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Hesaplama yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Ana para ve vade süresi alanlarına sıfırdan büyük değerler
                girin. Stopaj oranının yüzde 100&apos;den düşük olduğundan
                emin olun.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  description: string;
  icon: React.ReactNode;
};

function ResultCard({
  label,
  value,
  description,
  icon,
}: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
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
  variant: "rose" | "emerald" | "blue";
};

function MetricCard({
  label,
  value,
  description,
  variant,
}: MetricCardProps) {
  const variantClasses = {
    rose: "border-rose-200 bg-rose-50 text-rose-950",
    emerald:
      "border-emerald-200 bg-emerald-50 text-emerald-950",
    blue: "border-blue-200 bg-blue-50 text-blue-950",
  };

  return (
    <div
      className={`rounded-2xl border p-5 ${variantClasses[variant]}`}
    >
      <p className="text-xs font-bold uppercase tracking-wide opacity-70">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black">{value}</p>

      <p className="mt-2 text-xs leading-5 opacity-75">
        {description}
      </p>
    </div>
  );
}

type ComparisonRowProps = {
  label: string;
  normalValue: string;
  earlyValue: string;
  difference: string;
  highlight?: boolean;
};

function ComparisonRow({
  label,
  normalValue,
  earlyValue,
  difference,
  highlight = false,
}: ComparisonRowProps) {
  return (
    <tr className={highlight ? "bg-rose-50" : "bg-white"}>
      <td className="px-5 py-4 font-bold text-slate-950">
        {label}
      </td>

      <td className="px-5 py-4 font-semibold text-emerald-700">
        {normalValue}
      </td>

      <td className="px-5 py-4 font-semibold text-orange-700">
        {earlyValue}
      </td>

      <td className="px-5 py-4 font-black text-rose-700">
        {difference}
      </td>
    </tr>
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
            ? "text-right text-base font-black text-rose-700"
            : "text-right text-sm font-bold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
}

type DailyEarningCardProps = {
  label: string;
  value: string;
  description: string;
};

function DailyEarningCard({
  label,
  value,
  description,
}: DailyEarningCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 text-2xl font-black text-slate-950">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}