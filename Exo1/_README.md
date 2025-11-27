# Front-end JavaScript algorithm

## Instructions

Simplifier / refactoriser la fonction dans le fichier pricing.js

## Analyse des résultats

**Etape 1** : Exécuter le fichier pricing.js avec la commande `node pricing.js`
En sortie, on obtient le message d'erreur suivant :

```bash
100 is not equal to 99
```

On voit que la fonction ne retourne pas le résultat attendu.

**Etape 2** : Mettre en place une suite de tests un peu plus exhaustive dans le fichier pricing.test.js

Lors de la mise en place des tests, j'ai constaté que la fonction ne passait pas tous les tests. En effet, la fonction ne prenait pas en compte le discount annuel pour le type 1.
J'ai corrigé ce bug en appliquant la même logique à tous les types.

**Etape 3** : Exécuter les tests avec la commande `node pricing.test.js`

En sortie, on obtient le message suivant :

```bash
✓ All tests passed!
```

On voit que la fonction passe tous les tests.
