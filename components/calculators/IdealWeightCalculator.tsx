"use client";

import { useMemo, useState } from "react";

type Gender = "male" | "female";

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("175");

  const result = useMemo(() => {
    const heightValue = Number(height);

    if (
      !Number.isFinite(heightValue) ||
      heightValue < 120 ||
      heightValue > 230
    ) {
      return {
        valid: false,
        idealWeight: 0,
        minHealthyWeight: 0,
        maxHealthyWeight: 0,
      };
    }

    const heightInMeters = heightValue / 100;
    const heightInInches = heightValue / 2.54;
    const inchesOverFiveFeet = Math.max(heightInInches - 60, 0);

    const idealWeight =
      gender === "male"
        ? 50 + 2.3 * inchesOverFiveFeet
        : 45.5 + 2.3 * inchesOverFiveFeet;

    const minHealthyWeight = 18.5 * heightInMeters * heightInMeters;
    const maxHealthyWeight = 24.9 * heightInMeters * heightInMeters;

    return {
      valid: true,
      idealWeight,
      minHealthyWeight,
      maxHealthyWeight,
    };
  }, [gender, height]);

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
            htmlFor="gender"
            className="block font-semibold text-slate-800"
          >
            Cinsiyet
          </label>

          <select
            id="gender"
            value={gender}
            onChange={(event) => setGender(event.target.value as Gender)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
          </select>

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
              min="120"
              max="230"
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
              İdeal kilo tahmini Devine formülüyle, sağlıklı kilo aralığı ise
              VKİ 18,5 ile 24,9 değerleri temel alınarak hesaplanır.
            </p>
          </div>

          {!result.valid && (
            <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5">
              <p className="text-sm leading-6 text-red-800">
                Lütfen 120 ile 230 cm arasında geçerli bir boy değeri girin.
              </p>
            </div>
          )}
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-emerald-100">Tahmini İdeal Kilonuz</p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              {result.valid ? formatNumber(result.idealWeight) : "0,0"} kg
            </h2>
          </div>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-emerald-100">
              Tahmini Sağlıklı Kilo Aralığı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {result.valid
                ? `${formatNumber(result.minHealthyWeight)} - ${formatNumber(
                    result.maxHealthyWeight
                  )} kg`
                : "0,0 - 0,0 kg"}
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-emerald-100">Hesaplama Notu</p>

            <p className="mt-2 leading-7">
              Tek bir ideal kilo değeri kesin sonuç değildir. Kas oranı, kemik
              yapısı, yaş ve genel sağlık durumu kişisel değerlendirmeyi
              etkileyebilir.
            </p>
          </div>

          <p className="mt-6 text-sm leading-6 text-emerald-100">
            Bu araç genel bilgilendirme amaçlıdır ve tıbbi değerlendirme yerine
            geçmez.
          </p>
        </div>
      </div>
    </div>
  );
}