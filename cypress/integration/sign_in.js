describe('Sign in', () => {
  it('signs in', () => {
    cy.visit('/');
    cy.get('[data-test=email]')
      .type('user@gmail.com')
      .should('have.value', 'user@gmail.com');
    cy.get('[data-test=password]')
      .type('password')
      .should('have.value', 'password');
    cy.get('form').submit();

    cy.get('[data-test=title]')
      .should('contain', 'Dashboard')
      .then(() => {
        expect(localStorage.getItem('AUTH_TOKEN')).to.exist;
      });
  });
});
