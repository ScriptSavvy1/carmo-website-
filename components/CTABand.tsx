import Reveal from "./Reveal";
import { Aurora, Button, Container, Eyebrow, ArrowRight } from "./ui";
import { MailIcon, WhatsAppIcon } from "./icons";
import { site, whatsapp, whatsappHref } from "@/lib/site";

export default function CTABand() {
  return (
    <section className="ink-panel noise relative overflow-hidden">
      <Aurora />

      {/* Oversized copper ring — the brand motif at architectural scale. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 h-[26rem] w-[26rem] -translate-y-1/2 rounded-full border-[3rem] border-copper-500/10 animate-float-slow"
      />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
        style={
          {
            "--grid-mask":
              "radial-gradient(ellipse 60% 100% at 15% 50%, #000 20%, transparent 100%)",
          } as React.CSSProperties
        }
      />

      <Container className="relative">
        <Reveal>
          <div className="flex flex-col gap-10 py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
            <div className="max-w-xl">
              <Eyebrow tone="ink">Start a conversation</Eyebrow>
              <h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl">
                Tell us what you&rsquo;re trying to build.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-navy-100">
                Whether it&rsquo;s a national system, a product idea or a brand that
                needs rebuilding — we&rsquo;ll tell you honestly what it takes.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href="/contact">
                  Start a project
                  <ArrowRight />
                </Button>
                <Button href={whatsappHref} variant="ghost">
                  <WhatsAppIcon className="h-4.5 w-4.5" />
                  WhatsApp us
                </Button>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-navy-100 transition-colors hover:text-copper-300"
                >
                  <MailIcon className="h-4 w-4 text-copper-400" />
                  {site.email}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm font-medium text-navy-100 transition-colors hover:text-copper-300"
                >
                  <WhatsAppIcon className="h-4 w-4 text-copper-400" />
                  {whatsapp.display}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
