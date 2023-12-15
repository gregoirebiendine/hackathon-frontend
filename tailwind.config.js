/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'header': 'url(/header-bg.svg)'
      },
      fontFamily: {
        'poppins': 'Poppins, Arial, sans-serif',
        'nunito-sans': '"Nunito Sans", Arial, sans-serif',
      },
      colors: {
        'primary': '#113C49',
        'secondary': '#252641',
        'c-orange': "#F48C06",
        'c-blue' : "#2F327D",
        'c-carbon' : '#464646',
        'c-gray' : '#696984',
        'c-gray2': '#6C6C6C'
      },
      letterSpacing: {
        'h2': '0.44px'
      }
    },
  },
  plugins: [],
}

