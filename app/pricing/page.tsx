import type { Metadata } from "next";
import { Check } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import { PLAN, KITS, REORDER_TAGS } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "One plan for Ch'rps: $149 a month per location, everything included — billed to the business, not per employee.",
};

export default function PricingPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          One plan. One price per location.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          <Brand /> is billed per location, not per employee — your price
          doesn&rsquo;t change every time you hire or lose someone. Every
          location gets every feature: checklists, Par Sheets, the time
          clock, and notifications.
        </p>
      </Section>

      <Section bg="bg-card">
        <div className="mx-auto flex max-w-md flex-col rounded-[var(--radius-card)] border border-brand bg-white p-6 shadow-lg">
          <h2 className="text-lg font-semibold text-ink">{PLAN.name}</h2>
          <p className="mt-2 text-sm text-muted">{PLAN.description}</p>
          <p className="mt-5">
            <span className="font-heading text-3xl font-semibold text-ink">
              {PLAN.price}
            </span>
            <span className="ml-1 text-sm text-muted">{PLAN.unit}</span>
          </p>
          <ul className="mt-6 flex-1 space-y-3 text-sm text-muted">
            {PLAN.features.map((f) => (
              <li key={f} className="flex items-start gap-2">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button href={PLAN.cta.href} className="w-full">
              {PLAN.cta.label}
            </Button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          Pricing above reflects early-access rates, confirmed when you get
          set up — not a locked price sheet.
        </p>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            NFC hardware kits
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            A one-time hardware fee, separate from your subscription, charged
            once per location at signup. Every kit ships at 1/3 off when you
            sign up — no negotiating, no fine print.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {KITS.map((kit) => (
            <div
              key={kit.slug}
              className="flex flex-col rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="font-data w-fit rounded-[var(--radius-pill)] bg-card px-2.5 py-1 text-[10px] uppercase tracking-wide text-brand">
                {kit.discountLabel} at signup
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {kit.name}
              </h3>
              <p className="mt-1 text-sm text-muted">{kit.tagSummary}</p>
              <p className="mt-4">
                <span className="text-sm text-muted line-through">
                  {kit.listPrice}
                </span>{" "}
                <span className="font-heading text-2xl font-semibold text-ink">
                  {kit.signupPrice}
                </span>
                <span className="ml-1 text-sm text-muted">at signup</span>
              </p>
              <p className="mt-4 flex-1 text-sm text-muted">{kit.blurb}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-[var(--radius-card)] border border-border bg-card p-6 text-center">
          <h3 className="text-lg font-semibold text-ink">Need more tags?</h3>
          <p className="mt-2 text-sm text-muted">
            Order exactly what you need, whenever you need it — no preset
            pack sizes.
          </p>
          <ul className="mx-auto mt-5 max-w-xs space-y-2 text-sm text-muted">
            {REORDER_TAGS.map((tag) => (
              <li
                key={tag.slug}
                className="flex items-center justify-between border-b border-border pb-2 last:border-0"
              >
                <span>{tag.label}</span>
                <span className="font-data text-ink">{tag.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tightTop>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Questions before you start?
          </h2>
          <p className="mt-3 text-muted">
            <Brand /> will walk you through setup — no self-serve checkout
            yet, just a quick conversation.
          </p>
          <div className="mt-6">
            <Button href="/contact">Talk to Us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
