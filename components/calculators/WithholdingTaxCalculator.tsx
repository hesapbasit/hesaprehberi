"use client";

import { useMemo, useState } from "react";

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

export default function WithholdingTaxCalculator() {
  const [grossInterest, setGrossInterest] = useState("10.000");
  const [withholdingRate, setWithholdingRate] = useState("15");
  const [principal, setPrincipal] = useState("100.000");
  const [days, setDays] = useState("32");

  const result = useMemo(() => {
    const grossInterestValue = Math.max(
      0,
      parseNumericInput(grossInterest),
    );
    const withholdingRateValue = Math.max(
      0,
      parseNumericInput(withholdingRate),
    );
    const principalValue = Math.max(0, parseNumericInput(principal));
    const daysValue = Math.max(0, Math.floor(parseNumericInput(days)));

    const withholdingAmount =
      grossInterestValue * (withholdingRateValue / 100);
    const netInterest = Math.max(
      0,
      grossInterestValue - withholdingAmount,
    );
    const maturityAmount = principalValue + netInterest;

    const grossYield =
      principalValue > 0
        ? (grossInterestValue / principalValue) * 100
        : 0;
    const netYield =
      principalValue > 0 ? (netInterest / principalValue) * 100 : 0;

    const dailyGrossInterest =
      daysValue > 0 ? grossInterestValue / daysValue : 0;
    const dailyNetInterest =
      daysValue > 0 ? netInterest / daysValue : 0;

    const effectiveAnnualGrossYield =
      principalValue > 0 && daysValue > 0
        ? (Math.pow(
            1 + grossInterestValue / principalValue,
            365 / daysValue,
          ) -
            1) *
          100
        : 0;

    const effectiveAnnualNetYield =
      principalValue > 0 && daysValue > 0
        ? (Math.pow(
            1 + netInterest / principalValue,
            365 / daysValue,
          ) -
            1) *
          100
        : 0;

    const taxBurdenRatio =
      grossInterestValue > 0
        ? (withholdingAmount / grossInterestValue) * 100
        : 0;

    return {
      grossInterestValue,
      withholdingRateValue,
      principalValue,
      daysValue,
      withholdingAmount,
      netInterest,
      maturityAmount,
      grossYield,
      netYield,
      dailyGrossInterest,
      dailyNetInterest,
      effectiveAnnualGrossYield,
      effectiveAnnualNetYield,
      taxBurdenRatio,
      valid:
        grossInterestValue >= 0 &&
        withholdingRateValue >= 0 &&
        principalValue >= 0 &&
        daysValue >= 0,
    };
  }, [grossInterest, withholdingRate, principal, days]);

  function resetCalculator() {
    setGrossInterest("10.000");
    setWithholdingRate("15");
    setPrincipal("100.000");
    setDays("32");
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-rose-700 to-orange-700 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-100">
          Vergi sonrası getiri
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Stopaj Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-rose-100">
          Brüt faiz kazancı ve stopaj oranına göre kesinti tutarını, net faiz
          gelirini ve vade sonu toplamını hesaplayın.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Brüt faiz kazancı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={grossInterest}
                  onChange={(event) =>
                    setGrossInterest(event.target.value)
                  }
                  onBlur={() =>
                    setGrossInterest(
                      formatInputNumber(
                        parseNumericInput(grossInterest),
                      ),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                  aria-label="Brüt faiz kazancı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                  aria-label="Stopaj oranı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
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
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                  aria-label="Ana para"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Vade süresi
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="3650"
                  value={days}
                  onChange={(event) => setDays(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-14 text-lg font-semibold text-slate-900 outline-none transition focus:border-rose-500 focus:ring-4 focus:ring-rose-100"
                  aria-label="Vade süresi"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Gün
                </span>
              </div>
            </label>
          </div>

          {!result.valid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Tutar ve oran alanları negatif olamaz.
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
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-rose-700">
            Stopaj sonucu
          </p>

          <div className="mt-5 rounded-3xl bg-slate-900 p-6 text-white shadow-lg">
            <span className="text-sm text-slate-300">
              Stopaj sonrası net faiz
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                result.valid ? result.netInterest : 0,
              )}
            </strong>

            <p className="mt-3 text-sm text-slate-300">
              Kesilen stopaj:{" "}
              {currencyFormatter.format(
                result.valid ? result.withholdingAmount : 0,
              )}
            </p>
          </div>

          <dl className="mt-6 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Brüt faiz</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.grossInterestValue : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl border border-rose-200 bg-rose-50 p-4">
              <dt className="text-sm font-semibold text-rose-800">
                Stopaj kesintisi
              </dt>
              <dd className="font-bold text-rose-900">
                {currencyFormatter.format(
                  result.valid ? result.withholdingAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Net faiz geliri</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.netInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Vade sonu toplam
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.maturityAmount : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Brüt dönem getirisi</dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.grossYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Net dönem getirisi</dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid ? result.netYield : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Günlük brüt kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.dailyGrossInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Günlük net kazanç
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.valid ? result.dailyNetInterest : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık brüt getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid
                    ? result.effectiveAnnualGrossYield
                    : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Efektif yıllık net getiri
              </dt>
              <dd className="font-bold text-slate-900">
                %{numberFormatter.format(
                  result.valid
                    ? result.effectiveAnnualNetYield
                    : 0,
                )}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Stopaj oranları ürün türüne, vadeye ve yürürlükteki düzenlemelere
            göre değişebilir. Nihai işlem öncesinde güncel oranı doğrulayın.
          </p>
        </div>
      </div>
    </section>
  );
}