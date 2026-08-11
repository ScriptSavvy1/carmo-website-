import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import { ProjectCard } from "@/components/cards";
import { Container, RingDivider } from "@/components/ui";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected work from Carmo Technology — SmartKGMS kindergarten management, the National Health Professionals Council digital systems, and a custom laundry management system.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Real systems, in production, serving real users."
        lead="From SaaS for schools to national regulatory infrastructure. Every project below is live today — visit them and judge for yourself."
      />

      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 110} variant="blur">
                <div className="h-full">
                  <ProjectCard project={project} featured />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <RingDivider />
          </div>

          <Reveal>
            <div className="mx-auto mt-20 max-w-2xl text-center">
              <h2 className="text-2xl tracking-tight text-fg sm:text-3xl">
                More work, not yet published.
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Some of what we build sits behind institutional logins or under client
                confidentiality. If you would like to see relevant examples for your
                sector, ask us — we can usually arrange a walkthrough.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
