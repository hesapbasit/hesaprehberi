"use client";

import { useMemo, useState } from "react";

export default function MaasCalculator() {
  const [grossSalary, setGrossSalary] = useState("30000");
  const [incomeTaxRate, setIncomeTaxRate] = useState("15");

  const result = useMemo(() => {
    const gross = Number(grossSalary);
    const taxRate = Number(incomeTaxRate);

    if (
      !Number.isFinite(gross) ||
      !Number.isFinite(taxRate) ||
      gross <= 0 ||
      taxRate < 0
    ) {
      return {
        socialSecurity: 0,
        unemployment: 0,
        incomeTax: 0,
        stampTax: 0,
        totalDeductions: 0,
        netSalary: 0,
      };
    }

    const socialSecurity = gross * 0.14;
    const unemployment = gross * 0.01;
    const incomeTaxBase = gross - socialSecurity - unemployment;
    const incomeTax = incomeTaxBase * (taxRate / 100);
    const stampTax = gross * 0.00759;

    const totalDeductions =
      socialSecurity + unemployment + incomeTax + stampTax;

    const netSalary = gross - totalDeductions;

    return {
      socialSecurity,
      unemployment,
      incomeTax,
      stampTax,
      totalDeductions,
      netSalary,
    };
  }, [grossSalary, incomeTaxRate]);

  const formatCurrency = (value: number) =>
    value.toLocaleString("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <label className="block font-semibold text-slate-800">
            Brüt Maaş
          </label>

          <div className="relative mt-3">
            <input
              type="number"
              min="0"
              value={grossSalary}
              onChange={(event) => setGrossSalary(event.target.value)}
              placeholder="30000"
              className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 pr-14 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
            />

            <span className="absolute right-5 top-1/2 -translate-y-1/2 font-semibold text-slate-500">
              ₺
            </span>
          </div>

          <label className="mt-8 block font-semibold text-slate-800">
            Gelir Vergisi Oranı
          </label>

          <select
            value={incomeTaxRate}
            onChange={(event) => setIncomeTaxRate(event.target.value)}
            className="mt-3 w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-lg text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
          >
            <option value="15">%15</option>
            <option value="20">%20</option>
            <option value="27">%27</option>
            <option value="35">%35</option>
            <option value="40">%40</option>
          </select>

          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
            <p className="text-sm leading-6 text-amber-800">
              Bu hesaplama yaklaşık sonuç verir. Asgari ücret istisnası, vergi
              dilimi, teşvikler ve kişisel durumlar gerçek net maaşı
              değiştirebilir.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">
            Tahmini Net Maaş
          </p>

          <h2 className="mt-3 break-words text-4xl font-bold">
            {formatCurrency(result.netSalary)} ₺
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">SGK Kesintisi</p>
              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.socialSecurity)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">İşsizlik Sigortası</p>
              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.unemployment)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Gelir Vergisi</p>
              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.incomeTax)} ₺
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-5">
              <p className="text-sm text-blue-100">Damga Vergisi</p>
              <p className="mt-2 text-xl font-bold">
                {formatCurrency(result.stampTax)} ₺
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white/10 p-5">
            <p className="text-sm text-blue-100">Toplam Kesinti</p>
            <p className="mt-2 text-2xl font-bold">
              {formatCurrency(result.totalDeductions)} ₺
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}