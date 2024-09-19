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
        newAccount.accessSignUpPage()
        newAccount.fillFirstName()
        newAccount.fillLastName()
        newAccount.fillPhone()
        newAccount.fillEmail()
        newAccount.fillPassword()
        newAccount.createAccount()

        cy.contains(elements.username, firstName).should('exist')
    });

    it('Should show error messages when First Name is empty', () => {
        newAccount.accessSignUpPage()
        newAccount.fillFirstName({
            firstNameInput: ''
        })
        newAccount.fillLastName()
        newAccount.fillPhone()
        newAccount.fillEmail()
        newAccount.fillPassword()
        newAccount.createAccount()

        cy.get(elements.alertMsg).contains('Please enter firstName')
    });

    it('Should show error messages when Last Name is empty', () => {
        newAccount.accessSignUpPage()
        newAccount.fillFirstName()
        newAccount.fillLastName({
            lastNameInput: ''
        })
        newAccount.fillPhone()
        newAccount.fillEmail()
        newAccount.fillPassword()
        newAccount.createAccount()

        cy.get(elements.alertMsg).contains('Please enter lastName')
    });

    it('Should show error messages when Email is empty', () => {
        newAccount.accessSignUpPage()
        newAccount.fillFirstName()
        newAccount.fillLastName()
        newAccount.fillPhone()
        newAccount.fillEmail({
            emailInput: ''
        })
        newAccount.fillPassword()
        newAccount.createAccount()

        cy.get(elements.alertMsg).contains('Please enter an email')
    });

    it('Should show error messages when fields are empty', () => {
        newAccount.accessSignUpPage()
        newAccount.fillFirstName()
        newAccount.fillLastName()
        newAccount.fillPhone()
        newAccount.fillEmail()
        newAccount.fillPassword({
            passwordInput: ''
        })
        newAccount.createAccount()

        cy.get(elements.alertMsg).contains('Please enter password')
    });

});

afterEach(() => {
    cy.clearAllCookies
});