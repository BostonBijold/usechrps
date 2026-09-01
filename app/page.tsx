import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Section from "@/components/Section";
import PlaceholderImage from "@/components/PlaceholderImage";
import TaskStatePill from "@/components/TaskStatePill";
import AppIcon from "@/components/AppIcon";
import Brand from "@/components/Brand";
import { SOLUTIONS } from "@/lib/solutions";

const steps = [
  {
    n: "1",
    title: "Stick a tag at the station",
    body: (
      <>
        A <Brand /> NFC tag goes wherever the check happens — the walk-in,
        the register, the front desk.
      </>
    ),
    image: "/images/howto1.jpeg",
    alt: "A Ch'rps NFC tag stuck to the door of a walk-in cooler",
  },
  {
    n: "2",
    title: "Staff taps to mark it complete",
    body: "A tap with their own phone, already in their pocket — no separate device, no shared login.",
    image: "/images/howto2.jpeg",
    alt: "A staff member tapping their phone on a Ch'rps NFC tag in the kitchen",
  },
  {
    n: "3",
    title: "Managers see real-time proof",
    body: "Timestamped, by whom, where, and when — as it happens, not reconstructed at the end of a shift.",
    image: "/images/howto3.jpeg",
    alt: "The Ch'rps app showing a real-time checklist of completed and pending tasks",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="font-heading text-4xl font-semibold leading-tight text-ink md:text-5xl">
              Checklists, trusted every time.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted">
              <Brand /> verifies that the right person completed the right
              task, at the right place, at the right time — no more guessing
              whether the closing checklist actually got done.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/signup">Get Started</Button>
              <Button href="/features" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>
          <Image
            src="/images/homepage-hero.jpeg"
            alt="A restaurant staff member tapping their phone on a Ch'rps NFC tag to check a walk-in freezer"
            width={734}
            height={1456}
            className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover"
            priority
          />
        </div>
      </Section>

      {/* How it works */}
      <Section bg="bg-card">
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

      {/* Verification / MFA-by-presence */}
      <Section>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-ink">
              No more mugshots. Only taps.
            </h2>
            <p className="mt-5 text-muted">
              Some platforms make employees stop and take a photo of their own
              face every time they clock in — sometimes four times a day.{" "}
              <Brand /> doesn&rsquo;t. Your phone is already yours: it&rsquo;s
              in your pocket, it&rsquo;s tied to your number, and you&rsquo;re
              not likely to hand it to someone else. That&rsquo;s real
              verification — the right person, physically present, using
              their own device — without asking anyone for a selfie at 11pm
              at the end of an eight-hour shift.
            </p>
            <p className="mt-4 text-muted">
              No biometric scans. No facial recognition. No PIN pads. Just a
              tap — verified by presence and device, not a photo.
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

      {/* More than a checklist */}
      <Section bg="bg-card">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <PlaceholderImage
            label="[IMAGE: dashboard / analytics screenshot]"
            aspect="aspect-[4/3]"
            className="order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Built for real operations, not just checkboxes.
            </h2>
            <p className="mt-5 text-muted">
              Task verification is the foundation. Clock-in/clock-out and
              other operational tools are on the roadmap — <Brand /> is
              built to grow into the rest of how a physical-operations
              business actually runs, not stay a single-purpose checklist app.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <TaskStatePill state="done" />
              <TaskStatePill state="rest" />
              <TaskStatePill state="missed" />
              <TaskStatePill state="pending" />
            </div>
          </div>
        </div>
      </Section>

      {/* Vertical teaser */}
      <Section>
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            Built first for restaurants.
          </h2>
          <p className="mt-3 text-muted">
            Built for gyms, labs, and hotels too.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/solutions/${s.slug}`}
              className="group rounded-[var(--radius-card)] border border-border bg-white p-6 text-center transition-colors hover:border-brand"
            >
              <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={s.slug} size={26} />
              </span>
              <span className="text-sm font-semibold text-ink group-hover:text-brand">
                {s.label}
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/solutions" variant="secondary">
            Explore solutions
          </Button>
        </div>
      </Section>

      {/* Footer CTA */}
      <Section bg="bg-brand" className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-white">
          Ready to trust your checklists again?
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/signup" variant="inverse">
            Get Started
          </Button>
          <Button href="/store" variant="inverse-ghost">
            Browse tags
          </Button>
          <Button href="/contact" variant="inverse-ghost">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
