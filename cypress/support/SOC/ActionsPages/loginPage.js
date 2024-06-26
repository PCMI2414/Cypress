require('@cypress/xpath')
class loginPage {
    
    // objetos propios de la pagina
    elements = {
        userInput: ()=> cy.xpath('//input[contains(@formcontrolname,"user")]'),
        passInput: ()=> cy.xpath('//input[contains(@formcontrolname,"pass")]'),
        loginBtn: ()=> cy.xpath('//button[@type="submit"]'),
        clientInput: ()=> cy.get('#namanyay-search-box'),
        clientBtn: ()=> cy.get('#namanyay-search-btn')
    }

    // acciones sobre los objetos
    enterUsr(type) {
        this.elements.userInput().should("be.visible").type(type)
    }
    enterPass(type) {
        this.elements.passInput().should("be.visible").type(type)
    }
    submitLogin() {
        this.elements.loginBtn().should("be.visible").click()
    }
    enterClient(type) {
        this.elements.clientInput().type(type)
    }
    submitClient() {
        this.elements.clientBtn().click()
    }
}

export const newLoginPage = new loginPage;