describe('NAVBAR', {viewportWidth: 320}, () => {
  it('Check links', () => {
    //check links and routes
    cy.visit('http://localhost:5173/')
    cy.get('[data-test=nav-link-/]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/')

    cy.get('[data-test=nav-link-/constructorstandings]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/constructorstandings')

    cy.get('[data-test=nav-link-/results]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/results')

    cy.get('[data-test=nav-link-/circuit]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/circuit')

    cy.get('[data-test=nav-link-/calendar]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/calendar')

    cy.get('[data-test=nav-link-/favorites]').click({force: true})
    cy.url().should('eq', 'http://localhost:5173/favorites')
  })

  it('Checking Mobile Link Menu', () => {
    //check mobile menu displays links
    cy.get('[data-test="mobile-menu"]').click()
    cy.get('[data-test="nav-list"]').should('have.class', 'visible')

    //check mobile menu hides links
    cy.get('[data-test="mobile-menu"]').click()
    cy.get('[data-test="nav-list"]').should('have.class', 'noVisible')
  })
})