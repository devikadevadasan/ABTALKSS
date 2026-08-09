import { Flame, Rocket, Github, Award, type LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Rocket,
  Github,
};

export default function AchievementBadge({
  icon,
  label,
  tone = 'accent',
}: {
  icon: string;
  label: string;
  tone?: 'streak' | 'accent' | 'electric';
}) {
  const Icon = iconMap[icon] ?? Award;
  const tones = {
    streak: 'bg-streak/10 text-streak-deep',
    accent: 'bg-accent/10 text-accent-soft',
    electric: 'bg-electric/10 text-electric',
  };
  return (
    <div className="flex items-center gap-2.5 rounded-2xl border border-ink-900/8 bg-white px-3.5 py-3 shadow-soft">
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${tones[tone]}`}>
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-[13px] font-semibold text-ink-900">{label}</span>
    </div>
  );
}
