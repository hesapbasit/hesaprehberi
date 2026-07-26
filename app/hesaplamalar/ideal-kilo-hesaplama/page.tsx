import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import IdealWeightCalculator from "@/components/calculators/IdealWeightCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/ideal-kilo-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `İdeal kilo hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const idealWeightMethods = [
  {
    name: "Devine Formülü",
    year: "1974",
    description:
      "Boy ve cinsiyet bilgilerine göre yaklaşık ideal kilo tahmini oluşturur. En yaygın kullanılan klasik yöntemlerden biridir.",
    maleFormula:
      "50 kg + 5 fit üzerindeki her inç için 2,3 kg",
    femaleFormula:
      "45,5 kg + 5 fit üzerindeki her inç için 2,3 kg",
    emphasis: "Ana hesaplama yöntemi",
    className: "border-emerald-200 bg-emerald-50",
    badgeClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Robinson Formülü",
    year: "1983",
    description:
      "Devine yöntemine benzer biçimde boy ve cinsiyeti kullanır ancak eklenen kilogram katsayıları farklıdır.",
    maleFormula:
      "52 kg + 5 fit üzerindeki her inç için 1,9 kg",
    femaleFormula:
      "49 kg + 5 fit üzerindeki her inç için 1,7 kg",
    emphasis: "Alternatif tahmin",
    className: "border-sky-200 bg-sky-50",
    badgeClassName: "bg-sky-100 text-sky-700",
  },
  {
    name: "Miller Formülü",
    year: "1983",
    description:
      "Başlangıç değerleri ve boy artış katsayıları farklı olan bir başka yetişkin ideal kilo tahmin yöntemidir.",
    maleFormula:
      "56,2 kg + 5 fit üzerindeki her inç için 1,41 kg",
    femaleFormula:
      "53,1 kg + 5 fit üzerindeki her inç için 1,36 kg",
    emphasis: "Karşılaştırmalı sonuç",
    className: "border-violet-200 bg-violet-50",
    badgeClassName: "bg-violet-100 text-violet-700",
  },
  {
    name: "Hamwi Formülü",
    year: "1964",
    description:
      "Beş fitlik başlangıç boyu ve bunun üzerindeki her inç için belirlenen kilo artışına dayanır.",
    maleFormula:
      "48 kg + 5 fit üzerindeki her inç için 2,7 kg",
    femaleFormula:
      "45,5 kg + 5 fit üzerindeki her inç için 2,2 kg",
    emphasis: "Klasik referans",
    className: "border-amber-200 bg-amber-50",
    badgeClassName: "bg-amber-100 text-amber-800",
  },
] as const;

const calculationSteps = [
  {
    number: "01",
    title: "Boy bilginizi belirleyin",
    description:
      "Boyunuzu santimetre cinsinden girin. Hesaplama sırasında değer fit ve inç birimlerine otomatik olarak çevrilir.",
    example: "175 cm ≈ 5 fit 9 inç",
  },
  {
    number: "02",
    title: "Cinsiyet seçimini yapın",
    description:
      "Klasik ideal kilo formüllerinde kadınlar ve erkekler için farklı başlangıç değerleri kullanılır.",
    example: "Kadın veya erkek formülü seçilir",
  },
  {
    number: "03",
    title: "Formül sonucu hesaplanır",
    description:
      "Beş fit üzerindeki boy farkı, seçilen yöntemin kilogram katsayısıyla çarpılarak başlangıç değerine eklenir.",
    example: "Başlangıç kilosu + boy farkı katsayısı",
  },
  {
    number: "04",
    title: "Sonucu aralıkla karşılaştırın",
    description:
      "Tahmini ideal kilo, VKİ 18,5–24,9 temel alınarak hesaplanan yaklaşık normal kilo aralığıyla birlikte değerlendirilir.",
    example: "Tek sayı yerine genel aralık incelenir",
  },
] as const;

const healthyWeightExamples = [
  {
    height: "1,55 m",
    lowerLimit: "44,4 kg",
    upperLimit: "59,8 kg",
    midpoint: "52,1 kg",
  },
  {
    height: "1,60 m",
    lowerLimit: "47,4 kg",
    upperLimit: "63,7 kg",
    midpoint: "55,6 kg",
  },
  {
    height: "1,65 m",
    lowerLimit: "50,4 kg",
    upperLimit: "67,8 kg",
    midpoint: "59,1 kg",
  },
  {
    height: "1,70 m",
    lowerLimit: "53,5 kg",
    upperLimit: "72,0 kg",
    midpoint: "62,8 kg",
  },
  {
    height: "1,75 m",
    lowerLimit: "56,7 kg",
    upperLimit: "76,3 kg",
    midpoint: "66,5 kg",
  },
  {
    height: "1,80 m",
    lowerLimit: "59,9 kg",
    upperLimit: "80,7 kg",
    midpoint: "70,3 kg",
  },
  {
    height: "1,85 m",
    lowerLimit: "63,3 kg",
    upperLimit: "85,2 kg",
    midpoint: "74,3 kg",
  },
  {
    height: "1,90 m",
    lowerLimit: "66,8 kg",
    upperLimit: "89,9 kg",
    midpoint: "78,4 kg",
  },
] as const;

const resultFactors = [
  {
    title: "Kas kütlesi",
    description:
      "Düzenli ağırlık antrenmanı yapan kişiler, hesaplanan değerin üzerinde olmasına rağmen sağlıklı bir vücut yapısına sahip olabilir.",
  },
  {
    title: "Kemik yapısı",
    description:
      "Kemik yoğunluğu ve vücut iskeletinin genişliği, kişilerin aynı boyda farklı sağlıklı kilolara sahip olmasına neden olabilir.",
  },
  {
    title: "Vücut yağ oranı",
    description:
      "Tartıdaki toplam ağırlık, kilonun ne kadarının yağ veya kas olduğunu göstermez. Vücut kompozisyonu ayrıca değerlendirilmelidir.",
  },
  {
    title: "Yaş",
    description:
      "Yaşla birlikte kas kütlesi, metabolizma hızı ve yağ dağılımı değişebileceği için kilo hedefleri kişiye göre farklılaşabilir.",
  },
  {
    title: "Sağlık durumu",
    description:
      "Kronik hastalıklar, kullanılan ilaçlar, hormonal durumlar ve sıvı tutulumu kilo değerlendirmesini etkileyebilir.",
  },
  {
    title: "Yaşam tarzı",
    description:
      "Fiziksel aktivite, beslenme düzeni, uyku ve stres seviyesi sürdürülebilir kilo yönetiminin önemli parçalarıdır.",
  },
] as const;

const evaluationPrinciples = [
  {
    number: "01",
    title: "Tek sayıya odaklanmayın",
    description:
      "İdeal kilo sonucu kesin hedef değil, genel bir referans değeridir. Sağlıklı kilo çoğu kişi için tek sayıdan ziyade bir aralıktır.",
  },
  {
    number: "02",
    title: "Değişimi aşamalı planlayın",
    description:
      "Kilo alma veya verme sürecinde hızlı değişimler yerine sürdürülebilir alışkanlıklara dayanan kontrollü bir plan tercih edilmelidir.",
  },
  {
    number: "03",
    title: "Vücut kompozisyonunu inceleyin",
    description:
      "Bel çevresi, yağ oranı ve kas kütlesi gibi ek göstergeler tartı sonucundan daha kapsamlı bilgi sağlayabilir.",
  },
  {
    number: "04",
    title: "Uzman desteği alın",
    description:
      "Belirgin kilo kaybı, hızlı kilo artışı veya kronik bir sağlık durumu varsa kişisel değerlendirme için sağlık uzmanına danışılmalıdır.",
  },
] as const;

const specialGroups = [
  "18 yaşından küçük çocuklar ve ergenler",
  "Hamile veya emzirme dönemindeki kişiler",
  "Profesyonel sporcular ve yüksek kas kütlesine sahip kişiler",
  "İleri yaşta belirgin kas kaybı yaşayan kişiler",
  "Yeme bozukluğu geçmişi bulunan kişiler",
  "Kronik hastalığı veya hormonal problemi olan kişiler",
] as const;

const contentSections: CalculatorContentSection[] = [
  {
    title: "İdeal kilo nedir?",
    paragraphs: [
      "İdeal kilo, kişinin boyu ve bazı temel fiziksel özellikleri kullanılarak tahmin edilen genel bir referans değeridir. Sağlıklı yaşam açısından herkes için geçerli tek ve kesin bir kilo hedefi anlamına gelmez.",
      "İki kişi aynı boyda olsa bile kas kütlesi, kemik yapısı, yaş, genetik özellikler, vücut yağ oranı ve fiziksel aktivite düzeyi nedeniyle farklı sağlıklı kilolara sahip olabilir.",
      "Bu nedenle ideal kilo hesaplama sonucu, mevcut durumunuzu genel olarak değerlendirmek için kullanılmalıdır. Kişisel sağlık hedefleri yalnızca tartıdaki sayıya göre belirlenmemelidir.",
    ],
  },
  {
    title: "İdeal kilo nasıl hesaplanır?",
    paragraphs: [
      "Klasik ideal kilo formülleri çoğunlukla boy ve cinsiyet bilgilerini kullanır. Formüllerde beş fitlik boy için temel bir ağırlık belirlenir ve beş fit üzerindeki her inç için belirli bir kilogram değeri eklenir.",
      "Hesaplama aracında Devine, Robinson, Miller ve Hamwi gibi farklı yöntemlerden elde edilen tahmini sonuçlar karşılaştırılabilir. Bu yöntemler farklı katsayılar kullandığı için aynı kişi için birbirinden biraz farklı değerler oluşturabilir.",
    ],
    formula:
      "Tahmini ideal kilo = Başlangıç kilosu + Boy farkı × Formül katsayısı",
  },
  {
    title: "Devine formülü nedir?",
    paragraphs: [
      "Devine formülü, yetişkinler için yaklaşık ideal kilo tahmini üretmek amacıyla geliştirilmiş klasik yöntemlerden biridir.",
      "Erkekler için beş fit boyda 50 kilogram, kadınlar için 45,5 kilogram başlangıç değeri kullanılır. Beş fit üzerindeki her inç için yaklaşık 2,3 kilogram eklenir.",
      "Bu yöntem kolay uygulanabilir olsa da kas kütlesi, vücut yağ oranı veya kemik yapısı gibi kişisel değişkenleri doğrudan hesaba katmaz.",
    ],
    cards: [
      {
        title: "Erkekler için Devine",
        description:
          "50 kg + beş fit üzerindeki her inç için yaklaşık 2,3 kg.",
      },
      {
        title: "Kadınlar için Devine",
        description:
          "45,5 kg + beş fit üzerindeki her inç için yaklaşık 2,3 kg.",
      },
    ],
  },
  {
    title: "Sağlıklı kilo aralığı nasıl belirlenir?",
    paragraphs: [
      "Yaklaşık normal kilo aralığı hesaplanırken genellikle yetişkinler için kullanılan 18,5 ile 24,9 arasındaki VKİ değerleri temel alınır.",
      "Alt sınır için boyun karesi 18,5 ile, üst sınır için ise 24,9 ile çarpılır. Böylece tek bir ideal kilo yerine boya göre daha geniş bir referans aralığı elde edilir.",
      "Örneğin 1,75 metre boyundaki bir yetişkin için bu yöntemle yaklaşık 56,7 ile 76,3 kilogram arasında bir referans aralığı hesaplanır.",
    ],
    formula:
      "Alt sınır = 18,5 × Boy² | Üst sınır = 24,9 × Boy²",
  },
  {
    title: "Neden farklı ideal kilo formülleri vardır?",
    paragraphs: [
      "İdeal kilo kavramını tek bir matematiksel formülle kesin biçimde belirlemek mümkün değildir. Bu nedenle farklı dönemlerde farklı başlangıç değerleri ve katsayılar kullanan yöntemler geliştirilmiştir.",
      "Devine, Robinson, Miller ve Hamwi formülleri aynı boy ve cinsiyet bilgisi için farklı sonuçlar verebilir. Bu farklılık hesaplamanın hatalı olduğu anlamına gelmez; yöntemlerin farklı varsayımlara dayandığını gösterir.",
      "Birden fazla formülün sonuçlarını birlikte incelemek, tek bir değere bağlı kalmaktan daha dengeli bir genel değerlendirme sağlayabilir.",
    ],
  },
  {
    title: "İdeal kilo ve VKİ arasındaki fark nedir?",
    paragraphs: [
      "İdeal kilo formülleri çoğunlukla boy ve cinsiyete göre tek bir yaklaşık ağırlık değeri üretir. VKİ ise boy ile mevcut kilo arasındaki ilişkiyi sayısal olarak gösterir.",
      "VKİ yöntemi kullanılarak bir kişinin boyuna göre yaklaşık normal kilo aralığı hesaplanabilir. Bu aralık, ideal kilo formüllerinin verdiği tek değerden daha geniş bir referans sağlar.",
      "Her iki yöntem de vücut yağ oranını veya kas kütlesini doğrudan ölçmediği için kişisel sağlık değerlendirmesinin tamamını oluşturmaz.",
    ],
  },
  {
    title: "Kas kütlesi ideal kilo sonucunu etkiler mi?",
    paragraphs: [
      "Evet. Kas dokusu yoğun olduğu için düzenli spor yapan veya yüksek kas kütlesine sahip kişiler hesaplanan ideal kilo değerinin üzerinde olabilir.",
      "Bu durum tek başına kişinin sağlıksız veya fazla yağlı olduğu anlamına gelmez. Sporcularda yağ oranı, bel çevresi, performans düzeyi ve kas kütlesi gibi ek göstergeler daha anlamlı olabilir.",
    ],
  },
  {
    title: "Yaş ideal kilo hesaplamasında önemli midir?",
    paragraphs: [
      "Klasik ideal kilo formüllerinin çoğu yaş bilgisini doğrudan kullanmaz. Ancak yaş ilerledikçe kas kütlesi, kemik yoğunluğu, metabolizma ve yağ dağılımı değişebilir.",
      "Bu nedenle formül sonucu aynı kalsa bile sonucun kişisel yorumu yaşa göre değişebilir. Özellikle ileri yaşlarda yalnızca kilo düşürmek yerine kas kütlesini korumaya odaklanmak gerekebilir.",
    ],
  },
  {
    title: "Kilo hedefi nasıl belirlenmelidir?",
    paragraphs: [
      "Kilo hedefi belirlenirken hesaplanan ideal değer, yaklaşık normal kilo aralığı, mevcut sağlık durumu ve yaşam tarzı birlikte değerlendirilmelidir.",
      "Çok kısa sürede büyük kilo değişimi hedeflemek yerine küçük ve sürdürülebilir adımlar planlanmalıdır. Beslenme düzeni, hareket düzeyi, uyku ve stres yönetimi birlikte ele alınmalıdır.",
      "Kronik hastalık, yeme bozukluğu geçmişi, gebelik veya hızlı kilo değişimi gibi özel durumlarda kişisel hedef belirlemek için doktor veya diyetisyen desteği alınmalıdır.",
    ],
  },
  {
    title: "İdeal kilo sonucu kesin bir sağlık ölçütü müdür?",
    paragraphs: [
      "Hayır. İdeal kilo hesaplama sonucu genel bir matematiksel tahmindir. Tıbbi tanı, tedavi planı veya profesyonel sağlık değerlendirmesi değildir.",
      "Aynı sonuç farklı kişiler için farklı anlamlar taşıyabilir. Vücut kompozisyonu, sağlık geçmişi ve yaşam alışkanlıkları dikkate alınmadan yalnızca hesaplama sonucuna göre karar verilmemelidir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "İdeal kilo nasıl hesaplanır?",
    answer:
      "İdeal kilo hesaplanırken genellikle boy ve cinsiyet bilgileri kullanılır. Devine, Robinson, Miller ve Hamwi gibi yöntemler farklı başlangıç değerleri ve katsayılarla yaklaşık sonuç üretir.",
  },
  {
    question: "İdeal kilo hesaplama sonucu kesin midir?",
    answer:
      "Hayır. Sonuç genel bir tahmindir. Kas kütlesi, kemik yapısı, yaş, vücut yağ oranı ve sağlık durumu kişiden kişiye değişebilir.",
  },
  {
    question: "Sağlıklı kilo aralığı nedir?",
    answer:
      "Sağlıklı kilo aralığı, kişinin boyuna göre VKİ değerinin yaklaşık 18,5 ile 24,9 arasında olduğu ağırlık aralığını ifade eder.",
  },
  {
    question: "Kadın ve erkeklerin ideal kilosu farklı mıdır?",
    answer:
      "Bazı klasik ideal kilo formüllerinde kadınlar ve erkekler için farklı başlangıç değerleri kullanılır. Ancak kişisel vücut yapısı sonucu önemli ölçüde etkileyebilir.",
  },
  {
    question: "Devine formülü nedir?",
    answer:
      "Devine formülü, boy ve cinsiyet bilgilerini kullanarak yetişkinler için yaklaşık ideal kilo tahmini oluşturan klasik yöntemlerden biridir.",
  },
  {
    question: "Robinson formülü nedir?",
    answer:
      "Robinson formülü, Devine yöntemine benzer biçimde beş fitlik başlangıç boyu ve bu boyun üzerindeki her inç için belirlenen katsayılarla ideal kilo tahmini yapar.",
  },
  {
    question: "Miller formülü nedir?",
    answer:
      "Miller formülü, erkekler ve kadınlar için farklı başlangıç ağırlıkları ve boy katsayıları kullanarak yaklaşık ideal kilo sonucu üretir.",
  },
  {
    question: "Hamwi formülü nedir?",
    answer:
      "Hamwi formülü, beş fit boy için belirlenen başlangıç ağırlığına beş fit üzerindeki her inç için belirli bir kilogram ekleyerek sonuç oluşturur.",
  },
  {
    question: "Hangi ideal kilo formülü daha doğrudur?",
    answer:
      "Tek bir formül herkes için kesin doğru sonuç vermez. Birden fazla yöntemin sonuçlarını karşılaştırmak ve sonucu vücut kompozisyonuyla birlikte değerlendirmek daha anlamlıdır.",
  },
  {
    question: "İdeal kilo ve sağlıklı kilo aralığı aynı şey midir?",
    answer:
      "Hayır. İdeal kilo formülleri genellikle tek bir tahmini değer üretir. Sağlıklı kilo aralığı ise VKİ alt ve üst sınırlarına göre daha geniş bir referans sunar.",
  },
  {
    question: "Kaslı kişilerde ideal kilo hesaplaması doğru mudur?",
    answer:
      "Yüksek kas kütlesine sahip kişiler hesaplanan değerin üzerinde olabilir. Bu nedenle sporcularda yağ oranı ve kas kütlesi gibi ek ölçümler dikkate alınmalıdır.",
  },
  {
    question: "Yaş ideal kiloyu etkiler mi?",
    answer:
      "Klasik formüller yaş bilgisini kullanmasa da yaşla birlikte kas, yağ ve kemik yapısı değiştiği için sonucun kişisel yorumu etkilenebilir.",
  },
  {
    question: "Kemik yapısı ideal kiloyu etkiler mi?",
    answer:
      "Evet. Kemik yoğunluğu ve iskelet genişliği aynı boydaki kişilerin farklı sağlıklı ağırlıklara sahip olmasına neden olabilir.",
  },
  {
    question: "İdeal kiloya ulaşmak için ne yapılmalıdır?",
    answer:
      "Dengeli beslenme, düzenli fiziksel aktivite, yeterli uyku ve sürdürülebilir alışkanlıklar kilo yönetiminin temelini oluşturur. Kişisel plan için uzman desteği alınabilir.",
  },
  {
    question: "Kilo verme hedefi nasıl belirlenmelidir?",
    answer:
      "Hedef; mevcut sağlık durumu, yaklaşık normal kilo aralığı, kas kütlesi ve yaşam tarzına göre gerçekçi ve aşamalı biçimde belirlenmelidir.",
  },
  {
    question: "Hızlı kilo vermek sağlıklı mıdır?",
    answer:
      "Çok hızlı kilo kaybı kas kaybı, beslenme yetersizliği ve sürdürülebilirlik sorunlarına yol açabilir. Kontrollü ve kişiye uygun bir plan tercih edilmelidir.",
  },
  {
    question: "Çocuklarda ideal kilo aynı formülle hesaplanır mı?",
    answer:
      "Hayır. Çocuklar ve ergenler büyüme döneminde olduğu için değerlendirme yaş ve cinsiyete göre büyüme eğrileri üzerinden yapılmalıdır.",
  },
  {
    question: "Gebelikte ideal kilo hesaplaması kullanılabilir mi?",
    answer:
      "Gebelik sırasında standart ideal kilo formülleri doğrudan hedef belirlemek için uygun değildir. Kilo takibi sağlık uzmanı tarafından yapılmalıdır.",
  },
  {
    question: "İdeal kilo sonucu tıbbi teşhis sayılır mı?",
    answer:
      "Hayır. Hesaplama yalnızca genel bilgilendirme amaçlıdır ve tıbbi muayene, tanı veya kişisel tedavi planı yerine geçmez.",
  },
];

export default function IdealKiloHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu sayfadaki ideal kilo ve sağlıklı kilo aralığı sonuçları yalnızca genel bilgilendirme amaçlı matematiksel tahminlerdir. Sonuçlar; kas kütlesi, kemik yapısı, yaş, vücut yağ oranı ve kişisel sağlık durumunu tam olarak yansıtmayabilir. Kişisel kilo hedefi, tanı veya tedavi planı için doktorunuza ya da diyetisyeninize danışınız."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />

        <section
          aria-labelledby="ideal-weight-calculator-heading"
          className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/50 to-cyan-50/70 p-1 shadow-[0_24px_70px_-35px_rgba(15,118,110,0.35)]"
        >
          <div className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Kişisel kilo değerlendirmesi
                </div>

                <h2
                  id="ideal-weight-calculator-heading"
                  className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
                >
                  Tahmini ideal kilonuzu ve sağlıklı kilo aralığınızı öğrenin
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Boy ve cinsiyet bilgilerinizi girerek farklı ideal kilo
                  formüllerinin sonuçlarını karşılaştırın. Boyunuza göre
                  yaklaşık normal kilo aralığınızı görüntüleyin.
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">4</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Farklı formül
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Anlık</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Sonuç güncelleme
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Ücretsiz</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Kayıt gerekmez
                  </p>
                </div>
              </div>
            </div>

            <IdealWeightCalculator />
          </div>
        </section>
      </div>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-emerald-50 px-6 py-7 md:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            Karşılaştırmalı yöntemler
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            İdeal kilo hesaplama formülleri
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Farklı yöntemler farklı başlangıç değerleri ve katsayılar
            kullandığından aynı kişi için birbirine yakın ancak farklı sonuçlar
            oluşturabilir.
          </p>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
          {idealWeightMethods.map((method) => (
            <article
              key={method.name}
              className={`rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${method.className}`}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${method.badgeClassName}`}
                  >
                    {method.emphasis}
                  </span>

                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    {method.name}
                  </h3>
                </div>

                <span className="rounded-xl border border-white bg-white/80 px-3 py-1.5 text-xs font-black text-slate-500 shadow-sm">
                  {method.year}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {method.description}
              </p>

              <div className="mt-5 space-y-3 border-t border-slate-900/10 pt-5">
                <div className="rounded-2xl border border-white bg-white/80 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                    Erkek formülü
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                    {method.maleFormula}
                  </p>
                </div>

                <div className="rounded-2xl border border-white bg-white/80 p-4">
                  <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                    Kadın formülü
                  </p>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-800">
                    {method.femaleFormula}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.75)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              Örnek değerlendirme
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
              175 cm boy için yaklaşık kilo referansları
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Boyu <strong className="text-white">175 cm</strong> olan bir
              yetişkin için ideal kilo formüllerinin sonucu cinsiyete ve
              kullanılan yönteme göre değişebilir.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                VKİ temelli yaklaşık normal aralık
              </p>

              <p className="mt-3 text-3xl font-black text-emerald-300">
                56,7 – 76,3 kg
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Bu aralık, 18,5 ve 24,9 VKİ sınırları kullanılarak
                hesaplanmıştır.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Örnek boy
              </p>
              <p className="mt-3 text-3xl font-black">175 cm</p>
              <p className="mt-2 text-sm text-slate-400">
                Yaklaşık 5 fit 9 inç
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Alt VKİ sınırı
              </p>
              <p className="mt-3 text-3xl font-black">18,5</p>
              <p className="mt-2 text-sm text-slate-400">
                Yaklaşık 56,7 kg
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Üst VKİ sınırı
              </p>
              <p className="mt-3 text-3xl font-black">24,9</p>
              <p className="mt-2 text-sm text-slate-400">
                Yaklaşık 76,3 kg
              </p>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 shadow-lg shadow-emerald-950/20">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
                Aralık orta noktası
              </p>
              <p className="mt-3 text-3xl font-black">66,5 kg</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                Kesin ideal kilo hedefi değildir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            Hesaplama süreci
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            İdeal kilo hesabı adım adım nasıl yapılır?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Hesaplama aracı, boy ve cinsiyet bilgilerini seçilen formülün
            katsayılarıyla birleştirerek tahmini sonuç üretir.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {calculationSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-emerald-200 hover:bg-emerald-50/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white transition group-hover:bg-emerald-600">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-sm font-bold text-emerald-700">
                      {step.example}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-7 md:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            Yaklaşık referans tablosu
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Boya göre normal kilo aralığı
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Aşağıdaki değerler, yetişkinler için 18,5–24,9 VKİ aralığı
            kullanılarak hesaplanan yaklaşık referanslardır.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8"
                >
                  Boy
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500"
                >
                  Alt sınır
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500"
                >
                  Üst sınır
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500"
                >
                  Aralık orta noktası
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8"
                >
                  Referans VKİ
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {healthyWeightExamples.map((item) => (
                <tr
                  key={item.height}
                  className="transition hover:bg-emerald-50/60"
                >
                  <td className="px-6 py-4 font-black text-slate-950 md:px-8">
                    {item.height}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-700">
                    {item.lowerLimit}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-700">
                    {item.upperLimit}
                  </td>

                  <td className="px-6 py-4 font-semibold text-emerald-700">
                    {item.midpoint}
                  </td>

                  <td className="px-6 py-4 md:px-8">
                    <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                      18,5 – 24,9
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="border-t border-slate-200 bg-amber-50 px-6 py-5 md:px-8">
          <p className="text-sm leading-7 text-amber-900">
            <strong>Önemli:</strong> Aralık orta noktası, kişisel ideal kilo
            olarak değerlendirilmemelidir. Sağlıklı ağırlık; kas oranı, yaş,
            kemik yapısı ve sağlık durumuna göre değişebilir.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            Kişisel farklılıklar
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            İdeal kilo sonucunu etkileyen faktörler
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Matematiksel formüller genel tahmin sunar. Kişinin sağlıklı
            ağırlığını belirleyen birçok ek unsur bulunur.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {resultFactors.map((factor, index) => (
            <article
              key={factor.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-emerald-200 hover:bg-emerald-50/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="mt-5 text-lg font-black text-slate-950">
                {factor.title}
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {factor.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              Sağlıklı yaklaşım
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Kilo hedefinizi değerlendirirken nelere dikkat etmelisiniz?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Hesaplanan sonucu kesin hedef yerine başlangıç referansı olarak
              kullanın. Sağlıklı değişim, sürdürülebilir alışkanlıklarla
              birlikte planlanmalıdır.
            </p>

            <div className="mt-6 rounded-3xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <p className="font-black text-emerald-900">
                Daha kapsamlı değerlendirme
              </p>

              <p className="mt-2 text-sm leading-7 text-emerald-800">
                VKİ, bel çevresi, yağ oranı, kas kütlesi, kan değerleri ve
                sağlık geçmişi birlikte değerlendirildiğinde daha anlamlı bir
                sonuç elde edilebilir.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {evaluationPrinciples.map((principle) => (
              <article
                key={principle.number}
                className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white">
                  {principle.number}
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-950">
                  {principle.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-rose-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-rose-700">
              Özel değerlendirme gerekir
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Standart ideal kilo formüllerini dikkatli kullanması gerekenler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki gruplarda yetişkinler için geliştirilen klasik
              formüller tek başına uygun bir kilo hedefi oluşturmayabilir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {specialGroups.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-rose-100 text-xs font-black text-rose-700">
                  !
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.8)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Dengeli kilo yönetimi
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
              Hedefiniz yalnızca daha düşük veya daha yüksek bir sayı olmasın
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Sağlıklı kilo yönetimi; kas kütlesini koruyan, yeterli beslenmeyi
              destekleyen ve uzun vadede sürdürülebilen alışkanlıklara
              dayanmalıdır.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">01</p>
              <p className="mt-2 text-sm font-bold text-white">
                Dengeli beslenme
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">02</p>
              <p className="mt-2 text-sm font-bold text-white">
                Düzenli hareket
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">03</p>
              <p className="mt-2 text-sm font-bold text-white">
                Yeterli dinlenme
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">04</p>
              <p className="mt-2 text-sm font-bold text-white">
                Uzman desteği
              </p>
            </div>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  );
}