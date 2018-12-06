describe("test acerca de post", () => {
  before(() => {
    cy.exec("npm run test:clean");
    cy.fixture("user.json").as("userData");
    cy.visit("/login");

    cy.get("@userData").then(userData => {
      cy.createUser(userData);
      cy.visit("/dashboard");
      cy.get(".create-post textarea").type("Nuevo Post");
      cy.contains(".button", "Crear").click();
      cy.wait(3000);
    });
  });

  it("Crear Post", () => {});
});
