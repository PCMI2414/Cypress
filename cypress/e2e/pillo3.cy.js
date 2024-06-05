describe('Consulta y accion btn de pago', () => {
    let tokenUrl

    beforeEach(() => {
        // Datos del body de la solicitud
        const requestBodyToken = {
            "key":"72c002dc-d42e-4765-9e51-807ce3422cd8",
            "clientIdentifier": "168472099",
            "tradeIdentifier": "714",
            "url": "www.google.cl",
            "source": "WEB",
            "purchase": 0,
            "amount": 200,
            "orderNum": "INP123"
        };

        
        cy.request({
            method: 'POST',
            url: 'https://apipagocardonfile-qa.retailcard.cl/api-btp3/botonpago/api/v1/payment/init',
            headers: {
                "PG_OPERATION": "INIT_PURCHASE",
                "PG_PROVIDER": "BOTONDEPAGO",
                "PG_CHANNEL": "WEB"
            },
            body: requestBodyToken
        }).then((response) => {
            Cypress.log(response)    
            expect(response.status).to.eq(200);
            tokenUrl = response.body.urlWithToken;
            console.log(tokenUrl);
        });

        
    });

    it('Ingresa a URL con token y se validan componentes', () => {
        expect(tokenUrl).to.exist;
        //expect(tokenUrl.pid).to.eq("196419");

        cy.visit(tokenUrl);
    });
});