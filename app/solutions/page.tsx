import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import { SOLUTIONS } from "@/lib/solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Ch'rps for restaurants, gyms, labs, and hotels — solutions built around how your team actually works.",
};

export default function SolutionsPage() {
  return (
    <Section className="text-center">
      <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
        Solutions built around how your team actually works.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
        Same underlying task verification, framed for the way each kind of
        team runs a shift.
      </p>

      <div className="mt-14 grid gap-6 text-left sm:grid-cols-2">
        {SOLUTIONS.map((s) => (
          <Link
            key={s.slug}
            href={`/solutions/${s.slug}`}
            className="group rounded-[var(--radius-card)] border border-border bg-white p-6 transition-colors hover:border-brand"
          >
            <PlaceholderImage
              label={`[ICON: ${s.label}]`}
              aspect="aspect-[3/1]"
              className="mb-4"
            />
            <h2 className="text-lg font-semibold text-ink group-hover:text-brand">
              {s.label}
            </h2>
            <p className="mt-2 text-sm text-muted">{s.intro}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
