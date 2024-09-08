const elem = require('./elements').elements;

import { firstName, lastName, phoneNumber, email, password } from '../../../fixtures/testData.json'

class newAccount {
    
    accessProfilePage() {
        cy.visit('/')
        cy.get(elem.btnProfile).click()
    }

    fillNewAccountInformation() {
        cy.get(elem.btnsignUp).click()
        cy.get(elem.txtFirstName).type(firstName)
        cy.get(elem.txtLastName).type(lastName)
        cy.get(elem.txtPhoneNumber).type(phoneNumber)
        cy.get(elem.txtEmail).type(email)
        cy.get(elem.txtPassword).eq(1).type(password)
        cy.get(elem.txtConfirmPassword).type(password)
        cy.get(elem.btnCreate).click()
        cy.get(elem.btnProfile).click()

        cy.contains(elem.txtUsername, firstName).should('be.visible')
    }
}

export default new newAccount()