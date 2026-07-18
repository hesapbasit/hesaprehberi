"use client";

import {
  Baby,
  CalendarDays,
  CircleAlert,
  RotateCcw,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

type PregnancyResult = {
  dueDate: Date;
  conceptionDate: Date;
  pregnancyStartDate: Date;
  pregnancyWeek: number;
  pregnancyDay: number;
  totalPassedDays: number;
  remainingDays: number;
  trimester: string;
  progress: number;
};

const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
const DEFAULT_CYCLE_LENGTH = 28;
const PREGNANCY_LENGTH_DAYS = 280;

function createLocalDate(dateValue: string) {
  const [year, month, day] = dateValue.split("-").map(Number);

  if (!year || !month || !day) {
    return null;
  }

  return new Date(year, month - 1, day);
}

function addDays(date: Date, numberOfDays: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + numberOfDays);
  return result;
}

function differenceInCalendarDays(laterDate: Date, earlierDate: Date) {
  const laterUtc = Date.UTC(
    laterDate.getFullYear(),
    laterDate.getMonth(),
    laterDate.getDate()
  );

  const earlierUtc = Date.UTC(
    earlierDate.getFullYear(),
    earlierDate.getMonth(),
    earlierDate.getDate()
  );

  return Math.floor((laterUtc - earlierUtc) / DAY_IN_MILLISECONDS);
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function getTrimester(week: number) {
  if (week < 1) {
    return "Gebelik henüz başlamamış görünüyor";
  }

  if (week <= 13) {
    return "1. trimester";
  }

  if (week <= 27) {
    return "2. trimester";
  }

  if (week <= 42) {
    return "3. trimester";
  }

  return "Tahmini doğum tarihi geçmiş olabilir";
}

export default function PregnancyCalculator() {
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState("28");
  const [result, setResult] = useState<PregnancyResult | null>(null);
  const [error, setError] = useState("");

  const todayValue = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }, []);

  const calculatePregnancy = () => {
    setError("");
    setResult(null);

    const pregnancyStartDate = createLocalDate(lastPeriodDate);
    const parsedCycleLength = Number(cycleLength);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (!pregnancyStartDate) {
      setError("Lütfen son adet tarihinizin ilk gününü seçin.");
      return;
    }

    if (pregnancyStartDate > today) {
      setError("Son adet tarihi gelecekte bir tarih olamaz.");
      return;
    }

    if (
      !Number.isFinite(parsedCycleLength) ||
      parsedCycleLength < 20 ||
      parsedCycleLength > 45
    ) {
      setError("Adet döngüsü uzunluğunu 20 ile 45 gün arasında girin.");
      return;
    }

    const cycleAdjustment = parsedCycleLength - DEFAULT_CYCLE_LENGTH;

    const dueDate = addDays(
      pregnancyStartDate,
      PREGNANCY_LENGTH_DAYS + cycleAdjustment
    );

    const conceptionDate = addDays(
      pregnancyStartDate,
      14 + cycleAdjustment
    );

    const totalPassedDays = differenceInCalendarDays(
      today,
      pregnancyStartDate
    );

    const pregnancyWeek = Math.max(0, Math.floor(totalPassedDays / 7));
    const pregnancyDay = Math.max(0, totalPassedDays % 7);

    const remainingDays = Math.max(
      0,
      differenceInCalendarDays(dueDate, today)
    );

    const progress = Math.min(
      100,
      Math.max(0, (totalPassedDays / PREGNANCY_LENGTH_DAYS) * 100)
    );

    setResult({
      dueDate,
      conceptionDate,
      pregnancyStartDate,
      pregnancyWeek,
      pregnancyDay,
      totalPassedDays,
      remainingDays,
      trimester: getTrimester(pregnancyWeek),
      progress,
    });
  };

  const resetCalculator = () => {
    setLastPeriodDate("");
    setCycleLength("28");
    setResult(null);
    setError("");
  };

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="border-b border-slate-200 bg-gradient-to-r from-pink-50 via-white to-purple-50 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-pink-100 text-pink-600">
            <Baby size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Gebelik Hesaplama
            </h2>

            <p className="mt-2 leading-7 text-slate-600">
              Son adet tarihinizin ilk gününü girerek tahmini doğum tarihinizi
              ve gebelik haftanızı hesaplayın.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <div>
            <label
              htmlFor="last-period-date"
              className="mb-2 block font-semibold text-slate-800"
            >
              Son adet tarihinin ilk günü
            </label>

            <div className="relative">
              <CalendarDays
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="last-period-date"
                type="date"
                value={lastPeriodDate}
                max={todayValue}
                onChange={(event) => {
                  setLastPeriodDate(event.target.value);
                  setResult(null);
                  setError("");
                }}
                className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />
            </div>
          </div>

          <div className="mt-6">
            <label
              htmlFor="cycle-length"
              className="mb-2 block font-semibold text-slate-800"
            >
              Ortalama adet döngüsü uzunluğu
            </label>

            <div className="relative">
              <input
                id="cycle-length"
                type="number"
                min="20"
                max="45"
                inputMode="numeric"
                value={cycleLength}
                onChange={(event) => {
                  setCycleLength(event.target.value);
                  setResult(null);
                  setError("");
                }}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-4 pr-16 text-slate-900 outline-none transition focus:border-pink-500 focus:ring-4 focus:ring-pink-100"
              />

              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                gün
              </span>
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Standart değer 28 gündür. Döngünüz farklıysa ortalama süresini
              yazabilirsiniz.
            </p>
          </div>

          {error && (
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-700">
              <CircleAlert className="mt-0.5 shrink-0" size={20} />
              <p className="text-sm font-medium leading-6">{error}</p>
            </div>
          )}

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={calculatePregnancy}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-pink-600 px-6 py-4 font-semibold text-white transition hover:bg-pink-700 hover:shadow-lg"
            >
              <Sparkles size={20} />
              Hesapla
            </button>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <RotateCcw size={19} />
              Temizle
            </button>
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900 p-6 text-white md:p-8">
          {result ? (
            <>
              <span className="inline-flex rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-200">
                Tahmini sonuç
              </span>

              <div className="mt-6">
                <p className="text-sm font-medium text-slate-300">
                  Tahmini doğum tarihi
                </p>

                <p className="mt-2 text-3xl font-bold text-white">
                  {formatDate(result.dueDate)}
                </p>
              </div>

              <div className="mt-8">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-slate-300">
                    Gebelik ilerlemesi
                  </span>

                  <span className="text-sm font-semibold text-pink-300">
                    %{result.progress.toFixed(1)}
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                  <div
                    className="h-full rounded-full bg-pink-500 transition-all"
                    style={{ width: `${result.progress}%` }}
                  />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Gebelik haftası</p>
                  <p className="mt-2 text-2xl font-bold">
                    {result.pregnancyWeek} hafta {result.pregnancyDay} gün
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Trimester</p>
                  <p className="mt-2 text-2xl font-bold">
                    {result.trimester}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">
                    Tahmini döllenme tarihi
                  </p>
                  <p className="mt-2 text-lg font-bold">
                    {formatDate(result.conceptionDate)}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-sm text-slate-300">
                    Doğuma kalan tahmini süre
                  </p>
                  <p className="mt-2 text-2xl font-bold">
                    {result.remainingDays} gün
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-amber-300/20 bg-amber-400/10 p-4">
                <p className="text-sm leading-6 text-amber-100">
                  Bu sonuç yalnızca yaklaşık bir tahmindir. Gebelik haftası ve
                  doğum tarihi için doktorunuzun muayene ve ultrason
                  değerlendirmesini esas alın.
                </p>
              </div>
            </>
          ) : (
            <div className="flex h-full min-h-[390px] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-pink-500/15 text-pink-300">
                <Baby size={40} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Sonucunuz burada görünecek
              </h3>

              <p className="mt-3 max-w-md leading-7 text-slate-300">
                Son adet tarihinizi ve ortalama döngü uzunluğunuzu girerek
                hesaplama yapabilirsiniz.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}