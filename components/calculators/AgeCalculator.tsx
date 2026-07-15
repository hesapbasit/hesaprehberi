"use client";

import { useMemo, useState } from "react";

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [targetDate, setTargetDate] = useState(() => {
    return new Date().toISOString().split("T")[0];
  });

  const result = useMemo(() => {
    if (!birthDate || !targetDate) {
      return {
        years: 0,
        months: 0,
        days: 0,
        totalDays: 0,
        nextBirthdayDays: 0,
        valid: false,
      };
    }

    const birth = new Date(`${birthDate}T00:00:00`);
    const target = new Date(`${targetDate}T00:00:00`);

    if (
      Number.isNaN(birth.getTime()) ||
      Number.isNaN(target.getTime()) ||
      birth > target
    ) {
      return {
        years: 0,
        months: 0,
        days: 0,
        totalDays: 0,
        nextBirthdayDays: 0,
        valid: false,
      };
    }

    let years = target.getFullYear() - birth.getFullYear();
    let months = target.getMonth() - birth.getMonth();
    let days = target.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;

      const previousMonthLastDay = new Date(
        target.getFullYear(),
        target.getMonth(),
        0
      ).getDate();

      days += previousMonthLastDay;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const totalDays = Math.floor(
      (target.getTime() - birth.getTime()) / millisecondsPerDay
    );

    let nextBirthday = new Date(
      target.getFullYear(),
      birth.getMonth(),
      birth.getDate()
    );

    if (nextBirthday < target) {
      nextBirthday = new Date(
        target.getFullYear() + 1,
        birth.getMonth(),
        birth.getDate()
      );
    }

    const nextBirthdayDays = Math.ceil(
      (nextBirthday.getTime() - target.getTime()) / millisecondsPerDay
    );

    return {
      years,
      months,
      days,
      totalDays,
      nextBirthdayDays,
      valid: true,
    };
  }, [birthDate, targetDate]);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Doğum Tarihiniz
          </label>

          <input
            type="date"
            value={birthDate}
            onChange={(event) => setBirthDate(event.target.value)}
            max={targetDate}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <label className="mt-8 block font-semibold text-slate-800">
            Yaşın Hesaplanacağı Tarih
          </label>

          <input
            type="date"
            value={targetDate}
            onChange={(event) => setTargetDate(event.target.value)}
            min={birthDate || undefined}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Doğum tarihinizi ve hesaplama tarihini seçtiğinizde yaşınız yıl,
              ay ve gün olarak otomatik hesaplanır.
            </p>
          </div>

          {!result.valid && birthDate && targetDate && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm leading-6 text-red-800">
                Doğum tarihi, hesaplama tarihinden sonra olamaz.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Tam Yaşınız</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid ? result.years : 0} Yaş
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 text-center">
              <p className="text-sm text-blue-100">Yıl</p>
              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.years : 0}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center">
              <p className="text-sm text-blue-100">Ay</p>
              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.months : 0}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5 text-center">
              <p className="text-sm text-blue-100">Gün</p>
              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.days : 0}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">
              Yaşadığınız Toplam Gün
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid
                ? result.totalDays.toLocaleString("tr-TR")
                : 0}{" "}
              Gün
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">
              Sonraki Doğum Gününe Kalan
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid ? result.nextBirthdayDays : 0} Gün
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}