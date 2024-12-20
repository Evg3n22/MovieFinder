import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import Carousel from 'primevue/carousel';
import { createPinia } from 'pinia'
import ('bootstrap/dist/css/bootstrap.min.css')

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component('VCarousel', Carousel)


app.mount('#app')
