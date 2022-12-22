// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (email, password) => { //This command will log into the the url mentioned 
  cy.visit("https://app.staging.vetradar.com/");
  cy.get("[data-test=email-input]").type(email);
  cy.get('[placeholder="Password"]').type(password);
  cy.contains("Sign In").click();
  cy.get(".css-175oi2r:nth-child(1) > .css-11aywtz").type("1");
  cy.get(".css-175oi2r:nth-child(2) > .css-11aywtz").type("2");
  cy.get(".css-175oi2r:nth-child(3) > .css-11aywtz").type("3");
  cy.get(".css-175oi2r:nth-child(4) > .css-11aywtz").type("4");
  cy.contains("Confirm PIN").click();
  cy.get('[data-testid="STAGING - ezyVet - STABLE"]').click();
  cy.get('[data-testid="PatientList"]').should("be.visible");
  cy.get('[data-testid^="PatientListCard_').eq(0).click();
  cy.get('[data-testid="Grid"]').should("be.visible");
});
