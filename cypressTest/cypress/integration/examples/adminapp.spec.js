/// <reference types="Cypress" />

const login = () => {
    cy.visit('https://intedfitstuat1.msdf.org:450');
    cy.get('#Username').type('alex.retivov');
    cy.get('#Password').type('LAForum425!');
    cy.get(".btn").click();
}

describe('UI', () => {
    // beforeEach(login);
      beforeEach(() => {
          login();
          Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    });
  
  });
  


describe("Testing of AdminApp", () => {

    it("login application",() => {
    //Load the URL
            cy.visit('https://intedfitstuat1.msdf.org:450/v3.2.0/');
    
    //Identifies an element omn the page and click the login button.
      //      cy.contains ("Login").click();
    
    //Assertion for Account Login
      //      cy.url().should("include","/Account/Login");
    
    //Enters user name and password and clicks the login button.
     //       cy.get('#UserName').type("admin");
     //       cy.get('#Password').type("password");
    //        cy.get(".btn").click();
    
    //Click the Employee Tab
           // cy.contains("Employee List").click();
    
    //Find all the items in the table using "Find and Filter"
          //  cy.get('.table').find('tr').contains("Prashanth").parent().contains('Benefits').click();
    
    })
    })