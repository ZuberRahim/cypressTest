//< reference types="cypress" />;

describe("AutoLogin", () => {
  it("Login using an admin account with username: team@vetradar.com", () => {
    cy.login("team@vetradar.com", "Spacedog123");
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
    // cy.get('[data-testid="Grid"]').should("be.visible");
  });
  it("Create a Hospital Sheet", () => {
    cy.login("team@vetradar.com", "Spacedog123");
    cy.get('[data-testid^="PatientListCard_').eq(0).click();
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
  });
});
