type State = "pending" | "done" | "missed" | "rest";

const stateClasses: Record<State, string> = {
  pending: "border-border text-muted",
  done: "border-done text-done",
  missed: "border-burgundy text-burgundy",
  rest: "border-blue-muted text-blue-muted",
};

const stateLabels: Record<State, string> = {
  pending: "Pending",
  done: "✓ Done",
  missed: "Missed",
  rest: "Rest",
};

export default function TaskStatePill({ state }: { state: State }) {
  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 font-data text-xs font-medium ${stateClasses[state]}`}
    >
      {stateLabels[state]}
    </span>
  );
}
