/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'p1': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
      }
    },
  },
  plugins: [],
}
