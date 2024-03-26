describe('DRIVER STANDINGS', () => {
  it('Checking Driver links', () => {
    //check driver link navigation and driver name on the driver page
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=driver-lead]').eq(0).click()
    cy.get('[data-test=driver-name]').should('exist')
  })

  it('Checking Constructor links', () => {
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=constructor-lead]').eq(0).click()
    cy.get('[data-test=constructor-name]').should('exist')
  })

  it('Driver Favorite', () => {
    //setting favorite driver by clicking on the favorite button
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('have.class', 'active')

    //checking favorite driver is added to favorites page
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('exist')
  
    //removing favorite driver
    cy.visit('http://localhost:5173/driverStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('not.have.class', 'active')
    
    //checking favorite driver is removed
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=driver-favorite]').should('not.exist')
  })
})