'Use strict'

describe('Pruebas del login', () => {
  beforeEach(() => {
    cy.fixture('user.json').as('userData')
    cy.visit('/login')
    cy.contains('h1', 'Bienvenido').should('be.visible')
  })

  it('Debe cargar el login', () => {

  })

  it('Debe registrar un usuario', () => {
    cy.get('@userData').then((userData) => {
      cy.contains('Crear una cuenta').click()
      cy.get('#name').type(userData.name)
      cy.get('#title').type(userData.company)
      cy.get('#email2').type(userData.email)
      cy.get('#password2').type(userData.password)
      cy.contains('.button', 'Registrarse').click()
      cy.wait(3000)
      cy.get('.error-msg').should('not.exist')
    })
  })

  it('Debe fallar con un usuario erroneo', () => {
    cy.get('#email1').type('not-registered@techlatam.la')
    cy.get('#password1').type('12345678ABC')
    cy.contains('.button', 'Ingresar').click()
    cy.wait(3000)
    cy.get('.error-msg').should('be.visible')
  })

  it('Loguearse al sistema', () => {
    cy.get('@userData').then((userData) => {
      cy.get('#email1').type(userData.email)
      cy.get('#password1').type(userData.password)
      cy.contains('.button', 'Ingresar').click()
      cy.contains('a', 'Dashboard').should('be.visible')
    })
  })

  after(() => {
    cy.log('Test Completed!')
  })
})
