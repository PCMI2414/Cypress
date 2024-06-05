describe('prueba servicios', function() {
    let tokenUrl= ""

    const requestBodyToken = 
    {
        "username": "mcoliqueo.ext",
        "password": "Lider2034"
    };

    it("atao", function() {
        cy.request(
            {
                method: "POST",
                url: "https://micro-qa-onpremise.retailcard.cl/ssff-micro-ldap/api/auth",
                body: requestBodyToken
            }).then((response) => {
                expect(response.status).to.eq(200)
            })
            
    })
})




