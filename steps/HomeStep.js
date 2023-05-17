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
        cy.xpath('//button[@id="dropdownMenu2"]').click()
        cy.xpath('//button[text()="Se déconnecter"]').scrollIntoView().click({timeout:20000}) 
        

        cy.get('h1').should('be.visible', 'Bienvenue sur nos croisières OPENCRUISE')
    }

}
export default HomeStep
