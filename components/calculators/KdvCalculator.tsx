"use client";

import { useMemo, useState } from "react";

import {
  ArrowDown,
  ArrowRight,
  Calculator,
  Check,
  Clipboard,
  Info,
  Percent,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

type CalculationMode = "excluded" | "included";

const VAT_RATES = [1, 10, 20] as const;

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function parseTurkishNumber(value: string): number {
  const sanitizedValue = value
    .replace(/\s/g, "")
    .replace(/[₺TLtl]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(sanitizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatInputValue(value: string): string {
  const numericValue = value.replace(/[^\d,]/g, "");
  const [integerPart = "", decimalPart] = numericValue.split(",");

  const normalizedInteger = integerPart.replace(/^0+(?=\d)/, "");
  const formattedInteger = normalizedInteger
    ? Number(normalizedInteger).toLocaleString("tr-TR")
    : "";

  if (decimalPart !== undefined) {
    return `${formattedInteger},${decimalPart.slice(0, 2)}`;
  }

  return formattedInteger;
}

export default function KdvCalculator() {
  const [amount, setAmount] = useState("10.000");
  const [mode, setMode] = useState<CalculationMode>("excluded");
  const [selectedRate, setSelectedRate] = useState<number>(20);
  const [customRate, setCustomRate] = useState("");
  const [isCustomRate, setIsCustomRate] = useState(false);
  const [copied, setCopied] = useState(false);

  const rate = useMemo(() => {
    if (!isCustomRate) {
      return selectedRate;
    }

    const parsedCustomRate = parseTurkishNumber(customRate);

    return Math.min(Math.max(parsedCustomRate, 0), 100);
  }, [customRate, isCustomRate, selectedRate]);

  const calculation = useMemo(() => {
    const numericAmount = Math.max(parseTurkishNumber(amount), 0);
    const rateMultiplier = rate / 100;

    if (numericAmount <= 0) {
      return {
        inputAmount: 0,
        excludedAmount: 0,
        vatAmount: 0,
        includedAmount: 0,
      };
    }

    if (mode === "excluded") {
      const vatAmount = numericAmount * rateMultiplier;
      const includedAmount = numericAmount + vatAmount;

      return {
        inputAmount: numericAmount,
        excludedAmount: numericAmount,
        vatAmount,
        includedAmount,
      };
    }

    const excludedAmount =
      rateMultiplier > 0
        ? numericAmount / (1 + rateMultiplier)
        : numericAmount;

    const vatAmount = numericAmount - excludedAmount;

    return {
      inputAmount: numericAmount,
      excludedAmount,
      vatAmount,
      includedAmount: numericAmount,
    };
  }, [amount, mode, rate]);

  const hasValidAmount = calculation.inputAmount > 0;

  function handleAmountChange(value: string) {
    setAmount(formatInputValue(value));
    setCopied(false);
  }

  function handlePresetRate(rateValue: number) {
    setSelectedRate(rateValue);
    setIsCustomRate(false);
    setCustomRate("");
    setCopied(false);
  }

  function handleCustomRateChange(value: string) {
    const cleanedValue = value.replace(/[^\d,]/g, "");
    const [integerPart = "", decimalPart] = cleanedValue.split(",");

    const limitedInteger = integerPart.slice(0, 3);
    const limitedDecimal =
      decimalPart !== undefined ? decimalPart.slice(0, 2) : undefined;

    const formattedValue =
      limitedDecimal !== undefined
        ? `${limitedInteger},${limitedDecimal}`
        : limitedInteger;

    setCustomRate(formattedValue);
    setIsCustomRate(true);
    setCopied(false);
  }

  function handleReset() {
    setAmount("10.000");
    setMode("excluded");
    setSelectedRate(20);
    setCustomRate("");
    setIsCustomRate(false);
    setCopied(false);
  }

  async function handleCopy() {
    if (!hasValidAmount) {
      return;
    }

    const resultText = [
      "HesapRehberi KDV Hesaplama Sonucu",
      `Hesaplama türü: ${
        mode === "excluded" ? "KDV hariç tutardan" : "KDV dahil tutardan"
      }`,
      `KDV oranı: %${numberFormatter.format(rate)}`,
      `KDV hariç tutar: ${currencyFormatter.format(
        calculation.excludedAmount,
      )}`,
      `KDV tutarı: ${currencyFormatter.format(calculation.vatAmount)}`,
      `KDV dahil toplam: ${currencyFormatter.format(
        calculation.includedAmount,
      )}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(resultText);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      aria-labelledby="kdv-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 px-6 py-7 text-white md:px-9 md:py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <Calculator className="h-6 w-6" aria-hidden="true" />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Canlı hesaplama
              </div>

              <h2
                id="kdv-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                KDV Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Tutarı ve KDV oranını girin. Sonuçlar siz yazarken otomatik
                olarak hesaplansın.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            Ücretsiz ve hızlı
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-r lg:border-b-0">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="kdv-amount"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                İşlem tutarı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Türk lirası
              </span>
            </div>

            <div className="relative">
              <input
                id="kdv-amount"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={amount}
                onChange={(event) => handleAmountChange(event.target.value)}
                placeholder="Örneğin 10.000"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center text-lg font-bold text-slate-500">
                TL
              </span>
            </div>

            {!hasValidAmount && (
              <p className="mt-2 text-sm font-medium text-rose-600">
                Hesaplama için sıfırdan büyük bir tutar girin.
              </p>
            )}
          </div>

          <fieldset className="mt-8">
            <legend className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <ReceiptText
                className="h-4 w-4 text-blue-700"
                aria-hidden="true"
              />
              Hesaplama türü
            </legend>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                aria-pressed={mode === "excluded"}
                onClick={() => {
                  setMode("excluded");
                  setCopied(false);
                }}
                className={`rounded-2xl border p-4 text-left transition ${
                  mode === "excluded"
                    ? "border-blue-700 bg-blue-50 shadow-sm ring-2 ring-blue-100"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      mode === "excluded"
                        ? "bg-blue-700 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>

                  {mode === "excluded" && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  )}
                </span>

                <span className="mt-4 block font-bold text-slate-900">
                  KDV hariçten hesapla
                </span>

                <span className="mt-1 block text-sm leading-6 text-slate-500">
                  Vergisiz fiyata KDV ekleyerek toplam tutarı bulur.
                </span>
              </button>

              <button
                type="button"
                aria-pressed={mode === "included"}
                onClick={() => {
                  setMode("included");
                  setCopied(false);
                }}
                className={`rounded-2xl border p-4 text-left transition ${
                  mode === "included"
                    ? "border-blue-700 bg-blue-50 shadow-sm ring-2 ring-blue-100"
                    : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      mode === "included"
                        ? "bg-blue-700 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </span>

                  {mode === "included" && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-700 text-white">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                  )}
                </span>

                <span className="mt-4 block font-bold text-slate-900">
                  KDV dahilden hesapla
                </span>

                <span className="mt-1 block text-sm leading-6 text-slate-500">
                  Vergili toplamın içindeki KDV ve net tutarı bulur.
                </span>
              </button>
            </div>
          </fieldset>

          <fieldset className="mt-8">
            <legend className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Percent
                className="h-4 w-4 text-blue-700"
                aria-hidden="true"
              />
              KDV oranı
            </legend>

            <div className="mt-3 grid grid-cols-4 gap-2">
              {VAT_RATES.map((rateValue) => {
                const isSelected =
                  !isCustomRate && selectedRate === rateValue;

                return (
                  <button
                    key={rateValue}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => handlePresetRate(rateValue)}
                    className={`h-12 rounded-xl border text-sm font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    %{rateValue}
                  </button>
                );
              })}

              <button
                type="button"
                aria-pressed={isCustomRate}
                onClick={() => {
                  setIsCustomRate(true);
                  setCopied(false);
                }}
                className={`h-12 rounded-xl border text-sm font-bold transition ${
                  isCustomRate
                    ? "border-blue-700 bg-blue-700 text-white shadow-md shadow-blue-700/20"
                    : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                }`}
              >
                Özel
              </button>
            </div>

            {isCustomRate && (
              <div className="mt-3">
                <label
                  htmlFor="custom-kdv-rate"
                  className="sr-only"
                >
                  Özel KDV oranı
                </label>

                <div className="relative">
                  <input
                    id="custom-kdv-rate"
                    type="text"
                    inputMode="decimal"
                    autoFocus
                    value={customRate}
                    onChange={(event) =>
                      handleCustomRateChange(event.target.value)
                    }
                    placeholder="Örneğin 15"
                    className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 pr-12 font-semibold text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />

                  <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center font-bold text-slate-500">
                    %
                  </span>
                </div>
              </div>
            )}

            <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-500">
              <Info
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-600"
                aria-hidden="true"
              />
              Hazır oranlardan birini seçebilir veya ihtiyacınıza göre özel
              oran girebilirsiniz.
            </p>
          </fieldset>

          <button
            type="button"
            onClick={handleReset}
            className="mt-8 inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <RefreshCcw className="h-4 w-4" aria-hidden="true" />
            Hesaplamayı sıfırla
          </button>
        </div>

        <div
          aria-live="polite"
          className="relative overflow-hidden bg-white p-6 md:p-9"
        >
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl"
          />

          <div className="relative">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">
                  Hesaplama sonucu
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  KDV dahil toplam tutar
                </h3>
              </div>

              <div className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                %{numberFormatter.format(rate)} KDV
              </div>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <ReceiptText className="h-4 w-4" aria-hidden="true" />
                Ödenecek toplam
              </div>

              <p className="mt-4 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(calculation.includedAmount)}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <Check
                  className="h-4 w-4 text-emerald-300"
                  aria-hidden="true"
                />
                Sonuç, girdiğiniz tutara göre anında güncellenir.
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-slate-500">
                    KDV hariç tutar
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <WalletCards className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 break-words text-xl font-extrabold text-slate-950 md:text-2xl">
                  {currencyFormatter.format(calculation.excludedAmount)}
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-emerald-800">
                    KDV tutarı
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Percent className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-4 break-words text-xl font-extrabold text-emerald-950 md:text-2xl">
                  {currencyFormatter.format(calculation.vatAmount)}
                </p>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <h4 className="font-bold text-slate-900">
                  Hesaplama özeti
                </h4>
              </div>

              <dl className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Girilen tutar
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(calculation.inputAmount)}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Hesaplama türü
                  </dt>
                  <dd className="text-right text-sm font-bold text-slate-900">
                    {mode === "excluded"
                      ? "KDV hariçten"
                      : "KDV dahilden"}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Uygulanan oran
                  </dt>
                  <dd className="text-right font-bold text-slate-900">
                    %{numberFormatter.format(rate)}
                  </dd>
                </div>
              </dl>
            </div>

            <button
              type="button"
              disabled={!hasValidAmount}
              onClick={handleCopy}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" aria-hidden="true" />
                  Sonuç kopyalandı
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" aria-hidden="true" />
                  Sonucu kopyala
                </>
              )}
            </button>

            <p className="mt-5 text-center text-xs leading-5 text-slate-500">
              Sonuçlar bilgilendirme amaçlıdır. Resmî ve vergisel işlemlerde
              güncel mevzuat ile uzman görüşü esas alınmalıdır.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}