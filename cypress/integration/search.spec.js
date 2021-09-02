/// <reference types="Cypress" />

describe("Search", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows results when search is valid", () => {
    cy.get(".DocSearch-Button").click();
    cy.get(".DocSearch-Input").type("best practices");
    cy.get(".DocSearch-Hit")
      .find("a")
      .should("have.attr", "href", "/guides/references/best-practices");
  });

  it("Doesn't show results when search is invalid", () => {
    cy.get(".DocSearch-Button").click();
    cy.get(".DocSearch-Input").type("asdfasdf");
    cy.get(".DocSearch-NoResults").contains(`No results for "asdfasdf"`);
  });
});
