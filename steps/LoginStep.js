import LoginPage from '../pages/LoginPage';

const loginPage=new LoginPage();

class LoginStep {
    setLogin(username, password) {
        loginPage.getUserName().type(username)
        loginPage.getPassword().type(password)
        loginPage.getLogin().click()
    }
    checkError(message) {
        loginPage.getError().should('be.visible',message)
    }

}
export default LoginStep
