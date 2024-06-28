require('@cypress/xpath')
describe('Consulta y accion btn de pago', () => {
    let tokenUrl=""
    beforeEach( function() {
        cy.fixture("data").then(testdata => {
            testdata.forEach(datos => {
                const rut=datos.rut
                const monto=datos.monto
                const requestBodyToken = 
                {
                    "key":"72c002dc-d42e-4765-9e51-807ce3422cd8",
                    "clientIdentifier": rut,
                    "tradeIdentifier": "714",
                    "url": "www.google.cl",
                    "source": "WEB",
                    "purchase": 0,
                    "amount": monto,
                    "orderNum": "INP123"
                }
                cy.log("antes del request: ", rut,monto)
            cy.request(
                {
                    method: 'POST',
                    url: 'https://apipagocardonfile-qa.retailcard.cl/api-btp3/botonpago/api/v1/payment/init',
                    headers:
                    {
                        "PG_OPERATION":"INIT_PURCHASE",
                        "PG_PROVIDER": "BOTONDEPAGO",
                        "PG_CHANNEL": "WEB"
                    },
                    body: requestBodyToken
                }
                ).then ((response) => {
                    expect(response.status).to.eq(200)
                    tokenUrl=response.body.urlWithToken
                })
            cy.log("tokenurl: ", tokenUrl)
            cy.log("body rut: ", requestBodyToken.clientIdentifier)
            cy.log("body monto: " , requestBodyToken.amount)
            })
        })
    })
    it('01 - Cliente Mastercard Titular Compra sin cuotas', function(){
        cy.visit(tokenUrl)
        cy.wait(5000)
        cy.fixture("data").then (testdata=> {
            testdata.forEach(data => {
                // leo el json y lo vuelco a constantes 
                const fecVenc=data.fecVenc
                const cvv=data.cvv
                const pin=data.pin
                cy.log(fecVenc, cvv, pin)
                cy.xpath('//h4[contains(.,"Pago en línea")]').should("be.visible")
                cy.xpath('//input[@formcontrolname="expirationDate"]').type(fecVenc)
                //cy.xpath('/html/body/app-root/app-layout/div/div[2]/div/app-pago/div/div/form/div/div[2]/input').
                //type(fecVenc)
                cy.xpath('//input[@formcontrolname="cvv"]').type(cvv)
                //cy.xpath('/html/body/app-root/app-layout/div/div[2]/div/app-pago/div/div/form/div/div[3]/div/input').
                //type(cvv)
                cy.xpath('//select[@formcontrolname="installment"]').select("2")
                //cy.xpath('/html/body/app-root/app-layout/div/div[2]/div/app-pago/div/div/form/div/div[4]/select').
                //select("1")
                cy.xpath('//input[@formcontrolname="pin"]').type(pin)
                //cy.xpath('/html/body/app-root/app-layout/div/div[2]/div/app-pago/div/div/form/div/div[5]/div/input').
                //type(pin)
                cy.screenshot()
                cy.wait(1000)
                cy.xpath('//button[@class="btn-lider btn-lider-primary"]').should("be.enabled").click()
                //cy.xpath('/html/body/app-root/app-layout/div/div[2]/div/app-pago/div/div/form/div/div[6]/button[1]').
                //click()
                cy.wait(10000)
                cy.screenshot() 
                cy.clearAllSessionStorage({log: true}) 
            })
        })
    })
})