module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-theme': "url('../images/Interstellar.svg')",
      })
    },
  },
  plugins: [],
}