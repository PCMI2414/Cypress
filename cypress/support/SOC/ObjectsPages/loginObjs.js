class loginObjects {
    elements = {
        userInput: ()=> cy.get('[form=""] > .form-control'),
        passInput: ()=> cy.get('.pos-r > .form-control'),
        loginBtn: ()=> cy.get('.card-footer > .btn'),
        clientInput: ()=> cy.get('#namanyay-search-box'),
        clientBtn: ()=> cy.get('#namanyay-search-btn')
    }

    valUsr() {
        this.elements.userInput().should("be.visible")
    }

    valPass() {
        this.elements.passInput().should("be.visible")
    }

    valSbmBtn() {
        this.elements.loginBtn().should("be.visible")
    }

    valClient() {
        this.elements.clientInput.should("be.visible")
    }

    valClientBtn() {
        this.elements.clientBtn.should("be.visible")
    }
}

export const newLoginObjects = new loginObjects;