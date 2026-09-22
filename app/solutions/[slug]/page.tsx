import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import FeatureCard from "@/components/FeatureCard";
import AppIcon from "@/components/AppIcon";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import TaskStatePill from "@/components/TaskStatePill";
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
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/signup">Book a walkthrough</Button>
              <Button href="/pricing" variant="secondary">
                See pricing
              </Button>
            </div>
          </div>
          {solution.image ? (
            <Image
              src={solution.image.src}
              alt={solution.image.alt}
              width={1024}
              height={1024}
              className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
            />
          ) : (
            <PlaceholderImage
              label={`[IMAGE: ${solution.label} in use]`}
              aspect="aspect-[4/3]"
            />
          )}
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

      {solution.sampleLists && (
        <Section>
          <h2 className="font-heading text-2xl font-semibold text-ink">
            What your crew taps.
          </h2>
          <p className="mt-3 max-w-2xl text-muted">
            Example lists — build your own in minutes. Each task can be tied
            to an NFC tag at the station, with step-by-step instructions and
            an optional required photo.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {solution.sampleLists.map((list) => (
              <div
                key={list.title}
                className="rounded-[var(--radius-card)] border border-border bg-white p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-ink">
                    {list.title}
                  </h3>
                  <TaskStatePill state="pending" />
                </div>
                <ul className="mt-4 space-y-3">
                  {list.tasks.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-3 text-sm text-muted"
                    >
                      <span
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-brand"
                        aria-hidden="true"
                      >
                        <AppIcon name="nfc" size={12} />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted">
            Sample lists are a starting point. Follow your local health code
            and your equipment manufacturer&rsquo;s cleaning instructions.
          </p>
        </Section>
      )}

      <Section
        bg={solution.sampleLists ? "bg-card" : "bg-white"}
        tightTop={!solution.sampleLists}
      >
        <h2 className="font-heading text-2xl font-semibold text-ink">
          Everything you need, verified.
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedFeatures.map((f) => (
            <FeatureCard key={f.slug} feature={f} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/signup">Book a walkthrough</Button>
          <p className="mt-3 text-sm text-muted">
            <Brand /> is priced per location, not per employee.
          </p>
        </div>
      </Section>
    </>
  );
}
