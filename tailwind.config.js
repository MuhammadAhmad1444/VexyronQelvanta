/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:    '#07090F',
        panel:  '#0D111A',
        raised: '#131926',
        line:   '#1E2636',
        text:   '#E7EAF3',
        soft:   '#AEB6C8',
        muted:  '#7A8499',
        accent: { DEFAULT: '#8B6CFF', light: '#A994FF', dark: '#6A4BE0' },
        cyan:   '#22D3EE',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { site: '1200px' },
    },
  },
  plugins: [],
}
