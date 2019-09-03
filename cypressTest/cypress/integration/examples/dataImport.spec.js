/// <reference types="Cypress" />

describe("Testing of Data Import Setup", () => {

    it("Create Account",() => {
    //Load the URL
            cy.visit('https://edfiserver:444/DataImport');
        
    
      // Select Register to create a new account.

            cy.get(':nth-child(2) > a').click();
    
      // Enter New Account user name and password and clicks the Register button.

            cy.get('#Email').type("alexretivov@mac.com");
            cy.get('#Password').type("March1234$");
            cy.get('#ConfirmPassword').type("March1234$");
            cy.get('.btn').click();
    
      // Log out of the account..

            cy.get('#logoutForm > .nav > :nth-child(2) > a').click();

      // Enters user name and password and clicks the login button.

            cy.get('#Email').type("alexretivov@mac.com");
            cy.get('#Password').type("March1234$");
            cy.get('#RememberMe').click();
            cy.get('.btn').click();


      // Add Api Selection from Ed-Fi Server.
      
            cy.get('.body-content > :nth-child(2)').should('have.value', 'In order to proceed, please configure the API Server.');
            cy.get('#ApiVersion').select('3.1.1');
            cy.get('#ApiServerUrl').type("https://api.ed-fi.org/v3.2.0/api/api/v3/2019");
            cy.get('#ApiServerKey').type("RvcohKz9zHI4");
            cy.get('#ApiServerSecret').type("E1iEFusaNf81xzCxwHfbolkC");
            cy.get('#btnTest').click();
    
    
      // Add Submitter Information.

            cy.get('#ContactName').type("Alex Retivov");
            cy.get('#ContactEmail').type("alexretivov@mac.com");
            cy.get('#ContactOrganization').type("Ed-Fi");
            cy.get('#btnUpdate').click();
    
    })
    })