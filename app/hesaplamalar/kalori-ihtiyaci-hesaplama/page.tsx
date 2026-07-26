import type { Metadata } from "next";
import {
  Activity,
  AlertTriangle,
  Apple,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Brain,
  CalendarDays,
  Calculator,
  CheckCircle2,
  ChevronRight,
  CircleGauge,
  Clock3,
  Dumbbell,
  Flame,
  Footprints,
  Gauge,
  HeartPulse,
  Info,
  Lightbulb,
  LineChart,
  Scale,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  Utensils,
  Weight,
  Zap,
} from "lucide-react";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import CalorieCalculator from "@/components/calculators/CalorieCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/kalori-ihtiyaci-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Kalori ihtiyacı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
    title:
      "Günlük Kalori İhtiyacı Hesaplama – TDEE ve Hedef Kalori",
    description:
      "Yaş, cinsiyet, boy, kilo ve aktivite düzeyinize göre günlük kalori ihtiyacınızı, bazal metabolizma hızınızı, kilo verme ve kilo alma hedeflerinizi hesaplayın.",
    keywords: [
      "kalori ihtiyacı hesaplama",
      "günlük kalori hesaplama",
      "tdee hesaplama",
      "bazal metabolizma hesaplama",
      "kilo verme kalorisi",
      "kilo alma kalorisi",
      "günlük enerji ihtiyacı",
      "kalori açığı hesaplama",
      "kalori fazlası hesaplama",
      "mifflin st jeor",
      "aktivite katsayısı",
    ],
  });

const contentSections: CalculatorContentSection[] = [
  {
    title: "Günlük kalori ihtiyacı nedir?",
    paragraphs: [
      "Günlük kalori ihtiyacı, vücudunuzun bir gün boyunca temel yaşam işlevlerini sürdürmek, hareket etmek, çalışmak, egzersiz yapmak ve besinleri sindirmek için kullandığı toplam enerji miktarını ifade eder.",
      "Bu değer yalnızca dinlenme hâlindeki enerji tüketimini değil; masa başında çalışmayı, yürümeyi, merdiven çıkmayı, antrenman yapmayı ve gün içindeki diğer fiziksel aktiviteleri de kapsar.",
      "Hesaplama sonucunda ulaşılan değer genellikle mevcut vücut ağırlığını korumak için gereken yaklaşık günlük enerji miktarı olarak yorumlanır.",
    ],
  },
  {
    title: "Günlük kalori ihtiyacı nasıl hesaplanır?",
    paragraphs: [
      "Hesaplama iki temel aşamada yapılır. Önce yaş, cinsiyet, boy ve kilo bilgileri kullanılarak bazal metabolizma hızı tahmin edilir.",
      "Daha sonra bu değer, kişinin günlük hareket ve egzersiz düzeyini temsil eden aktivite katsayısıyla çarpılır.",
      "Ortaya çıkan sonuç toplam günlük enerji harcaması, yani TDEE değeridir.",
    ],
    formula:
      "Günlük kalori ihtiyacı (TDEE) = Bazal metabolizma hızı (BMR) × Aktivite katsayısı",
  },
  {
    title: "BMR ve TDEE arasındaki fark nedir?",
    paragraphs: [
      "BMR, vücudun tam dinlenme hâlindeyken solunum, dolaşım, hücre yenilenmesi ve vücut sıcaklığını koruma gibi yaşamsal işlevler için harcadığı enerjidir.",
      "TDEE ise BMR değerine günlük hareket, egzersiz ve diğer enerji harcamalarının eklenmiş hâlidir.",
      "Bu nedenle kilo koruma, kilo verme veya kilo alma planlarında doğrudan BMR yerine TDEE değerinin kullanılması daha anlamlıdır.",
    ],
    cards: [
      {
        title: "BMR",
        description:
          "Vücudun dinlenme hâlindeki temel enerji ihtiyacını gösterir.",
      },
      {
        title: "TDEE",
        description:
          "Günlük hareket ve egzersiz dâhil toplam enerji ihtiyacını gösterir.",
      },
      {
        title: "Hedef kalori",
        description:
          "TDEE değerinden kalori çıkarılarak veya eklenerek belirlenir.",
      },
    ],
  },
  {
    title: "Mifflin-St Jeor formülü nedir?",
    paragraphs: [
      "Mifflin-St Jeor formülü, yetişkinlerde bazal metabolizma hızını tahmin etmek için yaygın şekilde kullanılan denklemlerden biridir.",
      "Formül yaş, boy, kilo ve cinsiyet bilgilerini kullanır. Erkek ve kadınlar için kullanılan sabit değer farklıdır.",
      "Bu araçta önce Mifflin-St Jeor formülüyle BMR tahmini yapılır; ardından aktivite düzeyi eklenerek günlük kalori ihtiyacı hesaplanır.",
    ],
    formula:
      "Erkek: BMR = 10 × kilo + 6,25 × boy − 5 × yaş + 5 | Kadın: BMR = 10 × kilo + 6,25 × boy − 5 × yaş − 161",
  },
  {
    title: "Aktivite katsayıları nasıl seçilmelidir?",
    paragraphs: [
      "Aktivite seviyesi, günlük kalori ihtiyacını en fazla değiştiren değişkenlerden biridir.",
      "Kendinizi olduğunuzdan daha aktif seçmek, hesaplanan kalori ihtiyacını gereğinden fazla yükseltebilir. Benzer şekilde düzenli egzersiz yapan birinin kendisini hareketsiz seçmesi de sonucu olduğundan düşük gösterebilir.",
      "Seçim yaparken yalnızca antrenmanları değil, gün boyunca ne kadar yürüdüğünüzü, işinizin fiziksel yoğunluğunu ve genel hareket düzeyinizi birlikte değerlendirin.",
    ],
    cards: [
      {
        title: "Hareketsiz – 1,20",
        description:
          "Masa başı yaşam, düzenli egzersiz yok veya günlük hareket çok düşük.",
      },
      {
        title: "Az aktif – 1,375",
        description:
          "Haftada 1–3 gün hafif egzersiz veya düzenli kısa yürüyüşler.",
      },
      {
        title: "Orta aktif – 1,55",
        description:
          "Haftada 3–5 gün orta yoğunlukta egzersiz.",
      },
      {
        title: "Çok aktif – 1,725",
        description:
          "Haftada 6–7 gün yoğun egzersiz veya fiziksel olarak hareketli iş.",
      },
      {
        title: "Ekstra aktif – 1,90",
        description:
          "Günde birden fazla antrenman, ağır fiziksel iş veya profesyonel spor.",
      },
    ],
  },
  {
    title: "Kilo vermek için kalori ihtiyacı nasıl belirlenir?",
    paragraphs: [
      "Kilo vermek için alınan enerjinin harcanan enerjiden düşük olması gerekir. Bu durum kalori açığı olarak adlandırılır.",
      "Başlangıç için günlük bakım kalorisinden yaklaşık 300–500 kcal çıkarılması yaygın bir yöntemdir.",
      "Daha yüksek açıklar kısa vadede hızlı kilo kaybı sağlayabilir; ancak açlık, performans düşüşü, kas kaybı ve sürdürülebilirlik sorunlarına yol açabilir.",
    ],
  },
  {
    title: "Kilo almak için kalori ihtiyacı nasıl belirlenir?",
    paragraphs: [
      "Kilo almak için günlük harcanan enerjiden daha fazla kalori alınması gerekir. Buna kalori fazlası denir.",
      "Kas kazanımını desteklemek isteyen kişiler için bakım kalorisinin yaklaşık 200–400 kcal üzerine çıkmak çoğu durumda daha kontrollü bir başlangıç sağlar.",
      "Çok yüksek kalori fazlası, kas kazanımından daha hızlı yağlanmaya neden olabilir. Bu nedenle değişim haftalık ortalamalarla takip edilmelidir.",
    ],
  },
  {
    title: "Kalori ihtiyacını etkileyen başlıca faktörler",
    paragraphs: [
      "Yaş ilerledikçe kas kütlesindeki ve günlük hareket miktarındaki azalmaya bağlı olarak enerji ihtiyacı düşebilir.",
      "Kas kütlesi yüksek kişiler, aynı kilo ve boydaki daha düşük kas kütlesine sahip kişilere göre genellikle daha fazla enerji harcar.",
      "Uyku kalitesi, stres, hormonlar, ilaç kullanımı, tiroit hastalıkları, gebelik, emzirme ve iyileşme süreçleri de gerçek enerji ihtiyacını etkileyebilir.",
    ],
    cards: [
      {
        title: "Yaş",
        description:
          "Metabolik hız ve günlük hareket düzeyi yaşla birlikte değişebilir.",
      },
      {
        title: "Kas kütlesi",
        description:
          "Kas dokusu dinlenme hâlinde de enerji tüketir.",
      },
      {
        title: "Hormonlar",
        description:
          "Tiroit ve diğer hormonlar enerji harcamasını etkileyebilir.",
      },
      {
        title: "Uyku ve stres",
        description:
          "İştah, toparlanma ve günlük hareket davranışlarını değiştirebilir.",
      },
    ],
  },
  {
    title: "Makro besin dağılımı neden önemlidir?",
    paragraphs: [
      "Toplam kalori hedefi kilo değişiminin temel belirleyicilerinden biridir; ancak besinlerin protein, karbonhidrat ve yağ dağılımı da önem taşır.",
      "Protein; kas dokusunun korunması, toparlanma ve tokluk açısından önemlidir. Karbonhidratlar özellikle egzersiz performansına katkı sağlar. Yağlar ise hormon üretimi ve yağda çözünen vitaminlerin emilimi için gereklidir.",
      "Aynı kalori değerine sahip iki beslenme düzeni, protein ve lif miktarı açısından farklıysa tokluk ve vücut kompozisyonu bakımından aynı sonucu vermeyebilir.",
    ],
  },
  {
    title: "Sonuçlar nasıl takip edilmelidir?",
    paragraphs: [
      "Hesaplanan değer başlangıç noktası olarak kullanılmalıdır. Gerçek ihtiyacınızı anlamanın en iyi yolu birkaç hafta boyunca kalori alımını, vücut ağırlığını ve performansı birlikte izlemektir.",
      "Günlük kilo değişimleri su, tuz, karbonhidrat tüketimi ve sindirim sistemi içeriğinden etkilenebilir. Bu nedenle tek bir ölçüm yerine haftalık kilo ortalamasına bakmak daha sağlıklıdır.",
      "Kilonuz hedeflenen yönde değişmiyorsa günlük enerji alımı küçük adımlarla güncellenebilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Kalori ihtiyacı her gün aynı mıdır?",
    answer:
      "Hayır. Günlük hareket, egzersiz süresi, uyku, stres ve iş temposu nedeniyle enerji ihtiyacı günden güne değişebilir. Hesaplanan değer günlük ortalama bir başlangıç noktasıdır.",
  },
  {
    question: "Kilo vermek için kaç kalori almalıyım?",
    answer:
      "Genellikle günlük bakım kalorisinin yaklaşık 300–500 kcal altında başlamak tercih edilir. Uygun açık; mevcut kilo, sağlık durumu, hedef ve aktivite seviyesine göre değişir.",
  },
  {
    question: "Günde 500 kalori açık vermek uygun mudur?",
    answer:
      "Bazı yetişkinlerde uygun olabilir; ancak herkes için doğru değildir. Düşük kilolu kişilerde, yoğun spor yapanlarda veya özel sağlık durumu bulunanlarda daha küçük açık gerekebilir.",
  },
  {
    question: "Bu hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Formüller nüfus ortalamalarına dayalı tahmin üretir. Gerçek ihtiyaç kas kütlesi, hormonlar, günlük hareket ve metabolik farklılıklara göre değişebilir.",
  },
  {
    question: "Bazal metabolizma ile kalori ihtiyacı aynı şey midir?",
    answer:
      "Hayır. BMR yalnızca dinlenme enerjisidir. Günlük kalori ihtiyacı ise BMR değerine hareket ve egzersiz harcamalarının eklenmiş hâlidir.",
  },
  {
    question: "Kilo almak için ne kadar kalori almalıyım?",
    answer:
      "Bakım kalorisinin yaklaşık 200–400 kcal üzerine çıkmak kontrollü bir başlangıç olabilir. Değişim hızına göre bu miktar küçük adımlarla ayarlanabilir.",
  },
  {
    question: "TDEE ne demektir?",
    answer:
      "TDEE, Toplam Günlük Enerji Harcaması anlamına gelir. Bazal metabolizma, günlük hareket, egzersiz ve sindirim için harcanan toplam enerjiyi ifade eder.",
  },
  {
    question: "Aktivite seviyemi nasıl seçmeliyim?",
    answer:
      "Yalnızca antrenmanları değil, gün içindeki yürüyüş, ayakta kalma, merdiven kullanımı ve işin fiziksel yoğunluğunu da dikkate alın.",
  },
  {
    question: "Masa başında çalışıp spor yapıyorsam hangi seviyeyi seçmeliyim?",
    answer:
      "Haftada 3–5 gün düzenli egzersiz yapıyor ancak günün geri kalanında az hareket ediyorsanız çoğu zaman az aktif veya orta aktif seçeneklerinden biri daha gerçekçi olabilir.",
  },
  {
    question: "Kalori ihtiyacı yaşla değişir mi?",
    answer:
      "Evet. Yaşla birlikte kas kütlesi ve hareket düzeyi azalabildiği için enerji ihtiyacı da düşebilir.",
  },
  {
    question: "Kas kütlesi kalori ihtiyacını etkiler mi?",
    answer:
      "Evet. Kas dokusu metabolik olarak aktiftir. Kas kütlesi yüksek kişiler aynı vücut ağırlığındaki kişilere göre daha fazla enerji harcayabilir.",
  },
  {
    question: "Kalori açığı kas kaybına neden olur mu?",
    answer:
      "Çok yüksek açık, düşük protein alımı ve yetersiz direnç antrenmanı kas kaybı riskini artırabilir.",
  },
  {
    question: "Kilo vermek için karbonhidratı tamamen kesmek gerekir mi?",
    answer:
      "Hayır. Kilo kaybının temel koşulu kalori açığıdır. Karbonhidrat miktarı kişinin tercihi, sağlık durumu ve aktivite düzeyine göre ayarlanabilir.",
  },
  {
    question: "Kalori hesabında içecekler de sayılır mı?",
    answer:
      "Evet. Şekerli içecekler, meyve suyu, sütlü kahve ve alkollü içecekler de enerji içerir ve toplam alıma dâhil edilmelidir.",
  },
  {
    question: "Egzersizde yakılan kaloriyi ayrıca eklemeli miyim?",
    answer:
      "Seçtiğiniz aktivite katsayısı egzersizi zaten genel olarak içerir. Egzersiz kalorilerini ayrıca eklemek aynı harcamayı iki kez saymanıza neden olabilir.",
  },
  {
    question: "Akıllı saat kalori değerleri güvenilir midir?",
    answer:
      "Akıllı saatler yaklaşık tahmin sunar. Nabız, sensör doğruluğu ve egzersiz türüne göre hata payı oluşabilir.",
  },
  {
    question: "Haftalık kalori dengesi önemli midir?",
    answer:
      "Evet. Günlük dalgalanmalar olsa da haftalık toplam enerji dengesi kilo değişimini anlamada daha kullanışlı olabilir.",
  },
  {
    question: "Çok düşük kalori almak metabolizmayı yavaşlatır mı?",
    answer:
      "Uzun süreli ve büyük enerji kısıtlamaları hareket azalması, hormonal uyum ve performans düşüşü üzerinden toplam enerji harcamasını azaltabilir.",
  },
  {
    question: "Kilo vermem durursa ne yapmalıyım?",
    answer:
      "Önce birkaç haftalık kilo ortalamasını, porsiyonları ve hareket düzeyini gözden geçirin. Gerekirse kaloriyi küçük miktarda azaltın veya günlük hareketi artırın.",
  },
  {
    question: "Gebelik ve emzirme döneminde bu araç kullanılabilir mi?",
    answer:
      "Araç genel yetişkin tahmini sunar. Gebelik ve emzirme döneminde ek enerji ihtiyacı kişiye göre değiştiğinden doktor veya diyetisyen değerlendirmesi gerekir.",
  },
  {
    question: "18 yaş altı kişiler bu sonucu kullanabilir mi?",
    answer:
      "Büyüme ve gelişme nedeniyle çocuklar ve ergenler için enerji ihtiyacı farklı yöntemlerle değerlendirilmelidir.",
  },
  {
    question: "Tiroit hastalığı sonucu etkiler mi?",
    answer:
      "Evet. Tiroit hormonları metabolik hızı etkileyebilir. Tanılı bir hastalık veya ilaç kullanımı varsa sağlık uzmanına danışılmalıdır.",
  },
  {
    question: "Kalori ihtiyacımı ne sıklıkla yeniden hesaplamalıyım?",
    answer:
      "Kilonuzda belirgin değişim olduğunda, aktivite düzeniniz değiştiğinde veya birkaç ayda bir yeniden hesaplamak faydalı olabilir.",
  },
  {
    question: "Kilo koruma kalorisi neden değişebilir?",
    answer:
      "Vücut ağırlığı, günlük adım sayısı, egzersiz yoğunluğu, iş temposu ve uyku düzeni değiştikçe bakım kalorisi de değişebilir.",
  },
];

const activityRows = [
  {
    title: "Hareketsiz",
    detail: "Masa başı yaşam, düzenli egzersiz yok",
    multiplier: "1,20",
    sample: "BMR 1.600 ise yaklaşık 1.920 kcal",
  },
  {
    title: "Az aktif",
    detail: "Haftada 1–3 gün hafif egzersiz",
    multiplier: "1,375",
    sample: "BMR 1.600 ise yaklaşık 2.200 kcal",
  },
  {
    title: "Orta aktif",
    detail: "Haftada 3–5 gün orta egzersiz",
    multiplier: "1,55",
    sample: "BMR 1.600 ise yaklaşık 2.480 kcal",
  },
  {
    title: "Çok aktif",
    detail: "Haftada 6–7 gün yoğun egzersiz",
    multiplier: "1,725",
    sample: "BMR 1.600 ise yaklaşık 2.760 kcal",
  },
  {
    title: "Ekstra aktif",
    detail: "Ağır fiziksel iş veya çok yoğun antrenman",
    multiplier: "1,90",
    sample: "BMR 1.600 ise yaklaşık 3.040 kcal",
  },
];

const goalCards = [
  {
    icon: TrendingDown,
    eyebrow: "Kontrollü açık",
    title: "Yavaş kilo verme",
    value: "Bakım − 250/300 kcal",
    description:
      "Performansı ve sürdürülebilirliği korumaya odaklanan daha küçük kalori açığı.",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-950",
    iconClassName: "bg-emerald-600 text-white",
  },
  {
    icon: Flame,
    eyebrow: "Orta düzey açık",
    title: "Standart kilo verme",
    value: "Bakım − 400/500 kcal",
    description:
      "Birçok yetişkin için başlangıçta kullanılan orta seviyeli kalori açığı.",
    className:
      "border-orange-200 bg-orange-50 text-orange-950",
    iconClassName: "bg-orange-600 text-white",
  },
  {
    icon: Target,
    eyebrow: "Enerji dengesi",
    title: "Kilo koruma",
    value: "TDEE değeri",
    description:
      "Hesaplanan günlük ihtiyaç, mevcut kiloyu korumaya yönelik yaklaşık başlangıç değeridir.",
    className:
      "border-sky-200 bg-sky-50 text-sky-950",
    iconClassName: "bg-sky-600 text-white",
  },
  {
    icon: TrendingUp,
    eyebrow: "Kontrollü fazlalık",
    title: "Kilo ve kas kazanımı",
    value: "Bakım + 200/400 kcal",
    description:
      "Aşırı yağlanmayı sınırlamak için bakım kalorisinin üzerine kontrollü ekleme.",
    className:
      "border-violet-200 bg-violet-50 text-violet-950",
    iconClassName: "bg-violet-600 text-white",
  },
];

const trackingSteps = [
  {
    step: "01",
    title: "Başlangıç değerini belirleyin",
    description:
      "Hesaplayıcıdan çıkan bakım kalorisini ilk tahmin olarak kullanın.",
  },
  {
    step: "02",
    title: "En az 14 gün takip edin",
    description:
      "Kalori alımınızı, adım sayınızı ve sabah vücut ağırlığınızı düzenli kaydedin.",
  },
  {
    step: "03",
    title: "Haftalık ortalamaya bakın",
    description:
      "Tek günlük değişimler yerine yedi günlük kilo ortalamasını karşılaştırın.",
  },
  {
    step: "04",
    title: "Küçük ayarlamalar yapın",
    description:
      "Hedeflenen değişim yoksa günlük kaloriyi yaklaşık 100–200 kcal güncelleyin.",
  },
];

const commonMistakes = [
  {
    title: "Aktivite seviyesini yüksek seçmek",
    description:
      "Haftada birkaç antrenman yapmak günün tamamını çok aktif hâle getirmeyebilir.",
  },
  {
    title: "İçecek kalorilerini unutmak",
    description:
      "Şekerli içecekler, sütlü kahveler ve soslar toplam kaloriyi hızla artırabilir.",
  },
  {
    title: "Porsiyonları göz kararı değerlendirmek",
    description:
      "Yağ, kuruyemiş ve tahıl gibi enerji yoğun besinlerde küçük farklar önemlidir.",
  },
  {
    title: "Günlük tartı değişimine aşırı tepki vermek",
    description:
      "Su ve sindirim sistemi içeriği nedeniyle kilo bir günde belirgin değişebilir.",
  },
];

export default function KaloriIhtiyaciHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-orange-100 text-orange-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç yalnızca genel bir kalori tahmini sunar. Sonuçlar tıbbi tanı, tedavi veya kişiye özel beslenme planı yerine geçmez. Kilo verme, kilo alma, gebelik, emzirme, kronik hastalık veya özel beslenme gereksinimlerinde doktor ya da diyetisyene danışmanız önerilir."
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-5 shadow-sm sm:p-7 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-orange-700 shadow-sm backdrop-blur">
              <Sparkles size={15} />
              Günlük enerji analizi
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Kalori ihtiyacınızı yalnızca tek bir sayı olarak değil,
              <span className="text-orange-600">
                {" "}
                hedeflerinize göre
              </span>{" "}
              değerlendirin.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Yaş, cinsiyet, boy, kilo ve aktivite düzeyinizi girerek
              bazal metabolizma hızınızı, günlük bakım kalorinizi ve
              kilo verme veya kilo alma hedeflerinize uygun tahmini
              enerji aralıklarını öğrenin.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Calculator,
                  title: "BMR hesabı",
                  text: "Mifflin-St Jeor temelli",
                },
                {
                  icon: Activity,
                  title: "TDEE hesabı",
                  text: "Aktivite düzeyi dâhil",
                },
                {
                  icon: Target,
                  title: "Hedef kaloriler",
                  text: "Verme, koruma ve alma",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                      <Icon size={19} />
                    </span>

                    <p className="mt-3 font-black text-slate-950">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-orange-200 bg-white/90 p-5 shadow-xl shadow-orange-100/60 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-600">
                  Hesaplama mantığı
                </p>

                <p className="mt-2 text-xl font-black text-slate-950">
                  İki aşamada kişisel tahmin
                </p>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-600 text-white shadow-lg shadow-orange-200">
                <Zap size={22} />
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                  1
                </span>

                <div>
                  <p className="font-black text-slate-950">
                    Bazal metabolizma
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Yaş, boy, kilo ve cinsiyet bilgileriyle BMR
                    tahmini yapılır.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-sm font-black text-white">
                  2
                </span>

                <div>
                  <p className="font-black text-orange-950">
                    Toplam günlük ihtiyaç
                  </p>

                  <p className="mt-1 text-sm leading-6 text-orange-800">
                    BMR değeri, seçilen aktivite katsayısıyla
                    çarpılarak TDEE bulunur.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-orange-300">
                Temel formül
              </p>

              <p className="mt-3 text-lg font-black">
                TDEE = BMR × Aktivite katsayısı
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sonuç, mevcut kilonuzu korumaya yönelik yaklaşık
                günlük enerji ihtiyacını gösterir.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <CalorieCalculator />
      </div>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-orange-700">
              <CircleGauge size={14} />
              Aktivite katsayıları
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Aktivite seviyenizi gerçekçi seçin
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Aktivite katsayısındaki küçük bir değişiklik günlük
              kalori sonucunu yüzlerce kalori etkileyebilir. Yalnızca
              spor süresini değil, tüm gününüzü değerlendirin.
            </p>
          </div>

          <div className="rounded-2xl border border-orange-200 bg-orange-50 px-5 py-4">
            <p className="text-xs font-black uppercase tracking-[0.12em] text-orange-700">
              Önemli not
            </p>

            <p className="mt-1 text-sm font-semibold text-orange-950">
              En sık yapılan hata: aktiviteyi yüksek seçmek
            </p>
          </div>
        </div>

        <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200">
          <div className="hidden grid-cols-[1fr_1.4fr_0.55fr_1.35fr] gap-4 bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.13em] text-white md:grid">
            <span>Seviye</span>
            <span>Günlük yaşam</span>
            <span>Katsayı</span>
            <span>Örnek sonuç</span>
          </div>

          <div className="divide-y divide-slate-200">
            {activityRows.map((row, index) => (
              <article
                key={row.title}
                className="grid gap-3 bg-white p-5 transition hover:bg-slate-50 md:grid-cols-[1fr_1.4fr_0.55fr_1.35fr] md:items-center md:gap-4 md:px-6"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-sm font-black text-orange-700">
                    {index + 1}
                  </span>

                  <p className="font-black text-slate-950">
                    {row.title}
                  </p>
                </div>

                <p className="text-sm leading-6 text-slate-600">
                  {row.detail}
                </p>

                <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-sm font-black text-slate-800">
                  {row.multiplier}
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {row.sample}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:p-9">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-700">
            <Target size={14} />
            Hedefe göre enerji
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Aynı sonuç, farklı hedefler
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Hesaplanan bakım kalorisi sabit bir beslenme reçetesi
            değildir. Hedefinize göre kontrollü açık veya fazlalık
            uygulanabilir.
          </p>
        </div>

        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {goalCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className={`rounded-3xl border p-6 ${card.className}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconClassName}`}
                  >
                    <Icon size={22} />
                  </span>

                  <span className="rounded-full border border-current/15 bg-white/60 px-3 py-1 text-xs font-black uppercase tracking-[0.12em]">
                    {card.eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black">
                  {card.title}
                </h3>

                <p className="mt-2 text-2xl font-black">
                  {card.value}
                </p>

                <p className="mt-3 text-sm leading-7 opacity-80">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-6 flex items-start gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white">
            <AlertTriangle size={21} />
          </span>

          <div>
            <p className="font-black text-amber-950">
              BMR değerinin altına bilinçsizce inmeyin
            </p>

            <p className="mt-2 text-sm leading-7 text-amber-800">
              Çok düşük kalori alımı enerji düşüklüğü, performans
              kaybı, açlık ve besin yetersizlikleri oluşturabilir.
              Özellikle uzun süreli diyetlerde uzman desteği alın.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-orange-500/20 blur-3xl"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-orange-200">
                <LineChart size={14} />
                Gerçek ihtiyacı bulma
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Formül başlangıçtır, takip sonucu kişiselleştirir.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Hesaplayıcı bilimsel formüllere dayalı bir tahmin
                üretir. Gerçek bakım kalorinizi ise düzenli takip ve
                küçük ayarlamalarla daha doğru belirleyebilirsiniz.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <Scale size={21} className="text-orange-300" />

                  <p className="font-black">
                    Haftalık ortalama kullanın
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Her sabah benzer koşullarda tartılın ve yedi günlük
                  ortalamayı karşılaştırın. Tek günlük değişimler çoğu
                  zaman yağ değişimini göstermez.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/5 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="space-y-4">
              {trackingSteps.map((item) => (
                <article
                  key={item.step}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500 font-black text-slate-950">
                    {item.step}
                  </span>

                  <div>
                    <h3 className="font-black text-white">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-violet-700">
              <Utensils size={14} />
              Makro besin dengesi
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Kalori miktarı kadar içeriği de önemlidir
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Protein, karbonhidrat ve yağın toplam kalori içindeki
              dağılımı; tokluk, antrenman performansı, toparlanma ve
              vücut kompozisyonu üzerinde etkilidir.
            </p>

            <div className="mt-6 rounded-3xl border border-violet-200 bg-violet-50 p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-violet-600 text-white">
                  <Lightbulb size={20} />
                </span>

                <div>
                  <p className="font-black text-violet-950">
                    Önce protein ve minimum yağ ihtiyacını planlayın
                  </p>

                  <p className="mt-2 text-sm leading-7 text-violet-800">
                    Kalan kaloriyi aktivite düzeyiniz ve kişisel
                    tercihinize göre karbonhidrat ve yağ arasında
                    dağıtabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Dumbbell,
                title: "Protein",
                value: "4 kcal / gram",
                description:
                  "Kas korunması, toparlanma ve tokluk için önemlidir.",
                className:
                  "border-rose-200 bg-rose-50 text-rose-950",
                iconClassName: "bg-rose-600 text-white",
              },
              {
                icon: Footprints,
                title: "Karbonhidrat",
                value: "4 kcal / gram",
                description:
                  "Günlük hareket ve egzersiz için temel enerji kaynağıdır.",
                className:
                  "border-sky-200 bg-sky-50 text-sky-950",
                iconClassName: "bg-sky-600 text-white",
              },
              {
                icon: HeartPulse,
                title: "Yağ",
                value: "9 kcal / gram",
                description:
                  "Hormonlar, hücre yapısı ve vitamin emilimi için gereklidir.",
                className:
                  "border-amber-200 bg-amber-50 text-amber-950",
                iconClassName: "bg-amber-500 text-white",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`rounded-3xl border p-5 ${item.className}`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.iconClassName}`}
                  >
                    <Icon size={20} />
                  </span>

                  <h3 className="mt-5 font-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg font-black">
                    {item.value}
                  </p>

                  <p className="mt-3 text-sm leading-7 opacity-80">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-7 lg:p-9">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-slate-700">
            <AlertTriangle size={14} />
            Sık yapılan hatalar
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Sonucun yanlış yorumlanmasına neden olan durumlar
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Kalori hesaplamasında küçük görünen alışkanlıklar günlük
            enerji dengesinde belirgin fark oluşturabilir.
          </p>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {commonMistakes.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 font-black text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-blue-700">
              <BookOpen size={14} />
              Örnek hesaplama
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
              Orta aktif bir kişi için günlük kalori örneği
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Bazal metabolizma hızı 1.600 kcal olan ve orta aktif
              seçilen bir kişinin aktivite katsayısı 1,55 olarak
              değerlendirilir.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            <Calculator size={16} />
            1.600 × 1,55
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
              <Flame size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Bazal metabolizma
            </p>

            <p className="mt-2 text-2xl font-black text-slate-950">
              1.600 kcal
            </p>
          </article>

          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
              <Activity size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Aktivite düzeyi
            </p>

            <p className="mt-2 text-2xl font-black text-slate-950">
              Orta aktif
            </p>
          </article>

          <article className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-600 text-white">
              <Gauge size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-orange-700">
              Aktivite katsayısı
            </p>

            <p className="mt-2 text-2xl font-black text-orange-950">
              1,55
            </p>
          </article>

          <article className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-700 p-6 text-white shadow-xl shadow-orange-200">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Target size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-orange-100">
              Günlük ihtiyaç
            </p>

            <p className="mt-2 text-2xl font-black">
              2.480 kcal
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-emerald-700">
              Hafif kilo verme
            </p>

            <p className="mt-2 text-2xl font-black text-emerald-950">
              Yaklaşık 2.180 kcal
            </p>

            <p className="mt-2 text-sm leading-6 text-emerald-800">
              Bakım kalorisinden yaklaşık 300 kcal çıkarılmıştır.
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-sky-700">
              Kilo koruma
            </p>

            <p className="mt-2 text-2xl font-black text-sky-950">
              Yaklaşık 2.480 kcal
            </p>

            <p className="mt-2 text-sm leading-6 text-sky-800">
              Hesaplanan TDEE değeri başlangıç olarak kullanılır.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-violet-700">
              Kontrollü kilo alma
            </p>

            <p className="mt-2 text-2xl font-black text-violet-950">
              Yaklaşık 2.780 kcal
            </p>

            <p className="mt-2 text-sm leading-6 text-violet-800">
              Bakım kalorisinin üzerine yaklaşık 300 kcal eklenmiştir.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-orange-200 bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 p-6 text-white shadow-xl shadow-orange-200/60 sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
              <BadgeCheck size={14} />
              Sonucu doğru kullanın
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              En doğru kalori hedefi, birkaç haftalık gerçek verinizle
              oluşur.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-orange-50 sm:text-base">
              Hesaplayıcıdan çıkan değeri başlangıç olarak kullanın,
              haftalık kilo ortalamanızı ve performansınızı takip edin,
              ardından küçük ayarlamalarla kişisel bakım kalorinizi
              belirleyin.
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-orange-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            Yeniden hesapla
            <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: CalendarDays,
              title: "14 gün takip",
              text: "Kısa dönemli dalgalanmaları ayırın.",
            },
            {
              icon: BarChart3,
              title: "Haftalık ortalama",
              text: "Tek gün yerine eğilimi değerlendirin.",
            },
            {
              icon: CheckCircle2,
              title: "Küçük ayarlama",
              text: "Kaloriyi 100–200 kcal adımlarla güncelleyin.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur"
              >
                <Icon size={21} />

                <p className="mt-4 font-black">{item.title}</p>

                <p className="mt-2 text-sm leading-6 text-orange-50">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          {
            icon: ShieldCheck,
            title: "Tahmini sonuç",
            text: "Formüller kişisel metabolik farklılıkları tam olarak ölçemez.",
          },
          {
            icon: Brain,
            title: "Sürdürülebilir yaklaşım",
            text: "Aşırı kısıtlama yerine uzun süre uygulanabilir hedefler belirleyin.",
          },
          {
            icon: Apple,
            title: "Besin kalitesi",
            text: "Kalori kadar protein, lif, vitamin ve mineral içeriğini de önemseyin.",
          },
        ].map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white">
                <Icon size={22} />
              </span>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.text}
              </p>
            </article>
          );
        })}
      </section>
    </CalculatorLayout>
  );
}