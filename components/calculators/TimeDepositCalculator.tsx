"use client";

import { useMemo, useState } from "react";

export default function TimeDepositCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [days, setDays] = useState(32);
  const [rate, setRate] = useState(45);
  const [withholding, setWithholding] = useState(15);

  const result = useMemo(() => {
    const gross = principal * (rate / 100) * (days / 365);
    const tax = gross * (withholding / 100);
    const net = gross - tax;
    return {
      gross,
      tax,
      net,
      maturity: principal + net,
    };
  }, [principal, days, rate, withholding]);

  return (
    <section id="hesaplama-araci" className="rounded-3xl bg-white p-8 shadow">
      <h2 className="text-3xl font-bold">Vadeli Mevduat Hesaplama</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <input type="number" value={principal} onChange={e=>setPrincipal(Number(e.target.value))} />
        <input type="number" value={days} onChange={e=>setDays(Number(e.target.value))} />
        <input type="number" value={rate} onChange={e=>setRate(Number(e.target.value))} />
        <input type="number" value={withholding} onChange={e=>setWithholding(Number(e.target.value))} />
      </div>
      <div className="mt-8 space-y-2">
        <p>Brüt Faiz: {result.gross.toFixed(2)} TL</p>
        <p>Stopaj: {result.tax.toFixed(2)} TL</p>
        <p>Net Faiz: {result.net.toFixed(2)} TL</p>
        <p>Vade Sonu: {result.maturity.toFixed(2)} TL</p>
      </div>
    </section>
  );
}