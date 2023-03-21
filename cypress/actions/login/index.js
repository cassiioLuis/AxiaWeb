

class Login {

    goNewUser() {
        cy.get('#newUser').should('be.visible').click()
    }

    go() {
        cy.visit('/login')
        this.isLoginPage()
    }

    isLoginPage() {
        cy.get('#userForm h5').should('have.text', 'Login in Book Store')
    }

    fillForm(user) {
        cy.get('#userName').clear().type(user.name)
        cy.get('#password').clear().type(user.password)
    }

    login() {
        cy.intercept('POST', 'https://demoqa.com/Account/v1/GenerateToken').as('token')
        cy.get('#login').should('be.visible').click()
        cy.wait('@token')
    }

}

export default new Login()