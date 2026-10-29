import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Spotlight from "@/components/Spotlight";
import { Container, RingMark } from "@/components/ui";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "AI, software and web for East African businesses — healthcare and clinics, education, retail, hospitality, SACCOs and financial services, logistics, real estate, NGOs, government and SMEs.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for businesses across East Africa."
        lead="A clinic's front desk, a school's daily register and a SACCO's loan book all fail in different ways. Knowing the sector is half the work."
      />

      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal key={industry.name} delay={index * 80} variant="blur">
                <Spotlight
                  as="article"
                  className="group h-full rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-500 ease-out-brand hover:-translate-y-1.5 hover:bg-card-hover hover:shadow-lift"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-panel transition-colors duration-500 group-hover:border-accent/40">
                    <RingMark className="transition-transform duration-500 group-hover:scale-125" />
                  </span>
                  <h2 className="mt-5 text-lg text-fg transition-colors duration-300 group-hover:text-accent">
                    {industry.name}
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                    {industry.description}
                  </p>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
