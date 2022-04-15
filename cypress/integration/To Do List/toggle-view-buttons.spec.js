export function toggleViewClickButtons() {
    describe('Toggle View Clicking Buttons Test', () => {
        it('Toggle View Clicking Buttons on the ToDos React App Page', () => {

            //cy.get('.filters').children('li:last-child')
            //   .click()
            cy.get('.filters').children('li:nth-of-type(1)')
                .click()

            cy.get('.todo-list li')
                .first()
                .should('have.text', 'To Do List2')

            cy.get('.todo-list li')
                .last()
                .should('have.text', 'Do Gardening')
            
            cy.wait(2000)

            cy.get('.filters').children('li:nth-of-type(2)')
                .click()
            cy.get('.todo-list li')
                .should('have.text', 'Do Gardening')
            /*cy.get('.filters').children('li:first-child')
               .click() */
            cy.wait(2000)

            cy.get('.filters').children('li:nth-of-type(3)')
                .click()
            cy.get('.todo-list li')
                .should('have.text', 'To Do List2')
            cy.checkA11y()
            //cy.wait(500)   
            //cy.pause()


        })
    })
}

