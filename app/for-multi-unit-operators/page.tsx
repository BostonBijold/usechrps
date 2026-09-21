import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import AppIcon from "@/components/AppIcon";
import { FAQS } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "For multi-unit operators",
  description:
    "Run the same checklists at every location and see how each one closed — priced per location, not per employee.",
};

const points = [
  {
    icon: "users",
    title: "One view of every location",
    body: "Switch locations from the header and roll up how each store is doing, instead of calling each manager to ask.",
  },
  {
    icon: "clipboard-list",
    title: "The same standard, every store",
    body: "Build a list once and reuse it. New locations start from the lists you already trust, with step-by-step instructions for new hires.",
  },
  {
    icon: "nfc",
    title: "Proof, not promises",
    body: "A tap at the machine, with an optional photo, tells you the closer was there — at every location, every night.",
  },
  {
    icon: "bell",
    title: "Alerts when a list is missed",
    body: "Managers get a push when a shift list is late or missed, so you hear about it that night, not at the next inspection.",
  },
  {
    icon: "wifi-off",
    title: "Works when the Wi-Fi doesn't",
    body: "Offline support keeps taps and counts safe until the phone reconnects.",
  },
  {
    icon: "receipt",
    title: "Per location, not per employee",
    body: "A crew that turns over every few months never changes your bill. Budget by store, not by headcount.",
  },
];

const steps = [
  { n: "1", title: "Walkthrough", body: "A short call about how your shops close today." },
  { n: "2", title: "Pilot one location", body: "Start with a single store and a starter kit of tags." },
  { n: "3", title: "Roll out", body: "Copy what worked to the rest of your locations." },
];

export default function MultiUnitPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Section className="text-center">
        <p className="font-data mb-3 text-xs uppercase tracking-wide text-brand">
          For multi-unit operators
        </p>
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Know how every location closed.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          You can&rsquo;t be in every shop at 10pm. <Brand /> gives you
          timestamped proof of who did what, at every location, without a
          per-employee bill that climbs with turnover.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup">Book a walkthrough</Button>
          <Button href="/pricing" variant="secondary">
            See pricing
          </Button>
        </div>
      </Section>

      <Section bg="bg-card">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={p.icon} size={22} />
              </span>
              <h2 className="text-base font-semibold text-ink">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-center font-heading text-3xl font-semibold text-ink">
          Start with one shop.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <span className="font-data text-xs uppercase tracking-wide text-brand">
                Step {s.n}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="bg-card">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink">
          Questions owners ask
        </h2>
        <dl className="mx-auto mt-10 max-w-2xl space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold text-ink">{f.q}</dt>
              <dd className="mt-1 text-sm text-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section bg="bg-brand" className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-white">
          See it in one shop first.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup" variant="inverse">
            Book a walkthrough
          </Button>
          <Button href="/contact" variant="inverse-ghost">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
