import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FormPasteles from '../views/FormPasteles.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tienda',
    name: 'tienda',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Tienda.vue')
  },
  {
    path: '/pedido/:armarPastel',
    name: 'pedido',
    component: FormPasteles,
    props: (route) => ({ armarPastel: (String(route.params.armarPastel).toLowerCase() === 'true') })
    // props: (route) => ({ armarPastel: route.query.armarPastel })

  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
