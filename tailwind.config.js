/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1C85FC",
        
        tertiary: "#1E0FFE",
        inputBackground: "#D4D4D4",
        textLight:"fff",
        backgroundLight:"#EFF5FF",
        background:"#212121",
        cardBg: "#fff",
        secondary: "rgba(25, 222, 11, 0.1)",
        greenHighlight: "#64D408",
        typography: "#0A3133",
      },
    },
  },
  plugins: [],
}
