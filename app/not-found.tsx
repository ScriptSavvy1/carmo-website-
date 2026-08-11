import { ArrowRight, Aurora, Button, Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="ink-panel noise relative overflow-hidden">
      <Aurora />
      <div
        aria-hidden="true"
        className="grid-field grid-field-ink pointer-events-none absolute inset-0"
      />
      <Container className="relative">
        <div className="flex min-h-[60vh] max-w-xl flex-col justify-center py-24">
          <span
            aria-hidden="true"
            className="h-10 w-10 animate-float rounded-full border-[6px] border-copper-500"
          />
          <p className="mt-8 font-display text-sm font-semibold tracking-[0.2em] text-copper-300">
            404
          </p>
          <h1 className="mt-3 text-4xl tracking-tight text-white sm:text-5xl">
            Page not found.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-navy-100">
            That link doesn&rsquo;t lead anywhere. Try the homepage, or tell us what you
            were looking for.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/">
              Back to home
              <ArrowRight />
            </Button>
            <Button href="/contact" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
