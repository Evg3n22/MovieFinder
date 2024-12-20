import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Info from '@/pages/Info.vue'
import Result from '@/pages/Result.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/info/:id',
      name: 'info',
      component: Info,
    },
    {
      path: '/result',
      name: 'result',
      component: Result,
    },
  ],
})

export default router
