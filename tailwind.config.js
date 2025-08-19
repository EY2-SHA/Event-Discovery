/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0D0221',
        foreground: '#F7F7FF',
        cyan: '#2DE2E6',
        magenta: '#F706CF',
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'glass': '10px',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2DE2E6 0%, #F706CF 100%)',
        'gradient-secondary': 'linear-gradient(135deg, rgba(45, 226, 230, 0.1) 0%, rgba(247, 6, 207, 0.1) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(45, 226, 230, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(247, 6, 207, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};