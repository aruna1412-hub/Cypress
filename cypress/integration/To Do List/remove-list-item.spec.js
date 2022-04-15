export function removeListItem(){
    describe('Remove List Item Test', () => {
        it('Remove the List Item on the ToDos React App Page', () => {
            
             cy.contains('To Do List1').siblings('.destroy')
                .invoke('show')
                .click()

            cy.contains('To Do List1').should('not.exist')
            cy.checkA11y()
            cy.wait(1000)
            
            //cy.pause()
        
            
        })
    })
}

