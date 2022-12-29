//< reference types="cypress" />;

describe("Creating a", () => {
  it("Hospital Sheet", () => {
    cy.login("team@vetradar.com", "Spacedog123");
    cy.get('[data-testid^="PatientListCard_').eq(0).click();
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
