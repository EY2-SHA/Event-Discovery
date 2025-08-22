/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          background: '#F8F7F4',
          foreground: '#121212',
          primary: '#BDB7AB',
          secondary: '#FF6B35', // Changed to energetic orange
          muted: '#E5E3E0',
          border: '#D1CFC8',
          card: '#FFFFFF',
          accent: '#A8A297',
        },
        // Dark mode colors
        dark: {
          background: '#1E1E1E',
          foreground: '#E8E6E3',
          primary: '#A8A297',
          secondary: '#FF7F50', // Changed to brighter energetic orange
          muted: '#2A2A2A',
          border: '#3A3A3A',
          card: '#252525',
          accent: '#BDB7AB',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'], // Modern standard font
        'display': ['Inter', 'system-ui', 'sans-serif'], // Consistent modern font
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        countUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'brutal': '4px 4px 0px rgba(0, 0, 0, 0.1)',
        'brutal-lg': '8px 8px 0px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};