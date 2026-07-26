import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  BadgePercent,
  Banknote,
  BriefcaseBusiness,
  Calculator,
  ChartNoAxesCombined,
  CheckCircle2,
  CircleDollarSign,
  CircleEqual,
  FileText,
  GraduationCap,
  HandCoins,
  Info,
  Landmark,
  Lightbulb,
  Percent,
  ReceiptText,
  Scale,
  ShoppingBag,
  Sparkles,
  TrendingDown,
  TrendingUp,
  TriangleAlert,
  WalletCards,
} from "lucide-react";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import PercentageCalculator from "@/components/calculators/PercentageCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/yuzde-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Yüzde hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const contentSections: CalculatorContentSection[] = [
  {
    title: "Yüzde nasıl hesaplanır?",
    paragraphs: [
      "Bir sayının belirli bir yüzdesini bulmak için ana değer yüzde oranıyla çarpılır ve elde edilen sonuç 100'e bölünür. Yüzde işareti, bir değerin yüz eşit parçadan kaçına karşılık geldiğini ifade eder.",
      "Örneğin 1.000 sayısının yüzde 20'si 200'dür. Hesaplama 1.000 × 20 / 100 şeklinde yapılır. Aynı işlem, 1.000 sayısını 0,20 ile çarparak da gerçekleştirilebilir.",
      "Yüzde oranını ondalık sayıya çevirmek için oranı 100'e bölmek yeterlidir. Buna göre yüzde 5 değeri 0,05'e, yüzde 25 değeri 0,25'e ve yüzde 150 değeri 1,50'ye eşittir.",
    ],
    formula: "Yüzde değeri = Ana değer × Yüzde oranı / 100",
  },
  {
    title: "Bir sayının yüzdesini bulma",
    paragraphs: [
      "Bir tutarın, puanın veya miktarın belirli bir yüzdesini bulmak günlük hayatta en sık kullanılan yüzde işlemlerinden biridir. İndirim miktarı, komisyon tutarı, vergi payı ve başarı oranı gibi değerler bu yöntemle hesaplanabilir.",
      "Örneğin 2.400 TL'nin yüzde 15'i 360 TL'dir. Burada ana değer 2.400, yüzde oranı 15 ve hesaplanan yüzde tutarı 360'tır.",
    ],
    cards: [
      {
        title: "Yüzde 10'u hızlı bulma",
        description:
          "Bir sayının yüzde 10'unu bulmak için sayıyı 10'a bölün.",
      },
      {
        title: "Yüzde 1'i hızlı bulma",
        description:
          "Bir sayının yüzde 1'ini bulmak için sayıyı 100'e bölün.",
      },
      {
        title: "Yüzde 50'yi hızlı bulma",
        description:
          "Bir sayının yüzde 50'si, sayının yarısına eşittir.",
      },
    ],
  },
  {
    title: "Yüzde artışı nasıl hesaplanır?",
    paragraphs: [
      "Bir değer belirli bir yüzde oranında artırılacaksa önce artış tutarı hesaplanır, ardından bu tutar başlangıç değerine eklenir.",
      "Örneğin 10.000 TL tutarındaki bir ücret yüzde 20 artırıldığında artış tutarı 2.000 TL, yeni değer ise 12.000 TL olur.",
      "Yüzde artışında kısa formül olarak ana değer, 1 ile yüzde oranının ondalık karşılığının toplamıyla çarpılabilir.",
    ],
    formula:
      "Artırılmış değer = Ana değer × (1 + Yüzde oranı / 100)",
  },
  {
    title: "Yüzde azalışı nasıl hesaplanır?",
    paragraphs: [
      "Bir değeri belirli bir yüzde oranında azaltmak için önce azalış tutarı hesaplanır ve bulunan tutar başlangıç değerinden çıkarılır.",
      "Örneğin 5.000 TL tutarındaki bir ürün yüzde 30 indirimle satılıyorsa indirim tutarı 1.500 TL, indirimli fiyat ise 3.500 TL olur.",
      "Yüzde azalışı, fiyat indirimi, değer kaybı, bütçe kesintisi ve maliyet düşüşü gibi birçok alanda kullanılabilir.",
    ],
    formula:
      "Azaltılmış değer = Ana değer × (1 - Yüzde oranı / 100)",
  },
  {
    title: "İki sayı arasındaki yüzde değişimi",
    paragraphs: [
      "Başlangıç değeri ile yeni değer arasındaki yüzdelik değişimi bulmak için iki değer arasındaki fark başlangıç değerine bölünür ve sonuç 100 ile çarpılır.",
      "Örneğin 100'den 125'e çıkan bir değerde yüzde 25 artış vardır. Buna karşılık 125'ten 100'e düşüş yüzde 20 azalıştır.",
      "Artış ve azalış yüzdelerinin birbirine eşit olmamasının nedeni, her iki işlemin farklı başlangıç değerleri üzerinden hesaplanmasıdır.",
    ],
    formula:
      "Yüzde değişimi = (Yeni değer - Başlangıç değeri) / Başlangıç değeri × 100",
  },
  {
    title: "Bir sayı diğerinin yüzde kaçı?",
    paragraphs: [
      "Bir değerin başka bir değerin yüzde kaçına karşılık geldiğini bulmak için parça değer toplam değere bölünür ve sonuç 100 ile çarpılır.",
      "Örneğin 30 sayısı 150 sayısının yüzde 20'sidir. Aynı yöntem bir öğrencinin doğru cevap oranını, bir gider kaleminin bütçedeki payını veya bir ürün grubunun toplam satış içindeki oranını bulmak için kullanılabilir.",
    ],
    formula:
      "Yüzde oranı = Parça değer / Toplam değer × 100",
  },
  {
    title: "Yüzde farkı nedir?",
    paragraphs: [
      "Yüzde farkı, iki değerin birbirinden ne kadar farklı olduğunu tarafsız biçimde göstermek için kullanılır. Yüzde değişiminden farklı olarak belirli bir başlangıç değerini esas almaz.",
      "İki değer arasındaki mutlak fark, değerlerin mutlak ortalamasına bölünür ve sonuç 100 ile çarpılır.",
      "Bu yöntem özellikle iki fiyatı, iki ölçümü veya iki dönemin birbirine göre farkını başlangıç yönü belirtmeden karşılaştırmak için uygundur.",
    ],
    formula:
      "Yüzde farkı = |Birinci değer - İkinci değer| / Değerlerin ortalaması × 100",
  },
  {
    title: "İndirim oranı nasıl hesaplanır?",
    paragraphs: [
      "Bir ürünün eski fiyatı ve indirimli fiyatı biliniyorsa indirim oranı, iki fiyat arasındaki farkın eski fiyata bölünmesiyle bulunur.",
      "Örneğin fiyatı 2.000 TL'den 1.500 TL'ye düşen bir üründe indirim tutarı 500 TL, indirim oranı yüzde 25'tir.",
      "Etiket üzerindeki yüzde oranını kontrol ederken başlangıç fiyatının kampanya öncesindeki gerçek satış fiyatı olup olmadığına dikkat edilmelidir.",
    ],
    formula:
      "İndirim oranı = (Eski fiyat - Yeni fiyat) / Eski fiyat × 100",
  },
  {
    title: "Zam oranı nasıl hesaplanır?",
    paragraphs: [
      "Maaş, kira, ürün fiyatı veya hizmet bedelindeki zam oranı; yeni değer ile eski değer arasındaki farkın eski değere bölünmesiyle hesaplanır.",
      "Örneğin 20.000 TL olan bir ücret 25.000 TL'ye yükselirse artış tutarı 5.000 TL, zam oranı yüzde 25 olur.",
      "Yalnızca artış tutarına bakmak yerine artışın başlangıç değerine oranını değerlendirmek daha sağlıklı bir karşılaştırma sağlar.",
    ],
    formula:
      "Zam oranı = (Yeni değer - Eski değer) / Eski değer × 100",
  },
  {
    title: "Ardışık yüzde değişimleri neden toplanmaz?",
    paragraphs: [
      "Bir değer art arda birden fazla yüzde değişimine uğradığında oranları doğrudan toplamak çoğu zaman doğru sonucu vermez. Çünkü ikinci işlem, ilk işlemden sonra oluşan yeni değer üzerinden hesaplanır.",
      "Örneğin 100 TL önce yüzde 20 artarak 120 TL olur. Ardından yüzde 20 azalırsa 96 TL'ye düşer. Toplam değişim sıfır değil, yüzde 4 azalıştır.",
      "Ardışık artış veya azalışlarda her oran ayrı bir çarpan olarak uygulanmalıdır.",
    ],
    formula:
      "Son değer = İlk değer × (1 + İlk oran / 100) × (1 + İkinci oran / 100)",
  },
  {
    title: "Yüzde puan ile yüzde değişim arasındaki fark",
    paragraphs: [
      "Yüzde puan, yüzde cinsinden ifade edilen iki oran arasındaki doğrudan farktır. Yüzde değişim ise bu farkın başlangıç oranına göre büyüklüğünü gösterir.",
      "Örneğin bir oran yüzde 20'den yüzde 25'e yükselirse artış 5 yüzde puandır. Aynı değişimin göreli yüzde artışı ise yüzde 25'tir.",
      "Anket, faiz, başarı oranı ve pazar payı gibi veriler karşılaştırılırken yüzde puan ile yüzde değişim ifadeleri birbirine karıştırılmamalıdır.",
    ],
    cards: [
      {
        title: "Yüzde puan farkı",
        description: "%25 - %20 = 5 yüzde puan",
      },
      {
        title: "Göreli yüzde değişimi",
        description: "(25 - 20) / 20 × 100 = %25 artış",
      },
    ],
  },
  {
    title: "Yüzde hesaplamalarında sık yapılan hatalar",
    paragraphs: [
      "En sık yapılan hata, yüzde değişiminde yanlış başlangıç değerini payda olarak kullanmaktır. Payda her zaman karşılaştırmanın başladığı değer olmalıdır.",
      "Bir diğer hata, yüzde 20 artış ile yüzde 20 azalışın birbirini tamamen sıfırladığını düşünmektir. İşlemler farklı değerler üzerinden uygulandığı için sonuç başlangıç noktasına dönmez.",
      "Ondalık ayırıcı, negatif sayı ve sıfıra bölme durumları da sonucu etkileyebilir. Özellikle başlangıç veya toplam değer sıfırsa standart oran formülü kullanılamaz.",
    ],
    cards: [
      {
        title: "Yanlış payda kullanımı",
        description:
          "Yüzde değişiminde fark, yeni değere değil başlangıç değerine bölünmelidir.",
      },
      {
        title: "Oranları doğrudan toplama",
        description:
          "Ardışık yüzde değişimleri çoğu durumda ayrı ayrı uygulanmalıdır.",
      },
      {
        title: "Yüzde ile yüzde puanı karıştırma",
        description:
          "İki yüzde arasındaki doğrudan fark, yüzde puan olarak ifade edilir.",
      },
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Bir sayının yüzde 10'u nasıl bulunur?",
    answer:
      "Sayıyı 10 ile çarpıp 100'e bölebilir veya doğrudan 10'a bölebilirsiniz. Örneğin 750'nin yüzde 10'u 75'tir.",
  },
  {
    question: "Bir sayının yüzde 1'i nasıl hesaplanır?",
    answer:
      "Sayı 100'e bölünür. Örneğin 4.500 sayısının yüzde 1'i 45'tir.",
  },
  {
    question: "Yüzde artışı nasıl hesaplanır?",
    answer:
      "Ana değerin yüzde oranına karşılık gelen kısmı hesaplanır ve bulunan tutar ana değere eklenir. Kısa yöntem olarak ana değer, 1 + oran/100 çarpanıyla çarpılabilir.",
  },
  {
    question: "Yüzde azalışı nasıl hesaplanır?",
    answer:
      "Ana değerin yüzde oranına karşılık gelen kısmı hesaplanır ve bulunan tutar ana değerden çıkarılır. Kısa yöntem olarak ana değer, 1 - oran/100 çarpanıyla çarpılabilir.",
  },
  {
    question: "Bir sayının diğerinin yüzde kaçı olduğu nasıl bulunur?",
    answer:
      "Parça değer toplam değere bölünür ve sonuç 100 ile çarpılır. Örneğin 30 sayısı 150 sayısının yüzde 20'sidir.",
  },
  {
    question: "Yüzde değişiminde başlangıç değeri sıfır olabilir mi?",
    answer:
      "Hayır. Standart yüzde değişimi formülünde başlangıç değerine bölme işlemi yapıldığı için başlangıç değeri sıfır olduğunda sonuç tanımsızdır.",
  },
  {
    question: "Yüzde 20 artıştan sonra yüzde 20 azalış neden eski değeri vermez?",
    answer:
      "Çünkü artış ve azalış farklı başlangıç değerleri üzerinden hesaplanır. 100 sayısı yüzde 20 artınca 120 olur; 120'nin yüzde 20 azalması ise 96 sonucunu verir.",
  },
  {
    question: "Yüzde farkı ile yüzde değişimi aynı şey mi?",
    answer:
      "Hayır. Yüzde değişimi belirli bir başlangıç değerini esas alır. Yüzde farkı ise iki değerin mutlak farkını ortalamalarına göre ölçer ve yön belirtmez.",
  },
  {
    question: "İndirim oranı nasıl bulunur?",
    answer:
      "Eski fiyat ile yeni fiyat arasındaki fark eski fiyata bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question: "Zam oranı nasıl hesaplanır?",
    answer:
      "Yeni değer ile eski değer arasındaki fark eski değere bölünür ve sonuç 100 ile çarpılır.",
  },
  {
    question: "Yüzde 25 indirimli fiyat nasıl bulunur?",
    answer:
      "Ürün fiyatı 0,75 ile çarpılır. Örneğin 2.000 TL'nin yüzde 25 indirimli fiyatı 1.500 TL'dir.",
  },
  {
    question: "Yüzde 18 eklenmiş tutar nasıl hesaplanır?",
    answer:
      "Ana değer 1,18 ile çarpılır. Örneğin 1.000 TL'ye yüzde 18 eklendiğinde sonuç 1.180 TL olur.",
  },
  {
    question: "Yüzde 50 artış ne anlama gelir?",
    answer:
      "Başlangıç değerinin yarısı kadar artış anlamına gelir. 200 sayısının yüzde 50 artırılmış hâli 300'dür.",
  },
  {
    question: "Yüzde 100 artış ne anlama gelir?",
    answer:
      "Değerin kendi kadar artması ve iki katına çıkması anlamına gelir. 500 sayısı yüzde 100 artınca 1.000 olur.",
  },
  {
    question: "Yüzde 100 azalış ne anlama gelir?",
    answer:
      "Değerin tamamının azalması ve sonucun sıfır olması anlamına gelir.",
  },
  {
    question: "Yüzde oranı 100'den büyük olabilir mi?",
    answer:
      "Evet. Parça değer toplam değerden büyükse veya artış başlangıç değerini aşıyorsa yüzde oranı 100'den büyük olabilir.",
  },
  {
    question: "Negatif sayılarda yüzde hesaplanabilir mi?",
    answer:
      "Temel yüzde işlemleri negatif sayılarla yapılabilir. Ancak sonucun yorumu işlem türüne ve bağlama göre değişebileceği için dikkatli değerlendirilmelidir.",
  },
  {
    question: "Yüzde puan nedir?",
    answer:
      "Yüzde cinsinden iki oran arasındaki doğrudan farktır. Bir oran yüzde 30'dan yüzde 35'e çıkarsa fark 5 yüzde puandır.",
  },
];

const exampleCalculations = [
  {
    category: "Temel yüzde",
    title: "Bir sayının yüzdesi",
    operation: "1.000 × %20",
    result: "200",
    description: "1.000 sayısının yüzde 20'si.",
    icon: Percent,
    className: "border-blue-200 bg-blue-50 text-blue-950",
    iconClassName: "bg-blue-100 text-blue-700",
  },
  {
    category: "Fiyat artışı",
    title: "Yüzde artırma",
    operation: "1.000 + %20",
    result: "1.200",
    description: "Yüzde 20 artırılmış yeni değer.",
    icon: TrendingUp,
    className: "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Fiyat azalışı",
    title: "Yüzde azaltma",
    operation: "1.000 - %20",
    result: "800",
    description: "Yüzde 20 azaltılmış yeni değer.",
    icon: TrendingDown,
    className: "border-rose-200 bg-rose-50 text-rose-950",
    iconClassName: "bg-rose-100 text-rose-700",
  },
  {
    category: "Değişim",
    title: "Yüzde artış oranı",
    operation: "100 → 125",
    result: "%25",
    description: "Başlangıç değerine göre artış.",
    icon: ChartNoAxesCombined,
    className: "border-violet-200 bg-violet-50 text-violet-950",
    iconClassName: "bg-violet-100 text-violet-700",
  },
  {
    category: "Alışveriş",
    title: "İndirimli fiyat",
    operation: "2.000 TL - %25",
    result: "1.500 TL",
    description: "Yüzde 25 indirim sonrası fiyat.",
    icon: ShoppingBag,
    className: "border-amber-200 bg-amber-50 text-amber-950",
    iconClassName: "bg-amber-100 text-amber-700",
  },
  {
    category: "Maaş",
    title: "Maaş zammı",
    operation: "30.000 TL + %15",
    result: "34.500 TL",
    description: "Yüzde 15 zamlı maaş.",
    icon: BriefcaseBusiness,
    className: "border-cyan-200 bg-cyan-50 text-cyan-950",
    iconClassName: "bg-cyan-100 text-cyan-700",
  },
  {
    category: "Bütçe",
    title: "Gider oranı",
    operation: "6.000 / 24.000",
    result: "%25",
    description: "Giderin toplam bütçedeki payı.",
    icon: WalletCards,
    className: "border-indigo-200 bg-indigo-50 text-indigo-950",
    iconClassName: "bg-indigo-100 text-indigo-700",
  },
  {
    category: "Eğitim",
    title: "Başarı oranı",
    operation: "72 / 80",
    result: "%90",
    description: "Doğru cevapların toplam sorulara oranı.",
    icon: GraduationCap,
    className: "border-teal-200 bg-teal-50 text-teal-950",
    iconClassName: "bg-teal-100 text-teal-700",
  },
  {
    category: "Finans",
    title: "Getiri oranı",
    operation: "10.000 → 11.200",
    result: "%12",
    description: "Başlangıç tutarına göre getiri.",
    icon: Landmark,
    className: "border-sky-200 bg-sky-50 text-sky-950",
    iconClassName: "bg-sky-100 text-sky-700",
  },
  {
    category: "Satış",
    title: "Komisyon tutarı",
    operation: "50.000 TL × %4",
    result: "2.000 TL",
    description: "Satış üzerinden hesaplanan komisyon.",
    icon: HandCoins,
    className: "border-lime-200 bg-lime-50 text-lime-950",
    iconClassName: "bg-lime-100 text-lime-700",
  },
  {
    category: "Karşılaştırma",
    title: "Yüzde farkı",
    operation: "80 ve 120",
    result: "%40",
    description: "İki değerin ortalamasına göre farkı.",
    icon: CircleEqual,
    className: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-950",
    iconClassName: "bg-fuchsia-100 text-fuchsia-700",
  },
  {
    category: "Oran",
    title: "Bütçe payı",
    operation: "15.000 / 60.000",
    result: "%25",
    description: "Bir kalemin toplam içindeki payı.",
    icon: Scale,
    className: "border-orange-200 bg-orange-50 text-orange-950",
    iconClassName: "bg-orange-100 text-orange-700",
  },
];

const usageAreas = [
  {
    title: "Alışveriş ve indirim",
    description:
      "İndirim tutarını, kampanya sonrası fiyatı ve iki mağaza arasındaki fiyat farkını hesaplayın.",
    icon: ShoppingBag,
  },
  {
    title: "Maaş ve çalışma hayatı",
    description:
      "Maaş zammını, prim oranını ve ücretteki dönemsel değişimi karşılaştırın.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Finans ve yatırım",
    description:
      "Getiri oranı, değer artışı, portföy payı ve maliyet değişimi gibi oranları inceleyin.",
    icon: Banknote,
  },
  {
    title: "Vergi ve kesintiler",
    description:
      "Bir tutara eklenen vergi payını veya toplam içindeki kesinti oranını hesaplayın.",
    icon: ReceiptText,
  },
  {
    title: "Eğitim ve sınav",
    description:
      "Doğru cevap, başarı, devam ve tamamlanma oranlarını kolayca bulun.",
    icon: GraduationCap,
  },
  {
    title: "Bütçe planlama",
    description:
      "Gider kalemlerinin toplam gelir veya bütçe içindeki yüzdelik payını görün.",
    icon: CircleDollarSign,
  },
];

const relatedCalculators = [
  {
    title: "KDV Hesaplama",
    description:
      "KDV dahil ve KDV hariç tutarları seçtiğiniz oran üzerinden hesaplayın.",
    href: "/hesaplamalar/kdv-hesaplama",
    icon: ReceiptText,
  },
  {
    title: "Faiz Hesaplama",
    description:
      "Anapara, faiz oranı ve süreye göre tahmini faiz sonucunu görüntüleyin.",
    href: "/hesaplamalar/faiz-hesaplama",
    icon: TrendingUp,
  },
  {
    title: "Kar Marjı Hesaplama",
    description:
      "Maliyet ve satış fiyatına göre kâr tutarını ve kâr marjını hesaplayın.",
    href: "/hesaplamalar/kar-marji-hesaplama",
    icon: ChartNoAxesCombined,
  },
  {
    title: "İndirim Hesaplama",
    description:
      "İndirim oranına göre kampanya tutarını ve indirimli fiyatı bulun.",
    href: "/hesaplamalar/indirim-hesaplama",
    icon: BadgePercent,
  },
];

export default function YuzdeHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-violet-100 text-violet-700"
      contentSections={contentSections}
      faqItems={faqItems}
    >
      <PercentageCalculator />

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-950 px-6 py-8 text-white md:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-100 ring-1 ring-white/10">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Uygulamalı örnekler
              </span>

              <h2 className="mt-5 text-2xl font-black tracking-tight md:text-3xl">
                Örnek yüzde hesaplamaları
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-300">
                Günlük hayatta sık karşılaşılan yüzde işlemlerinin sonuçlarını
                ve hangi amaçla kullanıldığını inceleyin.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-bold text-slate-200 ring-1 ring-white/10">
              12 farklı örnek
            </div>
          </div>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-3">
          {exampleCalculations.map((example) => {
            const Icon = example.icon;

            return (
              <article
                key={`${example.title}-${example.operation}`}
                className={`rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${example.className}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${example.iconClassName}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>

                  <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-extrabold">
                    {example.category}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-black">{example.title}</h3>

                <p className="mt-3 text-sm font-bold opacity-70">
                  {example.operation}
                </p>

                <p className="mt-2 text-2xl font-black">{example.result}</p>

                <p className="mt-3 text-sm leading-6 opacity-80">
                  {example.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-blue-700">
              <Calculator className="h-4 w-4" aria-hidden="true" />
              Kullanım alanları
            </span>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Yüzde hesaplama nerelerde kullanılır?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Yüzde işlemleri yalnızca matematik sorularında değil; alışveriş,
              maaş, yatırım, vergi, eğitim ve bütçe planlaması gibi birçok
              günlük işlemde kullanılır.
            </p>

            <div className="mt-6 rounded-3xl border border-blue-200 bg-blue-50 p-5">
              <div className="flex items-start gap-3">
                <Info
                  className="mt-0.5 h-5 w-5 shrink-0 text-blue-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-blue-950">
                  Doğru işlem türünü seçmek önemlidir. Bir değerin yüzdesini
                  bulmak, yüzde değişimi hesaplamak ve yüzde farkını ölçmek
                  birbirinden farklı formüller gerektirir.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {usageAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:border-violet-200 hover:bg-violet-50/40"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-4 font-black text-slate-950">
                    {area.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {area.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
            <Lightbulb className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-emerald-950">
            Hızlı yüzde hesaplama ipuçları
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "Yüzde 10 için sayıyı 10'a bölün.",
              "Yüzde 5 için önce yüzde 10'u bulun, sonra ikiye bölün.",
              "Yüzde 25 için sayının dörtte birini alın.",
              "Yüzde 50 için sayıyı ikiye bölün.",
              "Yüzde 75 için sayının dörtte üçünü hesaplayın.",
              "Yüzde 100 artışın değeri iki katına çıkardığını unutmayın.",
            ].map((tip) => (
              <div key={tip} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-emerald-950">{tip}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[2rem] border border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
            <TriangleAlert className="h-6 w-6" aria-hidden="true" />
          </div>

          <h2 className="mt-5 text-2xl font-black tracking-tight text-amber-950">
            Hesaplama yaparken dikkat edin
          </h2>

          <div className="mt-6 space-y-4">
            {[
              "Yüzde değişiminde başlangıç değerini doğru belirleyin.",
              "Başlangıç değeri sıfırsa standart yüzde değişimi hesaplanamaz.",
              "Art arda uygulanan yüzde oranlarını doğrudan toplamayın.",
              "Yüzde farkı ile yüzde değişimi aynı işlem değildir.",
              "Yüzde puan ifadesini göreli yüzde değişimiyle karıştırmayın.",
              "Finansal kararlarda yalnızca yüzdelik sonucu değil toplam tutarı da inceleyin.",
            ].map((warning) => (
              <div key={warning} className="flex items-start gap-3">
                <TriangleAlert
                  className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
                  aria-hidden="true"
                />
                <p className="text-sm leading-7 text-amber-950">{warning}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-violet-700">
              <FileText className="h-4 w-4" aria-hidden="true" />
              İlgili hesaplamalar
            </span>

            <h2 className="mt-5 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Diğer hesaplama araçlarını keşfedin
            </h2>

            <p className="mt-3 max-w-3xl leading-7 text-slate-600">
              Yüzde hesaplamalarıyla bağlantılı finans, vergi ve alışveriş
              araçlarını kullanarak farklı sonuçları karşılaştırın.
            </p>
          </div>

          <Link
            href="/hesaplamalar"
            className="inline-flex items-center gap-2 font-extrabold text-violet-700 transition hover:text-violet-900"
          >
            Tüm hesaplamalar
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {relatedCalculators.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-700 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="mt-5 font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-violet-700">
                  Hesaplamaya git
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200 ring-1 ring-white/10">
              <BadgePercent className="h-7 w-7" aria-hidden="true" />
            </div>

            <h2 className="mt-6 text-2xl font-black tracking-tight md:text-3xl">
              Diğer finans hesaplamalarını da inceleyin
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Kredi, faiz, mevduat, vergi ve maaş hesaplama araçlarını ücretsiz
              kullanarak farklı finansal senaryoları saniyeler içinde
              değerlendirin.
            </p>
          </div>

          <Link
            href="/hesaplamalar"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3.5 font-extrabold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-50"
          >
            Hesaplama araçlarını aç
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </CalculatorLayout>
  );
}