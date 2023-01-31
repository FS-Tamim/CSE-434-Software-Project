describe('Login and Change Password', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8000/login');
    });
  
    it('should allow the user to login and change their password', () => {
      cy.get('input[name=identity]').type('student@student.com');
      cy.get('input[name=password]').type('12345678');
      cy.get('button[type=submit]').click();
  
      cy.visit('http://127.0.0.1:8000/my_account');
      cy.get('input[name=current_password]').type('12345678');
      cy.get('input[name=password]').type('12345678');
      cy.get('input[name=password_confirmation]').type('12345678');
      cy.get('button[type=submit]').click();
  
   
    });
  });


