# Vuejs3

## Créer une application Vue (main.js):

```
const app = Vue.createApp({

})
```

Exemple :

```
const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt'
        }
    }
})
```

### Monter l'app dans le DOM (index.html) :
```
<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>
```
### Afficher les données (index.html) :
```
<div id="app">
  <h1>{{ product }}</h1>
</div>
```
## Liaison d'attributs
### v-bind

```
<!-- Ajouter une image (main.js) -->
const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt',
            image: './assets/images/t-shirt-bleu.png'
        }
    }
})
```
```
<!-- Ajouter une image (index.html) -->
<img v-bind:src="image">

ou

<img :src="image">
```
Comment fonctionne exactement la directive v-bind ? Nous utilisons cette directive pour lier dynamiquement un attribut à une expression. Dans ce cas, l’attribut est src et l’expression est ce qui se trouve dans les guillemets de cet attribut : image

### v-if & v-else, v-show
### v-show
Il convient de noter que vous n’avez pas toujours besoin de coupler v-if et v-else. Il existe de nombreux cas d’utilisation où vous n’avez pas besoin d’un élément de repli à rendre. Cependant, dans ces cas, il est parfois préférable d’utiliser la directive v-show.
```
<!-- Ajouter des conditions (index.html) -->
<p v-show="inStock">En stock</p>
```
La directive v-show est utilisée pour faire basculer la visibilité d’un élément au lieu d’ajouter et de supprimer l’élément du DOM entièrement, comme le fait v-if.
### v-if & v-else
```
<!-- Ajouter des conditions (main.js) -->
const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt',
            image: './assets/images/t-shirt-bleu.png',
            inStock: true
        }
    }
})
```
```
<!-- Ajouter des conditions (index.html) -->
<p v-if="inStock">En stock</p>
<p v-else>En rupture</p>
```
### Logique conditionnelle chaînée
Plus tôt, nous avons examiné le v-if avec le v-else, maintenant regardons comment nous pouvons ajouter du code supplémentaires de logique conditionnelle.

Pour ce faire, nous allons remplacer inStock par inventory :
```
<!-- Logique conditionnelle chaînée (main.js) -->
const app = Vue.createApp({
    data() {
        return {
            ...
            inventory: 100 
    }
```
Puisque notre condition (inventory) est maintenant un nombre entier, nous pouvons utiliser une logique un peu plus complexe dans notre expression. Par exemple :
```
<!-- Logique conditionnelle chaînée (index.html) -->
<p v-if="inventory > 10">En stock</p>
<p v-else>En rupture</p>
```
ou pour aller encore plus loin :
```
<!-- Logique conditionnelle chaînée (index.html) -->
<p v-if="inventory > 10">En stock</p>
<p v-else-if="inventory <= 10 && inventory > 0">Presque en rupture!</p>
<p v-else>En rupture</p>
```
La directive v-else-if nous donne une couche intermédiaire de logique. Ainsi, dans cet exemple, si le stock est de 8, cette balise p sera rendue.

Bien sûr, si le stock est nul, nous passerons au dernier niveau de v-else et afficherons « En rupture ».
### v-for
```
<!-- Les boucles (main.js) -->
const app = Vue.createApp({
    data() {
        return {
            ...
            details: ['60% coton', '30% laine', '10% polyester'] 
    }
```
```
<!-- Les boucles (index.html) -->
<ul>
<li v-for="detail in details">{{ detail }}</li>
</ul>
```
Pour nous familiariser avec le rendu de liste avec v-for, nous allons travailler sur un autre exemple dans notre application. Ajoutons un nouveau tableau de variantes à nos données :
```
<!-- Les boucles (main.js) -->
const app = Vue.createApp({
    data() {
        return {
            ...
            variants: [
                { id: 2234, color: 'Bleu' },
                { id: 2235, color: 'Rouge' }
            ] 
    }
```
Nous avons maintenant un tableau qui contient un objet pour chaque déclinaison de notre produit. Chaque déclinaison du produit a un id, et une couleur. Ainsi, pour notre prochaine tâche, nous allons afficher chaque couleur de notre déclinaison, et utiliser l’id pour aider Vue à garder la trace des éléments de notre liste.
```
<!-- Les boucles (index.html) -->
<div v-for="variant in variants" :key="variant.id">{{ variant.color }}</div>
```
En disant :key="variant.id", nous utilisons l’abréviation de v-bind pour lier l’id de la variante à l’attribut key. Cela donne à chaque élément du DOM une clé unique afin que Vue puisse s’accrocher à l’élément et ne pas en perdre la trace au fil des mises à jour de l’application.