import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import { RESOURCES } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Free printable checklists for soft-serve machine cleaning and one-person closing, from Ch'rps.",
};

export default function ResourcesPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Resources
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
          Free, printable checklists for small shops. Use them on paper today,
          and turn them into verified taps with <Brand /> when you&rsquo;re
          ready.
        </p>
      </Section>

      <Section bg="bg-card" tightTop>
        <div className="grid gap-6 sm:grid-cols-2">
          {RESOURCES.map((r) => (
            <Link
              key={r.slug}
              href={`/resources/${r.slug}`}
              className="group rounded-[var(--radius-card)] border border-border bg-white p-6 transition-colors hover:border-brand"
            >
              <h2 className="text-lg font-semibold text-ink group-hover:text-brand">
                {r.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{r.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/signup">Book a walkthrough</Button>
        </div>
      </Section>
    </>
  );
}
