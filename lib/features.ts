export type Feature = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  placeholder?: boolean;
};

export const FEATURES: Feature[] = [
  {
    slug: "task-lists",
    icon: "📋",
    title: "Shift task lists",
    description:
      "Opening, Mid-Shift, Closing, plus any custom list a manager builds. Time-aware — a list expands when its shift starts and collapses once the window has passed.",
  },
  {
    slug: "nfc",
    icon: "📶",
    title: "NFC tap-to-trigger",
    description:
      "Bind a physical tag to a task. Tap to open it, or scan it in-app to complete it — no unlocking a phone to hunt for the app, no biometric scans.",
  },
  {
    slug: "analytics",
    icon: "📊",
    title: "Real-time manager dashboard",
    description:
      "See completion gaps as they happen — which task lists are running behind, which tasks keep running long, before it becomes a problem.",
  },
  {
    slug: "streaks",
    icon: "🔥",
    title: "Streaks & completion history",
    description:
      "Seven-day streak dots per task, plus completion and time-variance analytics. Every day gets its own record — history is never overwritten.",
  },
  {
    slug: "scheduled-windows",
    icon: "⏱",
    title: "Business hours & scheduled task windows",
    description:
      "Give each shift list a start time and Ch'rps handles the rest — a list surfaces when its window opens and locks in a clear, honest record once it's passed.",
  },
  {
    slug: "anytime-tasks",
    icon: "🔁",
    title: "Recurring anytime tasks",
    description:
      "Not everything happens on a schedule. Anytime task lists hold the checks that come up throughout the day, logged whenever they're done.",
  },
  {
    slug: "push",
    icon: "🔔",
    title: "Push notifications",
    description:
      "A nudge when a task list's start time arrives, so opening and closing checklists get started on time — not remembered halfway through a shift.",
  },
  {
    slug: "payroll",
    icon: "🧾",
    title: "Payroll / time tracking",
    description: "",
    placeholder: true,
  },
  {
    slug: "inventory",
    icon: "📦",
    title: "Inventory tracking",
    description: "",
    placeholder: true,
  },
];
