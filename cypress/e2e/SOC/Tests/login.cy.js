/*import { login } from "../support/POM/login.page"; /* opcion 1 */

const {newLoginObjects} = require ('../../../support/SOC/ObjectsPages/loginObjs.js')
const {newLoginPage} = require ('../../../support/SOC/ActionsPages/loginPage.js')
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
    })
    
    
})
