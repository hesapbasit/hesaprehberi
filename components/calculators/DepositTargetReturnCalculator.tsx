"use client";

import { useMemo, useState } from "react";
import {
  Banknote,
  CalendarDays,
  CircleAlert,
  Landmark,
  Percent,
  RefreshCcw,
  Scale,
  Sparkles,
  Target,
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

export default function DepositTargetReturnCalculator() {
  const [targetNetReturn, setTargetNetReturn] = useState(10000);
  const [annualInterestRate, setAnnualInterestRate] = useState(45);
  const [termDays, setTermDays] = useState(32);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);

  const result = useMemo(() => {
    const annualRateDecimal = annualInterestRate / 100;
    const withholdingDecimal = withholdingTaxRate / 100;

    const netInterestFactor =
      annualRateDecimal *
      (termDays / dayBasis) *
      (1 - withholdingDecimal);

    if (
      targetNetReturn <= 0 ||
      annualInterestRate <= 0 ||
      termDays <= 0 ||
      withholdingTaxRate < 0 ||
      withholdingTaxRate >= 100 ||
      netInterestFactor <= 0
    ) {
      return null;
    }

    const requiredPrincipal = targetNetReturn / netInterestFactor;

    const grossInterest =
      requiredPrincipal *
      annualRateDecimal *
      (termDays / dayBasis);

    const withholdingTax =
      grossInterest * withholdingDecimal;

    const netInterest = grossInterest - withholdingTax;

    const maturityAmount = requiredPrincipal + netInterest;

    const netPeriodReturnRate =
      requiredPrincipal > 0
        ? (netInterest / requiredPrincipal) * 100
        : 0;

    const grossPeriodReturnRate =
      requiredPrincipal > 0
        ? (grossInterest / requiredPrincipal) * 100
        : 0;

    const dailyAverageEarning =
      termDays > 0 ? netInterest / termDays : 0;

    const monthlyAverageEarning =
      termDays > 0 ? (netInterest / termDays) * 30 : 0;

    const estimatedAnnualNetReturn =
      requiredPrincipal > 0
        ? (netInterest / requiredPrincipal) * (365 / termDays) * 100
        : 0;

    return {
      requiredPrincipal,
      grossInterest,
      withholdingTax,
      netInterest,
      maturityAmount,
      netPeriodReturnRate,
      grossPeriodReturnRate,
      dailyAverageEarning,
      monthlyAverageEarning,
      estimatedAnnualNetReturn,
    };
  }, [
    targetNetReturn,
    annualInterestRate,
    termDays,
    withholdingTaxRate,
    dayBasis,
  ]);

  const resetCalculator = () => {
    setTargetNetReturn(10000);
    setAnnualInterestRate(45);
    setTermDays(32);
    setWithholdingTaxRate(15);
    setDayBasis(365);
  };

  const applyPreset = (value: number) => {
    setTargetNetReturn(value);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Hedef odaklı mevduat hesaplama
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Getiri Hedefi
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Hedeflediğiniz net faiz kazancına ulaşmak için ne kadar ana para
              yatırmanız gerektiğini hesaplayın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-700">
              <Target className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-cyan-100">
                Hedef net kazanç
              </p>

              <p className="text-lg font-bold text-white">
                {formatCurrency(targetNetReturn)}
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
                htmlFor="target-net-return"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Target className="h-4 w-4 text-blue-600" />
                Hedeflenen net kazanç
              </label>

              <div className="relative">
                <input
                  id="target-net-return"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(targetNetReturn)}
                  onChange={(event) =>
                    setTargetNetReturn(
                      parseNumberInput(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  aria-describedby="target-net-return-description"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  TL
                </span>
              </div>

              <p
                id="target-net-return-description"
                className="mt-2 text-xs leading-5 text-slate-500"
              >
                Vade sonunda faizden elde etmek istediğiniz net tutarı girin.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {[5000, 10000, 25000, 50000].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => applyPreset(value)}
                    className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                      targetNetReturn === value
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    {formatCurrency(value)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="target-interest-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <TrendingUp className="h-4 w-4 text-blue-600" />
                Yıllık brüt faiz oranı
              </label>

              <div className="relative">
                <input
                  id="target-interest-rate"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="target-term-days"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <CalendarDays className="h-4 w-4 text-blue-600" />
                Vade süresi
              </label>

              <div className="relative">
                <input
                  id="target-term-days"
                  type="number"
                  min="1"
                  max="3650"
                  step="1"
                  value={termDays}
                  onChange={(event) =>
                    setTermDays(
                      Math.max(
                        1,
                        Math.round(Number(event.target.value) || 1),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-blue-400 hover:bg-blue-50"
                    }`}
                  >
                    {day} gün
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="target-withholding-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Scale className="h-4 w-4 text-blue-600" />
                Stopaj oranı
              </label>

              <div className="relative">
                <input
                  id="target-withholding-rate"
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
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <WalletCards className="h-4 w-4 text-blue-600" />
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
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
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
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <p className="text-xs leading-5 text-amber-900">
              Hesaplama, girilen faiz oranının vade boyunca değişmediği ve
              stopajın yalnızca brüt faiz kazancı üzerinden kesildiği
              varsayımına dayanır.
            </p>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {result ? (
            <>
              <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 p-6 text-white shadow-xl shadow-blue-200/50 sm:p-8">
                <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-blue-100">
                      <Landmark className="h-4 w-4" />
                      Gerekli ana para
                    </div>

                    <p className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {formatCurrency(result.requiredPrincipal)}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-blue-100">
                      {termDays} gün sonunda yaklaşık{" "}
                      <strong>{formatCurrency(targetNetReturn)}</strong>{" "}
                      net faiz kazanmak için gereken tahmini tutar.
                    </p>
                  </div>

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-blue-700 shadow-xl">
                    <Target className="h-9 w-9" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <ResultCard
                  label="Brüt faiz"
                  value={formatCurrency(result.grossInterest)}
                  description="Vergi öncesi faiz kazancı"
                  icon={<TrendingUp className="h-5 w-5" />}
                />

                <ResultCard
                  label="Stopaj kesintisi"
                  value={`-${formatCurrency(result.withholdingTax)}`}
                  description={`%${formatPercent(
                    withholdingTaxRate,
                  )} stopaj`}
                  icon={<Scale className="h-5 w-5" />}
                />

                <ResultCard
                  label="Net faiz kazancı"
                  value={formatCurrency(result.netInterest)}
                  description="Hedeflenen net kazanç"
                  icon={<Banknote className="h-5 w-5" />}
                />

                <ResultCard
                  label="Vade sonu toplam"
                  value={formatCurrency(result.maturityAmount)}
                  description="Ana para ve net faiz"
                  icon={<WalletCards className="h-5 w-5" />}
                />

                <ResultCard
                  label="Günlük ortalama"
                  value={formatCurrency(result.dailyAverageEarning)}
                  description="Tahmini günlük net kazanç"
                  icon={<CalendarDays className="h-5 w-5" />}
                />

                <ResultCard
                  label="Aylık karşılığı"
                  value={formatCurrency(result.monthlyAverageEarning)}
                  description="30 günlük tahmini kazanç"
                  icon={<Landmark className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                    Brüt dönem getirisi
                  </p>

                  <p className="mt-2 text-2xl font-black text-blue-950">
                    %{formatPercent(result.grossPeriodReturnRate)}
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                    Net dönem getirisi
                  </p>

                  <p className="mt-2 text-2xl font-black text-emerald-950">
                    %{formatPercent(result.netPeriodReturnRate)}
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-200 bg-violet-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-violet-700">
                    Tahmini yıllık net oran
                  </p>

                  <p className="mt-2 text-2xl font-black text-violet-950">
                    %{formatPercent(result.estimatedAnnualNetReturn)}
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                  <Scale className="h-5 w-5 text-blue-600" />
                  Hesaplama özeti
                </h3>

                <div className="mt-5 space-y-4">
                  <CalculationRow
                    label="Hedef net faiz"
                    value={formatCurrency(targetNetReturn)}
                  />

                  <CalculationRow
                    label="Yıllık brüt faiz oranı"
                    value={`%${formatPercent(annualInterestRate)}`}
                  />

                  <CalculationRow
                    label="Vade"
                    value={`${termDays} gün`}
                  />

                  <CalculationRow
                    label="Stopaj oranı"
                    value={`%${formatPercent(withholdingTaxRate)}`}
                  />

                  <CalculationRow
                    label="Gün esası"
                    value={`${dayBasis} gün`}
                  />

                  <div className="border-t border-slate-200 pt-4">
                    <CalculationRow
                      label="Yatırılması gereken tahmini ana para"
                      value={formatCurrency(result.requiredPrincipal)}
                      strong
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <h3 className="font-bold text-slate-950">
                    Kullanılan formül
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    Gerekli ana para; hedeflenen net kazancın, faiz oranı,
                    vade süresi ve stopaj sonrasında oluşan net faiz
                    katsayısına bölünmesiyle bulunur.
                  </p>

                  <div className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-xs leading-6 text-slate-100">
                    Ana Para = Hedef Net Kazanç ÷
                    <br />
                    [(Faiz Oranı × Vade / Gün Esası) ×
                    <br />
                    (1 − Stopaj Oranı)]
                  </div>
                </div>

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                  <h3 className="font-bold text-cyan-950">
                    Sonuç nasıl yorumlanmalı?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-cyan-900">
                    Faiz oranı yükseldikçe aynı hedef kazanç için gereken ana
                    para azalır. Vade uzadıkça da hedefe ulaşmak için gereken
                    başlangıç tutarı genellikle düşer. Stopaj oranının
                    yükselmesi ise ihtiyaç duyulan ana parayı artırır.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[520px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <Target className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Hesaplama yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Sonuçları görüntülemek için hedef kazanç, faiz oranı ve vade
                süresi alanlarına sıfırdan büyük değerler girin. Stopaj oranı
                yüzde 100&apos;den düşük olmalıdır.
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
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
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
            ? "text-right text-base font-black text-blue-700"
            : "text-right text-sm font-bold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
}