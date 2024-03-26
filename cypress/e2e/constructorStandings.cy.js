describe('CONSTRUCTOR STANDINGS', () => {
  it('Checking Constructor links', () => {
    //check constructor link navigation and constructor name on the constructor page
    cy.visit('http://localhost:5173/constructorStandings')
    cy.get('[data-test=constructor-lead]').eq(0).click()
    cy.get('[data-test=constructor-name]').should('exist')
  })

  it('Constructor Favorite', () => {
    //setting favorite constructor by clicking on the favorite button
    cy.visit('http://localhost:5173/constructorStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('have.class', 'active')

    //checking favorite constructor is added to favorites page
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=constructor-favorite]').should('exist')
  
    //removing favorite constructor
    cy.visit('http://localhost:5173/constructorStandings')
    cy.get('[data-test=favorite-button]').eq(0).click()
    cy.get('[data-test=favorite-button]').eq(0).should('not.have.class', 'active')
    
    //checking favorite driver is removed
    cy.visit('http://localhost:5173/favorites')
    cy.get('[data-test=constructor-favorite]').should('not.exist')
  })
})