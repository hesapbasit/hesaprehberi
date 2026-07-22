import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import ShareButtons from "@/components/common/ShareButtons";
import CalculatorBreadcrumb from "@/components/ui/CalculatorBreadcrumb";
import RelatedCalculations from "@/components/ui/RelatedCalculations";

import {
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";

export type CalculatorFaqItem = {
  question: string;
  answer: string;
};

export type CalculatorRelatedItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type CalculatorInfoCard = {
  title: string;
  description: string;
};

export type CalculatorContentSection = {
  title: string;
  paragraphs?: string[];
  formula?: string;
  cards?: CalculatorInfoCard[];
};

type CommonCalculatorLayoutProps = {
  children: ReactNode;

  categoryClassName?: string;

  contentSections?: CalculatorContentSection[];
  faqItems?: CalculatorFaqItem[];

  /**
   * Bu alan verilmezse ilgili hesaplamalar merkezi
   * data/calculators.ts dosyasından otomatik oluşturulur.
   *
   * Özel bir liste verilirse o liste kullanılır.
   * Boş dizi verilirse ilgili hesaplamalar gizlenir.
   */
  relatedCalculations?: CalculatorRelatedItem[];

  warningTitle?: string;
  warningText?: string;

  showShareButtons?: boolean;
};

type CentralCalculatorLayoutProps = CommonCalculatorLayoutProps & {
  calculator: CalculatorItem;

  title?: never;
  category?: never;
  description?: never;
  canonicalPath?: never;
};

type ManualCalculatorLayoutProps = CommonCalculatorLayoutProps & {
  calculator?: never;

  title: string;
  category: string;
  description: string;
  canonicalPath: string;
};

type CalculatorLayoutProps =
  | CentralCalculatorLayoutProps
  | ManualCalculatorLayoutProps;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://https://hesaprehberionline.com";

function createJsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function CalculatorLayout({
  children,
  categoryClassName = "bg-blue-100 text-blue-700",
  contentSections = [],
  faqItems = [],
  relatedCalculations,
  warningTitle,
  warningText,
  showShareButtons = true,
  ...props
}: CalculatorLayoutProps) {
  const title =
    "calculator" in props && props.calculator
      ? props.calculator.title
      : props.title;

  const category =
    "calculator" in props && props.calculator
      ? props.calculator.category
      : props.category;

  const description =
    "calculator" in props && props.calculator
      ? props.calculator.description
      : props.description;

  const canonicalPath =
    "calculator" in props && props.calculator
      ? props.calculator.href
      : props.canonicalPath;

  const resolvedRelatedCalculations =
    relatedCalculations ?? getRelatedCalculators(canonicalPath);

  const pageUrl = new URL(canonicalPath, siteUrl).toString();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hesaplamalar",
        item: `${siteUrl}/hesaplamalar`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: title,
        item: pageUrl,
      },
    ],
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: title,
    description,
    url: pageUrl,
    applicationCategory: "CalculatorApplication",
    operatingSystem: "Web",
    isAccessibleForFree: true,
    inLanguage: "tr-TR",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TRY",
    },
  };

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(webApplicationSchema),
        }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: createJsonLd(faqSchema),
          }}
        />
      )}

      <main className="min-h-screen bg-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
          <CalculatorBreadcrumb currentPage={title} />

          <header className="mb-10">
            <span
              className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${categoryClassName}`}
            >
              {category}
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              {title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              {description}
            </p>

            {showShareButtons && (
              <div className="mt-6">
                <ShareButtons
                  title={`${title} | HesapRehberi`}
                  description={description}
                />
              </div>
            )}
          </header>

          {children}

          {contentSections.map((section) => (
            <section
              key={section.title}
              className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                {section.title}
              </h2>

              {section.paragraphs?.map((paragraph, index) => (
                <p
                  key={`${section.title}-paragraph-${index}`}
                  className="mt-5 max-w-5xl leading-8 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}

              {section.formula && (
                <div className="mt-6 rounded-2xl border border-blue-200 bg-blue-50 p-6">
                  <p className="font-semibold leading-7 text-blue-900">
                    {section.formula}
                  </p>
                </div>
              )}

              {section.cards && section.cards.length > 0 && (
                <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {section.cards.map((card) => (
                    <article
                      key={card.title}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <h3 className="font-bold text-slate-900">
                        {card.title}
                      </h3>

                      <p className="mt-3 leading-7 text-slate-600">
                        {card.description}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}

          {faqItems.length > 0 && (
            <section
              className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
              aria-labelledby="calculator-faq-title"
            >
              <span className="inline-flex rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
                Merak Edilenler
              </span>

              <h2
                id="calculator-faq-title"
                className="mt-5 text-2xl font-bold text-slate-900 md:text-3xl"
              >
                {title} hakkında sık sorulan sorular
              </h2>

              <div className="mt-8 divide-y divide-slate-200">
                {faqItems.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                      <span>{item.question}</span>

                      <span
                        aria-hidden="true"
                        className="text-xl text-blue-600 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>

                    <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {warningTitle && warningText && (
            <aside className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="text-xl font-bold text-amber-900">
                {warningTitle}
              </h2>

              <p className="mt-3 leading-7 text-amber-800">
                {warningText}
              </p>
            </aside>
          )}

          {resolvedRelatedCalculations.length > 0 && (
            <RelatedCalculations
              calculations={resolvedRelatedCalculations}
            />
          )}
        </div>
      </main>
    </>
  );
}