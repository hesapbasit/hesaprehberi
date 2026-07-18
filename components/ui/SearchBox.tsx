"use client";

import { ArrowRight, Search, X } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { searchCalculators } from "@/data/calculators";

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim();

  const filteredCalculations = useMemo(() => {
    if (!normalizedQuery) {
      return [];
    }

    return searchCalculators(normalizedQuery).slice(0, 8);
  }, [normalizedQuery]);

  function clearSearch() {
    setQuery("");
  }

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 shadow-xl transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
        <Search
          className="shrink-0 text-slate-400"
          size={22}
          aria-hidden="true"
        />

        <input
          type="search"
          placeholder="Hangi hesaplamayı arıyorsunuz?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full bg-transparent px-4 py-5 text-lg text-slate-900 outline-none placeholder:text-slate-400"
          aria-label="Hesaplama ara"
          autoComplete="off"
        />

        {query.length > 0 && (
          <button
            type="button"
            onClick={clearSearch}
            className="flex shrink-0 items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Aramayı temizle"
          >
            <X size={20} aria-hidden="true" />
          </button>
        )}
      </div>

      {normalizedQuery.length > 0 && (
        <div
          id="calculator-search-results"
          className="absolute z-50 mt-3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl"
        >
          {filteredCalculations.length > 0 ? (
            <>
              <div className="border-b border-slate-100 px-6 py-3 text-sm font-medium text-slate-500">
                {filteredCalculations.length} sonuç gösteriliyor
              </div>

              {filteredCalculations.map((calculator) => {
                const Icon = calculator.icon;

                return (
                  <Link
                    key={calculator.href}
                    href={calculator.href}
                    onClick={clearSearch}
                    className="group flex items-center gap-4 border-b border-slate-100 px-6 py-4 transition last:border-b-0 hover:bg-blue-50"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon
                        size={21}
                        aria-hidden="true"
                      />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-slate-800 transition group-hover:text-blue-700">
                        {calculator.title}
                      </span>

                      <span className="mt-1 block truncate text-sm text-slate-500">
                        {calculator.category}
                      </span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}

              <Link
                href={`/hesaplamalar?arama=${encodeURIComponent(
                  normalizedQuery,
                )}`}
                onClick={clearSearch}
                className="flex items-center justify-center gap-2 bg-slate-50 px-6 py-4 font-semibold text-blue-600 transition hover:bg-blue-50 hover:text-blue-700"
              >
                Tüm sonuçları görüntüle

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                />
              </Link>
            </>
          ) : (
            <div className="px-6 py-8 text-center">
              <Search
                className="mx-auto text-slate-300"
                size={36}
                aria-hidden="true"
              />

              <p className="mt-4 font-semibold text-slate-800">
                Sonuç bulunamadı
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Farklı bir hesaplama adı veya kategori deneyin.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}