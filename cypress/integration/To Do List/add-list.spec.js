// add-list.spec.js created with Cypress
//
// Start writing your Cypress tests below!
export function addListItems() {
    describe('Add List Item Test', () => {
        it('Visits the ToDos React App Page', () => {
            cy.visit('127.0.0.1:8888/#/')
            // Inject the axe-core library
            cy.injectAxe()
            for (let i = 1; i <= 3; i++) {
                cy.get('.new-todo')
                    .type('To Do List' + i)
                    .should('have.value', 'To Do List' + i)
                    .type('{enter}')
            }
            cy.get('.todo-list li')
                .should('have.length', 3)
                .first()
                .should('have.text', 'To Do List1')
            cy.get('.todo-list li')
                .eq(1)
                .should('have.text', 'To Do List2')
            cy.get('.todo-list li')
                .last()
                .should('have.text', 'To Do List3')
            //cy.pause()
          
            cy.checkA11y()
            cy.wait(1000)
        })
    })
}


// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
