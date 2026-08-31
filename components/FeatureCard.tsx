import type { Feature } from "@/lib/features";
import PlaceholderBox from "./PlaceholderBox";
import AppIcon from "./AppIcon";

export default function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-border bg-white p-6">
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-button)] bg-card text-brand">
          <AppIcon name={feature.icon} size={20} />
        </span>
        <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
        {feature.placeholder && (
          <span className="font-data ml-auto rounded-[var(--radius-pill)] border border-border px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted">
            Roadmap
          </span>
        )}
      </div>
      {feature.placeholder ? (
        <PlaceholderBox>Details on this one are still being finalized.</PlaceholderBox>
      ) : (
        <p className="text-sm text-muted">{feature.description}</p>
      )}
    </div>
  );
}
