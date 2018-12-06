"Use strict";

describe("Pruebas del login", () => {
  before(() => {
    cy.exec("npm run test:clean");
  });

  beforeEach(() => {
    cy.fixture("user.json").as("userData");
    cy.visit("/login");
    cy.contains("h1", "Bienvenido").should("be.visible");
  });

  it("Debe cargar el login", () => {});

  it("Debe registrar un usuario", () => {
    cy.get("@userData").then(userData => {
      cy.createUser(userData);
    });
  });

  it("Debe fallar con un usuario erroneo", () => {
    cy.loginUser("not-registered@techlatam.la", "12345678ABC");
    cy.get(".error-msg").should("be.visible");
  });

  it("Loguearse al sistema", () => {
    cy.get("@userData").then(userData => {
      cy.loginUser(userData.email, userData.password);
      cy.contains("a", "Dashboard").should("be.visible");
    });
  });

  after(() => {
    cy.log("Test Completed!");
  });
});
