import Link from "next/link";
import Spotlight from "./Spotlight";
import type { Project, Service } from "@/lib/site";
import { ArrowRight, RingMark } from "./ui";

const cardShell =
  "relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-card transition-all duration-500 ease-out-brand hover:-translate-y-1.5 hover:bg-card-hover hover:shadow-lift";

/** Four service cards on the home page. */
export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Spotlight className={`group ${cardShell}`}>
      <Link href={`/services#${service.slug}`} className="flex h-full flex-col p-7">
        {/* Copper hairline that draws in on hover. */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gradient-to-r from-copper-500 to-teal-500 transition-all duration-700 ease-out-brand group-hover:w-full"
        />
        <span className="font-display text-sm font-semibold tabular-nums text-accent">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-5 text-xl text-fg transition-colors duration-300 group-hover:text-accent">
          {service.title}
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
          {service.short}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors group-hover:text-accent">
          Explore
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Spotlight>
  );
}

/** Case-study card used on the home strip and the Work page. */
export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Spotlight as="article" className={`group ${cardShell}`}>
      {/* Abstract navy header panel — swap for a real screenshot when available. */}
      <div className="ink-panel noise relative h-44 overflow-hidden">
        <div
          aria-hidden="true"
          className="grid-field grid-field-ink absolute inset-0"
          style={{ "--grid-size": "34px", "--grid-mask": "none" } as React.CSSProperties}
        />
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-44 w-44 rounded-full border-[14px] border-copper-500/35 transition-transform duration-700 ease-out-brand group-hover:scale-110 group-hover:border-copper-400/50"
        />
        <div
          aria-hidden="true"
          className="absolute -right-2 top-16 h-24 w-24 rounded-full border border-white/15 transition-transform duration-1000 ease-out-brand group-hover:-translate-x-3"
        />
        <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.16em] text-copper-300">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl text-fg transition-colors duration-300 group-hover:text-accent">
          {project.name}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">
          {featured ? project.detail : project.summary}
        </p>

        {featured ? (
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full border border-line bg-panel px-3 py-1.5 text-xs font-medium text-muted transition-colors duration-300 hover:border-accent/50 hover:text-accent"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-fg transition-colors hover:text-accent"
          >
            <RingMark />
            Visit site
            <span className="text-subtle">·</span>
            <span className="font-normal text-subtle">{project.linkLabel}</span>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        ) : null}
      </div>
    </Spotlight>
  );
}
