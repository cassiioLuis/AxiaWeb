

class Profile {

    isProfile() {
        cy.get('.main-header').should('have.text', 'Profile')
    }

    go() {
        cy.visit('/profile')
        this.isProfile()
    }

    profile() {
        cy.contains('.menu-list span', 'Profile')
            .should('be.visible').click()
    }

    seeBook(title, see = true) {
        see ? cy.get('.mr-2').should('have.text', title) 
            : cy.get('.mr-2').should('not.exist')
    }

    removeBook(title) {
        cy.get('.mr-2').should('have.text', title)
            .parentsUntil('div[class="rt-tbody"]')
            .find('#delete-record-undefined')
            .should('be.visible')
            .click()
    }

    confirmRemove() {
        cy.get('#closeSmallModal-ok').should('be.visible').click({ force: true })
    }

    logout() {
        cy.contains('#submit', 'Log out').should('be.visible').click()
    }

}

export default new Profile()