import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Uebersicht from '@/views/Uebersicht'
import Rechnung from '@/views/Rechnung'
import Firmen from '@/views/Firmen'
import FirmenUebersicht from '@/views/FirmenUebersicht'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/uebersicht',
    name: 'Uebersicht',
    component: Uebersicht
  },
  {
    path: '/rechnung',
    name: 'Rechnung',
    component: Rechnung
  },
  {
    path: '/firmen',
    name: 'Firmen',
    component: Firmen
  },
  {
    path: '/firmenUebersicht',
    name: 'Firmen Übersicht',
    component: FirmenUebersicht
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  routes
})

export default router
