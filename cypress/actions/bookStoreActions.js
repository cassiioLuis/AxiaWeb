

class BookStore {

    go(book = 'books') {
        cy.visit(`/${book}`)
    }

    isBookStorePage() {
        cy.get('.main-header').should('have.text', 'Book Store')
    }

    selectBook(title) {
        cy.contains('.action-buttons a', title).should('be.visible').click()
    }

    bookStore() {
        cy.contains('.menu-list span', 'Book Store')
            .should('be.visible').click()
    }

}

export default new BookStore()