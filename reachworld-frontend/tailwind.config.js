/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'primary-blue': {
          DEFAULT: '#1e3a8a',  // Deep royal blue - main brand color
          light: '#3b82f6',    // Lighter blue for hover states
          dark: '#1e293b',     // Darker variant
        },
        'primary-gold': {
          DEFAULT: '#d4af37',  // Warm gold - accent & CTAs
          light: '#e0c694',
          dark: '#b8972d',
        },

        // Neutral Palette
        'neutral-white': '#ffffff',
        'neutral-cream': '#fefaf6',
        'neutral-light': '#f8fafc',
        'neutral-gray': '#64748b',
        'neutral-dark': '#1e293b',

        // Accent Colors
        'accent-teal': '#0d9488',
        'accent-purple': '#7c3aed',
        'accent-red': '#dc2626',

        // Legacy support (mapped to new colors)
        'royal-blue': {
          DEFAULT: '#1e3a8a',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#1e3a8a',
          600: '#1e293b',
          700: '#0f172a',
          800: '#020617',
          900: '#020617',
        },
        'brand-gold': {
          DEFAULT: '#d4af37',
          50: '#fefaf6',
          100: '#fef3e2',
          200: '#fde8c5',
          300: '#e0c694',
          400: '#d4af37',
          500: '#d4af37',
          600: '#b8972d',
          700: '#947923',
          800: '#6f5b1a',
          900: '#4a3d11',
        },
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
