"use client";

import { useMemo, useState } from "react";

type LoanOffer = {
  id: number;
  name: string;
  amount: string;
  monthlyRate: string;
  term: string;
  commissionRate: string;
  fixedCosts: string;
  insuranceCost: string;
};

type CalculatedOffer = LoanOffer & {
  principal: number;
  rate: number;
  termValue: number;
  monthlyPayment: number;
  installmentTotal: number;
  totalInterest: number;
  commissionAmount: number;
  fixedCostAmount: number;
  insuranceAmount: number;
  totalPayment: number;
  totalCost: number;
  costRate: number;
  valid: boolean;
};

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
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

function calculateMonthlyPayment(
  principal: number,
  monthlyRatePercent: number,
  term: number,
): number {
  if (principal <= 0 || term <= 0) return 0;

  const monthlyRate = monthlyRatePercent / 100;

  if (monthlyRate === 0) {
    return principal / term;
  }

  const factor = Math.pow(1 + monthlyRate, term);
  return principal * ((monthlyRate * factor) / (factor - 1));
}

function createOffer(id: number, name: string): LoanOffer {
  return {
    id,
    name,
    amount: "500.000",
    monthlyRate: id === 1 ? "3,15" : "3,05",
    term: "36",
    commissionRate: id === 1 ? "1" : "0,75",
    fixedCosts: id === 1 ? "3.500" : "4.000",
    insuranceCost: id === 1 ? "2.000" : "2.500",
  };
}

export default function CreditComparisonCalculator() {
  const [offers, setOffers] = useState<LoanOffer[]>([
    createOffer(1, "Teklif 1"),
    createOffer(2, "Teklif 2"),
  ]);
  const [nextId, setNextId] = useState(3);

  const calculatedOffers = useMemo<CalculatedOffer[]>(() => {
    return offers.map((offer) => {
      const principal = parseNumericInput(offer.amount);
      const rate = parseNumericInput(offer.monthlyRate);
      const termValue = Math.max(
        0,
        Math.floor(parseNumericInput(offer.term)),
      );
      const commissionRate = Math.max(
        0,
        parseNumericInput(offer.commissionRate),
      );
      const fixedCostAmount = Math.max(
        0,
        parseNumericInput(offer.fixedCosts),
      );
      const insuranceAmount = Math.max(
        0,
        parseNumericInput(offer.insuranceCost),
      );

      const valid =
        principal > 0 &&
        rate >= 0 &&
        termValue > 0;

      const monthlyPayment = valid
        ? calculateMonthlyPayment(principal, rate, termValue)
        : 0;
      const installmentTotal = monthlyPayment * termValue;
      const totalInterest = Math.max(0, installmentTotal - principal);
      const commissionAmount = principal * (commissionRate / 100);
      const totalPayment =
        installmentTotal +
        commissionAmount +
        fixedCostAmount +
        insuranceAmount;
      const totalCost = Math.max(0, totalPayment - principal);
      const costRate =
        principal > 0 ? (totalCost / principal) * 100 : 0;

      return {
        ...offer,
        principal,
        rate,
        termValue,
        monthlyPayment,
        installmentTotal,
        totalInterest,
        commissionAmount,
        fixedCostAmount,
        insuranceAmount,
        totalPayment,
        totalCost,
        costRate,
        valid,
      };
    });
  }, [offers]);

  const validOffers = calculatedOffers.filter((offer) => offer.valid);

  const bestOfferId =
    validOffers.length > 0
      ? validOffers.reduce((best, offer) =>
          offer.totalPayment < best.totalPayment ? offer : best,
        ).id
      : null;

  const lowestInstallmentOfferId =
    validOffers.length > 0
      ? validOffers.reduce((best, offer) =>
          offer.monthlyPayment < best.monthlyPayment ? offer : best,
        ).id
      : null;

  function updateOffer(
    id: number,
    field: keyof LoanOffer,
    value: string,
  ) {
    setOffers((current) =>
      current.map((offer) =>
        offer.id === id ? { ...offer, [field]: value } : offer,
      ),
    );
  }

  function addOffer() {
    if (offers.length >= 5) return;

    setOffers((current) => [
      ...current,
      createOffer(nextId, `Teklif ${current.length + 1}`),
    ]);
    setNextId((current) => current + 1);
  }

  function removeOffer(id: number) {
    if (offers.length <= 2) return;

    setOffers((current) => current.filter((offer) => offer.id !== id));
  }

  function resetOffers() {
    setOffers([
      createOffer(1, "Teklif 1"),
      createOffer(2, "Teklif 2"),
    ]);
    setNextId(3);
  }

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="border-b border-slate-200 bg-gradient-to-r from-indigo-700 to-violet-800 px-6 py-8 text-white md:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
          Teklif analizi
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Kredi Karşılaştırma Aracı
        </h2>

        <p className="mt-4 max-w-3xl leading-7 text-indigo-100">
          Farklı kredi tekliflerini faiz, taksit, toplam maliyet, komisyon,
          sigorta ve işlem giderleriyle birlikte karşılaştırın.
        </p>
      </div>

      <div className="p-6 md:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">
              Kredi teklifleri
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Aynı anda en az 2, en fazla 5 teklif karşılaştırabilirsiniz.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={addOffer}
              disabled={offers.length >= 5}
              className="rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Teklif ekle
            </button>

            <button
              type="button"
              onClick={resetOffers}
              className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Sıfırla
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          {offers.map((offer) => {
            const result = calculatedOffers.find(
              (item) => item.id === offer.id,
            );

            return (
              <article
                key={offer.id}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <input
                    value={offer.name}
                    onChange={(event) =>
                      updateOffer(offer.id, "name", event.target.value)
                    }
                    className="min-w-0 flex-1 border-0 bg-transparent p-0 text-xl font-bold text-slate-900 outline-none"
                    aria-label="Teklif adı"
                  />

                  {offers.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOffer(offer.id)}
                      className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700 transition hover:bg-rose-100"
                    >
                      Kaldır
                    </button>
                  )}
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Kredi tutarı
                    </span>

                    <div className="relative mt-2">
                      <input
                        inputMode="decimal"
                        value={offer.amount}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "amount",
                            event.target.value,
                          )
                        }
                        onBlur={() =>
                          updateOffer(
                            offer.id,
                            "amount",
                            formatInputNumber(
                              parseNumericInput(offer.amount),
                            ),
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        TL
                      </span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Aylık faiz
                    </span>

                    <div className="relative mt-2">
                      <input
                        inputMode="decimal"
                        value={offer.monthlyRate}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "monthlyRate",
                            event.target.value,
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        %
                      </span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Vade
                    </span>

                    <div className="relative mt-2">
                      <input
                        type="number"
                        min="1"
                        max="360"
                        value={offer.term}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "term",
                            event.target.value,
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        Ay
                      </span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Komisyon oranı
                    </span>

                    <div className="relative mt-2">
                      <input
                        inputMode="decimal"
                        value={offer.commissionRate}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "commissionRate",
                            event.target.value,
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        %
                      </span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Sabit masraflar
                    </span>

                    <div className="relative mt-2">
                      <input
                        inputMode="decimal"
                        value={offer.fixedCosts}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "fixedCosts",
                            event.target.value,
                          )
                        }
                        onBlur={() =>
                          updateOffer(
                            offer.id,
                            "fixedCosts",
                            formatInputNumber(
                              parseNumericInput(offer.fixedCosts),
                            ) || "0",
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        TL
                      </span>
                    </div>
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-slate-800">
                      Sigorta gideri
                    </span>

                    <div className="relative mt-2">
                      <input
                        inputMode="decimal"
                        value={offer.insuranceCost}
                        onChange={(event) =>
                          updateOffer(
                            offer.id,
                            "insuranceCost",
                            event.target.value,
                          )
                        }
                        onBlur={() =>
                          updateOffer(
                            offer.id,
                            "insuranceCost",
                            formatInputNumber(
                              parseNumericInput(offer.insuranceCost),
                            ) || "0",
                          )
                        }
                        className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 pr-12 font-semibold text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                      />

                      <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-slate-500">
                        TL
                      </span>
                    </div>
                  </label>
                </div>

                {result && !result.valid && (
                  <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    Kredi tutarı ve vade sıfırdan büyük olmalıdır.
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-700">
            Karşılaştırma sonucu
          </p>

          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Tekliflerin maliyet özeti
          </h3>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-[980px] divide-y divide-slate-200 text-sm">
            <thead className="bg-white">
              <tr>
                <th className="px-4 py-4 text-left font-semibold text-slate-700">
                  Teklif
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Aylık taksit
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Toplam faiz
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Komisyon
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Ek giderler
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Toplam maliyet
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Toplam geri ödeme
                </th>
                <th className="px-4 py-4 text-right font-semibold text-slate-700">
                  Maliyet oranı
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 bg-white">
              {calculatedOffers.map((offer) => (
                <tr
                  key={offer.id}
                  className={
                    offer.id === bestOfferId
                      ? "bg-emerald-50"
                      : "hover:bg-slate-50"
                  }
                >
                  <td className="px-4 py-4">
                    <div className="font-semibold text-slate-900">
                      {offer.name || `Teklif ${offer.id}`}
                    </div>

                    <div className="mt-1 flex flex-wrap gap-2">
                      {offer.id === bestOfferId && offer.valid && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                          En düşük toplam ödeme
                        </span>
                      )}

                      {offer.id === lowestInstallmentOfferId &&
                        offer.valid && (
                          <span className="rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                            En düşük taksit
                          </span>
                        )}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                    {currencyFormatter.format(offer.monthlyPayment)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                    {currencyFormatter.format(offer.totalInterest)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                    {currencyFormatter.format(offer.commissionAmount)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                    {currencyFormatter.format(
                      offer.fixedCostAmount + offer.insuranceAmount,
                    )}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right font-semibold text-slate-900">
                    {currencyFormatter.format(offer.totalCost)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right font-bold text-slate-900">
                    {currencyFormatter.format(offer.totalPayment)}
                  </td>

                  <td className="whitespace-nowrap px-4 py-4 text-right text-slate-700">
                    %{numberFormatter.format(offer.costRate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {bestOfferId !== null && (
          <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">
              En düşük toplam geri ödeme
            </p>

            <h4 className="mt-2 text-2xl font-bold text-emerald-950">
              {
                calculatedOffers.find((offer) => offer.id === bestOfferId)
                  ?.name
              }
            </h4>

            <p className="mt-3 leading-7 text-emerald-900">
              Bu sonuç yalnızca girilen faiz, vade ve masraf bilgilerine göre
              hesaplanır. Teminat, kampanya koşulları, erken ödeme hükümleri ve
              değişken giderler ayrıca değerlendirilmelidir.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}