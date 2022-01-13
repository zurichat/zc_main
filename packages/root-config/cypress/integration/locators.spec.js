/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should locate elements with the get method", () => {
    cy.get(".hero_left_btn--bLz0n__Home-module").contains(
      /try zuri chat for free/i
    );
  });
});
