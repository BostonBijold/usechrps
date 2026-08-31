import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Resources",
  description: "How-to guides and articles for running Ch'rps — coming soon.",
};

export default function ResourcesPage() {
  return (
    <Section className="text-center">
      <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
        Resources
      </h1>
      <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
        Coming soon — how-to guides for running Ch&rsquo;rps at your
        business.
      </p>
      <div className="mt-8">
        <Button href="/signup" variant="secondary">
          Get Started instead
        </Button>
      </div>
    </Section>
  );
}
