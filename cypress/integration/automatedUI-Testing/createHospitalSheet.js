//< reference types="cypress" />;

describe("Creating a", () => {
  it("Hospital Sheet", () => {
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
