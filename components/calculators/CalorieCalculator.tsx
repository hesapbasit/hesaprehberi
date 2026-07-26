"use client";

import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Beef,
  Calculator,
  Check,
  ChevronRight,
  CircleGauge,
  Clock3,
  Dumbbell,
  Flame,
  Footprints,
  Gauge,
  HeartPulse,
  Info,
  Leaf,
  Minus,
  RefreshCcw,
  RotateCcw,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UserRound,
  UsersRound,
  Utensils,
  Wheat,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type Gender = "male" | "female";

type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";

type Goal =
  | "aggressiveLoss"
  | "moderateLoss"
  | "mildLoss"
  | "maintain"
  | "mildGain"
  | "moderateGain";

type Formula = "mifflin" | "harris" | "average";

type MacroProfile =
  | "balanced"
  | "highProtein"
  | "lowerCarb"
  | "performance";

type ProfilePreset = {
  id: string;
  title: string;
  description: string;
  gender: Gender;
  age: string;
  weight: string;
  height: string;
  activityLevel: ActivityLevel;
};

type ActivityOption = {
  value: ActivityLevel;
  title: string;
  description: string;
  multiplier: number;
  weeklyExercise: string;
  icon: typeof Activity;
};

type GoalOption = {
  value: Goal;
  title: string;
  description: string;
  adjustment: number;
  badge: string;
  icon: typeof Target;
};

type MacroProfileOption = {
  value: MacroProfile;
  title: string;
  description: string;
  proteinRatio: number;
  carbRatio: number;
  fatRatio: number;
};

const DEFAULT_VALUES = {
  gender: "male" as Gender,
  age: "30",
  weight: "70",
  height: "175",
  activityLevel: "moderate" as ActivityLevel,
  formula: "mifflin" as Formula,
  goal: "maintain" as Goal,
  macroProfile: "balanced" as MacroProfile,
};

const activityOptions: ActivityOption[] = [
  {
    value: "sedentary",
    title: "Hareketsiz",
    description:
      "Masa başı yaşam, düzenli egzersiz yok veya günlük hareket çok düşük.",
    multiplier: 1.2,
    weeklyExercise: "0 gün",
    icon: Clock3,
  },
  {
    value: "light",
    title: "Az aktif",
    description:
      "Haftada 1–3 gün hafif egzersiz veya düzenli kısa yürüyüşler.",
    multiplier: 1.375,
    weeklyExercise: "1–3 gün",
    icon: Footprints,
  },
  {
    value: "moderate",
    title: "Orta aktif",
    description:
      "Haftada 3–5 gün orta yoğunlukta egzersiz veya hareketli günlük yaşam.",
    multiplier: 1.55,
    weeklyExercise: "3–5 gün",
    icon: Activity,
  },
  {
    value: "active",
    title: "Çok aktif",
    description:
      "Haftada 6–7 gün yoğun egzersiz veya fiziksel olarak hareketli iş.",
    multiplier: 1.725,
    weeklyExercise: "6–7 gün",
    icon: Dumbbell,
  },
  {
    value: "veryActive",
    title: "Ekstra aktif",
    description:
      "Günde birden fazla antrenman, ağır fiziksel iş veya profesyonel spor.",
    multiplier: 1.9,
    weeklyExercise: "Çok yoğun",
    icon: Zap,
  },
];

const goalOptions: GoalOption[] = [
  {
    value: "aggressiveLoss",
    title: "Hızlı kilo verme",
    description:
      "Yüksek kalori açığı. Uzun süre uygulanması önerilmez.",
    adjustment: -750,
    badge: "-750 kcal",
    icon: TrendingDown,
  },
  {
    value: "moderateLoss",
    title: "Standart kilo verme",
    description:
      "Birçok yetişkin için kontrollü başlangıç açığı.",
    adjustment: -500,
    badge: "-500 kcal",
    icon: ArrowDownRight,
  },
  {
    value: "mildLoss",
    title: "Yavaş kilo verme",
    description:
      "Performans ve sürdürülebilirlik odaklı küçük açık.",
    adjustment: -300,
    badge: "-300 kcal",
    icon: Minus,
  },
  {
    value: "maintain",
    title: "Kiloyu koruma",
    description:
      "Mevcut vücut ağırlığını korumaya yönelik hedef.",
    adjustment: 0,
    badge: "TDEE",
    icon: Target,
  },
  {
    value: "mildGain",
    title: "Kontrollü kilo alma",
    description:
      "Kas kazanımını destekleyen küçük kalori fazlası.",
    adjustment: 300,
    badge: "+300 kcal",
    icon: ArrowUpRight,
  },
  {
    value: "moderateGain",
    title: "Daha hızlı kilo alma",
    description:
      "Daha yüksek enerji fazlası; yağlanma riski artabilir.",
    adjustment: 500,
    badge: "+500 kcal",
    icon: TrendingUp,
  },
];

const macroProfiles: MacroProfileOption[] = [
  {
    value: "balanced",
    title: "Dengeli",
    description:
      "Günlük yaşam ve genel sağlık için dengeli makro dağılımı.",
    proteinRatio: 0.3,
    carbRatio: 0.4,
    fatRatio: 0.3,
  },
  {
    value: "highProtein",
    title: "Yüksek protein",
    description:
      "Tokluk ve kas korunmasına daha fazla ağırlık verir.",
    proteinRatio: 0.35,
    carbRatio: 0.35,
    fatRatio: 0.3,
  },
  {
    value: "lowerCarb",
    title: "Düşük karbonhidrat",
    description:
      "Karbonhidrat oranını azaltıp yağ oranını yükseltir.",
    proteinRatio: 0.35,
    carbRatio: 0.25,
    fatRatio: 0.4,
  },
  {
    value: "performance",
    title: "Performans",
    description:
      "Yoğun egzersiz ve dayanıklılık odaklı daha yüksek karbonhidrat.",
    proteinRatio: 0.25,
    carbRatio: 0.5,
    fatRatio: 0.25,
  },
];

const presets: ProfilePreset[] = [
  {
    id: "office",
    title: "Masa başı çalışan",
    description: "30 yaş, 70 kg, 175 cm",
    gender: "male",
    age: "30",
    weight: "70",
    height: "175",
    activityLevel: "sedentary",
  },
  {
    id: "activeWoman",
    title: "Aktif kadın",
    description: "28 yaş, 60 kg, 165 cm",
    gender: "female",
    age: "28",
    weight: "60",
    height: "165",
    activityLevel: "moderate",
  },
  {
    id: "sports",
    title: "Düzenli spor yapan",
    description: "25 yaş, 80 kg, 182 cm",
    gender: "male",
    age: "25",
    weight: "80",
    height: "182",
    activityLevel: "active",
  },
];

const inputClassName =
  "h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-16 text-base font-bold text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:ring-4 focus:ring-orange-100";

const formatNumber = (value: number) =>
  value.toLocaleString("tr-TR", {
    maximumFractionDigits: 0,
  });

const formatDecimal = (value: number, digits = 1) =>
  value.toLocaleString("tr-TR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });

const clampCalories = (value: number) =>
  Math.max(Math.round(value), 0);

function getInputError(
  value: number,
  min: number,
  max: number,
  fieldLabel: string,
) {
  if (!Number.isFinite(value)) {
    return `${fieldLabel} alanına geçerli bir sayı girin.`;
  }

  if (value < min || value > max) {
    return `${fieldLabel} ${min} ile ${max} arasında olmalıdır.`;
  }

  return "";
}

export default function CalorieCalculator() {
  const [gender, setGender] =
    useState<Gender>(DEFAULT_VALUES.gender);
  const [age, setAge] =
    useState(DEFAULT_VALUES.age);
  const [weight, setWeight] =
    useState(DEFAULT_VALUES.weight);
  const [height, setHeight] =
    useState(DEFAULT_VALUES.height);
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>(
      DEFAULT_VALUES.activityLevel,
    );
  const [formula, setFormula] =
    useState<Formula>(DEFAULT_VALUES.formula);
  const [goal, setGoal] =
    useState<Goal>(DEFAULT_VALUES.goal);
  const [macroProfile, setMacroProfile] =
    useState<MacroProfile>(
      DEFAULT_VALUES.macroProfile,
    );

  const result = useMemo(() => {
    const ageValue = Number(age);
    const weightValue = Number(weight);
    const heightValue = Number(height);

    const errors = {
      age: getInputError(
        ageValue,
        18,
        100,
        "Yaş",
      ),
      weight: getInputError(
        weightValue,
        35,
        300,
        "Kilo",
      ),
      height: getInputError(
        heightValue,
        120,
        230,
        "Boy",
      ),
    };

    const valid =
      !errors.age &&
      !errors.weight &&
      !errors.height;

    if (!valid) {
      return {
        valid: false,
        errors,
        ageValue: 0,
        weightValue: 0,
        heightValue: 0,
        bmi: 0,
        mifflinBmr: 0,
        harrisBmr: 0,
        selectedBmr: 0,
        maintenanceCalories: 0,
        goalCalories: 0,
        weeklyCalories: 0,
        mildLossCalories: 0,
        moderateLossCalories: 0,
        aggressiveLossCalories: 0,
        mildGainCalories: 0,
        moderateGainCalories: 0,
        proteinGrams: 0,
        carbGrams: 0,
        fatGrams: 0,
        proteinCalories: 0,
        carbCalories: 0,
        fatCalories: 0,
        proteinPerKg: 0,
        calorieDifference: 0,
        formulaDifference: 0,
        activityMultiplier: 0,
      };
    }

    const mifflinBmr =
      gender === "male"
        ? 10 * weightValue +
          6.25 * heightValue -
          5 * ageValue +
          5
        : 10 * weightValue +
          6.25 * heightValue -
          5 * ageValue -
          161;

    const harrisBmr =
      gender === "male"
        ? 88.362 +
          13.397 * weightValue +
          4.799 * heightValue -
          5.677 * ageValue
        : 447.593 +
          9.247 * weightValue +
          3.098 * heightValue -
          4.33 * ageValue;

    const selectedBmr =
      formula === "mifflin"
        ? mifflinBmr
        : formula === "harris"
          ? harrisBmr
          : (mifflinBmr + harrisBmr) / 2;

    const selectedActivity =
      activityOptions.find(
        (item) =>
          item.value === activityLevel,
      ) ?? activityOptions[2];

    const maintenanceCalories =
      selectedBmr *
      selectedActivity.multiplier;

    const selectedGoal =
      goalOptions.find(
        (item) => item.value === goal,
      ) ?? goalOptions[3];

    const goalCalories = clampCalories(
      maintenanceCalories +
        selectedGoal.adjustment,
    );

    const selectedMacro =
      macroProfiles.find(
        (item) =>
          item.value === macroProfile,
      ) ?? macroProfiles[0];

    const proteinCalories =
      goalCalories *
      selectedMacro.proteinRatio;
    const carbCalories =
      goalCalories * selectedMacro.carbRatio;
    const fatCalories =
      goalCalories * selectedMacro.fatRatio;

    const proteinGrams =
      proteinCalories / 4;
    const carbGrams = carbCalories / 4;
    const fatGrams = fatCalories / 9;

    return {
      valid: true,
      errors,
      ageValue,
      weightValue,
      heightValue,
      bmi:
        weightValue /
        Math.pow(heightValue / 100, 2),
      mifflinBmr,
      harrisBmr,
      selectedBmr,
      maintenanceCalories,
      goalCalories,
      weeklyCalories:
        goalCalories * 7,
      mildLossCalories:
        clampCalories(
          maintenanceCalories - 300,
        ),
      moderateLossCalories:
        clampCalories(
          maintenanceCalories - 500,
        ),
      aggressiveLossCalories:
        clampCalories(
          maintenanceCalories - 750,
        ),
      mildGainCalories:
        clampCalories(
          maintenanceCalories + 300,
        ),
      moderateGainCalories:
        clampCalories(
          maintenanceCalories + 500,
        ),
      proteinGrams,
      carbGrams,
      fatGrams,
      proteinCalories,
      carbCalories,
      fatCalories,
      proteinPerKg:
        proteinGrams / weightValue,
      calorieDifference:
        goalCalories -
        maintenanceCalories,
      formulaDifference:
        Math.abs(
          mifflinBmr - harrisBmr,
        ),
      activityMultiplier:
        selectedActivity.multiplier,
    };
  }, [
    age,
    weight,
    height,
    gender,
    activityLevel,
    formula,
    goal,
    macroProfile,
  ]);

  const selectedActivity =
    activityOptions.find(
      (item) =>
        item.value === activityLevel,
    ) ?? activityOptions[2];

  const selectedGoal =
    goalOptions.find(
      (item) => item.value === goal,
    ) ?? goalOptions[3];

  const selectedMacro =
    macroProfiles.find(
      (item) =>
        item.value === macroProfile,
    ) ?? macroProfiles[0];

  const resetCalculator = () => {
    setGender(DEFAULT_VALUES.gender);
    setAge(DEFAULT_VALUES.age);
    setWeight(DEFAULT_VALUES.weight);
    setHeight(DEFAULT_VALUES.height);
    setActivityLevel(
      DEFAULT_VALUES.activityLevel,
    );
    setFormula(DEFAULT_VALUES.formula);
    setGoal(DEFAULT_VALUES.goal);
    setMacroProfile(
      DEFAULT_VALUES.macroProfile,
    );
  };

  const clearCalculator = () => {
    setAge("");
    setWeight("");
    setHeight("");
  };

  const applyPreset = (
    preset: ProfilePreset,
  ) => {
    setGender(preset.gender);
    setAge(preset.age);
    setWeight(preset.weight);
    setHeight(preset.height);
    setActivityLevel(
      preset.activityLevel,
    );
  };
  return (
    <section
      aria-labelledby="calorie-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-orange-950 px-5 py-6 text-white sm:px-7 lg:px-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-orange-200">
              <Sparkles size={14} />
              Premium kalori analizi
            </div>

            <h2
              id="calorie-calculator-title"
              className="mt-4 text-2xl font-black tracking-tight sm:text-3xl"
            >
              Günlük Kalori İhtiyacı
              Hesaplama
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              BMR, TDEE, hedef kaloriler,
              iki farklı formül karşılaştırması
              ve makro besin dağılımını tek
              ekranda inceleyin.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={clearCalculator}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 text-sm font-black text-white transition hover:bg-white/15 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/20"
            >
              <RotateCcw size={16} />
              Temizle
            </button>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-slate-950 transition hover:bg-orange-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-300/40"
            >
              <RefreshCcw size={16} />
              Varsayılan
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.94fr_1.06fr]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
          <div className="space-y-8">
            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                    Kişisel bilgiler
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Temel değerlerinizi girin
                  </h3>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                  <UserRound size={20} />
                </span>
              </div>

              <div className="mt-5">
                <p className="text-sm font-black text-slate-800">
                  Cinsiyet
                </p>

                <div className="mt-3 grid grid-cols-2 gap-3">
                  {[
                    {
                      value: "male" as Gender,
                      title: "Erkek",
                      icon: UserRound,
                    },
                    {
                      value: "female" as Gender,
                      title: "Kadın",
                      icon: UsersRound,
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    const active =
                      gender === item.value;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          setGender(item.value)
                        }
                        aria-pressed={active}
                        className={`flex min-h-16 items-center justify-between rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                          active
                            ? "border-orange-500 bg-orange-50 text-orange-950 shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              active
                                ? "bg-orange-600 text-white"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <Icon size={19} />
                          </span>

                          <span className="font-black">
                            {item.title}
                          </span>
                        </span>

                        {active ? (
                          <Check size={18} />
                        ) : null}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="calorie-age"
                    className="text-sm font-black text-slate-800"
                  >
                    Yaş
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="calorie-age"
                      type="number"
                      inputMode="numeric"
                      min={18}
                      max={100}
                      value={age}
                      onChange={(event) =>
                        setAge(
                          event.target.value,
                        )
                      }
                      className={inputClassName}
                      aria-invalid={Boolean(
                        result.errors.age,
                      )}
                      aria-describedby="calorie-age-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      yıl
                    </span>
                  </div>

                  <p
                    id="calorie-age-help"
                    className={`mt-2 text-xs leading-5 ${
                      result.errors.age
                        ? "font-semibold text-rose-600"
                        : "text-slate-500"
                    }`}
                  >
                    {result.errors.age ||
                      "18–100 yaş"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="calorie-weight"
                    className="text-sm font-black text-slate-800"
                  >
                    Kilo
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="calorie-weight"
                      type="number"
                      inputMode="decimal"
                      min={35}
                      max={300}
                      step="0.1"
                      value={weight}
                      onChange={(event) =>
                        setWeight(
                          event.target.value,
                        )
                      }
                      className={inputClassName}
                      aria-invalid={Boolean(
                        result.errors.weight,
                      )}
                      aria-describedby="calorie-weight-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      kg
                    </span>
                  </div>

                  <p
                    id="calorie-weight-help"
                    className={`mt-2 text-xs leading-5 ${
                      result.errors.weight
                        ? "font-semibold text-rose-600"
                        : "text-slate-500"
                    }`}
                  >
                    {result.errors.weight ||
                      "35–300 kg"}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="calorie-height"
                    className="text-sm font-black text-slate-800"
                  >
                    Boy
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="calorie-height"
                      type="number"
                      inputMode="decimal"
                      min={120}
                      max={230}
                      step="0.1"
                      value={height}
                      onChange={(event) =>
                        setHeight(
                          event.target.value,
                        )
                      }
                      className={inputClassName}
                      aria-invalid={Boolean(
                        result.errors.height,
                      )}
                      aria-describedby="calorie-height-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      cm
                    </span>
                  </div>

                  <p
                    id="calorie-height-help"
                    className={`mt-2 text-xs leading-5 ${
                      result.errors.height
                        ? "font-semibold text-rose-600"
                        : "text-slate-500"
                    }`}
                  >
                    {result.errors.height ||
                      "120–230 cm"}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                    Hızlı profiller
                  </p>

                  <h3 className="mt-1 text-lg font-black text-slate-950">
                    Örnek değerleri uygula
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm">
                  <Calculator size={18} />
                </span>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() =>
                      applyPreset(preset)
                    }
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100"
                  >
                    <p className="font-black text-slate-950">
                      {preset.title}
                    </p>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {preset.description}
                    </p>
                  </button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                    Aktivite seviyesi
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Günlük hareket düzeyiniz
                  </h3>
                </div>

                <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-black text-orange-700">
                  × {formatDecimal(
                    selectedActivity.multiplier,
                    3,
                  )}
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {activityOptions.map((item) => {
                  const Icon = item.icon;
                  const active =
                    activityLevel === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setActivityLevel(
                          item.value,
                        )
                      }
                      aria-pressed={active}
                      className={`w-full rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                        active
                          ? "border-orange-500 bg-orange-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                            active
                              ? "bg-orange-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon size={20} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p className="font-black text-slate-950">
                              {item.title}
                            </p>

                            <span
                              className={`rounded-full px-2.5 py-1 text-xs font-black ${
                                active
                                  ? "bg-white text-orange-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {item.weeklyExercise}
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>

                        {active ? (
                          <Check
                            size={18}
                            className="shrink-0 text-orange-600"
                          />
                        ) : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                  Hesaplama yöntemi
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  BMR formülünü seçin
                </h3>
              </div>

              <div className="mt-4 grid gap-3">
                {[
                  {
                    value: "mifflin" as Formula,
                    title:
                      "Mifflin-St Jeor",
                    description:
                      "Modern yetişkinler için yaygın kullanılan temel formül.",
                  },
                  {
                    value: "harris" as Formula,
                    title:
                      "Harris-Benedict",
                    description:
                      "Revize edilmiş klasik bazal metabolizma tahmini.",
                  },
                  {
                    value: "average" as Formula,
                    title:
                      "İki formülün ortalaması",
                    description:
                      "Mifflin ve Harris sonuçlarının aritmetik ortalaması.",
                  },
                ].map((item) => {
                  const active =
                    formula === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setFormula(item.value)
                      }
                      className={`flex items-start gap-3 rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                        active
                          ? "border-orange-500 bg-orange-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          active
                            ? "border-orange-600 bg-orange-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                      >
                        <Check size={14} />
                      </span>

                      <span>
                        <span className="block font-black text-slate-950">
                          {item.title}
                        </span>

                        <span className="mt-1 block text-xs leading-5 text-slate-500">
                          {item.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                  Hedef seçimi
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Günlük hedefinizi belirleyin
                </h3>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {goalOptions.map((item) => {
                  const Icon = item.icon;
                  const active =
                    goal === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setGoal(item.value)
                      }
                      aria-pressed={active}
                      className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                        active
                          ? "border-orange-500 bg-orange-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            active
                              ? "bg-orange-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-black ${
                            active
                              ? "bg-white text-orange-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>

                      <p className="mt-4 font-black text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </section>

            <section>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                  Makro dağılımı
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Beslenme yaklaşımını seçin
                </h3>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {macroProfiles.map((item) => {
                  const active =
                    macroProfile ===
                    item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setMacroProfile(
                          item.value,
                        )
                      }
                      aria-pressed={active}
                      className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-100 ${
                        active
                          ? "border-orange-500 bg-orange-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <p className="font-black text-slate-950">
                          {item.title}
                        </p>

                        {active ? (
                          <BadgeCheck
                            size={18}
                            className="text-orange-600"
                          />
                        ) : null}
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-black">
                        <span className="rounded-full bg-rose-100 px-2 py-1 text-rose-700">
                          P %{Math.round(
                            item.proteinRatio *
                              100,
                          )}
                        </span>

                        <span className="rounded-full bg-sky-100 px-2 py-1 text-sky-700">
                          K %{Math.round(
                            item.carbRatio * 100,
                          )}
                        </span>

                        <span className="rounded-full bg-amber-100 px-2 py-1 text-amber-700">
                          Y %{Math.round(
                            item.fatRatio * 100,
                          )}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          </div>
        </div>

        <div className="p-5 sm:p-7 lg:p-8">
          {!result.valid ? (
            <div className="flex min-h-[560px] items-center justify-center rounded-[1.75rem] border border-rose-200 bg-rose-50 p-6 text-center">
              <div className="max-w-md">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-rose-600 text-white shadow-lg shadow-rose-200">
                  <AlertTriangle size={28} />
                </span>

                <h3 className="mt-5 text-2xl font-black text-rose-950">
                  Bilgileri kontrol edin
                </h3>

                <p className="mt-3 text-sm leading-7 text-rose-800">
                  Sonuçları görebilmek için yaş,
                  kilo ve boy alanlarına geçerli
                  değerler girin.
                </p>

                <div className="mt-5 space-y-2 text-left">
                  {Object.values(
                    result.errors,
                  )
                    .filter(Boolean)
                    .map((error) => (
                      <div
                        key={error}
                        className="flex gap-3 rounded-2xl border border-rose-200 bg-white/70 p-3 text-sm font-semibold text-rose-800"
                      >
                        <ChevronRight
                          size={17}
                          className="mt-0.5 shrink-0"
                        />

                        <span>{error}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 p-6 text-white shadow-xl shadow-orange-200 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-amber-300/20 blur-3xl"
                />

                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-orange-100">
                        Seçili günlük hedef
                      </p>

                      <h3 className="mt-2 text-lg font-black">
                        {selectedGoal.title}
                      </h3>
                    </div>

                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black backdrop-blur">
                      <Gauge size={14} />
                      × {formatDecimal(
                        result.activityMultiplier,
                        3,
                      )}
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-orange-100">
                      Günlük önerilen enerji
                    </p>

                    <p className="mt-2 text-5xl font-black tracking-tight sm:text-6xl">
                      {formatNumber(
                        result.goalCalories,
                      )}
                      <span className="ml-2 text-xl font-black text-orange-100 sm:text-2xl">
                        kcal
                      </span>
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-orange-50">
                      Bu değer seçtiğiniz aktivite,
                      formül ve hedefe göre
                      hesaplanmıştır. Gerçek ihtiyacınızı
                      birkaç haftalık takip ile
                      doğrulayın.
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-orange-100">
                        Bakım kalorisi
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {formatNumber(
                          result.maintenanceCalories,
                        )}{" "}
                        kcal
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-orange-100">
                        Günlük fark
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {result.calorieDifference >
                        0
                          ? "+"
                          : ""}
                        {formatNumber(
                          result.calorieDifference,
                        )}{" "}
                        kcal
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-orange-100">
                        Haftalık hedef
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {formatNumber(
                          result.weeklyCalories,
                        )}{" "}
                        kcal
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label:
                      "Bazal metabolizma",
                    value: `${formatNumber(
                      result.selectedBmr,
                    )} kcal`,
                    description:
                      "Dinlenme hâlindeki tahmini ihtiyaç",
                    icon: Flame,
                    className:
                      "border-orange-200 bg-orange-50 text-orange-950",
                    iconClassName:
                      "bg-orange-600 text-white",
                  },
                  {
                    label:
                      "Bakım kalorisi",
                    value: `${formatNumber(
                      result.maintenanceCalories,
                    )} kcal`,
                    description:
                      "Mevcut kiloyu koruma tahmini",
                    icon: Target,
                    className:
                      "border-sky-200 bg-sky-50 text-sky-950",
                    iconClassName:
                      "bg-sky-600 text-white",
                  },
                  {
                    label: "Vücut kitle indeksi",
                    value: formatDecimal(
                      result.bmi,
                      1,
                    ),
                    description:
                      "Boy ve kilo oranına dayalı gösterge",
                    icon: Scale,
                    className:
                      "border-violet-200 bg-violet-50 text-violet-950",
                    iconClassName:
                      "bg-violet-600 text-white",
                  },
                  {
                    label:
                      "Protein yoğunluğu",
                    value: `${formatDecimal(
                      result.proteinPerKg,
                      1,
                    )} g/kg`,
                    description:
                      "Seçilen makro profiline göre",
                    icon: Dumbbell,
                    className:
                      "border-rose-200 bg-rose-50 text-rose-950",
                    iconClassName:
                      "bg-rose-600 text-white",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.label}
                      className={`rounded-3xl border p-5 ${item.className}`}
                    >
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconClassName}`}
                      >
                        <Icon size={20} />
                      </span>

                      <p className="mt-5 text-xs font-black uppercase tracking-[0.1em] opacity-70">
                        {item.label}
                      </p>

                      <p className="mt-2 text-2xl font-black">
                        {item.value}
                      </p>

                      <p className="mt-2 text-xs leading-5 opacity-75">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </section>

              <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                      Hedef karşılaştırması
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      Farklı amaçlar için kalori
                      seviyeleri
                    </h3>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600">
                    Bakım:{" "}
                    {formatNumber(
                      result.maintenanceCalories,
                    )}{" "}
                    kcal
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      label:
                        "Yavaş kilo verme",
                      value:
                        result.mildLossCalories,
                      difference: "-300 kcal",
                      icon: TrendingDown,
                      className:
                        "border-emerald-200 bg-emerald-50 text-emerald-950",
                    },
                    {
                      label:
                        "Standart kilo verme",
                      value:
                        result.moderateLossCalories,
                      difference: "-500 kcal",
                      icon: ArrowDownRight,
                      className:
                        "border-orange-200 bg-orange-50 text-orange-950",
                    },
                    {
                      label:
                        "Kontrollü kilo alma",
                      value:
                        result.mildGainCalories,
                      difference: "+300 kcal",
                      icon: ArrowUpRight,
                      className:
                        "border-violet-200 bg-violet-50 text-violet-950",
                    },
                    {
                      label:
                        "Daha hızlı kilo alma",
                      value:
                        result.moderateGainCalories,
                      difference: "+500 kcal",
                      icon: TrendingUp,
                      className:
                        "border-sky-200 bg-sky-50 text-sky-950",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.label}
                        className={`rounded-2xl border p-4 ${item.className}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/70">
                            <Icon size={18} />
                          </span>

                          <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-black">
                            {item.difference}
                          </span>
                        </div>

                        <p className="mt-4 text-sm font-black">
                          {item.label}
                        </p>

                        <p className="mt-2 text-2xl font-black">
                          {formatNumber(
                            item.value,
                          )}{" "}
                          kcal
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <AlertTriangle
                    size={19}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />

                  <p className="text-sm leading-6 text-amber-900">
                    Hızlı kilo verme hedefi
                    yaklaşık{" "}
                    <strong>
                      {formatNumber(
                        result.aggressiveLossCalories,
                      )}{" "}
                      kcal
                    </strong>{" "}
                    seviyesindedir. Büyük kalori
                    açıklarını uzun süre uygulamayın
                    ve sağlık uzmanı desteği alın.
                  </p>
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-600">
                      Makro analizi
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      {selectedMacro.title} dağılım
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                      Makrolar seçilen hedef
                      kalorinin yüzdesel dağılımına
                      göre hesaplanır.
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Utensils size={21} />
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Protein",
                      grams:
                        result.proteinGrams,
                      calories:
                        result.proteinCalories,
                      ratio:
                        selectedMacro.proteinRatio,
                      icon: Beef,
                      className:
                        "border-rose-200 bg-rose-50 text-rose-950",
                      barClassName:
                        "bg-rose-500",
                    },
                    {
                      title: "Karbonhidrat",
                      grams:
                        result.carbGrams,
                      calories:
                        result.carbCalories,
                      ratio:
                        selectedMacro.carbRatio,
                      icon: Wheat,
                      className:
                        "border-sky-200 bg-sky-50 text-sky-950",
                      barClassName:
                        "bg-sky-500",
                    },
                    {
                      title: "Yağ",
                      grams:
                        result.fatGrams,
                      calories:
                        result.fatCalories,
                      ratio:
                        selectedMacro.fatRatio,
                      icon: Leaf,
                      className:
                        "border-amber-200 bg-amber-50 text-amber-950",
                      barClassName:
                        "bg-amber-500",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.title}
                        className={`rounded-3xl border p-5 ${item.className}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70">
                            <Icon size={20} />
                          </span>

                          <span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-black">
                            %
                            {Math.round(
                              item.ratio * 100,
                            )}
                          </span>
                        </div>

                        <p className="mt-5 font-black">
                          {item.title}
                        </p>

                        <p className="mt-2 text-3xl font-black">
                          {formatNumber(
                            item.grams,
                          )}{" "}
                          g
                        </p>

                        <p className="mt-1 text-xs font-semibold opacity-70">
                          {formatNumber(
                            item.calories,
                          )}{" "}
                          kcal
                        </p>

                        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/80">
                          <div
                            className={`h-full rounded-full ${item.barClassName}`}
                            style={{
                              width: `${Math.round(
                                item.ratio *
                                  100,
                              )}%`,
                            }}
                          />
                        </div>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-4">
                  <div className="flex items-start gap-3">
                    <Info
                      size={19}
                      className="mt-0.5 shrink-0 text-violet-700"
                    />

                    <p className="text-sm leading-6 text-violet-900">
                      Makro sonuçları tıbbi veya
                      kişiye özel beslenme planı
                      değildir. Böbrek hastalığı,
                      diyabet veya özel beslenme
                      gereksiniminiz varsa uzman
                      değerlendirmesi gerekir.
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-300">
                        Formül karşılaştırması
                      </p>

                      <h3 className="mt-2 text-lg font-black">
                        BMR sonuçları
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <BarChart3 size={20} />
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-300">
                          Mifflin-St Jeor
                        </span>

                        <strong>
                          {formatNumber(
                            result.mifflinBmr,
                          )}{" "}
                          kcal
                        </strong>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-sm text-slate-300">
                          Harris-Benedict
                        </span>

                        <strong>
                          {formatNumber(
                            result.harrisBmr,
                          )}{" "}
                          kcal
                        </strong>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs leading-6 text-slate-400">
                    İki formül arasındaki fark
                    yaklaşık{" "}
                    <strong className="text-white">
                      {formatNumber(
                        result.formulaDifference,
                      )}{" "}
                      kcal
                    </strong>
                    .
                  </p>
                </article>

                <article className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        Sonuç özeti
                      </p>

                      <h3 className="mt-2 text-lg font-black text-emerald-950">
                        Seçimleriniz
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                      <ShieldCheck size={20} />
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 text-sm">
                    {[
                      {
                        label: "Aktivite",
                        value:
                          selectedActivity.title,
                      },
                      {
                        label: "Hedef",
                        value:
                          selectedGoal.title,
                      },
                      {
                        label: "Formül",
                        value:
                          formula ===
                          "mifflin"
                            ? "Mifflin-St Jeor"
                            : formula ===
                                "harris"
                              ? "Harris-Benedict"
                              : "Formül ortalaması",
                      },
                      {
                        label: "Makro",
                        value:
                          selectedMacro.title,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-xl bg-white/70 px-3 py-2.5"
                      >
                        <span className="text-emerald-800">
                          {item.label}
                        </span>

                        <strong className="text-right text-emerald-950">
                          {item.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-600 text-white">
                    <CircleGauge size={21} />
                  </span>

                  <div>
                    <h3 className="font-black text-orange-950">
                      Gerçek bakım kalorinizi
                      doğrulayın
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-orange-800">
                      Bu sonuç formüle dayalı
                      tahmindir. Günlük enerji
                      alımınızı ve sabah tartı
                      ortalamanızı en az iki hafta
                      izleyin. Kilonuz sabit
                      kalıyorsa gerçek bakım
                      kalorinize yakınsınız.
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: HeartPulse,
                    title:
                      "Sağlık durumları",
                    text:
                      "Tiroit, hormonlar ve ilaçlar gerçek ihtiyacı değiştirebilir.",
                  },
                  {
                    icon: Activity,
                    title:
                      "Günlük hareket",
                    text:
                      "Adım sayısı ve iş temposu egzersiz kadar önemlidir.",
                  },
                  {
                    icon: ShieldCheck,
                    title:
                      "Sürdürülebilir hedef",
                    text:
                      "Aşırı kalori açığı yerine uygulanabilir bir plan seçin.",
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-white p-4"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                        <Icon size={18} />
                      </span>

                      <p className="mt-4 font-black text-slate-950">
                        {item.title}
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </section>
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-5 py-5 sm:px-7 lg:px-9">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Info
              size={18}
              className="mt-0.5 shrink-0 text-slate-500"
            />

            <p className="max-w-4xl text-xs leading-6 text-slate-500">
              Hesaplamalar yetişkinler için
              genel tahmin sunar. Gebelik,
              emzirme, 18 yaş altı, kronik
              hastalık veya profesyonel spor
              durumlarında kişisel uzman
              değerlendirmesi gerekir.
            </p>
          </div>

          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600">
            <Calculator size={14} />
            Anlık hesaplama
          </span>
        </div>
      </div>
    </section>
  );
}