

class Dashboard {

    go() {
        cy.visit('/')
        cy.get('header a img[src="/images/Toolsqa.jpg"]')
            .should('be.visible')
    }

    goBlockStore() {
        cy.contains('.card-body', 'Book Store Application')
            .should('be.visible').click()
    }

}

export default new Dashboard()