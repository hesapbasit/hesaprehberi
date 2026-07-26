import type { Metadata } from "next";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import BmiCalculator from "@/components/calculators/BmiCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/vki-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `VKİ hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const bmiCategories = [
  {
    range: "18,5 altı",
    title: "Zayıf",
    description:
      "Vücut ağırlığınız boyunuza göre genel referans aralığının altında olabilir.",
    detail:
      "Beslenme düzeni, kas kütlesi ve sağlık geçmişi birlikte değerlendirilmelidir.",
    accentClassName: "border-sky-200 bg-sky-50",
    badgeClassName: "bg-sky-100 text-sky-700",
    dotClassName: "bg-sky-500",
  },
  {
    range: "18,5 – 24,9",
    title: "Normal kilo",
    description:
      "Genel yetişkin sınıflandırmasına göre sağlıklı kabul edilen aralıktır.",
    detail:
      "Dengeli beslenme, düzenli hareket ve uyku düzeninin korunması önemlidir.",
    accentClassName: "border-emerald-200 bg-emerald-50",
    badgeClassName: "bg-emerald-100 text-emerald-700",
    dotClassName: "bg-emerald-500",
  },
  {
    range: "25 – 29,9",
    title: "Fazla kilolu",
    description:
      "Vücut ağırlığınız boyunuza göre genel referans aralığının üzerinde olabilir.",
    detail:
      "Beslenme ve fiziksel aktivite alışkanlıklarının gözden geçirilmesi faydalı olabilir.",
    accentClassName: "border-amber-200 bg-amber-50",
    badgeClassName: "bg-amber-100 text-amber-700",
    dotClassName: "bg-amber-500",
  },
  {
    range: "30 ve üzeri",
    title: "Obezite aralığı",
    description:
      "VKİ değeriniz genel sınıflandırmada obezite aralığında değerlendirilebilir.",
    detail:
      "Kişisel sağlık değerlendirmesi için doktor veya diyetisyen desteği önerilir.",
    accentClassName: "border-rose-200 bg-rose-50",
    badgeClassName: "bg-rose-100 text-rose-700",
    dotClassName: "bg-rose-500",
  },
] as const;

const calculationSteps = [
  {
    number: "01",
    title: "Boyunuzu metreye çevirin",
    description:
      "Santimetre cinsinden boyunuzu 100’e bölerek metre cinsine dönüştürün.",
    example: "175 cm ÷ 100 = 1,75 m",
  },
  {
    number: "02",
    title: "Boy değerinin karesini alın",
    description:
      "Metre cinsinden boy değerini kendisiyle çarparak boyun karesini bulun.",
    example: "1,75 × 1,75 = 3,0625",
  },
  {
    number: "03",
    title: "Kilonuzu sonuca bölün",
    description:
      "Kilogram cinsinden ağırlığınızı boyunuzun karesine bölün.",
    example: "70 ÷ 3,0625 = 22,86",
  },
  {
    number: "04",
    title: "VKİ kategorinizi inceleyin",
    description:
      "Bulduğunuz değeri yetişkinler için kullanılan genel VKİ aralıklarıyla karşılaştırın.",
    example: "22,9 = Normal kilo aralığı",
  },
] as const;

const healthyWeightExamples = [
  {
    height: "1,55 m",
    minimum: "44,4 kg",
    maximum: "59,8 kg",
  },
  {
    height: "1,60 m",
    minimum: "47,4 kg",
    maximum: "63,7 kg",
  },
  {
    height: "1,65 m",
    minimum: "50,4 kg",
    maximum: "67,8 kg",
  },
  {
    height: "1,70 m",
    minimum: "53,5 kg",
    maximum: "72,0 kg",
  },
  {
    height: "1,75 m",
    minimum: "56,7 kg",
    maximum: "76,3 kg",
  },
  {
    height: "1,80 m",
    minimum: "59,9 kg",
    maximum: "80,7 kg",
  },
  {
    height: "1,85 m",
    minimum: "63,3 kg",
    maximum: "85,2 kg",
  },
  {
    height: "1,90 m",
    minimum: "66,8 kg",
    maximum: "89,9 kg",
  },
] as const;

const importantNotes = [
  {
    title: "Kas kütlesini doğrudan ölçmez",
    description:
      "Kas dokusu yoğun olduğu için düzenli spor yapan kişilerde VKİ yüksek çıkabilir. Bu durum her zaman fazla yağ anlamına gelmez.",
  },
  {
    title: "Yağ dağılımını göstermez",
    description:
      "VKİ, vücut yağının karın veya kalça gibi hangi bölgelerde yoğunlaştığını açıklamaz.",
  },
  {
    title: "Yaşa göre farklı yorumlanabilir",
    description:
      "Yaş ilerledikçe kas ve yağ dağılımı değişebilir. Bu nedenle sonuç yaşla birlikte değerlendirilmelidir.",
  },
  {
    title: "Tek başına teşhis aracı değildir",
    description:
      "VKİ genel bir tarama ölçütüdür. Kan değerleri, bel çevresi ve sağlık geçmişi gibi verilerin yerini tutmaz.",
  },
] as const;

const whoShouldBeCareful = [
  "18 yaşından küçük çocuklar ve ergenler",
  "Hamile veya emzirme dönemindeki kişiler",
  "Yoğun kas kütlesine sahip profesyonel sporcular",
  "İleri yaştaki ve belirgin kas kaybı yaşayan kişiler",
  "Ödem veya sıvı tutulumu bulunan kişiler",
  "Kronik hastalığı ya da özel sağlık durumu olan kişiler",
] as const;

const contentSections: CalculatorContentSection[] = [
  {
    title: "Vücut Kitle İndeksi (VKİ) nedir?",
    paragraphs: [
      "Vücut Kitle İndeksi, bir kişinin kilogram cinsinden ağırlığı ile metre cinsinden boyu arasındaki ilişkiyi gösteren sayısal bir ölçüttür. İngilizce Body Mass Index ifadesinin kısaltması olan BMI, Türkçede VKİ olarak kullanılır.",
      "VKİ; kişinin zayıf, normal kilolu, fazla kilolu veya obezite aralığında olup olmadığı hakkında genel bir ön değerlendirme sağlar. Hesaplaması kolay olduğu için sağlık taramalarında ve kilo takibinde yaygın biçimde kullanılır.",
      "Bununla birlikte VKİ, vücut yağ oranını doğrudan ölçmez. Kas kütlesi, kemik yoğunluğu, yaş, cinsiyet ve yağ dağılımı gibi kişisel farklılıkları tek başına açıklayamaz.",
    ],
  },
  {
    title: "VKİ nasıl hesaplanır?",
    paragraphs: [
      "VKİ hesaplanırken kilogram cinsinden vücut ağırlığı, metre cinsinden boyun karesine bölünür.",
      "Örneğin 70 kilogram ağırlığında ve 1,75 metre boyunda bir kişinin boyunun karesi 3,0625 olur. 70 kilogram bu değere bölündüğünde yaklaşık 22,9 VKİ sonucu elde edilir.",
    ],
    formula: "VKİ = Kilo (kg) ÷ Boy² (m)",
  },
  {
    title: "VKİ değerleri ne anlama gelir?",
    paragraphs: [
      "Yetişkinler için kullanılan genel sınıflandırmada VKİ değeri belirli aralıklara ayrılır. Bu aralıklar genel bir tarama değerlendirmesidir ve kişisel sağlık durumunun tamamını yansıtmaz.",
    ],
    cards: [
      {
        title: "18,5 altı · Zayıf",
        description:
          "Vücut ağırlığının boya göre genel referans aralığının altında olabileceğini gösterir.",
      },
      {
        title: "18,5 – 24,9 · Normal",
        description:
          "Yetişkinler için genel olarak sağlıklı kabul edilen VKİ aralığıdır.",
      },
      {
        title: "25 – 29,9 · Fazla kilolu",
        description:
          "Vücut ağırlığının boya göre genel referans aralığının üzerinde olabileceğini gösterir.",
      },
      {
        title: "30 ve üzeri · Obezite",
        description:
          "Genel sınıflandırmaya göre obezite aralığında değerlendirilir.",
      },
    ],
  },
  {
    title: "VKİ sonucu neden tek başına yeterli değildir?",
    paragraphs: [
      "VKİ yalnızca boy ve kilo değerleriyle hesaplanır. Vücudun ne kadarının kas, yağ, kemik veya sudan oluştuğunu ayırt edemez.",
      "Aynı VKİ değerine sahip iki kişinin vücut yağ oranı ve sağlık durumu birbirinden farklı olabilir. Bu nedenle bel çevresi, vücut yağ oranı, tansiyon, kan değerleri, yaşam tarzı ve aile öyküsü gibi bilgiler de değerlendirmeye dahil edilmelidir.",
      "Özellikle kas kütlesi yüksek sporcularda VKİ değeri yüksek çıkmasına rağmen vücut yağ oranı düşük olabilir. İleri yaştaki kişilerde ise normal görünen bir VKİ değerine rağmen kas kaybı bulunabilir.",
    ],
  },
  {
    title: "Sağlıklı kilo aralığı nasıl hesaplanır?",
    paragraphs: [
      "Boyunuza göre yaklaşık normal kilo aralığı, normal kabul edilen alt ve üst VKİ sınırlarının boyun karesiyle çarpılmasıyla hesaplanabilir.",
      "Alt sınır için 18,5; üst sınır için 24,9 değeri kullanılır. Örneğin 1,75 metre boyundaki bir kişinin yaklaşık normal kilo aralığı 56,7 ile 76,3 kilogram arasındadır.",
    ],
    formula:
      "Yaklaşık kilo aralığı = 18,5 × Boy² ile 24,9 × Boy² arası",
  },
  {
    title: "Çocuklarda VKİ değerlendirmesi",
    paragraphs: [
      "Çocuklarda ve ergenlerde matematiksel VKİ formülü değişmez. Ancak elde edilen sonuç yetişkinlerdeki sabit aralıklarla yorumlanmaz.",
      "Çocukların büyüme hızı yaşa ve cinsiyete göre değiştiği için sonuçlar persentil eğrileri üzerinden değerlendirilir. Bu nedenle 18 yaşından küçük kişiler için çocuk doktoru veya ilgili sağlık uzmanının değerlendirmesi gerekir.",
    ],
  },
  {
    title: "Sporcularda VKİ sonucu",
    paragraphs: [
      "Düzenli ağırlık antrenmanı yapan veya yüksek kas kütlesine sahip kişilerde VKİ değeri genel sınıflandırmaya göre yüksek çıkabilir.",
      "Kas dokusu yağ dokusuna göre daha yoğun olduğundan yüksek vücut ağırlığı her zaman yüksek yağ oranı anlamına gelmez. Sporcularda bel çevresi, vücut yağ yüzdesi ve performans ölçümleriyle birlikte değerlendirme yapılması daha anlamlıdır.",
    ],
  },
  {
    title: "Gebelik döneminde VKİ",
    paragraphs: [
      "Gebelik sırasında vücut ağırlığı; bebeğin, plasentanın, sıvıların ve fizyolojik değişimlerin etkisiyle artar. Bu nedenle gebelik devam ederken standart VKİ sınıflandırması tek başına doğru değerlendirme sağlamaz.",
      "Gebelik öncesi VKİ değeri, gebelik boyunca önerilen kilo artışının belirlenmesinde sağlık uzmanları tarafından kullanılabilir. Kişisel değerlendirme için doktor önerisi esas alınmalıdır.",
    ],
  },
  {
    title: "VKİ değerini etkileyen faktörler",
    cards: [
      {
        title: "Kas oranı",
        description:
          "Kas kütlesi yüksek kişilerde sonuç genel sağlık durumuna göre yüksek görünebilir.",
      },
      {
        title: "Yaş",
        description:
          "Yaş ilerledikçe kas ve yağ dağılımındaki değişimler sonucun yorumunu etkileyebilir.",
      },
      {
        title: "Vücut yapısı",
        description:
          "Kemik yoğunluğu ve genetik vücut yapısı aynı VKİ değerinde farklı görünümler oluşturabilir.",
      },
      {
        title: "Sıvı dengesi",
        description:
          "Ödem veya sıvı tutulumu tartı sonucunu ve dolayısıyla VKİ değerini geçici olarak etkileyebilir.",
      },
    ],
  },
  {
    title: "VKİ sonucunu değerlendirirken nelere dikkat edilmelidir?",
    paragraphs: [
      "VKİ sonucunu kesin bir sağlık hükmü olarak değil, genel bir başlangıç göstergesi olarak değerlendirin.",
      "Kilonuzda kısa sürede belirgin değişiklik olduysa, yeme düzeniniz bozulduysa veya sağlıkla ilgili şikâyetleriniz varsa yalnızca hesaplama sonucuna dayanmayın.",
      "Daha kapsamlı değerlendirme için bel çevresi, vücut yağ oranı, kas kütlesi, fiziksel aktivite düzeyi ve laboratuvar sonuçları gibi ek veriler gerekebilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "VKİ nedir?",
    answer:
      "VKİ, kilogram cinsinden ağırlığın metre cinsinden boyun karesine bölünmesiyle hesaplanan ve kilo durumunu genel olarak sınıflandırmaya yardımcı olan bir ölçüttür.",
  },
  {
    question: "VKİ nasıl hesaplanır?",
    answer:
      "Kilogram cinsinden kilonuzu, metre cinsinden boyunuzun karesine bölerek VKİ değerinizi hesaplayabilirsiniz.",
  },
  {
    question: "Normal VKİ aralığı nedir?",
    answer:
      "Yetişkinler için kullanılan genel sınıflandırmada 18,5 ile 24,9 arasındaki VKİ değeri normal kilo aralığı olarak kabul edilir.",
  },
  {
    question: "VKİ ile ideal kilo bulunabilir mi?",
    answer:
      "VKİ kullanılarak boya göre yaklaşık normal kilo aralığı hesaplanabilir. Ancak ideal kilo; yaş, kas oranı, vücut yapısı ve sağlık durumuna göre değişebilir.",
  },
  {
    question: "VKİ sonucu kaç olmalı?",
    answer:
      "Yetişkinler için genel referans aralığı 18,5 ile 24,9’dur. Bunun kişiye özel bir sağlık hedefi olmadığı ve yalnızca genel sınıflandırma sağladığı unutulmamalıdır.",
  },
  {
    question: "VKİ çocuklarda aynı şekilde hesaplanır mı?",
    answer:
      "Matematiksel formül aynı olsa da çocuklarda sonuç yaşa ve cinsiyete göre persentil büyüme eğrileri üzerinden değerlendirilir.",
  },
  {
    question: "Sporcularda VKİ doğru sonuç verir mi?",
    answer:
      "Kas kütlesi yüksek kişilerde VKİ olduğundan yüksek görünebilir. Bu nedenle vücut yağ oranı, bel çevresi ve kas kütlesi gibi ek ölçümlerle birlikte değerlendirilmelidir.",
  },
  {
    question: "Hamilelikte VKİ hesaplanabilir mi?",
    answer:
      "Gebelik sırasında standart VKİ sonucu tek başına uygun bir değerlendirme sağlamaz. Gebelik öncesi VKİ, sağlık uzmanları tarafından kilo takibinde kullanılabilir.",
  },
  {
    question: "VKİ yaşa göre değişir mi?",
    answer:
      "Hesaplama formülü yetişkinlerde aynıdır ancak yaşla birlikte kas ve yağ dağılımı değişebileceği için sonucun yorumu farklılaşabilir.",
  },
  {
    question: "VKİ cinsiyete göre değişir mi?",
    answer:
      "Yetişkinlerde genel hesaplama formülü kadın ve erkekler için aynıdır. Ancak vücut yağ dağılımı ve kas oranı cinsiyete göre farklı olabileceğinden sonuç tek başına yeterli değildir.",
  },
  {
    question: "VKİ vücut yağ oranını gösterir mi?",
    answer:
      "Hayır. VKİ yalnızca boy ve kilo ilişkisini gösterir. Vücuttaki yağ yüzdesini veya yağın hangi bölgede toplandığını doğrudan ölçmez.",
  },
  {
    question: "VKİ yüksekse kesin olarak obez miyim?",
    answer:
      "Yüksek VKİ genel sınıflandırmada obezite aralığına işaret edebilir ancak kas kütlesi ve vücut yapısı sonucu etkileyebilir. Kesin değerlendirme sağlık uzmanı tarafından yapılmalıdır.",
  },
  {
    question: "VKİ düşükse ne yapılmalıdır?",
    answer:
      "Düşük VKİ beslenme yetersizliği, kas kaybı veya farklı sağlık durumlarıyla ilişkili olabilir. Özellikle istemsiz kilo kaybında doktor veya diyetisyen desteği alınmalıdır.",
  },
  {
    question: "Bel çevresi VKİ kadar önemli midir?",
    answer:
      "Bel çevresi, özellikle karın bölgesindeki yağlanma hakkında ek bilgi sağlayabilir. VKİ ile birlikte değerlendirilmesi daha kapsamlı bir bakış sunar.",
  },
  {
    question: "VKİ hesaplama sonucu tıbbi teşhis sayılır mı?",
    answer:
      "Hayır. Bu hesaplama genel bilgilendirme amacı taşır ve tıbbi muayene, tanı veya tedavi yerine geçmez.",
  },
];

export default function VkiHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-emerald-100 text-emerald-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu hesaplama yalnızca genel bilgilendirme amacı taşır. VKİ; vücut yağ oranını, kas kütlesini, yağ dağılımını veya kişisel sağlık durumunu tek başına göstermez. Tanı, tedavi ve kişisel sağlık değerlendirmesi için doktorunuza veya yetkili bir sağlık uzmanına danışınız."
    >
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 -z-10 h-64 w-64 rounded-full bg-emerald-200/30 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"
        />

        <section
          aria-labelledby="vki-calculator-heading"
          className="overflow-hidden rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/50 to-cyan-50/70 p-1 shadow-[0_24px_70px_-35px_rgba(15,118,110,0.35)]"
        >
          <div className="rounded-[1.75rem] border border-white/80 bg-white/85 p-5 backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="mb-7 flex flex-col gap-5 border-b border-slate-200 pb-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Kişisel sağlık hesaplaması
                </div>

                <h2
                  id="vki-calculator-heading"
                  className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl"
                >
                  VKİ değerinizi ve yaklaşık sağlıklı kilo aralığınızı öğrenin
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                  Boy ve kilo bilgilerinizi girerek Vücut Kitle İndeksinizi
                  hesaplayın. Sonucunuzu genel yetişkin sınıflandırmasına göre
                  inceleyin.
                </p>
              </div>

              <div className="grid shrink-0 grid-cols-3 gap-2 sm:gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Hızlı</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Anlık sonuç
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Ücretsiz</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Kayıt gerekmez
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-center shadow-sm">
                  <p className="text-lg font-black text-emerald-600">Güvenli</p>
                  <p className="mt-1 text-[11px] font-semibold text-slate-500">
                    Veri saklanmaz
                  </p>
                </div>
              </div>
            </div>

            <BmiCalculator />
          </div>
        </section>
      </div>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-40px_rgba(15,23,42,0.35)]">
        <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 via-white to-emerald-50 px-6 py-7 md:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
                Yetişkinler için genel sınıflandırma
              </p>

              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                VKİ sonuç tablosu
              </h2>

              <p className="mt-3 max-w-3xl leading-7 text-slate-600">
                Hesaplanan değerinizi aşağıdaki genel referans aralıklarıyla
                karşılaştırabilirsiniz. Sonucun tek başına tıbbi değerlendirme
                olmadığını unutmayın.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              18 yaş ve üzeri için
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8 xl:grid-cols-4">
          {bmiCategories.map((category) => (
            <article
              key={category.title}
              className={`group relative overflow-hidden rounded-3xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${category.accentClassName}`}
            >
              <div
                aria-hidden="true"
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-10 ${category.dotClassName}`}
              />

              <div className="relative">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${category.badgeClassName}`}
                >
                  VKİ {category.range}
                </span>

                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {category.title}
                </h3>

                <p className="mt-3 text-sm font-medium leading-6 text-slate-700">
                  {category.description}
                </p>

                <div className="mt-5 border-t border-slate-900/10 pt-4">
                  <p className="text-sm leading-6 text-slate-600">
                    {category.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="px-6 pb-7 md:px-8 md:pb-8">
          <div className="relative h-4 overflow-hidden rounded-full bg-slate-100">
            <div className="absolute inset-y-0 left-0 w-[24%] bg-sky-400" />
            <div className="absolute inset-y-0 left-[24%] w-[30%] bg-emerald-500" />
            <div className="absolute inset-y-0 left-[54%] w-[22%] bg-amber-400" />
            <div className="absolute inset-y-0 left-[76%] right-0 bg-rose-500" />
          </div>

          <div className="mt-3 grid grid-cols-4 text-center text-[10px] font-bold text-slate-500 sm:text-xs">
            <span>Zayıf</span>
            <span>Normal</span>
            <span>Fazla kilolu</span>
            <span>Obezite</span>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.75)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
              Örnek hesaplama
            </div>

            <h2 className="mt-4 text-2xl font-black tracking-tight md:text-3xl">
              1,75 metre boy ve 70 kilogram için VKİ
            </h2>

            <p className="mt-4 leading-8 text-slate-300">
              Boyu <strong className="text-white">1,75 metre</strong> ve
              ağırlığı <strong className="text-white">70 kilogram</strong> olan
              bir kişinin VKİ değeri yaklaşık{" "}
              <strong className="text-emerald-300">22,9</strong> olarak
              hesaplanır.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-slate-400">
                Kullanılan işlem
              </p>

              <p className="mt-3 break-words font-mono text-lg font-black text-white sm:text-xl">
                70 ÷ (1,75 × 1,75) = 22,86
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Sonuç bir ondalık basamağa yuvarlandığında 22,9 olur.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Boy
              </p>
              <p className="mt-3 text-3xl font-black">1,75 m</p>
              <p className="mt-2 text-sm text-slate-400">175 santimetre</p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                Kilo
              </p>
              <p className="mt-3 text-3xl font-black">70 kg</p>
              <p className="mt-2 text-sm text-slate-400">Vücut ağırlığı</p>
            </article>

            <article className="rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">
                VKİ sonucu
              </p>
              <p className="mt-3 text-4xl font-black text-emerald-300">22,9</p>
              <p className="mt-2 text-sm text-emerald-100/70">
                Genel referans aralığında
              </p>
            </article>

            <article className="rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 p-5 shadow-lg shadow-emerald-950/20">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-100">
                Kategori
              </p>
              <p className="mt-3 text-2xl font-black">Normal kilo</p>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                18,5 ile 24,9 arasındaki genel yetişkin aralığı.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
            İşlem adımları
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            VKİ hesaplaması adım adım nasıl yapılır?
          </h2>

          <p className="mt-4 leading-8 text-slate-600">
            Hesaplama aracını kullanmadan da aşağıdaki dört adımla VKİ
            değerinizi manuel olarak bulabilirsiniz.
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
                    <p className="font-mono text-sm font-bold text-emerald-700">
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
            Yaklaşık referans değerler
          </p>

          <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
            Boya göre normal kilo aralığı tablosu
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-600">
            Aşağıdaki değerler, VKİ’nin 18,5 ile 24,9 arasında olduğu yaklaşık
            kilo aralığını gösterir. Kişisel ideal kilo hedefi olarak
            değerlendirilmemelidir.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[680px] border-collapse text-left">
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
                  className="px-6 py-4 text-xs font-black uppercase tracking-[0.14em] text-slate-500 md:px-8"
                >
                  VKİ aralığı
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
                    {item.minimum}
                  </td>

                  <td className="px-6 py-4 font-semibold text-slate-700">
                    {item.maximum}
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
            <strong>Önemli:</strong> Tablodaki değerler yalnızca yetişkinler
            için genel matematiksel referanslardır. Kas kütlesi, yaş, sağlık
            durumu ve vücut yapısı değerlendirmeyi değiştirebilir.
          </p>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">
              Sonucu doğru yorumlayın
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
              VKİ hesaplamasının sınırları
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              VKİ hızlı ve kullanışlı bir tarama ölçütüdür ancak vücut
              kompozisyonunu ayrıntılı biçimde analiz etmez. Sonuçların
              aşağıdaki sınırlamalarla birlikte değerlendirilmesi gerekir.
            </p>

            <div className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="font-black text-emerald-900">
                Daha kapsamlı değerlendirme için
              </p>

              <p className="mt-2 text-sm leading-7 text-emerald-800">
                Bel çevresi, vücut yağ oranı, kas kütlesi, fiziksel aktivite,
                beslenme alışkanlıkları ve kan değerleri gibi ek bilgiler
                kullanılabilir.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {importantNotes.map((note, index) => (
              <article
                key={note.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-4 text-lg font-black text-slate-950">
                  {note.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {note.description}
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
              Standart VKİ sonucunu dikkatli kullanması gereken kişiler
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Aşağıdaki gruplarda standart yetişkin sınıflandırması tek başına
              doğru veya yeterli bir sonuç vermeyebilir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {whoShouldBeCareful.map((item) => (
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
              Sağlıklı değerlendirme yaklaşımı
            </p>

            <h2 className="mt-3 text-2xl font-black tracking-tight md:text-3xl">
              Tek bir sayıya değil, genel sağlık tablonuza odaklanın
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-slate-300">
              VKİ sonucunuzu başlangıç göstergesi olarak kullanın. Sağlıklı
              yaşam hedeflerinizi yalnızca tartıdaki sayı veya tek bir hesaplama
              sonucu üzerinden belirlemeyin.
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
                Kaliteli uyku
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-2xl font-black text-emerald-300">04</p>
              <p className="mt-2 text-sm font-bold text-white">
                Uzman kontrolü
              </p>
            </div>
          </div>
        </div>
      </section>
    </CalculatorLayout>
  );
}