/*Esse é um teste básico feito através de Cypress e ServeRest
É um teste de login desenvolvido em JS */

describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://front.serverest.dev/login')
      cy.get('[data-testid="email"]').type('teste@teste.com')
      cy.get('[data-testid="senha"]').type('4321')
      cy.get('[data-testid="entrar"]').click()
  
      cy.get('.alert').contains('Email e/ou senha inválidos')
    })
  })