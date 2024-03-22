/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        "color-primary": "#006A74",
        "color-secondary": "#047e8a",
        "heading-primary": "#5ab0b8",
      },
    },
  },
  plugins: [],
};
