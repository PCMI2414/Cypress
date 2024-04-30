/*import { login } from "../support/POM/login.page"; /* opcion 1 */

const {newLoginObjects} = require ('../../support/SOC/ObjectsPages/loginObjs')
const {newLoginPage} = require ('../../support/SOC/ActionsPages/loginPage')
const {baseUrl,consCliUrl,cliUrl} = Cypress.env('endpoint')
const {usr,pass} = Cypress.env('loginSoc')
const {din} = Cypress.env('clients')

describe("Flujo Login SOC", function() {
    beforeEach(function() {
        cy.session("Guarda Sesion", function() {
            cy.visit(baseUrl)
            cy.url().should("contain", baseUrl)
            newLoginObjects.valUsr
            newLoginObjects.valPass
            newLoginObjects.valSbmBtn
            //cy.wait(5000)
            newLoginPage.enterUsr(usr)
            newLoginPage.enterPass(pass)
            newLoginPage.submitLogin()
            cy.wait(5000)
        })        
    })
    it("Ejecuta Login SOC y Consulta Cliente", function() {
        cy.visit(consCliUrl)
        cy.url().should("contain", consCliUrl)
        newLoginObjects.valClient
        newLoginObjects.valClientBtn
        newLoginPage.enterClient(din)
        newLoginPage.submitClient()
        cy.wait(10000)
    })
    it("continua spec1, valida texto nro contrato", function () {
        cy.visit(cliUrl)
        cy.url().should("contain", cliUrl)
        /*newClientsPage.nroContract.then(nroContrato => {
            nroContract=nroContrato;*/
        /*cy.get('.tarjeta > .ng-star-inserted').invoke("text").then(texto => {
            nroContract = texto
        cy.log(nroContract)*/
    })
})
