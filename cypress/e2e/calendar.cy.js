describe('CALENDAR', () => {
  it('Checking results links', () => {
    //check there are results links
    cy.visit('http://localhost:5173/calendar')
    cy.get('[data-test=results-link]').eq(0).click()

    //after click on a result link, check there is a back button
    cy.get('[data-test=back-button]').should('exist')

    //check if there are results
    cy.get('[data-test=race-name]').should('exist')
    cy.get('[data-test=race-date]').should('exist')
    cy.get('[data-test=driver-lead]').eq(0).should('exist')
  })
})