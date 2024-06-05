class clientsPage {
    elements = {
        valNroContrato: ()=> cy.get('.tarjeta > .ng-star-inserted'),
        passInput: ()=> cy.get('.pos-r > .form-control'),
        loginBtn: ()=> cy.get('.card-footer > .btn'),
        clientInput: ()=> cy.get('#namanyay-search-box'),
        clientBtn: ()=> cy.get('#namanyay-search-btn')
    }

    nroContract() {
        this.elements.valNroContrato.invoke("text")
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

export const newClientsPage = new clientsPage;