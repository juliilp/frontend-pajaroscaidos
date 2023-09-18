/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{html,js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        baloo: ["Baloo Bhaijaan 2", "sans"],
        inter: ["--font-inter"],
      },
      boxShadow: {
        primary: "0px 4px 4px 0px #00000040;",
      },
      colors: {
        darkgray: "#3D3D3D",
        lightgray: "#C2C2C2",
        lettersgray: "#707070",
        green: "#0F8514",
        letterPerfil: "#4F4F4F",
      },
    },
  },
  plugins: [],
};
