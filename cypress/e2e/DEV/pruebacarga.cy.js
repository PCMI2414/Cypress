
require('@cypress/xpath')
require('cypress-plugin-tab')

describe ("prueba carga masiva", function() {
    before(() => {
        // entro a la pagina y me logueo
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should("eq","OrangeHRM")
        cy.wait(2000)
        cy.xpath('//input[@name="username"]').should("be.visible").type("Admin")
        cy.xpath('//input[@type="password"]').should("be.visible").type("admin123")
        cy.xpath('//button[@type="submit"]').click()
        cy.wait(1000)
        cy.xpath('//a[contains(.,"Admin")]').should("be.visible").click()
        cy.wait(2000)        
    })
    it ("Test uno Cargando desde Json", function() {
        cy.fixture("Excel_Json.json").then (testdata=> {
            testdata.forEach(datos => {
                // leo el json y lo vuelco a constantes 
                const nompaso=datos.nombrepaso
                const usuario=datos.usuario
                const pass1=datos.pass1
                const pass2=datos.pass2   
                // ejecuto el flujo de creacion usuario
                cy.xpath('//button[@class="oxd-button oxd-button--medium oxd-button--secondary"]').should("be.visible").click()   
                cy.wait(2000)
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div').click()
                cy.xpath('//div[@role="option"][contains(.,"Admin")]').click()
                cy.xpath('//input[@placeholder="Type for hints..."]').type(nompaso)
                cy.wait(3000)
                cy.xpath('//div[@role="option"][contains(.,"Ranga  Akunuri")]').click()
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div/div[1]').click()
                cy.xpath('//span[contains(.,"Enabled")]').click()
                cy.wait(500)
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input').type(usuario)
                cy.wait(3000)
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input').type(pass1).tab()
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[2]/div/div[2]/input').type(pass2)
                cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[3]/button[2]').click()
                cy.wait(7000)
            })
        })
    })
})