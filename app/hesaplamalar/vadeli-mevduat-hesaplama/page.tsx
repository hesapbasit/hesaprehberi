import type { Metadata } from "next";
import TimeDepositCalculator from "@/components/calculators/TimeDepositCalculator";

export const metadata: Metadata = {
  title: "Vadeli Mevduat Hesaplama",
  description: "Vadeli mevduat getirisi hesaplama aracı.",
};

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="mb-8 text-4xl font-bold">Vadeli Mevduat Hesaplama</h1>
        <TimeDepositCalculator />
      </div>
    </main>
  );
}