import Link from "next/link";
import Logo from "./Logo";
import { Container } from "./ui";
import { MailIcon, PinIcon, WhatsAppIcon, socialIcons } from "./icons";
import { nav, services, site, socials, whatsapp, whatsappHref } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="ink-panel noise relative overflow-hidden">
      {/* Oversized ring, cropped by the footer edge — the brand motif at scale. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -bottom-40 h-[28rem] w-[28rem] rounded-full border-[2.5rem] border-copper-500/[0.07]"
      />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
        style={
          {
            "--grid-mask":
              "radial-gradient(ellipse 70% 90% at 80% 0%, #000 20%, transparent 100%)",
          } as React.CSSProperties
        }
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="lg:col-span-4">
            <Logo tone="light" className="text-[1.5rem]" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-200">
              {site.tagline} Software, AI and design — rooted in Somalia, built to
              global standards.
            </p>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#5df09a] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/60 hover:bg-[#25D366]/20"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
              {whatsapp.display}
            </a>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-400">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm text-navy-200 transition-all duration-300 hover:translate-x-0.5 hover:text-copper-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-400">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="inline-block text-sm text-navy-200 transition-all duration-300 hover:translate-x-0.5 hover:text-copper-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-400">
              Contact
            </h2>
            <ul className="mt-5 space-y-3.5 text-sm text-navy-200">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-copper-300"
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-copper-400" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-copper-300"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0 text-copper-400" />
                  {whatsapp.display}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <PinIcon className="h-4 w-4 shrink-0 text-copper-400" />
                {site.location}
              </li>
            </ul>

            <ul className="mt-7 flex flex-wrap gap-2.5">
              {socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={`${site.name} on ${social.label}`}
                      title={social.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-navy-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-copper-400/60 hover:bg-white/[0.07] hover:text-copper-300"
                    >
                      <Icon className="h-4.5 w-4.5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-navy-300">
            © {new Date().getFullYear()} Carmo Technology. All rights reserved.
          </p>
          <p className="flex items-center gap-2.5 text-sm text-navy-300">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 rounded-full border-2 border-copper-500"
            />
            Rooted locally, built for the world.
          </p>
        </div>
      </Container>
    </footer>
  );
}
