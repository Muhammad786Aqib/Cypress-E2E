import { registerPage } from "../../pages/registerPage";

describe('Test automation', () => {
    before(() => {
        
        cy.fixture('registerData.json').as('registerData');
    });

    it('register flow', function () {
        registerPage.openURL();

        registerPage.enterFirstName(this.registerData.firstName);
        registerPage.enterLastName(this.registerData.lastName);
        registerPage.enterEmail(this.registerData.email);
        registerPage.enterTelephone(this.registerData.telephone);
        registerPage.enterPassword(this.registerData.password);
        registerPage.selectCheckbox();
        registerPage.clickOnContinue();
    });
});