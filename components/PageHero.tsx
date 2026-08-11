import type { ReactNode } from "react";
import { Aurora, Container, Eyebrow } from "./ui";

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="ink-panel noise relative overflow-hidden">
      <Aurora />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 hidden h-[30rem] w-[30rem] rounded-full border-[2.5rem] border-copper-500/[0.12] animate-float-slow lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-24 top-40 hidden h-56 w-56 rounded-full border border-white/10 animate-spin-slow lg:block"
      />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
      />

      <Container className="relative">
        <div className="max-w-3xl py-20 lg:py-28">
          <div className="animate-rise">
            <Eyebrow tone="ink">{eyebrow}</Eyebrow>
          </div>
          <h1 className="mt-6 animate-rise text-4xl leading-[1.1] tracking-tight text-white [animation-delay:90ms] sm:text-5xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl animate-rise text-lg leading-relaxed text-navy-100 [animation-delay:180ms]">
              {lead}
            </p>
          ) : null}
          {children ? (
            <div className="animate-rise [animation-delay:270ms]">{children}</div>
          ) : null}
        </div>
      </Container>

      {/* Hairline that fades the panel into the page below it. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-copper-500/40 to-transparent"
      />
    </section>
  );
}
