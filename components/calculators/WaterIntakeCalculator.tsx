"use client";

import { useMemo, useState } from "react";

type ActivityLevel = "low" | "medium" | "high";

export default function WaterIntakeCalculator() {
  const [weight, setWeight] = useState("70");
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>("medium");
  const [weatherHot, setWeatherHot] = useState(false);

  const result = useMemo(() => {
    const weightValue = Number(weight);

    if (!Number.isFinite(weightValue) || weightValue <= 0) {
      return {
        liters: 0,
        milliliters: 0,
        glasses: 0,
        valid: false,
      };
    }

    let millilitersPerKg = 30;

    if (activityLevel === "medium") {
      millilitersPerKg = 35;
    }

    if (activityLevel === "high") {
      millilitersPerKg = 40;
    }

    let milliliters = weightValue * millilitersPerKg;

    if (weatherHot) {
      milliliters += 500;
    }

    const liters = milliliters / 1000;
    const glasses = Math.ceil(milliliters / 250);

    return {
      liters,
      milliliters,
      glasses,
      valid: true,
    };
  }, [weight, activityLevel, weatherHot]);

  const formatNumber = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="weight"
            className="block font-semibold text-slate-800"
          >
            Kilonuz
          </label>

          <div className="relative mt-3">
            <input
              id="weight"
              type="number"
              min="1"
              step="0.1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="70"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              kg
            </span>
          </div>

          <label
            htmlFor="activityLevel"
            className="mt-8 block font-semibold text-slate-800"
          >
            Günlük Aktivite Seviyesi
          </label>

          <select
            id="activityLevel"
            value={activityLevel}
            onChange={(event) =>
              setActivityLevel(event.target.value as ActivityLevel)
            }
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="low">Düşük Aktivite</option>
            <option value="medium">Orta Aktivite</option>
            <option value="high">Yüksek Aktivite</option>
          </select>

          <label className="mt-8 flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <input
              type="checkbox"
              checked={weatherHot}
              onChange={(event) => setWeatherHot(event.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />

            <span className="font-medium text-slate-800">
              Sıcak havada veya yoğun terleme koşullarındayım
            </span>
          </label>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Tahmini ihtiyaç kilo, aktivite seviyesi ve sıcak hava koşuluna
              göre hesaplanır. Sonuç genel bilgilendirme amaçlıdır.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Günlük Tahmini İhtiyaç
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Günlük Su Miktarı</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid ? formatNumber(result.liters) : "0,0"} Litre
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-blue-100">Mililitre</p>

              <p className="mt-2 text-2xl font-bold">
                {result.valid
                  ? result.milliliters.toLocaleString("tr-TR", {
                      maximumFractionDigits: 0,
                    })
                  : 0}{" "}
                ml
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-sm text-blue-100">Yaklaşık Bardak</p>

              <p className="mt-2 text-2xl font-bold">
                {result.valid ? result.glasses : 0} Bardak
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Hesaplama Notu</p>

            <p className="mt-2 leading-7">
              Bir bardak yaklaşık 250 ml olarak kabul edilmiştir.
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-blue-100">
            Böbrek, kalp veya sıvı dengesiyle ilgili sağlık durumlarında kişisel
            su ihtiyacı değişebilir. Sağlık uzmanının önerisi önceliklidir.
          </p>
        </div>
      </div>
    </div>
  );
}