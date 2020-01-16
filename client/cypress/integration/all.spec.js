describe('Perusable', function () {
  it('Displays the home page.', function () {
    cy.visit('/');
    cy.get('h1').should('contain', 'Perusable');
  });

  it('Displays a list of results.', function () {
    // Stub server
    cy.server();
    cy.route('GET', '**/api/v1/catalog/wines/**')
      .as('getWines');
  
    cy.visit('/');

    cy.get('input[placeholder="Enter a search term (e.g. cabernet)"]')
      .type('cabernet');

    cy.get('button').contains('Search').click();
    cy.wait('@getWines');
    cy.get('div.card-title').should('contain', 'Staglin Cabernet Sauvignon');
  });

  it('Displays wine search words.', function () {
    // Stub server
    cy.server();
    cy.route('GET', '**/api/v1/catalog/wine-search-words/**')
      .as('getWineSearchWords');
  
    cy.visit('/');
    cy.get('input[placeholder="Enter a search term (e.g. cabernet)"]')
      .type('cabarnet');
    cy.wait('@getWineSearchWords');
    cy.get('ul#query').should('contain', 'cabernet');
  });
});