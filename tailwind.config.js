/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [ "./resources/**/*.blade.php",
  "./resources/**/*.js",
  "./resources/**/*.vue",
  './resources/js/**/*.vue',
],
darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
  important: '.welcome-class'
}
