describe('post', () => {
  it('should contain recent posts elements', () => {
    cy.visit('/')
    cy.get('[data-testid="recent-posts"]').within(() => {
      cy.get('[data-testid="post-title"]').first().click()
    })

    cy.get('[data-testid="post-details"]').within(() => {
      cy.get('[data-testid="post-date"]').should('be.visible')
      cy.get('[data-testid="read-time"]').should('be.visible')
    })
    cy.get('[data-testid="tags"]').should('be.visible')
  })
})
