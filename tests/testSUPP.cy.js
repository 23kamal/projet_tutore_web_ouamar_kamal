
require('@cypress/xpath');
describe('test description', () => {
   
beforeEach(() => {
    cy.visit('https://opencruise-ok.sogeti-center.cloud/login')
})

it("test random", () => {

cy.xpath('//input[@formcontrolname="username"]').type(`user${Date.now()}@test.com`)



})
})