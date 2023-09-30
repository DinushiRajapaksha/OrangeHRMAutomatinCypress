/// <reference types="cypress" />


describe('My first test',()=>{
  it('google test', function() {

    cy.visit('https://google.com')//to visit google website
    cy.get('#APjFqb').type('creative software {enter}')//to search and enter
  
  })
  
  
  it.only('orange HRM ', function() { //.only dmmama aka withri run wenne 
  
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click() 
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get('.--visited > .oxd-topbar-body-nav-tab-item').click()
    cy.get('.oxd-dropdown-menu > li').click()
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click()
  
   // cy.get('#')
  
  })
  
  
})
