/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-blue': '#0033A0',
        'brand-gold': '#FFD700',
        'sky-blue': '#00BFFF',
        'deep-charcoal': '#0D0D0D',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
