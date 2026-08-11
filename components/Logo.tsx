import type { CSSProperties } from "react";

/**
 * Carmo Technology logo.
 *
 * Rendered in HTML/CSS + inline SVG so it stays crisp at any size, inherits
 * the page's font loading, and needs no network request.
 *
 * To swap in the supplied vector artwork instead, replace the body of
 * `Wordmark` / `Mark` below with an <Image>/<svg> using the files in
 * /public/logo-wordmark.svg and /public/logo-mark.svg. Nothing else in the
 * codebase references the logo directly.
 */

/** `navy` follows the active theme; `light` is fixed white for dark panels. */
type Tone = "navy" | "light";

const toneClass: Record<Tone, string> = {
  navy: "text-fg",
  light: "text-white",
};

function Mark({ className = "" }: { className?: string }) {
  // The "C" with its copper counter-dot, redrawn from the brand artwork.
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M61.36 70.68 A27 27 0 1 1 61.36 29.32"
        stroke="currentColor"
        strokeWidth="14"
      />
      <circle cx="80" cy="50" r="8" fill="#C08A3E" />
    </svg>
  );
}

function Wordmark({ tone }: { tone: Tone }) {
  return (
    <span className="flex flex-col leading-none">
      <span className="flex items-center font-display text-[1em] font-semibold tracking-[0.005em]">
        CARM
        {/* The copper "O" — the brand's signature motif. */}
        <span
          className="ml-[0.055em] box-border inline-block rounded-full border-[0.125em] border-copper-500"
          style={{ width: "0.72em", height: "0.72em" }}
          aria-hidden="true"
        />
      </span>
      {/* Tracking is tuned so this line spans ~83% of the CARMO width, matching
          the brand artwork. The negative margin cancels the trailing letter-space
          after "Y" and leaves a deliberate gap before the copper dot. */}
      <span
        className={`mt-[0.22em] flex items-center text-[0.235em] font-medium tracking-[0.82em] ${
          tone === "light" ? "text-white/85" : "text-muted"
        }`}
      >
        TECHNOLOGY
        <span
          className="-ml-[0.47em] inline-block h-[0.42em] w-[0.42em] shrink-0 rounded-full bg-copper-500"
          aria-hidden="true"
        />
      </span>
    </span>
  );
}

export default function Logo({
  variant = "full",
  tone = "navy",
  className = "",
  style,
}: {
  /** `full` = wordmark lockup · `mark` = the C-and-dot icon only */
  variant?: "full" | "mark";
  tone?: Tone;
  className?: string;
  style?: CSSProperties;
}) {
  if (variant === "mark") {
    return (
      <span
        className={`inline-flex ${toneClass[tone]} ${className}`}
        style={style}
        role="img"
        aria-label="Carmo Technology"
      >
        <Mark className="h-full w-auto" />
      </span>
    );
  }

  return (
    <span
      className={`inline-flex ${toneClass[tone]} ${className}`}
      style={style}
      role="img"
      aria-label="Carmo Technology"
    >
      <Wordmark tone={tone} />
    </span>
  );
}

export { Mark as LogoMark };
