// tailwind.config.js
/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['{pages,app}/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#FC4747',
      white: '#FFFFFF',
      blue: {
        dark: '#10141E',
        grey: '#5A698F',
        semi: '#161D2F',
      },
    },
    extend: {
      spacing: {
        18: '4.5rem',
      },
    },
  },
  plugins: [],
}
