class loginPage {
    
    // objetos propios de la pagina
    elements = {
        userInput: ()=> cy.get('[form=""] > .form-control'),
        passInput: ()=> cy.get('.pos-r > .form-control'),
        loginBtn: ()=> cy.get('.card-footer > .btn'),
        clientInput: ()=> cy.get('#namanyay-search-box'),
        clientBtn: ()=> cy.get('#namanyay-search-btn')
    }

    // acciones sobre los objetos
    enterUsr(type) {
        this.elements.userInput().type(type)
    }
    enterPass(type) {
        this.elements.passInput().type(type)
    }
    submitLogin() {
        this.elements.loginBtn().click()
    }
    enterClient(type) {
        this.elements.clientInput().type(type)
    }
    submitClient() {
        this.elements.clientBtn().click()
    }
}

export const newLoginPage = new loginPage;