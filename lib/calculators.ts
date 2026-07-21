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
  Car,
  Factory,
  Store,
  Building2,
  MoonStar,
  RefreshCw,
  WalletCards,
  CircleDollarSign,
  ChartNoAxesCombined,
  Droplets,
  Flame,
  Target,
  Gauge,
  HeartPulse,
  House,
  BadgeDollarSign,
  Landmark,
  Percent,
  PiggyBank,
  ReceiptText,
  Receipt,
  Scale,
  TrendingUp,
  Wallet,
} from "lucide-react";

export type CalculatorCategory =
  | "Kredi"
  | "Mevduat"
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
  title: "Mevduat Faiz Oranı Karşılaştırma Hesaplama",
  description:
    "Aynı ana para ve vade için üç farklı mevduat faiz teklifinin brüt faiz, stopaj, net kazanç ve vade sonu tutarlarını karşılaştırın.",
  category: "Mevduat",
  icon: ChartNoAxesCombined,
  href: "/hesaplamalar/mevduat-faiz-orani-karsilastirma",
  keywords: [
    "mevduat faiz oranı karşılaştırma",
    "banka faiz karşılaştırma",
    "mevduat teklif karşılaştırma",
    "vadeli mevduat karşılaştırma",
    "faiz oranı karşılaştırma hesaplama",
    "mevduat kazanç karşılaştırma",
    "en yüksek mevduat getirisi",
    "banka mevduat faizi",
    "vadeli hesap faiz karşılaştırma",
    "net faiz hesaplama",
    "stopaj hesaplama",
    "vade sonu hesaplama",
  ],
  featured: false,
  },
  {
  title: "Mevduat Getiri Hedefi Hesaplama",
  description:
    "Hedeflediğiniz net mevduat kazancı için yatırmanız gereken ana parayı faiz, vade ve stopaj oranına göre hesaplayın.",
  category: "Mevduat",
  icon: Target,
  href: "/hesaplamalar/mevduat-getiri-hedefi",
  keywords: [
    "mevduat getiri hedefi",
    "hedef kazanç hesaplama",
    "mevduat ana para hesaplama",
    "vadeli mevduat hesaplama",
    "net faiz hedefi",
    "faiz kazancı hesaplama",
    "stopaj hesaplama",
    "vade sonu hesaplama",
    "mevduat getirisi",
    "banka faiz hesaplama",
  ],
  featured: false,
   },
   {
  title: "Mevduat Enflasyon Sonrası Reel Getiri Hesaplama",
  description:
    "Mevduat faiz kazancınızın enflasyon karşısındaki gerçek değerini, reel getiri oranını ve satın alma gücü değişimini hesaplayın.",
  category: "Mevduat",
  icon: Gauge,
  href: "/hesaplamalar/mevduat-reel-getiri",
  keywords: [
    "mevduat reel getiri hesaplama",
    "enflasyon sonrası mevduat getirisi",
    "reel faiz hesaplama",
    "mevduat enflasyon karşılaştırma",
    "satın alma gücü hesaplama",
    "nominal reel getiri farkı",
    "enflasyondan arındırılmış faiz",
    "mevduat gerçek kazanç",
    "reel kazanç hesaplama",
    "enflasyonu aşan faiz",
    "stopaj sonrası reel getiri",
    "vadeli mevduat reel faiz",
  ],
  featured: false,
   },
   {
  title: "Mevduat Faiz Yenileme Hesaplama",
  description:
    "Vadeli mevduatın faiz kazancıyla birlikte yeniden bağlanması halinde toplam bakiye, bileşik faiz avantajı ve dönemsel kazançları hesaplayın.",
  category: "Mevduat",
  icon: RefreshCw,
  href: "/hesaplamalar/mevduat-faiz-yenileme",
  keywords: [
    "mevduat faiz yenileme hesaplama",
    "vadeli mevduat yenileme",
    "mevduat bileşik faiz hesaplama",
    "faizi ana paraya ekleme",
    "vadeli hesap tekrar bağlama",
    "mevduat vade yenileme",
    "mevduat toplam kazanç",
    "bileşik mevduat getirisi",
    "dönemsel faiz hesaplama",
    "faiz yenileme tablosu",
    "mevduat efektif getiri",
    "stopajlı bileşik faiz",
  ],
  featured: false,
   },
   {
  title: "Mevduat Erken Bozma Kaybı Hesaplama",
  description:
    "Vadeli mevduatı vade dolmadan bozmanız halinde oluşabilecek faiz kaybını ve elinize geçecek tahmini tutarı hesaplayın.",
  category: "Mevduat",
  icon: CircleDollarSign,
  href: "/hesaplamalar/mevduat-erken-bozma-kaybi",
  keywords: [
    "mevduat erken bozma",
    "vadeli hesap bozma",
    "mevduat faiz kaybı",
    "erken çekim faiz kaybı",
    "vadeli mevduat bozma",
    "mevduat vade bozma",
    "erken bozma faiz oranı",
    "mevduat kazanç kaybı",
    "vadeli hesap bozulursa",
    "erken bozma hesaplama",
    "stopaj hesaplama",
    "vade sonu hesaplama",
  ],
  featured: false,
  },
   {
    title: "Mevduat Vade Karşılaştırma Hesaplama",
    description:
      "Farklı mevduat vadelerinde net kazanç, stopaj ve vade sonu tutarını karşılaştırın.",
    category: "Mevduat",
    icon: Landmark,
    href: "/hesaplamalar/mevduat-vade-karsilastirma",
    keywords: [
      "mevduat",
      "vadeli mevduat",
      "mevduat vade karşılaştırma",
      "mevduat faiz hesaplama",
      "vade karşılaştırma",
      "net faiz",
      "stopaj",
      "vade sonu tutarı",
      "banka faizi",
      "mevduat getirisi",
    ],
    featured: false,
  },
  {
  title: "KOBİ Kredisi Hesaplama",
  description:
    "Yatırım tutarı, öz kaynak, faiz, vade, geri ödemesiz dönem ve masraflara göre KOBİ kredisi taksitini hesaplayın.",
  category: "Kredi",
  icon: Factory,
  href: "/hesaplamalar/kobi-kredisi-hesaplama",
  keywords: [
    "KOBİ kredisi",
    "KOBİ kredisi hesaplama",
    "KOBİ kredi taksiti",
    "geri ödemesiz KOBİ kredisi",
    "işletme finansmanı",
    "KOBİ kredi faizi",
    "yatırım kredisi",
    "KOBİ finansman maliyeti",
  ],
  },
  {
  title: "Stopaj Hesaplama",
  description:
    "Brüt faiz kazancı ve stopaj oranına göre kesinti tutarını, net faiz gelirini, net getiriyi ve vade sonu toplamını hesaplayın.",
  category: "Mevduat",
  icon: ReceiptText,
  href: "/hesaplamalar/stopaj-hesaplama",
  keywords: [
    "stopaj hesaplama",
    "faiz stopaj hesaplama",
    "mevduat stopajı",
    "net faiz hesaplama",
    "brüt net faiz",
    "stopaj kesintisi hesaplama",
    "faiz vergisi hesaplama",
    "stopaj sonrası getiri",
  ],
  },
  {
  title: "Ticari Kredi Hesaplama",
  description:
    "Yatırım tutarı, öz kaynak, faiz, vade, komisyon ve masraflara göre ticari kredi taksitini ve toplam maliyeti hesaplayın.",
  category: "Kredi",
  icon: Building2,
  href: "/hesaplamalar/ticari-kredi-hesaplama",
  keywords: [
    "ticari kredi",
    "ticari kredi hesaplama",
    "işletme kredisi",
    "şirket kredisi",
    "ticari kredi taksiti",
    "işletme finansmanı",
    "ticari kredi faizi",
    "ticari kredi maliyeti",
  ],
  },
  {
  title: "Günlük Faiz Hesaplama",
  description:
    "Ana para, yıllık faiz, gün sayısı ve stopaj oranına göre günlük brüt kazanç, net faiz ve vade sonu tutarını hesaplayın.",
  category: "Mevduat",
  icon: CalendarDays,
  href: "/hesaplamalar/gunluk-faiz-hesaplama",
  keywords: [
    "günlük faiz hesaplama",
    "günlük faiz getirisi",
    "günlük net faiz",
    "360 gün faiz hesabı",
    "365 gün faiz hesabı",
    "günlük bileşik faiz",
    "stopajlı faiz hesaplama",
    "günlük mevduat kazancı",
  ],
  },
  {
  title: "Gecelik Faiz Hesaplama",
  description:
    "Ana para, yıllık faiz, gece sayısı, gün esası ve stopaj oranına göre gecelik brüt kazanç, net faiz ve vade sonu tutarını hesaplayın.",
  category: "Mevduat",
  icon: MoonStar,
  href: "/hesaplamalar/gecelik-faiz-hesaplama",
  keywords: [
    "gecelik faiz hesaplama",
    "gecelik faiz getirisi",
    "overnight faiz hesaplama",
    "gecelik net faiz",
    "günlük yenilenen faiz",
    "360 gün gecelik faiz",
    "365 gün gecelik faiz",
    "stopajlı gecelik faiz",
    "gecelik mevduat kazancı",
  ],
  },
  {
  title: "Bileşik Faiz Hesaplama",
  description:
    "Ana para, düzenli katkı, yıllık faiz, bileşikleşme sıklığı, stopaj ve enflasyona göre gelecekteki birikiminizi hesaplayın.",
  category: "Mevduat",
  icon: TrendingUp,
  href: "/hesaplamalar/bilesik-faiz-hesaplama",
  keywords: [
    "bileşik faiz hesaplama",
    "bileşik getiri hesaplama",
    "faizin faizi hesaplama",
    "aylık bileşik faiz",
    "günlük bileşik faiz",
    "düzenli birikim hesaplama",
    "stopajlı bileşik faiz",
    "reel getiri hesaplama",
    "efektif faiz hesaplama",
  ],
  },
  {
  title: "Kredi Karşılaştırma",
  description:
    "Farklı kredi tekliflerini aylık taksit, faiz, komisyon, sigorta, toplam maliyet ve geri ödeme açısından karşılaştırın.",
  category: "Kredi",
  icon: Scale,
  href: "/hesaplamalar/kredi-karsilastirma",
  keywords: [
    "kredi karşılaştırma",
    "kredi teklif karşılaştırma",
    "en uygun kredi",
    "kredi faiz karşılaştırma",
    "kredi maliyet karşılaştırma",
    "banka kredi karşılaştırma",
    "kredi taksit karşılaştırma",
    "en düşük toplam geri ödeme",
  ],
  },
  {
  title: "Vadeli Mevduat Hesaplama",
  description: "Vadeli mevduat getirisini hesaplayın.",
  category: "Mevduat",
  icon: Landmark,
  href: "/hesaplamalar/vadeli-mevduat-hesaplama",
  keywords: [
    "vadeli mevduat",
    "vadeli mevduat hesaplama",
    "mevduat getiri hesaplama",
    "faiz getiri hesaplama",
    "vadeli mevduat faizi",
    "bankada mevduat"
  ],
  },
  {
  title: "Esnaf Kredisi Hesaplama",
  description:
    "İşletme ihtiyacı, öz kaynak, faiz, vade, ödeme sıklığı ve masraflara göre esnaf kredisi taksitini hesaplayın.",
  category: "Kredi",
  icon: Store,
  href: "/hesaplamalar/esnaf-kredisi-hesaplama",
  keywords: [
    "esnaf kredisi",
    "esnaf kredisi hesaplama",
    "esnaf kredi taksiti",
    "işletme kredisi",
    "esnaf finansmanı",
    "üç ayda bir ödemeli kredi",
    "esnaf kredi faizi",
    "esnaf kredi maliyeti",
  ],
  },
  {
  title: "Kredi Yapılandırma Hesaplama",
  description:
    "Mevcut kredi ile yeni faiz, vade ve masraflara göre yapılandırılmış kredi planını karşılaştırın.",
  category: "Kredi",
  icon: RefreshCw,
  href: "/hesaplamalar/kredi-yapilandirma-hesaplama",
  keywords: [
    "kredi yapılandırma",
    "kredi yapılandırma hesaplama",
    "kredi yeniden yapılandırma",
    "refinansman",
    "kredi faiz düşürme",
    "kredi taksit düşürme",
    "kredi karşılaştırma",
    "yapılandırma masrafı",
  ],
  },
  {
  title: "İhtiyaç Kredisi Hesaplama",
  description:
    "Kredi tutarı, faiz oranı ve vadeye göre aylık taksit, toplam faiz ve toplam geri ödeme tutarını hesaplayın.",
  category: "Kredi",
  icon: WalletCards,
  href: "/hesaplamalar/ihtiyac-kredisi-hesaplama",
  keywords: [
    "ihtiyaç kredisi",
    "ihtiyaç kredisi hesaplama",
    "tüketici kredisi",
    "bireysel kredi",
    "kredi taksiti",
    "aylık taksit",
    "kredi faizi",
    "toplam geri ödeme",
  ],
  },
  {
    title: "Konut Kredisi Hesaplama",
    description:
      "Konut bedeli, peşinat, faiz oranı ve vadeye göre aylık taksit ile toplam geri ödeme tutarını hesaplayın.",
    category: "Kredi",
    icon: House,
    href: "/hesaplamalar/konut-kredisi-hesaplama",
    keywords: [
      "konut kredisi",
      "konut kredisi hesaplama",
      "ev kredisi",
      "ev kredisi hesaplama",
      "mortgage",
      "konut finansmanı",
      "aylık taksit",
      "kredi faizi",
      "peşinat",
    ],
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
  title: "Kredi Erken Kapama Hesaplama",
  description:
    "Kalan anapara, faiz oranı, vade ve erken ödeme ücretine göre tahmini kapama tutarı ile olası tasarrufu hesaplayın.",
  category: "Kredi",
  icon: BadgeDollarSign,
  href: "/hesaplamalar/kredi-erken-kapama-hesaplama",
  keywords: [
    "kredi erken kapama",
    "kredi kapama hesaplama",
    "erken ödeme",
    "kalan kredi borcu",
    "kredi kapama tutarı",
    "erken ödeme ücreti",
    "kredi faiz tasarrufu",
    "kredi borcu kapatma",
  ],
  },
  {
  title: "Taşıt Kredisi Hesaplama",
  description:
    "Araç fiyatı, peşinat, faiz oranı ve vadeye göre aylık taksit ile toplam geri ödeme tutarını hesaplayın.",
  category: "Kredi",
  icon: Car,
  href: "/hesaplamalar/tasit-kredisi-hesaplama",
  keywords: [
    "taşıt kredisi",
    "taşıt kredisi hesaplama",
    "araç kredisi",
    "araba kredisi",
    "otomobil kredisi",
    "aylık taksit",
    "kredi faizi",
    "peşinat",
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