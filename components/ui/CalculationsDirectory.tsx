"use client";

import {
  BadgePercent,
  Banknote,
  Briefcase,
  ChartNoAxesColumn,
  Percent,
  Receipt,
  Search,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useMemo, useState } from "react";

import CategoryCard from "@/components/ui/CategoryCard";

const calculations = [
  {
    title: "Kredi Hesaplama",
    description:
      "Aylık taksit, toplam faiz ve toplam geri ödeme tutarını hesaplayın.",
    category: "Kredi",
    icon: Wallet,
    href: "/hesaplamalar/kredi-hesaplama",
  },
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil, KDV hariç ve KDV tutarını kolayca hesaplayın.",
    category: "Vergi",
    icon: Receipt,
    href: "/hesaplamalar/kdv-hesaplama",
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Basit ve bileşik faiz getirisini saniyeler içinde hesaplayın.",
    category: "Yatırım",
    icon: TrendingUp,
    href: "/hesaplamalar/faiz-hesaplama",
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt maaştan yaklaşık net maaş ve kesintileri hesaplayın.",
    category: "Maaş",
    icon: Briefcase,
    href: "/hesaplamalar/maas-hesaplama",
  },
  {
    title: "Döviz Hesaplama",
    description:
      "Döviz ve Türk lirası arasında kur üzerinden çeviri yapın.",
    category: "Döviz",
    icon: Banknote,
    href: "/hesaplamalar/doviz-hesaplama",
  },
  {
    title: "Enflasyon Hesaplama",
    description:
      "Paranızın enflasyon sonrasındaki alım gücünü hesaplayın.",
    category: "Finans",
    icon: ChartNoAxesColumn,
    href: "/hesaplamalar/enflasyon-hesaplama",
  },
  {
    title: "Yüzde Hesaplama",
    description:
      "Yüzde, artış, azalış ve iki değer arasındaki yüzde değişimini hesaplayın.",
    category: "Matematik",
    icon: Percent,
    href: "/hesaplamalar/yuzde-hesaplama",
  },
  {
    title: "İndirim Hesaplama",
    description:
      "İndirim tutarını, indirimli fiyatı ve toplam tasarrufu hesaplayın.",
    category: "Alışveriş",
    icon: BadgePercent,
    href: "/hesaplamalar/indirim-hesaplama",
  },
];

const categories = [
  "Tümü",
  "Kredi",
  "Vergi",
  "Yatırım",
  "Maaş",
  "Döviz",
  "Finans",
  "Matematik",
  "Alışveriş",
];

export default function CalculationsDirectory() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const filteredCalculations = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

    return calculations.filter((calculation) => {
      const matchesCategory =
        selectedCategory === "Tümü" ||
        calculation.category === selectedCategory;

      const searchableText =
        `${calculation.title} ${calculation.description} ${calculation.category}`.toLocaleLowerCase(
          "tr-TR"
        );

      const matchesQuery =
        normalizedQuery.length === 0 ||
        searchableText.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [query, selectedCategory]);

  return (
    <>
      <div className="mx-auto mt-10 max-w-3xl">
        <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 shadow-lg transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
          <Search className="shrink-0 text-slate-400" size={22} />

          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Hesaplama arayın..."
            aria-label="Hesaplama ara"
            className="w-full bg-transparent px-4 py-5 text-lg text-slate-900 outline-none placeholder:text-slate-400"
          />
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
        <p className="mb-6 text-sm font-medium text-slate-500">
          {filteredCalculations.length} hesaplama aracı bulundu
        </p>

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
            <Search className="mx-auto text-slate-300" size={42} />

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Sonuç bulunamadı
            </h2>

            <p className="mt-3 text-slate-600">
              Farklı bir arama kelimesi veya kategori deneyin.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedCategory("Tümü");
              }}
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