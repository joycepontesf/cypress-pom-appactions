/// <reference types="cypress" />

import newAccount from "../support/pages/login";
import { firstName } from "../support/pages/login";
import { elements } from '../support/elements';

describe('Account creation flow', () => {

    beforeEach(() => {
        cy.setEbacStoreVersionCookie()
        cy.visit('/')
        newAccount.accessProfilePage()
    });

    it('Create account successfully', () => {
        newAccount.fillNewAccountInformation()

        cy.contains(elements.username, firstName).should('exist')
    });

    it('Should show error messages when fields are empty', () => {
        newAccount.fillNewAccountInformation({
            firstNameInput: '',
            lastNameInput: '',
            phoneInput: '',
            emailInput: '',
            passwordInput: ''
        });
        
        cy.get(elements.alertMsg).contains('Please enter firstName')
    });

    afterEach(() => {
        cy.clearAllCookies
    });

});