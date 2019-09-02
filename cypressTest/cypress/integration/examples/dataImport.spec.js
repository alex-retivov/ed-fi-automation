/// <reference types="Cypress" />

describe("Testing of Data Import Setup", () => {

    it("Create Account",() => {
    //Load the URL
            cy.visit('https://edfiserver:444/DataImport');
        
    
    //Identifies an element omn the page and click the login button.
          //  cy.contains ("Login").click();
          cy.get(':nth-child(2) > a').click();
    
        // Enter New Account user name and password and clicks the Register button.
            cy.get('#Email').type("alexretivov@mac.com");
            cy.get('#Password').type("March1234$");
            cy.get('#ConfirmPassword').type("March1234$");
            cy.get('.btn').click();

    
    //Enters user name and password and clicks the login button.
          cy.get('#logoutForm > .nav > :nth-child(2) > a').click();
          cy.get('#Email').type("alexretivov@mac.com");
          cy.get('#Password').type("March1234$");
          cy.get('#RememberMe').click();
          cy.get('.btn').click();

         //   cy.get('#UserName').type("admin");
         //   cy.get('#Password').type("password");
         //   cy.get(".btn").click();
    
    //Click the Employee Tab
         //   cy.contains("Employee List").click();
    
    //Find all the items in the table using "Find and Filter"
          //  cy.get('.table').find('tr').contains("Prashanth").parent().contains('Benefits').click();
    
    })
    })