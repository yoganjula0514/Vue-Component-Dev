import ButtonClickCounter from './ButtonClickCounter.vue'

describe('<ButtonClickCounter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ButtonClickCounter)
    cy.get('button').should('be.visible', true)
  })
})