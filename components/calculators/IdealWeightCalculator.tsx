"use client";

import { useMemo, useState, type ChangeEvent } from "react";

type Gender = "male" | "female";

type WeightStatus =
  | "below"
  | "healthy"
  | "above"
  | "not-provided"
  | "invalid";

type FormulaResult = {
  key: "devine" | "robinson" | "miller" | "hamwi";
  name: string;
  shortName: string;
  value: number;
  description: string;
  formula: string;
};

type IdealWeightResult = {
  valid: boolean;
  heightValue: number;
  heightInMeters: number;
  heightInInches: number;
  feet: number;
  remainingInches: number;
  inchesOverFiveFeet: number;
  formulas: FormulaResult[];
  averageIdealWeight: number;
  minimumFormulaResult: number;
  maximumFormulaResult: number;
  minHealthyWeight: number;
  maxHealthyWeight: number;
  healthyRangeMidpoint: number;
  currentWeightValid: boolean;
  currentWeightValue: number;
  currentBmi: number;
  weightStatus: WeightStatus;
  weightDifference: number;
  weightStatusTitle: string;
  weightStatusDescription: string;
  progressPosition: number;
};

type Theme = {
  gradient: string;
  panel: string;
  badge: string;
  accentText: string;
  accentBackground: string;
  accentBorder: string;
  solidBackground: string;
  iconText: string;
};

const MINIMUM_HEIGHT = 120;
const MAXIMUM_HEIGHT = 230;
const MINIMUM_WEIGHT = 20;
const MAXIMUM_WEIGHT = 350;

const quickExamples = [
  {
    label: "Kadın örneği",
    gender: "female" as const,
    height: "165",
    currentWeight: "60",
  },
  {
    label: "Erkek örneği",
    gender: "male" as const,
    height: "175",
    currentWeight: "70",
  },
  {
    label: "Uzun boy",
    gender: "male" as const,
    height: "185",
    currentWeight: "82",
  },
] as const;

const formulaMeta = {
  devine: {
    name: "Devine",
    shortName: "Devine",
    description:
      "Yaygın kullanılan klasik ideal kilo tahmin yöntemlerinden biridir.",
  },
  robinson: {
    name: "Robinson",
    shortName: "Robinson",
    description:
      "Boy artışı için daha düşük katsayılar kullanan alternatif yöntemdir.",
  },
  miller: {
    name: "Miller",
    shortName: "Miller",
    description:
      "Daha yüksek başlangıç değeri ve daha düşük boy katsayısı kullanır.",
  },
  hamwi: {
    name: "Hamwi",
    shortName: "Hamwi",
    description:
      "Beş fit üzerindeki boy farkına göre klasik kilo tahmini oluşturur.",
  },
} as const;

function normalizeNumberInput(value: string) {
  if (!value.trim()) {
    return Number.NaN;
  }

  return Number(value.replace(",", "."));
}

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

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(Math.max(value, minimum), maximum);
}

function calculateProgressPosition(
  currentWeight: number,
  minHealthyWeight: number,
  maxHealthyWeight: number,
) {
  const scalePadding = Math.max((maxHealthyWeight - minHealthyWeight) * 0.55, 12);
  const scaleMinimum = Math.max(minHealthyWeight - scalePadding, 20);
  const scaleMaximum = maxHealthyWeight + scalePadding;

  const position =
    ((currentWeight - scaleMinimum) / (scaleMaximum - scaleMinimum)) * 100;

  return clamp(position, 2, 98);
}

function calculateIdealWeight(
  gender: Gender,
  height: string,
  currentWeight: string,
): IdealWeightResult {
  const heightValue = normalizeNumberInput(height);
  const currentWeightValue = normalizeNumberInput(currentWeight);

  const heightIsValid =
    Number.isFinite(heightValue) &&
    heightValue >= MINIMUM_HEIGHT &&
    heightValue <= MAXIMUM_HEIGHT;

  if (!heightIsValid) {
    return {
      valid: false,
      heightValue: 0,
      heightInMeters: 0,
      heightInInches: 0,
      feet: 0,
      remainingInches: 0,
      inchesOverFiveFeet: 0,
      formulas: [],
      averageIdealWeight: 0,
      minimumFormulaResult: 0,
      maximumFormulaResult: 0,
      minHealthyWeight: 0,
      maxHealthyWeight: 0,
      healthyRangeMidpoint: 0,
      currentWeightValid: false,
      currentWeightValue: 0,
      currentBmi: 0,
      weightStatus: "invalid",
      weightDifference: 0,
      weightStatusTitle: "Geçerli bir boy değeri girin",
      weightStatusDescription:
        "Hesaplamanın yapılabilmesi için boyunuzu 120 ile 230 cm arasında girin.",
      progressPosition: 50,
    };
  }

  const heightInMeters = heightValue / 100;
  const heightInInches = heightValue / 2.54;
  const totalRoundedInches = Math.round(heightInInches);
  const feet = Math.floor(totalRoundedInches / 12);
  const remainingInches = totalRoundedInches % 12;
  const inchesOverFiveFeet = Math.max(heightInInches - 60, 0);

  const devine =
    gender === "male"
      ? 50 + 2.3 * inchesOverFiveFeet
      : 45.5 + 2.3 * inchesOverFiveFeet;

  const robinson =
    gender === "male"
      ? 52 + 1.9 * inchesOverFiveFeet
      : 49 + 1.7 * inchesOverFiveFeet;

  const miller =
    gender === "male"
      ? 56.2 + 1.41 * inchesOverFiveFeet
      : 53.1 + 1.36 * inchesOverFiveFeet;

  const hamwi =
    gender === "male"
      ? 48 + 2.7 * inchesOverFiveFeet
      : 45.5 + 2.2 * inchesOverFiveFeet;

  const formulas: FormulaResult[] = [
    {
      key: "devine",
      name: formulaMeta.devine.name,
      shortName: formulaMeta.devine.shortName,
      value: devine,
      description: formulaMeta.devine.description,
      formula:
        gender === "male"
          ? `50 + (2,3 × ${formatNumber(inchesOverFiveFeet)})`
          : `45,5 + (2,3 × ${formatNumber(inchesOverFiveFeet)})`,
    },
    {
      key: "robinson",
      name: formulaMeta.robinson.name,
      shortName: formulaMeta.robinson.shortName,
      value: robinson,
      description: formulaMeta.robinson.description,
      formula:
        gender === "male"
          ? `52 + (1,9 × ${formatNumber(inchesOverFiveFeet)})`
          : `49 + (1,7 × ${formatNumber(inchesOverFiveFeet)})`,
    },
    {
      key: "miller",
      name: formulaMeta.miller.name,
      shortName: formulaMeta.miller.shortName,
      value: miller,
      description: formulaMeta.miller.description,
      formula:
        gender === "male"
          ? `56,2 + (1,41 × ${formatNumber(inchesOverFiveFeet)})`
          : `53,1 + (1,36 × ${formatNumber(inchesOverFiveFeet)})`,
    },
    {
      key: "hamwi",
      name: formulaMeta.hamwi.name,
      shortName: formulaMeta.hamwi.shortName,
      value: hamwi,
      description: formulaMeta.hamwi.description,
      formula:
        gender === "male"
          ? `48 + (2,7 × ${formatNumber(inchesOverFiveFeet)})`
          : `45,5 + (2,2 × ${formatNumber(inchesOverFiveFeet)})`,
    },
  ];

  const formulaValues = formulas.map((formula) => formula.value);
  const averageIdealWeight =
    formulaValues.reduce((total, value) => total + value, 0) /
    formulaValues.length;

  const minimumFormulaResult = Math.min(...formulaValues);
  const maximumFormulaResult = Math.max(...formulaValues);

  const minHealthyWeight = 18.5 * heightInMeters * heightInMeters;
  const maxHealthyWeight = 24.9 * heightInMeters * heightInMeters;
  const healthyRangeMidpoint = (minHealthyWeight + maxHealthyWeight) / 2;

  const currentWeightValid =
    Number.isFinite(currentWeightValue) &&
    currentWeightValue >= MINIMUM_WEIGHT &&
    currentWeightValue <= MAXIMUM_WEIGHT;

  if (!currentWeight.trim()) {
    return {
      valid: true,
      heightValue,
      heightInMeters,
      heightInInches,
      feet,
      remainingInches,
      inchesOverFiveFeet,
      formulas,
      averageIdealWeight,
      minimumFormulaResult,
      maximumFormulaResult,
      minHealthyWeight,
      maxHealthyWeight,
      healthyRangeMidpoint,
      currentWeightValid: false,
      currentWeightValue: 0,
      currentBmi: 0,
      weightStatus: "not-provided",
      weightDifference: 0,
      weightStatusTitle: "Mevcut kilo girilmedi",
      weightStatusDescription:
        "Mevcut kilonuzu girerek sağlıklı kilo aralığıyla karşılaştırabilirsiniz.",
      progressPosition: 50,
    };
  }

  if (!currentWeightValid) {
    return {
      valid: true,
      heightValue,
      heightInMeters,
      heightInInches,
      feet,
      remainingInches,
      inchesOverFiveFeet,
      formulas,
      averageIdealWeight,
      minimumFormulaResult,
      maximumFormulaResult,
      minHealthyWeight,
      maxHealthyWeight,
      healthyRangeMidpoint,
      currentWeightValid: false,
      currentWeightValue: 0,
      currentBmi: 0,
      weightStatus: "invalid",
      weightDifference: 0,
      weightStatusTitle: "Geçerli bir kilo değeri girin",
      weightStatusDescription:
        "Karşılaştırma yapabilmek için mevcut kilonuzu 20 ile 350 kg arasında girin.",
      progressPosition: 50,
    };
  }

  const currentBmi =
    currentWeightValue / (heightInMeters * heightInMeters);

  if (currentWeightValue < minHealthyWeight) {
    const weightDifference = minHealthyWeight - currentWeightValue;

    return {
      valid: true,
      heightValue,
      heightInMeters,
      heightInInches,
      feet,
      remainingInches,
      inchesOverFiveFeet,
      formulas,
      averageIdealWeight,
      minimumFormulaResult,
      maximumFormulaResult,
      minHealthyWeight,
      maxHealthyWeight,
      healthyRangeMidpoint,
      currentWeightValid: true,
      currentWeightValue,
      currentBmi,
      weightStatus: "below",
      weightDifference,
      weightStatusTitle: "Yaklaşık aralığın altındasınız",
      weightStatusDescription: `Mevcut kilonuz, normal kilo aralığının alt sınırından yaklaşık ${formatNumber(
        weightDifference,
      )} kg daha düşük.`,
      progressPosition: calculateProgressPosition(
        currentWeightValue,
        minHealthyWeight,
        maxHealthyWeight,
      ),
    };
  }

  if (currentWeightValue > maxHealthyWeight) {
    const weightDifference = currentWeightValue - maxHealthyWeight;

    return {
      valid: true,
      heightValue,
      heightInMeters,
      heightInInches,
      feet,
      remainingInches,
      inchesOverFiveFeet,
      formulas,
      averageIdealWeight,
      minimumFormulaResult,
      maximumFormulaResult,
      minHealthyWeight,
      maxHealthyWeight,
      healthyRangeMidpoint,
      currentWeightValid: true,
      currentWeightValue,
      currentBmi,
      weightStatus: "above",
      weightDifference,
      weightStatusTitle: "Yaklaşık aralığın üzerindesiniz",
      weightStatusDescription: `Mevcut kilonuz, normal kilo aralığının üst sınırından yaklaşık ${formatNumber(
        weightDifference,
      )} kg daha yüksek.`,
      progressPosition: calculateProgressPosition(
        currentWeightValue,
        minHealthyWeight,
        maxHealthyWeight,
      ),
    };
  }

  return {
    valid: true,
    heightValue,
    heightInMeters,
    heightInInches,
    feet,
    remainingInches,
    inchesOverFiveFeet,
    formulas,
    averageIdealWeight,
    minimumFormulaResult,
    maximumFormulaResult,
    minHealthyWeight,
    maxHealthyWeight,
    healthyRangeMidpoint,
    currentWeightValid: true,
    currentWeightValue,
    currentBmi,
    weightStatus: "healthy",
    weightDifference: 0,
    weightStatusTitle: "Yaklaşık normal kilo aralığındasınız",
    weightStatusDescription:
      "Mevcut kilonuz, boyunuza göre hesaplanan genel yetişkin referans aralığında.",
    progressPosition: calculateProgressPosition(
      currentWeightValue,
      minHealthyWeight,
      maxHealthyWeight,
    ),
  };
}

function getTheme(status: WeightStatus): Theme {
  switch (status) {
    case "below":
      return {
        gradient: "from-sky-600 via-cyan-600 to-blue-700",
        panel: "bg-sky-50",
        badge: "bg-sky-100 text-sky-700",
        accentText: "text-sky-700",
        accentBackground: "bg-sky-50",
        accentBorder: "border-sky-200",
        solidBackground: "bg-sky-600",
        iconText: "↓",
      };

    case "healthy":
      return {
        gradient: "from-emerald-600 via-teal-600 to-cyan-700",
        panel: "bg-emerald-50",
        badge: "bg-emerald-100 text-emerald-700",
        accentText: "text-emerald-700",
        accentBackground: "bg-emerald-50",
        accentBorder: "border-emerald-200",
        solidBackground: "bg-emerald-600",
        iconText: "✓",
      };

    case "above":
      return {
        gradient: "from-amber-500 via-orange-500 to-rose-600",
        panel: "bg-amber-50",
        badge: "bg-amber-100 text-amber-800",
        accentText: "text-amber-800",
        accentBackground: "bg-amber-50",
        accentBorder: "border-amber-200",
        solidBackground: "bg-amber-500",
        iconText: "↑",
      };

    case "invalid":
      return {
        gradient: "from-rose-600 via-red-600 to-orange-700",
        panel: "bg-rose-50",
        badge: "bg-rose-100 text-rose-700",
        accentText: "text-rose-700",
        accentBackground: "bg-rose-50",
        accentBorder: "border-rose-200",
        solidBackground: "bg-rose-600",
        iconText: "!",
      };

    case "not-provided":
    default:
      return {
        gradient: "from-emerald-600 via-teal-600 to-cyan-700",
        panel: "bg-emerald-50",
        badge: "bg-emerald-100 text-emerald-700",
        accentText: "text-emerald-700",
        accentBackground: "bg-emerald-50",
        accentBorder: "border-emerald-200",
        solidBackground: "bg-emerald-600",
        iconText: "i",
      };
  }
}

export default function IdealWeightCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("175");
  const [currentWeight, setCurrentWeight] = useState("70");
  const [hasInteracted, setHasInteracted] = useState(false);

  const result = useMemo(
    () => calculateIdealWeight(gender, height, currentWeight),
    [gender, height, currentWeight],
  );

  const theme = getTheme(result.weightStatus);

  const heightValue = normalizeNumberInput(height);
  const currentWeightValue = normalizeNumberInput(currentWeight);

  const heightHasError =
    hasInteracted &&
    height.trim().length > 0 &&
    (!Number.isFinite(heightValue) ||
      heightValue < MINIMUM_HEIGHT ||
      heightValue > MAXIMUM_HEIGHT);

  const currentWeightHasError =
    hasInteracted &&
    currentWeight.trim().length > 0 &&
    (!Number.isFinite(currentWeightValue) ||
      currentWeightValue < MINIMUM_WEIGHT ||
      currentWeightValue > MAXIMUM_WEIGHT);

  const handleGenderChange = (selectedGender: Gender) => {
    setGender(selectedGender);
    setHasInteracted(true);
  };

  const handleHeightChange = (event: ChangeEvent<HTMLInputElement>) => {
    setHeight(event.target.value);
    setHasInteracted(true);
  };

  const handleCurrentWeightChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setCurrentWeight(event.target.value);
    setHasInteracted(true);
  };

  const handleExample = (example: (typeof quickExamples)[number]) => {
    setGender(example.gender);
    setHeight(example.height);
    setCurrentWeight(example.currentWeight);
    setHasInteracted(true);
  };

  const handleReset = () => {
    setGender("male");
    setHeight("");
    setCurrentWeight("");
    setHasInteracted(false);
  };

  const handleDefaultValues = () => {
    setGender("male");
    setHeight("175");
    setCurrentWeight("70");
    setHasInteracted(true);
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)]">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <section
          aria-labelledby="ideal-weight-input-heading"
          className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Kişisel bilgiler
              </div>

              <h3
                id="ideal-weight-input-heading"
                className="mt-4 text-2xl font-black tracking-tight text-slate-950"
              >
                Hesaplama bilgilerinizi girin
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                Boy ve cinsiyet bilginize göre dört farklı yöntemle tahmini
                ideal kilo hesaplanır. Mevcut kilo alanı karşılaştırma yapmak
                için isteğe bağlıdır.
              </p>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex h-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
            >
              Temizle
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-900">Cinsiyet</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Klasik formüllerde farklı başlangıç değerleri kullanılır.
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                Zorunlu alan
              </span>
            </div>

            <div
              role="group"
              aria-label="Cinsiyet seçimi"
              className="mt-3 grid grid-cols-2 gap-3"
            >
              <button
                type="button"
                aria-pressed={gender === "male"}
                onClick={() => handleGenderChange("male")}
                className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                  gender === "male"
                    ? "border-emerald-500 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-black ${
                      gender === "male"
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    E
                  </span>

                  <span
                    className={`h-5 w-5 rounded-full border-4 ${
                      gender === "male"
                        ? "border-emerald-600 bg-white"
                        : "border-slate-300 bg-white"
                    }`}
                  />
                </div>

                <p className="mt-4 font-black text-slate-950">Erkek</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Erkek formül katsayıları kullanılır.
                </p>
              </button>

              <button
                type="button"
                aria-pressed={gender === "female"}
                onClick={() => handleGenderChange("female")}
                className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                  gender === "female"
                    ? "border-emerald-500 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/50"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-black ${
                      gender === "female"
                        ? "bg-emerald-600 text-white"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    K
                  </span>

                  <span
                    className={`h-5 w-5 rounded-full border-4 ${
                      gender === "female"
                        ? "border-emerald-600 bg-white"
                        : "border-slate-300 bg-white"
                    }`}
                  />
                </div>

                <p className="mt-4 font-black text-slate-950">Kadın</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Kadın formül katsayıları kullanılır.
                </p>
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-end justify-between gap-4">
              <div>
                <label
                  htmlFor="ideal-weight-height"
                  className="block text-sm font-black text-slate-900"
                >
                  Boyunuz
                </label>

                <p
                  id="ideal-weight-height-description"
                  className="mt-1 text-xs leading-5 text-slate-500"
                >
                  Santimetre cinsinden boy uzunluğunuz
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                120–230 cm
              </span>
            </div>

            <div className="relative mt-3">
              <input
                id="ideal-weight-height"
                type="number"
                inputMode="decimal"
                min={MINIMUM_HEIGHT}
                max={MAXIMUM_HEIGHT}
                step="0.1"
                value={height}
                onChange={handleHeightChange}
                onBlur={() => setHasInteracted(true)}
                placeholder="Örn. 175"
                aria-describedby="ideal-weight-height-description ideal-weight-height-error"
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
                  id="ideal-weight-height-error"
                  className="text-xs font-semibold text-rose-600"
                >
                  Lütfen 120 ile 230 cm arasında bir değer girin.
                </p>
              ) : (
                <p
                  id="ideal-weight-height-error"
                  className="text-xs text-slate-400"
                >
                  Ondalıklı değer kullanabilirsiniz. Örneğin: 174,5
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <label
                  htmlFor="ideal-weight-current-weight"
                  className="block text-sm font-black text-slate-900"
                >
                  Mevcut kilonuz
                </label>

                <p
                  id="ideal-weight-current-weight-description"
                  className="mt-1 text-xs leading-5 text-slate-500"
                >
                  Sonucunuzu kilo aralığıyla karşılaştırmak için isteğe bağlı
                </p>
              </div>

              <span className="text-xs font-semibold text-slate-400">
                İsteğe bağlı
              </span>
            </div>

            <div className="relative mt-3">
              <input
                id="ideal-weight-current-weight"
                type="number"
                inputMode="decimal"
                min={MINIMUM_WEIGHT}
                max={MAXIMUM_WEIGHT}
                step="0.1"
                value={currentWeight}
                onChange={handleCurrentWeightChange}
                onBlur={() => setHasInteracted(true)}
                placeholder="Örn. 70"
                aria-describedby="ideal-weight-current-weight-description ideal-weight-current-weight-error"
                aria-invalid={currentWeightHasError}
                className={`h-16 w-full rounded-2xl border bg-white px-5 pr-20 text-xl font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
                  currentWeightHasError
                    ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
                    : "border-slate-300 focus:border-emerald-500 focus:ring-emerald-100"
                }`}
              />

              <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
                kg
              </span>
            </div>

            <div className="mt-2 min-h-5">
              {currentWeightHasError ? (
                <p
                  id="ideal-weight-current-weight-error"
                  className="text-xs font-semibold text-rose-600"
                >
                  Lütfen 20 ile 350 kg arasında bir değer girin.
                </p>
              ) : (
                <p
                  id="ideal-weight-current-weight-error"
                  className="text-xs text-slate-400"
                >
                  Bu alanı boş bırakırsanız yalnızca ideal kilo tahmini yapılır.
                </p>
              )}
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
                className="text-xs font-black text-emerald-700 transition hover:text-emerald-900"
              >
                Varsayılan değerleri getir
              </button>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {quickExamples.map((example) => {
                const isActive =
                  gender === example.gender &&
                  height === example.height &&
                  currentWeight === example.currentWeight;

                return (
                  <button
                    key={example.label}
                    type="button"
                    onClick={() => handleExample(example)}
                    className={`rounded-2xl border px-3 py-3 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-100 ${
                      isActive
                        ? "border-emerald-500 bg-emerald-50 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-emerald-200 hover:bg-emerald-50/60"
                    }`}
                  >
                    <span
                      className={`block text-xs font-black ${
                        isActive ? "text-emerald-700" : "text-slate-700"
                      }`}
                    >
                      {example.label}
                    </span>

                    <span className="mt-1 block text-[11px] font-semibold leading-5 text-slate-500">
                      {example.height} cm · {example.currentWeight} kg
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
                  Dört formül birlikte değerlendirilir
                </p>

                <p className="mt-2 text-sm leading-7 text-emerald-800">
                  Devine, Robinson, Miller ve Hamwi sonuçlarının ortalaması
                  ana tahmin olarak gösterilir. Sağlıklı kilo aralığı ayrıca
                  VKİ 18,5–24,9 değerlerine göre hesaplanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="ideal-weight-result-heading"
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
                  id="ideal-weight-result-heading"
                  className="mt-2 text-2xl font-black tracking-tight"
                >
                  Tahmini ideal kilo analizi
                </h3>
              </div>

              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-white" />
                4 formül sonucu
              </span>
            </div>

            {result.valid ? (
              <>
                <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-white/70">
                      Formül ortalaması
                    </p>

                    <div className="mt-2 flex items-end gap-3">
                      <p className="text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                        {formatNumber(result.averageIdealWeight)}
                      </p>

                      <span className="mb-2 rounded-xl border border-white/20 bg-white/10 px-2.5 py-1 text-xs font-black text-white/80">
                        kg
                      </span>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-sm">
                        Tahmini ideal kilo
                      </span>

                      <span className="text-sm font-semibold text-white/75">
                        {gender === "male" ? "Erkek" : "Kadın"} ·{" "}
                        {formatNumber(result.heightValue)} cm
                      </span>
                    </div>
                  </div>

                  <div className="max-w-xs rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Boy dönüşümü
                    </p>

                    <p className="mt-2 text-lg font-black text-white">
                      {result.feet} fit {result.remainingInches} inç
                    </p>

                    <p className="mt-1 text-xs leading-5 text-white/65">
                      Beş fit üzeri fark:{" "}
                      {formatNumber(result.inchesOverFiveFeet)} inç
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {result.formulas.map((formula) => (
                    <article
                      key={formula.key}
                      className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                            {formula.name} formülü
                          </p>

                          <p className="mt-3 text-3xl font-black">
                            {formatNumber(formula.value)} kg
                          </p>
                        </div>

                        <span className="rounded-xl border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-black text-white/70">
                          Tahmin
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-6 text-white/70">
                        {formula.description}
                      </p>

                      <div className="mt-4 rounded-2xl border border-white/10 bg-slate-950/10 px-4 py-3">
                        <p className="break-words font-mono text-xs font-bold text-white/80">
                          {formula.formula}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      En düşük formül
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {formatNumber(result.minimumFormulaResult)} kg
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/65">
                      Dört yöntem arasındaki en düşük tahmin.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      En yüksek formül
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {formatNumber(result.maximumFormulaResult)} kg
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/65">
                      Dört yöntem arasındaki en yüksek tahmin.
                    </p>
                  </article>

                  <article className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                      Sağlıklı aralık ortası
                    </p>

                    <p className="mt-3 text-2xl font-black">
                      {formatNumber(result.healthyRangeMidpoint)} kg
                    </p>

                    <p className="mt-2 text-xs leading-5 text-white/65">
                      Kesin ideal kilo hedefi değildir.
                    </p>
                  </article>
                </div>

                <article className="mt-5 rounded-3xl border border-white/15 bg-slate-950/15 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                        VKİ temelli yaklaşık normal kilo aralığı
                      </p>

                      <p className="mt-3 text-3xl font-black">
                        {formatNumber(result.minHealthyWeight)} –{" "}
                        {formatNumber(result.maxHealthyWeight)} kg
                      </p>
                    </div>

                    <span className="inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black text-white">
                      VKİ 18,5–24,9
                    </span>
                  </div>

                  {result.currentWeightValid ? (
                    <div className="mt-8">
                      <div className="flex items-center justify-between gap-4 text-xs font-black text-white/70">
                        <span>
                          {formatNumber(result.minHealthyWeight)} kg
                        </span>
                        <span>Mevcut: {formatNumber(result.currentWeightValue)} kg</span>
                        <span>
                          {formatNumber(result.maxHealthyWeight)} kg
                        </span>
                      </div>

                      <div className="relative mt-7">
                        <div
                          className="absolute -top-6 z-10 -translate-x-1/2"
                          style={{
                            left: `${result.progressPosition}%`,
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
                          <div className="w-[25%] bg-sky-400" />
                          <div className="w-1/2 bg-emerald-400" />
                          <div className="flex-1 bg-amber-400" />
                        </div>

                        <div className="mt-3 grid grid-cols-3 text-center text-[10px] font-black text-white/65">
                          <span>Altında</span>
                          <span>Normal aralık</span>
                          <span>Üzerinde</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm leading-6 text-white/70">
                        Mevcut kilonuzu girerek bu aralık üzerindeki konumunuzu
                        görüntüleyebilirsiniz.
                      </p>
                    </div>
                  )}
                </article>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white p-5 text-slate-950 shadow-xl sm:p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-black text-white ${theme.solidBackground}`}
                    >
                      {theme.iconText}
                    </div>

                    <div className="min-w-0">
                      <p className={`font-black ${theme.accentText}`}>
                        {result.weightStatusTitle}
                      </p>

                      <p className="mt-2 text-sm font-semibold leading-7 text-slate-700">
                        {result.weightStatusDescription}
                      </p>

                      {result.currentWeightValid && (
                        <div
                          className={`mt-4 grid gap-3 rounded-2xl border p-4 sm:grid-cols-2 ${theme.accentBorder} ${theme.accentBackground}`}
                        >
                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                              Mevcut kilo
                            </p>

                            <p className={`mt-1 text-lg font-black ${theme.accentText}`}>
                              {formatNumber(result.currentWeightValue)} kg
                            </p>
                          </div>

                          <div>
                            <p className="text-xs font-black uppercase tracking-[0.12em] text-slate-500">
                              Mevcut VKİ
                            </p>

                            <p className={`mt-1 text-lg font-black ${theme.accentText}`}>
                              {formatNumber(result.currentBmi)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </>
            ) : (
              <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-2xl font-black">
                  ?
                </div>

                <p className="mt-5 text-3xl font-black">
                  Sonuç bekleniyor
                </p>

                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/75">
                  Geçerli bir boy değeri girdiğinizde dört farklı formüle göre
                  hesaplanan ideal kilo sonuçları burada görüntülenecek.
                </p>

                <button
                  type="button"
                  onClick={handleDefaultValues}
                  className="mt-6 inline-flex h-12 items-center justify-center rounded-2xl bg-white px-5 text-sm font-black text-emerald-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  Örnek değerlerle göster
                </button>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/15 bg-slate-950/15 p-4 text-white/80 backdrop-blur-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xs font-black">
                !
              </span>

              <p className="text-xs leading-6">
                İdeal kilo sonuçları matematiksel tahmindir. Kas kütlesi,
                kemik yapısı, yaş, vücut yağ oranı ve kişisel sağlık durumu
                hesaplanan değeri etkileyebilir. Kişisel kilo hedefi için
                doktor veya diyetisyen değerlendirmesi alınmalıdır.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}