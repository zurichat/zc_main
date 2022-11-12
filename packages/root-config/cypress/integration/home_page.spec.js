/// <reference types="cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});
