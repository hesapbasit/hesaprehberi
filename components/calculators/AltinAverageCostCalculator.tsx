"use client";

import { useMemo, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Calculator,
  Check,
  CircleDollarSign,
  Coins,
  Copy,
  Gem,
  Plus,
  RotateCcw,
  Scale,
  Sparkles,
  Target,
  Trash2,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";

type GoldType =
  | "Gram Altın"
  | "Çeyrek Altın"
  | "Yarım Altın"
  | "Tam Altın"
  | "Cumhuriyet Altını"
  | "Özel";

type PurchaseRow = {
  id: number;
  quantity: string;
  unitPrice: string;
  extraCost: string;
};

type ParsedPurchase = {
  id: number;
  quantity: number;
  unitPrice: number;
  extraCost: number;
  grossCost: number;
  totalCost: number;
};

const INITIAL_PURCHASES: PurchaseRow[] = [
  {
    id: 1,
    quantity: "10",
    unitPrice: "2.425",
    extraCost: "50",
  },
  {
    id: 2,
    quantity: "8",
    unitPrice: "2.310",
    extraCost: "40",
  },
];

const goldTypeOptions: GoldType[] = [
  "Gram Altın",
  "Çeyrek Altın",
  "Yarım Altın",
  "Tam Altın",
  "Cumhuriyet Altını",
  "Özel",
];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const quantityFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 4,
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
    const parts = cleaned.split(".");
    if (parts.length > 2) {
      normalized = cleaned.replace(/\./g, "");
    } else {
      const [integerPart, decimalPart = ""] = parts;
      normalized =
        decimalPart.length === 3 && integerPart.length > 0
          ? `${integerPart}${decimalPart}`
          : cleaned;
    }
  }

  const parsed = Number(normalized);
  return Number.isFinite(parsed) ? parsed : 0;
}

function sanitizeNumericInput(value: string): string {
  return value.replace(/[^\d.,]/g, "");
}

function formatCurrency(value: number): string {
  return currencyFormatter.format(Number.isFinite(value) ? value : 0);
}

function formatQuantity(value: number): string {
  return quantityFormatter.format(Number.isFinite(value) ? value : 0);
}

function formatPercent(value: number): string {
  return `%${percentFormatter.format(
    Math.abs(Number.isFinite(value) ? value : 0),
  )}`;
}

function createPurchaseRow(id: number): PurchaseRow {
  return {
    id,
    quantity: "",
    unitPrice: "",
    extraCost: "0",
  };
}

export default function AltinAverageCostCalculator() {
  const [goldType, setGoldType] = useState<GoldType>("Gram Altın");
  const [customGoldName, setCustomGoldName] = useState("");
  const [unitLabel, setUnitLabel] = useState("gram");
  const [purchases, setPurchases] = useState<PurchaseRow[]>(INITIAL_PURCHASES);
  const [currentPrice, setCurrentPrice] = useState("2.510");
  const [plannedQuantity, setPlannedQuantity] = useState("5");
  const [plannedPrice, setPlannedPrice] = useState("2.250");
  const [plannedExtraCost, setPlannedExtraCost] = useState("25");
  const [copied, setCopied] = useState(false);

  const displayGoldName =
    goldType === "Özel"
      ? customGoldName.trim() || "Özel Altın"
      : goldType;

  const displayUnit =
    goldType === "Gram Altın"
      ? "gram"
      : goldType === "Özel"
        ? unitLabel.trim() || "adet"
        : "adet";

  const calculations = useMemo(() => {
    const parsedPurchases: ParsedPurchase[] = purchases
      .map((purchase) => {
        const quantity = Math.max(0, parseNumber(purchase.quantity));
        const unitPrice = Math.max(0, parseNumber(purchase.unitPrice));
        const extraCost = Math.max(0, parseNumber(purchase.extraCost));
        const grossCost = quantity * unitPrice;
        const totalCost = grossCost + extraCost;

        return {
          id: purchase.id,
          quantity,
          unitPrice,
          extraCost,
          grossCost,
          totalCost,
        };
      })
      .filter(
        (purchase) =>
          purchase.quantity > 0 ||
          purchase.unitPrice > 0 ||
          purchase.extraCost > 0,
      );

    const totalQuantity = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.quantity,
      0,
    );
    const grossInvestment = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.grossCost,
      0,
    );
    const totalExtraCost = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.extraCost,
      0,
    );
    const totalInvestment = parsedPurchases.reduce(
      (sum, purchase) => sum + purchase.totalCost,
      0,
    );
    const averageCost =
      totalQuantity > 0 ? totalInvestment / totalQuantity : 0;

    const parsedCurrentPrice = Math.max(0, parseNumber(currentPrice));
    const currentPortfolioValue = totalQuantity * parsedCurrentPrice;
    const profitLoss = currentPortfolioValue - totalInvestment;
    const roiPercent =
      totalInvestment > 0 ? (profitLoss / totalInvestment) * 100 : 0;

    const parsedPlannedQuantity = Math.max(
      0,
      parseNumber(plannedQuantity),
    );
    const parsedPlannedPrice = Math.max(0, parseNumber(plannedPrice));
    const parsedPlannedExtraCost = Math.max(
      0,
      parseNumber(plannedExtraCost),
    );
    const plannedGrossCost =
      parsedPlannedQuantity * parsedPlannedPrice;
    const plannedTotalCost =
      plannedGrossCost + parsedPlannedExtraCost;

    const simulatedQuantity = totalQuantity + parsedPlannedQuantity;
    const simulatedInvestment = totalInvestment + plannedTotalCost;
    const simulatedAverageCost =
      simulatedQuantity > 0
        ? simulatedInvestment / simulatedQuantity
        : 0;
    const averageCostChange =
      averageCost > 0
        ? ((simulatedAverageCost - averageCost) / averageCost) * 100
        : 0;
    const requiredRiseToBreakEven =
      parsedCurrentPrice > 0 && averageCost > parsedCurrentPrice
        ? ((averageCost - parsedCurrentPrice) / parsedCurrentPrice) * 100
        : 0;
    const plannedPurchaseShare =
      simulatedInvestment > 0
        ? (plannedTotalCost / simulatedInvestment) * 100
        : 0;

    return {
      parsedPurchases,
      totalQuantity,
      grossInvestment,
      totalExtraCost,
      totalInvestment,
      averageCost,
      currentPrice: parsedCurrentPrice,
      currentPortfolioValue,
      profitLoss,
      roiPercent,
      plannedQuantity: parsedPlannedQuantity,
      plannedPrice: parsedPlannedPrice,
      plannedExtraCost: parsedPlannedExtraCost,
      plannedGrossCost,
      plannedTotalCost,
      simulatedQuantity,
      simulatedInvestment,
      simulatedAverageCost,
      averageCostChange,
      requiredRiseToBreakEven,
      plannedPurchaseShare,
    };
  }, [
    purchases,
    currentPrice,
    plannedQuantity,
    plannedPrice,
    plannedExtraCost,
  ]);

  const resultIsPositive = calculations.profitLoss >= 0;
  const averageFalls = calculations.averageCostChange <= 0;

  function updatePurchase(
    id: number,
    field: keyof Omit<PurchaseRow, "id">,
    value: string,
  ) {
    setPurchases((current) =>
      current.map((purchase) =>
        purchase.id === id
          ? { ...purchase, [field]: sanitizeNumericInput(value) }
          : purchase,
      ),
    );
  }

  function addPurchase() {
    setPurchases((current) => {
      const nextId =
        current.length > 0
          ? Math.max(...current.map((purchase) => purchase.id)) + 1
          : 1;

      return [...current, createPurchaseRow(nextId)];
    });
  }

  function removePurchase(id: number) {
    setPurchases((current) => {
      if (current.length === 1) {
        return [createPurchaseRow(current[0]?.id ?? 1)];
      }

      return current.filter((purchase) => purchase.id !== id);
    });
  }

  function applySimulation() {
    if (
      calculations.plannedQuantity <= 0 ||
      calculations.plannedPrice <= 0
    ) {
      return;
    }

    setPurchases((current) => {
      const nextId =
        current.length > 0
          ? Math.max(...current.map((purchase) => purchase.id)) + 1
          : 1;

      return [
        ...current,
        {
          id: nextId,
          quantity: plannedQuantity,
          unitPrice: plannedPrice,
          extraCost: plannedExtraCost || "0",
        },
      ];
    });

    setPlannedQuantity("");
    setPlannedPrice("");
    setPlannedExtraCost("0");
  }

  function resetCalculator() {
    setGoldType("Gram Altın");
    setCustomGoldName("");
    setUnitLabel("gram");
    setPurchases(INITIAL_PURCHASES);
    setCurrentPrice("2.510");
    setPlannedQuantity("5");
    setPlannedPrice("2.250");
    setPlannedExtraCost("25");
    setCopied(false);
  }

  async function copyResult() {
    const resultText = [
      `${displayGoldName} Ortalama Maliyet Sonucu`,
      `Toplam miktar: ${formatQuantity(
        calculations.totalQuantity,
      )} ${displayUnit}`,
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
      <div className="border-b border-slate-200 bg-gradient-to-br from-amber-950 via-yellow-900 to-slate-950 px-5 py-7 text-white sm:px-7 sm:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold uppercase tracking-[0.14em] text-amber-100 ring-1 ring-white/10">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Premium altın aracı
            </span>

            <h2 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
              Altın Ortalama Maliyet Hesaplama
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-amber-100/80 sm:text-base">
              Gram, çeyrek, yarım, tam veya Cumhuriyet altını alımlarınızı
              ekleyin; masraflar dahil ortalama maliyetinizi, portföy
              değerinizi ve yeni alım senaryonuzu tek ekranda görün.
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
          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                <Gem className="h-5 w-5" aria-hidden="true" />
              </div>

              <div className="flex-1">
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700">
                  Altın türü
                </p>
                <h3 className="mt-2 text-lg font-black text-amber-950">
                  Hangi altın türünü hesaplıyorsunuz?
                </h3>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <label>
                    <span className="text-sm font-extrabold text-amber-950">
                      Altın türü
                    </span>
                    <select
                      value={goldType}
                      onChange={(event) =>
                        setGoldType(event.target.value as GoldType)
                      }
                      className="mt-2 min-h-12 w-full rounded-2xl border border-amber-200 bg-white px-4 text-sm font-black text-slate-950 outline-none transition focus:border-amber-600 focus:ring-4 focus:ring-amber-100"
                    >
                      {goldTypeOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>

                  {goldType === "Özel" ? (
                    <label>
                      <span className="text-sm font-extrabold text-amber-950">
                        Özel ad
                      </span>
                      <input
                        value={customGoldName}
                        onChange={(event) =>
                          setCustomGoldName(event.target.value.slice(0, 30))
                        }
                        placeholder="Örn. 22 Ayar Bilezik"
                        className="mt-2 min-h-12 w-full rounded-2xl border border-amber-200 bg-white px-4 text-sm font-black text-slate-950 outline-none transition focus:border-amber-600 focus:ring-4 focus:ring-amber-100"
                      />
                    </label>
                  ) : (
                    <label>
                      <span className="text-sm font-extrabold text-amber-950">
                        Hesaplama birimi
                      </span>
                      <input
                        value={displayUnit}
                        readOnly
                        className="mt-2 min-h-12 w-full rounded-2xl border border-amber-200 bg-amber-100/60 px-4 text-sm font-black text-amber-950 outline-none"
                      />
                    </label>
                  )}
                </div>

                {goldType === "Özel" ? (
                  <label className="mt-3 block max-w-xs">
                    <span className="text-sm font-extrabold text-amber-950">
                      Birim adı
                    </span>
                    <input
                      value={unitLabel}
                      onChange={(event) =>
                        setUnitLabel(event.target.value.slice(0, 15))
                      }
                      placeholder="Örn. gram veya adet"
                      className="mt-2 min-h-12 w-full rounded-2xl border border-amber-200 bg-white px-4 text-sm font-black text-slate-950 outline-none transition focus:border-amber-600 focus:ring-4 focus:ring-amber-100"
                    />
                  </label>
                ) : null}
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700">
                1. Alım işlemleri
              </p>
              <h3 className="mt-2 text-xl font-black text-slate-950">
                Altın alımlarınızı girin
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Her alış için miktar, birim alış fiyatı ve kuyumcu veya
                işlem masrafını ayrı satıra ekleyin.
              </p>
            </div>

            <button
              type="button"
              onClick={addPurchase}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-amber-600 px-4 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-amber-600/20 transition hover:-translate-y-0.5 hover:bg-amber-700"
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
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:border-amber-200 hover:bg-amber-50/30 sm:p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-sm font-black text-amber-700">
                        {index + 1}
                      </span>

                      <div>
                        <p className="font-black text-slate-950">
                          {index + 1}. altın alımı
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
                      label={`Miktar (${displayUnit})`}
                      value={purchase.quantity}
                      placeholder="Örn. 10"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "quantity", value)
                      }
                    />

                    <InputField
                      label="Birim alış fiyatı"
                      value={purchase.unitPrice}
                      placeholder="Örn. 2.425"
                      suffix="TL"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "unitPrice", value)
                      }
                    />

                    <InputField
                      label="Masraf / komisyon"
                      value={purchase.extraCost}
                      placeholder="Örn. 50"
                      suffix="TL"
                      onChange={(value) =>
                        updatePurchase(purchase.id, "extraCost", value)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-7 rounded-3xl border border-yellow-200 bg-yellow-50 p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-100 text-yellow-700">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-yellow-700">
                  2. Yeni alım simülasyonu
                </p>
                <h3 className="mt-2 text-lg font-black text-yellow-950">
                  Yeni alım ortalama maliyeti nasıl değiştirir?
                </h3>
                <p className="mt-2 text-sm leading-6 text-yellow-900">
                  Planladığınız alımın ortalama maliyete ve toplam
                  portföy büyüklüğüne etkisini mevcut listenizi
                  değiştirmeden inceleyin.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <InputField
                label={`Yeni miktar (${displayUnit})`}
                value={plannedQuantity}
                placeholder="Örn. 5"
                tone="yellow"
                onChange={(value) =>
                  setPlannedQuantity(sanitizeNumericInput(value))
                }
              />

              <InputField
                label="Yeni alış fiyatı"
                value={plannedPrice}
                placeholder="Örn. 2.250"
                suffix="TL"
                tone="yellow"
                onChange={(value) =>
                  setPlannedPrice(sanitizeNumericInput(value))
                }
              />

              <InputField
                label="Masraf / komisyon"
                value={plannedExtraCost}
                placeholder="Örn. 25"
                suffix="TL"
                tone="yellow"
                onChange={(value) =>
                  setPlannedExtraCost(sanitizeNumericInput(value))
                }
              />
            </div>

            <div className="mt-5 flex flex-col gap-3 rounded-2xl bg-white p-4 ring-1 ring-yellow-200 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.13em] text-yellow-700">
                  Yeni alım toplamı
                </p>
                <p className="mt-1 text-xl font-black text-yellow-950">
                  {formatCurrency(calculations.plannedTotalCost)}
                </p>
              </div>

              <button
                type="button"
                onClick={applySimulation}
                disabled={
                  calculations.plannedQuantity <= 0 ||
                  calculations.plannedPrice <= 0
                }
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-yellow-700 px-4 py-2.5 text-sm font-extrabold text-white transition hover:bg-yellow-800 disabled:cursor-not-allowed disabled:opacity-50"
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
                Altın portföy özeti
              </h3>
            </div>

            <div className="mt-5 rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-700 p-6 text-slate-950 shadow-lg shadow-amber-600/20">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-amber-950/80">
                    Masraflar dahil ortalama maliyet
                  </p>
                  <p className="mt-2 text-3xl font-black tracking-tight">
                    {formatCurrency(calculations.averageCost)}
                  </p>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30">
                  <Calculator className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/25">
                <div
                  className="h-full rounded-full bg-slate-950 transition-all duration-500"
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

              <div className="mt-3 flex items-center justify-between gap-4 text-xs font-bold text-amber-950/80">
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
                <Scale
                  className="h-4 w-4 text-amber-600"
                  aria-hidden="true"
                />
                Güncel {displayGoldName} fiyatı
              </span>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                Kâr, zarar ve ROI hesabı için güncel birim satış değerini girin.
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
                  placeholder="Örn. 2.510"
                  className="min-h-12 w-full rounded-2xl border border-slate-300 bg-slate-50 px-4 pr-12 text-lg font-black text-slate-950 outline-none transition focus:border-amber-600 focus:bg-white focus:ring-4 focus:ring-amber-100"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-black text-slate-500">
                  TL
                </span>
              </div>
            </label>

            <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
              <ResultCard
                label={`Toplam ${displayUnit}`}
                value={formatQuantity(calculations.totalQuantity)}
                icon={Coins}
              />
              <ResultCard
                label="Toplam yatırım"
                value={formatCurrency(calculations.totalInvestment)}
                icon={CircleDollarSign}
              />
              <ResultCard
                label="Toplam masraf"
                value={formatCurrency(calculations.totalExtraCost)}
                icon={Scale}
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

            <div className="mt-5 rounded-3xl border border-yellow-200 bg-yellow-50 p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold text-yellow-800">
                    Yeni alım sonrası ortalama
                  </p>

                  <p className="mt-2 text-2xl font-black text-yellow-950">
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
                  value={`${formatQuantity(
                    calculations.simulatedQuantity,
                  )} ${displayUnit}`}
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
                    calculations.plannedPurchaseShare,
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
              Sonuçlar yalnızca girdiğiniz miktar, fiyat ve masraf bilgilerine
              göre hesaplanır. Kuyumcu alış-satış makası, ayar farkı, işçilik,
              banka kesintileri ve vergi gibi unsurlar ayrıca değerlendirilmelidir.
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
  tone?: "default" | "yellow";
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
    tone === "yellow" ? "text-yellow-950" : "text-slate-700";
  const inputClass =
    tone === "yellow"
      ? "border-yellow-200 focus:border-yellow-600 focus:ring-yellow-100"
      : "border-slate-300 focus:border-amber-600 focus:ring-amber-100";

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
    <div className="rounded-2xl bg-white p-4 ring-1 ring-yellow-200">
      <p className="text-xs font-bold leading-5 text-yellow-700">
        {label}
      </p>
      <p className="mt-1 break-words font-black text-yellow-950">
        {value}
      </p>
    </div>
  );
}