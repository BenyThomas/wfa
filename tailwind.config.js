/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2aba97',  // Aqua Green
        secondary: '#09014b',  // Navy Blue
        accent: '#3e7dfc',  // Sky Blue
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'], // For heading
        body: ['Roboto', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

