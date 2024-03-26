describe('FAVORITES', () => {
  it('No favorites', () => {
    //check there are no favorites first time you visit favorites page
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=empty-drivers]').should('exist')
    cy.get('[data-test=empty-constructors]').should('exist')
    cy.get('[data-test=empty-circuits]').should('exist')
  })

  it('Driver Favorite', () => {
    //go to driverstandings to add a first driver to favorites
    cy.visit('http://localhost:5173/driverstandings')
    cy.get('[data-test=favorite-button]').eq(0).click()

    //check there is a favorite driver
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('exist')
  
    //go to driverstandigs to remove favorite driver
    cy.visit('http://localhost:5173/driverstandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    
    //check there is no favorite driver
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('not.exist')
  })

  it('Constructor Favorite', () => {
    cy.visit('http://localhost:5173/constructorStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()

    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=constructor-favorite]').should('exist')
  
    cy.visit('http://localhost:5173/constructorStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=constructor-favorite]').should('not.exist')
  })

  it('Circuit Favorite', () => {
    cy.visit('http://localhost:5173/circuit')
    cy.get('[data-test=favorite-button]').eq(0).click()

    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=circuit-favorite]').should('exist')
  
    cy.visit('http://localhost:5173/circuit')
    cy.get('[data-test=favorite-button]').eq(0).click()
    
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=circuit-favorite]').should('not.exist')
  })
})