// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include your React component files
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
