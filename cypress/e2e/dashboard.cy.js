import dashboard from "../actions/dashboard"
import bookStore from "../actions/bookStore"

describe('Dashboard menu', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('should see application is on', () => {
        dashboard.go()
    })

    it('should access Book Store Application', () => {
        dashboard.go()
        dashboard.goBlockStore()
        bookStore.isBookStorePage()
    })

})