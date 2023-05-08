/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "primary": {
          "100": "#B283FF",
          "200": "#936BE7",
          "300": "#7948C8",
          "400": "#532F9F",
        },
        "secondary": {
          "100": "#A6A9B0",
          "200": "#767A86",
          "300": "#32394B",
          "400": "#232938",
          "500": "#1C202B",
          "600": "#13151C",
        },
        "success": "#72E5AE",
        "error": "#E37777"
      }
    },
  },
  plugins: [],
}
