# Front-end JavaScript algorithm

## Instructions

Simplifier / refactoriser la fonction dans le fichier pricing.js

## Synthèse des étapes

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

**Etape 4** : Analyse des problèmes

1. **Variables globales** : `result` et `disc` ne sont pas déclarées avec `const` ou `let`.
2. **Bug fonctionnel** : La fonction ne prenait pas en compte le discount annuel pour le type 1.
3. **Code répétitif** : La fonction contient du code répétitif. le calcul `amount - 0.1 * amount` est répété 3 fois.
4. **Manque d'extensibilité** : Ajouter un nouveau type nécessite de dupliquer le code.

**Etape 5** : Refactorisation de la fonction

1. **Extraire le pattern commun** : Tous les types appliquent le même principe de calcul. Ils appliquent un discount annuel + un discount de base.
2. **Utiliser un mapping** : Remplacer les `if`/`else` par un objet de configuration.
3. **Simplifier la formule** :
   ```javascript
   result = (amount - (x * amount)) - disc * (amount - (x * amount))
          = x - disc * x
          = x * (1 - disc)
   ```
   On peut donc simplifier la formule de la manière suivante :
   ```javascript
   result = amount * (1 - baseDiscountRate) * (1 - yearDiscount);
   ```
4. **Améliorer la lisibilité** : Nommer les variables de manière explicite.

## Bénéfices de la refactorisation

1. **Clarté du code** : Le code est plus facile à comprendre avec des noms de variables explicites.
2. **Extensibilité** : Ajouter un nouveau type nécessite de modifier uniquement le mapping.
3. **Fiabilité** : La fonction est testée et ne contient plus de bug.
4. **Don't Repeat Yourself (DRY)** : Le code est plus court et ne contient plus de duplication.
5. **Maintenabilité** : Le code est plus facile à maintenir avec des variables locales et une logique claire.
