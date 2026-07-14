"use client";

import { useMemo, useState } from "react";

type CalculationMode =
  | "percentage"
  | "increase"
  | "decrease"
  | "change"
  | "ratio";

const modes: {
  value: CalculationMode;
  label: string;
}[] = [
  {
    value: "percentage",
    label: "Yüzde Hesapla",
  },
  {
    value: "increase",
    label: "Yüzde Ekle",
  },
  {
    value: "decrease",
    label: "Yüzde Çıkar",
  },
  {
    value: "change",
    label: "Yüzde Değişimi",
  },
  {
    value: "ratio",
    label: "Yüzde Oranı",
  },
];

export default function PercentageCalculator() {
  const [mode, setMode] = useState<CalculationMode>("percentage");
  const [firstValue, setFirstValue] = useState("1000");
  const [secondValue, setSecondValue] = useState("20");

  const result = useMemo(() => {
    const first = Number(firstValue);
    const second = Number(secondValue);

    if (!Number.isFinite(first) || !Number.isFinite(second)) {
      return {
        value: 0,
        label: "Sonuç",
        detail: "Geçerli değerler girin.",
      };
    }

    if (mode === "percentage") {
      const value = (first * second) / 100;

      return {
        value,
        label: `${formatNumber(first)} sayısının %${formatNumber(
          second
        )} değeri`,
        detail: `${formatNumber(first)} × ${formatNumber(second)} / 100`,
      };
    }

    if (mode === "increase") {
      const value = first + (first * second) / 100;

      return {
        value,
        label: `%${formatNumber(second)} artırılmış sonuç`,
        detail: `${formatNumber(first)} + %${formatNumber(second)}`,
      };
    }

    if (mode === "decrease") {
      const value = first - (first * second) / 100;

      return {
        value,
        label: `%${formatNumber(second)} azaltılmış sonuç`,
        detail: `${formatNumber(first)} - %${formatNumber(second)}`,
      };
    }

    if (mode === "change") {
      if (first === 0) {
        return {
          value: 0,
          label: "Yüzde değişimi hesaplanamadı",
          detail: "Başlangıç değeri sıfır olamaz.",
        };
      }

      const value = ((second - first) / Math.abs(first)) * 100;
      const direction =
        value > 0 ? "artış" : value < 0 ? "azalış" : "değişim yok";

      return {
        value: Math.abs(value),
        label:
          value === 0
            ? "Değişim yok"
            : `%${formatNumber(Math.abs(value))} ${direction}`,
        detail: `${formatNumber(first)} değerinden ${formatNumber(
          second
        )} değerine değişim`,
      };
    }

    if (second === 0) {
      return {
        value: 0,
        label: "Yüzde oranı hesaplanamadı",
        detail: "Toplam değer sıfır olamaz.",
      };
    }

    const value = (first / second) * 100;

    return {
      value,
      label: `${formatNumber(first)}, ${formatNumber(
        second
      )} sayısının yüzde kaçı?`,
      detail: `${formatNumber(first)} / ${formatNumber(second)} × 100`,
    };
  }, [firstValue, secondValue, mode]);

  const inputLabels = getInputLabels(mode);
  const resultSuffix = mode === "change" || mode === "ratio" ? "%" : "";

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {modes.map((item) => {
          const isActive = mode === item.value;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setMode(item.value)}
              className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="firstValue"
            className="block font-semibold text-slate-800"
          >
            {inputLabels.first}
          </label>

          <input
            id="firstValue"
            type="number"
            step="any"
            value={firstValue}
            onChange={(event) => setFirstValue(event.target.value)}
            placeholder={inputLabels.firstPlaceholder}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          />

          <label
            htmlFor="secondValue"
            className="mt-8 block font-semibold text-slate-800"
          >
            {inputLabels.second}
          </label>

          <div className="relative mt-3">
            <input
              id="secondValue"
              type="number"
              step="any"
              value={secondValue}
              onChange={(event) => setSecondValue(event.target.value)}
              placeholder={inputLabels.secondPlaceholder}
              className={`w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${
                inputLabels.showPercentageSymbol ? "pr-14" : ""
              }`}
            />

            {inputLabels.showPercentageSymbol && (
              <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
                %
              </span>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              {getModeDescription(mode)}
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <p className="mt-8 text-blue-100">{result.label}</p>

          <h2 className="mt-3 break-words text-4xl font-bold md:text-5xl">
            {formatNumber(result.value)}
            {resultSuffix}
          </h2>

          <div className="mt-10 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">İşlem</p>

            <p className="mt-2 text-lg font-semibold">{result.detail}</p>
          </div>

          <p className="mt-8 text-sm leading-6 text-blue-100">
            Sonuç, girdiğiniz değerlere göre otomatik olarak hesaplanır.
          </p>
        </div>
      </div>
    </div>
  );
}

function formatNumber(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}

function getInputLabels(mode: CalculationMode) {
  if (mode === "change") {
    return {
      first: "Başlangıç Değeri",
      second: "Yeni Değer",
      firstPlaceholder: "Örneğin 100",
      secondPlaceholder: "Örneğin 125",
      showPercentageSymbol: false,
    };
  }

  if (mode === "ratio") {
    return {
      first: "Parça Değeri",
      second: "Toplam Değer",
      firstPlaceholder: "Örneğin 30",
      secondPlaceholder: "Örneğin 150",
      showPercentageSymbol: false,
    };
  }

  return {
    first: "Ana Değer",
    second: "Yüzde Oranı",
    firstPlaceholder: "Örneğin 1000",
    secondPlaceholder: "Örneğin 20",
    showPercentageSymbol: true,
  };
}

function getModeDescription(mode: CalculationMode) {
  if (mode === "percentage") {
    return "Bir sayının belirlediğiniz yüzde oranına karşılık gelen değerini hesaplar.";
  }

  if (mode === "increase") {
    return "Ana değere belirlediğiniz yüzde oranını ekleyerek yeni tutarı bulur.";
  }

  if (mode === "decrease") {
    return "Ana değerden belirlediğiniz yüzde oranını çıkararak kalan tutarı bulur.";
  }

  if (mode === "change") {
    return "Başlangıç değeri ile yeni değer arasındaki yüzdelik artış veya azalışı hesaplar.";
  }

  return "Bir değerin toplam değerin yüzde kaçına karşılık geldiğini hesaplar.";
}