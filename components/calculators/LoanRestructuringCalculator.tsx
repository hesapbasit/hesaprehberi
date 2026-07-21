"use client";

import { useMemo, useState } from "react";

type LoanSummary = {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
};

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
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

function calculateLoan(
  principal: number,
  monthlyRatePercent: number,
  term: number,
): LoanSummary {
  if (principal <= 0 || term <= 0 || monthlyRatePercent < 0) {
    return {
      monthlyPayment: 0,
      totalPayment: 0,
      totalInterest: 0,
    };
  }

  const monthlyRate = monthlyRatePercent / 100;

  if (monthlyRate === 0) {
    const monthlyPayment = principal / term;

    return {
      monthlyPayment,
      totalPayment: principal,
      totalInterest: 0,
    };
  }

  const factor = Math.pow(1 + monthlyRate, term);
  const monthlyPayment =
    principal * ((monthlyRate * factor) / (factor - 1));
  const totalPayment = monthlyPayment * term;

  return {
    monthlyPayment,
    totalPayment,
    totalInterest: Math.max(0, totalPayment - principal),
  };
}

export default function LoanRestructuringCalculator() {
  const [remainingPrincipal, setRemainingPrincipal] = useState("300.000");
  const [currentMonthlyRate, setCurrentMonthlyRate] = useState("3,99");
  const [currentRemainingTerm, setCurrentRemainingTerm] = useState("24");
  const [newMonthlyRate, setNewMonthlyRate] = useState("2,99");
  const [newTerm, setNewTerm] = useState("36");
  const [restructuringCost, setRestructuringCost] = useState("5.000");

  const result = useMemo(() => {
    const principal = parseNumericInput(remainingPrincipal);
    const oldRate = parseNumericInput(currentMonthlyRate);
    const oldTerm = Math.max(
      0,
      Math.floor(parseNumericInput(currentRemainingTerm)),
    );
    const restructuredRate = parseNumericInput(newMonthlyRate);
    const restructuredTerm = Math.max(
      0,
      Math.floor(parseNumericInput(newTerm)),
    );
    const costs = Math.max(0, parseNumericInput(restructuringCost));

    const currentLoan = calculateLoan(principal, oldRate, oldTerm);
    const newLoan = calculateLoan(
      principal + costs,
      restructuredRate,
      restructuredTerm,
    );

    const monthlyDifference =
      currentLoan.monthlyPayment - newLoan.monthlyPayment;
    const totalDifference =
      currentLoan.totalPayment - newLoan.totalPayment;
    const isAdvantageous = totalDifference > 0;
    const breakEvenMonths =
      monthlyDifference > 0 ? costs / monthlyDifference : 0;

    return {
      principal,
      oldRate,
      oldTerm,
      restructuredRate,
      restructuredTerm,
      costs,
      currentLoan,
      newLoan,
      monthlyDifference,
      totalDifference,
      isAdvantageous,
      breakEvenMonths,
      isValid:
        principal > 0 &&
        oldRate >= 0 &&
        oldTerm > 0 &&
        restructuredRate >= 0 &&
        restructuredTerm > 0,
    };
  }, [
    remainingPrincipal,
    currentMonthlyRate,
    currentRemainingTerm,
    newMonthlyRate,
    newTerm,
    restructuringCost,
  ]);

  function resetCalculator() {
    setRemainingPrincipal("300.000");
    setCurrentMonthlyRate("3,99");
    setCurrentRemainingTerm("24");
    setNewMonthlyRate("2,99");
    setNewTerm("36");
    setRestructuringCost("5.000");
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-violet-600 to-fuchsia-700 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-100">
          Kredi karşılaştırma
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Kredi Yapılandırma Hesaplama Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-violet-100">
          Mevcut kredi planınızı yeni faiz oranı, yeni vade ve yapılandırma
          masraflarıyla karşılaştırarak aylık taksit ve toplam maliyet farkını
          inceleyin.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
        <div className="p-6 md:p-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Kalan anapara
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={remainingPrincipal}
                  onChange={(event) =>
                    setRemainingPrincipal(event.target.value)
                  }
                  onBlur={() =>
                    setRemainingPrincipal(
                      formatInputNumber(parseNumericInput(remainingPrincipal)),
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Kalan anapara"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Mevcut aylık faiz
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={currentMonthlyRate}
                  onChange={(event) =>
                    setCurrentMonthlyRate(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Mevcut aylık faiz"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Mevcut kalan vade
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={currentRemainingTerm}
                  onChange={(event) =>
                    setCurrentRemainingTerm(event.target.value)
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Mevcut kalan vade"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yeni aylık faiz
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={newMonthlyRate}
                  onChange={(event) => setNewMonthlyRate(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yeni aylık faiz"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  %
                </span>
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-slate-800">
                Yeni vade
              </span>

              <div className="relative mt-2">
                <input
                  type="number"
                  min="1"
                  max="360"
                  value={newTerm}
                  onChange={(event) => setNewTerm(event.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yeni vade"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  Ay
                </span>
              </div>
            </label>

            <label className="block sm:col-span-2">
              <span className="text-sm font-semibold text-slate-800">
                Yapılandırma masrafı
              </span>

              <div className="relative mt-2">
                <input
                  inputMode="decimal"
                  value={restructuringCost}
                  onChange={(event) =>
                    setRestructuringCost(event.target.value)
                  }
                  onBlur={() =>
                    setRestructuringCost(
                      formatInputNumber(parseNumericInput(restructuringCost)) ||
                        "0",
                    )
                  }
                  className="w-full rounded-2xl border border-slate-300 px-4 py-4 pr-12 text-lg font-semibold text-slate-900 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
                  aria-label="Yapılandırma masrafı"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                  TL
                </span>
              </div>
            </label>
          </div>

          {!result.isValid && (
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              Kalan anapara sıfırdan büyük, vadeler en az 1 ay ve faiz oranları
              negatif olmayan değerler olmalıdır.
            </div>
          )}

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <h3 className="text-lg font-bold text-slate-900">
              Karşılaştırma nasıl yapılır?
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Araç, mevcut kredi devam ettiğinde oluşacak tahmini toplam ödeme
              ile yeni faiz, vade ve masraflara göre oluşacak yapılandırılmış
              planı karşılaştırır.
            </p>
          </div>

          <button
            type="button"
            onClick={resetCalculator}
            className="mt-6 rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Varsayılan değerleri getir
          </button>
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
            Yapılandırma sonucu
          </p>

          <div
            className={`mt-5 rounded-3xl p-6 text-white shadow-lg ${
              result.isAdvantageous ? "bg-emerald-700" : "bg-slate-900"
            }`}
          >
            <span className="text-sm text-white/75">
              {result.isAdvantageous
                ? "Tahmini toplam tasarruf"
                : "Tahmini ek maliyet"}
            </span>

            <strong className="mt-2 block text-3xl font-bold md:text-4xl">
              {currencyFormatter.format(
                result.isValid ? Math.abs(result.totalDifference) : 0,
              )}
            </strong>

            <p className="mt-3 text-sm text-white/80">
              {result.isAdvantageous
                ? "Yeni plan toplam maliyet açısından daha avantajlı görünüyor."
                : "Yeni plan toplam maliyet açısından avantaj sağlamıyor."}
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl bg-white p-5">
              <p className="text-sm text-slate-500">Mevcut aylık taksit</p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                {currencyFormatter.format(
                  result.isValid ? result.currentLoan.monthlyPayment : 0,
                )}
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <p className="text-sm text-slate-500">Yeni aylık taksit</p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                {currencyFormatter.format(
                  result.isValid ? result.newLoan.monthlyPayment : 0,
                )}
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <p className="text-sm text-slate-500">Mevcut toplam ödeme</p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                {currencyFormatter.format(
                  result.isValid ? result.currentLoan.totalPayment : 0,
                )}
              </p>
            </article>

            <article className="rounded-2xl bg-white p-5">
              <p className="text-sm text-slate-500">Yeni toplam ödeme</p>
              <p className="mt-2 text-xl font-bold text-slate-900">
                {currencyFormatter.format(
                  result.isValid ? result.newLoan.totalPayment : 0,
                )}
              </p>
            </article>
          </div>

          <dl className="mt-4 space-y-4">
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">Aylık taksit farkı</dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(
                  result.isValid ? result.monthlyDifference : 0,
                )}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Yapılandırma masrafı
              </dt>
              <dd className="font-bold text-slate-900">
                {currencyFormatter.format(result.costs)}
              </dd>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <dt className="text-sm text-slate-600">
                Masrafın geri kazanım süresi
              </dt>
              <dd className="font-bold text-slate-900">
                {result.monthlyDifference > 0
                  ? `${percentFormatter.format(result.breakEvenMonths)} ay`
                  : "Hesaplanamaz"}
              </dd>
            </div>
          </dl>

          <p className="mt-6 text-sm leading-6 text-slate-500">
            Sonuçlar yaklaşık değerlerdir. Bankanın tahsis, sigorta, vergi,
            erken kapama ve yeni kredi masrafları gerçek sonucu değiştirebilir.
          </p>
        </div>
      </div>
    </section>
  );
}