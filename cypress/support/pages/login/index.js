
import { elements } from '../../elements';
import { faker } from '@faker-js/faker';

let password = faker.internet.password()
let firstName = faker.name.firstName()
let lastName = faker.name.lastName()
let phone = faker.phone.number()
let email = faker.internet.email()

class newAccount {
    
    accessProfilePage() {
        cy.visit('/')
        cy.get(elements.btnProfile).click()
    }

    fillNewAccountInformation() {

        cy.get(elements.btnsignUp).click()
        cy.get(elements.txtFirstName).type(firstName)
        cy.get(elements.txtLastName).type(lastName)
        cy.get(elements.txtPhoneNumber).type(phone)
        cy.get(elements.txtEmailCreation).type(email)
        cy.get(elements.txtPassword).eq(1).type(password)
        cy.get(elements.txtConfirmPassword).type(password)
        cy.get(elements.btnCreate).click()
        cy.get(elements.btnProfile).click()

    }
}

export default new newAccount()