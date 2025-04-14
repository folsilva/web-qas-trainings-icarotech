describe('Desafio Add Web', () => {

    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/');
    });

    it.only('Inserir novo cadastro', () => {

        cy.signup();

    });
});