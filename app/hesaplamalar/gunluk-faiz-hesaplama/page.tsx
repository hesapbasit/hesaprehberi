import type { Metadata } from "next";

import DailyInterestCalculator from "@/components/calculators/DailyInterestCalculator";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShareButtons from "@/components/common/ShareButtons";
import {
  getCalculatorByHref,
  type CalculatorItem,
} from "@/lib/calculators";
import { createCalculatorMetadata } from "@/lib/createCalculatorMetadata";

const canonicalPath = "/hesaplamalar/gunluk-faiz-hesaplama";

function getRequiredCalculator(): CalculatorItem {
  const foundCalculator = getCalculatorByHref(canonicalPath);

  if (!foundCalculator) {
    throw new Error(
      `${canonicalPath} adresine ait hesaplama bilgisi lib/calculators.ts dosyasında bulunamadı.`,
    );
  }

  return foundCalculator;
}

const calculator = getRequiredCalculator();

export const metadata: Metadata = createCalculatorMetadata({
  ...calculator,
  path: canonicalPath,
});

const faqItems = [
  ["Günlük faiz nasıl hesaplanır?", "Ana para yıllık faiz oranıyla çarpılır ve seçilen 360 veya 365 günlük esasa göre günlük kazanç hesaplanır."],
  ["360 gün ve 365 gün farkı nedir?", "360 gün esasındaki günlük oran, aynı yıllık oran için 365 gün esasına göre biraz daha yüksek çıkar."],
  ["Günlük brüt faiz nedir?", "Stopaj kesintisi yapılmadan önce bir günde oluşan tahmini faiz kazancıdır."],
  ["Günlük net faiz nedir?", "Brüt günlük faizden stopaj düşüldükten sonra kalan tahmini kazançtır."],
  ["Stopaj nasıl uygulanır?", "Toplam brüt faiz kazancı seçilen stopaj oranıyla çarpılır ve net faizden düşülür."],
  ["Basit faiz ile günlük bileşik faiz arasındaki fark nedir?", "Basit faizde kazanç yalnızca ana para üzerinden, bileşik faizde ise biriken tutar üzerinden hesaplanır."],
  ["Gün sayısı arttıkça faiz artar mı?", "Ana para ve oran sabitse genellikle artar. Bileşik yöntemde artış zamanla hızlanabilir."],
  ["Faiz oranı yıllık mı girilmelidir?", "Evet. Araç yıllık brüt faiz oranını günlük kazanca dönüştürür."],
  ["Vade sonu tutarı nedir?", "Ana para ile stopaj sonrası toplam net faiz kazancının toplamıdır."],
  ["Efektif yıllık net getiri neyi gösterir?", "Seçilen dönem getirisinin bileşik biçimde yıllıklaştırılmış yaklaşık karşılığını gösterir."],
  ["Haftalık ve aylık eşdeğer kazanç nasıl bulunur?", "Günlük net kazanç 7 gün veya seçilen gün esasının aylık karşılığıyla çarpılır."],
  ["Valör tarihi sonucu etkiler mi?", "Evet. Faizin işlemeye başladığı tarih değişirse kazanç sağlayan gün sayısı da değişebilir."],
  ["Gecelik faiz ile günlük faiz aynı mıdır?", "Benzer görünse de gecelik ürünlerin faiz işleyişi ve hesaplama koşulları farklı olabilir."],
  ["Negatif faiz oranı girilebilir mi?", "Hayır. Araç negatif faiz ve stopaj oranlarını geçerli kabul etmez."],
  ["Hesaplanan sonuç kesin midir?", "Hayır. Sonuç tahminidir. Bankanın ürün koşulları ve güncel kesintileri nihai sonucu belirler."],
] as const;

export default function GunlukFaizHesaplamaPage() {
  return (
    <main id="top" className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            { label: "Hesaplamalar", href: "/hesaplamalar" },
            { label: calculator.title },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">{calculator.category}</span>
          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">{calculator.title}</h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">{calculator.description}</p>
          <ShareButtons title={`${calculator.title} | HesapRehberi`} description={calculator.description} />
        </div>

        <DailyInterestCalculator />

        <section className="mt-16 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Günlük Faiz Nasıl Hesaplanır?</h2>
          <p className="mt-6 leading-8 text-slate-600">
            Günlük faiz hesabında ana para, yıllık faiz oranı ve seçilen gün sayım esası kullanılır. Basit faiz yönteminde yıllık oran 360 veya 365 güne bölünerek günlük oran bulunur ve gün sayısıyla çarpılır.
          </p>
          <p className="mt-5 leading-8 text-slate-600">
            Brüt kazanç üzerinden stopaj kesildiğinde net faiz ortaya çıkar. Günlük bileşik faiz seçildiğinde her günün kazancı teorik olarak ana paraya eklenir ve sonraki gün yeni toplam üzerinden hesaplanır.
          </p>
          <div className="mt-8 rounded-2xl border border-sky-100 bg-sky-50 p-6">
            <h3 className="text-xl font-bold text-slate-900">Basit günlük faiz formülü</h3>
            <div className="mt-5 space-y-3 text-slate-700">
              <p><strong>Günlük brüt faiz:</strong> Ana para × yıllık faiz oranı / gün sayım esası</p>
              <p><strong>Toplam brüt faiz:</strong> Günlük brüt faiz × gün sayısı</p>
              <p><strong>Net faiz:</strong> Brüt faiz − stopaj</p>
              <p><strong>Vade sonu:</strong> Ana para + net faiz</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">360 Gün ve 365 Gün Esası Arasındaki Fark</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">360 gün esası</h3>
              <p className="mt-3 leading-7 text-slate-600">Yıllık oran 360'a bölündüğü için günlük faiz oranı aynı yıllık oran altında daha yüksek görünür.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6">
              <h3 className="text-xl font-semibold text-slate-900">365 gün esası</h3>
              <p className="mt-3 leading-7 text-slate-600">Takvim yılını temel alır ve günlük getiri hesaplamalarında sık kullanılan yaklaşımlardan biridir.</p>
            </article>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Günlük Faiz Hesabında Dikkat Edilecek Noktalar</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              ["Valör tarihi", "Paranın faiz kazanmaya başladığı tarih, toplam faiz işleyen gün sayısını doğrudan etkiler."],
              ["Stopaj oranı", "Net kazanç hesabında güncel ve ürüne uygun stopaj oranı kullanılmalıdır."],
              ["Faiz yöntemi", "Ürünün basit mi yoksa bileşik faiz mi uyguladığı teklif koşullarından doğrulanmalıdır."],
              ["Gün sayım esası", "360 ve 365 günlük hesaplama yaklaşımları farklı sonuçlar üretebilir."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold text-slate-900">Sık Sorulan Sorular</h2>
          <div className="mt-8 space-y-8">
            {faqItems.map(([question, answer]) => (
              <article key={question}>
                <h3 className="text-lg font-semibold text-slate-900">{question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-800 p-8 text-white shadow-sm md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Günlük faiz kazancınızı hemen hesaplayın</h2>
              <p className="mt-4 max-w-2xl leading-7 text-sky-100">Ana para, faiz, gün sayısı ve stopaj değerlerini değiştirerek farklı günlük getiri senaryolarını inceleyebilirsiniz.</p>
            </div>
            <a href="#hesaplama-araci" className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-white px-6 py-4 font-semibold text-sky-800 transition hover:bg-sky-50">Yeniden Hesapla</a>
          </div>
        </section>
      </div>
    </main>
  );
}