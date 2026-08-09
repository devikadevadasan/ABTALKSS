import { useState } from 'react';
import { Moon, TrendingUp, Trophy, ListChecks, ArrowRight, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import StreakCard from '@/components/StreakCard';
import TaskCard from '@/components/TaskCard';
import AchievementBadge from '@/components/AchievementBadge';
import StepChecklist from '@/components/StepChecklist';
import { student, dayTask } from '@/data/mockData';

export default function DashboardPage() {
  const [plan, setPlan] = useState(student.tonightPlan);
  const name = student.name?.trim() || 'builder';
  const greetingName = name.charAt(0).toUpperCase() + name.slice(1);

  const togglePlan = (i: number) =>
    setPlan((p) => p.map((s, idx) => (idx === i ? { ...s, done: !s.done } : s)));

  return (
    <div className="min-h-screen bg-surface pb-12">
      <Header variant="light" />

      <div className="container-mobile pt-6 space-y-6">
        {/* Greeting */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2 text-accent-soft">
            <Moon className="h-4 w-4" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em]">
              {new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening'}
            </span>
          </div>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-950">
            Good evening, {greetingName} 👋
          </h1>
          <p className="mt-1.5 text-[14px] text-ink-600">
            Small steps tonight. Big portfolio by day 60.
          </p>
        </div>

        {/* Streak */}
        <StreakCard streak={student.streak} />

        {/* Today's task */}
        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Today's task
            </h2>
            <span className="text-[11px] font-semibold text-ink-400">Day {student.currentDay} of 60</span>
          </div>
          <TaskCard
            day={dayTask.day}
            title={dayTask.title}
            difficulty={dayTask.difficulty}
            minutes={dayTask.minutes}
          />
          <div className="mt-3">
            <Button to={`/day/${dayTask.day}`} fullWidth>
              Continue today's task
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Progress */}
        <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-ink-900">Challenge progress</h2>
            <span className="text-[13px] font-extrabold text-ink-950">
              {student.completedDays} / {student.totalDays}
            </span>
          </div>
          <div className="mt-3">
            <ProgressBar
              value={student.completedDays}
              total={student.totalDays}
              tone="accent"
              showLabel
              height="h-3"
            />
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-2xl bg-accent/8 px-3.5 py-2.5">
            <TrendingUp className="h-4 w-4 text-accent-soft" />
            <span className="text-[12px] font-semibold text-ink-800">
              You're ahead of {student.aheadPercent}% of challengers
            </span>
          </div>
        </div>

        {/* Tonight's plan */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <ListChecks className="h-4 w-4 text-accent-soft" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Tonight's plan
            </h2>
          </div>
          <StepChecklist steps={plan} onToggle={togglePlan} />
        </div>

        {/* Standing + badges */}
        <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-streak-deep" />
              <h2 className="text-sm font-bold text-ink-900">Your standing</h2>
            </div>
            <span className="text-[13px] font-extrabold text-ink-950">
              Rank #{student.rank}
            </span>
          </div>
          <div className="mt-4 space-y-2.5">
            {student.badges.map((b) => (
              <AchievementBadge key={b.id} icon={b.icon} label={b.label} tone={b.tone} />
            ))}
          </div>
        </div>

        {/* Missed-day state (illustrative) */}
        <div className="rounded-3xl border border-streak/20 bg-streak/5 p-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-streak-deep" />
            <div>
              <div className="text-[13px] font-bold text-ink-900">Missed a day? No guilt.</div>
              <p className="mt-0.5 text-[12px] text-ink-600">
                Yesterday was missed. Your previous 11-day streak has ended. Start fresh tonight —
                streaks rebuild fast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
