import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Baby,
  BadgePercent,
  Banknote,
  Briefcase,
  CalendarDays,
  CalendarRange,
  ChartNoAxesColumn,
  Droplets,
  Flame,
  Gauge,
  HeartPulse,
  House,
  Landmark,
  Percent,
  PiggyBank,
  Receipt,
  Scale,
  TrendingUp,
  Wallet,
} from "lucide-react";

export type CalculatorCategory =
  | "Kredi"
  | "Vergi"
  | "Yatırım"
  | "Maaş"
  | "Döviz"
  | "Finans"
  | "Matematik"
  | "Alışveriş"
  | "Tarih"
  | "Sağlık"
  | "Konut";

export type CalculatorItem = {
  title: string;
  shortTitle?: string;
  description: string;
  category: CalculatorCategory;
  icon: LucideIcon;
  href: string;
  keywords: string[];
  featured?: boolean;
};

export const calculators: CalculatorItem[] = [
  {
    title: "Kredi Hesaplama",
    description:
      "Aylık taksit, toplam faiz ve toplam geri ödeme tutarını hesaplayın.",
    category: "Kredi",
    icon: Wallet,
    href: "/hesaplamalar/kredi-hesaplama",
    keywords: [
      "kredi",
      "kredi hesaplama",
      "taksit",
      "aylık taksit",
      "kredi faizi",
      "geri ödeme",
      "ihtiyaç kredisi",
      "taşıt kredisi",
      "konut kredisi",
    ],
    featured: true,
  },
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil, KDV hariç ve KDV tutarını kolayca hesaplayın.",
    category: "Vergi",
    icon: Receipt,
    href: "/hesaplamalar/kdv-hesaplama",
    keywords: [
      "kdv",
      "kdv hesaplama",
      "kdv dahil",
      "kdv hariç",
      "vergi",
      "yüzde 1",
      "yüzde 10",
      "yüzde 20",
    ],
    featured: true,
  },
  {
    title: "2026 Gelir Vergisi Hesaplama",
    shortTitle: "Gelir Vergisi Hesaplama",
    description:
      "2026 vergi dilimlerine göre yaklaşık gelir vergisi tutarını hesaplayın.",
    category: "Vergi",
    icon: Landmark,
    href: "/hesaplamalar/gelir-vergisi-hesaplama",
    keywords: [
      "gelir vergisi",
      "2026 gelir vergisi",
      "vergi dilimi",
      "gelir vergisi hesaplama",
      "maaş vergisi",
      "vergi matrahı",
    ],
    featured: true,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Basit ve bileşik faiz getirisini saniyeler içinde hesaplayın.",
    category: "Yatırım",
    icon: TrendingUp,
    href: "/hesaplamalar/faiz-hesaplama",
    keywords: [
      "faiz",
      "faiz hesaplama",
      "basit faiz",
      "bileşik faiz",
      "anapara",
      "faiz getirisi",
      "yatırım getirisi",
    ],
    featured: true,
  },
  {
    title: "Maaş Hesaplama",
    description:
      "Brüt maaştan yaklaşık net maaş ve kesintileri hesaplayın.",
    category: "Maaş",
    icon: Briefcase,
    href: "/hesaplamalar/maas-hesaplama",
    keywords: [
      "maaş",
      "maaş hesaplama",
      "net maaş",
      "brüt maaş",
      "maaş kesintisi",
      "sgk kesintisi",
      "ücret",
    ],
    featured: true,
  },
  {
    title: "Döviz Hesaplama",
    shortTitle: "Döviz Çevirici",
    description:
      "Döviz ve Türk lirası arasında kur üzerinden çeviri yapın.",
    category: "Döviz",
    icon: Banknote,
    href: "/hesaplamalar/doviz-hesaplama",
    keywords: [
      "döviz",
      "döviz hesaplama",
      "kur",
      "dolar",
      "euro",
      "sterlin",
      "türk lirası",
      "para çevirici",
    ],
    featured: true,
  },
  {
    title: "Enflasyon Hesaplama",
    description:
      "Paranızın enflasyon sonrasındaki alım gücünü hesaplayın.",
    category: "Finans",
    icon: ChartNoAxesColumn,
    href: "/hesaplamalar/enflasyon-hesaplama",
    keywords: [
      "enflasyon",
      "enflasyon hesaplama",
      "alım gücü",
      "para değeri",
      "fiyat artışı",
      "değer kaybı",
    ],
    featured: true,
  },
  {
    title: "Mevduat Faizi Hesaplama",
    description:
      "Ana para, faiz oranı, vade ve stopaja göre net mevduat getirisini hesaplayın.",
    category: "Finans",
    icon: PiggyBank,
    href: "/hesaplamalar/mevduat-faizi-hesaplama",
    keywords: [
      "mevduat",
      "mevduat faizi",
      "vadeli mevduat",
      "net faiz",
      "brüt faiz",
      "stopaj",
      "vadeli hesap",
      "mevduat getirisi",
    ],
    featured: true,
  },
  {
    title: "Yüzde Hesaplama",
    description:
      "Yüzde, artış, azalış ve iki değer arasındaki yüzde değişimini hesaplayın.",
    category: "Matematik",
    icon: Percent,
    href: "/hesaplamalar/yuzde-hesaplama",
    keywords: [
      "yüzde",
      "yüzde hesaplama",
      "yüzde artış",
      "yüzde azalış",
      "oran",
      "yüzde değişim",
      "matematik",
    ],
    featured: true,
  },
  {
    title: "İndirim Hesaplama",
    description:
      "İndirim tutarını, indirimli fiyatı ve toplam tasarrufu hesaplayın.",
    category: "Alışveriş",
    icon: BadgePercent,
    href: "/hesaplamalar/indirim-hesaplama",
    keywords: [
      "indirim",
      "indirim hesaplama",
      "indirimli fiyat",
      "kampanya",
      "tasarruf",
      "yüzde indirim",
      "alışveriş",
    ],
    featured: true,
  },
  {
    title: "Yaş Hesaplama",
    description:
      "Doğum tarihinize göre yaşınızı yıl, ay ve gün olarak hesaplayın.",
    category: "Tarih",
    icon: CalendarDays,
    href: "/hesaplamalar/yas-hesaplama",
    keywords: [
      "yaş",
      "yaş hesaplama",
      "doğum tarihi",
      "kaç yaşındayım",
      "yıl ay gün",
      "tarih",
    ],
    featured: true,
  },
  {
    title: "Gün Hesaplama",
    description:
      "İki tarih arasındaki toplam gün, hafta ve kalan gün sayısını hesaplayın.",
    category: "Tarih",
    icon: CalendarRange,
    href: "/hesaplamalar/gun-hesaplama",
    keywords: [
      "gün",
      "gün hesaplama",
      "iki tarih arası",
      "tarih farkı",
      "kaç gün",
      "hafta",
      "takvim",
    ],
  },
  {
    title: "VKİ Hesaplama",
    shortTitle: "Vücut Kitle İndeksi Hesaplama",
    description:
      "Boy ve kilo bilgilerinize göre vücut kitle indeksinizi hesaplayın.",
    category: "Sağlık",
    icon: Activity,
    href: "/hesaplamalar/vki-hesaplama",
    keywords: [
      "vki",
      "vücut kitle indeksi",
      "boy kilo",
      "kilo",
      "sağlıklı kilo",
      "bmi",
      "sağlık",
    ],
    featured: true,
  },
  {
    title: "İdeal Kilo Hesaplama",
    description:
      "Boyunuza ve cinsiyetinize göre tahmini ideal kilonuzu ve sağlıklı kilo aralığınızı hesaplayın.",
    category: "Sağlık",
    icon: Scale,
    href: "/hesaplamalar/ideal-kilo-hesaplama",
    keywords: [
      "ideal kilo",
      "ideal kilo hesaplama",
      "sağlıklı kilo",
      "boy",
      "kilo",
      "cinsiyet",
      "kilo aralığı",
    ],
  },
  {
    title: "Vücut Yağ Oranı Hesaplama",
    description:
      "Boy, boyun, bel ve kalça ölçülerinize göre tahmini vücut yağ oranınızı hesaplayın.",
    category: "Sağlık",
    icon: HeartPulse,
    href: "/hesaplamalar/vucut-yag-orani-hesaplama",
    keywords: [
      "vücut yağ oranı",
      "yağ oranı",
      "bel ölçüsü",
      "boyun ölçüsü",
      "kalça ölçüsü",
      "vücut ölçüsü",
      "sağlık",
    ],
  },
  {
    title: "Gebelik Hesaplama",
    description:
      "Tahmini doğum tarihi, gebelik haftası, trimester ve doğuma kalan süreyi hesaplayın.",
    category: "Sağlık",
    icon: Baby,
    href: "/hesaplamalar/gebelik-hesaplama",
    keywords: [
      "gebelik",
      "gebelik hesaplama",
      "hamilelik",
      "doğum tarihi",
      "tahmini doğum tarihi",
      "gebelik haftası",
      "trimester",
      "son adet tarihi",
    ],
    featured: true,
  },
  {
    title: "Günlük Su İhtiyacı Hesaplama",
    shortTitle: "Su İhtiyacı Hesaplama",
    description:
      "Kilonuz ve aktivite seviyenize göre günlük tahmini su ihtiyacınızı hesaplayın.",
    category: "Sağlık",
    icon: Droplets,
    href: "/hesaplamalar/su-ihtiyaci-hesaplama",
    keywords: [
      "su ihtiyacı",
      "günlük su ihtiyacı",
      "kaç litre su",
      "su tüketimi",
      "kilo",
      "aktivite",
      "sağlık",
    ],
  },
  {
    title: "Günlük Kalori İhtiyacı Hesaplama",
    shortTitle: "Kalori İhtiyacı Hesaplama",
    description:
      "Yaş, boy, kilo ve aktivite seviyenize göre günlük kalori ihtiyacınızı hesaplayın.",
    category: "Sağlık",
    icon: Flame,
    href: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
    keywords: [
      "kalori",
      "kalori ihtiyacı",
      "günlük kalori",
      "kalori hesaplama",
      "kilo verme",
      "kilo alma",
      "aktivite",
      "sağlık",
    ],
  },
  {
    title: "Bazal Metabolizma Hızı Hesaplama",
    shortTitle: "Bazal Metabolizma Hesaplama",
    description:
      "Yaş, cinsiyet, boy ve kilonuza göre bazal metabolizma hızınızı hesaplayın.",
    category: "Sağlık",
    icon: Gauge,
    href: "/hesaplamalar/bazal-metabolizma-hesaplama",
    keywords: [
      "bazal metabolizma",
      "bazal metabolizma hızı",
      "bmh",
      "bmr",
      "kalori",
      "metabolizma",
      "boy kilo",
      "sağlık",
    ],
  },
  {
    title: "Kira Artış Hesaplama",
    description:
      "Mevcut kira tutarına göre yeni kira bedelini ve artış miktarını hesaplayın.",
    category: "Konut",
    icon: House,
    href: "/hesaplamalar/kira-artis-hesaplama",
    keywords: [
      "kira",
      "kira artışı",
      "kira artış hesaplama",
      "yeni kira",
      "zam oranı",
      "kira zammı",
      "konut",
    ],
    featured: true,
  },
];

export const featuredCalculators = calculators.filter(
  (calculator) => calculator.featured,
);

export const calculatorCategories: CalculatorCategory[] = Array.from(
  new Set(calculators.map((calculator) => calculator.category)),
);

export function getCalculatorByHref(href: string) {
  return calculators.find((calculator) => calculator.href === href);
}

export function getCalculatorsByCategory(category: CalculatorCategory) {
  return calculators.filter(
    (calculator) => calculator.category === category,
  );
}

export function getRelatedCalculators(
  currentHref: string,
  limit = 5,
): CalculatorItem[] {
  const currentCalculator = getCalculatorByHref(currentHref);

  if (!currentCalculator) {
    return calculators
      .filter((calculator) => calculator.href !== currentHref)
      .slice(0, limit);
  }

  const sameCategoryCalculators = calculators.filter(
    (calculator) =>
      calculator.href !== currentHref &&
      calculator.category === currentCalculator.category,
  );

  const otherCalculators = calculators.filter(
    (calculator) =>
      calculator.href !== currentHref &&
      calculator.category !== currentCalculator.category,
  );

  return [...sameCategoryCalculators, ...otherCalculators].slice(0, limit);
}

export function searchCalculators(query: string): CalculatorItem[] {
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR");

  if (!normalizedQuery) {
    return calculators;
  }

  return calculators.filter((calculator) => {
    const searchableText = [
      calculator.title,
      calculator.shortTitle,
      calculator.description,
      calculator.category,
      ...calculator.keywords,
    ]
      .filter(Boolean)
      .join(" ")
      .toLocaleLowerCase("tr-TR");

    return searchableText.includes(normalizedQuery);
  });
}