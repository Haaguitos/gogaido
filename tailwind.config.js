/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        overlayShow: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'overlayShow': 'overlayShow 400ms',
      },
      fontFamily: {
        sans: "var(--font-hk)",
      },
      colors: {
        "primary": {
          "100": "#B283FF",
          "200": "#936BE7",
          "300": "#7948C8",
          "400": "#532F9F",
          "500": "#7464A4"
        },
        gray: {
          "50": "#EFF0F8",
          "100": "#E8E9F1",
          "200": "#A6A9B0",
          "300": "#767A86",
          "400": "#32394B",
          "500": "#232938",
          "600": "#1C202B",
          "700": "#13151C",
        },
        "success": "#72E5AE",
        "error": "#E37777"
      }
    },
  },
  plugins: [],
}
