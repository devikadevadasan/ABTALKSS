import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  Flame,
  Github,
  Linkedin,
  Sparkles,
  Trophy,
  Check,
} from 'lucide-react';
import Header from '@/components/Header';
import Button from '@/components/Button';
import TrackCard from '@/components/TrackCard';
import { tracks, stats, howItWorks, transformation } from '@/data/mockData';

export default function LandingPage() {
  const [selectedTrack, setSelectedTrack] = useState('aiml');

  return (
    <div className="min-h-screen bg-surface">
      <Header variant="light" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 celebrate-bg" />
        <div className="container-mobile relative pt-10 pb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-[11px] font-semibold text-ink-700 shadow-soft">
            <span className="flex h-1.5 w-1.5 rounded-full bg-accent" />
            60-Day Coding Challenge
          </div>
          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.08] tracking-tight text-ink-950">
            Build for 60 days.
            <br />
            <span className="text-accent-soft">Become impossible to ignore.</span>
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
            ABTalks is a 60-day coding challenge for Indian college students. Pick a track,
            ship something every day, and prove it with a GitHub commit and a LinkedIn post.
          </p>

          <div className="mt-6 flex flex-col gap-2.5">
            <Button to="/dashboard" fullWidth>
              Start the 60-Day Challenge
              <ArrowRight className="h-4 w-4" />
            </Button>
            <a
              href="#how"
              className="tap inline-flex items-center justify-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-5 py-3 text-sm font-semibold text-ink-700 shadow-soft"
            >
              See how it works
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          {/* 60-day grid visual */}
          <div className="mt-8">
            <div className="grid grid-cols-10 gap-1.5">
              {Array.from({ length: 60 }).map((_, i) => {
                const done = i < 11;
                const today = i === 11;
                return (
                  <div
                    key={i}
                    className={`aspect-square rounded-[3px] ${
                      done
                        ? 'bg-accent'
                        : today
                        ? 'bg-accent-glow ring-1 ring-accent'
                        : 'bg-ink-900/8'
                    }`}
                  />
                );
              })}
            </div>
            <div className="mt-2 flex items-center justify-between text-[11px] font-medium text-ink-500">
              <span>Day 1</span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-[2px] bg-accent" /> Done
                <span className="ml-2 h-2 w-2 rounded-[2px] bg-ink-900/15" /> Remaining
              </span>
              <span>Day 60</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container-mobile py-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { v: stats.students, l: 'Students', icon: Sparkles },
            { v: stats.projects, l: 'Projects shipped', icon: Trophy },
            { v: '60 days', l: 'Public streak', icon: Flame },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-ink-900/8 bg-white p-4 text-center shadow-soft"
            >
              <s.icon className="mx-auto h-4 w-4 text-accent-soft" />
              <div className="mt-2 text-lg font-extrabold text-ink-950">{s.v}</div>
              <div className="text-[11px] font-medium text-ink-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container-mobile py-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
          How it works
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-950">
          Three steps. Every day.
        </h2>
        <div className="mt-5 space-y-3">
          {howItWorks.map((s) => (
            <div
              key={s.step}
              className="flex items-start gap-4 rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink-950 text-sm font-extrabold text-accent">
                {s.step}
              </div>
              <div>
                <div className="text-[15px] font-bold text-ink-900">{s.title}</div>
                <div className="mt-0.5 text-[13px] text-ink-600">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tracks */}
      <section className="container-mobile py-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
          Tracks
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-950">
          Pick what you'll build.
        </h2>
        <div className="mt-5 space-y-3">
          {tracks.map((t) => (
            <TrackCard
              key={t.id}
              name={t.name}
              tagline={t.tagline}
              icon={t.icon}
              accent={t.accent}
              selected={selectedTrack === t.id}
              onClick={() => setSelectedTrack(t.id)}
            />
          ))}
        </div>
      </section>

      {/* Why 60 days */}
      <section className="bg-ink-950 py-10 text-white">
        <div className="container-mobile">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent">
            Why 60 days?
          </div>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
            The transformation is real.
          </h2>
          <div className="mt-6 space-y-4">
            {transformation.map((t, i) => (
              <div key={t.day} className="relative pl-8">
                {i < transformation.length - 1 ? (
                  <div className="absolute left-[11px] top-6 h-[calc(100%-12px)] w-px bg-white/15" />
                ) : null}
                <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-accent bg-ink-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-accent">
                    {t.day}
                  </span>
                  <span className="text-[15px] font-bold">{t.state}</span>
                </div>
                <p className="mt-0.5 text-[13px] text-white/70">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of work */}
      <section className="container-mobile py-10">
        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-accent-soft">
          Proof of work
        </div>
        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-ink-950">
          Show it, don't just say it.
        </h2>
        <p className="mt-2 text-[14px] text-ink-600">
          Every day you submit two things. Together they build a public record recruiters can find.
        </p>
        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft">
            <Github className="h-5 w-5 text-ink-900" />
            <div className="mt-2 text-[14px] font-bold text-ink-900">GitHub commit</div>
            <p className="mt-1 text-[12px] text-ink-600">
              Code pushed. Real work, versioned and dated.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-900/8 bg-white p-4 shadow-soft">
            <Linkedin className="h-5 w-5 text-[#0a66c2]" />
            <div className="mt-2 text-[14px] font-bold text-ink-900">LinkedIn post</div>
            <p className="mt-1 text-[12px] text-ink-600">
              What you learned, in your own words, in public.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-mobile pb-12">
        <div className="relative overflow-hidden rounded-3xl bg-ink-950 p-7 text-center text-white shadow-card">
          <div className="absolute inset-0 celebrate-bg opacity-60" />
          <div className="relative">
            <Flame className="mx-auto h-7 w-7 text-accent" fill="currentColor" />
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight">
              Ready to build for 60 days?
            </h2>
            <p className="mx-auto mt-2 max-w-[280px] text-[13px] text-white/70">
              Start tonight. One commit, one post. That's all it takes to begin.
            </p>
            <Link
              to="/dashboard"
              className="tap mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-bold text-ink-950 shadow-glow"
            >
              Take the challenge
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-white/60">
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3 text-accent" /> Free
              </span>
              <span className="flex items-center gap-1">
                <Check className="h-3 w-3 text-accent" /> No experience needed
              </span>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-[11px] text-ink-400">
          ABTalks — built for builders, by builders.
        </p>
      </section>
    </div>
  );
}
