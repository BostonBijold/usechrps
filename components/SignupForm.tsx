"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const VERTICAL_OPTIONS = [
  { value: "restaurant", label: "Restaurant" },
  { value: "gym", label: "Gym" },
  { value: "lab", label: "Lab" },
  { value: "hotel", label: "Hotel" },
  { value: "other", label: "Other" },
];

type Status = "idle" | "submitting" | "success" | "error";

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[var(--radius-card)] border border-done bg-white p-8 text-center">
        <h2 className="text-xl font-semibold text-ink">
          Thanks — we&rsquo;ll be in touch soon.
        </h2>
        <p className="mt-3 text-sm text-muted">
          Want to browse tag options while you wait?{" "}
          <Link href="/store" className="text-brand hover:underline">
            Check out the store
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company name" name="companyName" required />
        <Field label="Contact name" name="contactName" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Vertical
        <select
          name="vertical"
          required
          defaultValue=""
          className="rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
        >
          <option value="" disabled>
            Select one
          </option>
          {VERTICAL_OPTIONS.map((v) => (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          ))}
        </select>
      </label>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Notes / message (optional)
        <textarea
          name="notes"
          rows={4}
          className="rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
        />
      </label>

      {status === "error" && (
        <p className="text-sm text-burgundy">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-button)] bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
      />
    </label>
  );
}
