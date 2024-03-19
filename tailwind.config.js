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
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease 300ms",
      },
    },
  },
  plugins: [],
};
