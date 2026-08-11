"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight } from "./ui";
import { serviceOptions } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-canvas px-4 py-3 text-[0.95rem] text-fg placeholder:text-subtle transition-all duration-300 hover:border-line-strong focus:border-copper-500 focus:outline-none focus:ring-4 focus:ring-copper-500/15";

const labelClass = "block text-sm font-medium text-fg";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        setStatus("error");
        setMessage(
          data.message ?? "Something went wrong. Please email us directly.",
        );
        return;
      }

      setStatus("success");
      setMessage(
        data.message ?? "Thank you — your message has been received.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "We couldn't send that. Please check your connection, or email us directly.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your full name"
            className={`mt-2 ${fieldClass}`}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@organisation.com"
            className={`mt-2 ${fieldClass}`}
          />
        </div>
      </div>

      <div>
        <label htmlFor="organization" className={labelClass}>
          Organisation
        </label>
        <input
          id="organization"
          name="organization"
          type="text"
          autoComplete="organization"
          placeholder="Company, ministry, NGO or institution"
          className={`mt-2 ${fieldClass}`}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          Service of interest
        </label>
        <select id="service" name="service" defaultValue="" className={`mt-2 ${fieldClass}`}>
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us what you're trying to build, and any timelines you're working to."
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-sheen inline-flex w-full items-center justify-center gap-2 rounded-full bg-copper-500 px-7 py-3.5 text-sm font-semibold text-navy-950 transition-all duration-300 ease-out-brand hover:-translate-y-0.5 hover:bg-copper-400 hover:shadow-[0_12px_28px_-10px_rgba(192,138,62,0.7)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
      >
        <span aria-hidden="true" className="sheen" />
        {status === "submitting" ? (
          <span
            aria-hidden="true"
            className="h-4 w-4 animate-spin rounded-full border-2 border-navy-950/30 border-t-navy-950"
          />
        ) : null}
        {status === "submitting" ? "Sending…" : "Send message"}
        {status === "submitting" ? null : <ArrowRight />}
      </button>

      {/* Announced to screen readers as soon as it appears. */}
      <p
        role="status"
        aria-live="polite"
        className={`rounded-xl text-sm ${
          status === "error"
            ? "border border-red-500/30 bg-red-500/10 px-4 py-3 text-red-500"
            : status === "success"
              ? "border border-teal-500/30 bg-teal-500/10 px-4 py-3 text-teal-500"
              : "sr-only"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
