import Link from "next/link";
import type { ReactNode } from "react";

/** Page-width container used by every section. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
  );
}

/**
 * The copper "O" ring, reused as a section marker.
 * Small, quiet, and repeated everywhere — the site's connective tissue.
 */
export function RingMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 shrink-0 rounded-full border-2 border-copper-500 ${className}`}
    />
  );
}

/** Small uppercase label above a section heading, prefixed with the ring. */
export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode;
  /** `ink` = sitting on one of the dark navy panels. */
  tone?: "default" | "ink";
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "ink" ? "text-copper-300" : "text-accent"
      }`}
    >
      <RingMark />
      {children}
    </p>
  );
}

/**
 * Pill used above hero headlines — a live dot, a short line of context.
 */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-navy-100 backdrop-blur-sm">
      <span aria-hidden="true" className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-halo rounded-full bg-copper-400" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-copper-400" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "default",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  tone?: "default" | "ink";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <div className={align === "center" ? "flex justify-center" : ""}>
          <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        </div>
      ) : null}
      <h2
        className={`mt-4 text-3xl tracking-tight sm:text-4xl ${
          tone === "ink" ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            tone === "ink" ? "text-navy-100" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "outline";
  className?: string;
};

const buttonBase =
  "btn-sheen group/btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 ease-out-brand";

const buttonVariants = {
  primary:
    "bg-copper-500 text-navy-950 hover:bg-copper-400 hover:shadow-[0_14px_32px_-10px_rgba(192,138,62,0.75)] hover:-translate-y-0.5",
  secondary:
    "bg-navy-700 text-white hover:bg-navy-600 hover:-translate-y-0.5 hover:shadow-lift",
  /** For use on the dark ink panels. */
  ghost:
    "border border-white/20 bg-white/[0.03] text-white backdrop-blur-sm hover:border-copper-400/70 hover:bg-white/[0.07] hover:text-copper-200 hover:-translate-y-0.5",
  /** For use on ordinary page backgrounds, either theme. */
  outline:
    "border border-line-strong text-fg hover:border-accent hover:text-accent hover:-translate-y-0.5",
} as const;

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  const inner = (
    <>
      {/* The sweeping highlight; only visible on the filled variants. */}
      {variant === "primary" ? (
        <span aria-hidden="true" className="sheen" />
      ) : null}
      {children}
    </>
  );

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`h-4 w-4 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
    </svg>
  );
}

/** Hairline divider with the ring motif centred on it. */
export function RingDivider({ tone = "default" }: { tone?: "default" | "ink" }) {
  const line =
    tone === "ink"
      ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
      : "bg-gradient-to-r from-transparent via-line-strong to-transparent";

  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className={`h-px flex-1 ${line}`} />
      <RingMark />
      <span className={`h-px flex-1 ${line}`} />
    </div>
  );
}

/**
 * Ambient gradient blobs behind the dark panels. Slow, low-contrast, and
 * decorative — they give the flat navy some depth without pulling focus.
 */
export function Aurora({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full blur-3xl animate-drift"
        style={{ background: "radial-gradient(circle, var(--glow-c), transparent 65%)" }}
      />
      <div
        className="absolute -right-24 top-1/4 h-[30rem] w-[30rem] rounded-full blur-3xl animate-drift [animation-delay:-7s]"
        style={{ background: "radial-gradient(circle, var(--glow-a), transparent 65%)" }}
      />
      <div
        className="absolute -bottom-20 left-1/3 h-[26rem] w-[26rem] rounded-full blur-3xl animate-drift [animation-delay:-13s]"
        style={{ background: "radial-gradient(circle, var(--glow-b), transparent 65%)" }}
      />
    </div>
  );
}
