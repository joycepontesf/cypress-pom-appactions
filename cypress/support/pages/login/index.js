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

    accessSignUpPage() {
        cy.get(elements.btnsignUp).click();
    }

    createAccount() {
        cy.get(elements.btnCreate).click();
    }

    fillFirstName({ firstNameInput = firstName } = {}) {
        if (firstNameInput)
            cy.get(elements.txtFirstName).type(firstNameInput);
    }

    fillLastName({ lastNameInput = lastName } = {}) {
        if (lastNameInput)
            cy.get(elements.txtLastName).type(lastNameInput);
    }

    fillPhone({ phoneInput = phone } = {}) {
        if (phoneInput)
            cy.get(elements.txtPhoneNumber).type(phoneInput);
    }

    fillEmail({ emailInput = email } = {}) {
        if (emailInput)
            cy.get(elements.txtEmailCreation).type(emailInput);
    }

    fillPassword({ passwordInput = password } = {}) {
        if (passwordInput) {
            cy.get(elements.txtPassword).eq(1).type(passwordInput);
            cy.get(elements.txtConfirmPassword).type(passwordInput);
        }
    }
}

export default new newAccount();