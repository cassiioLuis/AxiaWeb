

class BookDetails {

    isOnMyBook(title) {
        cy.get('#title-wrapper #userName-value').should('have.text', title)
    }

    addMyCollection(user) {
        cy.contains('#addNewRecordButton', 'Add To Your Collection').should('be.visible').click()
    }

}

export default new BookDetails()