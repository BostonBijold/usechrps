import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, Phone } from "lucide-react";
import Section from "@/components/Section";
import GetInTouchForm from "@/components/GetInTouchForm";
import AppIcon from "@/components/AppIcon";
import Brand from "@/components/Brand";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "How Ch'rps works in three steps: stick a tag where the work happens, your crew taps it with their own phone, and you see it from anywhere.",
};

// Same contact details as app/contact/page.tsx.
const CONTACT_EMAIL = "contact@usechrps.com";
const CONTACT_PHONE = "+1 (801) 819-8197";

const steps = [
  {
    n: "1",
    title: "Stick a tag where the work happens",
    body: (
      <>
        A <Brand /> NFC tag goes wherever a check needs to happen: the
        soft-serve machine, the walk-in, the register, the drive-thru window.
        Each tag is tied to the tasks for that spot, so the checklist lives
        where the work is.
      </>
    ),
    points: [
      "Peel-and-stick, no wiring or hardware to install",
      "One tag can cover a cleaning cycle, a temperature reading or a par count",
      "The same tag works for opening, mid-shift and closing lists",
    ],
    image: "/images/howto1.jpeg",
    alt: "A Ch'rps NFC tag stuck to the door of a walk-in cooler",
  },
  {
    n: "2",
    title: "Your closer taps to prove it",
    body: "When the job is done, your crew member taps the tag with their own phone, the one already in their pocket. The tap only works in person, so a task can't be checked off from the couch.",
    points: [
      "No shared tablet, no shared login, no training deck",
      "Enter a reading, like a cooler temperature, right at the tap",
      "Require a completion photo for the tasks that matter most",
    ],
    image: "/images/howto2.jpeg",
    alt: "A staff member tapping their phone on a Ch'rps NFC tag in the kitchen",
  },
  {
    n: "3",
    title: "You see it from anywhere",
    body: "Every tap shows up as it happens: what was done, by whom, where and when. Instead of watching the cameras from home, you open the app and see how the close went.",
    points: [
      "Live checklists for every shift and every location",
      "Flags when a list is being rushed or rubber-stamped",
      "An export ready for a health inspector, insurer or corporate",
    ],
    image: "/images/howto3.jpeg",
    alt: "The Ch'rps app showing a real-time checklist of completed and pending tasks",
  },
];

const needs = [
  {
    icon: "nfc",
    title: "A few tags",
    body: (
      <>
        One for each spot you want checked.{" "}
        <Link href="/store" className="text-brand hover:underline">
          Browse tag kits
        </Link>
        .
      </>
    ),
  },
  {
    icon: "users",
    title: "Your crew's phones",
    body: "The phones they already carry. Nothing extra to buy, charge or lock up.",
  },
  {
    icon: "clipboard-list",
    title: "Your checklists",
    body: "The closing list you already use, moved onto the tags where each task happens.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-data mb-3 text-xs uppercase tracking-wide text-brand">
            How it works
          </p>
          <h1 className="font-heading text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Tag it. Tap it. See it.
          </h1>
          <p className="mt-5 text-lg text-muted">
            <Brand /> turns the jobs nobody sees into proof you can check from
            anywhere. Here&rsquo;s the whole system in three steps.
          </p>
        </div>
      </Section>

      {/* Steps */}
      {steps.map((s, i) => (
        <Section key={s.n} bg={i % 2 === 0 ? "bg-card" : "bg-white"}>
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <Image
              src={s.image}
              alt={s.alt}
              width={1024}
              height={1024}
              sizes="(min-width: 768px) 50vw, 100vw"
              className={`aspect-square w-full rounded-[var(--radius-card)] object-cover ${
                i % 2 === 1 ? "md:order-2" : ""
              }`}
            />
            <div>
              <span className="font-heading flex h-12 w-12 items-center justify-center rounded-full bg-brand text-xl font-semibold text-white">
                {s.n}
              </span>
              <h2 className="font-heading mt-5 text-3xl font-semibold text-ink">
                {s.title}
              </h2>
              <p className="mt-4 text-muted">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-muted">
                    <Check
                      size={18}
                      className="mt-0.5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>
      ))}

      {/* What you need */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-ink">
            What you need to get started
          </h2>
          <p className="mt-3 text-muted">
            No kiosk, no time clock on the wall, no new devices.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {needs.map((n) => (
            <div
              key={n.title}
              className="rounded-[var(--radius-card)] border border-border bg-white p-6"
            >
              <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-card text-brand">
                <AppIcon name={n.icon} size={22} />
              </span>
              <h3 className="text-base font-semibold text-ink">{n.title}</h3>
              <p className="mt-2 text-sm text-muted">{n.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Sign up / contact */}
      <Section bg="bg-card" className="scroll-mt-20">
        <div id="get-started" className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="font-heading text-3xl font-semibold text-ink">
              Want to see it at your shop?
            </h2>
            <p className="mt-4 text-muted">
              Leave your name and email and a real person from <Brand /> will
              get back to you. We&rsquo;ll talk through how your shop closes
              today and where tags would make the biggest difference.
            </p>
            <p className="mt-6 text-sm font-medium text-ink">
              Rather reach out directly?
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-ink hover:text-brand"
              >
                <Mail size={18} className="text-brand" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
              <a
                href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-ink hover:text-brand"
              >
                <Phone size={18} className="text-brand" aria-hidden="true" />
                {CONTACT_PHONE}
              </a>
            </div>
          </div>
          <div className="rounded-[var(--radius-card)] border border-border bg-white p-6 md:col-span-3 md:p-8">
            <GetInTouchForm />
          </div>
        </div>
      </Section>
    </>
  );
}
