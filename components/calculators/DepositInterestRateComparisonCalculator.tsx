"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowUp,
  Award,
  Banknote,
  CalendarDays,
  ChartNoAxesCombined,
  CircleDollarSign,
  Landmark,
  Percent,
  RefreshCcw,
  Scale,
  Sparkles,
  TrendingUp,
  Trophy,
  WalletCards,
} from "lucide-react";

type DayBasis = 360 | 365;

type DepositOffer = {
  id: number;
  name: string;
  rate: number;
};

type CalculatedOffer = DepositOffer & {
  grossInterest: number;
  withholdingTax: number;
  netInterest: number;
  maturityAmount: number;
  dailyNetEarning: number;
  monthlyEquivalentEarning: number;
  periodGrossReturnRate: number;
  periodNetReturnRate: number;
};

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

const defaultOffers: DepositOffer[] = [
  {
    id: 1,
    name: "Teklif 1",
    rate: 45,
  },
  {
    id: 2,
    name: "Teklif 2",
    rate: 47.5,
  },
  {
    id: 3,
    name: "Teklif 3",
    rate: 50,
  },
];

export default function DepositInterestRateComparisonCalculator() {
  const [principal, setPrincipal] = useState(250000);
  const [termDays, setTermDays] = useState(32);
  const [withholdingTaxRate, setWithholdingTaxRate] = useState(15);
  const [dayBasis, setDayBasis] = useState<DayBasis>(365);
  const [offers, setOffers] = useState<DepositOffer[]>(defaultOffers);

  const result = useMemo(() => {
    if (
      principal <= 0 ||
      termDays <= 0 ||
      withholdingTaxRate < 0 ||
      withholdingTaxRate >= 100 ||
      offers.some((offer) => offer.rate < 0)
    ) {
      return null;
    }

    const withholdingDecimal = withholdingTaxRate / 100;

    const calculatedOffers: CalculatedOffer[] = offers.map((offer) => {
      const annualRateDecimal = offer.rate / 100;

      const grossInterest =
        principal * annualRateDecimal * (termDays / dayBasis);

      const withholdingTax = grossInterest * withholdingDecimal;

      const netInterest = grossInterest - withholdingTax;

      const maturityAmount = principal + netInterest;

      const dailyNetEarning =
        termDays > 0 ? netInterest / termDays : 0;

      const monthlyEquivalentEarning =
        dailyNetEarning * 30;

      const periodGrossReturnRate =
        principal > 0 ? (grossInterest / principal) * 100 : 0;

      const periodNetReturnRate =
        principal > 0 ? (netInterest / principal) * 100 : 0;

      return {
        ...offer,
        grossInterest,
        withholdingTax,
        netInterest,
        maturityAmount,
        dailyNetEarning,
        monthlyEquivalentEarning,
        periodGrossReturnRate,
        periodNetReturnRate,
      };
    });

    const sortedOffers = [...calculatedOffers].sort(
      (firstOffer, secondOffer) =>
        secondOffer.netInterest - firstOffer.netInterest,
    );

    const highestOffer = sortedOffers[0];
    const lowestOffer = sortedOffers[sortedOffers.length - 1];

    const netEarningDifference =
      highestOffer.netInterest - lowestOffer.netInterest;

    const grossEarningDifference =
      highestOffer.grossInterest - lowestOffer.grossInterest;

    const maturityDifference =
      highestOffer.maturityAmount - lowestOffer.maturityAmount;

    const interestRateDifference =
      highestOffer.rate - lowestOffer.rate;

    const averageRate =
      calculatedOffers.reduce(
        (total, offer) => total + offer.rate,
        0,
      ) / calculatedOffers.length;

    const averageNetInterest =
      calculatedOffers.reduce(
        (total, offer) => total + offer.netInterest,
        0,
      ) / calculatedOffers.length;

    const averageMaturityAmount =
      calculatedOffers.reduce(
        (total, offer) => total + offer.maturityAmount,
        0,
      ) / calculatedOffers.length;

    const differencePerRatePoint =
      interestRateDifference > 0
        ? netEarningDifference / interestRateDifference
        : 0;

    return {
      calculatedOffers,
      sortedOffers,
      highestOffer,
      lowestOffer,
      netEarningDifference,
      grossEarningDifference,
      maturityDifference,
      interestRateDifference,
      averageRate,
      averageNetInterest,
      averageMaturityAmount,
      differencePerRatePoint,
    };
  }, [
    principal,
    termDays,
    withholdingTaxRate,
    dayBasis,
    offers,
  ]);

  const updateOfferName = (id: number, name: string) => {
    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              name,
            }
          : offer,
      ),
    );
  };

  const updateOfferRate = (id: number, rate: number) => {
    setOffers((currentOffers) =>
      currentOffers.map((offer) =>
        offer.id === id
          ? {
              ...offer,
              rate: Math.max(0, rate),
            }
          : offer,
      ),
    );
  };

  const resetCalculator = () => {
    setPrincipal(250000);
    setTermDays(32);
    setWithholdingTaxRate(15);
    setDayBasis(365);
    setOffers(defaultOffers);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_24px_80px_-32px_rgba(15,23,42,0.35)]">
      <div className="relative overflow-hidden border-b border-cyan-100 bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 px-5 py-7 sm:px-8 sm:py-9">
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Üç farklı faiz teklifini karşılaştırın
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Mevduat Faiz Oranı Karşılaştırma
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-cyan-100 sm:text-base">
              Aynı ana para ve vade için farklı mevduat faiz
              tekliflerinin net kazançlarını, kesintilerini ve vade sonu
              tutarlarını karşılaştırın.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-cyan-700">
              <Trophy className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-medium text-cyan-100">
                En yüksek net kazanç
              </p>

              <p className="text-lg font-bold text-white">
                {result
                  ? formatCurrency(result.highestOffer.netInterest)
                  : formatCurrency(0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[410px_minmax(0,1fr)]">
        <div className="border-b border-slate-200 bg-slate-50/80 p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="space-y-5">
            <div>
              <label
                htmlFor="comparison-principal"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Landmark className="h-4 w-4 text-cyan-600" />
                Ana para
              </label>

              <div className="relative">
                <input
                  id="comparison-principal"
                  type="text"
                  inputMode="decimal"
                  value={formatNumberInput(principal)}
                  onChange={(event) =>
                    setPrincipal(
                      parseNumberInput(event.target.value),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  TL
                </span>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {[100000, 250000, 500000, 1000000].map(
                  (value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setPrincipal(value)}
                      className={`rounded-xl border px-3 py-2 text-xs font-semibold transition ${
                        principal === value
                          ? "border-cyan-600 bg-cyan-600 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                      }`}
                    >
                      {new Intl.NumberFormat("tr-TR", {
                        notation: "compact",
                        maximumFractionDigits: 1,
                      }).format(value)}{" "}
                      TL
                    </button>
                  ),
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="comparison-term-days"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <CalendarDays className="h-4 w-4 text-cyan-600" />
                Vade süresi
              </label>

              <div className="relative">
                <input
                  id="comparison-term-days"
                  type="number"
                  min="1"
                  max="3650"
                  step="1"
                  value={termDays}
                  onChange={(event) =>
                    setTermDays(
                      Math.max(
                        1,
                        Math.round(
                          Number(event.target.value) || 1,
                        ),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-16 text-base font-semibold text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-bold text-slate-500">
                  gün
                </span>
              </div>

              <div className="mt-3 grid grid-cols-4 gap-2">
                {[32, 45, 90, 180].map((day) => (
                  <button
                    key={day}
                    type="button"
                    onClick={() => setTermDays(day)}
                    className={`rounded-xl border px-2 py-2 text-xs font-semibold transition ${
                      termDays === day
                        ? "border-cyan-600 bg-cyan-600 text-white"
                        : "border-slate-300 bg-white text-slate-700 hover:border-cyan-400 hover:bg-cyan-50"
                    }`}
                  >
                    {day} gün
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="comparison-tax-rate"
                className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800"
              >
                <Scale className="h-4 w-4 text-cyan-600" />
                Stopaj oranı
              </label>

              <div className="relative">
                <input
                  id="comparison-tax-rate"
                  type="number"
                  min="0"
                  max="99.99"
                  step="0.01"
                  value={withholdingTaxRate}
                  onChange={(event) =>
                    setWithholdingTaxRate(
                      Math.min(
                        99.99,
                        Math.max(
                          0,
                          Number(event.target.value) || 0,
                        ),
                      ),
                    )
                  }
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-white px-4 pr-14 text-base font-semibold text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />

                <Percent className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              </div>
            </div>

            <fieldset>
              <legend className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800">
                <WalletCards className="h-4 w-4 text-cyan-600" />
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
                          ? "border-cyan-600 bg-cyan-600 text-white shadow-lg shadow-cyan-200"
                          : "border-slate-300 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
                      }`}
                    >
                      {basis} gün
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div className="space-y-4 border-t border-slate-200 pt-5">
              <div>
                <h3 className="flex items-center gap-2 text-sm font-black text-slate-950">
                  <ChartNoAxesCombined className="h-4 w-4 text-cyan-600" />
                  Faiz teklifleri
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Banka veya teklif adlarını isteğinize göre
                  değiştirebilirsiniz.
                </p>
              </div>

              {offers.map((offer, index) => (
                <div
                  key={offer.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-100 text-xs font-black text-cyan-700">
                      {index + 1}
                    </span>

                    <span className="text-xs font-semibold text-slate-400">
                      Teklif {index + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor={`offer-name-${offer.id}`}
                        className="mb-1.5 block text-xs font-bold text-slate-600"
                      >
                        Teklif adı
                      </label>

                      <input
                        id={`offer-name-${offer.id}`}
                        type="text"
                        maxLength={40}
                        value={offer.name}
                        onChange={(event) =>
                          updateOfferName(
                            offer.id,
                            event.target.value,
                          )
                        }
                        className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 text-sm font-semibold text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor={`offer-rate-${offer.id}`}
                        className="mb-1.5 block text-xs font-bold text-slate-600"
                      >
                        Yıllık faiz oranı
                      </label>

                      <div className="relative">
                        <input
                          id={`offer-rate-${offer.id}`}
                          type="number"
                          min="0"
                          max="1000"
                          step="0.01"
                          value={offer.rate}
                          onChange={(event) =>
                            updateOfferRate(
                              offer.id,
                              Number(event.target.value) || 0,
                            )
                          }
                          className="h-11 w-full rounded-xl border border-slate-300 bg-white px-3 pr-11 text-sm font-semibold text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                        />

                        <Percent className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
        </div>

        <div className="min-w-0 p-5 sm:p-7">
          {result ? (
            <>
              <div className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-800 p-6 text-white shadow-xl shadow-cyan-200/50 sm:p-8">
                <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />

                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-cyan-100">
                      <Trophy className="h-4 w-4" />
                      En yüksek getirili teklif
                    </div>

                    <p className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      {result.highestOffer.name || "İsimsiz teklif"}
                    </p>

                    <p className="mt-2 text-lg font-bold text-cyan-50">
                      %{formatPercent(result.highestOffer.rate)} yıllık
                      faiz
                    </p>

                    <p className="mt-3 text-sm leading-6 text-cyan-100">
                      Tahmini net kazanç:{" "}
                      <strong className="text-white">
                        {formatCurrency(
                          result.highestOffer.netInterest,
                        )}
                      </strong>
                    </p>
                  </div>

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white text-cyan-700 shadow-xl">
                    <Award className="h-9 w-9" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <ResultCard
                  label="En yüksek net kazanç"
                  value={formatCurrency(
                    result.highestOffer.netInterest,
                  )}
                  description={result.highestOffer.name}
                  icon={<ArrowUp className="h-5 w-5" />}
                />

                <ResultCard
                  label="En düşük net kazanç"
                  value={formatCurrency(
                    result.lowestOffer.netInterest,
                  )}
                  description={result.lowestOffer.name}
                  icon={<ArrowDown className="h-5 w-5" />}
                />

                <ResultCard
                  label="Net kazanç farkı"
                  value={formatCurrency(
                    result.netEarningDifference,
                  )}
                  description="En yüksek ve en düşük teklif farkı"
                  icon={<CircleDollarSign className="h-5 w-5" />}
                />

                <ResultCard
                  label="Faiz oranı farkı"
                  value={`%${formatPercent(
                    result.interestRateDifference,
                  )}`}
                  description="En yüksek ve en düşük oran farkı"
                  icon={<Percent className="h-5 w-5" />}
                />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <MetricCard
                  label="Ortalama faiz oranı"
                  value={`%${formatPercent(result.averageRate)}`}
                  description="Üç teklifin yıllık faiz ortalaması"
                />

                <MetricCard
                  label="Ortalama net kazanç"
                  value={formatCurrency(
                    result.averageNetInterest,
                  )}
                  description="Tekliflerin ortalama net getirisi"
                />

                <MetricCard
                  label="Ortalama vade sonu"
                  value={formatCurrency(
                    result.averageMaturityAmount,
                  )}
                  description="Ortalama toplam hesap bakiyesi"
                />
              </div>

              <div className="mt-6 grid gap-4 xl:grid-cols-3">
                {result.sortedOffers.map((offer, index) => (
                  <OfferSummaryCard
                    key={offer.id}
                    offer={offer}
                    ranking={index + 1}
                    isWinner={index === 0}
                  />
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-black text-slate-950">
                    Tekliflerin ayrıntılı karşılaştırması
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[920px] text-left text-sm">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-5 py-4 font-semibold">
                          Teklif
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Yıllık faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Brüt faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Stopaj
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Net faiz
                        </th>
                        <th className="px-5 py-4 font-semibold">
                          Vade sonu
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-200">
                      {result.sortedOffers.map((offer, index) => (
                        <tr
                          key={offer.id}
                          className={
                            index === 0
                              ? "bg-cyan-50"
                              : "bg-white"
                          }
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black ${
                                  index === 0
                                    ? "bg-cyan-600 text-white"
                                    : "bg-slate-100 text-slate-700"
                                }`}
                              >
                                {index + 1}
                              </span>

                              <span className="font-bold text-slate-950">
                                {offer.name || "İsimsiz teklif"}
                              </span>
                            </div>
                          </td>

                          <td className="px-5 py-4 font-bold text-cyan-700">
                            %{formatPercent(offer.rate)}
                          </td>

                          <td className="px-5 py-4 text-slate-700">
                            {formatCurrency(offer.grossInterest)}
                          </td>

                          <td className="px-5 py-4 text-rose-700">
                            {formatCurrency(offer.withholdingTax)}
                          </td>

                          <td className="px-5 py-4 font-black text-emerald-700">
                            {formatCurrency(offer.netInterest)}
                          </td>

                          <td className="px-5 py-4 font-black text-slate-950">
                            {formatCurrency(offer.maturityAmount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-slate-950">
                    <Scale className="h-5 w-5 text-cyan-600" />
                    Karşılaştırma özeti
                  </h3>

                  <div className="mt-5 space-y-4">
                    <CalculationRow
                      label="Ana para"
                      value={formatCurrency(principal)}
                    />

                    <CalculationRow
                      label="Vade süresi"
                      value={`${termDays} gün`}
                    />

                    <CalculationRow
                      label="Stopaj oranı"
                      value={`%${formatPercent(
                        withholdingTaxRate,
                      )}`}
                    />

                    <CalculationRow
                      label="Gün esası"
                      value={`${dayBasis} gün`}
                    />

                    <CalculationRow
                      label="Brüt getiri farkı"
                      value={formatCurrency(
                        result.grossEarningDifference,
                      )}
                    />

                    <CalculationRow
                      label="Vade sonu tutar farkı"
                      value={formatCurrency(
                        result.maturityDifference,
                      )}
                    />

                    <div className="border-t border-slate-200 pt-4">
                      <CalculationRow
                        label="Net kazanç farkı"
                        value={formatCurrency(
                          result.netEarningDifference,
                        )}
                        strong
                      />
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5 sm:p-6">
                  <h3 className="flex items-center gap-2 text-lg font-black text-blue-950">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Faiz farkının TL karşılığı
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-blue-900">
                    En yüksek ve en düşük teklif arasında{" "}
                    <strong>
                      %{formatPercent(
                        result.interestRateDifference,
                      )}
                    </strong>{" "}
                    yıllık faiz farkı bulunuyor. Bu fark, seçilen ana
                    para ve vade için net kazançta aşağıdaki tutarı
                    oluşturuyor.
                  </p>

                  <div className="mt-5 rounded-2xl border border-blue-200 bg-white/70 p-4">
                    <p className="text-xs font-bold uppercase tracking-wide text-blue-700">
                      Her 1 faiz puanının tahmini net etkisi
                    </p>

                    <p className="mt-2 text-2xl font-black text-blue-950">
                      {formatCurrency(
                        result.differencePerRatePoint,
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
                  <h3 className="text-lg font-black text-slate-950">
                    Günlük ve aylık kazanç karşılaştırması
                  </h3>
                </div>

                <div className="grid gap-4 p-5 sm:p-6 md:grid-cols-3">
                  {result.sortedOffers.map((offer) => (
                    <div
                      key={offer.id}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <p className="truncate text-sm font-black text-slate-950">
                        {offer.name || "İsimsiz teklif"}
                      </p>

                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-slate-500">
                            Günlük net kazanç
                          </p>

                          <p className="mt-1 text-lg font-black text-cyan-700">
                            {formatCurrency(
                              offer.dailyNetEarning,
                            )}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-500">
                            30 günlük eşdeğer
                          </p>

                          <p className="mt-1 text-lg font-black text-slate-950">
                            {formatCurrency(
                              offer.monthlyEquivalentEarning,
                            )}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-slate-500">
                            Dönemsel net getiri
                          </p>

                          <p className="mt-1 text-lg font-black text-emerald-700">
                            %
                            {formatPercent(
                              offer.periodNetReturnRate,
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="flex min-h-[620px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
                <ChartNoAxesCombined className="h-8 w-8" />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                Karşılaştırma yapılamadı
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Ana para ve vade süresinin sıfırdan büyük olduğundan,
                stopaj oranının yüzde 100&apos;den düşük olduğundan ve
                faiz oranlarının geçerli değerler içerdiğinden emin
                olun.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  description: string;
  icon: ReactNode;
};

function ResultCard({
  label,
  value,
  description,
  icon,
}: ResultCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
        {icon}
      </div>

      <p className="mt-4 text-xs font-bold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-2 break-words text-xl font-black text-slate-950">
        {value}
      </p>

      <p className="mt-2 truncate text-xs leading-5 text-slate-500">
        {description}
      </p>
    </div>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
  description: string;
};

function MetricCard({
  label,
  value,
  description,
}: MetricCardProps) {
  return (
    <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-5 text-cyan-950">
      <p className="text-xs font-bold uppercase tracking-wide opacity-70">
        {label}
      </p>

      <p className="mt-2 break-words text-2xl font-black">
        {value}
      </p>

      <p className="mt-2 text-xs leading-5 opacity-75">
        {description}
      </p>
    </div>
  );
}

type OfferSummaryCardProps = {
  offer: CalculatedOffer;
  ranking: number;
  isWinner: boolean;
};

function OfferSummaryCard({
  offer,
  ranking,
  isWinner,
}: OfferSummaryCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border p-5 ${
        isWinner
          ? "border-cyan-300 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg shadow-cyan-100"
          : "border-slate-200 bg-white"
      }`}
    >
      {isWinner ? (
        <div className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-cyan-600 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
          <Trophy className="h-3 w-3" />
          En iyi teklif
        </div>
      ) : null}

      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-black ${
          isWinner
            ? "bg-cyan-600 text-white"
            : "bg-slate-100 text-slate-700"
        }`}
      >
        {ranking}
      </div>

      <h3 className="mt-4 max-w-[190px] truncate text-lg font-black text-slate-950">
        {offer.name || "İsimsiz teklif"}
      </h3>

      <p className="mt-1 text-sm font-bold text-cyan-700">
        %{formatPercent(offer.rate)} yıllık faiz
      </p>

      <div className="mt-5 space-y-3 border-t border-slate-200 pt-4">
        <CalculationRow
          label="Brüt faiz"
          value={formatCurrency(offer.grossInterest)}
        />

        <CalculationRow
          label="Stopaj"
          value={formatCurrency(offer.withholdingTax)}
        />

        <CalculationRow
          label="Net faiz"
          value={formatCurrency(offer.netInterest)}
          strong
        />

        <CalculationRow
          label="Vade sonu"
          value={formatCurrency(offer.maturityAmount)}
        />
      </div>
    </div>
  );
}

type CalculationRowProps = {
  label: string;
  value: string;
  strong?: boolean;
};

function CalculationRow({
  label,
  value,
  strong = false,
}: CalculationRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span
        className={
          strong
            ? "text-sm font-bold text-slate-950"
            : "text-sm text-slate-600"
        }
      >
        {label}
      </span>

      <span
        className={
          strong
            ? "text-right text-base font-black text-cyan-700"
            : "text-right text-sm font-bold text-slate-900"
        }
      >
        {value}
      </span>
    </div>
  );
}