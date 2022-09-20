const app = Vue.createApp({
    data() {
        return {
            product: 'T-Shirt',
            image: './assets/images/t-shirt-bleu.png',
            inventory: 100,
            details: ['60% coton', '30% laine', '10% polyester'],
            variants: [
                { id: 2234, color: 'Bleu' },
                { id: 2235, color: 'Rouge' }
            ]
        }
    }
})