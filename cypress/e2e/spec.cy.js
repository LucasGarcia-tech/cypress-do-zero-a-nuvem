
describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    
    cy.visit('./src/index.html')
  })
  it('verifica o título da aplicação', () => {

    cy.title().should('eq','Central de Atendimento ao Cliente TAT')
    
  })

  it('Preencha os campos obrigatórios e envia o Formulário', () => {
    
    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwzy',10)

    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('lucasgarciainvest@gmail.com')
    cy.get('#phone').type('47999485014')
    cy.get('#open-text-area').type(longText,{delay:0})
    cy.contains('button','Enviar').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {

    const longText = Cypress._.repeat('abcdefghijklmnopqrstuvwzy',10)

    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('lucasgarciainvestgmail.com')
    cy.get('#phone').type('47999485014')
    cy.get('#open-text-area').type(longText,{delay:0})
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
  })

  it('Campo telefone continua vazio quando preenchido com um valor não numérico', () => {

    cy.get('#phone').type('abc').should('have.value', '')
    
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {

    cy.get('#firstName').type('Lucas')
    cy.get('#lastName').type('Garcia')
    cy.get('#email').type('lucasgarciainvest@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.contains('button','Enviar').click()
    cy.get('.error').should('be.visible')
    
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

    cy.get('#firstName')
      .type('Lucas')
      .should('have.value','Lucas')
      .clear()
      .should('have.value','')

    cy.get('#lastName')
      .type('Garcia')
      .should('have.value','Garcia')
      .clear()
      .should('have.value','')
      
    cy.get('#email')
      .type('lucasgarciainvest@gmail.com')
      .should('have.value','lucasgarciainvest@gmail.com')
      .clear()
      .should('have.value','')

    cy.get('#phone')
      .type('47999485014')
      .should('have.value','47999485014')
      .clear()
      .should('have.value','')

    
  })

  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    
    cy.contains('button','Enviar').click()      
      .get('.error').should('be.visible')

  })

  it('envia o formuário com sucesso usando um comando customizado', () => {
  
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('.success').should('be.visible')
    
  })

  it.only('seleciona um produto (YouTube) por seu texto', () => {
  
    cy.get('select').select('youtube')
      .should('have.value','youtube')
    
    
  })


})
