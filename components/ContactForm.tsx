"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
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
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Name
        <input
          name="name"
          required
          className="rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Email
        <input
          name="email"
          type="email"
          required
          className="rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Message
        <textarea
          name="message"
          rows={5}
          required
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
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
