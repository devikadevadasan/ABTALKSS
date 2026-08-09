import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Flame } from 'lucide-react';

export default function Header({
  showBack = false,
  variant = 'light',
}: {
  showBack?: boolean;
  variant?: 'light' | 'dark';
}) {
  const location = useLocation();
  const dark = variant === 'dark';

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md ${
        dark ? 'bg-ink-950/80 border-white/10' : 'bg-white/80 border-ink-900/5'
      } border-b`}
    >
      <div className="container-mobile flex h-14 items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack ? (
            <Link
              to="/dashboard"
              className={`tap flex h-9 w-9 items-center justify-center rounded-full ${
                dark ? 'bg-white/10 text-white' : 'bg-ink-900/5 text-ink-900'
              }`}
              aria-label="Back"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
          ) : null}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-ink-950">
              <Flame className="h-4 w-4" fill="currentColor" />
            </div>
            <span
              className={`text-[15px] font-bold tracking-tight ${
                dark ? 'text-white' : 'text-ink-900'
              }`}
            >
              ABTalks
            </span>
          </Link>
        </div>
        {location.pathname === '/' ? (
          <Link
            to="/dashboard"
            className="tap rounded-full bg-ink-950 px-3.5 py-1.5 text-xs font-semibold text-white"
          >
            Dashboard
          </Link>
        ) : null}
      </div>
    </header>
  );
}
