import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";
import { MailIcon, PinIcon, WhatsAppIcon, socialIcons } from "@/components/icons";
import { Container, RingMark } from "@/components/ui";
import { site, socials, whatsapp, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Start a project with Carmo Technology. Email ${site.email}, message us on WhatsApp, or send us a note — we're based in Mogadishu, Somalia.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you're building."
        lead="Tell us the problem rather than the solution — we'll come back with what we think it actually takes."
      />

      <section className="bg-canvas py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal variant="left">
                <h2 className="text-2xl tracking-tight text-fg">Send us a message</h2>
                <p className="mt-3 text-muted">
                  We reply to every enquiry within one working day.
                </p>
                <div className="mt-9">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120} variant="right">
                <div className="space-y-6">
                  {/* WhatsApp is the fastest route — give it its own card. */}
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-2xl border border-[#25D366]/25 bg-[#25D366]/[0.07] p-6 transition-all duration-500 ease-out-brand hover:-translate-y-1 hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.12]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-[#052e16] transition-transform duration-500 ease-spring group-hover:scale-110">
                      <WhatsAppIcon className="h-6 w-6" />
                    </span>
                    <span>
                      <span className="block font-display text-base font-medium text-fg">
                        Message us on WhatsApp
                      </span>
                      <span className="mt-0.5 block text-sm text-muted">
                        {whatsapp.display} — usually the quickest reply
                      </span>
                    </span>
                  </a>

                  <Spotlight className="rounded-2xl border border-line bg-panel p-8 shadow-card">
                    <h2 className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                      <RingMark />
                      Direct
                    </h2>

                    <dl className="mt-7 space-y-7">
                      <div>
                        <dt className="flex items-center gap-2 text-sm font-medium text-subtle">
                          <MailIcon className="h-4 w-4" />
                          Email
                        </dt>
                        <dd className="mt-1.5">
                          <a
                            href={`mailto:${site.email}`}
                            className="link-underline font-display text-lg font-medium break-all text-fg"
                          >
                            {site.email}
                          </a>
                        </dd>
                      </div>

                      <div>
                        <dt className="flex items-center gap-2 text-sm font-medium text-subtle">
                          <WhatsAppIcon className="h-4 w-4" />
                          WhatsApp
                        </dt>
                        <dd className="mt-1.5">
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline font-display text-lg font-medium text-fg"
                          >
                            {whatsapp.display}
                          </a>
                        </dd>
                      </div>

                      <div>
                        <dt className="flex items-center gap-2 text-sm font-medium text-subtle">
                          <PinIcon className="h-4 w-4" />
                          Location
                        </dt>
                        <dd className="mt-1.5 font-display text-lg font-medium text-fg">
                          {site.location}
                        </dd>
                      </div>

                      <div>
                        <dt className="text-sm font-medium text-subtle">Follow</dt>
                        <dd className="mt-3 flex flex-wrap gap-2.5">
                          {socials.map((social) => {
                            const Icon = socialIcons[social.label];
                            return (
                              <a
                                key={social.label}
                                href={social.href}
                                aria-label={`${site.name} on ${social.label}`}
                                title={social.label}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                              >
                                <Icon className="h-4.5 w-4.5" />
                              </a>
                            );
                          })}
                        </dd>
                      </div>
                    </dl>

                    <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
                      Working with a government body or development partner? Mention it in
                      your message — we can share procurement-ready documentation and
                      references.
                    </p>
                  </Spotlight>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
