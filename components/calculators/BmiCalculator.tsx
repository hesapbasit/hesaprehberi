"use client";

import { useMemo, useState } from "react";

export default function BmiCalculator() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");

  const result = useMemo(() => {
    const weightValue = Number(weight);
    const heightValue = Number(height);

    if (
      !Number.isFinite(weightValue) ||
      !Number.isFinite(heightValue) ||
      weightValue <= 0 ||
      heightValue <= 0
    ) {
      return {
        bmi: 0,
        category: "Geçerli değerler girin",
        minIdealWeight: 0,
        maxIdealWeight: 0,
        valid: false,
      };
    }

    const heightInMeters = heightValue / 100;
    const bmi = weightValue / (heightInMeters * heightInMeters);

    let category = "";

    if (bmi < 18.5) {
      category = "Zayıf";
    } else if (bmi < 25) {
      category = "Normal Kilolu";
    } else if (bmi < 30) {
      category = "Fazla Kilolu";
    } else {
      category = "Obez";
    }

    const minIdealWeight = 18.5 * heightInMeters * heightInMeters;
    const maxIdealWeight = 24.9 * heightInMeters * heightInMeters;

    return {
      bmi,
      category,
      minIdealWeight,
      maxIdealWeight,
      valid: true,
    };
  }, [weight, height]);

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
            htmlFor="height"
            className="mt-8 block font-semibold text-slate-800"
          >
            Boyunuz
          </label>

          <div className="relative mt-3">
            <input
              id="height"
              type="number"
              min="1"
              step="0.1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              placeholder="175"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-16 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              cm
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              VKİ, kilonun metre cinsinden boyun karesine bölünmesiyle
              hesaplanır. Sonuç yetişkinler için genel bir değerlendirme sunar.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Vücut Kitle İndeksiniz</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid ? formatNumber(result.bmi) : "0,0"}
            </h2>

            <p className="mt-4 text-xl font-semibold">
              {result.category}
            </p>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">
              Boyunuza Göre Tahmini Normal Kilo Aralığı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid
                ? `${formatNumber(result.minIdealWeight)} - ${formatNumber(
                    result.maxIdealWeight
                  )} kg`
                : "0,0 - 0,0 kg"}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">VKİ Sınıflandırması</p>

            <div className="mt-4 space-y-2 text-sm">
              <p>Zayıf: 18,5 altı</p>
              <p>Normal: 18,5 - 24,9</p>
              <p>Fazla kilolu: 25 - 29,9</p>
              <p>Obez: 30 ve üzeri</p>
            </div>
          </div>

          <p className="mt-6 text-sm leading-6 text-blue-100">
            Bu sonuç genel bilgilendirme amaçlıdır ve tıbbi teşhis yerine
            geçmez.
          </p>
        </div>
      </div>
    </div>
  );
}