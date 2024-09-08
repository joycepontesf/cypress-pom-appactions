/// <reference types="cypress" />

import newAccount from "../support/pages/login/index.js"

describe('', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })

    it.only('Create account successfully', () => {

        newAccount.accessProfilePage()
        newAccount.fillNewAccountInformation()
    
    })

    /*
    afterEach(() => {
        cy.clearAllCookies
    })
*/
})