import Vue from 'vue'
import Router from 'vue-router'
import Home1 from './components/page/Home.vue'
//import Home from './views/Home.vue'
import NewsRoom from './components/page/NewsRoom'
import MediaPartner from './components/page/MediaPartner'
import NewsRoomDetail from './components/page/NewsRoomDetail'
import Solution from './components/page/Solution'
import KitrchenFinder from './components/page/KirchenFinder'
import KitrchenFinderLocation from './components/page/KirchenFinderLocation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home1
    },
    {
      path: '/newsroom',
      name: 'newsroom',
      component: NewsRoom
    /*  children: [
        {
           path: '/mediapartnerdetail',
           name: 'mediapartnerdetail',
           component: MediaPartnerDetail
        }
      ]*/
    },
    {
      path: '/newsroomDetail',
      name: 'newsroomDetail',
      component: NewsRoomDetail
    },
    {
      path: '/solution',
      name: 'solution',
      component: Solution
    },
    {
      path: '/mediapartner',
      name: 'mediapartner',
      component: MediaPartner
    },
    {
      path: '/kitrchenfinder',
      name: 'kitrchenfinder',
      component: KitrchenFinderLocation
    /*  children: [
        {
           path: '/kitrchenFinderdetail',
           name: 'kitrchenFinderdetail',
           component: KitrchenFinderLocation
        }
      ] */
    },
    {
      path: '/kitrchenfinderLocation',
      name: 'kitrchenfinderlocation',
      component: KitrchenFinder
    /*  children: [
        {
           path: '/kitrchenFinderdetail',
           name: 'kitrchenFinderdetail',
           component: KitrchenFinderLocation
        }
      ] */
    }
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ /*'./views/About.vue') 
    } */
  ]
})
