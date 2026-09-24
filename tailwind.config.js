/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg:      '#FFFFFF',
        surface: '#F8FAFC',
        raised:  '#F1F5F9',
        line:    '#E2E8F0',
        warm:    '#475569',
        muted:   '#64748B',
        faint:   '#94A3B8',
        cream:   '#0F172A',
        gold: {
          light:   '#2563EB',
          DEFAULT: '#1E3A8A',
          dark:    '#172554',
        },
      },
      fontFamily: {
        serif: ['"Inter"', 'system-ui', 'sans-serif'],
        sans:  ['"Inter"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
