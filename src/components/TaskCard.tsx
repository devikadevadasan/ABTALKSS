import { Clock, Signal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaskCard({
  day,
  title,
  difficulty,
  minutes,
  compact = false,
}: {
  day: number;
  title: string;
  difficulty: string;
  minutes: string;
  compact?: boolean;
}) {
  const diffTone =
    difficulty === 'Beginner'
      ? 'text-success bg-success/10'
      : difficulty === 'Intermediate'
      ? 'text-streak-deep bg-streak/10'
      : 'text-red-500 bg-red-500/10';

  return (
    <Link
      to={`/day/${day}`}
      className="tap block rounded-3xl border border-ink-900/8 bg-white p-5 shadow-card hover:border-accent/40"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
          Day {day}
        </span>
        <ArrowRight className="h-4 w-4 text-ink-600" />
      </div>
      <h3 className={`mt-2 font-bold text-ink-900 ${compact ? 'text-base' : 'text-lg'}`}>
        {title}
      </h3>
      {!compact ? (
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${diffTone}`}>
            <Signal className="h-3 w-3" />
            {difficulty}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-ink-900/5 px-2.5 py-1 text-[11px] font-semibold text-ink-700">
            <Clock className="h-3 w-3" />
            {minutes}
          </span>
        </div>
      ) : null}
    </Link>
  );
}
