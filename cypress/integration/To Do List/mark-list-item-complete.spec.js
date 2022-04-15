export function markListItemComplete(){
    describe('Mark List Item Complete Test', () => {
        it('Mark List Item Complete on the ToDos React App Page', () => {
            
             cy.contains('To Do List2').siblings('.toggle')
                .check()

            cy.get('.todo-list li')
                .first()
                .should('have.text', 'To Do List2')
            
            cy.checkA11y()
            cy.wait(1000)
            //cy.pause()
        
            
        })
    })
}

