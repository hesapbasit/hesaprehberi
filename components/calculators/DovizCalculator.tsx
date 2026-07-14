"use client";

import { ArrowLeftRight } from "lucide-react";
import { useMemo, useState } from "react";

type Currency = "USD" | "EUR" | "GBP";

const currencyNames: Record<Currency, string> = {
  USD: "Amerikan Doları",
  EUR: "Euro",
  GBP: "İngiliz Sterlini",
};

export default function DovizCalculator() {
  const [amount, setAmount] = useState("100");
  const [exchangeRate, setExchangeRate] = useState("40");
  const [currency, setCurrency] = useState<Currency>("USD");
  const [direction, setDirection] = useState<"foreign-to-try" | "try-to-foreign">(
    "foreign-to-try"
  );

  const result = useMemo(() => {
    const amountValue = Number(amount);
    const rateValue = Number(exchangeRate);

    if (
      !Number.isFinite(amountValue) ||
      !Number.isFinite(rateValue) ||
      amountValue < 0 ||
      rateValue <= 0
    ) {
      return 0;
    }

    if (direction === "foreign-to-try") {
      return amountValue * rateValue;
    }

    return amountValue / rateValue;
  }, [amount, exchangeRate, direction]);

  const switchDirection = () => {
    setDirection((current) =>
      current === "foreign-to-try" ? "try-to-foreign" : "foreign-to-try"
    );
  };

  const formatNumber = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const inputUnit = direction === "foreign-to-try" ? currency : "TRY";
  const resultUnit = direction === "foreign-to-try" ? "TRY" : currency;

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Döviz Türü
          </label>

          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value as Currency)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="USD">USD — Amerikan Doları</option>
            <option value="EUR">EUR — Euro</option>
            <option value="GBP">GBP — İngiliz Sterlini</option>
          </select>

          <div className="mt-8 flex items-end gap-3">
            <div className="flex-1">
              <label className="block font-semibold text-slate-800">
                Çevrilecek Tutar
              </label>

              <div className="relative mt-3">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-20 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  placeholder="100"
                />

                <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                  {inputUnit}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={switchDirection}
              aria-label="Çeviri yönünü değiştir"
              className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white transition hover:bg-blue-700"
            >
              <ArrowLeftRight size={22} />
            </button>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            1 {currency} Kaç TL?
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0.0001"
              step="0.0001"
              value={exchangeRate}
              onChange={(event) => setExchangeRate(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="40"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              TL
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-800">
              Bu sürüm canlı kur kullanmaz. Güncel alış veya satış kurunu
              kontrol ederek kur alanına kendiniz girmelisiniz.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Çeviri Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">
              {direction === "foreign-to-try"
                ? `${formatNumber(Number(amount) || 0)} ${currency}`
                : `${formatNumber(Number(amount) || 0)} TL`}
            </p>

            <h2 className="mt-3 break-words text-4xl font-bold">
              {formatNumber(result)} {resultUnit}
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Kullanılan Kur</p>

            <p className="mt-2 text-2xl font-bold">
              1 {currency} = {formatNumber(Number(exchangeRate) || 0)} TL
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Döviz Türü</p>

            <p className="mt-2 text-xl font-bold">
              {currencyNames[currency]}
            </p>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            Bankaların ve döviz bürolarının alış-satış fiyatları farklı
            olabilir. Sonuç yalnızca girdiğiniz kura göre hesaplanır.
          </p>
        </div>
      </div>
    </div>
  );
}