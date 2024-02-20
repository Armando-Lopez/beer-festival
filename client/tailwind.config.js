/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1840px",
      },
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "4rem",
        "2xl": "4rem",
      },
    },
    extend: {
      height: {
        inherit: "inherit",
      },
      colors: {
        "orange-bf": "#C45527",
        "cream-bf": "#ECE5D2",
        "yellow-bf": "#FDB626",
        "coffee-bf": "#482926"
      },
      gridTemplateRows: {
        auto: "auto 1fr",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
