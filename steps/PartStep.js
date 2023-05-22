require('@cypress/xpath');
import FormPage from '../pages/FormPage';

const formPage = new FormPage();

class PartStep {
     AddPart(data) {
          //Assertion page d'authentification
          cy.url().should('include', '/login')
          cy.get('a').click()
          //assertion url addUser
          cy.xpath('//input[@type="radio"][(@value="1")]').click()

          cy.wait(10000)
          formPage.getNom().type(data.nom)
          formPage.getPrenom().type(data.prenom)
          formPage.getDateNaissance().type(data.dateNaissance)
          formPage.getAdresse().type(data.adresse)
          formPage.getPays().select(data.pays)
          formPage.getVille().select(data.ville)
          formPage.getCodePostal().type(data.codePostal)
          //passport un autre selector!
          cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(4) > :nth-child(2) > .form-group > .form-control').type(data.passport)
          formPage.getCin().type(data.cin)
          const part = `${Date.now()}${data.username}`
          data.username = part
          formPage.getUsername().type(part)
          formPage.getPhone().type(data.tel)
          //password un autre selector !!
          cy.get('.form-group > div > #user_password').type(data.password)
          formPage.getConfirmPassword().type(data.confirmPassword)

               //Ne pas remplir 3 Champs spécifiques Particulier - Non Obligatoires
               //nom, prenom et date de naissance du conjoint

          
          cy.get('form.ng-dirty > :nth-child(2) > .btn').click()
               

          //assertion : page login
          cy.url().should('include', '/login')
          

          return data


     }
}


export default PartStep
require('@cypress/xpath')
