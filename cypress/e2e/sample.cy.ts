describe('template spec', () => {

  xit('Wikipedia Test', () => {
    cy.visit('https://www.wikipedia.com')
    cy.get('#searchInput')
      .type('Cypress');
    cy.get('.pure-button.pure-button-primary-progressive').click();

    // find an element with type search class oo-ui-inputWidget-input and check if values is Cypress
    cy.get('.oo-ui-inputWidget-input[type="search"]').should('have.value', 'Cypress');
    // get the value of tag with attribute data-mw-num-results-total 

    cy.get('.results-info')
      .invoke('attr', 'data-mw-num-results-total')
      .then((total) => {
        expect(Number(total)).to.be.greaterThan(0);
      });


  })

  xit('Google failed test', () => {
    cy.visit('https://google.com');
    cy.get('[name="q"]')
      .type('subscribe')
      .type('{enter}');
  });

  it('Check that 5+3=8', () => {
    cy.visit('http://localhost:4200/calculator');
    // check that page contains the text Calculator
    cy.get('button:nth-child(6)').click();
    cy.get('.opt:nth-child(12)').click();
    cy.get('button:nth-child(11)').click();
    cy.get('.opt:nth-child(15)').click();
    // expect text to be 5+3=
    cy.get('#calc-operation').should('have.text', '5+3=');
    // expect result to be 8
    cy.get('#calc-typed').should('have.text', '8');
    

  });

  it('Check that 0/0=NaN', () => {
    cy.visit('http://localhost:4200/calculator');
    // check that page contains the text Calculator
    cy.get('button:nth-child(14)').click();
    cy.get('.opt:nth-child(16)').click();
    cy.get('button:nth-child(14)').click();
    cy.get('.opt:nth-child(15)').click();
    // expect text to be 0/0=
    cy.get('#calc-operation').should('have.text', '0/0=');
    // expect result to be NaN
    cy.get('#calc-typed').should('have.text', 'NaN');
  })



})

// /html/body/app-root/app-calculator/div/app-keyboard/div/button[6]