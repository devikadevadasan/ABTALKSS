export default function ProgressBar({
  value,
  total,
  tone = 'accent',
  showLabel = false,
  height = 'h-2.5',
}: {
  value: number;
  total: number;
  tone?: 'accent' | 'streak' | 'electric';
  showLabel?: boolean;
  height?: string;
}) {
  const pct = Math.min(100, Math.round((value / total) * 100));
  const tones = {
    accent: 'bg-accent',
    streak: 'bg-streak',
    electric: 'bg-electric',
  };
  return (
    <div className="w-full">
      <div className={`w-full overflow-hidden rounded-full bg-ink-900/8 ${height}`}>
        <div
          className={`h-full rounded-full ${tones[tone]} transition-all duration-700 ease-out`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel ? (
        <div className="mt-1.5 flex items-center justify-between text-[11px] font-medium text-ink-600">
          <span>
            {value} / {total} days
          </span>
          <span>{pct}% complete</span>
        </div>
      ) : null}
    </div>
  );
}
