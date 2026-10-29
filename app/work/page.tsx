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
    "Case studies from Carmo Technology — SmartKGMS kindergarten management and the SmartLaundry laundry management system, both live and in daily use.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Real work. Live today."
        lead="Our own SaaS products — designed, built and supported by our team, and in daily use by the businesses that run on them. Visit them and judge for yourself."
      />

      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
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
                Some of what we build sits behind client logins or under confidentiality.
                If you&rsquo;d like to see examples relevant to your business, ask us —
                we can usually arrange a walkthrough.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
