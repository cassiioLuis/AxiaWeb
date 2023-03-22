import login from '../actions/loginActions'
import profile from '../actions/profileActions'
import { user } from '../support/factories/login'

describe('Login', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    before(() => {
        cy.createUser(user)
    })
    
    context('should login successfully', () => { 

        it('should see Profile page', () => {
            login.go()
            login.fillForm(user)
            login.login()
            profile.isProfile()
        })

    })


    context('should logout successfully', () => {

        it('should out of system', () => {
            cy.uiLogin(user)
            profile.logout()
            login.isLoginPage()
        })
        
    })

})