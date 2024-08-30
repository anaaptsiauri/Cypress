// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("login", (name, id, mobile, password, password1) => {

    let random = Math.floor(Math.random() * 1000)
    let email = "aniani90@yahoo.com"

    cy.get(':nth-child(1) > .ismile').type(name)
    cy.get('.ipir').type(id + random)
    //cy.get(':nth-child(2) > .imail').type("aniani90" + random + "@yahoo.com")
    cy.get(':nth-child(4) > .itel').type(mobile + random)
    cy.get(':nth-child(5) > .ipass').type(password + random)
    cy.get('.reg-form-left > :nth-child(6) > .ipass').type(password1 + random)

})
Cypress.Commands.add("regg", (email, password3) => {
    cy.get(':nth-child(5) > .imail').type(email)
    cy.get('.ipass').type(password3)
})

