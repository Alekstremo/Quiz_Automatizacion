describe('Wait Game', () => {
  it('Wait for the button to be enabled before clicking', () => {
    cy.visit('https://thelab.boozang.com/waitGame');
    cy.get('button').contains('Start').click();
    cy.wait(5000);
    cy.get('button').contains('End').click();
  });
});