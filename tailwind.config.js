// tailwind.config.js

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    // Add other paths as needed for Tailwind to scan for classes
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // Example custom size
        '11xl': '11rem', // Example custom size
        },
      },
  },
  plugins: [],
};

