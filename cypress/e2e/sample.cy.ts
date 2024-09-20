describe('template spec', () => {

  let buttons = {
    '0': 'button:nth-child(14)',
    '1': 'button:nth-child(9)',
    '2': 'button:nth-child(10)',
    '3': 'button:nth-child(11)',
    '4': 'button:nth-child(5)',
    '5': 'button:nth-child(6)',
    '6': 'button:nth-child(7)',
    '7': 'button:nth-child(1)',
    '8': '.calc-button-row > button:nth-child(2)',
    '9': 'button:nth-child(3)',
    '+': '.opt:nth-child(12)',
    '-': '.opt:nth-child(8)',
    '*': '.opt:nth-child(4)',
    '/': '.opt:nth-child(16)',
    '=': '.opt:nth-child(15)'
  }

  let operations = [
    { operation: '5+3=', result: '8' },
    { operation: '0/0=', result: 'NaN' },
    { operation: '5*3=', result: '15' },
    { operation: '5-3=', result: '2' },

  ]

  beforeEach(() => {
    cy.visit('http://localhost:4200/calculator');
  });

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

  operations.forEach((op) => {
    xit(`Check that ${op.operation}${op.result}`, () => {
      // check that page contains the text Calculator
      let operation = op.operation;
      let result = op.result;
      for (let i = 0; i < operation.length; i++) {
        let button = operation.charAt(i);
        cy.get(buttons[button]).click();
      }
      // expect text to be 5+3=
      cy.get('#calc-operation').should('have.text', operation);
      // expect result to be 8
      cy.get('#calc-typed').should('have.text', result);
      cy.screenshot();

    });
  });

  xit('Check slider', () => {
    cy.visit('http://localhost:4200/beers');
    cy.get('.ngx-slider-pointer-max').invoke('val', 25).trigger('input');
    cy.get('.ngx-slider-pointer-max').should('have.attr', 'aria-valuetext', '25');
    cy.get('.ngx-slider-pointer-min').invoke('val', 5).trigger('input');
    cy.get('.ngx-slider-combined').should('have.value', 5);
    cy.screenshot();
  });

  xit('test -1 amount of cards', () => {
    cy.request('https://opentdb.com/api.php?amount=-1')
      .then((response) => {
        expect(response.status).to.eq(400);

      });
  })

  xit('test 1.5 amount of cards', () => {
    cy.request('https://opentdb.com/api.php?amount=1.5')
      .then((response) => {
        expect(response.status).to.eq(400);

      });
  })

  xit('test <some string> amount of cards', () => {
    cy.request('https://opentdb.com/api.php?amount=hola')
      .then((response) => {
        expect(response.status).to.eq(400);

      });
  })


    

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

  xit('Check that 0/0=NaN', () => {
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