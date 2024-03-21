describe('HOME', () => {
  it('Test lists', () => {
    cy.visit('http://localhost:5173/')
    cy.get('section > article').should('have.length', 3)
  })
})