/// <reference types="cypress" />

context("Login from the home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("[data-cy=top_navigation_bar_login_button]")
      .contains(/login/i)
      .click({ force: true });
  });
  afterEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
  it("should navigate to the login page", () => {
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/login");
    });
  });

  it("should have a disabled login button on initialization", () => {
    cy.get("[data-cy=auth_form_submit_button]")
      .contains(/log in/i)
      .should("be.disabled");
  });
  it("accepts user login credentials => email and password, log the user in and navigate to the choose-workspace page", () => {
    cy.intercept("POST", "https://api.zuri.chat/auth/login", {
      fixture: "login.json"
    });
    cy.intercept(
      "GET",
      `https://api.zuri.chat/users/${Cypress.env("user_email")}/organizations`,
      {
        fixture: "organizations.json"
      }
    );
    cy.get("[data-cy=auth_form_textfield]")
      .first()
      .type(Cypress.env("user_email"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_textfield]")
      .last()
      .type(Cypress.env("user_password"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_submit_button]")
      .contains(/log in/i)
      .should("not.be.disabled")
      .as("loginButton");
    cy.get("@loginButton").click();
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/choose-workspace");
    });
  });
  //   it("should have page title", () => {
  //     // https://on.cypress.io/title
  //     cy.title().should("include", "login");

  //   });
});
