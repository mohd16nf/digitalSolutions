// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    // Add other directories or file types where you use Tailwind classes
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        slide: 'slide 0.5s ease-in-out',
        fade: 'fade 0.5s ease-in-out',
      },
      fontSize: {
        'placeholder-xl': ['1.25rem', '1rem'],
      },
      colors: {
        cyan: '#17a2b8',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.placeholder-xl::placeholder': {
          'font-size': '1.25rem',
          'line-height': '1rem',
        },
        '.placeholder-white::placeholder': {
          'color': '#ffffff',
          'opacity': '1', // Ensure full opacity for placeholder
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
