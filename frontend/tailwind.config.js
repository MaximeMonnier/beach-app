const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // inclure tsx pour TypeScript
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        "color-1": "#FFF8DC",
        "color-2": "#017358",
        "color-3": "#004B49",
        "color-4": "#BCC6CC",
        "color-5": "#98d7c2",
        "color-6": "#E97451",
        "bg-1": "#FFF8DC",
        "bg-2": "#017358",
        "bg-3": "#004B49",
        "bg-4": "#BCC6CC",
        "bg-5": "#98d7c2",
        "bg-6": "#E97451",
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
  plugins: [
    require("autoprefixer"),
    require("@tailwindcss/nesting")(require("postcss-nesting")),
  ],
};
