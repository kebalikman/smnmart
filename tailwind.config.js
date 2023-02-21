/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'merah' : '#a42d2f',
      },
      backgroundImage: {
        ybg : "url('/ybg.jpg')",
        babat : "url('/babat.jpeg')",
        rawon : "url('/rawon.jpg')",
        otaksapi : "url('/otaksapi.jpeg')",
        slice : "url('/slice.jpg')",
        sapigiling : "url('/sapiguling.jpg')",
        sapi_ico : "url('/cow.png')",
        promo : "url('/promo.png')",
        rekomendasi : "url('/quality.png')",
        menu : "url('/menu.png')"
      },
      fontFamily : {
        inter : ['Inter', 'sans-serif'],
        monsterat : ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}