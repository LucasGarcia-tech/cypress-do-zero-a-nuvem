Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName:'David',
    lastName:'fogo',
    email:'lucas@lucas.com',
    text:'sou o melhor'
}) => {

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('.button[type="submit"]').click()

})
    



