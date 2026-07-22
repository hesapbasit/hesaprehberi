import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BadgePercent,
  Calculator,
  CalendarDays,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Coins,
  Gauge,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  PiggyBank,
  ReceiptText,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import DepositTermComparisonCalculator from "@/components/calculators/DepositTermComparisonCalculator";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/mevduat-vade-karsilastirma";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Mevduat vade karşılaştırma aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Mevduat Vade Karşılaştırma | Net Kazanç ve Bileşik Getiri",
  description:
    "Aynı ana para ve yıllık faiz oranı için farklı mevduat vadelerini karşılaştırın; brüt faiz, stopaj, net kazanç, vade sonu tutarı ve yıllık bileşik getiri tahminini hesaplayın.",
  path: canonicalPath,
  openGraph: {
    title: "Mevduat Vade Karşılaştırma | Uygun Vadeyi Bulun",
    description:
      "Kısa, orta ve uzun mevduat vadelerini aynı koşullarda karşılaştırın; net faiz kazancını, likidite etkisini ve tahmini yıllık bileşik getiriyi görün.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mevduat Vade Karşılaştırma",
    description:
      "Farklı mevduat vadelerinin brüt ve net faizini karşılaştırın; toplam kazancı, vade sonu tutarını ve yıllıklandırılmış getiriyi saniyeler içinde görün.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Vade karşılaştırma aracı" },
  { id: "vadeli-mevduat-nedir", label: "Mevduat vade karşılaştırması nedir?" },
  { id: "nasil-hesaplanir", label: "Vadeler nasıl karşılaştırılır?" },
  { id: "formuller", label: "Vade karşılaştırma formülleri" },
  { id: "vade-karsilastirma", label: "Kısa, orta ve uzun vade analizi" },
  { id: "faiz-orani-etkisi", label: "Faiz oranının vade sonuçlarına etkisi" },
  { id: "stopaj-rehberi", label: "Stopajın vade sonuçlarına etkisi" },
  { id: "gun-esasi", label: "360 ve 365 gün esası" },
  { id: "reel-getiri", label: "Reel getiri karşılaştırması" },
  { id: "banka-vade-teklifleri", label: "Banka vade seçeneklerini değerlendirme" },
  { id: "vade-stratejileri", label: "Vade yenileme stratejileri" },
  { id: "erken-bozma", label: "Erken bozma koşulları" },
  { id: "ornek-senaryolar", label: "Örnek vade karşılaştırmaları" },
  { id: "sik-yapilan-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplamalar" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const maturityComparisonRows = [
  {
    maturity: "7 gün",
    gross: "958,90 TL",
    withholding: "143,84 TL",
    net: "815,06 TL",
    finalAmount: "100.815,06 TL",
    note: "Çok kısa vade ve yüksek likidite",
  },
  {
    maturity: "32 gün",
    gross: "4.383,56 TL",
    withholding: "657,53 TL",
    net: "3.726,03 TL",
    finalAmount: "103.726,03 TL",
    note: "Bankalarda sık kullanılan kısa vade",
  },
  {
    maturity: "46 gün",
    gross: "6.301,37 TL",
    withholding: "945,21 TL",
    net: "5.356,16 TL",
    finalAmount: "105.356,16 TL",
    note: "Kısa ve orta vade arasında",
  },
  {
    maturity: "92 gün",
    gross: "12.602,74 TL",
    withholding: "1.890,41 TL",
    net: "10.712,33 TL",
    finalAmount: "110.712,33 TL",
    note: "Yaklaşık üç aylık dönem",
  },
  {
    maturity: "181 gün",
    gross: "24.794,52 TL",
    withholding: "3.719,18 TL",
    net: "21.075,34 TL",
    finalAmount: "121.075,34 TL",
    note: "Yaklaşık altı aylık dönem",
  },
  {
    maturity: "365 gün",
    gross: "50.000,00 TL",
    withholding: "7.500,00 TL",
    net: "42.500,00 TL",
    finalAmount: "142.500,00 TL",
    note: "Bir yıllık uzun vade",
  },
];

const rateSensitivityRows = [
  {
    rate: "%35",
    gross: "3.068,49 TL",
    net: "2.608,22 TL",
    finalAmount: "102.608,22 TL",
  },
  {
    rate: "%40",
    gross: "3.506,85 TL",
    net: "2.980,82 TL",
    finalAmount: "102.980,82 TL",
  },
  {
    rate: "%45",
    gross: "3.945,21 TL",
    net: "3.353,43 TL",
    finalAmount: "103.353,43 TL",
  },
  {
    rate: "%50",
    gross: "4.383,56 TL",
    net: "3.726,03 TL",
    finalAmount: "103.726,03 TL",
  },
  {
    rate: "%55",
    gross: "4.821,92 TL",
    net: "4.098,63 TL",
    finalAmount: "104.098,63 TL",
  },
  {
    rate: "%60",
    gross: "5.260,27 TL",
    net: "4.471,23 TL",
    finalAmount: "104.471,23 TL",
  },
];

const principalComparisonRows = [
  {
    principal: "25.000 TL",
    gross: "986,30 TL",
    withholding: "147,95 TL",
    net: "838,35 TL",
    finalAmount: "25.838,35 TL",
  },
  {
    principal: "50.000 TL",
    gross: "1.972,60 TL",
    withholding: "295,89 TL",
    net: "1.676,71 TL",
    finalAmount: "51.676,71 TL",
  },
  {
    principal: "100.000 TL",
    gross: "3.945,21 TL",
    withholding: "591,78 TL",
    net: "3.353,43 TL",
    finalAmount: "103.353,43 TL",
  },
  {
    principal: "250.000 TL",
    gross: "9.863,01 TL",
    withholding: "1.479,45 TL",
    net: "8.383,56 TL",
    finalAmount: "258.383,56 TL",
  },
  {
    principal: "500.000 TL",
    gross: "19.726,03 TL",
    withholding: "2.958,90 TL",
    net: "16.767,13 TL",
    finalAmount: "516.767,13 TL",
  },
  {
    principal: "1.000.000 TL",
    gross: "39.452,05 TL",
    withholding: "5.917,81 TL",
    net: "33.534,25 TL",
    finalAmount: "1.033.534,25 TL",
  },
];

const inflationRows = [
  {
    nominal: "%30",
    inflation: "%20",
    real: "%8,33",
    interpretation: "Satın alma gücü artar",
  },
  {
    nominal: "%40",
    inflation: "%30",
    real: "%7,69",
    interpretation: "Pozitif reel getiri",
  },
  {
    nominal: "%45",
    inflation: "%45",
    real: "%0",
    interpretation: "Satın alma gücü korunur",
  },
  {
    nominal: "%50",
    inflation: "%60",
    real: "%−6,25",
    interpretation: "Satın alma gücü azalır",
  },
  {
    nominal: "%60",
    inflation: "%50",
    real: "%6,67",
    interpretation: "Pozitif reel getiri",
  },
];

const bankOfferChecklist = [
  {
    title: "Yıllık brüt faiz oranı",
    description:
      "Vadeleri aynı vade ve aynı ana para üzerinden karşılaştırın. Sadece ilan edilen yüksek oranı değil, bu oranın size gerçekten uygulanıp uygulanmadığını kontrol edin.",
  },
  {
    title: "Stopaj sonrası net kazanç",
    description:
      "Brüt faiz oranı tek başına yeterli değildir. Kesinti sonrası net getiri ve vade sonu toplam tutar karar verirken daha anlamlıdır.",
  },
  {
    title: "Valör ve vade başlangıcı",
    description:
      "Paranın hesaba yatırıldığı gün ile faiz işletilmeye başlanan gün farklı olabilir. Bir günlük valör farkı kısa vadede net getiriyi etkileyebilir.",
  },
  {
    title: "Yeni müşteri veya yeni para şartı",
    description:
      "Bazı kampanya oranları yalnızca bankaya yeni gelen para ya da ilk kez hesap açan müşteriler için geçerli olabilir.",
  },
  {
    title: "Alt ve üst tutar sınırları",
    description:
      "İlan edilen oran belirli minimum veya maksimum bakiye aralığında geçerli olabilir. Tutarınız bu aralığın dışında kalıyorsa oran değişebilir.",
  },
  {
    title: "Vade sonu yenileme koşulu",
    description:
      "Hesabın otomatik yenilenip yenilenmediğini, yenilenirse hangi faiz oranının kullanılacağını ve ana para ile faizin birlikte bağlanıp bağlanmadığını kontrol edin.",
  },
];

const maturityStrategies = [
  {
    title: "Kısa mevduat vadei",
    range: "1–45 gün",
    icon: Clock3,
    advantages: [
      "Faiz oranlarındaki değişime daha hızlı uyum sağlar.",
      "Likidite ihtiyacı olan yatırımcılar için esneklik sunar.",
      "Kampanya oranlarını daha sık değerlendirme imkânı verir.",
    ],
    risks: [
      "Her vade sonunda yeniden karar verme gerekir.",
      "Oran düşüşü halinde yeni dönem getirisi azalabilir.",
      "Valör ve işlem günleri kısa vadede daha fazla önem kazanır.",
    ],
  },
  {
    title: "Orta mevduat vadei",
    range: "46–180 gün",
    icon: CalendarDays,
    advantages: [
      "Faiz oranını daha uzun süre sabitleme imkânı sunar.",
      "Sık vade takibi gerektirmez.",
      "Kısa ve uzun vade arasında dengeli bir yapı oluşturabilir.",
    ],
    risks: [
      "Piyasa oranları yükselirse mevcut oran fırsat maliyeti yaratabilir.",
      "Erken bozma ihtiyacı daha maliyetli olabilir.",
      "Nakit planlaması daha dikkatli yapılmalıdır.",
    ],
  },
  {
    title: "Uzun mevduat vadei",
    range: "181–365 gün ve üzeri",
    icon: LockKeyhole,
    advantages: [
      "Faiz oranını uzun süre sabitleme imkânı verir.",
      "Daha seyrek işlem ve takip gerektirir.",
      "Uzun süre dokunulmayacak birikimler için sade bir plan sunar.",
    ],
    risks: [
      "Piyasa faizleri yükselirse daha yüksek oran fırsatı kaçabilir.",
      "Likidite ihtiyacında erken bozma riski artar.",
      "Enflasyon beklentisi değişirse reel getiri zayıflayabilir.",
    ],
  },
];

const scenarioRows = [
  {
    title: "Kısa vadeli nakit park etme",
    principal: "150.000 TL",
    maturity: "32 gün",
    rate: "%47",
    withholding: "%15",
    result: "Yaklaşık 5.252 TL net kazanç",
  },
  {
    title: "Üç aylık birikim değerlendirme",
    principal: "300.000 TL",
    maturity: "92 gün",
    rate: "%45",
    withholding: "%15",
    result: "Yaklaşık 28.915 TL net kazanç",
  },
  {
    title: "Altı aylık sabit getiri planı",
    principal: "500.000 TL",
    maturity: "181 gün",
    rate: "%43",
    withholding: "%15",
    result: "Yaklaşık 90.675 TL net kazanç",
  },
  {
    title: "Bir yıllık mevduat planı",
    principal: "1.000.000 TL",
    maturity: "365 gün",
    rate: "%40",
    withholding: "%15",
    result: "Yaklaşık 340.000 TL net kazanç",
  },
];

const commonMistakes = [
  {
    title: "Brüt oranı net kazanç sanmak",
    description:
      "İlan edilen faiz oranı çoğunlukla yıllık brüt orandır. Stopaj ve diğer koşullar dikkate alınmadan karar vermek gerçek kazancı olduğundan yüksek gösterebilir.",
  },
  {
    title: "Farklı vadeleri yalnızca oranla karşılaştırmak",
    description:
      "Yüksek oran her zaman daha yüksek toplam kazanç anlamına gelmez. Vade gün sayısı, valör ve yenileme koşulları birlikte değerlendirilmelidir.",
  },
  {
    title: "Erken bozma ihtimalini göz ardı etmek",
    description:
      "Vade dolmadan para çekme ihtimali varsa, faiz kaybı ve hesabın hangi koşullarda bozulacağı önceden öğrenilmelidir.",
  },
  {
    title: "Enflasyonu hesaba katmamak",
    description:
      "Nominal getiri pozitif olsa bile enflasyon daha yüksekse satın alma gücü azalabilir. Reel getiri ayrıca değerlendirilmelidir.",
  },
  {
    title: "Kampanya şartlarını okumamak",
    description:
      "Yeni müşteri, yeni para, mobil başvuru veya belirli bakiye aralığı gibi koşullar uygulanacak faiz oranını değiştirebilir.",
  },
  {
    title: "Vade sonu talimatını kontrol etmemek",
    description:
      "Otomatik yenileme, ana para ve faizin birlikte bağlanması ya da vadesiz hesaba aktarım seçenekleri vade sonunda farklı sonuçlar doğurabilir.",
  },
];

const faqItems = [
  {
    question: "Mevduat vade karşılaştırması nedir?",
    answer:
      "Aynı ana para, vade, stopaj ve gün esası kullanılarak farklı bankaların veya kampanyaların vade seçeneklerinın brüt ve net getirilerinin yan yana incelenmesidir.",
  },
  {
    question: "En yüksek faiz oranı her zaman en iyi vade midir?",
    answer:
      "Diğer bütün koşullar aynıysa daha yüksek oran daha yüksek net kazanç sağlar. Ancak yeni müşteri şartı, valör, minimum bakiye, erken bozma ve otomatik yenileme koşulları da birlikte değerlendirilmelidir.",
  },
  {
    question: "Adil bir karşılaştırma için hangi değerler aynı olmalıdır?",
    answer:
      "Ana para, vade günü, stopaj oranı ve gün esası aynı tutulmalıdır. Böylece vadelerin yalnızca faiz oranından kaynaklanan kazanç farkı görülebilir.",
  },
  {
    question: "Araç kaç farklı vadei karşılaştırır?",
    answer:
      "Hesaplama aracı aynı anda birden fazla mevduat vadeini karşılaştırır ve sonuçları net faiz kazancına göre sıralar.",
  },
  {
    question: "Brüt faiz ile net faiz arasındaki fark nedir?",
    answer:
      "Brüt faiz kesinti öncesi kazançtır. Net faiz ise brüt faizden stopaj kesintisi çıkarıldıktan sonra yatırımcıya kalan kazançtır.",
  },
  {
    question: "Stopaj vade sıralamasını değiştirir mi?",
    answer:
      "Bütün vadelere aynı stopaj oranı uygulanıyorsa sıralama genellikle değişmez; ancak her vadein TL cinsinden net kazancı azalır. Farklı ürünlerde farklı stopaj oranları varsa sıralama değişebilir.",
  },
  {
    question: "Faiz oranındaki 1 puan fark ne kadar kazandırır?",
    answer:
      "Bir vade gününın TL karşılığı ana para, vade, gün esası ve stopaj oranına bağlıdır. Ana para veya vade büyüdükçe bir puanlık farkın net etkisi de artar.",
  },
  {
    question: "Vade uzadıkça vadeler arasındaki fark büyür mü?",
    answer:
      "Faiz oranları arasındaki fark sabit kalırsa vade uzadıkça vadeler arasındaki brüt ve net kazanç farkı genellikle büyür.",
  },
  {
    question: "Ana para arttıkça vade farkının etkisi artar mı?",
    answer:
      "Evet. Faiz kazancı ana parayla orantılı olduğu için aynı oran ve vadede daha yüksek ana para, vadeler arasında daha büyük TL farkı oluşturur.",
  },
  {
    question: "360 ve 365 gün esası neden önemlidir?",
    answer:
      "Faiz formülündeki payda değiştiği için aynı oran ve vade 360 gün esasında 365 gün esasına göre biraz daha yüksek dönemsel faiz üretebilir. Vadeler aynı gün esasıyla karşılaştırılmalıdır.",
  },
  {
    question: "Vade adlarına banka veya kampanya adı yazılabilir mi?",
    answer:
      "Evet. Vade alanlarına banka, ürün veya kampanya adı yazılması sonuçların daha kolay izlenmesini sağlar.",
  },
  {
    question: "Dönemsel net getiri oranı nedir?",
    answer:
      "Net faiz kazancının ana paraya bölünüp yüzdeye çevrilmesiyle bulunan, seçilen vade dönemine ait net getiri oranıdır.",
  },
  {
    question: "Günlük ortalama net kazanç nasıl bulunur?",
    answer:
      "Net faiz kazancı toplam vade gününe bölünerek günlük ortalama net kazanç hesaplanır.",
  },
  {
    question: "30 günlük eşdeğer kazanç neyi gösterir?",
    answer:
      "Günlük ortalama net kazancın 30 ile çarpılmasıyla bulunan yaklaşık aylık karşılıktır. Gerçek bir 30 günlük banka vadeinin garantili sonucu değildir.",
  },
  {
    question: "Kampanya faizi ile standart faiz nasıl karşılaştırılır?",
    answer:
      "Kampanyanın geçerli olduğu bakiye, müşteri tipi ve süre kontrol edilmelidir. Kampanya sonrası yenileme oranı da toplam kararın parçası olmalıdır.",
  },
  {
    question: "Yeni para şartı ne anlama gelir?",
    answer:
      "Bankanın belirlediği tarihten sonra dışarıdan gelen veya mevcut bakiye dışında kalan tutarlara özel oran uygulanmasıdır. Mevcut paranız vade kapsamına girmeyebilir.",
  },
  {
    question: "Valör tarihi karşılaştırmayı etkiler mi?",
    answer:
      "Evet. Paranın faiz işlemeye başlayacağı tarih gecikirse efektif kazanç düşebilir. Aynı görünen oranlarda valör farkı net sonucu değiştirebilir.",
  },
  {
    question: "Erken bozma koşulu neden önemlidir?",
    answer:
      "Vade dolmadan para çekilirse faiz tamamen veya kısmen kaybedilebilir. Likidite ihtimali yüksekse yalnızca faiz oranına değil erken bozma kuralına da bakılmalıdır.",
  },
  {
    question: "Otomatik yenileme oranı ilk oranla aynı mıdır?",
    answer:
      "Genellikle garanti değildir. Vade sonunda hesap o gün geçerli olan standart veya yenileme oranıyla tekrar bağlanabilir.",
  },
  {
    question: "Mevduat vadeleri ne sıklıkla değişir?",
    answer:
      "Bankalar oranları piyasa koşulları, tutar, vade ve kampanyalara göre gün içinde dahi değiştirebilir. Karar vermeden hemen önce güncel vade kontrol edilmelidir.",
  },
  {
    question: "Hesaplama sonucu bankanın kesin tutarı mıdır?",
    answer:
      "Hayır. Araç matematiksel tahmin üretir. Bankanın valör, gerçek gün sayısı, yuvarlama, stopaj ve ürün koşulları nedeniyle küçük farklar oluşabilir.",
  },
  {
    question: "Bu karşılaştırma yatırım tavsiyesi sayılır mı?",
    answer:
      "Hayır. Araç yalnızca bilgilendirme ve matematiksel karşılaştırma amacı taşır. Finansal karar öncesinde bankaların güncel sözleşme ve kampanya koşulları incelenmelidir.",
  },
];

const relatedCalculators = getRelatedCalculators(canonicalPath, 6);

const faqStructuredData = {
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
};

const webApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: calculator.title,
  description: calculator.description,
  url: `https://https://hesaprehberionline.com${canonicalPath}`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  browserRequirements: "JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  featureList: [
    "Üç vade karşılaştırması",
    "Net faiz sıralaması",
    "Stopaj dahil sonuç",
    "Faiz farkının TL karşılığı",
    "360 ve 365 gün esası",
  ],
};

const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Ana Sayfa",
      item: "https://https://hesaprehberionline.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hesaplamalar",
      item: "https://https://hesaprehberionline.com/hesaplamalar",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: calculator.title,
      item: `https://https://hesaprehberionline.com${canonicalPath}`,
    },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Mevduat vade seçenekleri nasıl karşılaştırılır?",
  description:
    "Aynı ana para, vade, stopaj ve gün esasıyla birden fazla mevduat vadeini karşılaştırma adımları.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Ortak ana parayı girin",
      text: "Mevduata yatırmayı planladığınız tutarı hesaplama aracına yazın.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Üç faiz oranını girin",
      text: "Karşılaştırmak istediğiniz üç vadein yıllık brüt faiz oranlarını girin.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Ortak vadeyi seçin",
      text: "Vade süresini gün veya ay cinsinden belirleyin.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Ortak stopaj oranını girin",
      text: "İşleme uygulanacak güncel stopaj oranını yazın.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Sonuçları değerlendirin",
      text: "Net faiz sıralamasını, vade sonu tutarlarını ve vadeler arasındaki TL farkını değerlendirin.",
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Mevduat Vade Karşılaştırma Rehberi",
  description:
    "Mevduat vade seçeneklerini aynı koşullarda karşılaştırma, net getiri, stopaj, vade, gün esası ve banka kampanyalarını değerlendirme hakkında kapsamlı rehber.",
  mainEntityOfPage: `https://https://hesaprehberionline.com${canonicalPath}`,
  author: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
  publisher: {
    "@type": "Organization",
    name: "HesapRehberi",
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-sm font-extrabold uppercase tracking-[0.18em] text-blue-700">
        {eyebrow}
      </span>

      <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 text-lg leading-8 text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function FormulaCard({
  title,
  formula,
  description,
  tone = "blue",
}: {
  title: string;
  formula: string;
  description: string;
  tone?: "blue" | "emerald" | "amber" | "violet";
}) {
  const toneClasses = {
    blue: "border-blue-200 bg-blue-50 text-blue-950",
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-950",
    amber: "border-amber-200 bg-amber-50 text-amber-950",
    violet: "border-violet-200 bg-violet-50 text-violet-950",
  };

  return (
    <article className={`rounded-3xl border p-6 ${toneClasses[tone]}`}>
      <h3 className="text-lg font-extrabold">{title}</h3>
      <p className="mt-4 break-words font-mono text-sm font-bold leading-7">
        {formula}
      </p>
      <p className="mt-4 text-sm leading-7 opacity-80">{description}</p>
    </article>
  );
}

export default function DepositTermComparisonPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_right,#dbeafe_1px,transparent_1px),linear-gradient(to_bottom,#dbeafe_1px,transparent_1px)] bg-[size:48px_48px] opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-12 h-96 w-96 rounded-full bg-blue-200/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -right-36 bottom-0 h-[28rem] w-[28rem] rounded-full bg-emerald-100/60 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-8 md:pb-24 md:pt-10">
          <Breadcrumb
            items={[
              { label: "Hesaplamalar", href: "/hesaplamalar" },
              { label: calculator.title },
            ]}
          />

          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-extrabold text-blue-800 shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Üç Vadei Aynı Koşullarda Karşılaştırın
              </span>

              <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Mevduat Faiz Oranlarını
                <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Karşılaştırın ve En İyisini Bulun
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Aynı ana para ve vade için farklı kısa, orta ve uzun yıllık faiz oranını girin; brüt faiz, stopaj, net kazanç, vade sonu tutarı ve vadeler arasındaki TL farkını saniyeler içinde görün.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Üç vade karşılaştırması",
                  "Net getiri sıralaması",
                  "Stopaj dahil sonuç",
                  "Faiz farkının TL karşılığı",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle2
                      className="h-4 w-4 text-emerald-600"
                      aria-hidden="true"
                    />
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <ShareButtons
                  title="Mevduat Vade Karşılaştırma | HesapRehberi"
                  description="Üç mevduat vadeinin net kazancını ve vade sonu tutarını aynı koşullarda karşılaştırın."
                />
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25">
                  <Landmark className="h-7 w-7" aria-hidden="true" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                  Ücretsiz araç
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                Karşılaştırma sonucunda neleri görürsünüz?
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "Üç vadein brüt faizi",
                  "Her vadein stopajı",
                  "Net faiz sıralaması",
                  "En yüksek ve düşük vade farkı",
                  "Vade sonu toplam tutarları",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <div className="flex items-start gap-3">
                  <Info
                    className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-7 text-blue-950">
                    Araç yaklaşık sonuç verir. Kesin tutar için bankanın
                    uyguladığı gün esası, valör, stopaj ve ürün koşulları
                    dikkate alınmalıdır.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <ListChecks className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
                    İçindekiler
                  </p>
                  <p className="text-sm font-bold text-slate-950">
                    Faiz karşılaştırma rehberi
                  </p>
                </div>
              </div>

              <nav className="mt-5" aria-label="Sayfa içeriği">
                <ol className="space-y-1">
                  {tableOfContents.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="group flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold leading-5 text-slate-600 transition hover:bg-blue-50 hover:text-blue-800"
                      >
                        <span className="mt-0.5 text-xs font-black text-slate-400 group-hover:text-blue-700">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>
          </aside>

          <div className="min-w-0">
            <section
              id="hesaplama-araci"
              className="scroll-mt-28"
            >
              <DepositTermComparisonCalculator />
            </section>

            <section className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: TrendingUp,
                  title: "Anlık karşılaştırma",
                  description:
                    "Ana para, vade veya vade oranları değiştikçe sıralama ve kazanç farkları anında güncellenir.",
                },
                {
                  icon: ReceiptText,
                  title: "Net kazanç sıralaması",
                  description:
                    "Stopaj sonrası net faizleri karşılaştırarak en yüksek getiriyi sağlayan vadei görürsünüz.",
                },
                {
                  icon: CalendarDays,
                  title: "TL farkı analizi",
                  description:
                    "Faiz oranları arasındaki farkın seçtiğiniz ana para ve vadede kaç TL kazanç oluşturduğunu incelersiniz.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-black text-slate-950">
                    {title}
                  </h2>
                  <p className="mt-3 leading-7 text-slate-600">
                    {description}
                  </p>
                </article>
              ))}
            </section>

            <section
              id="vadeli-mevduat-nedir"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Temel bilgiler"
                title="Mevduat vade karşılaştırması nedir?"
                description="Mevduat vade karşılaştırması, aynı yatırım koşullarında farklı vadelerin net kazançlarını yan yana gösterir. Sağlıklı sonuç için ana para, vade, stopaj ve gün esası sabit tutulmalıdır."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    Faiz vadelerini karşılaştırmanın çalışma mantığı
                  </h3>

                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                    <p>
                      Hesap sahibi, belirli bir tutarı seçtiği vade boyunca
                      bankada tutmayı kabul eder. Banka da bu tutara sözleşmede
                      belirtilen yıllık brüt faiz oranı üzerinden getiri
                      uygular. Vade sonunda ana para ile net faiz birlikte
                      ödenir veya verilen talimata göre yeniden vadeye bağlanır.
                    </p>
                    <p>
                      Mevduat faiz hesaplamasında en kritik nokta, ilan edilen
                      faizin genellikle yıllık brüt oran olmasıdır. Bu oran
                      doğrudan vade boyunca kazanılacak yüzdesel getiri değildir.
                      Vade gün sayısına uyarlanır ve brüt faiz üzerinden stopaj
                      kesintisi yapılır.
                    </p>
                    <p>
                      Sonuç olarak karar verirken yalnızca faiz oranına değil,
                      net kazanca, vade sonu toplam tutara, erken bozma
                      koşullarına ve enflasyon sonrasındaki reel getiriye bakmak
                      gerekir.
                    </p>
                  </div>
                </article>

                <div className="space-y-5">
                  {[
                    {
                      icon: Coins,
                      title: "Ana para",
                      text: "Mevduat hesabında faiz getirisi elde etmek için değerlendirilen başlangıç tutarıdır.",
                    },
                    {
                      icon: BadgePercent,
                      title: "Yıllık faiz oranı",
                      text: "Bankanın ilan ettiği yıllık brüt getiri oranıdır.",
                    },
                    {
                      icon: CalendarDays,
                      title: "Vade",
                      text: "Paranın hesapta kalacağı gün veya ay süresidir.",
                    },
                    {
                      icon: ReceiptText,
                      title: "Stopaj",
                      text: "Brüt faiz kazancı üzerinden yapılan vergi kesintisidir.",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <article
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-black text-slate-950">{title}</h3>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="nasil-hesaplanir"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Adım adım hesaplama"
                title="Mevduat vadeleri nasıl karşılaştırılır?"
                description="Hesaplama, ana para ve yıllık faiz oranının vade süresine uyarlanmasıyla başlar. Ardından stopaj kesintisi düşülür ve vade sonu toplam tutar bulunur."
              />

              <div className="mt-8 grid gap-5">
                {[
                  {
                    step: "01",
                    title: "Ana parayı belirleyin",
                    description:
                      "Mevduata yatırmayı planladığınız tutarı belirleyin. Faiz kazancı ana para ile doğru orantılıdır.",
                    icon: PiggyBank,
                  },
                  {
                    step: "02",
                    title: "Yıllık brüt faiz oranını girin",
                    description:
                      "Bankanın size sunduğu yıllık brüt faiz oranını kullanın. Kampanya şartlarını ve tutar aralıklarını kontrol edin.",
                    icon: BadgePercent,
                  },
                  {
                    step: "03",
                    title: "Vade süresini seçin",
                    description:
                      "Paranın hesapta kalacağı gün veya ay sayısını belirleyin. Gerçek gün sayısı sonucu doğrudan etkiler.",
                    icon: CalendarDays,
                  },
                  {
                    step: "04",
                    title: "Stopaj oranını uygulayın",
                    description:
                      "Brüt faiz kazancı üzerinden geçerli stopaj oranı hesaplanır ve kesinti olarak düşülür.",
                    icon: ReceiptText,
                  },
                  {
                    step: "05",
                    title: "Net kazanç ve vade sonunu bulun",
                    description:
                      "Brüt faizden stopaj çıkarılarak net faiz bulunur. Net faiz ana paraya eklenerek vade sonu toplam tutar hesaplanır.",
                    icon: Calculator,
                  },
                ].map(({ step, title, description, icon: Icon }) => (
                  <article
                    key={step}
                    className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="grid gap-5 md:grid-cols-[74px_1fr_52px] md:items-center">
                      <div className="text-3xl font-black text-blue-200 transition group-hover:text-blue-600">
                        {step}
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-950">
                          {title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {description}
                        </p>
                      </div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="formuller"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Hesaplama formülleri"
                title="Karşılaştırmada kullanılan faiz ve net getiri formülleri"
                description="Aşağıdaki formüller her vadein brüt ve net kazancını aynı yöntemle hesaplamanın temelini gösterir. Gün esası, stopaj ve vade bütün vadeler için eşit olmalıdır."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <FormulaCard
                  title="Brüt faiz"
                  formula="Brüt faiz = Ana para × (Yıllık faiz / 100) × Vade günü ÷ Gün esası"
                  description="Gün esası bankanın uygulamasına göre genellikle 360 veya 365 olabilir."
                  tone="blue"
                />
                <FormulaCard
                  title="Stopaj kesintisi"
                  formula="Stopaj = Brüt faiz × (Stopaj oranı / 100)"
                  description="Stopaj yalnızca faiz kazancı üzerinden hesaplanır; ana paradan kesilmez."
                  tone="amber"
                />
                <FormulaCard
                  title="Net faiz"
                  formula="Net faiz = Brüt faiz − Stopaj"
                  description="Hesap sahibinin vade sonunda elde ettiği vergi sonrası kazançtır."
                  tone="emerald"
                />
                <FormulaCard
                  title="Vade sonu toplam"
                  formula="Vade sonu = Ana para + Net faiz"
                  description="Ana para ile net faiz kazancının toplamıdır."
                  tone="violet"
                />
              </div>

              <div className="mt-6 rounded-[2rem] border border-blue-200 bg-blue-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Örnek: 100.000 TL, %45 faiz ve 32 gün vade
                    </h3>
                    <p className="mt-2 leading-7 text-blue-900">
                      365 gün esasıyla brüt faiz yaklaşık 3.945,21 TL olur.
                      Stopaj oranı %15 kabul edilirse kesinti yaklaşık 591,78 TL,
                      net faiz yaklaşık 3.353,43 TL ve vade sonu toplam yaklaşık
                      103.353,43 TL olur.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="vade-karsilastirma"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Vade analizi"
                title="Aynı vade farkının farklı vadelerde etkisi"
                description="Aşağıdaki örnekte 100.000 TL ana para, yıllık %50 brüt faiz ve %15 stopaj varsayılmıştır. Sonuçlar yaklaşık değerlerdir."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-extrabold">Vade</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Brüt faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Stopaj</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Net faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Vade sonu</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Not</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {maturityComparisonRows.map((row) => (
                        <tr
                          key={row.maturity}
                          className="transition hover:bg-slate-50"
                        >
                          <td className="px-6 py-5 font-black text-slate-950">
                            {row.maturity}
                          </td>
                          <td className="px-6 py-5 font-semibold text-slate-700">
                            {row.gross}
                          </td>
                          <td className="px-6 py-5 font-semibold text-rose-700">
                            {row.withholding}
                          </td>
                          <td className="px-6 py-5 font-black text-emerald-700">
                            {row.net}
                          </td>
                          <td className="px-6 py-5 font-black text-blue-800">
                            {row.finalAmount}
                          </td>
                          <td className="px-6 py-5">
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-extrabold text-slate-700">
                              {row.note}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <article className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      className="mt-1 h-6 w-6 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-black text-emerald-950">
                        Uzun vadenin temel avantajı
                      </h3>
                      <p className="mt-2 leading-7 text-emerald-900">
                        Faiz oranını daha uzun süre sabitlemek ve vade boyunca
                        oran düşüşü riskinden korunmak mümkün olabilir.
                      </p>
                    </div>
                  </div>
                </article>

                <article className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                  <div className="flex items-start gap-4">
                    <AlertTriangle
                      className="mt-1 h-6 w-6 shrink-0 text-amber-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-black text-amber-950">
                        Uzun vadenin temel riski
                      </h3>
                      <p className="mt-2 leading-7 text-amber-900">
                        Piyasa faizleri yükselirse mevcut düşük oranla vade sonuna
                        kadar beklemek fırsat maliyeti yaratabilir.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section
              id="faiz-orani-etkisi"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Oran karşılaştırması"
                title="Faiz oranı farkının net kazanca etkisi"
                description="Aşağıdaki örnekte 100.000 TL ana para, 32 gün vade ve %15 stopaj varsayılmıştır. Faiz oranındaki birkaç puanlık farkın net kazanca etkisi görülebilir."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left">
                    <thead className="bg-blue-800 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-extrabold">Yıllık faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Brüt faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Net faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Vade sonu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {rateSensitivityRows.map((row) => (
                        <tr
                          key={row.rate}
                          className="transition hover:bg-blue-50/50"
                        >
                          <td className="px-6 py-5">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-blue-800">
                              {row.rate}
                            </span>
                          </td>
                          <td className="px-6 py-5 font-semibold text-slate-700">
                            {row.gross}
                          </td>
                          <td className="px-6 py-5 font-black text-emerald-700">
                            {row.net}
                          </td>
                          <td className="px-6 py-5 font-black text-slate-950">
                            {row.finalAmount}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                <h3 className="text-2xl font-black text-slate-950">
                  Ana para büyüdükçe faiz farkı neden daha önemli olur?
                </h3>
                <p className="mt-4 leading-8 text-slate-600">
                  Faiz kazancı ana para ile doğru orantılıdır. Bu nedenle yıllık
                  oranlar arasındaki küçük farklar, yüksek tutarlarda daha büyük
                  TL karşılığına dönüşür. Aşağıdaki tabloda 32 gün, %45 yıllık
                  faiz ve %15 stopaj varsayılmıştır.
                </p>

                <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[840px] text-left">
                      <thead className="bg-slate-100">
                        <tr>
                          <th className="px-5 py-4 text-sm font-extrabold text-slate-900">Ana para</th>
                          <th className="px-5 py-4 text-sm font-extrabold text-slate-900">Brüt faiz</th>
                          <th className="px-5 py-4 text-sm font-extrabold text-slate-900">Stopaj</th>
                          <th className="px-5 py-4 text-sm font-extrabold text-slate-900">Net faiz</th>
                          <th className="px-5 py-4 text-sm font-extrabold text-slate-900">Vade sonu</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {principalComparisonRows.map((row) => (
                          <tr key={row.principal}>
                            <td className="px-5 py-4 font-black text-slate-950">{row.principal}</td>
                            <td className="px-5 py-4 text-slate-700">{row.gross}</td>
                            <td className="px-5 py-4 text-rose-700">{row.withholding}</td>
                            <td className="px-5 py-4 font-black text-emerald-700">{row.net}</td>
                            <td className="px-5 py-4 font-black text-blue-800">{row.finalAmount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="stopaj-rehberi"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Vergi etkisi"
                title="Stopaj vade karşılaştırmasını nasıl etkiler?"
                description="Stopaj, ana paradan değil brüt faiz kazancından kesilir. Bu nedenle iki vade aynı brüt faizi sunsa bile farklı kesinti koşulları net getiriyi değiştirebilir."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <ReceiptText className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black">
                    Stopaj hesabının mantığı
                  </h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    Önce brüt faiz bulunur. Daha sonra geçerli stopaj oranı brüt
                    faiz üzerinden uygulanır. Kalan tutar net faiz kazancıdır.
                    Stopaj oranındaki değişiklik ana parayı değil, yalnızca
                    faizden elde edilen kazancı etkiler.
                  </p>

                  <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="font-mono text-sm font-bold leading-7 text-blue-100">
                      4.000 TL brüt faiz × %15 stopaj = 600 TL kesinti
                    </p>
                    <p className="mt-2 font-mono text-sm font-bold leading-7 text-emerald-200">
                      4.000 TL − 600 TL = 3.400 TL net faiz
                    </p>
                  </div>
                </article>

                <div className="space-y-5">
                  {[
                    {
                      title: "Güncel oranı kullanın",
                      text: "Stopaj oranları mevzuata, vadeye veya ürün türüne göre değişebilir. Hesaplama sırasında güncel bilgiyi esas alın.",
                      icon: RefreshCw,
                    },
                    {
                      title: "Net oranı karşılaştırın",
                      text: "Banka vadelerini yalnızca brüt faiz oranı üzerinden değil, stopaj sonrası net TL kazancı üzerinden karşılaştırın.",
                      icon: Scale,
                    },
                    {
                      title: "Kesin sonucu bankadan teyit edin",
                      text: "Hesaplama aracı tahmini sonuç verir. Bankanın gün esası, yuvarlama ve valör uygulaması kesin tutarı etkileyebilir.",
                      icon: ShieldCheck,
                    },
                  ].map(({ title, text, icon: Icon }) => (
                    <article
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-black text-slate-950">{title}</h3>
                          <p className="mt-2 text-sm leading-7 text-slate-600">
                            {text}
                          </p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="gun-esasi"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Teknik ayrıntı"
                title="Vadelerde 360 ve 365 gün esası neden önemlidir?"
                description="Faiz formülündeki gün esası aynı ana para, oran ve vade için sonucu değiştirir. Payda küçüldükçe hesaplanan brüt faiz artar."
              />

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <article className="rounded-[2rem] border border-blue-200 bg-blue-50 p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-blue-700">
                        360 gün esası
                      </span>
                      <h3 className="mt-2 text-2xl font-black text-blue-950">
                        Biraz daha yüksek sonuç
                      </h3>
                    </div>
                    <Gauge className="h-10 w-10 text-blue-700" aria-hidden="true" />
                  </div>
                  <p className="mt-5 leading-8 text-blue-900">
                    Aynı tutar, oran ve vade için 360 gün paydası kullanıldığında
                    hesaplanan günlük faiz 365 gün esasına göre daha yüksek olur.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className="text-sm font-extrabold uppercase tracking-[0.16em] text-emerald-700">
                        365 gün esası
                      </span>
                      <h3 className="mt-2 text-2xl font-black text-emerald-950">
                        Takvim yılı yaklaşımı
                      </h3>
                    </div>
                    <CalendarDays className="h-10 w-10 text-emerald-700" aria-hidden="true" />
                  </div>
                  <p className="mt-5 leading-8 text-emerald-900">
                    Hesaplama takvim yılındaki 365 gün üzerinden yapılır.
                    Kullanılan esas ürün ve banka uygulamasına göre değişebilir.
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-black text-amber-950">
                      Vadete gün esasını kontrol edin
                    </h3>
                    <p className="mt-2 leading-7 text-amber-900">
                      Özellikle kısa mevduat hesabılarda gün esası, valör tarihi ve
                      gerçek vade gün sayısı net kazancı etkileyebilir. Bankanın
                      vade ekranı veya sözleşmesi incelenmelidir.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="reel-getiri"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Satın alma gücü"
                title="Vadeleri reel getiri açısından karşılaştırma"
                description="Nominal faiz kazancı paranızın TL cinsinden artışını gösterir. Reel getiri ise bu artışın enflasyon karşısında satın alma gücünü koruyup korumadığını ölçer."
              />

              <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                      <ChartNoAxesCombined className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-slate-950">
                      Reel getiri formülü
                    </h3>
                    <div className="mt-5 rounded-2xl border border-violet-200 bg-violet-50 p-5">
                      <p className="font-mono text-sm font-bold leading-7 text-violet-950">
                        Reel getiri = ((1 + nominal getiri) ÷ (1 + enflasyon)) − 1
                      </p>
                    </div>
                    <p className="mt-5 leading-8 text-slate-600">
                      Nominal ve enflasyon oranları hesaplamada ondalık biçimde
                      kullanılmalıdır. Örneğin %50 için 0,50 değeri alınır.
                    </p>
                  </div>

                  <div className="overflow-hidden rounded-2xl border border-slate-200">
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[620px] text-left">
                        <thead className="bg-slate-950 text-white">
                          <tr>
                            <th className="px-5 py-4 text-sm font-extrabold">Nominal getiri</th>
                            <th className="px-5 py-4 text-sm font-extrabold">Enflasyon</th>
                            <th className="px-5 py-4 text-sm font-extrabold">Reel getiri</th>
                            <th className="px-5 py-4 text-sm font-extrabold">Yorum</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {inflationRows.map((row) => (
                            <tr key={`${row.nominal}-${row.inflation}`}>
                              <td className="px-5 py-4 font-bold text-slate-950">{row.nominal}</td>
                              <td className="px-5 py-4 text-slate-700">{row.inflation}</td>
                              <td className="px-5 py-4 font-black text-blue-800">{row.real}</td>
                              <td className="px-5 py-4 text-sm text-slate-600">{row.interpretation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="vade-karsilastirma"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Banka seçimi"
                title="Banka mevduat vadeleri adil biçimde nasıl karşılaştırılır?"
                description="Doğru karşılaştırma, aynı ana para ve aynı vade için net kazancı ölçmeyi gerektirir. İlan edilen faiz oranı tek başına yeterli değildir."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {bankOfferChecklist.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 rounded-[2rem] bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 p-8 text-white">
                <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <h3 className="text-2xl font-black">
                      Karşılaştırmayı net TL kazancı üzerinden yapın
                    </h3>
                    <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                      Aynı ana para ve vade için birden fazla banka vadeini brüt
                      faiz, stopaj, net kazanç ve vade sonu tutarıyla karşılaştırmak
                      için özel karşılaştırma aracını kullanabilirsiniz.
                    </p>
                  </div>
                  <Link
                    href="/hesaplamalar/mevduat-vade-karsilastirma"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-black text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Vadeleri karşılaştır
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            <section
              id="vade-stratejileri"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Vade planlaması"
                title="Vade karşılaştırırken vade stratejisi nasıl belirlenir?"
                description="En uygun vade yalnızca en yüksek faiz oranına göre belirlenmez. Nakit ihtiyacı, faiz beklentisi, enflasyon ve erken bozma riski birlikte değerlendirilmelidir."
              />

              <div className="mt-8 grid gap-6 xl:grid-cols-3">
                {maturityStrategies.map(
                  ({ title, range, icon: Icon, advantages, risks }) => (
                    <article
                      key={title}
                      className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-extrabold text-slate-700">
                          {range}
                        </span>
                      </div>

                      <h3 className="mt-5 text-2xl font-black text-slate-950">
                        {title}
                      </h3>

                      <div className="mt-6">
                        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-emerald-700">
                          Avantajlar
                        </p>
                        <ul className="mt-3 space-y-3">
                          {advantages.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 border-t border-slate-200 pt-6">
                        <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-amber-700">
                          Riskler
                        </p>
                        <ul className="mt-3 space-y-3">
                          {risks.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                            >
                              <AlertTriangle
                                className="mt-0.5 h-4 w-4 shrink-0 text-amber-600"
                                aria-hidden="true"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  ),
                )}
              </div>

              <div className="mt-7 rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <Lightbulb
                    className="mt-0.5 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Vade bölme yaklaşımı
                    </h3>
                    <p className="mt-2 leading-7 text-blue-900">
                      Birikimin tamamını tek vadeye bağlamak yerine farklı
                      tutarları farklı vadelere bölmek, düzenli nakit erişimi ve
                      faiz değişim riskinin dağıtılması açısından düşünülebilir.
                      Ancak küçük tutarlara daha düşük oran uygulanabileceğini
                      unutmayın.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="erken-bozma"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Likidite riski"
                title="Erken bozma koşulları karşılaştırmayı nasıl etkiler?"
                description="Erken bozma koşulları bankaya ve ürün türüne göre değişir. Bazı ürünlerde faiz tamamen kaybedilebilir, bazılarında daha düşük oran uygulanabilir."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                  <h3 className="text-2xl font-black text-slate-950">
                    Hesap açmadan önce kontrol edilmesi gerekenler
                  </h3>

                  <ul className="mt-6 space-y-4">
                    {[
                      "Vade dolmadan para çekildiğinde faiz tamamen siliniyor mu?",
                      "Kısmi çekim yapılabiliyor mu, yoksa hesap tamamen mi kapanıyor?",
                      "Erken bozulan günler için daha düşük faiz oranı uygulanıyor mu?",
                      "Ana para aynı gün hesaba geçiyor mu?",
                      "Kampanya veya hoş geldin faizi iptal oluyor mu?",
                      "Erken bozma sonrası yeni hesap açmada bekleme süresi var mı?",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 leading-7 text-slate-600"
                      >
                        <ChevronRight
                          className="mt-1 h-5 w-5 shrink-0 text-blue-700"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="rounded-[2rem] border border-rose-200 bg-rose-50 p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-700 text-white">
                    <AlertTriangle className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black text-rose-950">
                    Acil nakit ihtiyacını hesaba katın
                  </h3>
                  <p className="mt-4 leading-8 text-rose-900">
                    Yakın dönemde kullanmanız gerekebilecek paranın tamamını uzun
                    vadeye bağlamak, faiz kaybı riskini artırabilir. Acil durum
                    fonu ile uzun vadeli birikimin ayrı tutulması daha dengeli
                    olabilir.
                  </p>
                  <Link
                    href="/hesaplamalar/mevduat-erken-bozma-kaybi"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-rose-800 px-5 py-3 font-black text-white transition hover:bg-rose-900"
                  >
                    Erken bozma kaybını hesapla
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              </div>
            </section>

            <section
              id="ornek-senaryolar"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Pratik örnekler"
                title="Farklı tutar ve vadelerde vade karşılaştırma senaryoları"
                description="Aşağıdaki senaryolar örnek faiz ve stopaj oranlarıyla hazırlanmıştır. Gerçek sonuçlar banka koşullarına göre değişebilir."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {scenarioRows.map((row) => (
                  <article
                    key={row.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Target className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                        Örnek senaryo
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-black text-slate-950">
                      {row.title}
                    </h3>

                    <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-500">Ana para</dt>
                        <dd className="mt-1 font-black text-slate-950">{row.principal}</dd>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-500">Vade</dt>
                        <dd className="mt-1 font-black text-slate-950">{row.maturity}</dd>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-500">Faiz</dt>
                        <dd className="mt-1 font-black text-blue-800">{row.rate}</dd>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <dt className="font-semibold text-slate-500">Stopaj</dt>
                        <dd className="mt-1 font-black text-rose-700">{row.withholding}</dd>
                      </div>
                    </dl>

                    <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                      <p className="text-sm font-black text-emerald-900">
                        {row.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section
              id="sik-yapilan-hatalar"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Dikkat edilmesi gerekenler"
                title="Mevduat vade seçeneklerini karşılaştırırken yapılan hatalar"
                description="Yanlış veya eksik değerlendirme, beklenen getiri ile gerçekleşen sonuç arasında fark oluşmasına neden olabilir."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {commonMistakes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 font-black text-amber-800">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-black text-slate-950">
                          {item.title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    className="mt-0.5 h-7 w-7 shrink-0 text-emerald-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-xl font-black text-emerald-950">
                      Sağlıklı karşılaştırma için üç temel ölçüt
                    </h3>
                    <p className="mt-3 leading-8 text-emerald-900">
                      Aynı ana para, aynı gerçek vade gün sayısı ve aynı stopaj
                      koşulu kullanılmalıdır. Ardından vadeler net faiz kazancı
                      ve vade sonu toplam tutar üzerinden karşılaştırılmalıdır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="ilgili-hesaplamalar"
              className="mt-20 scroll-mt-28"
            >
              <SectionHeading
                eyebrow="Diğer araçlar"
                title="İlgili mevduat karşılaştırma ve faiz araçları"
                description="Mevduat vadei kararınızı farklı açılardan değerlendirmek için aşağıdaki hesaplama araçlarını kullanabilirsiniz."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedCalculators.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-slate-300 transition group-hover:translate-x-1 group-hover:text-blue-700" aria-hidden="true" />
                      </div>

                      <h3 className="mt-5 text-xl font-black text-slate-950">
                        {item.shortTitle ?? item.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section
              id="sss"
              className="mt-20 scroll-mt-28 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-10"
            >
              <SectionHeading
                eyebrow="Sık sorulan sorular"
                title="Mevduat vade karşılaştırması hakkında merak edilenler"
                description="Faiz oranı farkı, stopaj, vade, gün esası ve banka koşulları hakkında en sık sorulan soruların yanıtlarını inceleyin."
              />

              <div className="mt-9 divide-y divide-slate-200">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group py-5 first:pt-0 last:pb-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-black text-slate-950">
                      <span>{item.question}</span>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition group-open:rotate-90 group-open:bg-blue-700 group-open:text-white">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </summary>
                    <p className="max-w-4xl pt-4 leading-8 text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-20 overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-blue-800 via-blue-900 to-slate-950 p-8 text-white shadow-2xl shadow-blue-950/20 md:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-bold text-blue-100">
                    <Calculator className="h-4 w-4" aria-hidden="true" />
                    HesapRehberi
                  </span>

                  <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                    Mevduat kararınızı farklı senaryolarla test edin
                  </h2>

                  <p className="mt-4 leading-8 text-blue-100">
                    Farklı vade, faiz ve stopaj seçeneklerini hesaplayın;
                    mevduat vadelerini, reel getiriyi ve erken bozma kaybını
                    diğer ücretsiz araçlarla karşılaştırın.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <a
                    href="#hesaplama-araci"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-black text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Yeniden hesapla
                    <Calculator className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link
                    href="/hesaplamalar"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 font-black text-white transition hover:bg-white/15"
                  >
                    Tüm hesaplamalar
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-7 text-slate-500 shadow-sm">
              <div className="flex items-start gap-3">
                <Info
                  className="mt-0.5 h-5 w-5 shrink-0 text-slate-500"
                  aria-hidden="true"
                />
                <p>
                  <strong className="text-slate-700">Bilgilendirme:</strong>{" "}
                  Bu sayfadaki hesaplamalar ve örnek tablolar genel bilgilendirme
                  amacı taşır. Bankaların faiz, gün esası, valör, stopaj,
                  yuvarlama ve kampanya uygulamaları farklı olabilir. Kesin
                  tutar ve koşullar için ilgili banka sözleşmesini inceleyin.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}