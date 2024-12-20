import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router.js'
import Carousel from 'primevue/carousel';
import ('bootstrap/dist/css/bootstrap.min.css')

const app = createApp(App)
app.use(router)
app.component('VCarousel', Carousel)
app.mount('#app')
