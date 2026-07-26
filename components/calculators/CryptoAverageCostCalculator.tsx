"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bitcoin,
  Calculator,
  Check,
  CircleDollarSign,
  Coins,
  Copy,
  Plus,
  RefreshCw,
  RotateCcw,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type PurchaseRow = {
  id: number;
  amount: string;
  price: string;
  commission: string;
};

type ParsedPurchase = {
  id: number;
  amount: number;
  price: number;
  commission: number;
  grossCost: number;
  totalCost: number;
};

const INITIAL_PURCHASES: PurchaseRow[] = [
  {
    id: 1,
    amount: "0,025",
    price: "2.420.000",
    commission: "75",
  },
  {
    id: 2,
    amount: "0,018",
    price: "2.180.000",
    commission: "58",
  },
];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const cryptoFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 8,
});

const percentFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function parseNumber(value: string): number {
  const cleaned = value.trim().replace(/\s/g, "");

  if (!cleaned) {
    return 0;
  }

  const hasComma = cleaned.includes(",");
  const hasDot = cleaned.includes(".");

  let normalized = cleaned;

  if (hasComma && hasDot) {
    normalized = cleaned.replace(/\./g, "").replace(",", ".");
  } else if (hasComma) {
    normalized = cleaned.replace(",", ".");
  } else if (hasDot) {
    const dotCount = (cleaned.match(/\./g) ?? []).length;

    if (dotCount > 1) {
      normalized = cleaned.replace(/\./g, "");
    } else {
      const [integerPart, decimalPart = ""] = cleaned.split(".");

      normalized =
        decimalPart.length === 3 && integerPart.length > 0
          ? `${integerPart}${decimalPart}`
          : cleaned;
    }
  }

  const parsedValue = Number(normalized);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function sanitizeNumericInput(value: string): string {
  return value.replace(/[^\d.,]/g, "");
}

function formatCurrency(value: number): string {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

function formatCrypto(value: number): string {
  return cryptoFormatter.format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number): string {
  return `%${percentFormatter.format(
    Math.abs(Number.isFinite(value) ? value : 0),
  )}`;
}

function createPurchaseRow(id: number): PurchaseRow {
  return {
    id,
    amount: "",
    price: "",
    commission: "0",
  };
}

export default function CryptoAverageCostCalculator() {
  const [purchases, setPurchases] =
    useState<PurchaseRow[]>(INITIAL_PURCHASES);
  const [assetSymbol, setAssetSymbol] = useState("BTC");
  const [currentPrice, setCurrentPrice] = useState("2.560.000");
  const [plannedAmount, setPlannedAmount] = useState("0,01");
  const [plannedPrice, setPlannedPrice] = useState("2.050.000");
  const [plannedCommission, setPlannedCommission] = useState("35");
  const [copied, setCopied] = useState(false);

  const calculations = useMemo(() => {
    const parsedPurchases: ParsedPurchase[] = purchases
      .map((purchase) => {
        const amount = Math.max(0, parseNumber(purchase.amount));
        const price = Math.max(0, parseNumber(purchase.price));
        const commission = Math.max(0, parseNumber(purchase.commission));
        const grossCost = amount * price;
        const totalCost = grossCost + commission;

        return {
          id: purchase.id,
          amount,
          price,
          commission,
          grossCost,
          totalCost,
        };
      })
      .filter(
        (purchase) =>
          purchase.amount > 0 ||
          purchase.price > 0 ||
          purchase.commission > 0,
      );

    const totalAmount = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.amount,
      0,
    );
    const grossInvestment = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.grossCost,
      0,
    );
    const totalCommission = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.commission,
      0,
    );
    const totalInvestment = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.totalCost,
      0,
    );
    const averageCost =
      totalAmount > 0 ? totalInvestment / totalAmount : 0;

    const parsedCurrentPrice = Math.max(0, parseNumber(currentPrice));
    const currentPortfolioValue = totalAmount * parsedCurrentPrice;
    const profitLoss = currentPortfolioValue - totalInvestment;
    const roiPercent =
      totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

    const parsedPlannedAmount = Math.max(0, parseNumber(plannedAmount));
    const parsedPlannedPrice = Math.max(0, parseNumber(plannedPrice));
    const parsedPlannedCommission = Math.max(
      0,
      parseNumber(plannedCommission),
    );
    const plannedGrossCost = parsedPlannedAmount * parsedPlannedPrice;
    const plannedTotalCost =
      plannedGrossCost + parsedPlannedCommission;

    const simulatedAmount = totalAmount + parsedPlannedAmount;
    const simulatedInvestment = totalInvestment + plannedTotalCost;
    const simulatedAverageCost =
      simulatedAmount > 0
        ? simulatedInvestment / simulatedAmount
        : 0;
    const averageCostChange =
      averageCost > 0
        ? ((simulatedAverageCost - averageCost) / averageCost) * 100
        : 0;
    const requiredRiseToBreakEven =
      parsedCurrentPrice > 0 && averageCost > parsedCurrentPrice
        ? ((averageCost - parsedCurrentPrice) / parsedCurrentPrice) * 100
        : 0;
    const newPurchasePortfolioShare =
      simulatedInvestment > 0
        ? (plannedTotalCost / simulatedInvestment) * 100
        : 0;

    return {
      parsedPurchases,
      totalAmount,
      grossInvestment,
      totalCommission,
      totalInvestment,
      averageCost,
      currentPrice: parsedCurrentPrice,
      currentPortfolioValue,
      profitLoss,
      roiPercent,
      plannedAmount: parsedPlannedAmount,
      plannedPrice: parsedPlannedPrice,
      plannedCommission: parsedPlannedCommission,
      plannedGrossCost,
      plannedTotalCost,
      simulatedAmount,
      simulatedInvestment,
      simulatedAverageCost,
      averageCostChange,
      requiredRiseToBreakEven,
      newPurchasePortfolioShare,
    };
  }, [
    purchases,
    currentPrice,
    plannedAmount,
    plannedCommission,
    plannedPrice,
  ]);

  const resultIsPositive = calculations.profitLoss >= 0;
  const averageFalls = calculations.averageCostChange <= 0;

  function updatePurchase(
    id: number,
    field: keyof Omit<PurchaseRow, "id">,
    value: string,
  ) {
    setPurchases((currentPurchases) =>
      currentPurchases.map((purchase) =>
        purchase.id === id
          ? {
              ...purchase,
              [field]: sanitizeNumericInput(value),
            }
          : purchase,
      ),
    );
  }

  function addPurchase() {
    setPurchases((currentPurchases) => {
      const nextId =
        currentPurchases.length > 0
          ? Math.max(...currentPurchases.map((purchase) => purchase.id)) +
            1
          : 1;

      return [...currentPurchases, createPurchaseRow(nextId)];
    });
  }

  function removePurchase(id: number) {
    setPurchases((currentPurchases) => {
      if (currentPurchases.length === 1) {
        return [createPurchaseRow(currentPurchases[0]?.id ?? 1)];
      }

      return currentPurchases.filter((purchase) => purchase.id !== id);
    });
  }

  function resetCalculator() {
    setPurchases(INITIAL_PURCHASES);
    setAssetSymbol("BTC");
    setCurrentPrice("2.560.000");
    setPlannedAmount("0,01");
    setPlannedPrice("2.050.000");
    setPlannedCommission("35");
    setCopied(false);
  }

  function applySimulation() {
    if (
      calculations.plannedAmount <= 0 ||
      calculations.plannedPrice <= 0
    ) {
      return;
    }

    setPurchases((currentPurchases) => {
      const nextId =
        currentPurchases.length > 0
          ? Math.max(...currentPurchases.map((purchase) => purchase.id)) +
            1
          : 1;

      return [
        ...currentPurchases,
        {
          id: nextId,
          amount: plannedAmount,
          price: plannedPrice,
          commission: plannedCommission || "0",
        },
      ];
    });

    setPlannedAmount("");
    setPlannedPrice("");
    setPlannedCommission("0");
  }

  async function copyResult() {
    const resultText = [
      `${assetSymbol || "Kripto"} Ortalama Maliyet Sonucu`,
      `Toplam miktar: ${formatCrypto(
        calculations.totalAmount,
      )} ${assetSymbol}`,
      `Toplam yatırım: ${formatCurrency(
        calculations.totalInvestment,
      )}`,
      `Ortalama maliyet: ${formatCurrency(
        calculations.averageCost,
      )}`,
      `Güncel portföy değeri: ${formatCurrency(
        calculations.currentPortfolioValue,
      )}`,
      `${resultIsPositive ? "Kâr" : "Zarar"}: ${formatCurrency(
        Math.abs(calculations.profitLoss),
      )} (${formatPercent(calculations.roiPercent)})`,
      `Yeni alım sonrası ortalama: ${formatCurrency(
        calculations.simulatedAverageCost,
      )}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(resultText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
      <div className="border-b border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 px-5 py-7 text-white sm:px-7 sm:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-orange-100 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Premium kripto aracı
            </span>

            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Kripto Ortalama Maliyet Hesaplama
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              BTC, ETH, SOL ve diğer kripto para alımlarınızı ekleyin;
              komisyon dahil ortalama maliyetinizi, portföy değerinizi,
              kâr-zararınızı ve yeni alım senaryonuzu tek ekranda görün.
            </p>
          </div>

          <button
            type="button"
            onClick={resetCalculator}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-2.5 text-sm font-extrabold text-white ring-1 ring-white/15 transition hover:bg-white/15"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Örnek verileri yenile
          </button>
        </div>
      </div>

      <div className="grid gap-0 xl:grid-cols-[minmax(0,1.14fr)_minmax(350px,0.86fr)]">
        <div className="border-b border-slate-200 p-5 sm:p-7 xl:border-b-0 xl:border-r">
          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                <Bitcoin className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-700">
                  Varlık bilgisi
                </p>
                <h3 className="mt-2 text-lg font-black text-orange-950">
                  Hangi kripto varlığı hesaplıyorsunuz?
                </h3>

                <label className="mt-4 block max-w-xs">
                  <span className="text-sm font-extrabold text-orange-950">
                    Coin sembolü
                  </span>
                  <input
                    value={assetSymbol}
                    onChange={(event) =>
                      setAssetSymbol(
                        event.target.value
                          .toUpperCase()
                          .replace(/[^A-Z0-9]/g, "")
                          .slice(0, 10),
                      )
                    }
                    placeholder="BTC"
                    className="mt-2 min-h-12 w-full rounded-2xl border border-orange-200 bg-white px-4 text-base font-black uppercase text-slate-950 outline-none transition focus:border-orange-600 focus:ring-4 focus:ring-orange-100"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-orange-700">
                1. Alım işlemleri
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Kripto alımlarınızı girin
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Her alış için coin miktarı, birim fiyat ve işlem
                komisyonunu ayrı satıra ekleyin.
              </p>
            </div>

            <button
              type="button"
              onClick={addPurchase}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-orange-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-orange-700"
            >
              <Plus className="h-4 w-4" aria-hidden="true" />
              Yeni alım ekle
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {purchases.map((purchase, index) => {
              const parsedPurchase =
                calculations.parsedPurchases.find(
                  (item) => item.id === purchase.id,
                ) ?? null;

              return (
                <div
                  key={purchase.id}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-200 hover:bg-orange-50/30 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-sm font-black text-orange-700">
                        {index + 1}
                      </span>

                      <div>
                        <p className="font-black text-slate-950">
                          {index + 1}. kripto alımı
                        </p>
                        <p className="text-xs font-semibold text-slate-500">
                          Toplam maliyet:{" "}
                          {formatCurrency(parsedPurchase?.totalCost ?? 0)}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => removePurchase(purchase.id)}
                      aria-label={`${index + 1}. alım satırını sil`}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-200 bg-white text-rose-600 transition hover:bg-rose-50"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    <InputField
                      label={`Miktar (${assetSymbol || "Coin"})`}
                      value={purchase.amount}
                      placeholder="Örn. 0,025"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "amount", value)
                      }
                    />

                    <InputField
                      label="Birim alış fiyatı"
                      value={purchase.price}
                      placeholder="Örn. 2.420.000"
                      suffix="TL"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "price", value)
                      }
                    />

                    <InputField
                      label="Komisyon"
                      value={purchase.commission}
                      placeholder="Örn. 75"
                      suffix="TL"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "commission", value)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-3xl border border-violet-200 bg-violet-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-violet-700">
                  2. Yeni alım simülasyonu
                </p>
                <h3 className="mt-2 text-lg font-black text-violet-950">
                  Yeni alım ortalama maliyeti nasıl değiştirir?
                </h3>
                <p className="mt-2 text-sm leading-6 text-violet-900">
                  Planladığınız alımın yeni ortalama maliyete ve toplam
                  portföy büyüklüğüne etkisini, mevcut listenizi
                  değiştirmeden inceleyin.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <InputField
                label={`Yeni miktar (${assetSymbol || "Coin"})`}
                value={plannedAmount}
                placeholder="Örn. 0,01"
                tone="violet"
                onChange={(value) =>
                  setPlannedAmount(sanitizeNumericInput(value))
                }
              />

              <InputField
                label="Yeni alış fiyatı"
                value={plannedPrice}
                placeholder="Örn. 2.050.000"
                suffix="TL"
                tone="violet"
                onChange={(value) =>
                  setPlannedPrice(sanitizeNumericInput(value))
                }
              />

              <InputField
                label="Komisyon"
                value={plannedCommission}
                placeholder="Örn. 35"
                suffix="TL"
                tone="violet"
                onChange={(value) =>
                  setPlannedCommission(sanitizeNumericInput(value))
                }
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-violet-200 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-violet-600">
                  Yeni alım toplamı
                </p>
                <p className="mt-1 text-xl font-black text-violet-950">
                  {formatCurrency(calculations.plannedTotalCost)}
                </p>
              </div>

              <button
                type="button"
                onClick={applySimulation}
                disabled={
                  calculations.plannedAmount <= 0 ||
                  calculations.plannedPrice <= 0
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-violet-700 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-violet-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                Alım listesine uygula
              </button>
            </div>
          </div>
        </div>

        <aside className="bg-slate-50 p-5 sm:p-7">
          <div className="sticky top-24">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                Hesaplama sonucu
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Kripto portföy özeti
              </h3>
            </div>

            <div className="mt-5 rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-800 p-6 text-white shadow-lg shadow-orange-600/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-orange-100">
                    Komisyon dahil ortalama maliyet
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-tight">
                    {formatCurrency(calculations.averageCost)}
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <Calculator className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-white transition-all duration-500"
                  style={{
                    width: `${Math.min(
                      100,
                      Math.max(
                        0,
                        calculations.currentPrice > 0
                          ? (calculations.currentPrice /
                              Math.max(calculations.averageCost, 0.01)) *
                              100
                          : 0,
                      ),
                    )}%`,
                  }}
                />
              </div>

              <div className="mt-3 flex items-center justify-between gap-4 text-xs font-bold text-orange-100">
                <span>
                  Güncel: {formatCurrency(calculations.currentPrice)}
                </span>
                <span>
                  Başa baş: {formatCurrency(calculations.averageCost)}
                </span>
              </div>
            </div>

            <label className="mt-5 block rounded-3xl border border-slate-200 bg-white p-5">
              <span className="flex items-center gap-2 text-sm font-extrabold text-slate-800">
                <BarChart3
                  className="h-4 w-4 text-orange-600"
                  aria-hidden="true"
                />
                Güncel {assetSymbol || "coin"} fiyatı
              </span>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Kâr, zarar ve ROI hesabı için güncel piyasa fiyatını girin.
              </p>

              <div className="relative mt-3">
                <input
                  value={currentPrice}
                  onChange={(event) =>
                    setCurrentPrice(
                      sanitizeNumericInput(event.target.value),
                    )
                  }
                  inputMode="decimal"
                  placeholder="Örn. 2.560.000"
                  className="min-h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 pr-12 text-lg font-black text-slate-950 outline-none transition focus:border-orange-600 focus:bg-white focus:ring-4 focus:ring-orange-100"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-black text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <ResultCard
                label={`Toplam ${assetSymbol || "coin"}`}
                value={formatCrypto(calculations.totalAmount)}
                icon={Coins}
              />
              <ResultCard
                label="Toplam yatırım"
                value={formatCurrency(calculations.totalInvestment)}
                icon={CircleDollarSign}
              />
              <ResultCard
                label="Toplam komisyon"
                value={formatCurrency(calculations.totalCommission)}
                icon={RefreshCw}
              />
              <ResultCard
                label="Portföy değeri"
                value={formatCurrency(
                  calculations.currentPortfolioValue,
                )}
                icon={WalletCards}
              />
            </div>

            <div
              className={`mt-5 rounded-3xl border p-5 ${
                resultIsPositive
                  ? "border-emerald-200 bg-emerald-50"
                  : "border-rose-200 bg-rose-50"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-sm font-extrabold ${
                      resultIsPositive
                        ? "text-emerald-800"
                        : "text-rose-800"
                    }`}
                  >
                    Güncel {resultIsPositive ? "kâr" : "zarar"}
                  </p>

                  <p
                    className={`mt-2 text-2xl font-black ${
                      resultIsPositive
                        ? "text-emerald-950"
                        : "text-rose-950"
                    }`}
                  >
                    {formatCurrency(Math.abs(calculations.profitLoss))}
                  </p>

                  <p
                    className={`mt-1 text-sm font-extrabold ${
                      resultIsPositive
                        ? "text-emerald-700"
                        : "text-rose-700"
                    }`}
                  >
                    ROI {formatPercent(calculations.roiPercent)}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    resultIsPositive
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-rose-100 text-rose-700"
                  }`}
                >
                  {resultIsPositive ? (
                    <TrendingUp className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <TrendingDown className="h-6 w-6" aria-hidden="true" />
                  )}
                </div>
              </div>

              {!resultIsPositive &&
                calculations.requiredRiseToBreakEven > 0 && (
                  <p className="mt-4 rounded-2xl bg-white/70 px-4 py-3 text-xs font-bold leading-5 text-rose-900">
                    Güncel fiyatın başa baş seviyesine ulaşması için yaklaşık{" "}
                    {formatPercent(
                      calculations.requiredRiseToBreakEven,
                    )}{" "}
                    yükselmesi gerekir.
                  </p>
                )}
            </div>

            <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-violet-800">
                    Yeni alım sonrası ortalama
                  </p>

                  <p className="mt-2 text-2xl font-black text-violet-950">
                    {formatCurrency(calculations.simulatedAverageCost)}
                  </p>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    averageFalls
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {averageFalls ? (
                    <ArrowDownRight className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <ArrowUpRight className="h-6 w-6" aria-hidden="true" />
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
                <MiniResult
                  label="Yeni toplam miktar"
                  value={`${formatCrypto(
                    calculations.simulatedAmount,
                  )} ${assetSymbol}`}
                />
                <MiniResult
                  label="Ortalama değişimi"
                  value={`${
                    calculations.averageCostChange > 0 ? "+" : "-"
                  }${formatPercent(calculations.averageCostChange)}`}
                />
                <MiniResult
                  label="Yeni toplam yatırım"
                  value={formatCurrency(
                    calculations.simulatedInvestment,
                  )}
                />
                <MiniResult
                  label="Yeni alımın portföy payı"
                  value={formatPercent(
                    calculations.newPurchasePortfolioShare,
                  )}
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <button
                type="button"
                onClick={copyResult}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800"
              >
                {copied ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Copy className="h-4 w-4" aria-hidden="true" />
                )}
                {copied ? "Sonuç kopyalandı" : "Sonucu kopyala"}
              </button>

              <button
                type="button"
                onClick={resetCalculator}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-800 transition hover:bg-slate-100"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Sıfırla
              </button>
            </div>

            <p className="mt-5 text-xs leading-5 text-slate-500">
              Sonuçlar yalnızca girdiğiniz miktar, fiyat ve komisyon
              bilgilerine göre hesaplanır. Ağ ücretleri, kur dönüşümü,
              spread, vergi ve platforma özel kesintiler ayrıca
              değerlendirilmelidir.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

type InputFieldProps = {
  label: string;
  value: string;
  placeholder: string;
  suffix?: string;
  tone?: "default" | "violet";
  onChange: (value: string) => void;
};

function InputField({
  label,
  value,
  placeholder,
  suffix,
  tone = "default",
  onChange,
}: InputFieldProps) {
  const labelClass =
    tone === "violet" ? "text-violet-950" : "text-slate-700";
  const inputClass =
    tone === "violet"
      ? "border-violet-200 focus:border-violet-600 focus:ring-violet-100"
      : "border-slate-300 focus:border-orange-600 focus:ring-orange-100";

  return (
    <label className="block">
      <span className={`text-sm font-extrabold ${labelClass}`}>
        {label}
      </span>

      <div className="relative mt-2">
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          inputMode="decimal"
          placeholder={placeholder}
          className={`min-h-12 w-full rounded-2xl border bg-white px-4 ${
            suffix ? "pr-12" : ""
          } text-base font-bold text-slate-950 outline-none transition placeholder:font-medium placeholder:text-slate-400 focus:ring-4 ${inputClass}`}
        />

        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-black text-slate-500">
            {suffix}
          </span>
        ) : null}
      </div>
    </label>
  );
}

type ResultCardProps = {
  label: string;
  value: string;
  icon: typeof Coins;
};

function ResultCard({ label, value, icon: Icon }: ResultCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>

      <p className="mt-4 text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">
        {label}
      </p>

      <p className="mt-2 break-words text-lg font-black text-slate-950">
        {value}
      </p>
    </div>
  );
}

type MiniResultProps = {
  label: string;
  value: string;
};

function MiniResult({ label, value }: MiniResultProps) {
  return (
    <div className="rounded-2xl bg-white p-4 ring-1 ring-violet-200">
      <p className="text-xs font-bold leading-5 text-violet-700">
        {label}
      </p>
      <p className="mt-1 break-words font-black text-violet-950">
        {value}
      </p>
    </div>
  );
}