"use client";

import { useMemo, useState } from "react";

type TermType = "day" | "month";

export default function DepositInterestCalculator() {
  const [principal, setPrincipal] = useState("100000");
  const [annualRate, setAnnualRate] = useState("40");
  const [term, setTerm] = useState("32");
  const [termType, setTermType] = useState<TermType>("day");
  const [withholdingRate, setWithholdingRate] = useState("0");

  const result = useMemo(() => {
    const principalValue = Number(principal);
    const annualRateValue = Number(annualRate);
    const termValue = Number(term);
    const withholdingRateValue = Number(withholdingRate);

    const isValid =
      Number.isFinite(principalValue) &&
      Number.isFinite(annualRateValue) &&
      Number.isFinite(termValue) &&
      Number.isFinite(withholdingRateValue) &&
      principalValue >= 0 &&
      annualRateValue >= 0 &&
      termValue >= 0 &&
      withholdingRateValue >= 0 &&
      withholdingRateValue <= 100;

    if (!isValid) {
      return {
        valid: false,
        grossInterest: 0,
        withholdingAmount: 0,
        netInterest: 0,
        maturityAmount: 0,
        totalDays: 0,
      };
    }

    const totalDays =
      termType === "day" ? termValue : Math.round(termValue * 30);

    const grossInterest =
      principalValue * (annualRateValue / 100) * (totalDays / 365);

    const withholdingAmount =
      grossInterest * (withholdingRateValue / 100);

    const netInterest = grossInterest - withholdingAmount;
    const maturityAmount = principalValue + netInterest;

    return {
      valid: true,
      grossInterest,
      withholdingAmount,
      netInterest,
      maturityAmount,
      totalDays,
    };
  }, [principal, annualRate, term, termType, withholdingRate]);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label
            htmlFor="principal"
            className="block font-semibold text-slate-800"
          >
            Ana Para
          </label>

          <div className="relative mt-3">
            <input
              id="principal"
              type="number"
              min="0"
              step="1000"
              value={principal}
              onChange={(event) => setPrincipal(event.target.value)}
              placeholder="100000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label
            htmlFor="annualRate"
            className="mt-8 block font-semibold text-slate-800"
          >
            Yıllık Faiz Oranı
          </label>

          <div className="relative mt-3">
            <input
              id="annualRate"
              type="number"
              min="0"
              step="0.01"
              value={annualRate}
              onChange={(event) => setAnnualRate(event.target.value)}
              placeholder="40"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[1fr_auto]">
            <div>
              <label
                htmlFor="term"
                className="block font-semibold text-slate-800"
              >
                Vade
              </label>

              <input
                id="term"
                type="number"
                min="0"
                step="1"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
                placeholder="32"
                className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div>
              <p className="font-semibold text-slate-800">Vade Türü</p>

              <div className="mt-3 flex rounded-xl border border-slate-300 bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setTermType("day")}
                  className={`rounded-lg px-5 py-3 font-semibold transition ${
                    termType === "day"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  Gün
                </button>

                <button
                  type="button"
                  onClick={() => setTermType("month")}
                  className={`rounded-lg px-5 py-3 font-semibold transition ${
                    termType === "month"
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-700 hover:text-blue-600"
                  }`}
                >
                  Ay
                </button>
              </div>
            </div>
          </div>

          <label
            htmlFor="withholdingRate"
            className="mt-8 block font-semibold text-slate-800"
          >
            Stopaj Oranı
          </label>

          <div className="relative mt-3">
            <input
              id="withholdingRate"
              type="number"
              min="0"
              max="100"
              step="0.01"
              value={withholdingRate}
              onChange={(event) => setWithholdingRate(event.target.value)}
              placeholder="0"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              %
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Hesaplama basit faiz yöntemiyle ve 365 günlük yıl üzerinden
              yapılır. Bankaların uyguladığı yöntem ve oranlar farklı olabilir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Vade Sonu Toplam Tutar</p>

            <h2 className="mt-3 break-words text-4xl font-bold md:text-5xl">
              {formatCurrency(result.maturityAmount)} ₺
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Brüt Faiz Getirisi</p>

              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(result.grossInterest)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Net Faiz Getirisi</p>

              <p className="mt-2 text-2xl font-bold">
                {formatCurrency(result.netInterest)} ₺
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Stopaj Kesintisi</p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(result.withholdingAmount)} ₺
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Hesaplanan Toplam Vade</p>

            <p className="mt-2 text-2xl font-bold">
              {result.totalDays.toLocaleString("tr-TR")} Gün
            </p>
          </div>

          {!result.valid && (
            <p className="mt-6 rounded-xl bg-red-500/20 p-4 text-sm">
              Geçerli ve sıfırdan büyük değerler girin.
            </p>
          )}
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-bold text-slate-900">
          Hesaplama Özeti
        </h3>

        <div className="mt-5 grid gap-4 md:grid-cols-4">
          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Ana Para</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(Number(principal) || 0)} ₺
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Yıllık Oran</p>
            <p className="mt-2 font-bold text-slate-900">
              %{formatNumber(Number(annualRate) || 0)}
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Net Getiri</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(result.netInterest)} ₺
            </p>
          </div>

          <div className="rounded-xl bg-white p-5">
            <p className="text-sm text-slate-500">Vade Sonu</p>
            <p className="mt-2 font-bold text-slate-900">
              {formatCurrency(result.maturityAmount)} ₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function formatCurrency(value: number) {
  if (!Number.isFinite(value)) {
    return "0,00";
  }

  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(value: number) {
  if (!Number.isFinite(value)) {
    return "0";
  }

  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}