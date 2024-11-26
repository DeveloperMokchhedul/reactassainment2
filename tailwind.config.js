const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|link|navbar|ripple|spinner).js"
  ],
  theme: {
    extend: {
      fontFamily:{
        "montserrat":["Montserrat", "sans-serif"],
        "worksans":[ "Work Sans", "sans-serif"]
      },
      colors:{
        "primary":"#0FF1F6",
        "secondary":"#183A40",
        "bg-primary":"#002228",
        "bg-secondary":"#07292F",
        "white":"#FFFFFF"


      },
      boxShadow:{
        "primaryShadow":"0px 0px 16px 0px #53FFFC33"


      }
    },
  },
  plugins: [nextui()],
}

