export type Solution = {
  slug: string;
  label: string;
  headline: string;
  intro: string;
  painPoints: string[];
  primary?: boolean;
  /** Short line under the label on the solutions grid / homepage teaser. */
  tagline?: string;
  /** Example lists rendered as a "what your crew taps" preview on the solution page. */
  sampleLists?: { title: string; tasks: string[] }[];
  image?: { src: string; alt: string };
};

export const SOLUTIONS: Solution[] = [
  {
    slug: "treat-shops",
    label: "Treat Shops",
    tagline: "Soft serve, froyo, ice cream, cookies",
    headline: "Know the machine got cleaned — even when you're not there.",
    intro:
      "Soft-serve and froyo machine cleaning, closing checklists, and temp logs, verified with a tap at the machine. Proof for one-person closes, not another camera to watch.",
    painPoints: [
      "Closing alone with 15 minutes to reclean the whole shop — and the machine is the first thing to get skipped.",
      "Watching security cameras from home to find out whether the closer actually did it.",
      "A 16-year-old crew that turns over constantly, with no manager on the floor to show them the steps.",
    ],
    primary: true,
    sampleLists: [
      {
        title: "Machine cleaning",
        tasks: [
          "Drain and disassemble machine",
          "Wash, rinse and sanitize parts",
          "Sanitizer concentration check",
          "Reassemble and photo of clean nozzle",
        ],
      },
      {
        title: "Closing (one-person)",
        tasks: [
          "Toppings covered and dated",
          "Freezer and cold-storage temps logged",
          "Restroom check",
          "Cash drop and lock up",
        ],
      },
    ],
  },
  {
    slug: "drink-shops",
    label: "Drink Shops",
    tagline: "Soda, coffee, drive-thru",
    headline: "Every close, every location, verified.",
    intro:
      "Ice machine and syrup-line cleaning, opening and closing lists, and restocking — checked in with a tap at the station, across every window you run.",
    painPoints: [
      "Opening and closing lists initialed after the fact, or not at all, when one person runs the window.",
      "Ice machines, syrup lines and dispensers cleaned on the honor system.",
      "No easy way to see how each location closed last night without calling each manager.",
    ],
    sampleLists: [
      {
        title: "Opening",
        tasks: [
          "Ice machine and bin check",
          "Syrup and lid stock counted",
          "Dispenser nozzles cleaned",
          "Cooler temp logged",
        ],
      },
      {
        title: "Closing",
        tasks: [
          "Dispenser and line cleaning",
          "Trash and drive-thru area",
          "Restock cups, lids and syrup",
          "Lock up and final tap",
        ],
      },
    ],
  },
  {
    slug: "restaurants",
    label: "Restaurants",
    headline: "Trusted checklists for every shift.",
    intro:
      "Fridge and freezer temps, restroom checks, cash counts, opening and closing tasks — logged as they happen, not reconstructed at the end of a shift.",
    painPoints: [
      "Missed opening or closing tasks that only surface after something's already gone wrong.",
      "No proof of who actually did a check, or when — just a paper sheet initialed after the fact.",
      "Paper checklists filled out in a rush at the end of a shift, not in the moment.",
    ],
  },
  {
    slug: "gyms",
    label: "Gyms",
    headline: "Trusted checklists for every shift, built for gyms.",
    intro:
      "Equipment checks, cleaning rounds, and front-desk tasks — verified as they happen, not assumed.",
    painPoints: [
      "Equipment checks that get skipped when the floor is busy.",
      "No record of who checked a piece of equipment or cleaned a station.",
      "Front-desk and locker-room readiness left to memory between shifts.",
    ],
    image: {
      src: "/images/tredmil.jpeg",
      alt: "A treadmill on a gym floor",
    },
  },
  {
    slug: "labs",
    label: "Labs",
    headline: "Trusted checklists for every shift, built for labs.",
    intro:
      "Compliance logging and equipment checks — verified in place, with a record that holds up.",
    painPoints: [
      "Compliance logging that's reconstructed after the fact instead of captured in the moment.",
      "No proof of who performed a required check, or when.",
      "Equipment and station readiness tracked on paper, disconnected from the actual schedule.",
    ],
    image: {
      src: "/images/lab.jpeg",
      alt: "A lab technician working at a lab bench",
    },
  },
  // Hidden for now — not ready for production. Keep for when it comes back.
  // {
  //   slug: "hotels",
  //   label: "Hotels",
  //   headline: "Trusted checklists for every shift, built for hotels.",
  //   intro:
  //     "Room and station readiness, verified by the person who actually did the work.",
  //   painPoints: [
  //     "Room readiness checks that get marked done without being done.",
  //     "No proof of who serviced a room or station, or when.",
  //     "Compliance and safety checks tracked separately from the rest of the shift.",
  //   ],
  // },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
