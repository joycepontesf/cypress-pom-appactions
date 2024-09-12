/// <reference types="cypress" />

import { elements } from '../support/elements';

describe('Ecommerce checkout flow', () => {

    beforeEach(() => {
        cy.setEbacStoreVersionCookie()
        cy.visit('/')
    });

    it('Complete purchase successfully', () => {
        cy.login()
        cy.addProduct()
        cy.completeOrder()
        cy.accessOrders()
        
        cy.get(elements.item).should('exist')

        cy.cancelOrder()
    });

    it('Remove item from the cart', () => {
        cy.addProduct()
        cy.removeItem()

        cy.get(elements.msgCartEmpty).should('exist')
    });

    it('Buy without login', () => {
        cy.addProduct()

        cy.get(elements.btnContinueToCheckout).should('have.css', 'pointer-events', 'none')
    });

    afterEach(() => {
        cy.clearAllCookies
    });

});