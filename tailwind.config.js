/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        isabelline: '#f2efea',
        coral: '#fc7753',
        tiffanyBlue: '#66d7d1',
        englishViolet: '#403d58',
        straw: '#dbd56e',
      },
      fontFamily: {
        sans: ['Rubik', 'serif'],
      },
    },
  },
  plugins: [],
}

