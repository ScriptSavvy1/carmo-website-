import Reveal from "./Reveal";
import { Container, SectionHeading } from "./ui";
import { processSteps } from "@/lib/site";

/** Discover → Plan → Build → Improve. Shared by the home and service pages. */
export default function Process({
  eyebrow = "How we work",
  title = "Your tech team — without hiring one.",
  lead = "Most businesses can't justify a full-time engineering team. We fill that gap: one partner for strategy, AI, software and design, from the first conversation to long after launch.",
  className = "border-y border-line bg-panel",
}: {
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
}) {
  return (
    <section className={`py-24 lg:py-28 ${className}`}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* The thread joining the four steps on wide screens. */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-copper-500/60 via-line-strong to-transparent lg:block"
          />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} as="li" delay={index * 110} className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-canvas font-display text-sm font-semibold tabular-nums text-accent shadow-card">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl text-fg">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
