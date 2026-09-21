import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "Tap vs. checkbox",
  description:
    "Why an NFC tap beats a paper checklist, a checkbox app, or a security camera for proving the closing work got done.",
};

const columns = ["Paper", "Checkbox app", "Cameras", "Ch'rps tap"] as const;

// true = yes, false = no
const rows: { label: string; values: [boolean, boolean, boolean, boolean] }[] = [
  { label: "Proves the person was at the station", values: [false, false, true, true] },
  { label: "Timestamped as it happens", values: [false, true, true, true] },
  { label: "Says who did the task", values: [false, true, false, true] },
  { label: "Can't be filled in after the fact", values: [false, false, true, true] },
  { label: "Records readings and notes", values: [true, true, false, true] },
  { label: "No one has to review hours of footage", values: [true, true, false, true] },
  { label: "Export for an inspector", values: [false, true, false, true] },
];

export default function ComparePage() {
  return (
    <>
      <Section className="text-center">
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          A tap is proof. A checkbox is a promise.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          Paper sheets get initialed at the end of the night. Checkbox apps
          can be ticked from the couch. Cameras record everything and answer
          nothing. <Brand /> asks for one thing: be at the machine.
        </p>
      </Section>

      <Section bg="bg-card" tightTop>
        <div className="overflow-x-auto rounded-[var(--radius-card)] border border-border bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 font-semibold text-ink">&nbsp;</th>
                {columns.map((c) => (
                  <th
                    key={c}
                    className={`p-4 text-center font-semibold ${
                      c === "Ch'rps tap" ? "text-brand" : "text-ink"
                    }`}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-border last:border-0">
                  <td className="p-4 text-muted">{r.label}</td>
                  {r.values.map((v, i) => (
                    <td key={i} className="p-4 text-center">
                      {v ? (
                        <Check
                          size={18}
                          className="mx-auto text-brand"
                          aria-label="Yes"
                        />
                      ) : (
                        <Minus
                          size={18}
                          className="mx-auto text-muted"
                          aria-label="No"
                        />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted">
          General comparison of the approaches. Individual products vary.
        </p>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-2xl font-semibold text-ink">
            Why presence matters
          </h2>
          <p className="mt-4 text-muted">
            The work that gets skipped is the work nobody sees: the machine
            teardown at closing, the sanitizer check, the walk-in temperature.
            A checkbox records that someone said it was done. A tap records
            that someone was standing there when they said it.
          </p>
          <p className="mt-4 text-muted">
            <Brand /> also flags lists that are being completed suspiciously
            fast, so a rubber-stamped close shows up in your reports instead
            of at your next inspection.
          </p>
          <div className="mt-8">
            <Button href="/signup">Book a walkthrough</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
