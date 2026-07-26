"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3 transition-opacity hover:opacity-90"
        >
          <Image
            src="/logo.png"
            alt="HesapRehberi"
            width={46}
            height={46}
            priority
            className="h-11 w-11 rounded-xl"
          />

          <span className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
            Hesap<span className="text-blue-600">Rehberi</span>
          </span>
        </Link>

        {/* Desktop Menü */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-700 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-200 hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Buton */}
        <div className="hidden xl:block">
          <Link
            href="/hesaplamalar"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
          >
            Tüm Hesaplamalar
          </Link>
        </div>

        {/* Mobil Menü Butonu */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-300 hover:text-blue-600 md:hidden"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-6 py-5">
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
              className="mt-3 rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Tüm Hesaplamalar
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}