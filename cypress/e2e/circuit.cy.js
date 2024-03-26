describe('CIRCUIT', () => {
  it('Circuit Favorite', () => {
    cy.visit('http://localhost:5173/circuit')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('have.class', 'active')

    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=circuit-favorite]').should('exist')
  
    cy.visit('http://localhost:5173/circuit')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('not.have.class', 'active')
    
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=circuit-favorite]').should('not.exist')
  })
})