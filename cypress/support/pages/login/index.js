
import { elements } from '../../elements';
import { faker } from '@faker-js/faker';

export let password = faker.internet.password()
export let firstName = faker.name.firstName()
export let lastName = faker.name.lastName()
export let phone = faker.phone.number()
export let email = faker.internet.email()

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