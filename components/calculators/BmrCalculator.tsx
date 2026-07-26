"use client";

import {
  AlertCircle,
  BarChart3,
  Calculator,
  Check,
  ChevronDown,
  CircleGauge,
  Dumbbell,
  Flame,
  Gauge,
  Info,
  RotateCcw,
  Scale,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  UserRound,
  Weight,
} from "lucide-react";
import { useMemo, useState, type ChangeEvent } from "react";

type Gender = "male" | "female";
type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "veryActive";

type ValidationErrors = {
  age?: string;
  weight?: string;
  height?: string;
};

type QuickProfile = {
  label: string;
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
  subtitle: string;
  description: string;
  multiplier: number;
};

type CalculationResult = {
  mifflinBmr: number;
  harrisBenedictBmr: number;
  averageBmr: number;
  dailyCalories: number;
  weeklyCalories: number;
  lightLossCalories: number;
  moderateLossCalories: number;
  lightGainCalories: number;
  moderateGainCalories: number;
  proteinMinimum: number;
  proteinMaximum: number;
  fatMinimum: number;
  fatMaximum: number;
  carbohydrateMinimum: number;
  carbohydrateMaximum: number;
  formulaDifference: number;
  formulaDifferencePercentage: number;
  activityMultiplier: number;
};

const MIN_AGE = 18;
const MAX_AGE = 100;
const MIN_WEIGHT = 30;
const MAX_WEIGHT = 300;
const MIN_HEIGHT = 120;
const MAX_HEIGHT = 230;

const activityOptions: ActivityOption[] = [
  {
    value: "sedentary",
    title: "Hareketsiz",
    subtitle: "Çok az egzersiz",
    description:
      "Masa başı yaşam, düzenli egzersiz yok veya günlük hareket çok düşük.",
    multiplier: 1.2,
  },
  {
    value: "light",
    title: "Az hareketli",
    subtitle: "Haftada 1–3 gün",
    description:
      "Hafif egzersiz, kısa yürüyüşler veya düşük düzeyde hareketli yaşam.",
    multiplier: 1.375,
  },
  {
    value: "moderate",
    title: "Orta hareketli",
    subtitle: "Haftada 3–5 gün",
    description:
      "Düzenli orta yoğunlukta egzersiz veya gün içinde belirgin hareket.",
    multiplier: 1.55,
  },
  {
    value: "active",
    title: "Çok hareketli",
    subtitle: "Haftada 6–7 gün",
    description:
      "Yoğun egzersiz, fiziksel iş veya günün büyük bölümünde aktif yaşam.",
    multiplier: 1.725,
  },
  {
    value: "veryActive",
    title: "Ekstra hareketli",
    subtitle: "Çok yoğun tempo",
    description:
      "Ağır fiziksel iş, günde birden fazla antrenman veya profesyonel spor.",
    multiplier: 1.9,
  },
];

const quickProfiles: QuickProfile[] = [
  {
    label: "Erkek örneği",
    description: "30 yaş · 80 kg · 180 cm",
    gender: "male",
    age: "30",
    weight: "80",
    height: "180",
    activityLevel: "moderate",
  },
  {
    label: "Kadın örneği",
    description: "28 yaş · 62 kg · 165 cm",
    gender: "female",
    age: "28",
    weight: "62",
    height: "165",
    activityLevel: "light",
  },
  {
    label: "Aktif yaşam",
    description: "35 yaş · 78 kg · 178 cm",
    gender: "male",
    age: "35",
    weight: "78",
    height: "178",
    activityLevel: "active",
  },
];

const integerFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 0,
});

const decimalFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

function parseNumber(value: string) {
  if (!value.trim()) return Number.NaN;
  return Number(value.replace(",", "."));
}

function formatInteger(value: number) {
  return integerFormatter.format(Math.round(value));
}

function formatDecimal(value: number) {
  return decimalFormatter.format(value);
}

function validateInputs({
  age,
  weight,
  height,
}: {
  age: string;
  weight: string;
  height: string;
}): ValidationErrors {
  const errors: ValidationErrors = {};
  const ageValue = parseNumber(age);
  const weightValue = parseNumber(weight);
  const heightValue = parseNumber(height);

  if (!Number.isFinite(ageValue) || ageValue < MIN_AGE || ageValue > MAX_AGE) {
    errors.age = `Yaş değeri ${MIN_AGE} ile ${MAX_AGE} arasında olmalıdır.`;
  }

  if (
    !Number.isFinite(weightValue) ||
    weightValue < MIN_WEIGHT ||
    weightValue > MAX_WEIGHT
  ) {
    errors.weight = `Kilo değeri ${MIN_WEIGHT} ile ${MAX_WEIGHT} kg arasında olmalıdır.`;
  }

  if (
    !Number.isFinite(heightValue) ||
    heightValue < MIN_HEIGHT ||
    heightValue > MAX_HEIGHT
  ) {
    errors.height = `Boy değeri ${MIN_HEIGHT} ile ${MAX_HEIGHT} cm arasında olmalıdır.`;
  }

  return errors;
}

function calculateResults({
  gender,
  age,
  weight,
  height,
  activityLevel,
}: {
  gender: Gender;
  age: string;
  weight: string;
  height: string;
  activityLevel: ActivityLevel;
}): CalculationResult | null {
  if (Object.keys(validateInputs({ age, weight, height })).length > 0) {
    return null;
  }

  const ageValue = parseNumber(age);
  const weightValue = parseNumber(weight);
  const heightValue = parseNumber(height);
  const activityMultiplier =
    activityOptions.find((item) => item.value === activityLevel)?.multiplier ??
    1.55;

  const mifflinBmr =
    gender === "male"
      ? 10 * weightValue + 6.25 * heightValue - 5 * ageValue + 5
      : 10 * weightValue + 6.25 * heightValue - 5 * ageValue - 161;

  const harrisBenedictBmr =
    gender === "male"
      ? 88.362 +
        13.397 * weightValue +
        4.799 * heightValue -
        5.677 * ageValue
      : 447.593 +
        9.247 * weightValue +
        3.098 * heightValue -
        4.33 * ageValue;

  const averageBmr = (mifflinBmr + harrisBenedictBmr) / 2;
  const dailyCalories = mifflinBmr * activityMultiplier;
  const weeklyCalories = dailyCalories * 7;
  const lightLossCalories = Math.max(dailyCalories - 300, mifflinBmr);
  const moderateLossCalories = Math.max(dailyCalories - 500, mifflinBmr);
  const lightGainCalories = dailyCalories + 250;
  const moderateGainCalories = dailyCalories + 400;
  const proteinMinimum = weightValue * 1.6;
  const proteinMaximum = weightValue * 2.2;
  const fatMinimum = weightValue * 0.8;
  const fatMaximum = weightValue;
  const averageProteinCalories = ((proteinMinimum + proteinMaximum) / 2) * 4;
  const averageFatCalories = ((fatMinimum + fatMaximum) / 2) * 9;
  const carbohydrateCalories = Math.max(
    dailyCalories - averageProteinCalories - averageFatCalories,
    0,
  );
  const carbohydrateAverage = carbohydrateCalories / 4;
  const carbohydrateMinimum = carbohydrateAverage * 0.85;
  const carbohydrateMaximum = carbohydrateAverage * 1.15;
  const formulaDifference = Math.abs(mifflinBmr - harrisBenedictBmr);
  const formulaDifferencePercentage =
    averageBmr > 0 ? (formulaDifference / averageBmr) * 100 : 0;

  return {
    mifflinBmr,
    harrisBenedictBmr,
    averageBmr,
    dailyCalories,
    weeklyCalories,
    lightLossCalories,
    moderateLossCalories,
    lightGainCalories,
    moderateGainCalories,
    proteinMinimum,
    proteinMaximum,
    fatMinimum,
    fatMaximum,
    carbohydrateMinimum,
    carbohydrateMaximum,
    formulaDifference,
    formulaDifferencePercentage,
    activityMultiplier,
  };
}

function InputField({
  id,
  label,
  description,
  value,
  placeholder,
  unit,
  min,
  max,
  icon,
  error,
  onChange,
}: {
  id: string;
  label: string;
  description: string;
  value: string;
  placeholder: string;
  unit: string;
  min: number;
  max: number;
  icon: React.ReactNode;
  error?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <div className="flex items-end justify-between gap-3">
        <div>
          <label htmlFor={id} className="block text-sm font-black text-slate-900">
            {label}
          </label>
          <p className="mt-1 text-xs leading-5 text-slate-500">{description}</p>
        </div>
        <span className="shrink-0 text-xs font-semibold text-slate-400">
          {min}–{max} {unit}
        </span>
      </div>

      <div className="relative mt-3">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>
        <input
          id={id}
          type="text"
          inputMode="decimal"
          autoComplete="off"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          className={`h-16 w-full rounded-2xl border bg-white pl-12 pr-20 text-lg font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-300 focus:ring-4 ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-100"
              : "border-slate-300 focus:border-violet-500 focus:ring-violet-100"
          }`}
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-slate-100 px-2.5 py-1 text-sm font-black text-slate-600">
          {unit}
        </span>
      </div>

      <div className="mt-2 min-h-5">
        {error ? (
          <p className="text-xs font-semibold leading-5 text-rose-600">
            {error}
          </p>
        ) : (
          <p className="text-xs leading-5 text-slate-400">
            Ondalıklı değer için virgül veya nokta kullanabilirsiniz.
          </p>
        )}
      </div>
    </div>
  );
}

function MetricCard({
  title,
  value,
  unit,
  description,
  icon,
  highlighted = false,
}: {
  title: string;
  value: string;
  unit?: string;
  description: string;
  icon: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <article
      className={`rounded-3xl border p-5 backdrop-blur-sm ${
        highlighted
          ? "border-white/25 bg-white text-slate-950 shadow-xl"
          : "border-white/15 bg-white/10 text-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p
            className={`text-xs font-black uppercase tracking-[0.14em] ${
              highlighted ? "text-violet-600" : "text-white/60"
            }`}
          >
            {title}
          </p>
          <p className="mt-3 text-3xl font-black">
            {value}
            {unit ? (
              <span
                className={`ml-1 text-base font-bold ${
                  highlighted ? "text-slate-500" : "text-white/65"
                }`}
              >
                {unit}
              </span>
            ) : null}
          </p>
        </div>
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
            highlighted
              ? "bg-violet-100 text-violet-700"
              : "border border-white/15 bg-white/10 text-white"
          }`}
        >
          {icon}
        </span>
      </div>
      <p
        className={`mt-3 text-sm leading-6 ${
          highlighted ? "text-slate-600" : "text-white/70"
        }`}
      >
        {description}
      </p>
    </article>
  );
}

export default function BmrCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState("30");
  const [weight, setWeight] = useState("80");
  const [height, setHeight] = useState("180");
  const [activityLevel, setActivityLevel] =
    useState<ActivityLevel>("moderate");
  const [hasInteracted, setHasInteracted] = useState(false);

  const validationErrors = useMemo(
    () => validateInputs({ age, weight, height }),
    [age, weight, height],
  );

  const result = useMemo(
    () =>
      calculateResults({
        gender,
        age,
        weight,
        height,
        activityLevel,
      }),
    [gender, age, weight, height, activityLevel],
  );

  const visibleErrors = hasInteracted ? validationErrors : {};
  const activeActivity =
    activityOptions.find((item) => item.value === activityLevel) ??
    activityOptions[2];
  const hasValidResult =
    result !== null && Object.keys(validationErrors).length === 0;

  function updateField(setter: (value: string) => void, value: string) {
    setter(value);
    setHasInteracted(true);
  }

  function applyProfile(profile: QuickProfile) {
    setGender(profile.gender);
    setAge(profile.age);
    setWeight(profile.weight);
    setHeight(profile.height);
    setActivityLevel(profile.activityLevel);
    setHasInteracted(true);
  }

  function restoreDefaults() {
    setGender("male");
    setAge("30");
    setWeight("80");
    setHeight("180");
    setActivityLevel("moderate");
    setHasInteracted(true);
  }

  function resetCalculator() {
    setGender("male");
    setAge("");
    setWeight("");
    setHeight("");
    setActivityLevel("moderate");
    setHasInteracted(false);
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_24px_70px_-42px_rgba(15,23,42,0.45)]">
      <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
        <section className="border-b border-slate-200 bg-white p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                <Sparkles size={14} />
                Kişisel enerji profili
              </div>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950">
                Bilgilerinizi girin
              </h3>
              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">
                Mifflin-St Jeor ve Harris-Benedict formülleri anlık olarak
                karşılaştırılır.
              </p>
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-black text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-slate-100"
            >
              <RotateCcw size={16} />
              Temizle
            </button>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-900">Cinsiyet</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Formüllerde kullanılan sabit değer seçime göre değişir.
                </p>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                Zorunlu alan
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3">
              {(["male", "female"] as Gender[]).map((item) => {
                const selected = gender === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setGender(item);
                      setHasInteracted(true);
                    }}
                    className={`rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${
                      selected
                        ? "border-violet-500 bg-violet-50 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-violet-200 hover:bg-violet-50/50"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                          selected
                            ? "bg-violet-600 text-white"
                            : "bg-white text-slate-500"
                        }`}
                      >
                        <UserRound size={21} />
                      </span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                          selected
                            ? "border-violet-600 bg-violet-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                      >
                        <Check size={14} strokeWidth={3} />
                      </span>
                    </div>
                    <p className="mt-4 font-black text-slate-950">
                      {item === "male" ? "Erkek" : "Kadın"}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item === "male"
                        ? "Erkek sabitiyle hesaplanır."
                        : "Kadın sabitiyle hesaplanır."}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <InputField
              id="bmr-age"
              label="Yaş"
              description="Tamamladığınız yaş"
              value={age}
              placeholder="Örn. 30"
              unit="yıl"
              min={MIN_AGE}
              max={MAX_AGE}
              icon={<Gauge size={20} />}
              error={visibleErrors.age}
              onChange={(event) => updateField(setAge, event.target.value)}
            />

            <InputField
              id="bmr-weight"
              label="Kilo"
              description="Güncel vücut ağırlığınız"
              value={weight}
              placeholder="Örn. 80"
              unit="kg"
              min={MIN_WEIGHT}
              max={MAX_WEIGHT}
              icon={<Weight size={20} />}
              error={visibleErrors.weight}
              onChange={(event) => updateField(setWeight, event.target.value)}
            />

            <div className="sm:col-span-2">
              <InputField
                id="bmr-height"
                label="Boy"
                description="Ayakkabısız boy uzunluğunuz"
                value={height}
                placeholder="Örn. 180"
                unit="cm"
                min={MIN_HEIGHT}
                max={MAX_HEIGHT}
                icon={<Scale size={20} />}
                error={visibleErrors.height}
                onChange={(event) => updateField(setHeight, event.target.value)}
              />
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-900">
                  Aktivite seviyesi
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Günlük toplam kalori ihtiyacı için kullanılır.
                </p>
              </div>
              <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black text-violet-700">
                × {formatDecimal(activeActivity.multiplier)}
              </span>
            </div>

            <div className="mt-3 space-y-3">
              {activityOptions.map((option) => {
                const selected = activityLevel === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setActivityLevel(option.value);
                      setHasInteracted(true);
                    }}
                    className={`w-full rounded-2xl border p-4 text-left transition focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100 ${
                      selected
                        ? "border-violet-500 bg-violet-50 shadow-sm"
                        : "border-slate-200 bg-slate-50 hover:border-violet-200 hover:bg-violet-50/40"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                          selected
                            ? "border-violet-600 bg-violet-600 text-white"
                            : "border-slate-300 bg-white text-transparent"
                        }`}
                      >
                        <Check size={14} strokeWidth={3} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-black text-slate-950">
                            {option.title}
                          </p>
                          <span className="text-xs font-black text-violet-700">
                            {option.subtitle}
                          </span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-black text-slate-900">
                Hızlı profiller
              </p>
              <button
                type="button"
                onClick={restoreDefaults}
                className="text-xs font-black text-violet-700 transition hover:text-violet-900"
              >
                Varsayılan değerler
              </button>
            </div>

            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {quickProfiles.map((profile) => (
                <button
                  key={profile.label}
                  type="button"
                  onClick={() => applyProfile(profile)}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-left transition hover:border-violet-200 hover:bg-violet-50/60 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-100"
                >
                  <span className="block text-xs font-black text-slate-700">
                    {profile.label}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold leading-5 text-slate-500">
                    {profile.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-white shadow-sm">
                <Info size={20} />
              </div>
              <div>
                <p className="font-black text-sky-950">
                  BMR doğrudan kalori hedefiniz değildir
                </p>
                <p className="mt-2 text-sm leading-7 text-sky-800">
                  BMR yalnızca dinlenme enerjisini gösterir. Günlük bakım
                  kalorisi için aktivite düzeyi de hesaba katılır.
                </p>
              </div>
            </div>
          </div>

          {hasInteracted && Object.keys(validationErrors).length > 0 && (
            <div
              role="alert"
              className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4"
            >
              <AlertCircle size={20} className="mt-0.5 shrink-0 text-rose-600" />
              <div>
                <p className="font-black text-rose-800">
                  Bazı bilgileri kontrol edin
                </p>
                <p className="mt-1 text-sm leading-6 text-rose-700">
                  Geçerli sonuç oluşturmak için kırmızıyla işaretlenen alanları
                  düzeltin.
                </p>
              </div>
            </div>
          )}
        </section>

        <section
          aria-live="polite"
          className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-800 to-slate-950 p-5 text-white sm:p-7 lg:p-8"
        >
          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-white/65">
                  Metabolizma sonucu
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">
                  Günlük enerji analiziniz
                </h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black backdrop-blur-sm">
                <CircleGauge size={15} />
                Anlık hesaplama
              </span>
            </div>

            {hasValidResult && result ? (
              <>
                <div className="mt-8">
                  <p className="text-sm font-semibold text-white/70">
                    Mifflin-St Jeor bazal metabolizma hızınız
                  </p>
                  <div className="mt-2 flex items-end gap-3">
                    <p className="text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                      {formatInteger(result.mifflinBmr)}
                    </p>
                    <span className="pb-2 text-lg font-black text-white/65">
                      kcal/gün
                    </span>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-950 shadow-sm">
                      {gender === "male" ? "Erkek" : "Kadın"}
                    </span>
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black">
                      {activeActivity.title}
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <MetricCard
                    title="Günlük bakım kalorisi"
                    value={formatInteger(result.dailyCalories)}
                    unit="kcal"
                    description="Seçilen aktivite düzeyiyle tahmini kilo koruma enerjisi."
                    icon={<Flame size={21} />}
                    highlighted
                  />
                  <MetricCard
                    title="Haftalık enerji"
                    value={formatInteger(result.weeklyCalories)}
                    unit="kcal"
                    description="Yedi günlük toplam tahmini enerji ihtiyacı."
                    icon={<BarChart3 size={21} />}
                  />
                  <MetricCard
                    title="Harris-Benedict"
                    value={formatInteger(result.harrisBenedictBmr)}
                    unit="kcal"
                    description="Revize Harris-Benedict formülüne göre alternatif BMR."
                    icon={<Calculator size={21} />}
                  />
                  <MetricCard
                    title="Formül ortalaması"
                    value={formatInteger(result.averageBmr)}
                    unit="kcal"
                    description="İki temel formül sonucunun basit ortalaması."
                    icon={<Gauge size={21} />}
                  />
                </div>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                        Formül karşılaştırması
                      </p>
                      <p className="mt-2 text-lg font-black text-white">
                        Sonuçlar birbirine ne kadar yakın?
                      </p>
                    </div>
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black">
                      %{formatDecimal(result.formulaDifferencePercentage)} fark
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Formüller arasında yaklaşık{" "}
                    <strong className="text-white">
                      {formatInteger(result.formulaDifference)} kcal
                    </strong>{" "}
                    fark bulunuyor. Bu farklılık normaldir; iki yöntem de tahmini
                    sonuç üretir.
                  </p>
                </article>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white p-5 text-slate-950 shadow-xl sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <Target size={22} />
                    </div>
                    <div>
                      <p className="text-lg font-black text-slate-950">
                        Hedef kalori seçenekleri
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        Günlük bakım kalorinizden türetilen genel tahminlerdir.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      {
                        label: "Hafif kilo verme",
                        value: result.lightLossCalories,
                        note: "Yaklaşık 300 kcal açık",
                        icon: <TrendingDown size={17} />,
                        className: "border-emerald-200 bg-emerald-50 text-emerald-950",
                      },
                      {
                        label: "Orta kilo verme",
                        value: result.moderateLossCalories,
                        note: "Yaklaşık 500 kcal açık",
                        icon: <TrendingDown size={17} />,
                        className: "border-amber-200 bg-amber-50 text-amber-950",
                      },
                      {
                        label: "Hafif kilo alma",
                        value: result.lightGainCalories,
                        note: "Yaklaşık 250 kcal fazla",
                        icon: <TrendingUp size={17} />,
                        className: "border-sky-200 bg-sky-50 text-sky-950",
                      },
                      {
                        label: "Orta kilo alma",
                        value: result.moderateGainCalories,
                        note: "Yaklaşık 400 kcal fazla",
                        icon: <TrendingUp size={17} />,
                        className: "border-violet-200 bg-violet-50 text-violet-950",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-2xl border p-4 ${item.className}`}
                      >
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <p className="text-xs font-black uppercase tracking-[0.12em]">
                            {item.label}
                          </p>
                        </div>
                        <p className="mt-3 text-2xl font-black">
                          {formatInteger(item.value)} kcal
                        </p>
                        <p className="mt-1 text-xs opacity-75">{item.note}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="mt-5 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                      <Dumbbell size={20} />
                    </span>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
                        Genel makro referansı
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/75">
                        Bakım kalorisi ve vücut ağırlığı üzerinden hesaplanan
                        genel aralıklardır.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-black text-white/60">Protein</p>
                      <p className="mt-2 text-xl font-black">
                        {formatInteger(result.proteinMinimum)}–
                        {formatInteger(result.proteinMaximum)} g
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-black text-white/60">Yağ</p>
                      <p className="mt-2 text-xl font-black">
                        {formatInteger(result.fatMinimum)}–
                        {formatInteger(result.fatMaximum)} g
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs font-black text-white/60">
                        Karbonhidrat
                      </p>
                      <p className="mt-2 text-xl font-black">
                        {formatInteger(result.carbohydrateMinimum)}–
                        {formatInteger(result.carbohydrateMaximum)} g
                      </p>
                    </div>
                  </div>
                </article>
              </>
            ) : (
              <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-7 text-center backdrop-blur-sm sm:p-10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10">
                  <Calculator size={34} />
                </div>
                <p className="mt-6 text-3xl font-black">Sonuç bekleniyor</p>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-white/70">
                  Geçerli yaş, kilo ve boy bilgileri girdiğinizde BMR, günlük
                  bakım kalorisi ve hedef enerji değerleri burada görünecek.
                </p>
                <button
                  type="button"
                  onClick={restoreDefaults}
                  className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-white px-5 text-sm font-black text-slate-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-violet-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
                >
                  <Sparkles size={17} />
                  Örnek değerlerle göster
                </button>
              </div>
            )}

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-white/15 bg-slate-950/15 p-4 text-white/80 backdrop-blur-sm">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              <p className="text-xs leading-6">
                Sonuçlar matematiksel tahmindir. Kas kütlesi, hormonlar, sağlık
                durumu, ilaç kullanımı ve günlük hareket düzeyi gerçek enerji
                ihtiyacını değiştirebilir. Tıbbi veya kişisel beslenme
                değerlendirmesi yerine geçmez.
              </p>
            </div>
          </div>
        </section>
      </div>

      <section className="border-t border-slate-200 bg-slate-50 p-5 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-600">
              Seçili aktivite düzeyi
            </p>
            <h4 className="mt-2 text-xl font-black text-slate-950">
              {activeActivity.title}
            </h4>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {activeActivity.description}
            </p>
          </div>

          <div className="relative">
            <select
              value={activityLevel}
              onChange={(event) => {
                setActivityLevel(event.target.value as ActivityLevel);
                setHasInteracted(true);
              }}
              className="h-12 appearance-none rounded-2xl border border-slate-200 bg-white pl-4 pr-12 text-sm font-black text-slate-700 shadow-sm outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
              aria-label="Aktivite seviyesini hızlı değiştir"
            >
              {activityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.title} — × {formatDecimal(option.multiplier)}
                </option>
              ))}
            </select>
            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
          </div>
        </div>
      </section>
    </div>
  );
}