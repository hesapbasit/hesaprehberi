import type { Metadata } from "next";
import {
  Activity,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Clock3,
  CloudSun,
  Droplets,
  Gauge,
  GlassWater,
  HeartPulse,
  Info,
  Leaf,
  Lightbulb,
  Moon,
  ShieldCheck,
  Sparkles,
  Sun,
  ThermometerSun,
  TimerReset,
  TrendingUp,
  UserRound,
  Waves,
  Wind,
  Zap,
} from "lucide-react";

import CalculatorLayout, {
  type CalculatorContentSection,
  type CalculatorFaqItem,
} from "@/components/calculators/CalculatorLayout";
import WaterIntakeCalculator from "@/components/calculators/WaterIntakeCalculator";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath =
  "/hesaplamalar/su-ihtiyaci-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator =
    getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `Su ihtiyacı hesaplama aracı calculators.ts içinde bulunamadı: ${canonicalPath}`,
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
      "Günlük Su İhtiyacı Hesaplama – Litre, Bardak ve Şişe Karşılığı",
    description:
      "Kilo, aktivite, hava sıcaklığı ve terleme düzeyinize göre günlük su ihtiyacınızı litre, bardak ve şişe karşılığıyla hesaplayın.",
    keywords: [
      "su ihtiyacı hesaplama",
      "günlük su hesaplama",
      "kaç litre su içmeliyim",
      "kilo başına su ihtiyacı",
      "bardak su hesaplama",
      "hidrasyon hesaplama",
      "egzersizde su ihtiyacı",
      "sıcak havada su ihtiyacı",
      "dehidrasyon belirtileri",
      "günlük sıvı ihtiyacı",
    ],
  });

const contentSections: CalculatorContentSection[] = [
  {
    title: "Günlük su ihtiyacı nedir?",
    paragraphs: [
      "Günlük su ihtiyacı, vücudun dolaşım, sindirim, ısı dengesi, hücresel işlevler ve atıkların uzaklaştırılması gibi temel süreçleri sürdürebilmesi için ihtiyaç duyduğu yaklaşık sıvı miktarını ifade eder.",
      "Bu değer herkeste aynı değildir. Vücut ağırlığı, aktivite seviyesi, ortam sıcaklığı, terleme miktarı, sağlık durumu, gebelik ve emzirme gibi etkenler günlük sıvı ihtiyacını değiştirebilir.",
      "Hesaplama sonucunda elde edilen değer, doğrudan sudan ve su içeriği yüksek besinlerden alınabilecek toplam sıvı için genel bir başlangıç noktası olarak değerlendirilmelidir.",
    ],
  },
  {
    title: "Günlük su ihtiyacı nasıl hesaplanır?",
    paragraphs: [
      "Pratik hesaplama yöntemlerinde vücut ağırlığı temel alınır ve kilogram başına belirli bir mililitre katsayısı kullanılır.",
      "Düşük aktivite düzeyi için kilogram başına yaklaşık 30 ml, orta aktivite için 35 ml ve yüksek aktivite için 40 ml gibi değerler kullanılabilir.",
      "Yoğun egzersiz, yüksek hava sıcaklığı ve fazla terleme durumlarında temel miktara ek sıvı eklenmesi gerekebilir.",
    ],
    formula:
      "Tahmini günlük su ihtiyacı = Vücut ağırlığı × Mililitre katsayısı + Ek sıvı ihtiyacı",
  },
  {
    title: "Aktivite seviyesi su ihtiyacını nasıl etkiler?",
    paragraphs: [
      "Fiziksel aktivite sırasında kaslar daha fazla ısı üretir ve vücut sıcaklığını dengelemek için terleme artar.",
      "Terleme yoluyla kaybedilen sıvının yerine konmaması performans düşüşü, baş ağrısı, yorgunluk ve konsantrasyon kaybına neden olabilir.",
      "Egzersiz süresi ve yoğunluğu arttıkça ihtiyaç duyulan ek sıvı miktarı da yükselir.",
    ],
    cards: [
      {
        title: "Düşük aktivite",
        description:
          "Günlük hareketin sınırlı, düzenli egzersizin çok az olduğu yaşam biçimidir.",
      },
      {
        title: "Orta aktivite",
        description:
          "Düzenli yürüyüş, hafif egzersiz veya haftada birkaç antrenman içerir.",
      },
      {
        title: "Yüksek aktivite",
        description:
          "Yoğun egzersiz, uzun süreli fiziksel çalışma veya yüksek terleme düzeyini kapsar.",
      },
    ],
  },
  {
    title: "Hava sıcaklığı ve nem neden önemlidir?",
    paragraphs: [
      "Sıcak ve nemli havalarda vücut daha fazla terleyebilir. Bu durum sıvı ve elektrolit kaybını artırır.",
      "Açık havada çalışanlar, yaz aylarında egzersiz yapanlar ve sıcak ortamlarda bulunan kişiler temel hesaplamadan daha fazla sıvıya ihtiyaç duyabilir.",
      "Yüksek nem terin buharlaşmasını zorlaştırdığı için vücudun serinleme verimi düşebilir ve sıvı ihtiyacı artabilir.",
    ],
  },
  {
    title: "Su yalnızca içme suyundan mı alınır?",
    paragraphs: [
      "Günlük sıvı alımına suyun yanı sıra ayran, süt, çorba, şekersiz bitki çayları ve su oranı yüksek meyve-sebzeler de katkı sağlayabilir.",
      "Ancak şekerli içecekler, yüksek kalorili içecekler ve aşırı kafeinli ürünler suyun yerine temel kaynak olarak kullanılmamalıdır.",
      "Günlük sıvı tüketiminin önemli bir bölümünü doğrudan sudan karşılamak daha dengeli bir yaklaşım olabilir.",
    ],
  },
  {
    title: "Dehidrasyon belirtileri nelerdir?",
    paragraphs: [
      "Susama hissi, ağız kuruluğu, koyu renkli idrar, baş ağrısı, yorgunluk, baş dönmesi ve konsantrasyon güçlüğü yetersiz sıvı alımının yaygın belirtileri arasında sayılabilir.",
      "İleri sıvı kaybında kalp atım hızında artış, belirgin halsizlik ve bilinç bulanıklığı görülebilir.",
      "Belirtiler şiddetliyse veya kusma, ishal, yüksek ateş gibi sıvı kaybını artıran durumlar varsa tıbbi değerlendirme gerekir.",
    ],
  },
  {
    title: "Fazla su içmek zararlı olabilir mi?",
    paragraphs: [
      "Evet. Çok kısa sürede aşırı miktarda su tüketmek kandaki sodyum düzeyini düşürebilir ve elektrolit dengesini bozabilir.",
      "Bu durum nadir görülse de özellikle uzun süreli dayanıklılık sporlarında yalnızca su tüketip elektrolit kaybını yerine koymayan kişilerde risk oluşturabilir.",
      "Su tüketimini gün içine yaymak ve susama, idrar rengi, terleme ve aktivite düzeyi gibi işaretleri birlikte değerlendirmek daha güvenlidir.",
    ],
  },
  {
    title: "Hamilelik ve emzirme döneminde su ihtiyacı",
    paragraphs: [
      "Gebelik ve emzirme dönemlerinde sıvı ihtiyacı artabilir.",
      "Emzirme sırasında süt üretimi nedeniyle ek sıvı ihtiyacı oluşabilir; ancak kişisel ihtiyaç hava sıcaklığına, beslenmeye ve sağlık durumuna göre değişir.",
      "Bu dönemlerde genel hesaplama sonuçları yerine doktor veya diyetisyen önerileri öncelikli olmalıdır.",
    ],
  },
  {
    title: "Günlük su tüketimi nasıl takip edilmelidir?",
    paragraphs: [
      "Suyu gün içine yaymak, bir anda yüksek miktarda içmekten daha dengeli bir yöntemdir.",
      "Sabah, öğün araları, egzersiz öncesi-sonrası ve akşam saatlerinde düzenli aralıklarla su içmek günlük hedefe ulaşmayı kolaylaştırabilir.",
      "Şişe hacmini bilmek, günlük toplamı takip etmek ve hatırlatıcı kullanmak sürdürülebilir bir alışkanlık oluşturabilir.",
    ],
  },
];

const faqItems: CalculatorFaqItem[] = [
  {
    question: "Günde 2 litre su herkes için yeterli midir?",
    answer:
      "Hayır. Günlük ihtiyaç kişinin kilosuna, aktivite düzeyine, iklime, terleme miktarına ve sağlık durumuna göre değişebilir.",
  },
  {
    question: "Spor yaptığım günlerde daha fazla su içmeli miyim?",
    answer:
      "Evet. Egzersiz sırasında terleme arttığı için ek sıvı gerekebilir. Süre, yoğunluk ve hava koşulları ek miktarı etkiler.",
  },
  {
    question: "Çay ve kahve günlük sıvı hesabına dahil olur mu?",
    answer:
      "Günlük sıvı alımına katkı sağlayabilirler; ancak suyun tamamen yerine geçmeleri önerilmez ve aşırı kafein tüketiminden kaçınılmalıdır.",
  },
  {
    question: "Fazla su içmek zararlı olabilir mi?",
    answer:
      "Evet. Çok kısa sürede aşırı su tüketimi elektrolit dengesini bozabilir. Tüketimi gün içine yaymak önemlidir.",
  },
  {
    question: "Sıcak havalarda su ihtiyacı artar mı?",
    answer:
      "Evet. Sıcak ve nemli havalarda terleme yoluyla kaybedilen sıvı arttığı için ihtiyaç yükselir.",
  },
  {
    question: "Yemeklerden alınan su hesaba dahil olur mu?",
    answer:
      "Evet. Çorba, meyve, sebze ve süt ürünleri gibi su içeriği yüksek besinler toplam sıvı alımına katkı sağlar.",
  },
  {
    question: "Bardak hesabında kaç mililitre kullanılır?",
    answer:
      "Standart olarak 200 ml veya 250 ml bardak kullanılabilir. Evdeki bardak hacmi farklıysa sonucu kendi bardağınıza göre uyarlayın.",
  },
  {
    question: "İdrar rengi su ihtiyacını gösterir mi?",
    answer:
      "Açık saman sarısı renk genellikle yeterli hidrasyonla ilişkilidir. Çok koyu renk sıvı ihtiyacını gösterebilir; bazı ilaçlar ve besinler rengi değiştirebilir.",
  },
  {
    question: "Sabah kalkınca su içmek gerekli midir?",
    answer:
      "Gece boyunca sıvı alınmadığı için sabah su içmek günlük hidrasyona katkı sağlayabilir.",
  },
  {
    question: "Su içmek kilo vermeyi sağlar mı?",
    answer:
      "Su tek başına kilo verdirmez; ancak kalorisiz olması ve tokluk hissine katkı sağlaması dolaylı olarak destek olabilir.",
  },
  {
    question: "Egzersiz öncesi ne kadar su içilmelidir?",
    answer:
      "Tek bir sabit miktar yoktur. Egzersizden önce susuz başlamamak ve sıvıyı zamana yaymak önemlidir.",
  },
  {
    question: "Egzersiz sırasında ne sıklıkla su içilmelidir?",
    answer:
      "Süre, yoğunluk, sıcaklık ve terleme miktarına göre değişir. Küçük yudumlarla düzenli aralıklar tercih edilebilir.",
  },
  {
    question: "Elektrolit içecekleri gerekli midir?",
    answer:
      "Kısa ve hafif egzersizlerde çoğu kişi için su yeterli olabilir. Uzun, yoğun ve çok terlemeli aktivitelerde elektrolit desteği gerekebilir.",
  },
  {
    question: "Maden suyu günlük sıvıya dahil edilir mi?",
    answer:
      "Evet. Sade maden suyu sıvı alımına katkı sağlar; ancak sodyum içeriği nedeniyle kişisel sağlık durumu dikkate alınmalıdır.",
  },
  {
    question: "Gece su içmek zararlı mıdır?",
    answer:
      "Genellikle zararlı değildir; ancak fazla miktar uyku bölünmesine neden olabilir. Tüketimi gün içine yaymak daha uygundur.",
  },
  {
    question: "Çocukların su ihtiyacı aynı yöntemle hesaplanır mı?",
    answer:
      "Hayır. Çocuklarda yaşa ve gelişime özgü değerlendirme gerekir. Bu araç yetişkinler için genel tahmin sunar.",
  },
  {
    question: "Yaşlılarda susama hissi azalabilir mi?",
    answer:
      "Evet. Yaşla birlikte susama hissi zayıflayabilir. Düzenli ve kontrollü sıvı takibi faydalı olabilir.",
  },
  {
    question: "Böbrek hastaları bu sonucu kullanabilir mi?",
    answer:
      "Sıvı kısıtlaması veya özel öneri gereken durumlarda yalnızca doktor önerisi esas alınmalıdır.",
  },
  {
    question: "Kalp hastalığında fazla su zararlı olabilir mi?",
    answer:
      "Bazı kalp hastalıklarında sıvı sınırlandırması gerekebilir. Genel hesaplama yerine doktor önerisi kullanılmalıdır.",
  },
  {
    question: "Gebelikte su ihtiyacı artar mı?",
    answer:
      "Genellikle artabilir; ancak kişisel ihtiyaç için sağlık uzmanı değerlendirmesi daha uygundur.",
  },
  {
    question: "Emzirme döneminde ne kadar su içilmelidir?",
    answer:
      "Süt üretimi ek sıvı ihtiyacı oluşturabilir. Susama hissi, süt üretimi ve doktor önerileri birlikte değerlendirilmelidir.",
  },
  {
    question: "Çok açık renkli idrar fazla su içtiğimi gösterir mi?",
    answer:
      "Sürekli tamamen renksiz idrar aşırı sıvı tüketiminin işareti olabilir; ancak tek başına kesin değerlendirme değildir.",
  },
  {
    question: "Kışın su ihtiyacı azalır mı?",
    answer:
      "Terleme azalabilir; ancak ısıtılan kuru ortamlar ve kalın kıyafetler sıvı kaybını sürdürebilir.",
  },
  {
    question: "Su ihtiyacı hesabını ne sıklıkla yenilemeliyim?",
    answer:
      "Kilonuz, aktivite düzeniniz, mevsim veya sağlık durumunuz değiştiğinde yeniden hesaplamak faydalı olabilir.",
  },
];

const hydrationFactors = [
  {
    icon: UserRound,
    title: "Vücut ağırlığı",
    text: "Kilo arttıkça temel sıvı ihtiyacı da genellikle yükselir.",
  },
  {
    icon: Activity,
    title: "Aktivite",
    text: "Egzersiz ve fiziksel iş terleme yoluyla sıvı kaybını artırır.",
  },
  {
    icon: ThermometerSun,
    title: "Hava sıcaklığı",
    text: "Sıcak ve nemli koşullar ek sıvı ihtiyacı oluşturabilir.",
  },
  {
    icon: HeartPulse,
    title: "Sağlık durumu",
    text: "Bazı hastalıklar ve ilaçlar sıvı dengesini değiştirebilir.",
  },
];

const urineColorRows = [
  {
    level: "1–2",
    colorLabel: "Çok açık sarı",
    status: "Genellikle yeterli",
    description:
      "Günlük sıvı alımınız çoğu durumda yeterli olabilir.",
  },
  {
    level: "3",
    colorLabel: "Açık sarı",
    status: "İyi düzey",
    description:
      "Genellikle dengeli hidrasyonla ilişkilendirilebilir.",
  },
  {
    level: "4–5",
    colorLabel: "Orta sarı",
    status: "Su artırılabilir",
    description:
      "Yakın zamanda sıvı alımını artırmak faydalı olabilir.",
  },
  {
    level: "6–7",
    colorLabel: "Koyu sarı",
    status: "Dehidrasyon riski",
    description:
      "Belirgin sıvı ihtiyacı olabilir; belirtileri takip edin.",
  },
  {
    level: "8",
    colorLabel: "Koyu kehribar",
    status: "Dikkat",
    description:
      "Şiddetli sıvı kaybı veya başka bir durum olabilir.",
  },
];

const dailyPlan = [
  {
    icon: Sun,
    time: "07.00–09.00",
    title: "Güne başlangıç",
    description:
      "Uyandıktan sonra 1–2 bardak su içerek gece boyunca oluşan kaybı destekleyin.",
  },
  {
    icon: GlassWater,
    time: "09.00–12.00",
    title: "Sabah bölümü",
    description:
      "Çalışma süresince küçük aralıklarla su tüketin.",
  },
  {
    icon: CloudSun,
    time: "12.00–16.00",
    title: "Öğle ve öğleden sonra",
    description:
      "Öğünlerle birlikte ve öğün aralarında düzenli sıvı alın.",
  },
  {
    icon: Activity,
    time: "Egzersiz çevresi",
    title: "Antrenman desteği",
    description:
      "Egzersiz öncesi, sırası ve sonrasında terleme düzeyinize göre su için.",
  },
  {
    icon: Moon,
    time: "18.00–22.00",
    title: "Akşam",
    description:
      "Hedefin kalan kısmını tamamlayın; yatmadan hemen önce aşırı miktardan kaçının.",
  },
];

const mistakes = [
  {
    title: "Susamayı beklemek",
    text: "Susama hissi oluşmadan önce düzenli aralıklarla sıvı almak daha dengeli olabilir.",
  },
  {
    title: "Bir anda çok fazla içmek",
    text: "Yüksek miktarı kısa sürede tüketmek rahatsızlık ve elektrolit dengesizliği oluşturabilir.",
  },
  {
    title: "Egzersizi hesaba katmamak",
    text: "Terleme miktarı yüksekse temel hesaplamaya ek sıvı gerekebilir.",
  },
  {
    title: "Her içeceği eşit saymak",
    text: "Şekerli ve yüksek kafeinli içecekler suyun yerine ana kaynak olmamalıdır.",
  },
];

export default function SuIhtiyaciHesaplamaPage() {
  return (
    <CalculatorLayout
      calculator={calculator}
      categoryClassName="bg-cyan-100 text-cyan-700"
      contentSections={contentSections}
      faqItems={faqItems}
      warningTitle="Sağlık bilgilendirmesi"
      warningText="Bu araç yalnızca genel bir günlük sıvı ihtiyacı tahmini sunar. Kalp, böbrek, karaciğer veya sıvı dengesiyle ilgili bir sağlık durumunuz varsa doktorunuzun önerisi önceliklidir. Hesaplama sonucu tıbbi tavsiye yerine geçmez."
    >
      <section className="relative overflow-hidden rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-5 shadow-sm sm:p-7 lg:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-200/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.15em] text-cyan-700 shadow-sm backdrop-blur">
              <Sparkles size={15} />
              Günlük hidrasyon analizi
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
              Günlük su ihtiyacınızı
              <span className="text-cyan-600"> litre, bardak ve şişe</span>{" "}
              karşılığıyla görün.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Kilonuz, aktivite düzeyiniz, ortam sıcaklığı ve terleme
              miktarınıza göre günlük tahmini sıvı ihtiyacınızı hesaplayın.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Droplets,
                  title: "Litre hesabı",
                  text: "Günlük toplam tahmin",
                },
                {
                  icon: GlassWater,
                  title: "Bardak karşılığı",
                  text: "200 ml ve 250 ml",
                },
                {
                  icon: GlassWater,
                  title: "Şişe karşılığı",
                  text: "500 ml ve 1 litre",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
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

          <div className="rounded-[1.75rem] border border-cyan-200 bg-white/90 p-5 shadow-xl shadow-cyan-100/60 backdrop-blur sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-600">
                  Hesaplama yaklaşımı
                </p>

                <p className="mt-2 text-xl font-black text-slate-950">
                  Temel ihtiyaç + ek sıvı
                </p>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-600 text-white shadow-lg shadow-cyan-200">
                <Waves size={22} />
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                  1
                </span>

                <div>
                  <p className="font-black text-slate-950">
                    Vücut ağırlığına göre temel miktar
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Kilo, uygun mililitre katsayısıyla çarpılır.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-cyan-200 bg-cyan-50 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-600 text-sm font-black text-white">
                  2
                </span>

                <div>
                  <p className="font-black text-cyan-950">
                    Aktivite ve hava etkisi
                  </p>

                  <p className="mt-1 text-sm leading-6 text-cyan-800">
                    Egzersiz, sıcaklık ve terlemeye göre ek sıvı uygulanır.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-950 p-5 text-white">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-cyan-300">
                Temel formül
              </p>

              <p className="mt-3 text-lg font-black">
                Su ihtiyacı = Kilo × ml katsayısı
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Sonuç genel bir günlük sıvı tahmini sunar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <WaterIntakeCalculator />
      </div>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-700">
            <Gauge size={14} />
            İhtiyacı etkileyen faktörler
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            Tek bir sabit değer herkese uymaz
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Günlük sıvı ihtiyacı yaşam biçimine ve çevresel koşullara göre
            değişir.
          </p>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hydrationFactors.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white">
                  <Icon size={20} />
                </span>

                <h3 className="mt-5 font-black text-slate-950">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 text-white shadow-xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div
              aria-hidden="true"
              className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
            />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-cyan-200">
                <Clock3 size={14} />
                Gün içine yayılmış plan
              </div>

              <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
                Suyu tek seferde değil, gün boyunca dengeli tüketin.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Düzenli aralıklar hem günlük hedefe ulaşmayı kolaylaştırır hem de
                çok kısa sürede aşırı su tüketme riskini azaltır.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex items-center gap-3">
                  <TimerReset size={21} className="text-cyan-300" />

                  <p className="font-black">
                    Hatırlatıcı kullanın
                  </p>
                </div>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Telefon alarmı, masa üzerindeki şişe veya saat başı küçük
                  hedefler su tüketimini düzenli hâle getirebilir.
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/5 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="space-y-4">
              {dailyPlan.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.time}
                    className="flex gap-4 rounded-3xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-slate-950">
                      <Icon size={21} />
                    </span>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.12em] text-cyan-300">
                        {item.time}
                      </p>

                      <h3 className="mt-1 font-black text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-300">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-9">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-amber-700">
            <Sun size={14} />
            İdrar rengi rehberi
          </div>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
            İdrar rengi hidrasyon hakkında ipucu verebilir
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
            Bu tablo tıbbi tanı aracı değildir. Besinler, vitaminler ve ilaçlar
            idrar rengini değiştirebilir.
          </p>
        </div>

        <div className="mt-7 overflow-hidden rounded-3xl border border-slate-200">
          <div className="hidden grid-cols-[0.5fr_1fr_1fr_1.5fr] gap-4 bg-slate-950 px-6 py-4 text-xs font-black uppercase tracking-[0.13em] text-white md:grid">
            <span>Seviye</span>
            <span>Renk</span>
            <span>Durum</span>
            <span>Değerlendirme</span>
          </div>

          <div className="divide-y divide-slate-200">
            {urineColorRows.map((row) => (
              <article
                key={row.level}
                className="grid gap-3 bg-white p-5 md:grid-cols-[0.5fr_1fr_1fr_1.5fr] md:items-center md:gap-4 md:px-6"
              >
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1.5 text-sm font-black text-slate-800">
                  {row.level}
                </span>

                <p className="font-black text-slate-950">
                  {row.colorLabel}
                </p>

                <p className="text-sm font-black text-amber-700">
                  {row.status}
                </p>

                <p className="text-sm leading-6 text-slate-600">
                  {row.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-start gap-4 rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500 text-white">
            <AlertTriangle size={21} />
          </span>

          <div>
            <p className="font-black text-amber-950">
              Koyu idrar her zaman yalnızca susuzluk anlamına gelmez
            </p>

            <p className="mt-2 text-sm leading-7 text-amber-800">
              Renk değişimi kalıcıysa, ağrı, yanma veya başka belirtiler varsa
              sağlık uzmanına başvurun.
            </p>
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
            Su tüketimini zorlaştıran alışkanlıklar
          </h2>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2">
          {mistakes.map((item, index) => (
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
                    {item.text}
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
              70 kg ve orta aktif bir kişi için su ihtiyacı
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Kilogram başına 35 ml kullanıldığında temel günlük ihtiyaç
              2.450 ml olur.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-black text-blue-700">
            <Droplets size={16} />
            70 × 35
          </span>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm">
              <UserRound size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-slate-500">
              Vücut ağırlığı
            </p>

            <p className="mt-2 text-2xl font-black text-slate-950">
              70 kg
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

          <article className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-600 text-white">
              <Gauge size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-cyan-700">
              Kullanılan katsayı
            </p>

            <p className="mt-2 text-2xl font-black text-cyan-950">
              35 ml/kg
            </p>
          </article>

          <article className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 text-white shadow-xl shadow-cyan-200">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
              <Droplets size={20} />
            </span>

            <p className="mt-5 text-sm font-semibold text-cyan-100">
              Günlük tahmin
            </p>

            <p className="mt-2 text-2xl font-black">
              2,45 litre
            </p>
          </article>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-4">
          <div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-cyan-700">
              200 ml bardak
            </p>

            <p className="mt-2 text-2xl font-black text-cyan-950">
              Yaklaşık 12 bardak
            </p>
          </div>

          <div className="rounded-3xl border border-sky-200 bg-sky-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-sky-700">
              250 ml bardak
            </p>

            <p className="mt-2 text-2xl font-black text-sky-950">
              Yaklaşık 10 bardak
            </p>
          </div>

          <div className="rounded-3xl border border-blue-200 bg-blue-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-blue-700">
              500 ml şişe
            </p>

            <p className="mt-2 text-2xl font-black text-blue-950">
              Yaklaşık 5 şişe
            </p>
          </div>

          <div className="rounded-3xl border border-violet-200 bg-violet-50 p-5">
            <p className="text-xs font-black uppercase tracking-[0.13em] text-violet-700">
              1 litre şişe
            </p>

            <p className="mt-2 text-2xl font-black text-violet-950">
              Yaklaşık 2,5 şişe
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10 overflow-hidden rounded-[2rem] border border-cyan-200 bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 p-6 text-white shadow-xl shadow-cyan-200/60 sm:p-8 lg:p-10">
        <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
              <BadgeCheck size={14} />
              Günlük hidrasyon hedefi
            </div>

            <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
              Sonucu başlangıç noktası olarak kullanın, vücudunuzun sinyallerini
              takip edin.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-cyan-50 sm:text-base">
              Susama, idrar rengi, aktivite ve hava koşullarını birlikte
              değerlendirerek günlük sıvı planınızı kişiselleştirin.
            </p>
          </div>

          <a
            href="#top"
            className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-6 text-sm font-black text-cyan-700 shadow-lg transition hover:-translate-y-0.5 hover:bg-cyan-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/30"
          >
            Yeniden hesapla
            <Zap size={18} />
          </a>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Droplets,
              title: "Gün içine yayın",
              text: "Tek sefer yerine düzenli aralıklar kullanın.",
            },
            {
              icon: ThermometerSun,
              title: "Koşulları izleyin",
              text: "Sıcaklık ve terleme arttıkça miktarı güncelleyin.",
            },
            {
              icon: ShieldCheck,
              title: "Sağlık durumunu önemseyin",
              text: "Sıvı kısıtlaması gereken durumlarda doktor önerisini izleyin.",
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

                <p className="mt-2 text-sm leading-6 text-cyan-50">
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
            icon: Info,
            title: "Genel tahmin",
            text: "Hesaplama herkes için kesin bir tıbbi sıvı reçetesi değildir.",
          },
          {
            icon: Leaf,
            title: "Besinlerden gelen sıvı",
            text: "Meyve, sebze ve çorbalar toplam sıvı alımına katkı sağlar.",
          },
          {
            icon: CheckCircle2,
            title: "Dengeli tüketim",
            text: "Yüksek miktarı kısa sürede değil, gün boyunca tüketin.",
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