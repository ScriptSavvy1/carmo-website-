# Carmo Technology — Website

Marketing site for Carmo Technology — AI, software, web, training, advisory and
design for businesses across East Africa (Nairobi, Kenya).

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS v4**.

---

## Running locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build   # production build
npm start       # serve the production build
```

Requires Node 18.18+ (developed on Node 22).

---

## Project structure

```
app/
  layout.tsx          Root layout — fonts, metadata, header/footer, skip link
  page.tsx            Home
  about/              About — story, mission, vision, where we work, values, team
  services/           Services — overview of all six service lines + FAQ
  services/[slug]/    One page per service (rendered by components/ServiceDetail)
  training/           AI Training & Workshops (same layout, its own URL)
  work/               Work — case studies
  industries/         Industries
  contact/            Contact — form + direct details
  api/contact/        Contact form endpoint (PLACEHOLDER — see below)
  globals.css         Design tokens + base styles
  icon.svg            Favicon
  sitemap.ts          Auto-generated sitemap
  robots.ts           robots.txt
  not-found.tsx       404
components/
  Logo.tsx            Logo (swappable — see below)
  Header.tsx          Sticky header + mobile menu
  Footer.tsx
  PageHero.tsx        Shared inner-page hero
  CTABand.tsx         Shared contact CTA
  cards.tsx           Goal, service + project cards
  ServiceDetail.tsx   Service page layout — problems, offerings, process, FAQ
  Process.tsx         Discover → Plan → Build → Improve
  Faq.tsx             FAQ accordion (+ FAQPage structured data)
  ContactForm.tsx
  Reveal.tsx          Scroll-reveal wrapper
  ui.tsx              Container, buttons, headings, ring motif
lib/
  site.ts             ALL SITE CONTENT — edit copy here
public/
  brand/              Original brand artwork (JPG)
  logo-mark.svg       Standalone "C" mark
```

---

## Where to change things

### Site copy, services, projects, industries, team

Everything lives in **`lib/site.ts`**. The pages render from it, so adding a
project or reordering services is a single edit there — no JSX changes needed.

Each entry in `services` drives a whole page: the hero, "Sound familiar?"
problems, "Who this is for", the offerings grid, FAQs, related services and
the WhatsApp message its buttons pre-fill. A service whose `href` starts with
`/services/` gets a page automatically; Training lives at `/training`.

To **add a portfolio project**, append to the `projects` array:

```ts
{
  name: "Project name",
  category: "Sector · Discipline",
  summary: "One line for the home page card.",
  detail: "Longer description for the Work page card.",
  highlights: ["Feature", "Feature"],
  href: "https://example.com",   // optional
  linkLabel: "example.com",      // optional
}
```

The Work and Home grids expand automatically.

### The logo

`components/Logo.tsx` renders the lockup in HTML/CSS + inline SVG so it stays
sharp at any size with no image request. It matches the supplied artwork:
"CARMO" with the copper **O** ring, "TECHNOLOGY" letterspaced beneath with the
copper dot.

```tsx
<Logo />                    // full wordmark, navy
<Logo tone="light" />       // full wordmark, for dark backgrounds
<Logo variant="mark" />     // the standalone "C + dot" icon
```

Size it with a font-size — everything scales from it:

```tsx
<Logo className="text-[1.45rem]" />
```

**To swap in official vector files instead:** drop your SVGs into `/public`,
then replace the bodies of `Wordmark` / `Mark` inside `components/Logo.tsx`.
Nothing else in the codebase touches the logo, so that one file is the only
change.

Original artwork is preserved in `public/brand/`.

### Contact endpoint

`app/api/contact/route.ts` currently **validates and logs** submissions, then
returns success. **Nothing is delivered anywhere yet.** See below.

### Team bios and photos

Placeholders are in the `team` array in `lib/site.ts`. The photo slot is the
navy circle in `app/about/page.tsx` — replace that `<div>` with an
`<Image />` once you have headshots.

### Project images

Project cards use a generated navy panel with the ring motif. To use real
screenshots, replace the "Abstract navy header panel" block in
`components/cards.tsx` with a `next/image` `<Image />`.

### Social links

Placeholder `#` hrefs in the `socials` array in `lib/site.ts`.

### Domain

`site.url` in `lib/site.ts` drives canonical URLs, Open Graph tags and the
sitemap. **Set this to the real domain before launch.**

---

## Connecting the contact form

Pick one and replace the marked `TODO` block in `app/api/contact/route.ts`.

**Option A — Resend** (recommended; simple API, good deliverability)

```bash
npm install resend
```

```ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Website <website@carmotechnology.com>",
  to: "carmotechnology1@gmail.com",
  replyTo: email,
  subject: `New enquiry — ${name}`,
  text: `${name} (${email})\n${organization}\n${service}\n\n${message}`,
});
```

Add `RESEND_API_KEY=...` to `.env.local` (and to your host's env vars).

**Option B — Formspree** (no backend code, no dependency)

Forward the submission from the route:

```ts
await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(submission),
});
```

Or bypass the route entirely by pointing the form's `fetch` URL in
`components/ContactForm.tsx` at Formspree directly.

**Option C — SMTP via Nodemailer**, if you'd rather send through an existing
mailbox.

> Before launch, consider adding spam protection (a honeypot field or
> Cloudflare Turnstile) — the endpoint is currently open.

---

## Design system

Defined as tokens in `app/globals.css` under `@theme`.

| Token | Value | Use |
| --- | --- | --- |
| `navy-700` | `#1B3A5C` | Primary brand navy |
| `navy-900` | `#0F2740` | Dark sections, hero, footer |
| `copper-500` | `#C08A3E` | The single accent — used sparingly |
| `sand-*` | greys | Body text, borders, alternating sections |
| `teal-500` | `#2A9089` | Reserved for graphics/marketing per the brand guide — deliberately **not** used in site UI |

Fonts: **Poppins** (600/700) for headings, **Inter** for body, both self-hosted
via `next/font` (no external request, no layout shift).

**The ring motif.** The copper "O" from the logo repeats throughout as the
site's signature: section markers (`<RingMark />`), dividers
(`<RingDivider />`), link underlines (`.link-underline`), oversized background
rings in heroes, and the arc on project cards.

---

## Accessibility & performance

- Semantic landmarks, one `<h1>` per page, skip-to-content link
- Single consistent `:focus-visible` treatment (copper outline) site-wide
- Mobile menu closes on `Escape`, traps background scroll, `aria-expanded`
- Form has real labels, `aria-live` status, and server-side validation
- `prefers-reduced-motion` fully respected — reveals render in final state
- `<noscript>` fallback so content is never hidden if JS fails
- All pages statically prerendered; ~107 kB first-load JS

Verified: no horizontal overflow at 390 px or 1440 px on any page; all
scroll-reveal content confirmed reachable.

---

## Deploying

Any Next.js host works. **Vercel** is the path of least resistance:

1. Push to a Git repo and import it at vercel.com
2. Add env vars (e.g. `RESEND_API_KEY`)
3. Point the domain, and set `site.url` in `lib/site.ts` to match

---

## Pre-launch checklist

- [ ] Set `site.url` to the production domain
- [ ] Wire up the contact endpoint and send a real test message
- [ ] Add spam protection to the contact form
- [ ] Replace team placeholders with real names, roles, bios, photos
- [ ] Replace social `#` placeholders
- [ ] Add an Open Graph share image (`app/opengraph-image.png`, 1200×630)
- [ ] Confirm `carmotechnology1@gmail.com` is monitored
- [ ] Send a test WhatsApp from the site and confirm it reaches +254 183 422320
- [ ] Re-render the brand film in `marketing/` — it still shows NHPC, Mogadishu and the old number
