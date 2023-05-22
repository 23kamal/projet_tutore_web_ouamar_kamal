import HomePage from '../pages/HomePage';

const homePage = new HomePage();


class HomeStep {
    checkUsername(texte) {
        homePage.getUserName().should('contain.text', texte)
    }

    navigateToAdmin() {

        homePage.getAdmin().should('contain', 'ADMIN TEST')

    }

    disconnect() {
        
        cy.get("#dropdownMenu2").click()
        cy.get("div.dropdown > div > button").click({force:true},{timeout:20000})
        cy.get('p').should('be.visible', 'Renseignez vos identifiants pour accéder à votre compte')
            
    }

    nouveauCompte(){
        cy.xpath('//*[@id="adminConfig"]').click()
        cy.xpath('//a[@routerlink="/admin/utilisateur"]').click()
        cy.xpath('//a[@routerlink="/admin/addUser"]').click()

    }
    
    listeCompte(){
        cy.xpath('//*[@id="adminConfig"]').click()
        cy.xpath('//a[@routerlink="/admin/utilisateur"]').click()
        cy.xpath('//a[@routerlink="/admin/userList"]').click()

    }

}
export default HomeStep
require('@cypress/xpath')
