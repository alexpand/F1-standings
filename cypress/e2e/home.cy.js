describe('HOME', () => {
  it('Rendered articles', () => {
    //check there are three articles
    cy.visit('http://localhost:5173/')
    cy.get('section > article').eq(0).find('[data-test=driver-lead]').should('have.length', 3)
    cy.get('section > article').eq(1).find('[data-test=constructor-lead]').should('have.length', 3)
    cy.get('section > article').eq(2).find('[data-test=next-races]').its('length').should('have.lte', 3)
  })

  it('Checking Driver links', () => {
    //check driver links
    cy.visit('http://localhost:5173/')
    cy.get('section > article').eq(0).find('[data-test=driver-lead]').eq(0).click()
    cy.get('[data-test=driver-name]').should('exist')
  })

  it('Checking Constructor links', () => {
    //check constructor links
    cy.visit('http://localhost:5173/')
    cy.get('section > article').eq(1).find('[data-test=constructor-lead]').eq(0).click()
    cy.get('[data-test=constructor-name]').should('exist')
  })
})