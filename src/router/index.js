import Vue from 'vue'
import VueRouter from 'vue-router'
import PokemonList from '../views/PokemonList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
