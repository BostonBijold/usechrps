export const VERTICALS = ["restaurant", "gym", "lab", "hotel", "other"] as const;
export type Vertical = (typeof VERTICALS)[number];

export type LeadInput = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  vertical: Vertical;
  notes?: string;
};

export type Lead = LeadInput & {
  status: "new" | "contacted" | "converted" | "closed";
  createdAt: Date;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadInput(body: unknown): { data: LeadInput } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;

  const companyName = String(b.companyName ?? "").trim();
  const contactName = String(b.contactName ?? "").trim();
  const email = String(b.email ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const vertical = String(b.vertical ?? "").trim();
  const notes = b.notes ? String(b.notes).trim() : undefined;

  if (!companyName) return { error: "Company name is required" };
  if (!contactName) return { error: "Contact name is required" };
  if (!EMAIL_RE.test(email)) return { error: "A valid email is required" };
  if (!phone) return { error: "Phone is required" };
  if (!VERTICALS.includes(vertical as Vertical)) {
    return { error: "Please select a valid vertical" };
  }

  return {
    data: {
      companyName,
      contactName,
      email,
      phone,
      vertical: vertical as Vertical,
      notes,
    },
  };
}
