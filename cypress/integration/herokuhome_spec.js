describe('Herokuapp testing', ()=> {
    context('Herokuapp home page',() =>{
        beforeEach('Visitng herokuapp page',()=>{
            cy.visit('http://the-internet.herokuapp.com/');
        });

        it('contains header',()=>{
            cy.log("------------------------");
            cy.log(Cypress.config("auth_url"));
            cy.contains('Welcome to the-internet');
        });

        it('contains header',()=>{
            cy.contains('Available Examples');
        });

        //Select value form a drop down
        describe('Navigate to dropdown page',()=>{
            beforeEach('click on the Dropdown page',()=>{
                cy.get('#content > ul > li').contains('Dropdown').click();
            });

            afterEach('Navigate back to Home page', ()=>{
                cy.go('back');
            });

            it('Select Option from dropdown',()=>{
                cy.get('#dropdown').select('Option 1');
            })
        });
    });
});