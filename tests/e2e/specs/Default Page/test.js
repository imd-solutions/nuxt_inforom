// https://docs.cypress.io/api/table-of-contents

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('localhost:3000/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
