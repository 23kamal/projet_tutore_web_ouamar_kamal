
import LoginStep from '../steps/LoginStep'
import HomeStep from '../steps/HomeStep'
//import UserAdmin from '../steps/UserAdmin'


describe("openCruise", () => {

  beforeEach(() => {
    cy.viewport(1055, 924)
    cy.visit("https://opencruise-ok.sogeti-center.cloud/")      //envireonnement OK
  })


  it("Connextion valide with User Admin", () => {
    // SE CONNECTER 
    const loginStep = new LoginStep()
    loginStep.setLogin("admin@test.com", "Sogeti33")
    const homeStep = new HomeStep()
    homeStep.checkUsername("ADMIN TEST")
	// ME DECONECTER ADMIN
    homeStep.disconnect()

   })

  it("Connexion invalide", () => {
    // SE CONNECTER
    const loginStep = new LoginStep()
    loginStep.setLogin("xxxxxxxxxx", "yyyyyyyyyy")
    loginStep.checkError("mot de passe ou identifiant invalide")


  })
    
  it("Souscrire un compte particulier", () => {
    // SE CONNECTER
   const loginStep = new LoginStep()
   loginStep.setLogin("admin@test.com", "Sogeti33")
   const homeStep = new HomeStep()
   homeStep.checkUsername("ADMIN TEST")
   
    // Other Steps
    homeStep.navigateToAdmin()
    const userAdmin = new UserAdmin()
    cy.fixture('part.json', 'utf8').as('particulier')
    cy.get('@particulier').then((data) => {
    data = userAdmin.createPart(data)
    
    




  })



})  })
