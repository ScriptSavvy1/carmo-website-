"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur";

/**
 * Animates content into view as it scrolls in.
 * Under `prefers-reduced-motion` the CSS in globals.css renders children in
 * their final state with no transition, so no JS branch is needed here.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  variant = "up",
  className = "",
}: {
  children: ReactNode;
  as?: ElementType;
  /** Stagger in milliseconds. */
  delay?: number;
  variant?: RevealVariant;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    // Anything already in view — or already scrolled past, e.g. after an
    // in-page #anchor jump — is shown straight away. Without this, content the
    // observer never gets to report on would stay invisible for good.
    if (node.getBoundingClientRect().top < window.innerHeight) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      // threshold 0 so a single visible pixel counts; the negative bottom
      // margin just holds the animation until the element is properly on
      // screen rather than peeking over the fold.
      { threshold: 0, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-variant={variant}
      data-visible={visible ? "true" : "false"}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
