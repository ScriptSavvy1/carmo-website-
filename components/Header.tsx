"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { WhatsAppIcon } from "./icons";
import { nav, whatsappHref } from "@/lib/site";
import { ArrowRight, Container } from "./ui";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent background scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out-brand ${
        scrolled || open
          ? "border-b border-line bg-[var(--header-bg)] backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--header-bg)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <Link
            href="/"
            className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="Carmo Technology — home"
            onClick={() => setOpen(false)}
          >
            <Logo className="text-[1.45rem]" />
          </Link>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive(item.href) ? "text-fg" : "text-muted hover:text-fg"
                    }`}
                  >
                    {/* Active pill sits behind the label. */}
                    {isActive(item.href) ? (
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full border border-line bg-panel"
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              title="Chat on WhatsApp"
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-all duration-300 hover:border-[#25D366]/60 hover:text-[#25D366] sm:inline-flex"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>

            <Link
              href="/contact"
              className="btn-sheen ml-1 hidden rounded-full bg-copper-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-400 hover:shadow-[0_12px_28px_-10px_rgba(192,138,62,0.7)] lg:inline-flex lg:items-center lg:gap-2"
            >
              <span aria-hidden="true" className="sheen" />
              Get in touch
              <ArrowRight />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative z-10 -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-fg transition-colors hover:bg-panel lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <span aria-hidden="true" className="flex w-5 flex-col gap-[5px]">
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-opacity duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] w-full rounded-full bg-current transition-transform duration-300 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu — height-animated so it slides rather than snapping. */}
      <div
        id="mobile-menu"
        // Keeps the collapsed menu out of the tab order and the a11y tree
        // while still allowing it to animate open.
        inert={!open}
        className={`overflow-hidden border-t bg-canvas transition-[max-height,opacity] duration-500 ease-out-brand lg:hidden ${
          open
            ? "max-h-[32rem] border-line opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <Container>
          <nav aria-label="Mobile" className="py-4">
            <ul className="flex flex-col">
              {nav.map((item, index) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    tabIndex={open ? undefined : -1}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    style={{ transitionDelay: open ? `${index * 45}ms` : "0ms" }}
                    className={`flex items-center justify-between border-b border-line py-4 text-base font-medium transition-all duration-500 ease-out-brand ${
                      open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                    } ${isActive(item.href) ? "text-accent" : "text-fg"}`}
                  >
                    {item.label}
                    <ArrowRight className="opacity-40" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 mb-2 flex flex-col gap-3">
              <Link
                href="/contact"
                tabIndex={open ? undefined : -1}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper-500 px-6 py-3.5 text-sm font-semibold text-navy-950"
              >
                Get in touch
                <ArrowRight />
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={open ? undefined : -1}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-line px-6 py-3.5 text-sm font-semibold text-fg transition-colors hover:border-[#25D366]/60 hover:text-[#25D366]"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Chat on WhatsApp
              </a>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}
