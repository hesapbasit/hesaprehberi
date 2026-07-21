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

export default function LoanEarlyPayoffCalculator() {
  const [remainingPrincipal, setRemainingPrincipal] = useState("250.000");
  const [monthlyRate, setMonthlyRate] = useState("3,49");
  const [remainingTerm, setRemainingTerm] = useState("24");
  const [earlyPayoffFeeRate, setEarlyPayoffFeeRate] = useState("1");
  const [additionalCosts, setAdditionalCosts] = useState("0");
  const [showFullPlan, setShowFullPlan] = useState(false);

  const calculation = useMemo(() => {
    const principal = parseNumericInput(remainingPrincipal);
    const rate = parseNumericInput(monthlyRate);
    const term = Math.max(0, Math.floor(parseNumericInput(remainingTerm)));
    const feeRate = Math.max(0, parseNumericInput(earlyPayoffFeeRate));
    const costs = Math.max(0, parseNumericInput(additionalCosts));

    const monthlyPayment = calculateMonthlyPayment(principal, rate, term);
    const paymentPlan = createPaymentPlan(
      principal,
      rate,
      term,
      monthlyPayment,
    );

    const scheduledTotal = paymentPlan.reduce(
      (sum, row) => sum + row.payment,
      0,
    );
    const remainingInterest = Math.max(0, scheduledTotal - principal);
    const earlyPayoffFee = principal * (feeRate / 100);
    const earlyPayoffTotal = principal + earlyPayoffFee + costs;
    const estimatedSavings = Math.max(0, scheduledTotal - earlyPayoffTotal);
    const savingsRate =
      scheduledTotal > 0 ? (estimatedSavings / scheduledTotal) * 100 : 0;

    return {
      principal,
      rate,
      term,
      feeRate,
      costs,
      monthlyPayment,
      scheduledTotal,
      remainingInterest,
      earlyPayoffFee,
      earlyPayoffTotal,
      estimatedSavings,
      savingsRate,
      paymentPlan,
      isValid:
        principal > 0 &&
        rate >= 0 &&
        term > 0 &&
        feeRate >= 0 &&
        costs >= 0,
    };
  }, [
    remainingPrincipal,
    monthlyRate,
    remainingTerm,
    earlyPayoffFeeRate,
    additionalCosts,
  ]);

  const visibleRows = showFullPlan
    ? calculation.paymentPlan
    : calculation.paymentPlan.slice(0, 12);

  function resetCalculator() {
    setRemainingPrincipal("250.000");
    setMonthlyRate("3,49");
    setRemainingTerm("24");
    setEarlyPayoffFeeRate("1");
    setAdditionalCosts("0");
    setShowFullPlan(false);
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-emerald-600 to-teal-700 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">
          Borç azaltma analizi
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Kredi Erken Kapama Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-emerald-100">
          Kalan anapara, faiz oranı, vade ve olası erken ödeme ücretini girerek
          krediyi bugün kapatmanın tahmini maliyetini ve sağlayabileceği
          tasarrufu hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_0.92fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Kalan anapara
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={remainingPrincipal}
                  onChange={(event) =>
                    setRemainingPrincipal(event.target.value)
                  }
                  onBlur={() =>
                    setRemainingPrincipal(
                      formatInputNumber(parseNumericInput(remainingPrincipal)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Kalan anapara"
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Aylık faiz oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Kalan vade
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={remainingTerm}
                  onChange={(event) => setRemainingTerm(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Kalan vade"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Erken ödeme ücreti oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={earlyPayoffFeeRate}
                  onChange={(event) =>
                    setEarlyPayoffFeeRate(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Erken ödeme ücreti oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Diğer kapama masrafları
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={additionalCosts}
                  onChange={(event) => setAdditionalCosts(event.target.value)}
                  onBlur={() =>
                    setAdditionalCosts(
                      formatInputNumber(parseNumericInput(additionalCosts)) ||
                        "0",
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  aria-label="Diğer kapama masrafları"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>
          </div>

          {!calculation.isValid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Kalan anapara sıfırdan büyük, vade en az 1 ay ve diğer değerler
              negatif olmayan sayılar olmalıdır.
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-900">
              Hesaplama mantığı
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Araç, mevcut kredi devam ettiğinde ödenecek tahmini toplam tutarı;
              bugün kapama senaryosunda ise kalan anapara, seçtiğiniz erken ödeme
              ücreti ve ek masrafları karşılaştırır.
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
            Erken kapama sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">
              Tahmini erken kapama tutarı
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                calculation.isValid ? calculation.earlyPayoffTotal : 0,
              )}
            </strong>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Mevcut plana göre toplam ödeme
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.scheduledTotal : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Kalan faiz yükü</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.remainingInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Erken ödeme ücreti</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.earlyPayoffFee : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <dt className="text-sm font-semibold text-emerald-800">
                Tahmini tasarruf
              </dt>
              <dd className="font-bold text-emerald-800">
                {currencyFormatter.format(
                  calculation.isValid ? calculation.estimatedSavings : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Tasarruf oranı</dt>
              <dd className="font-bold text-slate-900">
                %
                {new Intl.NumberFormat("tr-TR", {
                  maximumFractionDigits: 2,
                }).format(
                  calculation.isValid ? calculation.savingsRate : 0,
                )}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Bankanın günlük faiz, vergi, sigorta iadesi ve sözleşmeye özel
            hesaplama yöntemi gerçek kapama tutarını değiştirebilir.
          </p>
        </div>
      </div>

      {calculation.isValid && calculation.paymentPlan.length > 0 && (
        <div className="border-t border-slate-200 p-6 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
                Mevcut plan
              </p>
              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Kalan taksitlerin tahmini dağılımı
              </h3>
            </div>

            {calculation.paymentPlan.length > 12 && (
              <button
                type="button"
                onClick={() => setShowFullPlan((current) => !current)}
                className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                {showFullPlan
                  ? "İlk 12 ayı göster"
                  : `Tüm ${calculation.term} ayı göster`}
              </button>
            )}
          </div>

          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
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
                    Kalan borç
                  </th>
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