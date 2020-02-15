import Vue from 'vue'
import VueRouter from 'vue-router'
import Overview from '../views/Overview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/expensinglimit',
    name: 'ExpensingLimit',
    component: () => import('../views/ExpensingLimit.vue')
  },
  {
    path: '/notebook',
    name: 'Notebook',
    component: () => import('../views/Notebook.vue')
  },
  {
    path: '/other',
    name: 'Other',
    component: () => import('../views/Other.vue')
  },
  {
    path: '/statistic',
    name: 'Statistic',
    component: () => import('../views/Statistic.vue')
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import('../views/Wallet.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
