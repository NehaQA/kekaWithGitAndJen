
describe('login Test Cases', () => {
    
  it('Verify user is able to redirect to Keka Website', () => {
      cy.visit("https://app.keka.com/Account/Login");
    //  cy.visit("");
        
    it('Verify that user should be able to login with valid username and password',function()
    {
        cy.get('#email').type('neha.arora@crownstack.com')
        cy.get('#password').type('Password@123')
        cy.get('#Login').click()
        cy.wait(500)
        cy.contains("Crownstack Technologies Pvt Ltd").should('be.visible')
    })
    


  });


});