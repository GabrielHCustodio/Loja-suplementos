import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/components/componentsUser/Login.vue'
import Products from '@/views/Products.vue'
import Register from '@/components/componentsUser/Register.vue'
import Shopping from '@/views/Shopping.vue'
import User from '@/views/User.vue'

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
    name: 'user',
    component: User,
    children: [
      {
        path: '/user/login', 
        name: 'login',
        component: Login

      },
      {
        path: '/user/register', 
        name: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/talk',
    name: 'talk'
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: Shopping
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
