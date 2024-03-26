describe('RESULTS', () => {
  it('Rendered title', () => {
    cy.visit('http://localhost:5173/results')
    // check back button is not visible
    cy.get('[data-test=back-button]').should('not.exist')
    //check there are race results
    cy.get('[data-test=race-name]').should('exist')
    cy.get('[data-test=race-date]').should('exist')
  })

  it('Checking Driver links', () => {
    //check driver links
    cy.visit('http://localhost:5173/results')
    cy.get('[data-test=driver-lead]').eq(0).click()
    cy.get('[data-test=driver-name]').should('exist')
  })

  it('Checking Constructor links', () => {
    //check constructor links
    cy.visit('http://localhost:5173/results')
    cy.get('[data-test=constructor-lead]').eq(0).click()
    cy.get('[data-test=constructor-name]').should('exist')
  })
})