import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-10 md:grid-cols-4">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Hesap<span className="text-blue-600">Rehberi</span>
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Türkiye'nin ücretsiz finans ve hesaplama platformu.
            </p>
          </div>

          {/* Hesaplamalar */}
          <div>
            <h3 className="font-bold text-slate-900">Hesaplamalar</h3>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li><Link href="/hesaplamalar/kdv-hesaplama">KDV Hesaplama</Link></li>
              <li><Link href="/hesaplamalar/kredi-hesaplama">Kredi Hesaplama</Link></li>
              <li><Link href="/hesaplamalar/faiz-hesaplama">Faiz Hesaplama</Link></li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="font-bold text-slate-900">Kurumsal</h3>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li><Link href="/hakkimizda">Hakkımızda</Link></li>
              <li><Link href="/iletisim">İletişim</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          {/* Yasal */}
          <div>
            <h3 className="font-bold text-slate-900">Yasal</h3>

            <ul className="mt-5 space-y-3 text-slate-600">
              <li><Link href="/gizlilik-politikasi">Gizlilik Politikası</Link></li>
              <li><Link href="/kullanim-sartlari">Kullanım Şartları</Link></li>
              <li><Link href="/cerez-politikasi">Çerez Politikası</Link></li>
            </ul>
          </div>

        </div>

        <div className="mt-14 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © 2026 HesapRehberi. Tüm hakları saklıdır.
        </div>

      </div>
    </footer>
  );
}