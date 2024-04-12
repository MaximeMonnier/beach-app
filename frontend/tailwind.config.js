/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "color-1": "#FFF8DC",
        "color-2": "#017358",
        "color-3": "#004B49",
        "bg-1": "#FFF8DC",
        "bg-2": "#017358",
        "bg-3": "#004B49",
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

