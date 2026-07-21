"use client";

import { useMemo, useState } from "react";

type PaymentRow = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remaining: number;
};

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
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

function calculateMonthlyPayment(
  principal: number,
  monthlyRatePercent: number,
  term: number,
): number {
  if (principal <= 0 || term <= 0) return 0;

  const monthlyRate = monthlyRatePercent / 100;

  if (monthlyRate === 0) return principal / term;

  const factor = Math.pow(1 + monthlyRate, term);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

function createPaymentPlan(
  principal: number,
  monthlyRatePercent: number,
  term: number,
  monthlyPayment: number,
): PaymentRow[] {
  if (principal <= 0 || term <= 0 || monthlyPayment <= 0) return [];

  const monthlyRate = monthlyRatePercent / 100;
  const rows: PaymentRow[] = [];
  let remaining = principal;

  for (let month = 1; month <= term; month += 1) {
    const interest = monthlyRate === 0 ? 0 : remaining * monthlyRate;
    let principalPayment = monthlyPayment - interest;
    let payment = monthlyPayment;

    if (month === term || principalPayment > remaining) {
      principalPayment = remaining;
      payment = principalPayment + interest;
    }

    remaining = Math.max(0, remaining - principalPayment);

    rows.push({
      month,
      payment,
      principal: principalPayment,
      interest,
      remaining,
    });
  }

  return rows;
}

export default function PersonalLoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("100.000");
  const [monthlyRate, setMonthlyRate] = useState("4,49");
  const [term, setTerm] = useState("24");
  const [showFullPlan, setShowFullPlan] = useState(false);

  const calculation = useMemo(() => {
    const principal = parseNumericInput(loanAmount);
    const monthlyRateValue = parseNumericInput(monthlyRate);
    const termValue = Math.max(0, Math.floor(parseNumericInput(term)));

    const monthlyPayment = calculateMonthlyPayment(
      principal,
      monthlyRateValue,
      termValue,
    );

    const paymentPlan = createPaymentPlan(
      principal,
      monthlyRateValue,
      termValue,
      monthlyPayment,
    );

    const totalPayment = paymentPlan.reduce(
      (sum, row) => sum + row.payment,
      0,
    );

    return {
      principal,
      monthlyRateValue,
      termValue,
      monthlyPayment,
      totalPayment,
      totalInterest: Math.max(0, totalPayment - principal),
      paymentPlan,
      isValid:
        principal > 0 &&
        monthlyRateValue >= 0 &&
        termValue > 0,
    };
  }, [loanAmount, monthlyRate, term]);

  const visibleRows = showFullPlan
    ? calculation.paymentPlan
    : calculation.paymentPlan.slice(0, 12);

  function resetCalculator() {
    setLoanAmount("100.000");
    setMonthlyRate("4,49");
    setTerm("24");
    setShowFullPlan(false);
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
          Bireysel finansman
        </p>
        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          İhtiyaç Kredisi Hesaplama Aracı
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-blue-100">
          Kredi tutarı, aylık faiz oranı ve vadeyi girerek tahmini aylık
          taksit, toplam faiz ve toplam geri ödeme tutarını hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_0.9fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Kredi tutarı
              </span>
              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(event.target.value)}
                  onBlur={() =>
                    setLoanAmount(
                      formatInputNumber(parseNumericInput(loanAmount)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  aria-label="Kredi tutarı"
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                  max="120"
                  value={term}
                  onChange={(event) => setTerm(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  aria-label="Vade"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>
          </div>

          {!calculation.isValid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Kredi tutarı sıfırdan büyük, vade en az 1 ay ve faiz oranı negatif
              olmayan bir değer olmalıdır.
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-900">
              Bütçe değerlendirmesi
            </h3>
            <p className="mt-3 leading-7 text-slate-600">
              Aylık taksiti düzenli geliriniz, mevcut borçlarınız ve zorunlu
              giderlerinizle birlikte değerlendirin. Daha uzun vade aylık
              ödemeyi düşürebilir fakat toplam faiz maliyetini artırabilir.
            </p>
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
            Hesaplama sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">Aylık taksit</span>
            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                calculation.isValid ? calculation.monthlyPayment : 0,
              )}
            </strong>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Kredi tutarı</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(calculation.principal)}
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
              <dt className="text-sm text-slate-600">Toplam geri ödeme</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.totalPayment : 0,
                )}
              </dd>
            </div>
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Vade</dt>
              <dd className="font-bold text-slate-900">
                {calculation.termValue} ay
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Tahsis ücreti, sigorta, vergiler ve bankaya göre değişen diğer
            masraflar hesaplamaya dahil değildir.
          </p>
        </div>
      </div>

      {calculation.isValid && calculation.paymentPlan.length > 0 && (
        <div className="border-t border-slate-200 p-6 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                Ödeme planı
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Aylık taksit dağılımı
              </h3>
            </div>

            {calculation.paymentPlan.length > 12 && (
              <button
                type="button"
                onClick={() => setShowFullPlan((current) => !current)}
                className="rounded-2xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                {showFullPlan
                  ? "İlk 12 ayı göster"
                  : `Tüm ${calculation.termValue} ayı göster`}
              </button>
            )}
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-4 text-left font-semibold text-slate-700">Ay</th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">Taksit</th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">Anapara</th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">Faiz</th>
                  <th className="px-4 py-4 text-right font-semibold text-slate-700">Kalan borç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {visibleRows.map((row) => (
                  <tr key={row.month} className="hover:bg-slate-50">
                    <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-900">
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