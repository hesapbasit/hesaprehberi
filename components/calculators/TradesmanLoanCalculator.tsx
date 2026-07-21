"use client";

import { useMemo, useState } from "react";

type PaymentFrequency = 1 | 3 | 6;

type PaymentRow = {
  period: number;
  month: number;
  payment: number;
  principal: number;
  interest: number;
  tax: number;
  remaining: number;
};

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
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

function calculatePeriodicPayment(
  principal: number,
  monthlyRatePercent: number,
  totalMonths: number,
  frequency: PaymentFrequency,
): number {
  if (principal <= 0 || totalMonths <= 0) return 0;

  const paymentCount = Math.ceil(totalMonths / frequency);
  const monthlyRate = monthlyRatePercent / 100;
  const periodicRate = Math.pow(1 + monthlyRate, frequency) - 1;

  if (periodicRate === 0) return principal / paymentCount;

  const factor = Math.pow(1 + periodicRate, paymentCount);
  return principal * ((periodicRate * factor) / (factor - 1));
}

function createPaymentPlan(
  principal: number,
  monthlyRatePercent: number,
  totalMonths: number,
  frequency: PaymentFrequency,
  taxRatePercent: number,
): PaymentRow[] {
  if (
    principal <= 0 ||
    totalMonths <= 0 ||
    monthlyRatePercent < 0 ||
    taxRatePercent < 0
  ) {
    return [];
  }

  const paymentCount = Math.ceil(totalMonths / frequency);
  const monthlyRate = monthlyRatePercent / 100;
  const periodicRate = Math.pow(1 + monthlyRate, frequency) - 1;
  const taxRate = taxRatePercent / 100;
  const basePayment = calculatePeriodicPayment(
    principal,
    monthlyRatePercent,
    totalMonths,
    frequency,
  );

  const rows: PaymentRow[] = [];
  let remaining = principal;

  for (let period = 1; period <= paymentCount; period += 1) {
    const interest = periodicRate === 0 ? 0 : remaining * periodicRate;
    const tax = interest * taxRate;
    let principalPayment = basePayment - interest;
    let payment = basePayment + tax;

    if (period === paymentCount || principalPayment > remaining) {
      principalPayment = remaining;
      payment = principalPayment + interest + tax;
    }

    remaining = Math.max(0, remaining - principalPayment);

    rows.push({
      period,
      month: Math.min(period * frequency, totalMonths),
      payment,
      principal: principalPayment,
      interest,
      tax,
      remaining,
    });
  }

  return rows;
}

export default function TradesmanLoanCalculator() {
  const [businessNeed, setBusinessNeed] = useState("500.000");
  const [equityAmount, setEquityAmount] = useState("50.000");
  const [monthlyRate, setMonthlyRate] = useState("2,95");
  const [term, setTerm] = useState("36");
  const [paymentFrequency, setPaymentFrequency] =
    useState<PaymentFrequency>(1);
  const [commissionRate, setCommissionRate] = useState("0,75");
  const [fixedCosts, setFixedCosts] = useState("3.500");
  const [interestTaxRate, setInterestTaxRate] = useState("0");
  const [showFullPlan, setShowFullPlan] = useState(false);

  const calculation = useMemo(() => {
    const need = parseNumericInput(businessNeed);
    const equity = Math.max(0, parseNumericInput(equityAmount));
    const principal = Math.max(0, need - equity);
    const rate = parseNumericInput(monthlyRate);
    const totalMonths = Math.max(0, Math.floor(parseNumericInput(term)));
    const commission = Math.max(0, parseNumericInput(commissionRate));
    const costs = Math.max(0, parseNumericInput(fixedCosts));
    const taxRate = Math.max(0, parseNumericInput(interestTaxRate));

    const paymentPlan = createPaymentPlan(
      principal,
      rate,
      totalMonths,
      paymentFrequency,
      taxRate,
    );

    const installmentTotal = paymentPlan.reduce(
      (sum, row) => sum + row.payment,
      0,
    );
    const totalInterest = paymentPlan.reduce(
      (sum, row) => sum + row.interest,
      0,
    );
    const totalTax = paymentPlan.reduce((sum, row) => sum + row.tax, 0);
    const commissionAmount = principal * (commission / 100);
    const totalPayment = installmentTotal + commissionAmount + costs;
    const totalFinancingCost = Math.max(0, totalPayment - principal);
    const periodPayment = paymentPlan[0]?.payment ?? 0;
    const monthlyEquivalent =
      paymentFrequency > 0 ? periodPayment / paymentFrequency : 0;
    const ownResourceRatio = need > 0 ? (equity / need) * 100 : 0;
    const financingCostRatio =
      principal > 0 ? (totalFinancingCost / principal) * 100 : 0;

    return {
      need,
      equity,
      principal,
      rate,
      totalMonths,
      commission,
      costs,
      taxRate,
      paymentPlan,
      installmentTotal,
      totalInterest,
      totalTax,
      commissionAmount,
      totalPayment,
      totalFinancingCost,
      periodPayment,
      monthlyEquivalent,
      ownResourceRatio,
      financingCostRatio,
      paymentCount: paymentPlan.length,
      isValid:
        need > 0 &&
        equity >= 0 &&
        equity < need &&
        principal > 0 &&
        rate >= 0 &&
        totalMonths > 0,
    };
  }, [
    businessNeed,
    equityAmount,
    monthlyRate,
    term,
    paymentFrequency,
    commissionRate,
    fixedCosts,
    interestTaxRate,
  ]);

  const visibleRows = showFullPlan
    ? calculation.paymentPlan
    : calculation.paymentPlan.slice(0, 12);

  const paymentFrequencyLabel =
    paymentFrequency === 1
      ? "Aylık"
      : paymentFrequency === 3
        ? "3 ayda bir"
        : "6 ayda bir";

  function resetCalculator() {
    setBusinessNeed("500.000");
    setEquityAmount("50.000");
    setMonthlyRate("2,95");
    setTerm("36");
    setPaymentFrequency(1);
    setCommissionRate("0,75");
    setFixedCosts("3.500");
    setInterestTaxRate("0");
    setShowFullPlan(false);
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-amber-600 to-orange-700 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-100">
          Esnaf finansmanı
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Esnaf Kredisi Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-amber-100">
          İşletme ihtiyacı, öz kaynak, faiz, vade ve ödeme sıklığına göre
          tahmini taksitleri ve toplam finansman maliyetini hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                İşletme ihtiyaç tutarı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={businessNeed}
                  onChange={(event) => setBusinessNeed(event.target.value)}
                  onBlur={() =>
                    setBusinessNeed(
                      formatInputNumber(parseNumericInput(businessNeed)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="İşletme ihtiyaç tutarı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Öz kaynak
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={equityAmount}
                  onChange={(event) => setEquityAmount(event.target.value)}
                  onBlur={() =>
                    setEquityAmount(
                      formatInputNumber(parseNumericInput(equityAmount)) || "0",
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Öz kaynak"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Aylık faiz oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={monthlyRate}
                  onChange={(event) => setMonthlyRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Aylık faiz oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Vade
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Vade"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Ödeme sıklığı
              </span>

              <select
                value={paymentFrequency}
                onChange={(event) =>
                  setPaymentFrequency(
                    Number(event.target.value) as PaymentFrequency,
                  )
                }
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                aria-label="Ödeme sıklığı"
              >
                <option value={1}>Aylık ödeme</option>
                <option value={3}>3 ayda bir ödeme</option>
                <option value={6}>6 ayda bir ödeme</option>
              </select>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Komisyon oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={commissionRate}
                  onChange={(event) => setCommissionRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Komisyon oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Sabit masraflar
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={fixedCosts}
                  onChange={(event) => setFixedCosts(event.target.value)}
                  onBlur={() =>
                    setFixedCosts(
                      formatInputNumber(parseNumericInput(fixedCosts)) || "0",
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Sabit masraflar"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Faiz üzerinden ek vergi / fon oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={interestTaxRate}
                  onChange={(event) => setInterestTaxRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                  aria-label="Faiz üzerinden ek vergi veya fon oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Güncel ve sözleşmeye uygulanacak oranı bankanızdan teyit ederek
                manuel girin.
              </p>
            </label>
          </div>

          {!calculation.isValid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              İhtiyaç tutarı sıfırdan büyük olmalı, öz kaynak ihtiyaç tutarından
              düşük kalmalı ve vade en az 1 ay olmalıdır.
            </div>
          )}

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Kullanılacak kredi
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                {currencyFormatter.format(calculation.principal)}
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-medium text-slate-500">
                Öz kaynak oranı
              </p>
              <p className="mt-2 text-2xl font-bold text-slate-900">
                %{numberFormatter.format(calculation.ownResourceRatio)}
              </p>
            </article>
          </div>

          <button
            type="button"
            onClick={resetCalculator}
            className="mt-6 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Varsayılan değerleri getir
          </button>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-700">
            Finansman sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">
              {paymentFrequencyLabel} tahmini ödeme
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                calculation.isValid ? calculation.periodPayment : 0,
              )}
            </strong>

            {paymentFrequency > 1 && (
              <p className="mt-3 text-sm text-slate-300">
                Aylık karşılığı yaklaşık{" "}
                {currencyFormatter.format(calculation.monthlyEquivalent)}
              </p>
            )}
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Ödeme sayısı</dt>
              <dd className="font-bold text-slate-900">
                {calculation.paymentCount}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Toplam faiz</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.totalInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Faiz kaynaklı ek vergi</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.totalTax : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Komisyon</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.commissionAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Toplam finansman maliyeti
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid
                    ? calculation.totalFinancingCost
                    : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
              <dt className="text-sm font-semibold text-orange-800">
                Toplam geri ödeme
              </dt>
              <dd className="font-bold text-orange-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.totalPayment : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Maliyet oranı</dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(calculation.financingCostRatio)}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Hesaplama tahminidir. Banka koşulları, destek programı, teminat,
            vergi, komisyon ve ödeme planı gerçek sonucu değiştirebilir.
          </p>
        </div>
      </div>

      {calculation.isValid && calculation.paymentPlan.length > 0 && (
        <div className="border-t border-slate-200 p-6 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-700">
                Ödeme planı
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Esnaf kredisi ödeme dağılımı
              </h3>
            </div>

            {calculation.paymentPlan.length > 12 && (
              <button
                type="button"
                onClick={() => setShowFullPlan((current) => !current)}
                className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-100"
              >
                {showFullPlan
                  ? "İlk 12 ödemeyi göster"
                  : `Tüm ${calculation.paymentCount} ödemeyi göster`}
              </button>
            )}
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold text-slate-700">
                    Ödeme
                  </th>
                  <th className="px-4 py-4 text-left font-semibold text-slate-700">
                    Ay
                  </th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">
                    Taksit
                  </th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">
                    Anapara
                  </th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">
                    Faiz
                  </th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">
                    Ek vergi
                  </th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">
                    Kalan borç
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 bg-white">
                {visibleRows.map((row) => (
                  <tr key={row.period} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-900">
                      {row.period}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-slate-700">
                      {row.month}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.payment)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.principal)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.interest)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                      {currencyFormatter.format(row.tax)}
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right font-medium text-slate-900">
                      {currencyFormatter.format(row.remaining)}
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