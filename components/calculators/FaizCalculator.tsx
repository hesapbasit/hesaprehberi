"use client";

import { useMemo, useState } from "react";

type CalculationType = "simple" | "compound";
type TimeUnit = "month" | "year";

export default function FaizCalculator() {
  const [principal, setPrincipal] = useState("10000");
  const [rate, setRate] = useState("25");
  const [duration, setDuration] = useState("12");
  const [timeUnit, setTimeUnit] = useState<TimeUnit>("month");
  const [calculationType, setCalculationType] =
    useState<CalculationType>("simple");

  const result = useMemo(() => {
    const principalValue = Number(principal);
    const rateValue = Number(rate);
    const durationValue = Number(duration);

    if (
      principalValue <= 0 ||
      rateValue < 0 ||
      durationValue <= 0 ||
      Number.isNaN(principalValue) ||
      Number.isNaN(rateValue) ||
      Number.isNaN(durationValue)
    ) {
      return {
        interest: 0,
        total: 0,
      };
    }

    const years =
      timeUnit === "month" ? durationValue / 12 : durationValue;

    if (calculationType === "simple") {
      const interest =
        principalValue * (rateValue / 100) * years;

      return {
        interest,
        total: principalValue + interest,
      };
    }

    const total =
      principalValue * Math.pow(1 + rateValue / 100, years);

    return {
      interest: total - principalValue,
      total,
    };
  }, [principal, rate, duration, timeUnit, calculationType]);

  const formatCurrency = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="mb-8 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => setCalculationType("simple")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            calculationType === "simple"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          Basit Faiz
        </button>

        <button
          type="button"
          onClick={() => setCalculationType("compound")}
          className={`rounded-xl px-5 py-3 font-semibold transition ${
            calculationType === "compound"
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          Bileşik Faiz
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Anapara
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              value={principal}
              onChange={(event) => setPrincipal(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="10000"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            Yıllık Faiz Oranı
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              step="0.01"
              value={rate}
              onChange={(event) => setRate(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="25"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            Süre
          </label>

          <div className="mt-3 grid grid-cols-[1fr_auto] gap-3">
            <input
              type="number"
              min="1"
              value={duration}
              onChange={(event) => setDuration(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              placeholder="12"
            />

            <select
              value={timeUnit}
              onChange={(event) =>
                setTimeUnit(event.target.value as TimeUnit)
              }
              className="rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              <option value="month">Ay</option>
              <option value="year">Yıl</option>
            </select>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Faiz Getirisi</p>

            <h2 className="mt-2 break-words text-4xl font-bold">
              {formatCurrency(result.interest)} ₺
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-blue-100">Toplam Tutar</p>

            <p className="mt-2 text-3xl font-bold">
              {formatCurrency(result.total)} ₺
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-blue-100">Hesaplama Türü</p>

            <p className="mt-2 text-xl font-bold">
              {calculationType === "simple"
                ? "Basit Faiz"
                : "Bileşik Faiz"}
            </p>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            Sonuçlar yaklaşık değerlerdir. Vergi, stopaj ve kurumlara göre
            uygulanabilecek ek kesintiler hesaba dahil değildir.
          </p>
        </div>
      </div>
    </div>
  );
}