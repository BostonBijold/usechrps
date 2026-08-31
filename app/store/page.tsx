import type { Metadata } from "next";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import Button from "@/components/Button";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Ch'rps-branded NFC tags, ready to use — pre-provisioned and claimed to your company on setup.",
};

const products = [
  {
    name: "Ch'rps Cards",
    suffix: "Cards",
    description:
      "Durable NFC cards, sized for a station or wall mount — the standard choice for fridges, prep lines, and equipment.",
    priceRange: "$—–$— per pack (pricing TBD)",
  },
  {
    name: "Ch'rps Stickers",
    suffix: "Stickers",
    description:
      "Adhesive NFC stickers for tighter spaces — a shelf edge, a piece of equipment, a door frame.",
    priceRange: "$—–$— per pack (pricing TBD)",
  },
];

export default function StorePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          <Brand />-branded NFC tags, ready to use.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          <Brand /> tags are pre-provisioned and claimed to your company on
          setup — a tag not purchased through <Brand /> simply won&rsquo;t
          claim, so there&rsquo;s no guesswork about compatible hardware.
        </p>
      </Section>

      <Section bg="bg-card" tightTop>
        <div className="grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <PlaceholderImage
                label={`[IMAGE: ${p.name}]`}
                aspect="aspect-[4/3]"
                className="mb-5"
              />
              <h2 className="text-lg font-semibold text-ink">
                <Brand /> {p.suffix}
              </h2>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
              <p className="font-data mt-4 text-xs uppercase tracking-wide text-brand">
                Starting at {p.priceRange}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Already a <Brand /> client and need to reorder? The same page
            works for that too.
          </p>
          <div className="mt-5">
            <Button href="/contact">Talk to us about tags</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
