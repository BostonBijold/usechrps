export type Solution = {
  slug: string;
  label: string;
  headline: string;
  intro: string;
  painPoints: string[];
  primary?: boolean;
};

export const SOLUTIONS: Solution[] = [
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
    primary: true,
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
  },
  {
    slug: "hotels",
    label: "Hotels",
    headline: "Trusted checklists for every shift, built for hotels.",
    intro:
      "Room and station readiness, verified by the person who actually did the work.",
    painPoints: [
      "Room readiness checks that get marked done without being done.",
      "No proof of who serviced a room or station, or when.",
      "Compliance and safety checks tracked separately from the rest of the shift.",
    ],
  },
];

export function getSolution(slug: string) {
  return SOLUTIONS.find((s) => s.slug === slug);
}
