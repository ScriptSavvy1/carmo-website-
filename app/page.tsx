import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Counter from "@/components/Counter";
import Spotlight from "@/components/Spotlight";
import Process from "@/components/Process";
import { GoalCard, ProjectCard } from "@/components/cards";
import { CheckIcon, WhatsAppIcon } from "@/components/icons";
import {
  ArrowRight,
  Aurora,
  Badge,
  Button,
  Container,
  Eyebrow,
  RingMark,
  SectionHeading,
} from "@/components/ui";
import {
  aiTools,
  getService,
  industries,
  projects,
  services,
  stats,
  strategyCallHref,
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
              <Badge>East Africa&rsquo;s AI &amp; technology partner</Badge>
            </div>

            <h1 className="mt-8 animate-rise text-4xl leading-[1.08] tracking-tight text-white [animation-delay:100ms] sm:text-5xl lg:text-[3.4rem]">
              Your AI &amp; tech team —
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">without the payroll.</span>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-copper-500 to-teal-500"
                />
              </span>
            </h1>

            <p className="mt-9 max-w-xl animate-rise text-lg leading-relaxed text-navy-100 [animation-delay:200ms] sm:text-xl">
              We help businesses across East Africa answer customers with AI, automate
              the admin, turn ideas into software, build websites that bring in work —
              and train teams to use AI well.
            </p>

            <div className="mt-10 flex animate-rise flex-col gap-4 [animation-delay:300ms] sm:flex-row sm:items-center">
              <Button href={strategyCallHref}>
                <WhatsAppIcon className="h-4.5 w-4.5" />
                Book a free strategy call
              </Button>
              <Button href="/services" variant="ghost">
                Explore what we build
                <ArrowRight />
              </Button>
            </div>

            <p className="mt-8 animate-rise text-sm text-navy-300 [animation-delay:380ms]">
              Or{" "}
              <Link href="/work" className="link-underline font-medium text-copper-300">
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
                    <li key={project.name} className="group py-4 first:pt-0 last:pb-0">
                      <p className="font-display text-base font-medium text-white transition-colors duration-300 group-hover:text-copper-200">
                        {project.name}
                      </p>
                      <p className="mt-1 text-sm text-navy-200">{project.category}</p>
                    </li>
                  ))}
                </ul>

                <p className="mt-7 flex items-center gap-2.5 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                  <RingMark />
                  Now offering
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["AI receptionists", "WhatsApp assistants", "AI workshops"].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-navy-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/work"
                  className="group/link mt-7 inline-flex items-center gap-2 text-sm font-semibold text-copper-300 transition-colors hover:text-copper-200"
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

function Goals() {
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
            eyebrow="Where to start"
            title="What are you trying to get done?"
            lead="Pick the one that sounds most like you — or just tell us the problem and we'll point you the right way."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 90} variant="blur">
              <GoalCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** An illustrative WhatsApp exchange with an AI assistant, after hours. */
const conversation = [
  { from: "customer", text: "Habari! Do you have a slot for teeth cleaning on Saturday?", time: "23:41" },
  { from: "ai", text: "Habari! Yes — Saturday has 10:00 or 11:30 free. Which would you like?", time: "23:41" },
  { from: "customer", text: "11:30 please. How much is it?", time: "23:42" },
  {
    from: "ai",
    text: "You're booked for Saturday at 11:30 ✓ A cleaning is KES 3,500, payable by M-Pesa or card. I'll send you a reminder on Friday.",
    time: "23:42",
  },
] as const;

function AiSolutions() {
  const ai = getService("ai-automation")!;

  return (
    <section className="ink-panel noise relative overflow-hidden py-24 lg:py-28">
      <Aurora />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
        style={
          {
            "--grid-mask":
              "radial-gradient(ellipse 70% 80% at 85% 40%, #000 15%, transparent 80%)",
          } as React.CSSProperties
        }
      />

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <Reveal variant="left">
              <Eyebrow tone="ink">AI solutions for business</Eyebrow>
              <h2 className="mt-4 text-3xl tracking-tight text-white sm:text-4xl">
                AI that answers every customer — even at midnight.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-navy-100">
                Most enquiries arrive after hours or while your team is busy. Our AI
                assistants reply on WhatsApp, your website and the phone in seconds,
                book the appointment, and pass anything tricky to a person.
              </p>
            </Reveal>

            <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
              {ai.offerings.slice(0, 6).map((offering, index) => (
                <Reveal key={offering.title} as="li" delay={index * 60} variant="left">
                  <span className="flex items-center gap-3 text-[0.95rem] text-white">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-copper-400/40 bg-copper-500/15 text-copper-300">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {offering.title}
                  </span>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={200}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button href={ai.href}>
                  Explore AI solutions
                  <ArrowRight />
                </Button>
                <Button href="/training" variant="ghost">
                  Or learn to use AI yourself
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <Reveal delay={150} variant="right">
              <figure>
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b1322]/80 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm">
                  <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-5 py-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-copper-500 font-display text-sm font-semibold text-navy-950">
                      AI
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-white">
                        Your business · AI assistant
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-navy-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
                        Online 24/7
                      </span>
                    </span>
                    <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                  </div>

                  <ol className="space-y-3.5 px-5 py-6 sm:px-6">
                    {conversation.map((message, index) => (
                      <li
                        key={index}
                        className={`flex ${message.from === "ai" ? "justify-end" : "justify-start"}`}
                      >
                        <p
                          className={`max-w-[85%] rounded-2xl border px-4 py-3 text-sm leading-relaxed ${
                            message.from === "ai"
                              ? "rounded-tr-md border-copper-500/30 bg-copper-500/15 text-copper-50"
                              : "rounded-tl-md border-white/10 bg-white/[0.06] text-navy-50"
                          }`}
                        >
                          <span className="sr-only">
                            {message.from === "ai" ? "Assistant: " : "Customer: "}
                          </span>
                          {message.text}
                          <span className="mt-1.5 block text-right text-[0.7rem] text-navy-300">
                            {message.time}
                          </span>
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="flex items-center gap-2.5 border-t border-white/10 bg-white/[0.02] px-5 py-3.5 text-xs font-medium text-navy-100">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#25D366]/20 text-[#5df09a]">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    Booked automatically at 23:42 — no staff needed
                  </div>
                </div>
                <figcaption className="mt-4 text-center text-xs text-navy-300">
                  Illustrative example — replies in English, Swahili, Somali or Arabic.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={120}>
          <div className="mt-20 border-t border-white/10 pt-10">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-navy-300">
              Works with the tools you already use — and the leading AI models
            </p>
            <ul className="mt-6 flex flex-wrap justify-center gap-2.5">
              {aiTools.map((tool) => (
                <li
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-navy-100"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
              eyebrow="Case studies"
              title="Real work. Live today."
              lead="Our own SaaS products, built end to end by our team and in daily use — visit them and judge for yourself."
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 110} variant="blur">
              <ProjectCard project={project} featured />
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
                lead="The carmo is a Somali tree valued for its fruit — local, useful, and built to last. That is the standard we hold our work to, from Nairobi to the rest of East Africa."
              />
              <Link
                href="/about"
                className="link-underline group mt-8 inline-flex items-center gap-2 py-1 text-sm font-semibold text-fg"
              >
                Our story
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
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
            title="Built for businesses across East Africa."
            lead="Clinics, schools, shops, SACCOs, NGOs and more. Different rules, different customers — the same need to work faster."
            align="center"
          />
        </Reveal>

        <ul className="mx-auto mt-14 flex max-w-4xl flex-wrap justify-center gap-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.name} as="li" delay={index * 50} variant="scale">
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
              How we help in each sector
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
      <Goals />
      <AiSolutions />
      <Process className="bg-canvas" />
      <FeaturedWork />
      <WhyCarmo />
      <Industries />
      <CTABand />
    </>
  );
}
