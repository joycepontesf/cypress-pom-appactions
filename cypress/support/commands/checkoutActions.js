
import { elements } from '../elements.js';
import { email, password } from '../../fixtures/testData.json';

Cypress.Commands.add('login', () => {
    cy.get(elements.btnProfile).click()
    cy.get(elements.txtEmail).type(email)
    cy.get(elements.txtPassword).eq(0).type(password)
    cy.get(elements.btnLogin).click()

})

Cypress.Commands.add('addProducts', () => {
    cy.get(elements.product).eq(0).click()
    cy.get(elements.btnPurchase).click()
    cy.get(elements.btnContinueToCheckout).click()
    cy.get(elements.btnCheckout).click()
    cy.wait(1000)
    cy.get(elements.btnOrder).click()
    cy.get(elements.processingOrders).click()

})