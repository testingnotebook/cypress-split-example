const { defineConfig } = require('cypress')
const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.testingnotebook.com',
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      return config
    },
  },
})
