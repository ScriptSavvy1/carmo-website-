import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import CTABand from "@/components/CTABand";
import Spotlight from "@/components/Spotlight";
import { Container, RingMark, SectionHeading } from "@/components/ui";
import { countries, team, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Carmo Technology is named after a Somali tree valued for its fruit. Founded in Mogadishu and now based in Nairobi, Kenya, we serve businesses across East Africa. Our story, mission, values and team.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Rooted in East Africa, built for the world."
        lead="Carmo Technology was founded to prove a simple point: world-class AI and software can be designed, built and supported right here in the region — today from our base in Nairobi, Kenya."
      />

      {/* Story */}
      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal variant="left">
                <SectionHeading eyebrow="Our story" title="Why we are called Carmo." />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80} variant="right">
                <div className="space-y-6 text-lg leading-relaxed text-muted">
                  <p>
                    The carmo is a Somali tree, valued for its fruit and for the benefit
                    it gives back to the people around it. It grows where it is planted,
                    and it is judged by what it produces — not by what it promises.
                  </p>
                  <p>
                    We took the name because that is the standard we wanted to be held
                    to. Technology work in the region has too often meant systems
                    delivered from a distance, by teams who never saw the conditions
                    their software had to survive, and who disappeared once the invoice
                    cleared.
                  </p>
                  <p>
                    Carmo was built to be the opposite of that. We are here, our clients
                    can find us, and the systems we build are ones we still support
                    years later. Local roots — and engineering standards that would hold
                    up anywhere in the world.
                  </p>
                  <p>
                    Carmo began in Mogadishu. Today we are headquartered in Nairobi,
                    Kenya — East Africa&rsquo;s technology hub — and work with businesses
                    and institutions across the region, helping them put practical AI and
                    modern software to work.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & vision */}
      <section className="border-y border-line bg-panel py-24 lg:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal variant="blur">
              <Spotlight className="h-full rounded-2xl border border-line bg-card p-9 shadow-card transition-shadow duration-500 hover:shadow-lift">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <RingMark />
                  Mission
                </p>
                <p className="mt-6 font-display text-2xl leading-snug text-fg">
                  To put practical AI and modern software within reach of every
                  business in East Africa — not just those with an in-house tech team.
                </p>
                <p className="mt-5 leading-relaxed text-muted">
                  Not pilots and prototypes — systems that go into daily use and stay
                  there, supported by people the client can actually reach.
                </p>
              </Spotlight>
            </Reveal>

            <Reveal delay={120} variant="blur">
              <Spotlight className="h-full rounded-2xl border border-line bg-card p-9 shadow-card transition-shadow duration-500 hover:shadow-lift">
                <p className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                  <RingMark />
                  Vision
                </p>
                <p className="mt-6 font-display text-2xl leading-snug text-fg">
                  An East Africa where the best technology serving the region is also
                  built in it.
                </p>
                <p className="mt-5 leading-relaxed text-muted">
                  We want local institutions to have the same quality of digital
                  infrastructure as their counterparts anywhere else — and for that
                  infrastructure to be locally owned and locally maintained.
                </p>
              </Spotlight>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Where we work */}
      <section className="bg-canvas pt-24 lg:pt-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal variant="left">
                <SectionHeading
                  eyebrow="Where we work"
                  title="Based in Nairobi. Working across East Africa."
                  lead="We work on-site where it helps and remotely everywhere else — so a client in Kampala, Kigali or Addis gets the same team as one down the road."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map((country, index) => (
                  <Reveal key={country.name} as="li" delay={index * 70} variant="scale">
                    <div
                      className={`h-full rounded-2xl border p-5 transition-colors duration-300 hover:border-accent ${
                        index === 0 ? "border-accent/50 bg-accent/[0.06]" : "border-line bg-card"
                      }`}
                    >
                      <p className="flex items-center gap-2.5 font-display text-base font-medium text-fg">
                        <RingMark />
                        {country.name}
                      </p>
                      {"note" in country ? (
                        <p className="mt-1.5 pl-5 text-sm text-muted">{country.note}</p>
                      ) : null}
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our values"
              title="What we hold ourselves to."
              align="center"
            />
          </Reveal>

          <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.name} delay={index * 80}>
                <div className="group border-t border-line pt-6 transition-colors duration-500 hover:border-accent">
                  <dt className="flex items-center gap-3 font-display text-lg font-medium text-fg">
                    <RingMark className="transition-transform duration-500 group-hover:scale-125" />
                    {value.name}
                  </dt>
                  <dd className="mt-3 leading-relaxed text-muted">
                    {value.description}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Team */}
      <section className="border-t border-line bg-panel py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Our team"
              title="The people behind the work."
              lead="A small, senior team — engineers, AI specialists, designers and advisors who have shipped products that businesses run on every day."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={member.name} delay={index * 100} variant="blur">
                <Spotlight
                  as="article"
                  className="group h-full rounded-2xl border border-line bg-card p-7 shadow-card transition-all duration-500 ease-out-brand hover:-translate-y-1.5 hover:bg-card-hover hover:shadow-lift"
                >
                  {/* Photo slot — drop a headshot in /public and swap this block. */}
                  <div className="ink-panel flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-500 ease-spring group-hover:scale-105">
                    <span
                      aria-hidden="true"
                      className="h-5 w-5 rounded-full border-2 border-copper-400 transition-transform duration-500 group-hover:scale-125"
                    />
                  </div>
                  <h3 className="mt-6 text-lg text-fg">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
                    {member.bio}
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
