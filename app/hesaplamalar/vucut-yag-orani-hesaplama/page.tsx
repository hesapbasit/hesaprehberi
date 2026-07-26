import type { Metadata } from "next";

import BodyFatCalculator from "@/components/calculators/BodyFatCalculator";
import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/vucut-yag-orani-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Vücut yağ oranı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const measurementSteps = [
  {
    number: "01",
    title: "Boy uzunluğu",
    description:
      "Ayakkabılarınızı çıkarın, duvara dik biçimde yaslanın ve başınızı karşıya bakacak şekilde konumlandırın.",
    position:
      "Topuklar zeminde, sırt dik ve baş doğal pozisyonda olmalıdır.",
    note: "Ölçümü santimetre cinsinden kaydedin.",
  },
  {
    number: "02",
    title: "Boyun çevresi",
    description:
      "Mezurayı gırtlağın hemen altından, boynun çevresine hafif aşağı eğimli olacak şekilde yerleştirin.",
    position:
      "Mezura cildi sıkıştırmamalı ancak boyundan tamamen ayrılmamalıdır.",
    note: "Normal nefes alıp verirken ölçüm yapın.",
  },
  {
    number: "03",
    title: "Bel çevresi",
    description:
      "Bel çevresini karın kaslarını sıkmadan ve karnı içeri çekmeden doğal duruşta ölçün.",
    position:
      "Erkeklerde genellikle göbek deliği hizası; kadınlarda doğal bel hattı esas alınır.",
    note: "Mezuranın yere paralel olduğundan emin olun.",
  },
  {
    number: "04",
    title: "Kalça çevresi",
    description:
      "Kadınlar için kalçanın en geniş bölümünden yatay biçimde çevre ölçümü alın.",
    position:
      "Ayaklar birleşik ve vücut ağırlığı iki ayağa dengeli dağılmış olmalıdır.",
    note: "Mezura kıyafeti veya cildi sıkıştırmamalıdır.",
  },
] as const;

const measurementMistakes = [
  {
    title: "Mezurayı fazla sıkmak",
    description:
      "Mezuranın cilde baskı uygulaması çevre değerini olduğundan düşük gösterebilir.",
  },
  {
    title: "Karnı içeri çekmek",
    description:
      "Bel ölçümü sırasında karın kaslarını sıkmak veya nefesi tutmak sonucu etkiler.",
  },
  {
    title: "Eğik ölçüm yapmak",
    description:
      "Mezuranın yere paralel olmaması ölçülen çevre değerinin büyümesine neden olabilir.",
  },
  {
    title: "Farklı noktalardan ölçmek",
    description:
      "Her ölçümde farklı anatomik noktaların kullanılması ilerlemeyi karşılaştırmayı zorlaştırır.",
  },
  {
    title: "Kalın kıyafet üzerinden ölçmek",
    description:
      "Çevre ölçümleri mümkünse ince kıyafetle veya doğrudan cilt üzerinden alınmalıdır.",
  },
  {
    title: "Tek ölçüme güvenmek",
    description:
      "Ölçümü iki veya üç kez tekrarlayıp birbirine yakın sonuçların ortalamasını almak daha tutarlıdır.",
  },
] as const;

const bodyCompositionItems = [
  {
    title: "Yağ kütlesi",
    description:
      "Vücut ağırlığının yağ dokusundan oluşan yaklaşık miktarını ifade eder.",
    example: "80 kg ağırlık ve %20 yağ oranı için yaklaşık 16 kg",
  },
  {
    title: "Yağsız vücut kütlesi",
    description:
      "Kas, kemik, organ, su ve diğer yağ dışı dokuların toplam tahmini ağırlığıdır.",
    example: "80 kg ağırlık ve %20 yağ oranı için yaklaşık 64 kg",
  },
  {
    title: "Esansiyel yağ",
    description:
      "Organların, hormon sisteminin ve temel vücut fonksiyonlarının sürdürülebilmesi için gerekli yağ dokusudur.",
    example: "Sağlık için tamamen ortadan kaldırılması hedeflenmemelidir",
  },
  {
    title: "Depo yağı",
    description:
      "Vücudun enerji depolamak amacıyla deri altında ve organların çevresinde tuttuğu yağ dokusudur.",
    example: "Miktarı yaşam tarzı ve enerji dengesiyle değişebilir",
  },
] as const;

const maleBodyFatRanges = [
  {
    category: "Esansiyel yağ",
    percentage: "%2–5",
    description: "Temel fizyolojik işlevler için gerekli çok düşük düzey",
    badgeClassName: "bg-sky-100 text-sky-700",
  },
  {
    category: "Atletik",
    percentage: "%6–13",
    description: "Düzenli ve yoğun spor yapan kişilerde görülebilen aralık",
    badgeClassName: "bg-cyan-100 text-cyan-700",
  },
  {
    category: "Fitness",
    percentage: "%14–17",
    description: "Belirgin kas görünümüyle ilişkilendirilebilen genel aralık",
    badgeClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Ortalama",
    percentage: "%18–24",
    description: "Yetişkin erkeklerde yaygın görülebilen genel referans",
    badgeClassName: "bg-amber-100 text-amber-800",
  },
  {
    category: "Yüksek",
    percentage: "%25 ve üzeri",
    description: "Ek sağlık göstergeleriyle birlikte değerlendirilmelidir",
    badgeClassName: "bg-rose-100 text-rose-700",
  },
] as const;

const femaleBodyFatRanges = [
  {
    category: "Esansiyel yağ",
    percentage: "%10–13",
    description: "Temel fizyolojik ve hormonal işlevler için gerekli düzey",
    badgeClassName: "bg-sky-100 text-sky-700",
  },
  {
    category: "Atletik",
    percentage: "%14–20",
    description: "Düzenli ve yoğun spor yapan kişilerde görülebilen aralık",
    badgeClassName: "bg-cyan-100 text-cyan-700",
  },
  {
    category: "Fitness",
    percentage: "%21–24",
    description: "Aktif yaşam tarzıyla ilişkilendirilebilen genel aralık",
    badgeClassName: "bg-emerald-100 text-emerald-700",
  },
  {
    category: "Ortalama",
    percentage: "%25–31",
    description: "Yetişkin kadınlarda yaygın görülebilen genel referans",
    badgeClassName: "bg-amber-100 text-amber-800",
  },
  {
    category: "Yüksek",
    percentage: "%32 ve üzeri",
    description: "Ek sağlık göstergeleriyle birlikte değerlendirilmelidir",
    badgeClassName: "bg-rose-100 text-rose-700",
  },
] as const;

const calculationProcess = [
  {
    number: "01",
    title: "Kişisel bilgiler girilir",
    description:
      "Cinsiyet, boy, kilo ve gerekli çevre ölçüleri hesaplayıcıya girilir.",
  },
  {
    number: "02",
    title: "Ölçüler doğrulanır",
    description:
      "Girilen değerlerin matematiksel formül için kullanılabilir aralıkta olup olmadığı kontrol edilir.",
  },
  {
    number: "03",
    title: "Yağ oranı tahmin edilir",
    description:
      "Cinsiyete göre farklılaşan ABD Donanması çevre ölçümü yöntemi uygulanır.",
  },
  {
    number: "04",
    title: "Vücut kompozisyonu hesaplanır",
    description:
      "Kilo bilgisi kullanılarak yaklaşık yağ kütlesi ve yağsız vücut kütlesi bulunur.",
  },
  {
    number: "05",
    title: "Sonuç sınıflandırılır",
    description:
      "Tahmini oran, cinsiyete göre hazırlanan genel referans aralıklarıyla karşılaştırılır.",
  },
  {
    number: "06",
    title: "Değişim takip edilir",
    description:
      "Benzer koşullarda tekrarlanan ölçümlerle zaman içindeki genel eğilim incelenir.",
  },
] as const;

const comparisonMethods = [
  {
    name: "ABD Donanması yöntemi",
    method: "Çevre ölçümleri",
    accessibility: "Evde uygulanabilir",
    precision: "Yaklaşık tahmin",
    advantage:
      "Mezura dışında özel ekipman gerektirmez ve düzenli takip için pratiktir.",
    limitation:
      "Ölçüm noktaları ve mezura kullanımı sonucu belirgin biçimde etkileyebilir.",
    highlighted: true,
  },
  {
    name: "Biyoelektrik empedans",
    method: "Zayıf elektrik akımı",
    accessibility: "Akıllı tartı veya analiz cihazı",
    precision: "Cihaza göre değişken",
    advantage:
      "Hızlıdır ve yağ, su ile kas değerlerini birlikte gösterebilir.",
    limitation:
      "Sıvı tüketimi, yemek, egzersiz ve cihaz kalitesi sonucu etkileyebilir.",
    highlighted: false,
  },
  {
    name: "Deri kıvrım ölçümü",
    method: "Kaliper ile deri altı yağ",
    accessibility: "Eğitimli uygulayıcı önerilir",
    precision: "Uygulayıcı deneyimine bağlı",
    advantage:
      "Belirli bölgelerdeki deri altı yağ kalınlığının takibinde kullanılabilir.",
    limitation:
      "Yanlış bölge veya teknik kullanımı önemli ölçüm farklılıkları oluşturabilir.",
    highlighted: false,
  },
  {
    name: "DEXA taraması",
    method: "Düşük doz X ışını",
    accessibility: "Klinik veya görüntüleme merkezi",
    precision: "Daha ayrıntılı değerlendirme",
    advantage:
      "Yağ, yağsız doku ve kemik mineral yoğunluğu hakkında ayrıntılı bilgi sunar.",
    limitation:
      "Maliyetli olabilir ve her yerde kolayca erişilemeyebilir.",
    highlighted: false,
  },
] as const;

const consistencyRules = [
  {
    title: "Aynı saat",
    description:
      "Ölçümleri mümkün olduğunca günün benzer saatlerinde yapın.",
  },
  {
    title: "Aynı koşullar",
    description:
      "Yemek, egzersiz ve sıvı tüketimi bakımından benzer koşulları tercih edin.",
  },
  {
    title: "Aynı mezura",
    description:
      "Esneme veya işaret farklarını azaltmak için aynı ölçüm aracını kullanın.",
  },
  {
    title: "Aynı noktalar",
    description:
      "Boyun, bel ve kalça ölçümlerinde her seferinde aynı anatomik noktaları bulun.",
  },
  {
    title: "Birden fazla tekrar",
    description:
      "Ölçümü iki veya üç kez tekrarlayıp yakın değerlerin ortalamasını alın.",
  },
  {
    title: "Uzun dönemli takip",
    description:
      "Günlük küçük farklar yerine haftalar ve aylar içindeki eğilime odaklanın.",
  },
] as const;

const interpretationFactors = [
  {
    title: "Cinsiyet",
    description:
      "Kadın ve erkeklerin fizyolojik olarak gerekli yağ oranları ve genel referans aralıkları farklıdır.",
  },
  {
    title: "Yaş",
    description:
      "Yaş ilerledikçe kas kütlesi ve yağ dağılımı değişebileceği için sonuç farklı yorumlanabilir.",
  },
  {
    title: "Kas kütlesi",
    description:
      "Yüksek kas kütlesine sahip sporcularda standart çevre formülleri vücut kompozisyonunu tam yansıtmayabilir.",
  },
  {
    title: "Yağ dağılımı",
    description:
      "Toplam yağ yüzdesi aynı olsa bile yağın karın veya kalça çevresinde toplanması sağlık açısından farklı anlam taşıyabilir.",
  },
  {
    title: "Ölçüm tekniği",
    description:
      "Mezuranın konumu, gerginliği ve kişinin duruşu tahmini sonucu doğrudan etkiler.",
  },
  {
    title: "Sağlık geçmişi",
    description:
      "Hormonal durumlar, ilaç kullanımı, ödem ve kronik hastalıklar değerlendirmede dikkate alınmalıdır.",
  },
] as const;

const specialGroups = [
  "18 yaşından küçük çocuklar ve ergenler",
  "Hamile veya doğum sonrası dönemdeki kişiler",
  "Profesyonel vücut geliştirme sporcuları",
  "Çok yüksek kas kütlesine sahip kişiler",
  "Belirgin ödem veya sıvı tutulumu yaşayanlar",
  "Hızlı ve açıklanamayan kilo değişimi bulunanlar",
  "Yeme bozukluğu geçmişi olan kişiler",
  "Kronik hastalık veya hormonal problemi bulunanlar",
] as const;

const contentSections: CalculatorContentSection[] = [
  {
    title: "Vücut yağ oranı nedir?",
    paragraphs: [
      "Vücut yağ oranı, toplam vücut ağırlığının yüzde kaçının yağ dokusundan oluştuğunu gösteren tahmini bir vücut kompozisyonu değeridir.",
      "Toplam kilo tek başına ağırlığın ne kadarının yağ, kas, su veya kemik dokusundan oluştuğunu göstermez. Bu nedenle vücut yağ oranı, kilo değerlendirmesine ek bir bakış açısı sunabilir.",
      "Aynı boy ve kiloya sahip iki kişinin kas kütlesi ile yağ oranı birbirinden önemli ölçüde farklı olabilir. Sonuçlar yalnızca tartı değerine bakılarak yorumlanmamalıdır.",
    ],
  },
  {
    title: "Vücut yağ oranı nasıl hesaplanır?",
    paragraphs: [
      "Bu hesaplama aracında çevre ölçümlerine dayanan ABD Donanması yöntemi kullanılır. Yöntem, kolay uygulanabilmesi nedeniyle ev ortamındaki yaklaşık değerlendirmelerde yaygın olarak tercih edilir.",
      "Erkeklerde boy, boyun ve bel çevresi; kadınlarda ise boy, boyun, bel ve kalça çevresi kullanılır. Cinsiyete göre farklı matematiksel denklemler uygulanır.",
      "Kilo bilgisi yağ yüzdesinin temel formülünde zorunlu olmasa da tahmini yağ kütlesi ve yağsız vücut kütlesinin hesaplanabilmesi için kullanılır.",
    ],
  },
  {
    title: "ABD Donanması yöntemi nedir?",
    paragraphs: [
      "ABD Donanması yöntemi, belirli vücut çevreleri ile boy arasındaki matematiksel ilişkiyi kullanarak yaklaşık yağ oranı hesaplayan bir yöntemdir.",
      "Profesyonel görüntüleme veya laboratuvar cihazı gerektirmediği için pratiktir. Ancak sonuç ölçüm tekniğine, vücut yapısına ve kullanılan denklemin varsayımlarına bağlıdır.",
      "Bu nedenle hesaplanan oran kesin klinik değer olarak değil, benzer koşullarda yapılan ölçümleri takip etmeye yardımcı genel bir tahmin olarak değerlendirilmelidir.",
    ],
  },
  {
    title: "Erkeklerde hangi ölçüler kullanılır?",
    paragraphs: [
      "Erkekler için yapılan hesaplamada boy uzunluğu, boyun çevresi ve bel çevresi kullanılır.",
      "Bel çevresi genellikle göbek deliği hizasına yakın bölümden, karın içeri çekilmeden ölçülmelidir. Boyun çevresi ise gırtlağın hemen altından alınır.",
      "Bel ve boyun çevresi arasındaki fark formül açısından önemlidir. Bu nedenle ölçümlerin aynı birimde ve doğru noktadan alınması gerekir.",
    ],
    cards: [
      {
        title: "Boy",
        description:
          "Ayakkabısız, dik duruşta ve santimetre cinsinden girilmelidir.",
      },
      {
        title: "Boyun",
        description:
          "Gırtlağın hemen altından, mezura cildi sıkıştırmadan ölçülmelidir.",
      },
      {
        title: "Bel",
        description:
          "Karın gevşekken, mezura yere paralel olacak şekilde ölçülmelidir.",
      },
    ],
  },
  {
    title: "Kadınlarda hangi ölçüler kullanılır?",
    paragraphs: [
      "Kadınlar için yapılan hesaplamada boy uzunluğu, boyun çevresi, bel çevresi ve kalça çevresi kullanılır.",
      "Kalça çevresi, kalçanın en geniş bölümünden ve mezura yere paralel olacak şekilde ölçülmelidir.",
      "Bel ve kalça ölçüm noktalarının her takipte aynı seçilmesi, zaman içindeki değişimin daha tutarlı değerlendirilmesine yardımcı olur.",
    ],
    cards: [
      {
        title: "Boy",
        description:
          "Ayakkabısız ve dik duruşta mümkün olduğunca doğru ölçülmelidir.",
      },
      {
        title: "Boyun",
        description:
          "Gırtlağın altından, rahat ve doğal pozisyonda ölçülmelidir.",
      },
      {
        title: "Bel",
        description:
          "Doğal bel hattından, nefes normal durumdayken ölçülmelidir.",
      },
      {
        title: "Kalça",
        description:
          "Kalçanın en geniş bölümünden yatay biçimde ölçülmelidir.",
      },
    ],
  },
  {
    title: "Yağ kütlesi nasıl hesaplanır?",
    paragraphs: [
      "Tahmini yağ kütlesi, toplam vücut ağırlığının hesaplanan yağ yüzdesiyle çarpılması sonucunda bulunur.",
      "Örneğin 80 kilogram ağırlığında ve tahmini yağ oranı yüzde 20 olan bir kişinin yaklaşık yağ kütlesi 16 kilogramdır.",
      "Bu değer doğrudan ölçülen bir doku ağırlığı değil, hesaplanan yağ yüzdesine dayanan matematiksel tahmindir.",
    ],
    formula: "Yağ kütlesi = Vücut ağırlığı × Yağ oranı ÷ 100",
  },
  {
    title: "Yağsız vücut kütlesi nasıl hesaplanır?",
    paragraphs: [
      "Yağsız vücut kütlesi, toplam vücut ağırlığından tahmini yağ kütlesinin çıkarılmasıyla bulunur.",
      "Yağsız kütle yalnızca kaslardan oluşmaz. Kemikler, organlar, vücut suyu ve diğer yağ dışı dokular da bu değere dahildir.",
      "Bu nedenle yağsız kütle sonucu doğrudan kas kütlesi olarak yorumlanmamalıdır.",
    ],
    formula: "Yağsız vücut kütlesi = Toplam kilo − Yağ kütlesi",
  },
  {
    title: "İdeal vücut yağ oranı kaç olmalıdır?",
    paragraphs: [
      "Uygun yağ oranı cinsiyet, yaş, sağlık durumu, spor geçmişi ve kişisel hedeflere göre değişebilir.",
      "Kadınların temel hormonal ve fizyolojik işlevleri için gerekli esansiyel yağ oranı erkeklerden doğal olarak daha yüksektir.",
      "Atletik aralıklar herkes için gerekli veya sürdürülebilir hedefler değildir. Çok düşük yağ oranı da sağlık açısından risk oluşturabilir.",
    ],
  },
  {
    title: "Vücut yağ oranı neden kilodan daha farklı bilgi verir?",
    paragraphs: [
      "Tartı yalnızca vücudun toplam ağırlığını gösterir. Bu ağırlığın hangi dokulardan oluştuğunu açıklamaz.",
      "Örneğin aynı kiloya sahip iki kişiden biri daha yüksek kas kütlesine, diğeri daha yüksek yağ kütlesine sahip olabilir.",
      "Vücut yağ oranı bu farkı genel olarak değerlendirmeye yardımcı olsa da kullanılan tahmin yönteminin hata payı bulunduğu unutulmamalıdır.",
    ],
  },
  {
    title: "Vücut yağ oranı ile VKİ arasındaki fark nedir?",
    paragraphs: [
      "VKİ, toplam kilonun boyun karesine bölünmesiyle hesaplanır ve yağ ile kas dokusunu birbirinden ayırmaz.",
      "Vücut yağ oranı ise toplam ağırlığın ne kadarının yağ dokusundan oluştuğunu tahmin etmeye çalışır.",
      "Her iki yöntem de tek başına tanı aracı değildir. Bel çevresi, kan değerleri, fiziksel kapasite ve sağlık geçmişi gibi ek bilgilerle birlikte değerlendirilmelidir.",
    ],
  },
  {
    title: "Sonuç ne kadar doğrudur?",
    paragraphs: [
      "Çevre ölçümüne dayanan yöntemler profesyonel klinik ölçümler kadar kesin değildir. Sonuçlar ölçümlerin doğru alınmasına ve kişinin vücut yapısına bağlıdır.",
      "Mezuranın birkaç santimetre farklı konumlandırılması bile hesaplanan oranı değiştirebilir.",
      "Bu nedenle tek bir ölçüm sonucundan çok, aynı yöntemle ve benzer koşullarda yapılan ölçümlerin zaman içindeki eğilimi daha anlamlı olabilir.",
    ],
  },
  {
    title: "Vücut yağ oranı nasıl düşürülür?",
    paragraphs: [
      "Vücut yağ oranını düşürmek için uzun vadede enerji dengesinin, beslenme kalitesinin, fiziksel aktivitenin, uyku düzeninin ve stres yönetiminin birlikte ele alınması gerekir.",
      "Amaç yalnızca hızlı kilo kaybetmek değil, mümkün olduğunca kas kütlesini korurken yağ kütlesini azaltmaktır.",
      "Çok düşük kalorili veya kontrolsüz programlar kas kaybına ve beslenme yetersizliklerine neden olabilir. Kişisel plan için doktor veya diyetisyen desteği alınmalıdır.",
    ],
  },
  {
    title: "Çok düşük yağ oranı sağlıklı mıdır?",
    paragraphs: [
      "Hayır. Yağ dokusu hormon üretimi, organların korunması, enerji depolanması ve vücut sıcaklığının düzenlenmesi gibi önemli görevler üstlenir.",
      "Özellikle kadınlarda aşırı düşük yağ oranları adet düzensizliği, hormonal bozukluklar ve kemik sağlığı sorunlarıyla ilişkilendirilebilir.",
      "Profesyonel sporcularda yarışma döneminde görülen düşük oranlar, toplumun geneli için uygun veya sürdürülebilir sağlık hedefleri değildir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Vücut yağ oranı nedir?",
    answer:
      "Vücut yağ oranı, toplam vücut ağırlığının yüzde kaçının yağ dokusundan oluştuğunu gösteren tahmini bir değerdir.",
  },
  {
    question: "Vücut yağ oranı nasıl hesaplanır?",
    answer:
      "Bu araçta çevre ölçümlerine dayanan ABD Donanması yöntemi kullanılır. Erkeklerde boy, boyun ve bel; kadınlarda boy, boyun, bel ve kalça ölçüleri değerlendirilir.",
  },
  {
    question: "ABD Donanması yöntemi güvenilir midir?",
    answer:
      "Ev ortamında kullanılabilecek pratik bir tahmin yöntemidir ancak klinik veya profesyonel ölçüm cihazları kadar kesin değildir.",
  },
  {
    question: "İdeal yağ oranı kaç olmalıdır?",
    answer:
      "Uygun aralık cinsiyet, yaş, sağlık durumu ve fiziksel aktivite düzeyine göre değişir. Tek bir oran herkes için ideal kabul edilemez.",
  },
  {
    question: "Kadın ve erkek yağ oranları neden farklıdır?",
    answer:
      "Kadınların hormonal ve üreme sistemiyle bağlantılı fizyolojik ihtiyaçları nedeniyle gerekli esansiyel yağ oranı erkeklere göre daha yüksektir.",
  },
  {
    question: "Bel çevresi nereden ölçülmelidir?",
    answer:
      "Erkeklerde genellikle göbek deliği hizasına yakın bölümden, kadınlarda ise doğal bel hattından ölçülür. Karın içeri çekilmemeli ve mezura yere paralel olmalıdır.",
  },
  {
    question: "Boyun çevresi nereden ölçülmelidir?",
    answer:
      "Boyun çevresi gırtlağın hemen altından, mezura cildi sıkıştırmadan ve hafif aşağı eğimli biçimde ölçülmelidir.",
  },
  {
    question: "Kalça çevresi nasıl ölçülür?",
    answer:
      "Kalça çevresi, ayaklar birleşik durumdayken kalçanın en geniş bölümünden ve mezura yere paralel olacak şekilde ölçülür.",
  },
  {
    question: "Ölçüleri kıyafet üzerinden alabilir miyim?",
    answer:
      "En tutarlı sonuç için ölçümlerin ince kıyafet üzerinden veya doğrudan cilt üzerinden alınması önerilir. Kalın kıyafet sonucu etkileyebilir.",
  },
  {
    question: "Ölçüm sırasında nefes tutulmalı mı?",
    answer:
      "Hayır. Ölçüm doğal nefes alışverişi sırasında yapılmalı, karın içeri çekilmemeli veya şişirilmemelidir.",
  },
  {
    question: "Günün farklı saatlerinde sonuç değişir mi?",
    answer:
      "Evet. Yemek, sıvı tüketimi, egzersiz ve şişkinlik çevre ölçülerini etkileyebilir. Takip ölçümlerinin benzer koşullarda yapılması önerilir.",
  },
  {
    question: "Yağ kütlesi nasıl hesaplanır?",
    answer:
      "Toplam vücut ağırlığı, hesaplanan yağ oranıyla çarpılıp 100'e bölünerek yaklaşık yağ kütlesi bulunur.",
  },
  {
    question: "Yağsız vücut kütlesi kas miktarı mıdır?",
    answer:
      "Hayır. Yağsız kütle; kasların yanında kemik, organ, vücut suyu ve diğer yağ dışı dokuları da içerir.",
  },
  {
    question: "Kaslı kişilerde sonuç doğru çıkar mı?",
    answer:
      "Yüksek kas kütlesine sahip kişilerde çevre ölçümüne dayalı formüller gerçek vücut kompozisyonunu tam olarak yansıtmayabilir.",
  },
  {
    question: "Vücut yağ oranı ile VKİ aynı şey midir?",
    answer:
      "Hayır. VKİ yalnızca boy ve kilo ilişkisini değerlendirir. Vücut yağ oranı ise ağırlığın yağ dokusundan oluşan kısmını tahmin etmeye çalışır.",
  },
  {
    question: "Akıllı tartı mı, mezura yöntemi mi daha doğrudur?",
    answer:
      "Her iki yöntemin de hata payı vardır. Akıllı tartılar sıvı durumundan, mezura yöntemi ise ölçüm tekniğinden etkilenebilir.",
  },
  {
    question: "DEXA ölçümü nedir?",
    answer:
      "DEXA, yağ, yağsız doku ve kemik mineral yoğunluğu hakkında daha ayrıntılı bilgi sunabilen görüntüleme yöntemlerinden biridir.",
  },
  {
    question: "Yağ oranımı ne sıklıkla ölçmeliyim?",
    answer:
      "Günlük ölçüm yerine birkaç haftada bir, benzer koşullarda yapılan ölçümler daha anlamlı bir değişim takibi sağlayabilir.",
  },
  {
    question: "Vücut yağ oranı nasıl düşürülür?",
    answer:
      "Dengeli beslenme, uygun enerji dengesi, düzenli direnç ve kardiyo egzersizleri, yeterli uyku ve sürdürülebilir alışkanlıklar birlikte ele alınmalıdır.",
  },
  {
    question: "Çok düşük yağ oranı sağlıklı mıdır?",
    answer:
      "Hayır. Yağ dokusu hormonlar, organ koruması ve enerji depolanması için gereklidir. Aşırı düşük oranlar sağlık sorunlarına yol açabilir.",
  },
  {
    question: "Çocuklarda bu hesaplama kullanılabilir mi?",
    answer:
      "Bu formül yetişkinler için genel tahmin sunar. Çocuklar ve ergenler büyüme eğrileri ve yaşa özel yöntemlerle değerlendirilmelidir.",
  },
  {
    question: "Hamilelikte vücut yağ oranı hesaplanabilir mi?",
    answer:
      "Gebelik sırasında standart çevre formülleri uygun değerlendirme sağlamayabilir. Takip sağlık uzmanı tarafından yapılmalıdır.",
  },
  {
    question: "Sonuç tıbbi teşhis yerine geçer mi?",
    answer:
      "Hayır. Sonuç yalnızca genel bilgilendirme amaçlı yaklaşık bir tahmindir ve tıbbi muayene veya profesyonel değerlendirme yerine geçmez.",
  },
];

export default function VucutYagOraniHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç, çevre ölçümlerine dayanan matematiksel bir yöntemle yaklaşık vücut yağ oranı hesaplar. Sonuç; ölçüm tekniği, yaş, kas kütlesi, vücut yapısı, sıvı durumu ve kişisel sağlık özelliklerinden etkilenebilir. Tıbbi tanı, tedavi veya profesyonel vücut kompozisyonu değerlendirmesi yerine geçmez. Kişisel sağlık hedefleri için doktor, diyetisyen veya alanında uzman bir sağlık profesyoneline danışınız."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-12 -z-10 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-40 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />

        <section
          aria-labelledby="body-fat-calculator-heading"
          className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/70 p-1 shadow-[0_24px_70px_-35px_rgba(5,150,105,0.35)]"
        >
          <div className="rounded-[1.75rem] border border-white/80 bg-white/90 p-5 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-6 border-b border-slate-200 pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Vücut kompozisyonu analizi
                </div>

                <h2
                  id="body-fat-calculator-heading"
                  className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
                >
                  Tahmini vücut yağ oranınızı hesaplayın
                </h2>

                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  Boy, kilo ve çevre ölçülerinizi girerek ABD Donanması
                  yöntemine göre yaklaşık yağ oranınızı, yağ kütlenizi ve
                  yağsız vücut kütlenizi görüntüleyin.
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Anlık</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Sonuç güncelleme
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">3</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Temel sonuç
                  </p>
                </article>

                <article className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Ücretsiz</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Kayıt gerekmez
                  </p>
                </article>
              </div>
            </div>

            <BodyFatCalculator />
          </div>
        </section>
      </div>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-emerald-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Doğru ölçüm rehberi
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Vücut çevresi ölçüleri nasıl alınır?
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Ölçüm sonucu mezuranın konumundan ve ne kadar sıkıldığından
            etkilenebilir. Her ölçümü doğal duruşta ve aynı yöntemle yapın.
          </p>
        </div>

        <div className="grid gap-5 p-6 md:grid-cols-2 md:p-8">
          {measurementSteps.map((step) => (
            <article
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50 hover:shadow-lg"
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

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-black uppercase tracking-[0.13em] text-slate-500">
                      Doğru konum
                    </p>

                    <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
                      {step.position}
                    </p>
                  </div>

                  <p className="mt-3 text-xs font-bold leading-5 text-emerald-700">
                    {step.note}
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
            <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
              Örnek vücut kompozisyonu
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
              80 kilogram ve %20 yağ oranı örneği
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Toplam ağırlığı <strong className="text-white">80 kg</strong> ve
              tahmini vücut yağ oranı{" "}
              <strong className="text-white">%20</strong> olan bir kişi için
              yaklaşık yağ ve yağsız kütle aşağıdaki gibi hesaplanır.
            </p>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Hesaplama
              </p>

              <p className="mt-3 font-mono text-sm font-bold leading-7 text-emerald-300">
                80 × 20 ÷ 100 = 16 kg yağ kütlesi
              </p>

              <p className="mt-2 font-mono text-sm font-bold leading-7 text-cyan-300">
                80 − 16 = 64 kg yağsız vücut kütlesi
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Toplam ağırlık
              </p>

              <p className="mt-3 text-3xl font-black">80 kg</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Tartıda görülen toplam vücut ağırlığı
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-400">
                Yağ oranı
              </p>

              <p className="mt-3 text-3xl font-black">%20</p>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Çevre ölçümlerinden elde edilen tahmin
              </p>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-5 shadow-lg shadow-orange-950/20">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-100">
                Yağ kütlesi
              </p>

              <p className="mt-3 text-3xl font-black">16 kg</p>

              <p className="mt-2 text-sm leading-6 text-amber-50/80">
                Tahmini toplam yağ dokusu
              </p>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 shadow-lg shadow-emerald-950/20">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-100">
                Yağsız kütle
              </p>

              <p className="mt-3 text-3xl font-black">64 kg</p>

              <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                Kas, kemik, su ve diğer dokular
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Sonuçların bileşenleri
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Vücut kompozisyonu hangi değerlerden oluşur?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Hesaplayıcı yalnızca yağ yüzdesini değil, kilo bilginiz üzerinden
            yaklaşık yağ kütlesi ve yağsız vücut kütlesini de gösterir.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {bodyCompositionItems.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-emerald-200 hover:bg-emerald-50/40"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-sm font-bold leading-6 text-emerald-700">
                      {item.example}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-cyan-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Genel sınıflandırma
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Cinsiyete göre vücut yağ oranı aralıkları
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Aşağıdaki aralıklar yetişkinler için genel referans niteliğindedir.
            Yaş, sağlık durumu ve spor geçmişi değerlendirmeyi değiştirebilir.
          </p>
        </div>

        <div className="grid gap-6 p-6 xl:grid-cols-2 md:p-8">
          <article className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="border-b border-slate-200 bg-sky-50 px-5 py-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-sky-700">
                Erkekler için
              </p>

              <h3 className="mt-2 text-xl font-black text-slate-950">
                Genel yağ oranı referansları
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              {maleBodyFatRanges.map((item) => (
                <div
                  key={item.category}
                  className="grid gap-3 p-5 transition hover:bg-slate-50 sm:grid-cols-[0.8fr_0.55fr_1.65fr] sm:items-center"
                >
                  <p className="font-black text-slate-950">{item.category}</p>

                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${item.badgeClassName}`}
                    >
                      {item.percentage}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="overflow-hidden rounded-3xl border border-slate-200">
            <div className="border-b border-slate-200 bg-rose-50 px-5 py-5">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-rose-700">
                Kadınlar için
              </p>

              <h3 className="mt-2 text-xl font-black text-slate-950">
                Genel yağ oranı referansları
              </h3>
            </div>

            <div className="divide-y divide-slate-100">
              {femaleBodyFatRanges.map((item) => (
                <div
                  key={item.category}
                  className="grid gap-3 p-5 transition hover:bg-slate-50 sm:grid-cols-[0.8fr_0.55fr_1.65fr] sm:items-center"
                >
                  <p className="font-black text-slate-950">{item.category}</p>

                  <div>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-black ${item.badgeClassName}`}
                    >
                      {item.percentage}
                    </span>
                  </div>

                  <p className="text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="border-t border-slate-200 bg-amber-50 px-6 py-5 md:px-8">
          <p className="text-sm leading-7 text-amber-900">
            <strong>Önemli:</strong> “Atletik” veya “fitness” aralıkları herkes
            için gerekli sağlık hedefleri değildir. Çok düşük yağ oranı da
            hormonal ve metabolik sorunlara neden olabilir.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Hesaplama akışı
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Sonuç adım adım nasıl oluşturulur?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Girdiğiniz ölçüler doğrulanır, cinsiyete uygun denklem uygulanır ve
            hesaplanan değer genel referanslarla karşılaştırılır.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {calculationProcess.map((step) => (
            <article
              key={step.number}
              className="group rounded-3xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:bg-emerald-50/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-black text-white">
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
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-7 md:px-8">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Yöntem karşılaştırması
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Vücut yağ oranı ölçüm yöntemleri
          </h2>

          <p className="mt-3 max-w-4xl leading-7 text-slate-600">
            Her yöntemin erişilebilirliği, maliyeti, kullanım kolaylığı ve hata
            kaynakları farklıdır.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1050px] border-collapse text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-white">
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8">
                  Yöntem
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Ölçüm biçimi
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Erişim
                </th>
                <th className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  Sonuç niteliği
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
              {comparisonMethods.map((method) => (
                <tr
                  key={method.name}
                  className={`transition ${
                    method.highlighted
                      ? "bg-emerald-50/70"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <td className="px-6 py-5 md:px-8">
                    <div className="flex items-center gap-3">
                      <p className="font-black text-slate-950">{method.name}</p>

                      {method.highlighted && (
                        <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black text-emerald-700">
                          Bu araç
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                    {method.method}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600">
                    {method.accessibility}
                  </td>

                  <td className="px-6 py-5 text-sm font-semibold text-slate-700">
                    {method.precision}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600">
                    {method.advantage}
                  </td>

                  <td className="px-6 py-5 text-sm leading-6 text-slate-600 md:px-8">
                    {method.limitation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-amber-50 p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-rose-600">
            Ölçüm hataları
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Sonucu değiştirebilecek yaygın hatalar
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Küçük ölçüm farklılıkları hesaplanan yağ yüzdesini değiştirebilir.
            Daha tutarlı takip için aşağıdaki hatalardan kaçının.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {measurementMistakes.map((mistake, index) => (
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

      <section className="mt-10 rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="inline-flex rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-emerald-700">
              Tutarlı takip
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Ölçümleri karşılaştırılabilir hale getirin
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Günlük küçük değişiklikler yerine aynı koşullarda yapılan
              ölçümlerin haftalar ve aylar içindeki genel eğilimine odaklanın.
            </p>

            <div className="mt-6 rounded-3xl border border-emerald-200 bg-white/80 p-5 shadow-sm">
              <p className="font-black text-emerald-900">
                Tek ölçüm yerine ortalama kullanın
              </p>

              <p className="mt-2 text-sm leading-7 text-emerald-800">
                Her çevre ölçümünü iki veya üç kez tekrarlayın. Birbirine yakın
                sonuçların ortalamasını hesaplayıcıya girmek ölçüm kaynaklı
                sapmaları azaltabilir.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {consistencyRules.map((rule, index) => (
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

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-600">
            Kişisel değerlendirme
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Sonucun yorumunu etkileyen faktörler
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Aynı yağ oranı sonucu iki farklı kişi için aynı sağlık anlamını
            taşımayabilir.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {interpretationFactors.map((factor, index) => (
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

      <section className="mt-10 rounded-[2rem] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-rose-50 p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-amber-800">
              Özel değerlendirme
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              Standart formülü dikkatli kullanması gereken kişiler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki gruplarda çevre ölçümüne dayanan yetişkin formülleri
              vücut kompozisyonunu yeterli doğrulukta yansıtmayabilir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {specialGroups.map((group) => (
              <div
                key={group}
                className="flex items-start gap-3 rounded-2xl border border-white bg-white/80 p-4 shadow-sm"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-black text-amber-800">
                  !
                </span>

                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {group}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.8)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-300">
              Dengeli vücut kompozisyonu
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
              Hedefiniz yalnızca tartıdaki sayıyı düşürmek olmasın
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              Sağlıklı kilo yönetimi mümkün olduğunca kas kütlesini korumayı,
              yeterli beslenmeyi ve uzun vadede sürdürülebilen bir yaşam
              düzenini desteklemelidir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">01</p>
              <p className="mt-2 text-sm font-black text-white">
                Dengeli beslenme
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">02</p>
              <p className="mt-2 text-sm font-black text-white">
                Direnç egzersizi
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">03</p>
              <p className="mt-2 text-sm font-black text-white">
                Yeterli uyku
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">04</p>
              <p className="mt-2 text-sm font-black text-white">
                Uzman desteği
              </p>
            </article>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  );
}