import type { Metadata } from "next";
import {
  AlertTriangle,
  BriefcaseBusiness,
  Bug,
  Clock3,
  Lightbulb,
  Mail,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "@/components/common/Breadcrumb";

const contactEmail = "dusunurumm@gmail.com";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "HesapRehberi ile iletişime geçin. Öneri, hata bildirimi, içerik düzeltme ve iş birliği taleplerinizi bize e-posta yoluyla iletin.",
  alternates: {
    canonical: "/iletisim",
  },
  openGraph: {
    title: "İletişim | HesapRehberi",
    description:
      "Öneri, hata bildirimi, içerik düzeltme ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
    url: "/iletisim",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "İletişim | HesapRehberi",
    description:
      "Öneri, hata bildirimi ve iş birliği talepleriniz için HesapRehberi ile iletişime geçin.",
  },
};

const contactTopics = [
  {
    title: "Hata Bildirimi",
    description:
      "Bir hesaplama aracında teknik hata, yanlış sonuç veya görüntüleme problemi fark ettiyseniz bize bildirebilirsiniz.",
    icon: Bug,
    iconClassName: "bg-red-100 text-red-700",
  },
  {
    title: "Öneri ve Görüşler",
    description:
      "Yeni hesaplama aracı önerilerinizi, tasarım görüşlerinizi ve geliştirme fikirlerinizi paylaşabilirsiniz.",
    icon: Lightbulb,
    iconClassName: "bg-amber-100 text-amber-700",
  },
  {
    title: "İş Birliği",
    description:
      "Kurumsal iletişim, reklam, içerik iş birliği ve diğer ticari talepleriniz için bize ulaşabilirsiniz.",
    icon: BriefcaseBusiness,
    iconClassName: "bg-violet-100 text-violet-700",
  },
];

const emailSubject = encodeURIComponent("HesapRehberi İletişim Talebi");

const emailBody = encodeURIComponent(`Merhaba HesapRehberi,

İletişim konusu:

İlgili sayfa veya hesaplama aracı:

Mesajım:

`);

const mailtoUrl = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

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

        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            <MessageCircle size={17} aria-hidden="true" />
            Bize Ulaşın
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            İletişim
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Önerilerinizi, hata bildirimlerinizi, içerik düzeltme taleplerinizi
            ve iş birliği görüşmelerinizi e-posta yoluyla bize iletebilirsiniz.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <section
            className="rounded-3xl bg-white p-8 shadow-sm md:p-10"
            aria-labelledby="contact-email-title"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Mail size={30} aria-hidden="true" />
            </div>

            <h2
              id="contact-email-title"
              className="mt-7 text-3xl font-bold tracking-tight text-slate-900"
            >
              E-posta ile iletişime geçin
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              Mesajınızın daha hızlı değerlendirilebilmesi için konu başlığını,
              ilgili sayfanın bağlantısını ve karşılaştığınız durumu mümkün
              olduğunca açık biçimde yazmanızı öneririz.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                İletişim adresimiz
              </p>

              <a
                href={`mailto:${contactEmail}`}
                className="mt-3 inline-flex break-all text-xl font-bold text-blue-700 transition hover:text-blue-800 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                {contactEmail}
              </a>
            </div>

            <a
              href={mailtoUrl}
              className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200 sm:w-auto"
            >
              <Mail size={20} aria-hidden="true" />
              E-posta Gönder
            </a>

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <Clock3
                className="mt-0.5 shrink-0 text-emerald-700"
                size={22}
                aria-hidden="true"
              />

              <div>
                <h3 className="font-bold text-emerald-950">
                  Yanıt süresi
                </h3>

                <p className="mt-1 leading-7 text-emerald-900">
                  Mesajları mümkün olan en kısa sürede değerlendiriyoruz.
                  Yoğunluğa bağlı olarak yanıt süresi değişebilir.
                </p>
              </div>
            </div>
          </section>

          <section
            className="space-y-5"
            aria-labelledby="contact-topics-title"
          >
            <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
              <h2
                id="contact-topics-title"
                className="text-2xl font-bold"
              >
                Hangi konularda yazabilirsiniz?
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Aşağıdaki konularda gönderilen mesajları inceleyerek gerekli
                düzeltme ve geliştirmeleri yapmaya çalışıyoruz.
              </p>
            </div>

            {contactTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <article
                  key={topic.title}
                  className="rounded-3xl bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${topic.iconClassName}`}
                    >
                      <Icon size={23} aria-hidden="true" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {topic.title}
                      </h3>

                      <p className="mt-2 leading-7 text-slate-600">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        </div>

        <section
          className="mt-8 grid gap-6 md:grid-cols-2"
          aria-label="İletişim bilgilendirmeleri"
        >
          <aside className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
            <div className="flex items-start gap-4">
              <AlertTriangle
                className="mt-1 shrink-0 text-amber-700"
                size={24}
                aria-hidden="true"
              />

              <div>
                <h2 className="text-lg font-bold text-amber-950">
                  Kişisel ve finansal bilgilerinizi paylaşmayın
                </h2>

                <p className="mt-2 leading-7 text-amber-900">
                  E-posta mesajınızda kimlik numarası, banka kartı bilgisi,
                  hesap şifresi veya diğer hassas kişisel bilgilerinizi
                  paylaşmayın.
                </p>
              </div>
            </div>
          </aside>

          <aside className="rounded-3xl border border-blue-200 bg-blue-50 p-7">
            <div className="flex items-start gap-4">
              <ShieldCheck
                className="mt-1 shrink-0 text-blue-700"
                size={24}
                aria-hidden="true"
              />

              <div>
                <h2 className="text-lg font-bold text-blue-950">
                  Bilgilendirme
                </h2>

                <p className="mt-2 leading-7 text-blue-900">
                  Hesaplama araçları genel bilgilendirme amacı taşır. Finansal,
                  vergisel, hukuki veya sağlıkla ilgili kararlar için resmi
                  kaynakları ve alanında yetkili uzmanların görüşlerini dikkate
                  alın.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}