export type ContactMessageInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactMessage = ContactMessageInput & {
  status: "new" | "responded";
  createdAt: Date;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactMessage(
  body: unknown,
): { data: ContactMessageInput } | { error: string } {
  if (typeof body !== "object" || body === null) {
    return { error: "Invalid request body" };
  }
  const b = body as Record<string, unknown>;

  const name = String(b.name ?? "").trim();
  const email = String(b.email ?? "").trim();
  const message = String(b.message ?? "").trim();

  if (!name) return { error: "Name is required" };
  if (!EMAIL_RE.test(email)) return { error: "A valid email is required" };
  if (!message) return { error: "Message is required" };

  return { data: { name, email, message } };
}
