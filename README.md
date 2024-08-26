## Nettoyage

Commencer par supprimer et dessinstaller toutes les références de Karma & Karam-Jasmine

## Installation JEST

* Installer : jest | jest-preset-angular | jest-preset-angular/setup-jest | @testing-library/jest-dom

* Créer un ficher setup.jest.ts à la racine du dossier src.

* Ajouter ensuite ces 2 lignes : import 'jest-preset-angular/setup-jest'; et  import '@testing-library/jest-dom';'

# Fichier angular.json
Supprimer toute l'entrée "test"

# Fichier tsconfig.spec.ts
* Dans "types* supprimer "Jasmine" et ajouter[ "jest", "node" ]
* Ajouter une nouvelle entrée : "file": ["src/setup.jest.ts"],

# HTTPCLIENT
Il faut importer dans les fichiers de test : HttpClientTestingModule et declarer dans providers du fichier de test du composant le nom du service
Le provider permet d'importer toutes les dépendances d'on l'application a besoin.
