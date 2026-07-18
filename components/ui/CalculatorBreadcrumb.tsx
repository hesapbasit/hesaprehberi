import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

type CalculatorBreadcrumbProps = {
  currentPage: string;
};

export default function CalculatorBreadcrumb({
  currentPage,
}: CalculatorBreadcrumbProps) {
  return (
    <nav
      aria-label="Sayfa yolu"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
    >
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 transition hover:text-blue-600"
      >
        <Home size={16} aria-hidden="true" />
        <span>Ana Sayfa</span>
      </Link>

      <ChevronRight size={16} aria-hidden="true" />

      <Link
        href="/hesaplamalar"
        className="transition hover:text-blue-600"
      >
        Hesaplamalar
      </Link>

      <ChevronRight size={16} aria-hidden="true" />

      <span
        className="font-medium text-slate-800"
        aria-current="page"
      >
        {currentPage}
      </span>
    </nav>
  );
}