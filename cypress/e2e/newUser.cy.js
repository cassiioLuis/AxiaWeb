import newUser from "../actions/newUser"
import { wrognPass, user, nUser } from "../support/factories/newUser"

describe.skip('New user page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        newUser.go()
    })

    //Teste de validação de senha inválida/fraca e criação de usuário, não foram feitos devido ao Captcha.
    //Captchas não são automatizaveis, com isso, para ambientes de testes e/ou homologação o captcha é desativado.

    
    context('can not register new user with wrogn password', () => {

        // wrognPass.forEach(pass => {
        //     it(`should see error message for password: ${pass}`, () => {
        //         user.password = pass
        //         newUser.fillForm(user)
        //         newUser.submit()
        //         newUser.validation()
        //     })
        // })

    })

    context('create new user', () => {
            
        // it('should see message: "User Register Successfully"', () => {
        //     newUser.fillForm(nUser)
        //     newUser.submit()
        //     cy.alertValidation('User Register Successfully.')
        // })
        
        // after(() => {
        //     cy.removeUser(nUser)
        // })

    })
    
})