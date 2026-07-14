"use client";

import { useMemo, useState } from "react";

export default function EnflasyonCalculator() {
  const [amount, setAmount] = useState("10000");
  const [inflationRate, setInflationRate] = useState("50");

  const result = useMemo(() => {
    const amountValue = Number(amount);
    const rateValue = Number(inflationRate);

    if (
      !Number.isFinite(amountValue) ||
      !Number.isFinite(rateValue) ||
      amountValue < 0 ||
      rateValue < 0
    ) {
      return {
        equivalentAmount: 0,
        purchasingPower: 0,
        valueLoss: 0,
      };
    }

    const equivalentAmount = amountValue * (1 + rateValue / 100);
    const purchasingPower = amountValue / (1 + rateValue / 100);
    const valueLoss = amountValue - purchasingPower;

    return {
      equivalentAmount,
      purchasingPower,
      valueLoss,
    };
  }, [amount, inflationRate]);

  const formatCurrency = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Başlangıç Tutarı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="10000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            Enflasyon Oranı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              step="0.01"
              value={inflationRate}
              onChange={(event) => setInflationRate(event.target.value)}
              placeholder="50"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Örneğin enflasyon oranı %50 ise bugün 10.000 ₺ olan bir ürünün
              aynı değeri koruması için gelecekte yaklaşık 15.000 ₺ olması
              gerekir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">
              Aynı Değeri Korumak İçin Gereken Tutar
            </p>

            <h2 className="mt-2 break-words text-4xl font-bold">
              {formatCurrency(result.equivalentAmount)} ₺
            </h2>
          </div>

          <div className="mt-10 grid gap-5">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Paranın Yeni Alım Gücü
              </p>

              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(result.purchasingPower)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">
                Alım Gücü Kaybı
              </p>

              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(result.valueLoss)} ₺
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            Sonuçlar girilen enflasyon oranına göre yaklaşık olarak
            hesaplanmaktadır.
          </p>
        </div>
      </div>
    </div>
  );
}