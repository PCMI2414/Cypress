const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  viewportWidth: 1500,
  viewportHeight: 900,
  "chromeWebSecurity": false,
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    supportFile:false
    
  }  
  
});
