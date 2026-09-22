import type { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import Brand from "@/components/Brand";
import AppIcon from "@/components/AppIcon";

export const metadata: Metadata = {
  title: "Time clock & timesheets",
  description:
    "Clock in and out with a tap on your location's NFC tag, then get weekly hours per employee and a CSV ready for your payroll provider.",
};

const steps = [
  {
    n: "1",
    title: "Tap to clock in",
    body: "Your crew taps their own phone on the location's clock tag. Only that location's tag works, so a punch means someone was actually there.",
  },
  {
    n: "2",
    title: "Tap to clock out",
    body: "A running timer shows the shift so far. On clock-out, the employee gets a receipt with their exact hours.",
  },
  {
    n: "3",
    title: "Export your hours",
    body: "Managers see each person's week, fix a missed punch, and download a CSV to enter into whatever payroll provider they use.",
  },
];

const features = [
  {
    icon: "nfc",
    title: "One tap point per location",
    body: "Each location gets its own clock tag. A task tag or Par Sheet tag can't clock anyone in, and neither can a tag from another location.",
  },
  {
    icon: "clock",
    title: "Multiple punches a day",
    body: "Clock in, out, in, out. Every closed punch adds to the day's total, with no break or lunch rules to configure.",
  },
  {
    icon: "bar-chart",
    title: "Weekly hours, regular and overtime",
    body: "Hours roll up per person per workweek, split into regular hours and overtime hours over 40. Pick which day your workweek starts.",
  },
  {
    icon: "users",
    title: "Employees see their own hours",
    body: "A \"My Hours\" view shows this week's total and a day-by-day punch list, so \"did I work 4 hours yesterday or 2\" answers itself.",
  },
  {
    icon: "clipboard-list",
    title: "Manager edits are never silent",
    body: "Forgot to clock out? A manager can fix the punch, and the edit is marked in the timesheet. A stale open punch shows as \"Still clocked in.\"",
  },
  {
    icon: "receipt",
    title: "Schedules and timecard access",
    body: "Set a simple weekly shift per employee and see scheduled vs. actual hours. Turn timecards off for anyone who shouldn't punch a clock, like a salaried manager.",
  },
];

export default function TimeTrackingPage() {
  return (
    <>
      <Section className="text-center">
        <p className="font-data mb-3 text-xs uppercase tracking-wide text-brand">
          Time clock &amp; timesheets
        </p>
        <h1 className="font-heading text-4xl font-semibold text-ink md:text-5xl">
          The same tap that proves the job, proves the hours.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted">
          <Brand /> includes an NFC time clock. Staff punch in and out with
          their own phone, and you get a clean weekly hours report for
          payroll — no separate clock-in app, no PIN pad, no selfies.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup">Book a walkthrough</Button>
          <Button href="/features" variant="secondary">
            All features
          </Button>
        </div>
      </Section>

      <Section bg="bg-card">
        <h2 className="text-center font-heading text-3xl font-semibold text-ink">
          How it works
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="text-center">
              <span className="font-data text-xs uppercase tracking-wide text-brand">
                Step {s.n}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={f.icon} size={22} />
              </span>
              <h3 className="text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="bg-card">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            The export, and what it isn&rsquo;t.
          </h2>
          <p className="mt-4 text-muted">
            One CSV per week, one row per person: employee, email, week start
            and end, regular hours, overtime hours and scheduled hours. Use it
            as the source for entering hours into Gusto, QuickBooks, ADP or
            whatever you already run payroll with.
          </p>
          <div className="mt-6 overflow-x-auto rounded-[var(--radius-card)] border border-border bg-white">
            <table className="w-full min-w-[520px] text-left text-xs">
              <thead className="border-b border-border text-muted">
                <tr>
                  <th className="p-3 font-medium">Employee</th>
                  <th className="p-3 font-medium">Week</th>
                  <th className="p-3 font-medium">Regular</th>
                  <th className="p-3 font-medium">Overtime</th>
                  <th className="p-3 font-medium">Scheduled</th>
                </tr>
              </thead>
              <tbody className="font-data text-ink">
                <tr>
                  <td className="p-3">Example Employee</td>
                  <td className="p-3">Sep 7 – Sep 13</td>
                  <td className="p-3">40.00</td>
                  <td className="p-3">4.50</td>
                  <td className="p-3">40.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-xs text-muted">Illustrative data.</p>
          <h3 className="mt-8 text-lg font-semibold text-ink">
            <Brand /> is not a payroll system.
          </h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>
              It doesn&rsquo;t calculate pay, withhold tax or run direct
              deposit, and it doesn&rsquo;t connect directly to payroll
              providers. You take the hours file to your provider.
            </li>
            <li>
              No PTO, sick or holiday tracking, and no approval or lock step
              on a week&rsquo;s hours.
            </li>
            <li>
              Hours are exact minutes with no rounding, and overtime is
              calculated as weekly hours over 40. Check that against your
              own state and payroll rules.
            </li>
          </ul>
        </div>
      </Section>

      <Section bg="bg-brand" className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-white">
          One tag on the wall. Everyone&rsquo;s hours on the record.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup" variant="inverse">
            Book a walkthrough
          </Button>
          <Button href="/pricing" variant="inverse-ghost">
            See pricing
          </Button>
        </div>
      </Section>
    </>
  );
}
