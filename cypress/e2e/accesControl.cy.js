Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://127.0.0.1:8000/login');
    cy.get('input[name=identity]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('button[type=submit]').click();
  });
  
  describe('Access Control Test', () => {
    it('Guest User Access', () => {
     
      cy.visit('http://127.0.0.1:8000/my_account');
      cy.url().should('include','http://127.0.0.1:8000/login');
    });
  
    it('Authenticated User Access', () => {
      cy.login('student@student.com','12345678');
      cy.visit('http://127.0.0.1:8000/my_account');
    
    });
  });