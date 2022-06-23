
import { Given, When,Then } from "cypress-cucumber-preprocessor/steps";

import { URLONBOARDING } from "../../uti/Constans.js"; 
Given(`enter the website reqes`, () => {
  cy.visit(URLONBOARDING);

});
When('slide the page down',()=>{
   cy.get('.the-sell > .wrap > :nth-child(3)').type('{pagedown}')

})

Then(`I check the title of the site`, () => {
  cy.title().should("eq", "Reqres - A hosted REST-API ready to respond to your AJAX requests");
});

