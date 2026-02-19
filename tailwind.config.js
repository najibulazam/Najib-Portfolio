/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Semantic accent tokens — values come from CSS vars in index.css.
           The accent colour shifts between cyan-500 (light) and cyan-400 (dark)
           automatically via the :root / .dark custom property switch.
           Tailwind v4 uses color-mix() for opacity modifiers, so
           bg-accent/10, border-accent/20, etc. all work correctly. */
        'accent':         'var(--c-accent)',
        'accent-hover':   'var(--c-accent-hover)',
        'accent-2':       'var(--c-accent-2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'hero-reveal': 'heroReveal 2.5s ease forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroReveal: {
          '0%':   { backgroundSize: '220%', backgroundPosition: '60% 50%' },
          '100%': { backgroundSize: '100%', backgroundPosition: '50% 50%' },
        },
      },
    },
  },
  plugins: [],
}
