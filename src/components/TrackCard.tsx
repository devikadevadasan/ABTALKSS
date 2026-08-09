import {
  Globe,
  BrainCircuit,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Code,
  Check,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  BrainCircuit,
  BarChart3,
  Smartphone,
  ShieldCheck,
};

export default function TrackCard({
  name,
  tagline,
  icon,
  accent,
  selected = false,
  onClick,
}: {
  name: string;
  tagline: string;
  icon: string;
  accent: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  const Icon = iconMap[icon] ?? Code;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`tap group flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all ${
        selected
          ? 'border-accent bg-accent/5 shadow-glow'
          : 'border-ink-900/8 bg-white shadow-soft hover:border-ink-900/15'
      }`}
    >
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accent}18`, color: accent }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="text-[14px] font-bold text-ink-900">{name}</div>
        <div className="text-[12px] text-ink-600">{tagline}</div>
      </div>
      {selected ? (
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent text-ink-950">
          <Check className="h-3.5 w-3.5" />
        </div>
      ) : (
        <ChevronRight className="h-4 w-4 text-ink-400" />
      )}
    </button>
  );
}
