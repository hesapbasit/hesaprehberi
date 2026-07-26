import type { Metadata } from "next";

import BmrCalculator from "@/components/calculators/BmrCalculator";
import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/bazal-metabolizma-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Bazal metabolizma hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata =
  createCalculatorMetadata({
    ...calculator,
    path: canonicalPath,
  });

const metabolismFactors = [
  {
    number: "01",
    title: "Yaş",
    description:
      "Yaş ilerledikçe kas kütlesi, hormon düzeyleri ve günlük hareket miktarı değişebildiği için bazal enerji harcaması genellikle azalabilir.",
    detail:
      "Formüllerde yaş arttıkça tahmini BMR değerinin düşürülmesinin nedeni budur.",
  },
  {
    number: "02",
    title: "Vücut ağırlığı",
    description:
      "Daha yüksek vücut ağırlığı, temel yaşam faaliyetlerinin sürdürülmesi için daha fazla enerji gerektirebilir.",
    detail:
      "Ancak ağırlığın ne kadarının kas veya yağ dokusu olduğu gerçek enerji harcamasını etkiler.",
  },
  {
    number: "03",
    title: "Boy uzunluğu",
    description:
      "Daha büyük vücut yüzeyi ve vücut yapısı, dinlenme sırasında ihtiyaç duyulan enerji miktarını artırabilir.",
    detail:
      "Bu nedenle Mifflin-St Jeor formülünde boy bilgisi doğrudan kullanılır.",
  },
  {
    number: "04",
    title: "Cinsiyet",
    description:
      "Standart denklemler kadın ve erkeklerin ortalama vücut kompozisyonu farklılıklarını ayrı sabitlerle değerlendirir.",
    detail:
      "Bu ayrım bireysel farklılıkları tam olarak yansıtmayabilir.",
  },
  {
    number: "05",
    title: "Kas kütlesi",
    description:
      "Kas dokusu dinlenme sırasında yağ dokusuna göre daha fazla enerji tüketir.",
    detail:
      "Kas oranı yüksek kişilerde gerçek dinlenme enerjisi standart formül sonucundan farklı olabilir.",
  },
  {
    number: "06",
    title: "Hormonlar ve sağlık",
    description:
      "Tiroid hormonları, ateş, kronik hastalıklar, gebelik ve bazı ilaçlar enerji harcamasını değiştirebilir.",
    detail:
      "Bu faktörler standart hesaplama formüllerinde doğrudan yer almaz.",
  },
] as const;

const calculationSteps = [
  {
    number: "01",
    title: "Cinsiyet seçilir",
    description:
      "Mifflin-St Jeor formülündeki sabit değer cinsiyete göre belirlenir.",
  },
  {
    number: "02",
    title: "Yaş bilgisi girilir",
    description:
      "Yaş değeri formülde beş ile çarpılarak temel hesaplamadan çıkarılır.",
  },
  {
    number: "03",
    title: "Boy ve kilo değerlendirilir",
    description:
      "Kilo 10, boy ise 6,25 katsayısıyla çarpılarak enerji hesabına eklenir.",
  },
  {
    number: "04",
    title: "Bazal enerji hesaplanır",
    description:
      "Tüm değerler birleştirilerek günlük tahmini dinlenme kalorisi bulunur.",
  },
  {
    number: "05",
    title: "Formüller karşılaştırılır",
    description:
      "Hesaplayıcı destekliyorsa Mifflin-St Jeor ve Harris-Benedict sonuçları birlikte incelenebilir.",
  },
  {
    number: "06",
    title: "Aktivite düzeyi eklenir",
    description:
      "Günlük toplam enerji ihtiyacı için BMR uygun aktivite katsayısıyla çarpılır.",
  },
] as const;

const activityLevels = [
  {
    title: "Hareketsiz",
    multiplier: "1,20",
    description:
      "Masa başı yaşam, çok az egzersiz veya düzenli fiziksel aktivite bulunmaması.",
    exampleBmr: "1.700 kcal",
    estimatedNeed: "2.040 kcal",
    badgeClassName:
      "bg-slate-100 text-slate-700",
  },
  {
    title: "Az hareketli",
    multiplier: "1,375",
    description:
      "Haftada yaklaşık 1–3 gün hafif egzersiz veya günlük düşük düzey hareket.",
    exampleBmr: "1.700 kcal",
    estimatedNeed: "2.338 kcal",
    badgeClassName:
      "bg-sky-100 text-sky-700",
  },
  {
    title: "Orta hareketli",
    multiplier: "1,55",
    description:
      "Haftada yaklaşık 3–5 gün orta yoğunlukta egzersiz veya hareketli yaşam.",
    exampleBmr: "1.700 kcal",
    estimatedNeed: "2.635 kcal",
    badgeClassName:
      "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Çok hareketli",
    multiplier: "1,725",
    description:
      "Haftada yaklaşık 6–7 gün yoğun egzersiz veya fiziksel açıdan aktif iş.",
    exampleBmr: "1.700 kcal",
    estimatedNeed: "2.933 kcal",
    badgeClassName:
      "bg-amber-100 text-amber-800",
  },
  {
    title: "Ekstra hareketli",
    multiplier: "1,90",
    description:
      "Çok yoğun antrenman, ağır fiziksel iş veya günde birden fazla egzersiz.",
    exampleBmr: "1.700 kcal",
    estimatedNeed: "3.230 kcal",
    badgeClassName:
      "bg-rose-100 text-rose-700",
  },
] as const;

const formulaComparison = [
  {
    name: "Mifflin-St Jeor",
    year: "1990",
    inputs: "Yaş, boy, kilo ve cinsiyet",
    usage:
      "Modern yetişkinlerde yaygın kullanılan tahmini BMR formülü",
    advantage:
      "Günümüzde günlük enerji planlamasında sık tercih edilen denklemlerden biridir.",
    limitation:
      "Kas oranı, hormonlar ve sağlık durumunu doğrudan değerlendirmez.",
    highlighted: true,
  },
  {
    name: "Harris-Benedict",
    year: "1919 / revize 1984",
    inputs: "Yaş, boy, kilo ve cinsiyet",
    usage:
      "Klasik bazal enerji harcaması tahmini",
    advantage:
      "Uzun süredir kullanılan ve aktivite katsayılarıyla yaygın biçimde eşleştirilen formüldür.",
    limitation:
      "Bazı kişilerde Mifflin-St Jeor sonucundan daha yüksek tahmin oluşturabilir.",
    highlighted: false,
  },
  {
    name: "Katch-McArdle",
    year: "1975",
    inputs: "Yağsız vücut kütlesi",
    usage:
      "Vücut kompozisyonu bilinen kişiler için tahmin",
    advantage:
      "Cinsiyet yerine yağsız vücut kütlesini doğrudan dikkate alır.",
    limitation:
      "Doğru yağsız kütle bilgisi bulunmadığında sonuç güvenilir olmayabilir.",
    highlighted: false,
  },
  {
    name: "Dolaylı kalorimetri",
    year: "Klinik ölçüm",
    inputs: "Oksijen tüketimi ve karbondioksit üretimi",
    usage:
      "Dinlenme enerji harcamasının profesyonel ölçümü",
    advantage:
      "Standart matematiksel formüllerden daha kişisel bir değerlendirme sunabilir.",
    limitation:
      "Özel cihaz, uygun hazırlık koşulları ve profesyonel uygulama gerektirir.",
    highlighted: false,
  },
] as const;

const bmrUsageCases = [
  {
    title: "Kilo koruma",
    description:
      "BMR değeri aktivite düzeyiyle birlikte kullanılarak mevcut ağırlığı korumaya yönelik yaklaşık enerji ihtiyacı hesaplanabilir.",
  },
  {
    title: "Kilo verme",
    description:
      "Toplam günlük enerji ihtiyacına göre kontrollü ve sürdürülebilir bir kalori açığı planlanabilir.",
  },
  {
    title: "Kilo alma",
    description:
      "Günlük enerji ihtiyacının üzerinde, besin kalitesini koruyan kontrollü bir enerji fazlası oluşturulabilir.",
  },
  {
    title: "Spor planlaması",
    description:
      "Antrenman yoğunluğu ve toparlanma ihtiyacına göre günlük enerji hedefinin belirlenmesinde başlangıç değeri sunabilir.",
  },
  {
    title: "Öğün planlama",
    description:
      "Günlük enerji hedefi öğünlere dağıtılarak daha düzenli ve takip edilebilir bir beslenme planı oluşturulabilir.",
  },
  {
    title: "Değişim takibi",
    description:
      "Kilo, yaş veya yaşam tarzı değiştikçe hesaplama yenilenerek tahmini enerji ihtiyacı güncellenebilir.",
  },
] as const;

const interpretationRules = [
  {
    title: "BMR tüketim hedefi değildir",
    description:
      "Hesaplanan bazal değer, doğrudan günlük yenmesi gereken kalori miktarı anlamına gelmez.",
  },
  {
    title: "Aktivite mutlaka eklenmelidir",
    description:
      "Yürüme, çalışma, spor ve besinlerin sindirimi günlük enerji ihtiyacını BMR'nin üzerine çıkarır.",
  },
  {
    title: "Sonuç yaklaşık değerdir",
    description:
      "Formül, benzer özelliklere sahip yetişkinlerden elde edilen ortalama veriler üzerinden tahmin üretir.",
  },
  {
    title: "Kas oranı fark yaratabilir",
    description:
      "Aynı boy ve kiloya sahip iki kişinin kas kütlesi farklıysa gerçek dinlenme enerjileri de farklı olabilir.",
  },
  {
    title: "Kilo değiştikçe yenilenmelidir",
    description:
      "Belirgin kilo kaybı veya kilo alımı sonrasında BMR hesabının yeniden yapılması önerilir.",
  },
  {
    title: "Aşırı kalori kısıtlaması yapılmamalıdır",
    description:
      "Uzun süreli ve kontrolsüz düşük enerji alımı beslenme yetersizliklerine ve kas kaybına neden olabilir.",
  },
] as const;

const calorieComponents = [
  {
    title: "Bazal metabolizma",
    shortTitle: "BMR",
    percentage: "%60–75",
    description:
      "Solunum, dolaşım, organ çalışması ve hücresel işlevler için harcanan temel enerji.",
  },
  {
    title: "Fiziksel aktivite",
    shortTitle: "Hareket",
    percentage: "%15–30",
    description:
      "Günlük yürüyüş, iş, egzersiz ve planlı spor sırasında harcanan enerji.",
  },
  {
    title: "Besinlerin termik etkisi",
    shortTitle: "Sindirim",
    percentage: "%8–12",
    description:
      "Besinlerin sindirilmesi, emilmesi ve metabolize edilmesi için harcanan enerji.",
  },
  {
    title: "Uyumsal enerji harcaması",
    shortTitle: "Uyum",
    percentage: "Değişken",
    description:
      "Sıcaklık, stres, uzun süreli diyet ve diğer çevresel koşullara verilen metabolik yanıt.",
  },
] as const;

const commonMistakes = [
  {
    title: "BMR'yi günlük kalori hedefi sanmak",
    description:
      "Bazal metabolizma yalnızca tam dinlenme hâlindeki enerji harcamasını temsil eder.",
  },
  {
    title: "Aktivite seviyesini yüksek seçmek",
    description:
      "Günlük kısa yürüyüşleri yoğun aktivite olarak değerlendirmek toplam kalori tahminini yükseltebilir.",
  },
  {
    title: "Egzersiz kalorilerini iki kez eklemek",
    description:
      "Aktivite katsayısı spor düzeyini zaten içeriyorsa egzersiz kalorilerini tekrar eklemek çift sayım oluşturabilir.",
  },
  {
    title: "Tek sonucu kesin kabul etmek",
    description:
      "Farklı formüller arasında küçük veya orta düzeyde sonuç farklılıkları bulunabilir.",
  },
  {
    title: "Uzun süre hesabı güncellememek",
    description:
      "Kilo, aktivite seviyesi veya vücut kompozisyonu değiştiğinde enerji ihtiyacı da değişebilir.",
  },
  {
    title: "Çok hızlı kalori azaltmak",
    description:
      "Kontrolsüz enerji kısıtlaması sürdürülebilirliği azaltabilir ve kas kaybına yol açabilir.",
  },
] as const;

const specialConditions = [
  "18 yaşından küçük çocuklar ve ergenler",
  "Hamile veya emziren kişiler",
  "Profesyonel ve yoğun antrenman yapan sporcular",
  "Çok yüksek kas kütlesine sahip kişiler",
  "Tiroid veya diğer hormonal hastalığı bulunanlar",
  "Kronik hastalık veya düzenli ilaç kullanımı olanlar",
  "Yeme bozukluğu geçmişi bulunan kişiler",
  "Hızlı ve açıklanamayan kilo değişimi yaşayanlar",
] as const;

const contentSections: CalculatorContentSection[] = [
  {
    title: "Bazal metabolizma hızı nedir?",
    paragraphs: [
      "Bazal metabolizma hızı, vücudun tam dinlenme hâlindeyken temel yaşam işlevlerini sürdürebilmek için harcadığı tahmini enerji miktarıdır. Genellikle günlük kalori veya kilokalori cinsinden ifade edilir.",
      "Solunum, kan dolaşımı, vücut sıcaklığının korunması, beyin ve organ faaliyetleri, hücre yenilenmesi gibi istem dışı süreçler bazal enerji harcamasına dahildir.",
      "BMR değeri günlük enerji ihtiyacının önemli bir bölümünü oluşturur ancak yürüme, çalışma, egzersiz ve sindirim sırasında harcanan enerjiyi kapsamaz.",
    ],
  },
  {
    title: "BMR nasıl hesaplanır?",
    paragraphs: [
      "Bu hesaplayıcı temel sonuç için Mifflin-St Jeor formülünü kullanır. Formülde yaş, boy, kilo ve cinsiyet bilgileri birlikte değerlendirilir.",
      "Erkekler ve kadınlar için kullanılan katsayıların büyük bölümü aynıdır ancak formülün sonundaki sabit değer farklıdır.",
      "Hesaplanan sonuç, vücudun yaklaşık 24 saat boyunca tam dinlenme koşullarında ihtiyaç duyacağı enerji miktarını gösterir.",
    ],
    cards: [
      {
        title: "Erkekler için",
        description:
          "BMR = 10 × kilo + 6,25 × boy − 5 × yaş + 5",
      },
      {
        title: "Kadınlar için",
        description:
          "BMR = 10 × kilo + 6,25 × boy − 5 × yaş − 161",
      },
    ],
  },
  {
    title: "Mifflin-St Jeor formülü nedir?",
    paragraphs: [
      "Mifflin-St Jeor denklemi, yetişkinlerde dinlenme enerji harcamasını tahmin etmek amacıyla geliştirilen matematiksel bir formüldür.",
      "Formül kolay uygulanabildiği ve yalnızca temel kişisel bilgiler gerektirdiği için günlük kalori planlamasında yaygın şekilde kullanılır.",
      "Bununla birlikte denklem kas kütlesi, yağ oranı, hormon düzeyleri ve sağlık durumunu doğrudan ölçmez. Sonuç kişiye özel klinik ölçüm değil, istatistiksel tahmindir.",
    ],
  },
  {
    title: "Erkeklerde BMR hesaplaması",
    paragraphs: [
      "Erkekler için Mifflin-St Jeor denkleminde kilogram cinsinden kilo 10 ile, santimetre cinsinden boy 6,25 ile ve yaş 5 ile çarpılır.",
      "Kilo ve boydan elde edilen değerler toplanır, yaşa karşılık gelen değer çıkarılır ve sonuca 5 eklenir.",
      "Örneğin 80 kilogram, 180 santimetre ve 30 yaş bilgileri kullanıldığında sonuç yaklaşık 1.780 kcal olur.",
    ],
    formula:
      "10 × 80 + 6,25 × 180 − 5 × 30 + 5 = 1.780 kcal",
  },
  {
    title: "Kadınlarda BMR hesaplaması",
    paragraphs: [
      "Kadınlar için kullanılan denklemde kilo, boy ve yaş katsayıları erkeklerle aynıdır.",
      "Temel fark, hesaplamanın sonunda 5 eklemek yerine 161 çıkarılmasıdır.",
      "Örneğin 60 kilogram, 165 santimetre ve 30 yaşındaki bir kadın için tahmini BMR yaklaşık 1.320 kcal olarak hesaplanır.",
    ],
    formula:
      "10 × 60 + 6,25 × 165 − 5 × 30 − 161 = 1.320 kcal",
  },
  {
    title: "BMR ile dinlenme metabolizma hızı arasındaki fark",
    paragraphs: [
      "Bazal metabolizma hızı teknik olarak çok sıkı dinlenme koşullarında ölçülen enerji harcamasını ifade eder.",
      "Dinlenme metabolizma hızı veya RMR ise daha esnek ölçüm koşullarında belirlenen dinlenme enerjisidir ve çoğu zaman BMR'den biraz daha yüksek olabilir.",
      "Günlük kullanımda BMR ve RMR terimleri sıklıkla birbirinin yerine kullanılsa da klinik ölçüm koşulları bakımından aynı kavram değildir.",
    ],
  },
  {
    title: "BMR ile günlük kalori ihtiyacı arasındaki fark",
    paragraphs: [
      "BMR yalnızca temel yaşam işlevleri için gereken dinlenme enerjisini temsil eder.",
      "Günlük toplam enerji ihtiyacı; bazal metabolizma, fiziksel aktivite, egzersiz ve besinlerin sindirimi sırasında harcanan enerjinin toplamıdır.",
      "Bu nedenle kilo koruma veya kilo yönetimi planı hazırlanırken BMR değeri uygun aktivite katsayısıyla çarpılır.",
    ],
    formula:
      "Tahmini günlük enerji ihtiyacı = BMR × Aktivite katsayısı",
  },
  {
    title: "Aktivite katsayısı nasıl seçilir?",
    paragraphs: [
      "Aktivite katsayısı yalnızca planlı egzersizleri değil, çalışma biçimini ve gün içindeki genel hareket düzeyini de dikkate almalıdır.",
      "Masa başında çalışan ve haftada birkaç kısa yürüyüş yapan bir kişinin yüksek aktivite katsayısı seçmesi günlük enerji ihtiyacını olduğundan fazla gösterebilir.",
      "En doğru yaklaşım, gerçek yaşam düzenine en yakın seviyeyi seçmek ve sonuçları kilo değişimi ile birkaç hafta boyunca gözlemlemektir.",
    ],
  },
  {
    title: "Bazal metabolizma hızını etkileyen faktörler",
    paragraphs: [
      "Yaş, boy, kilo, cinsiyet ve vücut kompozisyonu bazal metabolizma hızını etkileyen temel faktörlerdir.",
      "Kas dokusu dinlenme sırasında yağ dokusuna göre daha fazla enerji kullandığı için kas kütlesi yüksek kişilerde gerçek enerji harcaması daha yüksek olabilir.",
      "Genetik yapı, hormonlar, ateş, uyku düzeni, çevre sıcaklığı, ilaçlar ve kronik hastalıklar da dinlenme enerji harcamasını değiştirebilir.",
    ],
    cards: [
      {
        title: "Yaş",
        description:
          "Yaş ilerledikçe kas kütlesi ve enerji harcaması azalabilir.",
      },
      {
        title: "Vücut büyüklüğü",
        description:
          "Daha büyük vücut yapısı genellikle daha fazla temel enerji gerektirir.",
      },
      {
        title: "Kas kütlesi",
        description:
          "Kas oranı yükseldikçe dinlenme enerji harcaması artabilir.",
      },
      {
        title: "Hormonal durum",
        description:
          "Tiroid ve diğer hormonlar metabolizma hızını etkileyebilir.",
      },
    ],
  },
  {
    title: "BMR kilo vermek için nasıl kullanılır?",
    paragraphs: [
      "Kilo verme planında ilk adım BMR'nin değil, aktivite düzeyi eklenmiş günlük toplam enerji ihtiyacının tahmin edilmesidir.",
      "Kilo kaybı için toplam ihtiyaçtan kontrollü bir enerji açığı oluşturulabilir. Ancak açığın büyüklüğü kişinin sağlık durumu, mevcut kilosu ve yaşam tarzına göre belirlenmelidir.",
      "Uzun süre BMR seviyesinin çok altında enerji almak kas kaybı, yorgunluk, besin yetersizliği ve sürdürülebilirlik sorunlarına neden olabilir.",
    ],
  },
  {
    title: "BMR kilo almak için nasıl kullanılır?",
    paragraphs: [
      "Kilo alma hedefinde de önce aktivite dahil toplam günlük enerji ihtiyacı hesaplanır.",
      "Bu değerin üzerinde kontrollü enerji alınması zamanla kilo artışını destekleyebilir.",
      "Amaç yalnızca yüksek kalorili besinler tüketmek değil, yeterli protein, karbonhidrat, yağ, vitamin ve mineral içeren dengeli bir plan oluşturmaktır.",
    ],
  },
  {
    title: "Kas kütlesi BMR değerini değiştirir mi?",
    paragraphs: [
      "Evet. Kas dokusu dinlenme sırasında metabolik olarak yağ dokusundan daha aktiftir.",
      "Ancak Mifflin-St Jeor ve Harris-Benedict gibi standart formüller vücut yağ oranını veya kas kütlesini doğrudan kullanmaz.",
      "Yağsız vücut kütlesi güvenilir biçimde biliniyorsa Katch-McArdle gibi alternatif formüller ek karşılaştırma sunabilir.",
    ],
  },
  {
    title: "BMR değeri neden zamanla değişir?",
    paragraphs: [
      "Vücut ağırlığı, kas kütlesi, yaş, hormon düzeyi ve sağlık durumu zaman içinde değişebildiği için enerji ihtiyacı da sabit kalmaz.",
      "Özellikle belirgin kilo kaybı sonrasında daha küçük bir vücudun temel enerji ihtiyacı azalabilir.",
      "Bu nedenle kilo veya aktivite düzeyinde önemli değişiklik olduğunda hesaplamanın yenilenmesi önerilir.",
    ],
  },
  {
    title: "BMR sonucu ne kadar doğrudur?",
    paragraphs: [
      "Standart formüller toplum ortalamalarına dayalı yaklaşık sonuç üretir. Gerçek dinlenme enerji harcaması kişiden kişiye değişebilir.",
      "Kas kütlesi çok yüksek veya düşük olanlarda, kronik hastalığı bulunanlarda ve hormonal değişiklik yaşayanlarda sapma daha belirgin olabilir.",
      "Daha kişisel ölçüm gereken durumlarda sağlık kuruluşlarında uygulanan dolaylı kalorimetri gibi yöntemlerden yararlanılabilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Bazal metabolizma hızı nedir?",
    answer:
      "Bazal metabolizma hızı, vücudun tam dinlenme hâlinde solunum, dolaşım ve organ faaliyetleri gibi temel işlevler için harcadığı tahmini günlük enerjidir.",
  },
  {
    question: "BMR nasıl hesaplanır?",
    answer:
      "Bu araç yaş, boy, kilo ve cinsiyet bilgilerini Mifflin-St Jeor formülünde değerlendirerek yaklaşık BMR sonucunu hesaplar.",
  },
  {
    question: "BMR ile günlük kalori ihtiyacı aynı şey midir?",
    answer:
      "Hayır. BMR yalnızca dinlenme enerjisini gösterir. Günlük kalori ihtiyacı hareket, iş, spor ve sindirim için harcanan enerjiyi de içerir.",
  },
  {
    question: "BMR ile RMR arasındaki fark nedir?",
    answer:
      "BMR çok sıkı dinlenme koşullarındaki enerji harcamasını, RMR ise daha esnek koşullarda ölçülen dinlenme enerjisini ifade eder.",
  },
  {
    question: "Mifflin-St Jeor formülü nedir?",
    answer:
      "Mifflin-St Jeor; yaş, boy, kilo ve cinsiyet kullanarak yetişkinlerde dinlenme enerji ihtiyacını tahmin eden yaygın bir denklemdir.",
  },
  {
    question: "Harris-Benedict formülü nedir?",
    answer:
      "Harris-Benedict, bazal enerji harcamasını tahmin etmek için kullanılan daha eski ve daha sonra revize edilmiş alternatif bir formüldür.",
  },
  {
    question: "Mifflin-St Jeor mu Harris-Benedict mi daha iyidir?",
    answer:
      "İki formül farklı sonuçlar verebilir. Güncel günlük enerji planlamasında Mifflin-St Jeor sıklıkla tercih edilir ancak ikisi de yaklaşık sonuç üretir.",
  },
  {
    question: "BMR sonucu kesin midir?",
    answer:
      "Hayır. Standart formüller toplum ortalamalarına dayalı tahmin üretir ve bireysel metabolizma farklılıklarını tamamen yansıtmaz.",
  },
  {
    question: "BMR yaşla birlikte azalır mı?",
    answer:
      "Yaş ilerledikçe kas kütlesi ve fiziksel aktivite azalabileceği için bazal enerji harcaması genellikle düşebilir.",
  },
  {
    question: "Kas kütlesi BMR'yi etkiler mi?",
    answer:
      "Evet. Kas dokusu dinlenme sırasında yağ dokusuna göre daha fazla enerji tüketir. Standart formüller kas oranını doğrudan ölçmez.",
  },
  {
    question: "Kilo arttıkça BMR yükselir mi?",
    answer:
      "Genellikle daha büyük vücut kütlesi daha fazla temel enerji gerektirir. Ancak vücut kompozisyonu da gerçek harcamayı etkiler.",
  },
  {
    question: "Boy BMR değerini etkiler mi?",
    answer:
      "Evet. Boy, vücut büyüklüğünü temsil eden değişkenlerden biri olduğu için Mifflin-St Jeor formülünde doğrudan kullanılır.",
  },
  {
    question: "Erkek ve kadın BMR formülü neden farklıdır?",
    answer:
      "Standart formüller kadın ve erkeklerin ortalama vücut kompozisyonu farklılıklarını ayrı sabit değerlerle temsil eder.",
  },
  {
    question: "BMR'nin altında kalori almak doğru mudur?",
    answer:
      "Uzun süre ve kontrolsüz biçimde çok düşük kalori almak sağlık sorunlarına yol açabilir. Kalori hedefi toplam ihtiyaç ve uzman değerlendirmesiyle belirlenmelidir.",
  },
  {
    question: "Kilo vermek için BMR nasıl kullanılır?",
    answer:
      "Önce BMR aktivite katsayısıyla çarpılarak toplam günlük enerji ihtiyacı tahmin edilir. Ardından kişiye uygun kontrollü bir kalori açığı planlanır.",
  },
  {
    question: "Kilo almak için BMR nasıl kullanılır?",
    answer:
      "Aktivite dahil toplam enerji ihtiyacının üzerinde kontrollü ve dengeli enerji alımı kilo artışını destekleyebilir.",
  },
  {
    question: "Aktivite katsayısı nedir?",
    answer:
      "Aktivite katsayısı günlük hareket, çalışma biçimi ve egzersiz düzeyini BMR hesabına eklemek için kullanılan çarpandır.",
  },
  {
    question: "Masa başında çalışan biri hangi katsayıyı seçmelidir?",
    answer:
      "Düzenli egzersiz yapılmıyorsa genellikle hareketsiz veya az hareketli seçenek daha uygun olabilir. Gerçek yaşam düzeni esas alınmalıdır.",
  },
  {
    question: "Spor kalorileri ayrıca eklenmeli midir?",
    answer:
      "Aktivite katsayısı egzersiz düzeyini zaten içeriyorsa spor kalorilerini ayrıca eklemek çift sayım oluşturabilir.",
  },
  {
    question: "BMR ne sıklıkla yeniden hesaplanmalıdır?",
    answer:
      "Belirgin kilo değişimi, aktivite düzeyi değişikliği veya uzun süreli yaşam tarzı değişimi olduğunda hesap yenilenebilir.",
  },
  {
    question: "Tiroid hastalığı BMR değerini etkiler mi?",
    answer:
      "Evet. Tiroid hormonları metabolizma üzerinde önemli rol oynar. Standart formül tiroid durumunu değerlendirmez.",
  },
  {
    question: "Hamilelikte BMR hesaplanabilir mi?",
    answer:
      "Gebelikte enerji ihtiyacı standart yetişkin formüllerinden farklı değerlendirilmelidir. Doktor veya diyetisyen desteği alınmalıdır.",
  },
  {
    question: "Çocuklar için bu hesaplama kullanılabilir mi?",
    answer:
      "Bu araç yetişkinlere yönelik genel tahmin üretir. Çocuk ve ergenlerde yaşa ve gelişim dönemine özel yöntemler kullanılmalıdır.",
  },
  {
    question: "Profesyonel sporcularda sonuç doğru olur mu?",
    answer:
      "Yüksek kas kütlesi ve yoğun antrenman nedeniyle standart formül gerçek enerji ihtiyacını tam yansıtmayabilir.",
  },
  {
    question: "Dolaylı kalorimetri nedir?",
    answer:
      "Dolaylı kalorimetri, oksijen tüketimi ve karbondioksit üretimini ölçerek dinlenme enerji harcamasını değerlendiren profesyonel yöntemdir.",
  },
  {
    question: "BMR yükseltilebilir mi?",
    answer:
      "Kas kütlesinin artması ve aktif yaşam gerçek enerji harcamasını destekleyebilir. Ancak yaş, genetik ve hormonal faktörler de etkilidir.",
  },
  {
    question: "Bu sonuç tıbbi değerlendirme yerine geçer mi?",
    answer:
      "Hayır. Sonuç yalnızca genel bilgilendirme amacıyla üretilen yaklaşık bir değerdir.",
  },
];

export default function BazalMetabolizmaHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-violet-100 text-violet-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu hesaplama yaş, boy, kilo ve cinsiyet bilgilerine dayanan matematiksel formüllerle yaklaşık sonuç üretir. Kas oranı, hormon düzeyleri, kronik hastalıklar, gebelik, ilaç kullanımı ve kişisel metabolik farklılıklar gerçek enerji ihtiyacını değiştirebilir. Sonuç tıbbi tanı veya kişiye özel beslenme planı yerine geçmez. Kilo kontrolü ve sağlık hedefleri için doktor ya da diyetisyen görüşü alınmalıdır."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-44 -z-10 h-72 w-72 rounded-full bg-fuchsia-200/20 blur-3xl"
        />

        <section
          aria-labelledby="bmr-calculator-heading"
          className="overflow-hidden rounded-[2rem] border border-violet-100 bg-gradient-to-br from-white via-violet-50/40 to-fuchsia-50/50 p-1 shadow-[0_24px_70px_-35px_rgba(109,40,217,0.35)]"
        >
          <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-700">
                  <span className="h-2 w-2 rounded-full bg-violet-500" />
                  Günlük enerji analizi
                </div>

                <h2
                  id="bmr-calculator-heading"
                  className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
                >
                  Bazal metabolizma hızınızı hesaplayın
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Yaş, boy, kilo ve cinsiyet bilgilerinizi girerek
                  vücudunuzun tam dinlenme hâlinde bir günde
                  harcadığı tahmini enerji miktarını öğrenin.
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-violet-600">
                    Anlık
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Sonuç güncelleme
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-violet-600">
                    2
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Formül karşılaştırması
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-violet-600">
                    24 saat
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Dinlenme enerjisi
                  </p>
                </article>
              </div>
            </div>

            <BmrCalculator />
          </div>
        </section>
      </div>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-violet-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Örnek hesaplama
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            30 yaşındaki bir erkek için BMR hesabı
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            180 santimetre boyunda ve 80 kilogram ağırlığındaki
            30 yaşında bir erkek için Mifflin-St Jeor formülünün
            nasıl uygulandığını adım adım inceleyin.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Yaş
              </p>

              <p className="mt-3 text-3xl font-black text-slate-950">
                30
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Formülde 5 ile çarpılır
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Boy
              </p>

              <p className="mt-3 text-3xl font-black text-slate-950">
                180 cm
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Formülde 6,25 ile çarpılır
              </p>
            </article>

            <article className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                Kilo
              </p>

              <p className="mt-3 text-3xl font-black text-violet-950">
                80 kg
              </p>

              <p className="mt-2 text-sm text-violet-700">
                Formülde 10 ile çarpılır
              </p>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-700 p-5 text-white shadow-lg shadow-violet-200">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-100">
                Tahmini BMR
              </p>

              <p className="mt-3 text-3xl font-black">
                1.780
              </p>

              <p className="mt-2 text-sm text-violet-100">
                kcal / gün
              </p>
            </article>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-5 sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-700">
                Mifflin-St Jeor işlemi
              </p>

              <p className="mt-4 overflow-x-auto whitespace-nowrap font-mono text-sm font-black leading-8 text-slate-950 sm:text-base">
                10 × 80 + 6,25 × 180 − 5 × 30 + 5
              </p>

              <div className="mt-4 h-px bg-violet-200" />

              <p className="mt-4 font-mono text-sm font-black leading-8 text-violet-800 sm:text-base">
                800 + 1.125 − 150 + 5 = 1.780 kcal
              </p>
            </article>

            <article className="rounded-3xl border border-slate-200 bg-slate-950 p-5 text-white sm:p-6">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-violet-300">
                Sonucun anlamı
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                Bu kişinin vücudu, tam dinlenme koşullarında temel
                yaşam işlevlerini sürdürebilmek için günde yaklaşık
                1.780 kcal enerji harcar.
              </p>

              <p className="mt-4 text-sm font-black leading-7 text-white">
                Günlük toplam ihtiyaç bunun üzerindedir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Metabolizma faktörleri
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Bazal enerji harcamasını neler etkiler?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Standart hesaplama yaş, boy, kilo ve cinsiyeti
            kullanır. Gerçek enerji harcaması ise çok daha fazla
            kişisel faktörden etkilenebilir.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {metabolismFactors.map((factor) => (
            <article
              key={factor.number}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-violet-50/50 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition group-hover:bg-violet-600">
                {factor.number}
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {factor.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {factor.description}
              </p>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold leading-6 text-slate-500">
                  {factor.detail}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.75)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-violet-300">
              Günlük enerji dengesi
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
              Günlük harcama yalnızca BMR'den oluşmaz
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Bazal metabolizma toplam günlük enerji harcamasının
              çoğunu oluşturabilir. Hareket, egzersiz, sindirim ve
              çevresel koşullar günlük ihtiyacı artırır.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Temel eşitlik
              </p>

              <p className="mt-3 font-mono text-sm font-bold leading-7 text-violet-300">
                Toplam enerji = BMR + Aktivite + Sindirim +
                Uyumsal harcama
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {calorieComponents.map((component) => (
              <article
                key={component.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full bg-violet-400/15 px-3 py-1 text-xs font-black text-violet-300">
                    {component.shortTitle}
                  </span>

                  <span className="text-lg font-black text-white">
                    {component.percentage}
                  </span>
                </div>

                <h3 className="mt-4 font-black text-white">
                  {component.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {component.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Hesaplama akışı
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            BMR sonucu nasıl oluşturulur?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Kişisel bilgiler doğrulandıktan sonra formül uygulanır
            ve dinlenme enerji harcaması günlük kalori cinsinden
            hesaplanır.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {calculationSteps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-violet-200 hover:bg-violet-50/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-sm font-black text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {step.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-violet-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Aktivite katsayıları
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            BMR günlük kalori ihtiyacına nasıl çevrilir?
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Aşağıdaki örnekte BMR değeri 1.700 kcal kabul
            edilmiştir. Gerçek sonuç, kişisel BMR ve seçilen
            aktivite katsayısına göre değişir.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8">
                  Aktivite seviyesi
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Katsayı
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Açıklama
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Örnek BMR
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8">
                  Tahmini ihtiyaç
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {activityLevels.map((level) => (
                <tr
                  key={level.title}
                  className="transition hover:bg-slate-50"
                >
                  <td className="px-6 py-5 md:px-8">
                    <p className="font-black text-slate-950">
                      {level.title}
                    </p>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${level.badgeClassName}`}
                    >
                      × {level.multiplier}
                    </span>
                  </td>

                  <td className="max-w-md px-6 py-5 text-sm leading-6 text-slate-600">
                    {level.description}
                  </td>

                  <td className="px-6 py-5 text-sm font-bold text-slate-700">
                    {level.exampleBmr}
                  </td>

                  <td className="px-6 py-5 text-sm font-black text-violet-700 md:px-8">
                    {level.estimatedNeed}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-200 bg-amber-50 px-6 py-5 md:px-8">
          <p className="text-sm leading-7 text-amber-900">
            <strong>Dikkat:</strong> Aktivite düzeyini olduğundan
            yüksek seçmek günlük enerji ihtiyacını fazla
            gösterebilir. Çalışma biçiminizi, günlük adım
            miktarınızı ve düzenli egzersiz sıklığınızı birlikte
            değerlendirin.
          </p>
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Formül karşılaştırması
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Bazal metabolizma hesaplama yöntemleri
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Farklı denklemler aynı kişi için farklı sonuçlar
            üretebilir. Her yöntem farklı varsayımlar ve girdiler
            kullanır.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8">
                  Yöntem
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Tarih
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Girdiler
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Kullanım
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Avantaj
                </th>

                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8">
                  Sınırlama
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {formulaComparison.map((formula) => (
                <tr
                  key={formula.name}
                  className={`transition ${
                    formula.highlighted
                      ? "bg-violet-50/70"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <td className="px-6 py-5 md:px-8">
                    <div className="flex items-center gap-3">
                      <p className="font-black text-slate-950">
                        {formula.name}
                      </p>

                      {formula.highlighted && (
                        <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-black text-violet-700">
                          Temel sonuç
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                    {formula.year}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600">
                    {formula.inputs}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600">
                    {formula.usage}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600">
                    {formula.advantage}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600 md:px-8">
                    {formula.limitation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-600">
            Kullanım alanları
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            BMR sonucu ne için kullanılabilir?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Bazal metabolizma sonucu tek başına beslenme planı
            değildir. Aktivite düzeyi ve kişisel hedeflerle
            birleştirildiğinde başlangıç noktası sunabilir.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {bmrUsageCases.map((usage, index) => (
            <article
              key={usage.title}
              className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {usage.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {usage.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
              Doğru yorumlama
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              BMR sonucunu tek başına kalori hedefi yapmayın
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              BMR, vücudun dinlenme enerjisidir. Normal yaşamda
              ayağa kalkmak, yürümek, çalışmak ve besinleri
              sindirmek için ek enerji harcanır.
            </p>

            <div className="mt-6 rounded-3xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <p className="font-black text-emerald-900">
                Önce toplam ihtiyacı hesaplayın
              </p>

              <p className="mt-2 text-sm leading-7 text-emerald-800">
                Kilo verme, koruma veya alma hedefi için BMR
                sonucunu gerçek aktivite düzeyinize uygun
                katsayıyla değerlendirin.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {interpretationRules.map((rule, index) => (
              <article
                key={rule.title}
                className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-950">
                  {rule.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {rule.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-rose-600">
            Yaygın hatalar
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Kalori planlamasında yapılan hatalar
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Formül doğru kullanılsa bile sonuç yanlış
            yorumlandığında günlük kalori hedefi gerçek ihtiyacın
            üzerinde veya altında belirlenebilir.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {commonMistakes.map((mistake, index) => (
            <article
              key={mistake.title}
              className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-sm font-black text-rose-700">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-4 text-lg font-black text-slate-950">
                {mistake.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {mistake.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-violet-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-800">
              Özel değerlendirme
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Standart formüllerin yetersiz kalabileceği durumlar
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki gruplarda standart yetişkin denklemleri
              gerçek enerji ihtiyacını yeterli doğrulukta
              göstermeyebilir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {specialConditions.map((condition) => (
              <div
                key={condition}
                className="flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-800">
                  !
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.8)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-violet-300">
              Sürdürülebilir enerji planı
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
              Kalori hedefinizi yalnızca tek bir sayıya bağlamayın
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Günlük enerji ihtiyacı zaman içinde değişebilir.
              Kilo eğilimi, açlık düzeyi, performans, uyku,
              toparlanma ve sağlık durumu birlikte izlenmelidir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-violet-300">
                01
              </p>

              <p className="mt-2 text-sm font-black text-white">
                BMR'yi hesapla
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-violet-300">
                02
              </p>

              <p className="mt-2 text-sm font-black text-white">
                Aktiviteyi ekle
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-violet-300">
                03
              </p>

              <p className="mt-2 text-sm font-black text-white">
                Eğilimi takip et
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-violet-300">
                04
              </p>

              <p className="mt-2 text-sm font-black text-white">
                Uzmanla güncelle
              </p>
            </article>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  );
}