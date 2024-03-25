describe('FAVORITES', () => {
  it('No favorites', () => {
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=empty-drivers]').should('exist')
    cy.get('[data-test=empty-constructors]').should('exist')
    cy.get('[data-test=empty-circuits]').should('exist')
  })

  it('Driver Favorite', () => {
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('have.class', 'active')

    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('exist')
  
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('not.exist')
  })
})