import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: "/bbk",
      children: [
        {
          path: '/bbk',
          name: 'bbk',
          component: () => import('@/views/Bbk.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/About.vue')
        },
        {
          path: '/adServing',
          name: 'adServing',
          component: () => import('@/views/adServing.vue')
        }
      ]
    },

  ]
})
