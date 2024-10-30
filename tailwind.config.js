/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#433bff',
        secondary: '#facc15'
      }
    },
  },
  plugins: [],
}

