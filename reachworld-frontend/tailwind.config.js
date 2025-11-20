/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors
        'royal-blue': {
          DEFAULT: '#0033A0',
          50: '#E6EBF5',
          100: '#C2D1E8',
          200: '#99B3D9',
          300: '#7095CA',
          400: '#4D7DBF',
          500: '#0033A0',
          600: '#002D8C',
          700: '#002573',
          800: '#001D5A',
          900: '#001242',
        },
        'brand-gold': {
          DEFAULT: '#D4AF37', // Softer, more refined gold
          50: '#FAF7EF',
          100: '#F4ECDB',
          200: '#EAD9B8',
          300: '#E0C694',
          400: '#D9BA65',
          500: '#D4AF37',
          600: '#B8972D',
          700: '#947923',
          800: '#6F5B1A',
          900: '#4A3D11',
        },
        'accent-blue': '#4A90E2', // Softer sky blue
        'deep-charcoal': '#0D0D0D',
        'soft-gray': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
