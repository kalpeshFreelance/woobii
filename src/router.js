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
import PageNotFound from './components/page/404'

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
      path: '/newsroom/:slug',
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
      path: '/Kirchenfinder/:slug',
      name: 'KitrchenFinderLocation',
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
      path: '/Kirchenfinder',
      name: 'kitrchenfinder',
      component: KitrchenFinder
    /*  children: [
        {
           path: '/kitrchenFinderdetail',
           name: 'kitrchenFinderdetail',
           component: KitrchenFinderLocation
        }
      ] */
    },
    {
      path: '*',
      name: '404',
      component: PageNotFound
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
