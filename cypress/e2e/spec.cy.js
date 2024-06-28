describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
  it('cargamasiva', function(){
    cy.visit('https://demoqa.com/automation-practice-form')
    
    cy.wait(500)
    
  })
})
