"use client";

import {
  ArrowDownRight,
  ArrowRightLeft,
  ArrowUpRight,
  BadgePercent,
  Calculator,
  Check,
  CircleEqual,
  Copy,
  Equal,
  Gauge,
  Minus,
  Percent,
  Plus,
  RefreshCw,
  Scale,
  Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";

type CalculationMode =
  | "percentage"
  | "increase"
  | "decrease"
  | "change"
  | "ratio"
  | "difference";

type ResultTone = "blue" | "emerald" | "rose" | "violet" | "amber";

type ModeDefinition = {
  value: CalculationMode;
  label: string;
  shortLabel: string;
  description: string;
  icon: typeof Calculator;
  tone: ResultTone;
};

type CalculationResult = {
  value: number;
  label: string;
  detail: string;
  formula: string;
  isValid: boolean;
  error: string | null;
  tone: ResultTone;
  direction?: "increase" | "decrease" | "neutral";
  comparisonValue?: number;
};

const modes: ModeDefinition[] = [
  {
    value: "percentage",
    label: "Bir Sayının Yüzdesi",
    shortLabel: "Yüzde Hesapla",
    description:
      "Bir sayının belirlediğiniz yüzde oranına karşılık gelen değerini bulur.",
    icon: Percent,
    tone: "blue",
  },
  {
    value: "increase",
    label: "Yüzde Artırma",
    shortLabel: "Yüzde Ekle",
    description:
      "Ana değere belirlediğiniz yüzde oranını ekleyerek yeni sonucu hesaplar.",
    icon: ArrowUpRight,
    tone: "emerald",
  },
  {
    value: "decrease",
    label: "Yüzde Azaltma",
    shortLabel: "Yüzde Çıkar",
    description:
      "Ana değerden belirlediğiniz yüzde oranını çıkararak kalan değeri bulur.",
    icon: ArrowDownRight,
    tone: "rose",
  },
  {
    value: "change",
    label: "Yüzde Değişimi",
    shortLabel: "Değişim",
    description:
      "Başlangıç değeri ile yeni değer arasındaki yüzdelik artış veya azalışı hesaplar.",
    icon: ArrowRightLeft,
    tone: "violet",
  },
  {
    value: "ratio",
    label: "Yüzde Oranı",
    shortLabel: "Oran",
    description:
      "Bir değerin toplam değerin yüzde kaçına karşılık geldiğini hesaplar.",
    icon: Scale,
    tone: "amber",
  },
  {
    value: "difference",
    label: "Yüzde Farkı",
    shortLabel: "Fark",
    description:
      "İki değer arasındaki mutlak yüzde farkını, değerlerin ortalamasına göre hesaplar.",
    icon: CircleEqual,
    tone: "blue",
  },
];

const QUICK_RATES = [5, 10, 15, 20, 25, 50];

function parseNumericInput(value: string): number {
  const normalized = value
    .trim()
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function formatNumber(value: number, maximumFractionDigits = 2): string {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  });
}

function formatInputNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "";
  }

  return value.toLocaleString("tr-TR", {
    maximumFractionDigits: 2,
  });
}

function getInputLabels(mode: CalculationMode) {
  if (mode === "change") {
    return {
      first: "Başlangıç değeri",
      second: "Yeni değer",
      firstPlaceholder: "Örneğin 100",
      secondPlaceholder: "Örneğin 125",
      secondSuffix: "",
    };
  }

  if (mode === "ratio") {
    return {
      first: "Parça değeri",
      second: "Toplam değer",
      firstPlaceholder: "Örneğin 30",
      secondPlaceholder: "Örneğin 150",
      secondSuffix: "",
    };
  }

  if (mode === "difference") {
    return {
      first: "Birinci değer",
      second: "İkinci değer",
      firstPlaceholder: "Örneğin 80",
      secondPlaceholder: "Örneğin 120",
      secondSuffix: "",
    };
  }

  return {
    first: "Ana değer",
    second: "Yüzde oranı",
    firstPlaceholder: "Örneğin 1.000",
    secondPlaceholder: "Örneğin 20",
    secondSuffix: "%",
  };
}

function calculateResult(
  mode: CalculationMode,
  firstValue: string,
  secondValue: string,
): CalculationResult {
  const first = parseNumericInput(firstValue);
  const second = parseNumericInput(secondValue);
  const modeDefinition =
    modes.find((item) => item.value === mode) ?? modes[0];

  if (!Number.isFinite(first) || !Number.isFinite(second)) {
    return {
      value: 0,
      label: "Geçerli değerler girin",
      detail: "Hesaplama yapabilmek için iki alanı da doldurun.",
      formula: "—",
      isValid: false,
      error: "Lütfen sayısal ve geçerli değerler girin.",
      tone: modeDefinition.tone,
    };
  }

  if (mode === "percentage") {
    const value = (first * second) / 100;

    return {
      value,
      label: `${formatNumber(first)} sayısının %${formatNumber(
        second,
      )} değeri`,
      detail: `${formatNumber(first)} sayısının yüzde ${formatNumber(
        second,
      )} oranındaki kısmı ${formatNumber(value)} olur.`,
      formula: `${formatNumber(first)} × ${formatNumber(second)} ÷ 100`,
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      comparisonValue: first,
    };
  }

  if (mode === "increase") {
    const increaseAmount = (first * second) / 100;
    const value = first + increaseAmount;

    return {
      value,
      label: `%${formatNumber(second)} artırılmış sonuç`,
      detail: `${formatNumber(first)} değerine ${formatNumber(
        increaseAmount,
      )} eklendi.`,
      formula: `${formatNumber(first)} × (1 + ${formatNumber(
        second,
      )} ÷ 100)`,
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      direction: "increase",
      comparisonValue: increaseAmount,
    };
  }

  if (mode === "decrease") {
    const decreaseAmount = (first * second) / 100;
    const value = first - decreaseAmount;

    return {
      value,
      label: `%${formatNumber(second)} azaltılmış sonuç`,
      detail: `${formatNumber(first)} değerinden ${formatNumber(
        decreaseAmount,
      )} çıkarıldı.`,
      formula: `${formatNumber(first)} × (1 - ${formatNumber(
        second,
      )} ÷ 100)`,
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      direction: "decrease",
      comparisonValue: decreaseAmount,
    };
  }

  if (mode === "change") {
    if (first === 0) {
      return {
        value: 0,
        label: "Yüzde değişimi hesaplanamadı",
        detail: "Başlangıç değeri sıfır olduğunda standart yüzde değişimi tanımsızdır.",
        formula: "Başlangıç değeri ≠ 0 olmalıdır",
        isValid: false,
        error: "Başlangıç değeri sıfır olamaz.",
        tone: modeDefinition.tone,
      };
    }

    const signedValue = ((second - first) / Math.abs(first)) * 100;
    const absoluteValue = Math.abs(signedValue);
    const direction =
      signedValue > 0
        ? "increase"
        : signedValue < 0
          ? "decrease"
          : "neutral";

    return {
      value: absoluteValue,
      label:
        direction === "neutral"
          ? "Değişim yok"
          : `%${formatNumber(absoluteValue)} ${
              direction === "increase" ? "artış" : "azalış"
            }`,
      detail: `${formatNumber(first)} değerinden ${formatNumber(
        second,
      )} değerine geçiş.`,
      formula: `(${formatNumber(second)} - ${formatNumber(
        first,
      )}) ÷ ${formatNumber(Math.abs(first))} × 100`,
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      direction,
      comparisonValue: second - first,
    };
  }

  if (mode === "ratio") {
    if (second === 0) {
      return {
        value: 0,
        label: "Yüzde oranı hesaplanamadı",
        detail: "Toplam değer sıfır olduğunda oran hesaplanamaz.",
        formula: "Toplam değer ≠ 0 olmalıdır",
        isValid: false,
        error: "Toplam değer sıfır olamaz.",
        tone: modeDefinition.tone,
      };
    }

    const value = (first / second) * 100;

    return {
      value,
      label: `${formatNumber(first)}, ${formatNumber(
        second,
      )} sayısının yüzde kaçı?`,
      detail: `${formatNumber(first)} değeri toplamın %${formatNumber(
        value,
      )} oranına karşılık gelir.`,
      formula: `${formatNumber(first)} ÷ ${formatNumber(second)} × 100`,
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      comparisonValue: second,
    };
  }

  const average = (Math.abs(first) + Math.abs(second)) / 2;

  if (average === 0) {
    return {
      value: 0,
      label: "İki değer arasında fark yok",
      detail: "Her iki değer de sıfır olduğu için yüzde farkı %0'dır.",
      formula: "0",
      isValid: true,
      error: null,
      tone: modeDefinition.tone,
      direction: "neutral",
      comparisonValue: 0,
    };
  }

  const difference = Math.abs(first - second);
  const value = (difference / average) * 100;

  return {
    value,
    label: `%${formatNumber(value)} yüzde farkı`,
    detail: `${formatNumber(first)} ile ${formatNumber(
      second,
    )} arasındaki mutlak fark ${formatNumber(difference)}.`,
    formula: `|${formatNumber(first)} - ${formatNumber(
      second,
    )}| ÷ ${formatNumber(average)} × 100`,
    isValid: true,
    error: null,
    tone: modeDefinition.tone,
    comparisonValue: difference,
  };
}

function getToneClasses(tone: ResultTone) {
  const classes = {
    blue: {
      tab: "border-blue-600 bg-blue-600 text-white shadow-blue-600/20",
      icon: "bg-blue-100 text-blue-700",
      soft: "border-blue-200 bg-blue-50 text-blue-950",
      accent: "text-blue-700",
      gradient: "from-blue-700 via-blue-800 to-slate-950",
      bar: "bg-blue-500",
    },
    emerald: {
      tab: "border-emerald-600 bg-emerald-600 text-white shadow-emerald-600/20",
      icon: "bg-emerald-100 text-emerald-700",
      soft: "border-emerald-200 bg-emerald-50 text-emerald-950",
      accent: "text-emerald-700",
      gradient: "from-emerald-700 via-emerald-800 to-slate-950",
      bar: "bg-emerald-500",
    },
    rose: {
      tab: "border-rose-600 bg-rose-600 text-white shadow-rose-600/20",
      icon: "bg-rose-100 text-rose-700",
      soft: "border-rose-200 bg-rose-50 text-rose-950",
      accent: "text-rose-700",
      gradient: "from-rose-700 via-rose-800 to-slate-950",
      bar: "bg-rose-500",
    },
    violet: {
      tab: "border-violet-600 bg-violet-600 text-white shadow-violet-600/20",
      icon: "bg-violet-100 text-violet-700",
      soft: "border-violet-200 bg-violet-50 text-violet-950",
      accent: "text-violet-700",
      gradient: "from-violet-700 via-violet-800 to-slate-950",
      bar: "bg-violet-500",
    },
    amber: {
      tab: "border-amber-600 bg-amber-600 text-white shadow-amber-600/20",
      icon: "bg-amber-100 text-amber-700",
      soft: "border-amber-200 bg-amber-50 text-amber-950",
      accent: "text-amber-700",
      gradient: "from-amber-600 via-amber-700 to-slate-950",
      bar: "bg-amber-500",
    },
  };

  return classes[tone];
}

function CalculatorInput({
  id,
  label,
  value,
  placeholder,
  suffix,
  onChange,
  onBlur,
}: {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  suffix?: string;
  onChange: (value: string) => void;
  onBlur: () => void;
}) {
  return (
    <label htmlFor={id} className="block">
      <span className="text-sm font-extrabold text-slate-800">{label}</span>

      <div className="relative mt-2">
        <input
          id={id}
          inputMode="decimal"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 text-lg font-black text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 ${
            suffix ? "pr-14" : ""
          }`}
        />

        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-sm font-black text-slate-500">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

export default function PercentageCalculator() {
  const [mode, setMode] = useState<CalculationMode>("percentage");
  const [firstValue, setFirstValue] = useState("1.000");
  const [secondValue, setSecondValue] = useState("20");
  const [copied, setCopied] = useState(false);

  const result = useMemo(
    () => calculateResult(mode, firstValue, secondValue),
    [mode, firstValue, secondValue],
  );

  const selectedMode =
    modes.find((item) => item.value === mode) ?? modes[0];
  const inputLabels = getInputLabels(mode);
  const toneClasses = getToneClasses(result.tone);
  const resultSuffix =
    mode === "change" || mode === "ratio" || mode === "difference" ? "%" : "";

  const visualizationPercent = Math.min(
    100,
    Math.max(
      0,
      mode === "percentage" || mode === "increase" || mode === "decrease"
        ? Math.abs(parseNumericInput(secondValue) || 0)
        : Math.abs(result.value),
    ),
  );

  const handleModeChange = (nextMode: CalculationMode) => {
    setMode(nextMode);
    setCopied(false);

    if (nextMode === "change") {
      setFirstValue("100");
      setSecondValue("125");
      return;
    }

    if (nextMode === "ratio") {
      setFirstValue("30");
      setSecondValue("150");
      return;
    }

    if (nextMode === "difference") {
      setFirstValue("80");
      setSecondValue("120");
      return;
    }

    setFirstValue("1.000");
    setSecondValue("20");
  };

  const handleReset = () => {
    handleModeChange("percentage");
  };

  const handleSwap = () => {
    setFirstValue(secondValue);
    setSecondValue(firstValue);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (!result.isValid) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        `${result.label}: ${formatNumber(result.value)}${resultSuffix}`,
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
    >
      <div className="relative overflow-hidden bg-slate-950 px-6 py-8 text-white md:px-10 md:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-violet-600/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-100 ring-1 ring-white/15">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              6 farklı yüzde işlemi
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
              Yüzde Hesaplama Aracı
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Yüzde hesaplama, artırma, azaltma, değişim, oran ve yüzde farkı
              işlemlerini tek araç üzerinden anında gerçekleştirin.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { value: "6", label: "Hesaplama modu" },
              { value: "Anlık", label: "Sonuç güncelleme" },
              { value: "%100", label: "Ücretsiz" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl bg-white/10 px-4 py-3 text-center ring-1 ring-white/10"
              >
                <strong className="block text-sm font-black text-white">
                  {item.value}
                </strong>
                <span className="mt-1 block text-[11px] leading-4 text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-b border-slate-200 bg-slate-50 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {modes.map((item) => {
            const Icon = item.icon;
            const isActive = mode === item.value;
            const itemTone = getToneClasses(item.tone);

            return (
              <button
                key={item.value}
                type="button"
                onClick={() => handleModeChange(item.value)}
                className={`flex min-h-16 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? `${itemTone.tab} shadow-lg`
                    : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-white/15 text-white" : itemTone.icon
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>

                <span className="text-sm font-extrabold leading-5">
                  {item.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
        <div className="p-6 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p
                className={`text-xs font-extrabold uppercase tracking-[0.16em] ${toneClasses.accent}`}
              >
                {selectedMode.label}
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                Değerleri girin
              </h3>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Sıfırla
            </button>
          </div>

          <div className="mt-8 grid gap-5">
            <CalculatorInput
              id="percentage-first-value"
              label={inputLabels.first}
              value={firstValue}
              placeholder={inputLabels.firstPlaceholder}
              onChange={(value) => {
                setFirstValue(value);
                setCopied(false);
              }}
              onBlur={() => {
                const parsed = parseNumericInput(firstValue);
                if (Number.isFinite(parsed)) {
                  setFirstValue(formatInputNumber(parsed));
                }
              }}
            />

            {(mode === "change" ||
              mode === "ratio" ||
              mode === "difference") && (
              <div className="flex justify-center">
                <button
                  type="button"
                  onClick={handleSwap}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition hover:rotate-180 hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  aria-label="Değerlerin yerini değiştir"
                >
                  <ArrowRightLeft className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            )}

            <CalculatorInput
              id="percentage-second-value"
              label={inputLabels.second}
              value={secondValue}
              placeholder={inputLabels.secondPlaceholder}
              suffix={inputLabels.secondSuffix}
              onChange={(value) => {
                setSecondValue(value);
                setCopied(false);
              }}
              onBlur={() => {
                const parsed = parseNumericInput(secondValue);
                if (Number.isFinite(parsed)) {
                  setSecondValue(formatInputNumber(parsed));
                }
              }}
            />
          </div>

          {(mode === "percentage" ||
            mode === "increase" ||
            mode === "decrease") && (
            <div className="mt-7">
              <p className="text-sm font-extrabold text-slate-800">
                Hızlı yüzde seçimi
              </p>

              <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
                {QUICK_RATES.map((rate) => (
                  <button
                    key={rate}
                    type="button"
                    onClick={() => {
                      setSecondValue(String(rate));
                      setCopied(false);
                    }}
                    className={`rounded-2xl border px-3 py-3 text-sm font-black transition ${
                      parseNumericInput(secondValue) === rate
                        ? `${toneClasses.tab} shadow-lg`
                        : "border-slate-200 bg-white text-slate-700 hover:border-violet-300 hover:bg-violet-50"
                    }`}
                  >
                    %{rate}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className={`mt-7 rounded-3xl border p-5 ${toneClasses.soft}`}>
            <div className="flex items-start gap-4">
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${toneClasses.icon}`}
              >
                <selectedMode.icon className="h-5 w-5" aria-hidden="true" />
              </div>

              <div>
                <p className="font-black">{selectedMode.label}</p>
                <p className="mt-1 text-sm leading-6 opacity-80">
                  {selectedMode.description}
                </p>
              </div>
            </div>
          </div>

          {!result.isValid ? (
            <div className="mt-5 rounded-3xl border border-amber-200 bg-amber-50 p-5 text-sm font-medium leading-6 text-amber-950">
              {result.error}
            </div>
          ) : null}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <div
            className={`overflow-hidden rounded-[2rem] bg-gradient-to-br ${toneClasses.gradient} p-7 text-white shadow-xl`}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <BadgePercent className="h-6 w-6" aria-hidden="true" />
              </div>

              <button
                type="button"
                onClick={handleCopy}
                disabled={!result.isValid}
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-extrabold text-white ring-1 ring-white/15 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {copied ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? "Kopyalandı" : "Kopyala"}
              </button>
            </div>

            <p className="mt-7 text-sm font-bold text-white/70">
              Hesaplama sonucu
            </p>

            <strong className="mt-2 block break-words text-4xl font-black tracking-tight md:text-5xl">
              {formatNumber(result.value)}
              {resultSuffix}
            </strong>

            <p className="mt-4 text-sm font-bold leading-6 text-white/80">
              {result.label}
            </p>

            <div className="mt-7 rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-white/60">
                Kullanılan işlem
              </p>
              <p className="mt-2 break-words text-base font-black leading-7">
                {result.formula}
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-black text-slate-950">
                  Görsel oran özeti
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Sonucun yüzdelik büyüklüğü
                </p>
              </div>

              <Gauge
                className={`h-6 w-6 ${toneClasses.accent}`}
                aria-hidden="true"
              />
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-slate-200">
              <div
                className={`h-full rounded-full transition-all ${toneClasses.bar}`}
                style={{ width: `${visualizationPercent}%` }}
              />
            </div>

            <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
              <span>%0</span>
              <span>%{formatNumber(visualizationPercent)}</span>
              <span>%100</span>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <Equal className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-4 text-xs font-bold text-slate-500">
                Sonuç değeri
              </p>
              <p className="mt-1 break-words text-lg font-black text-slate-950">
                {formatNumber(result.value)}
                {resultSuffix}
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                {result.direction === "increase" ? (
                  <Plus className="h-5 w-5" aria-hidden="true" />
                ) : result.direction === "decrease" ? (
                  <Minus className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Calculator className="h-5 w-5" aria-hidden="true" />
                )}
              </div>
              <p className="mt-4 text-xs font-bold text-slate-500">
                Yardımcı değer
              </p>
              <p className="mt-1 break-words text-lg font-black text-slate-950">
                {formatNumber(result.comparisonValue ?? 0)}
              </p>
            </article>
          </div>

          <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black text-slate-950">Sonuç açıklaması</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {result.detail}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Calculator,
              title: "Anlık hesaplama",
              text: "Değerleri değiştirdiğiniz anda sonuç otomatik güncellenir.",
            },
            {
              icon: BadgePercent,
              title: "Altı işlem türü",
              text: "Temel yüzde işlemlerini tek hesaplayıcıdan yapabilirsiniz.",
            },
            {
              icon: RefreshCw,
              title: "Kolay karşılaştırma",
              text: "Değerleri değiştirerek farklı senaryoları hızlıca inceleyin.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}