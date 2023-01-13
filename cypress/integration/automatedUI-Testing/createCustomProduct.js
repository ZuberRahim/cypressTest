//< reference types="cypress" />;

describe("Creating a", () => {
  it("Custom Medication Product", () => {
    cy.login("team@vetradar.com", "Spacedog123");
    cy.get('[data-testid="IconButton-Settings"]').click();
    cy.get('[data-testid="Custom products"]').click();
    cy.contains("+ Create custom product").click();
    const dayjs = require("dayjs");
    cy.log(dayjs().format("DD/MM/YYYY"));
    cy.get("[aria-label='Product name input']", { timeout: 4000 })
      .click()
      .type("Custom Medication Product " + dayjs().format("DD/MM/YYYY"));

    cy.get('[aria-label="Product type Select Input"]').click();
    cy.get('[data-testid="MenuItem_Medication"]').click();
    cy.get('[aria-label="Sheet group Select Input"]').click();
    cy.get('[data-testid="MenuItem_Medications"]').click();
  });
});
