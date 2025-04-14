const { cyan } = require("colorette");
const { before } = require("lodash");
const { data } = require("ospath");

describe('Fluxo de add itens', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/');
    });

    it('Login com sucesso', () => {

         cy.login();

    });

    it('Pesquisar um produto', () => {

        cy.login();
        cy.search_product();

    });

    it.only('Adicionar itens no carrinho', () => {

        cy.login();
        cy.search_product();
        cy.add_item();

    });


});