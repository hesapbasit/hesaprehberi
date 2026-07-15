"use client";

import { useMemo, useState } from "react";

export default function RentIncreaseCalculator() {
  const [currentRent, setCurrentRent] = useState("20000");
  const [increaseRate, setIncreaseRate] = useState("32.03");

  const result = useMemo(() => {
    const rent = Number(currentRent);
    const rate = Number(increaseRate);

    if (
      !Number.isFinite(rent) ||
      !Number.isFinite(rate) ||
      rent < 0 ||
      rate < 0
    ) {
      return {
        valid: false,
        increaseAmount: 0,
        newRent: 0,
        monthlyDifference: 0,
        yearlyDifference: 0,
      };
    }

    const increaseAmount = rent * (rate / 100);
    const newRent = rent + increaseAmount;

    return {
      valid: true,
      increaseAmount,
      newRent,
      monthlyDifference: increaseAmount,
      yearlyDifference: increaseAmount * 12,
    };
  }, [currentRent, increaseRate]);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="currentRent"
            className="block font-semibold text-slate-800"
          >
            Mevcut Aylık Kira
          </label>

          <div className="relative mt-3">
            <input
              id="currentRent"
              type="number"
              min="0"
              step="100"
              value={currentRent}
              onChange={(event) => setCurrentRent(event.target.value)}
              placeholder="20000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label
            htmlFor="increaseRate"
            className="mt-8 block font-semibold text-slate-800"
          >
            Kira Artış Oranı
          </label>

          <div className="relative mt-3">
            <input
              id="increaseRate"
              type="number"
              min="0"
              step="0.01"
              value={increaseRate}
              onChange={(event) => setIncreaseRate(event.target.value)}
              placeholder="32.03"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Başlangıç oranı Haziran 2026 için açıklanan on iki aylık ortalama
              TÜFE oranıdır. Kira yenileme ayınıza uygun güncel oranı kontrol
              ederek bu alanı değiştirebilirsiniz.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              Bu araç yalnızca matematiksel hesaplama yapar. Sözleşme şartları,
              kira süresi, mahkeme kararı veya özel hukuki durumlar sonucu
              değiştirebilir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Yeni Aylık Kira</p>

            <h2 className="mt-3 break-words text-4xl font-bold md:text-5xl">
              {formatCurrency(result.newRent)} ₺
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Artış Tutarı</p>

              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(result.increaseAmount)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Artış Oranı</p>

              <p className="mt-2 text-2xl font-bold">
                %{formatNumber(Number(increaseRate) || 0)}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Eski Aylık Kira</p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(Number(currentRent) || 0)} ₺
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">
              Bir Yıllık Toplam Artış Farkı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(result.yearlyDifference)} ₺
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-bold text-slate-900">
          Hesaplama Özeti
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Mevcut Kira</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(Number(currentRent) || 0)} ₺
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Aylık Artış</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(result.monthlyDifference)} ₺
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Yeni Kira</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(result.newRent)} ₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatCurrency(value: number) {
  if (!Number.isFinite(value)) {
    return "0,00";
  }

  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}