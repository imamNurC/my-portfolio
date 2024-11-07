/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        // Add any other custom fonts here
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },
      animation: {
        typing:
          "typing 3s steps(30) 1s forwards, blink 0.75s step-end infinite",
      },
      colors: {
        primary: "#00bcd4",
        secondary: "#333",
      },
    },
  },
  plugins: [],
};
