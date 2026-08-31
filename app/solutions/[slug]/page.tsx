import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import FeatureCard from "@/components/FeatureCard";
import AppIcon from "@/components/AppIcon";
import Button from "@/components/Button";
import { SOLUTIONS, getSolution } from "@/lib/solutions";
import { FEATURES } from "@/lib/features";

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.label,
    description: solution.intro,
  };
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  const displayedFeatures = solution.primary ? FEATURES : FEATURES.slice(0, 6);

  return (
    <>
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-3 flex items-center gap-2 text-brand">
              <AppIcon name={solution.slug} size={18} />
              <p className="font-data text-xs uppercase tracking-wide">
                For {solution.label}
              </p>
            </div>
            <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
              {solution.headline}
            </h1>
            <p className="mt-5 text-lg text-muted">{solution.intro}</p>
            <div className="mt-8">
              <Button href="/signup">Get Started</Button>
            </div>
          </div>
          <PlaceholderImage
            label={`[IMAGE: ${solution.label} in use]`}
            aspect="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section bg="bg-card" tightTop>
        <h2 className="font-heading text-2xl font-semibold text-ink">
          What we hear from {solution.label.toLowerCase()}
        </h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {solution.painPoints.map((p) => (
            <li
              key={p}
              className="rounded-[var(--radius-card)] border border-border bg-white p-5 text-sm text-muted"
            >
              {p}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Everything you need, verified.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedFeatures.map((f) => (
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
