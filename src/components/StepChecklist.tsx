import { Check, Circle } from 'lucide-react';

export default function StepChecklist({
  steps,
  onToggle,
}: {
  steps: { label: string; minutes?: string; done: boolean }[];
  onToggle?: (index: number) => void;
}) {
  return (
    <ul className="space-y-2.5">
      {steps.map((s, i) => (
        <li key={i}>
          <button
            type="button"
            onClick={() => onToggle?.(i)}
            disabled={!onToggle}
            className={`tap flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left ${
              s.done
                ? 'border-success/30 bg-success/5'
                : 'border-ink-900/8 bg-white hover:border-ink-900/15'
            } ${onToggle ? 'cursor-pointer' : 'cursor-default'}`}
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                s.done ? 'bg-success text-white' : 'bg-ink-900/5 text-ink-600'
              }`}
            >
              {s.done ? <Check className="h-3.5 w-3.5" /> : <Circle className="h-3 w-3" />}
            </span>
            <span
              className={`flex-1 text-[14px] font-medium ${
                s.done ? 'text-ink-600 line-through' : 'text-ink-900'
              }`}
            >
              {s.label}
            </span>
            {s.minutes ? (
              <span className="text-[11px] font-semibold text-ink-500">{s.minutes}</span>
            ) : null}
          </button>
        </li>
      ))}
    </ul>
  );
}
