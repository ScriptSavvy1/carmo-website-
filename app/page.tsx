import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Counter from "@/components/Counter";
import Spotlight from "@/components/Spotlight";
import { ProjectCard, ServiceCard } from "@/components/cards";
import { WhatsAppIcon } from "@/components/icons";
import {
  ArrowRight,
  Aurora,
  Badge,
  Button,
  Container,
  RingMark,
  SectionHeading,
} from "@/components/ui";
import {
  industries,
  projects,
  services,
  stats,
  whatsappHref,
  whyCarmo,
} from "@/lib/site";

function Hero() {
  return (
    <section className="ink-panel noise relative overflow-hidden">
      <Aurora />

      {/* Layered rings — the copper "O" used as the hero's structural graphic. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 hidden h-[42rem] w-[42rem] rounded-full border border-white/10 animate-spin-slow lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-28 hidden h-[26rem] w-[26rem] rounded-full border-[2.5rem] border-copper-500/[0.15] animate-float-slow lg:block"
      />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
        style={
          {
            "--grid-mask":
              "radial-gradient(ellipse 90% 70% at 30% 0%, #000 40%, transparent 100%)",
          } as React.CSSProperties
        }
      />

      <Container className="relative">
        <div className="grid gap-16 py-24 lg:grid-cols-12 lg:gap-8 lg:py-32">
          <div className="lg:col-span-7">
            <div className="animate-rise">
              <Badge>Mogadishu, Somalia — available for new projects</Badge>
            </div>

            <h1 className="mt-8 animate-rise text-4xl leading-[1.08] tracking-tight text-white [animation-delay:100ms] sm:text-5xl lg:text-6xl">
              Smart technology,
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">real results.</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-copper-500 to-teal-500"
                />
              </span>
            </h1>

            <p className="mt-9 max-w-xl animate-rise text-lg leading-relaxed text-navy-100 [animation-delay:200ms] sm:text-xl">
              A modern technology company rooted in Somalia — building software,
              artificial intelligence and design for clients across the Horn of
              Africa and beyond.
            </p>

            <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:300ms] sm:flex-row sm:items-center">
              <Button href="/contact">
                Start a project
                <ArrowRight />
              </Button>
              <Button href={whatsappHref} variant="ghost">
                <WhatsAppIcon className="h-4.5 w-4.5" />
                WhatsApp us
              </Button>
            </div>

            <p className="mt-8 animate-rise text-sm text-navy-300 [animation-delay:380ms]">
              Or{" "}
              <Link
                href="/work"
                className="link-underline font-medium text-copper-300"
              >
                see what we have already shipped
              </Link>
              .
            </p>
          </div>

          {/* Proof panel — live systems, stated plainly. */}
          <div className="lg:col-span-5 lg:pl-8">
            <div className="animate-rise [animation-delay:420ms]">
              <Spotlight className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                  <RingMark />
                  In production
                </p>
                <ul className="mt-6 divide-y divide-white/10">
                  {projects.map((project) => (
                    <li
                      key={project.name}
                      className="group py-4 first:pt-0 last:pb-0"
                    >
                      <p className="font-display text-base font-medium text-white transition-colors duration-300 group-hover:text-copper-200">
                        {project.name}
                      </p>
                      <p className="mt-1 text-sm text-navy-200">{project.category}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/work"
                  className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
                >
                  View case studies
                  <ArrowRight className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </Spotlight>
            </div>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent"
      />
    </section>
  );
}

function Stats() {
  return (
    <section className="border-b border-line bg-panel">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80} className="relative">
              {/* Hairline between cells: every cell but the first in its row.
                  Two columns on mobile, four from lg. */}
              {index > 0 ? (
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-6 left-0 w-px bg-line ${
                    index % 2 === 0 ? "hidden lg:block" : "block"
                  }`}
                />
              ) : null}
              <div className="px-2 py-10 text-center lg:py-12">
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="font-display text-4xl font-semibold tracking-tight text-accent sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-3 block text-sm leading-snug text-muted">
                    {stat.label}
                  </span>
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Services() {
  return (
    <section className="relative overflow-hidden bg-canvas py-24 lg:py-28">
      <div
        aria-hidden="true"
        className="grid-field pointer-events-none absolute inset-0"
        style={
          {
            "--grid-mask":
              "radial-gradient(ellipse 60% 60% at 80% 0%, #000 10%, transparent 75%)",
          } as React.CSSProperties
        }
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Four capabilities, one team."
            lead="Most clients need more than one of these. Because they sit under the same roof, the strategy, the system and the brand around it stay consistent."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90} variant="blur">
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="border-y border-line bg-panel py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Real systems, serving real users."
              lead="From a SaaS product used by schools to national regulatory infrastructure — these are live, in production, today."
            />
            <Link
              href="/work"
              className="link-underline group shrink-0 py-1 text-sm font-semibold text-fg sm:mb-2"
            >
              All work
              <ArrowRight className="ml-2 inline transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 110} variant="blur">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function WhyCarmo() {
  return (
    <section className="bg-canvas py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal variant="left">
              <SectionHeading
                eyebrow="Why Carmo"
                title="Named after a tree that gives something back."
                lead="The Carmo is a Somali tree valued for its fruit — local, useful, and built to last. That is the standard we hold our work to."
              />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {whyCarmo.map((item, index) => (
                <Reveal key={item.title} delay={index * 90} variant="right">
                  <div className="group border-t border-line pt-6 transition-colors duration-500 hover:border-accent">
                    <dt className="flex items-center gap-3 font-display text-lg font-medium text-fg">
                      <RingMark className="transition-transform duration-500 group-hover:scale-125" />
                      {item.title}
                    </dt>
                    <dd className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                      {item.description}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Industries() {
  return (
    <section className="border-t border-line bg-panel py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Sectors we know well."
            lead="Different rules, different pressures. We have built for institutions where getting it wrong has consequences."
            align="center"
          />
        </Reveal>

        <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} as="li" delay={index * 60} variant="scale">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-card px-5 py-3 text-sm font-medium text-fg transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-card">
                <RingMark />
                {industry.name}
              </span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-10 text-center">
            <Link
              href="/industries"
              className="link-underline group inline-flex items-center gap-2 py-1 text-sm font-semibold text-fg"
            >
              How we work in each sector
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedWork />
      <WhyCarmo />
      <Industries />
      <CTABand />
    </>
  );
}
