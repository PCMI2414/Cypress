require('@cypress/xpath')

describe('Consulta y acción btn de pago', () => {
  // Carga los datos de prueba una sola vez antes de todas las pruebas
  before(function () {
    cy.fixture("data").as('testdata')
  });

  // Usa context para crear dinámicamente un conjunto de pruebas para cada usuario
  beforeEach(function () {
    this.testdata.forEach((datos, index) => {
      context('Prueba para el usuario ${index + 1} - ${datos.rut}', () => {
        let tokenUrl = ""
        cy.log(datos.rut)
        cy.log(datos.monto);
        it('Genera token y visita la URL con token', function () {
            const requestBodyToken = {
            "key": "72c002dc-d42e-4765-9e51-807ce3422cd8",
            "clientIdentifier": datos.rut,
            "tradeIdentifier": "714",
            "url": "www.google.cl",
            "source": "WEB",
            "purchase": 0,
            "amount": datos.monto,
            "orderNum": "INP123"
          };
          cy.log(datos.rut)
          cy.log(datos.monto)
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
            expect(response.status).to.eq(200);
            tokenUrl = response.body.urlWithToken;
          });

          cy.log("body rut: ", requestBodyToken.clientIdentifier);
          cy.log("body monto: ", requestBodyToken.amount);

          // Visita la URL con el token después de generarlo
          cy.visit(tokenUrl);
          cy.wait(5000);
        });

        it('Realiza acciones en la página de pago', function () {
          // Asegúrate de que tokenUrl esté disponible
          expect(tokenUrl).to.not.be.empty;

          // Acciones en la página de pago
          cy.xpath('//h4[contains(.,"Pago en línea")]').should("be.visible");
          cy.xpath('//input[@formcontrolname="expirationDate"]').type(datos.fecVenc);
          cy.xpath('//input[@formcontrolname="cvv"]').type(datos.cvv);
          cy.xpath('//select[@formcontrolname="installment"]').select("2");
          cy.xpath('//input[@formcontrolname="pin"]').type(datos.pin);
          cy.screenshot();
          cy.wait(1000);
          cy.xpath('//button[@class="btn-lider btn-lider-primary"]').should("be.enabled").click();
          cy.wait(10000);
          cy.screenshot();
          cy.clearAllSessionStorage({ log: true });
        });
      });
    });
  });
  it("caca", function() {
    cy.log("caca: ", datos.rut, datos.monto)
  })
});
