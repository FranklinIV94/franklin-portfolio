/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0a0b0f',
        'canvas-2': '#0c0d12',
        surface: '#111116',
        border: 'rgba(255,255,255,0.07)',
        'border-strong': 'rgba(255,255,255,0.14)',
        accent: '#c8ff57',
        'accent-dim': 'rgba(200,255,87,0.12)',
        'accent-ink': '#0b0f02',
        muted: '#6b6b7a',
        cream: '#f4f3ee',
        'light-ink': '#101116',
        'light-muted': '#5d5f66',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#d4d4d8',
            '--tw-prose-headings': '#ffffff',
            '--tw-prose-links': '#c8ff57',
            '--tw-prose-bullets': '#c8ff57',
            '--tw-prose-counters': '#c8ff57',
            '--tw-prose-quote-borders': '#c8ff57',
            '--tw-prose-bold': '#ffffff',
            '--tw-prose-captions': '#6b6b7a',
            'maxWidth': 'none',
            'h2': { fontFamily: 'Fraunces, Georgia, serif', marginTop: '3.5rem', marginBottom: '1rem' },
            'h3': { fontFamily: 'Fraunces, Georgia, serif', marginTop: '2rem', marginBottom: '0.5rem' },
            'p': { lineHeight: '1.7', marginTop: '1.4em', marginBottom: '1.4em' },
            'li': { lineHeight: '1.7' },
            'figure': { maxWidth: 'none', marginLeft: '-5.5rem', marginRight: '-5.5rem' },
            'figure img': { borderRadius: '1rem' },
            'figcaption': { textAlign: 'center', marginTop: '0.75rem' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
