const { defineConfig } = require("cypress");

module.exports = defineConfig({
    projectId: "ocnw76",
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'cypress/reports',
        overwrite: true,
        html: true,
        json: false
    },
    e2e: {
        baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
    env: {
        URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    }
});
