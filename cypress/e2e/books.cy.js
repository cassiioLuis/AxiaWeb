import { userAdd, userRemove, addBook, removeBook } from "../support/factories/books"
import books from '../actions/bookStoreActions'
import bookDetails from "../actions/bookDetailsAction"
import profile from "../actions/profileActions"

describe('Books validation', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    context('add book on your collection', () => {

        before(() => {
            cy.createUser(userAdd)
            cy.removeBook(userAdd, addBook.isbn)
        })

        it('should see only the new book on collection', () => {
            cy.apiLogin(userAdd)
            books.go()
            books.isBookStorePage()
            books.selectBook(addBook.name)
            bookDetails.isOnMyBook(addBook.name)
            bookDetails.addMyCollection()
            profile.profile()
            profile.seeBook(addBook.name)
        })

    })


    context('remove book of my collection', () => {

        before(() => {
            cy.createUser(userRemove)
            cy.removeBook(userRemove, removeBook.isbn)
            cy.addBook(userRemove, removeBook.isbn)
        })

        it('should remove my book on the grid', () => {
            cy.apiLogin(userAdd)
            profile.go()
            profile.seeBook(removeBook.name)
            profile.removeBook(removeBook.name)
            profile.confirmRemove()
            profile.seeBook(removeBook.name, false)
        })

    })


})