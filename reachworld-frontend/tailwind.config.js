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
          DEFAULT: '#D4AF37',
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
        // Bold Accent Colors for Storytelling
        'vibrant-orange': {
          DEFAULT: '#FF6B35',
          light: '#FF8C5E',
          dark: '#E64D1C',
        },
        'electric-purple': {
          DEFAULT: '#8B5CF6',
          light: '#A78BFA',
          dark: '#7C3AED',
        },
        'holy-fire': {
          DEFAULT: '#DC2626',
          light: '#EF4444',
          dark: '#B91C1C',
        },
        'accent-blue': '#4A90E2',
        'deep-charcoal': '#0D0D0D',
        'soft-gray': '#F8F9FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['5rem', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '900' }],
        'hero-mobile': ['2.75rem', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '900' }],
        'display-xl': ['4rem', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      keyframes: {
        'slide-up': {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'slide-up': 'slide-up 0.8s ease-out',
        'slide-right': 'slide-right 0.8s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
