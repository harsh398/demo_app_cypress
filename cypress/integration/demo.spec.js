/// <reference types="cypress" />

// import LoginPage from "../page_objects/LoginPage"
import BasePage from "../page_objects/BasePage"

const basePage = new BasePage

describe("Verifying Contents , Search and Pokemon on Page ", () => {
        before(() => {
            basePage.openURL();
            // basePage.contentVisibilty();
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