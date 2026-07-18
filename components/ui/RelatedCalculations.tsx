import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export type RelatedCalculation = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type RelatedCalculationsProps = {
  title?: string;
  calculations: RelatedCalculation[];
};

export default function RelatedCalculations({
  title = "İlgili Hesaplamalar",
  calculations,
}: RelatedCalculationsProps) {
  if (calculations.length === 0) {
    return null;
  }

  return (
    <section className="mt-16" aria-labelledby="related-calculations-title">
      <div className="mb-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Bunlar da ilginizi çekebilir
        </span>

        <h2
          id="related-calculations-title"
          className="mt-5 text-3xl font-bold text-slate-900 md:text-4xl"
        >
          {title}
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          Benzer konulardaki diğer ücretsiz hesaplama araçlarını
          kullanabilirsiniz.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {calculations.map((calculation) => {
          const Icon = calculation.icon;

          return (
            <Link
              key={calculation.href}
              href={calculation.href}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={24} aria-hidden="true" />
                </div>

                <ArrowRight
                  size={20}
                  aria-hidden="true"
                  className="mt-1 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-900 transition group-hover:text-blue-700">
                {calculation.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {calculation.description}
              </p>

              <span className="mt-5 inline-flex font-semibold text-blue-700">
                Hesaplamaya git
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}