

class NewUser {

    go() {
        cy.visit('/register')
        cy.removeCaptcha()
        cy.get('#userForm h4').should('have.text', 'Register to Book Store')
        
    }

    fillForm(user) {
        cy.get('#firstname').clear().type(user.firstName)
        cy.get('#lastname').clear().type(user.lastName)
        cy.get('#userName').clear().type(user.userName)
        cy.get('#password').clear().type(user.password)
    }

    submit() {
        cy.get('#register').should('be.visible').click()
    }

    validation() {
        const message = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
        cy.get('#output #name').should('have.text', message)
    }

}

export default new NewUser()