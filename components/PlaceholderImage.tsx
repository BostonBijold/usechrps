export default function PlaceholderImage({
  label,
  aspect = "aspect-video",
  className = "",
}: {
  label: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`${aspect} ${className} flex items-center justify-center rounded-[var(--radius-card)] border border-dashed border-border bg-card px-4 text-center`}
      role="img"
      aria-label={label}
    >
      <span className="font-data text-xs uppercase tracking-wide text-muted">
        {label}
      </span>
    </div>
  );
}
