/// <reference types="cypress" />

describe('', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', v2, { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    });

    it('Complete purchase successfully', () => {

    });

    afterEach(() => {
        cy.clearAllCookies
    });
});