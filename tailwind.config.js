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
    },
  },
  plugins: [],
};
