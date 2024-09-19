const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // enable video recording
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
