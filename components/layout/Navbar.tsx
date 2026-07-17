"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  {
    label: "Hesaplamalar",
    href: "/hesaplamalar",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="shrink-0 text-2xl font-extrabold tracking-tight text-slate-900 transition hover:opacity-90 sm:text-3xl"
        >
          Hesap<span className="text-blue-600">Rehberi</span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex lg:gap-9 lg:text-[15px]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/hesaplamalar"
            className="whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Tüm Hesaplamalar
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 md:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 shadow-lg md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/hesaplamalar"
              onClick={closeMenu}
              className="mt-2 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Tüm Hesaplamalar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}