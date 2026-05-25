const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  workers: 2,

  reporter: 'html',

  use: {

    headless: true,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry',

  },

  projects: [

    {
      name: 'chromium',

      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',

      use: {
        ...devices['Desktop Firefox'],

        launchOptions: {
          slowMo: 200,
        },
      },
    },

  ],

});