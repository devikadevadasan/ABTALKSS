import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Signal, BookOpen, CheckCircle2, Circle, ArrowRight, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ProgressBar from '@/components/ProgressBar';
import ProofSubmission from '@/components/ProofSubmission';
import { dayTask } from '@/data/mockData';

export default function DayPage() {
  const { day } = useParams();
  const dayNum = Number(day) || dayTask.day;
  const task = { ...dayTask, day: dayNum };

  const [done, setDone] = useState<boolean[]>(() => task.definitionOfDone.map(() => false));
  const completedCount = done.filter(Boolean).length;

  const diffTone =
    task.difficulty === 'Beginner'
      ? 'text-success bg-success/10'
      : task.difficulty === 'Intermediate'
      ? 'text-streak-deep bg-streak/10'
      : 'text-red-500 bg-red-500/10';

  return (
    <div className="min-h-screen bg-surface pb-12">
      <Header variant="light" showBack />

      <div className="container-mobile pt-5 space-y-6">
        {/* Header card */}
        <div className="rounded-3xl bg-ink-950 p-6 text-white shadow-card">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
              Day {task.day} of 60
            </span>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white/80">
              AI / ML
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight">
            {task.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold ${diffTone}`}>
              <Signal className="h-3 w-3" />
              {task.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/85">
              <Clock className="h-3 w-3" />
              {task.minutes}
            </span>
          </div>
          <div className="mt-4">
            <ProgressBar value={task.day} total={60} tone="accent" height="h-1.5" />
          </div>
        </div>

        {/* Task summary */}
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
            The task
          </h2>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-800">{task.summary}</p>
        </div>

        {/* What you'll build */}
        <div className="rounded-3xl border border-ink-900/8 bg-white p-5 shadow-soft">
          <h2 className="text-sm font-bold text-ink-900">What you'll build</h2>
          <ul className="mt-3 space-y-2.5">
            {task.build.map((b, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/12 text-[10px] font-bold text-accent-soft">
                  {i + 1}
                </span>
                <span className="text-[14px] text-ink-800">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Definition of done */}
        <div>
          <div className="mb-2.5 flex items-center justify-between">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Definition of done
            </h2>
            <span className="text-[11px] font-semibold text-ink-400">
              {completedCount}/{task.definitionOfDone.length}
            </span>
          </div>
          <ul className="space-y-2.5">
            {task.definitionOfDone.map((d, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setDone((arr) => arr.map((v, idx) => (idx === i ? !v : v)))}
                  className="tap flex w-full items-center gap-3 rounded-2xl border border-ink-900/8 bg-white px-4 py-3.5 text-left shadow-soft hover:border-ink-900/15"
                >
                  {done[i] ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                  ) : (
                    <Circle className="h-5 w-5 shrink-0 text-ink-300" />
                  )}
                  <span
                    className={`text-[14px] font-medium ${
                      done[i] ? 'text-ink-500 line-through' : 'text-ink-900'
                    }`}
                  >
                    {d}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="mb-2.5 flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-accent-soft" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Helpful resources
            </h2>
          </div>
          <div className="space-y-2.5">
            {task.resources.map((r) => (
              <a
                key={r.title}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className="tap flex items-center justify-between rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft hover:border-accent/40"
              >
                <div>
                  <div className="text-[14px] font-semibold text-ink-900">{r.title}</div>
                  <div className="text-[11px] text-ink-500">{r.source}</div>
                </div>
                <ExternalLink className="h-4 w-4 text-ink-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Proof of work */}
        <div>
          <div className="mb-2.5">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500">
              Proof of work
            </h2>
            <p className="mt-1 text-[12px] text-ink-500">
              Submit both to complete Day {task.day}. Saved on this device.
            </p>
          </div>
          <ProofSubmission day={task.day} />
        </div>

        {/* Footer CTA */}
        <div className="rounded-3xl border border-ink-900/8 bg-white p-5 text-center shadow-soft">
          <p className="text-[13px] text-ink-600">
            Done building? Push your code and share what you learned.
          </p>
          <div className="mt-3">
            <Button to="/dashboard" variant="secondary" fullWidth>
              Back to dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
