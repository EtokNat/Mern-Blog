const flowbite = require("flowbite-react/tailwind")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add any additional content paths here if needed
    flowbite.content() // Include Flowbite content configuration
  ],
  theme: {
    extend: {
      // Extend Tailwind theme if necessary
    }
  },
  plugins: [
    // Add any additional Tailwind plugins here if needed
    flowbite.plugin() // Include Flowbite plugin configuration
  ]
}
