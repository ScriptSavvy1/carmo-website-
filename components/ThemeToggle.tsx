"use client";

import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "carmo-theme";

/**
 * Runs before first paint (injected into <head>) so the correct theme is on
 * <html> by the time anything renders — no white flash on a dark page.
 * Dark is the default; light is only used when explicitly chosen.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.setAttribute("data-theme",t);document.documentElement.style.colorScheme=t}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.style.colorScheme = theme;

  // Keep the mobile browser chrome in step with the page.
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#070c15" : "#ffffff");
  }
}

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Matches the server-rendered default; corrected from storage on mount.
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Theme | null) ??
      "dark";
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode, blocked cookies) — the
      // toggle still works for this page view, it just won't be remembered.
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      // Until mounted we can't know the stored theme, so don't announce one.
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Switch colour theme"
      }
      aria-pressed={mounted ? isDark : undefined}
      title={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : undefined}
      className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-accent hover:text-accent focus-visible:text-accent ${className}`}
    >
      <span className="relative block h-4 w-4">
        <SunIcon
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-out-brand ${
            isDark
              ? "rotate-90 scale-50 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        <MoonIcon
          className={`absolute inset-0 h-4 w-4 transition-all duration-500 ease-out-brand ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-50 opacity-0"
          }`}
        />
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </button>
  );
}
