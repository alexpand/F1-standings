describe('FLOW1', () => {
  it('Test Links', () => {
    cy.visit('http://localhost:5173/')
    cy.get('[data-test=driver-lead]').eq(0).click()
  })
})