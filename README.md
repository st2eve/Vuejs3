# Vuejs3

## Créer une application Vue (main.js):

```const app = Vue.createApp({

})```

Exemple :

const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt'
        }
    }
})

### Monter l'app dans le DOM (index.html) :

<!-- Mount App -->
<script>
  const mountedApp = app.mount('#app')
</script>

### Afficher les données (index.html) :

<div id="app">
  <h1>{{ product }}</h1>
</div>

## Liaison d'attributs

