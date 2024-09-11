/// <reference types="cypress" />

import { elements } from '../support/elements';

describe('', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
        cy.login()
    })

    it('Complete purchase successfully', () => {
        cy.addProducts()
        cy.accessOrders()

        cy.get(elements.item).should('exist')
    })

    afterEach(() => {
        cy.cancelOrder()
        cy.clearAllCookies
    })

})