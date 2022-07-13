import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
    children: [
      {
        path: '/products/muscle',
        name: 'muscle'
      },
      {
        path: '/products/fight',
        name: 'fight'
      },
      {
        path: '/products/race',
        name: 'race'
      }
    ]
  },
  {
    path: '/user',
    name: 'user'
  },
  {
    path: '/talk',
    name: 'talk'
  },
  {
    path: '/shopping',
    name: 'shopping'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
