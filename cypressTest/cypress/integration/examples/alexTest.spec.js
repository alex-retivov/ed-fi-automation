/// <reference types="Cypress" />

describe("Testing of EA app", () => {

it("login application",() => {
//Load the URL
        cy.visit('http://eaapp.somee.com/');

//Identifies an element omn the page and click the login button.
        cy.contains ("Login").click();

//Assertion for Account Login
        cy.url().should("include","/Account/Login");

//Enters user name and password and clicks the login button.
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");
        cy.get(".btn").click();

//Click the Employee Tab
        cy.contains("Employee List").click();

//Find all the items in the table using "Find and Filter"
        cy.get('.table').find('tr').contains("Prashanth").parent().contains('Benefits').click();

})
})