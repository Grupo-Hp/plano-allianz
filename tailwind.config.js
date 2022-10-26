/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004a93',
        secondary: '#1a5c9e',
      },
      fontSize: {
        super: '12rem'
      },
    }
  },
  plugins: [],
}