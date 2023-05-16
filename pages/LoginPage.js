class LoginPage {
    getUserName() {
        return cy.xpath('//input[@formcontrolname="username"]')
    }
    getPassword() {
        return cy.xpath('//input[@formcontrolname="password"]')
    }
    getLogin() {
        return cy.get("button")
    }
    getError() {
        return cy.get('.toast-error')
    }
}
export default LoginPage
require('@cypress/xpath')