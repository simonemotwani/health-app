/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f1ff',
          100: '#ebe5ff',
          200: '#d9ceff',
          300: '#bea6ff',
          400: '#9f75ff',
          500: '#843dff',
          600: '#7916ff',
          700: '#6b04fd',
          800: '#5a03d4',
          900: '#4c0baf',
        },
        purple: {
          custom: '#8B5FBF',
          light: '#C084FC',
          dark: '#6A4C93',
        },
        orange: {
          custom: '#F59E0B',
        },
        blue: {
          custom: '#3B82F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-sidebar': 'linear-gradient(180deg, #8B5FBF 0%, #6A4C93 50%, #4A628A 100%)',
        'gradient-hep': 'linear-gradient(135deg, #E879F9 0%, #C084FC 100%)',
        'gradient-stats': 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)',
        'gradient-billing': 'linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)',
      }
    },
  },
  plugins: [],
}