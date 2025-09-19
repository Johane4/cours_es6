# ES6 - Rappel rapide

## Variables
- `let` : variable modifiable (portée bloc)  
- `const` : constante (portée bloc)  
- `var` : ancien, à éviter  

## Fonctions
- **Fléchées** : `const f = (a, b) => a + b`  
- **Paramètres par défaut** : `function f(x = 1) {}`  

## Chaînes
- **Template literals** : `` `Bonjour ${nom}` ``  

## Déstructuration
- Objets : `const {a, b} = obj`  
- Tableaux : `const [x, y] = arr`  

## Spread / Rest
- Spread : `[...arr]` ou `{...obj}`  
- Rest : `function f(...args) {}`  

## Modules
- Export : `export const x = 1`  
- Import : `import {x} from './fichier.js'`  

## Classes
```js
class A {
  constructor(n) { this.n = n }
  function() { console.log(this.n) }
}
