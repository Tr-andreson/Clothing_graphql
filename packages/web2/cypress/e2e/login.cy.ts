describe('Page should open login', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.get("a").should("contain", "Login", { log: false }).click()
    cy.url().should("include", "/login")
  })
})
