"use client";

import { useMemo, useState } from "react";

type Gender = "male" | "female";
type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";

const activityMultipliers: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

export default function BmrCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>("moderate");

  const result = useMemo(() => {
    const ageValue = Number(age);
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (
      !Number.isFinite(ageValue) ||
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightValue) ||
      ageValue <= 0 ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      return {
        valid: false,
        bmr: 0,
        dailyCalories: 0,
        weeklyCalories: 0,
      };
    }

    const bmr =
      gender === "male"
        ? 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5
        : 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;

    const dailyCalories = bmr * activityMultipliers[activityLevel];
    const weeklyCalories = dailyCalories * 7;

    return {
      valid: true,
      bmr,
      dailyCalories,
      weeklyCalories,
    };
  }, [age, weight, height, gender, activityLevel]);

  const formatNumber = (value: number) =>
    value.toLocaleString("tr-TR", {
      maximumFractionDigits: 0,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="gender"
            className="block font-semibold text-slate-800"
          >
            Cinsiyet
          </label>

          <select
            id="gender"
            value={gender}
            onChange={(event) =>
              setGender(event.target.value as Gender)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
          </select>

          <label
            htmlFor="age"
            className="mt-8 block font-semibold text-slate-800"
          >
            Yaş
          </label>

          <input
            id="age"
            type="number"
            min="1"
            max="120"
            value={age}
            onChange={(event) => setAge(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <label
            htmlFor="weight"
            className="mt-8 block font-semibold text-slate-800"
          >
            Kilo
          </label>

          <div className="relative mt-3">
            <input
              id="weight"
              type="number"
              min="1"
              step="0.1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              kg
            </span>
          </div>

          <label
            htmlFor="height"
            className="mt-8 block font-semibold text-slate-800"
          >
            Boy
          </label>

          <div className="relative mt-3">
            <input
              id="height"
              type="number"
              min="1"
              step="0.1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              cm
            </span>
          </div>

          <label
            htmlFor="activityLevel"
            className="mt-8 block font-semibold text-slate-800"
          >
            Aktivite Seviyesi
          </label>

          <select
            id="activityLevel"
            value={activityLevel}
            onChange={(event) =>
              setActivityLevel(event.target.value as ActivityLevel)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="sedentary">Hareketsiz</option>
            <option value="light">Az Aktif</option>
            <option value="moderate">Orta Aktif</option>
            <option value="active">Aktif</option>
            <option value="veryActive">Çok Aktif</option>
          </select>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Bazal metabolizma hızı, vücudunuzun dinlenme hâlindeyken temel
              yaşam işlevleri için harcadığı tahmini enerjiyi gösterir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-violet-100">Bazal Metabolizma Hızınız</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid ? formatNumber(result.bmr) : 0} kcal
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-violet-100">
              Günlük Tahmini Kalori İhtiyacı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid ? formatNumber(result.dailyCalories) : 0} kcal
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-violet-100">
              Haftalık Tahmini Enerji İhtiyacı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid ? formatNumber(result.weeklyCalories) : 0} kcal
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-violet-100">
            Sonuçlar genel tahmindir. Kas oranı, hormonlar, sağlık durumu ve
            günlük hareket miktarı gerçek enerji ihtiyacını değiştirebilir.
          </p>
        </div>
      </div>
    </div>
  );
}