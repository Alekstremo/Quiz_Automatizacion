describe('Sorted List', () => {
  it('Adds two new items to the list', () => {
    cy.visit('https://thelab.boozang.com/sortedList');
    cy.get('input').type('Manzana');
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.get('input').type('Plátano');
    cy.get('button').contains('Add').click();
  });
});