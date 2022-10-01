/// <reference types="cypress" />

context("Reset password page", () => {
  beforeEach(() => {
    cy.visit("/reset-password");
  });
  it("should navigate to the reset password page", () => {
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/reset-password");
    });
  });
  it("should have a disabled send/submit button on initialization", () => {
    cy.get("[data-cy=auth_form_submit_button]").should("be.disabled");
  });
  it("should have an input field that accepts email, submit the email and if successful display the success modal and redirect to /change-password when the continue button on the modal is clicked.", () => {
    cy.intercept(
      "POST",
      `${Cypress.env("api_staging")}/account/verify-reset-password`,
      {
        data: {}
      }
    );
    cy.get("[data-cy=auth_form_textfield]")
      .first()
      .type(Cypress.env("user_email"))
      .should("have.attr", "required");
    cy.get("[data-cy=auth_form_submit_button]").click();
    cy.get("[data-cy=verification_code_modal]").should("be.visible");
    cy.get("[data-cy=verification_code_modal_input]").each(($input, index) => {
      cy.wrap($input).type(index + 1);
    });
    cy.get("[data-cy=verification_code_success_modal]").should("be.visible");
    cy.get("[data-cy=verification_code_modal_continue_button]").click();

    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/change-password");
      expect(location.search).to.eq("?code=123456");
    });
  });
});

context("Change password page", () => {
  const verificationCode = 10111213;
  beforeEach(() => {
    cy.visit(`/change-password?code=${verificationCode}`);
  });
  it("should navigate to the change password page", () => {
    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/change-password");
      expect(location.search).to.eq(`?code=${verificationCode}`);
    });
  });
  it("should have a disabled submit button on initialization", () => {
    cy.get("[data-cy=auth_form_submit_button]").should("be.disabled");
  });
  it("should display two password fields, submit the form and if successful diaply the success modaL and redirect to the login page when the continue button on the modal is clicked.", () => {
    cy.intercept(
      "POST",
      `${Cypress.env(
        "api_staging"
      )}/account/update-password/${verificationCode}`,
      {
        data: {}
      }
    );
    cy.get("[data-cy=auth_form_textfield][type='password']").each($input => {
      cy.wrap($input)
        .type(Cypress.env("user_password"))
        .should("have.attr", "required");
    });
    cy.get("[data-cy=auth_form_submit_button]")
      .should("not.be.disabled")
      .click();
    cy.get("[data-cy=change_password_success_modal]").should("be.visible");
    cy.get("[data-cy=change_password_modal_continue_button]").click();

    cy.location().should(location => {
      expect(location.hash).to.be.empty;
      expect(location.pathname).to.eq("/login");
    });
  });
});
