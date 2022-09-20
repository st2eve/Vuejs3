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
