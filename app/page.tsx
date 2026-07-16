import {
  Activity,
  BadgePercent,
  Banknote,
  Briefcase,
  CalendarDays,
  CalendarRange,
  ChartNoAxesColumn,
  Droplets,
  House,
  Landmark,
  Percent,
  PiggyBank,
  Receipt,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Link from "next/link";

import Hero from "@/components/layout/Hero";
import CategoryCard from "@/components/ui/CategoryCard";
import HomeFaq from "@/components/ui/HomeFaq";
import LatestArticles from "@/components/ui/LatestArticles";

const categories = [
  {
    title: "Kredi Hesaplama",
    icon: Wallet,
    href: "/hesaplamalar/kredi-hesaplama",
  },
  {
    title: "KDV Hesaplama",
    icon: Receipt,
    href: "/hesaplamalar/kdv-hesaplama",
  },
  {
    title: "Faiz Hesaplama",
    icon: TrendingUp,
    href: "/hesaplamalar/faiz-hesaplama",
  },
  {
    title: "Maaş Hesaplama",
    icon: Briefcase,
    href: "/hesaplamalar/maas-hesaplama",
  },
  {
    title: "Döviz Hesaplama",
    icon: Banknote,
    href: "/hesaplamalar/doviz-hesaplama",
  },
  {
    title: "Enflasyon Hesaplama",
    icon: ChartNoAxesColumn,
    href: "/hesaplamalar/enflasyon-hesaplama",
  },
  {
    title: "Yüzde Hesaplama",
    icon: Percent,
    href: "/hesaplamalar/yuzde-hesaplama",
  },
  {
    title: "İndirim Hesaplama",
    icon: BadgePercent,
    href: "/hesaplamalar/indirim-hesaplama",
  },
  {
    title: "Yaş Hesaplama",
    icon: CalendarDays,
    href: "/hesaplamalar/yas-hesaplama",
  },
  {
    title: "Gün Hesaplama",
    icon: CalendarRange,
    href: "/hesaplamalar/gun-hesaplama",
  },
  {
    title: "VKİ Hesaplama",
    icon: Activity,
    href: "/hesaplamalar/vki-hesaplama",
  },
  {
    title: "Günlük Su İhtiyacı Hesaplama",
    icon: Droplets,
    href: "/hesaplamalar/su-ihtiyaci-hesaplama",
  },
  {
    title: "2026 Gelir Vergisi Hesaplama",
    icon: Landmark,
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
  },
  {
    title: "Kira Artış Hesaplama",
    icon: House,
    href: "/hesaplamalar/kira-artis-hesaplama",
  },
  {
    title: "Mevduat Faizi Hesaplama",
    icon: PiggyBank,
    href: "/hesaplamalar/mevduat-faizi-hesaplama",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <main className="bg-slate-100">
        {/* Popüler Hesaplamalar */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              En Çok Kullanılan Hesaplamalar
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Popüler Hesaplamalar
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Finans, kredi, vergi, maaş, konut, tarih ve sağlık alanlarında
              ihtiyaç duyacağınız hesaplama araçlarına tek yerden ulaşın.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                title={category.title}
                icon={category.icon}
                href={category.href}
              />
            ))}
          </div>
        </section>

        {/* Tanıtım */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 p-8 text-center shadow-2xl md:p-14">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Hesaplamalarınızı Güvenle Yapın
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              HesapRehberi ile kredi, KDV, faiz, maaş, döviz, enflasyon, yüzde,
              indirim, yaş, gün, VKİ, günlük su ihtiyacı, gelir vergisi, kira
              artışı ve mevduat faizi hesaplamalarını saniyeler içinde ücretsiz
              gerçekleştirebilirsiniz.
            </p>

            <Link
              href="/hesaplamalar"
              className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 transition hover:scale-105 hover:shadow-xl"
            >
              Tüm Hesaplamaları Keşfet →
            </Link>
          </div>
        </section>

        {/* Son Blog Yazıları */}
        <LatestArticles />

        {/* Neden Biz */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Neden Biz?
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
              Neden HesapRehberi?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Hızlı, güvenilir ve ücretsiz hesaplama araçlarıyla ihtiyacınız
              olan işlemleri tek platformda sunuyoruz.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">⚡</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Hızlı Hesaplama
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Sonuçlarınızı saniyeler içerisinde anında görüntüleyin.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">🔒</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Güvenilir Yaklaşım
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Standart formüller kullanılır ve yaklaşık sonuçlar açıkça
                belirtilir.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="text-5xl">💯</div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Tamamen Ücretsiz
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Araçlarımızı üyelik gerektirmeden ücretsiz kullanabilirsiniz.
              </p>
            </article>
          </div>
        </section>

        {/* Sık Sorulan Sorular */}
        <HomeFaq />

        {/* HesapRehberi Nedir? */}
        <section className="mx-auto max-w-5xl px-6 pb-28">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Hakkımızda
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              HesapRehberi Nedir?
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">
              HesapRehberi; kredi, KDV, faiz, maaş, döviz, enflasyon, yüzde,
              indirim, yaş, gün, VKİ, günlük su ihtiyacı, gelir vergisi, kira
              artışı ve mevduat faizi gibi günlük hayatta ihtiyaç duyulan
              hesaplama araçlarını tek platformda sunan ücretsiz bir hesaplama
              platformudur.
            </p>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Amacımız karmaşık hesaplamaları anlaşılır hâle getirmektir.
              Sonuçlar genel bilgi amaçlıdır; finansal, vergisel, hukuki ve
              sağlıkla ilgili önemli kararlar için resmî kaynakların ve uzman
              görüşünün dikkate alınması gerekir.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}