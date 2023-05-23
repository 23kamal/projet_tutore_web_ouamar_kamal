## l'automatisation :

- se baser sur une automatisation structurée de nos tests
- créer des variables d'environnement

  - environnement OK
  - environnement ko
  - fichier config.js et fichier package.json  : mettre en place des paramètres
- Vue que l'application nécéssite d'abord un compte pour pouvoir effectuer des actions (activités: rechercher croisière, réserver , panier...) et vue qu'il y a des formulaires
- contenant beaucoup de champs : on a créé des données dans des fichiers json pour chaque type de user

  - pour effecturer le test et répéter le runner plusieurs fois et éviter que ça ne bloquera en testant la connexion par le message qui ne dit que le compte déja existant
    on a générer les données de façon automatiques et surtout le "Username" qui va être généré à chaque exécution"
- Pages : contenat des objets  qui vont renvoyer des éléments par un constructeur lorsqu'elles sont appelées par des fonctions situants dans "steps" qui expliquent  des actions à effectuer
  via le constructeur (dans pages)
- pour la clareté :créer une page pour formulaire car il est utilisé par plusieurs users qui vont être dans steps avec des actions et qui font appel aux constructeurs (pages)

  TEST Cases : exemples

  - TC01-CONNEXION VALIDE AVEC USER ADMIN

  ```
  //Assertion Etant sur page login
  cy.url().should('include', '/login');
  // SE CONNECTER 
  const loginStep = new _LoginStep.default();
  loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"));
  const homeStep = new _HomeStep.default();
  homeStep.checkUsername(Cypress.env("welcome")); //Bienvenue Nom Prenom admin
  cy.screenshot("ConValide_userAdmin");
  // ME DECONECTER ADMIN
  homeStep.disconnect();
  ```


    - TC04-SOUSCRIRE UN COMPTE PARTICULIER par Admin

```
// SE CONNECTER
const loginStep = new _LoginStep.default();
loginStep.setLogin(Cypress.env("admin"), Cypress.env("pass"));
const homeStep = new _HomeStep.default();
homeStep.checkUsername(Cypress.env("welcome"));
// AUTRES ETAPES
homeStep.navigateToAdmin();
const userAdmin = new _UserAdminStep.default();
cy.fixture('part.json', 'utf8').as('particulier');
cy.get('@particulier').then(data => {
  data = userAdmin.createPart(data);
  cy.writeFile("cypress/fixtures/partAdmin.json", JSON.stringify(data, null, 2), 'utf8');
  // SE DECONECTER ADMIN
  homeStep.disconnect({
    timeout: 30000
  });
  //Se CONNECTER AVEC NOUVEAU COMPTE
  loginStep.setLogin(data.username, data.password);
  //assertion : connexion réussie
  cy.get('#dropdownMenu2').should('contain', data.nom + " " + data.prenom);
  cy.screenshot("part_conectRéussie");
  // SE DECONECTER Compte particulier
  homeStep.disconnect({
    timeout: 30000
  });
});
```
