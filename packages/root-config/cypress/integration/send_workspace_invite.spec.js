/// <reference types="cypress" />

import {
  organizationsFixture,
  userFixture,
  usersFixture,
  organizationFixture
} from "../fixtures";

context("Send workspace invite", () => {
  const orgId = organizationFixture().data._id;
  beforeEach(() => {
    cy.resetState();
    cy.setAuthSessionStorage();
    cy.visit(`/workspace/${orgId}`);
  });
  it("should allow for input of email(s), sending payload to the API and displaying a success message", () => {
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/organizations/${orgId}`,
      organizationFixture()
    );
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/users/${Cypress.env(
        "user_email"
      )}/organizations`,
      organizationsFixture
    );
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/organizations/${orgId}/members`,
      usersFixture()
    );
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/organizations/${orgId}/members/?query=${
        userFixture().email
      }`,
      {
        data: [{ _id: userFixture().id }]
      }
    ).as("getUser");
    cy.intercept(
      "POST",
      `${Cypress.env("api_staging")}/organizations/${orgId}/send-invite`,
      {
        delay: 1000,
        data: {}
      }
    );
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.include(`/workspace/${orgId}`);
    });
    // Continue
    cy.wait("@getUser");
    cy.get("[data-cy=sidebar_header]").click();
    cy.get("[data-cy=sidebar_menu_modal]").should("be.visible");
    cy.get("[data-cy=invite_to_workspace_action_element]").click();
    // display modal that contains the textfield to add emails
    cy.get("[data-cy=invite_to_workspace_modal_step1]")
      .should("be.visible")
      .as("step1Modal");
    cy.get("[data-cy=invite_to_workspace_modal_textfield]").type(
      Cypress.env("user_email")
    );
    // accepts multiple email
    cy.get("@step1Modal").focus();
    cy.get("[data-cy=invite_to_workspace_modal_textfield]").type(
      "anothermail@gmail.com"
    );
    cy.get("@step1Modal").focus();
    // input field should have two email tags
    cy.get("[data-cy=invite_to_workspace_modal_email_tag]").should(
      "have.length",
      2
    );
    // send invite
    cy.get("[data-cy=invite_to_workspace_modal_send_button]").dblclick();
    // send invite - loading state
    cy.get("[data-cy=loading_spinner]").should("be.visible");
    // send invite - success state
    cy.get("[data-cy=invite_to_workspace_modal_success_icon]").should(
      "be.visible"
    );
    // close the modal
    cy.get("[data-cy=invite_to_workspace_modal_done_button]").click();
  });
});
