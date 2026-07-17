"use client";

import { ArrowRight, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const calculations = [
  {
    title: "Kredi Hesaplama",
    href: "/hesaplamalar/kredi-hesaplama",
  },
  {
    title: "KDV Hesaplama",
    href: "/hesaplamalar/kdv-hesaplama",
  },
  {
    title: "Faiz Hesaplama",
    href: "/hesaplamalar/faiz-hesaplama",
  },
  {
    title: "Maaş Hesaplama",
    href: "/hesaplamalar/maas-hesaplama",
  },
  {
    title: "Döviz Hesaplama",
    href: "/hesaplamalar/doviz-hesaplama",
  },
  {
    title: "Enflasyon Hesaplama",
    href: "/hesaplamalar/enflasyon-hesaplama",
  },
  {
    title: "Yüzde Hesaplama",
    href: "/hesaplamalar/yuzde-hesaplama",
  },
  {
    title: "İndirim Hesaplama",
    href: "/hesaplamalar/indirim-hesaplama",
  },
  {
    title: "Yaş Hesaplama",
    href: "/hesaplamalar/yas-hesaplama",
  },
  {
    title: "Gün Hesaplama",
    href: "/hesaplamalar/gun-hesaplama",
  },
  {
    title: "VKİ Hesaplama",
    href: "/hesaplamalar/vki-hesaplama",
  },
  {
    title: "İdeal Kilo Hesaplama",
    href: "/hesaplamalar/ideal-kilo-hesaplama",
  },
  {
    title: "Vücut Yağ Oranı Hesaplama",
    href: "/hesaplamalar/vucut-yag-orani-hesaplama",
  },
  {
    title: "Günlük Su İhtiyacı Hesaplama",
    href: "/hesaplamalar/su-ihtiyaci-hesaplama",
  },
  {
    title: "Günlük Kalori İhtiyacı Hesaplama",
    href: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
  },
  {
    title: "Bazal Metabolizma Hızı Hesaplama",
    href: "/hesaplamalar/bazal-metabolizma-hesaplama",
  },
  {
    title: "2026 Gelir Vergisi Hesaplama",
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
  },
  {
    title: "Kira Artış Hesaplama",
    href: "/hesaplamalar/kira-artis-hesaplama",
  },
  {
    title: "Mevduat Faizi Hesaplama",
    href: "/hesaplamalar/mevduat-faizi-hesaplama",
  },
];

export default function SearchBox() {
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  const filtered = calculations.filter((item) =>
    item.title.toLocaleLowerCase("tr-TR").includes(normalizedQuery)
  );

  return (
    <div className="relative w-full max-w-2xl">
      <div className="flex items-center rounded-2xl border border-slate-300 bg-white px-5 shadow-xl transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100">
        <Search className="shrink-0 text-slate-400" size={22} />

        <input
          type="search"
          placeholder="Hangi hesaplamayı arıyorsunuz?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="w-full bg-transparent px-4 py-5 text-lg text-slate-900 outline-none placeholder:text-slate-400"
          aria-label="Hesaplama ara"
        />
      </div>

      {normalizedQuery.length > 0 && (
        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-2xl">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setQuery("")}
                className="flex items-center justify-between border-b border-slate-100 px-6 py-4 font-medium text-slate-700 transition last:border-b-0 hover:bg-blue-50 hover:text-blue-700"
              >
                <span>{item.title}</span>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-slate-400"
                />
              </Link>
            ))
          ) : (
            <div className="px-6 py-4 text-slate-500">
              Sonuç bulunamadı.
            </div>
          )}
        </div>
      )}
    </div>
  );
}