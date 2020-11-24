/// <reference types="Cypress" />

describe('Login',function(){
    it('SignIn',function(){
        cy.visit("http://172.25.40.135:8080/front/dist/");
        cy.get('input[id="inputName"]').type('ebrahim');
        cy.get('input[id="password"]').type('123');
        cy.get('.MuiButtonBase-root').contains('ورود').should('be.visible').click();                                                                                                                                                                             
    })
})
