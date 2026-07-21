"use client";

import { useMemo, useState } from "react";
import {
  Banknote,
  CalendarDays,
  Check,
  ChevronDown,
  CircleAlert,
  Crown,
  Landmark,
  Percent,
  RefreshCcw,
  Scale,
  Sparkles,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type DayBasis = 360 | 365;

type TermResult = {
  days: number;
  grossInterest: number;
  withholdingTax: number;
  netInterest: number;
  maturityAmount: number;
  grossReturnRate: number;
  netReturnRate: number;
  dailyAverageEarning: number;
  estimatedCompoundAnnualReturn: number;
};

const AVAILABLE_TERMS = [7, 14, 30, 32, 45, 60, 90, 120, 180, 270, 365];

const DEFAULT_TERMS = [30, 32, 45, 90, 180, 365];

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

const formatPercent = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

const formatNumberInput = (value: number) =>
  new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 0,
  }).format(value);

const parseNumberInput = (value: string) => {
  const normalizedValue = value
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
};

export default function DepositTermComparisonCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [annualInterestRate, setAnnualInterestRate] = useState(45);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);
  const [selectedTerms, setSelectedTerms] = useState<number[]>(DEFAULT_TERMS);
  const [isTermMenuOpen, setIsTermMenuOpen] = useState(false);

  const results = useMemo<TermResult[]>(() => {
    if (
      principal <= 0 ||
      annualInterestRate < 0 ||
      withholdingTaxRate < 0
    ) {
      return [];
    }

    return selectedTerms
      .map((days) => {
        const grossInterest =
          principal * (annualInterestRate / 100) * (days / dayBasis);

        const withholdingTax =
          grossInterest * (withholdingTaxRate / 100);

        const netInterest = grossInterest - withholdingTax;
        const maturityAmount = principal + netInterest;

        const grossReturnRate =
          principal > 0 ? (grossInterest / principal) * 100 : 0;

        const netReturnRate =
          principal > 0 ? (netInterest / principal) * 100 : 0;

        const dailyAverageEarning =
          days > 0 ? netInterest / days : 0;

        const periodicNetReturn =
          principal > 0 ? netInterest / principal : 0;

        const estimatedCompoundAnnualReturn =
          periodicNetReturn > -1
            ? (Math.pow(1 + periodicNetReturn, 365 / days) - 1) * 100
            : 0;

        return {
          days,
          grossInterest,
          withholdingTax,
          netInterest,
          maturityAmount,
          grossReturnRate,
          netReturnRate,
          dailyAverageEarning,
          estimatedCompoundAnnualReturn,
        };
      })
      .sort((a, b) => a.days - b.days);
  }, [
    principal,
    annualInterestRate,
    withholdingTaxRate,
    dayBasis,
    selectedTerms,
  ]);

  const bestMaturityResult = useMemo(() => {
    if (results.length === 0) {
      return null;
    }

    return results.reduce((best, current) =>
      current.maturityAmount > best.maturityAmount ? current : best,
    );
  }, [results]);

  const bestCompoundResult = useMemo(() => {
    if (results.length === 0) {
      return null;
    }

    return results.reduce((best, current) =>
      current.estimatedCompoundAnnualReturn >
      best.estimatedCompoundAnnualReturn
        ? current
        : best,
    );
  }, [results]);

  const shortestTermResult = results[0] ?? null;

  const toggleTerm = (term: number) => {
    setSelectedTerms((currentTerms) => {
      if (currentTerms.includes(term)) {
        if (currentTerms.length === 1) {
          return currentTerms;
        }

        return currentTerms.filter((currentTerm) => currentTerm !== term);
      }

      return [...currentTerms, term].sort((a, b) => a - b);
    });
  };

  const selectAllTerms = () => {
    setSelectedTerms(AVAILABLE_TERMS);
  };

  const resetCalculator = () => {
    setPrincipal(250000);
    setAnnualInterestRate(45);
    setWithholdingTaxRate(15);
    setDayBasis(365);
    setSelectedTerms(DEFAULT_TERMS);
    setIsTermMenuOpen(false);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-blue-100 bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Mevduat vade analiz aracı
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Vade Karşılaştırma
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Aynı faiz oranıyla farklı vadelerde oluşabilecek brüt faiz,
              stopaj, net kazanç ve vade sonu tutarlarını karşılaştırın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700">
              <Landmark className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-blue-200">
                Karşılaştırılan vade
              </p>
              <p className="text-lg font-bold text-white">
                {selectedTerms.length} seçenek
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[390px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50/80 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="deposit-principal"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Banknote className="h-4 w-4 text-blue-600" />
                Ana para
              </label>

              <div className="relative">
                <input
                  id="deposit-principal"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(principal)}
                  onChange={(event) =>
                    setPrincipal(parseNumberInput(event.target.value))
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  aria-describedby="deposit-principal-description"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  TL
                </span>
              </div>

              <p
                id="deposit-principal-description"
                className="mt-2 text-xs leading-5 text-slate-500"
              >
                Mevduata yatırmayı planladığınız toplam tutarı girin.
              </p>
            </div>

            <div>
              <label
                htmlFor="deposit-interest-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <TrendingUp className="h-4 w-4 text-blue-600" />
                Yıllık brüt faiz oranı
              </label>

              <div className="relative">
                <input
                  id="deposit-interest-rate"
                  type="number"
                  min="0"
                  max="1000"
                  step="0.01"
                  value={annualInterestRate}
                  onChange={(event) =>
                    setAnnualInterestRate(
                      Math.max(0, Number(event.target.value) || 0),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <div>
              <label
                htmlFor="withholding-tax-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Scale className="h-4 w-4 text-blue-600" />
                Stopaj oranı
              </label>

              <div className="relative">
                <input
                  id="withholding-tax-rate"
                  type="number"
                  min="0"
                  max="100"
                  step="0.01"
                  value={withholdingTaxRate}
                  onChange={(event) =>
                    setWithholdingTaxRate(
                      Math.min(
                        100,
                        Math.max(0, Number(event.target.value) || 0),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <CalendarDays className="h-4 w-4 text-blue-600" />
                Faiz gün hesabı
              </legend>

              <div className="grid grid-cols-2 gap-3">
                {[360, 365].map((basis) => {
                  const isActive = dayBasis === basis;

                  return (
                    <button
                      key={basis}
                      type="button"
                      onClick={() => setDayBasis(basis as DayBasis)}
                      className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"
                      }`}
                    >
                      {basis} gün
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="relative">
              <div className="mb-2 flex items-center justify-between gap-3">
                <label className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <WalletCards className="h-4 w-4 text-blue-600" />
                  Karşılaştırılacak vadeler
                </label>

                <button
                  type="button"
                  onClick={selectAllTerms}
                  className="text-xs font-semibold text-blue-700 transition hover:text-blue-900"
                >
                  Tümünü seç
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsTermMenuOpen((current) => !current)}
                className="flex min-h-14 w-full items-center justify-between gap-4 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-left outline-none transition hover:border-blue-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                aria-expanded={isTermMenuOpen}
              >
                <span className="text-sm font-semibold text-slate-800">
                  {selectedTerms.length} vade seçildi
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-slate-500 transition ${
                    isTermMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isTermMenuOpen && (
                <div className="absolute left-0 right-0 z-30 mt-2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/60">
                  <div className="grid max-h-64 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
                    {AVAILABLE_TERMS.map((term) => {
                      const isSelected = selectedTerms.includes(term);

                      return (
                        <button
                          key={term}
                          type="button"
                          onClick={() => toggleTerm(term)}
                          className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                            isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-800"
                              : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          {term} gün

                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                              isSelected
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {isSelected && <Check className="h-3.5 w-3.5" />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsTermMenuOpen(false)}
                    className="mt-3 w-full rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Seçimi tamamla
                  </button>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={resetCalculator}
              className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              <RefreshCcw className="h-4 w-4" />
              Varsayılan değerlere dön
            </button>
          </div>

          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
            <CircleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />

            <p className="text-xs leading-5 text-amber-900">
              Sonuçlar bilgilendirme amacıyla tahmini olarak hesaplanır. Bankanın
              faiz hesaplama yöntemi, valör uygulaması ve güncel vergi oranları
              gerçek sonucu değiştirebilir.
            </p>
          </div>
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {results.length > 0 &&
          bestMaturityResult &&
          bestCompoundResult &&
          shortestTermResult ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
                  <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Crown className="h-5 w-5" />
                  </div>

                  <p className="pr-12 text-xs font-bold uppercase tracking-wider text-emerald-700">
                    En yüksek toplam kazanç
                  </p>

                  <p className="mt-3 text-2xl font-black text-slate-950">
                    {bestMaturityResult.days} gün
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    Net kazanç{" "}
                    <strong className="text-emerald-700">
                      {formatCurrency(bestMaturityResult.netInterest)}
                    </strong>
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Tahmini en yüksek bileşik getiri
                  </p>

                  <p className="mt-3 text-2xl font-black text-slate-950">
                    %{formatPercent(
                      bestCompoundResult.estimatedCompoundAnnualReturn,
                    )}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {bestCompoundResult.days} günlük vade yenilenirse
                  </p>
                </div>

                <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 sm:col-span-2 xl:col-span-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-violet-700">
                    En kısa vadede günlük kazanç
                  </p>

                  <p className="mt-3 text-2xl font-black text-slate-950">
                    {formatCurrency(shortestTermResult.dailyAverageEarning)}
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {shortestTermResult.days} günlük vade üzerinden
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
                <div className="flex flex-col gap-2 border-b border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-bold text-slate-950">
                      Vade karşılaştırma sonuçları
                    </h3>

                    <p className="mt-1 text-xs text-slate-500">
                      Sonuçlar net kazanca göre hesaplanmıştır.
                    </p>
                  </div>

                  <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-800">
                    {formatCurrency(principal)} ana para
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1050px] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-200 bg-white text-xs uppercase tracking-wide text-slate-500">
                        <th className="px-4 py-4 font-bold">Vade</th>
                        <th className="px-4 py-4 font-bold">Brüt faiz</th>
                        <th className="px-4 py-4 font-bold">Stopaj</th>
                        <th className="px-4 py-4 font-bold">Net kazanç</th>
                        <th className="px-4 py-4 font-bold">
                          Vade sonu tutar
                        </th>
                        <th className="px-4 py-4 font-bold">
                          Net dönem getirisi
                        </th>
                        <th className="px-4 py-4 font-bold">
                          Günlük kazanç
                        </th>
                        <th className="px-4 py-4 font-bold">
                          Tahmini bileşik yıllık
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {results.map((result) => {
                        const isBest =
                          result.days === bestMaturityResult.days;

                        return (
                          <tr
                            key={result.days}
                            className={`border-b border-slate-100 last:border-b-0 ${
                              isBest
                                ? "bg-emerald-50/70"
                                : "bg-white hover:bg-slate-50"
                            }`}
                          >
                            <td className="px-4 py-4">
                              <div className="flex items-center gap-2">
                                <span className="font-extrabold text-slate-950">
                                  {result.days} gün
                                </span>

                                {isBest && (
                                  <span className="rounded-full bg-emerald-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                                    En yüksek
                                  </span>
                                )}
                              </div>
                            </td>

                            <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                              {formatCurrency(result.grossInterest)}
                            </td>

                            <td className="px-4 py-4 text-sm font-semibold text-rose-600">
                              -{formatCurrency(result.withholdingTax)}
                            </td>

                            <td className="px-4 py-4 text-sm font-extrabold text-emerald-700">
                              {formatCurrency(result.netInterest)}
                            </td>

                            <td className="px-4 py-4 text-sm font-extrabold text-slate-950">
                              {formatCurrency(result.maturityAmount)}
                            </td>

                            <td className="px-4 py-4 text-sm font-bold text-blue-700">
                              %{formatPercent(result.netReturnRate)}
                            </td>

                            <td className="px-4 py-4 text-sm font-semibold text-slate-700">
                              {formatCurrency(result.dailyAverageEarning)}
                            </td>

                            <td className="px-4 py-4 text-sm font-bold text-violet-700">
                              %
                              {formatPercent(
                                result.estimatedCompoundAnnualReturn,
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <h3 className="flex items-center gap-2 font-bold text-slate-950">
                    <CalendarDays className="h-5 w-5 text-blue-600" />
                    Hesaplama yöntemi
                  </h3>

                  <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                    <p>
                      <strong className="text-slate-900">Brüt faiz:</strong>{" "}
                      Ana para × yıllık faiz oranı × vade günü ÷ gün esası
                    </p>

                    <p>
                      <strong className="text-slate-900">Stopaj:</strong>{" "}
                      Brüt faiz × stopaj oranı
                    </p>

                    <p>
                      <strong className="text-slate-900">Net kazanç:</strong>{" "}
                      Brüt faiz − stopaj kesintisi
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                  <h3 className="flex items-center gap-2 font-bold text-blue-950">
                    <TrendingUp className="h-5 w-5 text-blue-700" />
                    Bileşik getiri neyi gösterir?
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-blue-900">
                    Tahmini bileşik yıllık getiri, her vade sonunda oluşan net
                    kazancın ana paraya eklenerek aynı koşullarla yeniden
                    değerlendirildiği varsayımına dayanır. Faiz oranlarının yıl
                    boyunca değişebileceği unutulmamalıdır.
                  </p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <Banknote className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Hesaplama yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Sonuçları görüntülemek için geçerli bir ana para, faiz oranı ve
                en az bir vade seçeneği girin.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}