import "cypress-localstorage-commands";

describe('Check Analytic Reports',()=>{

    const COOKIES_BUTTON = "#accept-cookies";
 
    before(() => {
      cy.clearLocalStorageSnapshot();
    });
   
    beforeEach(() => {
      cy.restoreLocalStorage();
      //cy.visit("/");
    });
   
    afterEach(() => {
      cy.saveLocalStorage();
    });

    it('SignIn',()=>{

        cy.visit("http://172.25.40.135:8080/front/dist/");

        cy.title().should('eq','Irisa Production');
        cy.location('protocol').should('eq','http:');

        cy.get('input[id="inputName"]').type('ebrahim');
        cy.get('input[id="password"]').type('123');
        cy.get('.MuiButtonBase-root').contains('ورود').should('be.visible').click();  
        
        cy.contains('Irisa Productions',{timeout:10000}).should('be.visible');
        
    });

    it('open Analytic dashboard',()=>{
        cy.contains('Analytics').click({force:true});
        cy.contains('OPM.WDSH',{timeout:25000}).should('be.visible');
        //cy.contains('Description').should('be.visible');
    });

    it('open Visual Analyzer dashboard',()=>{
        cy.contains('Visual Analyzer').click({force:true});
        cy.contains('VisualAnalyzer',{timeout:25000}).should('be.visible');
        //cy.contains('Description').should('be.visible');
    });

})
