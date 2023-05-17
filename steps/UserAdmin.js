require('@cypress/xpath')
class UserAdminStep {
    createPart(data) {
       
cy.xpath('//*[@id="adminConfig"]').click()
cy.xpath('//a[@routerlink="/admin/utilisateur"]').click()
cy.xpath('//a[@routerlink="/admin/addUser"]').click()

//radio button : particulier
cy.xpath('//input[@type="radio"][(@value="'+ data.type +'")]').click()

cy.wait(10000)

// NOM

cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(1) > .form-group > .form-control').type(data.nom)
   //cy.xpath(`//input[@formcontrolname="prenom"].type(data.nom)

//PRENOM
//cy.xpath('//input[@formcontrolname="nom"]').type(data.prenom)
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(2) > .form-control').type(data.prenom)


// DATE DE NAISSANCE
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(3) > .form-group > .form-control').type(data.dateNaissance)
//cy.xpath('//input[@formcontrolname="dateNaissance"]').type(data.dateNaissance)


//ADRESSE
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(3) > :nth-child(1) > .form-group > .form-control').type(data.adresse)
//cy.xpath('//input[@formcontrolname="adresse"]').type(data.adresse)

//PAYS
cy.get(':nth-child(3) > :nth-child(2) > .form-group > .custom-select').select(data.pays)
//cy.xpath(`//option[contains(.,"${data.pays}")]`).click()
//cy.xpath(`//div[@role="option" and contains(.,"${data.pays}")]`).click()
//cy.xpath('//label[text()="Pays"]/parent::div/following-sibling::div').click()

//VILLE
cy.get(':nth-child(3) > :nth-child(3) > .form-group > .custom-select').select(data.ville)


//CODE POSTAL
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(4) > :nth-child(1) > .form-group > .form-control').type(data.codePostal)
//cy.xpath('//input[@formcontrolname="codePostal"]').type(data.codePostal)

//PASSPORT
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(4) > :nth-child(2) > .form-group > .form-control').type(data.passport)
//cy.xpath('//input[@formcontrolname="passport"]').type(data.passport)

//CIN
cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-control').type(data.cin)
//cy.xpath('//input[@formcontrolname="cin"]').type(data.cin)

//EMAIL-USERNAME :  email généré à chaque fois on run le programme
const username=`${Date.now()}${data.username}`
data.username=username
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(5) > :nth-child(1) > .form-group > .form-control')
.type(username)
//cy.xpath('//input[@formcontrolname="username"]').type(`user${Date.now()}@test.com`)

//TELEPHONE
cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(5) > :nth-child(2) > .form-group > .form-control').type(data.tel)
//cy.xpath('//input[@formcontrolname="tel"]').type(data.tel)

//PASSWORD
cy.get(':nth-child(6) > :nth-child(1) > .form-group > #user_password').type(data.password)
//cy.xpath('//input[@formcontrolname="password"]').type(data.password)

//CONFIRMATION PASSWORD
cy.get(':nth-child(6) > :nth-child(2) > .form-group > #user_password_confirm').type(data.confirmPassword)
//cy.xpath('//input[@formcontrolname="confirmPassword"]').type(data.confirmPassword)

//NOM DU CONJOINT
cy.get('.row.ng-star-inserted > :nth-child(1) > .form-group > .form-control').type(data.nomConjoint)
//cy.xpath('//input[@formcontrolname="nomConjoint"]').type(data.nomConjoint)

// PRENOM DU CONJOINT
cy.get('.row.ng-star-inserted > :nth-child(2) > .form-group > .form-control').type(data.prenomConjoint)
//cy.xpath('//input[@formcontrolname="prenomConjoint"]').type(data.prenomConjoint)

//DATE DE NAISSANCE DU CONJOINT
cy.get('.row.ng-star-inserted > :nth-child(3) > .form-group > .form-control').type(data.dateNaissanceConjoint)
//cy.xpath('//input[@formcontrolname="dateNaissanceConjoint"]').type(data.dateNaissanceConjoint)

// Submit Form (valider)
cy.get(':nth-child(4) > .btn').click({timeout:10000})
cy.get('#adminConfig > .mat-icon').should('be.visible')
return data



    }
}



/************************************ */
   //continuer .....    
/************************************* */



export default UserAdminStep
require('@cypress/xpath')
