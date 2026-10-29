import type { ReactNode } from "react";
import PageHero from "./PageHero";
import Reveal from "./Reveal";
import CTABand from "./CTABand";
import Spotlight from "./Spotlight";
import Process from "./Process";
import Faq from "./Faq";
import { ProjectCard, ServiceCard } from "./cards";
import { CheckIcon, WhatsAppIcon } from "./icons";
import { ArrowRight, Button, Container, Eyebrow, RingMark, SectionHeading } from "./ui";
import { getService, projects, whatsappLink, type Service } from "@/lib/site";

/** Alternating section backgrounds, so optional sections never break the rhythm. */
const tones = ["bg-canvas", "border-y border-line bg-panel"] as const;

export default function ServiceDetail({ service }: { service: Service }) {
  const work = projects.filter((project) => service.work?.includes(project.name));
  const related = service.related
    .map((slug) => getService(slug))
    .filter((item): item is Service => Boolean(item));

  const sections: { key: string; render: (tone: string) => ReactNode }[] = [
    { key: "fit", render: (tone) => <Fit service={service} tone={tone} /> },
    { key: "offerings", render: (tone) => <Offerings service={service} tone={tone} /> },
  ];

  if (service.topics?.length) {
    sections.push({ key: "topics", render: (tone) => <Topics service={service} tone={tone} /> });
  }

  sections.push({
    key: "process",
    render: (tone) => (
      <Process
        className={tone}
        title="How we get from problem to result."
        lead="Every engagement follows the same four steps, whether it's a WhatsApp assistant, a mobile app or a team workshop."
      />
    ),
  });

  if (work.length) {
    sections.push({
      key: "work",
      render: (tone) => (
        <section className={`py-24 lg:py-28 ${tone}`}>
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Related work"
                title="Built by us, live today."
                lead="Our own products, in production and in daily use."
              />
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {work.map((project, index) => (
                <Reveal key={project.name} delay={index * 110} variant="blur">
                  <ProjectCard project={project} featured />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ),
    });
  }

  sections.push({
    key: "faq",
    render: (tone) => <Faq items={service.faqs} className={tone} />,
  });

  if (related.length) {
    sections.push({
      key: "related",
      render: (tone) => (
        <section className={`py-24 lg:py-28 ${tone}`}>
          <Container>
            <Reveal>
              <SectionHeading eyebrow="Pairs well with" title="Related services." />
            </Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 90} variant="blur">
                  <ServiceCard service={item} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ),
    });
  }

  return (
    <>
      <PageHero eyebrow={service.title} title={service.headline} lead={service.intro}>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href={whatsappLink(service.cta.message)}>
            <WhatsAppIcon className="h-4.5 w-4.5" />
            {service.cta.label}
          </Button>
          {service.secondaryCta ? (
            <Button href={whatsappLink(service.secondaryCta.message)} variant="ghost">
              {service.secondaryCta.label}
              <ArrowRight />
            </Button>
          ) : (
            <Button href="/contact" variant="ghost">
              Tell us what you&rsquo;re solving
              <ArrowRight />
            </Button>
          )}
        </div>
      </PageHero>

      {sections.map((section, index) => (
        <div key={section.key}>{section.render(tones[index % 2])}</div>
      ))}

      <CTABand />
    </>
  );
}

/** "Sound familiar?" problems beside "Who this is for". */
function Fit({ service, tone }: { service: Service; tone: string }) {
  return (
    <section className={`py-24 lg:py-28 ${tone}`}>
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <SectionHeading eyebrow="Sound familiar?" title="If this is your week, we can help." />
            </Reveal>
            <ul className="mt-10 space-y-4">
              {service.problems.map((problem, index) => (
                <Reveal key={problem} as="li" delay={index * 80} variant="left">
                  <div className="group flex gap-4 rounded-2xl border border-line bg-card p-5 shadow-card transition-colors duration-500 hover:border-accent/40 sm:p-6">
                    <span
                      aria-hidden="true"
                      className="font-display text-3xl leading-none text-accent/60 transition-colors group-hover:text-accent"
                    >
                      &ldquo;
                    </span>
                    <p className="leading-relaxed text-fg">{problem}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120} variant="right">
              <Spotlight className="rounded-2xl border border-line bg-panel p-8 shadow-card sm:p-9 lg:sticky lg:top-28">
                <Eyebrow>Who this is for</Eyebrow>
                <ul className="mt-7 space-y-5">
                  {service.audiences.map((audience) => (
                    <li key={audience} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="leading-relaxed text-fg">{audience}</span>
                    </li>
                  ))}
                </ul>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Offerings({ service, tone }: { service: Service; tone: string }) {
  return (
    <section className={`py-24 lg:py-28 ${tone}`}>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={service.title}
            title={service.offeringsTitle ?? "What we can build"}
            lead={service.short}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.offerings.map((offering, index) => (
            <Reveal key={offering.title} delay={(index % 3) * 90} variant="blur">
              <Spotlight className="group h-full rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-500 ease-out-brand hover:-translate-y-1 hover:bg-card-hover hover:shadow-lift">
                <span className="font-display text-sm font-semibold tabular-nums text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg text-fg transition-colors duration-300 group-hover:text-accent">
                  {offering.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
                  {offering.description}
                </p>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/** Training only: workshop curriculum and what to expect on the day. */
function Topics({ service, tone }: { service: Service; tone: string }) {
  return (
    <section className={`py-24 lg:py-28 ${tone}`}>
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <SectionHeading
                eyebrow="AI Fundamentals Workshop"
                title="What you'll learn."
                lead="Six practical skills, each practised on your own work — not slides you forget by Friday."
              />
            </Reveal>
            <dl className="mt-12 grid gap-x-10 gap-y-9 sm:grid-cols-2">
              {service.topics?.map((topic, index) => (
                <Reveal key={topic.title} delay={index * 70}>
                  <div className="group border-t border-line pt-5 transition-colors duration-500 hover:border-accent">
                    <dt className="flex items-center gap-3 font-display text-base font-medium text-fg">
                      <RingMark className="transition-transform duration-500 group-hover:scale-125" />
                      {topic.title}
                    </dt>
                    <dd className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">
                      {topic.description}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={120} variant="right">
              <Spotlight className="rounded-2xl border border-line bg-card p-8 shadow-card sm:p-9">
                <Eyebrow>What to expect</Eyebrow>
                <ul className="mt-7 space-y-4">
                  {service.expect?.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <span className="text-[0.95rem] leading-relaxed text-fg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
                  Dates, venue and pricing for the next Nairobi workshop go to the waitlist
                  first. Joining is free.
                </p>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
