import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Sayfa yolu"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-500"
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition hover:text-blue-600"
      >
        <Home size={16} />
        Ana Sayfa
      </Link>

      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2">
          <ChevronRight size={16} className="text-slate-400" />

          {item.href ? (
            <Link
              href={item.href}
              className="transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-700">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}