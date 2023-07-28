/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
     
        baloo: ["--font-baloo"],
      },
      boxShadow: {
        login: "0px 4px 4px 0px #00000040;",
    },
    colors: {
      darkgray: "#3D3D3D",
      lightgray: "#C2C2C2",
      lettersgray:'#707070'
    },
  },
  plugins: [],
}
}
