"use client";

import { Calculator, RotateCcw, Ruler, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";

type Gender = "male" | "female";

type Result = {
  bodyFatPercentage: number;
  category: string;
  leanBodyMass: number | null;
  fatMass: number | null;
};

const numberFormatter = new Intl.NumberFormat("tr-TR", {
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

function getBodyFatCategory(gender: Gender, percentage: number) {
  if (gender === "male") {
    if (percentage < 6) return "Çok düşük";
    if (percentage <= 13) return "Atletik";
    if (percentage <= 17) return "Formda";
    if (percentage <= 24) return "Ortalama";
    return "Yüksek";
  }

  if (percentage < 14) return "Çok düşük";
  if (percentage <= 20) return "Atletik";
  if (percentage <= 24) return "Formda";
  if (percentage <= 31) return "Ortalama";
  return "Yüksek";
}

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [height, setHeight] = useState("");
  const [neck, setNeck] = useState("");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function calculateBodyFat(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const heightValue = Number(height.replace(",", "."));
    const neckValue = Number(neck.replace(",", "."));
    const waistValue = Number(waist.replace(",", "."));
    const hipValue = Number(hip.replace(",", "."));
    const weightValue = weight ? Number(weight.replace(",", ".")) : null;

    if (
      !Number.isFinite(heightValue) ||
      !Number.isFinite(neckValue) ||
      !Number.isFinite(waistValue)
    ) {
      setError("Lütfen boy, boyun ve bel ölçülerini geçerli şekilde girin.");
      setResult(null);
      return;
    }

    if (heightValue < 120 || heightValue > 230) {
      setError("Boy değeri 120 ile 230 cm arasında olmalıdır.");
      setResult(null);
      return;
    }

    if (neckValue < 20 || neckValue > 70) {
      setError("Boyun çevresi 20 ile 70 cm arasında olmalıdır.");
      setResult(null);
      return;
    }

    if (waistValue < 40 || waistValue > 250) {
      setError("Bel çevresi 40 ile 250 cm arasında olmalıdır.");
      setResult(null);
      return;
    }

    if (waistValue <= neckValue) {
      setError("Bel çevresi, boyun çevresinden büyük olmalıdır.");
      setResult(null);
      return;
    }

    if (gender === "female") {
      if (!Number.isFinite(hipValue)) {
        setError("Kadınlar için kalça çevresi girilmelidir.");
        setResult(null);
        return;
      }

      if (hipValue < 50 || hipValue > 250) {
        setError("Kalça çevresi 50 ile 250 cm arasında olmalıdır.");
        setResult(null);
        return;
      }

      if (waistValue + hipValue <= neckValue) {
        setError("Girdiğiniz ölçüleri kontrol edin.");
        setResult(null);
        return;
      }
    }

    if (
      weightValue !== null &&
      (!Number.isFinite(weightValue) || weightValue < 30 || weightValue > 350)
    ) {
      setError("Kilo değeri 30 ile 350 kg arasında olmalıdır.");
      setResult(null);
      return;
    }

    const centimetersToInches = 0.3937007874;

    const heightInches = heightValue * centimetersToInches;
    const neckInches = neckValue * centimetersToInches;
    const waistInches = waistValue * centimetersToInches;
    const hipInches = hipValue * centimetersToInches;

    let bodyFatPercentage: number;

    if (gender === "male") {
      bodyFatPercentage =
        86.01 * Math.log10(waistInches - neckInches) -
        70.041 * Math.log10(heightInches) +
        36.76;
    } else {
      bodyFatPercentage =
        163.205 *
          Math.log10(waistInches + hipInches - neckInches) -
        97.684 * Math.log10(heightInches) -
        78.387;
    }

    if (
      !Number.isFinite(bodyFatPercentage) ||
      bodyFatPercentage <= 0 ||
      bodyFatPercentage > 75
    ) {
      setError(
        "Bu ölçülerle anlamlı bir sonuç hesaplanamadı. Ölçülerinizi kontrol edin."
      );
      setResult(null);
      return;
    }

    const fatMass =
      weightValue !== null
        ? weightValue * (bodyFatPercentage / 100)
        : null;

    const leanBodyMass =
      weightValue !== null && fatMass !== null
        ? weightValue - fatMass
        : null;

    setError("");
    setResult({
      bodyFatPercentage,
      category: getBodyFatCategory(gender, bodyFatPercentage),
      leanBodyMass,
      fatMass,
    });
  }

  function resetCalculator() {
    setGender("male");
    setHeight("");
    setNeck("");
    setWaist("");
    setHip("");
    setWeight("");
    setError("");
    setResult(null);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.85fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Calculator size={28} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Ölçülerinizi Girin
            </h2>

            <p className="mt-1 text-slate-600">
              Mezurayla aldığınız çevre ölçülerini santimetre olarak yazın.
            </p>
          </div>
        </div>

        <form onSubmit={calculateBodyFat} className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="gender"
              className="mb-2 block font-semibold text-slate-800"
            >
              Cinsiyet
            </label>

            <div className="relative">
              <UserRound
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <select
                id="gender"
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value as Gender);
                  setResult(null);
                  setError("");
                }}
                className="w-full appearance-none rounded-2xl border border-slate-300 bg-white py-4 pl-12 pr-4 text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
              >
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
              </select>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="height"
                className="mb-2 block font-semibold text-slate-800"
              >
                Boy
              </label>

              <div className="relative">
                <Ruler
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="height"
                  type="text"
                  inputMode="decimal"
                  value={height}
                  onChange={(event) => setHeight(event.target.value)}
                  placeholder="Örneğin: 175"
                  className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                  cm
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="neck"
                className="mb-2 block font-semibold text-slate-800"
              >
                Boyun çevresi
              </label>

              <div className="relative">
                <Ruler
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="neck"
                  type="text"
                  inputMode="decimal"
                  value={neck}
                  onChange={(event) => setNeck(event.target.value)}
                  placeholder="Örneğin: 38"
                  className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                  cm
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="waist"
                className="mb-2 block font-semibold text-slate-800"
              >
                Bel çevresi
              </label>

              <div className="relative">
                <Ruler
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  id="waist"
                  type="text"
                  inputMode="decimal"
                  value={waist}
                  onChange={(event) => setWaist(event.target.value)}
                  placeholder="Örneğin: 85"
                  className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                  cm
                </span>
              </div>
            </div>

            {gender === "female" && (
              <div>
                <label
                  htmlFor="hip"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Kalça çevresi
                </label>

                <div className="relative">
                  <Ruler
                    size={20}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="hip"
                    type="text"
                    inputMode="decimal"
                    value={hip}
                    onChange={(event) => setHip(event.target.value)}
                    placeholder="Örneğin: 100"
                    className="w-full rounded-2xl border border-slate-300 py-4 pl-12 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                  />

                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                    cm
                  </span>
                </div>
              </div>
            )}

            <div className={gender === "male" ? "md:col-span-2" : ""}>
              <label
                htmlFor="weight"
                className="mb-2 block font-semibold text-slate-800"
              >
                Kilo{" "}
                <span className="font-normal text-slate-500">
                  (isteğe bağlı)
                </span>
              </label>

              <div className="relative">
                <input
                  id="weight"
                  type="text"
                  inputMode="decimal"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                  placeholder="Yağ ve yağsız kütleyi görmek için girin"
                  className="w-full rounded-2xl border border-slate-300 py-4 pl-4 pr-14 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-medium text-slate-500">
                  kg
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-blue-900">
            <strong>Ölçüm önerisi:</strong> Mezurayı vücudunuza paralel
            tutun ve çok sıkmadan ölçüm yapın. Bel ölçüsünü göbek deliği
            hizasından, boyun ölçüsünü gırtlağın hemen altından alın.
          </div>

          {error && (
            <div
              role="alert"
              className="rounded-2xl border border-red-200 bg-red-50 p-5 font-medium text-red-700"
            >
              {error}
            </div>
          )}

          <div className="flex flex-col gap-4 sm:flex-row">
            <button
              type="submit"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 font-bold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-200"
            >
              <Calculator size={20} />
              Vücut Yağ Oranını Hesapla
            </button>

            <button
              type="button"
              onClick={resetCalculator}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-4 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
            >
              <RotateCcw size={19} />
              Temizle
            </button>
          </div>
        </form>
      </section>

      <aside className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-6 text-white shadow-xl md:p-10">
        <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
          Hesaplama Sonucu
        </span>

        {result ? (
          <div className="mt-10">
            <p className="text-emerald-100">Tahmini vücut yağ oranınız</p>

            <p className="mt-3 text-6xl font-bold tracking-tight">
              %{numberFormatter.format(result.bodyFatPercentage)}
            </p>

            <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 font-bold text-emerald-700">
              {result.category}
            </div>

            <div className="mt-10 space-y-4">
              {result.fatMass !== null && (
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm text-emerald-100">
                    Tahmini yağ kütlesi
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    {numberFormatter.format(result.fatMass)} kg
                  </p>
                </div>
              )}

              {result.leanBodyMass !== null && (
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                  <p className="text-sm text-emerald-100">
                    Tahmini yağsız vücut kütlesi
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    {numberFormatter.format(result.leanBodyMass)} kg
                  </p>
                </div>
              )}

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                <p className="text-sm text-emerald-100">
                  Kullanılan hesaplama
                </p>

                <p className="mt-2 font-semibold">
                  ABD Donanması çevre ölçümü yöntemi
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-sm leading-7 text-emerald-50">
              Sonuç, çevre ölçülerine dayanan yaklaşık bir değerdir. Ölçüm
              farklılıkları ve kişisel vücut yapısı sonucu etkileyebilir.
            </div>
          </div>
        ) : (
          <div className="mt-12">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10">
              <Calculator size={44} />
            </div>

            <h3 className="mt-8 text-3xl font-bold">
              Sonucunuz burada görünecek
            </h3>

            <p className="mt-5 leading-8 text-emerald-100">
              Cinsiyetinizi ve çevre ölçülerinizi girdikten sonra tahmini
              vücut yağ oranınızı hesaplayabilirsiniz.
            </p>

            <ul className="mt-8 space-y-4 text-emerald-50">
              <li className="rounded-2xl bg-white/10 px-5 py-4">
                Tahmini vücut yağ yüzdesi
              </li>

              <li className="rounded-2xl bg-white/10 px-5 py-4">
                Sonuç değerlendirme kategorisi
              </li>

              <li className="rounded-2xl bg-white/10 px-5 py-4">
                Kilo girildiğinde yağ ve yağsız kütle
              </li>
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}