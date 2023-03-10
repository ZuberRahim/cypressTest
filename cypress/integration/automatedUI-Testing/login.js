//< reference types="cypress" />;

describe("AutoLogin", () => {
  it("Login using an admin account with username: team@vetradar.com", () => {
    cy.login("team@vetradar.com", "Spacedog123"); // The code for the command login is in  ..>support>commands.js

    // cy.visit("https://app.staging.vetradar.com/");
    // cy.get("[data-test=email-input]").type("team@vetradar.com");
    // cy.get('[placeholder="Password"]').type("Spacedog123");
    // cy.get("form").submit();
    // cy.get(".css-175oi2r:nth-child(1) > .css-11aywtz").type("1");
    // cy.get(".css-175oi2r:nth-child(2) > .css-11aywtz").type("2");
    // cy.get(".css-175oi2r:nth-child(3) > .css-11aywtz").type("3");
    // cy.get(".css-175oi2r:nth-child(4) > .css-11aywtz").type("4");
    // cy.get(".r-x9nf8f > .r-1awozwy > .css-1rynq56").click();
    // cy.get('[data-testid="STAGING - ezyVet - STABLE"]').click();
    // cy.get('[data-testid="PatientList"]').should("be.visible");
    // cy.get('[data-testid^="PatientListCard_').eq(0).click();
    cy.get('[data-testid="PatientList"]').should("be.visible");
    cy.saveLocalStorage();
  });
  it("Hospital Sheet", () => {
    cy.restoreLocalStorage();
    cy.get('[data-testid^="PatientListCard_', { timeout: 5000 }).eq(2).click();
    cy.get('[data-testid="Grid"]').should("be.visible");
    cy.get('[data-testid="HeaderHeadline"]').click();
    cy.contains("+ Create sheet").click();
    cy.get('[data-testid="SheetNameInput"]').then(($sheetName) => {
      const sheetInput = $sheetName.val();
      cy.log(sheetInput);

      cy.get('[data-testid="addSheetButton"]').click();
      cy.get('[data-testid="HeaderHeadline"]').then(($newSheetName) => {
        const newSheetName = $newSheetName.text();
        cy.log(newSheetName);
        expect(newSheetName).to.include(sheetInput);
      });
    });
    const dayjs = require("dayjs");
    cy.log(dayjs().format("DD/MM/YYYY"));
  });

  it("Hospital Sheet", () => {
    cy.restoreLocalStorage();
    cy.get('[data-testid="IconButton-Patients"]', { timeout: 5000 }).click();
    cy.get('[data-testid^="PatientListCard_').eq(3).click();
    cy.get('[data-testid="Grid"]').should("be.visible");
    cy.get('[data-testid="HeaderHeadline"]').click();
    cy.contains("+ Create sheet").click();
    cy.get('[aria-label="Sheet type Select Input"]').click();
    cy.get('[data-testid="MenuItem_Hospital"]')
      .should("have.text", "Hospital")
      .and("be.visible");
    cy.get('[data-testid="MenuItem_Anesthesia"]')
      .should("have.text", "Anesthesia")
      .and("be.visible");
    cy.get('[data-testid="MenuItem_Anesthesia"]').click();
    cy.get('[data-testid="SheetNameInput"]').then(($sheetName) => {
      const sheetInput = $sheetName.val();
      cy.log(sheetInput);

      cy.get('[data-testid="addSheetButton"]').click();
      cy.get('[data-testid="HeaderHeadline"]').then(($newSheetName) => {
        const newSheetName = $newSheetName.text();
        cy.log(newSheetName);
        expect(newSheetName).to.include(sheetInput);
      });
    });
  });
});
