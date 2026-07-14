"use client";

import { useMemo, useState } from "react";

export default function KrediCalculator() {
  const [amount, setAmount] = useState("100000");
  const [months, setMonths] = useState(12);
  const [monthlyRate, setMonthlyRate] = useState("3.49");

  const result = useMemo(() => {
    const principal = Number(amount);
    const rate = Number(monthlyRate) / 100;

    if (!principal || principal <= 0 || !months || months <= 0 || rate < 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
      };
    }

    if (rate === 0) {
      const monthlyPayment = principal / months;

      return {
        monthlyPayment,
        totalPayment: principal,
        totalInterest: 0,
      };
    }

    const monthlyPayment =
      (principal * rate * Math.pow(1 + rate, months)) /
      (Math.pow(1 + rate, months) - 1);

    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
    };
  }, [amount, months, monthlyRate]);

  const formatCurrency = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Kredi Tutarı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="100000"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            Vade
          </label>

          <select
            value={months}
            onChange={(event) => setMonths(Number(event.target.value))}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value={3}>3 Ay</option>
            <option value={6}>6 Ay</option>
            <option value={12}>12 Ay</option>
            <option value={18}>18 Ay</option>
            <option value={24}>24 Ay</option>
            <option value={36}>36 Ay</option>
            <option value={48}>48 Ay</option>
            <option value={60}>60 Ay</option>
          </select>

          <label className="mt-8 block font-semibold text-slate-800">
            Aylık Faiz Oranı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              step="0.01"
              value={monthlyRate}
              onChange={(event) => setMonthlyRate(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="3.49"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Aylık Taksit</p>

            <h2 className="mt-2 break-words text-4xl font-bold">
              {formatCurrency(result.monthlyPayment)} ₺
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Toplam Geri Ödeme</p>

              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.totalPayment)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Toplam Faiz</p>

              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.totalInterest)} ₺
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            Sonuçlar, eşit taksitli kredi formülüyle yaklaşık olarak
            hesaplanmaktadır. Bankaların vergi, sigorta ve ek ücretleri sonucu
            değiştirebilir.
          </p>
        </div>
      </div>
    </div>
  );
}