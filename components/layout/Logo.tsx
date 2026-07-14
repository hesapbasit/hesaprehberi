import { Calculator } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
        <Calculator size={24} className="text-white" />
      </div>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Hesap<span className="text-blue-600">Rehberi</span>
        </h1>

        <p className="text-xs text-slate-500">
          Finansal Hesaplama Platformu
        </p>
      </div>
    </Link>
  );
}