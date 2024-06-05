class loginObjects {
    elements = {
        userInput: '//input[contains(@formcontrolname,"user")]',
        passInput: '//input[contains(@formcontrolname,"pass")]',
        loginBtn: '//button[@type="submit"]',
        clientInput: '//input[@id="namanyay-search-box"]',
        clientBtn: '//button[@id="namanyay-search-btn"]',
        campSms: '//a[@class="ng-star-inserted"][contains(.,"Campaña SMS")]',
        one: '//a[@class="ng-star-inserted"][contains(.,"One")]',
        sucur: '//a[@class="ng-star-inserted"][contains(.,"Sucursales")]',
        nvaConsulta: '//a[contains(.,"Nueva consulta")]',
        anulaSol: '//a[contains(.,"Anula solicitudes")]',
        solHist: '//a[contains(.,"Solicitud histórica")]',
        mantRoadmap: '//a[contains(.,"Mantenedor Roadmap")]',  

        
    }
}   
export const newLoginObjects = new loginObjects;