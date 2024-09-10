/// <reference types="cypress" />

import { elements } from '../support/elements';

describe('', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    });

    it('Complete purchase successfully', () => {
        cy.login()
        cy.addProducts()

        cy.get(elements.item).should('exist')
    });

    afterEach(() => {
        cy.clearAllCookies
    });

});