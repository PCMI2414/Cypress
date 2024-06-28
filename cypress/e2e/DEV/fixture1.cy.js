/// <reference types="Cypress"  />

require('@cypress/xpath')
require('cypress-plugin-tab')

describe("Carga por Fixture", () =>{
    it("Test uno Cargando desde Json", function() {
        

        /* cy.fixture("Excel_Json").then( tesdata =>{
            tesdata.forEach(data => {
                const d_nombre=data.nombre
                const d_email=data.email
                const d_dir1=data.dir1
                const d_dir2=data.dir2

                cy.log(d_nombre, d_dir1, d_dir2)*/

        cy.visit("https://demoqa.com/text-box")
                //cy.title().should('eq','ToolsQA')
        cy.wait(500)
        })
})
