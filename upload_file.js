/// <reference types='Cypress' />

import 'cypress-file-upload';

describe('Subir un archivo', () => {
    it('Subir archivo', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.title().should('eq','ToolsQA');
        cy.wait(1000);

        const ruta_img = 'birdman.jpg'
        cy.get('[type="file"]').attachFile(ruta_img);
        cy.wait(1000);
    })
})