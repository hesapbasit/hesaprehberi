import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

type Props = {
  title: string;
  icon: LucideIcon;
  href?: string;
};

export default function CategoryCard({
  title,
  icon: Icon,
  href = "#",
}: Props) {
  return (
    <Link href={href}>
      <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-50 transition-all duration-500 group-hover:scale-150"></div>

        <div className="relative">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <Icon size={30} />
          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-3 leading-7 text-slate-500">
            Hesaplama aracını açın ve saniyeler içinde sonucunuzu öğrenin.
          </p>

          <div className="mt-8 flex items-center justify-between">
            <span className="font-semibold text-blue-600">
              Hesaplamaya Git
            </span>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <ArrowRight size={20} />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}