// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginFixture, userFixture } from "../fixtures";

// -- Reset Application State

Cypress.Commands.add("resetState", () => {
  cy.window().then(window => {
    const utilitiesCaches = [
      "zuri-utilities-getuserinfo",
      "zuri-utilities-getworkspaceuser",
      "zuri-utilities-getworkspaceusers"
    ];
    window.sessionStorage.clear();
    window.localStorage.clear();
    utilitiesCaches.forEach(async cacheName => {
      return window.caches.delete(cacheName);
    });
  });
});
// -- Set Auth Information to SessionStorage

Cypress.Commands.add("setAuthSessionStorage", () => {
  cy.window().then(window => {
    window.sessionStorage.setItem("session_id", loginFixture.data.session_id);
    window.sessionStorage.setItem("user", JSON.stringify(userFixture()));
    window.sessionStorage.setItem("token", userFixture().token);
  });
});
