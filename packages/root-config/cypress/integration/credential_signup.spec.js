/// <reference types="cypress" />

import { loginFixture, organizationsFixture } from "../fixtures";

context("Signup from the home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=top_navigation_bar_signup_button]")
      .contains(/sign up/i)
      .click({ force: true });
  });
  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  it("should navigate to the sign up page", () => {
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/signup");
    });
  });

  it("should have a disabled sign up button on initialization", () => {
    cy.get("[data-cy=auth_form_submit_button]")
      .contains(/sign up/i)
      .should("be.disabled");
  });
  it("accepts user sign up credentials => fullname, email and password, sign the user up and show the email verification modal", () => {
    cy.intercept("POST", `${Cypress.env("api_staging")}/users`, loginFixture);
    cy.intercept(
      "GET",
      `${Cypress.env("api_staging")}/users/${Cypress.env(
        "user_email"
      )}/organizations`,
      organizationsFixture
    );
    cy.get("[data-cy=auth_form_textfield][name='Full Name']")
      .type(Cypress.env("user_fullname"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_textfield][type='email']")
      .type(Cypress.env("user_email"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_textfield][type='password']")
      .last()
      .type(Cypress.env("user_password"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_agreement_checkbox]").check();
    cy.get("[data-cy=auth_form_submit_button]")
      .contains(/sign up/i)
      .should("not.be.disabled")
      .as("signupButton");
    cy.get("@signupButton").click();
    cy.get("[data-cy=email_verification_otp_modal]").should("be.visible");
  });
});
