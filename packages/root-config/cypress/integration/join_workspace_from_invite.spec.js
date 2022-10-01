/// <reference types="cypress" />

context("Join workspace via invite link", () => {
  const inviteId = "4aeead54-d04d-4021-8d3d-a3b99cb59c7f";
  beforeEach(() => {
    cy.visit(`/invites/${inviteId}`);
  });

  it("should join a workspace via invite link - account not found", () => {
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/organizations/invites/${inviteId}`,
      { statusCode: 400 }
    );
    cy.intercept("POST", `${Cypress.env("api_staging")}/guests/invite`, {});
    cy.get("[data-cy=join_workspace_button]").click().as("joinWorkspaceButton");
    // user does not have an account
    cy.get("[data-cy=auth_form_textfield][type='password'][id='password']")
      .type(Cypress.env("user_password"))
      .should("have.attr", "required");
    cy.get(
      "[data-cy=auth_form_textfield][type='password'][id='confirmpassword']"
    )
      .type(Cypress.env("user_password"))
      .should("have.attr", "required");
    cy.get("@joinWorkspaceButton").click();
    // Successful and redirects to the login page
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.equal("/login");
    });
  });
  it("should join a workspace via invite link - account found", () => {
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/organizations/invites/${inviteId}`,
      {}
    );

    cy.get("[data-cy=join_workspace_button]").click();

    // Successful and redirects to the login page
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.equal("/login");
    });
  });
});
