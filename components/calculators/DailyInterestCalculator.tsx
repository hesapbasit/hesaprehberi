"use client";

import { useMemo, useState } from "react";

type InterestMethod = "simple" | "compound";
type DayCountBasis = 360 | 365;

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 4,
});

function parseNumericInput(value: string): number {
  const normalized = value
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatInputNumber(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "";

  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 2,
  }).format(value);
}

function calculateGrossInterest({
  principal,
  annualRate,
  days,
  basis,
  method,
}: {
  principal: number;
  annualRate: number;
  days: number;
  basis: DayCountBasis;
  method: InterestMethod;
}): number {
  if (principal <= 0 || annualRate < 0 || days <= 0) return 0;

  const rateDecimal = annualRate / 100;

  if (method === "simple") {
    return principal * rateDecimal * (days / basis);
  }

  return principal * Math.pow(1 + rateDecimal / basis, days) - principal;
}

export default function DailyInterestCalculator() {
  const [principal, setPrincipal] = useState("100.000");
  const [annualRate, setAnnualRate] = useState("45");
  const [days, setDays] = useState("30");
  const [withholdingRate, setWithholdingRate] = useState("15");
  const [dayCountBasis, setDayCountBasis] = useState<DayCountBasis>(365);
  const [interestMethod, setInterestMethod] = useState<InterestMethod>("simple");

  const result = useMemo(() => {
    const principalValue = Math.max(0, parseNumericInput(principal));
    const annualRateValue = Math.max(0, parseNumericInput(annualRate));
    const daysValue = Math.max(0, Math.floor(parseNumericInput(days)));
    const withholdingRateValue = Math.max(0, parseNumericInput(withholdingRate));

    const grossInterest = calculateGrossInterest({
      principal: principalValue,
      annualRate: annualRateValue,
      days: daysValue,
      basis: dayCountBasis,
      method: interestMethod,
    });

    const withholdingAmount = grossInterest * (withholdingRateValue / 100);
    const netInterest = Math.max(0, grossInterest - withholdingAmount);
    const maturityAmount = principalValue + netInterest;
    const dailyGrossInterest = daysValue > 0 ? grossInterest / daysValue : 0;
    const dailyNetInterest = daysValue > 0 ? netInterest / daysValue : 0;
    const weeklyNetInterest = dailyNetInterest * 7;
    const monthlyEquivalentNetInterest = dailyNetInterest * (dayCountBasis / 12);
    const netPeriodYield = principalValue > 0 ? (netInterest / principalValue) * 100 : 0;
    const effectiveAnnualNetYield =
      principalValue > 0 && daysValue > 0
        ? (Math.pow(maturityAmount / principalValue, dayCountBasis / daysValue) - 1) * 100
        : 0;

    return {
      daysValue,
      grossInterest,
      withholdingAmount,
      netInterest,
      maturityAmount,
      dailyGrossInterest,
      dailyNetInterest,
      weeklyNetInterest,
      monthlyEquivalentNetInterest,
      netPeriodYield,
      effectiveAnnualNetYield,
      valid:
        principalValue > 0 &&
        annualRateValue >= 0 &&
        daysValue > 0 &&
        withholdingRateValue >= 0,
    };
  }, [principal, annualRate, days, withholdingRate, dayCountBasis, interestMethod]);

  function resetCalculator() {
    setPrincipal("100.000");
    setAnnualRate("45");
    setDays("30");
    setWithholdingRate("15");
    setDayCountBasis(365);
    setInterestMethod("simple");
  }

  return (
    <section id="hesaplama-araci" className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 bg-gradient-to-r from-sky-700 to-cyan-800 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">Gün bazlı getiri</p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">Günlük Faiz Hesaplama Aracı</h2>
        <p className="mt-4 max-w-3xl leading-7 text-sky-100">
          Ana para, yıllık faiz oranı, gün sayısı ve stopaj oranına göre günlük brüt kazanç, net faiz ve vade sonu tutarını hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.06fr_0.94fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">Ana para</span>
              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={principal}
                  onChange={(event) => setPrincipal(event.target.value)}
                  onBlur={() => setPrincipal(formatInputNumber(parseNumericInput(principal)))}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  aria-label="Ana para"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">TL</span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Yıllık brüt faiz oranı</span>
              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={annualRate}
                  onChange={(event) => setAnnualRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  aria-label="Yıllık brüt faiz oranı"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">%</span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Gün sayısı</span>
              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="3650"
                  value={days}
                  onChange={(event) => setDays(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-14 text-lg font-semibold text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  aria-label="Gün sayısı"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">Gün</span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">Stopaj oranı</span>
              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={withholdingRate}
                  onChange={(event) => setWithholdingRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                  aria-label="Stopaj oranı"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">%</span>
              </div>
            </label>

            <fieldset className="block">
              <legend className="text-sm font-semibold text-slate-800">Gün sayım esası</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
                {[360, 365].map((basis) => (
                  <button
                    key={basis}
                    type="button"
                    onClick={() => setDayCountBasis(basis as DayCountBasis)}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      dayCountBasis === basis
                        ? "bg-white text-sky-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {basis} gün
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="block sm:col-span-2">
              <legend className="text-sm font-semibold text-slate-800">Faiz yöntemi</legend>
              <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
                <button
                  type="button"
                  onClick={() => setInterestMethod("simple")}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    interestMethod === "simple"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Basit faiz
                </button>
                <button
                  type="button"
                  onClick={() => setInterestMethod("compound")}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    interestMethod === "compound"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Günlük bileşik faiz
                </button>
              </div>
            </fieldset>
          </div>

          {!result.valid && (
            <div role="alert" className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
              Ana para ve gün sayısı sıfırdan büyük olmalıdır. Faiz ve stopaj oranları negatif olamaz.
            </div>
          )}

          <button
            type="button"
            onClick={resetCalculator}
            className="mt-8 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Varsayılan değerleri getir
          </button>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">Günlük faiz sonucu</p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">Günlük net kazanç</span>
            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(result.valid ? result.dailyNetInterest : 0)}
            </strong>
            <p className="mt-3 text-sm text-slate-300">
              {result.daysValue} gün sonunda tahmini net faiz: {currencyFormatter.format(result.valid ? result.netInterest : 0)}
            </p>
          </div>

          <dl className="mt-6 space-y-4">
            {[
              ["Günlük brüt kazanç", currencyFormatter.format(result.valid ? result.dailyGrossInterest : 0)],
              ["Toplam brüt faiz", currencyFormatter.format(result.valid ? result.grossInterest : 0)],
              ["Stopaj tutarı", currencyFormatter.format(result.valid ? result.withholdingAmount : 0)],
              ["Toplam net faiz", currencyFormatter.format(result.valid ? result.netInterest : 0)],
              ["Vade sonu tutarı", currencyFormatter.format(result.valid ? result.maturityAmount : 0)],
              ["Haftalık eşdeğer net kazanç", currencyFormatter.format(result.valid ? result.weeklyNetInterest : 0)],
              ["Aylık eşdeğer net kazanç", currencyFormatter.format(result.valid ? result.monthlyEquivalentNetInterest : 0)],
              ["Net dönem getirisi", `%${numberFormatter.format(result.valid ? result.netPeriodYield : 0)}`],
              ["Efektif yıllık net getiri", `%${numberFormatter.format(result.valid ? result.effectiveAnnualNetYield : 0)}`],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
                <dt className="text-sm text-slate-600">{label}</dt>
                <dd className="font-bold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Sonuçlar tahminidir. Bankanın valör, gün sayım esası, faiz işleyişi ve yürürlükteki stopaj oranı gerçek sonucu değiştirebilir.
          </p>
        </div>
      </div>
    </section>
  );
}