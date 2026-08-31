import type { ReactNode } from "react";

export default function PlaceholderBox({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-dashed border-border bg-card p-6 text-muted ${className}`}
    >
      <p className="font-data mb-2 text-xs uppercase tracking-wide text-muted">
        Content coming soon
      </p>
      <p className="text-sm">{children}</p>
    </div>
  );
}
