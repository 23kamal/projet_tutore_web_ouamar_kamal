## LES CAS DE TEST :

- TC01-CONNEXION VALIDE AVEC USER ADMIN : Se connecter avec des identifiants
  valides d'un compte Admin

  - Steps :
    •	Etant sur l’url de Login
    •	L’Admin renseigne les champs : username, pasaword avec des données valides
    et clique sur valider
    •	Connexion réussie en se dirigeant vers la page d’accueil de son profil
    •	Se déconnecter de son compte
- TC02-CONNEXION VALIDE AVEC PARTICULIER : Se connecter avec des identifiants valides d'un compte particulier.

  - Steps :
    •	Etant sur l’url de Login
    •	L’Admin renseigne les champs : username, pasaword avec des données valides
    et clique sur valider
    •	Connexion réussie en se dirigeant vers la page d’accueil de son profil
    •	Se déconnecter de son compte
- TC03-CONNEXION INVALIDE ADMIN : Se connecter avec des données invalides d'un
  compte Admin

  - Steps :
    •	Etant sur l’url de Login
    •	L’Admin renseigne les champs : username, pasaword avec des données valides
    et clique sur valider
    •	Connexion non aboutie et message d’erreur « mot de passe ou identifiant invalide »
- TC04- SOUSCRIRE UN COMPTE PARTICULIER par Admin : Souscrire un nouveau compte particulier par Admin
  et pouvoir se connecter avec ce nouveau compte

  - Steps :
    •	Etant sur l’url de Login : se connecter avec un compte admin valide
    •	Etant sur la page d’accueil d’admin connecté : renseigner les données correctes du particulieret en remplissant         	   tous les champs obligatoires
  - •	Valider en cliquant sur l’élément « créer un compte »
    •	Se déconnecter de son compte admin
    •	Se connecter avec le nouveau compte créé du particulier et connexion réussie
    •	Se déconnecter du compte particulier
- TC05-SOUSCRIRE UN COMPTE PROFESSIONNEL par Admin : Souscrire un nouveau compte Professionnel par Admin
  et pouvoir se connecter avec ce nouveau compte.

  - Steps :
    •	Etant sur l’url de Login : se connecter avec un compte admin valide
    •	Etant sur la page d’accueil d’admin connecté : renseigner les données correctes du professionnel et en remplissant   	tous les champs obligatoires
    •	Valider en cliquant sur l’élément « créer un compte »
    •	Se déconnecter de son compte admin
    •	Se connecter avec le nouveau compte créé du professionnel et connexion réussie
    •	Se déconnecter du compte professionnel
  - TC06- INSCRIPTION PARTICULIER-VERIFIER COMPTE BLOQUE-ACTIVATION (TC06-01;TC06-02;TC06-03)

    -Steps :

    o	TC06-01- INSCRIPTION UN NOUVEAU COMPTE PAR PARTICULIER : Inscrire un nouveau compte par un particulier :
    •	Etant sur la page d’accueil du formulaire d’admin connecté : renseigner les données correctes du particulier et en remplissant tous les champs obligatoires
    •	Valider en cliquant sur l’élément « créer un compte » en se dirigeant vers la page  login

    o	TC06-02- VERIFIER LE COMPTE BLOQUE
    •	Se connecter avec le nouveau compte créé du particulier et connexion non aboutie :
    Check error « votre compte est bloqué »

    o	TC06-03- ACTIVATION COMPTE BLOQUE PAR ADMIN
    •	 Se connecter avec compte admin valide
    •	 Activer le compte bloqué :

    - Cliquer sur l'élément Setting
    - Cliquer sur l'élément Utilisateurs
    - Cliquer sur l'élément lister les comptes
      •	Chercher le compte bloqué et cliquer sur l’élément « Approuvé » (‘A’)
      •	Se déconnecter du compte admin
    - TC06-4- SE CONNECTER DE NOUVEAU AVEC LE COMPTE ACTIVE
      •	Se connecter avec le compte activé en renseignant login, mot de passe et valider
      •	Connexion réussie en se dirigeant vers la page d’accueil de l’utilisateur connecté
      •	Se déconnecter de son compte**2- Rrecherche une croisière :**


| TEST_ID | TEST name                                                                                      | DESCRIPTION                                                                                                                                                         | TEST type                 | TEST Tag   | Prérequis                                                   | ASSERTIONS                                                                                                        |
| ------- | ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ---------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| TC01    | CONNEXION VALIDE AVEC USER ADMIN                                                               | Se connecter avec des identifiants valides d'un compte<br /> Admin                                                                                                  | TC positif                | smoke-test | identifiants admin valides                                   | page d'accueil admin connecté                                                                                    |
| TC02    | CONNEXION VALIDE AVEC PARTICULIER                                                              | Se connecter avec des identifiants valides d'un compte<br />particulier                                                                                             | TC positif                | smoke-test | identifiants particulier valides                             | page d'accueil particulier connecté                                                                              |
| TC03    | CONNEXION INVALIDE ADMIN                                                                       | Se connecter avec des données invalides d'un compte<br />Admin                                                                                                     | TC négatif               | smoke-test | données admi invalides                                      | check error " mot de passe ou identifiant invalide"                                                               |
| TC04    | SOUSCRIRE UN COMPTE PARTICULIER par Admin                                                      | Souscrire un nouveau compte particulier par Admin et<br /> pouvoir<br /> se connecter avec ce nouveau compte                                                        | TC positif                | smoke-test | données admi valides -<br />données valides particulier    | Connexion réussie par ce nouveau compté créé  -<br /> page d'accueil particilier connecté                    |
| TC05    | SOUSCRIRE UN COMPTE PROFESSIONNEL par Admin                                                    | Souscrire un nouveau compte professionnel par<br />Admin et <br />pouvoir <br />se connecter avec ce nouveau compte                                                 | TC positif                | smoke-test | données admi valides -<br /> données valides professionnel | Connexion réussie par ce nouveau compté<br />créé  - page d'accueil professionnel connecté                  |
| TC06    | INSCRIPTION PARTICULIER-VERIFIER COMPTE<br />BLOQUE-ACTIVATION<br /> (TC06-01;TC06-02;TC06-03) | Inscrire un nouveau compte par un particulier, vérifier<br /> le compte <br />bloqué et activer le compte bloqué par Admin pour <br />pouvoir <br />se connceter | TC positif<br />/négatif | smoke-test | données admi valides -<br /> données valides particulier   | A chaque sous cas de test de TC06 effectuer<br /> une assertion sur l'action ou l'étape en question             |
| TC06-01 | INSCRIPTION UN NOUVEAU COMPTE PAR<br />PARTICULIER                                             | Souscrire un compte user par un particulier                                                                                                                         | TC positif                | smoke-test | données valides particulier-<br />compte créé             | retour à la page d'authentification après avoir<br />créer le compte par un particulier                        |
| TC06-02 | VERIFIER LE COMPTE BLOQUE                                                                      | Vérifier le compte bloqué du particulier lors de sa<br />connexion                                                                                                | TC négatif               | smoke-test | données valides du particulier                              | check erro "votre compte est bloqué"                                                                             |
| TC06-03 | ACTIVATION COMPTE BLOQUE PAR ADMIN                                                             | Se connecter avec données valides admin et activer le<br />compte <br />bloqué du particulier                                                                     | TC positif                | smoke-test | données valides admin                                       | assertion sur l'activation du compte -<br />passage de username de l'état "approuver" <br />à l'état "Bloquer" |
| TC06-04 | SE CONNECTER DE NOUVEAU AVEC<br />LE COMPTE  ACTIVE                                            | Se connecter  de nouveau avec le compte activé                                                                                                                     | TC positif                | smoke-test | données valides particulier                                 | page d'accueil particulier connecté                                                                              |
