import { Link } from 'react-router-dom';

type Variant = 'primary' | 'secondary' | 'ghost' | 'dark' | 'success';

export default function Button({
  children,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  disabled = false,
  fullWidth = false,
}: {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}) {
  const base =
    'tap inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all disabled:opacity-50 disabled:pointer-events-none';
  const variants: Record<Variant, string> = {
    primary: 'bg-accent text-ink-950 shadow-glow hover:bg-accent-glow',
    secondary: 'bg-white text-ink-900 border border-ink-900/10 shadow-soft hover:border-ink-900/20',
    ghost: 'text-ink-700 hover:bg-ink-900/5',
    dark: 'bg-ink-950 text-white hover:bg-ink-900',
    success: 'bg-success text-white shadow-soft hover:bg-success-soft',
  };
  const size = fullWidth ? 'w-full px-5 py-3.5' : 'px-5 py-3';
  const cls = `${base} ${variants[variant]} ${size} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
