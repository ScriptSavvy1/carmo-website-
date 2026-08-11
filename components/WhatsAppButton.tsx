"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./icons";
import { whatsapp, whatsappHref } from "@/lib/site";

/**
 * Floating WhatsApp call-to-action.
 * Appears once the user has scrolled past the hero so it never competes with
 * the primary buttons above the fold, and expands to a labelled pill on hover.
 */
export default function WhatsAppButton() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Carmo Technology on WhatsApp — ${whatsapp.display}`}
      className={`group fixed bottom-5 right-5 z-90 inline-flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-3.5 text-[#052e16] shadow-[0_14px_36px_-10px_rgba(37,211,102,0.65)] transition-all duration-500 ease-out-brand hover:gap-2.5 hover:pr-5 hover:shadow-[0_18px_44px_-10px_rgba(37,211,102,0.85)] focus-visible:gap-2.5 focus-visible:pr-5 sm:bottom-7 sm:right-7 ${
        shown
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      {/* Attention halo — sits behind the button, paused on hover. */}
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full bg-[#25D366] animate-halo group-hover:animate-none"
      />
      <WhatsAppIcon className="h-6 w-6 shrink-0 transition-transform duration-500 ease-spring group-hover:rotate-[8deg] group-hover:scale-110" />
      <span className="max-w-0 whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-500 ease-out-brand group-hover:max-w-[12rem] group-hover:opacity-100 group-focus-visible:max-w-[12rem] group-focus-visible:opacity-100">
        Chat on WhatsApp
      </span>
    </a>
  );
}
