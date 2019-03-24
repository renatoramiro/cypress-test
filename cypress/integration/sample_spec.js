describe('My First Test', function() {
  beforeEach(() => {
    cy.visit("/index.html");
  });

  it('Find h1', () => {
    cy.get('h1.hello').contains('Hello World!');
  });

  it('Find p', () => {
    cy.get('p').contains('ola');
  });
});