"use client";

import { useMemo, useState } from "react";

type BmiLevel = "underweight" | "normal" | "overweight" | "obese";

type BmiResult = {
  valid: boolean;
  bmi: number;
  level: BmiLevel;
  category: string;
  description: string;
  recommendation: string;
  minIdealWeight: number;
  maxIdealWeight: number;
  weightDifference: number;
  weightStatus: string;
  calculation: string;
  markerPosition: number;
};

const bmiRanges = [
  {
    key: "underweight",
    title: "Zayıf",
    range: "18,5 altı",
    shortRange: "< 18,5",
    segmentClassName: "bg-sky-400",
    textClassName: "text-sky-700",
  },
  {
    key: "normal",
    title: "Normal",
    range: "18,5 – 24,9",
    shortRange: "18,5 – 24,9",
    segmentClassName: "bg-emerald-500",
    textClassName: "text-emerald-700",
  },
  {
    key: "overweight",
    title: "Fazla Kilolu",
    range: "25 – 29,9",
    shortRange: "25 – 29,9",
    segmentClassName: "bg-amber-400",
    textClassName: "text-amber-700",
  },
  {
    key: "obese",
    title: "Obezite",
    range: "30 ve üzeri",
    shortRange: "30+",
    segmentClassName: "bg-rose-500",
    textClassName: "text-rose-700",
  },
] as const;

const quickExamples = [
  {
    label: "Örnek 1",
    weight: "60",
    height: "165",
  },
  {
    label: "Örnek 2",
    weight: "70",
    height: "175",
  },
  {
    label: "Örnek 3",
    weight: "85",
    height: "180",
  },
] as const;

function formatNumber(
  value: number,
  minimumFractionDigits = 1,
  maximumFractionDigits = 1,
) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits,
    maximumFractionDigits,
  });
}

function normalizeNumberInput(value: string) {
  return Number(value.replace(",", "."));
}

function calculateMarkerPosition(bmi: number) {
  const minimumScaleValue = 12;
  const maximumScaleValue = 40;

  const limitedValue = Math.min(
    Math.max(bmi, minimumScaleValue),
    maximumScaleValue,
  );

  return (
    ((limitedValue - minimumScaleValue) /
      (maximumScaleValue - minimumScaleValue)) *
    100
  );
}

function getResult(weight: string, height: string): BmiResult {
  const weightValue = normalizeNumberInput(weight);
  const heightValue = normalizeNumberInput(height);

  const valuesAreValid =
    Number.isFinite(weightValue) &&
    Number.isFinite(heightValue) &&
    weightValue >= 20 &&
    weightValue <= 350 &&
    heightValue >= 100 &&
    heightValue <= 250;

  if (!valuesAreValid) {
    return {
      valid: false,
      bmi: 0,
      level: "normal",
      category: "Hesaplama bekleniyor",
      description:
        "VKİ sonucunuzu görüntülemek için geçerli boy ve kilo değerleri girin.",
      recommendation:
        "Kilo alanına 20–350 kg, boy alanına 100–250 cm arasında bir değer girin.",
      minIdealWeight: 0,
      maxIdealWeight: 0,
      weightDifference: 0,
      weightStatus: "Bilgilerinizi girin",
      calculation: "Kilo ÷ Boy²",
      markerPosition: 0,
    };
  }

  const heightInMeters = heightValue / 100;
  const heightSquared = heightInMeters * heightInMeters;
  const bmi = weightValue / heightSquared;

  const minIdealWeight = 18.5 * heightSquared;
  const maxIdealWeight = 24.9 * heightSquared;

  let level: BmiLevel;
  let category: string;
  let description: string;
  let recommendation: string;

  if (bmi < 18.5) {
    level = "underweight";
    category = "Zayıf";

    description =
      "VKİ değeriniz genel yetişkin sınıflandırmasına göre normal kabul edilen aralığın altında.";

    recommendation =
      "İstemsiz kilo kaybınız veya beslenmeyle ilgili bir sorununuz varsa doktor ya da diyetisyen desteği almanız faydalı olabilir.";
  } else if (bmi < 25) {
    level = "normal";
    category = "Normal Kilo";

    description =
      "VKİ değeriniz genel yetişkin sınıflandırmasına göre normal kilo aralığında.";

    recommendation =
      "Dengeli beslenme, düzenli fiziksel aktivite ve uyku düzeninizi korumaya devam edebilirsiniz.";
  } else if (bmi < 30) {
    level = "overweight";
    category = "Fazla Kilolu";

    description =
      "VKİ değeriniz genel yetişkin sınıflandırmasına göre normal kabul edilen aralığın üzerinde.";

    recommendation =
      "Beslenme ve hareket alışkanlıklarınızı gözden geçirmek, sürdürülebilir kilo kontrolü sağlamanıza yardımcı olabilir.";
  } else {
    level = "obese";
    category = "Obezite Aralığı";

    description =
      "VKİ değeriniz genel yetişkin sınıflandırmasına göre obezite aralığında.";

    recommendation =
      "Kişisel sağlık durumunuza uygun değerlendirme ve planlama için bir doktor veya diyetisyenle görüşmeniz önerilir.";
  }

  let weightDifference = 0;
  let weightStatus = "";

  if (weightValue < minIdealWeight) {
    weightDifference = minIdealWeight - weightValue;
    weightStatus = `Yaklaşık alt sınırın ${formatNumber(
      weightDifference,
    )} kg altındasınız`;
  } else if (weightValue > maxIdealWeight) {
    weightDifference = weightValue - maxIdealWeight;
    weightStatus = `Yaklaşık üst sınırın ${formatNumber(
      weightDifference,
    )} kg üzerindesiniz`;
  } else {
    const distanceToLowerLimit = weightValue - minIdealWeight;
    const distanceToUpperLimit = maxIdealWeight - weightValue;

    weightDifference = Math.min(
      distanceToLowerLimit,
      distanceToUpperLimit,
    );

    weightStatus = "Yaklaşık normal kilo aralığındasınız";
  }

  return {
    valid: true,
    bmi,
    level,
    category,
    description,
    recommendation,
    minIdealWeight,
    maxIdealWeight,
    weightDifference,
    weightStatus,
    calculation: `${formatNumber(weightValue)} ÷ (${formatNumber(
      heightInMeters,
      2,
      2,
    )} × ${formatNumber(heightInMeters, 2, 2)})`,
    markerPosition: calculateMarkerPosition(bmi),
  };
}

function getTheme(level: BmiLevel) {
  switch (level) {
    case "underweight":
      return {
        accentText: "text-sky-700",
        softText: "text-sky-600",
        border: "border-sky-200",
        softBackground: "bg-sky-50",
        solidBackground: "bg-sky-600",
        gradient:
          "from-sky-600 via-cyan-600 to-blue-700",
        ring: "ring-sky-100",
        badge: "bg-sky-100 text-sky-700",
        progress: "bg-sky-400",
      };

    case "normal":
      return {
        accentText: "text-emerald-700",
        softText: "text-emerald-600",
        border: "border-emerald-200",
        softBackground: "bg-emerald-50",
        solidBackground: "bg-emerald-600",
        gradient:
          "from-emerald-600 via-teal-600 to-cyan-700",
        ring: "ring-emerald-100",
        badge: "bg-emerald-100 text-emerald-700",
        progress: "bg-emerald-500",
      };

    case "overweight":
      return {
        accentText: "text-amber-800",
        softText: "text-amber-700",
        border: "border-amber-200",
        softBackground: "bg-amber-50",
        solidBackground: "bg-amber-500",
        gradient:
          "from-amber-500 via-orange-500 to-orange-700",
        ring: "ring-amber-100",
        badge: "bg-amber-100 text-amber-800",
        progress: "bg-amber-400",
      };

    case "obese":
      return {
        accentText: "text-rose-700",
        softText: "text-rose-600",
        border: "border-rose-200",
        softBackground: "bg-rose-50",
        solidBackground: "bg-rose-600",
        gradient:
          "from-rose-600 via-red-600 to-orange-700",
        ring: "ring-rose-100",
        badge: "bg-rose-100 text-rose-700",
        progress: "bg-rose-500",
      };
  }
}

export default function BmiCalculator() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("175");
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = useMemo(
    () => getResult(weight, height),
    [weight, height],
  );

  const theme = getTheme(result.level);

  const handleWeightChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setWeight(event.target.value);
    setHasInteracted(true);
  };

  const handleHeightChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setHeight(event.target.value);
    setHasInteracted(true);
  };

  const handleQuickExample = (
    exampleWeight: string,
    exampleHeight: string,
  ) => {
    setWeight(exampleWeight);
    setHeight(exampleHeight);
    setHasInteracted(true);
  };

  const handleReset = () => {
    setWeight("");
    setHeight("");
    setHasInteracted(false);
  };

  const handleDefaultValues = () => {
    setWeight("70");
    setHeight("175");
    setHasInteracted(true);
  };

  const weightValue = normalizeNumberInput(weight);
  const heightValue = normalizeNumberInput(height);

  const weightHasError =
    hasInteracted &&
    weight.length > 0 &&
    (!Number.isFinite(weightValue) ||
      weightValue < 20 ||
      weightValue > 350);

  const heightHasError =
    hasInteracted &&
    height.length > 0 &&
    (!Number.isFinite(heightValue) ||
      heightValue < 100 ||
      heightValue > 250);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)]">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <section
          aria-labelledby="bmi-personal-information-heading"
          className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Kişisel bilgiler
              </div>

              <h3
                id="bmi-personal-information-heading"
                className="mt-4 text-2xl font-black tracking-tight text-slate-950"
              >
                Boy ve kilo bilgilerinizi girin
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                Değerleri değiştirdiğinizde VKİ sonucunuz, kilo
                kategoriniz ve yaklaşık normal kilo aralığınız otomatik
                olarak güncellenir.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
            >
              Temizle
            </button>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <label
                    htmlFor="bmi-weight"
                    className="block text-sm font-black text-slate-900"
                  >
                    Kilonuz
                  </label>

                  <p
                    id="bmi-weight-description"
                    className="mt-1 text-xs leading-5 text-slate-500"
                  >
                    Kilogram cinsinden mevcut vücut ağırlığınız
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  20–350 kg
                </span>
              </div>

              <div className="relative mt-3">
                <input
                  id="bmi-weight"
                  type="number"
                  inputMode="decimal"
                  min="20"
                  max="350"
                  step="0.1"
                  value={weight}
                  onChange={handleWeightChange}
                  onBlur={() => setHasInteracted(true)}
                  placeholder="Örn. 70"
                  aria-describedby="bmi-weight-description bmi-weight-error"
                  aria-invalid={weightHasError}
                  className={`h-16 w-full rounded-2xl border bg-white px-5 pr-20 text-xl font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
                    weightHasError
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
                  kg
                </span>
              </div>

              <div className="mt-2 min-h-5">
                {weightHasError ? (
                  <p
                    id="bmi-weight-error"
                    className="text-xs font-semibold text-rose-600"
                  >
                    Lütfen 20 ile 350 kg arasında bir değer girin.
                  </p>
                ) : (
                  <p
                    id="bmi-weight-error"
                    className="text-xs text-slate-400"
                  >
                    Ondalıklı değer kullanabilirsiniz. Örneğin: 72,5
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <label
                    htmlFor="bmi-height"
                    className="block text-sm font-black text-slate-900"
                  >
                    Boyunuz
                  </label>

                  <p
                    id="bmi-height-description"
                    className="mt-1 text-xs leading-5 text-slate-500"
                  >
                    Santimetre cinsinden boy uzunluğunuz
                  </p>
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  100–250 cm
                </span>
              </div>

              <div className="relative mt-3">
                <input
                  id="bmi-height"
                  type="number"
                  inputMode="decimal"
                  min="100"
                  max="250"
                  step="0.1"
                  value={height}
                  onChange={handleHeightChange}
                  onBlur={() => setHasInteracted(true)}
                  placeholder="Örn. 175"
                  aria-describedby="bmi-height-description bmi-height-error"
                  aria-invalid={heightHasError}
                  className={`h-16 w-full rounded-2xl border bg-white px-5 pr-20 text-xl font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
                    heightHasError
                      ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
                      : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                  }`}
                />

                <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
                  cm
                </span>
              </div>

              <div className="mt-2 min-h-5">
                {heightHasError ? (
                  <p
                    id="bmi-height-error"
                    className="text-xs font-semibold text-rose-600"
                  >
                    Lütfen 100 ile 250 cm arasında bir değer girin.
                  </p>
                ) : (
                  <p
                    id="bmi-height-error"
                    className="text-xs text-slate-400"
                  >
                    Boyunuzu santimetre olarak girin. Örneğin: 175
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black text-slate-900">
                Hızlı örnekler
              </p>

              <button
                type="button"
                onClick={handleDefaultValues}
                className="text-xs font-bold text-emerald-700 transition hover:text-emerald-800"
              >
                Varsayılan değerleri getir
              </button>
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {quickExamples.map((example) => {
                const isActive =
                  weight === example.weight &&
                  height === example.height;

                return (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() =>
                      handleQuickExample(
                        example.weight,
                        example.height,
                      )
                    }
                    className={`rounded-2xl border px-2 py-3 text-center transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                      isActive
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/60"
                    }`}
                  >
                    <span
                      className={`block text-xs font-black ${
                        isActive
                          ? "text-emerald-700"
                          : "text-slate-700"
                      }`}
                    >
                      {example.label}
                    </span>

                    <span className="mt-1 block text-[11px] font-semibold text-slate-500">
                      {example.weight} kg · {example.height} cm
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-black text-white shadow-sm">
                i
              </div>

              <div>
                <p className="font-black text-emerald-950">
                  Kullanılan temel formül
                </p>

                <p className="mt-2 font-mono text-sm font-bold text-emerald-800">
                  VKİ = Kilo (kg) ÷ Boy² (m)
                </p>

                <p className="mt-2 text-sm leading-6 text-emerald-800/80">
                  Hesaplama yetişkinler için genel bir tarama sonucu
                  sunar. Vücut yağ oranını doğrudan ölçmez.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="bmi-result-heading"
          aria-live="polite"
          className={`relative overflow-hidden bg-gradient-to-br p-5 text-white sm:p-7 lg:p-8 ${theme.gradient}`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-2xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-slate-950/15 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/70">
                  Hesaplama sonucu
                </p>

                <h3
                  id="bmi-result-heading"
                  className="mt-2 text-2xl font-black tracking-tight"
                >
                  Vücut Kitle İndeksiniz
                </h3>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white" />
                Anlık hesaplama
              </span>
            </div>

            {result.valid ? (
              <>
                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <div className="flex items-end gap-3">
                      <p className="text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                        {formatNumber(result.bmi)}
                      </p>

                      <span className="mb-2 rounded-xl border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-black text-white/80">
                        kg/m²
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-sm">
                        {result.category}
                      </span>

                      <span className="text-sm font-semibold text-white/80">
                        Yetişkin sınıflandırması
                      </span>
                    </div>
                  </div>

                  <div className="max-w-xs rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                      Kilo durumunuz
                    </p>

                    <p className="mt-2 text-sm font-black leading-6 text-white">
                      {result.weightStatus}
                    </p>
                  </div>
                </div>

                <div className="mt-8 rounded-3xl border border-white/15 bg-slate-950/15 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-black text-white">
                        VKİ göstergesi
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Genel yetişkin referans aralıkları
                      </p>
                    </div>

                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-black">
                      {formatNumber(result.bmi)}
                    </span>
                  </div>

                  <div className="relative mt-8 px-1 pt-5">
                    <div
                      className="absolute top-0 z-10 -translate-x-1/2"
                      style={{
                        left: `${result.markerPosition}%`,
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="rounded-lg bg-white px-2 py-1 text-[10px] font-black text-slate-950 shadow-lg">
                          Siz
                        </div>

                        <div className="h-3 w-0.5 bg-white" />

                        <div className="h-3 w-3 rounded-full border-2 border-white bg-slate-950 shadow-lg" />
                      </div>
                    </div>

                    <div className="flex h-4 overflow-hidden rounded-full ring-4 ring-white/10">
                      <div className="w-[23%] bg-sky-400" />
                      <div className="w-[30%] bg-emerald-400" />
                      <div className="w-[20%] bg-amber-300" />
                      <div className="flex-1 bg-rose-400" />
                    </div>

                    <div className="mt-3 flex justify-between text-[10px] font-black text-white/65">
                      <span>12</span>
                      <span>18,5</span>
                      <span>25</span>
                      <span>30</span>
                      <span>40+</span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {bmiRanges.map((range) => {
                        const isCurrent =
                          range.key === result.level;

                        return (
                          <div
                            key={range.key}
                            className={`rounded-2xl border px-3 py-3 ${
                              isCurrent
                                ? "border-white/40 bg-white/20"
                                : "border-white/10 bg-white/5"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span
                                className={`h-2.5 w-2.5 rounded-full ${range.segmentClassName}`}
                              />

                              <p className="text-xs font-black text-white">
                                {range.title}
                              </p>
                            </div>

                            <p className="mt-1 text-[10px] font-semibold text-white/60">
                              {range.shortRange}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Yaklaşık normal kilo aralığı
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {formatNumber(result.minIdealWeight)} –{" "}
                      {formatNumber(result.maxIdealWeight)} kg
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      18,5 ile 24,9 arasındaki VKİ değerleri temel
                      alınmıştır.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Kullanılan işlem
                    </p>

                    <p className="mt-3 break-words font-mono text-base font-black">
                      {result.calculation}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Sonuç bir ondalık basamağa yuvarlanmıştır.
                    </p>
                  </article>
                </div>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white p-5 text-slate-950 shadow-xl sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white ${theme.solidBackground}`}
                    >
                      ✓
                    </div>

                    <div>
                      <p className={`font-black ${theme.accentText}`}>
                        Sonuç değerlendirmesi
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                        {result.description}
                      </p>

                      <div
                        className={`mt-4 rounded-2xl border p-4 ${theme.border} ${theme.softBackground}`}
                      >
                        <p
                          className={`text-sm leading-7 ${theme.softText}`}
                        >
                          {result.recommendation}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </>
            ) : (
              <div className="mt-8">
                <div className="rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm sm:p-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-2xl font-black">
                    ?
                  </div>

                  <p className="mt-5 text-3xl font-black">
                    Sonuç bekleniyor
                  </p>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/75">
                    Boy ve kilo alanlarına geçerli değerler
                    girdiğinizde VKİ sonucunuz burada otomatik olarak
                    görüntülenecek.
                  </p>

                  <button
                    type="button"
                    onClick={handleDefaultValues}
                    className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-black text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                  >
                    Örnek değerlerle göster
                  </button>
                </div>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/15 bg-slate-950/15 p-4 text-white/80 backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-black">
                !
              </span>

              <p className="text-xs leading-6">
                Bu sonuç genel bilgilendirme amacı taşır. VKİ;
                vücut yağ oranını, kas kütlesini ve kişisel sağlık
                durumunu tek başına göstermez. Tıbbi değerlendirme
                için sağlık uzmanına danışın.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}