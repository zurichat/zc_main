/// <reference types="cypress" />

import { organizationsFixture } from "../fixtures";
import { userFixture, marketplacePluginsFixture } from "../fixtures/user";

context("Create workspace page", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    cy.visit("/create-workspace");
  });

  it("should navigate back to the login page if the user is not logged in", () => {
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/login");
    });
  });
  describe("should navigate to the create workspace page", () => {
    const orgId = "123iop8n";
    beforeEach(() => {
      cy.setAuthSessionStorage();
    });
    it("should navigate to the create workspace page only if the user is logged in", () => {
      cy.intercept(
        "GET",
        `${Cypress.env("api_staging")}/users/${Cypress.env(
          "user_email"
        )}/organizations`,
        organizationsFixture
      ).as("getUserOrganizations");

      cy.intercept("POST", `${Cypress.env("api_staging")}/organizations`, {
        data: {
          organization_id: orgId
        }
      });

      cy.intercept(
        "PATCH",
        `${Cypress.env("api_staging")}/organizations/${orgId}/name`,
        {
          data: {}
        }
      );

      cy.intercept(
        "GET",
        `${Cypress.env("api_staging")}/organizations/${orgId}/members/?query=${
          userFixture.email
        }`,
        {
          data: [{ _id: userFixture.id }]
        }
      );

      cy.intercept(
        "GET",
        `${Cypress.env("api_staging")}/marketplace/plugins`,
        marketplacePluginsFixture
      );

      cy.intercept(
        "POST",
        `${Cypress.env("api_staging")}/organizations/${orgId}/plugins`,
        {
          data: {}
        }
      );

      cy.intercept(
        "POST",
        `${Cypress.env("plugin_chat_base_url")}/api/v1/install`,
        {
          data: {}
        }
      );

      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq("/create-workspace");
      });

      // Start the workspace creation process
      cy.get("[data-cy=create_new_workspace_action_element]");

      // Subscribe to newsletters
      cy.get(
        "[data-cy=create_workspace_subscribe_to_newsletter_checkbox]"
      ).should("be.checked");

      // Continue
      cy.wait("@getUserOrganizations");
      cy.get("[data-cy=create_new_workspace_action_element]").click({
        force: true
      });

      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq("/create-workspace/step-1");
      });

      cy.get("[data-cy=create_workspace_continue_action_element]").should(
        "be.disabled"
      );

      // Enter workspace name
      cy.get("[ data-cy=create_workspace_textfield]").type("test hub");

      // Submit and continue
      cy.get("[data-cy=create_workspace_continue_action_element]")
        .should("not.be.disabled")
        .click();

      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq("/create-workspace/step-2");
      });

      cy.get("[data-cy=create_workspace_continue_action_element]").should(
        "be.disabled"
      );

      // Enter workspace description
      cy.get("[ data-cy=create_workspace_textfield]").type("testing hubs");

      // Submit and continue
      cy.get("[data-cy=create_workspace_continue_action_element]")
        .should("not.be.disabled")
        .click();

      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq("/create-workspace/launch");
      });

      cy.get("[data-cy=create_workspace_continue_action_element]")
        .should("not.be.disabled")
        .click();

      // Successful and redirects to the new workspace
      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.include(`/workspace/${orgId}`);
      });
    });
  });
});
