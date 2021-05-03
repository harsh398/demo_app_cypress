/// <reference types="cypress" />
import BasePage from "../page_objects/BasePage"

const basePage = new BasePage

describe("Verifying Contents , Search and Pokemon on Page ", () => {
        before(() => {
            basePage.openURL();
            Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
            });
            basePage.verifyContent()
        })

        it("Using Search and Verifying Pokemon  ", () => {
            basePage.checkSearch();
            basePage.OpenPokemonNamePage();
            basePage.checkYNamePokemon();
            
        })
    })