/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: '#FFB6D9',
          blue: '#ADD8E6',
          green: '#C1FFC1',
          yellow: '#FFFACD',
          purple: '#E6D9FF',
          peach: '#FFDAB9',
          mint: '#E0F5F0',
          lavender: '#E6E6FA',
        }
      },
    },
  },
  plugins: [],
}
