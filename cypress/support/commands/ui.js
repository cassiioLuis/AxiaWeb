import login from '../../actions/loginActions'



Cypress.Commands.add('removeCaptcha', () => {
    cy.get('#g-recaptcha')
        .parent()
        .invoke('remove')
})


Cypress.Commands.add('alertValidation', message => {
    cy.window().then(win => {
        cy.stub(win, 'alert').as('alert')
        cy.get('@alert').should('have.been.calledOnceWith', message)
    })
})


Cypress.Commands.add('uiLogin', user => {
    login.go()
    login.fillForm(user)
    login.login()
})