/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          light: '#34D399',  // Light mode forest green
          dark: '#065F46',   // Dark mode forest green
        },
        pastelSky: '#B3EBF2',
      },
    },
  },
  daisyui: {
    themes: ['pastel', "forest",]
  },
  plugins: [daisyui],
}

