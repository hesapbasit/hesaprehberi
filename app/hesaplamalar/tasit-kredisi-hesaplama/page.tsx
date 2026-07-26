import type { Metadata } from "next";
import Link from "next/link";

import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BadgePercent,
  Banknote,
  Calculator,
  CalendarDays,
  Car,
  CheckCircle2,
  CircleDollarSign,
  FileCheck2,
  FileText,
  Gauge,
  Info,
  Landmark,
  Lightbulb,
  ListChecks,
  LockKeyhole,
  ReceiptText,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  WalletCards,
  Wrench,
} from "lucide-react";

import VehicleLoanCalculator from "@/components/calculators/VehicleLoanCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  getRelatedCalculators,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/tasit-kredisi-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Taşıt kredisi hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  title: "Taşıt Kredisi Hesaplama | Taksit ve Toplam Ödeme",
  description:
    "Taşıt kredisi hesaplama aracıyla araç fiyatı, peşinat, aylık faiz oranı ve vadeye göre kredi tutarı, aylık taksit, toplam faiz ve toplam geri ödemeyi hesaplayın.",
  path: canonicalPath,
  openGraph: {
    title: "Taşıt Kredisi Hesaplama | Aylık Taksit",
    description:
      "Araç fiyatı, peşinat, faiz ve vadeye göre taşıt kredisi taksitini, toplam faiz yükünü ve geri ödeme tutarını hesaplayın.",
    url: canonicalPath,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taşıt Kredisi Hesaplama",
    description:
      "Taşıt kredisi aylık taksit, toplam faiz ve toplam geri ödeme tutarını saniyeler içinde hesaplayın.",
  },
});

const tableOfContents = [
  { id: "hesaplama-araci", label: "Taşıt kredisi hesaplama aracı" },
  { id: "tasit-kredisi-nedir", label: "Taşıt kredisi nedir?" },
  { id: "nasil-hesaplanir", label: "Taşıt kredisi nasıl hesaplanır?" },
  { id: "formuller", label: "Taksit ve toplam ödeme formülleri" },
  { id: "pesinat-etkisi", label: "Peşinatın krediye etkisi" },
  { id: "vade-karsilastirma", label: "Vade karşılaştırma tablosu" },
  { id: "faiz-orani-etkisi", label: "Faiz oranının maliyete etkisi" },
  { id: "sifir-ikinci-el", label: "Sıfır ve ikinci el araç kredisi" },
  { id: "kredi-orani", label: "Araç değerine göre kredi oranı" },
  { id: "masraflar", label: "Kasko, sigorta ve diğer masraflar" },
  { id: "teklif-karsilastirma", label: "Banka teklifleri nasıl karşılaştırılır?" },
  { id: "erken-kapama", label: "Erken kapama ve ara ödeme" },
  { id: "butce-planlama", label: "Bütçeye uygun kredi planı" },
  { id: "ornek-senaryolar", label: "Örnek taşıt kredisi senaryoları" },
  { id: "sik-yapilan-hatalar", label: "Sık yapılan hatalar" },
  { id: "ilgili-hesaplamalar", label: "İlgili hesaplama araçları" },
  { id: "sss", label: "Sık sorulan sorular" },
];

const downPaymentRows = [
  {
    downPayment: "200.000 TL",
    loanAmount: "800.000 TL",
    installment: "52.895 TL",
    totalInterest: "469.480 TL",
    totalPayment: "1.269.480 TL",
  },
  {
    downPayment: "300.000 TL",
    loanAmount: "700.000 TL",
    installment: "46.283 TL",
    totalInterest: "410.792 TL",
    totalPayment: "1.110.792 TL",
  },
  {
    downPayment: "400.000 TL",
    loanAmount: "600.000 TL",
    installment: "39.671 TL",
    totalInterest: "352.104 TL",
    totalPayment: "952.104 TL",
  },
  {
    downPayment: "500.000 TL",
    loanAmount: "500.000 TL",
    installment: "33.059 TL",
    totalInterest: "293.416 TL",
    totalPayment: "793.416 TL",
  },
];

const maturityComparisonRows = [
  {
    maturity: "12 ay",
    installment: "92.280 TL",
    totalInterest: "107.360 TL",
    totalPayment: "1.107.360 TL",
    note: "Yüksek taksit, düşük toplam maliyet",
  },
  {
    maturity: "18 ay",
    installment: "64.780 TL",
    totalInterest: "166.040 TL",
    totalPayment: "1.166.040 TL",
    note: "Kısa-orta vade",
  },
  {
    maturity: "24 ay",
    installment: "51.420 TL",
    totalInterest: "234.080 TL",
    totalPayment: "1.234.080 TL",
    note: "Dengeli ödeme planı",
  },
  {
    maturity: "36 ay",
    installment: "38.530 TL",
    totalInterest: "387.080 TL",
    totalPayment: "1.387.080 TL",
    note: "Düşük taksit, yüksek maliyet",
  },
  {
    maturity: "48 ay",
    installment: "32.610 TL",
    totalInterest: "565.280 TL",
    totalPayment: "1.565.280 TL",
    note: "Uzun vade",
  },
];

const rateComparisonRows = [
  {
    rate: "%2,50",
    installment: "44.770 TL",
    totalInterest: "74.480 TL",
    totalPayment: "1.074.480 TL",
  },
  {
    rate: "%3,00",
    installment: "47.260 TL",
    totalInterest: "134.240 TL",
    totalPayment: "1.134.240 TL",
  },
  {
    rate: "%3,50",
    installment: "49.840 TL",
    totalInterest: "196.160 TL",
    totalPayment: "1.196.160 TL",
  },
  {
    rate: "%4,00",
    installment: "52.500 TL",
    totalInterest: "260.000 TL",
    totalPayment: "1.260.000 TL",
  },
  {
    rate: "%4,50",
    installment: "55.240 TL",
    totalInterest: "325.760 TL",
    totalPayment: "1.325.760 TL",
  },
];

const vehicleTypeCards = [
  {
    title: "Sıfır araç kredisi",
    icon: Sparkles,
    description:
      "Yetkili satıcıdan alınan yeni araçlar için kullanılan finansmandır. Kampanyalı marka kredileri, banka kredileri ve bayi finansmanı birlikte karşılaştırılabilir.",
    items: [
      "Fatura bedeli kredi değerlendirmesinde temel alınabilir.",
      "Kampanyalı faiz oranlarının peşinat ve vade şartları olabilir.",
      "Kasko ve rehin işlemleri kredi sürecinin parçası olabilir.",
    ],
  },
  {
    title: "İkinci el araç kredisi",
    icon: Car,
    description:
      "Kullanılmış araç alımlarında kullanılan kredidir. Aracın yaşı, ekspertiz değeri ve banka politikası kredi tutarı ile vadeyi etkileyebilir.",
    items: [
      "Ekspertiz veya piyasa değeri dikkate alınabilir.",
      "Araç yaşı arttıkça vade seçeneği sınırlanabilir.",
      "Satıcı ve ruhsat bilgilerinin uyumlu olması gerekir.",
    ],
  },
  {
    title: "Elektrikli araç kredisi",
    icon: Gauge,
    description:
      "Elektrikli veya hibrit araçlara özel sunulan finansman seçenekleri olabilir. Kredi koşulları araç türü, bedeli ve kampanya dönemine göre değişebilir.",
    items: [
      "Marka veya banka özel kampanyaları bulunabilir.",
      "Şarj ekipmanı ve kasko maliyetleri ayrıca planlanmalıdır.",
      "Toplam sahip olma maliyeti yakıt tasarrufuyla birlikte incelenmelidir.",
    ],
  },
];

const bankOfferChecklist = [
  {
    title: "Aylık faiz oranı",
    description:
      "Teklifleri aynı kredi tutarı ve aynı vade üzerinden karşılaştırın. Kampanya oranının tüm müşteriler için geçerli olup olmadığını kontrol edin.",
  },
  {
    title: "Aylık taksit",
    description:
      "Taksitin düzenli gelirinize oranını değerlendirin. Düşük taksit için gereksiz şekilde uzun vade seçmek toplam maliyeti büyütebilir.",
  },
  {
    title: "Toplam geri ödeme",
    description:
      "Faiz oranından daha açıklayıcı olan temel göstergelerden biridir. Kredi boyunca bankaya ödenecek toplam tutarı gösterir.",
  },
  {
    title: "Tahsis ve işlem ücretleri",
    description:
      "Kredi tahsis ücreti, rehin işlemi, ekspertiz ve diğer operasyonel giderler teklifin gerçek maliyetini değiştirebilir.",
  },
  {
    title: "Sigorta ve kasko koşulları",
    description:
      "Kasko, hayat sigortası veya farklı koruma ürünlerinin zorunlu olup olmadığını ve primlerin toplam maliyete etkisini kontrol edin.",
  },
  {
    title: "Erken ödeme koşulları",
    description:
      "Krediyi erken kapatma veya ara ödeme yapma ihtimaliniz varsa kalan borcun ve olası maliyetlerin nasıl hesaplandığını önceden öğrenin.",
  },
];

const expenseItems = [
  {
    title: "Kredi tahsis ücreti",
    icon: ReceiptText,
    description:
      "Bankanın kredi kullandırma sürecinde uyguladığı ücretlerden biridir. Teklif karşılaştırırken faiz dışında ayrıca dikkate alınmalıdır.",
  },
  {
    title: "Kasko",
    icon: ShieldCheck,
    description:
      "Kredili araçlarda banka, araç üzerindeki teminatını korumak amacıyla kasko poliçesi talep edebilir. Poliçe kapsamı ve fiyatı değişebilir.",
  },
  {
    title: "Trafik sigortası",
    icon: FileCheck2,
    description:
      "Araç sahipleri için yasal zorunluluk taşıyan sigorta gideridir. Kredi maliyetinden ayrı olsa da toplam araç bütçesine eklenmelidir.",
  },
  {
    title: "Rehin ve tescil işlemleri",
    icon: LockKeyhole,
    description:
      "Kredi süresince araç üzerinde banka lehine rehin kurulabilir. Tescil ve kaldırma işlemleri ek masraf oluşturabilir.",
  },
  {
    title: "Ekspertiz veya değerleme",
    icon: Wrench,
    description:
      "Özellikle ikinci el araçlarda bankanın kabul edeceği değerin belirlenmesi için ekspertiz veya değerleme süreci uygulanabilir.",
  },
  {
    title: "Hayat sigortası",
    icon: ShieldCheck,
    description:
      "Bazı kredi tekliflerinde hayat sigortası sunulabilir. Prim tutarı yaşa, kredi miktarına ve vadeye göre değişebilir.",
  },
];

const scenarioRows = [
  {
    title: "Yüksek peşinatlı sıfır araç",
    vehiclePrice: "1.500.000 TL",
    downPayment: "750.000 TL",
    loanAmount: "750.000 TL",
    maturity: "24 ay",
    result: "Daha düşük kredi tutarı ve daha sınırlı faiz yükü",
  },
  {
    title: "Dengeli peşinatlı aile aracı",
    vehiclePrice: "1.200.000 TL",
    downPayment: "400.000 TL",
    loanAmount: "800.000 TL",
    maturity: "36 ay",
    result: "Orta seviyede taksit ve toplam maliyet dengesi",
  },
  {
    title: "İkinci el araç finansmanı",
    vehiclePrice: "900.000 TL",
    downPayment: "350.000 TL",
    loanAmount: "550.000 TL",
    maturity: "24 ay",
    result: "Araç yaşı ve ekspertiz değerine bağlı kredi planı",
  },
  {
    title: "Düşük taksit odaklı plan",
    vehiclePrice: "1.000.000 TL",
    downPayment: "300.000 TL",
    loanAmount: "700.000 TL",
    maturity: "48 ay",
    result: "Daha düşük aylık taksit fakat daha yüksek toplam ödeme",
  },
];

const commonMistakes = [
  {
    title: "Yalnızca aylık taksite bakmak",
    description:
      "Düşük aylık taksit cazip görünse de uzun vade nedeniyle toplam faiz yükü önemli ölçüde artabilir. Toplam geri ödeme mutlaka incelenmelidir.",
  },
  {
    title: "Araç bütçesini yalnızca satış fiyatıyla sınırlamak",
    description:
      "Kasko, trafik sigortası, vergi, bakım, yakıt, şarj, lastik ve park giderleri toplam sahip olma maliyetine eklenmelidir.",
  },
  {
    title: "Peşinat sonrası nakit rezervi bırakmamak",
    description:
      "Tüm birikimi peşinata ayırmak beklenmeyen giderlerde nakit sıkışıklığı yaratabilir. Acil durum rezervi korunmalıdır.",
  },
  {
    title: "Kampanya şartlarını okumamak",
    description:
      "Düşük faizli kampanya belirli model, vade, peşinat, sigorta veya müşteri profili koşullarına bağlı olabilir.",
  },
  {
    title: "İkinci el araç değerini satış fiyatı sanmak",
    description:
      "Banka kredi tutarını satıcının istediği fiyat yerine ekspertiz veya kabul edilen piyasa değeri üzerinden değerlendirebilir.",
  },
  {
    title: "Erken ödeme planını hesaba katmamak",
    description:
      "Gelecekte toplu ödeme yapma ihtimali varsa ara ödeme ve erken kapama koşulları kredi kullanılmadan önce öğrenilmelidir.",
  },
];

const faqItems = [
  {
    question: "Taşıt kredisi nedir?",
    answer:
      "Taşıt kredisi, sıfır veya ikinci el araç satın alımını finanse etmek amacıyla kullanılan ve çoğunlukla araç üzerine rehin tesis edilen taksitli kredi türüdür. Kredi koşulları araç bedeline, yaşına, müşteri gelirine, peşinata ve bankanın değerlendirmesine göre değişebilir.",
  },
  {
    question: "Taşıt kredisi nasıl hesaplanır?",
    answer:
      "Araç fiyatından peşinat çıkarılarak ihtiyaç duyulan kredi tutarı bulunur. Kredi tutarı, aylık faiz oranı ve vade eşit taksitli kredi formülünde kullanılarak aylık taksit hesaplanır. Taksitlerin toplamından ana para çıkarıldığında yaklaşık toplam faiz yükü elde edilir.",
  },
  {
    question: "Taşıt kredisi hesaplama aracında hangi bilgiler gerekir?",
    answer:
      "Araç fiyatı, peşinat tutarı, aylık faiz oranı ve vade temel bilgilerdir. Banka teklifini daha ayrıntılı değerlendirmek için tahsis ücreti, sigorta, kasko ve diğer giderler ayrıca dikkate alınmalıdır.",
  },
  {
    question: "Peşinat arttıkça taşıt kredisi taksiti düşer mi?",
    answer:
      "Evet. Diğer koşullar değişmediğinde peşinatın artması kredi tutarını azaltır. Daha düşük kredi tutarı hem aylık taksiti hem de toplam faiz yükünü düşürür.",
  },
  {
    question: "Vade uzadıkça taşıt kredisi taksiti azalır mı?",
    answer:
      "Genellikle evet. Kredi daha fazla aya yayıldığı için aylık taksit düşer. Buna karşılık faiz daha uzun süre işletildiğinden toplam geri ödeme çoğunlukla artar.",
  },
  {
    question: "Aylık faiz oranı nasıl kullanılmalıdır?",
    answer:
      "Hesaplama aracına bankanın teklifinde yer alan aylık nominal faiz oranı girilmelidir. Yıllık maliyet oranı ile aylık faiz oranı aynı kavram değildir ve doğrudan birbirinin yerine kullanılmamalıdır.",
  },
  {
    question: "Sıfır araç ile ikinci el araç kredisi aynı mı?",
    answer:
      "Hesaplama yöntemi aynıdır ancak bankaların uyguladığı oran, vade, kredi tutarı ve araç yaşı koşulları farklı olabilir. İkinci el araçlarda ekspertiz veya kabul edilen piyasa değeri daha fazla önem taşır.",
  },
  {
    question: "Taşıt kredisinde araç üzerine rehin konulur mu?",
    answer:
      "Birçok taşıt kredisi uygulamasında kredi borcu devam ettiği sürece araç üzerine banka lehine rehin tesis edilir. Rehin koşulları ve kaldırma işlemi kredi sözleşmesinde açıklanır.",
  },
  {
    question: "Taşıt kredisi için kasko zorunlu mu?",
    answer:
      "Kasko yasal olarak trafik sigortası gibi genel bir zorunluluk değildir. Ancak banka, kredi teminatı olan aracı korumak amacıyla kredi koşulu olarak kasko talep edebilir.",
  },
  {
    question: "Hesaplama sonucuna kasko dahil mi?",
    answer:
      "Hayır. Araç yalnızca kredi tutarı, aylık faiz ve vade üzerinden temel ödeme planını hesaplar. Kasko, sigorta, tahsis ücreti, rehin ve diğer masraflar ayrıca eklenmelidir.",
  },
  {
    question: "Taşıt kredisi için ne kadar peşinat gerekir?",
    answer:
      "Gerekli peşinat, aracın değeri, bankanın finanse etmeyi kabul ettiği oran, araç türü ve güncel düzenlemelere göre değişir. Kesin tutar için banka teklifi ve güncel mevzuat kontrol edilmelidir.",
  },
  {
    question: "Araç değerinin tamamı için kredi kullanılabilir mi?",
    answer:
      "Çoğu durumda araç değerinin tamamı finanse edilmez ve belirli bir peşinat gerekir. Uygulanabilecek kredi oranı araç değerine ve güncel düzenlemelere bağlıdır.",
  },
  {
    question: "İkinci el araçta kredi tutarı nasıl belirlenir?",
    answer:
      "Banka, satış bedelinin yanında ekspertiz değerini, aracın yaşını, modelini ve piyasa koşullarını dikkate alabilir. Kredi tutarı kabul edilen değer üzerinden sınırlanabilir.",
  },
  {
    question: "Araç yaşı taşıt kredisini etkiler mi?",
    answer:
      "Evet. Bankalar ikinci el araçlarda araç yaşı için üst sınır uygulayabilir veya araç yaşı arttıkça azami vadeyi kısaltabilir. Uygulama bankaya göre değişir.",
  },
  {
    question: "Elektrikli araç kredisi farklı mı hesaplanır?",
    answer:
      "Matematiksel taksit formülü aynıdır. Ancak elektrikli araçlara özel kampanya, faiz, kredi oranı veya vade seçenekleri sunulabilir.",
  },
  {
    question: "Taşıt kredisi erken kapatılabilir mi?",
    answer:
      "Genellikle kredi borcu erken kapatılabilir. Kesin kapama tutarı kalan ana para, işlemiş faiz ve sözleşme koşullarına göre banka tarafından hesaplanır.",
  },
  {
    question: "Taşıt kredisine ara ödeme yapılabilir mi?",
    answer:
      "Kredi sözleşmesi ve bankanın uygulamasına bağlı olarak ara ödeme yapılabilir. Ara ödeme sonrasında taksit tutarı, kalan vade veya her ikisi yeniden düzenlenebilir.",
  },
  {
    question: "Taşıt kredisi teklifleri nasıl karşılaştırılır?",
    answer:
      "Aynı kredi tutarı ve aynı vade için aylık taksit, toplam geri ödeme, tahsis ücreti, sigorta, kasko, rehin giderleri ve erken ödeme koşulları birlikte karşılaştırılmalıdır.",
  },
  {
    question: "Düşük faizli bayi kampanyası her zaman avantajlı mı?",
    answer:
      "Hayır. Düşük faizli kampanyalarda araç fiyatı, zorunlu peşinat, kısa vade, sigorta paketi veya nakit alım indiriminin kaybedilmesi gibi koşullar bulunabilir. Toplam maliyet esas alınmalıdır.",
  },
  {
    question: "Taşıt kredisi taksiti gelirin ne kadarını geçmemeli?",
    answer:
      "Tek bir oran herkes için uygun değildir. Kira veya konut ödemesi, mevcut borçlar, düzenli giderler ve acil durum birikimi dikkate alınarak sürdürülebilir bir taksit belirlenmelidir.",
  },
  {
    question: "Taşıt kredisi başvurusu kredi notunu etkiler mi?",
    answer:
      "Banka değerlendirmesinde kredi geçmişi, mevcut borçluluk, gelir ve ödeme kapasitesi dikkate alınabilir. Başvuru sonucu bu değerlendirmeye göre değişir.",
  },
  {
    question: "Taşıt kredisinde toplam faiz nasıl bulunur?",
    answer:
      "Aylık taksit vade sayısıyla çarpılarak toplam taksit ödemesi bulunur. Bu tutardan kullanılan ana para çıkarıldığında yaklaşık toplam faiz yükü elde edilir. Ek masraflar bu hesaplamaya ayrıca eklenmelidir.",
  },
  {
    question: "Taşıt kredisi toplam geri ödeme nasıl hesaplanır?",
    answer:
      "Temel hesaplamada aylık taksit ile vade sayısı çarpılır. Gerçek toplam maliyeti bulmak için tahsis, kasko, sigorta ve diğer zorunlu giderler de eklenmelidir.",
  },
  {
    question: "Taşıt kredisi hesaplama sonucu banka teklifinin aynısı mıdır?",
    answer:
      "Hayır. Araç tahmini sonuç verir. Bankanın yuvarlama yöntemi, ödeme tarihi, vergi ve ücretleri, sigorta primi ve kampanya koşulları nedeniyle resmî ödeme planı farklı olabilir.",
  },
  {
    question: "Taşıt kredisi kullanmadan önce nelere dikkat edilmelidir?",
    answer:
      "Araç ihtiyacı, peşinat sonrası nakit rezervi, aylık taksit, toplam geri ödeme, aracın değer kaybı, sigorta, bakım ve kullanım giderleri birlikte değerlendirilmelidir.",
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
  url: `https://hesaprehberionline.com${canonicalPath}`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  browserRequirements: "JavaScript",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
  featureList: [
    "Araç fiyatına göre kredi ihtiyacı",
    "Peşinat sonrası kredi tutarı",
    "Aylık taksit hesaplama",
    "Toplam faiz hesaplama",
    "Toplam geri ödeme hesaplama",
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
      item: "https://hesaprehberionline.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Hesaplamalar",
      item: "https://hesaprehberionline.com/hesaplamalar",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: calculator.title,
      item: `https://hesaprehberionline.com${canonicalPath}`,
    },
  ],
};

const howToStructuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Taşıt kredisi taksiti nasıl hesaplanır?",
  description:
    "Araç fiyatı, peşinat, aylık faiz oranı ve vade bilgileriyle taşıt kredisi taksitini hesaplama adımları.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Araç fiyatını girin",
      text: "Satın almayı planladığınız aracın satış fiyatını hesaplama aracına yazın.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Peşinatı belirleyin",
      text: "Kendi birikiminizden ödeyeceğiniz peşinat tutarını girin.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Faiz oranını yazın",
      text: "Bankanın teklif ettiği aylık faiz oranını girin.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Vadeyi seçin",
      text: "Krediyi kaç ayda geri ödemek istediğinizi belirleyin.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Sonuçları değerlendirin",
      text: "Kredi tutarı, aylık taksit, toplam faiz ve toplam geri ödeme sonuçlarını karşılaştırın.",
    },
  ],
};

const articleStructuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Taşıt Kredisi Hesaplama Rehberi",
  description:
    "Taşıt kredisi taksiti, peşinat, vade, faiz, toplam maliyet, sıfır ve ikinci el araç finansmanı hakkında kapsamlı rehber.",
  mainEntityOfPage: `https://hesaprehberionline.com${canonicalPath}`,
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
        <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
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

export default function TasitKredisiHesaplamaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
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
                Kredi ve Araç Finansmanı
              </span>

              <h1 className="mt-7 max-w-5xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
                Taşıt Kredisi Taksitinizi
                <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Ayrıntılı Olarak Hesaplayın
                </span>
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Araç fiyatı, peşinat, aylık faiz oranı ve vade bilgilerinizi
                girin; ihtiyaç duyacağınız kredi tutarını, aylık taksiti,
                toplam faiz yükünü ve toplam geri ödemeyi saniyeler içinde görün.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "Peşinat sonrası kredi tutarı",
                  "Aylık taksit",
                  "Toplam faiz",
                  "Toplam geri ödeme",
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
                  title="Taşıt Kredisi Hesaplama | HesapRehberi"
                  description="Araç fiyatı, peşinat, faiz ve vadeye göre taşıt kredisi taksitini ve toplam geri ödemeyi ücretsiz hesaplayın."
                />
              </div>
            </div>

            <aside className="rounded-[2rem] border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-slate-200/70 backdrop-blur">
              <div className="flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-700/25">
                  <Car className="h-7 w-7" aria-hidden="true" />
                </div>

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-700 ring-1 ring-emerald-200">
                  Ücretsiz araç
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-black tracking-tight text-slate-950">
                Hesaplama sonucunda neleri görürsünüz?
              </h2>

              <ul className="mt-6 space-y-4">
                {[
                  "Araç için gerekli kredi tutarı",
                  "Aylık eşit taksit",
                  "Toplam faiz yükü",
                  "Toplam geri ödeme",
                  "Peşinatın finansmana etkisi",
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
                    Araç yaklaşık sonuç verir. Kesin ödeme planı için bankanın
                    masraf, sigorta, yuvarlama ve kampanya koşulları ayrıca
                    değerlendirilmelidir.
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
                    Taşıt kredisi rehberi
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
            <section id="hesaplama-araci" className="scroll-mt-28">
              <VehicleLoanCalculator />
            </section>

            <section className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Calculator,
                  title: "Anlık hesaplama",
                  description:
                    "Araç fiyatı, peşinat, faiz ve vade değiştikçe ödeme planı anında güncellenir.",
                },
                {
                  icon: WalletCards,
                  title: "Bütçe karşılaştırması",
                  description:
                    "Farklı peşinat ve vade seçeneklerinin aylık taksite etkisini kolayca karşılaştırabilirsiniz.",
                },
                {
                  icon: TrendingDown,
                  title: "Maliyet görünümü",
                  description:
                    "Toplam faiz ve toplam geri ödeme sonuçlarını birlikte değerlendirerek karar verebilirsiniz.",
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
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </section>

            <section id="tasit-kredisi-nedir" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Temel bilgiler"
                title="Taşıt kredisi nedir?"
                description="Taşıt kredisi, araç satın alımında peşinat dışında kalan finansman ihtiyacını taksitli olarak karşılamaya yardımcı olan kredi türüdür."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                <article className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-9">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">
                    Taşıt kredisinin çalışma mantığı
                  </h3>

                  <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
                    <p>
                      Araç fiyatından peşinat tutarı çıkarıldığında ihtiyaç
                      duyulan yaklaşık kredi miktarı bulunur. Banka, müşteri
                      gelirini, kredi geçmişini, aracın özelliklerini ve kendi
                      kredi politikasını değerlendirerek kullanılabilecek tutarı,
                      faiz oranını ve vadeyi belirler.
                    </p>
                    <p>
                      Kredi kullandırıldığında ana para, faiz ve varsa ek
                      maliyetler belirli bir ödeme planına bağlanır. Eşit taksitli
                      kredilerde her ay aynı taksit ödenirken taksidin içindeki
                      faiz ve ana para payı zamanla değişir.
                    </p>
                    <p>
                      Taşıt finansmanı kararı yalnızca aylık taksite göre
                      verilmemelidir. Toplam geri ödeme, peşinat sonrası kalan
                      nakit, aracın kullanım giderleri ve değer kaybı birlikte
                      değerlendirilmelidir.
                    </p>
                  </div>
                </article>

                <div className="space-y-5">
                  {[
                    {
                      icon: Car,
                      title: "Araç fiyatı",
                      text: "Satın alınması planlanan aracın satış bedelidir.",
                    },
                    {
                      icon: CircleDollarSign,
                      title: "Peşinat",
                      text: "Araç bedelinin kredi kullanılmadan ödenecek kısmıdır.",
                    },
                    {
                      icon: BadgePercent,
                      title: "Aylık faiz",
                      text: "Kalan kredi bakiyesine aylık olarak uygulanan orandır.",
                    },
                    {
                      icon: CalendarDays,
                      title: "Vade",
                      text: "Kredinin kaç aylık taksitlerle geri ödeneceğini gösterir.",
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

            <section id="nasil-hesaplanir" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Adım adım hesaplama"
                title="Taşıt kredisi nasıl hesaplanır?"
                description="Hesaplama araç fiyatı ve peşinatla başlar. Kalan finansman ihtiyacı, aylık faiz ve vade kullanılarak eşit taksitli ödeme planına dönüştürülür."
              />

              <div className="mt-8 grid gap-5">
                {[
                  {
                    step: "01",
                    title: "Araç fiyatını belirleyin",
                    description:
                      "Satın almayı düşündüğünüz aracın satış bedelini netleştirin. İkinci el araçlarda banka tarafından kabul edilen değer farklı olabilir.",
                    icon: Car,
                  },
                  {
                    step: "02",
                    title: "Peşinatı girin",
                    description:
                      "Kendi kaynaklarınızdan ödeyeceğiniz tutarı belirleyin. Peşinat arttıkça kredi ihtiyacı azalır.",
                    icon: WalletCards,
                  },
                  {
                    step: "03",
                    title: "Aylık faiz oranını yazın",
                    description:
                      "Bankanın size sunduğu aylık nominal faiz oranını kullanın. Kampanya koşullarını ayrıca kontrol edin.",
                    icon: BadgePercent,
                  },
                  {
                    step: "04",
                    title: "Vade süresini seçin",
                    description:
                      "Krediyi kaç ayda geri ödemek istediğinizi belirleyin. Uzun vade taksiti azaltırken toplam maliyeti artırabilir.",
                    icon: CalendarDays,
                  },
                  {
                    step: "05",
                    title: "Taksit ve toplam maliyeti değerlendirin",
                    description:
                      "Aylık taksit, toplam faiz ve toplam geri ödeme sonuçlarını bütçenizle birlikte inceleyin.",
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

            <section id="formuller" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Hesaplama formülleri"
                title="Taşıt kredisi taksit ve toplam ödeme formülleri"
                description="Aşağıdaki formüller eşit taksitli kredi hesaplamasının temelini gösterir. Bankaların yuvarlama ve ücret uygulamaları küçük farklılıklar oluşturabilir."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <FormulaCard
                  title="Kredi tutarı"
                  formula="Kredi tutarı = Araç fiyatı − Peşinat"
                  description="Banka tarafından finanse edilen gerçek tutar, araç değerine ilişkin sınırlar nedeniyle daha düşük olabilir."
                  tone="blue"
                />
                <FormulaCard
                  title="Aylık taksit"
                  formula="Taksit = P × r × (1 + r)ⁿ ÷ ((1 + r)ⁿ − 1)"
                  description="P kredi tutarı, r aylık faiz oranının ondalık karşılığı, n ise vade ayıdır."
                  tone="violet"
                />
                <FormulaCard
                  title="Toplam geri ödeme"
                  formula="Toplam geri ödeme = Aylık taksit × Vade"
                  description="Bu temel tutara kredi tahsis, sigorta ve diğer masraflar dahil olmayabilir."
                  tone="emerald"
                />
                <FormulaCard
                  title="Toplam faiz"
                  formula="Toplam faiz = Toplam taksit ödemesi − Kredi tutarı"
                  description="Kredinin vade boyunca oluşturduğu yaklaşık faiz yükünü gösterir."
                  tone="amber"
                />
              </div>

              <div className="mt-6 rounded-[2rem] border border-blue-200 bg-blue-50 p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <Lightbulb className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Örnek: 1.200.000 TL araç ve 400.000 TL peşinat
                    </h3>
                    <p className="mt-2 leading-7 text-blue-900">
                      Araç fiyatından peşinat çıkarıldığında 800.000 TL kredi
                      ihtiyacı oluşur. Bu tutar için aylık faiz ve vade
                      belirlendiğinde taksit hesaplanır. Sonuçları değerlendirirken
                      yalnızca taksite değil, toplam faiz ve ek giderlere de
                      bakılmalıdır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="pesinat-etkisi" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Peşinat analizi"
                title="Peşinat tutarı taşıt kredisini nasıl etkiler?"
                description="Aşağıdaki örnek tabloda 1.000.000 TL araç, aylık %4 faiz ve 24 ay vade varsayılmıştır. Rakamlar yaklaşık karşılaştırma amaçlıdır."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-extrabold">Peşinat</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Kredi tutarı</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Aylık taksit</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam ödeme</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {downPaymentRows.map((row) => (
                        <tr
                          key={row.downPayment}
                          className="transition hover:bg-slate-50"
                        >
                          <td className="px-6 py-5 font-black text-slate-950">
                            {row.downPayment}
                          </td>
                          <td className="px-6 py-5 font-semibold text-slate-700">
                            {row.loanAmount}
                          </td>
                          <td className="px-6 py-5 font-black text-blue-800">
                            {row.installment}
                          </td>
                          <td className="px-6 py-5 font-semibold text-rose-700">
                            {row.totalInterest}
                          </td>
                          <td className="px-6 py-5 font-black text-emerald-700">
                            {row.totalPayment}
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
                    <TrendingDown
                      className="mt-1 h-6 w-6 shrink-0 text-emerald-700"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-black text-emerald-950">
                        Yüksek peşinatın avantajı
                      </h3>
                      <p className="mt-2 leading-7 text-emerald-900">
                        Kredi tutarı azaldığı için aylık taksit ve toplam faiz
                        yükü düşebilir.
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
                        Nakit rezervini koruyun
                      </h3>
                      <p className="mt-2 leading-7 text-amber-900">
                        Bütün birikimi peşinata ayırmak yerine sigorta, bakım ve
                        beklenmeyen giderler için yeterli rezerv bırakın.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            </section>

            <section id="vade-karsilastirma" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Vade analizi"
                title="Farklı vadelerde taşıt kredisi karşılaştırması"
                description="Aşağıdaki örnek 1.000.000 TL kredi ve sabit aylık faiz varsayımıyla hazırlanmıştır. Gerçek banka teklifleri farklı olabilir."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[900px] text-left">
                    <thead className="bg-blue-800 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-extrabold">Vade</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Aylık taksit</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam ödeme</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Yorum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {maturityComparisonRows.map((row) => (
                        <tr key={row.maturity} className="hover:bg-blue-50/50">
                          <td className="px-6 py-5 font-black text-slate-950">
                            {row.maturity}
                          </td>
                          <td className="px-6 py-5 font-black text-blue-800">
                            {row.installment}
                          </td>
                          <td className="px-6 py-5 font-semibold text-rose-700">
                            {row.totalInterest}
                          </td>
                          <td className="px-6 py-5 font-black text-emerald-700">
                            {row.totalPayment}
                          </td>
                          <td className="px-6 py-5 text-sm text-slate-600">
                            {row.note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="faiz-orani-etkisi" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Faiz analizi"
                title="Faiz oranındaki değişim toplam maliyeti nasıl etkiler?"
                description="Aşağıdaki örnekte 1.000.000 TL kredi ve 24 ay vade sabit tutulmuştur. Faiz oranı yükseldikçe hem aylık taksit hem toplam ödeme artar."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[760px] text-left">
                    <thead className="bg-slate-950 text-white">
                      <tr>
                        <th className="px-6 py-4 text-sm font-extrabold">Aylık faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Aylık taksit</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam faiz</th>
                        <th className="px-6 py-4 text-sm font-extrabold">Toplam ödeme</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {rateComparisonRows.map((row) => (
                        <tr key={row.rate} className="hover:bg-slate-50">
                          <td className="px-6 py-5">
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-blue-800">
                              {row.rate}
                            </span>
                          </td>
                          <td className="px-6 py-5 font-black text-blue-800">
                            {row.installment}
                          </td>
                          <td className="px-6 py-5 font-semibold text-rose-700">
                            {row.totalInterest}
                          </td>
                          <td className="px-6 py-5 font-black text-slate-950">
                            {row.totalPayment}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <TrendingUp
                    className="mt-0.5 h-6 w-6 shrink-0 text-blue-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-black text-blue-950">
                      Küçük oran farkı yüksek tutarda büyür
                    </h3>
                    <p className="mt-2 leading-7 text-blue-900">
                      Kredi tutarı ve vade büyüdükçe aylık faiz oranındaki küçük
                      farkların toplam TL maliyeti daha belirgin hâle gelir. Bu
                      nedenle teklifler aynı tutar ve vadede karşılaştırılmalıdır.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="sifir-ikinci-el" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Araç türleri"
                title="Sıfır, ikinci el ve elektrikli araç kredileri"
                description="Hesaplama formülü benzer olsa da bankaların araç türüne, yaşına ve kampanyaya göre uyguladığı koşullar değişebilir."
              />

              <div className="mt-8 grid gap-6 xl:grid-cols-3">
                {vehicleTypeCards.map(({ title, icon: Icon, description, items }) => (
                  <article
                    key={title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-2xl font-black text-slate-950">
                      {title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-600">{description}</p>
                    <ul className="mt-6 space-y-3">
                      {items.map((item) => (
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
                  </article>
                ))}
              </div>
            </section>

            <section id="kredi-orani" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Finansman sınırı"
                title="Araç değerine göre kredi oranı neden değişir?"
                description="Bankanın finanse edeceği tutar, araç satış fiyatının tamamı olmak zorunda değildir. Değer, araç türü ve güncel düzenlemeler kredi oranını etkileyebilir."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
                <article className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Scale className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black">
                    Kredi oranı ve peşinat ilişkisi
                  </h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    Banka, araç değerinin belirli bir kısmını finanse etmeyi
                    kabul edebilir. Kalan bölüm alıcı tarafından peşinat olarak
                    karşılanır. Araç değeri yükseldikçe uygulanabilecek oran veya
                    azami vade farklılaşabilir.
                  </p>
                  <p className="mt-4 leading-8 text-slate-300">
                    Kesin kredi oranı için bankanın güncel teklifleri ve yürürlükteki
                    düzenlemeler kontrol edilmelidir. Hesaplama aracı kredi
                    uygunluğu garantisi vermez.
                  </p>
                </article>

                <div className="space-y-5">
                  {[
                    {
                      title: "Araç satış bedeli",
                      text: "Sıfır araçlarda fatura, ikinci elde satış ve kabul edilen piyasa değeri birlikte değerlendirilebilir.",
                      icon: FileText,
                    },
                    {
                      title: "Ekspertiz değeri",
                      text: "İkinci el araçlarda kredi limiti bankanın kabul ettiği ekspertiz değeri üzerinden oluşabilir.",
                      icon: Wrench,
                    },
                    {
                      title: "Güncel banka politikası",
                      text: "Kredi oranı, vade ve müşteri koşulları bankaya ve kampanya dönemine göre değişebilir.",
                      icon: Landmark,
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

            <section id="masraflar" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Toplam sahip olma maliyeti"
                title="Kasko, sigorta ve diğer taşıt kredisi masrafları"
                description="Kredi hesaplama sonucu temel taksit planını gösterir. Aracın gerçek bütçesi için kredi dışındaki giderler de hesaba katılmalıdır."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {expenseItems.map(({ title, icon: Icon, description }) => (
                  <article
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-950">
                          {title}
                        </h3>
                        <p className="mt-2 leading-7 text-slate-600">
                          {description}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-7 rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-0.5 h-6 w-6 shrink-0 text-amber-700"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-black text-amber-950">
                      Araç maliyeti kredi taksitinden ibaret değildir
                    </h3>
                    <p className="mt-2 leading-7 text-amber-900">
                      Yakıt veya şarj, bakım, vergi, lastik, otopark ve değer
                      kaybı gibi giderleri de aylık araç bütçesine ekleyin.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="teklif-karsilastirma" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Banka seçimi"
                title="Taşıt kredisi teklifleri nasıl karşılaştırılır?"
                description="Doğru karşılaştırma aynı kredi tutarı ve aynı vade için toplam maliyeti ölçmeyi gerektirir. İlan edilen faiz oranı tek başına yeterli değildir."
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
                      Teklifleri toplam maliyet üzerinden karşılaştırın
                    </h3>
                    <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                      Aynı tutar ve vadede farklı banka tekliflerinin aylık
                      taksit, faiz, komisyon, sigorta ve toplam ödeme sonuçlarını
                      yan yana inceleyin.
                    </p>
                  </div>
                  <Link
                    href="/hesaplamalar/kredi-karsilastirma"
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-black text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Kredileri karşılaştır
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>

            <section id="erken-kapama" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Borç yönetimi"
                title="Taşıt kredisi erken kapama ve ara ödeme"
                description="Gelir artışı veya toplu para girişi olduğunda kredi borcunu azaltmak toplam faiz yükünü düşürebilir. Uygulama bankanın sözleşme koşullarına göre değişir."
              />

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white">
                    <RefreshCw className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-emerald-950">
                    Ara ödeme
                  </h3>
                  <p className="mt-4 leading-8 text-emerald-900">
                    Kalan ana paranın bir bölümünü vadesinden önce ödemektir.
                    Ödeme planı taksit azaltma, vade kısaltma veya her ikisinin
                    birleşimi şeklinde güncellenebilir.
                  </p>
                </article>

                <article className="rounded-[2rem] border border-blue-200 bg-blue-50 p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-white">
                    <LockKeyhole className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-2xl font-black text-blue-950">
                    Erken kapama
                  </h3>
                  <p className="mt-4 leading-8 text-blue-900">
                    Kalan kredi borcunun tek seferde tamamen ödenmesidir. Kesin
                    kapama tutarı için bankadan güncel borç dökümü alınmalıdır.
                  </p>
                </article>
              </div>

              <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-slate-950">
                  Karar verirken üç noktayı karşılaştırın
                </h3>
                <div className="mt-6 grid gap-5 md:grid-cols-3">
                  {[
                    {
                      title: "Kalan ana para",
                      text: "Toplu ödemenin ne kadarının doğrudan borcu azaltacağını öğrenin.",
                    },
                    {
                      title: "Faiz tasarrufu",
                      text: "Mevcut plan ile yeni plan arasındaki toplam ödeme farkını hesaplayın.",
                    },
                    {
                      title: "Nakit ihtiyacı",
                      text: "Erken ödeme sonrasında acil durum rezervinizin yeterli kalmasını sağlayın.",
                    },
                  ].map((item) => (
                    <article
                      key={item.title}
                      className="rounded-2xl bg-slate-50 p-5"
                    >
                      <h4 className="font-black text-slate-950">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="butce-planlama" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Ödeme gücü"
                title="Bütçeye uygun taşıt kredisi nasıl planlanır?"
                description="Uygun kredi, yalnızca başvurusu onaylanan kredi değildir. Taksitlerin diğer giderleri ve birikim hedeflerini bozmadan sürdürülebilmesi gerekir."
              />

              <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <article className="rounded-[2rem] bg-slate-950 p-8 text-white">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                    <Target className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-2xl font-black">
                    Aylık araç bütçesini bütünüyle hesaplayın
                  </h3>
                  <p className="mt-4 leading-8 text-slate-300">
                    Kredi taksitinin yanına yakıt veya şarj, sigorta, vergi,
                    bakım, park ve beklenmeyen onarım payını ekleyin. Bu toplam,
                    aracın gerçek aylık maliyetini gösterir.
                  </p>
                </article>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      icon: Banknote,
                      title: "Net gelir",
                      text: "Düzenli ve belgelenebilir aylık geliri esas alın.",
                    },
                    {
                      icon: ReceiptText,
                      title: "Mevcut borçlar",
                      text: "Kredi kartı ve diğer kredi taksitlerini toplam bütçeye ekleyin.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Acil durum fonu",
                      text: "En az birkaç aylık temel gideri karşılayacak rezerv bırakın.",
                    },
                    {
                      icon: Gauge,
                      title: "Esnek senaryo",
                      text: "Gelir düşüşü veya gider artışında da ödenebilecek taksiti seçin.",
                    },
                  ].map(({ icon: Icon, title, text }) => (
                    <article
                      key={title}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="mt-4 font-black text-slate-950">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="ornek-senaryolar" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Uygulamalı örnekler"
                title="Örnek taşıt kredisi senaryoları"
                description="Aşağıdaki senaryolar kredi planının peşinat, vade ve araç türüne göre nasıl şekillenebileceğini göstermek için hazırlanmıştır."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {scenarioRows.map((scenario) => (
                  <article
                    key={scenario.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-black text-slate-950">
                        {scenario.title}
                      </h3>
                      <Car className="h-6 w-6 text-blue-700" aria-hidden="true" />
                    </div>

                    <dl className="mt-6 grid grid-cols-2 gap-4">
                      {[
                        ["Araç fiyatı", scenario.vehiclePrice],
                        ["Peşinat", scenario.downPayment],
                        ["Kredi", scenario.loanAmount],
                        ["Vade", scenario.maturity],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-slate-50 p-4">
                          <dt className="text-xs font-extrabold uppercase tracking-[0.12em] text-slate-500">
                            {label}
                          </dt>
                          <dd className="mt-2 font-black text-slate-950">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-5 rounded-2xl border border-blue-200 bg-blue-50 p-4">
                      <p className="text-sm font-bold leading-6 text-blue-950">
                        {scenario.result}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section id="sik-yapilan-hatalar" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Karar kalitesi"
                title="Taşıt kredisi kullanırken sık yapılan hatalar"
                description="Kredi kararında yalnızca aracı satın alma anına değil, bütün ödeme dönemi ve araç sahipliği maliyetine odaklanmak gerekir."
              />

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {commonMistakes.map((item, index) => (
                  <article
                    key={item.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-sm font-black text-rose-700">
                        {String(index + 1).padStart(2, "0")}
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
            </section>

            <section id="ilgili-hesaplamalar" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Diğer araçlar"
                title="İlgili hesaplama araçları"
                description="Taşıt kredisi kararınızı farklı kredi ve bütçe araçlarıyla birlikte değerlendirebilirsiniz."
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
                        <ArrowRight
                          className="h-5 w-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"
                          aria-hidden="true"
                        />
                      </div>

                      <h3 className="mt-5 text-lg font-black text-slate-950">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section id="sss" className="mt-20 scroll-mt-28">
              <SectionHeading
                eyebrow="Merak edilenler"
                title="Taşıt kredisi hakkında sık sorulan sorular"
                description="Hesaplama, peşinat, faiz, vade, araç değeri ve kredi süreciyle ilgili temel soruların yanıtlarını inceleyin."
              />

              <div className="mt-8 space-y-4">
                {faqItems.map((item, index) => (
                  <details
                    key={item.question}
                    className="group rounded-3xl border border-slate-200 bg-white shadow-sm open:border-blue-200 open:shadow-md"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-6 py-5 md:px-7">
                      <span className="flex items-start gap-4">
                        <span className="mt-0.5 text-sm font-black text-blue-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-black leading-7 text-slate-950">
                          {item.question}
                        </span>
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-open:rotate-45 group-open:bg-blue-100 group-open:text-blue-700">
                        +
                      </span>
                    </summary>
                    <div className="border-t border-slate-100 px-6 pb-6 pt-5 md:px-7">
                      <p className="leading-8 text-slate-600">{item.answer}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-20 overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-blue-700 via-blue-800 to-slate-950 p-8 text-white shadow-2xl shadow-blue-900/20 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-extrabold text-blue-100 ring-1 ring-white/15">
                    <Calculator className="h-4 w-4" aria-hidden="true" />
                    Ücretsiz taşıt kredisi aracı
                  </span>
                  <h2 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">
                    Peşinat, faiz ve vade seçeneklerini karşılaştırın
                  </h2>
                  <p className="mt-4 max-w-3xl leading-8 text-blue-100">
                    Farklı senaryolar oluşturarak aylık taksitinizin ve toplam
                    geri ödemenizin nasıl değiştiğini görün. Karar vermeden önce
                    banka teklifindeki tüm ücretleri ayrıca kontrol edin.
                  </p>
                </div>

                <a
                  href="#hesaplama-araci"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-7 font-black text-blue-900 transition hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  Yeniden hesapla
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </section>

            <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <ShieldCheck
                  className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="font-black text-slate-950">
                    Bilgilendirme notu
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Bu sayfadaki hesaplamalar ve örnekler genel bilgilendirme
                    amaçlıdır. Kredi onayı, faiz oranı, vade, masraf, sigorta ve
                    araç finansman oranı banka değerlendirmesine ve güncel
                    koşullara göre değişebilir. Kesin ödeme planı için bankanın
                    resmî teklifini esas alın.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}