"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const questions = [
  {
    question: "HesapRehberi ücretsiz mi?",
    answer:
      "Evet. HesapRehberi üzerindeki hesaplama araçlarını üyelik oluşturmadan ücretsiz kullanabilirsiniz.",
  },
  {
    question: "Hesaplama sonuçları kesin midir?",
    answer:
      "Araçlar standart matematiksel formüllerle yaklaşık sonuç üretir. Banka ücretleri, vergiler, mevzuat ve kişisel koşullar gerçek sonucu değiştirebilir.",
  },
  {
    question: "Hangi hesaplama araçlarını kullanabilirim?",
    answer:
      "KDV, kredi, faiz, brüt-net maaş, döviz ve enflasyon hesaplama araçlarını kullanabilirsiniz. Yeni araçlar zamanla eklenecektir.",
  },
  {
    question: "Girdiğim bilgiler kaydediliyor mu?",
    answer:
      "Hesaplama alanlarına yazdığınız tutarlar tarayıcınızda işlenir. Şu an kullanıcı hesabı veya hesaplama geçmişi sistemi bulunmamaktadır.",
  },
  {
    question: "Döviz hesaplama aracı canlı kur kullanıyor mu?",
    answer:
      "Şimdilik hayır. Güncel kuru kendiniz girmeniz gerekir. İlerleyen aşamada güvenilir bir canlı kur kaynağı bağlanacaktır.",
  },
  {
    question: "Hatalı bir hesaplama görürsem ne yapmalıyım?",
    answer:
      "İletişim sayfasındaki e-posta adresi veya geri bildirim formu üzerinden bize bildirebilirsiniz.",
  },
];

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24">
      <div className="text-center">
        <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
          Merak Edilenler
        </span>

        <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
          Sık Sorulan Sorular
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Hesaplama araçlarımız ve platformumuz hakkında sık sorulan soruların
          cevaplarını inceleyin.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {item.question}
                </span>

                <ChevronDown
                  size={21}
                  className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="leading-8 text-slate-600">{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}