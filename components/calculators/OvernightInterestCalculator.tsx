"use client";

import { useMemo, useState } from "react";

type DayCountBasis = 360 | 365;
type RolloverMode = "simple" | "compound";

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 4,
});

function parseNumericInput(value: string): number {
  const normalized = value
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function formatInputNumber(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return "";

  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 2,
  }).format(value);
}

export default function OvernightInterestCalculator() {
  const [principal, setPrincipal] = useState("100.000");
  const [annualRate, setAnnualRate] = useState("45");
  const [nights, setNights] = useState("7");
  const [withholdingRate, setWithholdingRate] = useState("15");
  const [dayCountBasis, setDayCountBasis] =
    useState<DayCountBasis>(365);
  const [rolloverMode, setRolloverMode] =
    useState<RolloverMode>("compound");

  const result = useMemo(() => {
    const principalValue = Math.max(0, parseNumericInput(principal));
    const annualRateValue = Math.max(0, parseNumericInput(annualRate));
    const nightsValue = Math.max(0, Math.floor(parseNumericInput(nights)));
    const withholdingRateValue = Math.max(
      0,
      parseNumericInput(withholdingRate),
    );

    const annualRateDecimal = annualRateValue / 100;
    const nightlyRate = annualRateDecimal / dayCountBasis;

    const grossMaturityAmount =
      rolloverMode === "compound"
        ? principalValue * Math.pow(1 + nightlyRate, nightsValue)
        : principalValue *
          (1 + nightlyRate * nightsValue);

    const grossInterest = Math.max(
      0,
      grossMaturityAmount - principalValue,
    );
    const withholdingAmount =
      grossInterest * (withholdingRateValue / 100);
    const netInterest = Math.max(0, grossInterest - withholdingAmount);
    const netMaturityAmount = principalValue + netInterest;

    const firstNightGrossInterest =
      principalValue * nightlyRate;
    const firstNightWithholding =
      firstNightGrossInterest * (withholdingRateValue / 100);
    const firstNightNetInterest =
      firstNightGrossInterest - firstNightWithholding;

    const averageNightlyGrossInterest =
      nightsValue > 0 ? grossInterest / nightsValue : 0;
    const averageNightlyNetInterest =
      nightsValue > 0 ? netInterest / nightsValue : 0;

    const grossPeriodYield =
      principalValue > 0 ? (grossInterest / principalValue) * 100 : 0;
    const netPeriodYield =
      principalValue > 0 ? (netInterest / principalValue) * 100 : 0;

    const effectiveAnnualGrossYield =
      rolloverMode === "compound"
        ? (Math.pow(1 + nightlyRate, dayCountBasis) - 1) * 100
        : annualRateValue;

    const effectiveAnnualNetYield =
      effectiveAnnualGrossYield *
      (1 - withholdingRateValue / 100);

    const weeklyEquivalentNetInterest =
      averageNightlyNetInterest * 7;
    const monthlyEquivalentNetInterest =
      averageNightlyNetInterest * (dayCountBasis / 12);

    return {
      principalValue,
      annualRateValue,
      nightsValue,
      withholdingRateValue,
      nightlyRate: nightlyRate * 100,
      firstNightGrossInterest,
      firstNightNetInterest,
      averageNightlyGrossInterest,
      averageNightlyNetInterest,
      grossInterest,
      withholdingAmount,
      netInterest,
      grossMaturityAmount,
      netMaturityAmount,
      grossPeriodYield,
      netPeriodYield,
      effectiveAnnualGrossYield,
      effectiveAnnualNetYield,
      weeklyEquivalentNetInterest,
      monthlyEquivalentNetInterest,
      valid:
        principalValue > 0 &&
        annualRateValue >= 0 &&
        nightsValue > 0 &&
        withholdingRateValue >= 0,
    };
  }, [
    principal,
    annualRate,
    nights,
    withholdingRate,
    dayCountBasis,
    rolloverMode,
  ]);

  function resetCalculator() {
    setPrincipal("100.000");
    setAnnualRate("45");
    setNights("7");
    setWithholdingRate("15");
    setDayCountBasis(365);
    setRolloverMode("compound");
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-700 to-slate-900 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
          Gecelik getiri
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Gecelik Faiz Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-indigo-100">
          Ana para, yıllık faiz oranı, gece sayısı ve stopaj bilgilerine göre
          gecelik brüt kazanç, net faiz ve vade sonu tutarını hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Ana para
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={principal}
                  onChange={(event) => setPrincipal(event.target.value)}
                  onBlur={() =>
                    setPrincipal(
                      formatInputNumber(parseNumericInput(principal)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  aria-label="Ana para"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yıllık brüt faiz oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={annualRate}
                  onChange={(event) => setAnnualRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  aria-label="Yıllık brüt faiz oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Gece sayısı
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="3650"
                  value={nights}
                  onChange={(event) => setNights(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-16 text-lg font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  aria-label="Gece sayısı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Gece
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Stopaj oranı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={withholdingRate}
                  onChange={(event) =>
                    setWithholdingRate(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                  aria-label="Stopaj oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <fieldset className="block">
              <legend className="text-sm font-semibold text-slate-800">
                Gün sayım esası
              </legend>

              <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
                {[360, 365].map((basis) => (
                  <button
                    key={basis}
                    type="button"
                    onClick={() =>
                      setDayCountBasis(basis as DayCountBasis)
                    }
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                      dayCountBasis === basis
                        ? "bg-white text-indigo-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {basis} gün
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="block sm:col-span-2">
              <legend className="text-sm font-semibold text-slate-800">
                Yenileme yöntemi
              </legend>

              <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-100 p-1.5">
                <button
                  type="button"
                  onClick={() => setRolloverMode("simple")}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    rolloverMode === "simple"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Basit gecelik faiz
                </button>

                <button
                  type="button"
                  onClick={() => setRolloverMode("compound")}
                  className={`rounded-xl px-3 py-3 text-sm font-semibold transition ${
                    rolloverMode === "compound"
                      ? "bg-white text-indigo-700 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Her gece yenilenen
                </button>
              </div>
            </fieldset>
          </div>

          {!result.valid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Ana para ve gece sayısı sıfırdan büyük olmalıdır. Faiz ve stopaj
              oranları negatif olamaz.
            </div>
          )}

          <button
            type="button"
            onClick={resetCalculator}
            className="mt-8 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Varsayılan değerleri getir
          </button>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
            Gecelik faiz sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">
              Ortalama gecelik net kazanç
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                result.valid ? result.averageNightlyNetInterest : 0,
              )}
            </strong>

            <p className="mt-3 text-sm text-slate-300">
              {result.nightsValue} gece sonunda tahmini net faiz:{" "}
              {currencyFormatter.format(
                result.valid ? result.netInterest : 0,
              )}
            </p>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Gecelik faiz oranı</dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.nightlyRate : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                İlk gece brüt kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.firstNightGrossInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                İlk gece net kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.firstNightNetInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Toplam brüt faiz</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.grossInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Stopaj tutarı</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.withholdingAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-indigo-200 bg-indigo-50 p-4">
              <dt className="text-sm font-semibold text-indigo-800">
                Toplam net faiz
              </dt>
              <dd className="font-bold text-indigo-900">
                {currencyFormatter.format(
                  result.valid ? result.netInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Net vade sonu tutarı
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.netMaturityAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Net dönem getirisi
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.netPeriodYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık brüt getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.effectiveAnnualGrossYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık net getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.effectiveAnnualNetYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Haftalık eşdeğer net kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid
                    ? result.weeklyEquivalentNetInterest
                    : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Aylık eşdeğer net kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid
                    ? result.monthlyEquivalentNetInterest
                    : 0,
                )}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Sonuçlar tahminidir. Gecelik ürünlerde valör, yenileme saati,
            hafta sonu işleyişi, ürün limiti ve güncel stopaj uygulaması gerçek
            sonucu değiştirebilir.
          </p>
        </div>
      </div>
    </section>
  );
}