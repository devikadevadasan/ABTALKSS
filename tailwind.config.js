/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08090f',
          900: '#0c0e16',
          850: '#10131d',
          800: '#161a26',
          700: '#1f2433',
          600: '#2a3142',
        },
        accent: {
          DEFAULT: '#22e0a1',
          soft: '#1fb886',
          glow: '#5cf0bd',
        },
        electric: {
          DEFAULT: '#3b82f6',
          bright: '#60a5fa',
        },
        streak: {
          DEFAULT: '#f59e0b',
          soft: '#fbbf24',
          deep: '#d97706',
        },
        success: {
          DEFAULT: '#22c55e',
          soft: '#4ade80',
        },
        surface: '#f7f8fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)',
        card: '0 1px 2px rgba(15, 23, 42, 0.05), 0 8px 24px rgba(15, 23, 42, 0.08)',
        glow: '0 0 0 1px rgba(34, 224, 161, 0.18), 0 8px 30px rgba(34, 224, 161, 0.18)',
        streak: '0 8px 30px rgba(245, 158, 11, 0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pop': {
          '0%': { transform: 'scale(0.96)' },
          '60%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out both',
        'pop': 'pop 0.4s ease-out both',
      },
    },
  },
  plugins: [],
};
