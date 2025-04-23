describe('Form Fill', () => {
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/formFill');
  });

  it('Fills the form with 2 entries using fixture', () => {
    cy.fixture('formData').then((data) => {
      cy.get('input[name="firstname"]').type(data.firstname1);
      cy.get('input[name="lastname"]').type(data.lastname1);
      cy.get('input[name="email"]').type(data.email1);
      cy.get('input[name="password"]').type(data.contraseña1);
      cy.get('button').contains('Save').click();
      cy.wait(500);
      cy.get('input[name="firstname"]').type(data.firstname2);
      cy.get('input[name="lastname"]').type(data.lastname2);
      cy.get('input[name="email"]').type(data.email2);
      cy.get('input[name="password"]').type(data.contraseña2);
      cy.get('button').contains('Save').click();
      cy.get('button').contains('Show').click();
    });
  });
});