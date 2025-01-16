
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {
    cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    
  })

  it.only('Preencha os campos obrigatórios e envia o Formulário', () => {
    
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwzy',10)

    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('lucasgarciainvest@gmail.com')
    cy.get('#phone').type('47999485014')
    cy.get('#open-text-area').type(longText,{delay:0})
    cy.get('.button[type="submit"]').click()

    cy.get('.success')
      .should('be.visible')
  })

  it('', () => {

  })

})
