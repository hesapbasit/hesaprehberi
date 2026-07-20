import type { Metadata } from "next";

import Breadcrumb from "@/components/common/Breadcrumb";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description:
    "HesapRehberi çerez politikası, kullanılan çerez türleri ve çerez tercihleri hakkında bilgi edinin.",
  alternates: {
    canonical: "/cerez-politikasi",
  },
  openGraph: {
    title: "Çerez Politikası | HesapRehberi",
    description:
      "HesapRehberi tarafından kullanılabilecek çerez türleri ve çerez tercihleri hakkında bilgi edinin.",
    url: "/cerez-politikasi",
    type: "website",
  },
};

export default function CerezPolitikasiPage() {
  return (
    <main className="min-h-screen bg-slate-100 py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6">
        <Breadcrumb
          items={[
            {
              label: "Çerez Politikası",
            },
          ]}
        />

        <article className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <header>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
              Çerez Politikası
            </h1>

            <p className="mt-6 leading-8 text-slate-600">
              Bu Çerez Politikası, HesapRehberi internet sitesinde kullanılan
              çerezler ve benzer teknolojiler hakkında kullanıcıları
              bilgilendirmek amacıyla hazırlanmıştır.
            </p>
          </header>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Çerez Nedir?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından
              tarayıcınıza kaydedilebilen küçük veri dosyalarıdır. Çerezler;
              sitenin düzgün çalışması, tercihlerin hatırlanması ve kullanım
              bilgilerinin analiz edilmesi amacıyla kullanılabilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Kullanılabilecek Çerez Türleri
            </h2>

            <div className="mt-6 space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-slate-900">
                  Zorunlu Çerezler
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  İnternet sitesinin temel özelliklerinin çalışması için
                  gerekli olan çerezlerdir. Bu çerezler olmadan bazı site
                  özellikleri düzgün çalışmayabilir.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-900">
                  Tercih Çerezleri
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Dil, görünüm veya benzeri kullanıcı tercihlerinin
                  hatırlanmasına yardımcı olabilir.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-900">
                  Analiz Çerezleri
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Ziyaretçilerin siteyi nasıl kullandığını anlamamıza ve site
                  performansını geliştirmemize yardımcı olabilir. Google
                  Analytics gibi bir hizmet kullanılmaya başlandığında bu
                  bölüm ayrıca güncellenecektir.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-slate-900">
                  Reklam Çerezleri
                </h3>

                <p className="mt-3 leading-8 text-slate-600">
                  Google AdSense veya benzeri reklam hizmetleri kullanıldığında,
                  reklamların ölçülmesi ve kişiselleştirilmesi amacıyla çerezler
                  kullanılabilir. Bu tür hizmetler devreye alındığında kullanıcı
                  tercihleri için ayrıca bir çerez yönetim sistemi
                  sunulacaktır.
                </p>
              </section>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Çerezlerin Yönetimi
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Tarayıcı ayarlarınız üzerinden çerezleri silebilir,
              engelleyebilir veya belirli internet siteleri için çerez
              kullanımını sınırlandırabilirsiniz. Çerezleri tamamen kapatmanız
              halinde bazı site özellikleri beklenen şekilde çalışmayabilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Üçüncü Taraf Hizmetleri
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              İleride Google Analytics, Google AdSense veya benzeri üçüncü
              taraf hizmetleri kullanılabilir. Bu hizmetler kendi çerezlerini
              yerleştirebilir ve verileri kendi gizlilik politikalarına göre
              işleyebilir.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              Politika Güncellemeleri
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Kullanılan teknolojiler veya yasal gereklilikler değiştiğinde bu
              Çerez Politikası güncellenebilir. Güncel metin her zaman bu
              sayfada yayımlanır.
            </p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-bold text-slate-900">
              İletişim
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Çerez politikasıyla ilgili sorularınız için iletişim sayfamız
              üzerinden bize ulaşabilirsiniz.
            </p>
          </section>

          <footer className="mt-10 border-t border-slate-200 pt-6">
            <p className="text-sm text-slate-500">
              Son güncelleme: 14 Temmuz 2026
            </p>
          </footer>
        </article>
      </div>
    </main>
  );
}