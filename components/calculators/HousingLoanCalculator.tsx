"use client";

import { useMemo, useState } from "react";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const integerFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

type PaymentPlanRow = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remainingBalance: number;
};

function parsePositiveNumber(value: string): number {
  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue) || parsedValue < 0) {
    return 0;
  }

  return parsedValue;
}

function formatCurrency(value: number): string {
  if (!Number.isFinite(value)) {
    return currencyFormatter.format(0);
  }

  return currencyFormatter.format(value);
}

function formatPercentage(value: number): string {
  if (!Number.isFinite(value)) {
    return "%0,00";
  }

  return `%${percentageFormatter.format(value)}`;
}

export default function HousingLoanCalculator() {
  const [propertyPrice, setPropertyPrice] = useState("3000000");
  const [downPayment, setDownPayment] = useState("600000");
  const [monthlyInterestRate, setMonthlyInterestRate] = useState("2.89");
  const [termInMonths, setTermInMonths] = useState("120");

  const result = useMemo(() => {
    const parsedPropertyPrice = parsePositiveNumber(propertyPrice);
    const parsedDownPayment = Math.min(
      parsePositiveNumber(downPayment),
      parsedPropertyPrice,
    );
    const parsedMonthlyInterestRate =
      parsePositiveNumber(monthlyInterestRate) / 100;
    const parsedTermInMonths = Math.max(
      1,
      Math.min(360, Math.trunc(parsePositiveNumber(termInMonths))),
    );

    const loanAmount = Math.max(
      0,
      parsedPropertyPrice - parsedDownPayment,
    );

    const downPaymentRatio =
      parsedPropertyPrice > 0
        ? (parsedDownPayment / parsedPropertyPrice) * 100
        : 0;

    const loanToValueRatio =
      parsedPropertyPrice > 0
        ? (loanAmount / parsedPropertyPrice) * 100
        : 0;

    let monthlyPayment = 0;

    if (loanAmount > 0) {
      if (parsedMonthlyInterestRate === 0) {
        monthlyPayment = loanAmount / parsedTermInMonths;
      } else {
        const compoundFactor = Math.pow(
          1 + parsedMonthlyInterestRate,
          parsedTermInMonths,
        );

        monthlyPayment =
          (loanAmount * parsedMonthlyInterestRate * compoundFactor) /
          (compoundFactor - 1);
      }
    }

    const totalPayment = monthlyPayment * parsedTermInMonths;
    const totalInterest = Math.max(0, totalPayment - loanAmount);

    const annualCompoundCost =
      parsedMonthlyInterestRate > 0
        ? (Math.pow(1 + parsedMonthlyInterestRate, 12) - 1) * 100
        : 0;

    const paymentPlan: PaymentPlanRow[] = [];

    let remainingBalance = loanAmount;

    for (
      let month = 1;
      month <= parsedTermInMonths && remainingBalance > 0;
      month += 1
    ) {
      const interestPayment =
        remainingBalance * parsedMonthlyInterestRate;

      const principalPayment =
        parsedMonthlyInterestRate === 0
          ? monthlyPayment
          : Math.min(
              remainingBalance,
              Math.max(0, monthlyPayment - interestPayment),
            );

      remainingBalance = Math.max(
        0,
        remainingBalance - principalPayment,
      );

      paymentPlan.push({
        month,
        payment: monthlyPayment,
        principal: principalPayment,
        interest: interestPayment,
        remainingBalance,
      });
    }

    const firstPayment = paymentPlan[0] ?? null;
    const twelfthPayment = paymentPlan[11] ?? null;
    const halfwayPayment =
      paymentPlan[Math.max(0, Math.floor(paymentPlan.length / 2) - 1)] ??
      null;
    const lastPayment =
      paymentPlan[paymentPlan.length - 1] ?? null;

    return {
      propertyPrice: parsedPropertyPrice,
      downPayment: parsedDownPayment,
      loanAmount,
      monthlyInterestRate: parsedMonthlyInterestRate * 100,
      termInMonths: parsedTermInMonths,
      monthlyPayment,
      totalPayment,
      totalInterest,
      downPaymentRatio,
      loanToValueRatio,
      annualCompoundCost,
      firstPayment,
      twelfthPayment,
      halfwayPayment,
      lastPayment,
    };
  }, [
    propertyPrice,
    downPayment,
    monthlyInterestRate,
    termInMonths,
  ]);

  const paymentPlanSummary = [
    {
      label: "1. Ay",
      row: result.firstPayment,
    },
    {
      label: "12. Ay",
      row: result.twelfthPayment,
    },
    {
      label: `${Math.max(1, Math.floor(result.termInMonths / 2))}. Ay`,
      row: result.halfwayPayment,
    },
    {
      label: `${result.termInMonths}. Ay`,
      row: result.lastPayment,
    },
  ].filter(
    (item, index, items) =>
      item.row &&
      items.findIndex(
        (candidate) => candidate.row?.month === item.row?.month,
      ) === index,
  );

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <section className="p-6 sm:p-8 lg:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Kredi Bilgileri
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              Konut kredinizi hesaplayın
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Konut bedeli, peşinat, aylık faiz oranı ve vadeyi
              girerek tahmini ödeme planınızı görüntüleyin.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <label className="block">
              <span className="font-semibold text-slate-800">
                Konut Bedeli
              </span>

              <div className="relative mt-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  inputMode="decimal"
                  value={propertyPrice}
                  onChange={(event) =>
                    setPropertyPrice(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="3000000"
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  ₺
                </span>
              </div>
            </label>

            <label className="block">
              <span className="font-semibold text-slate-800">
                Peşinat Tutarı
              </span>

              <div className="relative mt-3">
                <input
                  type="number"
                  min="0"
                  step="1000"
                  inputMode="decimal"
                  value={downPayment}
                  onChange={(event) =>
                    setDownPayment(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="600000"
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  ₺
                </span>
              </div>
            </label>

            <label className="block">
              <span className="font-semibold text-slate-800">
                Aylık Faiz Oranı
              </span>

              <div className="relative mt-3">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  value={monthlyInterestRate}
                  onChange={(event) =>
                    setMonthlyInterestRate(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="2.89"
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="font-semibold text-slate-800">
                Vade
              </span>

              <div className="relative mt-3">
                <input
                  type="number"
                  min="1"
                  max="360"
                  step="1"
                  inputMode="numeric"
                  value={termInMonths}
                  onChange={(event) =>
                    setTermInMonths(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="120"
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700">
                  Kullanılacak kredi
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {formatCurrency(result.loanAmount)}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                  <p className="text-slate-500">Peşinat</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {formatPercentage(result.downPaymentRatio)}
                  </p>
                </div>

                <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
                  <p className="text-slate-500">Kredi Oranı</p>
                  <p className="mt-1 font-bold text-slate-900">
                    {formatPercentage(result.loanToValueRatio)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 text-white sm:p-8 lg:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-medium text-blue-100">
              Aylık Taksit
            </p>

            <p className="mt-3 break-words text-4xl font-bold tracking-tight">
              {formatCurrency(result.monthlyPayment)}
            </p>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              {integerFormatter.format(result.termInMonths)} ay boyunca
              tahmini eşit taksit
            </p>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Toplam Geri Ödeme
              </p>

              <p className="mt-2 break-words text-xl font-bold">
                {formatCurrency(result.totalPayment)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Toplam Faiz
              </p>

              <p className="mt-2 break-words text-xl font-bold">
                {formatCurrency(result.totalInterest)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Aylık Faiz
              </p>

              <p className="mt-2 text-xl font-bold">
                {formatPercentage(result.monthlyInterestRate)}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Yıllık Bileşik Oran
              </p>

              <p className="mt-2 text-xl font-bold">
                {formatPercentage(result.annualCompoundCost)}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-5">
            <p className="text-sm leading-6 text-amber-50">
              Bu sonuçlara ekspertiz, sigorta, tahsis ücreti, vergi ve
              bankaya göre değişebilecek diğer masraflar dahil değildir.
            </p>
          </div>
        </section>
      </div>

      {paymentPlanSummary.length > 0 && (
        <section className="border-t border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
                Ödeme Planı Özeti
              </p>

              <h3 className="mt-2 text-2xl font-bold text-slate-900">
                Kredi bakiyesinin dönemsel değişimi
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-500">
              Tablo, ödeme planının belirli dönemlerindeki anapara,
              faiz ve kalan borç tutarlarını gösterir.
            </p>
          </div>

          <div className="mt-7 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Dönem
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Taksit
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Anapara
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Faiz
                  </th>
                  <th className="px-5 py-4 text-sm font-semibold text-slate-700">
                    Kalan Borç
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
                {paymentPlanSummary.map((item) => (
                  <tr
                    key={item.row?.month}
                    className="transition hover:bg-slate-50"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                      {item.label}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-slate-700">
                      {formatCurrency(item.row?.payment ?? 0)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-slate-700">
                      {formatCurrency(item.row?.principal ?? 0)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-slate-700">
                      {formatCurrency(item.row?.interest ?? 0)}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-slate-900">
                      {formatCurrency(
                        item.row?.remainingBalance ?? 0,
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}