describe('Concatenate Strings', () => {
  it('Concatenates two input strings and checks the result', () => {
    cy.visit('https://thelab.boozang.com/concatStrings');
    cy.get('button').contains('Generate').click();
    cy.get('p.string1').invoke('text').then((text1) => {
      cy.get('p.string2').invoke('text').then((text2) => {
        const concatenated = text1.trim() + text2.trim();
        cy.get('input[name="strings"]').type(concatenated);
        cy.get('button').contains('Submit').click();
      });
    });
  });
});