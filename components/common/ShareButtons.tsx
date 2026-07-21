"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";

type ShareButtonsProps = {
  title: string;
  description: string;
  url?: string;
};

export default function ShareButtons({
  title,
  description,
  url,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl =
    url ||
    (typeof window !== "undefined" ? window.location.href : "");

  const copyPageLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const sharePage = async () => {
    const shareData = {
      title,
      text: description,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch {
        // Kullanıcı paylaşımı iptal ettiyse sessizce devam et.
      }
    }

    await copyPageLink();
  };

  return (
    <div className="mt-8 flex flex-wrap justify-center gap-3">
      <button
        type="button"
        onClick={copyPageLink}
        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
        {copied ? "Bağlantı Kopyalandı" : "Bağlantıyı Kopyala"}
      </button>

      <button
        type="button"
        onClick={sharePage}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        <Share2 size={18} />
        Sayfayı Paylaş
      </button>
    </div>
  );
}