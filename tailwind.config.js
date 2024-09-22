/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "clr-off-white": "#E6E6E6",
        "clr-white": "#FFFFFF",
        "clr-black": "#000000",
        "clr-gray": "#5B5B5B",
        "clr-gray-lighter": "#F2F2F2",
        "clr-gray-light": "#7F7F7F",
        "clr-gray-dark": "#1A1A1A",
        "clr-accent": "#FF9800",
        "clr-accent-light": "#FFA700",
      },
      fontSize: {
        "fs-larger": "86px",
        "fs-large": "68px",
        "fs-medium": "28px",
        "fs-normal": "16px",
        "fs-18": "18px",
        "fs-20": "20px",
        "fs-30": "30px",
        "fs-36": "36px",
        "fs-44": "44px",
        "fs-58": "58px",
        "fs-small": "12px",
      },
    },
  },
  plugins: [],
};
