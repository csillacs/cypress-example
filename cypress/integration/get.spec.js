/// <reference types="Cypress" />

describe("Get page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Renders borders under headings", () => {
    cy.wait(1000);
    cy.get("button").contains("Open main menu").click({ force: true });
    cy.get("a:visible").contains("API").click();
    cy.title().should("eq", "Table of Contents | Cypress Documentation");
    cy.get(".app-content").should("exist");
    cy.get("a:visible").contains("get").click();
    cy.get("#Get-vs-Find").should("have.css", "border-bottom-width", "1px");
  });
});
