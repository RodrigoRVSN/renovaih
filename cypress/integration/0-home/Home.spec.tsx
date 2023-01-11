/// <reference types="cypress" />

export {};

describe('<Home />', () => {
  context('Visit home', () => {
    it('Should visit home page', () => {
      cy.visit('/');
    });
  });
});
