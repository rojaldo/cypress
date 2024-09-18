describe('template spec', () => {

  it('Wikipedia Test', () => {
    cy.visit('https://www.wikipedia.com')
    cy.get('#searchInput')
      .type('Cypress');
    cy.get('.pure-button.pure-button-primary-progressive').click();

    // find an element with type search class oo-ui-inputWidget-input and check if values is Cypress
    cy.get('.oo-ui-inputWidget-input[type="search"]').should('have.value', 'Cypress');
  })

  xit('Google failed test', () => {
    cy.visit('https://google.com');
    cy.get('[name="q"]')
      .type('subscribe')
      .type('{enter}');
  });
})