describe('about', () => {
  it('should avatar and author', () => {
    cy.visit('/')
    cy.get('[data-testid="About"]').click()
    cy.get('[data-testid="about"]').should('contain', 'About Aaron Williams')
    cy.get('[data-testid="avatar"]').should('be.visible')
  })
})
