import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import { KITS, TAG_PRICE } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Store",
  description:
    "Ch'rps-branded NFC tags, ready to use — pre-provisioned and claimed to your company on setup.",
};

const tag = {
  name: "Ch'rps On-Metal Tags",
  suffix: "On-Metal Tags",
  description:
    "Freezer-rated NFC tags that read reliably on any surface — machines, steel shelving, walk-in doors, prep lines, and everywhere else.",
  image: "/images/stickers.jpeg",
};

export default function StorePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          <Brand />-branded NFC tags, ready to use.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Every <Brand /> tag is a freezer-rated on-metal tag, built to
          survive wherever it&rsquo;s mounted. One tag for every spot. This
          is the hardware that turns a checklist into a verified,
          timestamped record.
        </p>
      </Section>

      <Section bg="bg-card" tightTop>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Hardware Kits
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            A one-time hardware fee, separate from your subscription, charged
            once per location.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {KITS.map((kit) => (
            <div
              key={kit.slug}
              className="flex flex-col rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-ink">{kit.name}</h3>
              <p className="mt-1 text-sm text-muted">{kit.tagSummary}</p>
              <p className="font-heading mt-4 text-2xl font-semibold text-ink">
                {kit.listPrice}
              </p>
              <p className="mt-4 flex-1 text-sm text-muted">{kit.blurb}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Individual tags
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Need more tags later? Order exactly what you need, whenever you
            need it. Tags are pre-provisioned and claimed to your company on
            setup — a tag not purchased through <Brand /> simply won&rsquo;t
            claim, so there&rsquo;s no guesswork about compatible hardware.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-md rounded-[var(--radius-card)] border border-border bg-white p-6">
          <Image
            src={tag.image}
            alt={tag.name}
            width={600}
            height={450}
            className="mb-5 aspect-[4/3] w-full rounded-[var(--radius-card)] border border-border object-contain"
          />
          <h3 className="text-lg font-semibold text-ink">
            <Brand /> {tag.suffix}
          </h3>
          <p className="mt-2 text-sm text-muted">{tag.description}</p>
          <p className="font-data mt-4 text-xs uppercase tracking-wide text-brand">
            {TAG_PRICE}
          </p>
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
