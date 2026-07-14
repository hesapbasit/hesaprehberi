"use client";

import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-slate-100 px-6 py-16">
      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-xl md:p-12">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-red-100 text-red-600">
          <AlertTriangle size={38} />
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-wider text-red-600">
          Beklenmeyen Bir Hata Oluştu
        </p>

        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
          Bir şeyler ters gitti
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-600">
          Sayfa yüklenirken geçici bir sorun oluştu. Yeniden deneyebilir veya
          ana sayfaya dönebilirsiniz.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
          >
            <RefreshCw size={19} />
            Tekrar Dene
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
          >
            <Home size={19} />
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </main>
  );
}