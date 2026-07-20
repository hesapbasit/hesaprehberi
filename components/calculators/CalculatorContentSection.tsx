import type { ReactNode } from "react";

type CalculatorContentSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function CalculatorContentSection({
  id,
  title,
  children,
}: CalculatorContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-28 border-b border-slate-200 py-10 first:pt-0 last:border-b-0 md:py-14"
    >
      <div className="mb-7">
        <div className="mb-4 h-1.5 w-16 rounded-full bg-blue-600" />

        <h2
          id={`${id}-title`}
          className="text-3xl font-black tracking-[-0.03em] text-slate-950 md:text-4xl"
        >
          {title}
        </h2>
      </div>

      <div className="space-y-6 text-base leading-8 text-slate-700 [&_a]:font-semibold [&_a]:text-blue-700 [&_a]:underline [&_a]:decoration-blue-200 [&_a]:underline-offset-4 [&_a:hover]:decoration-blue-600 [&_h3]:scroll-mt-28 [&_h4]:scroll-mt-28 [&_li]:leading-7 [&_p]:leading-8 [&_strong]:font-black [&_strong]:text-slate-950">
        {children}
      </div>
    </section>
  );
}