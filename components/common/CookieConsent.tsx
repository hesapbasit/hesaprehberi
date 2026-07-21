"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  Check,
  Cookie,
  Settings2,
  ShieldCheck,
  X,
} from "lucide-react";

type ConsentPreference = "accepted" | "rejected" | null;

const STORAGE_KEY = "hesaprehberi-cookie-consent";
const GOOGLE_ANALYTICS_ID = "G-PT7R31KETF";

function removeGoogleAnalyticsCookies() {
  const cookies = document.cookie.split(";");

  const hostnameParts = window.location.hostname.split(".");
  const domains: string[] = [];

  for (let index = 0; index < hostnameParts.length; index += 1) {
    domains.push(`.${hostnameParts.slice(index).join(".")}`);
  }

  cookies.forEach((cookie) => {
    const cookieName = cookie.split("=")[0]?.trim();

    if (!cookieName || !cookieName.startsWith("_ga")) {
      return;
    }

    document.cookie = `${cookieName}=; Max-Age=0; path=/`;
    document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${window.location.hostname}`;

    domains.forEach((domain) => {
      document.cookie = `${cookieName}=; Max-Age=0; path=/; domain=${domain}`;
    });
  });
}

export default function CookieConsent() {
  const [isMounted, setIsMounted] = useState(false);
  const [preference, setPreference] =
    useState<ConsentPreference>(null);

  useEffect(() => {
    try {
      const savedPreference = window.localStorage.getItem(STORAGE_KEY);

      if (
        savedPreference === "accepted" ||
        savedPreference === "rejected"
      ) {
        setPreference(savedPreference);
      }
    } catch {
      setPreference(null);
    } finally {
      setIsMounted(true);
    }
  }, []);

  function savePreference(value: Exclude<ConsentPreference, null>) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Tarayıcı depolaması kapalıysa seçim yalnızca oturum boyunca korunur.
    }

    setPreference(value);
  }

  function handleAccept() {
    savePreference("accepted");
  }

  function handleReject() {
    const analyticsWasActive = preference === "accepted";

    try {
      window.localStorage.setItem(STORAGE_KEY, "rejected");
    } catch {
      // Tarayıcı depolaması kapalıysa işlem yine devam eder.
    }

    removeGoogleAnalyticsCookies();
    setPreference("rejected");

    if (analyticsWasActive) {
      window.location.reload();
    }
  }

  function handleOpenPreferences() {
    setPreference(null);
  }

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {preference === "accepted" ? (
        <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />
      ) : null}

      {preference === null ? (
        <section
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-description"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl md:bottom-6"
        >
          <div className="grid gap-6 p-6 md:grid-cols-[auto_1fr] md:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Cookie size={28} aria-hidden="true" />
            </div>

            <div>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <h2
                    id="cookie-consent-title"
                    className="text-xl font-bold text-slate-900 md:text-2xl"
                  >
                    Çerez tercihlerinizi yönetin
                  </h2>

                  <p
                    id="cookie-consent-description"
                    className="mt-3 max-w-3xl leading-7 text-slate-600"
                  >
                    HesapRehberi&apos;nin kullanımını analiz etmek ve
                    hizmetlerimizi geliştirmek için Google Analytics
                    çerezlerinden yararlanıyoruz. Zorunlu olmayan analiz
                    çerezleri yalnızca onay vermeniz durumunda etkinleşir.
                  </p>
                </div>

                <ShieldCheck
                  className="hidden shrink-0 text-emerald-600 sm:block"
                  size={26}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Ayrıntılı bilgi için{" "}
                <Link
                  href="/cerez-politikasi"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
                >
                  Çerez Politikası
                </Link>{" "}
                ve{" "}
                <Link
                  href="/gizlilik-politikasi"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-800"
                >
                  Gizlilik Politikası
                </Link>{" "}
                sayfalarını inceleyebilirsiniz.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleReject}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-200"
                >
                  <X size={19} aria-hidden="true" />
                  Reddet
                </button>

                <button
                  type="button"
                  onClick={handleAccept}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
                >
                  <Check size={19} aria-hidden="true" />
                  Kabul Et
                </button>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <button
          type="button"
          onClick={handleOpenPreferences}
          aria-label="Çerez tercihlerini değiştir"
          className="fixed bottom-4 left-4 z-[90] inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-lg transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-200"
        >
          <Settings2 size={18} aria-hidden="true" />
          Çerez Tercihleri
        </button>
      )}
    </>
  );
}