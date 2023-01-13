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

Cypress.Commands.add("login", (email, password) => {
  //This command will log into the the url mentioned
  cy.visit("https://app.staging.vetradar.com/");
  cy.get("[data-test=email-input]").type(email);
  cy.get('[placeholder="Password"]').type(password);
  cy.contains("Sign In").click();
  cy.get("[inputmode='numeric']", { timeout: 7000 }).eq(0).type("1");
  cy.get("[inputmode='numeric']").eq(1).type("2");
  cy.get("[inputmode='numeric']").eq(2).type("3");
  cy.get("[inputmode='numeric']").eq(3).type("4");
  cy.contains("Confirm PIN").click();
  cy.get('[data-testid="STAGING - ezyVet - STABLE"]').click();
});

let LOCAL_STORAGE_MEMORY = {};

// Save session data at the end of an it
Cypress.Commands.add("saveLocalStorage", () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

// Restore session data at the start of an it
Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
