import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'

import PrimeVue from 'primevue/config'
import Carousel from 'primevue/carousel';

// import 'primevue/resources/themes/saga-blue/theme.css'; // Тема (замість saga-blue можна використати іншу тему)
// import 'primevue/resources/primevue.min.css'; // Основний CSS PrimeVue
// import 'primeicons/primeicons.css'; // Іконки PrimeIcons

import { createPinia } from 'pinia'
import ('bootstrap/dist/css/bootstrap.min.css')

const app = createApp(App)
const pinia = createPinia()

app.component('VCarousel', Carousel);

app.use(router)
app.use(pinia)
app.use(PrimeVue)
// app.component('VCarousel', Carousel)

app.mount('#app')
