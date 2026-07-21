"use client";

import { useMemo, useState } from "react";

type ContributionTiming = "beginning" | "end";
type Frequency = 1 | 2 | 4 | 12 | 365;

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

type ProjectionRow = {
  period: number;
  invested: number;
  grossBalance: number;
  grossGain: number;
  withholding: number;
  netBalance: number;
};

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("100.000");
  const [annualRate, setAnnualRate] = useState("45");
  const [years, setYears] = useState("5");
  const [compoundingFrequency, setCompoundingFrequency] =
    useState<Frequency>(12);
  const [monthlyContribution, setMonthlyContribution] = useState("5.000");
  const [contributionTiming, setContributionTiming] =
    useState<ContributionTiming>("end");
  const [withholdingRate, setWithholdingRate] = useState("15");
  const [inflationRate, setInflationRate] = useState("25");

  const result = useMemo(() => {
    const principalValue = Math.max(0, parseNumericInput(principal));
    const annualRateValue = Math.max(0, parseNumericInput(annualRate));
    const yearsValue = Math.max(0, parseNumericInput(years));
    const monthlyContributionValue = Math.max(
      0,
      parseNumericInput(monthlyContribution),
    );
    const withholdingRateValue = Math.max(
      0,
      parseNumericInput(withholdingRate),
    );
    const inflationRateValue = Math.max(
      0,
      parseNumericInput(inflationRate),
    );

    const totalMonths = Math.max(0, Math.round(yearsValue * 12));
    const monthlyRate =
      Math.pow(
        1 + annualRateValue / 100 / compoundingFrequency,
        compoundingFrequency / 12,
      ) - 1;

    let grossBalance = principalValue;
    const rows: ProjectionRow[] = [];

    for (let month = 1; month <= totalMonths; month += 1) {
      if (contributionTiming === "beginning") {
        grossBalance += monthlyContributionValue;
      }

      grossBalance *= 1 + monthlyRate;

      if (contributionTiming === "end") {
        grossBalance += monthlyContributionValue;
      }

      if (month % 12 === 0 || month === totalMonths) {
        const invested =
          principalValue + monthlyContributionValue * month;
        const grossGain = Math.max(0, grossBalance - invested);
        const withholding =
          grossGain * (withholdingRateValue / 100);
        const netBalance = grossBalance - withholding;

        rows.push({
          period: month,
          invested,
          grossBalance,
          grossGain,
          withholding,
          netBalance,
        });
      }
    }

    const totalInvested =
      principalValue + monthlyContributionValue * totalMonths;
    const grossGain = Math.max(0, grossBalance - totalInvested);
    const withholdingAmount =
      grossGain * (withholdingRateValue / 100);
    const netGain = Math.max(0, grossGain - withholdingAmount);
    const netBalance = totalInvested + netGain;

    const simpleInterestEquivalent =
      principalValue *
      (annualRateValue / 100) *
      yearsValue;
    const compoundInterestEffect = Math.max(
      0,
      grossGain - simpleInterestEquivalent,
    );

    const effectiveAnnualGrossYield =
      Math.pow(
        1 + annualRateValue / 100 / compoundingFrequency,
        compoundingFrequency,
      ) -
      1;

    const effectiveAnnualNetYield =
      effectiveAnnualGrossYield *
      (1 - withholdingRateValue / 100);

    const realAnnualYield =
      (1 + effectiveAnnualNetYield) /
        (1 + inflationRateValue / 100) -
      1;

    const inflationAdjustedBalance =
      yearsValue > 0
        ? netBalance /
          Math.pow(1 + inflationRateValue / 100, yearsValue)
        : netBalance;

    return {
      principalValue,
      annualRateValue,
      yearsValue,
      monthlyContributionValue,
      withholdingRateValue,
      inflationRateValue,
      totalMonths,
      grossBalance,
      totalInvested,
      grossGain,
      withholdingAmount,
      netGain,
      netBalance,
      simpleInterestEquivalent,
      compoundInterestEffect,
      effectiveAnnualGrossYield:
        effectiveAnnualGrossYield * 100,
      effectiveAnnualNetYield:
        effectiveAnnualNetYield * 100,
      realAnnualYield: realAnnualYield * 100,
      inflationAdjustedBalance,
      rows,
      valid:
        principalValue > 0 &&
        annualRateValue >= 0 &&
        yearsValue > 0 &&
        withholdingRateValue >= 0 &&
        inflationRateValue >= 0,
    };
  }, [
    principal,
    annualRate,
    years,
    compoundingFrequency,
    monthlyContribution,
    contributionTiming,
    withholdingRate,
    inflationRate,
  ]);

  function resetCalculator() {
    setPrincipal("100.000");
    setAnnualRate("45");
    setYears("5");
    setCompoundingFrequency(12);
    setMonthlyContribution("5.000");
    setContributionTiming("end");
    setWithholdingRate("15");
    setInflationRate("25");
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-violet-700 to-indigo-800 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-100">
          Birikimin büyümesini ölçün
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Bileşik Faiz Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-violet-100">
          Ana para, düzenli katkı, faiz oranı, bileşikleşme sıklığı, stopaj ve
          enflasyon verileriyle gelecekteki tahmini birikiminizi hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Başlangıç ana parası
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={principal}
                  onChange={(event) => setPrincipal(event.target.value)}
                  onBlur={() =>
                    setPrincipal(
                      formatInputNumber(parseNumericInput(principal)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Başlangıç ana parası"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Aylık düzenli katkı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={monthlyContribution}
                  onChange={(event) =>
                    setMonthlyContribution(event.target.value)
                  }
                  onBlur={() =>
                    setMonthlyContribution(
                      formatInputNumber(
                        parseNumericInput(monthlyContribution),
                      ),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Aylık düzenli katkı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yıllık brüt faiz oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={annualRate}
                  onChange={(event) => setAnnualRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yıllık brüt faiz oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yatırım süresi
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={years}
                  onChange={(event) => setYears(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yatırım süresi"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Yıl
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Bileşikleşme sıklığı
              </span>

              <select
                value={compoundingFrequency}
                onChange={(event) =>
                  setCompoundingFrequency(
                    Number(event.target.value) as Frequency,
                  )
                }
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-4 text-base font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                aria-label="Bileşikleşme sıklığı"
              >
                <option value={1}>Yıllık</option>
                <option value={2}>6 aylık</option>
                <option value={4}>3 aylık</option>
                <option value={12}>Aylık</option>
                <option value={365}>Günlük</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Katkı zamanı
              </span>

              <select
                value={contributionTiming}
                onChange={(event) =>
                  setContributionTiming(
                    event.target.value as ContributionTiming,
                  )
                }
                className="mt-2 w-full rounded-2xl border border-slate-300 px-4 py-4 text-base font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                aria-label="Katkı zamanı"
              >
                <option value="end">Ay sonunda</option>
                <option value="beginning">Ay başında</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Stopaj oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={withholdingRate}
                  onChange={(event) =>
                    setWithholdingRate(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Stopaj oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yıllık enflasyon
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={inflationRate}
                  onChange={(event) => setInflationRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yıllık enflasyon oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>
          </div>

          {!result.valid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Ana para ve yatırım süresi sıfırdan büyük olmalıdır. Oranlar
              negatif olamaz.
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
            Bileşik faiz sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">
              Stopaj sonrası toplam birikim
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                result.valid ? result.netBalance : 0,
              )}
            </strong>

            <p className="mt-3 text-sm text-slate-300">
              Toplam net kazanç:{" "}
              {currencyFormatter.format(
                result.valid ? result.netGain : 0,
              )}
            </p>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Toplam yatırılan tutar
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.totalInvested : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Brüt vade sonu tutarı
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.grossBalance : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Brüt faiz kazancı</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.grossGain : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Stopaj tutarı</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.withholdingAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-violet-200 bg-violet-50 p-4">
              <dt className="text-sm font-semibold text-violet-800">
                Net faiz kazancı
              </dt>
              <dd className="font-bold text-violet-900">
                {currencyFormatter.format(
                  result.valid ? result.netGain : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Faizin faize etkisi
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.compoundInterestEffect : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık brüt getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid
                    ? result.effectiveAnnualGrossYield
                    : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık net getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid
                    ? result.effectiveAnnualNetYield
                    : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Tahmini yıllık reel getiri
              </dt>
              <dd
                className={`font-bold ${
                  result.realAnnualYield >= 0
                    ? "text-emerald-700"
                    : "text-rose-700"
                }`}
              >
                %{numberFormatter.format(
                  result.valid ? result.realAnnualYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Enflasyondan arındırılmış değer
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid
                    ? result.inflationAdjustedBalance
                    : 0,
                )}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Hesaplama tahminidir. Gerçek ürünlerde faiz tahakkuku, stopaj,
            valör, katkı zamanı ve bileşikleşme yöntemi farklılık gösterebilir.
          </p>
        </div>
      </div>

      {result.valid && result.rows.length > 0 && (
        <div className="border-t border-slate-200 p-6 md:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
                Dönemsel büyüme
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Yıllara Göre Birikim Tablosu
              </h3>
            </div>

            <p className="text-sm text-slate-500">
              {result.totalMonths} aylık tahmini projeksiyon
            </p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold text-slate-700">
                    Dönem
                  </th>
                  <th className="px-5 py-4 text-right font-semibold text-slate-700">
                    Yatırılan
                  </th>
                  <th className="px-5 py-4 text-right font-semibold text-slate-700">
                    Brüt birikim
                  </th>
                  <th className="px-5 py-4 text-right font-semibold text-slate-700">
                    Brüt kazanç
                  </th>
                  <th className="px-5 py-4 text-right font-semibold text-slate-700">
                    Stopaj
                  </th>
                  <th className="px-5 py-4 text-right font-semibold text-slate-700">
                    Net birikim
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {result.rows.map((row) => (
                  <tr key={row.period}>
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                      {row.period % 12 === 0
                        ? `${row.period / 12}. yıl`
                        : `${row.period}. ay`}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.invested)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.grossBalance)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.grossGain)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.withholding)}
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-violet-800">
                      {currencyFormatter.format(row.netBalance)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}