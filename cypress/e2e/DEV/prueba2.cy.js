/*import { login } from "../support/POM/login.page"; /* opcion 1 */

let nroContract
const {newClientsObjPage} = require ('../../support/SOC/ObjectsPages/clientsObjs.js')
const {newClientsPage} = require ('../../support/SOC/ActionsPages/clientsPage.js')
const {baseUrl,consCliUrl,cliUrl} = Cypress.env('endpoint')
const {usr,pass} = Cypress.env('loginSoc')
const {din} = Cypress.env('clients')

describe("Flujo Login SOC", function() {
    it("ejecuta spec prueba 1", function() {
        cy.exec("npx cypress run --spec cypress/e2e/DEV/prueba1.cy.js")//.its("code").should("eq",0);
        //cy.visit('/cypress/e2e/DEV/prueba1.cy.js')
    })
    it("invoca spec1 y ejecuta spec2", function () {
        cy.log()
        /*newClientsPage.nroContract.then(nroContrato => {
            nroContract=nroContrato;*/
        /*cy.get('.tarjeta > .ng-star-inserted').invoke("text").then(texto => {
            nroContract = texto
        cy.log(nroContract)*/
        })
    })
    
