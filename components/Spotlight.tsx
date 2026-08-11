"use client";

import type { MouseEvent, ReactNode } from "react";

/**
 * Wraps a card and writes the cursor position into --mx/--my, which the
 * `.spotlight` rules in globals.css use to draw a copper border-glow and a
 * soft radial wash that follow the pointer.
 *
 * Purely decorative: on touch devices and for keyboard users the hover styles
 * simply never fire (focus-within still lights the border at a fixed point).
 */
export default function Spotlight({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - rect.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - rect.top}px`,
    );
  }

  return (
    <Tag onMouseMove={onMouseMove} className={`spotlight ${className}`}>
      {children}
    </Tag>
  );
}
