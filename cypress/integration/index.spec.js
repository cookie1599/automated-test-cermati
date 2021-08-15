describe('Gabung Cermati > ', () => {
    beforeEach(() => {
        cy.visit('https://www.cermati.com/gabung')
    })

    it('input email', ()=>{
        cy.get('.form-group')
        cy.get('.form-control').type('{shift}')

    })
})