"use client";

import { useMemo, useState } from "react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("1000");
  const [discountRate, setDiscountRate] = useState("20");

  const result = useMemo(() => {
    const priceValue = Number(price);
    const rateValue = Number(discountRate);

    if (
      !Number.isFinite(priceValue) ||
      !Number.isFinite(rateValue) ||
      priceValue < 0 ||
      rateValue < 0
    ) {
      return {
        discountAmount: 0,
        finalPrice: 0,
      };
    }

    const discountAmount = priceValue * (rateValue / 100);
    const finalPrice = priceValue - discountAmount;

    return {
      discountAmount,
      finalPrice,
    };
  }, [price, discountRate]);

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
            Ürünün Fiyatı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="1000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            İndirim Oranı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={discountRate}
              onChange={(event) => setDiscountRate(event.target.value)}
              placeholder="20"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              İndirim tutarı, ürün fiyatının indirim oranıyla çarpılmasıyla
              hesaplanır.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">İndirimli Fiyat</p>

            <h2 className="mt-3 break-words text-4xl font-bold md:text-5xl">
              {formatCurrency(result.finalPrice)} ₺
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">İndirim Tutarı</p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(result.discountAmount)} ₺
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Normal Fiyat</p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(Number(price) || 0)} ₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}