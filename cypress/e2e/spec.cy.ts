it('works', () => {
  cy.visit('/');
  cy.contains('Home');
});
