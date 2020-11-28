# Challenge Dojo Escape Game

Bienvenu sur le défi Escape Game organisé par Theodo. Le but de ce challenge consiste à réaliser ton propre escape game en web 😯 ! Tu trouveras sur cette page toutes les informations nécéssaires pour le faire notamment les procédures d'installation du projet, comment le lancer en local sur ta machine et comment le déployer en production sur ton compte github 🥳 !

Afin de pouvoir réaliser ce défi sereinement, nous avons codé un exemple d'escape game tout simple dans ce repo. Reutiliser le code de l'exemple n'est pas obligatoire bien que ca pourrait s'avérer utile !

En ce qui concerne le thème et le type d'escape game, le choix est libre ! Nous avons juste défini une liste de critères et de fonctionnalités qui pourraient servir à convaincre notre jury de la qualité de ton escape game.

## Prérequis

Avant de commencer, tu as besoin de nodejs et npm, deux outils utilisés quasiment tout le temps à Theodo :

```bash
node --version
# v10+
```

```bash
npm --version
# 6+
```

[Si tu ne connais pas ces outils, tu peux suivre cette documentation NPM pour les installer sur ta machine](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Installation

### Creation du repo

Aller sur le repo dans ton github, copier le lien du repo, puis dans ton dossier de projets :

```bash
git clone https://github.com/anaisberg/dojo-escape-game.git
```
maintenant tu as récupéré le projet, tu peux aller dans le dossier

```bash
cd dojo-escape-game
```
### Développer

Pour développer sur le projet, il reste à installer les outils qui vont transpiler les sources placées dans [src][./src] en un site web pour travailler localement.

pour installer les outils nodejs, il suffit de faire:

```bash
npm install
```

Une fois les dépendances installées, pour servir le site web localement sur [http://localhost:1234](http://localhost:1234), il suffit alors de lancer:

```bash
npm start
```

### Publier une version

Avec l'integration netlify, il te suffit de pousser des changements sur la branche master de ton repo github pour deployer la nouvelle version.

```bash
git add .
git commit -m ':gitmoji adapté: fonctionnalité'
git push
```
## Structure

La page est un simple fichier HTML : `src/index.html`.

Le scenario de l'escape game est décris dans `src/index.js`. Il utilise le moteur du jeu dans `src/Game/` et l'interface `src/Interface/` pour expliciter le comportement du jeu.

## Critères

### Requis

🚨 Les fonctionnalités suivantes sont attendues et obligatoires pour atteindre un jeu minimal. Une partie d'entre elles ont déjà été developpées dans l'exemple fourni dans ce repo: 🚨

- Avoir une carte qui montre les possibilités de déplacement. Le joueur doit savoir dans quel 'pièce' il est sur la carte.
- Inventaire pour le joueur.
- Objets dans la salle. Le joueur doit pouvoir recuperer les objets de la salle pour les avoir dans son inventaire.
- Mouvements validés par des conditions. Ces conditions peuvent porter sur n'importe quel élément du jeu comme par exemple: la pièce dans laquelle le joueur est actuellement ou son inventaire actuel.
- Personnalisation du nom du joueur. Un joueur doit pouvoir entrer son nom en début de jeu pour le voir apparaitre au niveau du champ de texte.
- Le succès de l'escape game est defini et visualisé lors de la reussite

### Elements qui rapportent des points

Les fonctionnalités definies ci dessous améliorent l'experience de jeu 🎮 et ne sont pas obligatoires. Cependant, chaque fonctionnalité développée en plus sera très appréciée par nos joueurs 😎 !! (ETQJ = En tant que joueur 😀).

- ETQJ, je peux decouvrir des salles seulement sous certaines conditions
- ETQJ, je veux pouvoir voir des éléments rappelant le thème de l'escape game dans le background ⛱️
- ETQJ, je veux voir les noms des salles directement sur la carte
- ETQJ, je veux pouvoir jouer que avec mon clavier avec des instructions qui expliquent le role de chaque touche
- ETQJ, je peux recommencer la partie à tout moment en cliquant sur un bouton
- ETQJ, lorsque je refresh la page, je veux retrouver mon état du jeu tel que je l'ai laissé

NB: Les fonctionnalités _ne sont pas_ triées par ordre de difficulté 😜

### Evaluation Finale

Pour remporter le grand prix de ce défi 🥇, les escape game seront d'abord évalués sur l'experience de jeu et l'originalité du design et du scénario. La présence des fonctionnalités ci dessus seront alors pris en compte. Enfin, les meilleurs escape game seront soumis au vote par un jury de Theodoers experimentés.

### Ligne d'arrivée 🥅

Une fois terminé, tu peux nous envoyer ton jeu en mettant le lien Github de ton repo dans le channel Discord: #défi-accompli.
