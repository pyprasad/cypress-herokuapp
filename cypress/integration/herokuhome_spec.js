describe('Herokuapp testing', ()=> {
    context('Herokuapp home page',() =>{
        beforeEach('Visitng herokuapp page',()=>{
            cy.visit('http://the-internet.herokuapp.com/');
        });

        it('contains header',()=>{
            cy.contains('Welcome to the-internet');
        });

        it('contains header',()=>{
            cy.contains('Available Examples');
        })
    });
});