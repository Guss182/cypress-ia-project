const { defineConfig } = require('cypress')
require('dotenv').config()

module.exports = defineConfig({
  env: {
    apiUrl: process.env.CYPRESS_API_URL || 'http://localhost:3000/api',
    adminEmail: process.env.CYPRESS_ADMIN_EMAIL || '',
    adminPassword: process.env.CYPRESS_ADMIN_PASSWORD || '',
    userEmail: process.env.CYPRESS_USER_EMAIL || '',
    userPassword: process.env.CYPRESS_USER_PASSWORD || '',
  },

  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',

    setupNodeEvents(on, config) {
      return config
    },
  },
})