import { Calculator } from "lucide-react";

export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-100 px-6">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 animate-pulse items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
          <Calculator size={30} />
        </div>

        <h1 className="mt-6 text-2xl font-bold text-slate-900">
          HesapRehberi
        </h1>

        <p className="mt-3 text-slate-600">
          Sayfa yükleniyor...
        </p>

        <div className="mx-auto mt-6 h-2 w-48 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />
        </div>
      </div>
    </main>
  );
}