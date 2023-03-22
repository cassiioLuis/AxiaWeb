import newUser from "../actions/registerActions"
import { wrognPass, user, nUser } from "../support/factories/newUser"

describe.skip('Register page', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    beforeEach(() => {
        newUser.go()
    })
    

    //Teste de validação de senha inválida/fraca e criação de usuário, não foram feitos devido ao Captcha.
    //Captchas não são passíveis de automação, com isso, para realização de automação nesses cenários, deve ser realizada a desativação em ambientes de testes e/ou homologação, permanecendo apenas em ambiente de produção

    
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