import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path:'/shop',
    name:'shop',
    component:ShopView
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
