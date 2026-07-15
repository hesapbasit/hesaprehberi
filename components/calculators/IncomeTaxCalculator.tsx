"use client";

import { useMemo, useState } from "react";

type IncomeType = "wage" | "nonWage";

type TaxBracket = {
  upperLimit: number;
  rate: number;
};

const wageBrackets: TaxBracket[] = [
  {
    upperLimit: 190_000,
    rate: 0.15,
  },
  {
    upperLimit: 400_000,
    rate: 0.2,
  },
  {
    upperLimit: 1_500_000,
    rate: 0.27,
  },
  {
    upperLimit: 5_300_000,
    rate: 0.35,
  },
  {
    upperLimit: Number.POSITIVE_INFINITY,
    rate: 0.4,
  },
];

const nonWageBrackets: TaxBracket[] = [
  {
    upperLimit: 190_000,
    rate: 0.15,
  },
  {
    upperLimit: 400_000,
    rate: 0.2,
  },
  {
    upperLimit: 1_000_000,
    rate: 0.27,
  },
  {
    upperLimit: 5_300_000,
    rate: 0.35,
  },
  {
    upperLimit: Number.POSITIVE_INFINITY,
    rate: 0.4,
  },
];

export default function IncomeTaxCalculator() {
  const [taxBase, setTaxBase] = useState("500000");
  const [incomeType, setIncomeType] = useState<IncomeType>("wage");

  const result = useMemo(() => {
    const base = Number(taxBase);

    if (!Number.isFinite(base) || base < 0) {
      return {
        valid: false,
        tax: 0,
        netAfterTax: 0,
        effectiveRate: 0,
        marginalRate: 0,
        bracketLabel: "Geçerli bir matrah girin",
        breakdown: [],
      };
    }

    const brackets =
      incomeType === "wage" ? wageBrackets : nonWageBrackets;

    let remaining = base;
    let previousLimit = 0;
    let totalTax = 0;
    let marginalRate = 0;

    const breakdown: {
      label: string;
      taxableAmount: number;
      rate: number;
      tax: number;
    }[] = [];

    for (const bracket of brackets) {
      if (remaining <= 0) {
        break;
      }

      const bracketWidth = bracket.upperLimit - previousLimit;
      const taxableAmount = Math.min(remaining, bracketWidth);
      const bracketTax = taxableAmount * bracket.rate;

      totalTax += bracketTax;
      remaining -= taxableAmount;
      marginalRate = bracket.rate;

      breakdown.push({
        label: Number.isFinite(bracket.upperLimit)
          ? `${formatCurrency(previousLimit)} - ${formatCurrency(
              bracket.upperLimit
            )}`
          : `${formatCurrency(previousLimit)} üzeri`,
        taxableAmount,
        rate: bracket.rate * 100,
        tax: bracketTax,
      });

      previousLimit = bracket.upperLimit;
    }

    const effectiveRate = base > 0 ? (totalTax / base) * 100 : 0;

    return {
      valid: true,
      tax: totalTax,
      netAfterTax: base - totalTax,
      effectiveRate,
      marginalRate: marginalRate * 100,
      bracketLabel: getBracketLabel(base, incomeType),
      breakdown,
    };
  }, [taxBase, incomeType]);

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-slate-800">Gelir Türü</p>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setIncomeType("wage")}
              className={`rounded-xl px-5 py-4 font-semibold transition ${
                incomeType === "wage"
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              Ücret Geliri
            </button>

            <button
              type="button"
              onClick={() => setIncomeType("nonWage")}
              className={`rounded-xl px-5 py-4 font-semibold transition ${
                incomeType === "nonWage"
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-slate-300 bg-white text-slate-700 hover:border-blue-500 hover:text-blue-600"
              }`}
            >
              Ücret Dışı Gelir
            </button>
          </div>

          <label
            htmlFor="taxBase"
            className="mt-8 block font-semibold text-slate-800"
          >
            Yıllık Vergi Matrahı
          </label>

          <div className="relative mt-3">
            <input
              id="taxBase"
              type="number"
              min="0"
              step="1000"
              value={taxBase}
              onChange={(event) => setTaxBase(event.target.value)}
              placeholder="500000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5">
            <p className="text-sm leading-6 text-blue-800">
              Matrah, brüt gelirle aynı olmak zorunda değildir. Hesaplama
              yapılırken vergiye tabi yıllık matrah tutarını girin.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-900">
              Bu araç yalnızca 2026 gelir vergisi tarifesini uygular. İstisna,
              indirim, asgari ücret vergi istisnası, mahsup ve diğer kişisel
              durumları hesaba katmaz.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Hesaplama Sonucu
          </p>

          <div className="mt-8">
            <p className="text-blue-100">Hesaplanan Gelir Vergisi</p>

            <h2 className="mt-3 break-words text-4xl font-bold md:text-5xl">
              {formatCurrency(result.tax)} ₺
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Efektif Vergi Oranı</p>

              <p className="mt-2 text-2xl font-bold">
                %{formatNumber(result.effectiveRate)}
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Marjinal Vergi Oranı</p>

              <p className="mt-2 text-2xl font-bold">
                %{formatNumber(result.marginalRate)}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">
              Vergi Sonrası Matrah Farkı
            </p>

            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(result.netAfterTax)} ₺
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-6">
            <p className="text-sm text-blue-100">Ulaşılan Vergi Dilimi</p>

            <p className="mt-2 text-lg font-semibold">
              {result.bracketLabel}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200">
        <div className="bg-slate-100 px-6 py-4">
          <h3 className="text-lg font-bold text-slate-900">
            Vergi Hesaplama Dağılımı
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left">
            <thead className="border-b border-slate-200 bg-white">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Vergi Aralığı
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Vergilendirilen Tutar
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Oran
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                  Vergi
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 bg-white">
              {result.breakdown.length > 0 ? (
                result.breakdown.map((row) => (
                  <tr key={`${row.label}-${row.rate}`}>
                    <td className="px-6 py-4 text-slate-700">
                      {row.label}
                    </td>

                    <td className="px-6 py-4 font-medium text-slate-900">
                      {formatCurrency(row.taxableAmount)} ₺
                    </td>

                    <td className="px-6 py-4 text-slate-700">
                      %{formatNumber(row.rate)}
                    </td>

                    <td className="px-6 py-4 font-semibold text-slate-900">
                      {formatCurrency(row.tax)} ₺
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={4}
                    className="px-6 py-8 text-center text-slate-500"
                  >
                    Hesaplama için geçerli bir matrah girin.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function calculateCurrentRate(base: number, brackets: TaxBracket[]) {
  for (const bracket of brackets) {
    if (base <= bracket.upperLimit) {
      return bracket.rate * 100;
    }
  }

  return 40;
}

function getBracketLabel(base: number, incomeType: IncomeType) {
  const brackets =
    incomeType === "wage" ? wageBrackets : nonWageBrackets;

  const currentRate = calculateCurrentRate(base, brackets);

  if (base <= 190_000) {
    return `%${formatNumber(currentRate)} — birinci dilim`;
  }

  if (base <= 400_000) {
    return `%${formatNumber(currentRate)} — ikinci dilim`;
  }

  const thirdLimit = incomeType === "wage" ? 1_500_000 : 1_000_000;

  if (base <= thirdLimit) {
    return `%${formatNumber(currentRate)} — üçüncü dilim`;
  }

  if (base <= 5_300_000) {
    return `%${formatNumber(currentRate)} — dördüncü dilim`;
  }

  return `%${formatNumber(currentRate)} — beşinci dilim`;
}

function formatCurrency(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatNumber(value: number) {
  return value.toLocaleString("tr-TR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}