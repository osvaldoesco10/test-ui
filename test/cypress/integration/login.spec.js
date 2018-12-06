'Use strict'

describe('Pruebas del login', () => {
  it('Debe cargar el login', () => {
    cy.visit('/login')
  })

  it('Debe registrar un usuario', () => {
    cy.visit('/login')
    cy.contains('Crear una cuenta').click()
    cy.get('#name').type('Osvaldo')
    cy.get('#title').type('Techlatam')
    cy.get('#email2').type('osvaldo.escobar@techlatam.la')
    cy.get('#password2').type('12345678ABC')
    cy.contains('.button', 'Registrarse').click()
    cy.wait(3000)
  }
})
