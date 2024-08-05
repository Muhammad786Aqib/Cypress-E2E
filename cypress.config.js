const { defineConfig } = require("cypress");



module.exports = defineConfig({

    projectId: "ocnw76",
    video: true,


   // reporter: 'cypress-mochawesome-reporter',

    e2e: {
        baseUrl: 'https://naveenautomationlabs.com/opencart/index.php?route=account/login',
        
    },
    env: {
        URL: 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
    }
});
