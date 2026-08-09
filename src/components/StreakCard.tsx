import { Flame } from 'lucide-react';

export default function StreakCard({
  streak,
  days = 7,
}: {
  streak: number;
  days?: number;
}) {
  const today = new Date().getDay();
  const labels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const ordered = [...Array(7)].map((_, i) => (today + i + 1) % 7);
  const completed = Math.min(7, streak);

  return (
    <div className="rounded-3xl bg-gradient-to-br from-streak-deep to-streak p-5 text-white shadow-streak">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5" fill="currentColor" />
            <span className="text-2xl font-extrabold leading-none">{streak}</span>
            <span className="text-sm font-semibold text-white/80">day streak</span>
          </div>
          <p className="mt-2 text-[13px] text-white/85">
            One more day keeps your streak alive.
          </p>
        </div>
        <div className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide">
          Live
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        {ordered.map((d, i) => {
          const done = i < completed;
          const isToday = i === completed - 1 || (streak === 0 && i === 6);
          return (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ${
                  done
                    ? 'bg-white text-streak-deep'
                    : isToday
                    ? 'bg-white/20 text-white ring-2 ring-white/60'
                    : 'bg-white/10 text-white/60'
                }`}
              >
                {done ? <Flame className="h-3.5 w-3.5" fill="currentColor" /> : labels[d]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
