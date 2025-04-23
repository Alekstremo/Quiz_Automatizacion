describe('Speed Game', () => {
  it('Click the button as fast as it appears', () => {
    cy.visit('https://thelab.boozang.com/speedGame');
    cy.get('button').contains('Start').click();
    cy.contains('button', 'End',  { timeout: 11000 }).should('be.visible').click();
  });
});