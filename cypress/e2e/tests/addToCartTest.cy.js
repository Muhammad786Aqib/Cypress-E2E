import homePageInstance  from "../../pages/homePage"

import testData from '../../fixtures/testData.json'


describe(' test automation', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageInstance.searchProduct(testData.product.productName)
        homePageInstance.addToCart()
        homePageInstance.verifySucessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName);






    })
})