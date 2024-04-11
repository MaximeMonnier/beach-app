/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "color-1": "#D1020D",
        "color-2": "#017358",
        "color-3": "#FFC167",
        "bg-1": "#ba2f0f",
        "bg-2": "#0b2a24",
        "bg-3": "#f9e6c6",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        menu: "860px",
      },
    },
  },
}

