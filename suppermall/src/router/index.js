import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = ()=> import('views/home/Home.vue')
const Play = ()=> import('views/play/Play.vue')
const Find = ()=> import('views/find/Find.vue')
const User = ()=> import('views/user/User.vue')
const Detail = ()=> import('views/details/detail.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/play', 
    name: 'Play', 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Play
  },
  {
    path: '/find', 
    name: 'Find', 
    component: Find, 
  },
  {
    path: '/user', 
    name: 'User', 
    component: User
  },
  {
    path: '/detail/:iid', 
    name: 'Detail', 
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
