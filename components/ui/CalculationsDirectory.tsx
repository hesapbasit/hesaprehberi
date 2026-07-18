"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import CategoryCard from "@/components/ui/CategoryCard";
import {
  calculators,
  type CalculatorCategory,
} from "@/data/calculators";

type CategoryFilter = "Tümü" | CalculatorCategory;

function getInitialQuery(): string {
  if (typeof window === "undefined") {
    return "";
  }

  const searchParams = new URLSearchParams(window.location.search);

  return searchParams.get("arama") ?? "";
}

export default function CalculationsDirectory() {
  const [query, setQuery] = useState(getInitialQuery);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("Tümü");

  const categories = useMemo<CategoryFilter[]>(() => {
    const availableCategories = Array.from(
      new Set(calculators.map((calculator) => calculator.category)),
    );

    return ["Tümü", ...availableCategories];
  }, []);

  const filteredCalculations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    return calculators.filter((calculator) => {
      const matchesCategory =
        selectedCategory === "Tümü" ||
        calculator.category === selectedCategory;

      const searchableText = [
        calculator.title,
        calculator.shortTitle,
        calculator.description,
        calculator.category,
        ...calculator.keywords,
      ]
        .filter(Boolean)
        .join(" ")
        .toLocaleLowerCase("tr-TR");

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  function removeSearchParameter() {
    const currentUrl = new URL(window.location.href);

    currentUrl.searchParams.delete("arama");

    window.history.replaceState(
      {},
      "",
      `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`,
    );
  }

  function clearQuery() {
    setQuery("");
    removeSearchParameter();
  }

  function clearFilters() {
    setQuery("");
    setSelectedCategory("Tümü");
    removeSearchParameter();
  }

  return (
    <>
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 shadow-lg transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
          <Search
            className="shrink-0 text-slate-400"
            size={22}
            aria-hidden="true"
          />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hesaplama arayın..."
            aria-label="Hesaplama ara"
            className="w-full bg-transparent px-4 py-5 text-lg text-slate-900 outline-none placeholder:text-slate-400"
          />

          {query.length > 0 && (
            <button
              type="button"
              onClick={clearQuery}
              className="shrink-0 rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Aramayı temizle"
            >
              Temizle
            </button>
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={isActive}
              className={`rounded-xl px-5 py-3 font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-14">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <p
            className="text-sm font-medium text-slate-500"
            aria-live="polite"
          >
            {filteredCalculations.length} hesaplama aracı bulundu
          </p>

          {(query.length > 0 || selectedCategory !== "Tümü") && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
            >
              Tüm filtreleri temizle
            </button>
          )}
        </div>

        {filteredCalculations.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCalculations.map((calculation) => (
              <CategoryCard
                key={calculation.href}
                title={calculation.title}
                icon={calculation.icon}
                href={calculation.href}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <Search
              className="mx-auto text-slate-300"
              size={42}
              aria-hidden="true"
            />

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Sonuç bulunamadı
            </h2>

            <p className="mt-3 text-slate-600">
              Farklı bir arama kelimesi veya kategori deneyin.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </div>
    </>
  );
}