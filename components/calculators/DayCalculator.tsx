"use client";

import { useMemo, useState } from "react";

export default function DayCalculator() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const result = useMemo(() => {
    if (!startDate || !endDate) {
      return {
        valid: false,
        totalDays: 0,
        totalWeeks: 0,
        remainingDays: 0,
        direction: "",
      };
    }

    const start = new Date(`${startDate}T00:00:00`);
    const end = new Date(`${endDate}T00:00:00`);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      return {
        valid: false,
        totalDays: 0,
        totalWeeks: 0,
        remainingDays: 0,
        direction: "",
      };
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const difference = end.getTime() - start.getTime();
    const totalDays = Math.round(Math.abs(difference) / millisecondsPerDay);
    const totalWeeks = Math.floor(totalDays / 7);
    const remainingDays = totalDays % 7;

    return {
      valid: true,
      totalDays,
      totalWeeks,
      remainingDays,
      direction:
        difference > 0
          ? "İkinci tarih daha sonra"
          : difference < 0
            ? "İkinci tarih daha önce"
            : "Tarihler aynı",
    };
  }, [startDate, endDate]);

  const swapDates = () => {
    setStartDate(endDate);
    setEndDate(startDate);
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="startDate"
            className="block font-semibold text-slate-800"
          >
            Başlangıç Tarihi
          </label>

          <input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <label
            htmlFor="endDate"
            className="mt-8 block font-semibold text-slate-800"
          >
            Bitiş Tarihi
          </label>

          <input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={swapDates}
            disabled={!startDate && !endDate}
            className="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Tarihleri Değiştir
          </button>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              İki tarih arasındaki toplam gün ve hafta farkı otomatik
              hesaplanır. Tarihlerin sırası sonucu negatif yapmaz; yön ayrıca
              gösterilir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Toplam Gün Farkı</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid
                ? result.totalDays.toLocaleString("tr-TR")
                : 0}{" "}
              Gün
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-blue-100">Tam Hafta</p>

              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.totalWeeks : 0}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-blue-100">Kalan Gün</p>

              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.remainingDays : 0}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Tarih Sırası</p>

            <p className="mt-2 text-lg font-semibold">
              {result.valid ? result.direction : "Tarih seçilmedi"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}