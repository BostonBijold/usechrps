import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import TaskStatePill from "@/components/TaskStatePill";
import AppIcon from "@/components/AppIcon";
import Brand from "@/components/Brand";
import { SOLUTIONS } from "@/lib/solutions";

const steps = [
  {
    n: "1",
    title: "Stick a tag on the machine",
    body: (
      <>
        A <Brand /> NFC tag goes wherever the check happens: the soft-serve
        machine, the walk-in, the register, the drive-thru window.
      </>
    ),
    image: "/images/howto1.jpeg",
    alt: "A Ch'rps NFC tag stuck to the door of a walk-in cooler",
  },
  {
    n: "2",
    title: "Your closer taps to prove it",
    body: "A tap with their own phone, already in their pocket. No separate device, no shared login, no training deck.",
    image: "/images/howto2.jpeg",
    alt: "A staff member tapping their phone on a Ch'rps NFC tag in the kitchen",
  },
  {
    n: "3",
    title: "You see it from anywhere",
    body: "Timestamped, by whom, where, and when, as it happens. No more watching the cameras to find out.",
    image: "/images/howto3.jpeg",
    alt: "The Ch'rps app showing a real-time checklist of completed and pending tasks",
  },
];

const problems = [
  {
    icon: "clock",
    title: "Closing alone",
    body: "A short window to clean, restock and lock up, by yourself. Something gets skipped, and you find out tomorrow.",
  },
  {
    icon: "clipboard-list",
    title: "The machine gets skipped",
    body: "Soft-serve and froyo machine cleaning runs on the honor system. It's the task most likely to be missed, and a common trouble spot at inspections.",
  },
  {
    icon: "users",
    title: "Watching the cameras",
    body: "Owners and managers end up checking security footage from home just to know whether the job got done.",
  },
];

const trustPoints = [
  {
    icon: "clipboard-list",
    title: "Timestamped, per-person records",
    body: "Every task logs who completed it, and when. Form tasks also log the reading they entered, like a cooler temperature.",
  },
  {
    icon: "nfc",
    title: "A tap, not a checkbox",
    body: "The person has to be at the machine to complete the task. A required completion photo can be added for the ones that matter most.",
  },
  {
    icon: "bar-chart",
    title: "Signals when a list is being rubber-stamped",
    body: "Reports flag checklists being completed suspiciously fast, so a tap that meant nothing doesn't go unnoticed.",
  },
  {
    icon: "receipt",
    title: "An export ready for the inspector",
    body: "Pull your completion history, readings and notes into one file for a health inspector, an insurer, or corporate.",
  },
];

const pillars = [
  {
    icon: "nfc",
    label: "Verify",
    title: "Proof, not promises.",
    body: "A task is completed with a tap on the tag at the station, so the person has to be standing there. Add a required photo for the tasks that matter most. Lists finished suspiciously fast get flagged.",
  },
  {
    icon: "bell",
    label: "Remind",
    title: "No more texting the crew.",
    body: "Whoever's clocked in gets a nudge when a list's start time arrives. If it's still not done when the window closes, managers get an alert.",
  },
  {
    icon: "clipboard-list",
    label: "Manage",
    title: "Set it up once. See everything.",
    body: "Build your lists with step-by-step instructions and photos, so a new hire knows exactly what \"clean the machine\" means. Review the work, send back anything that wasn't done right, and see every location in one place.",
  },
];

const managerPoints = [
  {
    icon: "monitor",
    title: "Admin Console",
    body: "Build and edit task lists, a task catalog and par sheets from a full desktop view.",
  },
  {
    icon: "list-ordered",
    title: "Step-by-step instructions",
    body: "Up to three steps per task, each with a photo, shown to the crew right at the tap.",
  },
  {
    icon: "undo",
    title: "Review and rework",
    body: "Send a task back with a note. It gets redone, and the record shows both.",
  },
  {
    icon: "bar-chart",
    title: "Reports",
    body: "Completion gaps, lists running behind, and each person's history.",
  },
];

const alsoIncluded = [
  {
    icon: "package",
    title: "Par Sheets",
    body: "Count cups, lids and toppings by area. Anything below par gets flagged.",
    href: "/features#par-sheets",
  },
  {
    icon: "clock",
    title: "Time clock",
    body: "Staff clock in with the same tap. Weekly hours and a CSV for payroll.",
    href: "/time-tracking",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="font-data mb-3 text-xs uppercase tracking-wide text-brand">
              For treat shops, drink shops and restaurants
            </p>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Know the checklist got done, even when you&rsquo;re not there.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              <Brand /> proves your crew did the job with a tap on a tag, right
              where the work happens. The soft-serve machine, the walk-in, the
              closing lock-up. No cameras to watch, no checkbox to fake.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/signup">Let&rsquo;s talk</Button>
              <Button href="/how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
          <Image
            src="/images/homepage-hero.jpeg"
            alt="A staff member tapping their phone on a Ch'rps NFC tag to check a walk-in freezer"
            width={734}
            height={1456}
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
            priority
          />
        </div>
      </Section>

      {/* The closing problem */}
      <Section bg="bg-card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            One person. One close. Nobody checking.
          </h2>
          <p className="mt-3 text-muted">
            Small shops run on teen crews, thin staffing and closers who work
            alone. The work that matters most is the work nobody sees.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={p.icon} size={22} />
              </span>
              <h3 className="text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <h2 className="font-heading text-center text-3xl font-semibold text-ink">
          How it works
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center">
              <Image
                src={s.image}
                alt={s.alt}
                width={220}
                height={220}
                className="mb-5 aspect-square w-full max-w-[220px] rounded-[var(--radius-card)] object-cover"
              />
              <span className="font-data mb-2 text-xs uppercase tracking-wide text-brand">
                Step {s.n}
              </span>
              <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 max-w-xs text-sm text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Verify / Remind / Manage */}
      <Section bg="bg-card">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Checklists you can actually trust.
          </h2>
          <p className="mt-3 text-muted">
            A checklist only helps if it gets done, on time, by someone who
            was really there. <Brand /> handles all three.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.label}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={p.icon} size={22} />
              </span>
              <span className="font-data mb-1 block text-xs uppercase tracking-wide text-brand">
                {p.label}
              </span>
              <h3 className="text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Manager side */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Run it from your phone or your desk.
            </h2>
            <p className="mt-5 text-muted">
              Managers can fix a list mid-shift from their phone, or sit down
              at a laptop and build out every list for every location. Same
              lists, same data, either way.
            </p>
            <ul className="mt-6 space-y-4">
              {managerPoints.map((m) => (
                <li key={m.title} className="flex items-start gap-3">
                  <AppIcon
                    name={m.icon}
                    size={20}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  <span className="text-sm text-muted">
                    <span className="font-semibold text-ink">{m.title}.</span>{" "}
                    {m.body}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Setup takes minutes, not a weekend. If a tool adds work for your
              managers, it doesn&rsquo;t last. We built <Brand /> so it
              doesn&rsquo;t.
            </p>
          </div>
          {/* TODO: replace with Admin Console screenshot */}
          <Image
            src="/images/checklists.png"
            alt="The Ch'rps app showing Opening, Mid-Shift, and Closing shift checklists with live completion times"
            width={788}
            height={1336}
            className="mx-auto w-full max-w-xs rounded-[var(--radius-card)] object-contain"
          />
        </div>
      </Section>

      {/* Inspection ready */}
      <Section bg="bg-card">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Ready when the inspector walks in.
            </h2>
            <p className="mt-5 text-muted">
              Tell the inspector what happened, and show them. <Brand /> keeps
              an honest, timestamped record of cleaning cycles, temperature
              readings and closing lists, plus the follow-up when something
              was out of range.
            </p>
            <ul className="mt-6 space-y-4">
              {trustPoints.map((t) => (
                <li key={t.title} className="flex items-start gap-3">
                  <AppIcon
                    name={t.icon}
                    size={20}
                    className="mt-0.5 shrink-0 text-brand"
                  />
                  <span className="text-sm text-muted">
                    <span className="font-semibold text-ink">{t.title}.</span>{" "}
                    {t.body}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <TaskStatePill state="done" />
              <TaskStatePill state="rest" />
              <TaskStatePill state="missed" />
              <TaskStatePill state="pending" />
            </div>
          </div>
          <Image
            src="/images/checklists.png"
            alt="The Ch'rps app showing Opening, Mid-Shift, and Closing shift checklists with live completion times"
            width={788}
            height={1336}
            className="mx-auto w-full max-w-xs rounded-[var(--radius-card)] object-contain"
          />
        </div>
      </Section>

      {/* Also included */}
      <Section>
        <h2 className="font-heading text-center text-3xl font-semibold text-ink">
          Also included, no extra charge.
        </h2>
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {alsoIncluded.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group rounded-[var(--radius-card)] border border-border bg-white p-5 transition-colors hover:border-brand"
            >
              <div className="mb-2 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-button)] bg-card text-brand">
                  <AppIcon name={a.icon} size={18} />
                </span>
                <h3 className="text-base font-semibold text-ink group-hover:text-brand">
                  {a.title}
                </h3>
              </div>
              <p className="text-sm text-muted">{a.body}</p>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          One plan, every feature, priced per location.{" "}
          <Link
            href="/pricing"
            className="font-semibold text-brand hover:underline"
          >
            See pricing
          </Link>
        </p>
      </Section>

      {/* Verification / MFA-by-presence — hidden, not ready for production
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-ink">
              No more mugshots. Only taps.
            </h2>
            <p className="mt-5 text-muted">
              Some platforms make employees stop and take a photo of their own
              face every time they clock in, sometimes four times a day.{" "}
              <Brand /> doesn&rsquo;t. Your phone is already yours: it&rsquo;s
              in your pocket, it&rsquo;s tied to your number, and you&rsquo;re
              not likely to hand it to someone else. That&rsquo;s real
              verification: the right person, physically present, using
              their own device. All without asking anyone for a selfie at 11pm
              at the end of an eight-hour shift.
            </p>
            <p className="mt-4 text-muted">
              No biometric scans. No facial recognition. No PIN pads. Just a
              tap, verified by presence and device, not a photo.
            </p>
          </div>
          <Image
            src="/images/mugshot.jpeg"
            alt="An old-style facial recognition clock-out kiosk scanning an employee's face"
            width={1407}
            height={768}
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
          />
        </div>
      </Section>
      */}

      {/* Vertical teaser */}
      <Section bg="bg-card">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Built for shops that close with one person.
          </h2>
          <p className="mt-3 text-muted">
            Treat and drink shops first, and it works the same for
            restaurants too.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group rounded-[var(--radius-card)] border border-border bg-white p-6 text-center transition-colors hover:border-brand"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={s.slug} size={26} />
              </span>
              <span className="block text-sm font-semibold text-ink group-hover:text-brand">
                {s.label}
              </span>
              {s.tagline && (
                <span className="mt-1 block text-xs text-muted">
                  {s.tagline}
                </span>
              )}
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/solutions" variant="secondary">
            Explore solutions
          </Button>
        </div>
      </Section>

      {/* Multi-location */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Running more than one location?
          </h2>
          <p className="mt-3 text-muted">
            Priced per location, not per employee, so a crew that turns over
            every few months never changes your bill. Same checklists at every
            store, one view of how each one closed.
          </p>
          <div className="mt-6">
            <Button href="/for-multi-unit-operators" variant="secondary">
              For multi-unit operators
            </Button>
          </div>
        </div>
      </Section>

      {/* Footer CTA */}
      <Section bg="bg-brand" className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-white">
          Ready to stop wondering if it got done?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup" variant="inverse">
            Let&rsquo;s talk
          </Button>
          <Button href="/store" variant="inverse-ghost">
            Browse tags
          </Button>
        </div>
      </Section>
    </>
  );
}
