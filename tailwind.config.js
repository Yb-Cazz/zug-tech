/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        'muted-foreground': 'var(--muted-foreground)',
        ring: 'var(--ring)',
        destructive: 'var(--destructive)',
      },
      maxWidth: {
        '8xl': '1400px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'char-in': 'charIn 0.4s ease forwards',
        progress: 'progress 5s linear forwards',
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        barGrow: 'barGrow 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        charIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        barGrow: {
          '0%': { width: '20px', backgroundColor: 'silver' },
          '50%': { width: '100px', backgroundColor: 'black' },
          '100%': { width: '20px', backgroundColor: 'silver' },
        },
      },
    },
  },
  plugins: [],
}
