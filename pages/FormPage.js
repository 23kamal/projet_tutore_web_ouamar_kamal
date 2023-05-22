require('@cypress/xpath');

class FormPage {

    getNom() {
        return cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > .signup-form > .container > .pt-4 > :nth-child(1) > .form-group > .form-control')
    }

    getPrenom() {
        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(2) > .form-control')
    }

    getDateNaissance() {
        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(3) > .form-group > .form-control')
    }
    getAdresse() {
        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(3) > :nth-child(1) > .form-group > .form-control')
    }
    getPays() {
        return cy.get(':nth-child(3) > :nth-child(2) > .form-group > .custom-select')
    }


    getVille() {
        return cy.get(':nth-child(3) > :nth-child(3) > .form-group > .custom-select')
    }


    getCodePostal() {
        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(4) > :nth-child(1) > .form-group > .form-control')
    }


    getPassport() {
        return cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > .signup-form > .container > :nth-child(4) > :nth-child(2) > .form-group > .form-control')
    }


    getCin() {
        return cy.get(':nth-child(4) > :nth-child(3) > .form-group > .form-control')
    }


    getUsername() {

        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(5) > :nth-child(1) > .form-group > .form-control')
    }

    getPhone() {
        return cy.get('.ng-invalid.ng-dirty > .signup-form > .container > :nth-child(5) > :nth-child(2) > .form-group > .form-control')
    }


    getPassword() {
        return cy.get(':nth-child(6) > :nth-child(1) > .form-group > #user_password') 
        
    }

    getConfirmPassword() {
        return cy.get(':nth-child(6) > :nth-child(2) > .form-group > #user_password_confirm')
    }    
    

}

export default FormPage
require('@cypress/xpath')
