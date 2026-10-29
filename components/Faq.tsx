import Reveal from "./Reveal";
import { PlusIcon } from "./icons";
import { Container, SectionHeading } from "./ui";
import type { Faq as FaqItem } from "@/lib/site";

/**
 * Native <details> accordion — keyboard and screen-reader friendly with no JS.
 * Also emits FAQPage structured data so the answers can surface in search.
 */
export default function Faq({
  items,
  eyebrow = "Common questions",
  title = "Questions we get asked.",
  className = "bg-canvas",
}: {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
  className?: string;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className={`py-24 lg:py-28 ${className}`}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Reveal variant="left">
              <SectionHeading eyebrow={eyebrow} title={title} />
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal variant="right">
              <div className="divide-y divide-line border-y border-line">
                {items.map((item) => (
                  <details key={item.q} className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-display text-lg font-medium text-fg transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-all duration-300 group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-navy-950">
                        <PlusIcon className="h-3.5 w-3.5" />
                      </span>
                    </summary>
                    <p className="-mt-1 max-w-2xl pb-7 pr-12 leading-relaxed text-muted">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </section>
  );
}
