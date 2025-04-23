describe('Cat Shelter', () => {
  it('Adds 2 cats and assigns them a home', () => {
    cy.visit('https://thelab.boozang.com/catshelter');
    cy.get('a[class="link_btn add"]').contains('Add').click();
    cy.fixture('cats').then((data) => {
    cy.wait(500);
    cy.get('input[name="name"]').type(data.cat1);
    cy.get('textarea[name="description"]').type(data.description1);
    cy.contains('Stay').click();
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.get('button[class="new_home "]').last().click();
    cy.wait(500);
    cy.get('a[class="link_btn add"]').contains('Add').click();
    cy.get('input[name="name"]').type(data.cat2);
    cy.get('textarea[name="description"]').type(data.description2);
    cy.contains('Wants').click();
    cy.get('button').contains('Add').click();
    cy.wait(500);
    cy.get('button[class="new_home "]').last().click();
    });
  });
});
