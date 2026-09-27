"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-[var(--radius-button)] border border-border bg-white px-3 py-2.5 text-sm text-ink focus:border-brand focus:outline-none";

export default function GetInTouchForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
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
          Thanks, we&rsquo;ll be in touch soon.
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
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Name
          <input name="contactName" required autoComplete="name" className={inputClass} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
          Email
          <input name="email" type="email" required autoComplete="email" className={inputClass} />
        </label>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        Phone (optional, if you&rsquo;d rather talk)
        <input name="phone" type="tel" autoComplete="tel" className={inputClass} />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-medium text-ink">
        What&rsquo;s on your mind? (optional)
        <textarea name="notes" rows={4} className={inputClass} />
      </label>

      {status === "error" && (
        <p className="text-sm text-burgundy">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center rounded-[var(--radius-button)] bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
