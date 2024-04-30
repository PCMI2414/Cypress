class clientsObjPage {
    elements = {
        cardImage: ()=> cy.get('.tarjeta > .ng-star-inserted'),
        tpoTar: ()=> cy.get('.datos-tarjeta > :nth-child(1)'),
        nroTar: ()=> cy.get(':nth-child(2) > span'),
        nroContrato: ()=> cy.get('.dato.ng-star-inserted > span'),
        btnAdicional: ()=> cy.get('.link > a')
    }

    valNroContrato() {
        this.elements.nroContrato().should("be.visible")
    }
    
}

export const newClientsObjPage = new clientsObjPage;