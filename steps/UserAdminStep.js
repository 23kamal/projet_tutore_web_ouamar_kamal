require('@cypress/xpath');
import FormPage from '../pages/FormPage';

const formPage = new FormPage();

class UserAdminStep {
     createPart(data) {
          //administrateur : Setting --> Utilisateurs --> nouveau compte    
          cy.xpath('//*[@id="adminConfig"]').click()
          cy.xpath('//a[@routerlink="/admin/utilisateur"]').click()
          cy.xpath('//a[@routerlink="/admin/addUser"]').click()
          //assertion url addUser
          cy.url().should('include', '/addUser')
          cy.wait(5000)
          cy.xpath('//input[@type="radio"][(@value="' + data.type + '")]').click()
          cy.wait(10000)
          formPage.getNom().type(data.nom)
          formPage.getPrenom().type(data.prenom)
          formPage.getDateNaissance().type(data.dateNaissance)
          formPage.getAdresse().type(data.adresse)
          formPage.getPays().select(data.pays)
          formPage.getVille().select(data.ville)
          formPage.getCodePostal().type(data.codePostal)
          formPage.getPassport().type(data.passport)
          formPage.getCin().type(data.cin)
          const userpart = `${Date.now()}${data.username}`
          data.username = userpart
          formPage.getUsername().type(userpart)
          formPage.getPhone().type(data.tel)
          formPage.getPassword().type(data.password)
          formPage.getConfirmPassword().type(data.confirmPassword)

          //champs spécifiques Particulier
          //NOM DU CONJOINT
          cy.get('.row.ng-star-inserted > :nth-child(1) > .form-group > .form-control').type(data.nomConjoint)

          // PRENOM DU CONJOINT
          cy.get('.row.ng-star-inserted > :nth-child(2) > .form-group > .form-control').type(data.prenomConjoint)

          //DATE DE NAISSANCE DU CONJOINT
          cy.get('.row.ng-star-inserted > :nth-child(3) > .form-group > .form-control').type(data.dateNaissanceConjoint)

          
          cy.get(':nth-child(4) > .btn').click()
          cy.screenshot()

          //assertion : page d'accueil
          cy.get('#adminConfig > .mat-icon').should('be.visible')
          cy.get(':nth-child(6) > .flag-icon').should('be.visible')

          return data


     }
}


export default UserAdminStep
require('@cypress/xpath')
