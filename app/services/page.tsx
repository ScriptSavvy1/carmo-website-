import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Spotlight from "@/components/Spotlight";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import { ServiceIcon } from "@/components/icons";
import { ArrowRight, Container, RingMark } from "@/components/ui";
import { generalFaqs, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI & automation, software, SaaS & mobile apps, web & digital, AI training, technology & AI advisory, and design & branding — for businesses across East Africa.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything you need to automate, build and grow."
        lead="Six service lines under one roof. Start with one problem, or let us take you from strategy through to the AI, software and brand that solve it."
      >
        <nav aria-label="Services" className="mt-10 flex flex-wrap gap-3">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-navy-100 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-copper-400 hover:bg-white/[0.07] hover:text-copper-200"
            >
              <ServiceIcon icon={service.icon} className="h-4 w-4 text-copper-300" />
              {service.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={`scroll-mt-24 py-20 lg:py-24 ${
            index % 2 === 0 ? "bg-canvas" : "border-y border-line bg-panel"
          }`}
        >
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <Reveal variant="left">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-card text-accent">
                      <ServiceIcon icon={service.icon} className="h-5.5 w-5.5" />
                    </span>
                    <span className="font-display text-sm font-semibold tabular-nums text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-6 text-3xl tracking-tight text-fg sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-muted">{service.short}</p>
                  <Link
                    href={service.href}
                    className="link-underline group mt-8 inline-flex items-center gap-2 py-1 text-sm font-semibold text-fg"
                  >
                    {service.slug === "ai-training"
                      ? "Workshops & team training"
                      : `More on ${service.title}`}
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                <Reveal delay={120} variant="right">
                  <Spotlight className="rounded-2xl border border-line bg-card p-8 shadow-card sm:p-9">
                    <h3 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      <RingMark />
                      {service.offeringsTitle ?? "What we can build"}
                    </h3>
                    <ul className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                      {service.offerings.map((offering) => (
                        <li key={offering.title}>
                          <p className="font-display text-[0.95rem] font-medium text-fg">
                            {offering.title}
                          </p>
                          <p className="mt-1.5 text-sm leading-relaxed text-muted">
                            {offering.description}
                          </p>
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

      <Process className="border-t border-line bg-canvas" />

      <Faq items={generalFaqs} className="border-t border-line bg-panel" />

      <CTABand />
    </>
  );
}
