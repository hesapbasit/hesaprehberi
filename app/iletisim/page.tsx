import type { Metadata } from "next";
import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "HesapRehberi ile iletişime geçin. Öneri, hata bildirimi ve iş birliği taleplerinizi bize iletin.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | HesapRehberi",
    description:
      "Öneri, hata bildirimi ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
    url: "/iletisim",
    type: "website",
  },
};

export default function IletisimPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Breadcrumb
          items={[
            {
              label: "İletişim",
            },
          ]}
        />

        <div className="mb-12 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Bize Ulaşın
          </span>

          <h1 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            İletişim
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Önerilerinizi, hata bildirimlerinizi ve iş birliği taleplerinizi
            bizimle paylaşabilirsiniz.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="space-y-6">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Mail size={27} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                E-posta
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Bize doğrudan e-posta gönderebilirsiniz.
              </p>

              <a
                href="mailto:dusunurumm@gmail.com"
                className="mt-5 inline-flex font-semibold text-blue-600 transition hover:text-blue-700"
              >
                dusunurumm@gmail.com
              </a>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                <MessageCircle size={27} />
              </div>

              <h2 className="mt-6 text-2xl font-bold text-slate-900">
                Geri Bildirim
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Eksik veya hatalı bir hesaplama fark ederseniz bize detaylarıyla
                bildirebilirsiniz.
              </p>
            </article>

            <article className="rounded-3xl border border-amber-200 bg-amber-50 p-8">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 shrink-0 text-amber-700" size={24} />

                <p className="leading-7 text-amber-900">
                  Hesaplama araçları genel bilgi amacıyla sunulur. Finansal,
                  vergisel veya hukuki kararlar için resmi kaynakları ve uzman
                  görüşünü dikkate alın.
                </p>
              </div>
            </article>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
            <h2 className="text-3xl font-bold text-slate-900">
              Mesaj Gönder
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Aşağıdaki form şimdilik görsel taslaktır. Sonraki aşamada gerçekten
              e-posta gönderecek hale getireceğiz.
            </p>

            <form className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Adınız
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Adınızı yazın"
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  E-posta Adresiniz
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ornek@email.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Konu
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Mesajınızın konusu"
                  className="w-full rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold text-slate-800"
                >
                  Mesajınız
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Mesajınızı yazın"
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-5 py-4 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 hover:shadow-lg"
              >
                Mesaj Gönder
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}