import {
  ShieldCheck,
  Zap,
  Calculator,
} from "lucide-react";
import SearchBox from "@/components/ui/SearchBox";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100">

      {/* Arka Plan Efektleri */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl"></div>
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-100/50 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">

        {/* Üst Rozet */}
        <span className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700">
          🇹🇷 Türkiye'nin Finans Hesaplama Platformu
        </span>

        {/* Başlık */}
        <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
          Hesaplamanın
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            En Kolay Yolu
          </span>
        </h1>

        {/* Açıklama */}
        <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-600">
          Kredi, KDV, faiz, maaş, döviz, enflasyon ve onlarca hesaplama
          aracını saniyeler içerisinde ücretsiz kullanın.
        </p>

        {/* Arama Kutusu */}
        <div className="mt-12 w-full flex justify-center">
          <SearchBox />
        </div>

        {/* Özellikler */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-slate-600">

          <div className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" size={20} />
            <span>Güvenilir Sonuçlar</span>
          </div>

          <div className="flex items-center gap-2">
            <Zap className="text-yellow-500" size={20} />
            <span>Anında Hesaplama</span>
          </div>

          <div className="flex items-center gap-2">
            <Calculator className="text-blue-600" size={20} />
            <span>Tamamen Ücretsiz</span>
          </div>

        </div>

        {/* İstatistik Kartları */}
        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-600">30+</h2>
            <p className="mt-3 text-slate-600">
              Hesaplama Aracı
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-600">%100</h2>
            <p className="mt-3 text-slate-600">
              Ücretsiz
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-600">7/24</h2>
            <p className="mt-3 text-slate-600">
              Kesintisiz Erişim
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-4xl font-bold text-blue-600">⚡</h2>
            <p className="mt-3 text-slate-600">
              Hızlı Sonuç
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}