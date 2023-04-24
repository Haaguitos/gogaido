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
        "pink": {
          "50": "#f5ecf4",
          "100": "#ebd9e8",
          "200": "#d6b3d2",
          "300": "#c28cbb",
          "400": "#ad66a5",
          "500": "#99408e",
          "600": "#7a3372",
          "700": "#5c2655",
          "800": "#3d1a39",
          "900": "#1f0d1c"
        }
      }
    },
  },
  plugins: [],
}
