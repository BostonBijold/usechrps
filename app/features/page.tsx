import type { Metadata } from "next";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import Button from "@/components/Button";
import { FEATURES } from "@/lib/features";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Everything Ch'rps does today, and what's coming next — task verification, NFC tap-to-trigger, real-time analytics, and more.",
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          Built for real operations.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          The job isn&rsquo;t done until the checklist is. Here&rsquo;s
          everything Ch&rsquo;rps does to make sure it actually gets done —
          and recorded honestly.
        </p>
      </Section>

      <Section bg="bg-card" tightTop>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/signup">Get Started</Button>
        </div>
      </Section>
    </>
  );
}
