"use client";

import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  Check,
  Clock3,
  Droplets,
  Dumbbell,
  Footprints,
  Gauge,
  GlassWater,
  HeartPulse,
  Info,
  Moon,
  RefreshCcw,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  TimerReset,
  UserRound,
  UsersRound,
  Waves,
  Wind,
  Zap,
} from "lucide-react";
import { useMemo, useState } from "react";

type Gender = "male" | "female";
type ActivityLevel =
  | "low"
  | "light"
  | "medium"
  | "high"
  | "veryHigh";
type ClimateLevel =
  | "cool"
  | "normal"
  | "warm"
  | "hot";
type SweatLevel =
  | "low"
  | "medium"
  | "high";
type SpecialCondition =
  | "none"
  | "pregnancy"
  | "breastfeeding";

type ActivityOption = {
  value: ActivityLevel;
  title: string;
  description: string;
  mlPerKg: number;
  icon: typeof Activity;
};

type ClimateOption = {
  value: ClimateLevel;
  title: string;
  description: string;
  extraMl: number;
  icon: typeof Sun;
};

type SweatOption = {
  value: SweatLevel;
  title: string;
  description: string;
  extraPerExerciseHour: number;
};

type ProfilePreset = {
  id: string;
  title: string;
  description: string;
  gender: Gender;
  age: string;
  weight: string;
  activityLevel: ActivityLevel;
  exerciseMinutes: string;
  climate: ClimateLevel;
  sweatLevel: SweatLevel;
};

const DEFAULT_VALUES = {
  gender: "male" as Gender,
  age: "30",
  weight: "70",
  activityLevel: "medium" as ActivityLevel,
  exerciseMinutes: "30",
  climate: "normal" as ClimateLevel,
  sweatLevel: "medium" as SweatLevel,
  specialCondition: "none" as SpecialCondition,
};

const activityOptions: ActivityOption[] = [
  {
    value: "low",
    title: "Düşük aktivite",
    description:
      "Masa başı yaşam, düzenli egzersiz yok veya günlük hareket çok sınırlı.",
    mlPerKg: 30,
    icon: Clock3,
  },
  {
    value: "light",
    title: "Az aktif",
    description:
      "Kısa yürüyüşler veya haftada 1–2 gün hafif egzersiz.",
    mlPerKg: 32,
    icon: Footprints,
  },
  {
    value: "medium",
    title: "Orta aktif",
    description:
      "Haftada birkaç gün egzersiz veya hareketli günlük yaşam.",
    mlPerKg: 35,
    icon: Activity,
  },
  {
    value: "high",
    title: "Yüksek aktivite",
    description:
      "Yoğun egzersiz, fiziksel iş veya düzenli yüksek terleme.",
    mlPerKg: 40,
    icon: Dumbbell,
  },
  {
    value: "veryHigh",
    title: "Çok yüksek aktivite",
    description:
      "Uzun antrenmanlar, ağır fiziksel iş veya profesyonel spor düzeyi.",
    mlPerKg: 45,
    icon: Zap,
  },
];

const climateOptions: ClimateOption[] = [
  {
    value: "cool",
    title: "Serin",
    description:
      "Serin hava, düşük nem veya kapalı ortam.",
    extraMl: 0,
    icon: Wind,
  },
  {
    value: "normal",
    title: "Normal",
    description:
      "Ilıman hava ve standart günlük koşullar.",
    extraMl: 0,
    icon: Sun,
  },
  {
    value: "warm",
    title: "Sıcak",
    description:
      "Sıcak hava veya uzun süre güneşte kalma.",
    extraMl: 350,
    icon: ThermometerSun,
  },
  {
    value: "hot",
    title: "Çok sıcak",
    description:
      "Yüksek sıcaklık, nem veya yoğun sıcak ortam.",
    extraMl: 650,
    icon: ThermometerSun,
  },
];

const sweatOptions: SweatOption[] = [
  {
    value: "low",
    title: "Az terleme",
    description:
      "Egzersizde kıyafetler hafif nemlenir.",
    extraPerExerciseHour: 250,
  },
  {
    value: "medium",
    title: "Orta terleme",
    description:
      "Egzersiz sonunda belirgin terleme oluşur.",
    extraPerExerciseHour: 450,
  },
  {
    value: "high",
    title: "Yoğun terleme",
    description:
      "Kıyafetler belirgin şekilde ıslanır.",
    extraPerExerciseHour: 700,
  },
];

const presets: ProfilePreset[] = [
  {
    id: "office",
    title: "Masa başı çalışan",
    description: "70 kg · düşük aktivite",
    gender: "male",
    age: "30",
    weight: "70",
    activityLevel: "low",
    exerciseMinutes: "0",
    climate: "normal",
    sweatLevel: "low",
  },
  {
    id: "activeWoman",
    title: "Aktif kadın",
    description: "60 kg · orta aktivite",
    gender: "female",
    age: "28",
    weight: "60",
    activityLevel: "medium",
    exerciseMinutes: "45",
    climate: "normal",
    sweatLevel: "medium",
  },
  {
    id: "athlete",
    title: "Yoğun spor yapan",
    description: "82 kg · yüksek aktivite",
    gender: "male",
    age: "25",
    weight: "82",
    activityLevel: "high",
    exerciseMinutes: "90",
    climate: "warm",
    sweatLevel: "high",
  },
];

const inputClassName =
  "h-14 w-full rounded-2xl border border-slate-200 bg-white px-4 pr-16 text-base font-black text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100";

const formatNumber = (
  value: number,
  maximumFractionDigits = 0,
) =>
  value.toLocaleString("tr-TR", {
    maximumFractionDigits,
  });

const formatLiters = (value: number) =>
  value.toLocaleString("tr-TR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 2,
  });

function getInputError(
  value: number,
  min: number,
  max: number,
  label: string,
) {
  if (!Number.isFinite(value)) {
    return `${label} alanına geçerli bir sayı girin.`;
  }

  if (value < min || value > max) {
    return `${label} ${min} ile ${max} arasında olmalıdır.`;
  }

  return "";
}

export default function WaterIntakeCalculator() {
  const [gender, setGender] =
    useState<Gender>(DEFAULT_VALUES.gender);
  const [age, setAge] =
    useState(DEFAULT_VALUES.age);
  const [weight, setWeight] =
    useState(DEFAULT_VALUES.weight);
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>(
      DEFAULT_VALUES.activityLevel,
    );
  const [exerciseMinutes, setExerciseMinutes] =
    useState(DEFAULT_VALUES.exerciseMinutes);
  const [climate, setClimate] =
    useState<ClimateLevel>(
      DEFAULT_VALUES.climate,
    );
  const [sweatLevel, setSweatLevel] =
    useState<SweatLevel>(
      DEFAULT_VALUES.sweatLevel,
    );
  const [
    specialCondition,
    setSpecialCondition,
  ] = useState<SpecialCondition>(
    DEFAULT_VALUES.specialCondition,
  );

  const result = useMemo(() => {
    const ageValue = Number(age);
    const weightValue = Number(weight);
    const exerciseValue = Number(exerciseMinutes);

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
      exerciseMinutes: getInputError(
        exerciseValue,
        0,
        300,
        "Egzersiz süresi",
      ),
    };

    const valid =
      !errors.age &&
      !errors.weight &&
      !errors.exerciseMinutes;

    if (!valid) {
      return {
        valid: false,
        errors,
        liters: 0,
        milliliters: 0,
        baseMilliliters: 0,
        exerciseExtra: 0,
        climateExtra: 0,
        specialExtra: 0,
        glasses200: 0,
        glasses250: 0,
        bottles500: 0,
        bottles750: 0,
        bottles1000: 0,
        hourlyAmount: 0,
        wakeHourAmount: 0,
        mlPerKg: 0,
        exerciseHours: 0,
        ageValue: 0,
        weightValue: 0,
        exerciseValue: 0,
      };
    }

    const selectedActivity =
      activityOptions.find(
        (item) =>
          item.value === activityLevel,
      ) ?? activityOptions[2];

    const selectedClimate =
      climateOptions.find(
        (item) =>
          item.value === climate,
      ) ?? climateOptions[1];

    const selectedSweat =
      sweatOptions.find(
        (item) =>
          item.value === sweatLevel,
      ) ?? sweatOptions[1];

    const baseMilliliters =
      weightValue * selectedActivity.mlPerKg;

    const exerciseHours =
      exerciseValue / 60;

    const exerciseExtra =
      exerciseHours *
      selectedSweat.extraPerExerciseHour;

    const climateExtra =
      selectedClimate.extraMl;

    let specialExtra = 0;

    if (
      gender === "female" &&
      specialCondition === "pregnancy"
    ) {
      specialExtra = 300;
    }

    if (
      gender === "female" &&
      specialCondition ===
        "breastfeeding"
    ) {
      specialExtra = 700;
    }

    const milliliters =
      baseMilliliters +
      exerciseExtra +
      climateExtra +
      specialExtra;

    const liters = milliliters / 1000;

    return {
      valid: true,
      errors,
      liters,
      milliliters,
      baseMilliliters,
      exerciseExtra,
      climateExtra,
      specialExtra,
      glasses200: Math.ceil(
        milliliters / 200,
      ),
      glasses250: Math.ceil(
        milliliters / 250,
      ),
      bottles500: milliliters / 500,
      bottles750: milliliters / 750,
      bottles1000:
        milliliters / 1000,
      hourlyAmount:
        milliliters / 12,
      wakeHourAmount:
        milliliters / 16,
      mlPerKg:
        selectedActivity.mlPerKg,
      exerciseHours,
      ageValue,
      weightValue,
      exerciseValue,
    };
  }, [
    age,
    weight,
    exerciseMinutes,
    activityLevel,
    climate,
    sweatLevel,
    specialCondition,
    gender,
  ]);

  const selectedActivity =
    activityOptions.find(
      (item) =>
        item.value === activityLevel,
    ) ?? activityOptions[2];

  const selectedClimate =
    climateOptions.find(
      (item) =>
        item.value === climate,
    ) ?? climateOptions[1];

  const selectedSweat =
    sweatOptions.find(
      (item) =>
        item.value === sweatLevel,
    ) ?? sweatOptions[1];

  const resetCalculator = () => {
    setGender(DEFAULT_VALUES.gender);
    setAge(DEFAULT_VALUES.age);
    setWeight(DEFAULT_VALUES.weight);
    setActivityLevel(
      DEFAULT_VALUES.activityLevel,
    );
    setExerciseMinutes(
      DEFAULT_VALUES.exerciseMinutes,
    );
    setClimate(DEFAULT_VALUES.climate);
    setSweatLevel(
      DEFAULT_VALUES.sweatLevel,
    );
    setSpecialCondition(
      DEFAULT_VALUES.specialCondition,
    );
  };

  const clearCalculator = () => {
    setAge("");
    setWeight("");
    setExerciseMinutes("");
  };

  const applyPreset = (
    preset: ProfilePreset,
  ) => {
    setGender(preset.gender);
    setAge(preset.age);
    setWeight(preset.weight);
    setActivityLevel(
      preset.activityLevel,
    );
    setExerciseMinutes(
      preset.exerciseMinutes,
    );
    setClimate(preset.climate);
    setSweatLevel(
      preset.sweatLevel,
    );
    setSpecialCondition("none");
  };

  return (
    <section
      aria-labelledby="water-intake-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950 px-5 py-6 text-white sm:px-7 lg:px-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
              <Sparkles size={14} />
              Premium hidrasyon analizi
            </div>

            <h2
              id="water-intake-calculator-title"
              className="mt-4 text-2xl font-black tracking-tight sm:text-3xl"
            >
              Günlük Su İhtiyacı
              Hesaplama
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Kilo, aktivite, egzersiz süresi,
              terleme, sıcaklık ve özel
              koşullara göre günlük tahmini
              sıvı ihtiyacınızı hesaplayın.
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
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 text-sm font-black text-slate-950 transition hover:bg-cyan-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-300/40"
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
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                    Kişisel bilgiler
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Temel değerlerinizi girin
                  </h3>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
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
                        onClick={() => {
                          setGender(item.value);

                          if (
                            item.value === "male"
                          ) {
                            setSpecialCondition(
                              "none",
                            );
                          }
                        }}
                        aria-pressed={active}
                        className={`flex min-h-16 items-center justify-between rounded-2xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${
                          active
                            ? "border-cyan-500 bg-cyan-50 text-cyan-950 shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                              active
                                ? "bg-cyan-600 text-white"
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
                    htmlFor="water-age"
                    className="text-sm font-black text-slate-800"
                  >
                    Yaş
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="water-age"
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
                      aria-describedby="water-age-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      yıl
                    </span>
                  </div>

                  <p
                    id="water-age-help"
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
                    htmlFor="water-weight"
                    className="text-sm font-black text-slate-800"
                  >
                    Kilo
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="water-weight"
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
                      aria-describedby="water-weight-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      kg
                    </span>
                  </div>

                  <p
                    id="water-weight-help"
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
                    htmlFor="exercise-minutes"
                    className="text-sm font-black text-slate-800"
                  >
                    Egzersiz
                  </label>

                  <div className="relative mt-2">
                    <input
                      id="exercise-minutes"
                      type="number"
                      inputMode="numeric"
                      min={0}
                      max={300}
                      step={5}
                      value={exerciseMinutes}
                      onChange={(event) =>
                        setExerciseMinutes(
                          event.target.value,
                        )
                      }
                      className={inputClassName}
                      aria-invalid={Boolean(
                        result.errors
                          .exerciseMinutes,
                      )}
                      aria-describedby="exercise-minutes-help"
                    />

                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm font-black text-slate-400">
                      dk
                    </span>
                  </div>

                  <p
                    id="exercise-minutes-help"
                    className={`mt-2 text-xs leading-5 ${
                      result.errors
                        .exerciseMinutes
                        ? "font-semibold text-rose-600"
                        : "text-slate-500"
                    }`}
                  >
                    {result.errors
                      .exerciseMinutes ||
                      "0–300 dakika"}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                    Hızlı profiller
                  </p>

                  <h3 className="mt-1 text-lg font-black text-slate-950">
                    Örnek değerleri uygula
                  </h3>
                </div>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm">
                  <Gauge size={18} />
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
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100"
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
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                    Aktivite seviyesi
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Günlük hareket düzeyiniz
                  </h3>
                </div>

                <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-xs font-black text-cyan-700">
                  {selectedActivity.mlPerKg}
                  {" "}
                  ml/kg
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
                      className={`w-full rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${
                        active
                          ? "border-cyan-500 bg-cyan-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                            active
                              ? "bg-cyan-600 text-white"
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
                                  ? "bg-white text-cyan-700"
                                  : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {item.mlPerKg}
                              {" "}
                              ml/kg
                            </span>
                          </div>

                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            {item.description}
                          </p>
                        </div>

                        {active ? (
                          <Check
                            size={18}
                            className="shrink-0 text-cyan-600"
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
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                  Hava koşulları
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Bulunduğunuz ortam
                </h3>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {climateOptions.map((item) => {
                  const Icon = item.icon;
                  const active =
                    climate === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setClimate(item.value)
                      }
                      aria-pressed={active}
                      className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${
                        active
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            active
                              ? "bg-cyan-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          <Icon size={18} />
                        </span>

                        <span
                          className={`rounded-full px-2.5 py-1 text-xs font-black ${
                            active
                              ? "bg-white text-cyan-700"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {item.extraMl > 0
                            ? `+${item.extraMl} ml`
                            : "Ek yok"}
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
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                  Terleme düzeyi
                </p>

                <h3 className="mt-1 text-xl font-black text-slate-950">
                  Egzersiz sırasında terleme
                </h3>
              </div>

              <div className="mt-4 space-y-3">
                {sweatOptions.map((item) => {
                  const active =
                    sweatLevel === item.value;

                  return (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() =>
                        setSweatLevel(item.value)
                      }
                      aria-pressed={active}
                      className={`flex w-full items-start justify-between gap-4 rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${
                        active
                          ? "border-cyan-500 bg-cyan-50"
                          : "border-slate-200 bg-white hover:border-slate-300"
                      }`}
                    >
                      <div>
                        <p className="font-black text-slate-950">
                          {item.title}
                        </p>

                        <p className="mt-2 text-sm leading-6 text-slate-600">
                          {item.description}
                        </p>
                      </div>

                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-black ${
                          active
                            ? "bg-white text-cyan-700"
                            : "bg-slate-100 text-slate-600"
                        }`}
                      >
                        {item.extraPerExerciseHour}
                        {" "}
                        ml/saat
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {gender === "female" ? (
              <section>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                    Özel dönem
                  </p>

                  <h3 className="mt-1 text-xl font-black text-slate-950">
                    Gebelik veya emzirme
                  </h3>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      value:
                        "none" as SpecialCondition,
                      title: "Yok",
                      extra: "Ek yok",
                    },
                    {
                      value:
                        "pregnancy" as SpecialCondition,
                      title: "Gebelik",
                      extra: "+300 ml",
                    },
                    {
                      value:
                        "breastfeeding" as SpecialCondition,
                      title: "Emzirme",
                      extra: "+700 ml",
                    },
                  ].map((item) => {
                    const active =
                      specialCondition ===
                      item.value;

                    return (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          setSpecialCondition(
                            item.value,
                          )
                        }
                        aria-pressed={active}
                        className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-100 ${
                          active
                            ? "border-cyan-500 bg-cyan-50"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <p className="font-black text-slate-950">
                          {item.title}
                        </p>

                        <p className="mt-2 text-xs font-black text-cyan-700">
                          {item.extra}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <AlertTriangle
                    size={18}
                    className="mt-0.5 shrink-0 text-amber-700"
                  />

                  <p className="text-sm leading-6 text-amber-900">
                    Gebelik ve emzirme döneminde
                    kişisel ihtiyaç için doktor veya
                    diyetisyen değerlendirmesi
                    önceliklidir.
                  </p>
                </div>
              </section>
            ) : null}
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
                  Sonuçları görebilmek için
                  alanlara geçerli değerler girin.
                </p>

                <div className="mt-5 space-y-2 text-left">
                  {Object.values(
                    result.errors,
                  )
                    .filter(Boolean)
                    .map((error) => (
                      <div
                        key={error}
                        className="rounded-2xl border border-rose-200 bg-white/70 p-3 text-sm font-semibold text-rose-800"
                      >
                        {error}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <section className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 p-6 text-white shadow-xl shadow-cyan-200 sm:p-7">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-300/20 blur-3xl"
                />

                <div className="relative">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.15em] text-cyan-100">
                        Günlük tahmini ihtiyaç
                      </p>

                      <h3 className="mt-2 text-lg font-black">
                        Kişiselleştirilmiş
                        hidrasyon hedefi
                      </h3>
                    </div>

                    <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black backdrop-blur">
                      <Droplets size={14} />
                      {result.mlPerKg}
                      {" "}
                      ml/kg
                    </span>
                  </div>

                  <div className="mt-8">
                    <p className="text-sm font-semibold text-cyan-100">
                      Günlük su miktarı
                    </p>

                    <p className="mt-2 text-5xl font-black tracking-tight sm:text-6xl">
                      {formatLiters(
                        result.liters,
                      )}
                      <span className="ml-2 text-xl font-black text-cyan-100 sm:text-2xl">
                        litre
                      </span>
                    </p>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-cyan-50">
                      Bu sonuç temel kilo hesabı,
                      egzersiz, terleme, hava
                      sıcaklığı ve seçili özel
                      koşullara göre hesaplanmıştır.
                    </p>
                  </div>

                  <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-cyan-100">
                        Mililitre
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {formatNumber(
                          result.milliliters,
                        )}
                        {" "}
                        ml
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-cyan-100">
                        250 ml bardak
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {result.glasses250}
                        {" "}
                        bardak
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                      <p className="text-xs font-semibold text-cyan-100">
                        500 ml şişe
                      </p>

                      <p className="mt-2 text-xl font-black">
                        {formatNumber(
                          result.bottles500,
                          1,
                        )}
                        {" "}
                        şişe
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  {
                    label:
                      "Temel ihtiyaç",
                    value: `${formatNumber(
                      result.baseMilliliters,
                    )} ml`,
                    description:
                      `${result.mlPerKg} ml/kg katsayısına göre`,
                    icon: Droplets,
                    className:
                      "border-cyan-200 bg-cyan-50 text-cyan-950",
                    iconClassName:
                      "bg-cyan-600 text-white",
                  },
                  {
                    label:
                      "Egzersiz eklemesi",
                    value: `${formatNumber(
                      result.exerciseExtra,
                    )} ml`,
                    description:
                      `${formatNumber(
                        result.exerciseValue,
                      )} dakika · ${selectedSweat.title}`,
                    icon: Activity,
                    className:
                      "border-orange-200 bg-orange-50 text-orange-950",
                    iconClassName:
                      "bg-orange-600 text-white",
                  },
                  {
                    label:
                      "Hava eklemesi",
                    value: `${formatNumber(
                      result.climateExtra,
                    )} ml`,
                    description:
                      selectedClimate.title,
                    icon: ThermometerSun,
                    className:
                      "border-amber-200 bg-amber-50 text-amber-950",
                    iconClassName:
                      "bg-amber-500 text-white",
                  },
                  {
                    label:
                      "Özel durum",
                    value: `${formatNumber(
                      result.specialExtra,
                    )} ml`,
                    description:
                      specialCondition ===
                      "pregnancy"
                        ? "Gebelik"
                        : specialCondition ===
                            "breastfeeding"
                          ? "Emzirme"
                          : "Ek yok",
                    icon: HeartPulse,
                    className:
                      "border-violet-200 bg-violet-50 text-violet-950",
                    iconClassName:
                      "bg-violet-600 text-white",
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
                      Bardak ve şişe karşılığı
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      Günlük hedefi pratik şekilde
                      takip edin
                    </h3>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600">
                    {formatLiters(
                      result.liters,
                    )}
                    {" "}
                    L
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                  {[
                    {
                      label:
                        "200 ml bardak",
                      value:
                        `${result.glasses200}`,
                      unit: "bardak",
                      icon: GlassWater,
                    },
                    {
                      label:
                        "250 ml bardak",
                      value:
                        `${result.glasses250}`,
                      unit: "bardak",
                      icon: GlassWater,
                    },
                    {
                      label:
                        "500 ml şişe",
                      value: formatNumber(
                        result.bottles500,
                        1,
                      ),
                      unit: "şişe",
                      icon: Droplets,
                    },
                    {
                      label:
                        "750 ml şişe",
                      value: formatNumber(
                        result.bottles750,
                        1,
                      ),
                      unit: "şişe",
                      icon: Droplets,
                    },
                    {
                      label:
                        "1 L şişe",
                      value: formatNumber(
                        result.bottles1000,
                        1,
                      ),
                      unit: "şişe",
                      icon: Waves,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <article
                        key={item.label}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                          <Icon size={18} />
                        </span>

                        <p className="mt-4 text-xs font-black uppercase tracking-[0.1em] text-slate-500">
                          {item.label}
                        </p>

                        <p className="mt-2 text-2xl font-black text-slate-950">
                          {item.value}
                        </p>

                        <p className="mt-1 text-xs font-semibold text-slate-500">
                          {item.unit}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-blue-600">
                      Günlük tüketim planı
                    </p>

                    <h3 className="mt-2 text-xl font-black text-slate-950">
                      Hedefi gün içine yayın
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                      Tek seferde yüksek miktar
                      yerine küçük ve düzenli
                      aralıklar tercih edin.
                    </p>
                  </div>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                    <TimerReset size={21} />
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      time: "Sabah",
                      icon: Sun,
                      ratio: 0.25,
                      description:
                        "Uyanış ve kahvaltı çevresi",
                    },
                    {
                      time: "Öğle",
                      icon: GlassWater,
                      ratio: 0.3,
                      description:
                        "Öğünler ve çalışma araları",
                    },
                    {
                      time: "Akşamüstü",
                      icon: Activity,
                      ratio: 0.3,
                      description:
                        "Aktivite ve egzersiz çevresi",
                    },
                    {
                      time: "Akşam",
                      icon: Moon,
                      ratio: 0.15,
                      description:
                        "Uyku öncesine yığmadan",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    const amount =
                      result.milliliters *
                      item.ratio;

                    return (
                      <article
                        key={item.time}
                        className="rounded-3xl border border-blue-200 bg-blue-50 p-5"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                            <Icon size={18} />
                          </span>

                          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-black text-blue-700">
                            %
                            {Math.round(
                              item.ratio * 100,
                            )}
                          </span>
                        </div>

                        <p className="mt-4 font-black text-blue-950">
                          {item.time}
                        </p>

                        <p className="mt-2 text-2xl font-black text-blue-950">
                          {formatNumber(
                            amount,
                          )}
                          {" "}
                          ml
                        </p>

                        <p className="mt-2 text-xs leading-5 text-blue-800">
                          {item.description}
                        </p>
                      </article>
                    );
                  })}
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-700">
                      12 saatlik plan
                    </p>

                    <p className="mt-2 text-xl font-black text-cyan-950">
                      Saatte yaklaşık{" "}
                      {formatNumber(
                        result.hourlyAmount,
                      )}
                      {" "}
                      ml
                    </p>
                  </div>

                  <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4">
                    <p className="text-xs font-black uppercase tracking-[0.12em] text-violet-700">
                      16 saat uyanıklık
                    </p>

                    <p className="mt-2 text-xl font-black text-violet-950">
                      Saatte yaklaşık{" "}
                      {formatNumber(
                        result.wakeHourAmount,
                      )}
                      {" "}
                      ml
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.75rem] border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                        Hesaplama özeti
                      </p>

                      <h3 className="mt-2 text-lg font-black">
                        Seçimleriniz
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                      <Gauge size={20} />
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
                        label: "Hava",
                        value:
                          selectedClimate.title,
                      },
                      {
                        label: "Terleme",
                        value:
                          selectedSweat.title,
                      },
                      {
                        label:
                          "Egzersiz süresi",
                        value:
                          `${formatNumber(
                            result.exerciseValue,
                          )} dakika`,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5"
                      >
                        <span className="text-slate-300">
                          {item.label}
                        </span>

                        <strong className="text-right text-white">
                          {item.value}
                        </strong>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-700">
                        Takip önerisi
                      </p>

                      <h3 className="mt-2 text-lg font-black text-emerald-950">
                        Günlük kontrol
                      </h3>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                      <BadgeCheck size={20} />
                    </span>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Suyu gün içine yayın.",
                      "Egzersiz günlerinde ek miktarı takip edin.",
                      "İdrar rengini tek başına tanı aracı olarak kullanmayın.",
                      "Susuzluk ve baş ağrısı belirtilerini önemseyin.",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3 rounded-xl bg-white/70 p-3"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-emerald-700"
                        />

                        <p className="text-sm leading-6 text-emerald-900">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="rounded-[1.75rem] border border-amber-200 bg-amber-50 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white">
                    <AlertTriangle size={21} />
                  </span>

                  <div>
                    <h3 className="font-black text-amber-950">
                      Aşırı su tüketiminden
                      kaçının
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-amber-800">
                      Çok kısa sürede yüksek miktarda
                      su içmek elektrolit dengesini
                      bozabilir. Günlük hedefi gün
                      boyunca dengeli şekilde
                      tüketin.
                    </p>
                  </div>
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    icon: ShieldCheck,
                    title:
                      "Sağlık durumu",
                    text:
                      "Kalp, böbrek veya karaciğer hastalıklarında doktor önerisi önceliklidir.",
                  },
                  {
                    icon: Activity,
                    title:
                      "Aktivite farkı",
                    text:
                      "Aynı kilodaki iki kişinin terleme ve hareket düzeyi farklı olabilir.",
                  },
                  {
                    icon: Droplets,
                    title:
                      "Besinlerden gelen su",
                    text:
                      "Çorba, meyve ve sebzeler toplam sıvı alımına katkı sağlar.",
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
              Bu hesaplama yetişkinler için
              genel tahmin sunar. Sıvı
              kısıtlaması, gebelik, emzirme,
              kronik hastalık veya yoğun
              dayanıklılık sporu durumunda
              kişisel uzman değerlendirmesi
              gerekir.
            </p>
          </div>

          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600">
            <Waves size={14} />
            Anlık hesaplama
          </span>
        </div>
      </div>
    </section>
  );
}