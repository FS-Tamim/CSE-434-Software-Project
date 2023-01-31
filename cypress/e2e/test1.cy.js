/// ＜reference types="cypress" /＞
describe('Index Page Test', () => {
    it('Navigates to Index Page', () => {
      cy.visit('http://127.0.0.1:8000/login');
      // cy.url().should('include', '/');
      // cy.get('[data-test=header]').should('be.visible');
    });
  });