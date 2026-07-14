"use client";

import { useMemo, useState } from "react";

export default function KdvCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(20);
  const [mode, setMode] = useState<"haric" | "dahil">("haric");

  const result = useMemo(() => {
    const value = Number(amount);

    if (!value || value <= 0) {
      return {
        net: 0,
        vat: 0,
        total: 0,
      };
    }

    if (mode === "haric") {
      const vat = value * rate / 100;

      return {
        net: value,
        vat,
        total: value + vat,
      };
    }

    const net = value / (1 + rate / 100);
    const vat = value - net;

    return {
      net,
      vat,
      total: value,
    };
  }, [amount, rate, mode]);

  return (
    <div className="rounded-3xl bg-white p-10 shadow-xl">

      <div className="mb-8 flex gap-3">

        <button
          onClick={() => setMode("haric")}
          className={`rounded-xl px-5 py-3 font-semibold ${
            mode === "haric"
              ? "bg-blue-600 text-white"
              : "bg-slate-100"
          }`}
        >
          KDV Hariç
        </button>

        <button
          onClick={() => setMode("dahil")}
          className={`rounded-xl px-5 py-3 font-semibold ${
            mode === "dahil"
              ? "bg-blue-600 text-white"
              : "bg-slate-100"
          }`}
        >
          KDV Dahil
        </button>

      </div>

      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Tutar giriniz"
        className="mb-6 w-full rounded-xl border border-slate-300 p-4"
      />

      <select
        value={rate}
        onChange={(e) => setRate(Number(e.target.value))}
        className="mb-10 w-full rounded-xl border border-slate-300 p-4"
      >
        <option value={1}>%1</option>
        <option value={10}>%10</option>
        <option value={20}>%20</option>
      </select>

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-100 p-6">
          <p>KDV Hariç</p>
          <h2 className="mt-3 text-3xl font-bold">
            {result.net.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} ₺
          </h2>
        </div>

        <div className="rounded-2xl bg-blue-600 p-6 text-white">
          <p>KDV</p>
          <h2 className="mt-3 text-3xl font-bold">
            {result.vat.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} ₺
          </h2>
        </div>

        <div className="rounded-2xl bg-green-600 p-6 text-white">
          <p>KDV Dahil</p>
          <h2 className="mt-3 text-3xl font-bold">
            {result.total.toLocaleString("tr-TR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })} ₺
          </h2>
        </div>

      </div>

    </div>
  );
}