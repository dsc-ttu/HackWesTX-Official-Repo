// postcss.config.js
module.exports = {
  plugins: [
    'tailwindcss',
    'autoprefixer',
    require('@mantine/core').postcss, // Include Mantine Core
    // Add other PostCSS plugins here if needed
  ],
};
