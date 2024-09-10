/// <reference types="cypress" />

import newAccount from "../support/pages/login/index"
import { firstName } from "../support/pages/login/index"
import { elements } from '../support/elements';

describe('', () => {

    beforeEach(() => {
        cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
        cy.visit('/')
    })

    it('Create account successfully', () => {
        newAccount.accessProfilePage()
        newAccount.fillNewAccountInformation()
    
        cy.contains(elements.username, firstName).should('exist')
    })
    
    afterEach(() => {
        cy.clearAllCookies
    })

})