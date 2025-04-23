describe('Yellow or Blue', () => {
  it('Clicks the correct color button', () => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue');
    cy.get('button').contains('Generate').click();
    cy.get('h5').then(($el) => {
      const color = $el.text().includes('yellow') ? 'yellow' : 'blue';
      cy.get('button').contains(color).click();
    });
  });
});