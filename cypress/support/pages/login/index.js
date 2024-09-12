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

    fillNewAccountInformation({ firstNameInput = firstName, lastNameInput = lastName, phoneInput = phone, emailInput = email, passwordInput = password } = {}) {
        cy.get(elements.btnsignUp).click();

        if (firstNameInput)
            cy.get(elements.txtFirstName).type(firstNameInput);
        if (lastNameInput)
            cy.get(elements.txtLastName).type(lastNameInput);
        if (phoneInput)
            cy.get(elements.txtPhoneNumber).type(phoneInput);
        if (emailInput)
            cy.get(elements.txtEmailCreation).type(emailInput);
        if (passwordInput) {
            cy.get(elements.txtPassword).eq(1).type(passwordInput);
            cy.get(elements.txtConfirmPassword).type(passwordInput);
        }

        cy.get(elements.btnCreate).click();
    }
}

export default new newAccount();