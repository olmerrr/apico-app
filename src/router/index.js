import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    meta: {layout:'auth'},
    component: () => import('@/views/Login.vue')

  },
  {
    path: '/registration',
    name: 'Registration',
    meta: {layout:'auth'},
    component: () => import('@/views/Registration.vue')

  },
  {
    path: '/sell',
    name: 'Sell',
    meta: {layout:'default'},
    component: () => import('@/views/Sell.vue')
  },
  {
    path: '/home',
    name: 'Home',
    meta: {layout:'default'},
    component: () => import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
