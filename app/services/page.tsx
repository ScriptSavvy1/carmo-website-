import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Spotlight from "@/components/Spotlight";
import { CheckIcon } from "@/components/icons";
import { Container, RingMark } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Software development and mobile apps, artificial intelligence and automation, advisory and consultation, and design and graphics packages.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything needed to design, build and run a system."
        lead="Four capabilities that work together. Engage one, or let us take a project from strategy through to the brand it launches under."
      >
        <nav aria-label="Services" className="mt-10 flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-navy-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-copper-400 hover:bg-white/[0.07] hover:text-copper-200"
            >
              <RingMark />
              {service.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-24 lg:py-28 ${
            index % 2 === 0 ? "bg-canvas" : "border-y border-line bg-panel"
          }`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="left">
                  <p className="font-display text-sm font-semibold tabular-nums text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl tracking-tight text-fg sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted">
                    {service.intro}
                  </p>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={120} variant="right">
                  <Spotlight className="rounded-2xl border border-line bg-card p-8 shadow-card sm:p-9">
                    <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      <RingMark />
                      Capabilities
                    </h3>
                    <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                      {service.capabilities.map((capability) => (
                        <li key={capability} className="group flex gap-3">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-navy-950">
                            <CheckIcon className="h-3 w-3" />
                          </span>
                          <span className="text-[0.95rem] leading-relaxed text-fg">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Spotlight>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <CTABand />
    </>
  );
}
