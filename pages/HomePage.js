class HomePage {
    getUserName() {
        return cy.get('#dropdownMenu2')
    }

    getAdmin() {
        return cy.get('#dropdownMenu2')
    }

    getPart() {
        return cy.get('#dropdownMenu2')
    }

    getTitle() {
        return cy.get('p')
  
    }



}
export default HomePage
require('@cypress/xpath')

