/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'uiuc-orange': '#FF552E',
        'uiuc-blue': '#13294B',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 