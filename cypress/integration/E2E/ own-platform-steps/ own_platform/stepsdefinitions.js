
import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";
import { URLOWN} from "../../uti/Constans.js"; 
Cypress.config('pageLoadTimeout', 100000)


Given('enter the website puntos colombia', () => {
  cy.visit(URLOWN);
  cy.wait(4000);
});
When('slide the page down',()=>{
   cy.get('.puntoscolombia-header-0-x-navigationMobileContainer > .puntoscolombia-store-utils-0-x-vtexIcon > .puntoscolombia-store-utils-0-x-vtexIconSvg',{timeout:500}).should('be.visible').click();
   cy.get('div.relative > .vtex-button > .vtex-button__label').should('be.visible').click();
   cy.xpath("//span[contains(text(),'Ingresa')]").should('be.visible').click();
   
})

Then(`I check the title of the site`, () => {
  
});

