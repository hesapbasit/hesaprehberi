import {
  Activity,
  Droplets,
  Flame,
  HeartPulse,
  Scale,
} from "lucide-react";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
  type CalculatorRelatedItem,
} from "@/components/calculators/CalculatorLayout";
import PregnancyCalculator from "@/components/calculators/PregnancyCalculator";

import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gebelik-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi data/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Gebelik hesaplama nasıl yapılır?",
    answer: "Gebelik hesaplaması çoğunlukla son adet tarihinin ilk günü esas alınarak yapılır. Bu tarihe 280 gün, yani 40 hafta eklenerek tahmini doğum tarihi bulunur. Ortalama adet döngüsü 28 günden farklıysa sonuç döngü farkına göre ayarlanabilir.",
  },
  {
    question: "Gebelik haftası neden son adet tarihinden başlatılır?",
    answer: "Döllenme günü çoğu zaman kesin bilinmediği için klinik uygulamada son adet tarihinin ilk günü başlangıç kabul edilir. Bu nedenle gebelik yaşı, gerçek döllenme yaşından yaklaşık iki hafta daha ileri görünür.",
  },
  {
    question: "Tahmini doğum tarihi kesin midir?",
    answer: "Hayır. Tahmini doğum tarihi yaklaşık bir referanstır. Doğum bu tarihten önce veya sonra gerçekleşebilir. Doktor değerlendirmesi ve erken dönem ultrason ölçümleri tarihlendirmeyi daha doğru hâle getirebilir.",
  },
  {
    question: "Adet döngüsü 28 günden farklıysa hesaplama değişir mi?",
    answer: "Evet. Döngü 28 günden uzunsa tahmini tarih genellikle ileri, daha kısaysa geri kaydırılır.",
  },
  {
    question: "Düzensiz adet görenlerde hesaplama güvenilir midir?",
    answer: "Düzensiz döngülerde son adet tarihine dayalı tahmin daha fazla sapma gösterebilir. Bu durumda doktor muayenesi ve ultrason ölçümleri daha önemlidir.",
  },
  {
    question: "Gebelik haftası ile bebeğin yaşı aynı şey midir?",
    answer: "Hayır. Gebelik haftası son adet tarihinden itibaren sayılır. Embriyonik veya fetal yaş döllenmeden itibaren hesaplandığı için çoğu zaman yaklaşık iki hafta daha küçüktür.",
  },
  {
    question: "Döllenme tarihine göre gebelik hesaplanabilir mi?",
    answer: "Tahmini döllenme tarihi biliniyorsa bu tarihin yaklaşık 14 gün öncesi klinik gebelik başlangıcı kabul edilebilir ve döllenme tarihine yaklaşık 266 gün eklenerek tahmini doğum tarihi bulunabilir.",
  },
  {
    question: "Ultrason tarihi neden son adet tarihinden farklı çıkabilir?",
    answer: "Geç yumurtlama, düzensiz döngü, son adet tarihinin yanlış hatırlanması veya ölçüm farklılıkları nedeniyle ultrasonla belirlenen gebelik yaşı farklı olabilir.",
  },
  {
    question: "Trimester dönemleri nasıl ayrılır?",
    answer: "Genel kullanımda birinci trimester ilk 13 haftayı, ikinci trimester 14 ile 27. haftaları ve üçüncü trimester 28. haftadan doğuma kadar olan dönemi ifade eder.",
  },
  {
    question: "Gebelikte kaç ay kaç hafta olarak kabul edilir?",
    answer: "Ayların uzunluğu farklı olduğu için haftayı aya çevirmek yaklaşık bir işlemdir. Gebelik takibinde en güvenilir ifade hafta ile gündür.",
  },
  {
    question: "40 haftalık gebelik kaç gündür?",
    answer: "Standart hesaplamada 40 hafta 280 gündür ve bu süre son adet tarihinin ilk gününden itibaren sayılır.",
  },
  {
    question: "Tahmini doğum tarihi geçerse ne yapılmalıdır?",
    answer: "Tahmini tarihin geçmesi tek başına acil durum anlamına gelmez; ancak takip planı doktor tarafından belirlenmelidir.",
  },
  {
    question: "Son adet tarihimi hatırlamıyorsam ne yapmalıyım?",
    answer: "Son adet tarihi bilinmiyorsa hesaplayıcı kesin sonuç veremez. Doktor muayenesi ve ultrasonla gebelik haftası tahmin edilebilir.",
  },
  {
    question: "IVF gebeliklerinde aynı hesaplama kullanılır mı?",
    answer: "IVF gebeliklerinde embriyo transfer tarihi ve embriyonun yaşı dikkate alınır. Klinik merkezin verdiği tarih esas alınmalıdır.",
  },
  {
    question: "Dondurulmuş embriyo transferinde tarih nasıl belirlenir?",
    answer: "Embriyo yaşı ve transfer günü değerlendirilir. Tedaviyi yürüten merkezin verdiği gebelik haftası ve doğum tarihi kullanılmalıdır.",
  },
  {
    question: "Çoğul gebelikte tahmini doğum tarihi değişir mi?",
    answer: "Temel tarihlendirme benzer olsa da çoğul gebeliklerin takip ve doğum planı farklı olabilir.",
  },
  {
    question: "Gebelik testi pozitif çıkar çıkmaz kaç haftalık olunur?",
    answer: "Adet gecikmesi civarında alınan pozitif sonuç çoğunlukla yaklaşık dört haftalık klinik gebelik yaşıyla ilişkilidir; kesin değerlendirme doktor tarafından yapılır.",
  },
  {
    question: "Gebelik haftasında gün bilgisi neden önemlidir?",
    answer: "Örneğin 12 hafta 4 gün, 12 tam haftanın tamamlandığını ve 13. haftanın içinde olunduğunu gösterir.",
  },
  {
    question: "Gebelik ayı neden farklı hesaplanıyor?",
    answer: "Takvim ayları eşit uzunlukta olmadığı için haftayı aya dönüştüren tablolar farklı sonuç verebilir.",
  },
  {
    question: "Hesaplayıcı tıbbi tanı koyar mı?",
    answer: "Hayır. Araç yalnızca girilen tarihler üzerinden matematiksel tahmin üretir.",
  },
  {
    question: "Kanama veya şiddetli ağrı varsa sonuç yeterli midir?",
    answer: "Hayır. Kanama, şiddetli karın ağrısı, yüksek ateş, bayılma veya ciddi baş ağrısında uygun sağlık kuruluşuna başvurulmalıdır.",
  },
  {
    question: "Gebelikte ilk doktor kontrolü ne zaman yapılmalıdır?",
    answer: "Pozitif gebelik testi sonrasında uygun takip zamanını belirlemek için sağlık uzmanıyla iletişime geçmek gerekir.",
  },
  {
    question: "Sonuç neden başka sitelerden farklı olabilir?",
    answer: "Döngü uzunluğu, saat dilimi, tarih yuvarlama yöntemi ve trimester sınırları farklı olabilir.",
  },
  {
    question: "Sezaryen tarihi bu araçla belirlenebilir mi?",
    answer: "Hayır. Planlı doğum veya sezaryen tarihi yalnızca doktor tarafından belirlenmelidir.",
  },
  {
    question: "Gebelik başlangıç tarihi ile son adet tarihi aynı mıdır?",
    answer: "Klinik hesaplamada başlangıç olarak son adet tarihinin ilk günü kullanılır; biyolojik döllenme çoğunlukla yaklaşık iki hafta sonra gerçekleşir.",
  },
  {
    question: "Tahmini döllenme tarihi kesin bulunabilir mi?",
    answer: "Hayır. Yumurtlama ve döllenme zamanı kişiden kişiye değişebilir.",
  },
  {
    question: "Araç ücretsiz midir?",
    answer: "Evet. HesapRehberi gebelik hesaplama aracı ücretsizdir.",
  },
  {
    question: "Sonucu doktoruma göstermeli miyim?",
    answer: "Sonucu bilgi amaçlı saklayabilirsiniz; ancak doktorunuz tıbbi öykü, muayene ve ultrason bulgularını esas alır.",
  },
];

const contentSections: CalculatorContentSection[] = [
  {
    title: "Gebelik Hesaplama Nedir?",
    paragraphs: [
      "Gebelik hesaplama; son adet tarihi, tahmini döllenme tarihi veya sağlık uzmanı tarafından verilen tahmini doğum tarihi kullanılarak gebeliğin kaç hafta ve kaç günlük olduğunun yaklaşık olarak belirlenmesidir.",
      "Gebelik takibinde ay yerine hafta ve gün kullanılması daha yaygındır. Takvim aylarının eşit uzunlukta olmaması bunun temel nedenidir.",
      "HesapRehberi aracı tahmini doğum tarihi, gebelik haftası, trimester, kalan gün ve önemli dönem başlangıçlarını gösterir.",
    ],
    cards: [
      {
        title: "Gebelik haftası",
        description: "Tamamlanan hafta ve gün sayısını gösterir.",
      },
      {
        title: "Tahmini doğum tarihi",
        description: "Standart 280 günlük süre ve döngü düzeltmesiyle hesaplanır.",
      },
      {
        title: "Trimester bilgisi",
        description: "Bulunduğunuz dönemi gösterir.",
      },
    ],
  },
  {
    title: "Gebelik Haftası Nasıl Hesaplanır?",
    paragraphs: [
      "Klinik gebelik yaşı çoğunlukla son adet tarihinin ilk gününden başlatılır.",
      "Son adet tarihinden hesaplama gününe kadar geçen toplam gün sayısı yediye bölünür.",
      "Örneğin 87 gün geçmişse 12 tam hafta ve 3 gün tamamlanmıştır.",
    ],
    formula: "Gebelik haftası = Son adet tarihinden itibaren geçen toplam gün ÷ 7",
  },
  {
    title: "Son Adet Tarihine Göre Hesaplama",
    paragraphs: [
      "En yaygın yöntem son adet tarihinin ilk gününü kullanmaktır.",
      "Ortalama 28 günlük düzenli döngüde bu tarihe 280 gün eklenir.",
      "Adet kanamasının bittiği gün değil, başladığı ilk gün girilmelidir.",
    ],
    formula: "Tahmini doğum tarihi = Son adet tarihinin ilk günü + 280 gün",
  },
  {
    title: "Naegele Yöntemi",
    paragraphs: [
      "Naegele yöntemi tahmini doğum tarihini son adet tarihinden hesaplayan geleneksel yaklaşımdır.",
      "Son adet tarihine yedi gün eklenir, üç ay çıkarılır ve bir yıl eklenir.",
      "Bu yöntem 28 günlük düzenli döngüyü varsayar.",
    ],
    formula: "Son adet tarihi + 7 gün − 3 ay + 1 yıl",
  },
  {
    title: "Adet Döngüsü Uzunluğunun Etkisi",
    paragraphs: [
      "Standart hesap 28 günlük döngüyü temel alır.",
      "Döngü daha uzunsa tahmini doğum tarihi ileri, daha kısaysa geri kayabilir.",
      "Düzensiz döngülerde tıbbi tarihlendirme daha değerlidir.",
    ],
    formula: "Düzeltilmiş tarih = Son adet tarihi + 280 gün + (Döngü uzunluğu − 28)",
  },
  {
    title: "Döllenme Tarihine Göre Hesaplama",
    paragraphs: [
      "Tahmini döllenme tarihi biliniyorsa klinik başlangıç yaklaşık 14 gün önce kabul edilebilir.",
      "Tahmini doğum tarihi için döllenme tarihine yaklaşık 266 gün eklenir.",
      "Doğal gebeliklerde döllenme günü çoğu zaman kesin bilinmez.",
    ],
    formula: "Tahmini doğum tarihi = Tahmini döllenme tarihi + 266 gün",
  },
  {
    title: "Tahmini Doğum Tarihinden Hafta Bulma",
    paragraphs: [
      "Doktorun verdiği tahmini doğum tarihi biliniyorsa bu tarihten 280 gün geriye gidilebilir.",
      "Başlangıç ile bugünün tarihi arasındaki fark mevcut gebelik haftasını verir.",
      "Bu yöntem son adet tarihi bilinmediğinde yararlı olabilir.",
    ],
    formula: "Tahmini gebelik başlangıcı = Tahmini doğum tarihi − 280 gün",
  },
  {
    title: "Gebelik Haftası ve Ay Farkı",
    paragraphs: [
      "Bir takvim ayı tam olarak dört hafta değildir.",
      "Bu nedenle haftadan aya dönüşüm yaklaşık sonuç verir.",
      "Kontroller için hafta ve gün bilgisi esas alınmalıdır.",
    ],
    cards: [
      {
        title: "1–4. haftalar",
        description: "Yaklaşık birinci ay.",
      },
      {
        title: "5–8. haftalar",
        description: "Yaklaşık ikinci ay.",
      },
      {
        title: "9–13. haftalar",
        description: "Yaklaşık üçüncü ay.",
      },
    ],
  },
  {
    title: "Trimester Dönemleri",
    paragraphs: [
      "Gebelik üç ana döneme ayrılır.",
      "Birinci trimester erken dönem, ikinci trimester orta dönem, üçüncü trimester doğuma hazırlık dönemidir.",
      "Sınırlar kaynaklara göre küçük farklılık gösterebilir.",
    ],
    cards: [
      {
        title: "1. trimester",
        description: "Başlangıçtan 13. haftanın sonuna kadar.",
      },
      {
        title: "2. trimester",
        description: "14 ile 27. haftalar arası.",
      },
      {
        title: "3. trimester",
        description: "28. haftadan doğuma kadar.",
      },
    ],
  },
  {
    title: "Tahmini Doğum Tarihinin Güvenilirliği",
    paragraphs: [
      "Tahmini doğum tarihi kesin gün değil, yaklaşık referanstır.",
      "Son adet tarihi ve erken ultrason uyumluysa tahmin daha güvenilir olabilir.",
      "Gerçek doğum tarihi önce veya sonra olabilir.",
    ],
  },
  {
    title: "Ultrasonla Tarihlendirme",
    paragraphs: [
      "Ultrason gebelik haftasının değerlendirilmesinde önemli klinik araçtır.",
      "Son adet tarihi ile ultrason farklıysa sağlık uzmanı tüm verileri birlikte değerlendirir.",
      "Tarihlendirme kararı sağlık uzmanı tarafından verilmelidir.",
    ],
  },
  {
    title: "Düzensiz Döngüde Gebelik Hesabı",
    paragraphs: [
      "Düzensiz döngüde yumurtlama standart 14. günden sapabilir.",
      "Tek bir ortalama değer kullanmak yanıltıcı olabilir.",
      "Sonucu kesin kabul etmeyin ve klinik değerlendirmeyi esas alın.",
    ],
  },
  {
    title: "IVF ve Embriyo Transferi",
    paragraphs: [
      "Tüp bebekte yumurta toplama veya embriyo transfer tarihi dikkate alınır.",
      "Üçüncü gün ve beşinci gün transferlerinde ayrıntılar farklıdır.",
      "Tedaviyi yürüten merkezin verdiği tarih esas alınmalıdır.",
    ],
  },
  {
    title: "Çoğul Gebeliklerde Hesaplama",
    paragraphs: [
      "Temel gebelik yaşı benzer yöntemlerle belirlenebilir.",
      "Takip sıklığı ve doğum planı tekil gebelikten farklı olabilir.",
      "Gerçek plan kadın hastalıkları ve doğum uzmanı tarafından oluşturulur.",
    ],
  },
  {
    title: "Örnek: 28 Günlük Döngü",
    paragraphs: [
      "Son adet tarihinin ilk günü 1 Ocak ve döngü 28 gün olsun.",
      "Başlangıç tarihine 280 gün eklenir.",
      "Tahmini doğum tarihi yaklaşık 8 Ekim olur.",
    ],
  },
  {
    title: "Örnek: 32 Günlük Döngü",
    paragraphs: [
      "Son adet tarihi 1 Ocak, döngü 32 gün olduğunda dört günlük fark vardır.",
      "280 günlük süreye dört gün eklenir.",
      "Tahmini tarih yaklaşık dört gün ileri kayar.",
    ],
    formula: "1 Ocak + 280 gün + (32 − 28) gün",
  },
  {
    title: "Örnek: Döllenme Tarihi Biliniyorsa",
    paragraphs: [
      "Tahmini döllenme tarihi 15 Ocak olsun.",
      "Bu tarihe 266 gün eklenir.",
      "Klinik başlangıç yaklaşık 14 gün geriye gidilerek bulunur.",
    ],
    formula: "15 Ocak + 266 gün",
  },
  {
    title: "Sık Yapılan Hatalar",
    paragraphs: [
      "Adetin bittiği günü başlangıç olarak girmek yaygın hatadır.",
      "Döngü uzunluğunu yanlış yazmak sonucu etkiler.",
      "Tahmini tarihi kesin doğum günü sanmak doğru değildir.",
    ],
    cards: [
      {
        title: "Yanlış başlangıç",
        description: "Adetin ilk günü kullanılmalıdır.",
      },
      {
        title: "Kesin tarih beklentisi",
        description: "Sonuç yaklaşık referanstır.",
      },
      {
        title: "Tıbbi değerlendirme yerine kullanma",
        description: "Araç doktorun yerine geçmez.",
      },
    ],
  },
  {
    title: "Doktor Takibinin Önemi",
    paragraphs: [
      "Hesaplayıcı gebeliğin sağlıklı ilerlediğini göstermez.",
      "Sağlık uzmanı öykü, muayene, test ve ultrasonu birlikte değerlendirir.",
      "Pozitif test sonrasında takip planı için sağlık kuruluşuyla iletişime geçilmelidir.",
    ],
  },
  {
    title: "Acil Değerlendirme Gerektirebilecek Belirtiler",
    paragraphs: [
      "Kanama, şiddetli ağrı, yüksek ateş, bayılma, ciddi baş ağrısı veya belirgin kötüleşme ciddiye alınmalıdır.",
      "Bu belirtilerde hesaplama sonucu beklenmemelidir.",
      "Uygun sağlık kuruluşuna başvurulmalıdır.",
    ],
    cards: [
      {
        title: "Kanama",
        description: "Sağlık uzmanına danışılmalıdır.",
      },
      {
        title: "Şiddetli ağrı",
        description: "Ani veya geçmeyen ağrı değerlendirilmelidir.",
      },
      {
        title: "Genel durum bozulması",
        description: "Bayılma, ateş veya nefes darlığında yardım alınmalıdır.",
      },
    ],
  },
  {
    title: "Sağlıklı Gebelik İçin Genel Hatırlatmalar",
    paragraphs: [
      "Beslenme, sıvı, aktivite, vitamin ve ilaç kullanımı kişiye göre planlanmalıdır.",
      "İlaç veya takviye sağlık uzmanına danışmadan başlanmamalıdır.",
      "Duygusal sağlık da gebelik takibinin bir parçasıdır.",
    ],
    cards: [
      {
        title: "Dengeli beslenme",
        description: "Kişisel ihtiyaçlara göre planlanmalıdır.",
      },
      {
        title: "Yeterli sıvı",
        description: "İhtiyaç kişiye göre değişir.",
      },
      {
        title: "Düzenli takip",
        description: "Kontroller zamanında yapılmalıdır.",
      },
    ],
  },
  {
    title: "Sonuç Nasıl Yorumlanır?",
    paragraphs: [
      "Hafta ve gün bilgisi tamamlanan süreyi ifade eder.",
      "İlerleme yüzdesi yalnızca takvimsel ilerlemeyi gösterir.",
      "Doğuma kalan gün sayısı kesin doğum gününü göstermez.",
    ],
  },
  {
    title: "Araç Nasıl Kullanılır?",
    paragraphs: [
      "Son adet, döllenme veya doğum tarihi yöntemlerinden birini seçin.",
      "Gerekli tarihleri ve gerekiyorsa döngü uzunluğunu girin.",
      "Sonucu bilgi amaçlı değerlendirin ve tıbbi takipte doktorunuzu esas alın.",
    ],
    cards: [
      {
        title: "1. Yöntemi seçin",
        description: "Elinizdeki en güvenilir tarihi kullanın.",
      },
      {
        title: "2. Bilgileri girin",
        description: "Tarihleri doğru yazın.",
      },
      {
        title: "3. Sonucu değerlendirin",
        description: "Sonuç yaklaşık bilgi verir.",
      },
    ],
  },
];

const relatedCalculations: CalculatorRelatedItem[] = [
  {
    title: "VKİ Hesaplama",
    description: "Boy ve kilo bilgilerinize göre vücut kitle indeksinizi hesaplayın.",
    href: "/hesaplamalar/vki-hesaplama",
    icon: Activity,
  },
  {
    title: "İdeal Kilo Hesaplama",
    description: "Boyunuza ve cinsiyetinize göre tahmini ideal kilo aralığınızı öğrenin.",
    href: "/hesaplamalar/ideal-kilo-hesaplama",
    icon: Scale,
  },
  {
    title: "Vücut Yağ Oranı Hesaplama",
    description: "Vücut ölçülerinize göre tahmini yağ oranınızı hesaplayın.",
    href: "/hesaplamalar/vucut-yag-orani-hesaplama",
    icon: HeartPulse,
  },
  {
    title: "Günlük Su İhtiyacı Hesaplama",
    description: "Kilonuz ve aktivite seviyenize göre günlük su ihtiyacınızı hesaplayın.",
    href: "/hesaplamalar/su-ihtiyaci-hesaplama",
    icon: Droplets,
  },
  {
    title: "Günlük Kalori İhtiyacı Hesaplama",
    description: "Yaş, boy, kilo ve aktivite bilgilerinize göre günlük enerji ihtiyacınızı öğrenin.",
    href: "/hesaplamalar/kalori-ihtiyaci-hesaplama",
    icon: Flame,
  },
];

const faqSchema = {
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

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Gebelik Hesaplama",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: `https://hesaprehberionline.com${canonicalPath}`,
  description: "Gebelik haftası, trimester ve tahmini doğum tarihini hesaplayan ücretsiz araç.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "TRY",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: "https://hesaprehberionline.com" },
    { "@type": "ListItem", position: 2, name: "Hesaplamalar", item: "https://hesaprehberionline.com/hesaplamalar" },
    { "@type": "ListItem", position: 3, name: "Gebelik Hesaplama", item: `https://hesaprehberionline.com${canonicalPath}` },
  ],
};

export default function PregnancyCalculationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CalculatorLayout
        calculator={calculator}
        categoryClassName="bg-pink-100 text-pink-700"
        contentSections={contentSections}
        faqItems={faqItems}
        relatedCalculations={relatedCalculations}
        warningTitle="Önemli Sağlık Bilgilendirmesi"
        warningText="Bu hesaplama yalnızca genel bilgilendirme amacı taşır ve tıbbi tanı, gebelik doğrulaması veya doktor değerlendirmesi yerine geçmez. Kesin gebelik haftası ve tahmini doğum tarihi; sağlık öyküsü, doktor muayenesi, ultrason ölçümleri ve diğer tıbbi değerlendirmeler sonucunda belirlenmelidir. Kanama, şiddetli ağrı, yüksek ateş, bayılma veya ciddi baş ağrısı gibi durumlarda uygun sağlık kuruluşuna başvurun."
      >
        <PregnancyCalculator />
      </CalculatorLayout>
    </>
  );
}