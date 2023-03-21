


Cypress.Commands.add('removeUser', user => {

    const payload =
    {
        userName: user.name,
        password: user.password
    }

    cy.authorized(payload)

    cy.request({
        method: 'DELETE',
        url: `/Account/v1/user/${Cypress.env('userId')}`,
        headers: {
            Authorization: `Bearer ${Cypress.env('token')}`
        }
    }).then(response => {
        expect(response.status).to.eq(204)
    })

})

Cypress.Commands.add('generateToken', user => {

    const payload =
    {
        userName: user.name,
        password: user.password
    }

    cy.authorized(user)

    cy.request({
        method: 'POST',
        url: '/Account/v1/GenerateToken',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(200)
        Cypress.env('token', response.body.token)
        Cypress.env('expires', response.body.expires)
    })

})

Cypress.Commands.add('authorized', user => {

    const payload =
    {
        userName: user.name,
        password: user.password
    }

    cy.request({
        method: 'POST',
        url: '/Account/v1/Authorized',
        body: payload
    }).then(response => {
        expect(response.status).to.eq(200)
    })

})

Cypress.Commands.add('createUser', user => {

    const payload =
    {
        userName: user.name,
        password: user.password
    }

    cy.request({
        method: 'POST',
        url: `/Account/v1/User`,
        body: payload,
        failOnStatusCode: false
    }).then(response => {
        if (response.status != 201) {
            cy.log('Usuário já cadastrado! --- ' + response.status)
        } else {
            expect(response.status).to.eq(201)
        }
    })

})

Cypress.Commands.add('apiLogin', user => {

    cy.generateToken(user)

    const payload =
    {
        userName: user.name,
        password: user.password
    }

    cy.request({
        method: 'POST',
        url: `/Account/v1/Login`,
        body: payload,
    }).then(response => {
        expect(response.status).to.eq(200)
        cy.setCookie('userID', `${response.body.userId}`)
        cy.setCookie('userName', `${response.body.username}`)
        cy.setCookie('expires', `${Cypress.env('expires', response.body.expires)}`)
        cy.setCookie('token', `${Cypress.env('token', response.body.token)}`)
        Cypress.env('userId', response.body.userId)
    })

    cy.reload()

})


Cypress.Commands.add('removeBook', (user, isbn) => {

    cy.apiLogin(user).then(res => {

        const payload =
        {
            isbn: isbn,
            userId: Cypress.env('userId')
        }

        cy.request({
            method: 'DELETE',
            url: '/BookStore/v1/Book',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            },
            body: payload,
            failOnStatusCode: false
        }).then(response => {
            if (response.status === 204) {
                expect(response.status).to.eq(204)
            } else {
                cy.log(response.status)
            }
        })
    })

})

Cypress.Commands.add('addBook', (user, book) => {

    cy.apiLogin(user).then(res => {

        const payload =
        {
            userId: Cypress.env('userId'),
            collectionOfIsbns: [
                {
                    isbn: book
                }
            ]
        }

        cy.request({
            method: 'POST',
            url: '/BookStore/v1/Books',
            headers: {
                Authorization: `Bearer ${Cypress.env('token')}`
            },
            body: payload
        }).then(response => {
            expect(response.status).to.eq(201)
        })
    })

})