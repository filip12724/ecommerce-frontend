import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ShopView from '@/views/ShopView.vue'
import ProductView from '@/views/ProductView.vue'

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
  },
  {
    path:'/product:id',
    name:'product',
    component:ProductView,
    props: true
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
