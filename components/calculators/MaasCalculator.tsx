"use client";

import {
  BadgePercent,
  Banknote,
  BriefcaseBusiness,
  Check,
  Clipboard,
  Coins,
  Info,
  Percent,
  ReceiptText,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

const SOCIAL_SECURITY_RATE = 14;
const UNEMPLOYMENT_RATE = 1;
const STAMP_TAX_RATE = 0.759;

const quickSalaryAmounts = [
  30_000,
  50_000,
  75_000,
  100_000,
];

const incomeTaxRates = [15, 20, 27, 35, 40];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const percentageFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function parseNumber(value: string): number {
  const normalizedValue = value
    .trim()
    .replace(/\s/g, "")
    .replace(/[₺%]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsedValue = Number(normalizedValue);

  return Number.isFinite(parsedValue) ? parsedValue : 0;
}

function formatInputValue(
  value: string,
  maximumFractionDigits = 2,
): string {
  const cleanedValue = value.replace(/[^\d,]/g, "");
  const firstCommaIndex = cleanedValue.indexOf(",");

  const integerPart =
    firstCommaIndex === -1
      ? cleanedValue
      : cleanedValue.slice(0, firstCommaIndex);

  const decimalPart =
    firstCommaIndex === -1
      ? ""
      : cleanedValue
          .slice(firstCommaIndex + 1)
          .replace(/,/g, "")
          .slice(0, maximumFractionDigits);

  const normalizedInteger = integerPart.replace(
    /^0+(?=\d)/,
    "",
  );

  const formattedInteger = normalizedInteger
    ? Number(normalizedInteger).toLocaleString("tr-TR")
    : "";

  if (firstCommaIndex !== -1) {
    return `${formattedInteger},${decimalPart}`;
  }

  return formattedInteger;
}

export default function MaasCalculator() {
  const [grossSalary, setGrossSalary] =
    useState("30.000");

  const [incomeTaxRate, setIncomeTaxRate] =
    useState("15");

  const [copied, setCopied] = useState(false);

  const calculation = useMemo(() => {
    const grossSalaryValue = Math.max(
      parseNumber(grossSalary),
      0,
    );

    const incomeTaxRateValue = Math.max(
      parseNumber(incomeTaxRate),
      0,
    );

    const isValid =
      grossSalaryValue > 0 &&
      incomeTaxRateValue >= 0;

    if (!isValid) {
      return {
        grossSalaryValue,
        incomeTaxRateValue,
        socialSecurity: 0,
        unemploymentInsurance: 0,
        incomeTaxBase: 0,
        incomeTax: 0,
        stampTax: 0,
        totalDeductions: 0,
        netSalary: 0,
        deductionRate: 0,
        netSalaryRate: 0,
        annualGrossSalary: 0,
        annualNetSalary: 0,
        annualDeductions: 0,
        dailyNetSalary: 0,
        isValid: false,
      };
    }

    const socialSecurity =
      grossSalaryValue *
      (SOCIAL_SECURITY_RATE / 100);

    const unemploymentInsurance =
      grossSalaryValue *
      (UNEMPLOYMENT_RATE / 100);

    const incomeTaxBase = Math.max(
      grossSalaryValue -
        socialSecurity -
        unemploymentInsurance,
      0,
    );

    const incomeTax =
      incomeTaxBase *
      (incomeTaxRateValue / 100);

    const stampTax =
      grossSalaryValue *
      (STAMP_TAX_RATE / 100);

    const totalDeductions =
      socialSecurity +
      unemploymentInsurance +
      incomeTax +
      stampTax;

    const netSalary = Math.max(
      grossSalaryValue - totalDeductions,
      0,
    );

    const deductionRate =
      grossSalaryValue > 0
        ? (totalDeductions / grossSalaryValue) * 100
        : 0;

    const netSalaryRate =
      grossSalaryValue > 0
        ? (netSalary / grossSalaryValue) * 100
        : 0;

    const annualGrossSalary =
      grossSalaryValue * 12;

    const annualNetSalary = netSalary * 12;

    const annualDeductions =
      totalDeductions * 12;

    const dailyNetSalary = netSalary / 30;

    return {
      grossSalaryValue,
      incomeTaxRateValue,
      socialSecurity,
      unemploymentInsurance,
      incomeTaxBase,
      incomeTax,
      stampTax,
      totalDeductions,
      netSalary,
      deductionRate,
      netSalaryRate,
      annualGrossSalary,
      annualNetSalary,
      annualDeductions,
      dailyNetSalary,
      isValid: true,
    };
  }, [grossSalary, incomeTaxRate]);

  function handleQuickSalary(value: number) {
    setGrossSalary(value.toLocaleString("tr-TR"));
    setCopied(false);
  }

  function handleTaxRateChange(value: number) {
    setIncomeTaxRate(value.toString());
    setCopied(false);
  }

  function handleReset() {
    setGrossSalary("30.000");
    setIncomeTaxRate("15");
    setCopied(false);
  }

  async function handleCopy() {
    if (!calculation.isValid) {
      return;
    }

    const copyText = [
      "HesapRehberi Maaş Hesaplama Sonucu",
      `Brüt maaş: ${currencyFormatter.format(
        calculation.grossSalaryValue,
      )}`,
      `Gelir vergisi oranı: %${percentageFormatter.format(
        calculation.incomeTaxRateValue,
      )}`,
      `SGK çalışan payı: ${currencyFormatter.format(
        calculation.socialSecurity,
      )}`,
      `İşsizlik sigortası: ${currencyFormatter.format(
        calculation.unemploymentInsurance,
      )}`,
      `Gelir vergisi matrahı: ${currencyFormatter.format(
        calculation.incomeTaxBase,
      )}`,
      `Gelir vergisi: ${currencyFormatter.format(
        calculation.incomeTax,
      )}`,
      `Damga vergisi: ${currencyFormatter.format(
        calculation.stampTax,
      )}`,
      `Toplam kesinti: ${currencyFormatter.format(
        calculation.totalDeductions,
      )}`,
      `Tahmini net maaş: ${currencyFormatter.format(
        calculation.netSalary,
      )}`,
      `Toplam kesinti oranı: %${percentageFormatter.format(
        calculation.deductionRate,
      )}`,
      "Not: Asgari ücret istisnası, kümülatif vergi matrahı, teşvikler ve bordroya özel diğer unsurlar dahil değildir.",
    ].join("\n");

    try {
      await navigator.clipboard.writeText(copyText);
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
      id="hesaplama-araci"
      aria-labelledby="salary-calculator-title"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
    >
      <header className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-r from-slate-950 via-blue-950 to-blue-900 px-6 py-7 text-white md:px-9 md:py-8">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-blue-400/20 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-20 h-48 w-48 rounded-full bg-indigo-400/10 blur-3xl"
        />

        <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
              <BriefcaseBusiness
                className="h-6 w-6"
                aria-hidden="true"
              />
            </div>

            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Sparkles
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Brüt maaştan tahmini net maaş hesabı
              </div>

              <h2
                id="salary-calculator-title"
                className="text-2xl font-bold tracking-tight md:text-3xl"
              >
                Maaş Hesaplama Aracı
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-blue-100/90 md:text-base">
                Brüt maaşınızı ve gelir vergisi oranını girerek
                yasal kesintilerin yaklaşık tutarını ve tahmini
                net maaşınızı görün.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200 ring-1 ring-emerald-300/20">
            <ShieldCheck
              className="h-4 w-4"
              aria-hidden="true"
            />
            Ücretsiz kullanım
          </div>
        </div>
      </header>

      <div className="grid lg:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)]">
        <div className="border-b border-slate-200 bg-slate-50/70 p-6 md:p-9 lg:border-b-0 lg:border-r">
          <div>
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="gross-salary"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <WalletCards
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Aylık brüt maaş
              </label>

              <span className="text-xs font-medium text-slate-500">
                Kesintiler öncesi
              </span>
            </div>

            <div className="relative">
              <input
                id="gross-salary"
                type="text"
                inputMode="decimal"
                autoComplete="off"
                value={grossSalary}
                onChange={(event) => {
                  setGrossSalary(
                    formatInputValue(
                      event.target.value,
                      2,
                    ),
                  );

                  setCopied(false);
                }}
                placeholder="Örneğin 30.000"
                className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 pr-16 text-xl font-bold text-slate-950 outline-none transition placeholder:text-base placeholder:font-normal placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
              />

              <span className="pointer-events-none absolute inset-y-0 right-5 flex items-center font-bold text-slate-500">
                ₺
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {quickSalaryAmounts.map((salaryAmount) => {
                const isSelected =
                  calculation.grossSalaryValue ===
                  salaryAmount;

                return (
                  <button
                    key={salaryAmount}
                    type="button"
                    onClick={() =>
                      handleQuickSalary(salaryAmount)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    {salaryAmount.toLocaleString("tr-TR")} ₺
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7">
            <div className="mb-3 flex items-center justify-between gap-4">
              <label
                htmlFor="income-tax-rate"
                className="flex items-center gap-2 text-sm font-bold text-slate-900"
              >
                <Percent
                  className="h-4 w-4 text-blue-700"
                  aria-hidden="true"
                />
                Gelir vergisi oranı
              </label>

              <span className="text-xs font-medium text-slate-500">
                Seçilen vergi oranı
              </span>
            </div>

            <select
              id="income-tax-rate"
              value={incomeTaxRate}
              onChange={(event) => {
                setIncomeTaxRate(event.target.value);
                setCopied(false);
              }}
              className="h-16 w-full rounded-2xl border border-slate-300 bg-white px-5 text-lg font-bold text-slate-950 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            >
              {incomeTaxRates.map((taxRate) => (
                <option
                  key={taxRate}
                  value={taxRate}
                >
                  %{taxRate} gelir vergisi oranı
                </option>
              ))}
            </select>

            <div className="mt-3 grid grid-cols-5 gap-2">
              {incomeTaxRates.map((taxRate) => {
                const isSelected =
                  calculation.incomeTaxRateValue ===
                  taxRate;

                return (
                  <button
                    key={taxRate}
                    type="button"
                    onClick={() =>
                      handleTaxRateChange(taxRate)
                    }
                    className={`rounded-xl border px-2 py-2.5 text-xs font-bold transition ${
                      isSelected
                        ? "border-blue-700 bg-blue-700 text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800"
                    }`}
                  >
                    %{taxRate}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold text-blue-950">
                  Hesaplama nasıl yapılır?
                </p>

                <p className="mt-2 text-sm leading-6 text-blue-900">
                  Brüt maaştan SGK çalışan payı ve işsizlik
                  sigortası düşülerek yaklaşık gelir vergisi
                  matrahı bulunur. Seçtiğiniz gelir vergisi oranı
                  bu matrah üzerinden uygulanır.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck
                className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                aria-hidden="true"
              />

              <div>
                <p className="font-bold text-amber-950">
                  Yaklaşık hesaplama
                </p>

                <p className="mt-2 text-sm leading-6 text-amber-900">
                  Asgari ücret gelir ve damga vergisi istisnası,
                  kümülatif vergi matrahı, SGK tavanı, teşvikler,
                  engellilik indirimi, prim ve ek ödemeler bu
                  basitleştirilmiş hesaplamaya dahil değildir.
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
          >
            <RefreshCcw
              className="h-4 w-4"
              aria-hidden="true"
            />
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
                  Maaş sonucu
                </p>

                <h3 className="mt-2 text-2xl font-bold text-slate-950">
                  Tahmini aylık net maaş
                </h3>
              </div>

              <span className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                %
                {percentageFormatter.format(
                  calculation.incomeTaxRateValue,
                )}{" "}
                vergi oranı
              </span>
            </div>

            <div className="mt-7 rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 p-6 text-white shadow-xl shadow-blue-950/20 md:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-100">
                <Banknote
                  className="h-4 w-4"
                  aria-hidden="true"
                />
                Çalışanın eline geçen yaklaşık tutar
              </div>

              <p className="mt-5 break-words text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                {currencyFormatter.format(
                  calculation.netSalary,
                )}
              </p>

              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-blue-100">
                <TrendingDown
                  className="h-4 w-4 text-amber-300"
                  aria-hidden="true"
                />

                Brüt maaştan yaklaşık %
                {percentageFormatter.format(
                  calculation.deductionRate,
                )}{" "}
                kesinti
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <article className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-rose-800">
                    Toplam kesinti
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-100 text-rose-700">
                    <ReceiptText
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-rose-950 md:text-2xl">
                  {currencyFormatter.format(
                    calculation.totalDeductions,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-rose-700">
                  SGK, işsizlik sigortası ve tahmini
                  vergilerin toplamı.
                </p>
              </article>

              <article className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-emerald-800">
                    Net maaş oranı
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <BadgePercent
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                <p className="mt-4 text-xl font-extrabold text-emerald-950 md:text-2xl">
                  %
                  {percentageFormatter.format(
                    calculation.netSalaryRate,
                  )}
                </p>

                <p className="mt-2 text-xs leading-5 text-emerald-700">
                  Net maaşın brüt maaş içerisindeki yaklaşık
                  payı.
                </p>
              </article>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4">
                <h4 className="font-bold text-slate-900">
                  Kesinti dökümü
                </h4>
              </div>

              <dl className="divide-y divide-slate-100">
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Brüt maaş
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.grossSalaryValue,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    SGK çalışan payı (%14)
                  </dt>

                  <dd className="text-right font-bold text-rose-700">
                    −
                    {currencyFormatter.format(
                      calculation.socialSecurity,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    İşsizlik sigortası (%1)
                  </dt>

                  <dd className="text-right font-bold text-rose-700">
                    −
                    {currencyFormatter.format(
                      calculation.unemploymentInsurance,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Gelir vergisi matrahı
                  </dt>

                  <dd className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.incomeTaxBase,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Gelir vergisi (%
                    {percentageFormatter.format(
                      calculation.incomeTaxRateValue,
                    )}
                    )
                  </dt>

                  <dd className="text-right font-bold text-rose-700">
                    −
                    {currencyFormatter.format(
                      calculation.incomeTax,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <dt className="text-sm text-slate-500">
                    Damga vergisi
                  </dt>

                  <dd className="text-right font-bold text-rose-700">
                    −
                    {currencyFormatter.format(
                      calculation.stampTax,
                    )}
                  </dd>
                </div>

                <div className="flex items-center justify-between gap-4 bg-blue-50/70 px-5 py-4">
                  <dt className="font-bold text-blue-950">
                    Tahmini net maaş
                  </dt>

                  <dd className="text-right text-lg font-extrabold text-blue-800">
                    {currencyFormatter.format(
                      calculation.netSalary,
                    )}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Coins
                    className="h-4 w-4 text-blue-700"
                    aria-hidden="true"
                  />
                  Yıllık brüt
                </div>

                <p className="mt-3 break-words font-extrabold text-slate-950">
                  {currencyFormatter.format(
                    calculation.annualGrossSalary,
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <Banknote
                    className="h-4 w-4 text-emerald-700"
                    aria-hidden="true"
                  />
                  Yıllık net
                </div>

                <p className="mt-3 break-words font-extrabold text-slate-950">
                  {currencyFormatter.format(
                    calculation.annualNetSalary,
                  )}
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <ReceiptText
                    className="h-4 w-4 text-rose-700"
                    aria-hidden="true"
                  />
                  Yıllık kesinti
                </div>

                <p className="mt-3 break-words font-extrabold text-slate-950">
                  {currencyFormatter.format(
                    calculation.annualDeductions,
                  )}
                </p>
              </article>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-bold text-slate-900">
                Ek hesaplama bilgileri
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Yaklaşık günlük net kazanç
                  </span>

                  <span className="text-right font-bold text-slate-900">
                    {currencyFormatter.format(
                      calculation.dailyNetSalary,
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Aylık toplam kesinti oranı
                  </span>

                  <span className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.deductionRate,
                    )}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-slate-500">
                    Seçilen gelir vergisi oranı
                  </span>

                  <span className="text-right font-bold text-slate-900">
                    %
                    {percentageFormatter.format(
                      calculation.incomeTaxRateValue,
                    )}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              disabled={!calculation.isValid}
              onClick={handleCopy}
              className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-sm font-bold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              {copied ? (
                <>
                  <Check
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Sonuç kopyalandı
                </>
              ) : (
                <>
                  <Clipboard
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  Sonucu kopyala
                </>
              )}
            </button>

            <div className="mt-5 flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                aria-hidden="true"
              />

              <p className="text-xs leading-5 text-slate-500">
                Bu araç basitleştirilmiş brüt-net maaş hesabı
                yapar. Kesin maaş tutarı için resmi bordro,
                kümülatif vergi matrahı ve güncel mevzuat esas
                alınmalıdır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}