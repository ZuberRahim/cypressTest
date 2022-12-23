const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/automatedUI-Testing/*.{js,jsx,ts,tsx}",
    chromeWebSecurity: false,
  },
  projectID: "ymeiwv",
  retries: 2,
});
