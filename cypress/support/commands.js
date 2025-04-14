// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { data } = require("ospath");

Cypress.Commands.add('signup', () => {

    //Verificar que a página inicial está visível com sucesso
    cy.contains('AutomationExercise').should('be.visible');

    //Clicar no botão 'Signup / Login'
    cy.contains('Signup / Login').click();

    //Verificar se 'New User Signup!' está visível
    cy.get('h2').contains('New User Signup!');

    //Inserir nome e endereço de e-mail
    cy.fixture('login.json').then((data) => {
        cy.get(data.elements["name"]).type(data.inputs["name"]);
        cy.get(data.elements["emailaddress"]).type(data.inputs["signup-email"]);

        //Clicar no botão 'Signup'
        cy.get('[data-qa="signup-button"]').click()

        //Verificar se na nova página o 'Enter Account Information' está visível
        cy.contains('Enter Account Information').should('be.visible');

        //Preencher campos de 'new user' usando seletores do 'Login JSON'
        cy.get('#id_gender1').click(); // Mr.
        cy.get(data.elements["password"]).type(data.inputs["password"]);
        cy.get('#days').select('1');
        cy.get('#months').select('January');
        cy.get('#years').select('2001');

        //clicando nos 2 checkboxs 'Sign up for out newsletter!' e 'Receive special offers from our partners!'
        cy.get('#newsletter').click();
        cy.get('#optin').click();

        //Preencher campos 'Address Information
        cy.get(data.elements["firstName"]).type(data.inputs["firstName"]);
        cy.get(data.elements["lastName"]).type(data.inputs["lastName"]);
        cy.get(data.elements["company"]).type(data.inputs["company"]);
        cy.get(data.elements["address1"]).type(data.inputs["address1"]);
        cy.get(data.elements["address2"]).type(data.inputs["address2"]);
        cy.get(data.elements["country"]).select(data.inputs["country"]);
        cy.get(data.elements["state"]).type(data.inputs["state"]);
        cy.get(data.elements["city"]).type(data.inputs["city"]);
        cy.get(data.elements["zipcode"]).type(data.inputs["zipcode"]);
        cy.get(data.elements["mobileNumber"]).type(data.inputs["mobileNumber"]);
        cy.get('[data-qa="create-account"]').click();

        // Verificar que 'ACCOUNT CREATED!' está visível
        cy.contains('Account Created!').should('be.visible');

        // Clicar no botão 'Continue'
        cy.get('a[data-qa="continue-button"]').click();

        // Verificar que 'Logged in as username' está visível
        cy.contains('Logged in as Fernandox').should('be.visible');

        // Clicar no botão 'Delete Account'
        cy.get('a[href="/delete_account"]').click();

        // Verificar que 'ACCOUNT DELETED!' está visível e clicar no botão 'Continue'
        cy.contains('Account Deleted!').should('be.visible');
        cy.get('a[data-qa="continue-button"]').click();
    });
});