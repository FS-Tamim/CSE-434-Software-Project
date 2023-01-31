describe('Login', () => {
    it('should log the user in with correct credentials', () => {
      cy.visit('http://127.0.0.1:8000/login');

      cy.get('input[name=identity]').type('student@student.com');
      cy.get('input[name=password]').type('12345678');
      cy.get('button[type=submit]').click();
  
     
    });
  
    it('should display an error message with incorrect credentials', () => {
      cy.visit('http://127.0.0.1:8000/login');
      cy.get('input[name=identity]').type('student@student.com');
      cy.get('input[name=password]').type('1234567');
      cy.get('button[type=submit]').click();
    });

});