import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import { FEATURE_GROUPS } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Ch'rps does: NFC tap verification, completion photos, shift reminders and missed-list alerts, an Admin Console for managers, Par Sheets and a time clock.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Built for real operations.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          The job isn&rsquo;t done until the checklist is. Here&rsquo;s how{" "}
          <Brand /> makes sure it gets done, on time, and recorded honestly.
        </p>
      </Section>

      {FEATURE_GROUPS.map((g, i) => (
        <Section
          key={g.id}
          bg={i % 2 === 0 ? "bg-card" : "bg-white"}
          tightTop={i === 0}
        >
          <h2
            id={g.id}
            className="font-heading scroll-mt-24 text-2xl font-semibold text-ink"
          >
            {g.title}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {g.features.map((f) => (
              <FeatureCard key={f.slug} feature={f} />
            ))}
          </div>
        </Section>
      ))}

      <Section className="text-center" tightTop>
        <Button href="/signup">Let&rsquo;s talk</Button>
      </Section>
    </>
  );
}
