const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //env: 'cypress.env.json'
    },
  },
  
});
