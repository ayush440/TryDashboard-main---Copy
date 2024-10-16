import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Strategy from '../views/Strategy.vue'
import Broker from '../views/Broker.vue'
import Order from '../views/Orders.vue'
import Positions from '../views/Positions.vue'
import Tutorials from '../views/Tutorials.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/strategy',
    name: 'Strategy',
    component: Strategy
  },
  {
    path: '/broker',
    name: 'Broker',
    component: Broker
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/orders',  
    name: 'Order',
    component: Order
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/positions',
    name: 'Positions',
    component: Positions
  },
  {
    path: '/tutorials',
    name: 'Tutorials',
    component: Tutorials
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router