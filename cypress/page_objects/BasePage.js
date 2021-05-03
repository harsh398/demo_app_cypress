//// <reference types="cypress" />
// import 'cypress-waitfor';

const url = 'https://bulbapedia.bulbagarden.net/wiki/Main_Page';

export default class BasePage {
  constructor() {
  }

  getLogo() {
    return cy.get('.bg-global-nav-logo');
  }
  getSearch() {
    return cy.get('.bg-global-nav-search-wrapper > #searchform > #searchInput');
  }
  getContent() {
    return cy.get('#content');
  }

  getContinue() {
    return cy.get(':nth-child(2) > .banner_continueBtn--3KNKl > span');
  }
  getAdvanceOptions() {
    return cy.get('.search-types > ul > :nth-child(4) > a')
  }
  getSearchContentPage() {
    return cy.get('#bodyContent')
  }
  getCheckAll() {
    return cy.get('#mw-search-toggleall')
  }
  getChecknone() {
    return cy.get('#mw-search-togglenone')
  }
  getFilterText() {
    return cy.get(':nth-child(5) > tbody > :nth-child(3) > :nth-child(1) > label')
  }
  getFirstCheck() {
    return cy.get('#mw-search-ns1')
  }
  getSecondCheck() {
    return cy.get('#mw-search-ns4')
  }
  getThirdCheck() {
    return cy.get('#mw-search-ns102')
  }
  getSearchButton() {
    return cy.get('.oo-ui-inputWidget-input > .oo-ui-labelElement-label');
  }
  getSearchResult() {
    return cy.get(':nth-child(1) > .mw-search-result-heading > a');
  }
  getAllResult() {
    return cy.get('.searchresults');
  }
  getPokemonPage() {
    return cy.get(':nth-child(1) > :nth-child(2) > .bg-global-nav-primary-link')
  }
  getYPokemon() {
    return cy.get(':nth-child(4) > [style="float:right; text-align: center"] > [href="#Y"]')
  }
  getYamask() {
    return cy.get(':nth-child(102) > tbody > :nth-child(2) > :nth-child(3) > a')
  }
  getYamper() {
    return cy.get(':nth-child(102) > tbody > :nth-child(3) > :nth-child(3) > a')
  }
  getYama() {
    return cy.get(':nth-child(102) > tbody > :nth-child(4) > :nth-child(3) > a')
  }
  getYanmega() {
    return cy.get(':nth-child(102) > tbody > :nth-child(5) > :nth-child(3) > a')
  }
  getYungoos() {
    return cy.get(':nth-child(102) > tbody > :nth-child(6) > :nth-child(3) > a')
  }
  getYental() {
    return cy.get(':nth-child(102) > tbody > :nth-child(7) > :nth-child(3) > a')
  }
  getYblock() {
    return cy.get('.mw-parser-output > :nth-child(102)')
  }

  openURL() {

    cy.wait(2000)
    cy.visit(url);
  }
  verifyContent() {
    this.getLogo().should('be.visible');
    this.getSearch().should('be.visible');
    this.getContent().should('be.visible');
  }

  checkSearch() {
    this.getSearch().type('communities and events{enter}')
    this.getContinue().should('be.visible');
    this.getContinue().click();
    this.getSearchContentPage().should('be.visible')
    this.getAdvanceOptions().should('be.visible')
    this.getAdvanceOptions().scrollIntoView();
    this.getAdvanceOptions().click();
    this.getCheckAll().click();
    this.getChecknone().click();
    this.getFirstCheck().click()
    this.getSecondCheck().click()
    this.getThirdCheck().click()
    this.getSearchButton().scrollIntoView();
    this.getSearchButton().click()
    this.getAllResult().should('be.visible')
  }

  OpenPokemonNamePage() {
    cy.scrollTo('top')
    this.getPokemonPage().realHover({ x: 380, y: 31 });
    cy.get('.bg-global-nav-secondary-link').contains('By Name').click();
  }

  checkYNamePokemon() {
    this.getYPokemon().should('be.visible')
    this.getYPokemon().click();
    this.getYblock().should('be.visible')
    this.getYamask().should('be.visible')
    this.getYamper().should('be.visible')
    this.getYanmega().should('be.visible')
    this.getYental().should('be.visible')
    this.getYama().should('be.visible')
    this.getYungoos().should('be.visible')
  }
}

