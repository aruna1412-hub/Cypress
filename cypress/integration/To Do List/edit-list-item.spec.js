export function editListItem(){
    describe('Edit List Item Test', () => {
        it('Edit List Item on the ToDos React App Page', () => {
           
            const newListItem = 'Do Gardening'

            cy.contains('To Do List3')
               .dblclick()
            cy.contains('To Do List3').parent().siblings('.edit')
              .should('have.value', 'To Do List3')
              .type('{selectall}{backspace}' + newListItem + '{enter}')

            cy.get('.todo-list li')
                .last()
                .should('have.text', newListItem)
              

            cy.checkA11y()
            cy.wait(1000)
            
            //cy.pause()
        
            
        })
    })
}

