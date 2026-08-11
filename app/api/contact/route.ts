import { NextResponse } from "next/server";

/**
 * Contact form endpoint — PLACEHOLDER.
 *
 * Right now this validates the submission and logs it to the server console,
 * then returns success. Nothing is delivered anywhere. Before launch, wire one
 * of the options in the README ("Connecting the contact form") into the marked
 * section below.
 */

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  organization?: unknown;
  service?: unknown;
  message?: unknown;
};

const asString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

// Deliberately permissive — the goal is to catch typos, not to police addresses.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = asString(body.name);
  const email = asString(body.email);
  const organization = asString(body.organization);
  const service = asString(body.service);
  const message = asString(body.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please complete your name, email and message." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { message: "That message is too long — please keep it under 5000 characters." },
      { status: 400 },
    );
  }

  const submission = { name, email, organization, service, message };

  // ---------------------------------------------------------------------
  // TODO: deliver the submission. See README → "Connecting the contact form".
  // Replace this log with an email send (Resend / SendGrid / Nodemailer),
  // a Formspree forward, or a write to your CRM.
  // ---------------------------------------------------------------------
  console.info("[contact] new submission", submission);

  return NextResponse.json({
    message:
      "Thank you — your message has been received. We'll reply within one working day.",
  });
}
