import type { Metadata } from "next";
import Section from "@/components/Section";
import PlaceholderBox from "@/components/PlaceholderBox";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Ch'rps.",
};

export default function AboutPage() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl">
        <h1 className="font-heading text-4xl font-semibold text-ink">
          About Ch&rsquo;rps
        </h1>
        <p className="mt-5 text-muted">
          Ch&rsquo;rps turns the shift checklist into an honest record.
          Fridge and freezer temps, restroom checks, cash counts, opening and
          closing tasks — logged as they happen, not reconstructed at the end
          of a shift.
        </p>
        <div className="mt-8">
          <PlaceholderBox>
            Founder story and mission — full copy to be added.
          </PlaceholderBox>
        </div>
      </div>
    </Section>
  );
}
