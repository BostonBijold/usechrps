import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import { RESOURCES, getResource } from "@/lib/resources";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return { title: resource.title, description: resource.description };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <>
      <Section>
        <div className="mx-auto max-w-2xl">
          <p className="font-data mb-3 text-xs uppercase tracking-wide text-brand">
            Checklist
          </p>
          <h1 className="font-heading text-4xl font-semibold text-ink">
            {resource.title}
          </h1>
          <p className="mt-4 text-muted">{resource.intro}</p>

          <div className="mt-10 space-y-8">
            {resource.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-semibold text-ink">{s.heading}</h2>
                <ul className="mt-3 space-y-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted"
                    >
                      <span
                        className="mt-0.5 h-4 w-4 shrink-0 rounded-sm border border-border"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 border-t border-border pt-6 text-sm text-muted sm:grid-cols-3">
            <p>Completed by: ______________</p>
            <p>Date: ______________</p>
            <p>Time: ______________</p>
          </div>
        </div>
      </Section>

      <Section bg="bg-card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            A signature isn&rsquo;t proof. A tap is.
          </h2>
          <p className="mt-3 text-muted">
            <Brand /> turns a list like this into taps at the machine, so you
            know it got done — not just that it got initialed.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button href="/signup">Book a walkthrough</Button>
            <Button href="/resources" variant="secondary">
              More resources
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
