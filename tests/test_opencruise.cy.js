
import LoginStep from '../steps/LoginStep'
import HomeStep from '../steps/HomeStep'
import UserAdminStep from '../steps/UserAdminStep'
import ProAdminStep from '../steps/ProAdminStep'
import PartStep from '../steps/PartStep'


describe("OpenCruise", () => {

  beforeEach(() => {
    //cy.visit(Cypress.env("baseUrl")) 
    cy.visit('/')     //environnement ok
    cy.request(Cypress.env('baseUrl'))

  })

  /*it("TC01-CONNEXION VALIDE AVEC USER ADMIN", () => {
    //Assertion Etant sur page login
    cy.url().should('include', '/login')
    // SE CONNECTER 
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("ADMIN TEST")
    cy.screenshot("ConValide_userAdmin")
    // ME DECONECTER ADMIN
    homeStep.disconnect()

  })

  it("TC02-CONNEXION VALIDE AVEC PARTICULIER", () => {
    // SE CONNECTER
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("user"), Cypress.env("userpass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("OPEN Cruise")
    cy.screenshot("user_ConectValid")

  })

  it("TC03-CONNEXION INVALIDE ADMIN", () => {
    // SE CONNECTER
    const loginStep = new LoginStep()
    loginStep.setLogin("xxxxxxx@xxxx.com", "yyyyyyyY6666")
    loginStep.checkError("mot de passe ou identifiant invalide")
    cy.screenshot("admin_Connectinvalid")


  })

  it("TC04-SOUSCRIRE UN COMPTE PARTICULIER par Admin", () => {
    // SE CONNECTER
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("ADMIN TEST")

    // AUTRES ETAPES
    homeStep.navigateToAdmin()
    const userAdmin = new UserAdminStep()
    cy.fixture('part.json', 'utf8').as('particulier')
    cy.get('@particulier').then((data) => {
      data = userAdmin.createPart(data)
      cy.writeFile("cypress/fixtures/partAdmin.json", JSON.stringify(data, null, 2), 'utf8')

      // SE DECONECTER ADMIN
      homeStep.disconnect({ timeout: 30000 })

      //Se CONNECTER AVEC NOUVEAU COMPTE
      loginStep.setLogin(data.username, data.password)

      //assertion : connexion réussie
      cy.get('#dropdownMenu2').should('contain', data.nom + " " + data.prenom)
      cy.screenshot("part_conectRéussie")

      // SE DECONECTER Compte particulier
      homeStep.disconnect({ timeout: 30000 })

    })
  })

  it("TC05-SOUSCRIRE UN COMPTE PROFESSIONNEL par Admin", () => {
    // SE CONNECTER -> admin
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("ADMIN TEST")

    // AUTRES ETAPES
    homeStep.navigateToAdmin()
    const proAdmin = new ProAdminStep()
    cy.fixture('pro.json', 'utf8').as('professionnel')
    cy.get('@professionnel').then((data) => {
      data = proAdmin.createPro(data)
      cy.writeFile("cypress/fixtures/proAdmin.json", JSON.stringify(data, null, 2), 'utf8')

      // SE DECONECTER ADMIN
      homeStep.disconnect({ timeout: 30000 })

      //Se CONNECTER AVEC NOUVEAU COMPTE pro
      loginStep.setLogin(data.username, data.password)

      //assertion : connexion réussie pro
      cy.get('#dropdownMenu2').should('contain', data.nom + " " + data.prenom)
      cy.screenshot("pro_conectRéussie")

      // SE DECONECTER Compte professionnel
      homeStep.disconnect({ timeout: 30000 })

    })

  })

  it("TC06-INSCRIPTION PARTICULIER-VERIFIER COMPTE BLOQUE-ACTIVATION", () => {
    //TC06-01- INSCRIPTION UN NOUVEAU COMPTE PAR PARTICULIER
    //SOUSCRIPTION USER PARTICULIER
    const loginStep = new LoginStep()
    const addPart = new PartStep()
    const homeStep = new HomeStep()

    cy.fixture('part.json', 'utf8').as('part')
    cy.get('@part').then((data) => {
      data = addPart.AddPart(data)
      cy.writeFile("cypress/fixtures/partAdmin.json", JSON.stringify(data, null, 2), 'utf8')
      cy.url().should('include', 'login')
      //TC06-02- VERIFIER COMPTE BLOQUE
      //Se CONNECTER AVEC NOUVEAU COMPTE
      loginStep.setLogin(data.username, data.password)
      // VERIFIER COMPTE BLOQUE
      loginStep.checkError("votre compte est bloqué")
      cy.screenshot("Part_comptebloqué")
      cy.reload()
      //TC06-03- ACTIVATION COMPTE BLOQUE-PAR ADMIN
      // SE CONNCTER AVEC COMPTE ADMIN VALIDE
      loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"))
      // ACTIVATION NOUVEAU COMPTE
      homeStep.checkUsername("ADMIN TEST")
      homeStep.listeCompte()
      cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(),"Approuver")]`).click({ timeout: 60000 })

      cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(),"Bloquer")]`).should('contain', 'Bloquer')
      //cy.xpath(`//tr[contains(.,'${data.username}')]//*[contains(text(),"Bloquer")]`).should('be.visible', { timeout: 60000 })
      //SE DECONNECTER COMPTE ADMIN
      homeStep.disconnect()
      //TC06-04-SE CONNECTER DE NOUVEAU AVEC COMPTE activé 
      loginStep.setLogin(data.username, data.password)
      // VERIFIER COMPTE ACTIVE - connexion réussie
      homeStep.checkUsername(data.nom + " " + data.prenom)
      cy.screenshot("userConect_Active")
      // SE DECONNECTER 
      homeStep.disconnect()

    })

  })

*/
  it("TC07-Vérifier invalids feedback-Form-Pro", () => {
    // SE CONNECTER -> admin
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("ADMIN TEST")

    cy.xpath('//*[@id="adminConfig"]').click()
    cy.xpath('//a[@routerlink="/admin/utilisateur"]').click()
    cy.xpath('//a[@routerlink="/admin/addUser"]').click()
    cy.get(':nth-child(5) > .btn').click()
    cy.wait(1000)

  cy.screenshot()
  cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir votre prénom")]').should('be.visible')
  cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir votre nom")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir votre date de naissance")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir la ville")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir le code postal")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir le numéro de passeport")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir le Numéro de votre carte d’identité")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir votre email")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "merci de saisir votre numéro de téléphone")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "Merci de saisir votre mot de passe")]').should('be.visible')
   cy.xpath('//div[@class="ng-star-inserted"][contains(., "Merci de confirmer votre mot de passe")]').should('be.visible')
    
    //champs spécifiques pro les invalids feedback doivent exister!
    cy.xpath('//div[@class="ng-star-inserted"][contains(.,"Merci d’indiquer la raison sociale")]').should('not.exist')
    cy.xpath('//div[@class="ng-star-inserted"][contains(.,"Merci d’indiquer le n° de SIRET")]').should('not.exist')
    cy.xpath('//div[@class="ng-star-inserted"][contains(.,"Merci d’indiquer le nombre de salariés")]').should('not.exist')
   
    // SE DECONECTER ADMIN
    homeStep.disconnect({ timeout: 30000 })



  })




})   //fin describe



/*********************************************************************/

/*  Environement ko  : A retravailler - code audessous à    
             optimiser et l'intégrer dans test_opencruise    

/******************************************************************* */

describe("OpenCruise_KO", () => {

  beforeEach(() => {
    cy.visit(Cypress.env("baseUrl"))


  })

  it("TC010-CONNEXION VALIDE AVEC ADMIN -env ko", () => {
    //Assertion Etant sur page login
    cy.url().should('include', '/login')
    // SE CONNECTER 
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin2"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("admin2 admin2")  //Bienvenue Nom Prenom admin
    cy.screenshot("imgko1")
    // ME DECONECTER ADMIN
    homeStep.disconnect()

  })

  it("TC011-SOUSCRIRE UN COMPTE PARTICULIER par Admin env ko", () => {
    // SE CONNECTER
    const loginStep = new LoginStep()
    loginStep.setLogin(Cypress.env("admin2"), Cypress.env("pass"))
    const homeStep = new HomeStep()
    homeStep.checkUsername("admin2 admin2")

    // AUTRES ETAPES
    homeStep.navigateToAdmin()
    const userAdmin = new UserAdminStep()
    cy.fixture('part.json', 'utf8').as('particulier')
    cy.get('@particulier').then((data) => {
      data = userAdmin.createPart(data)
      cy.writeFile("cypress/fixtures/partAdmin.json", JSON.stringify(data, null, 2), 'utf8')

      cy.screenshot("imgko2")

      // SE DECONECTER ADMIN
      homeStep.disconnect({ timeout: 60000 })

      //Se CONNECTER AVEC NOUVEAU COMPTE
      loginStep.setLogin(data.username, data.password)

      //assertion : connexion réussie
      cy.get('#dropdownMenu2').should('contain', data.nom + " " + data.prenom)

      cy.screenshot("imgko3")
      // SE DECONECTER Compte particulier
      homeStep.disconnect({ timeout: 60000 })

    })
  })





})  //fin describe







