import type { ReactNode } from "react";
import Link from "next/link";
import Brand from "@/components/Brand";

export type Feature = {
  slug: string;
  icon: string;
  title: string;
  description: ReactNode;
  placeholder?: boolean;
  /** Optional in-page anchor, for links like /features#par-sheets. */
  anchor?: string;
};

export type FeatureGroup = {
  id: string;
  title: string;
  features: Feature[];
};

export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    id: "verify",
    title: "Verify: proof the work happened",
    features: [
      {
        slug: "nfc",
        icon: "nfc",
        title: "NFC tap-to-trigger",
        description:
          "Bind a physical tag to a task. Tap to open it, or scan it in-app to complete it. No unlocking a phone to hunt for the app, no biometric scans.",
      },
      {
        slug: "completion-photos",
        icon: "camera",
        title: "Required completion photos",
        description:
          "Require a photo for the tasks that matter most, like a clean nozzle or a sanitized prep line. The photo is of the work, never the person.",
      },
      {
        slug: "rushed-flags",
        icon: "gauge",
        title: "Rushed-list flags",
        description:
          "Reports flag lists completed suspiciously fast, so a rubber-stamped close shows up in your reports, not at your next inspection.",
      },
      {
        slug: "offline",
        icon: "wifi-off",
        title: "Works when the WiFi doesn't",
        description:
          "Restaurant WiFi drops. Ch'rps keeps working. Task lists stay cached on the device, completions queue locally, and everything syncs the moment connectivity returns.",
      },
      {
        slug: "live-activity",
        icon: "lock",
        title: "Live Activity on the Lock Screen",
        description:
          "Start a timed task and track it right from the Lock Screen or Dynamic Island. See the running clock and estimated finish time, no need to unlock and reopen the app.",
      },
    ],
  },
  {
    id: "remind",
    title: "Remind: the right nudge, at the right time",
    features: [
      {
        slug: "push",
        icon: "bell",
        title: "Push notifications",
        description:
          "Clock in and notifications switch on. Whoever's on shift gets a nudge when a task list's start time arrives, and a heads-up when a list is missed, so opening and closing checklists get done on time, not remembered halfway through a shift.",
      },
      {
        slug: "scheduled-windows",
        icon: "clock",
        title: "Business hours & scheduled task windows",
        description: (
          <>
            Give each shift list a start time and <Brand /> handles the rest. A
            list surfaces when its window opens and locks in a clear, honest
            record once it&rsquo;s passed.
          </>
        ),
      },
      {
        slug: "anytime-tasks",
        icon: "repeat",
        title: "Recurring anytime tasks",
        description:
          "Not everything happens on a schedule. Anytime task lists hold the checks that come up throughout the day, logged whenever they're done.",
      },
    ],
  },
  {
    id: "manage",
    title: "Manage: set it up once, see everything",
    features: [
      {
        slug: "task-lists",
        icon: "clipboard-list",
        title: "Shift task lists",
        description:
          "Opening, Mid-Shift, Closing, plus any custom list a manager builds. Time-aware: a list expands when its shift starts and collapses once the window has passed.",
      },
      {
        slug: "admin-console",
        icon: "monitor",
        title: "Admin Console",
        description:
          "A full desktop view for building task lists, the task catalog and par sheets. Everything still works from a phone, too.",
      },
      {
        slug: "instruction-steps",
        icon: "list-ordered",
        title: "Step-by-step instructions",
        description:
          "Add up to three steps to any task, each with a photo. New hires see exactly how it's done, right when they tap.",
      },
      {
        slug: "review-rework",
        icon: "undo",
        title: "Review and rework",
        description:
          "Send a task back with a note when it wasn't done right. Whoever redoes it, the record keeps both.",
      },
      {
        slug: "reports",
        icon: "bar-chart",
        title: "Reports for managers and staff",
        description:
          "Managers get the company-wide dashboard: completion gaps as they happen, which task lists are running behind. Employees get their own personal view: a streak, this week's rate, and a full logged history.",
      },
      {
        slug: "streaks",
        icon: "flame",
        title: "Streaks & completion history",
        description:
          "Seven-day streak dots per task, plus completion and time-variance analytics. Every day gets its own record, so history is never overwritten.",
      },
      {
        slug: "team-invites",
        icon: "users",
        title: "Team roster & invite links",
        description:
          "Add teammates with a link. Text it, email it, share it however's easiest. No directory search, no shared logins. Managers see the roster and pending invites at a glance.",
      },
    ],
  },
  {
    id: "also-included",
    title: "Also included",
    features: [
      {
        slug: "par-sheet",
        icon: "package",
        title: "Par Sheet tracking",
        anchor: "par-sheets",
        description:
          "A top-up count tracker for par levels. Someone looks, someone logs the number. NFC-tagged storage locations, grouped by area, with par-level alerts and counts linked right to the tasks that trigger them.",
      },
      {
        slug: "payroll",
        icon: "receipt",
        title: "NFC time clock & timesheets",
        description: (
          <>
            Clock in and out with a tap on your location&rsquo;s clock tag. Weekly
            hours per employee, regular and overtime, plus a CSV you can take to
            your payroll provider. Hours only; it&rsquo;s not a payroll system.{" "}
            <Link
              href="/time-tracking"
              className="font-semibold text-brand hover:underline"
            >
              See the time clock
            </Link>
          </>
        ),
      },
    ],
  },
];

export const FEATURES: Feature[] = FEATURE_GROUPS.flatMap((g) => g.features);
