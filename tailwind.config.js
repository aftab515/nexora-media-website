/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F8F5',
        sage: {
          50: '#F3F6F1',
          100: '#E4EBE0',
          200: '#DCE3D6',
          300: '#C2CFBA',
          400: '#93A98A',
          500: '#6E8A62',
          600: '#4D6E3C',
          700: '#415E33',
        },
        forest: {
          50: '#EEF3EE',
          100: '#D8E3D8',
          300: '#5F7D62',
          400: '#3E5C42',
          500: '#2C4A30',
          600: '#254028',
          700: '#1E3D20',
          800: '#182F1A',
          900: '#122415',
        },
        gold: {
          300: '#E3CD9C',
          400: '#D4B878',
          500: '#C5A059',
          600: '#A98543',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      boxShadow: {
        elevated: '0 24px 48px -24px rgba(18, 36, 21, 0.22)',
        card: '0 12px 32px -20px rgba(18, 36, 21, 0.18)',
        popular: '0 28px 56px -24px rgba(30, 61, 32, 0.38)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
