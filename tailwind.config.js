/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          bg: '#F8F9F6',
          surface: '#EFF2ED',
          text: '#202720',
          muted: '#69736B',
          primary: '#527A65',
          hover: '#3E624F',
          border: '#E1E6DE',
          card: '#FFFFFF',
          highlight: '#E4ECE4',
          success: '#327653',
          error: '#B84A45',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        'content': '1160px',
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(32, 39, 32, 0.03)',
        'card': '0 1px 3px 0 rgba(32, 39, 32, 0.04), 0 1px 2px -1px rgba(32, 39, 32, 0.03)',
        'card-hover': '0 8px 24px -4px rgba(32, 39, 32, 0.07), 0 2px 6px -1px rgba(32, 39, 32, 0.03)',
      },
      borderRadius: {
        'card': '14px',
      },
    },
  },
  plugins: [],
};
