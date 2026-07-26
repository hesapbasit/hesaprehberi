"use client";

import {
  AlertTriangle,
  BadgeCheck,
  Banknote,
  Calculator,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Download,
  Info,
  Landmark,
  Percent,
  Printer,
  ReceiptText,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  WalletCards,
} from "lucide-react";
import { useMemo, useState } from "react";

type PaymentRow = {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  remaining: number;
};

type CalculationResult = {
  vehiclePriceValue: number;
  downPaymentValue: number;
  monthlyRateValue: number;
  termValue: number;
  loanAmount: number;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  downPaymentRatio: number;
  loanRatio: number;
  firstInstallmentInterest: number;
  firstInstallmentPrincipal: number;
  lastInstallmentInterest: number;
  lastInstallmentPrincipal: number;
  averageMonthlyInterest: number;
  paymentPlan: PaymentRow[];
  isValid: boolean;
  validationMessage: string | null;
};

const DEFAULTS = {
  vehiclePrice: "1.000.000",
  downPayment: "300.000",
  monthlyRate: "3,49",
  term: "36",
};

const TERM_OPTIONS = [12, 18, 24, 36, 48, 60];

const currencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactCurrencyFormatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  notation: "compact",
  maximumFractionDigits: 1,
});

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  maximumFractionDigits: 2,
});

function parseNumericInput(value: string): number {
  const normalized = value
    .replace(/\s/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^\d.-]/g, "");

  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : 0;
}

function formatInputNumber(value: number): string {
  if (!Number.isFinite(value) || value < 0) {
    return "";
  }

  return new Intl.NumberFormat("tr-TR", {
    maximumFractionDigits: 2,
  }).format(value);
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function calculateMonthlyPayment(
  principal: number,
  monthlyRatePercent: number,
  term: number,
): number {
  if (principal <= 0 || term <= 0) {
    return 0;
  }

  const monthlyRate = monthlyRatePercent / 100;

  if (monthlyRate === 0) {
    return principal / term;
  }

  const factor = Math.pow(1 + monthlyRate, term);

  return principal * ((monthlyRate * factor) / (factor - 1));
}

function createPaymentPlan(
  principal: number,
  monthlyRatePercent: number,
  term: number,
  monthlyPayment: number,
): PaymentRow[] {
  if (principal <= 0 || term <= 0 || monthlyPayment <= 0) {
    return [];
  }

  const monthlyRate = monthlyRatePercent / 100;
  const rows: PaymentRow[] = [];
  let remaining = principal;

  for (let month = 1; month <= term; month += 1) {
    const interest = monthlyRate === 0 ? 0 : remaining * monthlyRate;
    let principalPayment = monthlyPayment - interest;
    let payment = monthlyPayment;

    if (month === term || principalPayment > remaining) {
      principalPayment = remaining;
      payment = principalPayment + interest;
    }

    remaining = Math.max(0, remaining - principalPayment);

    rows.push({
      month,
      payment,
      principal: principalPayment,
      interest,
      remaining,
    });
  }

  return rows;
}

function getValidationMessage({
  vehiclePrice,
  downPayment,
  monthlyRate,
  term,
}: {
  vehiclePrice: number;
  downPayment: number;
  monthlyRate: number;
  term: number;
}): string | null {
  if (vehiclePrice <= 0) {
    return "Araç fiyatı sıfırdan büyük olmalıdır.";
  }

  if (downPayment < 0) {
    return "Peşinat negatif olamaz.";
  }

  if (downPayment >= vehiclePrice) {
    return "Peşinat, araç fiyatından düşük olmalıdır.";
  }

  if (monthlyRate < 0) {
    return "Aylık faiz oranı negatif olamaz.";
  }

  if (term < 1) {
    return "Vade en az 1 ay olmalıdır.";
  }

  if (term > 120) {
    return "Vade en fazla 120 ay olabilir.";
  }

  return null;
}

function formatCsvNumber(value: number): string {
  return value.toFixed(2).replace(".", ",");
}

function MetricCard({
  label,
  value,
  description,
  icon: Icon,
  tone = "blue",
}: {
  label: string;
  value: string;
  description: string;
  icon: typeof Calculator;
  tone?: "blue" | "emerald" | "amber" | "violet";
}) {
  const toneClasses = {
    blue: "border-blue-200 bg-blue-50 text-blue-700",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    violet: "border-violet-200 bg-violet-50 text-violet-700",
  };

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-slate-500">{label}</p>
          <strong className="mt-2 block text-2xl font-black tracking-tight text-slate-950">
            {value}
          </strong>
        </div>

        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${toneClasses[tone]}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

function InputField({
  label,
  value,
  onChange,
  onBlur,
  suffix,
  inputMode = "decimal",
  min,
  max,
  step,
  helpText,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  suffix: string;
  inputMode?: "decimal" | "numeric";
  min?: number;
  max?: number;
  step?: number;
  helpText?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-extrabold text-slate-800">{label}</span>

      <div className="relative mt-2">
        <input
          inputMode={inputMode}
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(event.target.value)}
          onBlur={onBlur}
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-4 pr-14 text-lg font-black text-slate-950 outline-none transition placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-extrabold text-slate-500">
          {suffix}
        </span>
      </div>

      {helpText ? (
        <span className="mt-2 block text-xs leading-5 text-slate-500">
          {helpText}
        </span>
      ) : null}
    </label>
  );
}

export default function VehicleLoanCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState(DEFAULTS.vehiclePrice);
  const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
  const [monthlyRate, setMonthlyRate] = useState(DEFAULTS.monthlyRate);
  const [term, setTerm] = useState(DEFAULTS.term);
  const [showFullPlan, setShowFullPlan] = useState(false);

  const calculation = useMemo<CalculationResult>(() => {
    const vehiclePriceValue = parseNumericInput(vehiclePrice);
    const downPaymentValue = parseNumericInput(downPayment);
    const monthlyRateValue = parseNumericInput(monthlyRate);
    const termValue = Math.floor(parseNumericInput(term));

    const validationMessage = getValidationMessage({
      vehiclePrice: vehiclePriceValue,
      downPayment: downPaymentValue,
      monthlyRate: monthlyRateValue,
      term: termValue,
    });

    const loanAmount = Math.max(0, vehiclePriceValue - downPaymentValue);
    const isValid = validationMessage === null;

    const monthlyPayment = isValid
      ? calculateMonthlyPayment(loanAmount, monthlyRateValue, termValue)
      : 0;

    const paymentPlan = isValid
      ? createPaymentPlan(
          loanAmount,
          monthlyRateValue,
          termValue,
          monthlyPayment,
        )
      : [];

    const totalPayment = paymentPlan.reduce(
      (sum, row) => sum + row.payment,
      0,
    );

    const totalInterest = Math.max(0, totalPayment - loanAmount);

    const downPaymentRatio =
      vehiclePriceValue > 0
        ? clamp((downPaymentValue / vehiclePriceValue) * 100, 0, 100)
        : 0;

    const loanRatio = Math.max(0, 100 - downPaymentRatio);
    const firstRow = paymentPlan.at(0);
    const lastRow = paymentPlan.at(-1);

    return {
      vehiclePriceValue,
      downPaymentValue,
      monthlyRateValue,
      termValue,
      loanAmount,
      monthlyPayment,
      totalPayment,
      totalInterest,
      downPaymentRatio,
      loanRatio,
      firstInstallmentInterest: firstRow?.interest ?? 0,
      firstInstallmentPrincipal: firstRow?.principal ?? 0,
      lastInstallmentInterest: lastRow?.interest ?? 0,
      lastInstallmentPrincipal: lastRow?.principal ?? 0,
      averageMonthlyInterest:
        termValue > 0 ? totalInterest / termValue : 0,
      paymentPlan,
      isValid,
      validationMessage,
    };
  }, [vehiclePrice, downPayment, monthlyRate, term]);

  const visibleRows = showFullPlan
    ? calculation.paymentPlan
    : calculation.paymentPlan.slice(0, 12);

  const principalShare =
    calculation.totalPayment > 0
      ? (calculation.loanAmount / calculation.totalPayment) * 100
      : 0;

  const interestShare = Math.max(0, 100 - principalShare);

  const handleReset = () => {
    setVehiclePrice(DEFAULTS.vehiclePrice);
    setDownPayment(DEFAULTS.downPayment);
    setMonthlyRate(DEFAULTS.monthlyRate);
    setTerm(DEFAULTS.term);
    setShowFullPlan(false);
  };

  const handleDownPaymentRatioChange = (ratio: number) => {
    const vehiclePriceValue = parseNumericInput(vehiclePrice);

    if (vehiclePriceValue <= 0) {
      return;
    }

    const nextDownPayment = vehiclePriceValue * (ratio / 100);
    setDownPayment(formatInputNumber(nextDownPayment));
  };

  const handleExportCsv = () => {
    if (!calculation.isValid || calculation.paymentPlan.length === 0) {
      return;
    }

    const header = [
      "Ay",
      "Taksit",
      "Anapara",
      "Faiz",
      "Kalan Borç",
    ];

    const rows = calculation.paymentPlan.map((row) => [
      String(row.month),
      formatCsvNumber(row.payment),
      formatCsvNumber(row.principal),
      formatCsvNumber(row.interest),
      formatCsvNumber(row.remaining),
    ]);

    const summaryRows = [
      [],
      ["Özet"],
      ["Araç Fiyatı", formatCsvNumber(calculation.vehiclePriceValue)],
      ["Peşinat", formatCsvNumber(calculation.downPaymentValue)],
      ["Kredi Tutarı", formatCsvNumber(calculation.loanAmount)],
      ["Aylık Faiz", formatCsvNumber(calculation.monthlyRateValue)],
      ["Vade", String(calculation.termValue)],
      ["Aylık Taksit", formatCsvNumber(calculation.monthlyPayment)],
      ["Toplam Faiz", formatCsvNumber(calculation.totalInterest)],
      ["Toplam Geri Ödeme", formatCsvNumber(calculation.totalPayment)],
    ];

    const csvContent = [header, ...rows, ...summaryRows]
      .map((row) => row.map((cell) => `"${cell ?? ""}"`).join(";"))
      .join("\n");

    const blob = new Blob([`\uFEFF${csvContent}`], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = "tasit-kredisi-odeme-plani.csv";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section
      id="hesaplama-araci"
      className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50"
    >
      <div className="relative overflow-hidden border-b border-slate-200 bg-slate-950 px-6 py-8 text-white md:px-10 md:py-10">
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-24 left-1/4 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-blue-100 ring-1 ring-white/15">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Premium hesaplama deneyimi
            </span>

            <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
              Taşıt Kredisi Hesaplama Aracı
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Araç fiyatı, peşinat, aylık faiz oranı ve vade bilgilerini girin;
              aylık taksiti, toplam faiz yükünü ve ayrıntılı ödeme planını anında
              görüntüleyin.
            </p>
          </div>

          <div className="grid shrink-0 grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {[
              { icon: Calculator, label: "Canlı sonuç" },
              { icon: ReceiptText, label: "Ödeme planı" },
              { icon: Download, label: "CSV çıktısı" },
              { icon: ShieldCheck, label: "Ücretsiz" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-3 text-xs font-bold text-slate-200 ring-1 ring-white/10"
              >
                <Icon className="h-4 w-4 text-blue-300" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
        <div className="p-6 md:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
                Kredi bilgileri
              </p>
              <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                Araç ve ödeme detaylarını girin
              </h3>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
              Sıfırla
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <InputField
              label="Araç fiyatı"
              value={vehiclePrice}
              onChange={setVehiclePrice}
              onBlur={() =>
                setVehiclePrice(
                  formatInputNumber(parseNumericInput(vehiclePrice)),
                )
              }
              suffix="TL"
              helpText="Satın almayı planladığınız aracın satış fiyatı."
            />

            <InputField
              label="Peşinat"
              value={downPayment}
              onChange={setDownPayment}
              onBlur={() =>
                setDownPayment(
                  formatInputNumber(parseNumericInput(downPayment)),
                )
              }
              suffix="TL"
              helpText="Kendi birikiminizden ödeyeceğiniz tutar."
            />

            <InputField
              label="Aylık faiz oranı"
              value={monthlyRate}
              onChange={setMonthlyRate}
              onBlur={() =>
                setMonthlyRate(
                  formatInputNumber(parseNumericInput(monthlyRate)),
                )
              }
              suffix="%"
              helpText="Bankanın teklif ettiği aylık nominal faiz."
            />

            <InputField
              label="Vade"
              value={term}
              onChange={setTerm}
              onBlur={() =>
                setTerm(
                  String(
                    clamp(
                      Math.floor(parseNumericInput(term)),
                      1,
                      120,
                    ),
                  ),
                )
              }
              suffix="Ay"
              inputMode="numeric"
              min={1}
              max={120}
              step={1}
              helpText="Kredinin toplam geri ödeme süresi."
            />
          </div>

          <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5 md:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-extrabold text-slate-900">
                  Peşinat oranı
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Peşinatı sürükleyerek kredi ihtiyacını hızlıca değiştirin.
                </p>
              </div>

              <strong className="text-2xl font-black text-blue-700">
                %{numberFormatter.format(calculation.downPaymentRatio)}
              </strong>
            </div>

            <input
              type="range"
              min="0"
              max="90"
              step="1"
              value={Math.round(calculation.downPaymentRatio)}
              onChange={(event) =>
                handleDownPaymentRatioChange(Number(event.target.value))
              }
              className="mt-5 h-2 w-full cursor-pointer accent-blue-600"
              aria-label="Peşinat oranı"
            />

            <div className="mt-3 flex justify-between text-xs font-bold text-slate-500">
              <span>%0</span>
              <span>%25</span>
              <span>%50</span>
              <span>%75</span>
              <span>%90</span>
            </div>
          </div>

          <div className="mt-7">
            <p className="text-sm font-extrabold text-slate-900">
              Hızlı vade seçimi
            </p>

            <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {TERM_OPTIONS.map((option) => {
                const isActive = calculation.termValue === option;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTerm(String(option))}
                    className={`rounded-2xl border px-3 py-3 text-sm font-black transition ${
                      isActive
                        ? "border-blue-600 bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                        : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    }`}
                  >
                    {option} ay
                  </button>
                );
              })}
            </div>
          </div>

          {calculation.validationMessage ? (
            <div
              role="alert"
              className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-5"
            >
              <div className="flex items-start gap-4">
                <AlertTriangle
                  className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-black text-amber-950">
                    Bilgileri kontrol edin
                  </p>
                  <p className="mt-1 text-sm leading-6 text-amber-900">
                    {calculation.validationMessage}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-7 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-black text-emerald-950">
                    Hesaplama hazır
                  </p>
                  <p className="mt-1 text-sm leading-6 text-emerald-900">
                    Girdiğiniz değerlere göre kredi sonuçları ve ödeme planı
                    otomatik olarak güncellendi.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10 lg:border-l lg:border-t-0">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
            Hesaplama sonucu
          </p>

          <div className="mt-4 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-7 text-white shadow-xl shadow-blue-900/20">
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                <Banknote className="h-6 w-6" aria-hidden="true" />
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-extrabold text-blue-100 ring-1 ring-white/15">
                {calculation.termValue || 0} ay vade
              </span>
            </div>

            <p className="mt-7 text-sm font-bold text-blue-100">
              Tahmini aylık taksit
            </p>

            <strong className="mt-2 block break-words text-4xl font-black tracking-tight md:text-5xl">
              {currencyFormatter.format(calculation.monthlyPayment)}
            </strong>

            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <span className="text-xs font-bold text-blue-100">
                  Kredi tutarı
                </span>
                <strong className="mt-2 block text-lg font-black">
                  {compactCurrencyFormatter.format(calculation.loanAmount)}
                </strong>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                <span className="text-xs font-bold text-blue-100">
                  Toplam faiz
                </span>
                <strong className="mt-2 block text-lg font-black">
                  {compactCurrencyFormatter.format(calculation.totalInterest)}
                </strong>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-4">
            <MetricCard
              label="Kredi tutarı"
              value={currencyFormatter.format(calculation.loanAmount)}
              description={`Araç fiyatının yaklaşık %${numberFormatter.format(
                calculation.loanRatio,
              )} kadarı krediyle karşılanıyor.`}
              icon={Landmark}
              tone="blue"
            />

            <MetricCard
              label="Toplam faiz"
              value={currencyFormatter.format(calculation.totalInterest)}
              description="Vade boyunca ana paranın üzerinde ödenecek yaklaşık faiz tutarı."
              icon={TrendingUp}
              tone="amber"
            />

            <MetricCard
              label="Toplam geri ödeme"
              value={currencyFormatter.format(calculation.totalPayment)}
              description="Aylık taksitlerin toplamıdır; ek masraflar dahil değildir."
              icon={ReceiptText}
              tone="emerald"
            />
          </div>

          <div className="mt-5 rounded-3xl border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-start gap-3">
              <Info
                className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                aria-hidden="true"
              />
              <p className="text-sm leading-7 text-blue-950">
                Sonuçlara kredi tahsis ücreti, kasko, hayat sigortası, rehin,
                ekspertiz ve benzeri giderler dahil değildir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {calculation.isValid ? (
        <>
          <div className="border-t border-slate-200 bg-white p-6 md:p-10">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label="Peşinat oranı"
                value={`%${numberFormatter.format(
                  calculation.downPaymentRatio,
                )}`}
                description="Araç fiyatının kendi birikiminizle karşılanan bölümü."
                icon={WalletCards}
                tone="emerald"
              />

              <MetricCard
                label="Kredi oranı"
                value={`%${numberFormatter.format(calculation.loanRatio)}`}
                description="Araç fiyatının finansman yoluyla karşılanan bölümü."
                icon={Percent}
                tone="blue"
              />

              <MetricCard
                label="Aylık ortalama faiz"
                value={currencyFormatter.format(
                  calculation.averageMonthlyInterest,
                )}
                description="Toplam faiz yükünün vade ayına bölünmüş yaklaşık değeri."
                icon={ChartNoAxesCombined}
                tone="violet"
              />

              <MetricCard
                label="İlk ay faiz payı"
                value={currencyFormatter.format(
                  calculation.firstInstallmentInterest,
                )}
                description="İlk taksidin faiz olarak ayrılan yaklaşık kısmı."
                icon={TrendingDown}
                tone="amber"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-10">
            <div className="grid gap-8 xl:grid-cols-[1fr_0.9fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
                  Maliyet dağılımı
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  Ana para ve faiz oranı
                </h3>

                <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="h-4 overflow-hidden rounded-full bg-slate-200">
                    <div className="flex h-full w-full">
                      <div
                        className="h-full bg-blue-600 transition-all"
                        style={{ width: `${principalShare}%` }}
                      />
                      <div
                        className="h-full bg-amber-500 transition-all"
                        style={{ width: `${interestShare}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-blue-600" />
                        <p className="text-sm font-black text-blue-950">
                          Ana para
                        </p>
                      </div>
                      <strong className="mt-3 block text-2xl font-black text-blue-950">
                        %{numberFormatter.format(principalShare)}
                      </strong>
                      <p className="mt-2 text-sm text-blue-900">
                        {currencyFormatter.format(calculation.loanAmount)}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <div className="flex items-center gap-3">
                        <span className="h-3 w-3 rounded-full bg-amber-500" />
                        <p className="text-sm font-black text-amber-950">
                          Faiz yükü
                        </p>
                      </div>
                      <strong className="mt-3 block text-2xl font-black text-amber-950">
                        %{numberFormatter.format(interestShare)}
                      </strong>
                      <p className="mt-2 text-sm text-amber-900">
                        {currencyFormatter.format(calculation.totalInterest)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
                  Taksit yapısı
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  İlk ve son taksit karşılaştırması
                </h3>

                <div className="mt-6 space-y-4">
                  <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-black text-slate-950">
                          İlk taksit
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Faiz payı başlangıçta daha yüksektir.
                        </p>
                      </div>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">
                        1. ay
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">
                          Ana para
                        </p>
                        <p className="mt-2 font-black text-slate-950">
                          {currencyFormatter.format(
                            calculation.firstInstallmentPrincipal,
                          )}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">Faiz</p>
                        <p className="mt-2 font-black text-slate-950">
                          {currencyFormatter.format(
                            calculation.firstInstallmentInterest,
                          )}
                        </p>
                      </div>
                    </div>
                  </article>

                  <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-black text-slate-950">
                          Son taksit
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          Vade sonunda ana para payı yükselir.
                        </p>
                      </div>
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                        {calculation.termValue}. ay
                      </span>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">
                          Ana para
                        </p>
                        <p className="mt-2 font-black text-slate-950">
                          {currencyFormatter.format(
                            calculation.lastInstallmentPrincipal,
                          )}
                        </p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-xs font-bold text-slate-500">Faiz</p>
                        <p className="mt-2 font-black text-slate-950">
                          {currencyFormatter.format(
                            calculation.lastInstallmentInterest,
                          )}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-6 md:p-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
                  Ödeme planı
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-950">
                  Aylık taksit dağılımı
                </h3>
                <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                  Her ay ödenecek taksidin ana para ve faiz dağılımını, kalan
                  borçla birlikte inceleyin.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleExportCsv}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-extrabold text-emerald-700 transition hover:bg-emerald-100"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  CSV indir
                </button>

                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50"
                >
                  <Printer className="h-4 w-4" aria-hidden="true" />
                  Yazdır
                </button>

                {calculation.paymentPlan.length > 12 ? (
                  <button
                    type="button"
                    onClick={() => setShowFullPlan((current) => !current)}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-extrabold text-blue-700 transition hover:bg-blue-100"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        showFullPlan ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                    {showFullPlan
                      ? "İlk 12 ayı göster"
                      : `Tüm ${calculation.termValue} ayı göster`}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[860px] text-sm">
                  <thead className="bg-slate-950 text-white">
                    <tr>
                      <th className="px-5 py-4 text-left font-extrabold">Ay</th>
                      <th className="px-5 py-4 text-right font-extrabold">
                        Taksit
                      </th>
                      <th className="px-5 py-4 text-right font-extrabold">
                        Ana para
                      </th>
                      <th className="px-5 py-4 text-right font-extrabold">
                        Faiz
                      </th>
                      <th className="px-5 py-4 text-right font-extrabold">
                        Kalan borç
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-slate-200 bg-white">
                    {visibleRows.map((row) => (
                      <tr
                        key={row.month}
                        className="transition hover:bg-blue-50/50"
                      >
                        <td className="whitespace-nowrap px-5 py-4">
                          <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-slate-100 px-2 text-xs font-black text-slate-700">
                            {row.month}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-right font-black text-slate-950">
                          {currencyFormatter.format(row.payment)}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-blue-700">
                          {currencyFormatter.format(row.principal)}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-right font-semibold text-amber-700">
                          {currencyFormatter.format(row.interest)}
                        </td>
                        <td className="whitespace-nowrap px-5 py-4 text-right font-black text-slate-950">
                          {currencyFormatter.format(row.remaining)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {!showFullPlan && calculation.paymentPlan.length > 12 ? (
              <p className="mt-4 text-center text-sm text-slate-500">
                İlk 12 ay gösteriliyor. Tam ödeme planını görmek için yukarıdaki
                düğmeyi kullanın.
              </p>
            ) : null}
          </div>
        </>
      ) : null}

      <div className="border-t border-slate-200 bg-slate-50 p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {
              icon: BadgeCheck,
              title: "Tahmini sonuç",
              text: "Hesaplama eşit taksitli kredi formülüyle yapılır.",
            },
            {
              icon: ShieldCheck,
              title: "Ek masrafları kontrol edin",
              text: "Sigorta, kasko ve banka ücretleri ayrıca değerlendirilmelidir.",
            },
            {
              icon: CircleDollarSign,
              title: "Toplam maliyete bakın",
              text: "Yalnızca aylık taksite göre karar vermeyin.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-black text-slate-950">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}