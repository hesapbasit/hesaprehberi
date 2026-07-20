import { ChevronDown } from "lucide-react";

type CalculatorFaqItemProps = {
  question: string;
  answer: string;
};

export default function CalculatorFaqItem({
  question,
  answer,
}: CalculatorFaqItemProps) {
  return (
    <details className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition open:border-blue-200 open:shadow-md">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-black text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-6">
        <span>{question}</span>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-open:rotate-180 group-open:bg-blue-600 group-open:text-white">
          <ChevronDown className="h-5 w-5" aria-hidden="true" />
        </span>
      </summary>

      <div className="border-t border-slate-200 px-5 py-5 sm:px-6">
        <p className="text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {answer}
        </p>
      </div>
    </details>
  );
}