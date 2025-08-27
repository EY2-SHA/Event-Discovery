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
          secondary: '#FF6B35', // Energetic orange
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
          secondary: '#FF7F50', // Brighter energetic orange
          muted: '#2A2A2A',
          border: '#3A3A3A',
          card: '#252525',
          accent: '#BDB7AB',
        },
      },
      fontFamily: {
        'sans': ['Syne', 'system-ui', 'sans-serif'],
        'display': ['Syne', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'sketch': 'sketch 0.3s ease-out',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-20px) rotate(1deg)' },
          '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
        },
        sketch: {
          '0%': { transform: 'scale(0.95) rotate(-0.5deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'handcrafted': '0.5rem',
        'sketch': '0.375rem',
      },
      boxShadow: {
        'handcrafted': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'handcrafted-dark': '0 4px 6px -1px rgba(255, 255, 255, 0.05), 0 2px 4px -1px rgba(255, 255, 255, 0.03)',
        'sketch': '2px 2px 0px rgba(0, 0, 0, 0.1)',
        'sketch-dark': '2px 2px 0px rgba(255, 255, 255, 0.1)',
        'brutal': '4px 4px 0px rgba(0, 0, 0, 0.1)',
        'brutal-dark': '4px 4px 0px rgba(255, 255, 255, 0.1)',
        'brutal-lg': '8px 8px 0px rgba(0, 0, 0, 0.15)',
        'brutal-lg-dark': '8px 8px 0px rgba(255, 255, 255, 0.15)',
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'handcrafted-light': `
          radial-gradient(circle at 20% 80%, rgba(189, 183, 171, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(168, 162, 151, 0.08) 0%, transparent 50%)
        `,
        'handcrafted-dark': `
          radial-gradient(circle at 20% 80%, rgba(168, 162, 151, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 127, 80, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(189, 183, 171, 0.06) 0%, transparent 50%)
        `,
      },
    },
  },
  plugins: [],
};